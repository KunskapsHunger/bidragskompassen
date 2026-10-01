/* Fördjupning: Nordplus Vuxen (Nordplus Adult) – Nordiska ministerrådets program för vuxnas lärande i Norden och Baltikum.
 * Huvudadministratör är danska Uddannelses- og Forskningsstyrelsen; UHR är programkontor i Sverige.
 * Reglerna står i Nordplus handbok 2026 (kapitlen Nordplus Adult och General and Contact Information) och på
 * nordplusonline.org; UHR:s sida kompletterar. Avsnittens namn nedan följer handbokens rubriker.
 * Schema: se FORDJUPNING.md, "Regelverk som inte är en svensk förordning". */
window.SB_FORDJUPNING = window.SB_FORDJUPNING || {};
window.SB_FORDJUPNING['nordplus-vuxen'] = {
  id: 'nordplus-vuxen',
  rubrik: 'Nordplus Vuxen',
  rubrikKursiv: 'i klartext.',
  ingress: 'Vad kan ni söka för inom vuxnas lärande, vem får resa och hur räknas bidraget? Här står reglerna i Nordplus handbok på vanlig svenska. Ni kan också räkna på bidraget för ett utbyte eller besök.',
  kontrollerad: '2026-10-01',
  forordning: {
    namn: 'Nordplus handbok 2026 (Nordiska ministerrådet)',
    etikett: 'Nordplus handbok 2026',
    iText: 'i handboken',
    url: 'https://nordplusonline.org/globalassets/documents/conditions/the-nordplus-handbook-2026.pdf',
    lydelse: 'gäller projekt som beviljas 2026. Till omgången 2027 kan en ny handbok gälla'
  },

  snabbfaktaRubrik: 'Tre saker att känna till först',
  snabbfakta: [
    { rubrik: 'Fasta belopp i euro', text: 'Bidraget räknas med schabloner för resor, dagar och möten. Genomför ni allt som planerat får ni behålla hela bidraget, oavsett vad det kostade.' },
    { rubrik: 'Två sorters projekt', text: 'Mobilitetsprojekt (besök och utbyten) kräver två länder. Samarbetsprojekt (nätverk, utveckling, kartläggning) kräver tre.' },
    { rubrik: 'Danmark administrerar', text: 'Beslut, kontrakt och utbetalning kommer från den danska myndigheten som leder Nordplus Vuxen. UHR svarar på frågor i Sverige.' }
  ],
  snabbfaktaNot: 'Pengarna kommer från Nordiska ministerrådet, inte från svenska staten. Huvudomgången har sista dag 1 februari.',

  begreppRubrik: 'Ord som återkommer',
  begrepp: [
    { term: 'Vuxnas lärande', forklaring: 'All utbildning och allt lärande för vuxna: formellt som komvux, men också folkbildning, studieförbund, bibliotek och lärande på arbetsplatsen.' },
    { term: 'Koordinator', forklaring: 'Den organisation som skickar in ansökan för partnerskapet, tar emot pengarna och rapporterar.' },
    { term: 'Schablon (enhetskostnad)', forklaring: 'Ett fast belopp per resa, dag, möte eller organisation. Ni visar att aktiviteten blev av, inte vad den kostade.' },
    { term: 'Formell koppling', forklaring: 'Alla som reser ska vara anställda, volontärer med avtal eller inskrivna studerande i en organisation i partnerskapet.' },
    { term: 'Espresso', forklaring: 'Nordiska ministerrådets system där ni söker och skickar slutrapporten.' },
    { term: 'Huvudadministratör', forklaring: 'Det programkontor som leder delprogrammet. För Nordplus Vuxen är det danska Uddannelses- og Forskningsstyrelsen.' }
  ],

  sektioner: {
    regler: {
      rubrik: 'Från handbok', rubrikKursiv: 'till praktik.',
      ingress: 'Avsnitten följer Nordplus handbok 2026. Öppna det ni behöver, eller sök på till exempel ”studerande”, ”utvecklingsarbete” eller ”slutrapport”.'
    },
    praktik: {
      rubrik: 'Så används', rubrikKursiv: 'reglerna.',
      ingress: 'Projektet bygger på ett gemensamt behov hos partnerna, söks av koordinatorn och följs upp i en slutrapport. Dokumentera längs vägen och spara allt i fem år.'
    }
  },

  paragrafer: [
    {
      ref: 'Inledning', rubrik: 'Vad Nordplus Vuxen är',
      text: [
        'Nordplus är Nordiska ministerrådets största utbildningsprogram och finansieras av de nordiska och baltiska länderna. Programperioden är 2023–2027.',
        'Nordplus Vuxen omfattar allt vuxnas lärande: formellt, icke-formellt och informellt, inom allmän utbildning, folkbildning och yrkesutbildning. Programmet ger bidrag till utbyten, nätverk och projektsamarbeten.',
        'Teman kan till exempel vara grundläggande färdigheter, validering, övergången mellan utbildning och arbete, grön omställning, digitalisering, integration, hälsa och demokrati. Det viktiga är att projektet bygger på ett behov hos partnerna och att de behöver resultaten i sin egen verksamhet.'
      ],
      praktik: {
        rubrik: 'UHR:s förklaring',
        text: 'Nordplus Vuxen ska stärka vuxnas nyckelkompetenser, bidra till att informellt och icke-formellt lärande erkänns, stärka vuxenutbildningen och öka kontakterna mellan vuxnas lärande och arbetslivet.'
      },
      nyckelord: ['Nordiska ministerrådet', 'vuxnas lärande', 'folkbildning', 'validering', 'programperiod', 'teman']
    },
    {
      ref: 'Målgrupper', rubrik: 'Vem kan söka',
      text: [
        'Alla sorters organisationer som arbetar med vuxnas lärande i de elva Nordplusländerna kan söka. Det kan vara utbildningsanordnare för vuxna, organisationer med särskilt stöd för vuxna och forskningsmiljöer med kunskap om vuxnas lärande.',
        'Även föreningar, myndigheter, företag, kulturinstitutioner som museer och bibliotek och ideella organisationer kan söka, om projektet gäller lärande för vuxna i organisationerna.',
        'Fortbildning i yrket (CVET) hör till Nordplus Vuxen. Grundläggande yrkesutbildning (VET) ska i stället sökas i Nordplus Junior.'
      ],
      praktik: {
        rubrik: 'I svensk vuxenutbildning',
        text: 'Handboken nämner inga svenska skolformer, men komvux, sfi, folkhögskolor och studieförbund arbetar med vuxnas lärande och bör kunna söka, både kommunala och privata anordnare. Gäller projektet yrkesvux kan det vara oklart om det räknas som grundläggande yrkesutbildning, som hör till Nordplus Junior. Fråga UHR innan ni söker.'
      },
      nyckelord: ['vem kan söka', 'komvux', 'sfi', 'folkhögskola', 'studieförbund', 'bibliotek', 'förening', 'företag', 'privat', 'yrkesvux', 'CVET', 'VET']
    },
    {
      ref: 'Förberedande besök', rubrik: 'Förberedande besök',
      text: [
        'Ett förberedande besök ska hjälpa partner från minst två länder att planera en kommande ansökan till Nordplus Vuxen.',
        'Bidrag ges för ett möte på högst fem dagar inklusive resdagar, med upp till två personer från varje organisation som reser. Organisationen som är värd får inget bidrag.',
        'Ansökan ska innehålla ett program för besöket, bakgrunden och målen för det tänkta projektet och vad varje organisation bidrar med.'
      ],
      praktik: 'Förberedande besök kan sökas både till 1 februari och till 1 oktober, och projektperioden är högst ett år. Allmänna studiebesök som inte gäller ett gemensamt projekt söks i stället som utbyte för personal.',
      nyckelord: ['förberedande besök', 'planera', 'två personer', 'fem dagar', '1 oktober']
    },
    {
      ref: 'Utbyte av personal', rubrik: 'Utbyte för lärare och annan personal',
      text: [
        'Lärare, utbildare och annan personal som arbetar med vuxnas utbildning kan få bidrag för kurser och egna studie- eller undervisningsvistelser hos en partner i ett annat land.',
        'Varje vistelse ska vara minst tre hela arbetsdagar, utan resdagar. Normalt får högst två personer per organisation resa, om inte behovet av fler motiveras.',
        'Varje vistelse ska ske vid en enda organisation. Studieresor med korta besök på flera ställen prioriteras inte. Ansökan ska ha ett program med tydliga mål.',
        'Personal från grundskola, gymnasium eller högskola ska söka i Nordplus Junior respektive Nordplus Högre utbildning.'
      ],
      nyckelord: ['personalutbyte', 'lärarutbyte', 'job shadowing', 'fortbildning', 'tre arbetsdagar', 'två personer']
    },
    {
      ref: 'Utbyte av studerande', rubrik: 'Utbyte för vuxenstuderande',
      text: [
        'Vuxenstuderande, alltså studerande över 18 år som är inskrivna hos en organisation i partnerskapet, kan resa till en partner. Personal räknas inte som studerande.',
        'Vistelsen ska vara minst tre hela arbetsdagar, utan resdagar. Den ska ske hos en utbildningsanordnare, där de studerande lär sig tillsammans med studerande i värdlandet, eller som praktik på ett företag.',
        'Medföljande lärare kan få bidrag. Studieresor till flera organisationer ger inget bidrag.'
      ],
      nyckelord: ['studerandeutbyte', 'vuxenstuderande', 'kursdeltagare', 'praktik', 'medföljande lärare', '18 år']
    },
    {
      ref: 'Mobilitetsprojekt', rubrik: 'Gemensamt för mobilitetsprojekt',
      text: [
        'Ett mobilitetsprojekt kräver minst två organisationer från två länder. En av dem är koordinator och söker för hela partnerskapet.',
        'Alla resor ska vara genomförda inom två år. Förberedande besök ska vara genomförda inom ett år.',
        'Vistelserna får bara ske i länder som finns med i partnerskapet. Alla som reser ska ha en formell koppling till en organisation i partnerskapet.'
      ],
      nyckelord: ['mobilitetsprojekt', 'två länder', 'koordinator', 'två år', 'formell koppling', 'volontär']
    },
    {
      ref: 'Samarbetsprojekt', rubrik: 'Nätverk, utvecklingsprojekt och kartläggning',
      text: [
        'Samarbetsprojekt kräver minst tre organisationer från tre länder och pågår i högst två år. Samma organisation får vara med i högst två ansökningar om samarbetsprojekt per omgång, som koordinator eller partner.',
        'Tematiska nätverk utbyter kunskap och erfarenhet om en gemensam fråga och ska leda till ny kunskap eller nya idéer. Nya konstellationer med olika sorters organisationer prioriteras.',
        'Utvecklingsprojekt ska ta fram minst en färdig produkt, till exempel läromedel, kurser, metoder eller digitala plattformar. Produkten ska vara fritt tillgänglig och märkt med Nordplus logotyp.',
        'Kartläggningsprojekt samlar och analyserar befintlig kunskap om vuxnas lärande, ofta som jämförelser mellan länder. Resultatet ska publiceras.'
      ],
      praktik: 'Koordinatorn ansvarar för att ingen organisation är med i fler än två ansökningar. Är den det bedöms bara de två första som kom in. Gränsen gäller inte mobilitetsprojekt.',
      nyckelord: ['samarbetsprojekt', 'tre länder', 'nätverk', 'utvecklingsprojekt', 'kartläggning', 'produkt', 'två ansökningar', 'logotyp']
    },
    {
      ref: 'Finansiering: mobilitet', rubrik: 'Belopp i mobilitetsprojekt',
      text: [
        'Bidraget är ett bidrag till kostnaderna, och alla organisationer får räkna med att stå för en del själva. Medfinansieringen ska inte redovisas.',
        'Resa tur och retur per deltagare: 330 euro mellan Danmark, Estland, Finland, Lettland, Litauen, Norge, Sverige och Åland, 660 euro till eller från Färöarna och Island och 1 300 euro till eller från Grönland. Mer än 250 km enkel väg till avreseorten ger 175 euro extra.',
        'Uppehälle per deltagare: vuxenstuderande 70 euro per dag, 250 euro per vecka eller 750 euro per månad. Lärare och annan personal 100 euro per dag, 500 euro per vecka eller 1 350 euro per månad. Beloppet ska täcka hela vistelsen, vanligen inklusive två resdagar.',
        'Projektledningsbidrag: 2 000 euro till koordinatorn och 1 000 euro per partner. Det ges bara till utbyten för personal och studerande, inte förberedande besök, och bara om resa och uppehälle är minst 10 000 euro eller minst 15 personer reser.'
      ],
      praktik: 'Ansökningssystemet räknar ut resa och uppehälle automatiskt när ni anger antal deltagare, länder och hur länge de stannar.',
      nyckelord: ['belopp', 'euro', 'resa', '330', '660', '1300', '175', 'uppehälle', '70', '250', '750', '100', '500', '1350', 'projektledning', '10000']
    },
    {
      ref: 'Finansiering: samarbete', rubrik: 'Belopp i samarbetsprojekt',
      text: [
        'Projektledning och spridning: 4 000 euro till koordinatorn och 2 000 euro per partner. Pengarna kan gå till administration, möten, publicering, översättning, evenemang och externa tjänster.',
        'Möten mellan partnerna, per deltagare och möte, med resa och boende: 630 euro inom Norden och Baltikum, 960 euro till eller från Färöarna och Island och 1 600 euro till eller från Grönland. Inrikes tillägg 175 euro, eller 475 euro med uppehälle för deltagare i samma land som värden.',
        'Utvecklingsarbete, bara i utvecklings- och kartläggningsprojekt: 250 euro per arbetsdag i de nordiska länderna och 125 euro i de baltiska. I genomsnitt beviljas 25 dagar per år och organisation. Fler än 40 dagar under hela projektet ges bara i undantagsfall och ska motiveras.',
        'Det finns inget fast tak, men hela programmet har omkring 1,2 miljoner euro per år. Ett tvåårigt projekt med tre–fyra partner får i genomsnitt omkring 50 000 euro.'
      ],
      praktik: 'Ansökan om samarbetsprojekt ska ha Nordplus Vuxens budgetmall för 2026. Utvecklings- och kartläggningsprojekt får fritt flytta upp till 25 procent av pengarna mellan möten och utvecklingsarbete.',
      nyckelord: ['samarbetsprojekt', 'budget', 'budgetmall', '4000', '2000', 'möten', '630', 'arbetsdag', '250', '125', '40 dagar', '50000']
    },
    {
      ref: 'Ej godtagbara kostnader', rubrik: 'Det som inte ger bidrag – och extra stöd',
      text: ['Bidraget får inte gå till:'],
      lista: [
        'allmänna omkostnader som inte hör till projektet,',
        'inköp av kontors- eller IT-utrustning,',
        'deltagare från länder utanför Norden och Baltikum,',
        'aktiviteter utanför Norden och Baltikum.'
      ],
      praktik: {
        rubrik: 'Inkluderingsstöd',
        text: 'Studerande och personal med funktionsnedsättning eller hälsoskäl kan få extra pengar, upp till hela den faktiska kostnaden, till exempel för ledsagare, tolk eller enkelrum. Sök i ansökan om behovet är känt, annars via e-post till nordplus@ufm.dk under projektet. Fakturor ska bifogas slutrapporten.'
      },
      nyckelord: ['ej godtagbara', 'omkostnader', 'IT-utrustning', 'inkluderingsstöd', 'funktionsnedsättning', 'tolk', 'enkelrum']
    },
    {
      ref: 'Utbetalning', rubrik: 'Utbetalning och bokföring',
      text: [
        'Pengarna betalas till koordinatorn, som ansvarar för dem under hela kontraktsperioden. Partnerskapet bestämmer själv hur pengarna fördelas.',
        'Större bidrag betalas i två delar: 80 procent när kontraktet är underskrivet och 20 procent när slutrapporten är godkänd. Mindre bidrag betalas ut helt när kontraktet är underskrivet. Gränsen går vid 15 000 euro.',
        'Den danska myndigheten betalar senast 45 dagar efter att det underskrivna kontraktet har kommit in. Bidraget ska bokföras som en egen post så att det syns vid en granskning.'
      ],
      praktik: 'Genomför ni alla aktiviteter som planerat och slutrapporten godkänns får ni behålla hela bidraget, även om kostnaderna blev lägre. Blir de högre får partnerskapet stå för resten.',
      nyckelord: ['utbetalning', 'förskott', '80 procent', '20 procent', '15000', 'kontrakt', 'bokföring', 'överskott']
    },
    {
      ref: 'Ansökan', rubrik: 'Krav på ansökan',
      text: ['För att ansökan ska prövas måste allt det här stämma:'],
      lista: [
        'Den skickas in i Espresso före sista ansökningsdagen, klockan 23.59.',
        'Den är skriven på danska, norska, svenska eller engelska.',
        'Varje organisation, även koordinatorn, har bifogat en ifylld avsiktsförklaring som är underskriven av organisationens behöriga företrädare och projektets koordinator.',
        'Samarbetsprojekt har en budget på Nordplus mall. Rena mobilitetsansökningar behöver ingen budget.',
        'Den som söker har fullgjort tidigare åtaganden i Nordplus, till exempel rapporter eller återbetalningar.',
        'Ansökan gäller bara aktiviteter som inte har börjat.'
      ],
      praktik: 'Huvudomgången har sista dag 1 februari, eller närmast följande vardag. Utlysningen kommer ungefär tre månader innan. Förberedande besök kan också sökas till 1 oktober. Datum för 2027 är inte publicerade.',
      nyckelord: ['ansökan', 'Espresso', 'språk', 'avsiktsförklaring', 'letter of intent', 'budget', 'sista ansökningsdag', '1 februari', '23.59']
    },
    {
      ref: 'Bedömning', rubrik: 'Bedömning, beslut och omprövning',
      text: [
        'Ansökningar bedöms efter relevans, mål och innehåll, organisation och genomförande samt spridning av resultat. Budgeten granskas noga mot vad projektet ska åstadkomma.',
        'Nordplus programkommitté beslutar. Ansökan kan beviljas helt, delvis eller avslås, och bidraget kan sänkas om budgeten är för stor.',
        'Enligt handboken kommer beslut i huvudomgången ungefär tre månader efter sista dag. UHR skriver att besluten skickas ut i mitten av juni. I höstomgången kommer beslutet efter ungefär sex veckor.'
      ],
      praktik: {
        rubrik: 'Överklaga',
        text: 'Ni kan alltid be om en förklaring till ett avslag. Ett överklagande går bara om ni kan visa att handläggningen innehåller formella fel. Det skickas skriftligt till huvudadministratören i Danmark, och programkommittén har sista ordet.'
      },
      nyckelord: ['bedömning', 'kriterier', 'beslut', 'programkommitté', 'avslag', 'juni', 'överklaga']
    },
    {
      ref: 'Uppföljning', rubrik: 'Slutrapport och granskning',
      text: [
        'Koordinatorn ska skicka in en slutrapport i Espresso senast 30 dagar efter att projektperioden har gått ut.',
        'I mobilitetsprojekt anger ni de resor som faktiskt gjordes, utan underskrift. Samarbetsprojekt lämnar en slutredovisning som skrivs under av organisationens behöriga företrädare. Utvecklings- och kartläggningsprojekt redovisar även antalet arbetsdagar.',
        'Underlag skickas inte med, men koordinatorn ska samla in och spara allt från alla partner i minst fem år efter att rapporten har godkänts. Nordplus kan göra kontroller och besök.'
      ],
      praktik: {
        rubrik: 'Återbetalning',
        text: 'Ni kan behöva betala tillbaka om utbytena blev kortare, avbröts eller inte blev av, eller om deltagare eller aktiviteter inte var giltiga. I samarbetsprojekt gäller det också oanvända pengar och produkter som inte levererades. Pengarna ska då vara betalda senast 20 dagar efter kravet.'
      },
      nyckelord: ['slutrapport', '30 dagar', 'Espresso', 'slutredovisning', 'arbetsdagar', 'fem år', 'granskning', 'återbetalning']
    }
  ],

  kalkylatorer: [
    {
      id: 'mobilitet', modul: 'nordplus-vuxen-mobilitet',
      flik: 'Räkna på bidrag', eyebrow: 'Schabloner för mobilitet',
      rubrik: 'Hur mycket', rubrikKursiv: 'kan det bli?',
      ingress: 'Räkna på bidraget för resor och uppehälle för er organisations deltagare. Gör en beräkning per aktivitet och resmål. Det exakta beloppet räknas ut i Espresso när ni söker.',
      formel: { rubrik: 'Grundformeln', text: 'Bidrag = resa per deltagare × alla som reser + uppehälle per dag, vecka eller månad × varje deltagare. Studerande och personal har olika uppehållsbelopp.' },
      resultatRubrik: 'Bidrag enligt schablon',
      falt: [
        { id: 'aktivitet', typ: 'segment', etikett: 'Aktivitet', standard: 'personal',
          alternativ: [
            { varde: 'personal', etikett: 'Utbyte för personal', hjalp: 'Lärare, utbildare och annan personal. Normalt högst två per organisation.' },
            { varde: 'studerande', etikett: 'Utbyte för studerande', hjalp: 'Vuxenstuderande över 18 år, med medföljande lärare om ni vill.' },
            { varde: 'forberedande', etikett: 'Förberedande besök', hjalp: 'Högst två personer per organisation, högst fem dagar inklusive resdagar.' }
          ] },
        { id: 'studerande', typ: 'tal', etikett: 'Vuxenstuderande som reser', min: 0, max: 200, steg: 1, standard: 8,
          visasOm: { falt: 'aktivitet', ar: 'studerande' } },
        { id: 'personal', typ: 'tal', etikett: 'Lärare och annan personal som reser', min: 0, max: 200, steg: 1, standard: 2,
          hjalp: 'Vid utbyte för studerande: medföljande lärare.' },
        { id: 'resvag', typ: 'segment', etikett: 'Resväg', standard: 'norden',
          alternativ: [
            { varde: 'norden', etikett: 'Norden och Baltikum', hjalp: 'Mellan Danmark, Estland, Finland, Lettland, Litauen, Norge, Sverige och Åland: 330 euro.' },
            { varde: 'island', etikett: 'Färöarna eller Island', hjalp: '660 euro tur och retur.' },
            { varde: 'gronland', etikett: 'Grönland', hjalp: '1 300 euro tur och retur.' }
          ] },
        { id: 'inrikes', typ: 'kryss', etikett: 'Mer än 250 km till avreseorten', standard: false,
          hjalp: 'Från hemorten till flygplats, tåg- eller busstation för utlandsresan, enkel väg. Ger 175 euro extra per deltagare.' },
        { id: 'enhet', typ: 'segment', etikett: 'Uppehälle räknas per', standard: 'vecka',
          alternativ: [
            { varde: 'dag', etikett: 'Dag', hjalp: 'Studerande 70 euro, personal 100 euro per dag.' },
            { varde: 'vecka', etikett: 'Vecka', hjalp: 'Studerande 250 euro, personal 500 euro per vecka.' },
            { varde: 'manad', etikett: 'Månad', hjalp: 'Studerande 750 euro, personal 1 350 euro per månad.' }
          ] },
        { id: 'antal', typ: 'tal', etikett: 'Vistelsens längd', min: 1, max: 104, steg: 1, standard: 1,
          hjalp: 'Antal dagar, veckor eller månader enligt valet ovan, inklusive resdagar.' }
      ],
      exempel: [
        { etikett: 'Studerande med två lärare, en vecka', varden: { aktivitet: 'studerande', studerande: 8, personal: 2 } },
        { etikett: 'Förberedande besök, fyra dagar', varden: { aktivitet: 'forberedande', personal: 2, enhet: 'dag', antal: 4 } },
        { etikett: 'En lärare på Island i två veckor', varden: { personal: 1, resvag: 'island', antal: 2 } }
      ],
      resultatNotis: 'Beloppet gäller er organisations resor. Partnernas resor räknas på samma sätt och läggs till i samma ansökan.',
      forbehall: [
        { rubrik: 'Källa', text: 'Beloppen står i Nordplus handbok 2026 under Funding in Nordplus Adult och på nordplusonline.org. De kan ändras till omgången 2027.' },
        { rubrik: 'Dagar, veckor eller månader', text: 'Handboken anger belopp per dag, vecka och månad men inte hur en vistelse som inte är jämna veckor ska räknas. Det gör ansökningssystemet automatiskt. Räknaren använder den enhet ni väljer.' },
        { rubrik: 'Det här prövar räknaren inte', text: 'Om partnerskapet och ansökan uppfyller kraven, projektledningsbidraget, inkluderingsstöd eller samarbetsprojekt.' }
      ],
      tabell: {
        rubrik: 'Schabloner i mobilitetsprojekt',
        kolumner: ['Kostnad', 'Vuxenstuderande', 'Lärare och personal'],
        rader: [
          ['Resa inom Norden och Baltikum', '330 euro', '330 euro'],
          ['Resa Färöarna eller Island', '660 euro', '660 euro'],
          ['Resa Grönland', '1 300 euro', '1 300 euro'],
          ['Inrikes resa över 250 km enkel väg', '175 euro', '175 euro'],
          ['Uppehälle per dag', '70 euro', '100 euro'],
          ['Uppehälle per vecka', '250 euro', '500 euro'],
          ['Uppehälle per månad', '750 euro', '1 350 euro']
        ],
        fotnot: 'Projektledning (2 000 euro koordinator, 1 000 euro per partner) tillkommer vid minst 10 000 euro eller minst 15 resenärer. Samarbetsprojekt har andra schabloner.'
      }
    }
  ],

  process: [
    { rubrik: 'Hitta partner och behov', text: 'Hitta organisationer i Norden eller Baltikum med samma behov. Sök gärna ett förberedande besök för att planera tillsammans. Bestäm vem som är koordinator.', ref: 'Målgrupper, Förberedande besök' },
    { rubrik: 'Ansök i Espresso', text: 'Koordinatorn söker för hela partnerskapet senast 1 februari klockan 23.59. Bifoga avsiktsförklaringar från alla och, för samarbetsprojekt, budgetmallen.', ref: 'Ansökan' },
    { rubrik: 'Beslut och kontrakt', text: 'Beslutet kommer från den danska huvudadministratören, enligt UHR i mitten av juni. Skriv under kontraktet. Pengarna kommer inom 45 dagar.', ref: 'Bedömning, Utbetalning' },
    { rubrik: 'Genomför och dokumentera', text: 'Fördela pengarna enligt er överenskommelse. För deltagarlistor vid varje möte och samla underlag. Kontakta huvudadministratören innan större ändringar.', ref: 'Mobilitetsprojekt, Samarbetsprojekt' },
    { rubrik: 'Slutrapportera', text: 'Skicka slutrapporten senast 30 dagar efter kontraktsperiodens slut. Har ni fått 80 procent i förskott betalas resten när rapporten är godkänd. Spara allt i fem år.', ref: 'Uppföljning' }
  ],

  underlagRubrik: 'Underlag att ha till hands',
  underlagIngress: 'Använd listan när ni förbereder ansökan och slutrapporten. Markeringarna sparas inte – de försvinner när ni stänger sidan.',
  underlag: [
    'Avsiktsförklaring från varje organisation, även koordinatorn, underskriven av behörig företrädare och projektets koordinator.',
    'Beskrivning av behovet, målen och varje organisations koppling till vuxnas lärande.',
    'Program för resorna: vilka som reser, varifrån och vart, hur länge och med vilka mål.',
    'För samarbetsprojekt: budget på Nordplus Vuxens mall för 2026 och en detaljerad arbetsplan.',
    'Överenskommelse mellan partnerna om uppgifter och hur bidraget fördelas (rekommenderas).',
    'Deltagarlistor, kvitton och färdbevis från alla partner, sparade i fem år.',
    'För utvecklings- och kartläggningsprojekt: redovisning av arbetsdagar och den färdiga produkten.'
  ],

  kallor: [
    {
      titel: 'Nordplus handbok 2026 · Nordplus',
      url: 'https://nordplusonline.org/globalassets/documents/conditions/the-nordplus-handbook-2026.pdf',
      beskrivning: 'Reglerna för projekt som beviljas 2026: målgrupper, aktiviteter, schabloner, ansökan, bedömning och rapport. Avsnittsnamnen i guiden följer handboken.'
    },
    {
      titel: 'Funding in Nordplus Adult · Nordplus',
      url: 'https://nordplusonline.org/apply-for-funding/funding/nordplus-adult/',
      beskrivning: 'Aktuella schabloner för mobilitets- och samarbetsprojekt och budgetmallen för 2026.'
    },
    {
      titel: 'Activities you can apply for through Nordplus Adult · Nordplus',
      url: 'https://nordplusonline.org/apply-for-funding/activities-you-can-apply-for/nordplus-adult/',
      beskrivning: 'Reglerna för förberedande besök, utbyten för personal och studerande, nätverk, utvecklings- och kartläggningsprojekt.'
    },
    {
      titel: 'Nordplus vuxen · UHR',
      url: 'https://www.uhr.se/internationella-mojligheter/samarbete-och-utbyte/sok-finansiering/nordplus-vuxen/',
      beskrivning: 'UHR:s information på svenska om mål, aktiviteter, ansökan, beslut och rapportering, och kontaktperson i Sverige.'
    },
    {
      titel: 'Payment of the grant · Nordplus',
      url: 'https://nordplusonline.org/manage-and-run-projects/payment-of-the-grant/',
      beskrivning: 'Hur bidraget betalas ut och fördelas mellan koordinator och partner.'
    },
    {
      titel: 'Report the project · Nordplus',
      url: 'https://nordplusonline.org/report-and-share-results/repor-the-project/',
      beskrivning: 'Slutrapport och slutredovisning för Nordplus Vuxen, återbetalning och dokumentation.'
    }
  ],

  forbehall: 'Guiden sammanfattar Nordplus handbok 2026 och visar hur schablonerna för mobilitet räknas. Räknaren kontrollerar inte om ansökan uppfyller kraven eller hur den bedöms, och det exakta beloppet räknas ut i Espresso. Belopp och datum kan ändras till omgången 2027, och beviljade projekt följer handboken för det år de beviljades. Använd Nordplus aktuella handbok och ert kontrakt när ni söker och rapporterar.'
};
