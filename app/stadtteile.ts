export type District={slug:string;name:string;code:string;inhabitants:string;area:string;profile:string;brw?:string;brwGroup?:string};
export const districts:District[]=[
{slug:"wiesdorf",name:"Wiesdorf",code:"I",inhabitants:"–",area:"Stadtbezirk I",profile:"Wiesdorf gehört zusammen mit Manfort, Rheindorf und Hitdorf zum Stadtbezirk I. Der Stadtteil zählt zu den historischen Siedlungskernen des heutigen Leverkusen."},
{slug:"manfort",name:"Manfort",code:"I",inhabitants:"–",area:"Stadtbezirk I",profile:"Manfort gehört zum Stadtbezirk I und wird in der amtlichen Stadtgliederung zugleich als eigener statistischer Bezirk geführt."},
{slug:"rheindorf",name:"Rheindorf",code:"I",inhabitants:"–",area:"Stadtbezirk I",profile:"Rheindorf gehört zum Stadtbezirk I und zählt zu den historisch früh belegten Siedlungsbereichen im heutigen Leverkusener Stadtgebiet."},
{slug:"hitdorf",name:"Hitdorf",code:"I",inhabitants:"–",area:"Stadtbezirk I",profile:"Hitdorf gehört zum Stadtbezirk I. Der Ort besaß von 1857 bis 1960 Stadtrechte und kam mit der kommunalen Neuordnung 1975 zu Leverkusen."},
{slug:"opladen",name:"Opladen",code:"II",inhabitants:"–",area:"Stadtbezirk II",profile:"Opladen gehört zum Stadtbezirk II. Die frühere Kreisstadt, seit 1858 mit Stadtrechten, wurde 1975 Teil von Leverkusen."},
{slug:"kueppersteg",name:"Küppersteg",code:"II",inhabitants:"–",area:"Stadtbezirk II",profile:"Küppersteg ist einer der fünf Stadtteile des Stadtbezirks II und wird in der amtlichen Statistik als eigener statistischer Bezirk ausgewiesen."},
{slug:"buerrig",name:"Bürrig",code:"II",inhabitants:"–",area:"Stadtbezirk II",profile:"Bürrig gehört zum Stadtbezirk II. Seine Geschichte reicht nach städtischen Planungsunterlagen bis in das 12. beziehungsweise 13. Jahrhundert zurück."},
{slug:"quettingen",name:"Quettingen",code:"II",inhabitants:"–",area:"Stadtbezirk II",profile:"Quettingen gehört zum Stadtbezirk II und ist zugleich ein eigener statistischer Bezirk der Stadt Leverkusen."},
{slug:"bergisch-neukirchen",name:"Bergisch Neukirchen",code:"II",inhabitants:"–",area:"Stadtbezirk II",profile:"Bergisch Neukirchen gehört zum Stadtbezirk II. Die ehemals selbstständige Stadt erhielt 1857 Stadtrechte und wurde 1975 Teil von Leverkusen."},
{slug:"schlebusch",name:"Schlebusch",code:"III",inhabitants:"–",area:"Stadtbezirk III",profile:"Schlebusch gehört zum Stadtbezirk III. Die amtliche Statistik untergliedert den Stadtteil in Schlebusch-Nord, Schlebusch-Süd und Waldsiedlung."},
{slug:"steinbuechel",name:"Steinbüchel",code:"III",inhabitants:"–",area:"Stadtbezirk III",profile:"Steinbüchel ist Teil des Stadtbezirks III und zählt zu den historischen Siedlungsbereichen, deren Entwicklung die Stadt bis in das Mittelalter zurückverfolgt."},
{slug:"luetzenkirchen",name:"Lützenkirchen",code:"III",inhabitants:"–",area:"Stadtbezirk III",profile:"Lützenkirchen gehört zum Stadtbezirk III und wird in der amtlichen Stadtgliederung als eigener statistischer Bezirk geführt."},
{slug:"alkenrath",name:"Alkenrath",code:"III",inhabitants:"–",area:"Stadtbezirk III",profile:"Alkenrath ist einer der vier Stadtteile des Stadtbezirks III und zugleich ein eigener statistischer Bezirk."}
];
export const districtBySlug=(slug:string)=>districts.find(d=>d.slug===slug);
