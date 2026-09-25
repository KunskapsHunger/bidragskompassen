/* Statsbidrag från Skolverket för förskola, förskoleklass, grundskola,
   anpassad grundskola, specialskola, sameskola och fritidshem – med fokus
   på barnens och elevernas utbildning. Kontrollerat 2026-09-25. */
window.SB_GRANTS = window.SB_GRANTS || [];
window.SB_GRANTS.push(
  {
    id: "starkt-kunskapsutveckling",
    namn: "Statsbidrag för stärkt kunskapsutveckling",
    kortnamn: "Stärkt kunskapsutveckling",
    myndighet: "Skolverket",
    giltighet: "aktiv",
    sammanfattning: "Ett stort och flexibelt bidrag till förskoleklass, grundskola och fritidshem. Huvudmannen väljer själv insatser som hjälper eleverna att lära mer, till exempel extra personal, elevhälsa eller specialpedagogiskt stöd.",
    syfte: "Bidraget ska hjälpa skolor att höja kvaliteten i utbildningen så att alla elever kan nå så långt som möjligt i sin kunskapsutveckling. Mer pengar går till huvudmän vars elever har sämre socioekonomiska förutsättningar.",
    omraden: ["likvardighet", "stod", "personal"],
    skolformer: ["forskoleklass", "grundskola", "fritidshem"],
    sokande: { fristaende: "ja", kommun: "ja", region: "nej", stat: "nej", ovriga: "nej" },
    sokandeNot: "Kommunala och fristående huvudmän (huvudman = den som driver skolan) för förskoleklass och grundskola kan söka. Fristående huvudmän söker själva på samma villkor som kommunerna. Man måste ha fått en bidragsram, alltså ett högsta belopp som Skolverket räknat ut. Nystartade huvudmän som ännu inte lämnat elevstatistik till SCB får ingen bidragsram. Bidraget får inte användas i anpassade grundskolan.",
    typ: "rekvisition",
    perioder: [
      { typ: "ansokan", fran: "2026-01-15", till: "2026-02-16", text: "Ansökan för bidragsåret 2026 (stängd).", ungefar: false },
      { typ: "redovisning", fran: "2026-12-15", till: "2027-02-01", text: "Redovisning av hur 2026 års bidrag har använts.", ungefar: false },
      { typ: "ansokan", fran: "2027-01-15", till: "2027-02-15", text: "Ansökan för bidragsåret 2027 i Skolverkets e-tjänst.", ungefar: false },
      { typ: "beslut", fran: null, till: null, text: "Skolverket fattar beslut för alla huvudmän under våren 2027. Beslutet tar längre tid för dem vars planer granskas.", ungefar: false },
      { typ: "utbetalning", fran: null, till: null, text: "Beviljat bidrag för 2027 betalas ut vid två tillfällen under 2027.", ungefar: false },
      { typ: "redovisning", fran: "2027-12-15", till: "2028-02-01", text: "Redovisning av hur 2027 års bidrag har använts.", ungefar: false }
    ],
    belopp: "Varje huvudman får en bidragsram som räknas ut efter antal elever och ett socioekonomiskt index (hur elevernas förutsättningar ser ut). Totalt ca 9,36 miljarder kr för 2026 och 7,58 miljarder kr för 2027. Beloppet för 2027 kan höjas om regeringen skjuter till mer pengar.",
    villkor: [
      "Pengarna ska gå till utökade insatser, alltså sådant som går utöver det skolan redan måste göra enligt skollagen.",
      "Bidraget får inte ersätta sådant som huvudmannen redan betalar själv.",
      "Insatserna ska bygga på en nulägesanalys i huvudmannens systematiska kvalitetsarbete och beskrivas i en plan i ansökan.",
      "Berörda fackliga organisationer ska ha fått yttra sig över planen innan den görs klar.",
      "Samma kostnad får inte betalas med något annat statsbidrag.",
      "Pengarna ska användas under bidragsåret (1 januari–31 december).",
      "Huvudmannen får inte ha skatteskulder hos Kronofogden, vara i konkurs eller ha obetalda återkrav hos Skolverket."
    ],
    hurDuGor: [
      "Kontrollera i Skolverkets lista att ni har fått en bidragsram och hur stor den är.",
      "Gör en nulägesanalys: vad behöver era elever mest?",
      "Välj en eller flera insatser inom de tio kategorierna i ansökningsformuläret och koppla varje insats till kostnader.",
      "Låt facket yttra sig över planen och spara underlag som visar det.",
      "Ansök i Skolverkets e-tjänst för statsbidrag 15 januari–15 februari 2027.",
      "Följ upp insatserna och redovisa efter årets slut."
    ],
    redovisning: "Efter bidragsåret redovisar huvudmannen i e-tjänsten hur pengarna har använts. För 2026 är redovisningen öppen 15 december 2026–1 februari 2027, för 2027 är den öppen 15 december 2027–1 februari 2028. Pengar som inte använts enligt reglerna kan krävas tillbaka.",
    fallgropar: [
      "Att söka pengar för sådant ni redan gör och betalar – det räknas som en besparing och godtas i regel inte.",
      "Att fördela pengarna jämnt mellan skolor utan konkreta insatser. Bidraget ska gå till specifika insatser.",
      "Att missa sista ansökningsdag. Sena ansökningar avvisas.",
      "Att inte kunna visa att facket har hörts om Skolverket kontrollerar.",
      "Att använda pengarna i anpassade grundskolan, vilket inte är tillåtet."
    ],
    nyckelord: ["likvärdig skola", "likvärdighetsbidraget", "kunskapsutveckling", "skolmiljarden", "extra resurser", "fler vuxna", "elevhälsa", "specialpedagog", "socioekonomi", "bidragsram", "fritids", "lågstadiet", "mellanstadiet", "högstadiet"],
    kallor: [
      { titel: "Skolverket: Statsbidrag för stärkt kunskapsutveckling 2026", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-starkt-kunskapsutveckling-2026" },
      { titel: "Skolverket: Statsbidrag för stärkt kunskapsutveckling 2027", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-starkt-kunskapsutveckling-2027" }
    ],
    senastKontrollerad: "2026-09-25",
    osakerhet: ""
  },
  {
    id: "likvardig-skola",
    namn: "Statsbidrag för likvärdig skola",
    kortnamn: "Likvärdig skola (har bytt namn)",
    myndighet: "Skolverket",
    giltighet: "upphort",
    sammanfattning: "Bidraget för likvärdig skola finns inte längre under det namnet. Sedan 2025 heter det statsbidrag för stärkt kunskapsutveckling och bygger på samma förordning. Sista omgången med det gamla namnet var 2024.",
    syfte: "Bidraget skulle stärka likvärdigheten och kunskapsutvecklingen för elever i förskoleklass, grundskola och fritidshem. Samma idé lever vidare i statsbidraget för stärkt kunskapsutveckling.",
    omraden: ["likvardighet"],
    skolformer: ["forskoleklass", "grundskola", "fritidshem"],
    sokande: { fristaende: "ja", kommun: "ja", region: "nej", stat: "nej", ovriga: "nej" },
    sokandeNot: "Kommunala och fristående huvudmän för förskoleklass och grundskola kunde söka. Samma gäller för efterföljaren, statsbidraget för stärkt kunskapsutveckling.",
    typ: "rekvisition",
    perioder: [],
    belopp: "För 2024 fanns ca 6,6 miljarder kr. Pengarna fördelades efter elevantal och ett socioekonomiskt index.",
    villkor: [
      "Pengarna skulle gå till utökade insatser utöver ordinarie verksamhet.",
      "Huvudmannen skulle lämna en plan som facket hade fått yttra sig över."
    ],
    hurDuGor: [
      "Sök inte det här bidraget – det finns inte längre.",
      "Gå i stället till statsbidraget för stärkt kunskapsutveckling.",
      "Ansökan för 2027 är öppen 15 januari–15 februari 2027 i Skolverkets e-tjänst."
    ],
    redovisning: "Redovisningen för 2024 är avslutad (den var öppen 15 november–16 december 2024).",
    fallgropar: [
      "Att leta efter det gamla namnet och tro att bidraget har försvunnit. Pengarna finns kvar under nytt namn."
    ],
    nyckelord: ["likvärdig skola", "likvärdighetsbidrag", "ökad likvärdighet", "likvärdighet och kunskapsutveckling", "skolmiljarden", "stärkt kunskapsutveckling"],
    kallor: [
      { titel: "Skolverket: Statsbidrag för likvärdig skola 2024 (avpublicerad)", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/avpublicerade-statsbidrag/statsbidrag-for-likvardig-skola-2024" },
      { titel: "Skolverket: Statsbidrag för stärkt kunskapsutveckling 2027", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-starkt-kunskapsutveckling-2027" }
    ],
    senastKontrollerad: "2026-09-25",
    osakerhet: ""
  },
  {
    id: "larobocker-lararhandledningar",
    namn: "Statsbidrag för inköp av läroböcker och lärarhandledningar",
    kortnamn: "Läroböcker och lärarhandledningar",
    myndighet: "Skolverket",
    giltighet: "aktiv",
    sammanfattning: "Pengar till tryckta läroböcker och lärarhandledningar i förskoleklass, grundskola, anpassad grundskola, specialskola och sameskola. Skolan måste först själv köpa för minst lika mycket per elev som tidigare år.",
    syfte: "Bidraget ska ge eleverna bättre tillgång till läroböcker och lärarna bättre tillgång till lärarhandledningar, så att det köps in mer än tidigare.",
    omraden: ["lasning"],
    skolformer: ["forskoleklass", "grundskola", "anpassad-grundskola", "specialskola", "sameskola"],
    sokande: { fristaende: "ja", kommun: "ja", region: "ja", stat: "ja", ovriga: "nej" },
    sokandeNot: "Kommunala, statliga, regionala och fristående huvudmän kan ta del av bidraget. Fristående huvudmän har samma rätt som kommunerna. Man måste ha en bidragsram från Skolverket och ha lämnat elevstatistik till SCB. Man söker inte i konkurrens – man begär ut pengar upp till sin ram.",
    typ: "rekvisition",
    perioder: [
      { typ: "rekvisition", fran: "2026-09-01", till: "2026-10-01", text: "Begäran om utbetalning för 2026 i Skolverkets e-tjänst.", ungefar: false },
      { typ: "beslut", fran: "2026-12-01", till: "2026-12-31", text: "Beslut om utbetalning väntas i december, som året innan.", ungefar: true },
      { typ: "rekvisition", fran: "2027-09-01", till: "2027-10-01", text: "Om bidraget finns kvar 2027 väntas begäran om utbetalning ske under hösten, som tidigare år.", ungefar: true }
    ],
    belopp: "555 miljoner kr för 2026. Varje huvudman får en ram efter sin andel av landets elever i skolformerna (genomsnitt av tre läsår). Man får bara pengar för kostnader över sin egen genomsnittliga kostnad per elev.",
    villkor: [
      "Pengarna får bara gå till tryckta läroböcker (gärna med digitala delar) och lärarhandledningar som hör till en lärobok.",
      "Rent digitala läromedel, skönlitteratur, facklitteratur, skolbiblioteksböcker, spel och pussel ingår inte.",
      "Huvudmannen måste själv betala läroböcker motsvarande sin genomsnittliga kostnad per elev de tre senaste åren (2023–2025). Bidraget täcker bara det som överstiger den nivån.",
      "Böckerna ska köpas under bidragsåret (1 januari–31 december 2026).",
      "Samma inköp får inte betalas med något annat statsbidrag, till exempel stärkt kunskapsutveckling.",
      "Huvudmannen får inte ha skatteskulder hos Kronofogden, vara i konkurs eller ha obetalda återkrav hos Skolverket."
    ],
    hurDuGor: [
      "Kontrollera er bidragsram i Skolverkets beslutsbilaga.",
      "Räkna ut er genomsnittliga kostnad per elev för läroböcker 2023–2025 (totala kostnader delat med totalt antal elever).",
      "Räkna ut hur mycket ni själva måste köpa för 2026 (snittkostnad × antal elever 2026).",
      "Köp läroböcker och lärarhandledningar under 2026 och spara fakturor.",
      "Begär ut bidraget i e-tjänsten 1 september–1 oktober 2026."
    ],
    redovisning: "Ingen vanlig redovisning. Skolverket kan göra kontroller och stickprov, och då måste ni kunna visa underlag. Meddela Skolverket om ni inte har använt hela bidraget.",
    fallgropar: [
      "Att köpa skönlitteratur eller biblioteksböcker för pengarna – de ska i stället betalas med bidraget för inköp av litteratur.",
      "Att räkna in böcker som köpts med andra statsbidrag i sin snittkostnad.",
      "Att inte själv köpa upp till sin tidigare nivå – då finns ingen rätt till bidrag.",
      "Att köpa böckerna ett annat år än bidragsåret."
    ],
    nyckelord: ["läromedel", "läroböcker", "böcker", "skolböcker", "lärarhandledning", "mattebok", "övningsbok", "lärobok", "tryckta böcker"],
    kallor: [
      { titel: "Skolverket: Statsbidrag för inköp av läroböcker och lärarhandledningar 2026", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-inkop-av-larobocker-och-lararhandledningar-2026" },
      { titel: "Skolverket: Statsbidrag för inköp av läroböcker och lärarhandledningar 2025", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-inkop-av-larobocker-och-lararhandledningar-2025" }
    ],
    senastKontrollerad: "2026-09-25",
    osakerhet: "Skolverket har ännu inte publicerat någon sida för 2027. Om bidraget fortsätter och när perioden för 2027 är uppskattat utifrån 2025 (1 september–8 oktober) och 2026 (1 september–1 oktober). Beslutsmånaden december 2026 är uppskattad utifrån 2025."
  },
  {
    id: "inkop-av-litteratur",
    namn: "Statsbidrag för inköp av litteratur",
    kortnamn: "Böcker och litteratur",
    myndighet: "Skolverket",
    giltighet: "aktiv",
    sammanfattning: "Pengar till tryckta skönlitterära böcker och faktaböcker till barn och elever, från förskola till gymnasiet. Kan till exempel användas till böcker i skolbiblioteket eller i klassrummet.",
    syfte: "Bidraget ska ge barn och elever bättre tillgång till olika sorters litteratur och därmed stärka läsningen.",
    omraden: ["lasning"],
    skolformer: ["forskola", "forskoleklass", "grundskola", "anpassad-grundskola", "specialskola", "sameskola", "gymnasieskola", "anpassad-gymnasieskola"],
    sokande: { fristaende: "ja", kommun: "ja", region: "ja", stat: "ja", ovriga: "ja" },
    sokandeNot: "Alla huvudmän för de aktuella skolformerna kan få bidraget: kommunala, statliga, fristående och övriga. Fristående förskolor och skolor får egna bidragsramar och begär ut pengarna själva. Alla ramar är minst 1 500 kr.",
    typ: "rekvisition",
    perioder: [
      { typ: "rekvisition", fran: "2026-09-01", till: "2026-10-01", text: "Begäran om utbetalning för 2026 i Skolverkets e-tjänst.", ungefar: false },
      { typ: "beslut", fran: "2026-12-01", till: "2026-12-31", text: "Beslut om utbetalning väntas i december, som året innan.", ungefar: true },
      { typ: "rekvisition", fran: "2027-09-01", till: "2027-10-01", text: "Om bidraget finns kvar 2027 väntas begäran om utbetalning ske under hösten, som tidigare år.", ungefar: true }
    ],
    belopp: "550 miljoner kr för 2026 (höjt med 50 miljoner kr i juni 2026). Ramen räknas efter huvudmannens andel av alla barn och elever i skolformerna. Ingen ram är lägre än 1 500 kr.",
    villkor: [
      "Pengarna får bara gå till tryckta skönlitterära böcker och faktaböcker (facklitteratur) för barn och elever.",
      "Läroböcker ingår inte – de har ett eget bidrag.",
      "Böckerna ska vara till barn och elever, inte till personalen, och inte till folkbiblioteket.",
      "Huvudmannen måste själv köpa litteratur för minst 20 procent av det belopp som begärs ut.",
      "Samma inköp får inte betalas med något annat statsbidrag.",
      "Böckerna ska köpas under bidragsåret (1 januari–31 december 2026)."
    ],
    hurDuGor: [
      "Kontrollera er bidragsram i Skolverkets beslutsbilaga.",
      "Köp tryckta skön- och faktaböcker till barnen och eleverna under 2026 och spara kvitton.",
      "Se till att ni själva betalar böcker för minst 20 procent av beloppet ni begär ut.",
      "Begär ut bidraget i e-tjänsten 1 september–1 oktober 2026."
    ],
    redovisning: "Ingen vanlig redovisning. Skolverket kan göra kontroller och då ska ni kunna visa vilka böcker ni köpt. Meddela Skolverket om ni inte har använt hela bidraget.",
    fallgropar: [
      "Att köpa läroböcker för pengarna – det är inte tillåtet här.",
      "Att glömma den egna insatsen på 20 procent.",
      "Att köpa böcker till personalen i stället för till barnen och eleverna.",
      "Att missa den korta perioden för begäran om utbetalning."
    ],
    nyckelord: ["böcker", "bibliotek", "skolbibliotek", "läsning", "skönlitteratur", "faktaböcker", "barnböcker", "förskolebibliotek", "boksamling", "läsfrämjande"],
    kallor: [
      { titel: "Skolverket: Statsbidrag för inköp av litteratur 2026", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-inkop-av-litteratur-2026" },
      { titel: "Skolverket: Statsbidrag för inköp av litteratur 2025", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-inkop-av-litteratur-2025" },
      { titel: "Förordning (2024:62) om statsbidrag för inköp av litteratur", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-202462-om-statsbidrag-for-inkop-av_sfs-2024-62/" }
    ],
    senastKontrollerad: "2026-09-25",
    osakerhet: "Någon sida för 2027 finns ännu inte. Perioden för 2027 och beslutsmånaden december 2026 är uppskattade utifrån 2025 (begäran 1 september–8 oktober, beslut i december)."
  },
  {
    id: "laxhjalp",
    namn: "Statsbidrag för läxhjälp",
    kortnamn: "Läxhjälp",
    myndighet: "Skolverket",
    giltighet: "aktiv",
    sammanfattning: "Pengar för att ordna frivillig läxhjälp utanför lektionstid för elever i lågstadiet (åk 1–3) och i gymnasieskolan. Skolan kan göra det själv eller tillsammans med en ideell förening.",
    syfte: "Läxhjälpen ska ge alla elever bättre möjligheter att lära sig så mycket som möjligt och bidra till att alla elever får lika förutsättningar, oavsett hjälp hemifrån.",
    omraden: ["utokad-tid", "likvardighet"],
    skolformer: ["grundskola", "gymnasieskola"],
    sokande: { fristaende: "ja", kommun: "ja", region: "nej", stat: "nej", ovriga: "nej" },
    sokandeNot: "Kommunala och fristående huvudmän för grundskolans lågstadium och gymnasieskolan kan söka. Ideella föreningar och stiftelser kan inte söka själva, men en skola kan söka extra pengar för att samarbeta med en sådan organisation.",
    typ: "ansokan",
    perioder: [
      { typ: "ansokan", fran: "2026-01-15", till: "2026-02-16", text: "Ansökan för 2026 (stängd).", ungefar: false },
      { typ: "utbetalning", fran: "2026-08-01", till: "2026-09-30", text: "Andra halvan av 2026 års bidrag betalas ut i augusti. Extra pengar efter omprövning betalas i september.", ungefar: false },
      { typ: "ansokan", fran: "2027-01-15", till: "2027-02-15", text: "Ansökan för 2027 väntas vara öppen från mitten av januari till mitten av februari, som tidigare år.", ungefar: true },
      { typ: "redovisning", fran: "2027-04-01", till: "2027-05-03", text: "Redovisning av hur 2026 års bidrag har använts.", ungefar: false }
    ],
    belopp: "Högst 1 000 kr per elev som erbjuds läxhjälp. Vid samarbete med en ideell organisation, eller vid särskilda skäl, kan man få 1 500 kr extra, alltså totalt 2 500 kr per elev. 2026 fanns ca 282 miljoner kr, varav högst 80,5 miljoner kr till gymnasieskolan.",
    villkor: [
      "Läxhjälpen ska vara frivillig och ske utanför ordinarie undervisningstid (raster, håltimmar och fritidshemmet går bra).",
      "Pengarna ska gå till nya kostnader, inte till kostnader som redan fanns.",
      "Huvudmannen ska sätta upp mål för läxhjälpen och följa upp dem.",
      "Den som hjälper eleverna behöver inte vara behörig lärare.",
      "Läxhjälp får bara ges digitalt till en mindre del av tiden.",
      "En samarbetsorganisation måste vara ideell, demokratisk, ha haft läxhjälp i minst två år och ha betalat sina skatter och avgifter.",
      "Samma kostnad får inte betalas med något annat statsbidrag."
    ],
    hurDuGor: [
      "Bestäm vilka skolenheter som ska erbjuda läxhjälp och hur många elever det gäller.",
      "Sätt upp mål för läxhjälpen.",
      "Om ni vill samarbeta med en förening: kontrollera att den uppfyller kraven och samla in dess papper i god tid.",
      "Ansök i Skolverkets e-tjänst när ansökan öppnar i januari.",
      "Håll ordning på kostnaderna uppdelat på lön, lokaler, mellanmål, material med mera.",
      "Redovisa i april–maj året efter."
    ],
    redovisning: "Redovisningen för 2026 är öppen 1 april–3 maj 2027. Ni anger resultat mot målen, hur många elever som erbjudits och deltagit, och kostnader per kostnadspost. Vid samarbete med en organisation krävs bland annat revisorsintyg och organisationens årsredovisning.",
    fallgropar: [
      "Att blanda ihop läxhjälp och lovskola – de är olika bidrag och får inte blandas.",
      "Att betala en förening en klumpsumma utan att kunna visa vad pengarna gick till.",
      "Att samarbeta med en organisation som har skulder för arbetsgivaravgifter – då kan skolan få betala tillbaka.",
      "Att glömma revisorsintyget vid samarbete med en organisation.",
      "Att använda pengar till kostnader som redan fanns."
    ],
    nyckelord: ["läxhjälp", "läxläsning", "läxor", "studiehjälp", "läxcafé", "stöd efter skolan", "lågstadiet", "gymnasiet", "ideell förening", "mellanmål"],
    kallor: [
      { titel: "Skolverket: Statsbidrag för läxhjälp 2026", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-laxhjalp-2026" },
      { titel: "Skolverket: Statsbidrag för läxhjälp 2025", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-laxhjalp-2025" },
      { titel: "Skolverket: Statsbidragskalendern", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/statsbidragskalendern" }
    ],
    senastKontrollerad: "2026-09-25",
    osakerhet: "Någon sida för läxhjälp 2027 finns ännu inte. Ansökningsperioden för 2027 är uppskattad utifrån 2025 (15 januari–21 februari) och 2026 (15 januari–16 februari)."
  },
  {
    id: "lovskola",
    namn: "Statsbidrag för lovskola",
    kortnamn: "Lovskola",
    myndighet: "Skolverket",
    giltighet: "aktiv",
    sammanfattning: "Pengar till frivillig lovskola på jullov, sportlov, påsklov, sommarlov och läslov för elever som riskerar att inte klara godkänt (E). Gäller grundskola, sameskola, specialskola och gymnasieskola.",
    syfte: "Elever som inte har nått, eller riskerar att inte nå, kunskapskraven för betyget E ska få mer tid och en extra chans att klara dem under loven.",
    omraden: ["utokad-tid"],
    skolformer: ["grundskola", "sameskola", "specialskola", "gymnasieskola"],
    sokande: { fristaende: "ja", kommun: "ja", region: "nej", stat: "ja", ovriga: "nej" },
    sokandeNot: "Kommunala, fristående och statliga huvudmän för grundskola, sameskola, specialskola och gymnasieskola kan söka. Fristående skolor söker själva. Om flera huvudmän samarbetar är det den som betalar lovskolan som söker.",
    typ: "ansokan",
    perioder: [
      { typ: "ansokan", fran: "2026-01-15", till: "2026-02-16", text: "Ansökan för alla lov 2026 (stängd). Man måste ha ansökt för att kunna begära ut pengar.", ungefar: false },
      { typ: "rekvisition", fran: "2026-08-15", till: "2026-09-15", text: "Begäran om utbetalning 1 för jullov i januari, sportlov, påsklov och sommarlov 2026 (stängd).", ungefar: false },
      { typ: "beslut", fran: "2026-10-01", till: "2026-10-31", text: "Beslut om utbetalning 1 publiceras i oktober 2026.", ungefar: false },
      { typ: "rekvisition", fran: "2026-11-01", till: "2026-11-16", text: "Begäran om utbetalning 2 för läslovet 2026.", ungefar: false },
      { typ: "beslut", fran: "2026-12-01", till: "2026-12-31", text: "Beslut om utbetalning för läslovet publiceras i december 2026.", ungefar: false },
      { typ: "ansokan", fran: "2027-01-15", till: "2027-02-15", text: "Ansökan för 2027 väntas vara öppen från mitten av januari till mitten av februari, som tidigare år.", ungefar: true }
    ],
    belopp: "300 kr per elev och dag (elevdag). Extra ersättning kan ges vid särskilda skäl. Totalt 112 miljoner kr för 2026. Räcker inte pengarna sänks beloppet per dag lika för alla.",
    villkor: [
      "Bidraget gäller bara frivillig lovskola, inte den obligatoriska lovskolan för åk 8–9.",
      "För elever i åk 8 och 9 måste den obligatoriska lovskolan (50 timmar i åk 8, 75 timmar i åk 9) vara genomförd först.",
      "Pengarna ska gå till merkostnader, till exempel lön, extra lokaler, material, mat och resor – inte hyra för lokaler ni redan har.",
      "Skolan ska föra elevlistor per lov med namn, skola, årskurs, dagar och ämnen.",
      "Samma elev kan inte få lovskola och språkstärkande insatser betalda för samma period.",
      "Lärarlegitimation är inte alltid ett krav för att undervisa i lovskolan."
    ],
    hurDuGor: [
      "Planera vilka elever som behöver lovskola och under vilka lov.",
      "Ansök i Skolverkets e-tjänst i januari–februari.",
      "Genomför först den obligatoriska lovskolan för åk 8–9.",
      "Genomför den frivilliga lovskolan och för elevlistor.",
      "Räkna ihop elevdagar (antal elever × antal dagar) och begär ut pengarna efter loven."
    ],
    redovisning: "Man redovisar genom begäran om utbetalning, där man anger antal elevdagar och antal elever per lov. Skolverket kan begära elevlistor och scheman.",
    fallgropar: [
      "Att begära pengar för obligatorisk lovskola, eller för frivillig lovskola innan den obligatoriska är klar.",
      "Att inte ha ansökt i januari–februari – då kan man inte begära ut pengar senare.",
      "Att sakna elevlistor om Skolverket kontrollerar.",
      "Att räkna med kostnader som skolan redan hade."
    ],
    nyckelord: ["lovskola", "sommarskola", "sommarlov", "jullov", "sportlov", "påsklov", "läslov", "höstlov", "betyg E", "godkänt", "gymnasiebehörighet", "prövning"],
    kallor: [
      { titel: "Skolverket: Statsbidrag för lovskola 2026", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-lovskola-2026" },
      { titel: "Skolverket: Statsbidrag för lovskola 2025", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-lovskola-2025" }
    ],
    senastKontrollerad: "2026-09-25",
    osakerhet: "Någon sida för lovskola 2027 finns ännu inte. Ansökningsperioden för 2027 är uppskattad utifrån 2025 (15 januari–22 februari) och 2026 (15 januari–16 februari)."
  },
  {
    id: "sprakstarkande-insatser-skollov",
    namn: "Statsbidrag för försöksverksamhet med språkstärkande insatser under skollov",
    kortnamn: "Svenska under skollov",
    myndighet: "Skolverket",
    giltighet: "aktiv",
    sammanfattning: "Pengar till intensivträning i svenska, med fokus på läsning, under skolloven för elever i förskoleklass och åk 1–6 som behöver stärka sin svenska. Undervisning kombineras med fritidsaktiviteter.",
    syfte: "Elever som behöver bli bättre på svenska ska få intensiv träning under loven. Det är en försöksverksamhet som prövas under några år.",
    omraden: ["nyanlanda", "utokad-tid", "lasning"],
    skolformer: ["forskoleklass", "grundskola", "anpassad-grundskola"],
    sokande: { fristaende: "ja", kommun: "ja", region: "nej", stat: "ja", ovriga: "nej" },
    sokandeNot: "Kommunala, fristående och statliga huvudmän för förskoleklass samt låg- och mellanstadiet i grundskolan och anpassade grundskolan kan söka. Fristående skolor söker själva.",
    typ: "ansokan",
    perioder: [
      { typ: "ansokan", fran: "2026-01-15", till: "2026-02-16", text: "Ansökan för loven 2026 (stängd).", ungefar: false },
      { typ: "ansokan", fran: "2027-01-15", till: "2027-02-15", text: "Om försöket fortsätter 2027 väntas ansökan vara öppen från mitten av januari till mitten av februari.", ungefar: true },
      { typ: "redovisning", fran: "2027-03-15", till: "2027-04-15", text: "Redovisning av hur 2026 års bidrag har använts (planerad).", ungefar: false }
    ],
    belopp: "1 500 kr per elev och vecka. Högre belopp kan ges vid särskilda skäl, men Skolverket är restriktivt. 2026 fanns ca 93,5 miljoner kr. Förskoleklass och åk 1–3 prioriteras om pengarna inte räcker.",
    villkor: [
      "Undervisningen ska ske varje vardag den vecka man söker för, under ett skollov (högst sex veckor på sommarlovet).",
      "Undervisningen ska ledas av lärare eller lärarstudenter med relevant kompetens.",
      "Fokus ska vara läsning, men även skriva, lyssna och tala. Fritidsaktiviteter ska också stärka svenskan.",
      "Pengarna ska gå till merkostnader, inte till lokaler eller personal ni redan betalar.",
      "Samma elev kan inte få lovskola och språkstärkande insatser betalda för samma period.",
      "Huvudmannen ska sätta upp mål och följa upp dem."
    ],
    hurDuGor: [
      "Ta reda på vilka elever som behöver stärka sin svenska och under vilka lov.",
      "Planera undervisning varje vardag under de veckor ni söker för.",
      "Ansök i Skolverkets e-tjänst i januari–februari.",
      "Genomför insatsen och för närvarolistor per lov.",
      "Redovisa kostnader och resultat året efter."
    ],
    redovisning: "Redovisningen för 2026 är planerad till 15 mars–15 april 2027. Ni redovisar merkostnader, vilka elever som deltog och hur ni följt upp målen. Har färre elever deltagit och kostnaderna blivit lägre kan pengar behöva betalas tillbaka.",
    fallgropar: [
      "Att bara planera några dagar av ett lov – det måste vara alla vardagar den veckan.",
      "Att få pengar för fler elever än som faktiskt deltar och inte kunna visa motsvarande kostnader.",
      "Att dubbelfinansiera samma elev med lovskola."
    ],
    nyckelord: ["svenska", "språkträning", "intensivsvenska", "läsning", "sommarlov", "lovaktiviteter", "nyanlända", "flerspråkiga elever", "sommarskola", "läsa"],
    kallor: [
      { titel: "Skolverket: Statsbidrag för försöksverksamhet med språkstärkande insatser under skollov 2026", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-forsoksverksamhet-med-sprakstarkande-insatser-under-skollov-2026" },
      { titel: "Skolverket: Statsbidrag för försöksverksamhet med språkstärkande insatser under skollov 2025", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-forsoksverksamhet-med-sprakstarkande-insatser-under-skollov-2025" }
    ],
    senastKontrollerad: "2026-09-25",
    osakerhet: "Det är en försöksverksamhet. Skolverket skriver att stödmaterial publiceras under 2025–2027, men någon sida för bidragsomgången 2027 finns ännu inte. Ansökan 2027 är en uppskattning utifrån 2026."
  },
  {
    id: "sprakfrukost",
    namn: "Statsbidrag för språkfrukost",
    kortnamn: "Språkfrukost",
    myndighet: "Skolverket",
    giltighet: "ny",
    sammanfattning: "Pengar till frukost med språkträning i svenska för elever i förskoleklass och åk 1–3. Bara för huvudmän med någon av de 500 skolor som har svårast socioekonomiska förutsättningar.",
    syfte: "Elever som behöver stärka sin svenska ska regelbundet få äta frukost i skolan och samtidigt träna språket.",
    omraden: ["nyanlanda", "lasning", "likvardighet"],
    skolformer: ["forskoleklass", "grundskola"],
    sokande: { fristaende: "villkor", kommun: "villkor", region: "nej", stat: "nej", ovriga: "nej" },
    sokandeNot: "Bara kommuner och fristående (enskilda) huvudmän som driver någon av de 500 skolenheter med svårast socioekonomiska förutsättningar kan söka. Skolverket har en lista över vilka huvudmän det gäller. Fristående huvudmän på listan söker själva.",
    typ: "ansokan",
    perioder: [
      { typ: "ansokan", fran: "2026-07-01", till: "2026-09-01", text: "Ansökan för höstterminen 2026 (stängd).", ungefar: false },
      { typ: "beslut", fran: "2026-10-01", till: "2026-10-31", text: "Skolverket planerar att besluta i oktober 2026. Pengarna betalas ut i samband med beslutet.", ungefar: false },
      { typ: "redovisning", fran: "2027-01-15", till: "2027-02-15", text: "Redovisning av utgifter och vilka elever som erbjudits språkfrukost.", ungefar: false }
    ],
    belopp: "Högst 7 500 kr per elev som erbjuds språkfrukost under höstterminen 2026. Totalt högst 30 miljoner kr.",
    villkor: [
      "Språkfrukosten ska riktas till elever som behöver stärka sin svenska.",
      "Den ska erbjudas regelbundet, vid flera tillfällen under terminen.",
      "Pengarna får gå till frukost och lämplig personal med goda kunskaper i svenska (behöver inte vara lärare).",
      "Bidraget får inte gå till kostnader som redan fanns."
    ],
    hurDuGor: [
      "Kontrollera att er huvudman finns med på Skolverkets lista.",
      "Räkna ut hur många elever per skolenhet som ska erbjudas språkfrukost.",
      "Ansök i Skolverkets e-tjänst när ansökan är öppen.",
      "Genomför språkfrukost regelbundet och spara underlag om kostnader och elever.",
      "Redovisa i januari–februari 2027."
    ],
    redovisning: "Redovisningen är öppen 15 januari–15 februari 2027. Ni anger vilka utgifter ni haft och vilka elever som erbjudits språkfrukost.",
    fallgropar: [
      "Att söka trots att man inte finns på listan.",
      "Att ha frukost för sällan – den ska vara regelbunden.",
      "Att räkna in personal som redan arbetar med frukost på fritids som ny kostnad."
    ],
    nyckelord: ["frukost", "språkfrukost", "skolfrukost", "svenska", "språkträning", "lågstadiet", "förskoleklass", "utsatta områden"],
    kallor: [
      { titel: "Skolverket: Statsbidrag för språkfrukost 2026", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-sprakfrukost-2026" }
    ],
    senastKontrollerad: "2026-09-25",
    osakerhet: "Bidraget gäller hittills bara höstterminen 2026. Det är inte känt om det kommer en ny omgång 2027."
  },
  {
    id: "kvalitetshojande-atgarder-forskolan",
    namn: "Statsbidrag för kvalitetshöjande åtgärder i förskolan",
    kortnamn: "Mindre barngrupper i förskolan",
    myndighet: "Skolverket",
    giltighet: "aktiv",
    sammanfattning: "Pengar till kommunerna för bättre kvalitet i förskolan: mindre barngrupper, att behålla eller anställa personal och kompetensutveckling. Kommunen kan låta pengarna gå även till fristående förskolor.",
    syfte: "Bidraget ska höja kvaliteten i förskolan, bland annat genom att barngrupperna blir lagom stora enligt Skolverkets riktmärke.",
    omraden: ["personal", "kompetens", "likvardighet"],
    skolformer: ["forskola"],
    sokande: { fristaende: "via-kommun", kommun: "ja", region: "nej", stat: "nej", ovriga: "nej" },
    sokandeNot: "Bara kommuner kan få bidraget. Fristående förskolor kan inte söka själva, men kommunen får använda pengarna även i fristående förskolor. Fristående förskolor som vill ta del av pengarna behöver alltså kontakta sin kommun.",
    typ: "rekvisition",
    perioder: [
      { typ: "utbetalning", fran: "2026-09-01", till: "2026-09-30", text: "Andra halvan av 2026 års bidrag betalas ut i september 2026.", ungefar: false },
      { typ: "rekvisition", fran: "2027-01-15", till: "2027-02-15", text: "Begäran om utbetalning för 2027. Bidragsramarna för 2027 är ännu inte publicerade.", ungefar: false },
      { typ: "redovisning", fran: "2027-03-01", till: "2027-04-01", text: "Redovisning av hur 2026 års bidrag har använts.", ungefar: false },
      { typ: "beslut", fran: "2027-03-01", till: "2027-04-30", text: "Beslut om 2027 års utbetalning fattas i mars eller april. Hälften betalas ut direkt, resten i september 2027.", ungefar: false },
      { typ: "redovisning", fran: "2028-03-01", till: "2028-04-03", text: "Redovisning av hur 2027 års bidrag har använts.", ungefar: false }
    ],
    belopp: "Anslaget för 2027 är ca 2,9 miljarder kr. För 2026 beviljades ca 3,1 miljarder kr till 290 kommuner. SCB räknar ut varje kommuns ram.",
    villkor: [
      "Pengarna får gå till att sträva mot Skolverkets riktmärke för barngruppernas storlek: 6–12 barn för 1–3-åringar och 9–15 barn för 4–5-åringar.",
      "Pengarna får också gå till att behålla eller anställa personal i förskolan.",
      "Pengarna får också gå till kompetensutveckling för förskollärare och annan personal i barngrupperna.",
      "Insatserna ska göras under bidragsåret (1 januari–31 december)."
    ],
    hurDuGor: [
      "Kommunen kontrollerar sin bidragsram när den publiceras.",
      "Kommunen bestämmer hur pengarna ska fördelas mellan de tre ändamålen, och om fristående förskolor ska få del.",
      "Kommunen begär ut pengarna i e-tjänsten 15 januari–15 februari 2027.",
      "Fristående förskolor: fråga er kommun hur den fördelar bidraget.",
      "Kommunen redovisar i mars–april året efter."
    ],
    redovisning: "Kommunen redovisar hur mycket som använts till varje ändamål och om, och hur mycket, som gått vidare till fristående förskolor. För 2026: 1 mars–1 april 2027. För 2027: 1 mars–3 april 2028.",
    fallgropar: [
      "Fristående förskolor som tror att de kan söka själva – det kan de inte.",
      "Att använda pengarna till annat än de tre tillåtna ändamålen."
    ],
    nyckelord: ["förskola", "dagis", "barngrupper", "mindre barngrupper", "barngruppsstorlek", "förskollärare", "barnskötare", "kvalitet i förskolan", "riktmärke"],
    kallor: [
      { titel: "Skolverket: Statsbidrag för kvalitetshöjande åtgärder i förskolan 2027", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-kvalitetshojande-atgarder-i-forskolan-2027" },
      { titel: "Skolverket: Statsbidrag för kvalitetshöjande åtgärder i förskolan 2026", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-kvalitetshojande-atgarder-i-forskolan-2026" }
    ],
    senastKontrollerad: "2026-09-25",
    osakerhet: ""
  },
  {
    id: "maxtaxa",
    namn: "Statsbidrag för maxtaxa",
    kortnamn: "Maxtaxa i förskola och fritids",
    myndighet: "Skolverket",
    giltighet: "aktiv",
    sammanfattning: "Pengar som kommunerna får automatiskt för att de har ett tak för avgiften (maxtaxa) i förskola, fritidshem och pedagogisk omsorg. Från 1 juli 2026 sänktes avgifterna för hushållen.",
    syfte: "Bidraget ersätter kommunerna för att föräldrarnas avgifter hålls låga genom maxtaxan.",
    omraden: ["ovrigt"],
    skolformer: ["forskola", "fritidshem"],
    sokande: { fristaende: "nej", kommun: "ja", region: "nej", stat: "nej", ovriga: "nej" },
    sokandeNot: "Bidraget går inte att söka. Det betalas ut automatiskt till kommuner som tillämpar maxtaxa. Fristående förskolor och fritidshem får inga pengar direkt från Skolverket genom detta bidrag.",
    typ: "automatisk",
    perioder: [
      { typ: "utbetalning", fran: null, till: "2026-09-30", text: "Utbetalning 2 för höstterminen 2026 (klar senast 30 september).", ungefar: false },
      { typ: "beslut", fran: "2027-01-01", till: "2027-01-31", text: "Skolverket fastställer kommunernas bidragsramar för 2027 i januari, som varje år.", ungefar: true },
      { typ: "utbetalning", fran: "2027-03-01", till: "2027-03-31", text: "Utbetalning för vårterminen 2027 väntas i mars, som 2026.", ungefar: true }
    ],
    belopp: "Varje kommun får en bidragsram som SCB räknar fram. Anslaget höjdes med 1 miljard kr för 2026 så att avgifterna kunde sänkas från hösten 2026.",
    villkor: [
      "Kommunen måste följa reglerna för maxtaxa. Annars kan Skolverket hålla inne pengar.",
      "Från 1 juli 2026 är högsta avgift i förskolan 1 547 kr/månad för första barnet, 1 031 kr för andra och 516 kr för tredje.",
      "Från 1 juli 2026 är högsta avgift i fritidshemmet 1 031 kr/månad för första barnet och 516 kr för andra och tredje.",
      "Från fjärde barnet betalar hushållet ingen avgift. Hushåll med inkomst under 10 001 kr/månad betalar ingen avgift."
    ],
    hurDuGor: [
      "Som kommun behöver ni inte söka – pengarna betalas ut automatiskt.",
      "Se till att kommunens avgifter följer maxtaxans regler och de nya nivåerna från 1 juli 2026.",
      "Som förälder: kontakta din kommun om du har frågor om din avgift."
    ],
    redovisning: "Ingen särskild redovisning beskrivs. Skolverket kan minska bidraget om en kommun bryter mot villkoren.",
    fallgropar: [
      "Att tro att en fristående förskola kan söka bidraget – det går bara till kommuner.",
      "Att inte uppdatera avgifterna efter ändringen 1 juli 2026."
    ],
    nyckelord: ["maxtaxa", "förskoleavgift", "dagisavgift", "fritidsavgift", "barnomsorgsavgift", "avgift", "fritids", "pedagogisk omsorg", "dagmamma"],
    kallor: [
      { titel: "Skolverket: Statsbidrag för maxtaxa 2026", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-maxtaxa-2026" }
    ],
    senastKontrollerad: "2026-09-25",
    osakerhet: "Datum för 2027 är uppskattade utifrån hur det gick till 2026 (ramar i januari, utbetalningar i mars och september)."
  },
  {
    id: "omsorg-kvallar-natter-helger",
    namn: "Statsbidrag för omsorg på kvällar, nätter och helger",
    kortnamn: "Barnomsorg på obekväm tid",
    myndighet: "Skolverket",
    giltighet: "aktiv",
    sammanfattning: "Pengar till kommuner som erbjuder barnomsorg på kvällar, nätter och helger när förskola och fritidshem är stängda. Gäller barn från 1 år till och med vårterminen det år de fyller 13.",
    syfte: "Föräldrar som arbetar på obekväma tider ska kunna få omsorg för sina barn även när förskolan och fritidshemmet har stängt.",
    omraden: ["ovrigt"],
    skolformer: ["forskola", "fritidshem"],
    sokande: { fristaende: "nej", kommun: "ja", region: "nej", stat: "nej", ovriga: "nej" },
    sokandeNot: "Bara kommuner kan söka, både för verksamhet de driver själva och för verksamhet på entreprenad. Kommunen är alltid ansvarig huvudman. Fristående huvudmän kan inte söka.",
    typ: "ansokan",
    perioder: [
      { typ: "ansokan", fran: "2026-01-15", till: "2026-02-16", text: "Ansökan för 2026 (stängd).", ungefar: false },
      { typ: "rekvisition", fran: "2026-10-01", till: "2026-11-02", text: "Begäran om utbetalning 2 för perioden 1 juli–31 december 2026.", ungefar: false },
      { typ: "ansokan", fran: "2027-01-15", till: "2027-02-15", text: "Ansökan för 2027 väntas vara öppen från mitten av januari till mitten av februari.", ungefar: true }
    ],
    belopp: "Kommunerna som har ansökt delar på de pengar som finns. För 2026 beviljades ca 79 miljoner kr till 161 huvudmän.",
    villkor: [
      "Kommunen måste erbjuda plats i minst 30 timmar per barn och månad.",
      "Omsorgen gäller barn från 1 år till och med vårterminen det år barnet fyller 13.",
      "Pengarna får gå till både befintlig och ny verksamhet."
    ],
    hurDuGor: [
      "Ansök i Skolverkets e-tjänst i januari–februari.",
      "Räkna varje månad hur många barn som erbjudits plats i minst 30 timmar.",
      "Begär ut pengarna två gånger per år och redovisa samtidigt kostnaderna för perioden."
    ],
    redovisning: "Kostnaderna redovisas i samband med varje begäran om utbetalning, tillsammans med antal erbjudna platser per månad.",
    fallgropar: [
      "Att erbjuda färre än 30 timmar per barn och månad – då räknas platsen inte."
    ],
    nyckelord: ["nattis", "nattomsorg", "kvällsomsorg", "helgomsorg", "obekväm arbetstid", "barnomsorg", "skiftarbete", "kvällsdagis"],
    kallor: [
      { titel: "Skolverket: Statsbidrag för omsorg på kvällar, nätter och helger 2026", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-omsorg-pa-kvallar-natter-och-helger-2026" }
    ],
    senastKontrollerad: "2026-09-25",
    osakerhet: "Omsorg på obekväm tid är inte en egen skolform; den har kopplats till förskola och fritidshem här för att vara lätt att hitta. Ansökan 2027 är en uppskattning utifrån 2026."
  },
  {
    id: "akutskolor",
    namn: "Statsbidrag för akutskolor",
    kortnamn: "Akutskolor",
    myndighet: "Skolverket",
    giltighet: "aktiv",
    sammanfattning: "Pengar till halva personalkostnaden i akutskolor i grundskolan. En akutskola tar tillfälligt (högst fyra veckor) emot elever som flyttats från sin skola för att andra elever ska få trygghet och studiero.",
    syfte: "Bidraget ska göra det lättare att starta och driva akutskolor, så att skolor kan agera snabbt när en elevs beteende hotar andras trygghet och studiero.",
    omraden: ["halsa-trygghet", "personal"],
    skolformer: ["grundskola"],
    sokande: { fristaende: "ja", kommun: "ja", region: "nej", stat: "nej", ovriga: "nej" },
    sokandeNot: "Kommunala och fristående huvudmän för grundskolan kan söka. Om pengarna inte räcker ska Skolverket ta hänsyn både till geografisk spridning och till att både offentliga och fristående huvudmän får del av bidraget.",
    typ: "ansokan",
    perioder: [
      { typ: "ansokan", fran: "2026-01-15", till: "2026-02-16", text: "Ansökan för 2026 (stängd). Beslut fattades i juni 2026.", ungefar: false },
      { typ: "redovisning", fran: "2027-01-15", till: "2027-02-15", text: "Redovisning av hur 2026 års bidrag har använts.", ungefar: false },
      { typ: "ansokan", fran: "2027-01-15", till: "2027-02-15", text: "Ansökan för 2027 väntas vara öppen från mitten av januari till mitten av februari.", ungefar: true }
    ],
    belopp: "Hälften av personalkostnaden (lön och sociala avgifter). Totalt 200 miljoner kr för 2026. Om pengarna inte räcker prioriteras att behålla befintlig personal, sedan nya akutskolor, sedan förstärkning.",
    villkor: [
      "Akutskolan ska vara knuten till en skolenhet och kunna ta emot minst två elever samtidigt.",
      "Den ska ha minst två årsarbetskrafter, varav minst en legitimerad lärare.",
      "Personalen ska ha lärarlegitimation eller relevant utbildning inom psykosocialt arbete.",
      "Anställningen eller uppdraget ska vara minst sex månader.",
      "Placering i akutskola är en tillfällig disciplinär åtgärd, inte särskilt stöd.",
      "Huvudmannen får inte ha skatteskulder hos Kronofogden, vara i konkurs eller ha obetalda återkrav hos Skolverket."
    ],
    hurDuGor: [
      "Läs Skolverkets stöd om att starta och driva akutskola.",
      "Planera bemanning: minst två heltider, minst en legitimerad lärare.",
      "Gör en plan för vad personalen gör när inga elever är placerade.",
      "Ansök i Skolverkets e-tjänst i januari–februari.",
      "Spara uppgifter om personal, placeringar och kostnader inför redovisningen."
    ],
    redovisning: "Redovisningen för 2026 är öppen 15 januari–15 februari 2027. Ni lämnar bland annat uppgifter om kostnader, antal akutskolor, antal placeringar och varje person som arbetat där (personnummer, tjänstgöringsgrad och datum).",
    fallgropar: [
      "Att använda akutskolan som särskild undervisningsgrupp eller stödinsats – det räknas inte.",
      "Att söka bidrag för merkostnader när dyr personal flyttas om till akutskolan.",
      "Att sakna en plan för personalens arbete under tomma perioder."
    ],
    nyckelord: ["akutskola", "trygghet", "studiero", "stökiga elever", "omplacering", "disciplin", "ordning i skolan", "våld i skolan"],
    kallor: [
      { titel: "Skolverket: Statsbidrag för akutskolor 2026", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-akutskolor-2026" },
      { titel: "Skolverket: Statsbidragskalendern", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/statsbidragskalendern" }
    ],
    senastKontrollerad: "2026-09-25",
    osakerhet: "Skolverkets söklista märker bidraget även med anpassade skolformer, men bidragets egen sida nämner bara grundskolan. Någon sida för 2027 finns ännu inte; ansökan 2027 är uppskattad utifrån 2026."
  },
  {
    id: "skolsociala-team",
    namn: "Statsbidrag för personalkostnader för skolsociala team",
    kortnamn: "Skolsociala team",
    myndighet: "Skolverket",
    giltighet: "aktiv",
    sammanfattning: "Pengar till halva kostnaden för skolpersonal i skolsociala team – grupper där skolan och socialtjänsten arbetar ihop för trygghet, studiero och ökad närvaro i grundskolan och gymnasiet.",
    syfte: "Skola och socialtjänst ska tidigt kunna fånga upp elever som far illa eller är mycket frånvarande och arbeta förebyggande.",
    omraden: ["stod", "halsa-trygghet"],
    skolformer: ["grundskola", "gymnasieskola"],
    sokande: { fristaende: "ja", kommun: "ja", region: "nej", stat: "nej", ovriga: "nej" },
    sokandeNot: "Kommunala och fristående huvudmän för grundskola och gymnasieskola kan söka för sin skolpersonal. Kommunen får dessutom pengar från Socialstyrelsen för socialtjänstens personal i teamet. En fristående skola behöver alltså samarbeta med kommunens socialtjänst.",
    typ: "ansokan",
    perioder: [
      { typ: "ansokan", fran: "2026-01-15", till: "2026-02-16", text: "Ansökan för 2026 (stängd). Beslut fattades i april 2026.", ungefar: false },
      { typ: "redovisning", fran: "2027-01-15", till: "2027-02-15", text: "Redovisning av hur 2026 års bidrag har använts.", ungefar: false },
      { typ: "ansokan", fran: "2027-01-15", till: "2027-02-15", text: "Ansökan för 2027 väntas vara öppen från mitten av januari till mitten av februari.", ungefar: true }
    ],
    belopp: "Hälften av kostnaden för skolpersonalen i teamet. Totalt 200 miljoner kr för 2026. Grundskolan prioriteras före gymnasieskolan om pengarna inte räcker.",
    villkor: [
      "Teamet ska ha minst två årsarbetskrafter: minst en från skolan och minst en från socialtjänsten.",
      "Skolpersonalen ska ha relevant utbildning inom psykosocialt arbete, till exempel socionom eller behandlingspedagog.",
      "Socialtjänstens personal ska ha socionomexamen eller annan relevant högskoleexamen.",
      "Anställningen eller uppdraget ska vara minst sex månader."
    ],
    hurDuGor: [
      "Kom överens med kommunens socialtjänst om att bilda ett team.",
      "Kontrollera att personalen har rätt utbildning.",
      "Ansök i Skolverkets e-tjänst i januari–februari.",
      "Kommunen begär sedan ut pengar för socialtjänstens personal från Socialstyrelsen.",
      "Redovisa året efter, inklusive eventuella personalbyten."
    ],
    redovisning: "Redovisningen för 2026 är öppen 15 januari–15 februari 2027. Skolverket har ännu inte beskrivit exakt vilka uppgifter som ska lämnas.",
    fallgropar: [
      "Att teamet inte når upp till en hel årsarbetskraft från både skola och socialtjänst.",
      "Att personal saknar den utbildning som krävs.",
      "Att glömma att ersättare vid personalbyten också måste uppfylla kraven."
    ],
    nyckelord: ["skolsocialt team", "socialtjänst", "kurator", "socionom", "frånvaro", "hemmasittare", "närvaro", "trygghet", "elevhälsa", "barn som far illa"],
    kallor: [
      { titel: "Skolverket: Statsbidrag för personalkostnader för skolsociala team 2026", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-personalkostnader-for-skolsociala-team-2026" }
    ],
    senastKontrollerad: "2026-09-25",
    osakerhet: "Någon sida för 2027 finns ännu inte; ansökan 2027 är uppskattad utifrån 2026. Socialstyrelsens del av bidraget har inte kontrollerats i detalj."
  },
  {
    id: "sakerhetshojande-atgarder",
    namn: "Statsbidrag för säkerhetshöjande åtgärder",
    kortnamn: "Säkerhet i skolan",
    myndighet: "Skolverket",
    giltighet: "aktiv",
    sammanfattning: "Pengar till åtgärder som gör förskolor och skolor säkrare och förebygger brott, till exempel passersystem, lås, larm, staket, belysning och kameror. Alla huvudmän får en bidragsram.",
    syfte: "Bidraget ska stötta huvudmännen i säkerhetsarbetet och förebygga brott i och runt förskolor och skolor.",
    omraden: ["halsa-trygghet"],
    skolformer: ["forskola", "forskoleklass", "grundskola", "anpassad-grundskola", "specialskola", "sameskola", "fritidshem", "gymnasieskola", "anpassad-gymnasieskola", "komvux"],
    sokande: { fristaende: "ja", kommun: "ja", region: "ja", stat: "ja", ovriga: "ja" },
    sokandeNot: "Kommunala, statliga, fristående och övriga huvudmän kan få bidraget. Fristående förskolor och skolor får egna bidragsramar och begär ut pengarna själva. Ingen ram är lägre än 30 000 kr.",
    typ: "rekvisition",
    perioder: [
      { typ: "rekvisition", fran: "2026-09-15", till: "2026-11-02", text: "Begäran om utbetalning för 2026 i Skolverkets e-tjänst.", ungefar: false },
      { typ: "beslut", fran: "2026-12-01", till: "2026-12-31", text: "Beslut om utbetalning väntas i december, som året innan.", ungefar: true }
    ],
    belopp: "400 miljoner kr för 2026 (300 miljoner kr plus 100 miljoner kr som tillkom i september 2026). Ramen räknas efter huvudmannens andel av alla barn och elever. Ingen ram är lägre än 30 000 kr.",
    villkor: [
      "Pengarna ska gå till åtgärder som höjer säkerheten och förebygger brott, till exempel staket, belysning, lås, larm, passersystem, kameror, väktare eller personalutbildning.",
      "Åtgärderna ska både genomföras och betalas under 2026.",
      "Huvudmannen ska ta in flera offerter eller på annat sätt se till att det finns konkurrens mellan leverantörer.",
      "Den som utför arbetet ska ha F-skatt.",
      "Samma kostnad får inte betalas med något annat statsbidrag."
    ],
    hurDuGor: [
      "Kontrollera er bidragsram i Skolverkets beslutsbilaga (nytt beslut i september 2026).",
      "Välj åtgärder som höjer säkerheten och kan motiveras som brottsförebyggande.",
      "Ta in offerter och anlita företag med F-skatt.",
      "Genomför och betala åtgärderna under 2026.",
      "Begär ut bidraget i e-tjänsten 15 september–2 november 2026 och ange åtgärd, skolform och belopp."
    ],
    redovisning: "I begäran om utbetalning anger ni vilka åtgärder ni gjort eller ska göra, i vilken skolform och till vilket belopp. Skolverket kan göra kontroller i efterhand.",
    fallgropar: [
      "Att inte ta in flera offerter.",
      "Att åtgärden blir klar eller betalas först 2027.",
      "Att inte kunna förklara hur åtgärden förebygger brott."
    ],
    nyckelord: ["säkerhet", "skalskydd", "passersystem", "lås", "larm", "kameror", "kamerabevakning", "staket", "väktare", "inrymning", "brottsförebyggande", "trygghet"],
    kallor: [
      { titel: "Skolverket: Statsbidrag för säkerhetshöjande åtgärder 2026", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-sakerhetshojande-atgarder-2026" },
      { titel: "Skolverket: Statsbidrag för säkerhetshöjande åtgärder 2025", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-sakerhetshojande-atgarder-2025" }
    ],
    senastKontrollerad: "2026-09-25",
    osakerhet: "Beslutsmånaden december 2026 är uppskattad utifrån 2025. Det är inte känt om bidraget fortsätter 2027. Skolverket skriver 'övriga huvudmän'; vi har tolkat det som att även regioner ingår."
  },
  {
    id: "fjarrundervisning-minoritetssprak",
    namn: "Statsbidrag för fjärrundervisning i nationella minoritetsspråk",
    kortnamn: "Modersmål i minoritetsspråk på distans",
    myndighet: "Skolverket",
    giltighet: "aktiv",
    sammanfattning: "Ersättning för extra kostnader när en skola ger modersmålsundervisning i finska, jiddisch, meänkieli, romani chib eller samiska som fjärrundervisning, alltså via skärm med lärare på annan ort.",
    syfte: "Elever som tillhör de nationella minoriteterna har stark rätt till modersmålsundervisning. Bidraget gör det lättare att erbjuda den även när det saknas lärare på plats.",
    omraden: ["nyanlanda", "digitalt"],
    skolformer: ["grundskola", "anpassad-grundskola", "specialskola", "sameskola", "gymnasieskola", "anpassad-gymnasieskola"],
    sokande: { fristaende: "ja", kommun: "ja", region: "nej", stat: "ja", ovriga: "nej" },
    sokandeNot: "Kommunala, fristående och statliga huvudmän kan söka. En fristående skola kan söka själv, eller få undervisningen via kommunen – då är det den som betalar undervisningen som söker. Förskoleklass ingår inte.",
    typ: "ansokan",
    perioder: [
      { typ: "ansokan", fran: "2026-09-15", till: "2026-10-15", text: "Ansökan för läsåret 2026/27 (hösten 2026 och våren 2027).", ungefar: false },
      { typ: "redovisning", fran: "2027-08-15", till: "2027-09-15", text: "Redovisning för läsåret 2026/27.", ungefar: false }
    ],
    belopp: "12 miljoner kr för läsåret 2026/27. Högst 28 000 kr per år för en elev som läser ensam och högst 30 800 kr per år för en grupp.",
    villkor: [
      "Det gäller modersmålsundervisning i de nationella minoritetsspråken, inte språkval.",
      "Fjärrundervisning får bara användas om skolan inte lyckats anställa lärare på plats eller har mycket få elever.",
      "Beslutet om fjärrundervisning ska vara anmält till Skolinspektionen.",
      "En handledare måste finnas fysiskt på plats hos eleverna.",
      "Pengarna får bara gå till lön för läraren och handledaren."
    ],
    hurDuGor: [
      "Anmäl beslutet om fjärrundervisning till Skolinspektionen.",
      "Ta fram antal undervisningsgrupper och elever som läser individuellt.",
      "Ansök i Skolverkets e-tjänst 15 september–15 oktober 2026.",
      "Redovisa i augusti–september 2027."
    ],
    redovisning: "Redovisningen är öppen 15 augusti–15 september 2027. Ni anger hur mycket av bidraget som använts och intygar att det gått till tillåtna kostnader.",
    fallgropar: [
      "Att glömma anmälan till Skolinspektionen.",
      "Att handledaren stöttar på distans – då ges inget bidrag för handledaren.",
      "Att söka för förskoleklass eller för språkval."
    ],
    nyckelord: ["modersmål", "minoritetsspråk", "finska", "samiska", "meänkieli", "romani", "jiddisch", "fjärrundervisning", "distansundervisning", "nationella minoriteter"],
    kallor: [
      { titel: "Skolverket: Statsbidrag för fjärrundervisning i nationella minoritetsspråk 2026/27", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-fjarrundervisning-i-nationella-minoritetssprak-2026-27" }
    ],
    senastKontrollerad: "2026-09-25",
    osakerhet: ""
  },
  {
    id: "riksrekryterande-spetsutbildningar",
    namn: "Statsbidrag för riksrekryterande spetsutbildningar i grund- och gymnasieskolan",
    kortnamn: "Spetsutbildningar",
    myndighet: "Skolverket",
    giltighet: "aktiv",
    sammanfattning: "Pengar per elev till skolor som har tillstånd att driva spetsutbildningar för särskilt intresserade elever i högstadiet eller gymnasiet, till exempel i matematik, naturvetenskap eller humaniora.",
    syfte: "Bidraget ska hjälpa huvudmän att starta spetsutbildningar och höja kvaliteten i dem.",
    omraden: ["ovrigt"],
    skolformer: ["grundskola", "gymnasieskola"],
    sokande: { fristaende: "villkor", kommun: "villkor", region: "nej", stat: "nej", ovriga: "nej" },
    sokandeNot: "Kommunala och fristående huvudmän kan söka, men bara om de har Skolverkets tillstånd att driva en riksrekryterande spetsutbildning. Fristående skolor med tillstånd söker på samma villkor som kommunala.",
    typ: "ansokan",
    perioder: [
      { typ: "ansokan", fran: "2026-10-01", till: "2026-11-02", text: "Ansökan för läsåret 2026/27. Ange elevantal per årskurs den 15 oktober 2026.", ungefar: false },
      { typ: "redovisning", fran: "2027-08-15", till: "2027-09-15", text: "Redovisning för läsåret 2026/27.", ungefar: false }
    ],
    belopp: "Totalt 45 miljoner kr för 2026/27. Pengarna fördelas per elev så långt de räcker.",
    villkor: [
      "Huvudmannen måste ha tillstånd från Skolverket för spetsutbildningen.",
      "Undervisningen ska ges av legitimerade och behöriga lärare som är anställda av huvudmannen.",
      "Pengarna ska gå till start eller kvalitetsutveckling, till exempel läromedel, utrustning, kompetensutveckling eller studiebesök.",
      "Pengarna ska användas under bidragsåret (läsåret 2026/27)."
    ],
    hurDuGor: [
      "Kontrollera att er utbildning finns med i Skolverkets lista över godkända spetsutbildningar.",
      "Ta fram skolenhetskod och antal elever per årskurs den 15 oktober 2026.",
      "Ansök i Skolverkets e-tjänst 1 oktober–2 november 2026.",
      "Redovisa i augusti–september 2027 hur mycket som använts per utbildning."
    ],
    redovisning: "Redovisningen är öppen 15 augusti–15 september 2027. Ni anger hur mycket som använts per spetsutbildning och intygar att villkoren är uppfyllda.",
    fallgropar: [
      "Att söka utan tillstånd för spetsutbildningen.",
      "Att tillståndet går ut – det behöver förnyas i tid."
    ],
    nyckelord: ["spetsutbildning", "spetsklass", "särskilt begåvade elever", "matematik", "naturvetenskap", "högstadiet", "riksrekryterande", "talang"],
    kallor: [
      { titel: "Skolverket: Statsbidrag för riksrekryterande spetsutbildningar i grund- och gymnasieskolan 2026/27", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-riksrekryterande-spetsutbildningar-i-grund--och-gymnasieskolan-2026-27" }
    ],
    senastKontrollerad: "2026-09-25",
    osakerhet: ""
  },
  {
    id: "judiska-studier",
    namn: "Statsbidrag för judiska studier",
    kortnamn: "Judiska studier i högstadiet",
    myndighet: "Skolverket",
    giltighet: "aktiv",
    sammanfattning: "Pengar till extra kostnader för skolor som har Skolverkets tillstånd att ge särskild undervisning i judiska studier i årskurs 7–9.",
    syfte: "Bidraget ska täcka de merkostnader som den särskilda utbildningen i judiska studier innebär.",
    omraden: ["ovrigt"],
    skolformer: ["grundskola"],
    sokande: { fristaende: "villkor", kommun: "villkor", region: "nej", stat: "villkor", ovriga: "villkor" },
    sokandeNot: "Kommunala, fristående, statliga och övriga huvudmän kan söka, men bara om de har Skolverkets tillstånd att anordna särskild utbildning med judiska studier i åk 7–9. Tillståndet måste sökas senast 15 december läsåret innan.",
    typ: "ansokan",
    perioder: [
      { typ: "ansokan", fran: "2026-10-01", till: "2026-11-02", text: "Ansökan för läsåret 2026/27. Utgå från antalet elever den 15 oktober 2026.", ungefar: false },
      { typ: "beslut", fran: null, till: "2026-12-31", text: "Beslut senast i december 2026.", ungefar: false },
      { typ: "utbetalning", fran: null, till: null, text: "Utbetalning senast i december 2026 och i maj 2027.", ungefar: false }
    ],
    belopp: "3 miljoner kr för läsåret 2026/27 (normalt 2 miljoner kr per läsår). Fördelas som ett belopp per elev utifrån godkända merkostnader.",
    villkor: [
      "Huvudmannen måste ha tillstånd för särskild utbildning med judiska studier.",
      "Pengarna ska gå till merkostnader för den särskilda utbildningen.",
      "Samma kostnad får inte betalas med något annat statsbidrag."
    ],
    hurDuGor: [
      "Se till att ni har tillstånd från Skolverket.",
      "Räkna antalet elever i utbildningen den 15 oktober 2026.",
      "Räkna ut och motivera merkostnaden.",
      "Ansök i Skolverkets e-tjänst 1 oktober–2 november 2026."
    ],
    redovisning: "Sidan beskriver ingen särskild redovisning. Skolverket kan göra kontroller.",
    fallgropar: [
      "Att söka bidrag för en utbildning som ännu inte har tillstånd."
    ],
    nyckelord: ["judiska studier", "hebreiska", "judisk skola", "högstadiet", "religion"],
    kallor: [
      { titel: "Skolverket: Statsbidrag för judiska studier 2026/27", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-judiska-studier-2026-27" }
    ],
    senastKontrollerad: "2026-09-25",
    osakerhet: ""
  },
  {
    id: "elevers-kontakt-med-arbetslivet",
    namn: "Statsbidrag för elevers kontakt med arbetslivet",
    kortnamn: "Sao-jobb och arbetslivskontakt",
    myndighet: "Skolverket",
    giltighet: "ny",
    sammanfattning: "Pengar till högstadieskolor i socioekonomiskt utsatta områden för att eleverna ska få kontakt med arbetslivet, till exempel genom sao-jobb: ett betalt extrajobb två timmar i veckan under ett år.",
    syfte: "Elever i skolor med socioekonomiska utmaningar ska få kontakt med arbetslivet och bli mer motiverade i skolan.",
    omraden: ["likvardighet"],
    skolformer: ["grundskola"],
    sokande: { fristaende: "villkor", kommun: "villkor", region: "nej", stat: "nej", ovriga: "nej" },
    sokandeNot: "Bara kommunala och fristående huvudmän som finns på Skolverkets lista kan söka. Det är huvudmän med minst en högstadieskola (minst 50 elever) med särskilt svåra socioekonomiska förutsättningar, som ingår i 'bidragspott 2' för karriärtjänster 2026/27.",
    typ: "rekvisition",
    perioder: [
      { typ: "rekvisition", fran: "2026-08-15", till: "2026-08-31", text: "Begäran om utbetalning för 2026 (stängd). Pengarna betalas ut efter beslut.", ungefar: false }
    ],
    belopp: "30 miljoner kr för 2026, fördelade efter antal elever. En huvudman kan få högst ca 3,7 miljoner kr (12,3 procent av anslaget).",
    villkor: [
      "Pengarna ska gå till insatser som ger elever i åk 7–9 kontakt med arbetslivet, till exempel sao-jobb.",
      "Bara skolenheter på Skolverkets lista omfattas.",
      "Kostnaderna ska uppstå under 2026."
    ],
    hurDuGor: [
      "Kontrollera att er huvudman och skola finns på Skolverkets lista.",
      "Räkna antalet elever i åk 7–9 som får sao-jobb eller annan arbetslivsinsats 2026.",
      "Begär ut pengarna i e-tjänsten under perioden."
    ],
    redovisning: "Sidan beskriver ingen särskild redovisning. Skolverket kan göra kontroller.",
    fallgropar: [
      "Att missa den korta perioden för begäran om utbetalning (två veckor i augusti)."
    ],
    nyckelord: ["sao-jobb", "prao", "extrajobb", "arbetsliv", "praktik", "högstadiet", "sommarjobb", "utsatta områden", "studiemotivation"],
    kallor: [
      { titel: "Skolverket: Statsbidrag för elevers kontakt med arbetslivet 2026", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-elevers-kontakt-med-arbetslivet-2026" }
    ],
    senastKontrollerad: "2026-09-25",
    osakerhet: "Bidraget bygger på ett ändrat regleringsbrev för 2026. Det är inte känt om det kommer en ny omgång 2027."
  },
  {
    id: "papperslosa-barn",
    namn: "Statsbidrag för papperslösa barn",
    kortnamn: "Skolgång för papperslösa barn",
    myndighet: "Skolverket",
    giltighet: "aktiv",
    sammanfattning: "Pengar till kommuner som ger utbildning till barn som vistas i Sverige utan tillstånd, till exempel efter avslag på asylansökan. Barnen har i stort sett samma rätt till skola som andra barn.",
    syfte: "Bidraget ska göra det lättare för kommunerna att ge papperslösa barn den utbildning de har rätt till.",
    omraden: ["nyanlanda"],
    skolformer: ["forskoleklass", "grundskola", "anpassad-grundskola", "specialskola", "sameskola", "gymnasieskola", "anpassad-gymnasieskola"],
    sokande: { fristaende: "nej", kommun: "ja", region: "nej", stat: "nej", ovriga: "nej" },
    sokandeNot: "Bara kommuner som har papperslösa barn i sitt område och kostnader för deras utbildning kan söka. Fristående huvudmän kan inte söka bidraget.",
    typ: "ansokan",
    perioder: [
      { typ: "ansokan", fran: "2026-08-15", till: "2026-09-15", text: "Ansökan 2 för 2026 (stängd).", ungefar: false },
      { typ: "ansokan", fran: "2027-01-15", till: "2027-02-21", text: "Ansökan 1 för 2027 väntas öppna i mitten av januari, som 2026 (15 januari–21 februari).", ungefar: true },
      { typ: "redovisning", fran: "2027-04-01", till: "2027-05-04", text: "Redovisning av 2026 års bidrag. Beslut kommer i maj eller juni 2027.", ungefar: false }
    ],
    belopp: "50 miljoner kr per år. Fördelas mellan de kommuner som söker, efter hur många asylsökande barn 6–17 år kommunen haft i snitt de tre senaste åren.",
    villkor: [
      "Bidraget gäller barn som fått avslag på asylansökan men stannat, eller som stannat efter att visumet gått ut. Asylsökande som väntar på beslut räknas inte.",
      "Barn som omfattas av EU:s massflyktsdirektiv (till exempel från Ukraina) omfattas inte.",
      "Pengarna får gå till undervisning, lärverktyg, elevhälsa, administration, moms, lokaler och skolskjuts."
    ],
    hurDuGor: [
      "Kommunen ser till att rätt personer har behörighet i Skolverkets e-tjänst.",
      "Kommunen ansöker vid ansökningstillfälle 1 (början av året) och 2 (sensommaren).",
      "Kommunen redovisar i april–maj året efter."
    ],
    redovisning: "Redovisningen för 2026 är öppen 1 april–4 maj 2027 i e-tjänsten.",
    fallgropar: [
      "Att söka för barn som fortfarande väntar på asylbeslut – de räknas inte som papperslösa."
    ],
    nyckelord: ["papperslösa", "gömda barn", "utan uppehållstillstånd", "avvisade", "asyl", "skolgång", "rätt till skola"],
    kallor: [
      { titel: "Skolverket: Statsbidrag för papperslösa barn 2026", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-papperslosa-barn-2026" }
    ],
    senastKontrollerad: "2026-09-25",
    osakerhet: "Ansökan 1 för 2027 är uppskattad utifrån 2026. Skolverkets sida säger inte hur det fungerar när ett papperslöst barn går i en fristående skola."
  },
  {
    id: "barn-ej-folkbokforda",
    namn: "Statsbidrag för barn som inte är folkbokförda i Sverige",
    kortnamn: "Barn som inte är folkbokförda",
    myndighet: "Skolverket",
    giltighet: "aktiv",
    sammanfattning: "Pengar till hemkommunen för utbildning av vissa barn som inte är folkbokförda i Sverige men har rätt till skola här, till exempel barn till EU-medborgare som arbetar här eller till diplomater.",
    syfte: "Bidraget täcker kommunens kostnad för utbildning av barn som har rätt till svensk skola fast de inte är folkbokförda här.",
    omraden: ["nyanlanda"],
    skolformer: ["forskola", "forskoleklass", "fritidshem", "grundskola", "anpassad-grundskola", "specialskola", "sameskola", "gymnasieskola", "anpassad-gymnasieskola"],
    sokande: { fristaende: "via-kommun", kommun: "ja", region: "nej", stat: "nej", ovriga: "nej" },
    sokandeNot: "Bara hemkommunen, alltså den kommun där barnet bor, kan söka. Det gäller även när barnet går i en fristående skola eller i en annan kommun. Kommunalförbund kan inte söka.",
    typ: "ansokan",
    perioder: [
      { typ: "ansokan", fran: "2026-09-15", till: "2026-10-15", text: "Ansökan 2 för höstterminen 2026. Beslut inom ca sex veckor, utbetalning i december.", ungefar: false },
      { typ: "ansokan", fran: "2027-03-15", till: "2027-04-15", text: "Ansökan 1 för vårterminen 2027. Sista dag 15 april gäller varje år; öppningsdagen är uppskattad.", ungefar: true }
    ],
    belopp: "Bidraget ska täcka barnets utbildningskostnad och motsvara kostnaden för andra barn i samma utbildning.",
    villkor: [
      "Kommunen måste först ha beslutat att barnet har rätt till utbildning och tagit emot det i skolan.",
      "För barn från EU/EES eller Schweiz ska en familjemedlem till exempel arbeta, söka arbete, studera eller ha egen försörjning och sjukförsäkring i Sverige.",
      "För barn från andra länder ska en familjemedlem tillhöra en ambassad eller en internationell organisation i Sverige.",
      "Sena ansökningar avvisas."
    ],
    hurDuGor: [
      "Kommunen utreder om barnet har rätt till utbildning och fattar beslut.",
      "Kommunen ansöker i Skolverkets e-tjänst senast 15 april (vårterminen) och 15 oktober (höstterminen).",
      "Fristående skolor med sådana elever: kontakta elevens hemkommun."
    ],
    redovisning: "Sidan beskriver ingen särskild redovisning utöver ansökan per termin.",
    fallgropar: [
      "Att missa 15 april eller 15 oktober – då avvisas ansökan.",
      "Att fristående skolor tror att de kan söka själva."
    ],
    nyckelord: ["ej folkbokförd", "inte folkbokförd", "EU-medborgare", "diplomatbarn", "ambassad", "utländska elever", "hemkommun"],
    kallor: [
      { titel: "Skolverket: Statsbidrag för barn som inte är folkbokförda i Sverige 2026", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-barn-som-inte-ar-folkbokforda-i-sverige-2026" }
    ],
    senastKontrollerad: "2026-09-25",
    osakerhet: "Öppningsdagen för ansökan 1 2027 är uppskattad utifrån 2026 (15 mars–15 april)."
  },
  {
    id: "ratt-till-insyn",
    namn: "Statsbidrag för införande av rätt till insyn",
    kortnamn: "Offentlighetsprincipen – små huvudmän",
    myndighet: "Skolverket",
    giltighet: "ny",
    sammanfattning: "Engångspengar till mindre fristående huvudmän för att förbereda sig inför att offentlighetsprincipen börjar gälla för dem, till exempel att kunna lämna ut allmänna handlingar.",
    syfte: "Bidraget ska göra det lättare för små fristående huvudmän att klara de nya uppgifter som offentlighetsprincipen för med sig.",
    omraden: ["ovrigt"],
    skolformer: ["forskola", "forskoleklass", "grundskola", "anpassad-grundskola", "gymnasieskola", "anpassad-gymnasieskola"],
    sokande: { fristaende: "villkor", kommun: "nej", region: "nej", stat: "nej", ovriga: "nej" },
    sokandeNot: "Bara för enskilda (fristående) mindre huvudmän: högst 450 barn och elever, eller högst 100 barn om man bara har förskolor. Ingår huvudmannen i en koncern räknas hela koncernen. Skolverket har en lista över vilka som kan söka.",
    typ: "ansokan",
    perioder: [
      { typ: "ansokan", fran: "2026-08-15", till: "2026-10-01", text: "Ansökan för 2026 i Skolverkets e-tjänst.", ungefar: false }
    ],
    belopp: "88 miljoner kr totalt 2026. Alla som beviljas får samma belopp, så summan per huvudman beror på hur många som söker. Man anger inget belopp i ansökan.",
    villkor: [
      "Huvudmannen ska vara en enskild mindre huvudman enligt gränserna ovan.",
      "Huvudmannen måste ha rapporterat barn- och elevantal till SCB för läsåret 2025/26.",
      "Pengarna ska gå till förberedelser för offentlighetsprincipen. Huvudmannen avgör själv vad som behövs.",
      "Pengarna får användas även efter 2026."
    ],
    hurDuGor: [
      "Kontrollera att ni finns på Skolverkets lista över huvudmän som kan söka.",
      "Skaffa behörighet till e-tjänsten i god tid (mejla Skolverket med organisationsnummer om ni saknar den).",
      "Ansök senast 1 oktober 2026."
    ],
    redovisning: "Sidan beskriver ingen särskild redovisning. Skolverket kan göra kontroller.",
    fallgropar: [
      "Att vänta för länge med att skaffa behörighet till e-tjänsten.",
      "Att inte ha rapporterat elevstatistik till SCB för 2025/26 – då kan man inte söka.",
      "Att inte meddela Skolverket om ändrad koncerntillhörighet efter maj 2026."
    ],
    nyckelord: ["offentlighetsprincipen", "insyn", "allmänna handlingar", "friskola", "fristående skola", "små skolor", "diarium", "sekretess"],
    kallor: [
      { titel: "Skolverket: Statsbidrag för införande av rätt till insyn 2026", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-inforande-av-ratt-till-insyn-2026" }
    ],
    senastKontrollerad: "2026-09-25",
    osakerhet: "Bidraget handlar om administration snarare än undervisning, men det gäller fristående förskolor och skolor i dessa skolformer. Det är inte känt om det kommer fler omgångar."
  }
);
