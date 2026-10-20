import { districts } from "./stadtteile";
import ContactForm from "./ContactForm";
import { businessSchema, graphSchema, siteUrl } from "./seo";
import { artikel } from "./ratgeber/artikel";
import type { Metadata } from "next";

import SiteFooter from "@/app/SiteFooter";
import HauptNav from "@/app/HauptNav";

export const metadata: Metadata = { description: "Immobilienmakler Leverkusen: Immobilie verkaufen mit Stark & Hoffmann, Ihrem Makler für Häuser, Wohnungen und Grundstücke in allen 13 Stadtteilen.", alternates: { canonical: `${siteUrl}/` } };

const serviceLinks = [
  ["Haus verkaufen", "/haus-verkaufen-leverkusen/", "Ein- oder Zweifamilienhaus: vom Marktwert über die Unterlagen bis zum Käufer."],
  ["Wohnung verkaufen", "/wohnung-verkaufen-leverkusen/", "Eigentumswohnung: Teilungserklärung, Wirtschaftsplan und der Zustand der Gemeinschaft."],
  ["Grundstück verkaufen", "/grundstueck-verkaufen-leverkusen/", "Bauland und Grundstücke: Bodenrichtwertzone, Planungsrecht und tatsächliche Eigenschaften."],
];

const steps = [
  ["01", "Erstgespräch und Marktwert", "Wir sehen uns Ihre Immobilie an und leiten den Wert aus Lage, Baujahr, Zustand, Energiebilanz und vergleichbaren Verkäufen ab."],
  ["02", "Preis und Vorgehen", "Angebotspreis, Zeitrahmen und Vermarktungsweg legen wir gemeinsam mit Ihnen fest – öffentlich, diskret oder als Off-Market-Angebot."],
  ["03", "Unterlagen und Exposé", "Pflichtunterlagen, professionelle Fotos, Grundrisse und ein aussagekräftiges Exposé: Darum kümmern wir uns."],
  ["04", "Käufer finden", "Das Angebot erscheint auf den großen Portalen und in digitaler Werbung; zusätzlich sprechen wir vorgemerkte Interessenten aus unserem Netzwerk an."],
  ["05", "Besichtigen und prüfen", "Wir organisieren die Termine vor Ort, klären mit Interessenten deren Kaufabsicht und lassen uns die Finanzierung nachweisen."],
  ["06", "Vertrag und Übergabe", "Wir verhandeln für Sie, bereiten den Notartermin vor und sind bei der Schlüsselübergabe mit Protokoll dabei."],
];

// Quelle: Google-Unternehmensprofil Leverkusen, abgerufen am 09.09.2026.

const locations = [
  ["Immobilienmarkt", "immobilienmarkt-leverkusen"],
  ["Gutachterausschuss", "gutachterausschuss-leverkusen"],
  ["Bodenrichtwerte", "bodenrichtwert-leverkusen"],
  ["Immobilienrichtwerte", "immobilienrichtwert-leverkusen"],
  ["Grundstücksmarktbericht", "grundstuecksmarktbericht-leverkusen"],
];

const marketFacts = [
  ["1.195", "Kaufverträge", "im Marktjahr 2025 · +9 % zu 2024"],
  ["463 Mio. €", "Geldumsatz", "im gesamten Stadtgebiet 2025 · +6 % zu 2024"],
  ["344", "Einfamilienhäuser", "Verkäufe im Marktjahr 2025 · +5 % zu 2024"],
  ["590", "Eigentumswohnungen", "Kauffälle im Marktjahr 2025 · +13 % zu 2024"],
];

export default function Home() {
  const structuredData = graphSchema(
    businessSchema,
    { "@type": "WebSite", "@id": `${siteUrl}/#website`, url: `${siteUrl}/`, name: "Stark & Hoffmann Immobilien", publisher: { "@id": `${siteUrl}/#immobilienmakler` }, inLanguage: "de-DE" },
  );
  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}} />
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Startseite">
        <span className="brand-mark">S<span>&</span>H</span>
        <span><strong>Stark & Hoffmann</strong><small>Immobilien · Leverkusen</small></span>
      </a>
      <HauptNav/>
      <a className="header-cta" href="/immobilienbewertung/">Kostenlose Bewertung</a>
    </header>

    <section className="hero" id="top">
      <div className="hero-content">
        <p className="eyebrow light">Immobilienmakler Leverkusen</p>
        <h1>Immobilienmakler Leverkusen.<br/>Verkaufen mit klarem Plan.</h1>
        <p className="hero-copy">Sie möchten Ihre Immobilie in Leverkusen verkaufen? Stark &amp; Hoffmann bewertet und verkauft Häuser, Wohnungen und Grundstücke nach einem klaren Plan – in allen 13 Stadtteilen und im Umland.</p>
        <div className="hero-actions"><a className="button gold" href="/immobilienbewertung/">Immobilie bewerten lassen</a><a className="text-link light" href="tel:+4922049147881">+49 2204 914 7881 <span>↗</span></a></div>
        <div className="trust-row"><span>Showroom in Wiesdorf</span><span>Alle 13 Stadtteile</span><span>Digitale Vermarktung</span></div>
      </div>
    </section>

    <section className="profile section" id="profil">
      <div className="profile-copy">
        <p className="eyebrow">Unser Profil</p><h2>Ihr Makler in Leverkusen – mitten in Wiesdorf.</h2>
        <p className="lead">Stark &amp; Hoffmann Immobilien GmbH begleitet Eigentümer in Leverkusen bei Bewertung, Verkauf und Vermietung. Geschäftsführer sind Patrick Stark und Julian Hoffmann.</p>
        <p>Unser Showroom liegt am Wiesdorfer Platz 19 – kommen Sie vorbei, wenn Sie uns persönlich kennenlernen möchten. Wir kümmern uns um Häuser und Wohnungen in sämtlichen 13 Leverkusener Stadtteilen, von Hitdorf am Rhein bis Bergisch Neukirchen, und helfen beim Verkaufen genauso wie beim Kaufen und Vermieten. Welcher Preis realistisch ist, leiten wir aus tatsächlich erzielten Verkäufen, eigener Erfahrung und der aktuellen Marktentwicklung ab.</p>
        <div className="profile-points"><span>Marktwert aus echten Verkaufsdaten</span><span>Exposé, Fotos und Grundrisse</span><span>Interessenten sorgfältig ausgewählt</span><span>Bis zur Schlüsselübergabe an Ihrer Seite</span></div>
        <a className="button dark" href="/team/">Zum Team</a>
      </div>
    </section>

    <section className="seo-services section" aria-labelledby="verkaufen-heading">
      <div className="section-head"><div><p className="eyebrow">Haus, Wohnung oder Grundstück</p><h2 id="verkaufen-heading">Immobilie verkaufen in Leverkusen.</h2></div></div>
      <div className="seo-service-grid">{serviceLinks.map(([title,url,text])=><a href={url} key={url}><span>Objektart</span><h3>{title}</h3><p>{text}</p><b>Weiterlesen →</b></a>)}</div>
    </section>

    <section className="market-facts section" id="markt">
      <div className="market-facts-head"><div><p className="eyebrow">Immobilienmarkt Leverkusen</p><h2>Der Markt in Zahlen.</h2></div><p>Amtlich registrierte Transaktionen und Umsätze in Leverkusen im Marktjahr 2025.</p></div>
      <div className="market-facts-grid">{marketFacts.map(([value,label,note])=><article key={label}><strong>{value}</strong><h3>{label}</h3><p>{note}</p></article>)}</div>
      <a className="source-link" href="https://www.gars.nrw/images/user/GA_Leverkusen/pdf/GMB_11600_2026.pdf" target="_blank" rel="noreferrer">Quelle: Gutachterausschuss Leverkusen, Grundstücksmarktbericht 2026, S. 9–10 ↗</a>
    </section>

    <section className="process section dark-section" id="fahrplan">
      <div className="section-head"><div><p className="eyebrow light">Verkaufsfahrplan</p><h2>So verkaufen wir Ihre Immobilie in Leverkusen – in sechs Etappen.</h2></div><p>Sie wissen jederzeit, woran wir gerade arbeiten und was als Nächstes kommt. Die Abwicklung übernehmen wir von Anfang bis Ende.</p></div>
      <div className="steps">{steps.map(([number,title,text])=><article className="step" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <section className="properties section" id="immobilien">
      <div className="section-head"><div><p className="eyebrow">Ihre Immobiliensuche</p><h2>Finden Sie ein Zuhause, das zu Ihnen passt.</h2></div><p>Teilen Sie uns Ihre Wunschlage, die passende Objektart und Ihr Budget mit. Wir besprechen mit Ihnen die nächsten Schritte Ihrer Suche.</p></div>
      <a className="button dark" href="/suchprofil/">Suchwunsch mitteilen</a>
    </section>

    <section className="cities section" id="staedte">
      <div className="district-list-head"><p className="eyebrow">Leverkusen</p><h2>Alle 13 Stadtteile.</h2></div>
      <div className="city-grid">{[...districts].sort((a,b)=>a.name.localeCompare(b.name,"de")).map((district)=><a className="city" href={`/stadtteile/${district.slug}/`} key={district.slug}><span>Stadtteilprofil</span><strong>{district.name}</strong><b aria-hidden="true">↗</b></a>)}</div>
      <div className="section-head region-list-head"><div><p className="eyebrow">Amtliche Orientierung</p><h2>Marktdaten für Leverkusen.</h2></div><p>Fachseiten zu Richtwerten, Marktbericht und Gutachterausschuss mit amtlichen Quellen.</p></div>
      <div className="location-grid">{locations.map(([name,slug])=><a href={`/${slug}/`} key={slug}><span>Ortsprofil</span><strong>{name}</strong><b aria-hidden="true">↗</b></a>)}</div>
      <div className="section-head region-list-head"><div><p className="eyebrow">Nachbarregionen</p><h2>Rund um Leverkusen.</h2></div><p>Für Bergisch Gladbach und Köln führen Kolleginnen und Kollegen eigene Marktseiten mit Ortsprofilen, Preisen und amtlichen Quellen.</p></div>
      <div className="location-grid location-grid--drei">
        <a href="https://immobilienmakler-bergisch-gladbach.de/"><span>25 Stadtteile &amp; Ortsprofile</span><strong>Bergisch Gladbach</strong><b aria-hidden="true">↗</b></a>
        <a href="https://makler-schael-sick.de/"><span>18 Stadtteile rechts des Rheins</span><strong>Köln, rechtsrheinisch</strong><b aria-hidden="true">↗</b></a>
        <a href="https://romanbecker.de/"><span>Stadtteilprofile für ganz Köln</span><strong>Köln</strong><b aria-hidden="true">↗</b></a>
      </div>
    </section>

    <section className="faq-section section" id="ratgeber">
      <div className="section-head"><div><p className="eyebrow">Ratgeber</p><h2>Gut informiert verkaufen.</h2></div><p>Fachbeiträge zu Recht, Kosten und Steuern rund um die Immobilie – und Antworten auf die Fragen, die Eigentümer in Leverkusen am häufigsten stellen.</p></div>
      <div className="seo-service-grid">{artikel.slice(0, 3).map((a) => <a href={`/ratgeber/${a.slug}/`} key={a.slug}><span>Beitrag</span><h3>{a.titel}</h3><p>{a.kurz}</p><b>Lesen →</b></a>)}</div>
      <div className="faq-cta"><a className="button dark" href="/ratgeber/">Zum Ratgeber mit häufigen Fragen</a><a href="tel:+4922049147881">Direkt fragen: +49 2204 914 7881</a></div>
    </section>

    <section className="contact section" id="kontakt">
      <div className="contact-info"><p className="eyebrow light">Kontakt</p><h2>Erzählen Sie uns von Ihrer Immobilie.</h2><p>Rufen Sie an, schreiben Sie uns über das Formular oder besuchen Sie Ihre Makler in Leverkusen im Showroom am Wiesdorfer Platz. Das erste Gespräch ist unverbindlich.</p><address><strong>Stark & Hoffmann Immobilien GmbH</strong><span>Wiesdorfer Platz 19<br/>51373 Leverkusen</span><a href="tel:+4922049147881">+49 2204 914 7881</a><a href="mailto:hallo@leverkusen-makler.de">hallo@leverkusen-makler.de</a></address></div>
      <ContactForm/>
    </section>

    <SiteFooter/>
    <div className="copyright">© 2026 Stark & Hoffmann Immobilien GmbH · Alle Angaben unverbindlich. Irrtümer und Änderungen vorbehalten.</div>
  </main>;
}
