import Link from "next/link"; import {districts} from "./data";
import SiteFooter from "@/app/SiteFooter";
import HauptNav from "@/app/HauptNav";

export function Header(){return <header className="site-header">
  <Link className="brand" href="/" aria-label="Startseite">
    <span className="brand-mark">S<span>&amp;</span>H</span>
    <span><strong>Stark &amp; Hoffmann</strong><small>Immobilien · Leverkusen</small></span>
  </Link>
  <HauptNav/>
  <Link className="header-cta" href="/immobilienbewertung/">Kostenlose Bewertung</Link>
</header>}

export function Footer(){return <><SiteFooter/>
<div className="copyright">© 2026 Stark &amp; Hoffmann Immobilien GmbH · Alle Angaben unverbindlich. Irrtümer und Änderungen vorbehalten.</div></>}

export function DistrictGrid(){return <div className="district-grid">{districts.map(d=><Link key={d.slug} href={`/stadtteile/${d.slug}/`}><small>Stadtteilprofil · Bezirk {d.district}</small><b>{d.name}</b><span>Mehr erfahren →</span></Link>)}</div>}

export function PageShell({children}:{children:React.ReactNode}){return <><Header/>{children}<Footer/></>}
