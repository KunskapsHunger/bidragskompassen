/* Fördjupning: Statsbidrag för ämneslärarorganisationer. Bidraget har ingen egen förordning.
 * Pengarna kommer från regleringsbrevet för Skolverket (2026: anslag 1:5 ap. 4, 700 000 kr) och villkoren står på
 * Skolverkets sidor för 2026 och 2027 (senast uppdaterad 17 september 2026). Paragrafernas ref är avsnitt, inte §§.
 * Schema: se FORDJUPNING.md, "Regelverk som inte är en svensk förordning". */
window.SB_FORDJUPNING = window.SB_FORDJUPNING || {};
window.SB_FORDJUPNING['amneslararorganisationer'] = {
  id: 'amneslararorganisationer',
  rubrik: 'Ämneslärarorganisationer',
  rubrikKursiv: 'i klartext.',
  ingress: 'Ett litet bidrag till ideella, riksomfattande föreningar för lärare i ett ämne. Här står villkoren på vanlig svenska, och ni kan räkna på hur pengarna fördelas.',
  kontrollerad: '2026-10-01',
  forordning: {
    namn: 'Skolverkets villkor för statsbidrag för ämneslärarorganisationer 2027',
    etikett: 'Skolverkets villkor 2027',
    iText: 'på Skolverkets sida',
    url: 'https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-amneslararorganisationer-2027',
    lydelse: 'sidan uppdaterad 17 september 2026'
  },

  snabbfaktaRubrik: 'Tre saker att känna till först',
  snabbfakta: [
    { rubrik: 'Ingen egen förordning', text: 'Regeringen avsätter pengarna i Skolverkets regleringsbrev. Villkoren och fördelningen bestämmer Skolverket.' },
    { rubrik: 'Mest lika för alla', text: '65 procent delas lika mellan organisationerna. Bara 35 procent beror på hur många medlemmar ni har.' },
    { rubrik: 'Lärare har nytta – skolor söker inte', text: 'Skolor och huvudmän kan inte söka. Lärare på alla skolor kan ha nytta av det föreningarna gör för ämnet.' }
  ],
  snabbfaktaNot: 'För 2026 fick 13 organisationer dela på 700 000 kr. Beloppet för 2027 bestäms i regleringsbrevet i december 2026.',

  begreppRubrik: 'Ord som återkommer',
  begrepp: [
    { term: 'Ämneslärarorganisation', forklaring: 'En ideell förening för lärare i ett visst ämne, till exempel matematik, svenska eller moderna språk.' },
    { term: 'Kursplan och ämnesplan', forklaring: 'De nationella styrdokumenten för ett ämne i grundskolan (kursplan) och gymnasieskolan (ämnesplan).' },
    { term: 'Bidragsgrundande medlem', forklaring: 'En medlem som räknas när Skolverket fördelar den rörliga delen. En oberoende revisor ska ha kontrollerat antalet.' },
    { term: 'Regleringsbrev', forklaring: 'Regeringens årliga beslut om vad Skolverket ska göra och hur myndighetens pengar får användas.' }
  ],

  sektioner: {
    regler: {
      rubrik: 'Från villkor', rubrikKursiv: 'till praktik.',
      ingress: 'Bidraget styrs inte av en förordning. Rubrikerna följer i stället regleringsbrevet och Skolverkets sida för 2027.'
    },
    praktik: {
      rubrik: 'Så används', rubrikKursiv: 'reglerna.',
      ingress: 'Föreningen ansöker hösten före bidragsåret och får pengarna i två delar under året.'
    }
  },

  paragrafer: [
    {
      ref: 'Regleringsbrevet', rubrik: 'Var pengarna kommer ifrån',
      text: [
        'Bidraget har ingen egen förordning. I regleringsbrevet för 2026 står att Skolverket ska betala ut 700 000 kr till ämneslärarorganisationer.',
        'Regleringsbrevet för 2027 kommer i mitten av december 2026. Först då är det klart hur mycket som finns för 2027.'
      ],
      nyckelord: ['regleringsbrev', 'anslag', '700000', 'förordning', 'belopp']
    },
    {
      ref: 'Vem kan söka', rubrik: 'Vem kan söka',
      text: [
        'Organisationer som arbetar för att utveckla ämnen i skolväsendet. Bidraget ska gå till ämnen som har en nationell kursplan eller ämnesplan.',
        'Skolor och huvudmän kan inte söka. Lärare på alla skolor kan ha nytta av bidraget genom föreningarnas verksamhet.'
      ],
      nyckelord: ['ämneslärarförening', 'lärarförening', 'kursplan', 'ämnesplan', 'ämnesutveckling', 'skola', 'huvudman']
    },
    {
      ref: 'Villkor', rubrik: 'Villkor för organisationen',
      text: ['För att få bidrag ska organisationen:'],
      lista: [
        'arbeta för att främja ämnets utveckling,',
        'ha riksomfattande verksamhet,',
        'vara ideell,',
        'inte ha svenska skatteskulder eller avgifter hos Kronofogden,',
        'inte vara i likvidation eller konkurs.'
      ],
      praktik: {
        rubrik: 'Ändrat inför 2027',
        text: 'För 2026 krävde Skolverket också att minst 60 procent av medlemmarna var verksamma lärare i skolväsendet och att organisationen hade fler än 100 medlemmar. De kraven står inte med på sidan för 2027. Det framgår inte om de har tagits bort. Fråga Skolverket om ni är osäkra.'
      },
      nyckelord: ['villkor', 'riksomfattande', 'ideell', 'kronofogden', 'konkurs', '60 procent', '100 medlemmar', 'lärare']
    },
    {
      ref: 'Fördelning', rubrik: 'Så fördelas pengarna',
      text: [
        '65 procent av pengarna delas lika mellan organisationerna som grundbidrag.',
        '35 procent fördelas efter antal bidragsgrundande medlemmar. Varje medlem motsvarar en fast summa.'
      ],
      praktik: {
        rubrik: 'Exempel från 2026',
        text: '700 000 kr delades av 13 organisationer. Grundbidraget blev då 0,65 × 700 000 ÷ 13 = 35 000 kr per organisation. Resten, 245 000 kr, fördelades efter medlemmar. Beslutet visar belopp mellan 40 513 och 87 371 kr.'
      },
      nyckelord: ['fördelning', 'grundbidrag', '65 procent', '35 procent', 'medlemmar', '35000']
    },
    {
      ref: 'Ansökan', rubrik: 'Ansökan och bilagor',
      text: [
        'Ansökan för 2027 är öppen 1 oktober–2 november 2026 i e-tjänsten för statsbidrag. Skolverket planerar beslut i februari 2027.',
        'I ansökan beskriver ni organisationens syfte och mål, hur ni främjar ämnet med konkreta exempel från det senaste verksamhetsåret och vad ni planerar för 2027. Ni anger också antal medlemmar och bidragsgrundande medlemmar.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'En ny organisation behövde registrera sig och ansöka om ombud senast den 17 september 2026. Den som är sen kan ändå mejla Skolverket och ansöka på annat sätt. Stadgar, verksamhetsberättelse och revisorsintyg begär Skolverket in efter ansökan. Revisorsintyget ska komma från en oberoende revisor som har kontrollerat medlemsantalet och antalet bidragsgrundande medlemmar.'
      },
      nyckelord: ['ansökan', 'e-tjänst', 'ombud', 'revisorsintyg', 'stadgar', 'verksamhetsberättelse', 'beslut']
    },
    {
      ref: 'Utbetalning och kontroll', rubrik: 'Utbetalning, kostnader och kontroll',
      text: [
        'Hälften betalas ut i samband med beslutet och hälften i juni.',
        'Skolverkets sida beskriver ingen särskild redovisning. Skolverket kan kontrollera alla som får bidrag, så spara underlag för kostnaderna.'
      ],
      praktik: {
        rubrik: 'Moms och inköp',
        text: 'Kan organisationen dra av momsen räknas kostnaderna utan moms. Annars räknas de med moms. En tillgång som kostar mer än ett halvt prisbasbelopp (29 400 kr för 2025) och håller mer än tre år ska normalt skrivas av. Då räknas bara årets avskrivning som kostnad.'
      },
      nyckelord: ['utbetalning', 'juni', 'kontroll', 'underlag', 'moms', 'avskrivning', 'prisbasbelopp']
    }
  ],

  kalkylatorer: [
    {
      id: 'fordelning', modul: 'amneslararorganisationer-fordelning',
      flik: 'Räkna på fördelningen', eyebrow: 'Skolverkets fördelningsmodell',
      rubrik: 'Grundbidrag', rubrikKursiv: 'plus medlemmar.',
      ingress: 'Ange hur mycket som ska fördelas, hur många organisationer som delar och hur många bidragsgrundande medlemmar som finns. Standardvärdena för pengar och organisationer är från 2026. Medlemsantalen är påhittade.',
      formel: { rubrik: 'Grundformeln', text: 'Bidrag = 0,65 × pengarna ÷ antal organisationer + 0,35 × pengarna × era medlemmar ÷ alla organisationers medlemmar.' },
      resultatRubrik: 'Ert ungefärliga bidrag',
      falt: [
        { id: 'ram', typ: 'tal', etikett: 'Pengar att fördela', min: 1, max: 1000000000, steg: 1, standard: 700000, enhet: 'kr',
          hjalp: '700 000 kr för 2026. Beloppet för 2027 bestäms i december 2026.' },
        { id: 'antalOrg', typ: 'tal', etikett: 'Antal organisationer som får bidrag', min: 1, max: 1000, steg: 1, standard: 13,
          hjalp: '13 organisationer för 2026.' },
        { id: 'egnaMedlemmar', typ: 'tal', etikett: 'Era bidragsgrundande medlemmar', min: 0, max: 10000000, steg: 1, standard: 400 },
        { id: 'allaMedlemmar', typ: 'tal', etikett: 'Alla organisationers bidragsgrundande medlemmar', min: 1, max: 10000000, steg: 1, standard: 10000,
          hjalp: 'Skolverket publicerar inte summan. Använd en uppskattning.' }
      ],
      exempel: [
        { etikett: 'Liten förening', varden: { egnaMedlemmar: 150 } },
        { etikett: 'Stor förening', varden: { egnaMedlemmar: 2000 } }
      ],
      resultatNotis: 'Resultatet är en uppskattning. Det beror på årets pengar, hur många organisationer som får bidrag och alla organisationers medlemsantal.',
      forbehall: [
        { rubrik: 'Källan', text: 'Andelarna 65 och 35 procent står på Skolverkets sidor för 2026 och 2027. Grundbidraget på 35 000 kr för 2026 är uträknat från 700 000 kr och 13 organisationer.' },
        { rubrik: 'Det här prövar räknaren inte', text: 'Om organisationen uppfyller villkoren, vilka medlemmar som räknas som bidragsgrundande eller hur många som söker. Räknaren avrundar till hela kronor.' }
      ]
    }
  ],

  process: [
    { rubrik: 'Förbered och ansök', text: 'Se till att föreningen finns i e-tjänsten och har ett ombud. Ta fram medlemsantal och revisorsintyg. Ansök 1 oktober–2 november 2026.', ref: 'Ansökan' },
    { rubrik: 'Beslut och utbetalning', text: 'Skolverket planerar beslut i februari 2027. Hälften betalas ut i samband med beslutet och hälften i juni 2027.', ref: 'Utbetalning och kontroll' },
    { rubrik: 'Använd pengarna och spara underlag', text: 'Använd bidraget till att utveckla ämnet. Spara verifikationer, eftersom Skolverket kan kontrollera i efterhand.', ref: 'Utbetalning och kontroll' }
  ],

  underlagRubrik: 'Underlag att ha till hands',
  underlagIngress: 'Markeringarna sparas inte – de försvinner när ni stänger sidan.',
  underlag: [
    'Organisationens syfte och verksamhetsmål.',
    'Exempel på hur ni främjat ämnet det senaste året och plan för 2027.',
    'Antal medlemmar och bidragsgrundande medlemmar.',
    'Revisorsintyg från en oberoende revisor om medlemsantalet.',
    'Stadgar och senaste verksamhetsberättelse.'
  ],

  kallor: [
    {
      titel: 'Statsbidrag för ämneslärarorganisationer 2027 · Skolverket',
      url: 'https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-amneslararorganisationer-2027',
      beskrivning: 'Villkor, fördelningsmodell, datum och bilagor för 2027. Avsnitten i guiden bygger på den här sidan.'
    },
    {
      titel: 'Statsbidrag för ämneslärarorganisationer 2026 · Skolverket',
      url: 'https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-amneslararorganisationer-2026',
      beskrivning: 'Beslut för 2026 (700 000 kr till 13 organisationer) och de villkor som gällde då, bland annat kraven på 60 procent lärare och fler än 100 medlemmar.'
    },
    {
      titel: 'Regleringsbrev 2026 för Statens skolverk · ESV',
      url: 'https://www.esv.se/statsliggaren/regleringsbrev/?RBID=26231',
      beskrivning: 'Anslag 1:5, anslagspost 4: Skolverket ska betala ut 700 000 kr till ämneslärarorganisationer.'
    }
  ],

  forbehall: 'Guiden sammanfattar Skolverkets villkor. Bidraget har ingen förordning, så villkor, belopp och fördelning kan ändras från år till år. Räknaren visar principen och ersätter inte Skolverkets beslut. Använd Skolverkets aktuella sida när ni ansöker.'
};
