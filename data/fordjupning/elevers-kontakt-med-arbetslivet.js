/* Fördjupning: Statsbidrag för elevers kontakt med arbetslivet (sao-jobb) 2026.
 * Bidraget styrs inte av en egen förordning utan av ett villkor i Skolverkets regleringsbrev för 2026
 * (anslag 1:5 ap.3, infört genom ändringsbeslut 21 maj 2026 och oförändrat t.o.m. ändringsbeslut 3 september 2026),
 * med hänvisning till 17 § förordning (2019:1288). Innehållet är stämt mot regleringsbrevet, Skolverkets sida för
 * 2026 (senast uppdaterad 29 juni 2026), Skolverkets lista över huvudmän och 10 kap. 8 a § skollagen.
 * Schema: se FORDJUPNING.md ("Regelverk som inte är en svensk förordning"). Klartext, inte citat. */
window.SB_FORDJUPNING = window.SB_FORDJUPNING || {};
window.SB_FORDJUPNING['elevers-kontakt-med-arbetslivet'] = {
  id: 'elevers-kontakt-med-arbetslivet',
  rubrik: 'Sao-jobb och arbetslivskontakt',
  rubrikKursiv: 'i klartext.',
  ingress: 'Vilka huvudmän kan få pengarna, vad får de användas till och hur fördelas de? Här står reglerna för 2026 på vanlig svenska. Ni kan också se hur fördelningen efter elevantal fungerar.',
  kontrollerad: '2026-10-01',
  forordning: {
    namn: 'Regleringsbrev för budgetåret 2026 avseende Statens skolverk (anslag 1:5 ap.3)',
    etikett: 'Regleringsbrevet 2026',
    iText: 'i regleringsbrevet',
    url: 'https://www.statskontoret.se/statsliggaren/regleringsbrev/index?rbid=27547',
    lydelse: 'villkoret infört 21 maj 2026, oförändrat t.o.m. ändringsbeslutet 3 september 2026'
  },

  snabbfaktaRubrik: 'Tre saker att känna till först',
  snabbfakta: [
    { rubrik: 'Bara huvudmän på listan', text: 'Bara huvudmän med högstadieskolor som Skolverket har placerat i pott 2 för karriärtjänster 2026/27 kan få pengarna. Skolverket har publicerat en lista.' },
    { rubrik: 'Pengar efter elevantal', text: 'De 30 miljonerna delas efter hur många elever i årskurs 7–9 som får sao-jobb eller en annan insats. Beloppet per elev bestäms först i efterhand.' },
    { rubrik: 'Ett tak per huvudman', text: 'Ingen huvudman kan få mer än 3 679 613 kr, ungefär 12,3 procent av pengarna.' }
  ],
  snabbfaktaNot: 'Bidraget gäller 2026. Perioden för att begära ut pengarna var 15–31 augusti 2026 och har stängt. Om det kommer en ny omgång 2027 är inte känt.',

  begreppRubrik: 'Ord som återkommer',
  begrepp: [
    { term: 'Huvudman', forklaring: 'Den som driver skolan och ansvarar för utbildningen, till exempel en kommun eller en fristående organisation.' },
    { term: 'Sao-jobb', forklaring: 'Studiemotiverande arbetslivsorientering. Ett betalt extrajobb för högstadieelever, två timmar i veckan under ett år, inom undervisningstiden. Det är ett sätt att genomföra prao.' },
    { term: 'Prao', forklaring: 'Praktisk arbetslivsorientering. Alla elever i grundskolan ska ha prao i sammanlagt minst tio dagar, i första hand på en arbetsplats (10 kap. 8 a § skollagen).' },
    { term: 'Pott 2', forklaring: 'Skolenheter som Skolverket bedömer har särskilt svåra förutsättningar utifrån elevernas socioekonomiska bakgrund och minst 50 elever (17 § förordningen om karriärtjänster).' },
    { term: 'Regleringsbrev', forklaring: 'Regeringens årliga beslut om vad en myndighet ska göra och hur den får använda sina pengar.' },
    { term: 'Begäran om utbetalning', forklaring: 'Huvudmannen begär ut pengar som den kan ha rätt till, utan att ansöka i konkurrens. Kallas också rekvisition.' }
  ],

  sektioner: {
    regler: {
      rubrik: 'Från regleringsbrev', rubrikKursiv: 'till praktik.',
      ingress: 'Bidraget har ingen egen förordning. Reglerna står i ett kort villkor i Skolverkets regleringsbrev och på Skolverkets sida. Öppna det avsnitt ni behöver, eller sök på till exempel ”sao”, ”pott 2” eller ”tak”.'
    },
    praktik: {
      rubrik: 'Så används', rubrikKursiv: 'reglerna.',
      ingress: 'Huvudmannen räknar eleverna med insatser, begär ut pengarna under en kort period i augusti och får sin andel efter Skolverkets beslut. Spara underlag för kostnaderna, eftersom Skolverket kan kontrollera.'
    }
  },

  paragrafer: [
    {
      ref: 'Villkoret', rubrik: 'Vad regleringsbrevet säger',
      text: [
        'Regeringen har bestämt att Skolverket under 2026 ska betala ut högst 30 miljoner kronor till kommuner och fristående huvudmän. Pengarna ska gå till insatser som gör att elever i skolor med socioekonomiska utmaningar får kontakt med arbetslivet.',
        'Pengarna betalas ut efter rekvisition, alltså när huvudmannen begär dem. Om huvudmännen begär mer än det finns pengar till ska beloppen minskas i samma proportion för alla.'
      ],
      praktik: 'Villkoret kom till i ett ändrat regleringsbrev den 21 maj 2026. Det finns ingen förordning för bidraget. Regleringsbrevet säger därför inget om till exempel återkrav, ränta eller överklagande, som andra statsbidrag har regler om i sina förordningar.',
      nyckelord: ['regleringsbrev', '30 miljoner', 'rekvisition', 'socioekonomiska utmaningar', 'förordning', 'återkrav']
    },
    {
      ref: 'Vem kan få', rubrik: 'Vilka huvudmän och skolor som omfattas',
      text: [
        'Bidraget gäller huvudmän med minst en grundskoleenhet med elever i högstadiet som omfattas av 17 § förordningen (2019:1288) om karriärtjänster. Det är skolenheter med särskilt svåra förutsättningar utifrån elevernas socioekonomiska bakgrund och minst 50 elever.',
        'Skolverket har gjort en lista över huvudmännen och skolenheterna. Den bygger på vilka huvudmän som har fått bidrag för karriärtjänster 2026/27 i pott 2.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Listan omfattar 29 kommunala och fristående huvudmän och 57 skolenheter. Bidraget är bara avsett för de skolenheter som står på listan. Inför varje omgång av karriärtjänster beslutar Skolverket på nytt vilka skolenheter som ingår i pott 2. Beslutet bygger på Skolverkets fördelningsnycklar, som ska visa vilka skolor som har störst behov.'
      },
      nyckelord: ['vem kan söka', 'lista', 'pott 2', 'karriärtjänster', '17 §', '50 elever', 'högstadiet', 'socioekonomisk', 'utsatta områden', 'friskola']
    },
    {
      ref: 'Användning', rubrik: 'Vad pengarna får användas till',
      text: [
        'Pengarna ska gå till insatser som gör att eleverna knyter kontakt med arbetslivet. Ett exempel är sao-jobb, men det kan också vara andra insatser med samma syfte.',
        'Huvudmannen ska under 2026 ha, eller komma att ha, kostnader för insatserna.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Pengarna kan till exempel gå till huvudmannens administrativa kostnader för att ge elever sao-jobb. Ett sao-jobb är en anställning där eleven arbetar två timmar i veckan under ett år, med lön, inom undervisningstiden. Det är ett sätt att genomföra den prao som alla elever ska ha.'
      },
      nyckelord: ['sao-jobb', 'sao', 'prao', 'extrajobb', 'arbetsliv', 'praktik', 'administration', 'lön', 'studiemotivation', 'arbetsplats']
    },
    {
      ref: 'Begäran', rubrik: 'Att begära ut pengarna',
      text: [
        'Huvudmannen begär ut pengarna i Skolverkets e-tjänst för statsbidrag. För 2026 var det möjligt 15–31 augusti 2026.',
        'I begäran anger ni två antal för de skolenheter som står på listan:'
      ],
      lista: [
        'elever i årskurs 7, 8 och 9 som under 2026 har eller kommer att ha ett sao-jobb, och',
        'elever i årskurs 7, 8 och 9 som under 2026 omfattas eller kommer att omfattas av en annan insats för kontakt med arbetslivet.'
      ],
      praktik: 'Perioden var bara drygt två veckor. Den som missade den kan inte få bidrag för 2026.',
      nyckelord: ['begäran om utbetalning', 'rekvisition', 'e-tjänst', 'augusti', '31 augusti', 'antal elever', 'årskurs 7', 'årskurs 8', 'årskurs 9']
    },
    {
      ref: 'Fördelning', rubrik: 'Så fördelas pengarna',
      text: [
        'När perioden har stängt räknar Skolverket ihop alla elever som huvudmännen har begärt bidrag för. Sedan delas de 30 miljonerna i proportion till antalet elever hos varje huvudman.',
        'Det finns inget bestämt belopp per elev. Det avgörs först när alla har begärt sina pengar.',
        'En huvudman kan få högst 12,3 procent av pengarna. Skolverket anger det till 3 679 613 kr.'
      ],
      praktik: {
        rubrik: 'Bra att veta',
        text: 'Taket i kronor motsvarar ungefär 12,3 procent; exakt 12,3 procent av 30 miljoner hade varit 3 690 000 kr. Skolverket har inte beskrivit hur taket har räknats fram, eller vad som händer med pengar över taket.'
      },
      nyckelord: ['fördelning', 'proportion', 'per elev', 'tak', 'högsta belopp', '12,3 procent', '3679613', 'elevantal']
    },
    {
      ref: 'Beslut', rubrik: 'Beslut och utbetalning',
      text: [
        'Skolverket fattar beslut efter att perioden har stängt och betalar sedan ut pengarna.',
        'De beviljade beloppen per huvudman ska publiceras på Skolverkets sida. Hela besluten finns i e-tjänsten.'
      ],
      praktik: 'Den 1 oktober 2026 hade Skolverket ännu inte publicerat några beviljade belopp på sidan.',
      nyckelord: ['beslut', 'utbetalning', 'beviljat belopp', 'publicering']
    },
    {
      ref: 'Kontroll', rubrik: 'Kontroll och uppföljning',
      text: [
        'Skolverkets sida beskriver ingen särskild redovisning för bidraget.',
        'Skolverket skriver att alla huvudmän som får pengar kan bli kontrollerade, för att hitta och förhindra fel och fusk och för att se hur bidragen används.'
      ],
      praktik: 'Spara underlag som visar vilka elever som fick sao-jobb eller andra insatser och vilka kostnader ni har haft under 2026.',
      nyckelord: ['kontroll', 'uppföljning', 'redovisning', 'underlag', 'fusk']
    },
    {
      ref: 'Framåt', rubrik: 'Efter 2026',
      text: [
        'Villkoret i regleringsbrevet gäller bara 2026. Om det kommer pengar för 2027 beror på regeringens budget och nästa års regleringsbrev.',
        'Skolverket har inte publicerat någon sida för 2027 (1 oktober 2026).'
      ],
      nyckelord: ['2027', 'framtid', 'ny omgång', 'budget']
    }
  ],

  kalkylatorer: [
    {
      id: 'fordelning', modul: 'elevers-kontakt-med-arbetslivet-fordelning',
      flik: 'Räkneexempel', eyebrow: 'Fördelning efter elevantal',
      rubrik: 'Så räknas', rubrikKursiv: 'er andel.',
      ingress: 'Det här är ett räkneexempel. Ingen vet ännu hur många elever alla huvudmän tillsammans har begärt bidrag för, så ni får göra ett antagande. Räknaren visar hur er andel och taket påverkar beloppet.',
      formel: { rubrik: 'Grundformeln', text: 'Bidrag = 30 000 000 kr × era elever ÷ alla huvudmäns elever, högst 3 679 613 kr.' },
      resultatRubrik: 'Bidrag i räkneexemplet',
      falt: [
        { id: 'egna', typ: 'tal', etikett: 'Era elever i årskurs 7–9 med sao-jobb eller annan insats', min: 0, max: 1000000, steg: 1, standard: 100,
          hjalp: 'Bara elever på skolenheter som står på Skolverkets lista. Räkna ihop eleverna med sao-jobb och med andra insatser.' },
        { id: 'alla', typ: 'tal', etikett: 'Antagande: alla huvudmäns elever tillsammans', min: 1, max: 1000000, steg: 1, standard: 5000,
          hjalp: 'Ett antagande. Det verkliga antalet är inte publicerat. Pröva olika värden.' }
      ],
      exempel: [
        { etikett: '100 av 5 000 elever', varden: {} },
        { etikett: 'Samma elever, dubbelt så många totalt', varden: { alla: 10000 } },
        { etikett: 'Stor huvudman som når taket', varden: { egna: 1500 } }
      ],
      resultatNotis: 'Räkneexempel. Vad ni faktiskt får står i Skolverkets beslut.',
      forbehall: [
        { rubrik: 'Formeln', text: 'Fördelningen efter elevantal och taket på 3 679 613 kr kommer från Skolverkets sida för 2026. Regleringsbrevet säger att beloppen ska minskas i proportion om pengarna inte räcker.' },
        { rubrik: 'Det här prövar räknaren inte', text: 'Om er huvudman och skolenhet står på listan, om eleverna verkligen har fått en insats eller vilka kostnader ni har. Räknaren fördelar inte heller om pengar som hamnar över taket hos någon huvudman, eftersom Skolverket inte har beskrivit hur det görs.' }
      ]
    }
  ],

  process: [
    { rubrik: 'Kontrollera listan', text: 'Se efter om er huvudman och era skolenheter finns på Skolverkets lista. Bara de skolenheterna omfattas.', ref: 'Vem kan få' },
    { rubrik: 'Ordna insatserna', text: 'Erbjud elever i årskurs 7–9 sao-jobb eller andra insatser som ger kontakt med arbetslivet, och håll reda på kostnaderna under 2026.', ref: 'Användning' },
    { rubrik: 'Räkna eleverna', text: 'Räkna hur många elever som har eller kommer att ha sao-jobb, och hur många som får en annan insats, under 2026.', ref: 'Begäran' },
    { rubrik: 'Begär ut pengarna', text: 'Begär ut pengarna i Skolverkets e-tjänst under perioden. För 2026 var den 15–31 augusti.', ref: 'Begäran' },
    { rubrik: 'Beslut, utbetalning och kontroll', text: 'Skolverket fördelar pengarna efter elevantal, med ett tak per huvudman, och betalar ut efter beslut. Spara underlagen om Skolverket vill kontrollera.', ref: 'Fördelning' }
  ],

  underlagRubrik: 'Underlag att ha till hands',
  underlagIngress: 'Använd listan när ni förbereder er eller om Skolverket kontrollerar. Markeringarna sparas inte – de försvinner när ni stänger sidan.',
  underlag: [
    'Skolverkets lista över huvudmän och skolenheter, med era skolenheter markerade.',
    'Antal elever i årskurs 7, 8 och 9 per skolenhet som har sao-jobb under 2026.',
    'Antal elever per skolenhet som får andra insatser för kontakt med arbetslivet, och en kort beskrivning av insatserna.',
    'Underlag för kostnaderna, till exempel lön till eleverna, administration och avtal med arbetsgivare.',
    'Vem som är behörig företrädare och har behörighet i Skolverkets e-tjänst.'
  ],

  kallor: [
    {
      titel: 'Statsbidrag för elevers kontakt med arbetslivet 2026 · Skolverket',
      url: 'https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-elevers-kontakt-med-arbetslivet-2026',
      beskrivning: 'Vem som kan få pengarna, vad som ska anges, fördelningen, taket per huvudman och listan över huvudmän och skolenheter.'
    },
    {
      titel: 'Regleringsbrev för Statens skolverk 2026 · Statskontoret',
      url: 'https://www.statskontoret.se/statsliggaren/regleringsbrev/index?rbid=27547',
      beskrivning: 'Villkoret under anslag 1:5 Utveckling av skolväsendet och annan pedagogisk verksamhet, anslagspost 3. Här i lydelsen efter ändringsbeslutet 3 september 2026.'
    },
    {
      titel: 'Förordning (2019:1288) om karriärtjänster · Sveriges riksdag',
      url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-20191288-om-statsbidrag-till_sfs-2019-1288/',
      beskrivning: '17 § beskriver skolenheterna med särskilt svåra förutsättningar – det som kallas pott 2.'
    },
    {
      titel: 'Skollag (2010:800) · Sveriges riksdag',
      url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/skollag-2010800_sfs-2010-800/',
      beskrivning: '10 kap. 8 a § om prao i grundskolan.'
    }
  ],

  forbehall: 'Guiden sammanfattar reglerna för 2026. Bidraget styrs av ett kort villkor i Skolverkets regleringsbrev och av Skolverkets tolkning på sin sida. Räknaren är ett räkneexempel: den bygger på ett antagande om det totala elevantalet och kontrollerar inte om er huvudman omfattas. Använd Skolverkets aktuella information och ert beslut.'
};
