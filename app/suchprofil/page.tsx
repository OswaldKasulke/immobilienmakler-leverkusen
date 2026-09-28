import type { Metadata } from "next";
import { breadcrumbSchema, businessSchema, graphSchema, siteUrl } from "../seo";
import SiteFooter from "@/app/SiteFooter";
import HauptNav from "@/app/HauptNav";
import SuchprofilForm from "@/app/SuchprofilForm";

const url = `${siteUrl}/suchprofil/`;
export const metadata: Metadata = { title: "Suchprofil anlegen | Immobilie kaufen in Leverkusen", description: "Hinterlegen Sie Ihr Suchprofil für eine Wohnung, ein Haus oder ein Grundstück in Leverkusen. Wir melden uns, sobald ein passendes Angebot da ist.", alternates: { canonical: url }, openGraph: { title: "Suchprofil anlegen | Stark & Hoffmann Immobilien Leverkusen", description: "Hinterlegen Sie, was Sie in Leverkusen suchen.", url }, twitter: { card: "summary" } };

export default function SuchprofilPage() {
  const schema = graphSchema(businessSchema, breadcrumbSchema([{ name: "Startseite", url: `${siteUrl}/` }, { name: "Suchprofil", url }]));
  return <main className="suchprofil-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <header className="site-header"><a className="brand" href="/" aria-label="Startseite"><span className="brand-mark">S<span>&amp;</span>H</span><span><strong>Stark &amp; Hoffmann</strong><small>Immobilien · Leverkusen</small></span></a><HauptNav/><a className="header-cta" href="/immobilienbewertung/">Kostenlose Bewertung</a></header>
    <section className="contact section" id="suchprofil">
      <div className="contact-info"><p className="eyebrow light">Suchprofil</p><h1>Sagen Sie uns, was Sie suchen.</h1><p>Hinterlegen Sie Objektart, Lage und Budget. Wir melden uns, sobald ein passendes Angebot da ist.</p><address><strong>Stark &amp; Hoffmann Immobilien GmbH</strong><span>Wiesdorfer Platz 19<br/>51373 Leverkusen</span><a href="tel:+4922049147881">+49 2204 914 7881</a><a href="mailto:leverkusen@evernest.com">leverkusen@evernest.com</a></address></div>
      <SuchprofilForm/>
    </section>
    <SiteFooter/>
  </main>;
}
