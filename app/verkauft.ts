// Über das Evernest-Netzwerk verkaufte Objekte – nur Straßenname, nie Hausnummer.
// Quelle: Evernest-CRM, Stand 23.09.2026 (erzeugt mit evernest-data/verkauft_ts.py).
// Stadtteil über das Straßenverzeichnis (strassen.ts) samt Hausnummernbereich.
export type SoldReference = { street: string; typ: string; count: number };
export const soldByDistrict: Record<string, SoldReference[]> = {
 "Bürrig": [
  {
   "street": "Heinrich-Brüning-Straße",
   "typ": "Wohnung",
   "count": 1
  },
  {
   "street": "Ahrstraße",
   "typ": "Wohnung",
   "count": 1
  }
 ],
 "Lützenkirchen": [
  {
   "street": "Finkenweg",
   "typ": "Haus",
   "count": 1
  },
  {
   "street": "Wiehbachtal",
   "typ": "Haus",
   "count": 1
  },
  {
   "street": "Winterberg",
   "typ": "Haus",
   "count": 1
  },
  {
   "street": "Hamberger Straße",
   "typ": "Wohnung",
   "count": 1
  }
 ],
 "Manfort": [
  {
   "street": "Scharnhorststraße",
   "typ": "Wohnung",
   "count": 1
  }
 ],
 "Opladen": [
  {
   "street": "Karlstraße",
   "typ": "Haus",
   "count": 1
  },
  {
   "street": "Hanna-Neumann-Straße",
   "typ": "Haus",
   "count": 1
  },
  {
   "street": "Fakultätsstraße",
   "typ": "Wohnung",
   "count": 1
  }
 ],
 "Quettingen": [
  {
   "street": "Lützenkirchener Straße",
   "typ": "Wohnung",
   "count": 3
  },
  {
   "street": "Pfarrer-Jekel-Straße",
   "typ": "Wohnung",
   "count": 1
  }
 ],
 "Rheindorf": [
  {
   "street": "Schäfershütte",
   "typ": "Haus",
   "count": 1
  }
 ],
 "Schlebusch": [
  {
   "street": "Ölbergstraße",
   "typ": "Wohnung",
   "count": 1
  },
  {
   "street": "Schubertstraße",
   "typ": "Haus",
   "count": 1
  },
  {
   "street": "Grunewaldstraße",
   "typ": "Wohnung",
   "count": 1
  },
  {
   "street": "Mozartstraße",
   "typ": "Wohnung",
   "count": 1
  },
  {
   "street": "Am Märchen",
   "typ": "Haus",
   "count": 1
  },
  {
   "street": "Winand-Rossi-Straße",
   "typ": "Haus",
   "count": 1
  }
 ]
};
export const soldByPlace: Record<string, SoldReference[]> = {};
