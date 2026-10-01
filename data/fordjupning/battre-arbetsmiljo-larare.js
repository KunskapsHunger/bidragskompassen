/* Fördjupning: Statsbidrag för bättre arbetsmiljö och arbetsvillkor för lärare i socioekonomiskt utsatta områden –
 * förordning (2021:316). Innehållet är stämt mot förordningen (ändrad t.o.m. SFS 2024:53), Skolverkets sida för
 * 2026/27 (senast uppdaterad 23 juli 2026) och beslutsbilagan med bidragsramar 2026/27 (dnr 2026:1626).
 * Schema: se FORDJUPNING.md. Klartext, inte citat – paragrafhänvisningarna gäller förordningen. */
window.SB_FORDJUPNING = window.SB_FORDJUPNING || {};
window.SB_FORDJUPNING['battre-arbetsmiljo-larare'] = {
  id: 'battre-arbetsmiljo-larare',
  rubrik: 'Bättre arbetsmiljö för lärare',
  rubrikKursiv: 'i klartext.',
  ingress: 'Vilka skolor ingår, vad får pengarna användas till och hur räknas ramen ut? Här står reglerna på vanlig svenska. Ni kan också se hur ramen räknas och delas mellan terminerna.',
  kontrollerad: '2026-10-01',
  forordning: {
    sfs: '2021:316',
    namn: 'Förordning (2021:316) om statsbidrag till huvudmän för förskoleklasser och grundskolor med socioekonomiska utmaningar',
    lydelse: 'ändrad t.o.m. SFS 2024:53',
    url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-2021316-om-statsbidrag-till_sfs-2021-316/'
  },

  snabbfaktaRubrik: 'Tre saker att känna till först',
  snabbfakta: [
    { rubrik: 'Ni söker inte', text: 'Skolverket väljer ut 150 skolenheter och beslutar om en ram för varje huvudman. För 2026/27 och 2027/28 gäller det 45 huvudmän.' },
    { rubrik: 'Bara de utvalda skolorna', text: 'Pengarna får bara användas på de skolenheter som står i beslutet, och bara för lärarnas arbetsmiljö och arbetsvillkor.' },
    { rubrik: 'Två utbetalningar, en redovisning', text: 'Ni begär ut pengarna för hösten och för våren och redovisar efter läsåret vad de har gått till.' }
  ],
  snabbfaktaNot: 'För 2026/27 finns 487,5 miljoner kr: 285 miljoner för hösten 2026 och 202,5 miljoner för våren 2027.',

  begreppRubrik: 'Ord som återkommer',
  begrepp: [
    { term: 'Huvudman', forklaring: 'Den som driver skolan: kommunen, staten eller en fristående huvudman.' },
    { term: 'Skolenhet', forklaring: 'En skola som Skolverket registrerar för sig, med en egen skolenhetskod. En huvudman kan ha flera skolenheter.' },
    { term: 'Bidragsram', forklaring: 'Det högsta belopp huvudmannen kan begära ut under bidragsåret. Ramen står i Skolverkets beslut.' },
    { term: 'Bidragsår', forklaring: 'Samma sak som ett läsår: 1 juli till 30 juni.' },
    { term: 'Socioekonomisk bakgrund', forklaring: 'Elevernas förutsättningar utifrån till exempel föräldrarnas utbildning och hur länge eleven har bott i Sverige.' },
    { term: 'Rekvisition', forklaring: 'När huvudmannen begär att få bidraget utbetalt. Skolverket kallar det begäran om utbetalning.' }
  ],

  sektioner: {
    regler: {
      rubrik: 'Från paragraf', rubrikKursiv: 'till praktik.',
      ingress: 'Rubrikerna följer förordningen. Öppna det avsnitt ni behöver, eller sök på till exempel ”urval”, ”omorganisation” eller ”återkrav”. Varje avsnitt visar vilken paragraf det gäller.'
    },
    praktik: {
      rubrik: 'Så används', rubrikKursiv: 'reglerna.',
      ingress: 'Skolverket bestämmer vilka skolor som ingår. Ni planerar åtgärder för lärarna där, begär ut pengarna två gånger och visar sedan vad pengarna har gått till.'
    }
  },

  paragrafer: [
    {
      ref: '1–3 §§', rubrik: 'Vad bidraget är till för',
      text: [
        'Bidraget går till huvudmän för åtgärder som förbättrar arbetsmiljön och arbetsvillkoren för lärare. Det gäller skolenheter med förskoleklass eller grundskola som har socioekonomiska utmaningar.',
        'Bidrag ges bara i den mån det finns pengar, och för ett bidragsår i taget. Bidragsåret börjar den 1 juli.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Huvudmannen väljer åtgärder efter de lokala behoven. Exempel är kompetensutveckling, mindre arbetsbelastning och administration, kollegialt samarbete, att minska personalomsättningen, fler behöriga och erfarna lärare, introduktion av nyanställda, systematiskt kvalitetsarbete, arbete med elever i behov av särskilt stöd, arbetsro och trygghet, en nulägesanalys och bättre fysisk arbetsmiljö. Egna åtgärder går också, om ni kan visa hur de förbättrar lärarnas arbetsmiljö.'
      },
      nyckelord: ['syfte', 'arbetsmiljö', 'arbetsvillkor', 'kompetensutveckling', 'administration', 'arbetsbelastning', 'personalomsättning', 'introduktion', 'arbetsro', 'trygghet', 'bidragsår']
    },
    {
      ref: '3 a §', rubrik: 'Ingen dubbel finansiering',
      text: ['Bidrag ges inte för insatser som redan har fått statligt bidrag på annat sätt.'],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Bidraget går att kombinera med andra statsbidrag, men samma kostnad får bara betalas med ett av dem.'
      },
      nyckelord: ['dubbelfinansiering', 'annat statsbidrag', 'kombinera']
    },
    {
      ref: '4 §', rubrik: 'Vilka skolenheter som ingår',
      text: ['Bidraget går till huvudmän som har minst en skolenhet med förskoleklass eller grundskola som uppfyller alla de här villkoren:'],
      lista: [
        'Har minst 50 elever.',
        'Ligger i en kommun med minst 200 000 invånare, varav minst 200 000 i den största tätorten. Eller i en kommun där minst 40 % av de förvärvsarbetande som bor där pendlar till en storstad eller storstadsnära kommun. Eller i en kommun med minst 50 000 invånare, varav minst 40 000 i den största tätorten.',
        'Hör till de 150 skolenheter bland dem som har svårast förutsättningar utifrån elevernas socioekonomiska bakgrund.'
      ],
      praktik: {
        rubrik: 'Skolverkets urval',
        text: 'Skolverket beslutar för två bidragsår i taget vilka skolenheter som ingår. Urvalet i maj 2026 gäller 2026/27 och 2027/28. Skolverket rangordnar skolorna med en modell som skattar risken att en elev inte blir behörig till gymnasieskolan. I modellen ingår bland annat kön, elevens och föräldrarnas födelseland, föräldrarnas utbildning och tid i Sverige. Att en skola var med förra perioden betyder inte att den är med nu.'
      },
      nyckelord: ['urval', '150 skolenheter', '50 elever', 'kommun', 'tätort', 'pendlar', 'storstad', 'socioekonomisk', 'rangordning', 'två år', 'behörighet']
    },
    {
      ref: '5–7 §§', rubrik: 'Så räknas bidragsramen',
      text: [
        'Skolverket beslutar varje bidragsår en bidragsram för varje huvudman som har minst en utvald skolenhet.',
        'Ramen är lika stor andel av pengarna som huvudmannens elever på de utvalda skolenheterna är av alla elever på alla utvalda skolenheter i landet.',
        'Elevantalet räknas som ett genomsnitt av de tre senaste läsåren före bidragsåret som det finns uppgifter för. Har huvudmannen drivit verksamheten kortare tid används den tiden. Hade skolenheten inga elever det senaste läsåret beslutas ingen ram.'
      ],
      praktik: {
        rubrik: 'Beslutet för 2026/27',
        text: 'Skolverket beslutade ramarna den 20 maj 2026. Beslutsbilagan visar varje huvudman, dess skolenheter och beloppet för hösten, våren och hela året. Ramen för 2027/28 beslutas under våren 2027 för samma huvudmän, utifrån det anslag som finns då.'
      },
      nyckelord: ['bidragsram', 'ram', 'elevantal', 'andel', 'genomsnitt', 'tre läsår', 'beslutsbilaga', '487,5 miljoner']
    },
    {
      ref: '8 §', rubrik: 'Pengarna ska gå till de utvalda skolorna',
      text: ['Huvudmannen ska använda pengarna till åtgärder för lärarnas arbetsmiljö och arbetsvillkor på de skolenheter som är utvalda.'],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Pengarna får inte gå till sådant som ni ändå måste göra enligt skollagen eller annan lag, till exempel ordinarie undervisning, elevhälsa eller skolmåltider. Omorganiserar ni under de två åren ska pengarna fortfarande gå till de utvalda skolorna, och det ska gå att visa. Tar en annan huvudman över en skolenhet prövar Skolverket ramen på nytt. Hör då av er i god tid.'
      },
      nyckelord: ['användning', 'utvalda skolor', 'skollagen', 'undervisning', 'elevhälsa', 'skolmåltider', 'omorganisation', 'överlåtelse', 'ny huvudman']
    },
    {
      ref: '9 §', rubrik: 'Begära ut pengarna',
      text: [
        'Skolverket betalar ut bidraget två gånger per bidragsår, när huvudmannen begär det (rekvisition).',
        'I begäran intygar huvudmannen att kostnaderna inte redan har fått statligt bidrag och att pengarna kommer att användas enligt 1 §.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'I begäran anger ni vilka skolenheter ni planerar åtgärder på, vilka typer av åtgärder och hur mycket ni begär för varje åtgärd. Ni kan välja bland färdiga åtgärdsområden eller beskriva egna. Under året får ni ändra planen och flytta pengar mellan åtgärderna.'
      },
      nyckelord: ['rekvisition', 'begäran om utbetalning', 'utbetalning', 'intyga', 'åtgärdsområde', 'e-tjänst']
    },
    {
      ref: '10–11 §§', rubrik: 'Uppföljning och redovisning',
      text: [
        'Skolverket följer upp att bidraget har använts enligt förordningen. Uppföljningen styrs av en bedömning av risker och hur viktiga de är.',
        'Huvudmannen ska redovisa vilka åtgärder pengarna har gått till och lämna den ekonomiska och annan redovisning som Skolverket begär. Huvudmannen ska också delta i den uppföljning och utvärdering som beslutas.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Redovisningen för 2026/27 görs 15 augusti–15 september 2027. Kostnaderna ska ha uppstått 1 juli 2026–30 juni 2027. Totalt begärt belopp ska stämma med totalt redovisat belopp, men beloppen per termin behöver inte vara desamma. Skolverket kan begära löneunderlag, fakturor och bokföring som visar hela beloppet per åtgärdsområde.'
      },
      nyckelord: ['redovisning', 'uppföljning', 'stickprov', 'fakturor', 'löneunderlag', 'bokföring', '2027']
    },
    {
      ref: '11 a §', rubrik: 'Anmäl förändringar',
      text: ['Den som begär ut eller har fått bidrag ska utan dröjsmål anmäla förändringar som kan påverka rätten till bidraget eller hur stort det är.'],
      praktik: 'Det kan till exempel vara en omorganisation som påverkar de utvalda skolenheterna, eller att en skolenhet tas över av en annan huvudman.',
      nyckelord: ['anmälan', 'förändring', 'omorganisation', 'utan dröjsmål']
    },
    {
      ref: '12–13 §§', rubrik: 'Betala tillbaka (återkrav)',
      text: [
        'Huvudmannen ska betala tillbaka bidraget om det har getts på felaktig grund eller med för högt belopp, om det inte har använts till det det var avsett för, eller om redovisningen enligt 11 § inte har lämnats.',
        'Skolverket ska då kräva tillbaka pengarna. Om det finns särskilda skäl får Skolverket avstå helt eller delvis.',
        'Ränta tas ut från dagen en månad efter beslutet om återkrav. Räntan är statens utlåningsränta plus två procentenheter. Även räntan kan efterges vid särskilda skäl.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Pengar som har använts på skolor utanför ramen kan krävas tillbaka. Det gäller också om ni inte kan visa underlag som styrker kostnaderna. Skolverket kan göra stickprov, slumpmässigt eller när det finns anledning.'
      },
      nyckelord: ['återkrav', 'återbetalning', 'betala tillbaka', 'ränta', 'särskilda skäl', 'underlag']
    },
    {
      ref: '13 a §', rubrik: 'Stopp för utbetalning',
      text: ['Skolverket ska helt eller delvis stoppa utbetalningen av ett beviljat bidrag om mottagaren inte längre bedöms uppfylla villkoren, eller om det finns skäl för återbetalning enligt 12 §. Beslutet gäller direkt.'],
      nyckelord: ['stopp', 'utbetalning', 'hinder']
    },
    {
      ref: '14 §', rubrik: 'Skolverkets föreskrifter',
      text: [
        'Skolverket får skriva mer detaljerade regler för hur förordningen ska tillämpas.',
        'På bidragssidan för 2026/27 hänvisar Skolverket bara till förordningen. Läs den tillsammans med Skolverkets anvisningar och ert beslut om bidragsram.'
      ],
      nyckelord: ['föreskrifter', 'anvisningar', 'skolfs', 'bemyndigande']
    },
    {
      ref: '15 §', rubrik: 'Överklagande',
      text: ['Ett beslut enligt 13 a § om att stoppa en utbetalning kan överklagas till allmän förvaltningsdomstol. Andra beslut enligt förordningen, till exempel urvalet av skolor och bidragsramen, får inte överklagas.'],
      nyckelord: ['överklaga', 'domstol', 'förvaltningsrätt', 'urval']
    },
    {
      ref: 'Övergång', rubrik: 'Bakgrund och ändringar',
      text: [
        'Förordningen började gälla den 1 juni 2021. Det första bidragsåret var kortare än ett läsår.',
        'Ändringen SFS 2024:53 började gälla den 15 mars 2024. Den lade till regeln om dubbel finansiering, intygandet i begäran, anmälningsskyldigheten och stopp för utbetalning.'
      ],
      praktik: {
        rubrik: 'Mindre pengar på våren',
        text: 'Ramen för våren 2027 är lägre än för hösten 2026. Enligt Skolverket beror det på att en tidigare tillfällig förstärkning har tagits bort i regleringsbrevet för 2026.'
      },
      nyckelord: ['övergång', '2024:53', 'ikraftträdande', 'tillfällig förstärkning', 'regleringsbrev']
    }
  ],

  kalkylatorer: [
    {
      id: 'ram', modul: 'battre-arbetsmiljo-larare-ram',
      flik: 'Bidragsramen', eyebrow: 'Ram enligt 6–7 §§',
      rubrik: 'Elevandelen', rubrikKursiv: 'styr ramen.',
      ingress: 'Räknaren visar principen med påhittade elevantal. För en riktig huvudman gäller ramen i Skolverkets beslutsbilaga. Där står också vad ni kan begära ut för varje termin.',
      formel: { rubrik: 'Grundformeln', text: 'Ram = 487 500 000 kr × huvudmannens elever på utvalda skolenheter ÷ alla elever på de 150 utvalda skolenheterna.' },
      resultatRubrik: 'Exempel på bidragsram 2026/27',
      falt: [
        { id: 'egnaElever', typ: 'tal', etikett: 'Huvudmannens elever på utvalda skolenheter', min: 1, max: 1000000, steg: 'any', standard: 400,
          hjalp: 'Genomsnitt av de tre senaste läsåren som det finns uppgifter för.' },
        { id: 'allaElever', typ: 'tal', etikett: 'Elever på alla 150 utvalda skolenheter', min: 1, max: 10000000, steg: 'any', standard: 60000,
          hjalp: 'Exempelvärde. Skolverket redovisar inte det totala elevantalet på bidragssidan.' },
        { id: 'forraLasaret', typ: 'kryss', etikett: 'Skolenheterna hade elever läsåret närmast före bidragsåret.', standard: true }
      ],
      exempel: [
        { etikett: 'En liten fristående skola', varden: { egnaElever: 180 } },
        { etikett: 'En kommun med flera skolor', varden: { egnaElever: 2500 } }
      ],
      resultatNotis: 'Det här visar hur beräkningen går till. Ramen bestäms av Skolverket och gäller bara de skolenheter som står i beslutet.',
      forbehall: [
        { rubrik: 'Terminerna', text: 'Räknaren delar ramen mellan hösten och våren i samma proportion som Skolverkets medel för 2026/27: 285 och 202,5 miljoner kr. Det stämmer med beloppen i beslutsbilagan. Ett annat år kan fördelningen bli en annan.' },
        { rubrik: 'Det här prövar räknaren inte', text: 'Om skolorna ingår i urvalet, hur elevantalen räknas fram eller om åtgärderna är godkända. Räknaren ersätter inte beslutet.' }
      ]
    }
  ],

  process: [
    { rubrik: 'Kontrollera beslutet', text: 'Se i Skolverkets beslutsbilaga om era skolenheter finns med och vilket belopp ni kan begära ut för hösten och våren.', ref: '4–7 §§' },
    { rubrik: 'Planera åtgärder', text: 'Ta fram åtgärder som förbättrar lärarnas arbetsmiljö på just de skolenheterna. Undvik kostnader som ni ändå har enligt lag.', ref: '1 §, 8 §' },
    { rubrik: 'Begär ut pengarna', text: 'Hösten 2026: 15 augusti–15 september 2026. Våren 2027: 15 januari–15 februari 2027. Ange skolenheter, åtgärder och belopp per åtgärd.', ref: '9 §' },
    { rubrik: 'Spara underlag och anmäl ändringar', text: 'Spara fakturor, löneunderlag och bokföring per åtgärdsområde. Anmäl omorganisationer och andra förändringar utan dröjsmål.', ref: '10–11 a §§' },
    { rubrik: 'Redovisa efter läsåret', text: 'Redovisa 15 augusti–15 september 2027 vad pengarna för 2026/27 har gått till. Pengar som inte har använts rätt kan krävas tillbaka.', ref: '11–13 §§' }
  ],

  underlagRubrik: 'Underlag att ha till hands',
  underlagIngress: 'Använd listan när ni förbereder begäran om utbetalning och redovisning. Markeringarna sparas inte – de försvinner när ni stänger sidan.',
  underlag: [
    'Beslutsbilagan med bidragsram och utvalda skolenheter för 2026/27.',
    'Plan för åtgärder per skolenhet och belopp per åtgärdsområde.',
    'Motivering för egna åtgärder: hur de förbättrar lärarnas arbetsmiljö och arbetsvillkor.',
    'Fakturor, löneunderlag och bokföring som styrker kostnaderna per åtgärdsområde.',
    'Underlag som visar att pengarna har gått till rätt skolenheter, även efter en omorganisation.',
    'Uppgift om vem som får göra begäran och redovisning i Skolverkets e-tjänst.'
  ],

  kallor: [
    {
      titel: 'Förordning (2021:316) · Sveriges riksdag',
      url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-2021316-om-statsbidrag-till_sfs-2021-316/',
      beskrivning: 'Källan för urval, bidragsram, användning, redovisning och återkrav. Paragrafhänvisningarna i guiden gäller den här förordningen.'
    },
    {
      titel: 'Statsbidrag för bättre arbetsmiljö och arbetsvillkor för lärare i socioekonomiskt utsatta områden 2026/27 · Skolverket',
      url: 'https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-battre-arbetsmiljo-och-arbetsvillkor-for-larare-i-socioekonomiskt-utsatta-omraden-2026-27',
      beskrivning: 'Skolverkets anvisningar om urvalsmodellen, åtgärdsområden, omorganisation, kontroller och datum för 2026/27. Sidan länkar till beslutsbilagan med bidragsramar.'
    }
  ],

  forbehall: 'Guiden sammanfattar reglerna och visar hur bidragsramen räknas ut. Räknaren använder påhittade elevantal och ersätter inte Skolverkets beslut. Belopp och datum gäller 2026/27 och kan ändras till 2027/28. Använd Skolverkets aktuella anvisningar och ert beslut när ni begär ut pengarna och redovisar.'
};
