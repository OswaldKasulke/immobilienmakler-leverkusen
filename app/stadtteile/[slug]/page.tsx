import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { districtBySlug, districts } from "../../stadtteile";
import { streets } from "../../strassen";
import DistrictOffers from "../../DistrictOffers";
import { districtImages } from "../../district-images";
import { breadcrumbSchema, businessSchema, defaultImage, faqSchema, graphSchema, siteUrl } from "../../seo";

export function generateStaticParams(){ return districts.map(({slug})=>({slug})); }

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params; const district=districtBySlug(slug);
  if(!district) return {};
  const image=districtImages[slug];
  return {
    title:`Immobilienmakler ${district.name} | Bodenrichtwert & Bewertung`,
    description:`Makler ${district.name}: Immobilienbewertung, Immobilienverkauf und amtliche Informationen zum Bodenrichtwert ${district.name} in Leverkusen.`,
    alternates:{canonical:`https://leverkusen-makler.de/stadtteile/${district.slug}/`},
    openGraph:{title:`Immobilienmakler ${district.name} | Stark & Hoffmann`,description:`Immobilienbewertung und Bodenrichtwert ${district.name} – lokale Beratung in Leverkusen.`,url:`https://leverkusen-makler.de/stadtteile/${district.slug}/`,images:[image?.src || defaultImage]},
    twitter:{card:"summary_large_image",images:[image?.src || defaultImage]},
  };
}

export default async function DistrictPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params; const district=districtBySlug(slug); if(!district) notFound();
  const image=districtImages[slug];
  const position=districts.findIndex((item)=>item.slug===slug); const nearby=[districts[(position+districts.length-1)%districts.length],districts[(position+1)%districts.length]];
  const districtStreets=streets.filter((street)=>street.ranges.some((range)=>range[3]===district.name));
  const url=`${siteUrl}/stadtteile/${district.slug}/`;
  const districtFaq=[
    {question:`Was ist eine Immobilie in ${district.name} wert?`,answer:`Der Wert eines Hauses, einer Wohnung oder eines Grundstücks in Leverkusen-${district.name} hängt von Mikrolage, Größe, Baujahr, Zustand, Energieeffizienz und der konkreten Bodenrichtwertzone ab. Eine belastbare Einschätzung benötigt deshalb die genaue Adresse und Objektdaten.`},
    {question:`Wie verkaufe ich ein Haus oder eine Wohnung in ${district.name}?`,answer:`Am Anfang stehen Wertermittlung und Unterlagenprüfung. Danach folgen Vermarktungsstrategie, Exposé, Interessentenprüfung, Besichtigungen, Verhandlung und notarielle Abwicklung. Stark & Hoffmann begleitet den Verkauf persönlich.`},
    {question:`Ist der Bodenrichtwert der Grundstückspreis in ${district.name}?`,answer:`Nein. Der Bodenrichtwert ist ein amtlicher Orientierungswert für eine Zone. Zuschnitt, Nutzung, Erschließung und Eigenschaften des konkreten Grundstücks können den erzielbaren Preis deutlich verändern.`},
  ];
  const structuredData=graphSchema([
    businessSchema,
    {"@type":"Service","@id":`${url}#service`,name:`Immobilienmakler und Immobilienbewertung ${district.name}`,provider:{"@id":"https://leverkusen-makler.de/#unternehmen"},areaServed:{"@type":"Place",name:`Leverkusen-${district.name}`},url},
    breadcrumbSchema([{name:"Startseite",url:siteUrl},{name:"Stadtteile",url:`${siteUrl}/#stadtteile`},{name:district.name,url}]),
    faqSchema(districtFaq),
  ]);
  return <main className="district-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}} />
    <header className="site-header"><a className="brand" href="/"><span className="brand-mark">S<span>&</span>H</span><span><strong>Stark & Hoffmann</strong><small>Immobilien · Leverkusen</small></span></a><nav aria-label="Seitennavigation"><a href="/#profil">Profil</a><a href="/#fahrplan">Verkaufsfahrplan</a><a href="/#immobilien">Immobilien</a><a href="/#staedte">Stadtteile</a></nav><a className="header-cta" href="#kontakt">Kostenlose Bewertung</a></header>
    <section className="district-hero" style={image?{backgroundImage:`linear-gradient(90deg,rgba(0,0,0,.72),rgba(0,0,0,.1)),url(${image.src})`,backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}:undefined}><div><p className="eyebrow light">Makler {district.name}</p><h1>Immobilienmakler {district.name}</h1><p>Immobilien verkaufen und bewerten – mit persönlicher Beratung durch den Standort Leverkusen.</p><a className="button gold" href="#kontakt">Immobilienbewertung {district.name}</a></div>{image&&<a className="district-photo-credit" href={image.source} target="_blank" rel="noreferrer">Quelle: Wikipedia ↗</a>}</section>
    <section className="district-intro section"><div><p className="eyebrow">Stadtteilprofil</p><h2>{district.name} im Porträt</h2><p className="lead">{district.profile}</p><p>Für eine Immobilienbewertung werden neben der konkreten Lage auch Grundstück, Baujahr, Zustand, Nutzung und Energieeffizienz betrachtet.</p></div><aside><span>Amtliche Zuordnung</span><strong>Bezirk {district.code}</strong><span>Stadtteil</span><strong>{district.name}</strong></aside></section>
    <DistrictOffers district={district.name} />
    <section className="street-directory section" id="strassen"><p className="eyebrow">Straßenverzeichnis</p><h2>Alle Straßen in Leverkusen-{district.name}</h2><p>Sie besitzen eine Immobilie in einer dieser {districtStreets.length} Straßen? Ein Klick auf den Straßennamen öffnet die kostenlose Immobilienbewertung mit vorausgewählter Adresse.</p><details><summary>Straßenverzeichnis {district.name} anzeigen ({districtStreets.length} Straßen)</summary><div className="district-street-grid">{districtStreets.map((street)=><div className="district-street" key={street.name}><a href={`/immobilienbewertung/?street=${encodeURIComponent(street.name)}`}>{street.name}<span>Bewertung starten →</span></a><a className="map-link" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${street.name}, Leverkusen`)}`} target="_blank" rel="noreferrer" aria-label={`${street.name} auf Google Maps anzeigen`}>⌖</a></div>)}</div></details></section>
    <section className="brw section" id="bodenrichtwert"><div className="section-head"><div><p className="eyebrow light">Bodenrichtwert {district.name}</p><h2>Bodenrichtwert {district.name}: amtliche Werte zum 01.01.2026.</h2></div><p>Der Gutachterausschuss hat für Leverkusen 337 Bodenrichtwerte für Bauland ermittelt. Maßgeblich bleibt deshalb die Zone der konkreten Adresse.</p></div>
      {district.brw ? <div className="district-range"><span>Bodenwertspanne für Ein- und Zweifamilienhäuser</span><strong>{district.brw} €/m²</strong><p>Im Grundstücksmarktbericht 2026 ausgewiesen für: {district.brwGroup}.</p></div> : <div className="district-range no-value"><span>Ein- und Zweifamilienhäuser in {district.name}</span><strong>Keine eigene Stadtteilspanne veröffentlicht</strong><p>Der Grundstücksmarktbericht 2026 nennt für {district.name} keine separate Bodenwertspanne. Der amtliche Wert ist daher ausschließlich adressgenau über BORIS-NRW abrufbar.</p></div>}
      <h3 className="table-title">Gebietstypische Bodenrichtwerte Leverkusen</h3><div className="brw-table-wrap"><table className="brw-table"><thead><tr><th>Unbebaute Grundstücke</th><th>Gute Lage</th><th>Mittlere Lage</th><th>Einfache Lage</th></tr></thead><tbody><tr><td>Freistehende Ein- und Zweifamilienhäuser</td><td>550 €/m²</td><td>470 €/m²</td><td>420 €/m²</td></tr><tr><td>Doppelhaushälften und Reihenendhäuser</td><td>580 €/m²</td><td>510 €/m²</td><td>440 €/m²</td></tr><tr><td>Reihenmittelhäuser</td><td>600 €/m²</td><td>520 €/m²</td><td>450 €/m²</td></tr></tbody></table></div>
      <div className="source-note"><p><strong>Stichtag 01.01.2026.</strong> Die Werte gelten für baureife, erschließungs- und kanalanschlussbeitragsfreie Grundstücke. Lage, Grundstücksgröße und -tiefe, Bodenbeschaffenheit, bauliche Nutzung und Erschließungszustand können zu erheblichen Abweichungen führen.</p><div><a className="button gold" href="https://www.boris.nrw.de/" target="_blank" rel="noreferrer">Adresse in BORIS-NRW prüfen ↗</a><a className="source-link light" href="https://www.gars.nrw/images/user/GA_Leverkusen/pdf/GMB_11600_2026.pdf" target="_blank" rel="noreferrer">Quelle: Grundstücksmarktbericht Leverkusen 2026, Kap. 4.7, S. 28–33 ↗</a></div></div>
    </section>
    <section className="valuation section"><p className="eyebrow">Immobilienbewertung {district.name}</p><h2>Der Bodenrichtwert {district.name} ist nur ein Teil der Bewertung.</h2><div className="valuation-grid"><p>Als Makler in {district.name} berücksichtigen wir zusätzlich Art und Maß der baulichen Nutzung, Bodenbeschaffenheit, Erschließungszustand und Grundstücksgestaltung. Diese Merkmale können zu einem vom Bodenrichtwert abweichenden Grundstückswert führen.</p><ul><li>Konkrete Bodenrichtwertzone</li><li>Art und Maß der baulichen Nutzung</li><li>Bodenbeschaffenheit und Erschließung</li><li>Zuschnitt und Gestaltung des Grundstücks</li></ul></div></section>
    <section className="faq-section section"><div className="section-head"><div><p className="eyebrow">Kurz beantwortet</p><h2>Haus, Wohnung oder Grundstück in {district.name} verkaufen.</h2></div><p>Antworten für Eigentümer in Leverkusen-{district.name}.</p></div><div className="faq-grid">{districtFaq.map(item=><details className="faq-item" key={item.question}><summary>{item.question}<span>+</span></summary><div><p>{item.answer}</p></div></details>)}</div></section>
    <section className="nearby section"><p className="eyebrow">Weitere Stadtteile</p><div>{nearby.map(item=><a href={`/stadtteile/${item.slug}/`} key={item.slug}><span>Immobilienmakler</span><strong>{item.name}</strong><b>→</b></a>)}</div></section>
    <section className="district-contact section" id="kontakt"><div><p className="eyebrow light">Kostenlose Erstberatung</p><h2>Immobilienbewertung in {district.name}</h2><p>Unverbindliche Anfrage an unser Team in Leverkusen.</p></div><div><a className="button gold" href={`/immobilienbewertung/?ort=${encodeURIComponent(`Leverkusen-${district.name}`)}#bewertung`}>Bewertung anfragen</a><a href="tel:+4922049147881">+49 2204 914 7881</a></div></section>
    <footer><div className="footer-brand"><span className="brand-mark">S<span>&</span>H</span><div><strong>Stark & Hoffmann Immobilien</strong><small>Evernest Lizenzpartner Leverkusen</small></div></div><div><h4>Kontakt</h4><p>Wiesdorfer Platz 19<br/>51373 Leverkusen</p><a href="tel:+4922049147881">+49 2204 914 7881</a><a href="mailto:leverkusen@evernest.com">leverkusen@evernest.com</a></div><div><h4>Quellen</h4><a href="https://www.boris.nrw.de/">BORIS-NRW</a><a href="https://gars.nrw/leverkusen/produkte-lev/bodenrichtwerte-lev">Gutachterausschuss</a></div><div><h4>Rechtliches</h4><a href="/impressum/">Impressum</a><a href="/datenschutz/">Datenschutz</a><p>Bodenrichtwerte sind Orientierungswerte und keine Verkehrswerte.</p></div></footer>
  </main>;
}
