"use client";

import { useEffect, useState } from "react";
import StreetSearch, { type ResolvedAddress } from "./StreetSearch";
import { calculateShared, type AddressCandidate } from "../gemeinsame-bewertung";

const propertyTypes=[["Wohnung","▤","Eigentumswohnung"],["Haus","⌂","Ein- oder Zweifamilienhaus"],["Mehrfamilienhaus","▥","Drei oder mehr Wohneinheiten"],["Grundstück","◇","Unbebautes Wohngrundstück"]];
const conditions=[["1 – Sehr gut","Neuwertig oder umfassend saniert"],["2 – Gut","Modernisiert und gut ausgestattet"],["3 – Befriedigend","Gepflegt und altersgemäß"],["4 – Ausreichend","Leichter Renovierungsbedarf"],["5 – Mangelhaft","Deutlicher Modernisierungsbedarf"],["6 – Ungenügend","Sanierungsstau und hoher Aufwand"]];
const houseStyles=[["Freistehend","Freistehendes Ein- oder Zweifamilienhaus"],["Doppelhaushälfte","Doppelhaushälfte oder Reihenendhaus"],["Reihenhaus","Reihenmittelhaus"]];
const locations=[["Gute Lage","Bevorzugte Wohnlage"],["Mittlere Lage","Durchschnittliche Wohnlage"],["Einfache Lage","Einfache Wohnlage"]];

type ValuationData=Record<string,string>;
type ValuationResult={value:number;low:number;high:number;label:string;basis:string;comparison:string;protocol:string;grossYield?:number;warning?:string;outside?:boolean};
// Einheitliche Ausserhalb-Behandlung: identischer Aufbau (Erkennungslink im
// Strassenschritt, Ruckfall-Freitextformular, kein Ergebnis, Lead trotzdem
// senden) auch in ~/stark/app/immobilienbewertung/BewertungsForm.tsx (BGL)
// und in makler-schael-sick.de/src/rechner.py. Nur Gebietsname und Telefon lokal.
const AUSSERHALB_GEBIET="des gemeinsamen Bewertungsgebiets Köln, Rhein-Erft-Kreis, Leverkusen und Bergisch Gladbach";

const money=(value:number)=>new Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR",maximumFractionDigits:0}).format(Math.round(value/1000)*1000);
const de=(value:number,digits=0)=>value.toLocaleString("de-DE",{maximumFractionDigits:digits});
const numeric=(value:string)=>{
  if(!value)return 0;
  let text=String(value).replace(/[^0-9.,-]/g,"");
  const comma=text.lastIndexOf(","), dot=text.lastIndexOf(".");
  if(comma>-1&&dot>-1){
    // Das hintere Zeichen trennt die Dezimalstellen.
    text = comma>dot ? text.replace(/\./g,"").replace(",",".") : text.replace(/,/g,"");
  } else if(comma>-1){
    text = (text.split(",").length>2||/,\d{3}$/.test(text)) ? text.replace(/,/g,"") : text.replace(",",".");
  } else if(dot>-1){
    // Ein Punkt trennt nur dann Tausender, wenn genau drei Ziffern folgen.
    text = (text.split(".").length>2||/\.\d{3}$/.test(text)) ? text.replace(/\./g,"") : text;
  }
  return Number(text)||0;
};

// Alle Werte: Grundstuecksmarktbericht der Stadt Leverkusen 2026 (Berichtsjahr 2025).

// Kapitel 4.7.3 – gebietstypische Bodenrichtwerte in EUR/m², nach Wohnlage.
const bodenrichtwert:Record<string,Record<string,number>>={
  "Freistehend":{"Gute Lage":550,"Mittlere Lage":470,"Einfache Lage":420},
  "Doppelhaushälfte":{"Gute Lage":580,"Mittlere Lage":510,"Einfache Lage":440},
  "Reihenhaus":{"Gute Lage":600,"Mittlere Lage":520,"Einfache Lage":450},
};
// Kapitel 4.7.4 – aggregierte Funktion der Umrechnungskoeffizienten fuer die Grundstuecksgroesse.
const plotCoefficient=(plot:number)=>plot>0?(231.226-21.392*Math.log(plot))/100:1;

// Kapitel 11.1 – Rohertragsfaktoren zum Stichtag 01.01.2026.
// Die Ausgabe wird zusaetzlich auf 4,5 % Bruttorendite gedeckelt: Faktoren
// oberhalb von 22,2 entsprechen einer Rendite unter 4,5 %. Der Deckel ist eine
// bewusst vorsichtige Annahme, keine Vorgabe des Gutachterausschusses, und wird
// im Rechenprotokoll ausgewiesen.
const YIELD_FLOOR=0.045;
const MAX_MULTIPLIER=1/YIELD_FLOOR;
const officialMultiplier=(type:string,units:number,yearlyRent:number):[number,string]=>{
  if(type==="Wohnung")return[25.5,"Rohertragsfaktor 25,5 für vermietetes Wohnungseigentum"];
  if(type==="Haus")return[26.1,"Rohertragsfaktor 26,1 für vermietete Ein- und Zweifamilienhäuser"];
  if(units===3)return[18.7,"Rohertragsfaktor 18,7 für Dreifamilienhäuser"];
  return yearlyRent>40000?[18.2,"Rohertragsfaktor 18,2 für Mehrfamilienhäuser mit Rohertrag 40–125 Tsd. €"]
                         :[20.4,"Rohertragsfaktor 20,4 für Mehrfamilienhäuser mit Rohertrag 20–40 Tsd. €"];
};
const rentMultiplier=(type:string,units:number,yearlyRent:number):[number,string]=>{
  const [official,note]=officialMultiplier(type,units,yearlyRent);
  if(official<=MAX_MULTIPLIER)return[official,note];
  return[MAX_MULTIPLIER,`${note}; auf ${de(MAX_MULTIPLIER,2)} gedeckelt, damit die Bruttorendite nicht unter 4,5 % fällt`];
};

const roundFive=(value:number)=>Math.round(value/5000)*5000;

function calculate(data:ValuationData,candidates:AddressCandidate[]):ValuationResult|null{
  if(data.outside==="yes"){
    const adr=`${data.outsideStreet} ${data.outsideNumber}`.trim()+`, ${data.outsideZip?data.outsideZip+" ":""}${data.outsideCity}`;
    return{value:0,low:0,high:0,label:"Adresse außerhalb unseres Gebiets",basis:"",comparison:"",outside:true,
      protocol:[`Lage: ${adr}.`,`Diese Adresse liegt außerhalb ${AUSSERHALB_GEBIET}; für sie liegt kein amtlicher Vergleichswert aus dem Grundstücksmarktbericht vor.`,"Es wurde deshalb kein automatischer Wert berechnet. Die Anfrage wurde zur persönlichen Einschätzung weitergeleitet."].join("\n")};
  }
  const living=numeric(data.living),plot=numeric(data.plot),year=numeric(data.year),units=numeric(data.units);
  const rentMonth=numeric(data.rentCurrentMonth)||(numeric(data.rentCurrentYear)/12);
  const conditionFactor=({1:1.2,2:1.1,3:1,4:.9,5:.8,6:.7} as Record<number,number>)[Number.parseInt(data.condition)]||1;
  const location=data.location||"Mittlere Lage";
  const protocol:string[]=[`Lage: ${data.street} ${data.number}, ${data.zip} ${data.city}${data.district?`-${data.district}`:""}. Zuordnung über den gemeinsamen Straßen-Supermaster.`,
    "Datengrundlage: regional zuständiger Gutachterausschuss 2026; einheitliche Rechenlogik von romanbecker.de."];
  let value=0,label="Geschätzter Immobilienwert",basis="",comparison="",warning:string|undefined;

  if(data.type==="Grundstück"){
    const brw=bodenrichtwert[data.houseStyle||"Freistehend"][location];
    const coefficient=plotCoefficient(plot);
    const development=data.development==="Erschlossen"?1:data.development==="Teilerschlossen"?.75:data.development==="Nicht erschlossen"?.5:1;
    value=plot*brw*coefficient*development; label="Geschätzter Bodenwert";
    basis=`${de(plot)} m² × ${de(brw)} €/m² × ${de(coefficient,2)} × ${de(development,2)}`;
    comparison=`Gebietstypischer Bodenrichtwert ${de(brw)} €/m² für ${(data.houseStyle||"Freistehend").toLowerCase()==="freistehend"?"freistehende Ein- und Zweifamilienhäuser":data.houseStyle} in ${location.toLowerCase()}`;
    protocol.push(`Bodenrichtwert: ${comparison} (Kap. 4.7.3).`,
      `Umrechnungskoeffizient Grundstücksgröße: ${de(coefficient,2)} nach KF = 231,226 − 21,392 × ln(${de(plot)}) (Kap. 4.7.4).`,
      `Verfahren Bodenwert: ${basis} = ${money(value)}.`);
    warning="Der adressgenaue Bodenrichtwert richtet sich nach der konkreten BORIS-NRW-Zone und ist kein Verkehrswert.";
  } else if(rentMonth>0){
    const yearly=rentMonth*12;
    const [multiplier,note]=rentMultiplier(data.type,units,yearly);
    value=yearly*multiplier; basis=`${de(rentMonth)} € × 12 × ${de(multiplier,1)}`; comparison=note;
    protocol.push(`Multiplikator: ${note} (Kap. 11.1, Stichtag 01.01.2026).`,
      `Verfahren Ertragswert: ${basis} = ${money(value)}. Der Zustand wird nicht zusätzlich angesetzt, da die Miete ihn bereits abbildet.`);
  } else if(data.type==="Mehrfamilienhaus"){
    return null;
  } else {
    const shared=calculateShared({type:data.type,living,condition:String(Number.parseInt(data.condition))},candidates);
    if(!shared)return null;
    value=shared.value;
    basis=`${de(living)} m² × ${de(shared.pricePerSqm)} €/m² × ${de(shared.objectFactor,2)} × ${de(shared.conditionFactor,2)}`;
    comparison=shared.source;
    protocol.push(`Preis je m²: ${de(shared.pricePerSqm)} €/m². Quelle: ${shared.source}.`,`Einheitliche Roman-Becker-Basis: ${basis} = ${money(shared.raw)}.${shared.floorApplied?" Die Roman-Mindestwertregel wurde angewendet.":""}`);
    if(shared.ambiguous)protocol.push("Die Adresse liegt in einem Überschneidungsbereich. Für die Bewertung wurde der höhere der möglichen Gebietswerte verwendet.");
  }

  const rounded=roundFive(value),low=roundFive(rounded*.9),high=roundFive(rounded*1.1);
  const grossYield=rentMonth>0?(rentMonth*12/rounded)*100:undefined;
  protocol.push(`Rundung: ${money(value)} auf ${money(rounded)}; Spanne ±10 % = ${money(low)} bis ${money(high)}.${grossYield?` Bruttorendite: ${grossYield.toFixed(2).replace(".",",")} %.`:""}`);
  return{value:rounded,low,high,label,basis,comparison,protocol:protocol.join("\n"),grossYield,warning};
}

export default function BewertungsForm(){
  const [step,setStep]=useState(1); const [result,setResult]=useState<ValuationResult|null>(null); const [addressValid,setAddressValid]=useState(false); const [sendStatus,setSendStatus]=useState<"idle"|"sending"|"sent"|"error">("idle");
  const [addressCandidates,setAddressCandidates]=useState<AddressCandidate[]>([]);
  const [data,setData]=useState<ValuationData>({type:"",houseStyle:"",location:"",street:"",number:"",zip:"",district:"",city:"Leverkusen",living:"",plot:"",rooms:"",units:"",development:"",rentCurrentMonth:"",rentCurrentYear:"",condition:"",year:"",first:"",last:"",email:"",phone:"",contactAddress:"",contactZip:"",contactCity:"",consent:"",outside:"",outsideStreet:"",outsideNumber:"",outsideZip:"",outsideCity:""});
  const update=(key:string,value:string)=>setData(prev=>prev[key]===value?prev:{...prev,[key]:value});
  useEffect(()=>{const street=new URLSearchParams(window.location.search).get("street");if(street)update("street",street);},[]);
  const resolved=(address:ResolvedAddress)=>{setAddressValid(address.valid);setAddressCandidates(address.candidates);update("zip",address.zip);update("district",address.district);update("city",address.city);};
  const next=()=>setStep(value=>Math.min(7,value+1)); const back=()=>setStep(value=>Math.max(1,value-1));
  const needsStyle=data.type==="Grundstück";
  const hasSize=data.type==="Grundstück"?numeric(data.plot)>0:numeric(data.living)>0;
  const rentPresent=numeric(data.rentCurrentMonth)>0||numeric(data.rentCurrentYear)>0;
  const canContinue=step===1?!!data.type:step===2?(data.outside==="yes"?!!data.outsideStreet&&!!data.outsideCity:!!data.street&&addressValid):step===3?hasSize:step===4?data.type!=="Mehrfamilienhaus"||rentPresent:step===5?(data.type==="Grundstück"?!!data.location:!!data.condition&&numeric(data.year)>=1800):step===6?!!data.first&&!!data.last&&!!data.email&&!!data.phone&&data.consent==="yes":true;

  const sendLead=async(calculated:ValuationResult)=>{
    setSendStatus("sending"); const body=new FormData();
    const fields:Record<string,string>={type:"immobilienbewertung",site:"LEV",objektart:data.type,bauweise:data.houseStyle,wohnlage:data.location,wohnflaeche:data.living,grundstuecksflaeche:data.plot,zimmer:data.rooms,einheiten:data.units,erschliessung:data.development,zustand:data.condition,baujahr:data.year,miete_ist:data.rentCurrentMonth,miete_ist_jahr:data.rentCurrentYear,immo_strasse:data.outside==="yes"?`${data.outsideStreet} ${data.outsideNumber}`.trim():`${data.street} ${data.number}`.trim(),immo_plz:data.outside==="yes"?data.outsideZip:data.zip,immo_veedel:data.outside==="yes"?"":data.district,immo_ort:data.outside==="yes"?data.outsideCity:data.city,vorname:data.first,nachname:data.last,email:data.email,telefon:data.phone,kontakt_strasse:data.contactAddress,kontakt_plz:data.contactZip,kontakt_ort:data.contactCity,ergebnis:calculated.outside?"":money(calculated.value),preisspanne:calculated.outside?"":`${money(calculated.low)} – ${money(calculated.high)}`,rechenweg:calculated.protocol,website:""};
    Object.entries(fields).forEach(([key,value])=>body.append(key,value));
    try{const response=await fetch("https://romanbecker.de/submit.php",{method:"POST",body});setSendStatus(response.ok?"sent":"error");}catch{setSendStatus("error");}
  };
  const evaluate=()=>{const calculated=calculate(data,addressCandidates);if(!calculated)return;setResult(calculated);setStep(7);void sendLead(calculated);};

  return <div className="valuation-tool"><div className="progress" aria-label={`Schritt ${step} von 7`}>{[1,2,3,4,5,6,7].map(n=><span className={n<=step?"active":""} key={n}>{n}</span>)}</div><div className="tool-panel">
    {step===1&&<><p className="eyebrow">Schritt 1 von 7</p><h2>Was möchten Sie bewerten?</h2><p className="tool-intro">Wählen Sie die Art Ihrer Immobilie.</p><div className="type-grid">{propertyTypes.map(([type,icon,description])=><button type="button" className={data.type===type?"selected":""} onClick={()=>update("type",type)} key={type}><span>{icon}</span><strong>{type}</strong><small>{description}</small></button>)}</div>{needsStyle&&<><p className="eyebrow">Bauweise</p><div className="condition-grid">{houseStyles.map(([style,description])=><button type="button" className={data.houseStyle===style?"selected":""} onClick={()=>update("houseStyle",style)} key={style}><strong>{style}</strong><small>{description}</small></button>)}</div></>}</>}
    {step===2&&data.outside!=="yes"&&<><p className="eyebrow">Schritt 2 von 7</p><h2>Wo liegt die Immobilie?</h2><p className="tool-intro">Suchen Sie jede Adresse in Köln, im Rhein-Erft-Kreis, in Leverkusen oder Bergisch Gladbach. PLZ und Preisgebiet werden über den gemeinsamen Straßen-Supermaster bestimmt.</p><StreetSearch street={data.street} houseNumber={data.number} onStreetChange={(value)=>update("street",value)} onHouseNumberChange={(value)=>update("number",value)} onResolve={resolved}/>{addressValid&&<div className="resolved-grid"><span>PLZ<strong>{data.zip}</strong></span><span>Ort<strong>{data.city}</strong></span><span>Preisgebiet<strong>{data.district}</strong></span></div>}<p className="address-result"><button type="button" className="link-btn" onClick={()=>update("outside","yes")}>Adresse nicht gefunden? Manuell eingeben →</button></p></>}{step===2&&data.outside==="yes"&&<><p className="eyebrow">Schritt 2 von 7</p><h2>Wo liegt die Immobilie?</h2><p className="tool-intro">Diese Adresse liegt außerhalb {AUSSERHALB_GEBIET}. Wir berechnen hier keinen automatischen Wert, schauen uns Ihre Immobilie aber gern persönlich an – tragen Sie ein, wo sie liegt.</p><div className="form-row"><label>Straße *<input value={data.outsideStreet} onChange={e=>update("outsideStreet",e.target.value)} placeholder="Straße"/></label><label>Hausnummer<input value={data.outsideNumber} onChange={e=>update("outsideNumber",e.target.value)} placeholder="z. B. 12"/></label></div><div className="form-row"><label>PLZ<input value={data.outsideZip} onChange={e=>update("outsideZip",e.target.value)} inputMode="numeric" placeholder="z. B. 40212"/></label><label>Ort *<input value={data.outsideCity} onChange={e=>update("outsideCity",e.target.value)} placeholder="z. B. Düsseldorf"/></label></div><p className="address-result"><button type="button" className="link-btn" onClick={()=>update("outside","")}>← Zur gemeinsamen Straßensuche</button></p></>}
    {step===3&&<><p className="eyebrow">Schritt 3 von 7</p><h2>Wie groß ist die Immobilie?</h2><p className="tool-intro">Geben Sie die vorhandenen Flächen an.</p>{data.type!=="Grundstück"&&<label>Wohnfläche in m² *<input inputMode="decimal" value={data.living} onChange={e=>update("living",e.target.value)} placeholder="z. B. 120"/></label>}<label>Grundstücksfläche in m² {data.type==="Grundstück"&&"*"}<input inputMode="decimal" value={data.plot} onChange={e=>update("plot",e.target.value)} placeholder="z. B. 450"/></label></>}
    {step===4&&<><p className="eyebrow">Schritt 4 von 7</p><h2>Weitere Angaben</h2><p className="tool-intro">Eine vorhandene Kaltmiete aktiviert das Ertragswertverfahren. Beim Mehrfamilienhaus ist sie erforderlich.</p><div className="form-row"><label>Anzahl Zimmer<input type="number" min="0" step="0.5" value={data.rooms} onChange={e=>update("rooms",e.target.value)} placeholder="z. B. 4"/></label><label>Wohneinheiten<input type="number" min="1" value={data.units} onChange={e=>update("units",e.target.value)} placeholder="z. B. 2"/></label></div>{data.type==="Grundstück"?<label>Erschließungsstatus<select value={data.development} onChange={e=>update("development",e.target.value)}><option value="">Bitte auswählen</option><option>Erschlossen</option><option>Teilerschlossen</option><option>Nicht erschlossen</option><option>Unbekannt</option></select></label>:<div className="rent-grid"><label>Kaltmiete IST monatlich {data.type==="Mehrfamilienhaus"&&"*"}<input value={data.rentCurrentMonth} onChange={e=>update("rentCurrentMonth",e.target.value)} placeholder="z. B. 1.200 €"/></label><label>Kaltmiete IST jährlich<input value={data.rentCurrentYear} onChange={e=>update("rentCurrentYear",e.target.value)} placeholder="z. B. 14.400 €"/></label></div>}{data.type==="Mehrfamilienhaus"&&!rentPresent&&<p className="address-result">Für Mehrfamilienhäuser ist die Ist-Miete erforderlich.</p>}</>}
    {step===5&&<><p className="eyebrow">Schritt 5 von 7</p><h2>{data.type==="Grundstück"?"Wohnlage":"Zustand & Baujahr"}</h2><p className="tool-intro">{data.type==="Grundstück"?"Die Wohnlage steuert den angesetzten Bodenwert.":"Der Zustand wird als einheitlicher Zu- oder Abschlag berücksichtigt."}</p>{data.type==="Grundstück"?<div className="condition-grid">{locations.map(([item,description])=><button type="button" className={data.location===item?"selected":""} onClick={()=>update("location",item)} key={item}><strong>{item}</strong><small>{description}</small></button>)}</div>:<><div className="condition-grid">{conditions.map(([item,description])=><button type="button" className={data.condition===item?"selected":""} onClick={()=>update("condition",item)} key={item}><strong>{item}</strong><small>{description}</small></button>)}</div><label>Baujahr *<input type="number" min="1800" max="2026" value={data.year} onChange={e=>update("year",e.target.value)} placeholder="z. B. 1965"/></label></>}</>}
    {step===6&&<><p className="eyebrow">Schritt 6 von 7</p><h2>Ihre Kontaktdaten</h2><p className="tool-intro">Nach der Berechnung wird Ihnen der Wert direkt angezeigt. Das Rechenprotokoll wird zur Bearbeitung Ihrer Anfrage übermittelt.</p><div className="form-row"><label>Vorname *<input value={data.first} onChange={e=>update("first",e.target.value)} autoComplete="given-name"/></label><label>Nachname *<input value={data.last} onChange={e=>update("last",e.target.value)} autoComplete="family-name"/></label></div><div className="form-row"><label>E-Mail *<input type="email" value={data.email} onChange={e=>update("email",e.target.value)} autoComplete="email"/></label><label>Telefon *<input type="tel" value={data.phone} onChange={e=>update("phone",e.target.value)} autoComplete="tel"/></label></div><label>Ihre Adresse (optional)<input value={data.contactAddress} onChange={e=>update("contactAddress",e.target.value)} placeholder="Straße und Hausnummer"/></label><div className="form-row"><label>PLZ<input value={data.contactZip} onChange={e=>update("contactZip",e.target.value)} inputMode="numeric"/></label><label>Ort<input value={data.contactCity} onChange={e=>update("contactCity",e.target.value)}/></label></div><label className="tool-consent"><input type="checkbox" checked={data.consent==="yes"} onChange={e=>update("consent",e.target.checked?"yes":"")}/> Ich bin damit einverstanden, dass meine Angaben zur Bearbeitung der Bewertungsanfrage gespeichert und verarbeitet werden. *</label></>}
    {step===7&&result&&result.outside&&<><p className="eyebrow">Ihre Anfrage</p><h2>{result.label}</h2><div className="valuation-notice"><strong>Kein automatischer Wert</strong><p style={{whiteSpace:"pre-line"}}>{result.protocol}</p></div><div className="summary"><p><span>Immobilie</span><strong>{data.type}</strong></p><p><span>Adresse</span><strong>{data.outsideStreet} {data.outsideNumber}, {data.outsideZip} {data.outsideCity}</strong></p></div>{sendStatus==="error"?<p className="result-send-error">Die Anfrage wird angezeigt, konnte aber nicht übermittelt werden. Bitte rufen Sie uns an: +49 2204 914 7881.</p>:<p className="tool-intro">Vielen Dank! Wir melden uns bei Ihnen und schauen uns die Immobilie persönlich an.</p>}</>}{step===7&&result&&!result.outside&&<><p className="eyebrow">Ihre Immobilienbewertung</p><h2>{result.label}</h2><div className="valuation-result"><span>Geschätzter Wert</span><strong>{money(result.value)}</strong><p>Orientierungsspanne: {money(result.low)} – {money(result.high)}</p></div><div className="summary"><p><span>Immobilie</span><strong>{data.type}</strong></p><p><span>Adresse</span><strong>{data.street} {data.number}, {data.zip} {data.city}-{data.district}</strong></p>{result.grossYield&&<p><span>Bruttorendite</span><strong>{result.grossYield.toFixed(2).replace(".",",")} %</strong></p>}</div>{result.warning&&<div className="valuation-notice"><strong>Einordnung</strong><p>{result.warning}</p></div>}{sendStatus==="error"&&<p className="result-send-error">Die Bewertung wurde angezeigt, das Rechenprotokoll konnte jedoch nicht automatisch übermittelt werden. Bitte rufen Sie uns an: +49 2204 914 7881.</p>}<div className="result-sources"><a className="source-link" href="https://www.boris.nrw.de/" target="_blank" rel="noreferrer">Quelle: regional zuständiger Gutachterausschuss / BORIS NRW ↗</a></div><p className="valuation-disclaimer">Automatisch ermittelte, unverbindliche Orientierung auf Basis generalisierter amtlicher Marktdaten; keine Verkehrswertermittlung und kein Gutachten.</p></>}
    <div className="tool-actions">{step>1&&<button type="button" className="button outline" onClick={back}>{step===7?"Angaben ändern":"Zurück"}</button>}{step<6&&<button type="button" className="button gold" disabled={!canContinue} onClick={next}>Weiter</button>}{step===6&&<button type="button" className="button gold" disabled={!canContinue||sendStatus==="sending"} onClick={evaluate}>Bewertung berechnen</button>}</div>
  </div></div>;
}
