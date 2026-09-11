import type {MetadataRoute} from "next"; import {districts} from "./data"; import {lastmod} from "./lastmod";
export const dynamic = "force-static";
const base="https://leverkusen-makler.de";

// Je Route die Quelle, die ihren Inhalt bestimmt. app/layout.tsx und app/seo.ts
// zaehlen bewusst nicht mit: sie stecken in jeder Seite und wuerden nach jeder
// Layout-Aenderung wieder allen Seiten dasselbe Datum geben. app/immobilien.ts
// steht nur bei "/" - die Angebote werden taeglich aktualisiert, die
// Stadtteilseiten sollen davon nicht jeden Tag auf "heute" springen.
const INHALT="app/[slug]/page.tsx"; const DATEN="app/data.ts";
const quellen:Record<string,string[]>={
  "":["app/page.tsx","app/immobilien.ts","app/components.tsx"],
  "immobilienbewertung":["app/immobilienbewertung/page.tsx","app/gemeinsame-bewertung.ts","app/strassen.ts"],
  "team":["app/team/page.tsx"],
  "downloads":["app/downloads/page.tsx"],
  "agb":["app/agb/page.tsx"],
  "datenschutz":["app/datenschutz/page.tsx"],
};
const ausInhalt=["immobilienmarkt-leverkusen","gutachterausschuss-leverkusen","bodenrichtwert-leverkusen",
  "immobilienrichtwert-leverkusen","grundstuecksmarktbericht-leverkusen","haus-verkaufen-leverkusen",
  "wohnung-verkaufen-leverkusen","grundstueck-verkaufen-leverkusen","impressum"];

export default function sitemap():MetadataRoute.Sitemap{
  const fixed=["","immobilienbewertung",...ausInhalt.slice(0,8),"team","downloads","impressum","agb","datenschutz"];
  return [
    ...fixed.map(p=>({
      url:`${base}/${p}${p?"/":""}`,
      lastModified:lastmod(...(quellen[p]??[INHALT,DATEN])),
      changeFrequency:"monthly" as const,
      priority:p===""?1:.7,
    })),
    ...districts.map(d=>({
      url:`${base}/stadtteile/${d.slug}/`,
      lastModified:lastmod("app/stadtteile/[slug]/page.tsx",DATEN,"app/stadtteile.ts",
        "app/district-images.ts","app/DistrictOffers.tsx"),
      changeFrequency:"monthly" as const,
      priority:.8,
    })),
  ];
}
