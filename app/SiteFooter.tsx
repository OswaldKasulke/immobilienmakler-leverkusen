export default function SiteFooter(){
  return <footer className="site-footer">
    <div className="sf-grid">
      <div className="sf-col"><p className="sf-h">Anschrift</p><address>Stark & Hoffmann Immobilien GmbH<br/>Wiesdorfer Platz 19<br/>51373 Leverkusen</address><p><a href="mailto:hallo@leverkusen-makler.de">hallo@leverkusen-makler.de</a><br/><a href="tel:+4922049147881">+49 2204 914 7881</a></p></div>
      <div className="sf-col"><p className="sf-h">Unternehmen</p><ul className="sf-list"><li><a href="/#profil">Über uns</a></li><li><a href="/team/">Team</a></li><li><a href="/downloads/">Downloads</a></li><li><a href="/impressum/">Impressum</a></li><li><a href="/datenschutz/">Datenschutz</a></li><li><button type="button" className="sf-consent" data-consent-reset>Cookie-Einstellungen</button></li><li><a href="/agb/">AGB</a></li></ul></div>
      <div className="sf-col"><p className="sf-h">Kostenlose Bewertung</p><p>Was ist Ihre Immobilie wert? Online bewerten – kostenlos und unverbindlich.</p><a className="sf-btn" href="/immobilienbewertung/">Online-Immobilienbewertung</a></div>
      <div className="sf-col"><p className="sf-h">Immobilien &amp; Ratgeber</p><ul className="sf-list"><li><a href="/haus-verkaufen-leverkusen/">Haus verkaufen</a></li><li><a href="/wohnung-verkaufen-leverkusen/">Wohnung verkaufen</a></li><li><a href="/grundstueck-verkaufen-leverkusen/">Grundstück verkaufen</a></li><li><a href="/immobilienbewertung/">Immobilie bewerten</a></li><li><a href="/#immobilien">Immobiliensuche</a></li><li><a href="/#staedte">Ihr Stadtteil</a></li><li><a href="/immobilienmarkt-leverkusen/">Immobilienmarkt Leverkusen</a></li><li><a href="/bodenrichtwert-leverkusen/">Bodenrichtwert Leverkusen</a></li><li><a href="/grundstuecksmarktbericht-leverkusen/">Grundstücksmarktbericht</a></li><li><a href="/ratgeber/">Ratgeber</a></li></ul></div>
    </div>
    <div className="sf-bottom"><span>© 2026 Stark &amp; Hoffmann Immobilien GmbH · Amtsgericht Köln, HRB 116396 · Geschäftsführer: Patrick Stark, Julian Hoffmann</span><span>Alle Angaben unverbindlich. Irrtümer und Änderungen vorbehalten.</span></div>
  </footer>;
}
