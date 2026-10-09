// Wochenmärkte je Stadtteil, Stand 09.10.2026.
// Quelle: Stadt Leverkusen, https://www.leverkusen.de/stadt-erleben/freizeit/wochenmaerkte
// Stadtteil je Adresse per OpenStreetMap-Geokodierung gegengeprüft (admin_level 10).
// Manfort, Hitdorf, Bürrig, Quettingen, Bergisch Neukirchen und Steinbüchel haben laut Stadt keinen Markt.

export type Wochenmarkt = { ort: string; zeiten: string };

export const wochenmarktQuelle = "https://www.leverkusen.de/stadt-erleben/freizeit/wochenmaerkte";

export const wochenmaerkte: Record<string, Wochenmarkt[]> = {
  alkenrath: [{ ort: "Graf-Galen-Platz", zeiten: "freitags 7–13 Uhr" }],
  kueppersteg: [{ ort: "Am alten Schafstall", zeiten: "freitags 7–13 Uhr" }],
  luetzenkirchen: [{ ort: "Im Dorf", zeiten: "dienstags 7–13 Uhr" }],
  opladen: [
    { ort: "Opladener Platz", zeiten: "donnerstags 7–13 Uhr" },
    { ort: "Opladener Frischemarkt, Fußgängerzone Kölner Straße", zeiten: "samstags 8–14 Uhr" },
  ],
  rheindorf: [{ ort: "Königsberger Platz", zeiten: "donnerstags 7–12:30 Uhr" }],
  schlebusch: [
    { ort: "Martin-Luther-Straße", zeiten: "mittwochs und samstags 7–12:30 Uhr" },
    { ort: "Schlebuscher Bauernmarkt, Fußgängerzone", zeiten: "donnerstags und samstags 8–13 Uhr" },
  ],
  wiesdorf: [
    { ort: "Citymarkt, Fußgängerzone Wiesdorf", zeiten: "mittwochs und samstags 7–13 Uhr" },
    { ort: "Hindenburgstraße 25", zeiten: "samstags 7–13 Uhr" },
  ],
};
