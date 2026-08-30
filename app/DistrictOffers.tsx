import { properties } from "./immobilien";

function uniqueProperties() {
  const unique = new Map<string, (typeof properties)[number]>();

  for (const property of properties) {
    const key = `${property.place}|${property.price}|${property.image}`;
    unique.set(key, property);
  }

  return [...unique.values()];
}

export function leverkusenOfferCount() {
  return uniqueProperties().filter((property) => property.place.startsWith("Leverkusen-")).length;
}

export default function DistrictOffers({ district }: { district: string }) {
  const all = uniqueProperties();
  const local = all.filter((property) => property.place === `Leverkusen-${district}`);
  const fallback = all.slice(0, 3);
  const offers = local.length ? local : fallback;
  const localOffers = local.length > 0;

  return (
    <section className="properties section district-offers" id="angebote">
      <div className="section-head">
        <div>
          <p className="eyebrow">Immobilienangebote & Referenzen</p>
          <h2>{localOffers ? `Immobilien in ${district}` : "Angebote aus Leverkusen und Umkreis"}</h2>
        </div>
        <p>{localOffers ? `Evernest-Angebote mit der Lageangabe Leverkusen-${district}.` : `Derzeit ist in ${district} kein eigenes Angebot in der Evernest-Suche geführt. Hier sehen Sie die nächstgelegenen Immobilien im Umkreis.`}</p>
      </div>
      <div className="property-grid">
        {offers.map((property, index) => (
          <a className="property-card" href={property.url} target="_blank" rel="noreferrer" key={property.url}>
            <div className="property-photo">
              <img data-src={property.image} alt={property.alt} loading={index < 2 ? "eager" : "lazy"} className="external-media" />
              {property.status && <span>{property.status}</span>}
            </div>
            <p className="property-place">{property.place}</p>
            <h3>{property.price}</h3>
          </a>
        ))}
      </div>
      <p className="listing-more"><a className="button dark" href="https://evernest.com/de/search/?lat=51.083462&lng=7.017159&zoom=11" target="_blank" rel="noreferrer">Alle Immobilien im Umkreis ansehen</a></p>
    </section>
  );
}
