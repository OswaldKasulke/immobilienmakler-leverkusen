import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "../../components";
import { artikel, autoren, datumLang, findeArtikel, type Artikel, type Block } from "../artikel";
import { breadcrumbSchema, businessSchema, defaultImage, faqSchema, graphSchema, siteUrl } from "../../seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return artikel.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const a = findeArtikel((await params).slug);
  if (!a) return {};
  const url = `${siteUrl}/ratgeber/${a.slug}/`;
  return { title: a.metaTitel, description: a.beschreibung, alternates: { canonical: url }, openGraph: { title: a.metaTitel, description: a.beschreibung, url, type: "article", images: [defaultImage] } };
}

function Baustein({ b }: { b: Block }) {
  if (b.h2) return <h2>{b.h2}</h2>;
  if (b.p) return <p>{b.p}</p>;
  if (b.ul) return <ul className="rg-liste">{b.ul.map((x) => <li key={x}>{x}</li>)}</ul>;
  if (b.ol) return <ol className="rg-liste">{b.ol.map((x) => <li key={x}>{x}</li>)}</ol>;
  if (b.table) return <div className="rg-tabelle"><table><thead><tr>{b.table[0].map((z) => <th key={z}>{z}</th>)}</tr></thead><tbody>{b.table.slice(1).map((reihe, i) => <tr key={i}>{reihe.map((z, j) => <td key={j}>{z}</td>)}</tr>)}</tbody></table></div>;
  return null;
}

export default async function RatgeberArtikel({ params }: { params: Promise<{ slug: string }> }) {
  const a = findeArtikel((await params).slug);
  if (!a) notFound();
  const url = `${siteUrl}/ratgeber/${a.slug}/`;
  const weitere = (a.verwandt ?? []).map(findeArtikel).filter((x): x is Artikel => Boolean(x));
  const firma = `${siteUrl}/#immobilienmakler`;
  const fragen = (a.faq ?? []).map(([question, answer]) => ({ question, answer }));
  const schema = graphSchema(
    businessSchema,
    breadcrumbSchema([{ name: "Startseite", url: `${siteUrl}/` }, { name: "Ratgeber", url: `${siteUrl}/ratgeber/` }, { name: a.titel, url }]),
    { "@type": "Article", "@id": `${url}#artikel`, headline: a.titel, description: a.beschreibung, datePublished: a.stand, dateModified: a.stand, inLanguage: "de-DE", mainEntityOfPage: url, image: defaultImage, author: autoren.map((p) => ({ "@type": "Person", name: p.name, jobTitle: p.funktion, worksFor: { "@id": firma } })), publisher: { "@id": firma } },
    ...(fragen.length ? [faqSchema(fragen)] : []),
  );
  return <PageShell>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <section className="page-hero">
      <p className="breadcrumbs"><Link href="/">Startseite</Link> / <Link href="/ratgeber/">Ratgeber</Link></p>
      <p className="eyebrow light">Ratgeber</p>
      <h1>{a.titel}</h1>
      <p>{a.lead}</p>
    </section>
    <main className="page-content section rg-artikel">
      <p className="rg-autoren">Geschrieben von {autoren.map((p) => p.name).join(" und ")}, Geschäftsführer der Stark &amp; Hoffmann Immobilien GmbH · Stand {datumLang(a.stand)}</p>
      {a.bloecke.map((b, i) => <Baustein b={b} key={i} />)}
      {fragen.length > 0 && <><h2>Häufige Fragen</h2><div className="faq-grid rg-faq">{fragen.map((f) => <details className="faq-item" key={f.question}><summary>{f.question}<span aria-hidden="true">+</span></summary><div><p>{f.answer}</p></div></details>)}</div></>}
      {weitere.length > 0 && <div className="rg-weiter"><h2>Passend dazu</h2><ul className="rg-liste">{weitere.map((w) => <li key={w.slug}><Link href={`/ratgeber/${w.slug}/`}>{w.titel}</Link></li>)}</ul></div>}
      <p className="rg-hinweis">Allgemeine Information, keine Rechts-, Steuer- oder Finanzberatung im Einzelfall.</p>
      <Link className="button dark" href="/immobilienbewertung/">Persönliche Bewertung anfragen</Link>
    </main>
  </PageShell>;
}
