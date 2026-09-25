/* Statsbidrag för gymnasieskola, anpassad gymnasieskola och komvux (inkl. sfi och anpassad komvux).
   Källor kontrollerade 2026-09-25 på skolverket.se och spsm.se. */
window.SB_GRANTS = window.SB_GRANTS || [];
window.SB_GRANTS.push(

  /* ------------------------------------------------------------------ */
  {
    id: "gymnasial-larlingsutbildning",
    namn: "Statsbidrag för gymnasial lärlingsutbildning",
    kortnamn: "Lärlingar på gymnasiet",
    myndighet: "Skolverket",
    giltighet: "aktiv",
    sammanfattning: "Pengar per lärlingselev och termin som skolan för vidare till arbetsplatsen där eleven lär sig yrket. Gäller lärlingar på gymnasiet, i anpassade gymnasieskolan och lärlingsliknande utbildning på introduktionsprogram.",
    syfte: "Bidraget ska göra det lättare för skolor att ordna lärlingsutbildning, locka fler arbetsgivare att ta emot lärlingar och få fler handledare på arbetsplatserna att gå en handledarutbildning.",
    omraden: ["yrke"],
    skolformer: ["gymnasieskola", "anpassad-gymnasieskola"],
    sokande: { fristaende: "ja", kommun: "ja", region: "villkor", stat: "nej", ovriga: "nej" },
    sokandeNot: "Både kommunala och fristående huvudmän (den som driver skolan) kan söka, om de har lärlingsutbildning i gymnasieskolan eller anpassade gymnasieskolan, eller lärlingsliknande utbildning på introduktionsprogram. Huvudmannen skickar en samlad ansökan för alla sina elever. Pengarna går via skolan men ska i sin helhet betalas vidare till arbetsgivaren.",
    typ: "ansokan",
    perioder: [
      { typ: "ansokan", fran: "2026-10-01", till: "2026-11-02", text: "Ansökan för hösten 2026 (ansökan 2) i Skolverkets e-tjänst. Utbildningskontrakt ska vara klara senast 15 oktober 2026.", ungefar: false },
      { typ: "utbetalning", fran: null, till: null, text: "Skolverket betalar ut veckan efter beslut. Skolan ska sedan betala vidare till arbetsgivaren inom tre månader.", ungefar: false },
      { typ: "ansokan", fran: "2027-03-01", till: "2027-04-01", text: "Ansökan för våren 2027 (ansökan 1). Utbildningskontrakt ska vara klara senast 15 februari 2027.", ungefar: false },
      { typ: "redovisning", fran: "2027-04-15", till: "2027-05-17", text: "Redovisning av hela bidragsåret 2026 (vår och höst samtidigt).", ungefar: false },
      { typ: "ansokan", fran: "2027-10-01", till: "2027-11-01", text: "Ansökan för hösten 2027 (ansökan 2).", ungefar: false },
      { typ: "redovisning", fran: "2028-04-15", till: "2028-05-15", text: "Redovisning av bidragsåret 2027.", ungefar: false }
    ],
    belopp: "Högst 18 750 kr per elev och termin till arbetsgivaren, plus högst 5 000 kr om handledaren har gått en godkänd handledarutbildning och högst 2 500 kr om eleven har en lärlingsanställning. Om fler söker än pengarna räcker till minskas alla belopp lika mycket. För 2026 finns 482 miljoner kr (241 miljoner per termin). Våren 2026 fick 150 huvudmän bidrag, men beloppen blev lägre än maxbeloppen.",
    villkor: [
      "Varje elev ska ha ett skriftligt utbildningskontrakt (avtal mellan elev, skola och arbetsplats) senast 15 februari för våren och 15 oktober för hösten.",
      "Hela bidraget till arbetsgivare och för handledare ska betalas vidare till arbetsgivaren inom tre månader efter att skolan fått pengarna.",
      "Arbetsplatsen ska vara godkänd för F-skatt (utländska arbetsplatser visar motsvarande intyg).",
      "Handledarbidrag kan bara sökas om handledaren redan har slutfört en handledarutbildning som följer Skolverkets krav.",
      "Eleven ska ha rätt studievägskod (ett L eller A på sjunde plats) – samma kod som rapporteras till CSN.",
      "Huvudmannen får inte ha skulder hos Kronofogden eller obetalda återkrav, och samma kostnad får inte få annat statsbidrag."
    ],
    hurDuGor: [
      "Se till att den som ska söka har behörighet i Skolverkets e-tjänst för statsbidrag.",
      "Skriv utbildningskontrakt för varje lärlingselev före 15 oktober (höst) eller 15 februari (vår).",
      "Samla personnummer, skolenhet, årskurs och studievägskod för varje elev, arbetsplatsens organisationsnummer och uppgift om handledarens utbildning.",
      "Kontrollera att arbetsplatsen är godkänd för F-skatt.",
      "Sök i e-tjänsten under ansökningsperioden.",
      "Betala ut pengarna till arbetsgivarna inom tre månader och spara kvitton och fakturor.",
      "Redovisa i april–maj året efter hur mycket som betalats ut till arbetsgivarna."
    ],
    redovisning: "Varje vår redovisar huvudmannen föregående bidragsår (vår och höst tillsammans): hur mycket av bidraget som betalats ut till arbetsgivarna. Pengar som inte betalats ut krävs tillbaka. Skolverket kan också göra stickprov och begära in kontrakt, fakturor och intyg om handledarutbildning.",
    fallgropar: [
      "Kontraktet skrevs efter 15 oktober/15 februari – då ger eleven inget bidrag den terminen.",
      "Pengarna betalas inte vidare till arbetsgivaren inom tre månader och krävs tillbaka.",
      "Handledaren har bara påbörjat handledarutbildningen – bidraget för utbildad handledare kan då inte sökas.",
      "Fel studievägskod för eleven.",
      "Skolan sätter egna villkor för hur arbetsgivaren ska använda pengarna – det får skolan inte göra.",
      "Arbetsgivaren glömmer att bidraget är en skattepliktig intäkt för företaget."
    ],
    nyckelord: ["lärling", "lärlingsutbildning", "gymnasielärling", "lärlingsersättning", "APL", "arbetsplatsförlagt lärande", "praktik gymnasiet", "handledare", "handledarutbildning", "lärlingsanställning", "utbildningskontrakt", "introduktionsprogram", "yrkesintroduktion", "yrkesprogram", "arbetsgivarersättning"],
    kallor: [
      { titel: "Skolverket – Statsbidrag för gymnasial lärlingsutbildning 2026", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-gymnasial-larlingsutbildning-2026" },
      { titel: "Skolverket – Statsbidrag för gymnasial lärlingsutbildning 2027", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-gymnasial-larlingsutbildning-2027" },
      { titel: "Förordning (2011:947) om statsbidrag för gymnasial lärlingsutbildning", url: "http://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/forordning-2011947-om-statsbidrag-for_sfs-2011-947" }
    ],
    senastKontrollerad: "2026-09-25",
    osakerhet: "Skolverkets sida för 2027 anger ännu inte hur mycket pengar som finns för 2027 (den visar samma text som för 2026). Datum för beslut om höstens ansökan 2026 är inte publicerat. Skolverket nämner bara kommunala och fristående huvudmän – en region som driver gymnasieskola (t.ex. naturbruk) bör fråga Skolverket."
  },

  /* ------------------------------------------------------------------ */
  {
    id: "regionalt-yrkesvux",
    namn: "Statsbidrag för regionalt yrkesvux",
    kortnamn: "Regionalt yrkesvux",
    myndighet: "Skolverket",
    giltighet: "aktiv",
    sammanfattning: "Stort statsbidrag till kommuner som tillsammans erbjuder yrkesutbildning för vuxna inom komvux – även lärlingsutbildning, yrkesförarutbildning och yrkesutbildning kombinerad med sfi. Från 2028 får alla kommuner en fast ram.",
    syfte: "Fler vuxna ska kunna utbilda sig till ett yrke inom komvux (kommunal vuxenutbildning), och utbildningarna ska ge kompetens som arbetsgivare i regionen behöver.",
    omraden: ["yrke", "nyanlanda"],
    skolformer: ["komvux"],
    sokande: { fristaende: "via-kommun", kommun: "ja", region: "nej", stat: "nej", ovriga: "via-kommun" },
    sokandeNot: "Bara kommuner kan söka, och minst tre kommuner måste samarbeta (en kommun kan bara vara med i en samverkan). Fristående utbildningsföretag kan inte söka själva. De kan däremot vara med genom att en kommun köper utbildningen av dem (upphandling) eller godkänner dem som anordnare (auktorisation) – då är det kommunen som får och redovisar bidraget.",
    typ: "rekvisition",
    perioder: [
      { typ: "beslut", fran: null, till: null, text: "September 2026: Skolverket har beslutat bidragsramar för 2028 och 2029 – varje kommun har fått en ram. Totalt 3 miljarder kr per år.", ungefar: false },
      { typ: "redovisning", fran: "2027-01-15", till: "2027-02-15", text: "Redovisning av bidragsåret 2026 i e-tjänsten. Kommunen som skickade ansökan redovisar för hela samverkan.", ungefar: false },
      { typ: "redovisning", fran: null, till: null, text: "Redovisning av bidragsåret 2027 sker våren 2028. Exakta datum är inte klara.", ungefar: true },
      { typ: "rekvisition", fran: null, till: null, text: "Begäran om utbetalning av grundbidraget för 2028 görs gemensamt av de samverkande kommunerna. Datum är inte publicerat ännu.", ungefar: true },
      { typ: "ansokan", fran: null, till: null, text: "Ansökan om tilläggsbidrag för 2028 (för den som använt hela sitt grundbidrag). Datum är inte publicerat ännu.", ungefar: true }
    ],
    belopp: "Bidraget ges per årsstudieplats (800 poäng, kan delas mellan flera elever). Beloppen beror på yrkesområde, t.ex. 42 000 kr (barn och fritid) eller 90 000 kr (bygg, el, fordon) för vanlig yrkesutbildning, 110 000 kr för anpassad utbildning och upp till 145 000 kr för kombinationsutbildning. Plus 55 000 kr extra per årsstudieplats för elever med funktionsnedsättning som behöver omfattande stöd, och 36 000 kr för orienteringskurser. 2026 beviljades ca 3,3 miljarder kr och 2027 ca 3,4 miljarder kr. För 2028 och 2029 beräknas 3 miljarder kr per år i grundbidrag, plus tilläggsbidrag.",
    villkor: [
      "Minst tre kommuner ska planera, dimensionera och erbjuda utbildningen tillsammans.",
      "Utbudet ska planeras i samråd med arbetsgivare/branscher, regionen och Arbetsförmedlingen, och det ska finnas yrkesråd.",
      "Kommunerna ska själva betala för extra platser (medfinansiering): hittills minst 3/7 av de statsbidragsfinansierade platserna, från 2028 minst 30 procent av platserna som grundbidraget betalar.",
      "Elever som behöver ska kunna kombinera yrkesutbildningen med sfi eller svenska som andraspråk på grundläggande nivå.",
      "Från 2027 ges inte längre kombinationsbidrag för yrkesutbildning ihop med svenska som andraspråk på gymnasial nivå, eller för lärlingsutbildning kombinerad med sfi/sva.",
      "Samma utbildningsplats får inte finansieras av två statsbidrag (t.ex. inte också av bidraget för företagsetableringar).",
      "Från 2028 måste arbetsplatser som får ersättning för lärlingar vara godkända för F-skatt."
    ],
    hurDuGor: [
      "Gå ihop med minst två andra kommuner och bestäm vem som ska skicka in och redovisa för samverkan.",
      "Planera utbudet tillsammans med arbetsgivare, regionen och Arbetsförmedlingen.",
      "Kontrollera er kommuns bidragsram för 2028 och 2029 i Skolverkets beslutsbilaga.",
      "Begär ut grundbidraget gemensamt när Skolverket öppnar begäran om utbetalning, och sök tilläggsbidrag om ni behöver fler platser.",
      "Registrera elevernas kurser, poäng och utbildningsform löpande – det behövs i redovisningen.",
      "Spara avtal med upphandlade eller auktoriserade anordnare i minst fem år."
    ],
    redovisning: "Den kommun som ansökt redovisar för hela samverkan, i två Excel-blanketter i e-tjänsten: personnummer för varje elev, kurs- eller ämneskoder, poäng, utbildningsform, ersättning till arbetsplatser och handledning samt medfinansiering. Bidragsår 2026 redovisas 15 januari–15 februari 2027. Pengar som inte använts enligt reglerna kan krävas tillbaka.",
    fallgropar: [
      "Kommunen försöker vara med i två olika samverkansgrupper – det går inte.",
      "Medfinansieringen (de platser kommunerna själva ska betala) blir inte uppfylld.",
      "Kurser som inte står på Skolverkets kurs- och ämneslistor ger inget bidrag.",
      "Underlag för extra stöd till elever med funktionsnedsättning saknas vid en kontroll.",
      "Reglerna ändras både 2027 och 2028 – gamla kombinationsupplägg kan sluta ge bidrag."
    ],
    nyckelord: ["yrkesvux", "regionalt yrkesvux", "komvux", "vuxenutbildning", "yrkesutbildning vuxna", "lärlingsvux", "lärling vuxen", "kombinationsutbildning", "sfi och yrke", "yrkessfi", "yrkesförare", "lastbilsförare", "busschaufför", "orienteringskurs", "omskolning"],
    kallor: [
      { titel: "Skolverket – Statsbidrag för regionalt yrkesvux 2026", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-regionalt-yrkesvux-2026" },
      { titel: "Skolverket – Statsbidrag för regionalt yrkesvux 2027", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-regionalt-yrkesvux-2027" },
      { titel: "Skolverket – Statsbidrag för regionalt yrkesvux 2028–2029", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-regionalt-yrkesvux-2028-2029" },
      { titel: "Förordning (2016:937) om statsbidrag för regional yrkesinriktad vuxenutbildning", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-2016937-om-statsbidrag-for-regional_sfs-2016-937/" }
    ],
    senastKontrollerad: "2026-09-25",
    osakerhet: "Bidraget byggs om från 2028 (grundbidrag + tilläggsbidrag). Skolverket skriver att mer information kommer under hösten 2026, och datum för begäran om utbetalning och ansökan om tilläggsbidrag är ännu inte publicerade. Beloppen för 2028–2029 är preliminära. Lärlingsvux och yrkesutbildning kombinerad med sfi har inga egna statsbidrag längre – de ingår här."
  },

  /* ------------------------------------------------------------------ */
  {
    id: "sma-och-dyra-yrkesomraden",
    namn: "Statsbidrag för små och dyra yrkesområden",
    kortnamn: "Små och dyra yrkesutbildningar",
    myndighet: "Skolverket",
    giltighet: "ny",
    sammanfattning: "Nytt bidrag per elev för gymnasieskolor som köper yrkesundervisning av någon annan (entreprenad) inom yrken där det behövs arbetskraft men utbildningen är dyr eller har få elever.",
    syfte: "Att det ska gå att erbjuda yrkesutbildningar som landet behöver, även när de kräver särskilda lokaler och dyr utrustning eller har för få elever för att en skola ska klara dem själv.",
    omraden: ["yrke"],
    skolformer: ["gymnasieskola", "anpassad-gymnasieskola"],
    sokande: { fristaende: "ja", kommun: "ja", region: "villkor", stat: "ja", ovriga: "ja" },
    sokandeNot: "Kommunala, fristående, statliga och övriga huvudmän för gymnasieskola och anpassad gymnasieskola kan söka – men bara om de redan har ett avtal om att lämna över en del av undervisningen på entreprenad (någon annan utför undervisningen åt skolan). Det är skolans huvudman som söker, inte företaget eller skolan som utför undervisningen.",
    typ: "ansokan",
    perioder: [
      { typ: "ansokan", fran: null, till: null, text: "Ansökan för läsåret 2026/27 öppnar hösten 2026 i e-tjänsten. Skolverket skriver att datum kommer inom kort.", ungefar: true },
      { typ: "beslut", fran: null, till: "2026-11-30", text: "Skolverket planerar att besluta senast i november 2026.", ungefar: true },
      { typ: "utbetalning", fran: null, till: null, text: "Utbetalning senast december 2026 och maj 2027.", ungefar: true },
      { typ: "redovisning", fran: "2027-09-01", till: "2027-09-15", text: "Planerad redovisning i e-tjänsten (bl.a. elevernas kön, program, skolor och hur många som fått jobb inom yrket).", ungefar: true }
    ],
    belopp: "Fast belopp per elev och läsår: 35 000 kr för yrkesämnen inom t.ex. barn och fritid, försäljning och service, hotell och turism samt vård och omsorg; 75 000 kr inom t.ex. bygg, el och energi, fordon, industri, naturbruk, restaurang och VVS, och för riksrekryterande yrkesutbildningar. Motsvarande nivåer finns för anpassad gymnasieskola. Totalt 20 miljoner kr för 2026/27 – räcker inte pengarna minskas beloppen lika för alla.",
    villkor: [
      "Avtalet om undervisning på entreprenad måste redan vara klart – planerade avtal räcker inte.",
      "Yrkesområdet ska ha nationell brist på arbetskraft och utbildningen ska vara dyr (särskilda lokaler, material, utrustning) eller ha litet elevunderlag.",
      "Den som utför undervisningen ska kunna följa reglerna för utbildningen och vara rekommenderad av det nationella programrådet (eller, om sådant saknas, samarbeta med branschens arbetsgivare).",
      "Inget bidrag till huvudman med skulder hos Kronofogden, i konkurs, med näringsförbud eller som fått sitt godkännande återkallat.",
      "Samma kostnad får inte få annat statsbidrag."
    ],
    hurDuGor: [
      "Kontrollera att ni har ett skrivet entreprenadavtal för yrkesundervisningen.",
      "Kontrollera att utföraren är rekommenderad av programrådet för yrkesområdet.",
      "Samla skolform, skolenhetskod, studievägskod, program och yrkesområde för varje elev.",
      "Skriv varför utbildningen räknas som litet och dyrt yrkesområde och om den är riksrekryterande.",
      "Håll koll på Skolverkets sida – ansökan öppnar hösten 2026 – och sök i e-tjänsten.",
      "Följ upp hur många elever som fått jobb inom yrket; det ska redovisas i september 2027."
    ],
    redovisning: "Planerad redovisning 1–15 september 2027: elevernas kön, program och inriktningar, vilka skolor eleverna gått på och hur många som efter examen jobbar inom yrkesområdet. Frågorna är preliminära.",
    fallgropar: [
      "Söka för undervisning som man bara planerar att lägga ut på entreprenad.",
      "Utföraren saknar rekommendation från det nationella programrådet.",
      "Missa ansökan – datumen var inte publicerade i september 2026 och kan bli korta."
    ],
    nyckelord: ["dyra yrkesutbildningar", "små yrkesområden", "entreprenad", "köpa undervisning", "yrkesprogram", "utrustning", "bristyrken", "riksrekryterande yrkesutbildning", "naturbruk", "fordon", "industri", "programråd"],
    kallor: [
      { titel: "Skolverket – Statsbidrag för små och dyra yrkesområden 2026/27", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-sma-och-dyra-yrkesomraden-2026-27" },
      { titel: "Förordning (2026:1751) om statsbidrag för undervisning på entreprenad inom små och dyra yrkesområden", url: "https://svenskforfattningssamling.se/sites/default/files/sfs/2026-09/SFS2026-1751.pdf" }
    ],
    senastKontrollerad: "2026-09-25",
    osakerhet: "Helt nytt bidrag (förordning från september 2026). Ansökningsdatum var inte publicerade när vi kontrollerade; besluts-, utbetalnings- och redovisningstider är Skolverkets planering. Regioner nämns inte uttryckligen bland de sökande. Om bidraget fortsätter efter 2026/27 är inte klart."
  },

  /* ------------------------------------------------------------------ */
  {
    id: "fjarde-tekniskt-ar",
    namn: "Statsbidrag för fjärde tekniskt år",
    kortnamn: "Fjärde tekniskt år (gymnasieingenjör)",
    myndighet: "Skolverket",
    giltighet: "aktiv",
    sammanfattning: "Bidrag per elev till gymnasieskolor med teknikprogram som erbjuder ett extra fjärde år, där eleven blir gymnasieingenjör.",
    syfte: "Att fler gymnasieskolor ska kunna erbjuda ett yrkesinriktat fjärde år efter teknikprogrammet, så att elever kan gå direkt ut i arbete som gymnasieingenjörer.",
    omraden: ["yrke"],
    skolformer: ["gymnasieskola"],
    sokande: { fristaende: "ja", kommun: "ja", region: "villkor", stat: "nej", ovriga: "nej" },
    sokandeNot: "Huvudmän (den som driver skolan) för gymnasieskolor med teknikprogram kan söka – både kommunala och fristående. Man söker för en eller flera bestämda skolenheter och måste ha ett yttrande från skolans lokala programråd (samarbetsgrupp med arbetslivet).",
    typ: "ansokan",
    perioder: [
      { typ: "rekvisition", fran: "2026-09-15", till: "2026-10-15", text: "Begäran om utbetalning för läsåret 2026/27 (för dem som redan beviljats). Ange inskrivna elever och kostnader.", ungefar: false },
      { typ: "beslut", fran: null, till: null, text: "Beslut om ansökan för läsåret 2027/28 (ansökan var öppen 1 april–4 maj 2026). Tidigare år kom beslut i augusti–september.", ungefar: true },
      { typ: "ansokan", fran: "2027-04-01", till: "2027-05-04", text: "Ansökan för läsåret 2028/29 väntas öppna i april 2027, som tidigare år.", ungefar: true },
      { typ: "rekvisition", fran: "2027-09-15", till: "2027-10-15", text: "Begäran om utbetalning för läsåret 2027/28 väntas i september–oktober 2027, som tidigare år.", ungefar: true }
    ],
    belopp: "Högst 138 350 kr per elev och läsår 2026/27 och högst 166 150 kr per elev och läsår 2027/28. Anslaget för 2026 är 119,2 miljoner kr.",
    villkor: [
      "Utbildningen ska bygga vidare på teknikprogrammet men vara ett eget år på 900 gymnasiepoäng, indelat i nationella profiler.",
      "Ansökan ska bygga på en elevprognos (undersökning av hur många elever som vill gå utbildningen).",
      "Yttrande från det lokala programrådet krävs för varje skolenhet.",
      "Huvudmannen ska följa skollagen och förordning (2014:854) om fjärde tekniskt år.",
      "Bidrag ges inte om utbildningen redan ersätts på annat sätt eller bedrivs som uppdragsutbildning."
    ],
    hurDuGor: [
      "Gör en elevprognos och skriv en kort rapport om resultatet.",
      "Planera profiler, antal elever, lärare, kostnader och platser för arbetsplatsförlagt lärande (apl).",
      "Be det lokala programrådet skriva ett yttrande om ansökan.",
      "Sök i Skolverkets e-tjänst i april–maj för läsåret som börjar drygt ett år senare.",
      "Om ni beviljas: begär ut pengarna varje höst (15 september–15 oktober) med antal inskrivna elever och kostnader."
    ],
    redovisning: "Vid begäran om utbetalning varje höst lämnar huvudmannen antal inskrivna elever per profil och kostnader för personal, lokaler, läromedel, administration och övrigt. Skolverket kan göra stickprov, bl.a. på elevprognoser.",
    fallgropar: [
      "Glömma att begära ut pengarna i september–oktober – beviljat bidrag betalas inte ut automatiskt.",
      "Söka fler platser än elevprognosen kan motivera.",
      "Ta med kostnader som inte godtas, t.ex. arbetskläder, extra försäkringar eller marknadsföring."
    ],
    nyckelord: ["TE4", "fjärde tekniskt år", "gymnasieingenjör", "teknikprogrammet", "vidareutbildning", "teknikcollege", "ingenjör gymnasiet"],
    kallor: [
      { titel: "Skolverket – Statsbidrag för fjärde tekniskt år", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-fjarde-tekniskt-ar" },
      { titel: "Förordning (2014:854) om vidareutbildning i form av ett fjärde tekniskt år och statsbidrag för sådan utbildning", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-2014854-om-vidareutbildning-i-form_sfs-2014-854/" }
    ],
    senastKontrollerad: "2026-09-25",
    osakerhet: "Beslutet om ansökan för 2027/28 var inte publicerat på Skolverkets sida när vi kontrollerade. Datum för 2027 års ansökan och begäran om utbetalning är uppskattade från tidigare år. Förordningen säger ”huvudman inom gymnasieskolan”; regioner nämns inte särskilt."
  },

  /* ------------------------------------------------------------------ */
  {
    id: "foretagsetableringar-komvux",
    namn: "Statsbidrag för företagsetableringar och nedläggningar",
    kortnamn: "Yrkesvux vid nya eller nedlagda företag",
    myndighet: "Skolverket",
    giltighet: "aktiv",
    sammanfattning: "Pengar till kommuner som ordnar yrkesutbildning för vuxna inom komvux när ett stort företag etablerar sig, växer, drar ner eller lägger ner i eller nära kommunen.",
    syfte: "Att vuxna snabbt ska kunna utbilda sig till de jobb som behövs när ett stort företag kommer till orten, eller byta yrke när ett stort företag försvinner.",
    omraden: ["yrke"],
    skolformer: ["komvux"],
    sokande: { fristaende: "via-kommun", kommun: "ja", region: "nej", stat: "nej", ovriga: "via-kommun" },
    sokandeNot: "Bara kommuner som anordnar komvux på gymnasial nivå kan söka – den kommun som ordnar utbildningen, även om eleven bor någon annanstans. Fristående utbildningsföretag kan inte söka själva, men kan utföra utbildningen om kommunen köper den av dem.",
    typ: "ansokan",
    perioder: [
      { typ: "ansokan", fran: null, till: null, text: "Extra ansökan för 2026 pågår: det finns pengar kvar och ansökningar hanteras i turordning tills pengarna tar slut. Mejla statsbidrag.foretagsetableringar@skolverket.se.", ungefar: false },
      { typ: "ansokan", fran: "2026-11-01", till: "2026-12-01", text: "Ordinarie ansökan för 2027 väntas i november, som förra året (1 november–1 december 2025). Ingen sida för 2027 fanns publicerad ännu.", ungefar: true },
      { typ: "redovisning", fran: "2027-01-15", till: "2027-02-15", text: "Redovisning av bidragsåret 2026: vilka utbildningar pengarna gått till och elevunderlaget.", ungefar: false }
    ],
    belopp: "Inga fasta belopp per plats – kommunen söker för kostnader som är direkt kopplade till utbildningen och nödvändiga för att genomföra den. Anslaget 2026 är 125 miljoner kr; i januari 2026 beviljades cirka 107 miljoner kr. Ingen medfinansiering krävs.",
    villkor: [
      "Kommunen har, eller står inför, en stor företagsetablering, expansion, nedläggning eller neddragning – eller gränsar till (i särskilda fall ligger nära) en sådan kommun.",
      "Utbildningen ska ge kompetens som efterfrågas på grund av förändringen, men behöver inte bara gälla det specifika företaget.",
      "Utbildningen ska planeras tillsammans med arbetslivet och i samråd med berörd kommun/län och Arbetsförmedlingen.",
      "Sökande från hela landet ska kunna antas.",
      "Inte för utbildning som redan får annat statsbidrag (t.ex. regionalt yrkesvux), uppdragsutbildning eller utbildning som kommunen får interkommunal ersättning för."
    ],
    hurDuGor: [
      "Beskriv företagsförändringen och vilka kompetenser som behövs.",
      "Planera utbildningen tillsammans med arbetsgivare och branscher, och samråd med Arbetsförmedlingen.",
      "Räkna fram kostnaderna och motivera varför de behövs för utbildningen.",
      "För 2026: mejla Skolverket om extra ansökan. För 2027: bevaka ansökan som väntas i november 2026.",
      "Redovisa utbildningar och elever i januari–februari året efter."
    ],
    redovisning: "Kommunen redovisar vilka utbildningar bidraget använts till och elevunderlaget. Bidragsår 2026 redovisas 15 januari–15 februari 2027 i e-tjänsten.",
    fallgropar: [
      "Samma utbildningsplats finansieras också med regionalt yrkesvux – dubbelfinansiering är inte tillåten.",
      "Kostnader som inte tydligt hör till utbildningen.",
      "Utbildningen stängs för sökande från andra delar av landet."
    ],
    nyckelord: ["företagsetablering", "nyetablering", "varsel", "nedläggning", "omställning", "batterifabrik", "yrkesvux", "komvux", "vuxenutbildning", "omskolning", "industrisatsning"],
    kallor: [
      { titel: "Skolverket – Statsbidrag för företagsetableringar och nedläggningar 2026", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-foretagsetableringar-och-nedlaggningar-2026" },
      { titel: "Förordning (2023:603) om statsbidrag för yrkesinriktad vuxenutbildning vid företagsetableringar m.m.", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/rubriken-upphor-att-galla-u2025-08-01_sfs-2023-603/" }
    ],
    senastKontrollerad: "2026-09-25",
    osakerhet: "Ingen sida för bidragsåret 2027 var publicerad. Ansökningstiden för 2027 är en uppskattning utifrån förra årets mönster, och det är inte bekräftat att det blir en omgång 2027."
  },

  /* ------------------------------------------------------------------ */
  {
    id: "larcentrum",
    namn: "Statsbidrag för lärcentrum",
    kortnamn: "Lärcentrum för vuxna",
    myndighet: "Skolverket",
    giltighet: "aktiv",
    sammanfattning: "Pengar till kommuner som tillsammans startar eller utvecklar lärcentrum – en plats där vuxna som studerar får stöd av lärare och kan träffa andra studerande.",
    syfte: "Att fler vuxna ska kunna studera och klara sina studier, oavsett var de bor – inom komvux, yrkeshögskola, högskola eller annan utbildning.",
    omraden: ["likvardighet", "ovrigt"],
    skolformer: ["komvux"],
    sokande: { fristaende: "nej", kommun: "ja", region: "nej", stat: "nej", ovriga: "nej" },
    sokandeNot: "Kommuner och kommunalförbund med komvux kan söka. Minst två kommuner ska söka tillsammans (en kommun kan få söka ensam om det finns särskilda skäl). Fristående utbildningsföretag kan inte söka, men deras elever kan använda ett lärcentrum.",
    typ: "ansokan",
    perioder: [
      { typ: "ansokan", fran: "2026-09-01", till: "2026-10-01", text: "Ansökan för bidragsåret 2027 är öppen i e-tjänsten.", ungefar: false },
      { typ: "redovisning", fran: "2027-01-01", till: "2027-02-01", text: "Redovisning av bidragsåret 2026.", ungefar: false },
      { typ: "beslut", fran: null, till: null, text: "Beslut för 2027 väntas i januari 2027 (förra året 21 januari).", ungefar: true },
      { typ: "utbetalning", fran: null, till: null, text: "Förra året betalades pengarna ut i två delar, i februari och september.", ungefar: true },
      { typ: "redovisning", fran: "2028-01-01", till: "2028-02-01", text: "Redovisning av bidragsåret 2027.", ungefar: false }
    ],
    belopp: "Kommunerna söker för kostnaderna för sina insatser. 2026 fanns 50 miljoner kr; 48 ansökningar sökte sammanlagt 169 miljoner kr och 25 huvudmän fick pengar. Om ansökningarna är fler än pengarna gör Skolverket ett urval.",
    villkor: [
      "Minst två kommuner ska samverka (undantag vid särskilda skäl).",
      "Insatserna ska etablera nya eller utveckla befintliga lärcentrum och vara något utöver det kommunen redan måste erbjuda.",
      "Lärcentrumet ska ge stöd från lärare och annan personal och vara en mötesplats för studerande.",
      "Bidraget får inte gå till kostnader som redan får annat bidrag."
    ],
    hurDuGor: [
      "Hitta minst en samarbetskommun och bestäm vem som skickar in ansökan.",
      "Beskriv insatserna och hur de ökar tillgången till utbildning och får fler att klara studierna.",
      "Samråd gärna med regionen (regional utvecklingsansvarig) – det väger in i bedömningen.",
      "Sök i e-tjänsten 1 september–1 oktober.",
      "Redovisa användningen i januari året efter bidragsåret."
    ],
    redovisning: "Den kommun som skickade ansökan redovisar för alla, 1 januari–1 februari året efter bidragsåret, bl.a. hur mycket som använts till varje insats.",
    fallgropar: [
      "Söka ensam utan att visa varför samarbete inte går.",
      "Söka för sådant kommunen redan är skyldig att erbjuda.",
      "Konkurrensen är hård – 2026 räckte pengarna till ungefär en tredjedel av det som söktes."
    ],
    nyckelord: ["lärcentrum", "lärcentra", "studiecentrum", "vuxenstudier", "distansstudier", "komvux", "studera på hemorten", "högskolestudier på distans", "studieplats"],
    kallor: [
      { titel: "Skolverket – Statsbidrag för lärcentrum 2026", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-larcentrum-2026" },
      { titel: "Skolverket – Statsbidrag för lärcentrum 2027", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-larcentrum-2027" },
      { titel: "Förordning (2017:1303) om statsbidrag för lärcentrum", url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/forordning-20171303-om-statsbidrag-for_sfs-2017-1303" }
    ],
    senastKontrollerad: "2026-09-25",
    osakerhet: "Hur mycket pengar som finns för 2027 anges inte på Skolverkets sida. Beslut och utbetalning för 2027 är uppskattade utifrån 2026."
  },

  /* ------------------------------------------------------------------ */
  {
    id: "lovskola",
    namn: "Statsbidrag för lovskola",
    kortnamn: "Lovskola",
    myndighet: "Skolverket",
    giltighet: "aktiv",
    sammanfattning: "Bidrag för frivillig undervisning under jullov, sportlov, påsklov, sommarlov och läslov för elever som riskerar att inte få godkänt (E). Gäller grundskola och gymnasieskola, även introduktionsprogram.",
    syfte: "Elever som inte nått, eller riskerar att inte nå, betyget E ska få extra undervisning under lov och en chans att höja sina betyg.",
    omraden: ["utokad-tid", "likvardighet"],
    skolformer: ["grundskola", "sameskola", "specialskola", "gymnasieskola"],
    sokande: { fristaende: "ja", kommun: "ja", region: "nej", stat: "ja", ovriga: "nej" },
    sokandeNot: "Kommunala, fristående och statliga huvudmän för grundskola, sameskola, specialskola och gymnasieskola kan söka. På gymnasiet gäller bidraget både nationella program och introduktionsprogram.",
    typ: "ansokan",
    perioder: [
      { typ: "beslut", fran: null, till: null, text: "Beslut om utbetalning för jullov i januari, sportlov, påsklov och sommarlov 2026 publiceras i oktober 2026.", ungefar: false },
      { typ: "rekvisition", fran: "2026-11-01", till: "2026-11-16", text: "Begäran om utbetalning för läslovet 2026 (bara för den som beviljats i ansökan).", ungefar: false },
      { typ: "beslut", fran: null, till: null, text: "Beslut om utbetalning för läslovet publiceras i december 2026.", ungefar: false },
      { typ: "ansokan", fran: "2027-01-15", till: "2027-02-15", text: "Ansökan för lov under 2027 väntas i januari–februari, som 2026 (15 januari–16 februari).", ungefar: true }
    ],
    belopp: "Schablon 300 kr per elev och dag (elevdag). Extra ersättning kan ges vid särskilda skäl. Anslaget 2026 är 112 miljoner kr; 406 huvudmän beviljades delvis bidrag. Räcker inte pengarna sänks beloppet per elevdag för alla.",
    villkor: [
      "Bara frivillig lovskola ger bidrag. I årskurs 8–9 måste den obligatoriska lovskolan (50 respektive 75 timmar) vara genomförd först.",
      "På gymnasiet: för elever som behöver nå E i ett eller flera ämnen, och för elever på introduktionsprogram som behöver lovskola för ämnen i sin studieplan.",
      "Vid sommarlovskola ska eleven ha gått i skolan det senaste läsåret – inte för elever som redan gått ut gymnasiet.",
      "Pengarna ska gå till merkostnader, t.ex. lön, mat, material, resor – inte till befintlig lokalhyra.",
      "Skolan ska ha elevlistor per lov (namn, skolenhet, årskurs, dagar och ämnen).",
      "Samma elev kan inte få både lovskola och språkstärkande insatser under skollov samma period."
    ],
    hurDuGor: [
      "Sök i e-tjänsten i januari–februari för årets lov.",
      "Ordna lovskolan och för elevlistor per lov.",
      "Räkna elevdagar (antal elever × antal dagar).",
      "Begär ut pengarna efter loven: i augusti–september för jul-, sport-, påsk- och sommarlov, i november för läslovet.",
      "Spara elevlistor och scheman om Skolverket gör en kontroll."
    ],
    redovisning: "Ingen separat redovisning – i stället begär ni ut pengarna i efterhand utifrån genomförda elevdagar. Skolverket kan begära in elevlistor och scheman i efterhand.",
    fallgropar: [
      "Glömma begäran om utbetalning – beviljat bidrag betalas inte ut av sig självt.",
      "Söka för obligatorisk lovskola i årskurs 8–9 eller innan den obligatoriska är klar.",
      "Elevlistor saknas vid kontroll, vilket kan leda till återkrav.",
      "Ta med elever som redan tagit gymnasieexamen i sommarlovskolan."
    ],
    nyckelord: ["lovskola", "sommarskola", "sommarlovsskola", "läxläsning på lov", "betyg E", "höja betyg", "prövning", "introduktionsprogram", "IM", "läslov", "påsklovsskola"],
    kallor: [
      { titel: "Skolverket – Statsbidrag för lovskola 2026", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-lovskola-2026" },
      { titel: "Förordning (2014:47) om statsbidrag för undervisning under skollov", url: "http://www.riksdagen.se/sv/Dokument-Lagar/Lagar/Svenskforfattningssamling/Forordning-201447-om-statsb_sfs-2014-47/" }
    ],
    senastKontrollerad: "2026-09-25",
    osakerhet: "Ingen sida för lovskola 2027 var publicerad; ansökningstiden för 2027 är uppskattad utifrån 2026. Bidraget gäller även grundskolan – samma bidrag kan finnas i andra datafiler."
  },

  /* ------------------------------------------------------------------ */
  {
    id: "riksrekryterande-spetsutbildningar",
    namn: "Statsbidrag för riksrekryterande spetsutbildningar i grund- och gymnasieskolan",
    kortnamn: "Spetsutbildningar",
    myndighet: "Skolverket",
    giltighet: "aktiv",
    sammanfattning: "Bidrag per elev till skolor som har Skolverkets tillstånd att driva en spetsutbildning – en fördjupad utbildning i t.ex. matematik, naturvetenskap eller språk som tar emot elever från hela landet.",
    syfte: "Att stötta skolor att starta spetsutbildningar och höja kvaliteten i dem, så att särskilt intresserade elever får mer utmaning.",
    omraden: ["ovrigt"],
    skolformer: ["grundskola", "gymnasieskola"],
    sokande: { fristaende: "ja", kommun: "ja", region: "nej", stat: "nej", ovriga: "nej" },
    sokandeNot: "Kommunala och fristående huvudmän som har tillstånd från Skolverket att driva en riksrekryterande spetsutbildning i årskurs 7–9 eller på gymnasiet (matematik, naturvetenskap, teknik, samhällsvetenskap eller humaniora) kan söka.",
    typ: "ansokan",
    perioder: [
      { typ: "ansokan", fran: "2026-10-01", till: "2026-11-02", text: "Ansökan för läsåret 2026/27. Utgå från antal elever per årskurs den 15 oktober 2026.", ungefar: false },
      { typ: "redovisning", fran: "2027-08-15", till: "2027-09-15", text: "Redovisning av hur bidraget använts per spetsutbildning.", ungefar: false }
    ],
    belopp: "Ges per elev. Totalt 45 miljoner kr fördelas för 2026/27 mellan alla som har rätt till bidraget.",
    villkor: [
      "Tillstånd från Skolverket att driva spetsutbildningen krävs.",
      "Undervisningen ska ges av legitimerade och behöriga lärare som är anställda hos huvudmannen.",
      "Pengarna ska användas under läsåret till att starta eller utveckla kvaliteten i spetsutbildningen, t.ex. läromedel, utrustning, kompetensutveckling, personal och studiebesök.",
      "Inte för utbildning som får statsbidrag på annat sätt eller bedrivs som uppdragsutbildning.",
      "Inga skulder hos Kronofogden eller obetalda återkrav."
    ],
    hurDuGor: [
      "Kontrollera att ert tillstånd gäller för läsåret.",
      "Räkna antal elever per årskurs i spetsutbildningen den 15 oktober.",
      "Sök i e-tjänsten 1 oktober–2 november och intyga att villkoren är uppfyllda.",
      "Använd pengarna under läsåret och för bok över vad de gått till.",
      "Redovisa i augusti–september året efter."
    ],
    redovisning: "15 augusti–15 september 2027: intyga att villkoren uppfyllts och redovisa hur mycket som använts per spetsutbildning.",
    fallgropar: [
      "Lärare som inte är legitimerade eller behöriga – då uppfylls inte villkoren.",
      "Tillståndet har gått ut; det måste förnyas i tid.",
      "Pengar som inte använts under läsåret."
    ],
    nyckelord: ["spetsutbildning", "spetsklass", "riksrekryterande", "matematik", "naturvetenskap", "särskilt begåvade", "högpresterande elever", "spetsgymnasium"],
    kallor: [
      { titel: "Skolverket – Statsbidrag för riksrekryterande spetsutbildningar 2026/27", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-riksrekryterande-spetsutbildningar-i-grund--och-gymnasieskolan-2026-27" }
    ],
    senastKontrollerad: "2026-09-25",
    osakerhet: "Bidraget gäller både grundskola och gymnasium och kan därför finnas i andra datafiler. Försöksverksamheten med spetsutbildning pågår till 30 juni 2027; vad som gäller därefter framgår av de nya förordningarna (2024:675 och 2024:677)."
  },

  /* ------------------------------------------------------------------ */
  {
    id: "nordiska-elever",
    namn: "Statsbidrag för nordiska elever",
    kortnamn: "Elever från andra nordiska länder",
    myndighet: "Skolverket",
    giltighet: "aktiv",
    sammanfattning: "Ersättning till skolor och komvux för elever från Danmark, Finland, Island, Norge, Färöarna, Grönland och Åland som studerar i Sverige utan att vara folkbokförda här.",
    syfte: "Elever från andra nordiska länder ska kunna studera i Sverige på samma villkor som svenska elever – eftersom ingen svensk hemkommun betalar för dem.",
    omraden: ["internationellt"],
    skolformer: ["gymnasieskola", "komvux"],
    sokande: { fristaende: "ja", kommun: "ja", region: "ja", stat: "nej", ovriga: "nej" },
    sokandeNot: "Offentliga och fristående huvudmän kan söka för elever i gymnasieskolan. Kommuner kan söka för komvux på gymnasial nivå. Regioner kan söka för komvux på grundläggande och gymnasial nivå samt sfi.",
    typ: "ansokan",
    perioder: [
      { typ: "ansokan", fran: "2026-10-15", till: "2026-11-16", text: "Ansökan för höstterminen 2026 (ansökan 2).", ungefar: false },
      { typ: "ansokan", fran: "2027-04-15", till: "2027-05-17", text: "Ansökan för vårterminen 2027 väntas i april–maj, som 2026 (15 april–18 maj).", ungefar: true }
    ],
    belopp: "Söks per termin. För gymnasieskolan: hälften av beloppet för programmet i Skolverkets riksprislista (inkl. måltider). För komvux: per verksamhetspoäng, högst 800 poäng per elev och år, med belopp som regeringen beslutar. Offentliga huvudmän får 6 procent avdrag för moms, och kommuner får ett avdrag för egna invånare som studerar i andra nordiska länder.",
    villkor: [
      "Eleven får inte vara folkbokförd i Sverige.",
      "Inte för elever på introduktionsprogram.",
      "Huvudmannen ansvarar för att kontrollera elevens folkbokföring och vilken utbildning eleven läser."
    ],
    hurDuGor: [
      "Gör en lista över elever från andra nordiska länder och kontrollera att de inte är folkbokförda i Sverige.",
      "Kontrollera vilket program eller vilka kurser eleverna läser och vilket belopp som gäller.",
      "Sök i e-tjänsten varje termin (höst: oktober–november, vår: april–maj).",
      "Hör av dig till Skolverket om en elev folkbokför sig i Sverige eller hoppar av under terminen."
    ],
    redovisning: "Ingen separat redovisning anges – bidraget söks i efterhand per termin utifrån elever och poäng. Skolverket kan göra kontroller.",
    fallgropar: [
      "Söka för elever som hunnit folkbokföra sig i Sverige.",
      "Söka för elever på introduktionsprogram.",
      "Missa en termin – varje termin söks för sig."
    ],
    nyckelord: ["nordiska elever", "norska elever", "finska elever", "danska elever", "åländska elever", "icke folkbokförd", "utländsk elev", "nordiska avtalet", "komvux", "sfi"],
    kallor: [
      { titel: "Skolverket – Statsbidrag för nordiska elever 2026", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-nordiska-elever-2026" }
    ],
    senastKontrollerad: "2026-09-25",
    osakerhet: "Ansökningstiden för våren 2027 är uppskattad utifrån 2026."
  },

  /* ------------------------------------------------------------------ */
  {
    id: "ib-utbildning-vissa-skolor",
    namn: "Statsbidrag för internationell gymnasial utbildning (IB-utbildning)",
    kortnamn: "IB-utbildning vid vissa skolor",
    myndighet: "Skolverket",
    giltighet: "aktiv",
    sammanfattning: "Bidrag till IB-utbildningen i Stockholms och Göteborgs kommuner och vid Sigtunaskolan humanistiska läroverket för utlandssvenska elever och andra elever som saknar svensk hemkommun.",
    syfte: "Att barn till svenskar som bor utomlands, och andra elever utan svensk hemkommun, ska kunna gå internationell gymnasieutbildning (IB) i Sverige.",
    omraden: ["internationellt"],
    skolformer: ["gymnasieskola"],
    sokande: { fristaende: "villkor", kommun: "villkor", region: "nej", stat: "nej", ovriga: "nej" },
    sokandeNot: "Bara tre namngivna huvudmän kan få bidraget: Stockholms kommun, Göteborgs kommun och Sigtunaskolan humanistiska läroverket (fristående). Andra skolor med IB-elever som är utlandssvenskar söker i stället statsbidraget för utlandssvenska elever.",
    typ: "ansokan",
    perioder: [
      { typ: "ansokan", fran: "2026-10-01", till: "2026-10-15", text: "Ansökan för bidragsåret 2027. Elevuppgifter lämnas per 15 september (Sigtunaskolan även 15 januari).", ungefar: false },
      { typ: "beslut", fran: null, till: null, text: "Beslut publiceras i januari 2027.", ungefar: false },
      { typ: "utbetalning", fran: null, till: null, text: "En fjärdedel i januari, april, juli och oktober.", ungefar: false },
      { typ: "redovisning", fran: "2027-02-15", till: "2027-03-17", text: "Redovisning av bidragsåret 2026, bl.a. faktiskt antal årselevplatser.", ungefar: false },
      { typ: "redovisning", fran: "2028-02-15", till: "2028-03-15", text: "Redovisning av bidragsåret 2027.", ungefar: false }
    ],
    belopp: "Samma belopp per elev som riksprislistan anger för naturvetenskapsprogrammet (inkl. måltider), från föregående års lista. Högst 90 årselevplatser vardera i Stockholm och Göteborg och högst 120 vid Sigtunaskolan.",
    villkor: [
      "Bara för elever utan hemkommun som ska betala för dem: utlandssvenska elever och andra elever utan svensk hemkommun.",
      "Utlandssvensk elev: vårdnadshavarna bor stadigvarande utomlands (minst sex månader) och minst en av dem är svensk medborgare.",
      "Huvudmannen bedömer och kontrollerar elevernas status när de börjar."
    ],
    hurDuGor: [
      "Lämna in elevuppgifter per 15 september.",
      "Kontrollera för varje elev att villkoren om utlandssvensk eller saknad hemkommun är uppfyllda.",
      "Sök i e-tjänsten 1–15 oktober.",
      "Redovisa utnyttjade årselevplatser i februari–mars året efter."
    ],
    redovisning: "Huvudmannen redovisar bl.a. det faktiska antalet utnyttjade årselevplatser, 15 februari–15 mars året efter bidragsåret.",
    fallgropar: [
      "Söka för elever vars hemkommun redan betalar.",
      "Bristande kontroll av vårdnadshavarnas bosättning och medborgarskap."
    ],
    nyckelord: ["IB", "International Baccalaureate", "internationell skola", "utlandssvensk", "Sigtunaskolan", "SSHL", "icke folkbokförd"],
    kallor: [
      { titel: "Skolverket – Statsbidrag för IB-utbildning 2026", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-internationell-gymnasial-utbildning-ib-utbildning-2026" },
      { titel: "Skolverket – Statsbidrag för IB-utbildning 2027", url: "https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-internationell-gymnasial-utbildning-ib-utbildning-2027" }
    ],
    senastKontrollerad: "2026-09-25",
    osakerhet: ""
  },

  /* ------------------------------------------------------------------ */
  {
    id: "rh-anpassad-utbildning-omvardnad",
    namn: "Omvårdnadsinsatser rörelsehinderanpassad utbildning",
    kortnamn: "Rh-anpassad gymnasieutbildning",
    myndighet: "SPSM",
    giltighet: "aktiv",
    sammanfattning: "Statsbidrag för habilitering, elevhem och omvårdnad för elever med svåra rörelsehinder på de fyra riksgymnasierna med Rh-anpassad utbildning (Göteborg, Kristianstad, Stockholm, Umeå).",
    syfte: "Ungdomar med svårt rörelsehinder ska kunna gå i gymnasieskolan med den habilitering, det boende och den omvårdnad de behöver.",
    omraden: ["stod"],
    skolformer: ["gymnasieskola"],
    sokande: { fristaende: "nej", kommun: "villkor", region: "nej", stat: "nej", ovriga: "villkor" },
    sokandeNot: "Bara de fyra huvudmännen för habilitering och boende vid riksgymnasierna kan söka: Umeå, Kristianstads och Stockholms kommuner samt Stiftelsen Bräcke Diakoni i Göteborg. Andra skolor kan inte söka detta bidrag. Elever söker själva till utbildningen via SPSM.",
    typ: "ansokan",
    perioder: [
      { typ: "redovisning", fran: "2026-09-01", till: "2026-10-01", text: "Ekonomisk redovisning av läsåret 2025/26 och verksamhetsuppföljning, senast 1 oktober, i SPSM:s bidragsportal.", ungefar: false },
      { typ: "utbetalning", fran: "2027-02-01", till: "2027-02-01", text: "Statsbidraget för vårterminen betalas ut senast 1 februari (höstterminen senast 1 september).", ungefar: false },
      { typ: "ansokan", fran: "2027-04-15", till: "2027-05-15", text: "Ansökan för läsåret 2027/28 i bidragsportalen. SPSM anger 15 april–15 maj varje år.", ungefar: false },
      { typ: "beslut", fran: null, till: null, text: "I juni tecknas en överenskommelse mellan SPSM och huvudmannen om bidragets storlek.", ungefar: false }
    ],
    belopp: "Storleken bestäms i en överenskommelse med SPSM utifrån huvudmannens beräknade kostnader (personal, lokaler, administration m.m.). Hemkommun och hemregion betalar också en del, som SPSM administrerar.",
    villkor: [
      "Gäller elever som antagits till Rh-anpassad utbildning; boende och omvårdnad bara för elever med rätt till elevhemsplats.",
      "Huvudmannen ska följa SPSM:s kvalitetskrav för habilitering och elevhem.",
      "Huvudmannen ska löpande meddela SPSM när elever börjar, slutar eller flyttar."
    ],
    hurDuGor: [
      "Skapa konto i SPSM:s bidragsportal för varje person som ska arbeta med ansökan.",
      "Följ SPSM:s anvisning och beräkna kostnader och intäkter för kommande läsår.",
      "Skicka ansökan 15 april–15 maj och uppdatera elevförteckningen i början av juni.",
      "Uppdatera elevförteckningen i september och mars.",
      "Skicka ekonomisk redovisning och verksamhetsuppföljning senast 1 oktober."
    ],
    redovisning: "Senast 1 oktober varje år: ekonomisk redovisning av föregående läsår för elevboende och habilitering, med förklaringar till över- och underskott, samt en verksamhetsuppföljning.",
    fallgropar: [
      "Elevförteckningen uppdateras inte – då blir faktureringen till hemkommuner och regioner fel.",
      "Kostnader redovisas inte enligt SPSM:s anvisning."
    ],
    nyckelord: ["Rh-anpassad", "rörelsehinder", "riksgymnasium", "RgRh", "elevhem", "habilitering", "omvårdnad", "funktionsnedsättning gymnasiet", "SPSM"],
    kallor: [
      { titel: "SPSM – Omvårdnadsinsatser rörelsehinderanpassad utbildning", url: "https://www.spsm.se/stod-och-rad/sok-statsbidrag/omvardnadsinsatser-rh-anpassad-utbildning/" },
      { titel: "Skolverket – Utbildning för rörelsehindrade ungdomar (Rh-anpassad utbildning)", url: "https://www.skolverket.se/styrning-och-ansvar/regler-och-ansvar/ansvar-i-skolfragor/utbildning-for-rorelsehindrade-ungdomar-rh--anpassad-utbildning" }
    ],
    senastKontrollerad: "2026-09-25",
    osakerhet: "SPSM anger inte ett totalbelopp för bidraget på sidan."
  },

  /* ------------------------------------------------------------------ */
  {
    id: "synnedsattning-mellanar",
    namn: "Särskilt anordnad utbildning för ungdomar med svår synnedsättning",
    kortnamn: "Mellanår vid svår synnedsättning",
    myndighet: "SPSM",
    giltighet: "aktiv",
    sammanfattning: "Bidrag till skolor som ordnar ett särskilt ”mellanår” för ungdomar med svår synnedsättning som gått ut grundskolan men ännu inte avslutat en gymnasieutbildning.",
    syfte: "Ungdomar med svår synnedsättning ska få ett förberedande år som gör det lättare att klara gymnasieutbildningen.",
    omraden: ["stod"],
    skolformer: ["gymnasieskola"],
    sokande: { fristaende: "villkor", kommun: "villkor", region: "villkor", stat: "nej", ovriga: "villkor" },
    sokandeNot: "Huvudmän som anordnar en särskild utbildning för ungdomar med svår synnedsättning kan söka. SPSM begränsar inte vem som är huvudman, men man måste redan driva en sådan utbildning. Ansökan ska skrivas under av en behörig företrädare (t.ex. skolchef, vd eller ordförande).",
    typ: "ansokan",
    perioder: [
      { typ: "redovisning", fran: null, till: "2026-11-30", text: "Slutredovisning av bidragsåret 2026 senast 30 november 2026.", ungefar: false },
      { typ: "ansokan", fran: "2026-11-01", till: "2026-12-15", text: "Ansökan för bidragsåret 2027. Blankett mejlas till spsm@spsm.se.", ungefar: false },
      { typ: "beslut", fran: null, till: null, text: "Beslut i januari 2027, meddelas via mejl.", ungefar: false },
      { typ: "utbetalning", fran: null, till: null, text: "Fyra gånger under 2027: mars, juni, september och december.", ungefar: false }
    ],
    belopp: "Täcker kostnader för personal, lokaler, kost och logi, administration, undervisningsmaterial, studiebesök och andra kurskostnader. Högst ett år per deltagare. Totalbelopp anges inte.",
    villkor: [
      "Deltagarna ska ha svår synnedsättning, ha gått ut grundskolan och inte ha avslutat en gymnasieutbildning.",
      "Bidrag ges för högst ett år per deltagare.",
      "Samma kostnad får inte få annat statsbidrag; inga skulder hos Kronofogden.",
      "Förändringar som påverkar rätten till bidraget ska meddelas SPSM direkt."
    ],
    hurDuGor: [
      "Ladda ner ansökningsblanketten på SPSM:s webbplats.",
      "Beräkna kostnaderna för utbildningen och antalet deltagare.",
      "Låt en behörig företrädare skriva under och bifoga t.ex. delegationsordning.",
      "Mejla ansökan till spsm@spsm.se 1 november–15 december.",
      "Skicka slutredovisning med faktiska kostnader och antal elever senast 30 november efter bidragsåret."
    ],
    redovisning: "Slutredovisning på SPSM:s blankett senast 30 november bidragsåret, med faktiska kostnader och antal elever för hela året.",
    fallgropar: [
      "Ansökan skrivs under av fel person (ingen behörig företrädare).",
      "Personalkostnader specificeras inte i redovisningen."
    ],
    nyckelord: ["synnedsättning", "blind", "synskadad", "mellanår", "förberedande år", "funktionsnedsättning", "SPSM", "SIS-bidrag"],
    kallor: [
      { titel: "SPSM – Särskilt anordnad utbildning för ungdomar med svår synnedsättning", url: "https://www.spsm.se/stod-och-rad/sok-statsbidrag/skolor-inom-skolvasendet/sarskilt-anordnad-utbildning-for-ungdomar-med-svar-synnedsattning/" },
      { titel: "SPSM – Information om bidraget, bidragsår 2027 (pdf)", url: "https://www.spsm.se/siteassets/stod-och-rad/sok-statsbidrag/2027-information-om-bidraget-sarskilt-anordnad-utbildning-synnedsattning.pdf" }
    ],
    senastKontrollerad: "2026-09-25",
    osakerhet: "Utbildningen är inte en egen skolform utan ett år mellan grundskola och gymnasium; den är här märkt som gymnasieskola. SPSM anger inte vilka typer av huvudmän som i praktik driver sådan utbildning."
  }

);
