/* Fördjupning: Europeiska socialfonden+ (ESF+) – projektmedel via Svenska ESF-rådet.
 * EU-medel, inte statsbidrag till skolan. Innehållet är stämt mot Nationellt program för Europeiska socialfonden+
 * 2021–2027 (version 5.0), Svenska ESF-rådets allmänna beslutsvillkor för ESF+ 2021–2027 (nr 11), förordning
 * (2022:1379) om förvaltning av program för vissa EU-fonder, ESF-rådets sidor om att söka stöd, projektekonomi,
 * medfinansiering och enhetskostnader samt utlysningsplanen (läst 2026-10-01). Schema: se FORDJUPNING.md. */
window.SB_FORDJUPNING = window.SB_FORDJUPNING || {};
window.SB_FORDJUPNING['esf-plus'] = {
  id: 'esf-plus',
  rubrik: 'ESF+ för skolan',
  rubrikKursiv: 'i klartext.',
  ingress: 'Hur fungerar Europeiska socialfonden+, när kan en skola eller huvudman söka och vad krävs av ett projekt? Här står reglerna på vanlig svenska. Ni kan också räkna på personalbudgeten med ESF-rådets enhetskostnader.',
  kontrollerad: '2026-10-01',
  forordning: {
    namn: 'Nationellt program för Europeiska socialfonden+ 2021–2027, förordning (2022:1379) och Svenska ESF-rådets allmänna beslutsvillkor',
    etikett: 'ESF+ 2021–2027',
    iText: 'i ESF-rådets styrande dokument',
    url: 'https://www.esf.se/uppfoljning-revision-och-regelverk/styrande-dokument/',
    lydelse: 'programmet i version 5.0 och allmänna beslutsvillkor nr 11'
  },

  snabbfaktaRubrik: 'Tre saker att känna till först',
  snabbfakta: [
    { rubrik: 'EU-fond, inte statsbidrag', text: 'ESF+ är EU:s socialfond. Svenska ESF-rådet förvaltar den i Sverige. Stödet består av EU-pengar och pengar från statsbudgeten, och projekten bidrar ofta själva.' },
    { rubrik: 'Allt avgörs i utlysningen', text: 'Ni kan bara söka när en utlysning passar ert projekt. Utlysningen anger vem som får söka, målgrupp, belopp, budgetmodell och medfinansiering.' },
    { rubrik: 'Pengarna kommer i efterskott', text: 'Ni betalar kostnaderna först och ansöker sedan om utbetalning. Organisationen behöver kunna ligga ute med pengar.' }
  ],
  snabbfaktaNot: 'ESF+ handlar om arbetsmarknad och utbildning. För skolan är det främst projekt mot studieavbrott, för unga från 13 år och för kompetensutveckling av personal.',

  begreppRubrik: 'Ord som återkommer',
  begrepp: [
    { term: 'Utlysning', forklaring: 'En inbjudan att söka stöd för ett visst syfte, i en viss region eller nationellt, under en viss tid.' },
    { term: 'Programområde', forklaring: 'ESF+ är indelat i områden. A1 är kompetensutveckling för anställda och A2 insatser för människor utanför arbetsmarknaden, bland annat unga som riskerar att avbryta studierna.' },
    { term: 'Projektägare och samverkanspart', forklaring: 'Projektägaren samordnar och tar emot pengarna. Samverkansparter är andra organisationer som får stöd för sina kostnader i projektet.' },
    { term: 'Enhetskostnad', forklaring: 'Ett fast timpris för personal som ESF-rådet bestämt. Ni räknar med det i stället för faktisk lön.' },
    { term: 'Schablon', forklaring: 'Ett påslag i procent på personalkostnaden, 15 eller 40 procent, som ska täcka andra kostnader.' },
    { term: 'Medfinansiering', forklaring: 'Den del av projektet som ni eller andra står för, till exempel egen personaltid. Andelen står i utlysningen.' }
  ],

  sektioner: {
    regler: {
      rubrik: 'Från regelverk', rubrikKursiv: 'till praktik.',
      ingress: 'Rubrikerna följer stegen i ett ESF+-projekt och ESF-rådets allmänna beslutsvillkor. Öppna det ni behöver, eller sök på till exempel ”studieavbrott”, ”medfinansiering” eller ”utbetalning”.'
    },
    praktik: {
      rubrik: 'Så används', rubrikKursiv: 'reglerna.',
      ingress: 'Ett ESF+-projekt kräver noggrann ekonomi och uppföljning. Börja med utlysningsplanen och prata med ESF-rådets regionkontor innan ni skriver ansökan.'
    }
  },

  paragrafer: [
    {
      ref: 'Socialfondsprogrammet', rubrik: 'Vad ESF+ är till för',
      text: [
        'ESF+ ska ge fler människor arbete, stärka kompetensen hos dem som arbetar och stötta dem som står långt från arbetsmarknaden. Programmet gäller 2021–2027 och har sex programområden, A–F.',
        'Projekten finansieras med pengar från socialfonden, med statliga medel och med medfinansiering som projekten själva ordnar.',
        'Svenska ESF-rådet bestämmer vilka utlysningar som görs, nationellt eller i åtta regioner.'
      ],
      nyckelord: ['ESF', 'socialfonden', 'EU-fond', 'programområde', 'syfte', 'arbetsmarknad']
    },
    {
      ref: 'Insatser för skolan', rubrik: 'Vad skolor och huvudmän kan söka för',
      text: [
        'Inom programområde A2 prioriterar programmet insatser som gör att fler slutför grundskolan, gymnasiet och eftergymnasial utbildning. Målgruppen är bland annat unga från 13 år som riskerar studieavbrott.'
      ],
      lista: [
        'Tidigt och förebyggande arbete mot studieavbrott.',
        'Stöd till att fullfölja gymnasiestudier, till exempel inom komvux eller folkhögskola.',
        'En bättre övergång mellan skola, vidare studier och arbetsliv, och uppsökande arbete för unga som varken arbetar eller studerar.',
        'Insatser för lärare och annan personal som arbetar för att förebygga studieavbrott, och för hur skolan organiseras.'
      ],
      praktik: 'Inom A1 kan personal få kompetensutveckling. Hur en utlysning riktar sig avgör om just skolpersonal kan delta.',
      nyckelord: ['studieavbrott', 'skolavhopp', 'unga', '13 år', 'gymnasiet', 'komvux', 'lärare', 'personal', 'NEET', 'övergång']
    },
    {
      ref: 'Utlysningen', rubrik: 'Utlysningarna styr allt',
      text: [
        'Utlysningen bygger på programmet och på den nationella eller regionala handlingsplanen. Där står vilka utmaningar projekten ska lösa, vilka som får söka, budgetmodell, medfinansiering och sista ansökningsdag.',
        'Läs också de allmänna beslutsvillkoren som är bilaga till utlysningen. De gäller för beviljade projekt.'
      ],
      praktik: {
        rubrik: 'ESF-rådets utlysningsplan',
        text: 'Planen är preliminär. Utlysningar med skolanknytning den 1 oktober 2026: Norra Mellansverige (A1) om kompetensutveckling för personal inom socialtjänst och skola som arbetar med barn och unga vuxna 13–29 år, 26 oktober 2026–16 mars 2027. Stockholm (A2) om bland annat unga från 13 år som riskerar studieavbrott, 15 december 2026–11 mars 2027. Hösten 2027 planerar Norra Mellansverige en utlysning (A2) som bland annat gäller skolelever 13–16 år och skolnärvaro.'
      },
      nyckelord: ['utlysning', 'utlysningsplan', 'region', 'Stockholm', 'Norra Mellansverige', 'handlingsplan', 'sista dag']
    },
    {
      ref: 'Vem kan söka', rubrik: 'Vem kan söka',
      text: [
        'Privata, offentliga och ideella organisationer kan söka, till exempel kommuner, aktiebolag och föreningar. Privatpersoner, enskilda firmor, handelsbolag och kommanditbolag kan inte söka.',
        'Varje utlysning anger vilka sektorer som får söka. En fristående skolhuvudman kan söka om utlysningen tillåter privata aktörer.'
      ],
      praktik: {
        rubrik: 'ESF-rådets förklaring',
        text: 'Stöd som ger ett företag en ekonomisk fördel kan vara statsstöd. Då gäller särskilda regler, till exempel om stöd av mindre betydelse. ESF-rådet beskriver i utlysningen och beslutet vad som gäller.'
      },
      nyckelord: ['vem kan söka', 'fristående', 'aktiebolag', 'kommun', 'förening', 'privat', 'statsstöd', 'de minimis']
    },
    {
      ref: 'Urvalskriterier', rubrik: 'Fem krav på alla ansökningar',
      lista: [
        'En tydlig problemanalys som utgår från målgruppens behov, med orsaker, konsekvenser och utmaningar för jämställdhet, tillgänglighet och icke-diskriminering.',
        'Mål som ligger i linje med utlysningen, svarar mot problemet och kan följas upp.',
        'Relevanta metoder, med en motivering som bygger på forskning, omvärldsbevakning eller erfarenhet.',
        'En projektorganisation med kapacitet och kompetens, och en kostnadseffektiv budget.',
        'Förankring hos projektägare och deltagande aktörer, en styrgrupp och en strategi för hur resultaten tas till vara.'
      ],
      text: ['Alla ansökningar ska leva upp till ESF+:s urvalskriterier:'],
      praktik: 'ESF-rådet prioriterar sedan mellan ansökningarna utifrån handlingsplanen och de prioriteringsgrunder som gäller i utlysningen. Ansökan ska skrivas på svenska.',
      nyckelord: ['urvalskriterier', 'problemanalys', 'mål', 'metod', 'förankring', 'styrgrupp', 'jämställdhet']
    },
    {
      ref: 'Projektets ramar', rubrik: 'Längd, parter och förstudier',
      text: [
        'Utlysningen styr hur länge ett projekt får pågå, men aldrig längre än 36 månader.',
        'Ett projekt kan drivas av flera organisationer. Projektägaren samordnar, skickar in ansökningar om utbetalning och fördelar pengarna till samverkansparterna.',
        'Vid en förstudie används ofta en klumpsumma. Den betalas ut om slutrapporten uppfyller kraven i beslutet, annars betalas inget ut.'
      ],
      nyckelord: ['36 månader', 'projektlängd', 'projektägare', 'samverkanspart', 'förstudie', 'klumpsumma']
    },
    {
      ref: 'Budget och personalkostnader', rubrik: 'Så budgeteras kostnaderna',
      text: [
        'Personal budgeteras alltid med enhetskostnader per timme, utifrån funktion eller yrkeskategori. Utlysningen anger vilken modell som gäller. En heltid är 1 720 timmar per år.',
        'Ovanpå personalkostnaden läggs en schablon. 15 procent täcker indirekta kostnader, som lokaler och administration. 40 procent ska täcka alla övriga kostnader i projektet.',
        'Med 15 procent kan resor, externa tjänster, utrustning och deltagarlokaler budgeteras separat. Upphandlingsreglerna gäller för inköp i projektet.'
      ],
      praktik: {
        rubrik: 'ESF-rådets förklaring',
        text: 'Budgetmodellen utifrån funktion med 40 procent gäller normalt programområde A2 och C. Modellen utifrån yrkeskategori med 15 procent gäller normalt A1, D och E. Kommun- och regionanställda klassas efter sin AID-kod. Moms kan vara stödberättigande i projekt under 50 miljoner kronor om den är en kostnad för er.'
      },
      nyckelord: ['budget', 'enhetskostnad', 'timpris', 'schablon', '15 procent', '40 procent', '1720 timmar', 'personal', 'moms', 'upphandling']
    },
    {
      ref: 'Medfinansiering', rubrik: 'Det ni själva bidrar med',
      text: [
        'Flera programområden kräver att projektet står för en del av kostnaderna. Andelen står i utlysningen. Den får varken överstigas eller understigas.',
        'Medfinansiering kan vara ersättning eller lön till deltagare, bidrag i annat än pengar från externa aktörer, en andel av projektägarens egna kostnader eller kontanta pengar.'
      ],
      praktik: {
        rubrik: 'ESF-rådets förklaring',
        text: 'På programsidan anges krav på medfinansiering: 46 procent i programområde A (40 procent i Norra Mellansverige), 55 procent i D, 5 procent i E och ingen i C. Bara deltagarnas faktiska tid får räknas. Stöd och medfinansiering ska vara i balans när projektet avslutas.'
      },
      nyckelord: ['medfinansiering', '46 procent', 'egen insats', 'andel av kostnad', 'deltagarersättning', 'kontant']
    },
    {
      ref: 'Stödberättigande kostnader', rubrik: 'Vilka kostnader som godtas',
      lista: [
        'Kostnaden ska vara nödvändig för projektet och skälig.',
        'Den ska ha uppstått hos en stödmottagare under projekttiden i beslutet.',
        'Den ska följa EU-regler, svenska regler och villkoren i beslutet, och kunna styrkas.',
        'Direkta kostnader ska vara betalda och bokförda för sig, med en egen kod för projektet.'
      ],
      text: ['ESF-rådet prövar varje kostnad när ni ansöker om utbetalning. En kostnad godtas bara om den uppfyller kraven:'],
      praktik: 'En kostnad som redan betalats av ett annat EU-projekt eller annat offentligt stöd godtas inte. Skuldräntor godtas inte heller.',
      nyckelord: ['stödberättigande', 'kostnad', 'bokföring', 'dubbelfinansiering', 'kvitto', 'skälig']
    },
    {
      ref: 'Utbetalning', rubrik: 'Ansökan om utbetalning',
      text: [
        'Projektägaren ansöker om utbetalning för en kalendermånad i taget, senast två månader efter månadens slut, om inte beslutet säger något annat.',
        'Den sista ansökan ska komma in senast två månader efter projektets slut och innehålla en slutrapport.',
        'ESF-rådet kan efter ansökan betala förskott på upp till halva stödet, högst 400 000 kronor.'
      ],
      praktik: {
        rubrik: 'ESF-rådets förklaring',
        text: 'Alla utbetalningar görs i efterskott, och kommer senast 80 dagar efter ansökan. Planera likviditeten så att ni klarar att betala kostnaderna innan pengarna kommer.'
      },
      nyckelord: ['utbetalning', 'efterskott', 'förskott', '400000', 'månadsvis', '80 dagar', 'likviditet']
    },
    {
      ref: 'Uppföljning och information', rubrik: 'Rapporter, deltagare och synlighet',
      lista: [
        'Kvartalsrapport var tredje månad, med start tre månader efter projektstart. Vid avslut lämnas slutrapport.',
        'Deltagare rapporteras till SCB när beslutet säger det. Deltagarna ska informeras om hur deras personuppgifter hanteras.',
        'Utvärdering under projektet när beslutet kräver det.',
        'Information om att insatsen delfinansieras av EU, enligt EU:s regler om synlighet.',
        'Handlingar sparas i fem år från 31 december det år ESF-rådet gjorde sista utbetalningen. Vid statsstöd i tio år.'
      ],
      text: ['Under projektet gäller bland annat:'],
      nyckelord: ['kvartalsrapport', 'slutrapport', 'SCB', 'deltagare', 'utvärdering', 'EU-logga', 'arkivering', 'fem år']
    },
    {
      ref: 'Förändringar i projekt', rubrik: 'När något ändras',
      text: [
        'ESF-rådet ska snarast få veta om förutsättningarna ändras eller om ni vill avbryta projektet.',
        'Väsentliga ändringar av mål, projektperiod, metod, samverkansparter eller finansiering kräver en ansökan om ändrat beslut. Ändringen får genomföras först när ESF-rådet beslutat om den.'
      ],
      nyckelord: ['ändring', 'ändringsbeslut', 'avbryta', 'samverkanspart', 'projektperiod']
    },
    {
      ref: 'Hinder och återkrav', rubrik: 'Stopp för utbetalning och återkrav',
      text: [
        'Enligt förordning (2022:1379) kan ESF-rådet besluta att inte betala ut stödet, helt eller delvis, om något av detta gäller:'
      ],
      lista: [
        'Stödet har beviljats felaktigt eller med för högt belopp på grund av oriktiga uppgifter.',
        'Stödet har av annat skäl beviljats felaktigt och mottagaren borde ha insett det.',
        'Stödet används inte, eller inte för det det beviljades för.',
        'Villkoren för stödet har inte följts.'
      ],
      praktik: 'Har pengarna redan betalats ut kan ESF-rådet kräva tillbaka dem med ränta. En samverkanspart betalar tillbaka till projektägaren, som skickar vidare till ESF-rådet.',
      nyckelord: ['återkrav', 'återbetalning', 'ränta', 'hinder', 'villkor', 'oriktiga uppgifter']
    }
  ],

  kalkylatorer: [
    {
      id: 'personal', modul: 'esf-plus-personal',
      flik: 'Räkna på personal', eyebrow: 'Enhetskostnader per funktion',
      rubrik: 'Vad kostar', rubrikKursiv: 'projektpersonalen?',
      ingress: 'Räknaren använder ESF-rådets enhetskostnader per funktion och visar hur kostnaden delas mellan stöd och medfinansiering. Den är en förenkling. Vilken budgetmodell, schablon och medfinansiering som gäller står i utlysningen.',
      formel: { rubrik: 'Grundformeln', text: 'Kostnad = 1 720 timmar × månader/12 × tjänstgöringsgrad × antal × timpris. Stöd = kostnad × (1 − medfinansieringsgrad).' },
      resultatRubrik: 'Personalkostnad inklusive schablon',
      falt: [
        { id: 'funktion', typ: 'val', etikett: 'Funktion i projektet', standard: 'medarbetare',
          alternativ: [
            { varde: 'plStor', etikett: 'Projektledare i större projekt (över 20 miljoner kr)' },
            { varde: 'pl', etikett: 'Projektledare eller delprojektledare' },
            { varde: 'medarbetare', etikett: 'Projektmedarbetare' },
            { varde: 'ekonom', etikett: 'Projektekonom' },
            { varde: 'admin', etikett: 'Projektadministratör' }
          ] },
        { id: 'region', typ: 'segment', etikett: 'Var finns personalen?', standard: 'riket',
          alternativ: [{ varde: 'riket', etikett: 'Riket' }, { varde: 'stockholm', etikett: 'Stockholm' }] },
        { id: 'schablon', typ: 'segment', etikett: 'Schablon enligt utlysningen', standard: 's40',
          alternativ: [
            { varde: 's40', etikett: '40 %', hjalp: 'Täcker alla övriga kostnader i projektet.' },
            { varde: 's15', etikett: '15 %', hjalp: 'Täcker indirekta kostnader. Andra direkta kostnader budgeteras separat.' }
          ] },
        { id: 'antal', typ: 'tal', etikett: 'Antal personer med samma upplägg', min: 1, max: 100, steg: 1, standard: 2 },
        { id: 'grad', typ: 'reglage', etikett: 'Tjänstgöringsgrad i projektet', min: 1, max: 100, steg: 1, standard: 50, enhet: '%' },
        { id: 'manader', typ: 'reglage', etikett: 'Antal månader', min: 1, max: 36, steg: 1, standard: 24, enhet: 'mån' },
        { id: 'medfinansiering', typ: 'reglage', etikett: 'Medfinansieringsgrad enligt utlysningen', min: 0, max: 100, steg: 1, standard: 46, enhet: '%',
          hjalp: 'Programområde A: 46 % (Norra Mellansverige 40 %). D: 55 %. E: 5 %. C: 0 %.' }
      ],
      exempel: [
        { etikett: 'Projektledare på heltid i tre år', varden: { funktion: 'pl', antal: 1, grad: 100, manader: 36 } },
        { etikett: 'Två medarbetare på halvtid i Stockholm', varden: { region: 'stockholm', antal: 2, grad: 50, manader: 24 } },
        { etikett: 'Administratör, 15 % schablon, Norra Mellansverige', varden: { funktion: 'admin', schablon: 's15', antal: 1, grad: 25, manader: 30, medfinansiering: 40 } }
      ],
      resultatNotis: 'Det här är bara personalen och schablonen. Vad projektet får beslutar ESF-rådet efter bedömning, och pengarna betalas ut i efterskott för den tid som faktiskt arbetats.',
      forbehall: [
        { rubrik: 'Formel', text: 'Timpriserna kommer från ESF-rådets tabell ”Enhetskostnader personal – funktion (POA, B, C, D och E)” och inkluderar semester, lönekostnadspåslag och schablonen. En heltid är 1 720 timmar per år, 143,33 timmar per månad. Räknaren avrundar kostnaden till hela kronor.' },
        { rubrik: 'Förenklad medfinansiering', text: 'Räknaren delar kostnaden med den medfinansieringsgrad ni anger, som om den gällde hela projektets kostnad. I ett riktigt projekt kan medfinansieringen bestå av till exempel deltagarersättning, och utlysningen anger exakt hur den räknas.' },
        { rubrik: 'Det här prövar räknaren inte', text: 'Om ni får söka, om utlysningen använder budgetmodellen per funktion, eller kostnader utöver personal och schablon. Modellen per yrkeskategori, som normalt gäller för A1, D och E, har andra timpriser och finns inte med.' }
      ],
      tabell: {
        rubrik: 'Enhetskostnader per funktion, Riket',
        kolumner: ['Funktion', 'Timlön', 'Med 15 % schablon', 'Med 40 % schablon'],
        rader: [
          ['Projektledare i större projekt', '646 kr', '742,90 kr', '904,40 kr'],
          ['Projektledare eller delprojektledare', '592 kr', '680,80 kr', '828,80 kr'],
          ['Projektmedarbetare', '482 kr', '554,30 kr', '674,80 kr'],
          ['Projektekonom', '579 kr', '665,85 kr', '810,60 kr'],
          ['Projektadministratör', '441 kr', '507,15 kr', '617,40 kr']
        ],
        fotnot: 'Per timme. Stockholm har högre belopp, till exempel 718,20 kr för en projektmedarbetare med 40 % schablon. Enhetskostnaderna gäller programperioden ut enligt ESF-rådet.'
      }
    }
  ],

  process: [
    { rubrik: 'Hitta en utlysning', text: 'Läs utlysningsplanen och er regions handlingsplan. Passar projektet en utlysning, läs den och de allmänna beslutsvillkoren noga.', ref: 'Utlysningen' },
    { rubrik: 'Prata med regionkontoret', text: 'Gå på ESF-rådets informationsmöte och kontakta en samordnare eller ekonom i er region. Förankra projektet hos ledning och samverkansparter.', ref: 'Urvalskriterier' },
    { rubrik: 'Ansök i Projektrummet', text: 'Skriv ansökan på svenska med problemanalys, mål, metoder, budget och medfinansiering. Skicka in i ESF-rådets e-tjänst Projektrummet.', ref: 'Budget och personalkostnader' },
    { rubrik: 'Beslut och projektåtagande', text: 'Beviljas ni stöd ska ni skriva under ett projektåtagande senast tre veckor efter beslutet. Sedan kan projektet starta enligt beslutet.', ref: 'Projektets ramar' },
    { rubrik: 'Genomför, redovisa och rapportera', text: 'Ansök om utbetalning varje månad, lämna kvartalsrapport var tredje månad och rapportera deltagare. Den sista ansökan innehåller slutrapporten.', ref: 'Utbetalning' }
  ],

  underlagRubrik: 'Underlag att ha till hands',
  underlagIngress: 'Använd listan när ni förbereder ansökan och projektets ekonomi. Markeringarna sparas inte – de försvinner när ni stänger sidan.',
  underlag: [
    'Utlysningen, de allmänna beslutsvillkoren och regionens handlingsplan.',
    'Problemanalys med målgruppens behov och utmaningar för jämställdhet, tillgänglighet och icke-diskriminering.',
    'Mål, metoder, projektorganisation och styrgrupp.',
    'Budget med funktioner, tjänstgöringsgrad och månader, och vilken schablon som gäller.',
    'Underlag för medfinansieringen, till exempel avtal med medfinansiärer.',
    'En plan för likviditeten, eftersom pengarna kommer i efterskott.',
    'Rutiner för tidrapportering, bokföring med egen projektkod och deltagarrapportering.'
  ],

  kallor: [
    {
      titel: 'Styrande dokument för ESF+ 2021–2027 · Svenska ESF-rådet',
      url: 'https://www.esf.se/uppfoljning-revision-och-regelverk/styrande-dokument/',
      beskrivning: 'Länkar till EU:s förordningar, förordning (2022:1379) och ESF-rådets allmänna beslutsvillkor.'
    },
    {
      titel: 'Socialfondsprogrammet ESF+ 2021–2027 · Svenska ESF-rådet',
      url: 'https://www.esf.se/stod-och-finansiering/socialfondsprogrammet-esf-2021-2027/',
      beskrivning: 'Programområdena och kraven på medfinansiering. Sidan länkar till det nationella programmet i version 5.0.'
    },
    {
      titel: 'Utlysningsplan · Svenska ESF-rådet',
      url: 'https://www.esf.se/utlysningar/utlysningsplan/',
      beskrivning: 'Preliminär plan för kommande utlysningar per region, med datum.'
    },
    {
      titel: 'Sök stöd steg för steg · Svenska ESF-rådet',
      url: 'https://www.esf.se/soka-stod/sok-stod-steg-for-steg/',
      beskrivning: 'Urvalskriterierna, finansieringen och vad en ansökan ska innehålla.'
    },
    {
      titel: 'Projektekonomi inför ansökan · Svenska ESF-rådet',
      url: 'https://www.esf.se/soka-stod/projektekonomi-soka-stod/',
      beskrivning: 'Stödberättigande kostnader, schabloner, medfinansiering och utbetalning i efterskott.'
    },
    {
      titel: 'Dokument – söka stöd · Svenska ESF-rådet',
      url: 'https://www.esf.se/soka-stod/dokument-att-ansoka/',
      beskrivning: 'Enhetskostnader för personal och deltagare och de allmänna beslutsvillkoren.'
    },
    {
      titel: 'Förordning (2022:1379) · Sveriges riksdag',
      url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-20221379-om-forvaltning-av-program_sfs-2022-1379/',
      beskrivning: 'Den svenska förordningen om förvaltning av program för vissa EU-fonder, bland annat om förskott, hinder mot utbetalning och återkrav.'
    }
  ],

  forbehall: 'ESF+ är en EU-fond och inget statsbidrag till skolan, även om en del av stödet kommer från statsbudgeten. Guiden sammanfattar programmet, ESF-rådets anvisningar och de allmänna beslutsvillkoren. Varje utlysning har egna villkor som går före det som står här. Utlysningsplanen är preliminär. Räknaren gäller bara personalkostnader enligt budgetmodellen per funktion. Programperioden slutar 2027.'
};
