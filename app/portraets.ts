// Porträttexte je Stadtteil. Jede Aussage ist belegt (siehe belege), die
// Quellen erscheinen nicht auf der Seite. Stand der Prüfung: 29.09.2026.
export type Portraet = { titel: string; absaetze: string[]; belege: Record<string, string> };
export const portraets: Record<string, Portraet> = {
  "wiesdorf": {
    "titel": "Wiesdorf im Porträt",
    "absaetze": [
      "Wiesdorf ist eines der Zentren Leverkusens: In der 2010 eröffneten Rathaus-Galerie liegen über 120 Geschäfte, die Stadtbibliothek und das Rathaus der Stadt. Der Stadtteil reicht bis an den Rhein; im Osten grenzt Manfort an, im Norden jenseits der Dhünn Bürrig, im Süden der Chempark.",
      "Erstmals erwähnt wird der Ort 1107 als „Wistubbe“. Rheinhochwasser zerstörten ihn 1571 und 1657, danach wurde Wiesdorf weiter östlich wieder aufgebaut. 1860 gründete der Apotheker Carl Leverkus am Kahlen Berg eine Ultramarin-Farbenfabrik und benannte das Gelände nach seinem Stammsitz „Leverkusen“. 1891 übernahmen die Farbenfabriken Bayer das Werk, 1921 erhielt Wiesdorf Stadtrechte, 1930 ging es in der neu gegründeten Stadt Leverkusen auf.",
      "Sehenswert sind die Doktorsburg, ein 1682 erbauter ehemaliger Gutshof, das Kolonie-Museum in einem denkmalgeschützten Haus der früheren Bayer-Werkssiedlungen und der Neuland-Park am Rhein, der zur Landesgartenschau 2005 angelegt wurde. Der Bahnhof Leverkusen Mitte liegt an der Strecke Köln–Duisburg, daneben der Omnibusbahnhof."
    ],
    "belege": {
      "Zentrum, Lage, Geschichte, Sehenswertes, Verkehr": "https://de.wikipedia.org/wiki/Wiesdorf",
      "geprüft": "2026-09-29"
    }
  },
  "manfort": {
    "titel": "Manfort im Porträt",
    "absaetze": [
      "Der Name Manfort geht auf die „Mannesfurt“ zurück – eine alte Furt durch den Rhein, die Menschen zu Fuß, aber keine Wagen passieren konnten; der Hauptarm des Rheins verlief damals weiter östlich. 1050 wird der Hemmelrather Hof in Manfort erstmals erwähnt.",
      "Im 19. Jahrhundert gehörte Manfort zur Gemeinde Wiesdorf und kam mit ihr 1930 zu Leverkusen. Nach dem Bau der Eisenbahn siedelten sich hier größere Industriebetriebe an, darunter das Wuppermann-Stahlwerk und ein Werk von Dynamit Nobel, das aus einer 1869 gegründeten Sprengstofffabrik hervorging. Heute gehört Manfort zum Stadtbezirk I.",
      "Der Stadtteil liegt zwischen Wiesdorf, Küppersteg, Alkenrath und Schlebusch und grenzt an Köln-Dünnwald. Über die Anschlussstelle Leverkusen-Zentrum ist die A 3 erreichbar. Am Bahnhof Leverkusen-Manfort, der bis Ende 2021 nach Schlebusch benannt war, hält die RB 48; mehrere Buslinien der Wupsi fahren durch den Stadtteil."
    ],
    "belege": {
      "Name, Geschichte, Industrie, Bezirk, Lage, Verkehr": "https://de.wikipedia.org/wiki/Manfort",
      "geprüft": "2026-09-29"
    }
  },
  "rheindorf": {
    "titel": "Rheindorf im Porträt",
    "absaetze": [
      "Rheindorf liegt zwischen Wupper und Rhein. Im Westen trennt die A 59 den Stadtteil von Hitdorf, im Osten grenzen Opladen und die Wupper an, im Norden Monheim und Langenfeld. Südlich mündet die Wupper in den Rhein, am gegenüberliegenden Ufer liegt Rheinkassel.",
      "1115 wird ein Ritter Isaak von Rheindorf genannt, ein Dienstmann des Grafen von Berg, 1170 die Kirche, die heutige St. Aldegundis; Mitte des 13. Jahrhunderts ist ein „festes Haus“ der Grafen belegt. 1944 brannte die Burganlage aus, 1947 wurden nur ihre neueren Teile wieder aufgebaut. Seit 1705 war Rheindorf Sitz eines Zollhofs; das Alte Zollhaus steht noch.",
      "Nach dem Zweiten Weltkrieg entstand ab 1958 nördlich des Ortskerns entlang der Felderstraße und der Solinger Straße eine Großsiedlung, bekannt als Rheindorf-Nord, die Anfang der 1970er Jahre rund 14.000 Einwohner zählte. Der S-Bahn-Haltepunkt Leverkusen-Rheindorf liegt an der Strecke Köln–Duisburg und wird zusätzlich von Buslinien der Wupsi angefahren."
    ],
    "belege": {
      "Lage, Burg, Kirche, Zollhaus, Rheindorf-Nord, S-Bahn": "https://de.wikipedia.org/wiki/Rheindorf",
      "geprüft": "2026-09-29"
    }
  },
  "hitdorf": {
    "titel": "Hitdorf im Porträt",
    "absaetze": [
      "Das Ortsbild von Hitdorf prägen der Rhein und die Kirche St. Stephanus. Der Stadtteil grenzt im Südwesten an den Strom, im Südosten an Rheindorf und im Norden an Monheim; Langenfeld liegt nur wenig nordöstlich.",
      "Erwähnt wird Hitdorf 1151 als „Huttorp“, der Rheinhafen bereits 1252. 1341 wurde der Ort Sitz eines Landgerichts, das Fährrecht ist seit 1633 beurkundet. 1857 erhielt Hitdorf die Rheinische Städteordnung und war damit eine eigene Stadt, bis es 1960 in Monheim aufging. Seit dem 1. Januar 1975 gehört es zu Leverkusen.",
      "Wegen der Lage am Ufer ist Hitdorf hochwassergefährdet; Ende 2010 wurde eine 900 Meter lange Hochwasserschutzwand fertiggestellt. Am Rheinufer unterhalb der Kirche liegen Yachthafen und Biergarten, eine Rheinfähre verbindet Hitdorf mit Köln-Langel. Südlich des Ortes liegt die Anschlussstelle Leverkusen-Rheindorf der A 59."
    ],
    "belege": {
      "Ortsbild, Lage, Geschichte, Hochwasserschutz, Fähre, A 59": "https://de.wikipedia.org/wiki/Hitdorf",
      "geprüft": "2026-09-29"
    }
  },
  "opladen": {
    "titel": "Opladen im Porträt",
    "absaetze": [
      "Opladen war bis Ende 1974 Kreisstadt und Sitz des Rhein-Wupper-Kreises. Am 1. Januar 1975 bildete es zusammen mit Bergisch Neukirchen, Hitdorf und Leverkusen die neue Stadt Leverkusen. Das alte Kfz-Kennzeichen OP ist seit 2015 wieder erhältlich.",
      "Die Stadt liegt an den Ausläufern des Bergischen Landes an der Wupper, nicht weit von ihrer Mündung in den Rhein. Ihre historische Bedeutung begründete unter anderem der Wupperübergang einer alten Fernstraße, die weitgehend der heutigen B 8 folgt. Der Name geht auf „Upladhin“ zurück; die älteste bekannte Kirche war dem heiligen Remigius geweiht. 1903 entstand zwischen Opladen und Quettingen die Hauptwerkstätte der preußischen Staatsbahn.",
      "Zu den Sehenswürdigkeiten gehören der Friedenberger Hof, ein Herrenhaus aus dem 16. Jahrhundert, die Fachwerkhäuser in der Altstadtstraße, die Villa Römer als Haus der Stadtgeschichte und das NaturGut Ophoven. Opladen grenzt an Bergisch Neukirchen, Quettingen, Küppersteg und Rheindorf sowie an Langenfeld und Leichlingen; der Bahnhof Opladen liegt an der Strecke Köln–Wuppertal."
    ],
    "belege": {
      "Kreisstadt, Vereinigung 1975, Kennzeichen, Lage, Wupperübergang, Name, Sehenswertes": "https://de.wikipedia.org/wiki/Opladen",
      "Hauptwerkstätte 1903": "https://de.wikipedia.org/wiki/Quettingen",
      "Bahnhof Opladen": "https://de.wikipedia.org/wiki/Bergisch_Neukirchen",
      "geprüft": "2026-09-29"
    }
  },
  "kueppersteg": {
    "titel": "Küppersteg im Porträt",
    "absaetze": [
      "Küppersteg taucht 1157 zum ersten Mal auf – als Steg über die Dhünn bei Bürrig. 1845 bekam der Ort einen Bahnhof an der neuen Cöln-Mindener Eisenbahn, 1889 wurde die Bürgermeisterei Opladen-Land, zu der Bürrig und Wiesdorf gehörten, in Bürgermeisterei Küppersteg umbenannt und erhielt einen eigenen Bürgermeister.",
      "Im Osten verlaufen die A 1 und die Bahnstrecke nach Gruiten zu Quettingen, im Süden die Dhünn zu Wiesdorf, im Westen die Strecke Köln–Duisburg zu Bürrig; nordöstlich liegt Opladen. Am Haltepunkt Leverkusen-Küppersteg hält die S 6.",
      "Im Stadtteil liegen die BayArena, das Stadion von Bayer 04 Leverkusen, und die Ostermann-Arena. Zur Erholung dienen der Wildpark Reuschenberg und das Naherholungsgebiet Silbersee."
    ],
    "belege": {
      "Geschichte, Grenzen, S-Bahn, Sport, Erholung": "https://de.wikipedia.org/wiki/K%C3%BCppersteg",
      "geprüft": "2026-09-29"
    }
  },
  "buerrig": {
    "titel": "Bürrig im Porträt",
    "absaetze": [
      "Mit der Pfarrkirche St. Stephanus wird Bürrig 1147 erstmals erwähnt. 1280 erhielt Graf Adolf V. von Berg das Patronat über die Pfarrei. Zum Kirchspiel gehörten auch das Rittergut Reuschenberg, das Kölner Bürger 1399 überfielen, sowie die Wohnplätze Neuenhof und Schaafstall. 1477 wurde die Reuschenberger Mühle neu gebaut.",
      "Die Industrialisierung kam mit dem Bahnhof im benachbarten Küppersteg an der Cöln-Mindener Eisenbahn. 1920 schlossen sich Bürrig und Wiesdorf zu einer gemeinsamen Gemeinde zusammen. Als Wahrzeichen der Gegend gilt der Wasserturm Leverkusen-Bürrig.",
      "Bürrig liegt zwischen Küppersteg im Osten und Wiesdorf im Süden; die Dhünn fließt zwischen den Stadtteilen und begrenzt Bürrig auch im Westen. Im Nordwesten bilden Mühlengraben und Wupper die Grenze zu Rheindorf."
    ],
    "belege": {
      "Kirche, Rittergut, Mühle, Industrialisierung, Wasserturm, Lage": "https://de.wikipedia.org/wiki/B%C3%BCrrig",
      "Zusammenschluss 1920": "https://de.wikipedia.org/wiki/Wiesdorf",
      "geprüft": "2026-09-29"
    }
  },
  "quettingen": {
    "titel": "Quettingen im Porträt",
    "absaetze": [
      "Quettingen ist der am dichtesten besiedelte der 13 Leverkusener Stadtteile, und hier liegt auch der geographische Mittelpunkt der Stadt. Zum Stadtteil gehören das Gewerbegebiet Fixheide im Südwesten, Feldsiefen am Rand des Waldgebiets Bürgerbusch, im Norden Neucronenberg und Teile von Biesenbach.",
      "Als „Quettingheim“ wird der Ort 1209 erwähnt. Der Mönchhof gehörte bis 1391 der Abtei Heisterbach und kam 1402 an die Abtei Altenberg; der Quettinger Hof, 1377 belegt, wurde 1423 in Ober- und Unterhof geteilt. Stark gewachsen ist Quettingen nach 1903, als zwischen Opladen und Quettingen die Hauptwerkstätte der preußischen Staatsbahn entstand. 1930 kam der Ort mit Lützenkirchen zu Opladen.",
      "Von 1914 bis 1955 fuhr eine Kleinbahn von Opladen durch Quettingen nach Lützenkirchen, heute übernehmen Buslinien diesen Weg. Quettingen grenzt an Lützenkirchen, Opladen, Küppersteg, Bergisch Neukirchen und Alkenrath; im Süden verläuft die A 1."
    ],
    "belege": {
      "Dichte, Mittelpunkt, Ortschaften, Geschichte, Kleinbahn, Lage": "https://de.wikipedia.org/wiki/Quettingen",
      "geprüft": "2026-09-29"
    }
  },
  "bergisch-neukirchen": {
    "titel": "Bergisch Neukirchen im Porträt",
    "absaetze": [
      "Bergisch Neukirchen ist der nördlichste Stadtteil Leverkusens und umfasst 796 Hektar. Neben dem Ortskern gehören gewachsene Dörfer wie Pattscheid, Biesenbach und Imbach dazu. Im Norden bilden die Wupper und Leichlingen die Grenze, im Osten Burscheid, im Süden Quettingen und Lützenkirchen, im Südwesten Opladen.",
      "Gegründet wurde Neukirchen im 9. oder 10. Jahrhundert, urkundlich belegt ist es seit 1223. 1582 bekannte sich der Ort zum protestantischen Glauben, 1630 wurde er im Dreißigjährigen Krieg niedergebrannt. Die evangelische Kirche im bergischen Barockstil wurde 1784 eingeweiht, die katholische Kirche Hl. Drei Könige 1971. Seit dem 1. Januar 1975 gehört Bergisch Neukirchen zu Leverkusen.",
      "Mitten durch den Stadtteil führt die L 291 zwischen Opladen und Burscheid, die über die Abfahrten Opladen der A 3 und Burscheid der A 1 erreichbar ist. Buslinien verbinden Bergisch Neukirchen mit Opladen, Leverkusen Mitte, Burscheid und Leichlingen; nächster Bahnhof ist Opladen."
    ],
    "belege": {
      "Lage, Fläche, Dörfer, Geschichte, Kirchen, Verkehr": "https://de.wikipedia.org/wiki/Bergisch_Neukirchen",
      "geprüft": "2026-09-29"
    }
  },
  "schlebusch": {
    "titel": "Schlebusch im Porträt",
    "absaetze": [
      "Schlebusch gilt nach Wiesdorf und Opladen als drittes Zentrum Leverkusens. Mittelpunkt ist die Bergische Landstraße, Anfang der 1990er Jahre zur Fußgängerzone umgestaltet. Am Fronleichnams-Wochenende findet im Wuppermannpark, auf dem Marktplatz und am Schützenplatz ein großes Schützen- und Volksfest statt.",
      "Der Stadtteil im Südosten der Stadt umfasst die Wohngebiete Waldsiedlung und Leimbacher Berg, die Dörfer Edelrath, Hummelsheim und Uppersberg sowie das um 2010 entstandene Wohngebiet „Bullenwiese“. Nachbarn sind Steinbüchel, Alkenrath, Manfort, Bergisch Gladbach-Schildgen und Köln-Dünnwald. Urkundlich erwähnt wird Schlebusch 1135; im Wald Richtung Dünnwald liegt ein Grabhügelfeld aus der späten Bronze- und frühen Eisenzeit.",
      "Die A 3 ist über die Anschlussstelle Leverkusen zu erreichen, die L 188 führt quer durch den Stadtteil. Die Kölner Stadtbahnlinie 4 endet an der Haltestelle Schlebusch direkt an der Stadtgrenze, noch auf Kölner Gebiet – ab dort gilt der Kölner Stadttarif."
    ],
    "belege": {
      "Zentrum, Fußgängerzone, Volksfest, Wohngebiete, Lage, Geschichte, Verkehr": "https://de.wikipedia.org/wiki/Schlebusch",
      "geprüft": "2026-09-29"
    }
  },
  "steinbuechel": {
    "titel": "Steinbüchel im Porträt",
    "absaetze": [
      "1158 wird mit Ritter Konrad von Steinbüchel erstmals ein Namensträger erwähnt, die Steinbücheler Kapelle 1318. Im Truchsessischen Krieg wurde die Kirche 1583 geplündert, 1732 das Herrenhaus des Rittersitzes neu aufgebaut. Ab 1820 gehörte die Gemeinde zur Bürgermeisterei Schlebusch und kam mit ihr 1930 zur neuen Stadt Leverkusen.",
      "Steinbüchel grenzt im Osten an die Gemeinde Odenthal, im Süden an Schlebusch, im Südwesten an Alkenrath und im Norden an Lützenkirchen. Ende des 20. Jahrhunderts entstand das Neubaugebiet Meckhofen.",
      "Zu den Kirchen im Stadtteil zählen die katholische Pfarrkirche St. Franziskus, die Nikolaus-Kirche in Neuboddenberg und die Johannes-von-Nepomuk-Kapelle Fettehenne. Buslinien verbinden Steinbüchel mit Lützenkirchen, Schlebusch und Opladen."
    ],
    "belege": {
      "Geschichte, Lage, Meckhofen, Kirchen": "https://de.wikipedia.org/wiki/Steinb%C3%BCchel_(Leverkusen)",
      "Buslinien 205, 206": "https://de.wikipedia.org/wiki/L%C3%BCtzenkirchen",
      "geprüft": "2026-09-29"
    }
  },
  "luetzenkirchen": {
    "titel": "Lützenkirchen im Porträt",
    "absaetze": [
      "Der Name bedeutet „Kleinkirchen“. Als „Lützelenkerke“ erscheint der Ort 1155 oder 1165 in einer Urkunde der Abtei Deutz und gehört damit zu den ältesten Leverkusener Stadtteilen. 1363 wird er als Gerichtssitz genannt, und die Schützenbruderschaft, gegründet vor 1423, besteht bis heute.",
      "Um 1717 ließen sich zahlreiche Woll- und Leinenweber nieder. Eine Pfarrei ist seit dem 12. Jahrhundert belegt, die heutige Maurinus-Kirche wurde 1847 geweiht. 1930 wurde Lützenkirchen zusammen mit Quettingen nach Opladen eingemeindet. Hier liegen auch die höchsten Punkte Leverkusens, die Hügel „Schöne Aussicht“ und „Herberg“.",
      "Lützenkirchen grenzt an Burscheid im Osten, Steinbüchel und Alkenrath im Süden, Quettingen im Westen und Bergisch Neukirchen im Norden. Bis 1955 fuhr eine Kleinbahn nach Opladen; heute verbinden mehrere Buslinien den Stadtteil mit Opladen, Steinbüchel, Schlebusch und Burscheid. Im Stadtteil liegt das Werner-Heisenberg-Gymnasium."
    ],
    "belege": {
      "Name, Geschichte, Schützen, Weber, Kirche, Höhen, Lage, Verkehr, Gymnasium": "https://de.wikipedia.org/wiki/L%C3%BCtzenkirchen",
      "Eingemeindung 1930": "https://de.wikipedia.org/wiki/Quettingen",
      "geprüft": "2026-09-29"
    }
  },
  "alkenrath": {
    "titel": "Alkenrath im Porträt",
    "absaetze": [
      "Politisch ist Alkenrath der jüngste Stadtteil Leverkusens: Er wurde 1953 im Zuge der Nachkriegsentwicklung gegründet und 1960 noch einmal stark erweitert. Im Norden entstanden große Wohnblöcke, der übrige Stadtteil besteht überwiegend aus planmäßig angelegten Doppelhäusern. 1957 kam eine katholische Kirche hinzu, 1959 ein evangelisches Gemeindehaus.",
      "Besiedelt war die Gegend schon viel früher: Funde von Klingen und Pfeilspitzen reichen in die Jungsteinzeit zurück, dazu kommen Gräberfelder aus der Hallstattzeit. Urkundlich erwähnt wird Alkenrath 1458 als „Alfkenroide“. Bekanntestes Bauwerk ist Schloss Morsbroich – Vorburg von 1692, Hauptschloss von 1774 –, in dem heute das städtische Kunstmuseum untergebracht ist.",
      "Im Osten grenzen das Waldgebiet Bürgerbusch und Schlebusch an, im Norden Lützenkirchen, im Nordwesten Quettingen; die Dhünn bildet im Südwesten die Grenze zu Manfort. Durch den Norden des Stadtteils verläuft die A 1."
    ],
    "belege": {
      "Gründung, Bebauung, Frühgeschichte, Ersterwähnung, Schloss Morsbroich, Lage": "https://de.wikipedia.org/wiki/Alkenrath",
      "geprüft": "2026-09-29"
    }
  }
};
