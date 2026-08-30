import type { Metadata } from "next";
import BewertungsForm from "./BewertungsForm";
import { breadcrumbSchema, businessId, businessSchema, defaultImage, faqSchema, graphSchema, siteUrl } from "../seo";

const url = `${siteUrl}/immobilienbewertung/`;
const faqs: Array<[string,string]> = [
  ["Was ist meine Immobilie in Leverkusen wert?", "Der Immobilienwert hängt von Adresse, Stadtteil, Objektart, Flächen, Grundstück, Baujahr, Zustand, Nutzung und weiteren Merkmalen ab. Die Online-Bewertung liefert eine unverbindliche Ersteinschätzung und ersetzt keine Besichtigung."],
  ["Woher stammen die Zahlen?", "Aus dem Grundstücksmarktbericht der Stadt Leverkusen 2026 für das Berichtsjahr 2025: Durchschnittspreise für Eigentumswohnungen und Einfamilienhäuser, gebietstypische Bodenrichtwerte, Umrechnungskoeffizienten für die Grundstücksgröße und Rohertragsfaktoren zum Stichtag 1. Januar 2026."],
  ["Was beeinflusst den Wohnungswert?", "Neben Lage, Fläche, Baujahr und Zustand sind Etage, Balkon, Aufzug, Stellplatz, Hausgeld, Instandhaltungsrücklage, Gemeinschaftseigentum und gegebenenfalls die Mietsituation relevant. Wohnungen in Großwohnanlagen mit mehr als fünf Vollgeschossen bilden in Leverkusen einen eigenen Teilmarkt."],
  ["Ist der Bodenrichtwert der Grundstückswert?", "Nein. Der Bodenrichtwert ist ein amtlicher Orientierungswert für ein typisches Grundstück innerhalb einer Zone. Baurecht, Zuschnitt, Erschließung, Topografie und weitere Eigenschaften können den konkreten Grundstückswert verändern."],
];

export const metadata:Metadata={
  title:"Immobilienbewertung Leverkusen | Hauswert & Wohnungswert",
  description:"Kostenlose Immobilienbewertung Leverkusen: erste Einschätzung für Hauswert, Wohnungswert, Immobilienwert und Grundstückswert auf Basis des Grundstücksmarktberichts 2026.",
  alternates:{canonical:url},
  openGraph:{title:"Immobilienbewertung Leverkusen | Stark & Hoffmann",description:"Haus, Wohnung oder Grundstück in Leverkusen kostenlos einschätzen.",url,images:[{url:defaultImage,alt:"Immobilienbewertung Leverkusen"}]},
  twitter:{card:"summary_large_image",title:"Immobilienbewertung Leverkusen",description:"Hauswert, Wohnungswert und Grundstückswert kostenlos einschätzen.",images:[defaultImage]},
};

export default function BewertungPage(){
  const schema=graphSchema(
    businessSchema,
    {"@type":"Service","@id":`${url}#service`,name:"Immobilienbewertung Leverkusen",serviceType:"Immobilienbewertung",provider:{"@id":businessId},areaServed:{"@type":"City",name:"Leverkusen"},url},
    breadcrumbSchema([{name:"Startseite",url:`${siteUrl}/`},{name:"Immobilienbewertung",url}]),
    faqSchema(faqs),
  );
  return <main className="bewertung-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
    <header className="site-header"><a className="brand" href="/"><span className="brand-mark">S<span>&amp;</span>H</span><span><strong>Stark &amp; Hoffmann</strong><small>Immobilien · Leverkusen</small></span></a><nav aria-label="Seitennavigation"><a href="#bewertung">Bewertung</a><a href="#wertfaktoren">Wertfaktoren</a><a href="#faq">FAQ</a></nav><a className="header-phone" href="tel:+4922049147881">+49 2204 914 7881</a></header>
    <section className="tool-hero"><p className="eyebrow light">Unverbindlich &amp; kostenfrei · Leverkusen</p><h1>Immobilienbewertung Leverkusen</h1><p>Ermitteln Sie eine erste Preisspanne für Haus, Wohnung, Mehrfamilienhaus oder Grundstück. Straße, Postleitzahl und Stadtteil werden über das Leverkusener Straßenverzeichnis und die amtlichen Stadtteilgrenzen zugeordnet.</p></section>
    <section className="tool-section section" id="bewertung"><BewertungsForm/></section>
    <section className="answer-section section" id="wertfaktoren"><p className="eyebrow">Hauswert · Wohnungswert · Grundstückswert</p><h2>Was bestimmt den Immobilienwert in Leverkusen?</h2><p className="lead">Eine belastbare Einschätzung verbindet die konkrete Mikrolage mit Objektart, Flächen, Grundstück, Baujahr, Zustand, Nutzung und Energieeffizienz. Der Bodenrichtwert ist bei Grundstücken ein Ausgangspunkt, aber niemals allein der Verkaufspreis.</p><div className="valuation-links"><a href="/haus-verkaufen-leverkusen/">Haus verkaufen →</a><a href="/wohnung-verkaufen-leverkusen/">Wohnung verkaufen →</a><a href="/grundstueck-verkaufen-leverkusen/">Grundstück verkaufen →</a></div><p className="calculation-note">Die Online-Ausgabe ist eine unverbindliche Ersteinschätzung auf Basis stadtweiter Durchschnittswerte und ersetzt weder Besichtigung noch individuelle Prüfung.</p></section>
    <section className="faq-section section" id="faq"><div className="section-head"><div><p className="eyebrow">Häufige Bewertungsfragen</p><h2>Preis und Wert richtig einordnen.</h2></div><p>Kurze Antworten für Eigentümer in Leverkusen und allen 13 Stadtteilen.</p></div><div className="faq-grid">{faqs.map(([question,answer])=><details className="faq-item" key={question}><summary>{question}<span>+</span></summary><div><p>{answer}</p></div></details>)}</div></section>
    <footer><div className="footer-brand"><span className="brand-mark">S<span>&amp;</span>H</span><div><strong>Stark &amp; Hoffmann Immobilien</strong><small>Evernest Lizenzpartner Leverkusen</small></div></div><div><h4>Kontakt</h4><p>Wiesdorfer Platz 19<br/>51373 Leverkusen</p><a href="tel:+4922049147881">+49 2204 914 7881</a><a href="mailto:leverkusen@evernest.com">leverkusen@evernest.com</a></div><div><h4>Verkaufen</h4><a href="/haus-verkaufen-leverkusen/">Haus</a><a href="/wohnung-verkaufen-leverkusen/">Wohnung</a><a href="/grundstueck-verkaufen-leverkusen/">Grundstück</a></div><div><h4>Rechtliches</h4><a href="/impressum/">Impressum</a><a href="/datenschutz/">Datenschutz</a><a href="/team/">Team</a></div></footer>
  </main>;
}
