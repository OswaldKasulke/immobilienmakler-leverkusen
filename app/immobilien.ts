export type Property = {
  /** Anzeigetext auf der Karte, z. B. "Leverkusen-Opladen" oder "Köln-Niehl". */
  place: string;
  /** Slug der Stadtteilseite, wenn das Objekt in einem liegt — sonst null. */
  district: string | null;
  price: string;
  status: string;
  image: string;
  alt: string;
  url: string;
};

// AUTOMATISCH ERZEUGT — nicht von Hand aendern.
// Quelle: Evernest-Immobiliensuche, Kartenausschnitt Leverkusen
// (lat 51.083462 / lng 7.017159), abgerufen am 11.09.2026.
// Reihenfolge: Entfernung zum Kartenmittelpunkt aufsteigend, 30 naechste Objekte.
// Bildbeschreibungen stammen aus den Evernest-Objektdaten.
// Aktualisierung: scripts/update-listings.mjs, taeglich ueber
// .github/workflows/update-listings.yml.
export const properties: Property[] = [
  {
    "place": "Leverkusen-Bergisch Neukirchen",
    "district": "bergisch-neukirchen",
    "price": "539.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/46L1Jf9LbHbYMeAY57w5yn/a866e603738342ef38cd3bdf54489f27/1f1fb29a-71f4-48ed-a6dd-786b30784bb0?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Luftaufnahme eines Hauses mit Wintergarten und Garten, umgeben von Bäumen und Wegen.",
    "url": "https://www.evernest.com/de/listing/45DYL5NfNYRI0Ly4tatuao/"
  },
  {
    "place": "Leverkusen-Bergisch Neukirchen",
    "district": "bergisch-neukirchen",
    "price": "749.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/6xlUUSesEAG5sSMJKZXcym/b51066c2924848a0fdbcf83c1885ad17/85cdfee2-51fa-47e4-a196-c6a45d4d58e7?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Gemütlicher Balkon mit Sitzmöbeln, vielen Pflanzen und Blick ins Grüne.",
    "url": "https://www.evernest.com/de/listing/62Py2QbZt9RsPi8twJDNL6/"
  },
  {
    "place": "Leverkusen-Opladen",
    "district": "opladen",
    "price": "Preis auf Anfrage",
    "status": "Verkauft",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/10nYXQF75ADx3zL2AjdzEb/29ef0e6360012a98af16b1e2329861d3/8635494c-77d2-49ca-a7cd-6ed08732dc25?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Weiße Wohnhausfassade mit geschlossenen Rollläden an einer Straßenecke, daneben eine Tankstelle.",
    "url": "https://www.evernest.com/de/listing/1l4qOPITwtxDUvVo2TngnR/"
  },
  {
    "place": "Leverkusen-Lützenkirchen",
    "district": "luetzenkirchen",
    "price": "130.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/BXyiC8YSiqPotaE9zynfQ/bccb0940b12755bbe4233b15192cf7f9/522a6b50-03ff-4cfe-a563-67ce1bfab2fb?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Flur mit Jacken an der Garderobe, Spiegel und Blick ins Wohnzimmer mit Sofa.",
    "url": "https://www.evernest.com/de/listing/7M0GZZAlWjYZCSlbHjRnol/"
  },
  {
    "place": "Leverkusen-Lützenkirchen",
    "district": "luetzenkirchen",
    "price": "Preis auf Anfrage",
    "status": "Verkauft",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/2C5XRXW8S08eU58qnKaWGG/c7f3ee868fb4d54cdaafa1c01b8b65d1/3c757d3a-0fa8-49c6-a033-9fc186b86079?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Vorderansicht eines Einfamilienhauses mit zwei Garagen und gepflegtem Garten.",
    "url": "https://www.evernest.com/de/listing/6j1w6fnn81OisTop7JzHLd/"
  },
  {
    "place": "Leverkusen-Quettingen",
    "district": "quettingen",
    "price": "499.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/1EvybAPrnrBtN9dOwLImgW/324c41dd2a5863d6e96b168bb6988f80/9099cd28-363a-456b-b57b-6ea8d05d8bf7?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Dreistöckiges Wohnhaus mit gelbem Eingang an einer ruhigen Straße, mehrere geparkte Autos.",
    "url": "https://www.evernest.com/de/listing/UX932RJrfkfI0QXmyIMvf/"
  },
  {
    "place": "Langenfeld (Rheinland)-Reusrath",
    "district": null,
    "price": "694.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/6QiKJRtTvtuq6QU6fnReKD/4d9b99671d0d46684fad102417767954/2654e90e-9cca-49ae-9e4e-e45875babb36?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Backstein-Reihenhaus mit drei Fahrrädern und zwei geparkten Autos in einer Einfahrt.",
    "url": "https://www.evernest.com/de/listing/6jMkBNnDz5G8uJKinDSG2K/"
  },
  {
    "place": "Leverkusen-Bürrig",
    "district": "buerrig",
    "price": "489.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/2iGS2HEc02arzmXr7Okdt9/ac46b86b8eb3ca7b4ba2c0835db513c5/d5bd6a65-cdb5-4ded-aa94-5e0c2028cddf?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Modernes Einfamilienhaus mit grauem Dach, Garage und gepflasterter Einfahrt an einer ruhigen Straße.",
    "url": "https://www.evernest.com/de/listing/48xEKKaW66sK4e7i4JWNSk/"
  },
  {
    "place": "Leverkusen-Rheindorf",
    "district": "rheindorf",
    "price": "195.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/3Y21SAxPmLFY79ZpF17b5e/94de154756acf373fd7179626c92fdd8/6e70341a-f0b8-413a-a353-0216de2e7f51?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Heller Flur mit braunen Fliesen und holzvertäfelter Wand, Türen führen in weitere Zimmer.",
    "url": "https://www.evernest.com/de/listing/517unqTftzSFbar7hqh5c3/"
  },
  {
    "place": "Leverkusen-Schlebusch",
    "district": "schlebusch",
    "price": "699.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/3qy9aoHpma15fjReok1zsa/1c5b1ee4f5a6d5b3ff3bb943f6f45eb6/09770f2b-ceac-4424-a0a9-093365795b9a?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Luftaufnahme eines Wohnviertels mit mehreren Häusern und grünen Bäumen an einer Straße.",
    "url": "https://www.evernest.com/de/listing/7h3Nl78Za1pLM95egS9w7l/"
  },
  {
    "place": "Langenfeld (Rheinland)-Immigrath",
    "district": null,
    "price": "3.249.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/YKJEnsGp2aBQox95ucFlj/9d2ffc29a4e9cae9f334d1dec6f352f8/12561b22-9dce-4021-8d56-115293774fa8?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Mehrstöckiges Wohngebäude mit vielen Fenstern und großem Innenhof an einem klaren Tag.",
    "url": "https://www.evernest.com/de/listing/4tHfH79xGbmufV2U0s0uJr/"
  },
  {
    "place": "Leverkusen-Manfort",
    "district": "manfort",
    "price": "Preis auf Anfrage",
    "status": "Verkauft",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/28onQJwok0nsUxMHu4tpcF/17e0b3a515abd36ad62a58961ad03551/40a6fc68-386e-42b7-b294-daa19571bf0c?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Modernes Wohngebäude mit grauem Dach, gelben Fassadenakzenten und bepflanztem Vorgarten.",
    "url": "https://www.evernest.com/de/listing/5ZmxUCrrNhAYRY7tHXEnTE/"
  },
  {
    "place": "Langenfeld (Rheinland)-Immigrath",
    "district": null,
    "price": "249.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/5F57cXhMyf78Mh6XOGKP7n/ee51b716ce0fd895de52e18c5b286ae9/c0a832c1-e314-4101-8c01-874dac5c8369?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Mehrfamilienhaus mit Balkonen und gepflegtem Garten im Hinterhof.",
    "url": "https://www.evernest.com/de/listing/6OweC9ulkqH21HpUETlYHO/"
  },
  {
    "place": "Leverkusen-Wiesdorf",
    "district": "wiesdorf",
    "price": "1.495.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/51OKJg6BEZ1iLdPE6rfNRy/aea1ae45ee2845daa07345f6e7db541d/94277ddf-4974-4f62-ac10-5ec3971bd81e?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Mehrstöckiges Wohngebäude mit Geschäften im Erdgeschoss an einer belebten Straße mit Passanten.",
    "url": "https://www.evernest.com/de/listing/1007Z6hrpTQM73XvDZS71n/"
  },
  {
    "place": "Odenthal-Erberich",
    "district": null,
    "price": "695.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/5kO8RPl3P0l6T4JG8wpxCV/3296ca9e8d382f8b811ec589b6fd7a07/7a7c0d21-d168-4771-9ca3-7023dc24b9ef?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Luftaufnahme von Wohnhäusern mit Gärten und parkenden Autos in einer grünen Nachbarschaft.",
    "url": "https://www.evernest.com/de/listing/2a0HNTmKuXRf1lohi07T7p/"
  },
  {
    "place": "Odenthal-Glöbusch",
    "district": null,
    "price": "875.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/56yJ2L4XSKMPwm7abkSHhO/f2fb5546df56ba09719424f20c7880b8/64e66707-0915-41a1-9810-f6ceba72cefa?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Luftaufnahme eines Einfamilienhauses mit Garten, Wohnmobil und geparkten Autos an einer Ecke.",
    "url": "https://www.evernest.com/de/listing/ZUXtatV9l9NnxJLqKo0DZ/"
  },
  {
    "place": "Odenthal-Erberich",
    "district": null,
    "price": "475.000 €",
    "status": "Reserviert",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/76CeSFsWDiiAKSJb9tvCSe/8e58988f93315789dff5f7877458d5f5/2d598894-db1b-4133-ac08-58679835c64b?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Modernes Wohnhaus mit gepflastertem Weg, Treppe und gepflegtem grünen Rasen im Vordergrund.",
    "url": "https://www.evernest.com/de/listing/1ZKQZJSBzBfGNYG63GJxSq/"
  },
  {
    "place": "Monheim am Rhein-Monheim",
    "district": null,
    "price": "395.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/3kL8kp34ri6WnKDT9vjWMX/dd62721231a1277256040ead4a187f80/f7c8f6e4-a4d1-4dc0-b156-8c305de73b54?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Heller, leerer Raum mit großen Fenstern, Holzdecke und Fliesenboden, Blick auf Garten.",
    "url": "https://www.evernest.com/de/listing/7CcID6z8fnnu32XsZci5ym/"
  },
  {
    "place": "Bergisch Gladbach-Schildgen",
    "district": null,
    "price": "892.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/1VdUEglILwR1pj27rLPb0/d99fce6d19050aac68244799ba3fa21d/7d3afb4b-4a74-48f9-912e-f43fe08905cc?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Eingang eines Hauses mit Treppe und gepflegtem Garten mit runden Sträuchern.",
    "url": "https://www.evernest.com/de/listing/4QkJceuNhZnDcrDUTfgDCy/"
  },
  {
    "place": "Solingen-Dorp",
    "district": null,
    "price": "299.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/17P8EJlJiICXCUv2P2DzuY/396123883c71e9210e6300df051b363d/5d4990a2-6928-479d-b9fb-9eabb24a7e6a?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Zweistöckiges Wohnhaus mit Garten und Bäumen an einem sonnigen Tag.",
    "url": "https://www.evernest.com/de/listing/6MPV53BG7jCB7jNX5gKKH6/"
  },
  {
    "place": "Bergisch Gladbach-Nußbaum",
    "district": null,
    "price": "1.399.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/3htTTDunHlqMvj1OpSt3b7/47ed6d560cb78911a6c0d36b65591a69/a4ef604a-7cee-425d-a13a-6de57f4dc527?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Modernes weißes Wohnhaus mit großen Fenstern und Garten im Vordergrund.",
    "url": "https://www.evernest.com/de/listing/6Z7zXP636pyMpcqvah3tRt/"
  },
  {
    "place": "Köln-Seeberg",
    "district": null,
    "price": "350.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/2SKdAdxJt9vGWPWJ0iT8xP/f6719798a1d21e0fd6c8f214a319c303/c223868a-157c-41b1-b372-abaab46afbeb?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Flur mit Holztreppe, weißen Wänden, Fliesenboden und Blick auf einen Balkon mit rotem Geländer.",
    "url": "https://www.evernest.com/de/listing/49ZXMsYNgic6GJEfiR5ZPp/"
  },
  {
    "place": "Haan",
    "district": null,
    "price": "Preis auf Anfrage",
    "status": "Verkauft",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/7qaOR3Dj6INJGi4SRi97cM/e9ef5a348e8e2e5e64724379a6f7f7b6/54047c10-788e-4e4d-abfe-9c226549980e?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Großes Wohnhaus mit Garten, Auffahrt und Nebengebäude, umgeben von Bäumen und Rasen.",
    "url": "https://www.evernest.com/de/listing/zbRFcHaIP9MtTEz5CiXGV/"
  },
  {
    "place": "Köln-Niehl",
    "district": null,
    "price": "325.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/6hW2H7eNkOcbBAbeDmV9rk/23751bdd63c019e8eba09a09521c831e/823a31bf-9a0b-4895-9ccc-86ed22308a6a?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Leerer, heller Raum mit weißen Fliesen, großem Fenster und Tür, Blick nach draußen.",
    "url": "https://www.evernest.com/de/listing/6dfBgQE4AleYMtMGn0YqO7/"
  },
  {
    "place": "Köln-Dellbrück",
    "district": null,
    "price": "10.950.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/5FHRNFtVEbxCC0p3AfvbZQ/4c09031ce4be3475f3324b1a2c0b5a39/03de2f20-59e6-47b8-a82c-43dcbb654d9a?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Modernes, dreistöckiges Wohngebäude mit braunen und weißen Fassaden, großer Grünfläche und Zaun im Vordergrund.",
    "url": "https://www.evernest.com/de/listing/5ENiQl64Q9aofYcukySXKD/"
  },
  {
    "place": "Haan",
    "district": null,
    "price": "2.490.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/6n26I0IypjcLF5KX8uEN1j/729c68609fee633c4222b665ab289d53/95370e9d-060a-4205-b3ba-9b4fdc15503f?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Großes Wohnhaus mit Garten, Nebengebäude und geschwungener Einfahrt, umgeben von Bäumen.",
    "url": "https://www.evernest.com/de/listing/25ImNIe7lzam5QOs5EQ9xP/"
  },
  {
    "place": "Bergisch Gladbach-Hebborn",
    "district": null,
    "price": "475.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/1oRXEFMrCcavwOA61b6yVV/a1fbb87765ddf6d6eee1a459e839b138/8a2b2824-8125-46e4-b66d-a3e842c51d31?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Helle Wohnhausfassade mit Fenstern, Eingangstür und Vorgarten an einer Straße.",
    "url": "https://www.evernest.com/de/listing/2yfFtL9eTPZRGGrBwJVNDm/"
  },
  {
    "place": "Bergisch Gladbach-Stadtmitte",
    "district": null,
    "price": "499.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/4gM6cLKRVlYTE9EX3ezE55/6b4f7a1e3ced7cd39b6daef8fd4842c3/3be0723c-809c-4f06-80c9-eff4c7335cb6?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Flur mit gemustertem Fliesenboden und Holztreppe zu einer oberen Etage.",
    "url": "https://www.evernest.com/de/listing/6J9NwE5IVYBi2pGjUGDUEx/"
  },
  {
    "place": "Hilden",
    "district": null,
    "price": "155.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/aVRUdsF34RhvwHVeS3fHD/0f28969486551d0c47ebbc3703a19e22/b9c4f961-30d0-4efe-b8fa-84c71a0863ca?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Modernes, weißes Mehrfamilienhaus mit Balkonen, direkt an einer ruhigen Straße gelegen.",
    "url": "https://www.evernest.com/de/listing/7IegiFHiVs1Il1hMFczub4/"
  },
  {
    "place": "Köln-Pesch",
    "district": null,
    "price": "1.495.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/5mjKk1qEivUHHXvRLe7dL5/2d50916c3abf22f3faddf8936ccd36f8/872b28c7-3651-43f8-929f-b5f6fca8e33d?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Modernes Wohnhaus mit großem Garten, viel Rasenfläche und einem kleinen Pool.",
    "url": "https://www.evernest.com/de/listing/3kwcKwVIMYG9BIlfX0mOrQ/"
  }
];
