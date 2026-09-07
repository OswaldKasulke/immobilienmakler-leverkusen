/**
 * update-listings.mjs
 * Holt die Evernest-Objekte im Leverkusener Kartenausschnitt per POST auf
 * https://www.evernest.com/api/properties/ und schreibt daraus app/immobilien.ts.
 *
 * Bis zum 07.09.2026 war diese Datei ein von Hand gezogener Stand vom
 * 30.08.2026. Neue Objekte tauchten dadurch weder in der Startseiten-Galerie
 * noch auf den Stadtteilseiten auf. Das Muster stammt von romanbecker.de
 * (roman/scripts/update-listings.mjs), laeuft hier taeglich ueber
 * .github/workflows/update-listings.yml.
 *
 * Reihenfolge und Zuschnitt bleiben wie in der Handfassung dokumentiert:
 * Entfernung zum Kartenmittelpunkt aufsteigend, die MAX_LISTINGS naechsten
 * Objekte. Der Mittelpunkt ist derselbe, den der Button "Alle Immobilien im
 * Umkreis ansehen" oeffnet.
 *
 * Aufruf:  node scripts/update-listings.mjs [--dry]
 */

import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ZIEL = join(__dirname, '..', 'app', 'immobilien.ts');
const STADTTEILE = join(__dirname, '..', 'app', 'stadtteile.ts');

const API = 'https://www.evernest.com/api/properties/';
const UA = 'Mozilla/5.0 (compatible; LeverkusenMaklerSite/1.0)';
const IMG_PARAMS = '?w=960&h=600&fit=fill&fm=webp&q=82';

// Kartenmittelpunkt lat 51.083462 / lng 7.017159, zoom 11 — identisch zu dem
// Ausschnitt, den der "Alle Immobilien im Umkreis"-Button oeffnet.
const CENTER = { lat: 51.083462, lng: 7.017159 };
// Der Kasten ist bewusst groesser als der sichtbare Ausschnitt: Sortierung und
// Deckelung nach Entfernung bestimmen das Ergebnis, ein zu enger Kasten wuerde
// nur naheliegende Objekte am Rand verlieren.
const BOUNDS = {
  nw: { lat: 51.35, lng: 6.60 },
  ne: { lat: 51.35, lng: 7.45 },
  sw: { lat: 50.85, lng: 6.60 },
  se: { lat: 50.85, lng: 7.45 },
};
const MAX_LISTINGS = 30;
// Unter dieser Zahl stimmt etwas mit der API nicht — dann lieber abbrechen und
// den letzten guten Stand stehen lassen, als die Galerie leer zu raeumen.
const MIN_PLAUSIBEL = 20;

const STATUS_TEXT = { sold: 'Verkauft', reserved: 'Reserviert' };

function slug(s) {
  return s.toLowerCase()
    .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function entfernungKm(a, b) {
  const rad = (d) => (d * Math.PI) / 180;
  const dLat = rad(b.lat - a.lat);
  const dLng = rad(b.lng - a.lng);
  const h = Math.sin(dLat / 2) ** 2 +
    Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(dLng / 2) ** 2;
  return 6371 * 2 * Math.asin(Math.sqrt(h));
}

// Die Stadtteilnamen kommen aus app/stadtteile.ts, damit Datei und Seiten nicht
// auseinanderlaufen. Evernest schreibt "Leverkusen-Bergisch-Neukirchen", die
// Seite heisst "Bergisch Neukirchen" — verglichen wird deshalb ueber den Slug.
async function stadtteile() {
  const quelle = await readFile(STADTTEILE, 'utf8');
  const treffer = [...quelle.matchAll(/slug:"([^"]+)",name:"([^"]+)"/g)];
  if (treffer.length === 0) throw new Error('Keine Stadtteile in app/stadtteile.ts gefunden');
  return new Map(treffer.map(([, s, name]) => [s, name]));
}

function preis(item) {
  const daten = item.exportedPropertyData?.data ?? {};
  const wert = daten.priceFrom ?? daten.price ?? null;
  if (item.hidePrice || wert == null) return 'Preis auf Anfrage';
  const formatiert = `${Number(wert).toLocaleString('de-DE')} €`;
  return daten.priceFrom != null ? `ab ${formatiert}` : formatiert;
}

function aufbereiten(item, bezirke) {
  const id = item.sys?.id;
  const bild = item.featuredImage?.url;
  if (!id || !bild || item.lat == null || item.lng == null) return null;

  const adresse = (item.displayAddress ?? '').split(',')[0].trim();
  if (!adresse) return null;

  // "Leverkusen-Bergisch-Neukirchen" → Slug "bergisch-neukirchen"
  let district = null;
  let ort = adresse;
  if (adresse.startsWith('Leverkusen-')) {
    const kandidat = slug(adresse.slice('Leverkusen-'.length));
    if (bezirke.has(kandidat)) {
      district = kandidat;
      ort = `Leverkusen-${bezirke.get(kandidat)}`;
    }
  }

  return {
    place: ort,
    district,
    price: preis(item),
    status: STATUS_TEXT[item.salesStatus] ?? '',
    image: `${bild}${IMG_PARAMS}`,
    alt: item.featuredImage?.description || `Immobilienangebot in ${ort}`,
    url: `https://www.evernest.com/de/listing/${id}/`,
    _km: entfernungKm(CENTER, { lat: item.lat, lng: item.lng }),
  };
}

function datei(objekte, stand) {
  const eintraege = objekte.map((o) => {
    const { _km, ...rest } = o;
    return '  ' + JSON.stringify(rest, null, 2).split('\n').join('\n  ');
  }).join(',\n');

  return `export type Property = {
  /** Anzeigetext auf der Karte, z. B. "Leverkusen-Opladen" oder "Köln-Niehl". */
  place: string;
  /** Slug der Stadtteilseite, wenn das Objekt in einem liegt — sonst null. */
  district: string | null;
  price: string;
  status: string;
  image: string;
  alt: string;
  url: string;
};

// AUTOMATISCH ERZEUGT — nicht von Hand aendern.
// Quelle: Evernest-Immobiliensuche, Kartenausschnitt Leverkusen
// (lat ${CENTER.lat} / lng ${CENTER.lng}), abgerufen am ${stand}.
// Reihenfolge: Entfernung zum Kartenmittelpunkt aufsteigend, ${MAX_LISTINGS} naechste Objekte.
// Bildbeschreibungen stammen aus den Evernest-Objektdaten.
// Aktualisierung: scripts/update-listings.mjs, taeglich ueber
// .github/workflows/update-listings.yml.
export const properties: Property[] = [
${eintraege}
];
`;
}

async function main() {
  const dry = process.argv.includes('--dry');
  const bezirke = await stadtteile();

  const antwort = await fetch(API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'User-Agent': UA },
    body: JSON.stringify({ bounds: BOUNDS, preview: false }),
  });
  if (!antwort.ok) throw new Error(`Evernest-API HTTP ${antwort.status}`);

  const roh = (await antwort.json())?.searchResults ?? [];
  console.log(`API liefert ${roh.length} Objekte im Kasten`);
  if (roh.length < MIN_PLAUSIBEL) {
    throw new Error(`Nur ${roh.length} Objekte — unter der Plausibilitaetsgrenze von ${MIN_PLAUSIBEL}. Datei bleibt unveraendert.`);
  }

  const gesehen = new Set();
  const objekte = roh
    .map((item) => aufbereiten(item, bezirke))
    .filter((o) => o && !gesehen.has(o.url) && gesehen.add(o.url))
    .sort((a, b) => a._km - b._km)
    .slice(0, MAX_LISTINGS);

  const inLeverkusen = objekte.filter((o) => o.district);
  const jeBezirk = new Map();
  inLeverkusen.forEach((o) => jeBezirk.set(o.district, (jeBezirk.get(o.district) ?? 0) + 1));
  console.log(`${objekte.length} Objekte uebernommen, davon ${inLeverkusen.length} in Leverkusener Stadtteilen:`);
  [...jeBezirk].sort().forEach(([s, n]) => console.log(`  ${s}: ${n}`));
  const ohne = [...bezirke.keys()].filter((s) => !jeBezirk.has(s));
  if (ohne.length) console.log(`  ohne eigenes Objekt: ${ohne.join(', ')}`);

  const stand = new Date().toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' });
  const inhalt = datei(objekte, stand);

  if (dry) {
    console.log('\n--dry: app/immobilien.ts nicht geschrieben');
    return;
  }
  await writeFile(ZIEL, inhalt, 'utf8');
  console.log('\napp/immobilien.ts geschrieben');
}

main().catch((fehler) => {
  console.error('Abbruch:', fehler.message);
  process.exit(1);
});
