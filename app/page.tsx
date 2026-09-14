import { districts } from "./stadtteile";
import ImmobilienGalerie from "./ImmobilienGalerie";
import ContactForm from "./ContactForm";
import { businessSchema, graphSchema, siteUrl } from "./seo";
import { artikel } from "./ratgeber/artikel";
import type { Metadata } from "next";
import { preload } from "react-dom";

export const metadata: Metadata = { alternates: { canonical: `${siteUrl}/` } };

const heroImage = "/location/2.jpg";
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

const legacyProperties = [
  { place:"Odenthal-Erberich · 51519", title:"Bungalow mit großem Grundstück, Pool, Doppelgaragen und viel Potenzial in Odenthal-Erberich", price:"475.000 €", image:"https://images.ctfassets.net/if6f7uzjzqut/76CeSFsWDiiAKSJb9tvCSe/8e58988f93315789dff5f7877458d5f5/2d598894-db1b-4133-ac08-58679835c64b?fm=webp&w=900&h=700&fit=fill&q=75", url:"https://www.evernest.com/de/listing/1ZKQZJSBzBfGNYG63GJxSq/" },
  { place:"Lohmar-Donrath · 53797", title:"Ein Haus für Mehrgenerationen, ein Zuhause fürs Leben: Zweifamilienhaus mit positiver Bauvoranfrage.", price:"879.000 €", image:"https://images.ctfassets.net/if6f7uzjzqut/5upwrosoUSQH08gO88KXBA/4dec6c4526f499e58140363f8ca1acd0/838dfc47-62c2-4ed0-ad9e-8b2a26f0d9d1?fm=webp&w=900&h=700&fit=fill&q=75", url:"https://www.evernest.com/de/listing/6KHhvo2dzdK42fEv3KVSH9/" },
  { place:"Leverkusen-Schildgen · 51467", title:"Charmantes freistehendes Einfamilienhaus mit 280 m² Wohnfläche – stilvolles Wohnen & Arbeiten", price:"892.000 €", image:"https://images.ctfassets.net/if6f7uzjzqut/1VdUEglILwR1pj27rLPb0/d99fce6d19050aac68244799ba3fa21d/7d3afb4b-4a74-48f9-912e-f43fe08905cc?fm=webp&w=900&h=700&fit=fill&q=75", url:"https://www.evernest.com/de/listing/4QkJceuNhZnDcrDUTfgDCy/" },
  { place:"Leverkusen-Stadtmitte · 51465", title:"Energieeffizienter Neubau-Bungalow mit Fernblick: bezugsfrei, barrierearm und flexibel nutzbar", price:"949.000 €", image:"https://images.ctfassets.net/if6f7uzjzqut/6IlBzgGyd54Glg0XcTV66q/20d7e2c8ec1c079ff17e21cfc18b220e/4f38bfb9-4bfc-4714-ab54-691cf1d6cb58?fm=webp&w=900&h=700&fit=fill&q=75", url:"https://www.evernest.com/de/listing/6hq9UOIn1AAgKSkUGRDhcN/" },
  { place:"Leverkusen-Stadtmitte · 51465", title:"Stilvolle Altbau-Doppelhaushälfte, Architektur mit Geschichte", price:"486.000 €", image:"https://images.ctfassets.net/if6f7uzjzqut/4yoN32qeWKVoJfdFDx1BkW/edc5f3e1f8318b9a86843b95bc346901/5e34cac0-b5f7-4e45-b11c-7c03fd5ab2bc?fm=webp&w=900&h=700&fit=fill&q=75", url:"https://www.evernest.com/de/listing/49onmenXN9iMpvIeb5mXxO/" },
  { place:"Odenthal-Glöbusch · 51519", title:"Exklusives Mehrgenerationenhaus mit zwei Wohneinheiten in grüner Wohnlage von Odenthal-Glöbusch", price:"875.000 €", image:"https://images.ctfassets.net/if6f7uzjzqut/56yJ2L4XSKMPwm7abkSHhO/f2fb5546df56ba09719424f20c7880b8/64e66707-0915-41a1-9810-f6ceba72cefa?fm=webp&w=900&h=700&fit=fill&q=75", url:"https://www.evernest.com/de/listing/ZUXtatV9l9NnxJLqKo0DZ/" },
  { place:"Leverkusen-Lustheide · 51427", title:"Freistehendes Einfamilienhaus mit großem Grundstück", price:"895.000 €", image:"https://images.ctfassets.net/if6f7uzjzqut/60oR1MQiK4A6kfjmUVxNkH/9337dd8a982993b4df863eef141b2eef/337733cc-e6ca-453f-9791-ac620b47be1e?fm=webp&w=900&h=700&fit=fill&q=75", url:"https://www.evernest.com/de/listing/4sOpQWb7lTSp2u8YVKd1b1/" },
  { place:"Leverkusen-Stadtmitte · 51465", title:"Klassische Eleganz auf weitläufigem Parkareal in bester Lage", price:"Preis auf Anfrage", image:"https://images.ctfassets.net/if6f7uzjzqut/xshBvzhUPe2oJUYoARyeg/9d992a4697aef920a3172182d8f6924c/8c174356-5f12-4844-8b0a-9c1e6e5f5df0?fm=webp&w=900&h=700&fit=fill&q=75", url:"https://www.evernest.com/de/listing/1b2iW8md9sRyBgpa3zrWnU/" },
  { place:"Odenthal-Erberich · 51519", title:"Vielseitiges Zweifamilienhaus mit Einliegerwohnung und großem Grundstück in Odenthal", price:"695.000 €", image:"https://images.ctfassets.net/if6f7uzjzqut/5kO8RPl3P0l6T4JG8wpxCV/3296ca9e8d382f8b811ec589b6fd7a07/7a7c0d21-d168-4771-9ca3-7023dc24b9ef?fm=webp&w=900&h=700&fit=fill&q=75", url:"https://www.evernest.com/de/listing/2a0HNTmKuXRf1lohi07T7p/" },
  { place:"Leverkusen-Stadtmitte · 51465", title:"Charmante 3-Zimmer-Wohnung mit Garten in stilvoller Villa, Bestlage Citynähe GL", price:"370.000 €", image:"https://images.ctfassets.net/if6f7uzjzqut/6VrSkiZxS3PVfDf30e21FS/3ca0b64da69a93a8c66fee80803e7475/bbf49d9a-6dc9-4932-8bf7-02e117c3821b?fm=webp&w=900&h=700&fit=fill&q=75", url:"https://www.evernest.com/de/listing/739anoEJHURONwToX1fsi9/" },
  { place:"Odenthal-Klasmühle · 51519", title:"Weite, Waldnähe & Wellness – ein Zuhause voller Möglichkeiten", price:"Verkauft", image:"https://images.ctfassets.net/if6f7uzjzqut/2qNnfq4qwHhOaNTqCHHeXm/787afb2d5086c23aa0eee3811cc6a336/52f5b64c-ce1b-421b-8d2d-7f797e1a9500?fm=webp&w=900&h=700&fit=fill&q=75", url:"https://www.evernest.com/de/listing/2xTP7fOu3avF27PR8p7Xu7/" },
  { place:"Leverkusen-Nußbaum · 51467", title:"Design trifft Lebensqualität: Architektenhaus mit Spa und Smart-Home in bester Lage von LEV-Nußbaum", price:"1.399.000 €", image:"https://images.ctfassets.net/if6f7uzjzqut/3htTTDunHlqMvj1OpSt3b7/47ed6d560cb78911a6c0d36b65591a69/a4ef604a-7cee-425d-a13a-6de57f4dc527?fm=webp&w=900&h=700&fit=fill&q=75", url:"https://www.evernest.com/de/listing/6Z7zXP636pyMpcqvah3tRt/" },
  { place:"Santanyí", title:"Cala d'Or Mallorca: „El arte de vivir bien!“", price:"1.250.000 €", image:"https://images.ctfassets.net/if6f7uzjzqut/3OQ50bWbRADIRg7vs8J2uY/f9274610b74098bed87a0fb6b7db12ce/a3ccfdf4-f7df-49e9-9f27-c34b6f483bf5?fm=webp&w=900&h=700&fit=fill&q=75", url:"https://www.evernest.com/de/listing/3pxIrXS5DaxcfNDhbTrHPX/" },
  { place:"Leverkusen-Lückerath · 51429", title:"Mit Liebe gepflegt, mit Pool gekrönt: Doppelhaushälfte in Bensberg", price:"Verkauft", image:"https://images.ctfassets.net/if6f7uzjzqut/1GohMKdyEwpKHfupI1600v/43c280f723ec8b8f192eda26b980f7e9/67e7d896-c4b0-4822-94aa-39b1f6037671?fm=webp&w=900&h=700&fit=fill&q=75", url:"https://www.evernest.com/de/listing/79T5H2ABzWbB6JhrCie8qP/" },
  { place:"Leverkusen-Refrath · 51427", title:"Hochwertige Eigentumswohnungen in KfW-40-Bauweise in Leverkusen-Refrath", price:"Ab 346.500 €", image:"https://images.ctfassets.net/if6f7uzjzqut/7e6r8vJCYnvMy3gw5Xvn3H/19af800523918cf9f65ecd86f9827012/7d92867d-15c2-48f6-9bdf-68b8b99dbb95?fm=webp&w=900&h=700&fit=fill&q=75", url:"https://www.evernest.com/de/listing/0dLo3OABJS1e4BTJ7bdtM/" },
];

// Quelle: Google-Unternehmensprofil Leverkusen, abgerufen am 09.09.2026.
const reviews = [
  ["Emily", "Jede Frage wurde sofort beantwortet."],
  ["Felix Müller", "Vom ersten Kontakt bis zur Besichtigung hat alles perfekt gepasst."],
  ["Khanom Hazara", "Durch seine ruhige und ehrliche Art konnte er sofort Vertrauen aufbauen."],
];
const googleReviewsUrl = "https://maps.app.goo.gl/P5s533i9g5FVRWmK7";

const locations = [
  ["Immobilienmarkt", "immobilienmarkt-leverkusen"],
  ["Gutachterausschuss", "gutachterausschuss-leverkusen"],
  ["Bodenrichtwerte", "bodenrichtwert-leverkusen"],
  ["Immobilienrichtwerte", "immobilienrichtwert-leverkusen"],
  ["Grundstücksmarktbericht", "grundstuecksmarktbericht-leverkusen"],
];

const marketFacts = [
  ["1.195", "Kaufverträge", "im Marktjahr 2025"],
  ["463 Mio. €", "Geldumsatz", "im gesamten Stadtgebiet 2025"],
  ["344", "Einfamilienhäuser", "Verkäufe im Marktjahr 2025"],
  ["590", "Eigentumswohnungen", "Kauffälle im Marktjahr 2025"],
];

export default function Home() {
  // Das Titelbild ist ein CSS-Hintergrund und wuerde sonst erst spaet entdeckt -
  // es bestimmt aber den groessten sichtbaren Inhalt (LCP) der Startseite.
  preload(heroImage, { as: "image", fetchPriority: "high" });
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
      <nav aria-label="Hauptnavigation"><a href="#profil">Profil</a><a href="/team/">Team</a><a href="#markt">Markt</a><a href="#fahrplan">Verkaufsfahrplan</a><a href="#immobilien">Immobilien</a><a href="#staedte">Region</a><a href="/ratgeber/">Ratgeber</a></nav>
      <a className="header-cta" href="/immobilienbewertung/">Kostenlose Bewertung</a>
    </header>

    <section className="hero" id="top" style={{backgroundImage:`linear-gradient(90deg,rgba(0,0,0,.82) 0%,rgba(0,0,0,.5) 52%,rgba(0,0,0,.08) 82%),url(${heroImage})`}}>
      <div className="hero-content">
        <p className="eyebrow light">Evernest-Lizenzpartner in Leverkusen</p>
        <h1>Immobilienmakler Leverkusen.<br/>Verkaufen mit klarem Plan.</h1>
        <p className="hero-copy">Stark &amp; Hoffmann bewertet und verkauft Häuser, Wohnungen und Grundstücke in allen 13 Stadtteilen von Leverkusen – kurz LEV – und im Umland.</p>
        <div className="hero-actions"><a className="button gold" href="/immobilienbewertung/">Immobilie bewerten lassen</a><a className="text-link light" href="tel:+4922049147881">+49 2204 914 7881 <span>↗</span></a></div>
        <div className="trust-row"><span>Showroom in Wiesdorf</span><span>Alle 13 Stadtteile</span><span>Digitale Vermarktung</span></div>
      </div>
    </section>

    <section className="profile section" id="profil">
      <div className="profile-image"><div className="profile-gallery"><img src="/location/4.jpg" alt="Beratungsbereich im Evernest Immobilienbüro" loading="lazy"/><img src="/location/1.jpg" alt="Evernest Schriftzug im Immobilienbüro" loading="lazy"/><img src="/location/showroom.jpg" alt="Schild am Evernest Showroom in Leverkusen" loading="lazy"/></div><div className="image-label"><strong>Stark & Hoffmann</strong><span>Evernest Lizenzpartner</span></div></div>
      <div className="profile-copy">
        <p className="eyebrow">Unser Profil</p><h2>Mitten in Wiesdorf zu finden.</h2>
        <p className="lead">In Leverkusen vertritt die Stark &amp; Hoffmann Immobilien GmbH den Evernest-Standort. Geschäftsführer sind Patrick Stark und Julian Hoffmann, beide mit langjähriger Branchenerfahrung.</p>
        <p>Unser Showroom liegt am Wiesdorfer Platz 19 – kommen Sie vorbei, wenn Sie uns persönlich kennenlernen möchten. Wir kümmern uns um Häuser und Wohnungen in sämtlichen 13 Leverkusener Stadtteilen, von Hitdorf am Rhein bis Bergisch Neukirchen, und helfen beim Verkaufen genauso wie beim Kaufen und Vermieten. Welcher Preis realistisch ist, leiten wir aus tatsächlich erzielten Verkäufen, eigener Erfahrung und der aktuellen Marktentwicklung ab.</p>
        <div className="profile-points"><span>Marktwert aus echten Verkaufsdaten</span><span>Exposé, Fotos und Grundrisse</span><span>Interessenten sorgfältig ausgewählt</span><span>Bis zur Schlüsselübergabe an Ihrer Seite</span></div>
        <a className="button dark" href="/team/">Zum Team</a>
      </div>
    </section>

    <section className="seo-services section" aria-labelledby="verkaufen-heading">
      <div className="section-head"><div><p className="eyebrow">Immobilie verkaufen in Leverkusen</p><h2 id="verkaufen-heading">Was steht bei Ihnen zum Verkauf?</h2></div><p>Für jede Objektart gibt es eine eigene Seite: was wir vorab prüfen, welche Unterlagen gebraucht werden und wie der Verkauf abläuft.</p></div>
      <div className="seo-service-grid">{serviceLinks.map(([title,url,text])=><a href={url} key={url}><span>Objektart</span><h3>{title}</h3><p>{text}</p><b>Weiterlesen →</b></a>)}</div>
    </section>

    <section className="market-facts section" id="markt">
      <div className="market-facts-head"><div><p className="eyebrow">Immobilienmarkt Leverkusen</p><h2>Der Markt in Zahlen.</h2></div><p>Amtlich registrierte Transaktionen und Umsätze in Leverkusen im Marktjahr 2025.</p></div>
      <div className="market-facts-grid">{marketFacts.map(([value,label,note])=><article key={label}><strong>{value}</strong><h3>{label}</h3><p>{note}</p></article>)}</div>
      <a className="source-link" href="https://www.gars.nrw/images/user/GA_Leverkusen/pdf/GMB_11600_2026.pdf" target="_blank" rel="noreferrer">Quelle: Gutachterausschuss Leverkusen, Grundstücksmarktbericht 2026, S. 9–10 ↗</a>
    </section>

    <section className="process section dark-section" id="fahrplan">
      <div className="section-head"><div><p className="eyebrow light">Verkaufsfahrplan</p><h2>So verkaufen wir Ihre Immobilie – in sechs Etappen.</h2></div><p>Sie wissen jederzeit, woran wir gerade arbeiten und was als Nächstes kommt. Die Abwicklung übernehmen wir von Anfang bis Ende.</p></div>
      <div className="steps">{steps.map(([number,title,text])=><article className="step" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <section className="properties section" id="immobilien">
      <div className="section-head"><div><p className="eyebrow">Unsere Immobilien</p><h2>Immobilienangebote in Leverkusen und Umgebung.</h2><p className="gallery-status">Auswahl öffentlich angebotener Leverkusener Immobilien</p></div></div>
      <ImmobilienGalerie />
    </section>

    <section className="reviews reviews--google section" id="bewertungen">
      <div className="reviews-title">
        <a className="google-rating-link" href={googleReviewsUrl} target="_blank" rel="noreferrer" aria-label="Verifizierte Kundenstimmen auf Google ansehen">
          <div className="google-rating-stars">★★★★★</div>
          <div className="google-rating-text">5,0 von 5,0 auf GOOGLE</div>
        </a>
      </div>
      <div className="review-grid">{reviews.map(([name,quote])=><blockquote key={name}><div>★★★★★</div><p>„{quote}“</p><cite>{name}</cite></blockquote>)}</div>
    </section>

    <section className="cities section" id="staedte">
      <div className="district-list-head"><p className="eyebrow">Leverkusen</p><h2>Alle 13 Stadtteile.</h2></div>
      <div className="city-grid">{[...districts].sort((a,b)=>a.name.localeCompare(b.name,"de")).map((district)=><a className="city" href={`/stadtteile/${district.slug}/`} key={district.slug}><span>Stadtteilprofil</span><strong>{district.name}</strong><b aria-hidden="true">↗</b></a>)}</div>
      <div className="section-head region-list-head"><div><p className="eyebrow">Amtliche Orientierung</p><h2>Marktdaten für Leverkusen.</h2></div><p>Fachseiten zu Richtwerten, Marktbericht und Gutachterausschuss mit amtlichen Quellen.</p></div>
      <div className="location-grid">{locations.map(([name,slug])=><a href={`/${slug}/`} key={slug}><span>Ortsprofil</span><strong>{name}</strong><b aria-hidden="true">↗</b></a>)}</div>
      <div className="section-head region-list-head"><div><p className="eyebrow">Nachbarregionen</p><h2>Rund um Leverkusen.</h2></div><p>Für Bergisch Gladbach und das rechtsrheinische Köln führen Kolleginnen und Kollegen eigene Marktseiten mit Ortsprofilen, Preisen und amtlichen Quellen.</p></div>
      <div className="location-grid location-grid--paar">
        <a href="https://immobilienmakler-bergisch-gladbach.de/"><span>25 Stadtteile &amp; Ortsprofile</span><strong>Bergisch Gladbach</strong><b aria-hidden="true">↗</b></a>
        <a href="https://makler-schael-sick.de/"><span>18 Stadtteile rechts des Rheins</span><strong>Köln, rechtsrheinisch</strong><b aria-hidden="true">↗</b></a>
      </div>
    </section>

    <section className="faq-section section" id="ratgeber">
      <div className="section-head"><div><p className="eyebrow">Ratgeber</p><h2>Gut informiert verkaufen.</h2></div><p>Fachbeiträge zu Recht, Kosten und Steuern rund um die Immobilie – und Antworten auf die Fragen, die Eigentümer in Leverkusen am häufigsten stellen.</p></div>
      <div className="seo-service-grid">{artikel.slice(0, 3).map((a) => <a href={`/ratgeber/${a.slug}/`} key={a.slug}><span>Beitrag</span><h3>{a.titel}</h3><p>{a.kurz}</p><b>Lesen →</b></a>)}</div>
      <div className="faq-cta"><a className="button dark" href="/ratgeber/">Zum Ratgeber mit häufigen Fragen</a><a href="tel:+4922049147881">Direkt fragen: +49 2204 914 7881</a></div>
    </section>

    <section className="contact section" id="kontakt">
      <div className="contact-info"><p className="eyebrow light">Kontakt</p><h2>Erzählen Sie uns von Ihrer Immobilie.</h2><p>Rufen Sie an, schreiben Sie uns über das Formular oder kommen Sie im Showroom am Wiesdorfer Platz vorbei. Das erste Gespräch ist unverbindlich.</p><address><strong>Stark & Hoffmann Immobilien GmbH</strong><span>Wiesdorfer Platz 19<br/>51373 Leverkusen</span><a href="tel:+4922049147881">+49 2204 914 7881</a><a href="mailto:leverkusen@evernest.com">leverkusen@evernest.com</a></address></div>
      <ContactForm/>
    </section>

    <footer><div className="footer-brand"><span className="brand-mark">S<span>&</span>H</span><div><strong>Stark & Hoffmann Immobilien</strong><small>Evernest Lizenzpartner Leverkusen</small></div></div><div><h4>Kontakt</h4><p>Wiesdorfer Platz 19<br/>51373 Leverkusen</p><a href="tel:+4922049147881">+49 2204 914 7881</a><a href="mailto:leverkusen@evernest.com">leverkusen@evernest.com</a></div><div><h4>Unternehmen</h4><a href="/">Leverkusen</a><a href="https://www.evernest.com/de/unsere-makler/leverkusen/" target="_blank" rel="noreferrer">Evernest Leverkusen</a><a href="/downloads/">Downloads</a><a href="/impressum/">Impressum</a><a href="/agb/">AGB</a><a href="/datenschutz/">Datenschutz</a></div><div><h4>Rechtliches</h4><p>Stark & Hoffmann Immobilien GmbH<br/>Amtsgericht Köln, HRB 116396<br/>Geschäftsführer: Patrick Stark, Julian Hoffmann</p></div></footer>
    <div className="copyright">© 2026 Stark & Hoffmann Immobilien GmbH · Alle Angaben unverbindlich. Irrtümer und Änderungen vorbehalten.</div>
  </main>;
}
