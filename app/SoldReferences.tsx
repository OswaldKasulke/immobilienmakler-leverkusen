import type { SoldReference } from "./verkauft";

// Aktuelle und verkaufte Objekte als Straßenzeilen – nur Straßenname, nie Hausnummer.
export default function SoldReferences({ place, items, aktuell }: { place: string; items: SoldReference[] | undefined; aktuell?: string[] }) {
  const sold = items ?? [];
  const current = aktuell ?? [];
  if (sold.length === 0 && current.length === 0) return null;
  const question = <p className="sold-question">Fragen? <a href="#kontakt">Sprechen Sie uns an</a></p>;
  if (current.length === 0) {
    return (
      <section className="sold-references section" id="verkauft">
        <p className="eyebrow">Aus dem Netzwerk</p>
        <h2>Verkaufte Immobilien in {place}</h2>
        <p className="sold-streets">{sold.map((item) => item.street).join(", ")}</p>
        {question}
      </section>
    );
  }
  return (
    <section className="sold-references section" id="verkauft">
      <p className="eyebrow">Aus dem Netzwerk</p>
      <h2>Immobilien in {place}</h2>
      <h3 className="sold-subhead">Aktuell in der Vermarktung</h3>
      <p className="sold-streets">{current.join(", ")}</p>
      {sold.length > 0 && <>
        <h3 className="sold-subhead">Verkaufte Immobilien</h3>
        <p className="sold-streets">{sold.map((item) => item.street).join(", ")}</p>
      </>}
      {question}
    </section>
  );
}
