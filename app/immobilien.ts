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
// (lat 51.083462 / lng 7.017159), abgerufen am 14.10.2026.
// Reihenfolge: Entfernung zum Kartenmittelpunkt aufsteigend, 50 naechste Objekte.
// Bildbeschreibungen stammen aus den Evernest-Objektdaten.
// Aktualisierung: scripts/update-listings.mjs, taeglich ueber
// .github/workflows/update-listings.yml.
export const properties: Property[] = [
  {
    "place": "Leverkusen-Opladen",
    "district": "opladen",
    "price": "379.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/1UaVuuEXW4i00tOXqFSFtX/cf2705f43929a67140565e6fba5a376f/e7377ba0-8e28-40fb-8888-e265a677f5d2?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Zweistöckiges Haus mit weißer Fassade, Garten, zwei Fahrrädern und Metallzaun im Vordergrund.",
    "url": "https://www.evernest.com/de/listing/5gvFXjsnLzENcv7SKiTBYl/"
  },
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
    "price": "695.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/6xlUUSesEAG5sSMJKZXcym/b51066c2924848a0fdbcf83c1885ad17/85cdfee2-51fa-47e4-a196-c6a45d4d58e7?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Gemütlicher Balkon mit Sitzmöbeln, vielen Pflanzen und Blick ins Grüne.",
    "url": "https://www.evernest.com/de/listing/62Py2QbZt9RsPi8twJDNL6/"
  },
  {
    "place": "Langenfeld (Rheinland)-Reusrath",
    "district": null,
    "price": "2.690.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/6coI5W5BTlzDKPXqcp3F5O/5f06ffbeefc66ff9b1985756a00e9c52/e2fdb7ff-50f5-48e6-b3ec-0b5970188cc6?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Luftaufnahme von vier modernen Wohngebäuden mit Solarpaneelen und begrünten Dächern.",
    "url": "https://www.evernest.com/de/listing/66jKNfG2RqlPqEtIa52tBU/"
  },
  {
    "place": "Langenfeld (Rheinland)-Reusrath",
    "district": null,
    "price": "2.690.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/530MlLmPhRCm1Ioq0O1D2u/d72a83a3f3e760ef0cd0c8183408f9c5/bbe5ef76-d01f-4ec5-9790-c9b0b9ab4130?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Vier moderne Wohngebäude mit begrünten Dächern und Solarpanels, umgeben von Gärten und Parkplätzen.",
    "url": "https://www.evernest.com/de/listing/8sd9jXCKT7XRrXnSd6KgK/"
  },
  {
    "place": "Leverkusen-Opladen",
    "district": "opladen",
    "price": "519.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/5k3EdGXLwzZrdZMJ7CKUjT/90d71a0a92a37b6214406a053e1ca978/eb611764-05df-462f-ab82-59a914e861a5?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Heller Wohn- und Essbereich mit rundem Holztisch, beigen Stühlen und schwarzer Einbauküche.",
    "url": "https://www.evernest.com/de/listing/1bL20wHL4foRCmqc2EGBCK/"
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
    "price": "649.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/6QiKJRtTvtuq6QU6fnReKD/4d9b99671d0d46684fad102417767954/2654e90e-9cca-49ae-9e4e-e45875babb36?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Backstein-Reihenhaus mit drei Fahrrädern und zwei geparkten Autos in einer Einfahrt.",
    "url": "https://www.evernest.com/de/listing/6jMkBNnDz5G8uJKinDSG2K/"
  },
  {
    "place": "Langenfeld (Rheinland)-Reusrath",
    "district": null,
    "price": "390.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/2ejJtkDdFsVdAim8w4oY19/8ac2bae1e87ed07d7fd5f3667dacbb5e/e3879615-cd2a-45db-bcff-40129f1f9d8f?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Grundstück mit Umgebung",
    "url": "https://www.evernest.com/de/listing/1K19IEGA6NkCYKBeGuJRZw/"
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
    "place": "Leverkusen-Schlebusch",
    "district": "schlebusch",
    "price": "109.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/PEUNHAvaOnR058r6JAih9/75c66350ef56de7704f9a870d178538f/6bb2ba75-9211-48e8-b47f-cd5b4ee2423a?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Vierstöckiges Wohnhaus mit Balkonen und gepflegtem grünen Garten, umgeben von Bäumen.",
    "url": "https://www.evernest.com/de/listing/24uZAvsQJlLkiMk4PojkSi/"
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
    "price": "Preis auf Anfrage",
    "status": "Verkauft",
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
    "place": "Köln-Merkenich",
    "district": null,
    "price": "295.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/7mfCWa2JfTKCWZ2HZ6JLin/1b09dbbb141605f86ffa70e153c95c69/a96c8bc3-dba1-4f04-92b0-4e5a31b303ff?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Helles Wohnzimmer mit Holzdecke, großen Fenstern, Sitzmöbeln und Zimmerpflanzen.",
    "url": "https://www.evernest.com/de/listing/6IVSeMOBlxX3jpIIw9GyoZ/"
  },
  {
    "place": "Odenthal-Glöbusch",
    "district": null,
    "price": "795.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/lgLAfzcNzytn60vu0LjJf/76b42c7ff54c35037de12604baac636f/48197efa-2caf-41ad-a721-f59d4dfd5c88?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Einfamilienhaus mit Garten, Einfahrt und geparktem Auto an einer Straßenecke.",
    "url": "https://www.evernest.com/de/listing/ZUXtatV9l9NnxJLqKo0DZ/"
  },
  {
    "place": "Odenthal-Erberich",
    "district": null,
    "price": "Preis auf Anfrage",
    "status": "Verkauft",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/76CeSFsWDiiAKSJb9tvCSe/8e58988f93315789dff5f7877458d5f5/2d598894-db1b-4133-ac08-58679835c64b?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Modernes Wohnhaus mit gepflastertem Weg, Treppe und gepflegtem grünen Rasen im Vordergrund.",
    "url": "https://www.evernest.com/de/listing/1ZKQZJSBzBfGNYG63GJxSq/"
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
    "place": "Köln-Seeberg",
    "district": null,
    "price": "319.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/2SKdAdxJt9vGWPWJ0iT8xP/f6719798a1d21e0fd6c8f214a319c303/c223868a-157c-41b1-b372-abaab46afbeb?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Flur mit Holztreppe, weißen Wänden, Fliesenboden und Blick auf einen Balkon mit rotem Geländer.",
    "url": "https://www.evernest.com/de/listing/49ZXMsYNgic6GJEfiR5ZPp/"
  },
  {
    "place": "Düsseldorf-Garath",
    "district": null,
    "price": "375.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/7FXua0WbiZ4KNvROh51Y3f/a2b504c15641749be64d0cbe47ff3cf8/06ed0457-c20e-4c23-b2f6-8243cf237bc5?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Wohnhaus mit roter Fassade, umgeben von Bäumen, mehrere Fahrräder vor dem Eingang.",
    "url": "https://www.evernest.com/de/listing/1HcFWdvAvwSdMfHX356H1C/"
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
    "place": "Bergisch Gladbach-Paffrath",
    "district": null,
    "price": "475.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/Y0qkbNgFxlWWQnztABfsV/59daf34e268e2d4bc291321203ff6512/0b106c85-3114-457d-8fac-a2af33b5e48b?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Mehrere Reihenhäuser mit Vorgarten und gepflastertem Parkplatz, Bäume und Büsche davor.",
    "url": "https://www.evernest.com/de/listing/3xKoNSos65UllHupz5IEjk/"
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
    "price": "449.000 €",
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
    "price": "1.395.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/5mjKk1qEivUHHXvRLe7dL5/2d50916c3abf22f3faddf8936ccd36f8/872b28c7-3651-43f8-929f-b5f6fca8e33d?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Modernes Wohnhaus mit großem Garten, viel Rasenfläche und einem kleinen Pool.",
    "url": "https://www.evernest.com/de/listing/3kwcKwVIMYG9BIlfX0mOrQ/"
  },
  {
    "place": "Köln-Niehl",
    "district": null,
    "price": "200.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/3ZiZegldX5IqU9VhOf3LqP/10ea5c3c4e3f0172e8b93283b29f9366/4e578a32-83ae-48a1-af71-99a3522c3e3e?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Helles Wohnzimmer mit Holzboden, Tisch, Stühlen, Kommode und Balkon mit Ausblick.",
    "url": "https://www.evernest.com/de/listing/34ePphqFxoGpCtAlwAZFUR/"
  },
  {
    "place": "Düsseldorf-Benrath",
    "district": null,
    "price": "740.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/4TBZHO0BQexWYWQ3Awzaov/1839e8a6bbb2a3dd1565d82d1c3f9f16/c1afe841-760a-47ce-bba2-0651a41900f9?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Esszimmer mit langem Holztisch, acht Stühlen und großen Fenstern zur Terrasse.",
    "url": "https://www.evernest.com/de/listing/2ujLkIRaWLambORqZe3jWX/"
  },
  {
    "place": "Köln-Mülheim",
    "district": null,
    "price": "Preis auf Anfrage",
    "status": "Verkauft",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/1DjnxfRTXFOtaGb93WUgln/41e29562c2c9c0cf588f2a2e9e097eaa/16afc187-df18-45e8-a971-71452857f895?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Vorderansicht eines mehrstöckigen Wohngebäudes mit mehreren Fenstern und Eingangstür.",
    "url": "https://www.evernest.com/de/listing/4SxD1i9QbIPTOgNgHOH9Rq/"
  },
  {
    "place": "Bergisch Gladbach-Stadtmitte",
    "district": null,
    "price": "370.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/6VrSkiZxS3PVfDf30e21FS/3ca0b64da69a93a8c66fee80803e7475/bbf49d9a-6dc9-4932-8bf7-02e117c3821b?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Wohnhaus mit rotem Dach und Steintreppe, umgeben von Bäumen und Einfahrt mit geparktem Auto.",
    "url": "https://www.evernest.com/de/listing/739anoEJHURONwToX1fsi9/"
  },
  {
    "place": "Bergisch Gladbach-Stadtmitte",
    "district": null,
    "price": "575.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/3gazJkaCftzTHMzT5AeLJ3/c6883a8d95a3f4df0742e79d6ea22615/d8e0b9a0-e31d-4520-8f68-a8bf7cafb2f3?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Heller Flur mit Holztreppe, roten Fliesen und Heizkörper an der Wand.",
    "url": "https://www.evernest.com/de/listing/5pyXSGRbud5jAF6RVT5LJF/"
  },
  {
    "place": "Bergisch Gladbach-Stadtmitte",
    "district": null,
    "price": "945.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/NLH2yOKyGxCMfsFdjiXX5/179a7c040b8d2820e4d488da88e96b88/f14e3c36-4588-48e5-aa51-3336ed000420?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Vorderansicht eines Wohnhauses mit Garten und Bäumen, daneben ein geparktes Auto.",
    "url": "https://www.evernest.com/de/listing/4ViySYJ4zTnWCWwVXSAWgc/"
  },
  {
    "place": "Bergisch Gladbach-Stadtmitte",
    "district": null,
    "price": "Preis auf Anfrage",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/xshBvzhUPe2oJUYoARyeg/9d992a4697aef920a3172182d8f6924c/8c174356-5f12-4844-8b0a-9c1e6e5f5df0?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Großes Einfamilienhaus mit dunklem Dach, Vorgarten und gepflasterter Auffahrt an einem sonnigen Tag.",
    "url": "https://www.evernest.com/de/listing/1b2iW8md9sRyBgpa3zrWnU/"
  },
  {
    "place": "Bergisch Gladbach-Stadtmitte",
    "district": null,
    "price": "891.900 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/7iZanRwmj92aiQOzkFAFJC/eff292264b3bb58db7374fa417488759/4f38bfb9-4bfc-4714-ab54-691cf1d6cb58?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Modernes Haus mit großer Glasüberdachung, Terrasse, Gartenmöbeln und Rasenfläche im Vorgarten.",
    "url": "https://www.evernest.com/de/listing/6hq9UOIn1AAgKSkUGRDhcN/"
  },
  {
    "place": "Wuppertal-Kohlfurth",
    "district": null,
    "price": "399.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/4Tg27EhAW35DF4s3MyYIu3/97c5fe822e883a27fd7ece8bc161d6b2/5220afc2-92b8-458e-94c3-2d49fd03ae9a?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Grau gedecktes Wohnhaus mit grünen Fensterläden, Holzpforte und Zuweg aus Pflastersteinen.",
    "url": "https://www.evernest.com/de/listing/19XTLgTE8wj43VfDaxTmF0/"
  },
  {
    "place": "Wuppertal-Kohlfurth",
    "district": null,
    "price": "399.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/6NZUMKCDSBUGJNXvsz7IgQ/1ac43b61137871ddf0f0a1c0c023adc0/81b7982d-c08d-4d0e-b23a-ffa4b01061d9?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Luftaufnahme eines Wohnhauses mit Garten am Waldrand, umgeben von anderen Häusern.",
    "url": "https://www.evernest.com/de/listing/1UgZQaEZUjGH8xKLybjiwr/"
  },
  {
    "place": "Köln-Buchheim",
    "district": null,
    "price": "265.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/cQ7WknpXpdfyw5G5CnFDK/cea564644e7c230757b0d2f5224b0310/17db5b7e-8d91-4b9c-a5b5-192700cbdf7d?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Heller Flur mit Fliesenboden, Garderobe und Blick in ein Kinderzimmer mit Etagenbett.",
    "url": "https://www.evernest.com/de/listing/5COyoAXSrPLgd0769t920c/"
  },
  {
    "place": "Köln-Nippes",
    "district": null,
    "price": "299.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/5jkoluS0HFRWnM8v9jU9QW/c9bade0301290b242f2df1054b1847e7/bae6c069-47ab-4983-b4e0-c553c291a57b?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Langer, schmaler Flur mit gemusterten Fliesen und Holztür am Ende.",
    "url": "https://www.evernest.com/de/listing/404wPAR92ef2h6D5qscMpA/"
  },
  {
    "place": "Remscheid-Ehringhausen",
    "district": null,
    "price": "1.150.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/gleFVzYe43ucIqb3xewh5/499cbfb2f495b5027bc0ab4161c13deb/1b8c3fda-59d5-478b-8d04-90fb49f508a5?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Gepflegter Garten mit großem Pool und einer Terrasse an einem Einfamilienhaus.",
    "url": "https://www.evernest.com/de/listing/5eHh1vQSlViOynlAXlsE2S/"
  },
  {
    "place": "Bergisch Gladbach-Stadtmitte",
    "district": null,
    "price": "449.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/4oB6dXTC3ncfXw92nxrEVf/3b0034111885e7757c07165fbe8aa9ca/5e34cac0-b5f7-4e45-b11c-7c03fd5ab2bc?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Helles Wohnzimmer mit Kamin, Sesseln, Sofa, Teppichen und großen Fenstern mit Gartenblick.",
    "url": "https://www.evernest.com/de/listing/49onmenXN9iMpvIeb5mXxO/"
  },
  {
    "place": "Düsseldorf-Benrath",
    "district": null,
    "price": "235.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/2bVIN5M6BFa8EjJSMCnBHg/078feffcd5e80bc45ad82f0492c14ce5/9fc48d05-a11d-4fc3-b5ff-4899eb678ef3?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Helles Wohnzimmer mit Esstisch, Sofa, Fernseher und großen Fenstern mit Blick auf einen Balkon.",
    "url": "https://www.evernest.com/de/listing/61bwsmvtH7JnkWiAUa2c6c/"
  },
  {
    "place": "Bergisch Gladbach-Sand",
    "district": null,
    "price": "590.000 €",
    "status": "",
    "image": "https://images.ctfassets.net/if6f7uzjzqut/1v52YoPKpxyvxZfwFlqRW5/fa83a0b92050588e68a80d4de600e587/aaec30a1-be14-4bd5-964b-e55a5a28e5dd?w=960&h=600&fit=fill&fm=webp&q=82",
    "alt": "Freistehendes Wohnhaus mit rotem Dach, gepflasterter Einfahrt und kleinem Garten, in ruhigem Wohngebiet.",
    "url": "https://www.evernest.com/de/listing/99zrZppy45kmE2s6BLtjd/"
  }
];
