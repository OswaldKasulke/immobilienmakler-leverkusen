export const siteUrl = "https://leverkusen-makler.de";
export const businessId = `${siteUrl}/#immobilienmakler`;
export const defaultImage = `${siteUrl}/open-graph.svg`;

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
  ],
  sameAs: [
    "https://www.evernest.com/de/unsere-makler/leverkusen/",
    "https://www.google.com/maps/search/?api=1&query=Evernest%20Leverkusen%2C%20Wiesdorfer%20Platz%2019%2C%2051373%20Leverkusen",
    "https://www.instagram.com/evernest.leverkusen/",
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
