import type { Metadata } from "next";
import { breadcrumbSchema, businessSchema, defaultImage, graphSchema, siteUrl } from "../seo";

const url = `${siteUrl}/team/`;

export const metadata: Metadata = {
  title: "Team | Immobilienmakler Leverkusen",
  description: "Das Team von Stark & Hoffmann Immobilien in Leverkusen: persönliche Ansprechpartner für Immobilienbewertung, Verkauf und Vermietung.",
  alternates: { canonical: url },
  openGraph: { title: "Unser Team | Stark & Hoffmann Immobilien Leverkusen", description: "Ihre persönlichen Ansprechpartner in Leverkusen.", url, images: [defaultImage] },
  twitter: { card: "summary_large_image", images: [defaultImage] },
};

// Namen, Rollen, Einsatzorte, Portraits und Profillinks stammen aus der
// oeffentlichen Evernest-Standortseite fuer Leverkusen. Keine Angabe ohne Quelle.
const team = [
  { name: "Patrick Stark", role: "Lizenzpartner", image: "patrick.jpg", areas: "Bergisch Gladbach, Leverkusen, Köln-Dellbrück", bio: "Verantwortet gemeinsam mit Julian Hoffmann das operative und strategische Geschäft von Stark & Hoffmann. Er begleitet Eigentümer persönlich und mit Gespür für die Bedeutung, die ein Verkauf für sie hat.", profile: "https://www.evernest.com/de/unsere-makler/bergisch-gladbach/patrick-stark/" },
  { name: "Julian Hoffmann", role: "Lizenzpartner", image: "julian.jpg", areas: "Bergisch Gladbach, Leverkusen, Köln-Dellbrück", bio: "Bringt betriebswirtschaftliche und internationale Vertriebserfahrung ein. Sein Anspruch ist ein transparenter Verkaufsprozess, geprägt von Kommunikation und Verlässlichkeit.", profile: "https://www.evernest.com/de/unsere-makler/bergisch-gladbach/julian-hoffmann/" },
  { name: "Johannes Brauns", role: "Teamlead Acquisition", image: "johannes.jpg", areas: "Bergisch Gladbach, Leverkusen", bio: "Ist seit über 20 Jahren in der Immobilienbranche tätig. Als erster Ansprechpartner lernt er Eigentümer kennen, berät sie persönlich und bereitet den Verkauf strukturiert vor.", profile: "https://www.evernest.com/de/unsere-makler/bergisch-gladbach/johannes-brauns/" },
  { name: "Robin Köppe", role: "Selbstständiger Immobilienmakler", image: "robin.jpg", areas: "Bergisch Gladbach, Leverkusen", bio: "Gebürtiger Leverkusener, dem viel mit seiner Heimatstadt verbindet – vom Bayer-Kreuz bis zum Japanischen Garten. Er setzt auf ehrliche Beratung und persönlichen Einsatz.", profile: "https://www.evernest.com/de/unsere-makler/leverkusen/robin-koeppe/" },
  { name: "Sebastian Schulz-Dobrick", role: "Selbstständiger Immobilienmakler", image: "sebastian.jpg", areas: "Leverkusen", bio: "Hat selbst viele Jahre in Leverkusen gelebt und kennt die Unterschiede zwischen den Vierteln. Er hört genau hin, stellt die richtigen Fragen und arbeitet bodenständig und ehrlich.", profile: "https://www.evernest.com/de/unsere-makler/leverkusen/sebastian-schulz/" },
  { name: "Christian Engelke", role: "Selbstständiger Immobilienmakler", image: "christian.jpg", areas: "Bergisch Gladbach, Leverkusen", bio: "Berät in Leverkusen und im Bergischen. Eigene Erfahrungen mit Kauf, Vermietung und Verwaltung von Immobilien bilden die praktische Grundlage seiner Beratung.", profile: "https://www.evernest.com/de/unsere-makler/bergisch-gladbach/christian-engelke/" },
] as const;

export default function TeamPage() {
  const schema = graphSchema(
    businessSchema,
    breadcrumbSchema([{ name: "Startseite", url: `${siteUrl}/` }, { name: "Team", url }]),
    ...team.map(({ name, role, image, profile }) => ({
      "@type": "Person", name, jobTitle: role,
      image: `${siteUrl}/team/${image}`,
      worksFor: { "@id": `${siteUrl}/#immobilienmakler` },
      sameAs: profile,
    })),
  );
  return <main className="team-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

    <header className="site-header">
      <a className="brand" href="/" aria-label="Startseite">
        <span className="brand-mark">S<span>&</span>H</span>
        <span><strong>Stark &amp; Hoffmann</strong><small>Immobilien · Leverkusen</small></span>
      </a>
      <nav aria-label="Hauptnavigation"><a href="/#profil">Profil</a><a href="/team/">Team</a><a href="/#markt">Markt</a><a href="/#fahrplan">Verkaufsfahrplan</a><a href="/#staedte">Region</a><a href="/#faq">FAQ</a></nav>
      <a className="header-cta" href="/immobilienbewertung/">Kostenlose Bewertung</a>
    </header>

    <section className="team-hero">
      <div>
        <p className="eyebrow light">Stark &amp; Hoffmann Immobilien</p>
        <h1>Unser Team in Leverkusen.</h1>
        <p>Persönliche Ansprechpartner, lokale Marktkenntnis und ein gemeinsames Ziel: Eigentümer vom ersten Gespräch bis zum erfolgreichen Abschluss verlässlich zu begleiten.</p>
      </div>
    </section>

    <section className="team-content section">
      <div className="section-head">
        <div><p className="eyebrow">Menschen vor Ort</p><h2>Das Team hinter Stark &amp; Hoffmann.</h2></div>
        <p>Wir verbinden persönliche Beratung mit professioneller Bewertung, Vermarktung und Verkaufsbegleitung in Leverkusen und der Region.</p>
      </div>
      <figure className="team-photo">
        <img src="/team/team-leverkusen.jpg" alt="Das Team von Stark &amp; Hoffmann Immobilien, Evernest Lizenzpartner für Leverkusen" />
        <figcaption>Das Team von Stark &amp; Hoffmann Immobilien · Evernest Lizenzpartner Leverkusen</figcaption>
      </figure>
      <div className="team-grid">
        {team.map(({ name, role, image, areas, bio, profile }) =>
          <article className="team-card" key={name}>
            <img src={`/team/${image}`} alt={`${name} – ${role} bei Stark & Hoffmann Immobilien Leverkusen`} loading="lazy" />
            <div>
              <h3>{name}</h3>
              <p className="team-role">{role}</p>
              <p className="team-areas">{areas}</p>
              <p className="team-bio">{bio}</p>
              <a className="team-profile-link" href={profile} target="_blank" rel="noreferrer">Profil und Quelle bei Evernest ↗</a>
            </div>
          </article>)}
      </div>
      <p className="editorial-note">Namen, Funktionen, Einsatzorte und Portraits stammen von der öffentlichen Evernest-Standortseite für Leverkusen. Jede Person ist über ihr dort hinterlegtes Profil nachprüfbar.</p>
    </section>

    <section className="district-contact section">
      <div>
        <p className="eyebrow light">Persönlich kennenlernen</p>
        <h2>Sprechen wir über Ihre Immobilie.</h2>
        <p>Unser Team begleitet Sie bei Bewertung, Verkauf und Vermietung in Leverkusen – im Showroom am Wiesdorfer Platz oder telefonisch.</p>
      </div>
      <div><a className="button gold" href="/immobilienbewertung/">Bewertung starten</a><a href="tel:+4922049147881">+49 2204 914 7881</a></div>
    </section>

    <footer>
      <div className="footer-brand"><span className="brand-mark">S<span>&</span>H</span><div><strong>Stark &amp; Hoffmann Immobilien</strong><small>Evernest Lizenzpartner Leverkusen</small></div></div>
      <div><h4>Kontakt</h4><p>Wiesdorfer Platz 19<br/>51373 Leverkusen</p><a href="tel:+4922049147881">+49 2204 914 7881</a><a href="mailto:leverkusen@evernest.com">leverkusen@evernest.com</a></div>
      <div><h4>Unternehmen</h4><a href="/">Leverkusen</a><a href="https://www.evernest.com/de/unsere-makler/leverkusen/" target="_blank" rel="noreferrer">Evernest Leverkusen</a><a href="/impressum/">Impressum</a><a href="/datenschutz/">Datenschutz</a></div>
      <div><h4>Rechtliches</h4><p>Stark &amp; Hoffmann Immobilien GmbH<br/>Amtsgericht Köln, HRB 116396<br/>Geschäftsführer: Patrick Stark, Julian Hoffmann</p></div>
    </footer>
    <div className="copyright">© 2026 Stark &amp; Hoffmann Immobilien GmbH · Alle Angaben unverbindlich. Irrtümer und Änderungen vorbehalten.</div>
  </main>;
}
