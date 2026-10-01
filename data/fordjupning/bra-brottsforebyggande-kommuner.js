/* Fördjupning: Ekonomiskt stöd till kommuner för brottsförebyggande åtgärder – förordning (2023:442).
 * Innehållet är stämt mot förordningen (oförändrad sedan den trädde i kraft 1 augusti 2023), Brås sida om stödet
 * (uppdaterad 2026-08-25), Brås frågor och svar (2026-06-16), översikten över ansökan 2027 och Brås stöd för
 * ekonomisk slutredovisning. Schema: se FORDJUPNING.md. Klartext, inte citat – paragrafhänvisningarna gäller
 * förordningen. */
window.SB_FORDJUPNING = window.SB_FORDJUPNING || {};
window.SB_FORDJUPNING['bra-brottsforebyggande-kommuner'] = {
  id: 'bra-brottsforebyggande-kommuner',
  rubrik: 'Brottsförebyggande stöd',
  rubrikKursiv: 'för kommuner.',
  ingress: 'Vem kan söka, vad kan pengarna gå till och hur redovisar kommunen? Här står reglerna på vanlig svenska. Ni kan också räkna på en projektbudget inom Brås tak.',
  kontrollerad: '2026-10-01',
  forordning: {
    sfs: '2023:442',
    namn: 'Förordning (2023:442) om statsbidrag till kommuner för brottsförebyggande åtgärder',
    lydelse: 'utan ändringar sedan 1 augusti 2023',
    url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-2023442-om-statsbidrag-till-kommuner_sfs-2023-442/'
  },

  snabbfaktaRubrik: 'Tre saker att känna till först',
  snabbfakta: [
    { rubrik: 'Kommunen söker', text: 'Bara kommuner och kommunalförbund kan söka. En skola – kommunal eller fristående – kan vara med i kommunens projekt.' },
    { rubrik: 'Nytt, inte ordinarie', text: 'Pengarna får inte gå till sådant kommunen redan måste göra, till exempel lägesbilden, åtgärdsplanen eller samordningsfunktionen.' },
    { rubrik: 'Ett kalenderår', text: 'Ansökan görs på hösten. Projektet ska genomföras och utgifterna uppstå mellan 1 januari och 31 december året efter.' }
  ],
  snabbfaktaNot: 'Ansökan för 2027 var öppen 15 juni–1 oktober 2026. Brå har cirka 50 miljoner kr att fördela.',

  begreppRubrik: 'Ord som återkommer',
  begrepp: [
    { term: 'Brottsförebyggande åtgärd', forklaring: 'Aktiviteter som riktas mot orsakerna till brott. Antingen ändrar de omständigheterna där brott riskerar att ske, eller människors benägenhet att begå brott.' },
    { term: 'Lägesbild', forklaring: 'Kommunens beskrivning av brottsligheten i kommunen och vad den beror på. Kommunen måste ta fram den enligt lagen (2023:196) om kommuners ansvar för brottsförebyggande arbete.' },
    { term: 'Åtgärdsplan', forklaring: 'Kommunens plan för vilka åtgärder den ska vidta för att förebygga brott. Den krävs också enligt lagen (2023:196).' },
    { term: 'Bidragsår', forklaring: 'Det kalenderår, 1 januari–31 december, som bidraget gäller. Pengarna får bara användas för utgifter under det året.' },
    { term: 'Lönebikostnader', forklaring: 'Arbetsgivaravgifter och avtalade sociala avgifter ovanpå lönen.' }
  ],

  sektioner: {
    regler: {
      rubrik: 'Från paragraf', rubrikKursiv: 'till praktik.',
      ingress: 'Rubrikerna följer förordningen. Brås anvisningar står i rutorna under texten. Sök på till exempel ”skola”, ”budget” eller ”slutredovisning”.'
    },
    praktik: {
      rubrik: 'Så används', rubrikKursiv: 'reglerna.',
      ingress: 'Arbetet sträcker sig över två år: ansökan på hösten, projektet nästa kalenderår och slutredovisningen i februari året därpå.'
    }
  },

  paragrafer: [
    {
      ref: '1–3 §§', rubrik: 'Vad bidraget är till för',
      text: [
        'Bidraget ska stärka det brottsförebyggande arbetet i kommunerna och utveckla brottsförebyggande åtgärder som bygger på kunskap om vad som fungerar.',
        'Brottsförebyggande rådet (Brå) prövar ansökningarna.'
      ],
      praktik: {
        rubrik: 'Skolans roll',
        text: 'Bidraget är inte riktat särskilt till skolan. Men kommunen kan söka för en åtgärd där skolan är med, till exempel mot våld bland barn och unga, om problemet finns i kommunen och åtgärden inte är skolans vanliga uppdrag. I ansökan ska kommunen ange vilka förvaltningar och verksamheter som ingår, vilka aktörer den samarbetar med och hur projektet tar hänsyn till ett barn- och ungdomsperspektiv. En fristående skola kan inte söka själv, men kan vara samarbetspart om kommunen tar med den i projektet.'
      },
      nyckelord: ['syfte', 'brottsförebyggande', 'kunskapsbaserad', 'skola', 'barn och unga', 'brå']
    },
    {
      ref: '4–5 §§', rubrik: 'Vem kan få bidrag och för vad',
      text: [
        'Bidraget ges som projektbidrag till kommuner, i den mån det finns pengar.',
        'Projektet ska stärka, utveckla eller utvärdera en brottsförebyggande åtgärd. Det kan vara att utöka en åtgärd som redan finns, att införa en ny eller att utvärdera vilken effekt en åtgärd har haft.',
        'Pengarna får användas för att anlita en extern aktör, till exempel en konsult eller en organisation.'
      ],
      praktik: {
        rubrik: 'Brås förklaring',
        text: 'Förordningen nämner kommuner. Brå anger att även kommunalförbund kan söka. Kommunen ska kunna visa att det finns ett brottsproblem i kommunen. Det finns inga särskilda inriktningar eller prioriterade brottsområden.'
      },
      nyckelord: ['kommun', 'kommunalförbund', 'projekt', 'utvärdera', 'extern aktör', 'konsult', 'fristående skola', 'samarbetspart']
    },
    {
      ref: '6 §', rubrik: 'Det som inte kan få bidrag',
      text: [
        'Bidrag ges inte för befintlig kommunal verksamhet, och inte för projekt som redan har fått andra statliga bidrag.',
        'Befintlig verksamhet är sådant som kommunen måste göra enligt lag eller annan författning. Enligt Brå gäller det till exempel:'
      ],
      lista: [
        'Att ta fram eller uppdatera lägesbilden över brottsligheten.',
        'Att ta fram eller uppdatera åtgärdsplanen.',
        'Den funktion som stödjer och samordnar kommunens brottsförebyggande arbete.'
      ],
      praktik: {
        rubrik: 'Brås förklaring',
        text: 'En ordinarie tjänst kan få bidrag för ett tillfälligt uppdrag i projektet, till exempel som projektledare. Arbetet ska då börja och sluta inom bidragsåret. Arbete inom socialtjänsten kan få bidrag om det stärker, utvecklar eller utvärderar en brottsförebyggande åtgärd – men inte ordinarie verksamhet eller sådant som redan finansieras av till exempel Socialstyrelsen.'
      },
      nyckelord: ['befintlig verksamhet', 'ordinarie', 'lägesbild', 'åtgärdsplan', 'samordnare', 'dubbel finansiering', 'socialtjänst', 'tjänst']
    },
    {
      ref: '7 §', rubrik: 'Vad ansökan ska innehålla',
      text: ['Ansökan ska vara skriftlig och komma in senast det datum Brå bestämmer. För 2027 var sista dag 1 oktober 2026. Den ska innehålla:'],
      lista: [
        'Vad pengarna ska användas till, en övergripande plan med tidsram och beräknade kostnader.',
        'Vilka aktörer kommunen ska samarbeta med, om några.',
        'Andra statliga bidrag som kommunen har sökt eller fått för brottsförebyggande åtgärder, och för vad och med hur mycket.',
        'Hur resultatet ska utvärderas, om projektet inte självt är en utvärdering.'
      ],
      praktik: {
        rubrik: 'Brås förklaring',
        text: 'Ansökan görs i Brås e-tjänst, en ansökan per projekt. Kontaktpersonen loggar in med BankID eller Freja eID. Till ansökan bifogas handlingar som visar vem som är behörig företrädare, kommunens lägesbild och åtgärdsplan. Saknas problemet eller åtgärden i dem går det att bifoga andra underlag. Målen ska vara SMART: specifika, mätbara, accepterade, realistiska och tidsbundna. Allt i ansökan blir allmän handling. Den kan inte ändras i e-tjänsten när den är inskickad – ändringar mejlas till ekostod@bra.se.'
      },
      nyckelord: ['ansökan', 'e-tjänst', 'bankid', 'bilagor', 'lägesbild', 'åtgärdsplan', 'smart', 'mål', 'allmän handling', '1 oktober']
    },
    {
      ref: '7 § 1 p.', rubrik: 'Budget: vilka utgifter som godtas',
      text: [
        'Budgeten delas upp i utgifter för arbetskraft, externa tjänster och övriga utgifter. Varje post ska specificeras, för arbetskraft med funktion, tjänstgöringsgrad och utgift per person.',
        'En utgift får bara räknas om den är väsentlig för projektet, skälig, faktisk och kan styrkas i bokföringen, och har uppstått under bidragsåret.',
        'Utöver de direkta utgifterna godtar Brå lönebikostnader upp till 40,66 procent av lönerna, och allmänna omkostnader upp till 10 procent av den totala utgiften för arbetskraft.'
      ],
      praktik: {
        rubrik: 'Brås förklaring',
        text: 'Budgeten används både när Brå bedömer ansökan och som underlag vid slutredovisningen. Projektets utgifter ska bokföras för sig, med ett eget projektnummer. Utgifter för alkohol godtas inte. Ange också om kommunen har andra resurser för projektet.'
      },
      nyckelord: ['budget', 'lönebikostnader', '40,66', 'omkostnader', '10 procent', 'arbetskraft', 'externa tjänster', 'bokföring', 'projektnummer']
    },
    {
      ref: '8–10 §§', rubrik: 'Komplettering',
      text: [
        'Kommunen ska på begäran lämna de handlingar och uppgifter Brå behöver för att pröva ansökan.',
        'Saknas något ska Brå ge kommunen möjlighet att komplettera inom en viss tid. Kompletterar kommunen inte i tid får Brå pröva ansökan som den är.'
      ],
      nyckelord: ['komplettering', 'handlingar', 'uppgifter', 'tidsfrist']
    },
    {
      ref: '11 §', rubrik: 'Hur ansökningarna prioriteras',
      text: [
        'Brå får prioritera mellan ansökningarna och ge företräde åt dem som har bäst möjligheter att uppfylla bidragets syfte.',
        'Brå har cirka 50 miljoner kr per år. Det finns ingen gräns för hur mycket eller hur lite en kommun kan söka, och inte heller för hur många ansökningar den skickar in.'
      ],
      praktik: {
        rubrik: 'Brås förklaring',
        text: 'Brå granskar om åtgärden är kunskapsbaserad. Vid prioritering bedömer Brå hur väl kommunen har beskrivit det lokala brottsproblemet, hur valet av åtgärd motiveras utifrån orsakerna och om projektplanen och budgeten går att genomföra och följa upp. Brå bedömer inte hur stor effekt åtgärden kan väntas få.'
      },
      nyckelord: ['prioritering', 'bedömning', 'konkurrens', '50 miljoner', 'belopp', 'tak']
    },
    {
      ref: '12–13 §§', rubrik: 'Beslut och utbetalning',
      text: [
        'Ett beslut gäller ett bidragsår, alltså ett kalenderår. I beslutet står vilket projekt och vilka åtgärder bidraget gäller, vilket år det gäller och sista dag för redovisning. Beslutet kan ha villkor.',
        'Brå beslutar kort efter årsskiftet och betalar ut bidraget inom tre veckor efter beslutet. Beslutet kan inte överklagas.'
      ],
      praktik: {
        rubrik: 'Ändringar efter beslut',
        text: 'Brå kan bevilja delar av ett projekt, ofta för att en del av ansökan inte var stödberättigad. Pengarna får då bara användas till det som beviljats. Vill ni flytta pengar mellan budgetposter med mer än 5 000 kr och minst 25 procent, eller ändra något som kan påverka projektets syfte, ska ni skriftligen begära ändring hos Brå.'
      },
      nyckelord: ['beslut', 'bidragsår', 'kalenderår', 'utbetalning', 'tre veckor', 'delvis', 'ändring', 'omfördelning']
    },
    {
      ref: '14–16 §§', rubrik: 'Redovisning',
      text: [
        'Kommunen ska lämna en ekonomisk redovisning senast det datum som står i beslutet. Den ska visa vad pengarna har använts till, vilka resultat som har nåtts och hur de hänger ihop med syftet.',
        'Brå kan begära fler handlingar för att granska redovisningen. Brå redovisar själv till regeringen vilka som fått bidrag och vad det har gett.'
      ],
      praktik: {
        rubrik: 'Brås förklaring',
        text: 'Projekten lämnar en delredovisning under året och en slutredovisning efteråt. För bidragsår 2026 var sista dag för delredovisningen 26 augusti 2026, och slutredovisningen ska vara inne senast 26 februari 2027. Till slutredovisningen bifogas ett utdrag ur bokföringen som är påskrivet av kommunens ekonom eller controller. Utgifter får inte vara uppskattade eller schablonberäknade. Kontaktpersonen intygar att uppgifterna är sanna och att redovisningen är förankrad i kommunen.'
      },
      nyckelord: ['redovisning', 'delredovisning', 'slutredovisning', 'bokföring', 'controller', 'resultat', 'februari', 'augusti']
    },
    {
      ref: '17 §', rubrik: 'Stopp för utbetalning',
      text: ['Brå ska helt eller delvis stoppa utbetalningen av ett beviljat bidrag om det finns skäl för återbetalning enligt 18 §.'],
      nyckelord: ['stopp', 'utbetalning', 'hinder']
    },
    {
      ref: '18–19 §§', rubrik: 'Betala tillbaka (återkrav)',
      text: ['Kommunen ska betala tillbaka bidraget om något av det här gäller:'],
      lista: [
        'Bidraget har betalats ut felaktigt eller med för högt belopp.',
        'Bidraget har helt eller delvis inte använts, eller inte använts till det det beviljades för.',
        'Kommunen lämnar inte redovisning eller de underlag Brå begär.',
        'Villkoren i beslutet har inte följts.'
      ],
      praktik: 'Brå ska då besluta att kräva tillbaka bidraget helt eller delvis. Finns det särskilda skäl får Brå avstå. Pengar som inte används under kalenderåret ska alltså normalt betalas tillbaka.',
      nyckelord: ['återkrav', 'återbetalning', 'betala tillbaka', 'outnyttjade medel', 'särskilda skäl']
    },
    {
      ref: '20–21 §§', rubrik: 'Föreskrifter och överklagande',
      text: [
        'Brå får skriva föreskrifter om hur förordningen ska tillämpas.',
        'Inga beslut enligt förordningen får överklagas.'
      ],
      nyckelord: ['föreskrifter', 'överklaga', 'domstol']
    },
    {
      ref: 'Ikraftträdande', rubrik: 'När förordningen började gälla',
      text: ['Förordningen började gälla den 1 augusti 2023 och har inte ändrats sedan dess. Samma år kom lagen (2023:196) om kommuners ansvar för brottsförebyggande arbete, som avgör vad som räknas som kommunens ordinarie uppdrag.'],
      nyckelord: ['ikraftträdande', '2023:196', 'lag']
    }
  ],

  kalkylatorer: [
    {
      id: 'budget', modul: 'bra-brottsforebyggande-kommuner-budget',
      flik: 'Räkna på budgeten', eyebrow: 'Brås tak för ansökan 2027',
      rubrik: 'Ryms budgeten inom', rubrikKursiv: 'taken?',
      ingress: 'Fyll i projektets planerade utgifter för ett kalenderår. Räknaren visar hur mycket av budgeten som ryms inom Brås tak för lönebikostnader och allmänna omkostnader.',
      formel: { rubrik: 'Grundformeln', text: 'Budget = löner + lönebikostnader (högst 40,66 % av lönerna) + allmänna omkostnader (högst 10 % av arbetskraften) + externa tjänster + övriga utgifter.' },
      resultatRubrik: 'Budget inom taken',
      falt: [
        { id: 'lon', typ: 'tal', etikett: 'Löner i projektet', min: 0, max: 1e10, steg: 1, standard: 400000, enhet: 'kr',
          hjalp: 'Lön för direkt arbete i projektet, utan lönebikostnader.' },
        { id: 'bikost', typ: 'tal', etikett: 'Lönebikostnader', min: 0, max: 1e10, steg: 1, standard: 160000, enhet: 'kr',
          hjalp: 'Arbetsgivaravgifter och avtalade sociala avgifter för lönerna ovan.' },
        { id: 'omkostnader', typ: 'tal', etikett: 'Allmänna omkostnader', min: 0, max: 1e10, steg: 1, standard: 40000, enhet: 'kr',
          hjalp: 'Gemensamma kostnader som behövs för att genomföra projektet.' },
        { id: 'underlag', typ: 'segment', etikett: 'Omkostnadstaket räknas på', standard: 'lon',
          alternativ: [
            { varde: 'lon', etikett: 'Bara löner', hjalp: 'Det försiktiga sättet. Brå säger inte uttryckligen vad som ingår i ”total utgift för arbetskraft”.' },
            { varde: 'total', etikett: 'Löner + lönebikostnader', hjalp: 'Ger ett högre tak. Fråga Brå (ekostod@bra.se) innan ni räknar så.' }
          ] },
        { id: 'externa', typ: 'tal', etikett: 'Externa tjänster', min: 0, max: 1e10, steg: 1, standard: 100000, enhet: 'kr',
          hjalp: 'Till exempel konsulter, utvärderare eller en organisation ni anlitar.' },
        { id: 'ovriga', typ: 'tal', etikett: 'Övriga utgifter', min: 0, max: 1e10, steg: 1, standard: 50000, enhet: 'kr',
          hjalp: 'Till exempel möten, resor, kommunikation och material.' }
      ],
      exempel: [
        { etikett: 'Över taken', varden: { bikost: 180000, omkostnader: 60000 } },
        { etikett: 'Bara extern utvärdering', varden: { lon: 0, bikost: 0, omkostnader: 0, externa: 250000, ovriga: 10000 } }
      ],
      resultatNotis: 'Summan är det högsta budgeten kan bli med de här taken. Hur mycket Brå beviljar avgörs vid bedömningen, och redovisade utgifter ska vara faktiska.',
      forbehall: [
        { rubrik: 'Källa', text: 'Taken kommer från Brås översikt över ansökan 2027. De kan ändras till nästa ansökningsomgång. Taken avrundas nedåt till hela kronor.' },
        { rubrik: 'Det här prövar räknaren inte', text: 'Om utgifterna är väsentliga, skäliga och stödberättigade, om projektet är ordinarie verksamhet eller om pengarna räcker. I redovisningen får lönebikostnaderna inte vara schablonberäknade – det är de faktiska kostnaderna som gäller, upp till taket.' }
      ]
    }
  ],

  process: [
    { rubrik: 'Utgå från lägesbilden', text: 'Prata med kommunens samordnare för brottsförebyggande arbete. Välj ett problem som finns i lägesbilden och en kunskapsbaserad åtgärd mot orsakerna.', ref: '4–6 §§' },
    { rubrik: 'Ansök senast 1 oktober', text: 'Skicka ansökan i Brås e-tjänst med budget, SMART-mål, plan för uppföljning och bilagor. En ansökan per projekt.', ref: '7–10 §§' },
    { rubrik: 'Beslut efter årsskiftet', text: 'Brå beslutar kort efter årsskiftet och betalar ut inom tre veckor. Läs vad som beviljats och vilka villkor som gäller.', ref: '11–13 §§' },
    { rubrik: 'Genomför under kalenderåret', text: 'Bokför projektet för sig, begär ändring vid större omfördelningar och lämna delredovisningen under året.', ref: '12–14 §§' },
    { rubrik: 'Slutredovisa i februari', text: 'Lämna slutredovisningen med bokföringsutdrag. Pengar som inte har använts kan behöva betalas tillbaka.', ref: '14–19 §§' }
  ],

  underlagRubrik: 'Underlag att ha till hands',
  underlagIngress: 'Använd listan när ni förbereder ansökan och redovisning. Markeringarna sparas inte – de försvinner när ni stänger sidan.',
  underlag: [
    'Kommunens lägesbild och åtgärdsplan, eller andra underlag om brottsproblemet.',
    'Handling som visar vem som är behörig företrädare för kommunen.',
    'Projektplan med SMART-mål, aktiviteter, tidsplan och plan för uppföljning.',
    'Budget per post, med funktion och tjänstgöringsgrad för varje person.',
    'Uppgifter om andra statliga bidrag som sökts eller beviljats för liknande åtgärder.',
    'Bokföringsutdrag med eget projektnummer, påskrivet av ekonom eller controller.'
  ],

  kallor: [
    {
      titel: 'Förordning (2023:442) · Sveriges riksdag',
      url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-2023442-om-statsbidrag-till-kommuner_sfs-2023-442/',
      beskrivning: 'Källan för syfte, villkor, ansökan, redovisning och återkrav. Paragrafhänvisningarna i guiden gäller den här förordningen.'
    },
    {
      titel: 'Ekonomiskt stöd till kommuner för brottsförebyggande åtgärder · Brå',
      url: 'https://bra.se/kunskapsstod/ekonomiskt-stod/ekonomiskt-stod-till-kommuner-for-brottsforebyggande-atgarder',
      beskrivning: 'Brås sida med datum för 2027, krav på ansökan, bedömning, redovisning och dokument som översikten över ansökan och stödet för ekonomisk redovisning.'
    },
    {
      titel: 'Frågor och svar om det ekonomiska stödet · Brå',
      url: 'https://bra.se/kunskapsstod/ekonomiskt-stod/fragor-och-svar-om-ekonomiska-stodet-till-kommuner',
      beskrivning: 'Svar om e-tjänsten, samverkan, belopp, ändringar efter beslut och vad som kan få stöd.'
    }
  ],

  forbehall: 'Guiden sammanfattar reglerna och Brås anvisningar. Räknaren kontrollerar inte om utgifterna är stödberättigade eller hur mycket Brå beviljar. Datum och tak gäller ansökningsomgången för 2027 och kan ändras. Använd Brås aktuella anvisningar och ert beslut när ni ansöker och redovisar.'
};
