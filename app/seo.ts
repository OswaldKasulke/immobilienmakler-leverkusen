export const siteUrl = "https://leverkusen-makler.de";
export const businessId = `${siteUrl}/#immobilienmakler`;
export const defaultImage = `${siteUrl}/team/team-leverkusen.jpg`;

export const businessSchema = {
  "@type": ["RealEstateAgent", "LocalBusiness"],
  "@id": businessId,
  name: "Stark & Hoffmann Immobilien GmbH",
  alternateName: "Stark & Hoffmann Immobilien Leverkusen",
  url: `${siteUrl}/`,
  image: defaultImage,
  telephone: "+49 2204 914 7881",
  email: "leverkusen@evernest.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Wiesdorfer Platz 19",
    postalCode: "51373",
    addressLocality: "Leverkusen",
    addressCountry: "DE",
  },
  areaServed: [
    { "@type": "City", name: "Leverkusen" },
    { "@type": "AdministrativeArea", name: "Rheinisch-Bergischer Kreis" },
    { "@type": "AdministrativeArea", name: "Oberbergischer Kreis" },
  ],
  sameAs: [
    "https://www.evernest.com/de/unsere-makler/leverkusen/",
    "https://www.google.com/maps/place/Evernest+Bergisch+Gladbach+-+Stark+%26+Hoffmann+Immobilien+GmbH/",
    "https://www.instagram.com/evernest.bergischgladbach/",
  ],
};

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const faqSchema = (items: Array<[string, string] | { question: string; answer: string }>) => ({
  "@type": "FAQPage",
  mainEntity: items.map((item) => {
    const [question, answer] = Array.isArray(item) ? item : [item.question, item.answer];
    return { "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } };
  }),
});

export const graphSchema = (...items: Array<object | object[]>) => ({
  "@context": "https://schema.org",
  "@graph": items.flat(),
});
