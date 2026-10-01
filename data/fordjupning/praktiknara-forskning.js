/* Fördjupning: Statsbidrag för praktiknära forskning och utveckling – förordning (2021:237).
 * Innehållet är stämt mot förordningen (inte ändrad sedan den kom) och Skolverkets sidor för 2026/27
 * (senast uppdaterad 8 juni 2026) och 2025/26. Schema: se FORDJUPNING.md. Klartext, inte citat –
 * paragrafhänvisningarna gäller förordningen. */
window.SB_FORDJUPNING = window.SB_FORDJUPNING || {};
window.SB_FORDJUPNING['praktiknara-forskning'] = {
  id: 'praktiknara-forskning',
  rubrik: 'Forskartid för lärare',
  rubrikKursiv: 'i klartext.',
  ingress: 'Vem kan få bidrag, vad krävs av läraren och projektet, och hur mycket blir det? Här står reglerna på vanlig svenska. Ni kan också räkna på bidraget med lärarens egen lön och forskningstid.',
  kontrollerad: '2026-10-01',
  forordning: {
    sfs: '2021:237',
    namn: 'Förordning (2021:237) om statsbidrag för främjande av forskning och utvecklingsarbete i skolväsendet',
    lydelse: 'inte ändrad sedan 2021',
    url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-2021237-om-statsbidrag-for_sfs-2021-237/'
  },

  snabbfaktaRubrik: 'Tre saker att känna till först',
  snabbfakta: [
    { rubrik: 'Halva lönen för forskningstiden', text: 'Staten betalar hälften av lönekostnaden för den tid läraren forskar. Huvudmannen betalar minst lika mycket själv.' },
    { rubrik: 'Högst 30 procent av tiden', text: 'Läraren kan forska högst 30 % av arbetstiden med bidrag. Då blir bidraget 15 % av lönen.' },
    { rubrik: 'Forskarexamen redan klar', text: 'Läraren ska vara legitimerad och redan ha en licentiat- eller doktorsexamen i rätt ämnesområde.' }
  ],
  snabbfaktaNot: 'Ni ansöker på våren inför läsåret och begär sedan ut pengarna en gång per termin.',

  begreppRubrik: 'Ord som återkommer',
  begrepp: [
    { term: 'Huvudman', forklaring: 'Den som driver skolan eller förskolan: en kommun, staten eller en fristående huvudman.' },
    { term: 'Praktiknära forskning', forklaring: 'Forskning och utvecklingsarbete som utgår från ett verkligt problem i den egna verksamheten och är kopplat till undervisningen.' },
    { term: 'Examen på forskarnivå', forklaring: 'Licentiatexamen eller doktorsexamen, eller motsvarande utländsk examen.' },
    { term: 'Medfinansiering', forklaring: 'Huvudmannen betalar själv minst lika mycket av kostnaden för forskningstiden som bidraget täcker.' },
    { term: 'Rekvisition', forklaring: 'När huvudmannen begär att få bidraget utbetalt. Skolverket kallar det begäran om utbetalning.' }
  ],

  sektioner: {
    regler: {
      rubrik: 'Från paragraf', rubrikKursiv: 'till praktik.',
      ingress: 'Rubrikerna följer förordningen. Öppna det avsnitt ni behöver, eller sök på till exempel ”doktor”, ”lektor” eller ”återkrav”. Varje avsnitt visar vilken paragraf det gäller.'
    },
    praktik: {
      rubrik: 'Så används', rubrikKursiv: 'reglerna.',
      ingress: 'Bidraget följer läsåret. Ni ansöker med ett projekt på våren, begär ut pengarna varje termin och anmäler om läraren forskar mindre än planerat.'
    }
  },

  paragrafer: [
    {
      ref: '1–3 §§', rubrik: 'Vad bidraget är till för',
      text: [
        'Bidraget går till huvudmän för att lärare och förskollärare med forskarutbildning ska kunna delta i forsknings- och utvecklingsarbete i skolväsendet. Syftet är att främja forskning och utvecklingsarbete i skolan.',
        'Bidrag ges för ett bidragsår i taget och bara i den mån det finns pengar. Bidragsåret börjar den 1 juli.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Projektet ska ge direkt nytta i verksamheten och stärka utbildningens vetenskapliga grund. Ett identifierat problem ska ligga till grund för det som undersöks, syftet ska vara tydligt och det ska framgå hur projektet kopplas till undervisningen.'
      },
      nyckelord: ['syfte', 'forskning', 'utvecklingsarbete', 'bidragsår', '1 juli', 'vetenskaplig grund']
    },
    {
      ref: '4–5 §§', rubrik: 'Vem som kan få bidrag och för vilka lärare',
      text: [
        'Bidraget kan gå till alla huvudmän inom skolväsendet, från förskola till komvux. Det betalar lön för lärare eller förskollärare som uppfyller alla de här kraven:'
      ],
      lista: [
        'Är anställd hos huvudmannen, eller hos en entreprenör som har avtal med huvudmannen.',
        'Har lärar- eller förskollärarlegitimation.',
        'Har en examen på forskarnivå som uppfyller kraven i 6 §, eller en motsvarande utländsk examen.',
        'Ägnar en del av sin arbetstid åt praktiknära forskning och utveckling.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Läraren ska vara anställd just som lärare eller förskollärare. Bidrag ges inte för en forskarutbildad, legitimerad lärare som har en annan befattning. Examen ska vara klar när ni ansöker. Blir läraren klar senare kan ni lämna en sen ansökan, som beviljas i mån av pengar.'
      },
      nyckelord: ['huvudman', 'entreprenör', 'legitimation', 'doktor', 'licentiat', 'forskarexamen', 'anställd', 'befattning', 'sen ansökan']
    },
    {
      ref: '6 §', rubrik: 'Krav på forskarexamen',
      text: [
        'Examen ska gälla ämnesdidaktik, alltså hur ett ämne lärs ut, eller ett ämne som helt eller till största delen hör till ett undervisningsämne i skolväsendet. Motsvarande ämnen inom förskolans område räknas också.',
        'En examen inom specialpedagogik godtas om den har nära koppling till undervisningen i den skolform läraren arbetar i. Det gäller bara lärare och förskollärare som har speciallärarexamen eller en äldre examen enligt 1 kap. 5 § förordningen (2011:326).'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Den äldre examen som avses är en specialpedagogexamen som har utfärdats senast den 30 juni 2015.'
      },
      nyckelord: ['ämnesdidaktik', 'undervisningsämne', 'specialpedagogik', 'speciallärare', 'specialpedagogexamen', '2015']
    },
    {
      ref: '7 §', rubrik: 'Huvudmannen betalar minst hälften',
      text: ['Huvudmannen ska själv betala minst lika stor del av kostnaden för forskningstiden som bidraget täcker.'],
      praktik: 'Bidraget täcker alltså högst halva lönekostnaden för den tid läraren forskar. Resten betalar huvudmannen.',
      nyckelord: ['medfinansiering', 'egen finansiering', 'hälften', 'lönekostnad']
    },
    {
      ref: '8 §', rubrik: 'Vad bidraget inte får gå till',
      text: ['Bidrag ges inte för insatser som redan har fått statligt bidrag på annat sätt, och inte för uppdragsutbildning enligt förordningen (1992:395) om uppdragsutbildning inom skolväsendet.'],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Ni kan få bidrag för ett projekt som redan pågår, till exempel inom ett ULF-avtal med ett lärosäte, om projektet inte redan betalar lärarens lön. Samma lön får inte betalas två gånger.'
      },
      nyckelord: ['dubbelfinansiering', 'annat statsbidrag', 'pågående projekt', 'ulf', 'uppdragsutbildning']
    },
    {
      ref: '9 §', rubrik: 'Så räknas bidraget',
      text: [
        'Bidraget motsvarar kostnaden för högst 15 % av lärarens lön, om läraren forskar minst 30 % av arbetstiden. Forskar läraren mindre minskas bidraget i samma proportion.',
        'Den del av lönen som bygger på statsbidraget för karriärtjänster, alltså lönepåslaget för förstelärare eller lektor, räknas inte med.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Ni kan som mest ange 30 % forskningstid. Bidraget räknas på påbörjade månader med forskning. En månad utan forskning, till exempel en hel månad semester, räknas inte. Använd den årslönekostnad som gällde när ni ansökte. Lönepåslag från andra bidrag, till exempel Lärarlönelyftet, får räknas med.'
      },
      nyckelord: ['belopp', '15 procent', '30 procent', 'lön', 'årslön', 'lektor', 'karriärtjänst', 'lönepåslag', 'lärarlönelyftet', 'semester', 'månader']
    },
    {
      ref: '10 §', rubrik: 'Ansökan och beslut',
      text: [
        'Huvudmannen ansöker hos Skolverket, som prövar ansökan och betalar ut bidraget.',
        'Ett beslut om bidrag ska ange sista dag för redovisning. Beslutet kan förenas med villkor, och de står i så fall i beslutet.'
      ],
      praktik: 'För 2026/27 var ansökan öppen 15 mars–15 april 2026 i Skolverkets e-tjänst. Skolverket beviljade 6 833 925 kr till 38 huvudmän i juni 2026. Anslaget var 25 miljoner kr.',
      nyckelord: ['ansökan', 'e-tjänst', 'beslut', 'villkor', 'redovisning', '25 miljoner']
    },
    {
      ref: '11 §', rubrik: 'Om pengarna inte räcker',
      text: ['Kommer det in fler ansökningar än det finns pengar till väljer Skolverket. Skolverket prioriterar i den här ordningen:'],
      lista: [
        'Ansökningar som har beviljats tidigare, under två bidragsår i följd.',
        'Huvudmän som i ansökan visar att arbetet görs i samverkan med ett universitet eller en högskola.',
        'Geografisk spridning.',
        'Att både offentliga och enskilda huvudmän får bidrag.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Samarbete med ett lärosäte är inget krav för att få bidrag. Det ger bara företräde när pengarna inte räcker till alla.'
      },
      nyckelord: ['urval', 'prioritering', 'lärosäte', 'universitet', 'högskola', 'samverkan', 'geografisk spridning']
    },
    {
      ref: '12 §', rubrik: 'Begära ut pengarna',
      text: ['Skolverket betalar ut bidraget efter rekvisition, alltså när huvudmannen begär det, två gånger per bidragsår.'],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Beloppet per termin följer hur många månader läraren forskar varje termin. Forskar läraren bara på hösten begär ni ut allt då. I begäran intygar ni att läraren är legitimerad, har forskarexamen, forskar i det projekt som godkändes och är anställd hos er. Ni anger personnummer, årslönekostnaden från ansökan och forskningstidens omfattning och period.'
      },
      nyckelord: ['rekvisition', 'begäran om utbetalning', 'utbetalning', 'termin', 'intyga', 'personnummer']
    },
    {
      ref: '13–14 §§', rubrik: 'Uppföljning och redovisning',
      text: [
        'Skolverket följer upp hur bidraget har använts.',
        'Huvudmannen ska lämna den ekonomiska och annan redovisning som Skolverket begär.'
      ],
      praktik: {
        rubrik: 'Frånvaro och mindre forskning',
        text: 'Det är den totala forskningstiden under bidragsåret som räknas. Påverkar en sjukskrivning inte forskningen påverkas inte bidraget. Forskar läraren mindre än planerat ska ni minska tiden i nästa begäran om utbetalning, om inte läraren tar igen det innan dess. Händer det efter beslutet om den andra utbetalningen ska ni meddela Skolverket, som bedömer om pengar ska krävas tillbaka. Skicka inte hälsouppgifter i mejl.'
      },
      nyckelord: ['uppföljning', 'redovisning', 'sjukskrivning', 'frånvaro', 'minskad tid', 'meddela skolverket']
    },
    {
      ref: '15 §', rubrik: 'När pengarna ska betalas tillbaka',
      text: ['Huvudmannen ska betala tillbaka bidraget om något av följande gäller:'],
      lista: [
        'Huvudmannen har lämnat felaktiga eller ofullständiga uppgifter, eller på annat sätt orsakat att bidraget betalats ut felaktigt eller med för högt belopp.',
        'Bidraget har använts till något annat än förordningen tillåter.',
        'Bidraget har inte använts, helt eller delvis.',
        'Villkoren i beslutet har inte följts.',
        'Den redovisning som Skolverket begär har inte lämnats.'
      ],
      nyckelord: ['återbetalning', 'betala tillbaka', 'felaktiga uppgifter', 'inte använt', 'redovisning']
    },
    {
      ref: '16–17 §§', rubrik: 'Återkrav och ränta',
      text: [
        'Skolverket ska då besluta att helt eller delvis kräva tillbaka bidraget. Om det finns särskilda skäl får Skolverket avstå helt eller delvis.',
        'Ränta tas ut från dagen en månad efter beslutet om återkrav. Räntan är statens utlåningsränta plus två procentenheter. Skolverket får avstå från räntan om det finns särskilda skäl.'
      ],
      nyckelord: ['återkrav', 'ränta', 'särskilda skäl', 'statens utlåningsränta']
    },
    {
      ref: '18 §', rubrik: 'Skolverkets föreskrifter',
      text: [
        'Skolverket får skriva mer detaljerade regler för hur förordningen ska tillämpas.',
        'På bidragssidan för 2026/27 hänvisar Skolverket bara till förordningen. Läs den tillsammans med Skolverkets anvisningar för året och ert beslut.'
      ],
      nyckelord: ['föreskrifter', 'anvisningar', 'skolfs', 'bemyndigande']
    },
    {
      ref: '19 §', rubrik: 'Överklagande',
      text: ['Beslut enligt förordningen får inte överklagas.'],
      praktik: 'Förordningen har ingen regel om stopp för utbetalning, så det finns heller inget sådant beslut att överklaga.',
      nyckelord: ['överklaga', 'domstol']
    }
  ],

  kalkylatorer: [
    {
      id: 'belopp', modul: 'praktiknara-forskning-belopp',
      flik: 'Räkna på bidrag', eyebrow: 'Bidrag enligt 9 §',
      rubrik: 'Vad blir', rubrikKursiv: 'bidraget?',
      ingress: 'Ange lärarens årslönekostnad, forskningstid och hur många månader hen forskar per termin. Räknaren visar bidraget för bidragsåret och hur det delas mellan de två utbetalningarna.',
      formel: { rubrik: 'Grundformeln', text: 'Bidrag = årslönekostnad × forskningstid × 0,5 × månader med forskning ÷ 12. Forskningstiden är högst 30 %.' },
      resultatRubrik: 'Beräknat bidrag för bidragsåret',
      falt: [
        { id: 'arslon', typ: 'tal', etikett: 'Årslönekostnad', min: 1, max: 5000000, steg: 1, standard: 600000, enhet: 'kr',
          hjalp: 'Samma belopp som i ansökan. Räkna bort lönepåslag för förstelärare eller lektor som betalas med bidraget för karriärtjänster.' },
        { id: 'tid', typ: 'reglage', etikett: 'Forskningstid', min: 1, max: 30, steg: 1, standard: 30, enhet: '%',
          hjalp: 'Andel av arbetstiden. 30 % ger fullt bidrag, alltså 15 % av lönen.' },
        { id: 'host', typ: 'reglage', etikett: 'Månader med forskning på hösten', min: 0, max: 6, steg: 1, standard: 6, enhet: 'mån',
          hjalp: 'Juli–december. Räkna påbörjade månader då läraren forskar. En hel månad semester räknas inte.' },
        { id: 'varen', typ: 'reglage', etikett: 'Månader med forskning på våren', min: 0, max: 6, steg: 1, standard: 6, enhet: 'mån',
          hjalp: 'Januari–juni.' }
      ],
      exempel: [
        { etikett: 'Bara på hösten', varden: { host: 6, varen: 0 } },
        { etikett: '4 månader på hösten, 5 på våren', varden: { host: 4, varen: 5 } },
        { etikett: '15 % forskningstid', varden: { tid: 15 } }
      ],
      resultatNotis: 'Beloppet förutsätter att ansökan har beviljats. Huvudmannen betalar minst lika mycket själv. Skolverket prövar varje begäran om utbetalning.',
      forbehall: [
        { rubrik: 'Formel', text: 'Förordningen (9 §) ger högst 15 % av lönen vid 30 % forskningstid, och mindre i samma proportion vid kortare tid. Skolverket räknar på påbörjade månader och fördelar beloppet mellan terminerna efter antal månader. Räknaren antar att varje månad är en tolftedel av årslönekostnaden och avrundar varje termin till hela kronor. Skolverkets exakta beräkning kan skilja sig något.' },
        { rubrik: 'Det här prövar räknaren inte', text: 'Om läraren har rätt legitimation och examen, om projektet uppfyller kraven, vad som ska ingå i årslönekostnaden eller om pengarna räcker. Följ uppgifterna i Skolverkets formulär.' }
      ]
    }
  ],

  process: [
    { rubrik: 'Ta fram ett projekt', text: 'Utgå från ett verkligt problem i verksamheten tillsammans med läraren. Beskriv syftet och hur projektet kopplas till undervisningen. Kontrollera legitimation och forskarexamen.', ref: '4–6 §§' },
    { rubrik: 'Ansök på våren', text: 'Ansök i Skolverkets e-tjänst. För 2026/27 var ansökan öppen 15 mars–15 april 2026 och beslutet kom i juni.', ref: '10–11 §§' },
    { rubrik: 'Begär ut pengarna varje termin', text: 'För 2026/27: hösten 15 oktober–16 november 2026 och våren 1 april–3 maj 2027. Ange samma årslönekostnad som i ansökan.', ref: '12 §' },
    { rubrik: 'Följ upp forskningstiden', text: 'Minska tiden i nästa begäran om läraren forskar mindre. Meddela Skolverket om det händer efter sista utbetalningen.', ref: '13–17 §§' }
  ],

  underlagRubrik: 'Underlag att ha till hands',
  underlagIngress: 'Använd listan när ni förbereder ansökan och begäran om utbetalning. Markeringarna sparas inte – de försvinner när ni stänger sidan.',
  underlag: [
    'Lärarens legitimation och examensbevis för forskarexamen.',
    'Projektbeskrivning med problem, syfte och koppling till undervisningen.',
    'Lärarens anställning som lärare eller förskollärare, och eventuellt avtal med entreprenör.',
    'Årslönekostnad utan lönepåslag från karriärtjänster.',
    'Forskningstid i procent och vilka månader läraren forskar varje termin.',
    'Underlag som visar att huvudmannen betalar minst hälften av kostnaden för forskningstiden.',
    'Eventuellt avtal med ett lärosäte, om arbetet görs i samverkan.'
  ],

  kallor: [
    {
      titel: 'Förordning (2021:237) · Sveriges riksdag',
      url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-2021237-om-statsbidrag-for_sfs-2021-237/',
      beskrivning: 'Källan för kraven på lärare och examen, medfinansiering, beräkning, prioritering och återkrav. Paragrafhänvisningarna i guiden gäller den här förordningen.'
    },
    {
      titel: 'Statsbidrag för praktiknära forskning och utveckling 2026/27 · Skolverket',
      url: 'https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-praktiknara-forskning-och-utveckling-2026-27',
      beskrivning: 'Skolverkets anvisningar om månader, utbetalning per termin, frånvaro, karriärtjänster och datum för 2026/27.'
    },
    {
      titel: 'Statsbidrag för praktiknära forskning och utveckling 2025/26 · Skolverket',
      url: 'https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-praktiknara-forskning-och-utveckling-2025-26',
      beskrivning: 'Förra årets omgång med förklaringar om sjukskrivning, pågående projekt och ULF-avtal, och om att läraren ska vara anställd som lärare.'
    }
  ],

  forbehall: 'Guiden sammanfattar reglerna och visar hur beloppet räknas ut. Räknaren kontrollerar inte rätten till bidrag eller om projektet godkänns. Datum och anslag gäller 2026/27 och kan ändras. Använd Skolverkets aktuella anvisningar och ert beslut när ni ansöker och begär ut pengarna.'
};
