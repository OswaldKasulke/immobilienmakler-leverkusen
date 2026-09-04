import type { Metadata } from "next";
import BewertungsForm from "./BewertungsForm";
import { breadcrumbSchema, businessId, businessSchema, defaultImage, faqSchema, graphSchema, siteUrl } from "../seo";

const url = `${siteUrl}/immobilienbewertung/`;
const faqs: Array<[string,string]> = [
  ["Was ist meine Immobilie in Leverkusen wert?", "Der Rechner ordnet die vollständige Adresse einer amtlichen Immobilienrichtwertzone zu und passt deren Richtwert mit den veröffentlichten Modellmerkmalen an. Das Ergebnis ist eine unverbindliche Ersteinschätzung und ersetzt keine Besichtigung."],
  ["Woher stammen die Zahlen?", "Grundlage sind die Immobilienrichtwerte und Immobilienpreiskalkulator-Koeffizienten der örtlich zuständigen Gutachterausschüsse zum Stichtag 1. Januar 2026. Die eingegebene Adresse entscheidet, welches amtliche Modell gilt."],
  ["Wie wird der Wohnungswert ermittelt?", "Ausgangspunkt ist der Immobilienrichtwert der konkreten amtlichen Zone. Der Rechner wendet anschließend die für diesen Teilmarkt veröffentlichten Koeffizienten auf die eingegebenen Merkmale an."],
  ["Kann ich auch eine Adresse außerhalb Leverkusens eingeben?", "Ja. Der gemeinsame Rechner deckt Köln, den Rhein-Erft-Kreis, Leverkusen und den Rheinisch-Bergischen Kreis ab. Entscheidend ist immer das amtliche Modell der eingegebenen Adresse, nicht die Website."],
];

export const metadata:Metadata={
  title:"Immobilienbewertung Leverkusen | Hauswert & Wohnungswert",
  description:"Kostenlose Bewertung von Haus oder Wohnung mit adressgenauer Richtwertzone und dem örtlich zuständigen amtlichen Immobilienrichtwertmodell 2026.",
  alternates:{canonical:url},
  openGraph:{title:"Immobilienbewertung Leverkusen | Stark & Hoffmann",description:"Haus oder Wohnung adressgenau mit amtlichem Immobilienrichtwertmodell 2026 einschätzen.",url,images:[{url:defaultImage,alt:"Immobilienbewertung Leverkusen"}]},
  twitter:{card:"summary_large_image",title:"Immobilienbewertung Leverkusen",description:"Haus- oder Wohnungswert mit amtlichem Immobilienrichtwertmodell 2026 einschätzen.",images:[defaultImage]},
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
    <section className="tool-hero"><p className="eyebrow light">Unverbindlich &amp; kostenfrei · Leverkusen</p><h1>Immobilienbewertung Leverkusen</h1><p>Ermitteln Sie eine erste Preisspanne für Haus oder Wohnung ohne Mietwertverfahren. Jede Adresse im gemeinsamen Gebiet Köln, Rhein-Erft-Kreis, Leverkusen und Bergisch Gladbach wird mit der örtlich zuständigen Richtwertzone und dem amtlichen Modell zum 01.01.2026 bewertet.</p></section>
    <section className="tool-section section" id="bewertung"><BewertungsForm/></section>
    <section className="answer-section section" id="wertfaktoren"><p className="eyebrow">Hauswert · Wohnungswert · Richtwertmodell</p><h2>Was bestimmt die Online-Bewertung?</h2><p className="lead">Die vollständige Adresse bestimmt Gutachterausschuss, Teilmarkt und Immobilienrichtwertzone. Danach wird das Normobjekt der Zone mit den amtlich veröffentlichten Merkmalen an Haus oder Wohnung angepasst. Ein Mietwertverfahren und ein pauschaler Zustandsfaktor werden nicht verwendet.</p><div className="valuation-links"><a href="/haus-verkaufen-leverkusen/">Haus verkaufen →</a><a href="/wohnung-verkaufen-leverkusen/">Wohnung verkaufen →</a><a href="/grundstueck-verkaufen-leverkusen/">Grundstück verkaufen →</a></div><p className="calculation-note">Die Online-Ausgabe ist eine unverbindliche Ersteinschätzung nach dem örtlich zuständigen Modell zum 01.01.2026 und ersetzt weder Besichtigung noch individuelle Prüfung.</p></section>
    <section className="faq-section section" id="faq"><div className="section-head"><div><p className="eyebrow">Häufige Bewertungsfragen</p><h2>Preis und Wert richtig einordnen.</h2></div><p>Kurze Antworten für Eigentümer in Leverkusen und allen 13 Stadtteilen.</p></div><div className="faq-grid">{faqs.map(([question,answer])=><details className="faq-item" key={question}><summary>{question}<span>+</span></summary><div><p>{answer}</p></div></details>)}</div></section>
    <footer><div className="footer-brand"><span className="brand-mark">S<span>&amp;</span>H</span><div><strong>Stark &amp; Hoffmann Immobilien</strong><small>Evernest Lizenzpartner Leverkusen</small></div></div><div><h4>Kontakt</h4><p>Wiesdorfer Platz 19<br/>51373 Leverkusen</p><a href="tel:+4922049147881">+49 2204 914 7881</a><a href="mailto:leverkusen@evernest.com">leverkusen@evernest.com</a></div><div><h4>Verkaufen</h4><a href="/haus-verkaufen-leverkusen/">Haus</a><a href="/wohnung-verkaufen-leverkusen/">Wohnung</a><a href="/grundstueck-verkaufen-leverkusen/">Grundstück</a></div><div><h4>Rechtliches</h4><a href="/impressum/">Impressum</a><a href="/datenschutz/">Datenschutz</a><a href="/team/">Team</a></div></footer>
  </main>;
}
