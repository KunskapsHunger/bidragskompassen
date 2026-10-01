/* Fördjupning: Atlas praktik – APL utanför EU/EES (UHR).
 * Atlas är statliga pengar som UHR fördelar. Reglerna för omgången står i UHR:s allmänna villkor för Atlas praktik 2026
 * (paragrafnumreringen nedan gäller villkoren), UHR:s programsida, guiden till ansökan och projektsidan för rapportering.
 * Schema: se FORDJUPNING.md, avsnittet "Regelverk som inte är en svensk förordning". Klartext, inte citat. */
window.SB_FORDJUPNING = window.SB_FORDJUPNING || {};
window.SB_FORDJUPNING['atlas-praktik'] = {
  id: 'atlas-praktik',
  rubrik: 'Atlas praktik',
  rubrikKursiv: 'i klartext.',
  ingress: 'Vem kan söka, hur länge ska praktiken vara och hur mycket blir det per elev? Här står UHR:s villkor på vanlig svenska. Ni kan också räkna på bidraget för era egna elever och veckor.',
  kontrollerad: '2026-10-01',
  forordning: {
    namn: 'Allmänna villkor för Atlas praktik 2026 (UHR)',
    etikett: 'Allmänna villkor 2026',
    iText: 'i villkoren',
    url: 'https://uhr.guidecloud.se/1062.guide',
    lydelse: 'gäller ansökningsomgången 2026. Äldre projekt följer villkoren i sitt eget beslut'
  },

  snabbfaktaRubrik: 'Tre saker att känna till först',
  snabbfakta: [
    { rubrik: 'Fast belopp per elev', text: '18 000 kr för Europa utanför EU/EES eller 22 000 kr för övriga världen, för tre veckor. Varje vecka därutöver ger 2 000 kr, upp till 15 veckor.' },
    { rubrik: 'Bara länder utanför EU/EES', text: 'APL i ett EU- eller EES-land söks i stället via Erasmus+.' },
    { rubrik: 'Hela beloppet i förskott', text: 'UHR betalar ut allt när beslutet kommer. Reser färre elever, eller blir det färre veckor, betalar ni tillbaka efter slutrapporten.' }
  ],
  snabbfaktaNot: 'Ingen medfinansiering krävs i Atlas praktik. APL utomlands ska vara avgiftsfri för eleverna, precis som annan undervisning.',

  begreppRubrik: 'Ord som återkommer',
  begrepp: [
    { term: 'APL', forklaring: 'Arbetsplatsförlagt lärande: den del av en yrkesutbildning som eleven gör på en arbetsplats. APL utomlands fungerar på samma sätt som APL i Sverige.' },
    { term: 'Schablon', forklaring: 'Ett fast belopp per deltagare. Ni redovisar inte vad resan faktiskt kostade, utan att den blev av.' },
    { term: 'EU/EES', forklaring: 'EU-länderna samt Island, Liechtenstein och Norge. Atlas gäller alla länder utanför detta område.' },
    { term: 'Avsiktsförklaring (Letter of Intent)', forklaring: 'Ett papper där APL-platsen intygar att den vill ta emot eleverna. UHR har en obligatorisk mall.' },
    { term: 'Vidareförmedlande organisation', forklaring: 'En organisation som förmedlar APL-platser utomlands. Den kan vara er partner i ansökan.' },
    { term: 'Projektperiod', forklaring: 'Tiden från UHR:s beslut till sista dag för slutrapport. Resor och kostnader måste ligga inom den.' }
  ],

  sektioner: {
    regler: {
      rubrik: 'Från villkor', rubrikKursiv: 'till praktik.',
      ingress: 'Rubrikerna följer UHR:s allmänna villkor för 2026. Öppna det avsnitt ni behöver, eller sök på till exempel ”veckor”, ”visum” eller ”återkrav”. Varje avsnitt visar vilken paragraf i villkoren det gäller.'
    },
    praktik: {
      rubrik: 'Så används', rubrikKursiv: 'reglerna.',
      ingress: 'Ansökan görs en gång per omgång, pengarna kommer direkt vid beslut och allt ska vara genomfört och rapporterat inom projektperioden. Spara underlagen i sju år.'
    }
  },

  paragrafer: [
    {
      ref: 'Syfte', rubrik: 'Vad programmet är till för',
      text: [
        'Atlas praktik ger elever i yrkesutbildning möjlighet att göra APL på en arbetsplats i ett land utanför EU/EES. Syftet är yrkesmässig utveckling, kulturellt utbyte och bättre språkkunskaper, i linje med kursplanerna.',
        'Programmet ska också stödja skolans arbete med de mål om internationalisering som står i läroplanen. Det är skolan eller organisationen som söker, inte eleven.',
        'Atlas är statliga pengar. UHR beslutar om bidraget och skriver villkoren för varje ansökningsomgång.'
      ],
      praktik: 'Projektet ska vara förankrat på skolan, och erfarenheterna ska tas tillvara i undervisningen när eleverna kommer hem.',
      nyckelord: ['syfte', 'internationalisering', 'yrkesutbildning', 'utlandspraktik', 'läroplan', 'statliga medel']
    },
    {
      ref: '§ 1', rubrik: 'Giltighetskriterier: det som måste stämma',
      text: ['UHR granskar först att ansökan är giltig. Om något av det här inte stämmer underkänns hela ansökan:'],
      lista: [
        'Ansökan har kommit in senast klockan 12.00 sista ansökningsdagen.',
        'Ansökan har skickats via UHR:s ansökningssystem.',
        'Den som söker får söka, och partnern är en giltig partner.',
        'Projektet ligger inom giltig projektperiod och i ett giltigt land.',
        'En korrekt ifylld avsiktsförklaring på UHR:s mall är bifogad – en från varje partner om ni har flera.'
      ],
      praktik: {
        rubrik: 'UHR:s förklaring',
        text: 'Det går inte att komplettera ansökan efter sista ansökningsdagen. Innehåller ansökan både giltiga och ogiltiga avsiktsförklaringar kan den godkännas delvis. Ansökningar som är giltiga går vidare till en kvalitetsbedömning som görs av externa, oberoende bedömare.'
      },
      nyckelord: ['giltighet', 'klockan 12', 'sista ansökningsdag', 'avsiktsförklaring', 'letter of intent', 'komplettera', 'kvalitetsbedömning']
    },
    {
      ref: '§ 2–3', rubrik: 'Vem kan söka och vem kan resa',
      text: [
        'Skolor, utbildningsorganisationer och kommuner som ansvarar för gymnasieskolans yrkesprogram med minst 15 veckors obligatorisk APL kan söka. Teknikprogrammets fjärde år räknas som yrkesprogram.',
        'Även anpassad gymnasieskola (alla nationella program) och anordnare av yrkesvux, yrkesintroduktion och lärlingsutbildning kan söka.',
        'De som kan resa är elever i dessa utbildningar, en medföljande yrkeslärare per projekt och vid behov stödpersoner till elever som behöver extra stöd.'
      ],
      praktik: {
        rubrik: 'UHR:s förklaring',
        text: 'Villkoren räknar kommuner, regioner, staten och enskilda som huvudmän. Fristående skolor kan alltså söka på samma sätt som kommunala, om de har en giltig utbildning. Enskilda elever kan inte söka. Pengarna betalas ut till huvudmannen, och den som söker anger huvudmannens organisationsnummer och plus- eller bankgiro.'
      },
      nyckelord: ['vem kan söka', 'yrkesprogram', 'fristående', 'kommun', 'anpassad gymnasieskola', 'yrkesvux', 'yrkesintroduktion', 'lärling', 'teknikprogrammet', 'lärare', 'stödperson']
    },
    {
      ref: '§ 4', rubrik: 'Hur länge APL-perioden ska vara',
      text: [
        'APL utomlands ska pågå i minst tre veckor (15 arbetsdagar) och högst 15 veckor (75 arbetsdagar).',
        'För elever i anpassad gymnasieskola är kravet minst två veckor (tio arbetsdagar), och högst 15 veckor.'
      ],
      praktik: 'I ansökningssystemet går det bara att ange minst tre veckor. Planerar anpassad gymnasieskola två veckor anger ni ändå tre.',
      nyckelord: ['veckor', 'arbetsdagar', 'tre veckor', '15 veckor', 'två veckor', 'längd']
    },
    {
      ref: '§ 5–6', rubrik: 'Partner och land',
      text: [
        'Partnern kan vara ett företag, en organisation eller en skola utomlands. APL på en skola går bara om platsen följer riktlinjerna för APL. Partnern kan också vara en organisation som förmedlar APL-platser.',
        'APL på en svensk skola utomlands är inte giltig. En svensk skola utomlands kan däremot vara den som förmedlar platser.',
        'Alla länder utanför EU/EES är giltiga. Ni kan ha flera partner i samma ansökan, i samma eller olika länder.'
      ],
      praktik: {
        rubrik: 'Ändringar under projektet',
        text: 'En elev kan flyttas till en annan del av partnerorganisationen om avsiktsförklaringen gäller hela organisationen. Ni kan också flytta APL-platser mellan de organisationer och länder som finns i beslutet. Alla ändringar kräver skriftligt godkännande från UHR, och fler schabloner beviljas inte i efterhand.'
      },
      nyckelord: ['partner', 'arbetsplats', 'företag', 'land', 'utanför EU', 'EES', 'svensk skola utomlands', 'förmedling']
    },
    {
      ref: '§ 7', rubrik: 'Beslut och belopp',
      text: [
        'Bidraget beviljas som schabloner per deltagare:',
        'När UHR fördelar pengarna kan myndigheten vid behov prioritera spridning mellan utbildningsnivåer, nya sökande, geografisk spridning i Sverige och spridning mellan skolor. Beslutet gäller även om ni får mindre än ni sökte.'
      ],
      lista: [
        'Elev, Europa utanför EU/EES: 18 000 kr för minst tre veckor.',
        'Elev, övriga världen: 22 000 kr för minst tre veckor.',
        'Varje vecka efter de tre första: 2 000 kr, högst 12 extra veckor.',
        'Anpassad gymnasieskola: minst två veckor, men aldrig mer än grundschablonen för tre veckor.',
        'Medföljande lärare: 20 000 kr, högst en per projektansökan.'
      ],
      praktik: {
        rubrik: 'UHR:s förklaring',
        text: 'APL utomlands är en del av undervisningen och ska därför vara avgiftsfri för eleverna enligt skollagen. Rektor ansvarar för att förankra projektet hos huvudmannen. Bidraget är skattefritt enligt inkomstskattelagen. Beslutet kan inte överklagas. För stödperson till elev i behov av extra stöd söker ni extra medel i ansökan och motiverar summan.'
      },
      nyckelord: ['belopp', 'schablon', '18000', '22000', '2000', '20000', 'per vecka', 'lärare', 'prioritering', 'avgiftsfri', 'överklaga', 'skattefritt']
    },
    {
      ref: '§ 8–10', rubrik: 'Projektperiod och utbetalning',
      text: [
        'Projektperioden börjar den dag UHR beslutar och slutar sista dag för slutrapporten. APL och kostnader måste ligga inom den perioden.',
        'Beslutsperioden räcker till tolv månader efter projektperiodens slut. Då granskar UHR rapporterna och reglerar eventuella återkrav.',
        'UHR betalar ut bidraget så snart som möjligt efter beslutet, i kronor och utan moms. Ni behöver inte begära ut pengarna.'
      ],
      praktik: {
        rubrik: 'UHR:s förklaring',
        text: 'Hela beloppet betalas ut på en gång till huvudmannens plus- eller bankgiro. Är er organisation inte momspliktig kan ni få kostnader inklusive moms godkända, men då ska ni skicka med ett intyg om det när ni rapporterar.'
      },
      nyckelord: ['projektperiod', 'beslutsperiod', 'utbetalning', 'förskott', 'moms', 'rekvisition', 'bankgiro']
    },
    {
      ref: '§ 11', rubrik: 'Vad pengarna får gå till',
      text: ['Bidraget får gå till kostnader som behövs för APL-vistelsen, till exempel:'],
      lista: [
        'Resor i ekonomiklass med bagage, och avbeställningsskydd eller reseförsäkring.',
        'Lokala resor till och från flygplats och station, och mellan boende och arbetsplats.',
        'Logi och mat för deltagarna, med hänsyn till kostnad och säkerhet.',
        'Vaccinationer, visum (även resor till ambassaden) och pass.',
        'Försäkringar för deltagarna, och material som behövs för APL.',
        'Studiebesök som hör ihop med APL:ens syfte, och Atlas-aktiviteter som UHR ordnar.'
      ],
      praktik: {
        rubrik: 'Det här godtas inte',
        text: 'Resor dyrare än ekonomiklass och resor utanför projektperioden. Alkohol. Nöjen som nöjesparker, safari, bio och sightseeing utan direkt koppling till projektet. Elektronisk utrustning som datorer och kameror. Gåvor. Lön och arvoden för personal och vikarier. Ställs en resa in står skolan för kostnaden, och UHR kräver tillbaka hela schablonen för resan som inte blev av.'
      },
      nyckelord: ['kostnader', 'godtagbara', 'ekonomiklass', 'logi', 'mat', 'visum', 'vaccination', 'försäkring', 'alkohol', 'sightseeing', 'dator', 'lön', 'vikarie', 'gåva']
    },
    {
      ref: '§ 12–13', rubrik: 'Visum, vaccinationer och försäkringar',
      text: [
        'Skolan ska själv ta reda på och följa reglerna för visum och vaccinationer i landet där eleverna gör APL.',
        'Skolan ska också se till att alla deltagare har de försäkringar som krävs. Bidraget ersätter inte kostnader som uppstår om skolan har missat detta.'
      ],
      praktik: 'Börja med visum i god tid. Kontakta landets ambassad eller konsulat; Migrationsverket och Sweden Abroad har mer information.',
      nyckelord: ['visum', 'vaccination', 'försäkring', 'ambassad', 'konsulat']
    },
    {
      ref: '§ 14–15', rubrik: 'Slutrapport, enkäter och revision',
      text: [
        'Skolan ska skicka in en slutrapport senast när projektperioden slutar. Rapporten ska visa hur bidraget har använts. Slutrapport krävs även om inget blev av.',
        'Alla elever som har deltagit ska få en länk till en deltagarrapport (enkät) och svara senast vid projektperiodens slut.',
        'Skolan ska kunna styrka kostnaderna med kvitton och färdbevis, till exempel boardingkort, och spara dem i sju år. UHR och Riksrevisionen får granska.'
      ],
      praktik: {
        rubrik: 'UHR:s förklaring',
        text: 'Ni rapporterar i samma system som ni sökte i. Underlagen skickas inte in med rapporten, men UHR gör slumpvisa kontroller. Är skolan inte momsregistrerad redovisas kostnaderna med moms. Om UD avråder från resor kan krav på återbetalning hävas, om ni i slutrapporten visar att kostnaderna uppstod innan UD ändrade sina råd.'
      },
      nyckelord: ['slutrapport', 'rapportering', 'enkät', 'deltagarrapport', 'kvitton', 'boardingkort', 'sju år', 'revision', 'riksrevisionen']
    },
    {
      ref: '§ 16–17', rubrik: 'Avbrutet projekt och återkrav',
      text: [
        'Om projektet inte kan genomföras kan skolan skriftligt begära att det avbryts, till exempel om APL-platsen hoppar av eller om säkerhetsläget gör det omöjligt. Pengar som inte har använts ska betalas tillbaka.',
        'UHR bestämmer det slutliga beloppet när slutrapporten är godkänd. UHR kan kräva tillbaka hela eller delar av bidraget, till exempel om:'
      ],
      lista: [
        'skolan har fått andra pengar för samma projekt,',
        'syftet eller aktiviteterna har ändrats utan godkännande,',
        'projektet inte kan genomföras eller kostnaderna inte är giltiga,',
        'färre elever har rest än antalet beviljade schabloner,',
        'färre APL-veckor har genomförts än beviljat.'
      ],
      praktik: 'Återbetalningen ska vara hos UHR inom 20 dagar efter att ni har fått betalningskravet. Flyttar ni APL-platser mellan länder kan det påverka hur återkravet räknas.',
      nyckelord: ['återkrav', 'återbetalning', 'avbryta', 'färre elever', 'färre veckor', '20 dagar']
    },
    {
      ref: '§ 18', rubrik: 'Säkerhet och UD:s reseråd',
      text: [
        'Skolan ansvarar för att bedöma riskerna i projektet och ha en beredskap för dem. Deltagarna får inte vistas där det innebär stor risk för deras säkerhet eller hälsa.',
        'Resor får bara gå till länder och områden som UD inte avråder från, inte heller med avrådan från icke nödvändiga resor. Skolan ska följa UD:s information före och under resan.',
        'Inför UD en avrådan efter avresan ska skolan snabbt bedöma om eleverna ska stanna eller resa hem, i samråd med ambassad, försäkringsbolag och deltagare. UHR ska få veta om projektet skjuts upp eller ställs in.'
      ],
      praktik: 'Ansökan ska innehålla en riskhanteringsplan. Gör den konkret för varje APL-plats och dela den med partnern.',
      nyckelord: ['säkerhet', 'UD', 'avrådan', 'reseråd', 'risk', 'riskhantering', 'hemresa']
    },
    {
      ref: '§ 19–23', rubrik: 'Korruption, rättigheter och information',
      text: [
        'Skolan ska arbeta aktivt mot korruption och oegentligheter, förbjuda mutor och genast informera UHR vid misstanke.',
        'UHR får fritt använda material och resultat från projektet. UHR:s logotyp får inte användas i skolans eget material, och det får inte se ut som att UHR eller Regeringskansliet står bakom det.',
        'Skolan ansvarar för sina inloggningsuppgifter, ska meddela UHR om kontaktpersonen byts och se till att deltagarna känner till Regeringskansliets etiska riktlinjer för utlandsresor.'
      ],
      nyckelord: ['korruption', 'muta', 'logotyp', 'nyttjanderätt', 'kontaktperson', 'etiska riktlinjer']
    }
  ],

  kalkylatorer: [
    {
      id: 'belopp', modul: 'atlas-praktik-belopp',
      flik: 'Räkna på bidrag', eyebrow: 'Schabloner enligt § 7',
      rubrik: 'Hur mycket', rubrikKursiv: 'kan det bli?',
      ingress: 'Ange hur många elever som ska göra APL och hur många veckor. Har eleverna olika långa perioder räknar ni varje grupp för sig och lägger ihop. Vad ni faktiskt får står i UHR:s beslut.',
      formel: { rubrik: 'Grundformeln', text: 'Per elev = 18 000 kr (Europa utanför EU/EES) eller 22 000 kr (övriga världen) + 2 000 kr × veckor utöver tre. Plus 20 000 kr för en medföljande lärare.' },
      resultatRubrik: 'Högsta möjliga bidrag',
      falt: [
        { id: 'elevEuropa', typ: 'tal', etikett: 'Elever i Europa utanför EU/EES', min: 0, max: 500, steg: 1, standard: 0,
          hjalp: 'Till exempel Storbritannien. Ansökningssystemet avgör vilket område landet hör till. Länder i EU/EES ingår inte i Atlas.' },
        { id: 'veckorEuropa', typ: 'tal', etikett: 'Veckor per elev, Europa', min: 2, max: 15, steg: 1, standard: 3, enhet: 'veckor',
          hjalp: 'Minst 3 och högst 15 veckor. Används bara om ni har elever i Europa utanför EU/EES.' },
        { id: 'elevVarlden', typ: 'tal', etikett: 'Elever i övriga världen', min: 0, max: 500, steg: 1, standard: 4 },
        { id: 'veckorVarlden', typ: 'tal', etikett: 'Veckor per elev, övriga världen', min: 2, max: 15, steg: 1, standard: 4, enhet: 'veckor' },
        { id: 'anpassad', typ: 'kryss', etikett: 'Eleverna går i anpassad gymnasieskola', standard: false,
          hjalp: 'Då räcker två veckor, men två veckor ger samma belopp som tre.' },
        { id: 'larare', typ: 'kryss', etikett: 'En yrkeslärare följer med', standard: true,
          hjalp: '20 000 kr, högst en lärare per projektansökan.' }
      ],
      exempel: [
        { etikett: 'Sex elever i Europa, tre veckor', varden: { elevEuropa: 6, veckorEuropa: 3, elevVarlden: 0, larare: false } },
        { etikett: 'Två elever i 15 veckor', varden: { elevVarlden: 2, veckorVarlden: 15 } },
        { etikett: 'Anpassad gymnasieskola, två veckor', varden: { elevEuropa: 3, veckorEuropa: 2, elevVarlden: 0, anpassad: true } }
      ],
      resultatNotis: 'Beloppet är ett tak. UHR bedömer kvaliteten och kan bevilja färre platser än ni söker, eller inget alls.',
      forbehall: [
        { rubrik: 'Källa', text: 'Beloppen kommer från § 7 i UHR:s allmänna villkor för Atlas praktik 2026 och från UHR:s programsida. Villkoren kan ändras till nästa omgång.' },
        { rubrik: 'Det här prövar räknaren inte', text: 'Om skolan och partnern är giltiga, om ansökan håller kvalitet, extra medel för stödperson till elev i behov av extra stöd, eller om pengarna räcker till de faktiska kostnaderna.' },
        { rubrik: 'Schablon, inte kostnad', text: 'Ni redovisar att APL:en blev av, inte vad den kostade. Räcker schablonen inte står skolan för resten, eftersom APL ska vara avgiftsfri för eleverna.' }
      ],
      tabell: {
        rubrik: 'Belopp per elev',
        kolumner: ['APL-period', 'Europa utanför EU/EES', 'Övriga världen'],
        rader: [
          ['3 veckor', '18 000 kr', '22 000 kr'],
          ['4 veckor', '20 000 kr', '24 000 kr'],
          ['6 veckor', '24 000 kr', '28 000 kr'],
          ['10 veckor', '32 000 kr', '36 000 kr'],
          ['15 veckor (högst)', '42 000 kr', '46 000 kr']
        ],
        fotnot: 'Anpassad gymnasieskola: två veckor ger samma belopp som tre. Medföljande lärare: 20 000 kr, högst en per projekt.'
      }
    }
  ],

  process: [
    { rubrik: 'Hitta APL-plats och planera', text: 'Hitta en arbetsplats utanför EU/EES som passar elevernas utbildning. Behöver ni träffa platsen först kan ni söka Atlas planering. Koppla APL:en till kursernas mål och planera handledning och bedömning.', ref: '§ 2–6' },
    { rubrik: 'Ansök i tid', text: 'Ansökan görs på UHR:s Mina sidor och ska vara inne senast klockan 12.00 sista ansökningsdagen. Bifoga avsiktsförklaring på UHR:s mall från varje partner. Rektor intygar villkoren. Datum för nästa omgång är inte publicerat.', ref: '§ 1' },
    { rubrik: 'Beslut och pengar', text: 'Beslut kommer tidigast tio veckor efter sista ansökningsdagen, via e-post till kontaktpersonerna och rektor. Hela beloppet betalas ut till huvudmannen samtidigt.', ref: '§ 7–10' },
    { rubrik: 'Förbered och genomför', text: 'Ordna visum, vaccinationer, försäkringar, resa och boende. Förbered eleverna på språk, kultur och arbetsplatsens regler. Följ UD:s reseråd och meddela UHR om något ändras.', ref: '§ 12–13, § 18' },
    { rubrik: 'Rapportera och spara', text: 'Se till att alla elever svarar på enkäten. Skicka slutrapporten senast när projektperioden slutar. Spara kvitton och färdbevis i sju år.', ref: '§ 14–17' }
  ],

  underlagRubrik: 'Underlag att ha till hands',
  underlagIngress: 'Använd listan när ni förbereder ansökan och rapporten. Markeringarna sparas inte – de försvinner när ni stänger sidan.',
  underlag: [
    'Avsiktsförklaring på UHR:s obligatoriska mall, ifylld och undertecknad av varje APL-plats eller förmedlande organisation.',
    'Huvudmannens organisationsnummer och plus- eller bankgiro, och kontaktuppgifter till rektor.',
    'Uppgifter per APL-plats: land, program, avresedatum, antal veckor och antal elever.',
    'Mål för APL-perioden kopplade till kursernas centrala innehåll, och en plan för handledning, bedömning och intyg.',
    'Riskhanteringsplan på projekt- och individnivå.',
    'Under projektet: kopior på resehandlingar, kvitton och annat betalningsunderlag, sparade i sju år.',
    'Vid rapporten: elevernas enkätsvar och, om skolan inte är momspliktig, intyg om det.'
  ],

  kallor: [
    {
      titel: 'Allmänna villkor Atlas praktik 2026 · UHR',
      url: 'https://uhr.guidecloud.se/1062.guide',
      beskrivning: 'Villkoren för omgången 2026. Paragrafhänvisningarna i guiden gäller dessa villkor. Tabellen över godtagbara kostnader finns under § 11.'
    },
    {
      titel: 'Atlas praktik · UHR',
      url: 'https://www.uhr.se/internationella-mojligheter/samarbete-och-utbyte/sok-finansiering/atlas-praktik/',
      beskrivning: 'Vem som kan söka, schablonbelopp, ansökan, bedömning, utbetalning och mall för avsiktsförklaring.'
    },
    {
      titel: 'Guide till ansökan, Atlas praktik · UHR',
      url: 'https://uhr.guidecloud.se/890.guide',
      beskrivning: 'Steg för steg genom ansökningssystemet, med vad bedömarna letar efter i varje fråga.'
    },
    {
      titel: 'Projektsida Atlas praktik · UHR',
      url: 'https://www.uhr.se/internationella-mojligheter/samarbete-och-utbyte/hantera-projekt/atlas-praktik/',
      beskrivning: 'Slutrapport, elevenkäter, ändringar under projektet och återkrav.'
    },
    {
      titel: 'Atlas planering · UHR',
      url: 'https://www.uhr.se/internationella-mojligheter/samarbete-och-utbyte/sok-finansiering/atlas-planering/',
      beskrivning: 'Bidrag för en planeringsresa till en blivande APL-plats: 12 000 kr per deltagare i Europa utanför EU/EES och 20 000 kr i övriga världen.'
    }
  ],

  forbehall: 'Guiden sammanfattar UHR:s allmänna villkor för Atlas praktik 2026 och visar hur schablonerna räknas. Räknaren kontrollerar inte om ansökan är giltig eller hur UHR bedömer den. Villkor, belopp och datum kan ändras till nästa omgång, och projekt från tidigare år följer villkoren i sitt eget beslut. Använd UHR:s aktuella villkor och ert beslut när ni söker och rapporterar.'
};
