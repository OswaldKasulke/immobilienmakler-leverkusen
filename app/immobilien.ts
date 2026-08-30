export type Property = {
  place: string;
  price: string;
  status: string;
  image: string;
  alt: string;
  url: string;
};

// Quelle: Evernest-Immobiliensuche, Kartenausschnitt Leverkusen
// (lat 51.083462 / lng 7.017159), abgerufen am 30.08.2026.
// Reihenfolge: Entfernung zum Kartenmittelpunkt aufsteigend, 30 naechste Objekte.
// Bildbeschreibungen stammen aus den Evernest-Objektseiten.
export const properties: Property[] = [
  {
    "place": "Leverkusen-Bergisch Neukirchen",
    "price": "539.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/46L1Jf9LbHbYMeAY57w5yn/a866e603738342ef38cd3bdf54489f27/1f1fb29a-71f4-48ed-a6dd-786b30784bb0?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Luftaufnahme eines Hauses mit Wintergarten und Garten, umgeben von Bäumen und Wegen.",
    "url": "https://www.evernest.com/de/listing/45DYL5NfNYRI0Ly4tatuao/"
  },
  {
    "place": "Leverkusen-Opladen",
    "price": "1.340.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/10nYXQF75ADx3zL2AjdzEb/29ef0e6360012a98af16b1e2329861d3/8635494c-77d2-49ca-a7cd-6ed08732dc25?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Weiße Wohnhausfassade mit geschlossenen Rollläden an einer Straßenecke, daneben eine Tankstelle.",
    "url": "https://www.evernest.com/de/listing/1l4qOPITwtxDUvVo2TngnR/"
  },
  {
    "place": "Leverkusen-Bürrig",
    "price": "489.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/2iGS2HEc02arzmXr7Okdt9/ac46b86b8eb3ca7b4ba2c0835db513c5/d5bd6a65-cdb5-4ded-aa94-5e0c2028cddf?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Modernes Einfamilienhaus mit grauem Dach, Garage und gepflasterter Einfahrt an einer ruhigen Straße.",
    "url": "https://www.evernest.com/de/listing/48xEKKaW66sK4e7i4JWNSk/"
  },
  {
    "place": "Leverkusen-Rheindorf",
    "price": "195.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/3Y21SAxPmLFY79ZpF17b5e/94de154756acf373fd7179626c92fdd8/6e70341a-f0b8-413a-a353-0216de2e7f51?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Heller Flur mit braunen Fliesen und holzvertäfelter Wand, Türen führen in weitere Zimmer.",
    "url": "https://www.evernest.com/de/listing/517unqTftzSFbar7hqh5c3/"
  },
  {
    "place": "Odenthal",
    "price": "695.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/5kO8RPl3P0l6T4JG8wpxCV/3296ca9e8d382f8b811ec589b6fd7a07/7a7c0d21-d168-4771-9ca3-7023dc24b9ef?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Luftaufnahme von Wohnhäusern mit Gärten und parkenden Autos in einer grünen Nachbarschaft.",
    "url": "https://www.evernest.com/de/listing/2a0HNTmKuXRf1lohi07T7p/"
  },
  {
    "place": "Solingen",
    "price": "299.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/17P8EJlJiICXCUv2P2DzuY/396123883c71e9210e6300df051b363d/5d4990a2-6928-479d-b9fb-9eabb24a7e6a?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Zweistöckiges Wohnhaus mit Garten und Bäumen an einem sonnigen Tag.",
    "url": "https://www.evernest.com/de/listing/6MPV53BG7jCB7jNX5gKKH6/"
  },
  {
    "place": "Haan",
    "price": "2.490.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/6n26I0IypjcLF5KX8uEN1j/729c68609fee633c4222b665ab289d53/95370e9d-060a-4205-b3ba-9b4fdc15503f?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Großes Wohnhaus mit Garten, Nebengebäude und geschwungener Einfahrt, umgeben von Bäumen.",
    "url": "https://www.evernest.com/de/listing/25ImNIe7lzam5QOs5EQ9xP/"
  },
  {
    "place": "Hilden",
    "price": "155.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/aVRUdsF34RhvwHVeS3fHD/0f28969486551d0c47ebbc3703a19e22/b9c4f961-30d0-4efe-b8fa-84c71a0863ca?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Modernes, weißes Mehrfamilienhaus mit Balkonen, direkt an einer ruhigen Straße gelegen.",
    "url": "https://www.evernest.com/de/listing/7IegiFHiVs1Il1hMFczub4/"
  },
  {
    "place": "Köln",
    "price": "750.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/1kXch5YNhPT1bR3jDCuk1t/74118937d6598b931016dcb3283b834a/02e08a61-f960-43d0-a3cb-92dae9b6a1b1?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Schmaler Durchgang zwischen zwei Backsteinwänden mit Blick auf den Himmel.",
    "url": "https://www.evernest.com/de/listing/4qyd8HE1XmhzwLWGO0tZLu/"
  },
  {
    "place": "Köln",
    "price": "1.495.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/5mjKk1qEivUHHXvRLe7dL5/2d50916c3abf22f3faddf8936ccd36f8/872b28c7-3651-43f8-929f-b5f6fca8e33d?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Modernes Wohnhaus mit großem Garten, viel Rasenfläche und einem kleinen Pool.",
    "url": "https://www.evernest.com/de/listing/3kwcKwVIMYG9BIlfX0mOrQ/"
  },
  {
    "place": "Bergisch Gladbach",
    "price": "3.900.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/xshBvzhUPe2oJUYoARyeg/9d992a4697aef920a3172182d8f6924c/8c174356-5f12-4844-8b0a-9c1e6e5f5df0?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Großes Einfamilienhaus mit dunklem Dach, Vorgarten und gepflasterter Auffahrt an einem sonnigen Tag.",
    "url": "https://www.evernest.com/de/listing/1b2iW8md9sRyBgpa3zrWnU/"
  },
  {
    "place": "Bergisch Gladbach",
    "price": "891.900 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/7iZanRwmj92aiQOzkFAFJC/eff292264b3bb58db7374fa417488759/4f38bfb9-4bfc-4714-ab54-691cf1d6cb58?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Modernes Haus mit großer Glasüberdachung, Terrasse, Gartenmöbeln und Rasenfläche im Vorgarten.",
    "url": "https://www.evernest.com/de/listing/6hq9UOIn1AAgKSkUGRDhcN/"
  },
  {
    "place": "Bergisch Gladbach",
    "price": "449.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/4oB6dXTC3ncfXw92nxrEVf/3b0034111885e7757c07165fbe8aa9ca/5e34cac0-b5f7-4e45-b11c-7c03fd5ab2bc?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Helles Wohnzimmer mit Kamin, Sesseln, Sofa, Teppichen und großen Fenstern mit Gartenblick.",
    "url": "https://www.evernest.com/de/listing/49onmenXN9iMpvIeb5mXxO/"
  },
  {
    "place": "Erkrath",
    "price": "1.150.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/712N7IxFJjLfvAmBZDtSop/4895af2061bc748a23edc0809877e84f/55807f5e-2243-44e2-b1b4-b72c0d700086?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Mehrfamilienhaus mit Balkonen, geparkten Autos und blauem Himmel im Wohngebiet.",
    "url": "https://www.evernest.com/de/listing/2631iCTGxA7vNPZrBvYzcM/"
  },
  {
    "place": "Köln",
    "price": "455.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/2b4rNnRL3bSjnBexhBnNfU/5727e443aa8e28417c658673dbd2c767/1abc520f-3f41-444d-af9b-c0070e13857d?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Wohnstraße mit mehrstöckigen Häusern, parkenden Autos, Fahrrädern und Bäumen am Gehweg.",
    "url": "https://www.evernest.com/de/listing/7nisTdnXmkYC1c9tzdbjyy/"
  },
  {
    "place": "Remscheid",
    "price": "2.229.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/1bfYTWO7e933FzX1grBvNH/e9efbfadbb9a931669d3fe6105c484aa/9f186280-fb44-4848-ab2b-3070032cfdbe?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Luftaufnahme von Wohnhäusern mit Balkonen und gepflegten Grünflächen davor.",
    "url": "https://www.evernest.com/de/listing/63II5Kro8owPsa9SU5dKQA/"
  },
  {
    "place": "Bergisch Gladbach",
    "price": "346.500 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/3iOUgnbQmi5YaS0sAqzTtb/0f4c71f58e2cedebef3803c107624273/b04cc1c9-56ce-4f63-8ca0-3d57103891a7?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Helles Wohnzimmer mit moderner Küche, Esstisch, Sofa und großen Fenstern mit Blick nach draußen.",
    "url": "https://www.evernest.com/de/listing/0dLo3OABJS1e4BTJ7bdtM/"
  },
  {
    "place": "Bergisch Gladbach",
    "price": "275.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/5vfOWIfDYdnqu4AykWKyNr/3b34863083a60e99480a7b3aca0d9a1d/381d1290-536a-4ab3-a5a0-79b63cea9888?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Mehrstöckiges Wohngebäude aus rotem Backstein mit parkenden Autos und begrüntem Eingangsbereich.",
    "url": "https://www.evernest.com/de/listing/1y6MChBFWS8o3NNyuULz90/"
  },
  {
    "place": "Köln",
    "price": "219.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/6aTnAMG0tuug7rh6DjIjw8/b581e0f93abda5842baac7f7788f3529/7639b759-d84d-49cb-950e-7119b85f824b?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Heller Wohnraum mit Parkettboden, gelben Wänden, Esstisch und großen Fenstern mit Turmblick.",
    "url": "https://www.evernest.com/de/listing/1BDPQsJORLnDwN6Ro5MPUi/"
  },
  {
    "place": "Remscheid",
    "price": "129.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/3UaeL84IvyiHjx4WiAsMN4/94f118252528caf735c72d317390b596/b25752cf-8223-489d-8319-356e6c34a31d?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Helles Wohnzimmer mit grauem Sofa, Holztisch und Essbereich mit sechs Stühlen.",
    "url": "https://www.evernest.com/de/listing/I2r6QjMrH9PbRW2HBmArc/"
  },
  {
    "place": "Bergisch Gladbach",
    "price": "499.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/RmzRzDgUERVTkqy8qDMKA/4a7e4d3c4d4272c85271e907906deb1d/f2347abf-83da-4577-8a1d-0e3310c173c6?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Zweistöckiges Wohnhaus mit roter Backsteinfassade, Vorgarten und Grünbüschen an einer Straße.",
    "url": "https://www.evernest.com/de/listing/5FYxtqa6aknNkXCDhz7F8l/"
  },
  {
    "place": "Bergisch Gladbach",
    "price": "895.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/60oR1MQiK4A6kfjmUVxNkH/9337dd8a982993b4df863eef141b2eef/337733cc-e6ca-453f-9791-ac620b47be1e?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Helles Wohnzimmer mit großen Fenstern, Parkettboden und Blick in den Garten.",
    "url": "https://www.evernest.com/de/listing/4sOpQWb7lTSp2u8YVKd1b1/"
  },
  {
    "place": "Düsseldorf",
    "price": "265.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/5NCX7h5CLpqzNbcX2OByD6/1c331e41bb5c90ec2272b6a1b3b3b09a/88d04c90-bfb6-4b4b-a4b3-b06233dbec62?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Balkon mit vielen Pflanzen, Tisch, Stuhl und Blick auf eine Straße mit Wohnhäusern.",
    "url": "https://www.evernest.com/de/listing/3rylX9mqLbCrNBxmb2IUil/"
  },
  {
    "place": "Köln",
    "price": "1.495.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/ppuNSzByAvEKu5HHRixVP/9a1d63ce40a1f31964b8e5b91cb24eff/31b6d003-7036-41d8-acf0-503307f9703b?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Moderne Wohnküche mit Esstisch, Hängelampen, großem Fenster und offener Treppe.",
    "url": "https://www.evernest.com/de/listing/5jTCkpcQXNkQrtNujMaTZq/"
  },
  {
    "place": "Düsseldorf",
    "price": "840.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/2M7SXIfRR4GUOARxOb2TcS/a44f056498b9a2036476bc446f77ff17/6f299ef1-b896-4554-9954-9889cc7fe498?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Zweistöckiges Backsteinhaus mit sechs Fenstern und einer mittigen Eingangstür.",
    "url": "https://www.evernest.com/de/listing/77sdC9pNZOCItpJh7DVNnx/"
  },
  {
    "place": "Dormagen",
    "price": "3.650.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/52DohjOSuppel62gK1xDPf/a844023e12f0225c76b2a4403895382f/75426eea-8ed1-46c2-8231-9f22a6708f3b?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Beleuchteter Weg führt zu modernem Wohnhaus mit Bäumen auf beiden Seiten.",
    "url": "https://www.evernest.com/de/listing/6nM6N6xveUEvLVFzPwqGk3/"
  },
  {
    "place": "Köln",
    "price": "649.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/3gyXdLLFgBsWHU0IKtt0hM/087f9b63b10185df4d114c47c0edc7d7/f57e2804-6b6a-42f7-9a08-c80e53304ef0?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Wohnzimmer mit braunem Ledersofa, Holzboden, Gitarrenständer und Essbereich vor großen Fenstern.",
    "url": "https://www.evernest.com/de/listing/3LaNUwDsriCHVdljeHp2Q3/"
  },
  {
    "place": "Köln",
    "price": "385.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/5c7W0AKxxNTHgNpFcbenLv/2e1cbbd79397b57882d7b1b733634f05/0a8b6dd4-205c-4148-b2d6-4e0f02d9eb7d?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Innenhof eines Wohngebäudes mit Glasdach, Pflanzenbeet und umliegenden Fenstern.",
    "url": "https://www.evernest.com/de/listing/57YyS4hILklfzGMFsTBaAW/"
  },
  {
    "place": "Pulheim",
    "price": "899.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/1zjBVlxGBaPvp1VfqCY6TN/ca263bc13fc0d895ef3b40f364043d36/f3fc9204-334c-417a-86f8-9844e04da2db?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Zweistöckiges Wohnhaus mit Laden im Erdgeschoss und großen Fenstern, daneben modernes Nachbargebäude.",
    "url": "https://www.evernest.com/de/listing/5eL3eZ4qcLi47GyCrLFAec/"
  },
  {
    "place": "Bergisch Gladbach",
    "price": "230.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/1K0TmO2yUbMQLmIFaaB4gC/82013519c3dae213d8eca307450e0e10/84eb93f0-b9fa-4a8e-95d0-1ae343a520e3?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Modernes Wohngebäude mit mehreren Balkonen und großen Fenstern auf einer grünen Wiese.",
    "url": "https://www.evernest.com/de/listing/1FLLNdfJjxxjl1Hc31nmlY/"
  }
];
