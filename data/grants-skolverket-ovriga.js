/* Övriga statsbidrag från Skolverket: införande av ämnesbetyg, IB-avgifter,
   bidrag som bara organisationer kan söka (elev-, föräldra- och
   ämneslärarorganisationer, entreprenörskap, vetenskapstävlingar,
   science center), bidrag för utlandssvenska elever och svenska
   utlandsskolor samt KPU på forskarnivå. Kontrollerat 2026-09-25. */
window.SB_GRANTS = window.SB_GRANTS || [];
window.SB_GRANTS.push(
  {
    id: "inforande-amnesbetyg",
    namn: "Statsbidrag för införande av ämnesbetyg",
    kortnamn: "Införande av ämnesbetyg (Gy25)",
    myndighet: "Skolverket",
    giltighet: "aktiv",
    sammanfattning: "Pengar till gymnasieskolor och komvux på gymnasial nivå för att förbereda personalen på ämnesbetygen (Gy25). Kan gå till kompetensutveckling, information och handledning. Fördelas efter antal elever.",
    syfte: "Från hösten 2025 får eleverna i gymnasieskolan betyg i hela ämnen i stället för i varje kurs. Bidraget ska hjälpa skolorna att förbereda sig och ge stöd när reformen införs.",
    omraden: ["kompetens"],
    skolformer: ["gymnasieskola", "anpassad-gymnasieskola", "komvux"],
    sokande: { fristaende: "ja", kommun: "ja", region: "ja", stat: "nej", ovriga: "nej" },
    sokandeNot: "Kommunala, fristående och regionala huvudmän (huvudman = den som driver skolan) för gymnasieskola, anpassad gymnasieskola och komvux på gymnasial nivå (även anpassad utbildning) kan söka. Fristående gymnasieskolor söker själva på samma villkor som kommunerna. En kommun som köper utbildning av en annan anordnare (entreprenad) kan söka och sedan föra pengarna vidare dit.",
    typ: "ansokan",
    perioder: [
      { typ: "ansokan", fran: "2026-01-15", till: "2026-02-16", text: "Ansökan för 2026 (stängd). Skolverket beslutade 26 februari 2026.", ungefar: false },
      { typ: "redovisning", fran: "2026-11-15", till: "2026-12-15", text: "Redovisning av 2026 års bidrag i e-tjänsten för statsbidrag.", ungefar: false },
      { typ: "ansokan", fran: "2027-01-15", till: "2027-02-15", text: "Möjlig ansökan för 2027. Förordningen anger 15 februari som sista dag, men Skolverket har ännu inte publicerat någon omgång för 2027.", ungefar: true }
    ],
    belopp: "Totalt 40 miljoner kr för 2026 (och cirka 40 miljoner kr för 2025). Beloppet räknas per elev i gymnasieskolan och anpassade gymnasieskolan, och per årsstudieplats i komvux, enligt den senaste officiella statistiken. Varje huvudman får minst 20 000 kr per år.",
    villkor: [
      "Pengarna får bara användas till insatser för att införa ämnesbetyg: kompetensutveckling, informationsinsatser eller handledning.",
      "Bidraget kan användas i hela verksamheten eller i en del av den.",
      "Samma insats får inte redan ha fått annat statsbidrag.",
      "Antalet elever räknas utifrån den statistik huvudmannen själv har lämnat in till SCB."
    ],
    hurDuGor: [
      "Håll utkik på Skolverkets sida om bidraget för att se om det blir en omgång för 2027.",
      "Planera insatser, till exempel en fortbildningsdag om ämnesbetyg eller kollegialt lärande med handledning.",
      "Se till att rätt personer har behörighet i Skolverkets e-tjänst för statsbidrag.",
      "Ansök i e-tjänsten under ansökningsperioden (hittills 15 januari–mitten av februari).",
      "Spara underlag över vad pengarna gick till och redovisa i e-tjänsten 15 november–15 december."
    ],
    redovisning: "Huvudmannen redovisar i e-tjänsten hur pengarna har använts. För 2026 är redovisningen öppen 15 november–15 december 2026. Pengar som inte använts enligt villkoren kan krävas tillbaka.",
    fallgropar: [
      "Att använda pengarna till sådant som inte gäller ämnesbetygen, till exempel vanlig kompetensutveckling i annat.",
      "Att betala samma insats med flera statsbidrag.",
      "Att tro att bidraget automatiskt finns 2027 – det är inte beslutat ännu."
    ],
    nyckelord: ["ämnesbetyg", "Gy25", "gymnasiereformen", "betygsreform", "kursbetyg", "betyg och bedömning", "gymnasiet", "komvux", "fortbildning betyg", "friskola gymnasium"],
    kallor: [
      { titel: "Skolverket: Statsbidrag för införande av ämnesbetyg 2026", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-inforande-av-amnesbetyg-2026" },
      { titel: "Skolverket: Statsbidrag för införande av ämnesbetyg 2025", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-inforande-av-amnesbetyg-2025" },
      { titel: "Förordning (2023:889) om statsbidrag för införande av ämnesbetyg", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-2023889-om-statsbidrag-for-inforande_sfs-2023-889/" }
    ],
    senastKontrollerad: "2026-09-25",
    osakerhet: "Skolverket har bidragsomgångar för 2025 och 2026 men har inte publicerat någon för 2027. Förordningen saknar slutdatum, men det är osäkert om regeringen avsätter pengar för 2027. Ansökningsdatumen för 2027 är en uppskattning."
  },
  {
    id: "ibo-avgifter",
    namn: "Statsbidrag för International Baccalaureate Office (IBO)",
    kortnamn: "IB-avgifter till IBO",
    myndighet: "Skolverket",
    giltighet: "aktiv",
    sammanfattning: "Gymnasieskolor med IB-programmet kan få tillbaka vissa avgifter som de betalar till International Baccalaureate Office: årsavgift per skola, anslutningsavgift och examensavgift per elev.",
    syfte: "IB-programmet (International Baccalaureate Diploma Programme) ger en internationellt erkänd examen. Skolorna måste betala avgifter till IB-organisationen, och staten täcker vissa av dem.",
    omraden: ["internationellt"],
    skolformer: ["gymnasieskola"],
    sokande: { fristaende: "ja", kommun: "ja", region: "nej", stat: "nej", ovriga: "nej" },
    sokandeNot: "Kommunala och fristående huvudmän för gymnasieskola som har IB-program och betalar avgifter till IBO kan begära pengarna. Fristående skolor gör det på samma villkor som kommunerna. Den som redan får annat statsbidrag för att finansiera IB-utbildningen kan inte få detta bidrag.",
    typ: "rekvisition",
    perioder: [
      { typ: "rekvisition", fran: "2026-08-15", till: "2026-09-15", text: "Begäran om utbetalning för 2026 (stängd).", ungefar: false },
      { typ: "rekvisition", fran: "2027-08-15", till: "2027-09-15", text: "Begäran om utbetalning för 2027. Uppskattat utifrån tidigare år.", ungefar: true }
    ],
    belopp: "Ersätter faktiska avgifter till IBO: årsavgiften per skola (diploma annual fee), anslutningsavgiften per skola (bara en gång, första gången huvudmannen söker) och examensavgiften per elev.",
    villkor: [
      "IB-programmet ska vara anmält till Skolverket och godkänt av IBO.",
      "Huvudmannen ska visa faktura och kvitto på att avgiften är betald.",
      "Examensavgift ersätts bara för elever vars hemkommun var skyldig att erbjuda eleven gymnasieutbildning när eleven började.",
      "Huvudmannen får inte ha annat statsbidrag som finansierar IB-utbildningen."
    ],
    hurDuGor: [
      "Samla fakturorna från IBO och kvitton på att ni har betalat.",
      "Kontrollera att ni har behörighet till bidraget i Skolverkets e-tjänst för statsbidrag.",
      "Begär utbetalning i e-tjänsten mellan 15 augusti och 15 september.",
      "Bifoga fakturor och kvitton."
    ],
    redovisning: "Ingen separat redovisning beskrivs. Underlaget är fakturorna och kvittona som skickas in när ni begär pengarna. Skolverket kan kontrollera i efterhand.",
    fallgropar: [
      "Att söka innan fakturan är betald – kvitto krävs.",
      "Att söka anslutningsavgift igen – den ersätts bara en gång.",
      "Att räkna med examensavgift för elever som hemkommunen inte var skyldig att erbjuda gymnasieutbildning."
    ],
    nyckelord: ["IB", "International Baccalaureate", "IBO", "IB-programmet", "Diploma Programme", "examensavgift", "IB-avgift", "internationell gymnasieexamen"],
    kallor: [
      { titel: "Skolverket: Statsbidrag för International Baccalaureate Office (IBO) 2026", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-international-baccalaureate-office-ibo-2026" },
      { titel: "Skolverket: Statsbidrag för International Baccalaureate Office (IBO) 2025", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-international-baccalaureate-office-ibo-2025" }
    ],
    senastKontrollerad: "2026-09-25",
    osakerhet: "Datum för 2027 är uppskattade utifrån 2025 och 2026. Det framgår inte på sidan hur stor den totala ramen är."
  },
  {
    id: "elevorganisationer",
    namn: "Statsbidrag för elevorganisationer",
    kortnamn: "Elevorganisationer",
    myndighet: "Skolverket",
    giltighet: "aktiv",
    sammanfattning: "Bidrag till riksomfattande elevorganisationer som arbetar för att elever ska få mer inflytande i skolan och för att stärka lokala elevråd och elevkårer. Skolor kan inte söka själva.",
    syfte: "Att öka elevernas inflytande i skolan och stärka elevernas lokala organisationer, till exempel elevkårer och elevråd.",
    omraden: ["ovrigt"],
    skolformer: ["grundskola", "gymnasieskola"],
    sokande: { fristaende: "nej", kommun: "nej", region: "nej", stat: "nej", ovriga: "ja" },
    sokandeNot: "Bara elevorganisationer kan söka – organisationer som i huvudsak består av elever och arbetar för elevinflytande. Skolor och huvudmän (varken kommunala eller fristående) kan inte söka. Skolans elever kan däremot ha nytta av bidraget, till exempel genom stöd till en elevkår som är ansluten till en riksorganisation.",
    typ: "ansokan",
    perioder: [
      { typ: "ansokan", fran: "2026-10-01", till: "2026-11-02", text: "Ansökan för bidragsåret 2027 i e-tjänsten för statsbidrag. Nya organisationer behövde vara registrerade och ha ansökt om ombud senast 17 september 2026.", ungefar: false },
      { typ: "beslut", fran: null, till: null, text: "Skolverket planerar beslut i februari 2027.", ungefar: false },
      { typ: "utbetalning", fran: null, till: null, text: "Hälften betalas ut i samband med beslutet (februari 2027), hälften i juni 2027.", ungefar: false },
      { typ: "redovisning", fran: "2027-03-01", till: "2027-04-01", text: "Redovisning av 2026 års bidrag (preliminärt).", ungefar: false },
      { typ: "redovisning", fran: "2028-03-01", till: "2028-04-03", text: "Redovisning av 2027 års bidrag (preliminärt).", ungefar: false }
    ],
    belopp: "För 2026 fick 4 organisationer totalt 7 050 000 kr. Ramen för 2027 bestäms i regleringsbrevet i december 2026. Fördelning: ett fast grundbidrag, sedan 65 procent efter antal bidragsgrundande medlemmar och 35 procent efter antal lokala föreningar.",
    villkor: [
      "Organisationen ska arbeta för att öka elevers inflytande i skolan.",
      "Den ska vara riksomfattande med flera lokala eller regionala föreningar.",
      "Den ska vara ideell och uppfylla demokrativillkor.",
      "Den får inte ha skulder hos Kronofogden, vara i konkurs eller likvidation eller ha obetalda återkrav hos Skolverket.",
      "Ett revisorsintyg om medlemsantalet krävs."
    ],
    hurDuGor: [
      "Registrera organisationen i Skolverkets e-tjänst och utse ett ombud i god tid (senast tio arbetsdagar innan ansökan öppnar).",
      "Ta fram uppgifter om syfte, planerade åtgärder, kostnadstyper, medlemmar och lokalföreningar.",
      "Förbered stadgar, verksamhetsberättelse, signerade protokoll och revisorsintyg – Skolverket begär in dem efter ansökan.",
      "Ansök i e-tjänsten 1 oktober–2 november 2026.",
      "Redovisa användningen i mars året efter bidragsåret."
    ],
    redovisning: "Organisationen redovisar verksamheten och kostnaderna (till exempel stöd till lokala föreningar, löner, material, lokaler, resor) i e-tjänsten. För 2026 preliminärt 1 mars–1 april 2027, för 2027 preliminärt 1 mars–3 april 2028. Signerade protokoll, årsredovisning och revisionsberättelse ska skickas in. Skolverket kan göra stickprov.",
    fallgropar: [
      "Att registrera organisationen för sent i e-tjänsten.",
      "Att sakna revisorsintyg om medlemsantalet.",
      "Att inte kunna visa underlag för kostnaderna vid stickprov."
    ],
    nyckelord: ["elevkår", "elevråd", "elevinflytande", "elevorganisation", "demokrati i skolan", "föreningsbidrag", "organisationsbidrag"],
    kallor: [
      { titel: "Skolverket: Statsbidrag för elevorganisationer 2027", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-elevorganisationer-2027" },
      { titel: "Skolverket: Statsbidrag för elevorganisationer 2026", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-elevorganisationer-2026" }
    ],
    senastKontrollerad: "2026-09-25",
    osakerhet: "Beloppet för 2027 är inte bestämt förrän regleringsbrevet kommer i december 2026."
  },
  {
    id: "foraldraorganisationer",
    namn: "Statsbidrag för föräldraorganisationer",
    kortnamn: "Föräldraorganisationer",
    myndighet: "Skolverket",
    giltighet: "aktiv",
    sammanfattning: "Bidrag till riksomfattande föräldraorganisationer som arbetar för att vårdnadshavare ska få mer inflytande i skolan. Skolor och enskilda föräldraföreningar på en skola kan inte söka.",
    syfte: "Att öka vårdnadshavares inflytande inom skolväsendet.",
    omraden: ["ovrigt"],
    skolformer: ["forskoleklass", "grundskola", "gymnasieskola"],
    sokande: { fristaende: "nej", kommun: "nej", region: "nej", stat: "nej", ovriga: "ja" },
    sokandeNot: "Bara föräldraorganisationer som arbetar i hela landet och är öppna för medlemmar i hela landet kan söka. Skolor och huvudmän (kommunala eller fristående) kan inte söka. Föräldrar på en skola kan ha nytta av organisationernas stöd och material, men en lokal föräldraförening på en enskild skola uppfyller normalt inte kravet på riksomfattande verksamhet.",
    typ: "ansokan",
    perioder: [
      { typ: "ansokan", fran: "2026-10-01", till: "2026-11-02", text: "Ansökan för bidragsåret 2027 i e-tjänsten för statsbidrag. Nya organisationer behövde vara registrerade och ha ansökt om ombud senast 17 september 2026.", ungefar: false },
      { typ: "beslut", fran: null, till: null, text: "Skolverket planerar beslut i februari 2027.", ungefar: false },
      { typ: "utbetalning", fran: null, till: null, text: "Hälften betalas ut i samband med beslutet, hälften i juni 2027.", ungefar: false },
      { typ: "redovisning", fran: "2027-03-01", till: "2027-04-01", text: "Redovisning av 2026 års bidrag (preliminärt).", ungefar: false },
      { typ: "redovisning", fran: "2028-03-01", till: "2028-04-03", text: "Redovisning av 2027 års bidrag (preliminärt).", ungefar: false }
    ],
    belopp: "För 2026 fanns 1 050 000 kr, som delades av 3 organisationer. Ramen för 2027 bestäms i regleringsbrevet i december 2026. Hur mycket varje organisation får beror på ramen och hur många som delar på den.",
    villkor: [
      "Organisationen ska arbeta för att öka vårdnadshavares inflytande i skolan.",
      "Den ska vara riksomfattande och öppen för medlemmar i hela landet.",
      "Den ska vara ideell och uppfylla demokrativillkor.",
      "Den får inte ha skulder hos Kronofogden, vara i konkurs eller likvidation eller ha obetalda återkrav hos Skolverket."
    ],
    hurDuGor: [
      "Registrera organisationen i Skolverkets e-tjänst och utse ett ombud i god tid.",
      "Beskriv organisationens syfte och vad ni ska göra under året för att öka föräldrars inflytande.",
      "Förbered stadgar, verksamhetsberättelse och signerade protokoll – Skolverket begär in dem efter ansökan.",
      "Ansök i e-tjänsten 1 oktober–2 november 2026.",
      "Redovisa i mars–april året efter."
    ],
    redovisning: "Organisationen redovisar verksamhet och kostnader i e-tjänsten. För 2026 preliminärt 1 mars–1 april 2027, för 2027 preliminärt 1 mars–3 april 2028. Alla kostnader ska finnas i organisationens årsredovisning. Signerade protokoll, årsredovisning och revisionsberättelse skickas in.",
    fallgropar: [
      "Att tro att en lokal föräldraförening kan söka – verksamheten måste vara riksomfattande.",
      "Att registrera organisationen för sent i e-tjänsten.",
      "Att kostnader saknas i årsredovisningen."
    ],
    nyckelord: ["föräldraförening", "föräldrainflytande", "vårdnadshavare", "föräldrar i skolan", "föräldraråd", "organisationsbidrag"],
    kallor: [
      { titel: "Skolverket: Statsbidrag för föräldraorganisationer 2027", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-foraldraorganisationer-2027" },
      { titel: "Skolverket: Statsbidrag för föräldraorganisationer 2026", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-foraldraorganisationer-2026" }
    ],
    senastKontrollerad: "2026-09-25",
    osakerhet: "Beloppet för 2027 är inte bestämt förrän regleringsbrevet kommer i december 2026."
  },
  {
    id: "amneslararorganisationer",
    namn: "Statsbidrag för ämneslärarorganisationer",
    kortnamn: "Ämneslärarorganisationer",
    myndighet: "Skolverket",
    giltighet: "aktiv",
    sammanfattning: "Ett mindre bidrag till ideella, riksomfattande föreningar för lärare i ett visst ämne, till exempel matte-, svensk- eller språklärarföreningar, som arbetar för att utveckla ämnet.",
    syfte: "Att stödja organisationer som främjar utvecklingen av ämnen som har en nationell kursplan eller ämnesplan.",
    omraden: ["kompetens"],
    skolformer: ["grundskola", "gymnasieskola"],
    sokande: { fristaende: "nej", kommun: "nej", region: "nej", stat: "nej", ovriga: "ja" },
    sokandeNot: "Bara ämneslärarorganisationer kan söka. Skolor och huvudmän (kommunala eller fristående) kan inte söka. Lärare på alla skolor kan ha nytta av bidraget genom föreningarnas konferenser, tidskrifter och material.",
    typ: "ansokan",
    perioder: [
      { typ: "ansokan", fran: "2026-10-01", till: "2026-11-02", text: "Ansökan för bidragsåret 2027 i e-tjänsten för statsbidrag. Nya organisationer behövde vara registrerade och ha ansökt om ombud senast 17 september 2026.", ungefar: false },
      { typ: "beslut", fran: null, till: null, text: "Skolverket planerar beslut i februari 2027.", ungefar: false },
      { typ: "utbetalning", fran: null, till: null, text: "Hälften betalas ut i samband med beslutet, hälften i juni 2027.", ungefar: false }
    ],
    belopp: "För 2026 fanns 700 000 kr, som delades av 13 organisationer. Ramen för 2027 bestäms i december 2026. 65 procent delas ut som ett lika stort grundbidrag per organisation och 35 procent efter antal bidragsgrundande medlemmar.",
    villkor: [
      "Organisationen ska arbeta för att utveckla ett ämne som har en nationell kursplan eller ämnesplan.",
      "Den ska vara riksomfattande och ideell.",
      "För 2026 krävdes också att minst 60 procent av medlemmarna är lärare och att organisationen har fler än 100 medlemmar.",
      "Den får inte ha skulder hos Kronofogden eller vara i konkurs eller likvidation.",
      "Ett revisorsintyg om medlemsantalet krävs."
    ],
    hurDuGor: [
      "Registrera föreningen i Skolverkets e-tjänst och utse ett ombud i god tid.",
      "Beskriv hur ni främjar ämnet, med exempel från förra året, och vad ni planerar för nästa år.",
      "Ta fram antal medlemmar och bidragsgrundande medlemmar samt revisorsintyg.",
      "Ansök i e-tjänsten 1 oktober–2 november 2026.",
      "Skicka in stadgar, verksamhetsberättelse och revisorsintyg när Skolverket begär dem."
    ],
    redovisning: "Skolverkets sida beskriver ingen särskild redovisningsperiod för bidraget. Skolverket kan kontrollera och följa upp i efterhand, så spara underlag.",
    fallgropar: [
      "Att sakna revisorsintyg om medlemsantalet.",
      "Att registrera föreningen för sent i e-tjänsten."
    ],
    nyckelord: ["ämneslärarförening", "lärarförening", "matematiklärare", "svensklärare", "språklärare", "ämnesutveckling", "ämnesdidaktik", "organisationsbidrag"],
    kallor: [
      { titel: "Skolverket: Statsbidrag för ämneslärarorganisationer 2027", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-amneslararorganisationer-2027" },
      { titel: "Skolverket: Statsbidrag för ämneslärarorganisationer 2026", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-amneslararorganisationer-2026" }
    ],
    senastKontrollerad: "2026-09-25",
    osakerhet: "Sidan för 2027 nämner inte längre kraven på minst 60 procent lärare och fler än 100 medlemmar, som fanns för 2026. Det är oklart om kraven har tagits bort eller bara saknas på sidan. Ingen redovisningsperiod anges."
  },
  {
    id: "entreprenorskap-organisationer",
    namn: "Statsbidrag för entreprenörskap till organisationer",
    kortnamn: "Entreprenörskap i skolan",
    myndighet: "Skolverket",
    giltighet: "aktiv",
    sammanfattning: "Bidrag till ideella organisationer som arbetar med entreprenörskap och entreprenöriellt lärande i skolan, till exempel elevföretag och samarbete med näringsliv, kulturliv och föreningsliv. Skolor kan inte söka själva.",
    syfte: "Att främja entreprenörskap i skolan: kunskaper om projekt och företagande, entreprenöriella förmågor, samarbete mellan skolor och entreprenörer samt flickors och unga kvinnors entreprenörskap.",
    omraden: ["ovrigt", "yrke"],
    skolformer: ["forskola", "forskoleklass", "grundskola", "anpassad-grundskola", "sameskola", "specialskola", "fritidshem", "gymnasieskola", "anpassad-gymnasieskola", "komvux"],
    sokande: { fristaende: "nej", kommun: "nej", region: "nej", stat: "nej", ovriga: "ja" },
    sokandeNot: "Bara organisationer utan vinstsyfte som inte själva är huvudmän för skolor kan söka. Kommunala och fristående skolor kan alltså inte söka, men de kan delta i organisationernas program och aktiviteter – ofta utan kostnad – och ibland lämna referenser till organisationens ansökan.",
    typ: "ansokan",
    perioder: [
      { typ: "ansokan", fran: "2026-10-01", till: "2026-11-02", text: "Ansökan för bidragsåret 2027 i e-tjänsten. Nya organisationer behövde vara registrerade och ha ansökt om ombud senast 17 september 2026.", ungefar: false },
      { typ: "beslut", fran: null, till: null, text: "Skolverket planerar beslut i februari 2027.", ungefar: false },
      { typ: "utbetalning", fran: null, till: null, text: "Hälften betalas ut i samband med beslutet, hälften i juni 2027.", ungefar: false },
      { typ: "redovisning", fran: "2027-03-01", till: "2027-04-01", text: "Redovisning av 2026 års bidrag. Beslut om redovisningen planeras i maj 2027.", ungefar: false },
      { typ: "redovisning", fran: "2028-03-01", till: "2028-04-03", text: "Redovisning av 2027 års bidrag (preliminärt).", ungefar: false }
    ],
    belopp: "För 2026 delades 6 000 000 kr ut till 11 organisationer (2 fick avslag). Det är inte klart om det blir pengar för 2027 – det beror på regleringsbrevet i december 2026 och hur Skolverket fördelar anslaget i januari 2027. Organisationer som räknas som företag enligt EU:s regler får högst 300 000 euro i sammanlagt statligt stöd under tre år.",
    villkor: [
      "Organisationen får inte ha vinstsyfte och får inte vara huvudman inom skolväsendet.",
      "Den ska vara demokratiskt uppbyggd och respektera demokratins idéer, jämställdhet och alla människors lika värde.",
      "Den ska ha arbetat med entreprenörskap i skolan i minst två avslutade verksamhetsår och arbeta långsiktigt.",
      "Den ska arbeta riksomfattande med lokal eller regional förankring, eller ha verksamhet av riksintresse.",
      "Den ska ha andra inkomster än statsbidraget.",
      "Insatserna ska rikta sig till barn, elever eller skolpersonal inom skolans verksamhet.",
      "Pengarna ska användas under bidragsåret. Bara kostnaden för revisorsintyget får komma året efter."
    ],
    hurDuGor: [
      "Registrera organisationen i Skolverkets e-tjänst och utse ett ombud i god tid.",
      "Beskriv de insatser ni planerar och hur de hänger ihop med entreprenörskap och entreprenöriellt lärande.",
      "Ta fram tre referenser från huvudmän i tre olika regioner som tagit del av era insatser.",
      "Budgetera kostnaderna per insats och redogör för annat statligt stöd ni fått.",
      "Ansök i e-tjänsten 1 oktober–2 november 2026 och skicka in stadgar, verksamhetsberättelser, årsredovisning och protokoll när Skolverket begär dem.",
      "Redovisa med revisorsintyg året efter."
    ],
    redovisning: "Organisationen redovisar genomförda insatser, antal elever och personal som deltog, skolformer och kostnader per insats. Ett revisorsintyg krävs – om bidraget är minst fem prisbasbelopp ska det vara från en auktoriserad eller godkänd revisor enligt standarden ISRS 4400. Redovisning för 2026: 1 mars–1 april 2027.",
    fallgropar: [
      "Att inte ha två hela verksamhetsår med entreprenörskap i skolan.",
      "Att två organisationer söker för olika delar av samma verksamhet – det går inte.",
      "Att aktiviteter ligger utanför skolans tid, till exempel på fritiden utan koppling till fritidshemmet.",
      "Att sakna verifikationer som kan kopplas till varje insats.",
      "Att räkna med pengar för 2027 innan anslaget är beslutat."
    ],
    nyckelord: ["entreprenörskap", "entreprenöriellt lärande", "UF-företag", "elevföretag", "företagande", "innovation", "näringsliv", "skola arbetsliv", "organisationsbidrag"],
    kallor: [
      { titel: "Skolverket: Statsbidrag för entreprenörskap till organisationer 2027", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-entreprenorskap-till-organisationer-2027" },
      { titel: "Skolverket: Statsbidrag för entreprenörskap till organisationer 2026", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-entreprenorskap-till-organisationer-2026" },
      { titel: "Skolverket: Statsbidrag för entreprenörskap till organisationer 2025", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-entreprenorskap-till-organisationer-2025" }
    ],
    senastKontrollerad: "2026-09-25",
    osakerhet: "Skolverket skriver att det ännu inte är klart om det blir något anslag för 2027. Ansökan är ändå öppen hösten 2026."
  },
  {
    id: "vetenskapstavlingar",
    namn: "Statsbidrag för vetenskapstävlingar",
    kortnamn: "Vetenskapstävlingar (skololympiader)",
    myndighet: "Skolverket",
    giltighet: "aktiv",
    sammanfattning: "Pengar till svenska organisationer som skickar elever till internationella vetenskapstävlingar, till exempel olympiader i matematik, fysik, kemi, biologi eller programmering, eller som ordnar tävlingar och uttagningar i Sverige.",
    syfte: "Att göra det möjligt för elever att delta i internationella vetenskapstävlingar och att sådana tävlingar kan ordnas i Sverige.",
    omraden: ["internationellt", "ovrigt"],
    skolformer: ["grundskola", "gymnasieskola"],
    sokande: { fristaende: "nej", kommun: "nej", region: "nej", stat: "nej", ovriga: "ja" },
    sokandeNot: "Bara svenska organisationer som ordnar elevers deltagande i vetenskapstävlingar kan söka. Skolor och huvudmän (kommunala eller fristående) kan inte söka, men elever från alla skolor kan delta i tävlingarna och uttagningarna.",
    typ: "ansokan",
    perioder: [
      { typ: "ansokan", fran: "2026-01-15", till: "2026-02-16", text: "Ansökan för 2026 (stängd). Beslut i mars 2026.", ungefar: false },
      { typ: "ansokan", fran: "2027-01-15", till: "2027-02-15", text: "Ansökan för 2027 i e-tjänsten för statsbidrag.", ungefar: false },
      { typ: "beslut", fran: null, till: null, text: "Beslut väntas i mars 2027, som året innan.", ungefar: true }
    ],
    belopp: "10 miljoner kr per år att fördela (både 2026 och 2027). Internationella tävlingar prioriteras. Nationella kvalificeringstävlingar får bara pengar om det finns kvar.",
    villkor: [
      "Tävlingen ska genomföras samma kalenderår som bidraget gäller.",
      "Kostnaderna ska vara rimliga i förhållande till aktiviteterna.",
      "Godkända kostnader är bland annat resor, kost och logi för elever och lärare, anmälningsavgifter, lokalhyra, tävlingsmaterial, försäkringar och träningsläger.",
      "Löner, arvoden, prispengar och vanlig administration godkänns inte.",
      "Skolverkets logotyp får inte användas."
    ],
    hurDuGor: [
      "Se till att rätt personer har behörighet i Skolverkets e-tjänst för statsbidrag.",
      "Beskriv tävlingen: namn, inriktning, tid, plats, antal elever och lagledare.",
      "Dela upp det sökta beloppet på kostnadsposterna.",
      "Ansök 15 januari–15 februari 2027."
    ],
    redovisning: "Skolverkets sida beskriver ingen särskild redovisningsperiod. Skolverket kan följa upp och kontrollera i efterhand, så spara kvitton och underlag.",
    fallgropar: [
      "Att söka för löner eller arvoden – det godkänns inte.",
      "Att söka för en tävling som inte hålls under bidragsåret."
    ],
    nyckelord: ["skololympiad", "matematikolympiad", "fysikolympiad", "kemiolympiad", "biologiolympiad", "programmeringsolympiad", "vetenskapstävling", "ämnestävling", "tävling elever", "uttagning"],
    kallor: [
      { titel: "Skolverket: Statsbidrag för vetenskapstävlingar 2027", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-vetenskapstavlingar-2027" },
      { titel: "Skolverket: Statsbidrag för vetenskapstävlingar 2026", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-vetenskapstavlingar-2026" }
    ],
    senastKontrollerad: "2026-09-25",
    osakerhet: "Beslutsmånaden för 2027 är uppskattad. Ingen redovisningsperiod anges på sidan."
  },
  {
    id: "teknik-naturvetenskapscentrum",
    namn: "Statsbidrag för teknik- och naturvetenskapscentrum (science center)",
    kortnamn: "Science center",
    myndighet: "Skolverket",
    giltighet: "aktiv",
    sammanfattning: "Bidrag till science center – teknik- och naturvetenskapscentrum som med interaktiva metoder väcker intresse för naturvetenskap och teknik hos allmänheten. Skolklasser besöker dem ofta, men skolor kan inte söka.",
    syfte: "Att stärka verksamheten vid teknik- och naturvetenskapscentrum, så att fler får intresse för och kunskap om naturvetenskap och teknik.",
    omraden: ["ovrigt"],
    skolformer: ["forskoleklass", "grundskola", "gymnasieskola"],
    sokande: { fristaende: "nej", kommun: "nej", region: "nej", stat: "nej", ovriga: "ja" },
    sokandeNot: "Bara teknik- och naturvetenskapscentrum (science center) kan söka. Skolor och huvudmän (kommunala eller fristående) kan inte söka, men deras elever har nytta av bidraget när de besöker centren eller deltar i deras aktiviteter.",
    typ: "ansokan",
    perioder: [
      { typ: "ansokan", fran: "2026-01-15", till: "2026-02-16", text: "Ansökan för 2026 (stängd). Beslut i maj 2026.", ungefar: false },
      { typ: "ansokan", fran: "2027-01-15", till: "2027-02-15", text: "Trolig ansökan för 2027, uppskattad utifrån 2026.", ungefar: true },
      { typ: "utbetalning", fran: null, till: null, text: "Hela beloppet betalas ut i samband med beslutet (2026 i maj).", ungefar: false }
    ],
    belopp: "För 2026 fick 20 centrum totalt 25 500 000 kr. Ett centrum kan få högst det sökta beloppet och högst 49 procent av sina intäkter året innan (statsbidraget från Skolverket räknas inte med).",
    villkor: [
      "Centret ska i hög grad vända sig till allmänheten.",
      "Det ska visa bredd inom naturvetenskap eller teknik och arbeta mest med interaktiva metoder.",
      "Det ska ha funnits i minst ett år och till största delen finansieras på annat sätt, till exempel av kommun, region, högskola, museum eller näringsliv.",
      "Det ska vara en självständig verksamhet med stabil ekonomi och personal.",
      "Det ska följa upp verksamheten varje år."
    ],
    hurDuGor: [
      "Kontrollera att centret uppfyller alla krav.",
      "Ta fram förra årets intäkter – bidraget begränsas till 49 procent av dem.",
      "Se till att ni har behörighet i Skolverkets e-tjänst för statsbidrag.",
      "Ansök i e-tjänsten under ansökningsperioden (2026 var den 15 januari–16 februari)."
    ],
    redovisning: "Skolverkets sida beskriver ingen särskild redovisningsperiod. Centret ska göra årliga uppföljningar, och Skolverket kan kontrollera i efterhand.",
    fallgropar: [
      "Att söka mer än 49 procent av förra årets intäkter.",
      "Att centret i huvudsak finansieras av statsbidraget – det måste ha annan huvudfinansiering."
    ],
    nyckelord: ["science center", "vetenskapscentrum", "teknikcentrum", "naturvetenskap", "teknik", "NO", "experiment", "skolbesök", "studiebesök"],
    kallor: [
      { titel: "Skolverket: Statsbidrag för teknik- och naturvetenskapscentrum 2026 (science center)", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-teknik--och-naturvetenskapscentrum-2026" },
      { titel: "Förordning (1997:153) om statsbidrag till teknik- och naturvetenskapscentrum", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-1997153-om-statsbidrag-till-teknik-_sfs-1997-153/" }
    ],
    senastKontrollerad: "2026-09-25",
    osakerhet: "Skolverket har ännu inte publicerat någon sida för 2027. Datumen för 2027 är uppskattade utifrån 2026."
  },
  {
    id: "utlandssvenska-elever",
    namn: "Statsbidrag för utlandssvenska elever",
    kortnamn: "Utlandssvenska elever i Sverige",
    myndighet: "Skolverket",
    giltighet: "aktiv",
    sammanfattning: "Skolor i Sverige som tar emot utlandssvenska elever (familjen bor utomlands, eleven är inte folkbokförd här) från årskurs 7 kan få ersättning för elevens utbildning, eftersom ingen hemkommun betalar.",
    syfte: "Att ersätta kostnaderna när barn till svenskar som bor utomlands går i skola i Sverige från årskurs 7, så att de kan få en svensk utbildning.",
    omraden: ["internationellt"],
    skolformer: ["grundskola", "anpassad-grundskola", "gymnasieskola", "anpassad-gymnasieskola"],
    sokande: { fristaende: "ja", kommun: "ja", region: "nej", stat: "ja", ovriga: "nej" },
    sokandeNot: "Kommunala, fristående och statliga huvudmän som har utlandssvenska elever i årskurs 7–9, i gymnasieskolan (även IB) eller i fjärde tekniskt år kan söka. Fristående skolor söker på samma villkor som kommunala. Undantag: IB-utbildningen i Stockholms kommun, Göteborgs kommun och Sigtunaskolan humanistiska läroverket får i stället bidraget för IB-utbildning vid vissa skolor.",
    typ: "ansokan",
    perioder: [
      { typ: "ansokan", fran: "2026-02-15", till: "2026-03-02", text: "Ansökan 1 för vårterminen 2026 (stängd).", ungefar: false },
      { typ: "ansokan", fran: "2026-09-15", till: "2026-10-01", text: "Ansökan 2 för höstterminen 2026 i e-tjänsten. Sena ansökningar avvisas.", ungefar: false },
      { typ: "beslut", fran: null, till: null, text: "Beslut om ansökan 2 publiceras i november 2026.", ungefar: false },
      { typ: "ansokan", fran: "2027-02-15", till: "2027-03-02", text: "Ansökan 1 för vårterminen 2027, uppskattad utifrån 2026.", ungefar: true },
      { typ: "ansokan", fran: "2027-09-15", till: "2027-10-01", text: "Ansökan 2 för höstterminen 2027, uppskattad utifrån 2026.", ungefar: true }
    ],
    belopp: "Söks per termin. För grundskolan bestämmer regeringen ett belopp per elev varje år. För gymnasieskolan är det hälften av riksprislistans belopp för programmet (inklusive mat). För IB hälften av beloppet för naturvetenskapsprogrammet och för fjärde tekniskt år hälften av det beloppet.",
    villkor: [
      "Eleven räknas som utlandssvensk om båda vårdnadshavarna bor utomlands i minst sex månader i följd, minst en av dem är svensk medborgare och eleven inte är folkbokförd i Sverige.",
      "Huvudmannen ska själv bedöma detta när eleven börjar årskurs 7–9 och på nytt när eleven börjar gymnasiet.",
      "Huvudmannen ska spara underlag som visar bedömningen – Skolverket kan begära in det.",
      "Ansökningsdatumen styrs av förordningen, och sena ansökningar avvisas."
    ],
    hurDuGor: [
      "Ta reda på vilka elever som kan vara utlandssvenska och kontrollera att de inte är folkbokförda i Sverige.",
      "Gör och dokumentera bedömningen för varje elev.",
      "Kontrollera att ni har behörighet i Skolverkets e-tjänst för statsbidrag.",
      "Ansök för varje termin: i februari–mars för våren och 15 september–1 oktober för hösten.",
      "Spara underlagen om Skolverket vill kontrollera."
    ],
    redovisning: "Ingen separat redovisning beskrivs. Huvudmannen ska spara dokumentation om bedömningen av varje elev så att Skolverket kan kontrollera.",
    fallgropar: [
      "Att missa sista dagen – ansökan 2 för hösten 2026 stänger 1 oktober 2026.",
      "Att söka för elever som är folkbokförda i Sverige.",
      "Att inte göra en ny bedömning när eleven går vidare till gymnasiet.",
      "Att sakna dokumentation vid kontroll."
    ],
    nyckelord: ["utlandssvensk", "utlandssvenska elever", "bor utomlands", "ej folkbokförd", "internatskola", "riksinternat", "Sigtuna", "svenska familjer utomlands", "expat"],
    kallor: [
      { titel: "Skolverket: Statsbidrag för utlandssvenska elever 2026", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-utlandssvenska-elever-2026" },
      { titel: "Förordning (2015:736) om statsbidrag till kostnader för utbildning i Sverige för utlandssvenska elever", url: "https://www.riksdagen.se/sv/Dokument-Lagar/Lagar/Svenskforfattningssamling/Forordning-2015736-om-stats_sfs-2015-736/?bet=2015:736" }
    ],
    senastKontrollerad: "2026-09-25",
    osakerhet: "Datumen för 2027 är uppskattade utifrån 2026. Sidan nämner inte regionala huvudmän; vi har därför satt region till nej. Beloppen för 2026 var inte publicerade på sidan när vi kontrollerade."
  },
  {
    id: "distansundervisning-utlandssvenska",
    namn: "Statsbidrag för distansundervisning",
    kortnamn: "Distansundervisning för elever utomlands",
    myndighet: "Skolverket",
    giltighet: "aktiv",
    sammanfattning: "Svenska elever som bor utomlands kan läsa grundskolans årskurs 6–9 via Sofia distans eller gymnasiet via Hermods på distans. Statsbidraget går till dessa två anordnare, inte till familjerna.",
    syfte: "Att svenska familjer ska kunna arbeta utomlands och ändå låta barnen följa svensk skola, så att de lätt kan återvända till Sverige.",
    omraden: ["internationellt", "digitalt"],
    skolformer: ["grundskola", "gymnasieskola"],
    sokande: { fristaende: "villkor", kommun: "villkor", region: "nej", stat: "nej", ovriga: "nej" },
    sokandeNot: "Bara de två utbildningsanordnarna kan söka: Sofia distans (grundskolan, drivs av Stockholms stad) och Hermods AB (gymnasieskolan). Andra kommunala eller fristående skolor kan inte söka. Vårdnadshavare anmäler sitt barn till Sofia distans eller Hermods och skickar intyg dit – inte till Skolverket.",
    typ: "ansokan",
    perioder: [
      { typ: "ansokan", fran: "2026-09-01", till: "2026-10-01", text: "Ansökan för höstterminen 2026 (anordnarna skickar in för sina elever).", ungefar: false },
      { typ: "ansokan", fran: "2027-02-01", till: "2027-03-02", text: "Ansökan för vårterminen 2027.", ungefar: false },
      { typ: "ansokan", fran: "2027-09-01", till: "2027-10-01", text: "Ansökan för höstterminen 2027.", ungefar: false }
    ],
    belopp: "Bidraget lämnas per elev. Skolverkets sida anger inget belopp.",
    villkor: [
      "Minst en vårdnadshavare ska vara svensk medborgare.",
      "Minst en vårdnadshavare ska bo utomlands av ett godkänt skäl, till exempel arbete för svensk myndighet, svenskt företag eller internationell organisation, studier eller forskning, kulturarbete eller annan verksamhet som är viktig för Sverige. Synnerliga sociala skäl kan också godtas.",
      "Pengarna ska gå till studiematerial, handledning och andra kostnader för distansundervisningen."
    ],
    hurDuGor: [
      "Som vårdnadshavare: anmäl barnet på Sofia distans webbplats (årskurs 6–9) eller Hermods webbplats (gymnasiet).",
      "Skicka rätt intyg eller blankett till anordnaren, till exempel intyg om tjänstgöring från arbetsgivaren.",
      "Anordnaren granskar och ansöker hos Skolverket.",
      "Skolverket beslutar och anordnaren meddelar familjen."
    ],
    redovisning: "Ingen separat redovisning beskrivs på Skolverkets sida.",
    fallgropar: [
      "Att vårdnadshavaren skickar ansökan direkt till Skolverket – den ska gå via Sofia distans eller Hermods.",
      "Att vårdnadshavaren själv skriver under arbetsgivarintyget – det ska någon annan göra.",
      "Att ange fel organisationsnummer för arbetsgivaren."
    ],
    nyckelord: ["distansundervisning", "Sofia distans", "Hermods", "bo utomlands", "utlandssvensk", "skola på distans", "nätskola", "expat", "svensk skola utomlands"],
    kallor: [
      { titel: "Skolverket: Statsbidrag för distansundervisning 2027", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-distansundervisning-2027" },
      { titel: "Skolverket: Statsbidrag för distansundervisning 2026", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-distansundervisning-2026" },
      { titel: "Sofia distans (Stockholms stad)", url: "https://sofiadistans.stockholm.se/" }
    ],
    senastKontrollerad: "2026-09-25",
    osakerhet: "Skolverkets sida anger inte hur stort bidraget är per elev."
  },
  {
    id: "utbildning-svenska-utlandsskolor",
    namn: "Statsbidrag till utbildning vid svenska utlandsskolor",
    kortnamn: "Svenska utlandsskolor – utbildning",
    myndighet: "Skolverket",
    giltighet: "aktiv",
    sammanfattning: "Grundbidraget till de svenska skolor utomlands som Skolverket har godkänt. Pengarna går till utbildning motsvarande förskoleklass, grundskola och så långt det går gymnasieskola för utlandssvenska barn.",
    syfte: "Att barn till svenskar som arbetar utomlands ska kunna få en utbildning som motsvarar den svenska, så att familjer kan rekryteras till uppdrag utomlands och barnen lätt kan återvända.",
    omraden: ["internationellt"],
    skolformer: ["forskoleklass", "grundskola", "gymnasieskola"],
    sokande: { fristaende: "villkor", kommun: "nej", region: "nej", stat: "nej", ovriga: "nej" },
    sokandeNot: "Bara huvudmän för svenska utlandsskolor som Skolverket har godkänt kan söka. I dag är det 14 skolor, i England, Frankrike, Kenya, Moçambique, Portugal, Spanien, Tyskland och Österrike. Vanliga fristående skolor i Sverige kan inte söka. Vårdnadshavare kan inte söka själva – skolan söker för sina elever.",
    typ: "ansokan",
    perioder: [
      { typ: "ansokan", fran: "2026-10-15", till: "2026-11-16", text: "Ansökan för 2027 (förskoleklass och grundskola samt gymnasieskola). Från 2027 görs ansökan i e-tjänsten för statsbidrag. Blanketten publiceras 15 oktober.", ungefar: false },
      { typ: "beslut", fran: null, till: null, text: "Beslut under första kvartalet 2027 (för 2026 kom beslutet i februari).", ungefar: false }
    ],
    belopp: "Antalet elever räknas som ett snitt av de tre senaste åren. Regeringen bestämmer beloppet per elev varje år. 75 procent av det totala beloppet justeras sedan efter hur levnadskostnaderna har utvecklats i landet där skolan ligger.",
    villkor: [
      "Skolan ska vara godkänd som svensk utlandsskola av Skolverket.",
      "Eleverna ska ha minst en vårdnadshavare som är svensk medborgare och bor utomlands av ett godkänt skäl, till exempel arbete för svensk myndighet, svenskt företag eller internationell organisation, studier eller forskning eller kulturarbete. Synnerliga sociala skäl kan godtas.",
      "Bidraget är ett allmänt stöd till skolan – huvudmannen bestämmer själv hur det används."
    ],
    hurDuGor: [
      "Samla elevunderlag och rätt intyg för varje elev (till exempel intyg om tjänstgöring).",
      "Fyll i ansökningsblanketten som publiceras 15 oktober.",
      "Se till att ni har behörighet i Skolverkets e-tjänst för statsbidrag.",
      "Ansök 15 oktober–16 november 2026. Går det inte i e-tjänsten kan ni skicka via Sefos (säker filöverföring) efter kontakt med Skolverket."
    ],
    redovisning: "Ingen särskild redovisning av användningen beskrivs, eftersom bidraget är ett allmänt stöd. Skolan ska kunna visa underlag för eleverna.",
    fallgropar: [
      "Att använda fel intyg för vårdnadshavarens skäl att bo utomlands.",
      "Att en ny skola tror att den kan söka utan att först bli godkänd som svensk utlandsskola.",
      "Att familjer räknar med lägre avgift – det är skolan som bestämmer hur bidraget påverkar avgifterna."
    ],
    nyckelord: ["utlandsskola", "svensk skola utomlands", "svenska skolan i London", "svenska skolan i Paris", "utlandssvensk", "expat", "skolavgift utomlands", "utlandsundervisning"],
    kallor: [
      { titel: "Skolverket: Statsbidrag till utbildning vid svenska utlandsskolor 2027", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-till-utbildning-vid-svenska-utlandsskolor-2027" },
      { titel: "Skolverket: Statsbidrag till utbildning vid svenska utlandsskolor 2026", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-till-utbildning-vid-svenska-utlandsskolor-2026" },
      { titel: "Skolverket: Statsbidrag för svenska utlandsskolor 2026 (översikt)", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-svenska-utlandsskolor-2026" },
      { titel: "Riksrevisionen: Statsbidrag till svenska utlandsskolor – ett föråldrat och ineffektivt system (2026)", url: "https://www.riksrevisionen.se/granskningar/granskningsrapporter/2026/statsbidrag-till-svenska-utlandsskolor---ett-foraldrat-och-ineffektivt-system.html" }
    ],
    senastKontrollerad: "2026-09-25",
    osakerhet: "Riksrevisionen kritiserade systemet i juni 2026 och föreslog att regeringen ser över det, till exempel genom att ta bort bidraget eller ändra reglerna. Inga ändringar är beslutade, men reglerna kan komma att ändras. Beloppet per elev för 2027 är inte publicerat ännu."
  },
  {
    id: "lokalkostnader-utlandsskolor",
    namn: "Statsbidrag till lokalkostnader till svenska utlandsskolor",
    kortnamn: "Svenska utlandsskolor – lokaler",
    myndighet: "Skolverket",
    giltighet: "aktiv",
    sammanfattning: "Svenska utlandsskolor kan få hälften av sina kostnader för de lokaler som behövs för att undervisa utlandssvenska elever, till exempel hyra, värme, städning och löpande underhåll.",
    syfte: "Att hjälpa godkända svenska utlandsskolor med lokalkostnaderna för undervisningen av utlandssvenska elever.",
    omraden: ["internationellt"],
    skolformer: ["forskoleklass", "grundskola", "gymnasieskola"],
    sokande: { fristaende: "villkor", kommun: "nej", region: "nej", stat: "nej", ovriga: "nej" },
    sokandeNot: "Bara huvudmän för svenska utlandsskolor som Skolverket har godkänt kan söka (i dag 14 skolor). Vanliga fristående skolor i Sverige kan inte söka.",
    typ: "ansokan",
    perioder: [
      { typ: "redovisning", fran: "2027-01-15", till: "2027-02-15", text: "Redovisning av faktiska lokalkostnader för 2026.", ungefar: false },
      { typ: "ansokan", fran: "2026-10-15", till: "2026-11-16", text: "Ansökan om bidrag för beräknade lokalkostnader 2027, i e-tjänsten för statsbidrag.", ungefar: false },
      { typ: "beslut", fran: null, till: null, text: "Beslut i början av 2027.", ungefar: false },
      { typ: "utbetalning", fran: null, till: null, text: "Utbetalning i mars, juni, september och december 2027.", ungefar: false },
      { typ: "redovisning", fran: "2028-01-15", till: "2028-02-15", text: "Redovisning av faktiska lokalkostnader för 2027.", ungefar: false }
    ],
    belopp: "50 procent av årskostnaden för de lokaler som behövs för utbildningen av utlandssvenska elever. Bidraget justeras i efterhand mot de faktiska kostnaderna.",
    villkor: [
      "Skolan ska vara godkänd som svensk utlandsskola.",
      "Bidrag ges för bland annat hyra av nödvändiga lokaler, drift (värme, ventilation, el, städning, vatten), fastighetsskatt, försäkring, löpande underhåll, arrende och ibland bevakning.",
      "Ränta och avskrivning på egen skolbyggnad ersätts bara för delar som staten har godkänt.",
      "Bidrag ges inte för åtgärder som förbättrar eller förändrar lokalerna markant."
    ],
    hurDuGor: [
      "Räkna fram de beräknade lokalkostnaderna för nästa år.",
      "Fyll i ansökningsblanketten som publiceras 15 oktober och ansök 15 oktober–16 november 2026 i e-tjänsten.",
      "Spara fakturor och avtal under året.",
      "Redovisa de faktiska kostnaderna 15 januari–15 februari året efter. Oväntade underhållskostnader tar ni med då."
    ],
    redovisning: "Skolan redovisar sina faktiska lokalkostnader året efter bidragsåret, 15 januari–15 februari. Bidraget stäms av mot de faktiska kostnaderna. Blanketten publiceras senast 15 januari.",
    fallgropar: [
      "Att söka för ombyggnad eller förbättring – bara löpande underhåll ersätts.",
      "Att räkna med lokaler som inte används för utbildningen av utlandssvenska elever."
    ],
    nyckelord: ["utlandsskola", "lokalbidrag", "hyra", "skollokaler", "svensk skola utomlands", "utlandsundervisning"],
    kallor: [
      { titel: "Skolverket: Statsbidrag till lokalkostnader till svenska utlandsskolor 2027", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-till-lokalkostnader-till-svenska-utlandsskolor-2027" },
      { titel: "Skolverket: Statsbidrag till lokalkostnader till svenska utlandsskolor 2026", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-till-lokalkostnader-till-svenska-utlandsskolor-2026" },
      { titel: "Riksrevisionen: Statsbidrag till svenska utlandsskolor – ett föråldrat och ineffektivt system (2026)", url: "https://www.riksrevisionen.se/granskningar/granskningsrapporter/2026/statsbidrag-till-svenska-utlandsskolor---ett-foraldrat-och-ineffektivt-system.html" }
    ],
    senastKontrollerad: "2026-09-25",
    osakerhet: "Riksrevisionen föreslog i juni 2026 bland annat att det separata lokalbidraget kan tas bort. Inget är beslutat."
  },
  {
    id: "handledning-distans-utlandssvenska",
    namn: "Statsbidrag till handledning åt utlandssvenska elever vid distansundervisning",
    kortnamn: "Handledning vid distansstudier utomlands",
    myndighet: "Skolverket",
    giltighet: "aktiv",
    sammanfattning: "Bidrag till den som på plats utomlands handleder utlandssvenska elever i årskurs 6–9 eller gymnasiet som läser svensk skola på distans, till exempel en svensk utlandsskola.",
    syfte: "Att utlandssvenska elever som läser på distans ska få stöd och handledning på plats, så att de klarar sina studier.",
    omraden: ["internationellt"],
    skolformer: ["grundskola", "gymnasieskola"],
    sokande: { fristaende: "villkor", kommun: "nej", region: "nej", stat: "nej", ovriga: "villkor" },
    sokandeNot: "Den huvudman som ordnar handledning åt elever som läser på distans kan söka, i praktiken oftast svenska utlandsskolor. Vanliga skolor i Sverige kan inte söka. Vårdnadshavare kan inte söka själva.",
    typ: "ansokan",
    perioder: [
      { typ: "ansokan", fran: "2026-10-15", till: "2026-11-16", text: "Ansökan för 2027. Från 2027 görs ansökan i e-tjänsten för statsbidrag.", ungefar: false },
      { typ: "beslut", fran: null, till: null, text: "Beslut i början av 2027.", ungefar: false }
    ],
    belopp: "Skolverkets sida anger inget belopp. Bidraget är ett allmänt stöd som huvudmannen själv bestämmer hur det används.",
    villkor: [
      "Eleverna ska vara utlandssvenska och läsa årskurs 6–9 eller gymnasiet på distans.",
      "Bidraget regleras av förordning (1994:519) om statsbidrag till utbildning av utlandssvenska barn och ungdomar."
    ],
    hurDuGor: [
      "Fyll i ansökningsblanketten.",
      "Se till att ni har behörighet i Skolverkets e-tjänst för statsbidrag.",
      "Ansök 15 oktober–16 november 2026. Elevunderlag behöver inte skickas in direkt – Skolverket begär komplettering vid behov."
    ],
    redovisning: "Ingen särskild redovisning beskrivs på Skolverkets sida.",
    fallgropar: [
      "Att tro att en skola i Sverige kan söka – bidraget gäller handledning utomlands.",
      "Att missa att ansökan från 2027 görs i e-tjänsten i stället för som tidigare."
    ],
    nyckelord: ["handledning", "distansstudier", "utlandssvensk", "svensk skola utomlands", "Sofia distans", "Hermods", "utlandsskola"],
    kallor: [
      { titel: "Skolverket: Statsbidrag till handledning åt utlandssvenska elever vid distansundervisning 2027", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-till-handledning-at-utlandssvenska-elever-vid-distansundervisning-2027" },
      { titel: "Skolverket: Statsbidrag till handledning åt utlandssvenska elever vid distansundervisning 2026", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-till-handledning-at-utlandssvenska-elever-vid-distansundervisning-2026" }
    ],
    senastKontrollerad: "2026-09-25",
    osakerhet: "Beloppet och hur det räknas ut framgår inte av Skolverkets sida."
  },
  {
    id: "kompletterande-svensk-undervisning",
    namn: "Statsbidrag för kompletterande svensk undervisning",
    kortnamn: "Kompletterande svenska utomlands",
    myndighet: "Skolverket",
    giltighet: "aktiv",
    sammanfattning: "Bidrag till undervisning i svenska för barn som bor utomlands och går i en vanlig utländsk skola, till exempel svenskundervisning på eftermiddagar genom en svensk skolförening.",
    syfte: "Att svenska barn och unga som bor utomlands ska kunna behålla och utveckla sin svenska när de inte går i svensk skola.",
    omraden: ["internationellt", "nyanlanda"],
    skolformer: ["grundskola", "gymnasieskola"],
    sokande: { fristaende: "villkor", kommun: "nej", region: "nej", stat: "nej", ovriga: "villkor" },
    sokandeNot: "En huvudman för kompletterande svensk undervisning (ofta en svensk skolförening utomlands) eller en svensk utlandsskola kan söka. En förening som bara har kompletterande svenska måste först godkännas av Skolverket. Skolor i Sverige kan inte söka, och vårdnadshavare kan inte söka själva.",
    typ: "ansokan",
    perioder: [
      { typ: "ansokan", fran: "2026-10-15", till: "2026-11-16", text: "Ansökan för 2027. Skolverket skickar en länk via Sefos (säker e-post) före 15 oktober, och ansökan skickas genom den.", ungefar: false },
      { typ: "beslut", fran: null, till: null, text: "Beslut under första kvartalet 2027.", ungefar: false }
    ],
    belopp: "Räknas efter antalet elever som deltar i undervisningen den 15 oktober 2026. Skolverkets sida anger inget belopp per elev.",
    villkor: [
      "En förening med bara kompletterande svenska får bidrag om minst fem elever deltar. En utlandsskola får bidrag om minst en elev deltar.",
      "Eleven får inte gå i ordinarie undervisning på en svensk utlandsskola eller i annan statligt stödd svenskundervisning.",
      "Minst en vårdnadshavare ska vara svensk medborgare och tala svenska med barnet i vardagen.",
      "Eleven ska ha grundläggande kunskaper i svenska.",
      "Bidrag ges från året eleven fyller 6 till året eleven fyller 20. För 2027 gäller elever födda 2007–2021.",
      "För en förening går pengarna till lärarlöner och undervisningsmaterial."
    ],
    hurDuGor: [
      "Om ni är en ny förening: ansök först om godkännande hos Skolverket (stadgar, styrelselista eller registreringsbevis).",
      "Räkna de elever som deltar den 15 oktober.",
      "Fyll i ansökningsblanketten för 2027.",
      "Skicka in ansökan via Sefos 15 oktober–16 november 2026.",
      "Kontrollera att bankkontot står på huvudmannen – annars behövs en fullmakt."
    ],
    redovisning: "Ingen särskild redovisningsperiod beskrivs på Skolverkets sida. Skolverket kan kontrollera i efterhand.",
    fallgropar: [
      "Att ha färre än fem elever den 15 oktober (för föreningar).",
      "Att räkna med elever som redan går i en svensk utlandsskola.",
      "Att anmäla ett privat konto utan fullmakt."
    ],
    nyckelord: ["kompletterande svenska", "svenskundervisning utomlands", "svensk skolförening", "modersmål svenska", "SUF", "svenska för barn utomlands", "expat", "utlandssvensk"],
    kallor: [
      { titel: "Skolverket: Statsbidrag för kompletterande svensk undervisning 2027", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-kompletterande-svensk-undervisning-2027" },
      { titel: "Skolverket: Statsbidrag för kompletterande svensk undervisning 2026", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-kompletterande-svensk-undervisning-2026" }
    ],
    senastKontrollerad: "2026-09-25",
    osakerhet: "Beloppet per elev framgår inte av Skolverkets sida."
  },
  {
    id: "svensk-undervisning-internationell-skola",
    namn: "Statsbidrag till svensk undervisning vid utländsk skola (internationell skola)",
    kortnamn: "Svenska sektioner utomlands",
    myndighet: "Skolverket",
    giltighet: "aktiv",
    sammanfattning: "Bidrag till svenska sektioner vid sex namngivna internationella skolor utomlands, för undervisning i svenska språket, svensk historia och samhällskunskap.",
    syfte: "Att svenska elever på vissa internationella skolor utomlands ska få undervisning i svenska och om Sverige.",
    omraden: ["internationellt"],
    skolformer: ["grundskola", "gymnasieskola"],
    sokande: { fristaende: "villkor", kommun: "nej", region: "nej", stat: "nej", ovriga: "villkor" },
    sokandeNot: "Bara sex namngivna huvudmän kan få bidraget: svenska sektionerna vid Lycée International i Saint-Germain-en-Laye (Frankrike), United Nations International School of Hanoi (Vietnam), Dubai International Academy (Förenade Arabemiraten), QSI International School of Pápa (Ungern), American School of Warsaw (Polen) och International School of Geneva (Schweiz). Andra skolor kan inte söka.",
    typ: "ansokan",
    perioder: [
      { typ: "ansokan", fran: "2026-10-15", till: "2026-11-16", text: "Ansökan för 2027 i e-tjänsten för statsbidrag (tidigare år via Excelblankett).", ungefar: true },
      { typ: "beslut", fran: null, till: null, text: "För 2026 kom beslutet i januari 2026.", ungefar: false }
    ],
    belopp: "Räknas efter ett snitt av antalet elever den 15 oktober de tre senaste åren (för 2027: 2024, 2025 och 2026). Regeringen bestämmer beloppet per elev. För 2025 var det 18 310 kr per elev.",
    villkor: [
      "Undervisningen ska gälla svenska och Sverige – svenska språket, svensk historia och samhällskunskap.",
      "Minst en vårdnadshavare ska vara svensk medborgare.",
      "För skolorna i Genève och Warszawa ska familjen också använda svenska i vardagen, och undervisningen ska i huvudsak följa svenska kurs- och ämnesplaner."
    ],
    hurDuGor: [
      "Kontrollera att er huvudman finns med bland de sex godkända.",
      "Se till att ni har behörighet i Skolverkets e-tjänst för statsbidrag.",
      "Räkna antalet elever den 15 oktober.",
      "Ansök i e-tjänsten under ansökningsperioden."
    ],
    redovisning: "Ingen särskild redovisning beskrivs på Skolverkets sida.",
    fallgropar: [
      "Att tro att andra internationella skolor kan söka – bara de sex namngivna kan få bidraget."
    ],
    nyckelord: ["svensk sektion", "internationell skola", "svenska utomlands", "Genève", "Warszawa", "Paris", "Dubai", "Hanoi", "Pápa", "utlandssvensk"],
    kallor: [
      { titel: "Skolverket: Statsbidrag till svensk undervisning vid utländsk skola (internationell skola) 2027", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-till-svensk-undervisning-vid-utlandsk-skola-internationell-skola-2027" },
      { titel: "Skolverket: Statsbidrag till svensk undervisning vid utländsk skola (internationell skola) 2026", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-till-svensk-undervisning-vid-utlandsk-skola-internationell-skola-2026" }
    ],
    senastKontrollerad: "2026-09-25",
    osakerhet: "Skolverkets sida för 2027 anger ansökan 15 oktober–16 november 2027, vilket troligen är ett skrivfel för 2026 (omgången för 2026 söktes hösten 2025, och övriga utlandsskolebidrag för 2027 söks 15 oktober–16 november 2026). Vi har därför angett 2026 och markerat datumet som ungefärligt. Kontrollera med Skolverket."
  },
  {
    id: "kpu-forskarniva",
    namn: "Statsbidrag för kompletterande pedagogisk utbildning på forskarnivå",
    kortnamn: "KPU för forskarutbildade",
    myndighet: "Skolverket",
    giltighet: "aktiv",
    sammanfattning: "Pengar till Stockholms universitet för utbildningsbidrag till personer med doktorsexamen som läser en särskild kompletterande pedagogisk utbildning (KPU) för att bli ämneslärare.",
    syfte: "Att fler med forskarexamen ska bli lärare. Deltagarna får ett utbildningsbidrag under studietiden.",
    omraden: ["kompetens", "personal"],
    skolformer: ["grundskola", "gymnasieskola"],
    sokande: { fristaende: "nej", kommun: "nej", region: "nej", stat: "villkor", ovriga: "nej" },
    sokandeNot: "Det går inte att ansöka. Bara Stockholms universitet, som samordnar utbildningen, kan begära ut pengarna. Skolor och huvudmän kan inte söka. Den som har en doktorsexamen och vill bli lärare kan i stället söka utbildningen och få utbildningsbidrag.",
    typ: "rekvisition",
    perioder: [
      { typ: "rekvisition", fran: "2026-09-01", till: "2026-09-15", text: "Begäran om utbetalning av höstens pengar 2026 (stängd).", ungefar: false },
      { typ: "redovisning", fran: "2027-01-01", till: "2027-01-15", text: "Redovisning av hur 2026 års pengar har använts. Outnyttjade pengar ska betalas tillbaka senast 3 februari 2027.", ungefar: false },
      { typ: "rekvisition", fran: "2027-02-01", till: "2027-02-15", text: "Begäran om utbetalning av vårens pengar 2027, uppskattad utifrån 2026.", ungefar: true },
      { typ: "rekvisition", fran: "2027-09-01", till: "2027-09-15", text: "Begäran om utbetalning av höstens pengar 2027, uppskattad utifrån 2026.", ungefar: true }
    ],
    belopp: "Bestäms i Skolverkets regleringsbrev för varje år. Skolverkets sida anger inget belopp.",
    villkor: [
      "Pengarna ska gå till utbildningsbidrag till studenter på KPU som leder till ämneslärarexamen för personer med examen på forskarnivå.",
      "Pengar som inte används ska betalas tillbaka."
    ],
    hurDuGor: [
      "Är du forskarutbildad och vill bli lärare: sök KPU för forskarutbildade vid de lärosäten som ger utbildningen.",
      "Lärosätet (Stockholms universitet) begär ut pengarna två gånger per år i Skolverkets e-tjänst.",
      "Stockholms universitet redovisar i januari året efter."
    ],
    redovisning: "Stockholms universitet redovisar hur pengarna har använts 1–15 januari året efter och betalar tillbaka outnyttjade pengar senast i början av februari.",
    fallgropar: [
      "Att tro att en skola kan söka bidraget – det går bara till Stockholms universitet."
    ],
    nyckelord: ["KPU", "kompletterande pedagogisk utbildning", "doktor", "forskarutbildad", "bli lärare", "ämneslärarexamen", "lärarutbildning", "utbildningsbidrag"],
    kallor: [
      { titel: "Skolverket: Statsbidrag för kompletterande pedagogisk utbildning på forskarnivå 2026", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-kompletterande-pedagogisk-utbildning-pa-forskarniva-2026" }
    ],
    senastKontrollerad: "2026-09-25",
    osakerhet: "Datumen för 2027 är uppskattade utifrån 2026. Beloppet framgår inte av Skolverkets sida."
  }
);
