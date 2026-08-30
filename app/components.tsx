import Link from "next/link"; import {districts} from "./data";

export function Header(){return <header className="site-header">
  <Link className="brand" href="/" aria-label="Startseite">
    <span className="brand-mark">S<span>&amp;</span>H</span>
    <span><strong>Stark &amp; Hoffmann</strong><small>Immobilien · Leverkusen</small></span>
  </Link>
  <nav aria-label="Hauptnavigation"><Link href="/#profil">Profil</Link><Link href="/team/">Team</Link><Link href="/immobilienmarkt-leverkusen/">Markt</Link><Link href="/#fahrplan">Verkaufsfahrplan</Link><Link href="/#staedte">Region</Link><Link href="/#faq">FAQ</Link></nav>
  <Link className="header-cta" href="/immobilienbewertung/">Kostenlose Bewertung</Link>
</header>}

export function Footer(){return <><footer>
  <div className="footer-brand"><span className="brand-mark">S<span>&amp;</span>H</span><div><strong>Stark &amp; Hoffmann Immobilien</strong><small>Evernest Lizenzpartner Leverkusen</small></div></div>
  <div><h4>Kontakt</h4><p>Wiesdorfer Platz 19<br/>51373 Leverkusen</p><a href="tel:+4922049147881">+49 2204 914 7881</a><a href="mailto:leverkusen@evernest.com">leverkusen@evernest.com</a></div>
  <div><h4>Orientierung</h4><Link href="/immobilienmarkt-leverkusen/">Immobilienmarkt</Link><Link href="/gutachterausschuss-leverkusen/">Gutachterausschuss</Link><Link href="/bodenrichtwert-leverkusen/">Bodenrichtwerte</Link><Link href="/immobilienrichtwert-leverkusen/">Immobilienrichtwerte</Link></div>
  <div><h4>Rechtliches</h4><Link href="/impressum/">Impressum</Link><Link href="/datenschutz/">Datenschutz</Link><Link href="/team/">Team</Link></div>
</footer>
<div className="copyright">© 2026 Stark &amp; Hoffmann Immobilien GmbH · Alle Angaben unverbindlich. Irrtümer und Änderungen vorbehalten.</div></>}

export function DistrictGrid(){return <div className="district-grid">{districts.map(d=><Link key={d.slug} href={`/stadtteile/${d.slug}/`}><small>Stadtteilprofil · Bezirk {d.district}</small><b>{d.name}</b><span>Mehr erfahren →</span></Link>)}</div>}

export function PageShell({children}:{children:React.ReactNode}){return <><Header/>{children}<Footer/></>}
