/* Fördjupning: Statsbidrag för maxtaxa – förordning (2001:160).
 * Innehållet är stämt mot förordningen (ändrad t.o.m. SFS 2026:3, i kraft 1 juli 2026), ändringsförordningen SFS 2026:3,
 * Skolverkets sida "Statsbidrag för maxtaxa 2026" (senast uppdaterad 10 september 2026), Skolverkets sida om avgifter
 * och Skolverkets beslut om bidragsramar 2026 (2026-01-19, dnr 2025:3777).
 * Schema: se FORDJUPNING.md. Klartext, inte citat – paragrafhänvisningarna gäller förordningen. */
window.SB_FORDJUPNING = window.SB_FORDJUPNING || {};
window.SB_FORDJUPNING['maxtaxa'] = {
  id: 'maxtaxa',
  rubrik: 'Maxtaxa',
  rubrikKursiv: 'i klartext.',
  ingress: 'Hur högt får avgiften för förskola och fritidshem bli, vad ändrades den 1 juli 2026 och hur får kommunen sina pengar? Här står reglerna på vanlig svenska. Ni kan också räkna på den högsta avgiften för ett hushåll.',
  kontrollerad: '2026-10-01',
  forordning: {
    sfs: '2001:160',
    namn: 'Förordning (2001:160) om statsbidrag till kommuner som tillämpar maxtaxa inom förskolan och fritidshemmet',
    lydelse: 'ändrad t.o.m. SFS 2026:3',
    url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-2001160-om-statsbidrag-till-kommuner_sfs-2001-160/'
  },

  snabbfaktaRubrik: 'Tre saker att känna till först',
  snabbfakta: [
    { rubrik: 'Ett tak för avgiften', text: 'Kommunen får bidraget om avgiften för förskola och fritidshem inte blir högre än en viss procent av hushållets inkomst, upp till ett inkomsttak.' },
    { rubrik: 'Lägre avgifter från 1 juli 2026', text: 'Nu dras 10 000 kr av från hushållets inkomst innan avgiften räknas ut. Den högsta avgiften i förskolan sjönk från 1 847 till 1 547 kr i månaden för första barnet.' },
    { rubrik: 'Pengarna kommer automatiskt', text: 'Kommunen behöver inte söka. Fristående förskolor och fritidshem får inga pengar från Skolverket genom bidraget.' }
  ],
  snabbfaktaNot: 'Maxtaxan är ett tak. Kommunen får ta ut lägre avgifter än taket.',

  begreppRubrik: 'Ord som återkommer',
  begrepp: [
    { term: 'Maxtaxa', forklaring: 'Den högsta avgift ett hushåll kan behöva betala per månad för förskola, fritidshem och pedagogisk omsorg.' },
    { term: 'Avgiftsgrundande inkomst', forklaring: 'Den del av hushållets inkomst som avgiften räknas på: lön före skatt och andra skattepliktiga inkomster, upp till taket och, från 1 juli 2026, minus 10 000 kr.' },
    { term: 'Hushåll', forklaring: 'En ensamstående förälder, eller två vuxna som är gifta eller sambor. Sambor räknas som ett hushåll om de har barn tillsammans eller är folkbokförda på samma adress.' },
    { term: 'Pedagogisk omsorg', forklaring: 'Till exempel familjedaghem, som erbjuds i stället för förskola eller fritidshem. Den räknas som förskola eller fritidshem i förordningen.' },
    { term: 'Omsorg på obekväm tid', forklaring: 'Omsorg på kvällar, nätter och helger när förskola och fritidshem är stängda, ibland kallad nattis. Den omfattas också av maxtaxan.' }
  ],

  sektioner: {
    regler: {
      rubrik: 'Från paragraf', rubrikKursiv: 'till praktik.',
      ingress: 'Rubrikerna följer förordningen. Öppna det avsnitt ni behöver, eller sök på till exempel ”syskon”, ”inkomst” eller ”fristående”. Varje avsnitt visar vilken paragraf det gäller.'
    },
    praktik: {
      rubrik: 'Så används', rubrikKursiv: 'reglerna.',
      ingress: 'Kommunen behöver inte ansöka. Men den måste hålla avgifterna inom taket, uppdatera taxan när Skolverket meddelar nya belopp och anmäla förändringar.'
    }
  },

  paragrafer: [
    {
      ref: '1 §', rubrik: 'Vad bidraget gäller',
      text: [
        'En kommun kan få statsbidrag om den har en högsta avgift, maxtaxa, för plats i förskola eller fritidshem.',
        'Två andra verksamheter räknas som förskola eller fritidshem här: pedagogisk omsorg som erbjuds i stället för förskola eller fritidshem, och omsorg på kvällar, nätter och helger när förskola eller fritidshem inte är öppna.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Alla kommuner använder maxtaxan. Skolverket anger att taket gäller både kommunala och fristående förskolor och fritidshem. Betalar ett hushåll den högsta tillåtna avgiften får inga andra avgifter tas ut, till exempel för måltider. En fristående huvudmans avgift får inte heller vara oskäligt hög.'
      },
      nyckelord: ['maxtaxa', 'kommun', 'förskola', 'fritidshem', 'pedagogisk omsorg', 'familjedaghem', 'nattis', 'fristående', 'dagmamma']
    },
    {
      ref: '2 §', rubrik: 'Bidragsåret',
      text: ['Bidraget lämnas för ett kalenderår i taget, alltså 1 januari–31 december. Det kallas bidragsår.'],
      nyckelord: ['bidragsår', 'kalenderår']
    },
    {
      ref: '3 §', rubrik: 'Hur hög avgiften får vara',
      text: [
        'Kommunen får statsbidraget bara om avgiften per månad inte är högre än en viss procent av hushållets avgiftsgrundande inkomst per månad.',
        'Det yngsta barnet betalar den högsta avgiften i sin verksamhet. Det näst yngsta betalar den näst högsta, och så vidare. Från det fjärde barnet i hushållet betalas ingen avgift.'
      ],
      lista: [
        'Förskola: högst 3 % för första barnet, 2 % för andra barnet och 1 % för tredje barnet.',
        'Fritidshem: högst 2 % för första barnet, 1 % för andra barnet och 1 % för tredje barnet.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Från höstterminen det år barnet fyller tre år får avgiften i förskolan bara gälla den tid som överstiger 525 timmar om året. För barn som går i förskola för att de behöver särskilt stöd får avgiften bara gälla tid över 15 timmar i veckan. Måltider ska ingå i avgiften. Enligt en dom från Kammarrätten i Stockholm 2019 ska även blöjor ingå.'
      },
      nyckelord: ['avgift', 'procent', 'syskon', 'syskonrabatt', 'yngsta barnet', 'fjärde barnet', 'avgiftsfri', '525 timmar', 'allmän förskola', 'måltider', 'blöjor']
    },
    {
      ref: '4 §', rubrik: 'Vem som räknas till hushållet',
      text: [
        'Ett hushåll är en ensamstående person eller ett gift par.',
        'Två personer som lever tillsammans utan att vara gifta räknas som ett hushåll om de har eller har haft barn tillsammans, eller om de är folkbokförda på samma adress. Det gäller också samkönade par som lever tillsammans och är folkbokförda på samma adress.'
      ],
      praktik: 'Det är hela hushållets inkomst som räknas, alltså även en ny partners inkomst om ni bor ihop.',
      nyckelord: ['hushåll', 'sambo', 'gift', 'makar', 'ensamstående', 'folkbokförd', 'ny partner']
    },
    {
      ref: '5 §', rubrik: 'Vilken inkomst avgiften räknas på',
      text: [
        'Avgiften räknas på hushållets lön före skatt och andra skattepliktiga inkomster av tjänst, plus överskott av näringsverksamhet. Det är inkomsten under bidragsåret som gäller.',
        'Inkomst över ett tak räknas inte. Taket är 42 000 kr uppräknat med inkomstindex sedan 2014, avrundat till närmaste tiotal kronor. För 2026 är taket 61 560 kr i månaden.',
        'Från den 1 juli 2026 räknas inte heller den del av inkomsten som understiger 10 001 kr. Det betyder att 10 000 kr dras av från alla hushålls inkomst. Den högsta avgiftsgrundande inkomsten blir då 51 560 kr i månaden.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Ett hushåll med en inkomst under 10 001 kr i månaden betalar ingen avgift från den 1 juli 2026. Från samma datum är den högsta avgiften i förskolan 1 547 kr för första barnet, 1 031 kr för andra och 516 kr för tredje. I fritidshemmet är den 1 031 kr för första barnet och 516 kr för andra och tredje.'
      },
      nyckelord: ['inkomst', 'inkomsttak', 'lön före skatt', 'bruttoinkomst', '10 000', '10001', '51 560', '61 560', 'inkomstindex', 'näringsverksamhet', 'avdrag', 'sänkt avgift']
    },
    {
      ref: '5 a §', rubrik: 'Skolverket meddelar årets belopp',
      text: ['Skolverket ska senast den 1 december året före bidragsåret meddela varje kommun den högsta avgiftsgrundande inkomsten och de högsta avgifterna för första, andra och tredje barnet i förskolan och fritidshemmet.'],
      praktik: 'Beloppen för 2027 ska alltså komma senast den 1 december 2026. Räknaren på den här sidan gäller bara 2026.',
      nyckelord: ['1 december', 'nya belopp', 'avgiftsnivåer', 'meddelande']
    },
    {
      ref: '6–7 §§', rubrik: 'Hur mycket varje kommun får',
      text: [
        'Regeringen bestämmer hur mycket pengar som finns totalt. Varje kommun får ett visst belopp, som Statistiska centralbyrån (SCB) räknar ut.',
        'SCB räknar fram ett index för varje kommun: kommunens standardkostnad för förskola, fritidshem och annan pedagogisk verksamhet i den kommunala kostnadsutjämningen, delad med landets genomsnitt. Standardkostnaden är en beräknad kostnad utifrån kommunens förutsättningar.',
        'Pengarna delas med antalet invånare i landet den 1 november året före bidragsåret. Kommunens belopp blir beloppet per invånare × kommunens index × kommunens invånare samma dag × en korrigeringsfaktor. Korrigeringsfaktorn ser till att summan för alla kommuner stämmer med det totala beloppet.'
      ],
      praktik: {
        rubrik: 'Bidragsramarna för 2026',
        text: 'Skolverket beslutade den 19 januari 2026 om ramar på totalt 2 594 999 855 kr. Av dem gällde 797 499 955 kr vårterminen och 1 797 499 900 kr höstterminen. Höstens belopp är högre eftersom anslaget höjdes med 1 miljard kr för 2026, så att avgifterna kunde sänkas från hösten.'
      },
      nyckelord: ['bidragsram', 'belopp', 'index', 'standardkostnad', 'invånare', '1 november', 'SCB', 'korrigeringsfaktor', 'miljard']
    },
    {
      ref: '8 §', rubrik: 'Preliminärt och slutligt belopp',
      text: [
        'SCB ska senast den 1 oktober året före bidragsåret meddela varje kommun ett preliminärt belopp.',
        'Skolverket fastställer sedan bidraget och meddelar kommunerna det slutliga beloppet i januari under bidragsåret.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'I december räknar SCB fram de slutliga ramarna och regeringen beslutar om nästa års anslag. De ramar Skolverket fastställer i januari kan skilja sig från SCB:s, till exempel om Skolverket avstår från att betala ut pengar till en kommun som bryter mot villkoren.'
      },
      nyckelord: ['preliminärt', '1 oktober', 'januari', 'fastställa', 'slutligt belopp']
    },
    {
      ref: '9 §', rubrik: 'Utbetalning',
      text: ['Skolverket betalar ut bidraget två gånger per år: senast den 31 mars och senast den 30 september.'],
      praktik: 'För 2026 betalades vårterminens belopp ut i mars och höstterminens belopp senast den 30 september.',
      nyckelord: ['utbetalning', '31 mars', '30 september', 'vårtermin', 'hösttermin']
    },
    {
      ref: '10–11 a §§', rubrik: 'Uppföljning och anmälan av förändringar',
      text: [
        'Skolverket ska följa upp och utvärdera vad bidraget leder till. Kommunen ska lämna de uppgifter som behövs, till Skolverket eller till en annan myndighet som regeringen har gett i uppdrag att följa upp bidraget.',
        'Från den 1 juli 2026 ska en kommun som har fått bidrag så snart som möjligt anmäla förändringar som kan påverka rätten till bidraget eller hur stort det blir.'
      ],
      praktik: 'Skolverket beskriver ingen särskild årlig redovisning. Men Skolverket kan kontrollera att pengarna används rätt, och kommunen måste kunna visa att taxan följer maxtaxans regler.',
      nyckelord: ['uppföljning', 'utvärdering', 'anmälan', 'förändring', 'uppgifter', 'kontroll']
    },
    {
      ref: '11 b–11 d §§', rubrik: 'Betala tillbaka (återkrav)',
      text: [
        'Reglerna gäller från den 1 juli 2026. En kommun ska betala tillbaka bidraget om något av det här gäller:'
      ],
      lista: [
        'Bidraget har lämnats på felaktig grund.',
        'Kommunen har inte lämnat de uppgifter som krävs för uppföljningen.',
        'Kommunen har inte följt villkoren för bidraget, till exempel avgiftstaket.'
      ],
      praktik: {
        rubrik: 'Återkrav och ränta',
        text: 'Skolverket ska då besluta att kräva tillbaka pengarna, helt eller delvis. Om det finns särskilda skäl får Skolverket avstå. Ränta tas ut från den trettionde dagen efter beslutet om återkrav: statens utlåningsränta plus två procentenheter. Även räntan kan efterges vid särskilda skäl.'
      },
      nyckelord: ['återkrav', 'återbetalning', 'betala tillbaka', 'ränta', 'särskilda skäl']
    },
    {
      ref: '12 §', rubrik: 'Hålla inne pengar',
      text: ['Om en kommun inte följer villkoren får Skolverket besluta att hela eller en del av bidraget ska hållas inne från kommande utbetalningar.'],
      nyckelord: ['hålla inne', 'innehålla', 'villkor', 'minskat bidrag']
    },
    {
      ref: '13–14 §§', rubrik: 'Föreskrifter och överklagande',
      text: [
        'Skolverket får skriva de föreskrifter som behövs för att tillämpa förordningen. Skolverkets sida om bidraget hänvisar bara till förordningen.',
        'Beslut om statsbidraget får inte överklagas.'
      ],
      nyckelord: ['föreskrifter', 'överklaga', 'skolfs']
    },
    {
      ref: 'Övergång', rubrik: 'Ändringen den 1 juli 2026',
      text: [
        'Ändringen SFS 2026:3 utfärdades den 15 januari 2026 och började gälla den 1 juli 2026. Den införde avdraget på 10 000 kr i 5 §, nya datum för utbetalning i 9 § och nya regler om anmälan och återkrav i 11 a–11 d §§.',
        'Enligt övergångsbestämmelsen gäller äldre regler fortfarande för bidrag som beslutades före den 1 juli 2026. Skolverket anger att de lägre avgifterna gäller från den 1 juli 2026. Förordningen började gälla den 1 juli 2001 och tillämpades första gången för bidragsåret 2002.'
      ],
      nyckelord: ['övergång', '2026:3', '1 juli 2026', 'ändring', 'äldre regler', 'ikraftträdande']
    }
  ],

  kalkylatorer: [
    {
      id: 'avgift', modul: 'maxtaxa-avgift',
      flik: 'Räkna på avgiften', eyebrow: 'Avgiftstak enligt 3 och 5 §§',
      rubrik: 'Hur hög', rubrikKursiv: 'får avgiften bli?',
      ingress: 'Ange hushållets inkomst och hur många barn som går i förskola och fritidshem. Räknaren visar den högsta avgift per månad som maxtaxan tillåter. Kommunens egen taxa kan vara lägre.',
      formel: { rubrik: 'Grundformeln', text: 'Avgift per barn = procentsats × (inkomsten upp till taket − 10 000 kr). Procentsatsen beror på verksamheten och på barnets plats i syskonskaran.' },
      resultatRubrik: 'Högsta avgift per månad',
      falt: [
        { id: 'period', typ: 'segment', etikett: 'Vilken period?', standard: 'jul2026',
          alternativ: [
            { varde: 'jul2026', etikett: 'Från 1 juli 2026', hjalp: '10 000 kr dras av från inkomsten. Högsta avgiftsgrundande inkomst är 51 560 kr.' },
            { varde: 'jan2026', etikett: 'Januari–juni 2026', hjalp: 'Inkomsttaket var 61 560 kr och inget avdrag gjordes.' }
          ] },
        { id: 'inkomst', typ: 'tal', etikett: 'Hushållets inkomst per månad', min: 0, max: 10000000, steg: 1, standard: 40000, enhet: 'kr',
          hjalp: 'Lön före skatt och andra skattepliktiga inkomster för hela hushållet.' },
        { id: 'forskolebarn', typ: 'tal', etikett: 'Barn i förskola', min: 0, max: 10, steg: 1, standard: 1,
          hjalp: 'Räkna med barn i pedagogisk omsorg i stället för förskola.' },
        { id: 'fritidsbarn', typ: 'tal', etikett: 'Barn i fritidshem', min: 0, max: 10, steg: 1, standard: 0,
          hjalp: 'Räkna med barn i pedagogisk omsorg i stället för fritidshem.' }
      ],
      exempel: [
        { etikett: 'Två barn i förskolan', varden: { inkomst: 55000, forskolebarn: 2 } },
        { etikett: 'Förskola och fritidshem', varden: { inkomst: 70000, forskolebarn: 1, fritidsbarn: 1 } },
        { etikett: 'Låg inkomst', varden: { inkomst: 12000 } },
        { etikett: 'Före 1 juli 2026', varden: { period: 'jan2026', inkomst: 70000 } }
      ],
      tabell: {
        rubrik: 'Högsta avgift per månad 2026',
        kolumner: ['Barn', 'Förskola jan–jun', 'Förskola från 1 juli', 'Fritidshem jan–jun', 'Fritidshem från 1 juli'],
        rader: [
          ['Första barnet', '1 847 kr', '1 547 kr', '1 231 kr', '1 031 kr'],
          ['Andra barnet', '1 231 kr', '1 031 kr', '616 kr', '516 kr'],
          ['Tredje barnet', '616 kr', '516 kr', '616 kr', '516 kr'],
          ['Fjärde barnet och fler', '0 kr', '0 kr', '0 kr', '0 kr']
        ],
        fotnot: 'Beloppen från 1 juli 2026 kommer från Skolverket. Beloppen för januari–juni 2026 är räknade med inkomsttaket 61 560 kr (51 560 + 10 000 kr) och avrundade till hela kronor.'
      },
      resultatNotis: 'Det här är taket. Kommunen får ta ut lägre avgifter. Från höstterminen det år barnet fyller tre år får avgiften i förskolan bara gälla tid över 525 timmar om året.',
      forbehall: [
        { rubrik: 'Syskonordningen', text: 'Räknaren utgår från att barnen i förskolan är yngre än barnen i fritidshemmet. Det yngsta barnet betalar alltid den högsta avgiften i sin verksamhet.' },
        { rubrik: 'Det här prövar räknaren inte', text: 'Kommunens egen taxa, avgiftsfri tid i förskolan från höstterminen det år barnet fyller tre år (525 timmar om året) och för barn som behöver särskilt stöd, omsorg på kvällar, nätter och helger eller hur kommunen räknar inkomsten i praktiken.' },
        { rubrik: 'Bara 2026', text: 'Räknaren använder beloppen för 2026. Skolverket meddelar beloppen för 2027 senast den 1 december 2026.' }
      ]
    }
  ],

  process: [
    { rubrik: 'Preliminärt besked', text: 'SCB meddelar kommunen ett preliminärt belopp för nästa år senast den 1 oktober.', ref: '8 §' },
    { rubrik: 'Nya avgiftsbelopp', text: 'Skolverket meddelar högsta inkomst och högsta avgifter för nästa år senast den 1 december. Uppdatera kommunens taxa och informera hushållen.', ref: '3–5 a §§' },
    { rubrik: 'Ramen fastställs', text: 'Skolverket fastställer kommunens bidrag i januari. Ingen ansökan behövs.', ref: '6–8 §§' },
    { rubrik: 'Utbetalning', text: 'Pengarna betalas ut senast den 31 mars och senast den 30 september.', ref: '9 §' },
    { rubrik: 'Följ villkoren och anmäl', text: 'Håll avgifterna inom taket, lämna uppgifter vid uppföljning och anmäl förändringar så snart som möjligt. Annars kan Skolverket hålla inne eller kräva tillbaka pengar.', ref: '10–12 §§' }
  ],

  underlagRubrik: 'Underlag att ha till hands',
  underlagIngress: 'Listan är till för kommunen. Markeringarna sparas inte – de försvinner när ni stänger sidan.',
  underlag: [
    'Skolverkets besked om högsta avgiftsgrundande inkomst och högsta avgifter för året.',
    'Kommunens beslutade taxa för förskola, fritidshem, pedagogisk omsorg och omsorg på obekväm tid.',
    'Rutin för hur hushållen lämnar uppgift om inkomst och hur hushåll räknas.',
    'Rutin för avgiftsfri tid för barn från tre år och för barn som behöver särskilt stöd.',
    'Skolverkets beslut om kommunens bidragsram och utbetalningar.',
    'Kontaktuppgifter till den som ansvarar för statsbidraget i kommunen.'
  ],

  kallor: [
    {
      titel: 'Förordning (2001:160) · Sveriges riksdag',
      url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-2001160-om-statsbidrag-till-kommuner_sfs-2001-160/',
      beskrivning: 'Källan för avgiftstak, hushåll, inkomst, beräkning av bidraget, utbetalning och återkrav. Paragrafhänvisningarna i guiden gäller den här förordningen.'
    },
    {
      titel: 'SFS 2026:3 · Svensk författningssamling',
      url: 'https://svenskforfattningssamling.se/sites/default/files/sfs/2026-01/SFS2026-3.pdf',
      beskrivning: 'Ändringen som började gälla den 1 juli 2026: avdraget på 10 000 kr, nya utbetalningsdatum, anmälan och återkrav.'
    },
    {
      titel: 'Statsbidrag för maxtaxa 2026 · Skolverket',
      url: 'https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-maxtaxa-2026',
      beskrivning: 'Högsta avgifter från 1 juli 2026, det höjda anslaget, bidragsramar och utbetalningar för 2026.'
    },
    {
      titel: 'Avgifter · Skolverket',
      url: 'https://www.skolverket.se/styrning-och-ansvar/regler-och-ansvar/ansvar-i-skolfragor/avgifter',
      beskrivning: 'Vad som gäller för avgifter i förskola, pedagogisk omsorg och fritidshem, även fristående, och vad som ska ingå i avgiften.'
    }
  ],

  forbehall: 'Guiden sammanfattar reglerna och visar hur avgiftstaket räknas ut. Räknaren visar bara den högsta tillåtna avgiften för 2026. Den prövar inte kommunens egen taxa, avgiftsfri tid eller hur inkomsten räknas i ett enskilt fall. Frågor om en egen avgift ställer ni till kommunen eller den fristående förskolan. För bidrag som beslutades före den 1 juli 2026 gäller enligt övergångsbestämmelsen de äldre reglerna.'
};
