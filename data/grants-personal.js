// Statsbidrag som gäller personal: löner, karriär, fler vuxna i skolan och kompetensutveckling.
// Källa: Skolverkets sidor under "Hitta statsbidrag". Kontrollerat 2026-09-25.
window.SB_GRANTS = window.SB_GRANTS || [];
window.SB_GRANTS.push(
  {
    id: "lararlonelyftet",
    namn: "Statsbidrag för Lärarlönelyftet 2026/27",
    kortnamn: "Lärarlönelyftet – högre lärarlöner",
    myndighet: "Skolverket",
    giltighet: "aktiv",
    sammanfattning: "Pengar till höjda löner för särskilt kvalificerade lärare. Varje huvudman får en färdig summa (bidragsram) och begär själv ut pengarna två gånger per läsår. Löneökningen ska i snitt vara 2 500–3 500 kr i månaden.",
    syfte: "Att göra läraryrket mer attraktivt genom att särskilt skickliga lärare och förskollärare får högre lön. Regeringen har beskrivit satsningen som permanent.",
    omraden: ["lon-karriar"],
    skolformer: ["forskoleklass", "grundskola", "anpassad-grundskola", "specialskola", "sameskola", "gymnasieskola", "anpassad-gymnasieskola"],
    sokande: { fristaende: "ja", kommun: "ja", region: "villkor", stat: "ja", ovriga: "nej" },
    sokandeNot: "Kommunala, fristående och statliga huvudmän (huvudman = den som driver skolan) för förskoleklass, grundskola, anpassad grundskola, specialskola, sameskola, gymnasieskola och anpassad gymnasieskola. Fristående huvudmän får en egen bidragsram på samma villkor som kommuner – ingen ansökan behövs, men ni måste själva begära ut pengarna i tid. Huvudmän med färre än 30 elever får 50 000 kr. Komvux, internationella skolor, IB-utbildning och sjukhusundervisning omfattas inte. En huvudman som bara driver förskola eller fritidshem kan inte få bidraget.",
    typ: "rekvisition",
    perioder: [
      { typ: "beslut", fran: "2026-05-01", till: "2026-05-31", text: "Skolverket beslutade om bidragsramar för 2026/27 i maj 2026. Ramarna finns som pdf på bidragets sida.", ungefar: false },
      { typ: "rekvisition", fran: "2026-09-15", till: "2026-11-02", text: "Begäran om utbetalning 1 av 2 (hösten 2026). Högst 50 procent av bidragsramen.", ungefar: false },
      { typ: "utbetalning", fran: "2026-12-01", till: "2026-12-31", text: "Skolverket planerar att besluta och betala ut pengarna för hösten i december 2026.", ungefar: true },
      { typ: "rekvisition", fran: "2027-04-01", till: "2027-05-17", text: "Begäran om utbetalning 2 av 2 (våren 2027). Högst 50 procent av bidragsramen.", ungefar: false },
      { typ: "utbetalning", fran: "2027-06-01", till: "2027-06-30", text: "Skolverket planerar att besluta och betala ut pengarna för våren i juni 2027.", ungefar: true },
      { typ: "beslut", fran: "2027-05-01", till: "2027-05-31", text: "Nya bidragsramar för läsåret 2027/28 – brukar beslutas i maj (så var det 2025 och 2026).", ungefar: true },
      { typ: "rekvisition", fran: "2027-09-15", till: "2027-11-01", text: "Första begäran om utbetalning för 2027/28 – uppskattat utifrån tidigare år (15 sep–5 nov 2025, 15 sep–2 nov 2026).", ungefar: true }
    ],
    belopp: "Totalt 3 miljarder kr för läsåret 2026/27. Varje huvudmans ram beräknas efter hur många elever huvudmannen haft i snitt de tre senaste åren jämfört med hela landet (SCB:s elevstatistik). Bidraget ska också täcka sociala avgifter (räknas som 42 procent av löneökningen).",
    villkor: [
      "Löneökningen ska i genomsnitt vara mellan 2 500 och 3 500 kr per månad för alla lärare som huvudmannen begär ut pengar för.",
      "Pengarna ska ges utöver ordinarie lön och får inte påverka den vanliga lönerevisionen.",
      "Läraren ska vara legitimerad (vissa undantag finns, t.ex. tillsvidareanställda modersmålslärare och yrkeslärare) och till största delen arbeta med undervisning eller annat pedagogiskt arbete. Enligt Skolverkets föreskrifter (SKOLFS 2016:61, 7 §) betyder det minst 75 procent av arbetstiden.",
      "Läraren ska vara 'särskilt kvalificerad', till exempel ha tagit särskilt ansvar för att utveckla undervisningen eller för nya kollegor. Huvudmannen avgör vilka lärare som får del.",
      "Löneökningen får inte ges vid en nyanställning – först efter att första ordinarie månadslönen betalats ut.",
      "Upp till 10 procent av bidraget får gå till personal i förskola och fritidshem, om huvudmannen också har någon av de skolformer som omfattas."
    ],
    hurDuGor: [
      "Kontrollera er bidragsram i Skolverkets pdf-lista (kommunala, fristående eller övriga huvudmän).",
      "Bestäm vilka lärare som ska få löneökningen och hur mycket. Använd gärna Skolverkets räknehjälp i Excel.",
      "Se till att den som ska fylla i har behörighet till bidraget i Skolverkets e-tjänst för statsbidrag.",
      "Begär ut pengarna i e-tjänsten under hösten och igen under våren. Ange bland annat personnummer, tjänstgöringsgrad, löneökning och frånvaro på 30 dagar eller mer.",
      "Meddela Skolverket om en lärare slutar, blir tjänstledig eller går ned i tid efter beslutet."
    ],
    redovisning: "Ingen separat slutredovisning. Uppgifterna lämnas i varje begäran om utbetalning. Om något ändras efter beslutet (t.ex. frånvaro eller att läraren slutar) ska ni mejla Skolverket, som då öppnar ett omprövningsärende och kan kräva tillbaka pengar.",
    fallgropar: [
      "Pengarna kommer inte automatiskt – den som inte begär ut i tid får i normalfallet ingenting.",
      "Pengar som inte begärs ut en termin kan inte sparas till nästa.",
      "Det går inte att lägga till nya personer efter sista dagen för begäran om utbetalning.",
      "Glömd frånvarorapportering eller lärare som inte uppfyller villkoren kan leda till återkrav. Skolverket gör stickprov.",
      "Bidraget följer inte med läraren om hen byter arbetsgivare."
    ],
    nyckelord: ["lön", "löneökning", "lärarlöner", "lärarlönelyft", "lärarlönelyftet", "löneförhöjning", "lönetillägg", "särskilt kvalificerade lärare", "förskollärare lön", "LLL"],
    kallor: [
      { titel: "Statsbidrag för Lärarlönelyftet 2026/27 – Skolverket", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-lararlonelyftet-2026-27" },
      { titel: "Statsbidrag för Lärarlönelyftet 2025/26 – Skolverket", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-lararlonelyftet-2025-26" },
      { titel: "Förordning (2016:100) om statsbidrag för höjda löner till lärare och förskollärare", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-2016100-om-statsbidrag-for-hojda_sfs-2016-100/" }
    ],
    senastKontrollerad: "2026-09-25",
    osakerhet: "Skolverkets sida anger sista dag för höstens begäran både som 2 november och 3 november 2026. Enligt föreskrifterna ska begäran vara inne senast 1 november, och eftersom 1 november 2026 är en söndag tolkar vi det som att sista dagen flyttas till måndag 2 november. Räkna med 2 november. Datum för 2027/28 är uppskattade utifrån tidigare år. Sidan nämner inte regioner uttryckligen som mottagare."
  },

  {
    id: "karriartjanster",
    namn: "Statsbidrag för karriärtjänster 2026/27",
    kortnamn: "Förstelärare och lektorer",
    myndighet: "Skolverket",
    giltighet: "aktiv",
    sammanfattning: "Pengar till lönepåslag för förstelärare och lektorer. Skolor med särskilt svåra förutsättningar får mer per tjänst. Huvudmannen får en bidragsram och begär ut pengarna en gång per termin.",
    syfte: "Att göra läraryrket mer attraktivt med bättre villkor och karriärmöjligheter, och att fler skickliga lärare ska arbeta i skolor med tuffa förutsättningar.",
    omraden: ["lon-karriar"],
    skolformer: ["forskoleklass", "grundskola", "anpassad-grundskola", "specialskola", "sameskola", "gymnasieskola", "anpassad-gymnasieskola", "komvux"],
    sokande: { fristaende: "ja", kommun: "ja", region: "villkor", stat: "ja", ovriga: "nej" },
    sokandeNot: "Kommunala, fristående och statliga huvudmän för förskoleklass, grund- och gymnasieskola (även anpassade former, specialskola och sameskola) samt komvux. Fristående huvudmän får en egen bidragsram på samma villkor som kommuner – ingen ansökan, men ni måste begära ut pengarna varje termin. Förskola och fritidshem omfattas inte. För komvux måste läraren vara anställd av huvudmannen själv, inte av en upphandlad utbildningsanordnare.",
    typ: "rekvisition",
    perioder: [
      { typ: "beslut", fran: "2026-06-01", till: "2026-06-30", text: "Bidragsramar för 2026/27 beslutades i juni 2026. Av ramen framgår också vilka skolor som hör till pott 2 (särskilt svåra förutsättningar).", ungefar: false },
      { typ: "rekvisition", fran: "2026-09-01", till: "2026-10-15", text: "Begär utbetalning 1 av 2 (hösten 2026).", ungefar: false },
      { typ: "rekvisition", fran: "2027-03-15", till: "2027-05-03", text: "Begär utbetalning 2 av 2 (våren 2027).", ungefar: false },
      { typ: "beslut", fran: "2027-02-01", till: "2027-06-30", text: "Nya bidragsramar för 2027/28 – beslutas normalt under första halvåret.", ungefar: true },
      { typ: "rekvisition", fran: "2027-09-01", till: "2027-10-15", text: "Första begäran om utbetalning för 2027/28 – uppskattat utifrån tidigare år (1 sep–20 okt 2025, 1 sep–15 okt 2026).", ungefar: true }
    ],
    belopp: "Totalt cirka 1 852 miljoner kr per år, varav cirka 410 miljoner kr till skolor med särskilt svåra förutsättningar. Ramen beräknas efter antalet elever. Pott 1: minst 85 000 kr per huvudman. Pott 2: minst 170 000 kr. Sociala avgifter ingår (ca 42 procent).",
    villkor: [
      "Förstelärare ska få minst 5 000 kr mer i månaden (pott 1) eller minst 10 000 kr (pott 2, skolor med särskilt svåra förutsättningar). Lektorer: minst 10 000 kr respektive 15 000 kr.",
      "Förstelärare = legitimerad lärare med minst fyra års väl vitsordad undervisning och särskilt god förmåga att förbättra elevernas resultat. Lektor = legitimerad lärare med licentiat- eller doktorsexamen.",
      "Tjänsten ska ha utlysts öppet – alla lärare på skolenheten ska ha kunnat söka.",
      "Minst 50 procent av arbetstiden ska vara undervisning och uppgifter som hör till undervisningen.",
      "Huvudmannen får inte ha skulder hos Kronofogden eller obetalda återkrav, och får inte ha fått sitt godkännande återkallat.",
      "Pengarna från pott 2 får inte användas på skolor i pott 1 (däremot tvärtom)."
    ],
    hurDuGor: [
      "Läs Skolverkets beslut om bidragsram för er typ av huvudman och se vilka skolor som hör till pott 1 och pott 2.",
      "Utlys förstelärar- och lektorstjänster öppet och utse lärare som uppfyller kraven.",
      "Se till att rätt personer har behörighet till bidraget i Skolverkets e-tjänst.",
      "Begär ut pengarna i e-tjänsten varje termin. Ange bland annat personnummer, typ av tjänst, löneökning, skolenhet och frånvaro på 30 dagar eller mer.",
      "Meddela Skolverket om en lärare slutar, blir sjuk eller tjänstledig efter beslutet."
    ],
    redovisning: "Ingen separat slutredovisning – uppgifterna lämnas i varje begäran om utbetalning. Ändringar efter beslut (frånvaro, att någon slutar) ska mejlas till Skolverket och kan leda till att pengar ska betalas tillbaka.",
    fallgropar: [
      "För sen begäran om utbetalning avvisas i normalfallet.",
      "Pengar som inte begärs ut kan inte sparas till nästa termin.",
      "En tjänst som inte utlysts öppet ger inte rätt till bidrag.",
      "Nyanställda förstelärare måste få en total lön som ligger minst 5 000 kr (pott 1) över huvudmannens medianlön för samma lärarkategori.",
      "Vilka skolor som hör till pott 2 kan ändras mellan åren. Slås skolor ihop eller delas de får de nya skolenhetskoder och hamnar i pott 1."
    ],
    nyckelord: ["förstelärare", "lektor", "lektorer", "karriärsteg", "karriärtjänst", "karriärtjänster", "lön", "löneökning", "lönepåslag", "utanförskapsområden", "utsatta områden", "pott 2"],
    kallor: [
      { titel: "Statsbidrag för karriärtjänster 2026/27 – Skolverket", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-karriartjanster-2026-27" },
      { titel: "Statsbidrag för karriärtjänster 2025/26 – Skolverket", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-karriartjanster-2025-26" },
      { titel: "Förordning (2019:1288) om statsbidrag till skolhuvudmän som inrättar karriärsteg för lärare", url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/forordning-20191288-om-statsbidrag-till_sfs-2019-1288" }
    ],
    senastKontrollerad: "2026-09-25",
    osakerhet: "Datum för 2027/28 är uppskattade. Bidragsramarna för 2025/26 och 2026/27 beslutades vid olika tidpunkter, så beslutsmånaden för 2027/28 är osäker. Sidan nämner inte regioner uttryckligen."
  },

  {
    id: "battre-arbetsmiljo-larare",
    namn: "Statsbidrag för bättre arbetsmiljö och arbetsvillkor för lärare i socioekonomiskt utsatta områden 2026/27",
    kortnamn: "Bättre arbetsmiljö för lärare",
    myndighet: "Skolverket",
    giltighet: "aktiv",
    sammanfattning: "Pengar till cirka 150 utvalda grundskolor med tuffa förutsättningar, för att förbättra lärarnas arbetsmiljö – t.ex. kompetensutveckling, mindre administration och lägre personalomsättning. Bara utvalda skolor kan få del.",
    syfte: "Att lärare ska vilja stanna och orka arbeta i skolor med socioekonomiska utmaningar, genom bättre arbetsmiljö och arbetsvillkor.",
    omraden: ["personal", "kompetens", "likvardighet"],
    skolformer: ["forskoleklass", "grundskola"],
    sokande: { fristaende: "villkor", kommun: "villkor", region: "nej", stat: "villkor", ovriga: "nej" },
    sokandeNot: "Kommunala, fristående och statliga huvudmän kan få bidraget, men bara för de cirka 150 skolenheter med förskoleklass eller grundskola som Skolverket har valt ut. Skolan ska ha minst 50 elever, ligga i en större eller storstadsnära kommun och ha de svåraste förutsättningarna utifrån elevernas bakgrund. Man ansöker inte – Skolverket beslutar vilka skolor som ingår. Urvalet gäller för 2026/27 och 2027/28.",
    typ: "rekvisition",
    perioder: [
      { typ: "beslut", fran: "2026-05-01", till: "2026-05-31", text: "Beslut om vilka huvudmän och skolor som ingår (gäller två läsår) och om bidragsramar för 2026/27.", ungefar: false },
      { typ: "rekvisition", fran: "2026-08-15", till: "2026-09-15", text: "Begäran om utbetalning 1 för åtgärder 1 juli–31 december 2026.", ungefar: false },
      { typ: "rekvisition", fran: "2027-01-15", till: "2027-02-15", text: "Begäran om utbetalning 2 för åtgärder 1 januari–30 juni 2027.", ungefar: false },
      { typ: "beslut", fran: "2027-03-01", till: "2027-06-30", text: "Ny bidragsram för 2027/28 för samma huvudmän – Skolverket skriver att den beslutas under våren 2027.", ungefar: true },
      { typ: "redovisning", fran: "2027-08-15", till: "2027-09-15", text: "Redovisning av hur pengarna för 2026/27 har använts.", ungefar: false }
    ],
    belopp: "487,5 miljoner kr för läsåret 2026/27: 285 miljoner för hösten 2026 och 202,5 miljoner för våren 2027. Beloppet är lägre på våren eftersom en tillfällig förstärkning har tagits bort. Hur mycket varje huvudman kan få framgår av bidragsramen.",
    villkor: [
      "Pengarna får bara användas på de skolenheter som finns med i bidragsramen.",
      "Pengarna ska gå till åtgärder som förbättrar lärarnas arbetsmiljö, t.ex. kompetensutveckling, minskad arbetsbelastning och administration, introduktion av nyanställda eller bättre arbetsro.",
      "Pengarna får inte användas till sådant skolan ändå måste göra enligt lag, t.ex. ordinarie undervisning, elevhälsa eller skolmåltider.",
      "Samma kostnad får inte betalas med flera statsbidrag (dubbelfinansiering)."
    ],
    hurDuGor: [
      "Kontrollera i Skolverkets beslutsbilaga om någon av era skolor finns med.",
      "Gör en plan för vilka åtgärder som ska förbättra lärarnas arbetsmiljö på de skolorna.",
      "Begär ut pengarna i e-tjänsten för statsbidrag – en gång för hösten och en gång för våren. Ange skolor, åtgärder och belopp per åtgärd.",
      "Spara fakturor, löneunderlag och annat som visar vad pengarna gått till.",
      "Redovisa användningen i e-tjänsten efter läsårets slut."
    ],
    redovisning: "Redovisning i e-tjänsten 15 augusti–15 september 2027 för läsåret 2026/27. Kostnaderna ska ha uppstått 1 juli 2026–30 juni 2027. Skolverket kan begära fakturor och löneunderlag. Totalt begärt belopp ska stämma med totalt redovisat belopp.",
    fallgropar: [
      "Pengar som används på skolor utanför bidragsramen kan krävas tillbaka.",
      "Saknas underlag som styrker kostnaderna blir huvudmannen återbetalningsskyldig.",
      "Vid omorganisation ska pengarna fortfarande gå till de utvalda skolorna – och det ska gå att visa.",
      "Att en skola var med förra året betyder inte att den är med i år."
    ],
    nyckelord: ["arbetsmiljö", "arbetsvillkor", "lärares arbetsmiljö", "utsatta områden", "utanförskapsområden", "socioekonomiskt utsatta", "personalomsättning", "administration", "avlasta lärare"],
    kallor: [
      { titel: "Statsbidrag för bättre arbetsmiljö och arbetsvillkor för lärare i socioekonomiskt utsatta områden 2026/27 – Skolverket", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-battre-arbetsmiljo-och-arbetsvillkor-for-larare-i-socioekonomiskt-utsatta-omraden-2026-27" },
      { titel: "Förordning (2021:316) om statsbidrag till huvudmän för förskoleklasser och grundskolor med socioekonomiska utmaningar", url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/forordning-2021316-om-statsbidrag-till_sfs-2021-316" }
    ],
    senastKontrollerad: "2026-09-25",
    osakerhet: "Exakt beslutsdatum för bidragsramen 2027/28 är inte publicerat. Anslaget för 2027/28 är inte känt."
  },

  {
    id: "fortbildning-larare-forskollarare",
    namn: "Statsbidrag för fortbildning av lärare och förskollärare 2026",
    kortnamn: "Fortbildning för lärare (Lärarlyftet)",
    myndighet: "Skolverket",
    giltighet: "aktiv",
    sammanfattning: "Pengar till huvudmän vars lärare läser Lärarlyftets kurser, speciallärar- eller specialpedagogutbildning, svenska som andraspråk eller yrkeslärarutbildning. Söks varje termin.",
    syfte: "Att lärare och förskollärare ska kunna vidareutbilda sig för att bli behöriga i fler ämnen, ta en viss examen eller få ny kunskap – utan att förlora för mycket lön.",
    omraden: ["kompetens"],
    skolformer: ["forskola", "forskoleklass", "grundskola", "anpassad-grundskola", "specialskola", "sameskola", "fritidshem", "gymnasieskola", "anpassad-gymnasieskola", "komvux"],
    sokande: { fristaende: "ja", kommun: "ja", region: "ja", stat: "ja", ovriga: "villkor" },
    sokandeNot: "Alla huvudmän inom skolväsendet kan söka – kommunala, fristående, regionala och statliga. Fristående huvudmän söker på samma villkor som kommuner. Även svenska utlandsskolor, Statens institutionsstyrelse och Kriminalvården kan söka. Folkhögskolor kan bara söka för studier i svenska som andraspråk eller för sfi-behörighet. Enskilda lärare kan inte söka själva. Är läraren anställd hos en entreprenör söker huvudmannen.",
    typ: "ansokan",
    perioder: [
      { typ: "ansokan", fran: "2026-08-15", till: "2026-09-15", text: "Ansökan för höstterminen 2026 (stängd).", ungefar: false },
      { typ: "ansokan", fran: "2027-01-15", till: "2027-02-16", text: "Ansökan för vårterminen 2027. Sista dag 16 februari styrs av Skolverkets föreskrifter; öppningsdatum uppskattat från 2026.", ungefar: true },
      { typ: "redovisning", fran: "2027-04-01", till: "2027-05-03", text: "Redovisning av bidrag för vår- och hösttermin 2026.", ungefar: false },
      { typ: "ansokan", fran: "2027-08-15", till: "2027-09-15", text: "Ansökan för höstterminen 2027 – uppskattat utifrån 2026.", ungefar: true }
    ],
    belopp: "Två modeller att välja per lärare. 1) Löneersättning: cirka 56 procent av en schablonlön, t.ex. 193 760 kr per termin för en heltidsanställd lärare som studerar på heltid. 2) Högskolepoäng: 1 000 kr per poäng (1 500 kr för svenska som andraspråk). Våren 2026 fick 528 huvudmän totalt cirka 168 miljoner kr.",
    villkor: [
      "Studierna ska vara Lärarlyftets ämneskurser, utbildning till speciallärare eller specialpedagog, svenska som andraspråk, yrkeslärarutbildning som leder till examen, eller vissa kurser för förskollärare i förskoleklass.",
      "Läraren ska i regel ha lärar- eller förskollärarexamen. Undantag finns för bl.a. yrkeslärare som studerar mot examen och lärare som läser svenska som andraspråk.",
      "Med löneersättningsmodellen ska läraren få minst 80 procent av lönen för studietiden om hen är tjänstledig eller studerar på tid utanför en deltidstjänst.",
      "Samma kostnad får inte finansieras av flera statsbidrag.",
      "Huvudmannen får inte ha skulder hos Kronofogden eller obetalda återkrav."
    ],
    hurDuGor: [
      "Prata med läraren om vilken utbildning det gäller och hur mycket arbetstid som kan avsättas.",
      "Välj ersättningsmodell för varje lärare: löneersättning eller högskolepoäng. Använd Skolverkets beräkningsstöd.",
      "Se till att rätt personer har behörighet till bidraget i Skolverkets e-tjänst.",
      "Ansök i början av varje termin som läraren studerar – med personnummer, utbildning, skolenhet och skolform.",
      "Följ varje termin upp om läraren avbryter studierna eller byter arbetsgivare.",
      "Redovisa i e-tjänsten året efter hur mycket av pengarna som använts."
    ],
    redovisning: "Redovisning i e-tjänsten året efter: bidrag för 2026 redovisas 1 april–3 maj 2027. Ange beviljat och använt belopp per lärare och skäl om allt inte använts.",
    fallgropar: [
      "Ansökningar efter sista dag avvisas, och man kan inte lägga till lärare i efterhand.",
      "Bidraget söks per termin – man måste söka igen varje termin tills utbildningen är klar.",
      "Lärosätenas vanliga ämneskurser omfattas inte – bara Lärarlyftets uppdragsutbildningar (utom för speciallärare/specialpedagog och svenska som andraspråk).",
      "VAL-utbildning (för obehöriga lärare) ger bara bidrag om den leder till yrkeslärarexamen eller gäller svenska som andraspråk.",
      "Professionsprogrammet och VAK omfattas inte.",
      "Om fler söker än pengarna räcker till görs ett urval. Pågående utbildningar och skolor med tuffa förutsättningar prioriteras."
    ],
    nyckelord: ["Lärarlyftet", "Lärarlyftet II", "fortbildning", "vidareutbildning", "behörighet", "utöka behörighet", "speciallärare", "specialpedagog", "specialpedagogik", "svenska som andraspråk", "sva", "sfi", "yrkeslärare", "VAL", "kompetensutveckling", "förskollärare", "tioårig grundskola"],
    kallor: [
      { titel: "Statsbidrag för fortbildning av lärare och förskollärare 2026 – Skolverket", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-fortbildning-av-larare-och-forskollarare-2026" },
      { titel: "Förordning (2023:144) om statsbidrag för fortbildning av lärare och förskollärare", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-2023144-om-statsbidrag-for_sfs-2023-144/" }
    ],
    senastKontrollerad: "2026-09-25",
    osakerhet: "Någon sida för 2027 finns ännu inte. Datum för 2027 är uppskattade utifrån 2026 och Skolverkets föreskrift om sista ansökningsdag (16 februari respektive 15 september). Beslutsdatum för höstens ansökan 2026 och total budget för 2026–2027 anges inte på sidan. Bidraget ersatte 2023 bland annat det tidigare statsbidraget för Lärarlyftet och bidragen för specialpedagogik, sva/sfi, förskollärare och yrkeslärare."
  },

  {
    id: "personalforstarkning",
    namn: "Statsbidrag för personalförstärkning 2027",
    kortnamn: "Personalförstärkning, lärarassistenter",
    myndighet: "Skolverket",
    giltighet: "aktiv",
    sammanfattning: "Bidrag som täcker ungefär halva lönekostnaden när skolan anställer fler i elevhälsan, speciallärare, lärarassistenter eller annan personal som avlastar lärare. Söks varje år. Nästa ansökan: 15 jan–15 feb 2027.",
    syfte: "Att fler vuxna ska finnas i skolan så att elever får stöd i tid, elevhälsan blir starkare och det blir tryggare och lugnare i klassrummen.",
    omraden: ["personal", "stod"],
    skolformer: ["forskoleklass", "grundskola", "anpassad-grundskola", "gymnasieskola", "anpassad-gymnasieskola"],
    sokande: { fristaende: "ja", kommun: "ja", region: "ja", stat: "ja", ovriga: "nej" },
    sokandeNot: "Kommunala, fristående, statliga och regionala huvudmän för förskoleklass, grundskola, anpassad grundskola, gymnasieskola och anpassad gymnasieskola. Fristående huvudmän söker på samma villkor som kommuner. Bidraget söks för hela huvudmannen, inte per skola. Speciallärare i särskilda undervisningsgrupper gäller bara grundskola och anpassad grundskola.",
    typ: "ansokan",
    perioder: [
      { typ: "redovisning", fran: "2027-01-15", till: "2027-02-15", text: "Redovisning av bidraget för 2026 (för den som fick bidrag 2026).", ungefar: false },
      { typ: "ansokan", fran: "2027-01-15", till: "2027-02-15", text: "Ansökan för bidragsåret 2027 (1 januari–31 december 2027).", ungefar: false },
      { typ: "beslut", fran: "2027-06-01", till: "2027-07-31", text: "Beslut om ansökan – för 2026 kom beslutet i juli.", ungefar: true },
      { typ: "utbetalning", fran: null, till: null, text: "Beviljat bidrag betalas ut en gång per termin.", ungefar: false },
      { typ: "redovisning", fran: "2028-01-15", till: "2028-02-15", text: "Redovisning av bidraget för 2027.", ungefar: false }
    ],
    belopp: "Skolverket bestämmer ett fast belopp (schablonbelopp) per årsarbetskraft (heltidstjänst) för varje yrkeskategori. Bidraget är antalet nya och behållna årsarbetskrafter gånger det beloppet. Beloppet motsvarar redan ungefär halva lönekostnaden, så det ska inte halveras en gång till. För 2026 var bidraget t.ex. 248 000 kr per årsarbetskraft för lärarassistent, 302 000 kr för läraravlastande personal med relevant utbildning, 402 000 kr för speciallärare och 351 000 kr för kurator. Vid deltid blir bidraget lägre i samma proportion. För 2026 fick 723 huvudmän totalt 1 550 miljoner kr. Belopp för 2027 är inte beslutade.",
    villkor: [
      "Pengarna ska gå till fler årsarbetskrafter (heltidstjänster) än året innan, räknat för hela huvudmannen. Att flytta runt befintlig personal räknas inte.",
      "Anställningen eller uppdraget ska vara minst sex månader.",
      "Bara vissa yrken omfattas: skolläkare, skolsköterskor, kuratorer, psykologer, speciallärare, lärare som utbildar sig till speciallärare/specialpedagog, läraravlastande personal och lärarassistenter.",
      "Bidraget får inte betala den elevhälsa som skolan redan måste ha enligt skollagen.",
      "Huvudmannen ska ha haft verksamhet året före bidragsåret.",
      "Ni kan inte få bidraget för arbetstid som redan betalas med ett annat statsbidrag, t.ex. bidraget för likvärdig skola. När ni räknar årsarbetskrafter ska ni ändå ta med all personal i yrkeskategorin, även den som betalas med andra bidrag."
    ],
    hurDuGor: [
      "Räkna ut hur många årsarbetskrafter per yrkeskategori ni hade 2026. Skolverket har ett beräkningsstöd i Excel.",
      "Bestäm hur många tjänster ni vill behålla från tidigare bidrag och hur många nya ni vill anställa 2027.",
      "Se till att rätt personer har behörighet till bidraget i Skolverkets e-tjänst.",
      "Ansök i e-tjänsten 15 januari–15 februari 2027.",
      "Spara underlag om anställningar och timmar under året.",
      "Redovisa antalet årsarbetskrafter 15 januari–15 februari 2028."
    ],
    redovisning: "Efter bidragsåret redovisar huvudmannen antalet årsarbetskrafter per yrkeskategori för året före och bidragsåret, och om tidigare förstärkningar har behållits. För 2026: 15 jan–15 feb 2027. För 2027: 15 jan–15 feb 2028. Kommer redovisningen in för sent riskerar ni återbetalning.",
    fallgropar: [
      "Om ni inte ökar personalen så mycket som ni sökt för kan ni behöva betala tillbaka pengar.",
      "Den som inte sökte föregående år kan inte söka för att 'behålla' tjänster – bara för nya.",
      "Specialpedagoger som redan är färdigutbildade omfattas inte – bara lärare som studerar till specialpedagog.",
      "Logoped, fysioterapeut och andra yrken än de uppräknade ger inte bidrag.",
      "Lönen ska inte ses som permanent finansiering – bidraget kan försvinna om regeringen ändrar prioriteringar."
    ],
    nyckelord: ["lärarassistent", "lärarassistenter", "assistent", "elevassistent", "läraravlastande personal", "fler vuxna i skolan", "elevhälsa", "kurator", "skolsköterska", "psykolog", "speciallärare", "personalförstärkning", "anställa", "rekrytera"],
    kallor: [
      { titel: "Statsbidrag för personalförstärkning 2027 – Skolverket", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-personalforstarkning-2027" },
      { titel: "Statsbidrag för personalförstärkning 2026 – Skolverket", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-personalforstarkning-2026" },
      { titel: "Förordning (2024:1341) om statsbidrag för personalförstärkning", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-20241341-om-statsbidrag-for_sfs-2024-1341/" }
    ],
    senastKontrollerad: "2026-09-25",
    osakerhet: "Anslag och schablonbelopp för 2027 är inte beslutade – beloppen ovan gäller 2026. Beslutsmånaden för 2027 är uppskattad. Bidraget handlar till stor del om elevhälsa och kan därför också finnas under området särskilt stöd."
  },

  {
    id: "lararassistenter",
    namn: "Statsbidrag för lärarassistenter",
    kortnamn: "Lärarassistenter (upphört 2026)",
    myndighet: "Skolverket",
    giltighet: "upphort",
    sammanfattning: "Det särskilda bidraget för lärarassistenter finns inte kvar från 2026. Lärarassistenter ingår nu i Statsbidrag för personalförstärkning, som söks 15 januari–15 februari 2027.",
    syfte: "Bidraget gav huvudmän pengar för att anställa lärarassistenter som avlastar lärare, så att lärarna kan ägna sig åt undervisning.",
    omraden: ["personal"],
    skolformer: ["forskoleklass", "grundskola", "anpassad-grundskola", "gymnasieskola", "anpassad-gymnasieskola"],
    sokande: { fristaende: "nej", kommun: "nej", region: "nej", stat: "nej", ovriga: "nej" },
    sokandeNot: "Bidraget går inte längre att söka. Sök i stället Statsbidrag för personalförstärkning. Där kan kommunala, fristående, statliga och regionala huvudmän söka för lärarassistenter. Den som fick bidrag för lärarassistenter 2025 kunde söka för att behålla de tjänsterna inom personalförstärkning 2026.",
    typ: "ovrigt",
    perioder: [],
    belopp: "Inom personalförstärkning 2026 var bidraget 248 000 kr per årsarbetskraft (heltidstjänst) för lärarassistenter. Beloppet motsvarar ungefär halva lönekostnaden.",
    villkor: [
      "Förordningen om statsbidrag för lärarassistenter (2019:551) är upphävd.",
      "Inom personalförstärkning ska lärarassistenter avlasta lärare så att de kan ägna sig åt undervisning, och tjänsterna ska vara en ökning jämfört med året innan."
    ],
    hurDuGor: [
      "Läs om Statsbidrag för personalförstärkning 2027 på Skolverkets webbplats.",
      "Räkna ut hur många lärarassistenter (i årsarbetskrafter) ni hade 2026.",
      "Ansök om personalförstärkning i e-tjänsten 15 januari–15 februari 2027."
    ],
    redovisning: "Redovisning sker nu inom personalförstärkning, efter varje bidragsår.",
    fallgropar: [
      "Att söka efter ett eget lärarassistentbidrag – det finns inte längre.",
      "Tjänster som finns med i personalförstärkning måste vara en ökning jämfört med året innan."
    ],
    nyckelord: ["lärarassistent", "lärarassistenter", "assistent", "elevassistent", "avlasta lärare", "lärarassistentbidrag"],
    kallor: [
      { titel: "Statsbidrag för personalförstärkning 2026 – Skolverket (om att lärarassistenter ingår från 2026)", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-personalforstarkning-2026" },
      { titel: "Statsbidrag för personalförstärkning 2027 – Skolverket", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-personalforstarkning-2027" }
    ],
    senastKontrollerad: "2026-09-25",
    osakerhet: "Skolverkets gamla sida om lärarassistenter 2025 är borttagen, så uppgifterna bygger på sidorna om personalförstärkning."
  },

  {
    id: "kvalitetshojande-atgarder-forskolan",
    namn: "Statsbidrag för kvalitetshöjande åtgärder i förskolan 2027",
    kortnamn: "Förskolan: personal och mindre grupper",
    myndighet: "Skolverket",
    giltighet: "aktiv",
    sammanfattning: "Pengar till kommuner för mindre barngrupper, för att behålla eller anställa personal och för kompetensutveckling av förskollärare och barnskötare. Kommunen kan föra pengar vidare till fristående förskolor.",
    syfte: "Att höja kvaliteten i förskolan genom lagom stora barngrupper, tillräckligt med personal och personal med rätt kompetens.",
    omraden: ["personal", "kompetens"],
    skolformer: ["forskola"],
    sokande: { fristaende: "via-kommun", kommun: "ja", region: "nej", stat: "nej", ovriga: "nej" },
    sokandeNot: "Bara kommuner kan få bidraget. Fristående förskolor kan inte söka själva, men kommunen får använda pengarna även i fristående förskolor. Kommunen ska redovisa hur mycket som gått till fristående förskolor. Fristående huvudmän som vill ta del bör alltså kontakta sin kommun.",
    typ: "rekvisition",
    perioder: [
      { typ: "beslut", fran: null, till: null, text: "Bidragsramar för 2027 – Skolverket har inte publicerat dem ännu.", ungefar: false },
      { typ: "rekvisition", fran: "2027-01-15", till: "2027-02-15", text: "Kommunen begär ut pengarna för 2027 (1 januari–31 december 2027).", ungefar: false },
      { typ: "utbetalning", fran: "2027-09-01", till: "2027-09-30", text: "Hälften betalas ut vid beslutet (våren 2027), resten planeras till september 2027.", ungefar: true },
      { typ: "redovisning", fran: "2027-03-01", till: "2027-04-01", text: "Kommunerna redovisar hur 2026 års bidrag använts.", ungefar: false },
      { typ: "redovisning", fran: "2028-03-01", till: "2028-04-03", text: "Kommunerna redovisar hur 2027 års bidrag använts.", ungefar: false }
    ],
    belopp: "Totalt 2 886 miljoner kr för 2027 (2026: 3 086 miljoner kr). SCB räknar fram varje kommuns bidragsram.",
    villkor: [
      "Pengarna får bara användas till tre saker: mindre barngrupper enligt Skolverkets riktmärke, att behålla eller anställa personal, och kompetensutveckling för förskollärare och annan personal i barngrupperna (t.ex. barnskötare).",
      "Kommunen får flytta pengar mellan de tre delarna under året.",
      "Kostnaderna ska uppstå under bidragsåret (1 januari–31 december)."
    ],
    hurDuGor: [
      "Kommunen: kontrollera bidragsramen när Skolverket publicerar den.",
      "Bestäm hur pengarna ska fördelas mellan de tre delarna – och om en del ska gå till fristående förskolor.",
      "Begär ut pengarna i e-tjänsten 15 januari–15 februari 2027.",
      "Redovisa året efter hur mycket som använts till varje del och hur mycket som gått till fristående förskolor.",
      "Fristående förskola: fråga kommunen hur den fördelar bidraget."
    ],
    redovisning: "Kommunen redovisar i e-tjänsten hur mycket som använts till varje av de tre delarna och hur mycket som fördelats till fristående förskolor. För 2026: 1 mars–1 april 2027. För 2027: 1 mars–3 april 2028.",
    fallgropar: [
      "Fristående förskolor kan inte söka direkt – de är beroende av hur kommunen väljer att fördela.",
      "Kommunen kan inte begära ut mer än sin bidragsram.",
      "Pengar som används till annat än de tre delarna kan krävas tillbaka."
    ],
    nyckelord: ["förskola", "barnskötare", "förskollärare", "barngrupper", "barngruppernas storlek", "kompetensutveckling förskola", "rekrytera personal förskola", "fristående förskola"],
    kallor: [
      { titel: "Statsbidrag för kvalitetshöjande åtgärder i förskolan 2027 – Skolverket", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-kvalitetshojande-atgarder-i-forskolan-2027" },
      { titel: "Statsbidrag för kvalitetshöjande åtgärder i förskolan 2026 – Skolverket", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-kvalitetshojande-atgarder-i-forskolan-2026" },
      { titel: "Förordning (2021:848) om statsbidrag för kvalitetshöjande åtgärder inom förskolan", url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/forordning-2021848-om-statsbidrag-for_sfs-2021-848" }
    ],
    senastKontrollerad: "2026-09-25",
    osakerhet: "Bidragsramar och exakt beslutsdatum för 2027 är inte publicerade. Bidraget gäller hela förskolans kvalitet och kan därför också finnas under förskoleområdet."
  },

  {
    id: "praktiknara-forskning",
    namn: "Statsbidrag för praktiknära forskning och utveckling 2026/27",
    kortnamn: "Forskartid för lärare",
    myndighet: "Skolverket",
    giltighet: "aktiv",
    sammanfattning: "Bidrag som betalar halva lönen för den tid som lärare eller förskollärare med doktors- eller licentiatexamen forskar i den egna verksamheten, upp till 30 procent av arbetstiden.",
    syfte: "Att främja forskning och utvecklingsarbete i skolan och göra det attraktivt för forskarutbildade lärare att arbeta kvar i skolan.",
    omraden: ["kompetens", "lon-karriar"],
    skolformer: ["forskola", "forskoleklass", "grundskola", "anpassad-grundskola", "specialskola", "sameskola", "fritidshem", "gymnasieskola", "anpassad-gymnasieskola", "komvux"],
    sokande: { fristaende: "ja", kommun: "ja", region: "ja", stat: "ja", ovriga: "ja" },
    sokandeNot: "Kommunala, fristående och övriga huvudmän inom hela skolväsendet, från förskola till komvux. Fristående huvudmän söker på samma villkor som kommuner. Är läraren anställd hos en entreprenör måste huvudmannen söka. Huvudmannen står själv för minst halva kostnaden (medfinansiering).",
    typ: "ansokan",
    perioder: [
      { typ: "beslut", fran: "2026-06-01", till: "2026-06-30", text: "Beslut om ansökan för 2026/27 (38 huvudmän beviljades). Ansökan var öppen 15 mars–15 april 2026.", ungefar: false },
      { typ: "rekvisition", fran: "2026-10-15", till: "2026-11-16", text: "Begäran om utbetalning 1 (hösten 2026) för den som beviljats bidrag.", ungefar: false },
      { typ: "rekvisition", fran: "2027-04-01", till: "2027-05-03", text: "Begäran om utbetalning 2 (våren 2027).", ungefar: false },
      { typ: "ansokan", fran: "2027-03-15", till: "2027-04-15", text: "Ansökan för läsåret 2027/28 – uppskattat utifrån 2026.", ungefar: true }
    ],
    belopp: "25 miljoner kr för 2026/27. Skolverket betalar högst hälften av lönekostnaden för forskningstiden, alltså högst 15 procent av lärarens lön (vid 30 procent forskningstid). För 2026/27 beviljades totalt cirka 6,8 miljoner kr.",
    villkor: [
      "Läraren eller förskolläraren ska vara anställd hos huvudmannen, legitimerad och ha licentiat- eller doktorsexamen i ett skolämne, ämnesdidaktik eller specialpedagogik med koppling till undervisningen.",
      "Högst 30 procent av arbetstiden får gå till forskningen.",
      "Medfinansiering: huvudmannen betalar minst lika mycket som bidraget.",
      "Projektet ska utgå från ett verkligt problem i verksamheten och kopplas till undervisningen.",
      "Lönepåslag för karriärtjänst (t.ex. lektor) ska räknas bort från lönen i ansökan, annars blir det dubbelfinansiering."
    ],
    hurDuGor: [
      "Ta fram ett forskningsprojekt tillsammans med läraren, med tydligt syfte och koppling till undervisningen.",
      "Ansök i Skolverkets e-tjänst under ansökningsperioden på våren.",
      "Om ni beviljas: begär ut pengarna i e-tjänsten varje termin, med lön och forskningstid per lärare.",
      "Meddela Skolverket om läraren inte kan forska så mycket som beviljats."
    ],
    redovisning: "Ingen separat slutredovisning anges. Uppgifterna lämnas i begäran om utbetalning varje termin. Minskar forskningstiden efter sista utbetalningen ska Skolverket meddelas, och pengar kan krävas tillbaka.",
    fallgropar: [
      "Läraren måste redan ha tagit sin forskarexamen när ansökan görs.",
      "Samarbete med universitet krävs inte, men projektet måste vara tydligt kopplat till verksamheten.",
      "Månader utan forskning (t.ex. semester) räknas inte."
    ],
    nyckelord: ["forskning", "praktiknära forskning", "forskarutbildade lärare", "lektor", "doktor", "licentiat", "skolutveckling", "forskningstid"],
    kallor: [
      { titel: "Statsbidrag för praktiknära forskning och utveckling 2026/27 – Skolverket", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-praktiknara-forskning-och-utveckling-2026-27" },
      { titel: "Förordning (2021:237) om statsbidrag för främjande av forskning och utvecklingsarbete i skolväsendet", url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/forordning-2021237-om-statsbidrag-for_sfs-2021-237" }
    ],
    senastKontrollerad: "2026-09-25",
    osakerhet: "Ansökningsperioden för 2027/28 är inte publicerad och är uppskattad utifrån 2026. Sidan säger 'kommunala, fristående och övriga huvudmän' – regioner och statliga huvudmän antas ingå i 'övriga'."
  }
);
