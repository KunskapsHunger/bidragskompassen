/* Fördjupning: Statsbidrag för yrkesinriktad vuxenutbildning vid företagsetableringar m.m. – förordning (2023:603).
 * Innehållet är stämt mot förordningen (ändrad t.o.m. SFS 2025:630, där ändringarna i SFS 2025:630 gäller
 * från 1 januari 2027), skollagen 23 kap. och Skolverkets sida för bidragsåret 2026 (uppdaterad 2 september 2026).
 * Ingen sida för bidragsåret 2027 var publicerad 1 oktober 2026. Inga räknare: bidraget har inga fasta belopp.
 * Schema: se FORDJUPNING.md. Klartext, inte citat – paragrafhänvisningarna gäller förordningen. */
window.SB_FORDJUPNING = window.SB_FORDJUPNING || {};
window.SB_FORDJUPNING['foretagsetableringar-komvux'] = {
  id: 'foretagsetableringar-komvux',
  rubrik: 'Yrkesvux vid företagsetableringar',
  rubrikKursiv: 'i klartext.',
  ingress: 'Vilka kommuner kan få bidrag när ett stort företag kommer, växer eller försvinner, vad får pengarna gå till och vad ändras den 1 januari 2027? Här står reglerna på vanlig svenska.',
  kontrollerad: '2026-10-01',
  forordning: {
    sfs: '2023:603',
    namn: 'Förordning (2023:603) om statsbidrag för yrkesinriktad vuxenutbildning vid företagsetableringar, företagsexpansioner, företagsnedläggningar och företagsneddragningar',
    lydelse: 'ändrad t.o.m. SFS 2025:630 (ny rubrik och nya regler från 1 januari 2027)',
    url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/rubriken-upphor-att-galla-u2027-01-01_sfs-2023-603/'
  },

  snabbfaktaRubrik: 'Tre saker att känna till först',
  snabbfakta: [
    { rubrik: 'Bara etableringar från 2027', text: 'Under 2026 kan bidrag ges både när ett stort företag etablerar sig eller växer och när det läggs ner eller drar ner. Från den 1 januari 2027 gäller bidraget bara etableringar och expansioner.' },
    { rubrik: 'Kostnader – inte fasta belopp', text: 'Det finns inga belopp per plats. Kommunen söker för kostnader som är direkt kopplade till utbildningen och som behövs för att genomföra den. Ingen medfinansiering krävs.' },
    { rubrik: 'Kommunen söker – anordnaren kan vara privat', text: 'Bara den kommun som anordnar utbildningen kan söka. Ett fristående utbildningsföretag kan utföra utbildningen om kommunen köper den av företaget (upphandling) eller godkänner det som anordnare (auktorisation). Kommunen söker, redovisar och svarar för villkoren.' }
  ],
  snabbfaktaNot: 'Bidraget gäller ett kalenderår i taget och lämnas i mån av pengar. Bidrag som beviljats före den 1 januari 2027 följer de äldre reglerna.',

  begreppRubrik: 'Ord som återkommer',
  begrepp: [
    { term: 'Företagsetablering och företagsexpansion', forklaring: 'Ett företag startar verksamhet på orten eller växer kraftigt där. Förordningen kräver att förändringen är stor, men anger ingen siffra.' },
    { term: 'Företagsnedläggning och företagsneddragning', forklaring: 'Ett företag lägger ner eller minskar sin verksamhet kraftigt. Grund för bidrag bara till och med 2026.' },
    { term: 'Yrkesinriktad utbildning i komvux', forklaring: 'Utbildning i kommunal vuxenutbildning på gymnasial nivå som leder till ett yrke.' },
    { term: 'Interkommunal ersättning', forklaring: 'Pengar som elevens hemkommun betalar till en annan kommun som utbildar eleven. Utbildning som ger sådan ersättning kan inte få det här bidraget.' },
    { term: 'Upphandling och auktorisation', forklaring: 'Två sätt för kommunen att låta någon annan utföra komvux på entreprenad. Kommunen är fortfarande huvudman, alltså ansvarig för utbildningen.' }
  ],

  sektioner: {
    regler: {
      rubrik: 'Från paragraf', rubrikKursiv: 'till praktik.',
      ingress: 'Rubrikerna följer förordningen. Där reglerna ändras den 1 januari 2027 står både den nuvarande och den nya lydelsen. Sök på till exempel ”nedläggning”, ”hela landet” eller ”återkrav”.'
    },
    praktik: {
      rubrik: 'Så används', rubrikKursiv: 'reglerna.',
      ingress: 'Kommunen beskriver förändringen, planerar utbildningen med arbetslivet, söker för kostnaderna och redovisar året efter. Räcker pengarna inte gör Skolverket ett urval.'
    }
  },

  paragrafer: [
    {
      ref: '1 §', rubrik: 'Vad bidraget gäller',
      text: [
        'Bidraget gäller yrkesinriktad utbildning i komvux på gymnasial nivå. Utbildningen ska planeras, dimensioneras och erbjudas tillsammans med arbetslivet och leda till kompetens som efterfrågas på arbetsmarknaden.',
        'Till och med den 31 december 2026: när företag etablerar sig, växer, läggs ner eller drar ner.',
        'Från den 1 januari 2027: bara när företag etablerar sig eller växer. Förordningen får då också en kortare rubrik: om statsbidrag för yrkesinriktad vuxenutbildning vid företagsetableringar och företagsexpansioner.'
      ],
      nyckelord: ['syfte', 'komvux', 'yrkesutbildning', 'etablering', 'expansion', 'nedläggning', 'neddragning', '2027']
    },
    {
      ref: '2–3 §§', rubrik: 'Pengar per år och när bidrag inte lämnas',
      text: ['Bidraget lämnas i mån av pengar och för ett kalenderår (bidragsår) i taget. Bidrag lämnas inte:'],
      lista: [
        'För utbildning som får bidrag på annat sätt, till exempel regionalt yrkesvux.',
        'För utbildning som kommunen får interkommunal ersättning för.',
        'För uppdragsutbildning, alltså utbildning som någon annan beställer och betalar.',
        'Om Skolinspektionen har förbjudit kommunen att driva verksamheten (verksamhetsförbud), så länge beslutet inte har upphävts.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Samma utbildningsplats kan inte finansieras både av det här bidraget och av regionalt yrkesvux. Eftersom hemkommunen inte betalar interkommunal ersättning är det kommunen som anordnar utbildningen som har kostnaden och söker bidraget.'
      },
      nyckelord: ['dubbelfinansiering', 'regionalt yrkesvux', 'interkommunal ersättning', 'uppdragsutbildning', 'verksamhetsförbud', 'bidragsår']
    },
    {
      ref: '4 §', rubrik: 'Villkor vid etablering eller expansion',
      text: ['En kommun kan få bidrag om alla de här villkoren är uppfyllda:'],
      lista: [
        'Kommunen har, eller står inför, en stor företagsetablering eller företagsexpansion – eller gränsar till en sådan kommun.',
        'Utbildningen ska leda till kompetens som efterfrågas på arbetsmarknaden på grund av etableringen eller expansionen.',
        'Utbildningen planeras, dimensioneras och erbjuds tillsammans med arbetsgivare och branschorganisationer i den kommun eller det län som berörs.',
        'Utbudet planeras efter samråd med den berörda kommunen eller länet och med Arbetsförmedlingen.',
        'Sökande från hela landet kan tas emot till utbildningen.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Om det finns särskilda skäl kan också en kommun som ligger nära, utan att gränsa till, den berörda kommunen få bidrag. Utbildningen behöver inte bara gälla jobb på det nya företaget. Ökar till exempel inflyttningen kan kommunen söka för en barnskötarutbildning.'
      },
      nyckelord: ['etablering', 'expansion', 'gränsar', 'grannkommun', 'särskilda skäl', 'arbetsgivare', 'arbetsförmedlingen', 'hela landet', 'batterifabrik']
    },
    {
      ref: '4 a §', rubrik: 'Villkor vid nedläggning eller neddragning (till och med 2026)',
      text: [
        'Till och med den 31 december 2026 kan en kommun också få bidrag om den har, eller står inför, en stor företagsnedläggning eller företagsneddragning – eller gränsar till en sådan kommun.',
        'Utbildningen ska leda till kompetens som efterfrågas på arbetsmarknaden. Enligt Skolverket kan det vara inom ett annat yrkesområde än det företag som läggs ner. Utbildningen ska planeras med arbetslivet och efter samråd med berörd kommun eller län och Arbetsförmedlingen. Vid särskilda skäl kan en kommun som ligger nära få bidrag.',
        'Paragrafen upphör den 1 januari 2027.'
      ],
      praktik: 'Kravet på att ta emot sökande från hela landet står i 4 § men inte i 4 a §. Skolverkets sida för 2026 räknar ändå upp det som ett villkor för alla. Fråga Skolverket om det gäller er.',
      nyckelord: ['nedläggning', 'neddragning', 'varsel', 'omställning', 'byta yrke', 'upphör 2027']
    },
    {
      ref: '5 §', rubrik: 'Urval av elever',
      text: ['Kommunen behöver inte följa vuxenutbildningsförordningens vanliga regler om urval (3 kap. 7 §) när fler söker än det finns platser.'],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Det är upp till kommunen om den vill använda urvalsreglerna. Väljer den att inte göra det finns inga andra regler att utgå från.'
      },
      nyckelord: ['urval', 'antagning', 'prioritering', 'elever']
    },
    {
      ref: '6 §', rubrik: 'Ansökan och beslut',
      text: [
        'En behörig företrädare för kommunen ansöker skriftligen hos Skolverket. Skolverket prövar ansökan och betalar ut bidraget. Beslutet kan innehålla villkor, och de står då i beslutet.',
        'Kommunen ska lämna de uppgifter och handlingar som Skolverket behöver för att pröva ansökan.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Det finns inga fasta belopp. Ni söker för kostnader som är direkt kopplade till utbildningen och nödvändiga för att genomföra den, och ni ska kunna motivera dem. Ansökan för 2026 var öppen 1 november–1 december 2025, och i januari 2026 beviljades 107 452 700 kr. Det finns pengar kvar för 2026: mejla statsbidrag.foretagsetableringar@skolverket.se. Ansökningar hanteras i turordning. En ansökningsperiod för 2027 var inte publicerad den 1 oktober 2026.'
      },
      nyckelord: ['ansökan', 'e-tjänst', 'kostnader', 'extra ansökan', 'turordning', 'beslut', '125 miljoner', 'moms', 'avskrivning']
    },
    {
      ref: '7 §', rubrik: 'När pengarna inte räcker',
      text: [
        'Kommer det in fler ansökningar än det finns pengar för gör Skolverket ett urval. Skolverket prioriterar i den här ordningen:',
        'Från den 1 januari 2027 gäller ordningen bara etableringar och expansioner.'
      ],
      lista: [
        'Förändringar i glest befolkade län.',
        'Förändringar som är stora jämfört med resten av landet.',
        'Förändringar som är stora för de kommuner som berörs.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Anslaget för 2026 är 125 miljoner kr. Beskriv i ansökan hur stor förändringen är, både i landet och för kommunen, och var den sker.'
      },
      nyckelord: ['urval', 'prioritering', 'glest befolkade län', 'nationell jämförelse', 'räcker inte']
    },
    {
      ref: '8–10 §§', rubrik: 'Uppföljning, redovisning och ändrade förhållanden',
      text: [
        'Skolverket följer upp vilka utbildningar bidraget gått till och elevunderlaget efter kön, hemkommun och om eleverna är födda i Sverige eller utomlands. Uppföljningen ska också visa hur många som fått arbete efter utbildningen.',
        'Kommunen ska delta i uppföljningen och lämna de uppgifter som Skolverket eller en annan myndighet med regeringens uppdrag begär. Ändringar som kan påverka bidraget ska anmälas till Skolverket så snart som möjligt.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Bidragsåret 2026 redovisas 15 januari–15 februari 2027 i e-tjänsten. Ni redovisar vilka utbildningar bidraget använts till och elevunderlaget. Skolverket kan också kontrollera hur pengarna använts.'
      },
      nyckelord: ['redovisning', 'uppföljning', 'elevunderlag', 'kön', 'hemkommun', 'sysselsättning', 'anmälan', 'kontroll']
    },
    {
      ref: '11–13 §§', rubrik: 'Betala tillbaka (återkrav)',
      text: [
        'Kommunen är återbetalningsskyldig om ett villkor i väsentlig mån inte följts, om bidraget lämnats felaktigt eller med för högt belopp, om det inte använts eller använts till fel sak, eller om kommunen inte deltagit i uppföljningen.',
        'Skolverket ska då kräva tillbaka bidraget helt eller delvis. Vid synnerliga skäl – mycket starka skäl – får Skolverket avstå.',
        'Ränta tas ut från den trettionde dagen efter beslutet om återkrav. Räntan är statens utlåningsränta plus två procentenheter. Även räntan kan efterges vid synnerliga skäl.'
      ],
      nyckelord: ['återkrav', 'återbetalning', 'betala tillbaka', 'ränta', 'synnerliga skäl']
    },
    {
      ref: '14 §', rubrik: 'Stopp för utbetalning',
      text: ['Skolverket ska helt eller delvis stoppa utbetalningen om kommunen inte längre uppfyller villkoren eller om det finns grund för återkrav. Beslutet gäller direkt.'],
      nyckelord: ['stopp', 'utbetalning', 'hinder']
    },
    {
      ref: '15–16 §§', rubrik: 'Föreskrifter och överklagande',
      text: [
        'Skolverket får skriva de föreskrifter som behövs för att verkställa förordningen.',
        'Bara beslut om stopp för utbetalning (14 §) kan överklagas till allmän förvaltningsdomstol. Andra beslut, till exempel avslag eller återkrav, kan inte överklagas.'
      ],
      praktik: 'Vi har inte hittat några särskilda föreskrifter för bidraget. Skolverkets sida hänvisar till förordningen och förordningen om vuxenutbildning.',
      nyckelord: ['föreskrifter', 'överklaga', 'domstol']
    },
    {
      ref: 'Övergång', rubrik: 'Övergångsbestämmelser',
      text: [
        'SFS 2025:629 började gälla den 1 augusti 2025. Bidrag som beviljades före dess följer de äldre reglerna.',
        'SFS 2025:630 börjar gälla den 1 januari 2027. Då tas nedläggningar och neddragningar bort (1, 4 a och 7 §§). Bidrag som beviljats före den 1 januari 2027 följer fortfarande de äldre reglerna.'
      ],
      nyckelord: ['övergång', 'äldre regler', '2025:629', '2025:630', 'ikraftträdande', '1 januari 2027']
    }
  ],

  process: [
    { rubrik: 'Beskriv förändringen', text: 'Beskriv företagsetableringen eller expansionen, hur stor den är och vilka kompetenser som behövs. För 2026 kan det också gälla en nedläggning eller neddragning – inte från 2027.', ref: '4–4 a, 7 §§' },
    { rubrik: 'Planera med arbetslivet', text: 'Planera och dimensionera utbildningen med arbetsgivare och branscher, och samråd med berörd kommun eller län och Arbetsförmedlingen. Bestäm om utbildningen ska drivas i egen regi, upphandlas eller ges av auktoriserade anordnare.', ref: '4 §' },
    { rubrik: 'Räkna fram och sök', text: 'Räkna fram kostnaderna som är direkt kopplade till utbildningen och motivera dem. För 2026: mejla Skolverket om extra ansökan. För 2027: bevaka Skolverkets sida – en ansökningsperiod var inte publicerad den 1 oktober 2026.', ref: '6 §' },
    { rubrik: 'Genomför och håll isär', text: 'Ta emot sökande från hela landet. Se till att samma plats inte också får regionalt yrkesvux eller interkommunal ersättning. Anmäl ändringar så snart som möjligt.', ref: '3, 4, 10 §§' },
    { rubrik: 'Redovisa', text: 'Redovisa utbildningar och elevunderlag i e-tjänsten. Bidragsåret 2026 redovisas 15 januari–15 februari 2027. Pengar som inte använts enligt reglerna kan krävas tillbaka med ränta.', ref: '8–13 §§' }
  ],

  underlagRubrik: 'Underlag att ha till hands',
  underlagIngress: 'Använd listan när ni förbereder ansökan och redovisningen. Markeringarna sparas inte – de försvinner när ni stänger sidan.',
  underlag: [
    'Beskrivning av företagsförändringen: vilket företag, hur stor och när.',
    'Analys av vilka kompetenser som behövs och varför utbildningen svarar mot dem.',
    'Dokumentation av samverkan med arbetsgivare och branscher och samråd med kommun eller län och Arbetsförmedlingen.',
    'Kostnadsberäkning där varje kostnad är kopplad till utbildningen och motiverad.',
    'Upphandlingsavtal eller auktorisationsavtal om en fristående anordnare utför utbildningen.',
    'Underlag som visar att platserna inte också får regionalt yrkesvux eller interkommunal ersättning.',
    'Uppgifter om eleverna: kön, hemkommun, födelseland (inrikes eller utrikes) och om de fått arbete.'
  ],

  kallor: [
    {
      titel: 'Förordning (2023:603) · Sveriges riksdag',
      url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/rubriken-upphor-att-galla-u2027-01-01_sfs-2023-603/',
      beskrivning: 'Gällande lydelse och lydelsen från 1 januari 2027. Paragrafhänvisningarna i guiden gäller den här förordningen.'
    },
    {
      titel: 'SFS 2025:630 · Svensk författningssamling',
      url: 'https://svenskforfattningssamling.se/sites/default/files/sfs/2025-06/SFS2025-630.pdf',
      beskrivning: 'Ändringen som från 1 januari 2027 begränsar bidraget till företagsetableringar och företagsexpansioner.'
    },
    {
      titel: 'Statsbidrag för företagsetableringar och nedläggningar 2026 · Skolverket',
      url: 'https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-foretagsetableringar-och-nedlaggningar-2026',
      beskrivning: 'Extra ansökan för 2026, beviljade belopp, anslaget på 125 miljoner kr, kostnader, redovisning och frågor och svar.'
    },
    {
      titel: 'Skollagen (2010:800) · Sveriges riksdag',
      url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/skollag-2010800_sfs-2010-800/',
      beskrivning: 'Entreprenad i komvux (23 kap. 2, 6 och 8 §§): kommunen får lämna över utbildningen till en enskild anordnare men är fortfarande huvudman.'
    },
    {
      titel: 'Förordning (2011:1108) om vuxenutbildning · Sveriges riksdag',
      url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-20111108-om-vuxenutbildning_sfs-2011-1108/',
      beskrivning: 'Reglerna om urval (3 kap. 7 §) som kommunen inte behöver följa för den här utbildningen.'
    }
  ],

  forbehall: 'Guiden sammanfattar reglerna. Den har ingen räknare, eftersom bidraget inte har fasta belopp. Reglerna ändras den 1 januari 2027 och ingen sida för bidragsåret 2027 var publicerad när guiden kontrollerades. Använd förordningen, Skolverkets aktuella sida och ert beslut när ni söker och redovisar.'
};
