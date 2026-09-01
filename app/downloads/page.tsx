import type { Metadata } from "next";
import { breadcrumbSchema, businessSchema, graphSchema, siteUrl } from "../seo";

const url = `${siteUrl}/downloads/`;
export const metadata: Metadata = {
  title: "Downloads für Immobilieneigentümer | Stark & Hoffmann Leverkusen",
  description: "Kostenlose PDF-Checklisten für Immobilienbewertung, Verkaufsunterlagen und den Immobilienverkauf in Leverkusen.",
  alternates: { canonical: url },
  openGraph: { title: "Downloads für Immobilieneigentümer | Stark & Hoffmann Leverkusen", description: "Checklisten und amtliche Grundstücksmarktberichte für Leverkusen und die Nachbarstädte.", url },
  twitter: { card: "summary" },
};

const checklists = [
  { title: "Unterlagen für den Immobilienverkauf", text: "Grundbuch, Flurkarte, Energieausweis sowie zusätzliche Unterlagen für Wohnungen und vermietete Immobilien.", file: "/downloads/checkliste-verkaufsunterlagen.pdf", label: "Checkliste · PDF · 2 Seiten" },
  { title: "19 Angaben für den Kaufvertragsentwurf", text: "Die Praxis-Checkliste für alle Angaben, die das Notariat zur Vorbereitung des Immobilienkaufvertrags benötigt.", file: "/downloads/checkliste-notar-kaufvertrag.pdf", label: "Notar-Checkliste · PDF · 1 Seite" },
  { title: "Immobilienbewertung richtig vorbereiten", text: "Alle wichtigen Angaben zu Objekt, Zustand, Ausstattung, Lage und Rechten übersichtlich zum Abhaken.", file: "/downloads/checkliste-immobilienbewertung.pdf", label: "Checkliste · PDF · 1 Seite" },
  { title: "Immobilienverkauf in sechs Schritten", text: "Der kompakte Fahrplan von Bewertung und Vorbereitung über Vermarktung und Notar bis zur Übergabe.", file: "/downloads/fahrplan-immobilienverkauf.pdf", label: "Fahrplan · PDF · 1 Seite" },
];

const marketReports = [
  { area: "Stadt Leverkusen", scope: "Der maßgebliche Bericht für alle 13 Leverkusener Stadtteile", url: "https://www.gars.nrw/images/user/GA_Leverkusen/pdf/GMB_11600_2026.pdf", note: "Grundstücksmarktbericht 2026 · amtliches PDF" },
  { area: "Rheinisch-Bergischer Kreis", scope: "Die östlichen Nachbarn: unter anderem Leichlingen, Burscheid und Odenthal", url: "https://www.boris.nrw.de/borisfachdaten/gmb/2026/GMB_32300_2026.pdf", note: "Grundstücksmarktbericht 2026 · amtliches PDF" },
  { area: "Stadt Köln", scope: "Der südliche Nachbar mit eigenem Gutachterausschuss", url: "https://www.gars.nrw/images/user/GA_K%C3%B6ln/GMB2026_Digitalversion.pdf", note: "Grundstücksmarktbericht 2026 · amtliches PDF" },
  { area: "Stadt Bergisch Gladbach", scope: "Eigenständiger Gutachterausschuss, zugleich unser zweiter Standort", url: "https://www.boris.nrw.de/borisfachdaten/gmb/2026/GMB_20700_2026.pdf", note: "Grundstücksmarktbericht 2026 · amtliches PDF" },
];

export default function DownloadsPage() {
  const schema = graphSchema(businessSchema, breadcrumbSchema([{ name: "Startseite", url: `${siteUrl}/` }, { name: "Downloads", url }]));
  return <main className="downloads-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <header className="site-header"><a className="brand" href="/" aria-label="Startseite"><span className="brand-mark">S<span>&amp;</span>H</span><span><strong>Stark &amp; Hoffmann</strong><small>Immobilien · Leverkusen</small></span></a><nav aria-label="Hauptnavigation"><a href="/#profil">Profil</a><a href="/team/">Team</a><a href="/#markt">Markt</a><a href="/#fahrplan">Verkaufsfahrplan</a><a href="/#staedte">Region</a><a href="/downloads/">Downloads</a></nav><a className="header-cta" href="/immobilienbewertung/">Kostenlose Bewertung</a></header>
    <section className="downloads-hero"><div><p className="eyebrow light">Kostenlose Downloads</p><h1>Gut vorbereitet verkaufen.</h1><p>Praktische Checklisten für Eigentümer in Leverkusen – kompakt, druckbar und ohne Anmeldung verfügbar.</p></div></section>
    <section className="downloads-content section">
      <div className="section-head"><div><p className="eyebrow">Checklisten</p><h2>Praktische Hilfen für Ihren Immobilienverkauf.</h2></div><p>Die Verkaufs- und Notarchecklisten basieren auf den Ratgeber-Inhalten von Roman Becker und wurden für Leverkusen angepasst.</p></div>
      <div className="download-grid">{checklists.map((item, index) => <article key={item.file}><span className="download-number">0{index + 1}</span><p className="download-label">{item.label}</p><h3>{item.title}</h3><p>{item.text}</p><a className="button dark" href={item.file} download>PDF herunterladen ↓</a><a className="download-view" href={item.file} target="_blank" rel="noreferrer">Im Browser ansehen ↗</a></article>)}</div>
      <p className="download-origin">Redaktionelle Grundlage der ersten beiden Checklisten: <a href="https://romanbecker.de/ratgeber/unterlagen-immobilienverkauf.html" target="_blank" rel="noreferrer">Unterlagen Immobilienverkauf ↗</a> und <a href="https://romanbecker.de/ratgeber/was-braucht-der-notar-fuer-den-kaufvertrag.html" target="_blank" rel="noreferrer">Notar-Checkliste ↗</a> auf romanbecker.de.</p>
      <div className="reports-head"><p className="eyebrow">Amtliche Marktdaten</p><h2>Grundstücksmarktberichte der Region.</h2><p>Die Berichte stammen ausschließlich von den jeweils zuständigen Gutachterausschüssen. Jeder Link öffnet den ausgewiesenen amtlichen PDF-Bericht direkt.</p></div>
      <div className="report-grid">{marketReports.map(item => <a href={item.url} target="_blank" rel="noreferrer" key={item.area}><span>{item.note}</span><h3>{item.area}</h3><p>{item.scope}</p><b>PDF direkt öffnen ↗</b></a>)}</div>
      <p className="boris-note">Alle Grundstücksmarktberichte Nordrhein-Westfalens und Bodenrichtwerte finden Sie zusätzlich zentral bei <a href="https://www.boris.nrw.de/" target="_blank" rel="noreferrer">BORIS.NRW ↗</a>.</p>
      <div className="downloads-cta"><div><p className="eyebrow">Nächster Schritt</p><h2>Was ist Ihre Immobilie wert?</h2><p>Nutzen Sie unsere kostenlose Ersteinschätzung für Leverkusen und die Nachbarstädte.</p></div><a className="button gold" href="/immobilienbewertung/">Immobilie bewerten lassen</a></div>
    </section>
    <footer><div className="footer-brand"><span className="brand-mark">S<span>&amp;</span>H</span><div><strong>Stark &amp; Hoffmann Immobilien</strong><small>Evernest Lizenzpartner Leverkusen</small></div></div><div><h4>Kontakt</h4><p>Wiesdorfer Platz 19<br/>51373 Leverkusen</p><a href="tel:+4922049147881">+49 2204 914 7881</a><a href="mailto:leverkusen@evernest.com">leverkusen@evernest.com</a></div><div><h4>Unternehmen</h4><a href="/">Leverkusen</a><a href="/downloads/">Downloads</a><a href="/impressum/">Impressum</a><a href="/agb/">AGB</a><a href="/datenschutz/">Datenschutz</a></div><div><h4>Rechtliches</h4><p>Stark &amp; Hoffmann Immobilien GmbH<br/>Amtsgericht Köln, HRB 116396</p></div></footer>
  </main>;
}
