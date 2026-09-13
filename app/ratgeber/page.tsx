import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../components";
import { artikel } from "./artikel";
import { faq } from "../haeufige-fragen";
import { breadcrumbSchema, businessSchema, defaultImage, faqSchema, graphSchema, siteUrl } from "../seo";

const url = `${siteUrl}/ratgeber/`;
const titel = "Ratgeber für Immobilieneigentümer in Leverkusen";
const beschreibung = "Wissen rund um Haus, Wohnung und Grundstück in Leverkusen: Fachbeiträge zu Recht, Steuern und Kosten sowie Antworten auf häufige Fragen zum Verkauf.";

export const metadata: Metadata = {
  title: `${titel} | Stark & Hoffmann`,
  description: beschreibung,
  alternates: { canonical: url },
  openGraph: { title: `${titel} | Stark & Hoffmann`, description: beschreibung, url, images: [defaultImage] },
};

export default function RatgeberUebersicht() {
  const schema = graphSchema(
    businessSchema,
    breadcrumbSchema([{ name: "Startseite", url: `${siteUrl}/` }, { name: "Ratgeber", url }]),
    { "@type": "CollectionPage", "@id": `${url}#seite`, url, name: titel, description: beschreibung, inLanguage: "de-DE", publisher: { "@id": `${siteUrl}/#immobilienmakler` }, hasPart: artikel.map((a) => ({ "@type": "Article", headline: a.titel, url: `${url}${a.slug}/` })) },
    faqSchema(faq),
  );
  return <PageShell>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <section className="page-hero">
      <p className="breadcrumbs"><Link href="/">Startseite</Link> / Ratgeber</p>
      <p className="eyebrow light">Ratgeber</p>
      <h1>{titel}</h1>
      <p>Hier erklären wir, was hinter Begriffen aus Grundbuch, Kaufvertrag und Steuerrecht steckt – und beantworten die Fragen, die Eigentümer in Leverkusen am häufigsten stellen.</p>
    </section>
    <section className="seo-services section" aria-labelledby="rg-beitraege">
      <div className="section-head"><div><p className="eyebrow">Beiträge</p><h2 id="rg-beitraege">Themen rund um Ihre Immobilie.</h2></div><p>Kompakt aufbereitet, damit Sie vor Gesprächen mit Bank, Notar oder Käufern wissen, worum es geht.</p></div>
      <div className="seo-service-grid">{artikel.map((a) => <Link href={`/ratgeber/${a.slug}/`} key={a.slug}><span>Beitrag</span><h3>{a.titel}</h3><p>{a.kurz}</p><b>Lesen →</b></Link>)}</div>
    </section>
    <section className="faq-section section" id="faq">
      <div className="section-head"><div><p className="eyebrow">Häufige Fragen</p><h2>Kurz beantwortet: Verkaufen in Leverkusen.</h2></div><p>Von der Bewertung über Unterlagen und Steuern bis zum diskreten Verkauf.</p></div>
      <div className="faq-grid">{faq.map(([question, answer]) => <details className="faq-item" key={question}><summary>{question}<span aria-hidden="true">+</span></summary><div><p>{answer}</p></div></details>)}</div>
      <div className="faq-cta"><Link className="button dark" href="/immobilienbewertung/">Wert jetzt einschätzen</Link><a href="tel:+4922049147881">Noch Fragen? +49 2204 914 7881</a></div>
    </section>
  </PageShell>;
}
