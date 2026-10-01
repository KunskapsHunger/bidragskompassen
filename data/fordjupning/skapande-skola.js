/* Fördjupning: Skapande skola – förordning (2007:1436) om statsbidrag till kulturell verksamhet i skolan.
 * Innehållet är stämt mot förordningen (ändrad t.o.m. SFS 2022:1615), Kulturrådets riktlinjer för Skapande skola
 * (beslutade 2026-06-09), bidragssidan och sidorna om ansökan, redovisning och projektändringar, samt beslutet
 * om fördelningen läsåret 2026/27 (15 april 2026). Schema: se FORDJUPNING.md. Klartext, inte citat –
 * paragrafhänvisningarna gäller förordningen. */
window.SB_FORDJUPNING = window.SB_FORDJUPNING || {};
window.SB_FORDJUPNING['skapande-skola'] = {
  id: 'skapande-skola',
  rubrik: 'Skapande skola',
  rubrikKursiv: 'i klartext.',
  ingress: 'Vem kan söka, vad får pengarna gå till och hur fördelas de? Här står reglerna på vanlig svenska. Ni kan också räkna ut hur mycket av bidraget som får gå till resor.',
  kontrollerad: '2026-10-01',
  forordning: {
    sfs: '2007:1436',
    namn: 'Förordning (2007:1436) om statsbidrag till kulturell verksamhet i skolan',
    lydelse: 'ändrad t.o.m. SFS 2022:1615',
    url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-20071436-om-statsbidrag-till_sfs-2007-1436/'
  },

  snabbfaktaRubrik: 'Tre saker att känna till först',
  snabbfakta: [
    { rubrik: 'Eleverna styr beloppet', text: 'Kulturrådet räknar ut bidraget efter hur många elever som ska delta. Projektens innehåll och er budget bedöms inte i ansökan.' },
    { rubrik: 'Ni ansvarar för villkoren', text: 'En ansökan kan beviljas trots att den innehåller sådant som inte är tillåtet. Felen upptäcks först vid redovisningen och kan leda till återkrav.' },
    { rubrik: 'Ett komplement', text: 'Bidraget ska komma utöver skolans eget kulturarbete. Det får inte ersätta ordinarie undervisning, till exempel i musik, bild eller slöjd.' }
  ],
  snabbfaktaNot: 'Ansökan görs en gång om året, i januari–februari, och gäller nästa läsår.',

  begreppRubrik: 'Ord som återkommer',
  begrepp: [
    { term: 'Huvudman', forklaring: 'Den som driver skolan och ansvarar för den: kommunen, staten eller en fristående huvudman, till exempel ett aktiebolag, en stiftelse eller en förening.' },
    { term: 'Professionell kulturaktör', forklaring: 'En konstnär eller kulturskapare med konstnärlig utbildning eller som till största delen arbetar inom sitt konstområde. Kulturrådet har särskilda krav, till exempel för författare.' },
    { term: 'Deltagande elever', forklaring: 'De elever som ni i ansökan säger ska delta i projekten. Antalet styr bidraget, och de eleverna ska nås även om ni får mindre än ni sökt.' },
    { term: 'Vissa särskilda utbildningsformer', forklaring: 'Bland annat undervisning på särskilda ungdomshem och för elever som vårdas på sjukhus, samt internationella skolor på grundskolenivå.' },
    { term: 'Komplement', forklaring: 'Något som kommer utöver det skolan redan gör. Bidraget får inte ersätta kultur som skolan redan erbjuder eller betalar för.' }
  ],

  sektioner: {
    regler: {
      rubrik: 'Från paragraf', rubrikKursiv: 'till praktik.',
      ingress: 'Rubrikerna följer förordningen. Kulturrådets riktlinjer fyller i detaljerna – de står i rutorna under texten. Sök på till exempel ”författare”, ”buss” eller ”återkrav”.'
    },
    praktik: {
      rubrik: 'Så används', rubrikKursiv: 'reglerna.',
      ingress: 'Ansökan är enkel, men ansvaret ligger hos er hela läsåret. Följ upp projekten under våren och spara underlag om kulturaktörerna och kostnaderna.'
    }
  },

  paragrafer: [
    {
      ref: '1–2 §§', rubrik: 'Vad bidraget är till för',
      text: [
        'Bidraget gäller kultur för och med elever i förskoleklassen, grundskolan och vissa särskilda utbildningsformer på grundskolenivå.',
        'Syftet är att konst och kultur ska bli en del av skolans arbete. Eleverna ska tillsammans med professionella kulturutövare få uppleva och förstå olika konstformer och utveckla sitt eget skapande.',
        'Bidrag ges bara i den mån det finns pengar.'
      ],
      praktik: {
        rubrik: 'Kulturrådets förklaring',
        text: 'Arbetet bygger på barnkonventionen, särskilt artikel 12 om barns rätt att säga sin mening och artikel 31 om rätten att fritt delta i kulturlivet. Eleverna ska alltså inte bedömas eller styras i vad de tycker om konst och kultur.'
      },
      nyckelord: ['syfte', 'kultur', 'skapande', 'barnkonventionen', 'förskoleklass', 'grundskola']
    },
    {
      ref: '3 §', rubrik: 'Vad som räknas som kultur och vilka skolformer som ingår',
      text: [
        'Kulturverksamhet är scenkonst, musik, litteratur, visuell konst, arkitektur, design, konsthantverk, film, media, hemslöjd samt arkiv- och museiverksamhet.',
        'Vissa särskilda utbildningsformer är utbildning på särskilda ungdomshem, särskild undervisning för elever som vårdas på sjukhus eller en institution knuten till ett sjukhus, och internationella skolor på grundskolenivå.',
        'Anpassade grundskolan, specialskolan och sameskolan räknas här som grundskola.'
      ],
      praktik: {
        rubrik: 'Kulturrådets förklaring',
        text: 'Kulturaktören ska ha konstnärlig utbildning och/eller till största delen arbeta inom sitt konstområde. Den som är självlärd kan visa det med till exempel stipendier, offentliga uppdrag eller utställningar. En författare ska ha gett ut minst två litterära verk på ett etablerat förlag. Vid hybridförlag eller eget förlag krävs också medlemskap i Sveriges Författarförbund eller motsvarande. Läroböcker räknas inte. Media betyder här till exempel film, speldesign och ljudberättande, inte journalistik eller programmering. Hembygdsgårdar, nöjesfält, turistattraktioner och science center räknas inte som professionell kulturverksamhet.'
      },
      nyckelord: ['kulturformer', 'professionell', 'kulturaktör', 'författare', 'museum', 'media', 'anpassad grundskola', 'specialskola', 'sameskola', 'sjukhusskola']
    },
    {
      ref: '4 §', rubrik: 'Vem kan söka',
      text: [
        'Bidraget kan sökas av den som är huvudman för förskoleklassen eller grundskolan enligt skollagen, eller huvudman för vissa särskilda utbildningsformer.',
        'Det kan alltså vara en kommun, staten eller en fristående huvudman. Kulturaktörer kan inte söka själva.'
      ],
      praktik: {
        rubrik: 'Kulturrådets förklaring',
        text: 'Två eller flera huvudmän kan söka tillsammans. En av dem ansvarar då för både ansökan och redovisning, och samarbetet ska vara godkänt av de högst ansvariga för skolverksamheten. Det får bara finnas en ansökan per huvudman. Söker kommunen för fristående skolor ska kommunen se till att skolans huvudman inte också söker för samma skola. Elever i till exempel NPF-klasser, hemundervisning eller sjukhusskola kan räknas in under ”vissa särskilda undervisningsformer”. Svenska utlandsskolor kan inte söka.'
      },
      nyckelord: ['huvudman', 'kommun', 'fristående', 'samverkan', 'gemensam ansökan', 'utlandsskola', 'npf']
    },
    {
      ref: '4 a §', rubrik: 'Vad pengarna får användas till',
      text: [
        'Bidrag får ges för att köpa in professionell kulturverksamhet och för insatser som främjar elevernas eget skapande som en del av undervisningen.',
        'Bidraget får inte gå till administration.',
        'Enligt Kulturrådet får pengarna gå till:'
      ],
      lista: [
        'Löner och arvoden till professionella kulturaktörer och kulturverksamheter.',
        'Resor och logi för den kulturaktör ni anlitar.',
        'Entréer och biljetter.',
        'Material, till exempel lera och annat konstnärsmaterial.',
        'Hyra av teknik, till exempel film-, ljud- och ljusutrustning.',
        'Lokalhyra.',
        'Transporter för elever och lärare till en kulturverksamhet – högst 20 procent av hela bidraget.'
      ],
      praktik: {
        rubrik: 'Det här godtar Kulturrådet inte',
        text: 'Administration, inventarier och teknik, böcker, mat och fika, förbrukningsmaterial för den vanliga verksamheten, arvoden till personer som inte är professionella kulturaktörer (till exempel skolans egna lärare, föreläsare eller journalister), skolresor och lägerskolor, fritidsverksamhet, ordinarie undervisning som idrott, musik, bild och slöjd, anställning av personal och kostnader som redan betalas på annat sätt. Kulturskolans pedagoger kan anlitas om de frigörs från sin vanliga tjänst under projektet och uppfyller kraven på professionell kulturaktör. För- och efterarbete tillsammans med kulturaktören kan ingå.'
      },
      nyckelord: ['kostnader', 'arvode', 'resor', 'buss', 'transport', '20 procent', 'entré', 'material', 'administration', 'kulturskola', 'skolresa']
    },
    {
      ref: '5 §', rubrik: 'Två villkor för att få bidrag',
      text: ['Huvudmannen måste uppfylla båda villkoren:'],
      lista: [
        'Huvudmannen har satt upp mål för insatserna med utgångspunkt i skolans styrdokument, till exempel läroplanen.',
        'Insatserna är ett komplement till den kultur som skolan redan erbjuder.'
      ],
      praktik: {
        rubrik: 'Kulturrådets förklaring',
        text: 'I ansökan intygar huvudmannen med ett kryss att det finns ett eget kulturarbete och en handlingsplan med tydliga mål. Planen skickas inte in. Bidraget ska komplettera skolans kulturuppdrag men inte ersätta undervisning i till exempel språk, bild, musik, drama, dans, slöjd eller historia. Insatserna får inte heller göras för att uppfylla skolans lärandemål.'
      },
      nyckelord: ['villkor', 'mål', 'styrdokument', 'läroplan', 'handlingsplan', 'komplement', 'intyga', 'lärandemål']
    },
    {
      ref: '6 §', rubrik: 'Ansökan',
      text: [
        'Kulturrådet prövar ansökningar från huvudmän.',
        'Enligt Kulturrådet kan ni söka en gång om året, under tidig vårtermin, och bara för nästa läsår. För läsåret 2026/27 var ansökan öppen 13 januari–10 februari 2026.',
        'I ansökan anger huvudmannen:'
      ],
      lista: [
        'Hur många elever som planeras delta.',
        'Hur många elever huvudmannen har totalt.',
        'En översiktlig beskrivning av de planerade insatserna och vilka konstformer de gäller.',
        'En uppskattad budget.'
      ],
      praktik: {
        rubrik: 'Kulturrådets förklaring',
        text: 'Lägg krutet på att elevantalen blir rätt. Skriv inte in detaljerade projekt och namnge inte kulturaktörer. En ansökan som kommer in efter sista dagen tas som princip inte med. Den som inte kompletterar i tid får sin ansökan obehandlad. Huvudmannen utser en kontaktperson som sköter ansökan och redovisning.'
      },
      nyckelord: ['ansökan', 'onlinetjänst', 'januari', 'februari', 'elevantal', 'kontaktperson', 'sista ansökningsdag']
    },
    {
      ref: '7 §', rubrik: 'Beslut och hur pengarna fördelas',
      text: [
        'Kulturrådet beslutar om och betalar ut bidrag för högst två år i taget.',
        'I praktiken kommer beslutet cirka tolv veckor efter sista ansökningsdag, vanligen i april. Bidraget betalas till huvudmannens plus- eller bankgirokonto.'
      ],
      praktik: {
        rubrik: 'Så fördelades läsåret 2026/27',
        text: 'Alla ansökningar som uppfyller grundkraven får bidrag. Beloppet räknas fram efter antalet deltagande elever och viktas så att små huvudmän kan göra satsningar på liknande villkor som stora. Extra pengar går till elever i anpassad grundskola, specialskola och särskilda undervisningsformer (till exempel resursskola, NPF-klasser, ungdomshem och sjukhusskola), och till huvudmän i glesa eller mycket glesa landsbygdskommuner. Läsåret 2026/27 fördelades 220 001 351 kr på 443 ansökningar med 863 715 deltagande elever, eller knappt 71 procent av det sökta beloppet. Det motsvarar cirka 255 kr per deltagande elev i snitt, men beloppet för en enskild huvudman kan vara både högre och lägre.'
      },
      nyckelord: ['beslut', 'fördelning', 'belopp', 'per elev', 'viktning', 'glesbygd', 'landsbygd', 'prioritering', 'april', 'två år']
    },
    {
      ref: '8 §', rubrik: 'Redovisning',
      text: [
        'Huvudmannen ska redovisa till Kulturrådet hur pengarna har använts.',
        'Sista dag står i beslutet. Redovisningsblanketten öppnar i onlinetjänsten 28 dagar innan.'
      ],
      lista: [
        'Vad som har gjorts och hur eleverna har varit delaktiga.',
        'Hur många elever som deltog, jämfört med ansökan.',
        'Vilka konstformer eleverna mött och vilka kulturaktörer som medverkat, med namn och yrke.',
        'Kostnader per kostnadsslag, utifrån bokföringen.',
        'Pengar som inte har använts, och varför.'
      ],
      praktik: {
        rubrik: 'Kulturrådets förklaring',
        text: 'Ange kulturaktörens eget namn, inte företagets eller förmedlarens. För en institution anges både namnet och föreställningen eller utställningen. Har ni fler än 50 kulturaktörer används en särskild Excelbilaga. Kulturrådet granskar efter sista redovisningsdag och gör stickprov på cirka 10 procent av redovisningarna, bland annat om kulturaktörerna är professionella. Spara därför CV eller liknande. Granskningen väntas vara klar i december. Har ni lagt in egna pengar kan ni redovisa ett underskott.'
      },
      nyckelord: ['redovisning', 'kulturaktörer', 'stickprov', 'cv', 'deltagande elever', 'underskott', 'onlinetjänst']
    },
    {
      ref: '9 §', rubrik: 'Betala tillbaka (återkrav)',
      text: ['Kulturrådet får kräva tillbaka hela eller delar av bidraget om något av det här gäller:'],
      lista: [
        'Huvudmannen har lämnat felaktiga uppgifter eller på annat sätt orsakat att bidraget betalats ut felaktigt eller med för högt belopp.',
        'Bidraget har av annat skäl betalats ut felaktigt eller med för högt belopp, och huvudmannen borde ha förstått det.',
        'Bidraget har inte använts till det det beviljades för.',
        'Huvudmannen redovisar inte.',
        'Villkoren i beslutet har inte följts.'
      ],
      praktik: {
        rubrik: 'Elevantal och ändringar',
        text: 'Om antalet deltagande elever blir betydligt lägre än i ansökan har bidraget beviljats på felaktiga grunder, och det kan leda till återkrav. Mindre skillnader på grund av till exempel sjukdom eller omorganisation räknas inte så. Fick ni mindre än ni sökte ska ni ändra projekten och budgeten – inte minska antalet elever. Mejla skapandeskola@kulturradet.se med ”förfrågan om projektändring” och ärendenumret om något behöver ändras. Projekt som inte hunnits med kan flyttas till tidig höst, men allt ska vara genomfört och betalt före redovisningen. Pengar som blir över betalas tillbaka till Kulturrådet.'
      },
      nyckelord: ['återkrav', 'återbetalning', 'betala tillbaka', 'elevantal', 'projektändring', 'förlängning', 'outnyttjade medel']
    },
    {
      ref: '10 §', rubrik: 'Kulturrådets regler och villkor',
      text: [
        'Kulturrådet får skriva de föreskrifter som behövs för att tillämpa förordningen.',
        'Kulturrådet har riktlinjer för Skapande skola som visar hur myndigheten tolkar reglerna. Till varje beslut hör också en villkorsbilaga med Kulturrådets generella villkor och eventuella särskilda villkor.'
      ],
      praktik: 'Läs förordningen tillsammans med riktlinjerna och villkorsbilagan i ert beslut. Det är villkoren i beslutet som gäller för just ert bidrag.',
      nyckelord: ['föreskrifter', 'riktlinjer', 'villkorsbilaga', 'generella villkor']
    },
    {
      ref: '11 §', rubrik: 'Överklagande',
      text: ['Kulturrådets beslut enligt förordningen får inte överklagas.'],
      nyckelord: ['överklaga', 'domstol']
    },
    {
      ref: 'Övergång', rubrik: 'Ändringar i förordningen',
      text: [
        'Förordningen började gälla den 1 februari 2008. Den har ändrats flera gånger.',
        'Ändringen SFS 2022:1394 började gälla den 1 oktober 2022. Den införde 4 a § om vad bidraget får användas till och gjorde om villkoren i 5 §. Den senaste ändringen, SFS 2022:1615, började gälla den 2 juli 2023 och gäller bland annat namnet anpassade grundskolan.'
      ],
      nyckelord: ['ändringar', '2022:1394', '2022:1615', 'ikraftträdande']
    }
  ],

  kalkylatorer: [
    {
      id: 'transport', modul: 'skapande-skola-transport',
      flik: 'Transporttaket', eyebrow: 'Kulturrådets riktlinjer 2.4',
      rubrik: 'Hur mycket får gå till', rubrikKursiv: 'resor?',
      ingress: 'Ange ert beviljade bidrag och planerade transportkostnader. Räknaren visar taket för transporter och hur mycket bidraget blir per deltagande elev.',
      formel: { rubrik: 'Grundformeln', text: 'Högst till transporter = beviljat bidrag × 20 %. Bidrag per elev = beviljat bidrag ÷ deltagande elever.' },
      resultatRubrik: 'Högst till transporter',
      falt: [
        { id: 'bidrag', typ: 'tal', etikett: 'Beviljat bidrag', min: 1, max: 1e10, steg: 1, standard: 200000, enhet: 'kr',
          hjalp: 'Beloppet i Kulturrådets beslut. Inför en ansökan kan ni använda förra årets belopp.' },
        { id: 'elever', typ: 'tal', etikett: 'Deltagande elever', min: 1, max: 2000000, steg: 1, standard: 800,
          hjalp: 'Det antal elever ni angav i ansökan.' },
        { id: 'transport', typ: 'tal', etikett: 'Planerade transportkostnader', min: 0, max: 1e10, steg: 1, standard: 30000, enhet: 'kr',
          hjalp: 'Bussar och andra resor för elever och lärare till en kulturverksamhet. Kulturaktörens egna resor räknas inte hit.' }
      ],
      exempel: [
        { etikett: 'Litet bidrag, mycket buss', varden: { bidrag: 50000, elever: 150, transport: 15000 } },
        { etikett: 'Hela landet 2026/27', varden: { bidrag: 220001351, elever: 863715, transport: 0 } }
      ],
      resultatNotis: 'Kulturrådet kan sätta en annan gräns för transporter och andra kostnader utan kulturaktör i ert beslut. Står det något i beslutet gäller det.',
      forbehall: [
        { rubrik: 'Formel', text: 'Riktlinjerna (avsnitt 2.4) säger att transporter för elever och lärare får vara högst 20 procent av det totala bidragsbeloppet. Taket avrundas nedåt till hela kronor.' },
        { rubrik: 'Bidrag per elev', text: 'Kulturrådet tipsar om att dela förra årets beviljade bidrag med antalet planerade elever för att få en uppskattning per elev. Det är ingen garanti: beloppen viktas efter huvudmannens storlek och prioriterade elevgrupper, och potten varierar mellan åren.' },
        { rubrik: 'Det här prövar räknaren inte', text: 'Om kostnaderna i övrigt är tillåtna, om kulturaktörerna är professionella eller om ni når det antal elever ni angav.' }
      ]
    }
  ],

  process: [
    { rubrik: 'Planera med elever och lärare', text: 'Bestäm vilka konstformer eleverna ska möta och hur många elever som ska delta. Se till att det finns mål och ett eget kulturarbete som bidraget kompletterar.', ref: '5 §' },
    { rubrik: 'Ansök i januari–februari', text: 'Kontaktpersonen ansöker i Kulturrådets onlinetjänst för nästa läsår. Var noga med elevantalen och kategorierna av elever.', ref: '4–6 §§' },
    { rubrik: 'Beslut i april', text: 'Läs beslutet och villkorsbilagan. Fick ni mindre än ni sökte: ändra projekten, inte antalet elever.', ref: '7 §' },
    { rubrik: 'Genomför och följ upp', text: 'Anlita professionella kulturaktörer, håll transporterna under taket och följ upp projekten under våren. Kontakta Kulturrådet innan ni gör större ändringar.', ref: '4 a §, 9 §' },
    { rubrik: 'Redovisa och betala tillbaka överskott', text: 'Redovisa i onlinetjänsten senast det datum som står i beslutet. Betala tillbaka pengar som inte har använts och ange diarienumret.', ref: '8–9 §§' }
  ],

  underlagRubrik: 'Underlag att ha till hands',
  underlagIngress: 'Använd listan när ni förbereder ansökan och redovisning. Markeringarna sparas inte – de försvinner när ni stänger sidan.',
  underlag: [
    'Huvudmannens mål och handlingsplan för kultur i skolan.',
    'Antal deltagande elever per kategori och huvudmannens totala antal elever.',
    'Vid samverkan: vilka huvudmän som ingår, deras elevantal, Kulturrådets Excelmall och ett eget avtal mellan huvudmännen.',
    'Avtal, offerter och CV eller liknande som visar att kulturaktörerna är professionella.',
    'Bokföring per kostnadsslag, med transporter för sig.',
    'Beslutet med villkorsbilaga, eventuella godkända projektändringar och diarienumret.'
  ],

  kallor: [
    {
      titel: 'Förordning (2007:1436) · Sveriges riksdag',
      url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-20071436-om-statsbidrag-till_sfs-2007-1436/',
      beskrivning: 'Källan för syfte, vem som kan söka, villkor, redovisning och återkrav. Paragrafhänvisningarna i guiden gäller den här förordningen.'
    },
    {
      titel: 'Riktlinjer för Skapande skola · Kulturrådet',
      url: 'https://www.kulturradet.se/globalassets/start/om-oss/sa-arbetar-kulturradet/sa-styrs-vi/riktlinjer/riktlinjer-dokument/riktlinjer-for-statsbidrag-till-skapande-skola-260609.pdf',
      beskrivning: 'Kulturrådets tolkning av reglerna, beslutad 9 juni 2026: professionell kulturaktör, tillåtna kostnader, transporttaket på 20 procent, prioriteringar och fördelning.'
    },
    {
      titel: 'Skapande skola · Kulturrådet',
      url: 'https://www.kulturradet.se/sok-bidrag/skapande-skola/',
      beskrivning: 'Bidragssidan med ansökan, samverkan, kostnader, redovisning och kopior av blanketterna.'
    },
    {
      titel: 'Så redovisar du Skapande skola · Kulturrådet',
      url: 'https://www.kulturradet.se/sok-bidrag/skapande-skola/sa-redovisar-du/',
      beskrivning: 'Checklista inför redovisningen, hur kulturaktörer anges och hur granskningen går till. Länkar också till sidan om projektändringar.'
    },
    {
      titel: 'Beslut och fördelning läsåret 2026/2027 · Kulturrådet',
      url: 'https://www.kulturradet.se/i-fokus/barn-och-unga/skapande-skola/nyheter/2026/beslut-och-fordelning-av-skapande-skola-bidraget-lasaret-2026-2027/',
      beskrivning: 'Belopp, antal ansökningar och elever samt prioriteringarna vid fördelningen 2026/27.'
    }
  ],

  forbehall: 'Guiden sammanfattar reglerna och Kulturrådets tolkning av dem. Räknaren kontrollerar inte om kostnaderna är tillåtna eller hur mycket ni får. Datum och belopp för 2026/27 kan ändras inför nästa läsår. Använd Kulturrådets aktuella riktlinjer och villkoren i ert beslut när ni ansöker och redovisar.'
};
