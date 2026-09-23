import { properties } from "./immobilien";
import ImmobilienGalerie from "./ImmobilienGalerie";

const TARGET_CARDS = 3;

function uniqueProperties() {
  // Der Listing-Link enthaelt die Evernest-ID und ist damit der exakte
  // Schluessel; frueher wurde ueber place|price|image verglichen.
  const unique = new Map<string, (typeof properties)[number]>();
  for (const property of properties) unique.set(property.url, property);
  return [...unique.values()];
}

export function leverkusenOfferCount() {
  return uniqueProperties().filter((property) => property.place.startsWith("Leverkusen-")).length;
}

export default function DistrictOffers({ slug, district }: { slug: string; district: string }) {
  const all = uniqueProperties();
  // Aktive Angebote zuerst, verkaufte und reservierte dahinter — innerhalb
  // beider Gruppen bleibt die Reihenfolge der Datei erhalten (Entfernung zum
  // Leverkusener Kartenmittelpunkt aufsteigend).
  const active = (list: typeof properties) => [...list.filter((p) => !p.status), ...list.filter((p) => p.status)];
  const local = active(all.filter((property) => property.district === slug));
  // Jede Stadtteilseite zeigt drei Karten. Hat der Stadtteil selbst weniger,
  // wird aus dem Umkreis aufgefuellt.
  const filler = active(all.filter((property) => property.district !== slug));
  const offers = [...local, ...filler].slice(0, TARGET_CARDS);

  const heading = local.length ? `Immobilien in ${district}` : "Angebote aus Leverkusen und Umkreis";
  const note = local.length >= TARGET_CARDS
    ? `Evernest-Angebote mit der Lageangabe Leverkusen-${district}.`
    : local.length
      ? `${local.length === 1 ? "Ein Angebot" : `${local.length} Angebote`} mit der Lageangabe Leverkusen-${district}, ergänzt um die nächstgelegenen Objekte im Umkreis.`
      : `Derzeit ist in ${district} kein eigenes Angebot in der Evernest-Suche geführt. Hier sehen Sie die nächstgelegenen Immobilien im Umkreis.`;

  return (
    <section className="properties section district-offers" id="angebote">
      <div className="section-head">
        <div>
          <p className="eyebrow">Immobilienangebote & Referenzen</p>
          <h2>{heading}</h2>
        </div>
        <p>{note}</p>
      </div>
      <ImmobilienGalerie items={offers} moreLink={false} />
      <p className="listing-more"><a className="button dark" href="https://evernest.com/de/search/?lat=51.083462&lng=7.017159&zoom=11" target="_blank" rel="noreferrer">Alle Immobilien im Umkreis ansehen</a></p>
    </section>
  );
}
