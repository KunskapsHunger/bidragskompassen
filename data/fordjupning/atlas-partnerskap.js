/* Fördjupning: Atlas partnerskap – utbyte med skolor utanför EU/EES (UHR).
 * Bidraget lämnas enligt förordning (2000:523) om statsbidrag för att främja internationella kontakter inom skolans område,
 * som bara har fem korta paragrafer. Detaljreglerna står i UHR:s allmänna villkor för Atlas partnerskap 2026 – paragraf-
 * numreringen nedan gäller villkoren. Stämt mot villkoren, förordningen (ändrad t.o.m. SFS 2015:805), UHR:s programsida,
 * guiden till ansökan och projektsidan. Schema: se FORDJUPNING.md, "Regelverk som inte är en svensk förordning". */
window.SB_FORDJUPNING = window.SB_FORDJUPNING || {};
window.SB_FORDJUPNING['atlas-partnerskap'] = {
  id: 'atlas-partnerskap',
  rubrik: 'Atlas partnerskap',
  rubrikKursiv: 'i klartext.',
  ingress: 'Vem kan söka, vad får ni göra och hur fungerar kravet på medfinansiering? Här står UHR:s villkor på vanlig svenska. Ni kan också räkna på bidrag och egen insats för ert projekt.',
  kontrollerad: '2026-10-01',
  forordning: {
    namn: 'Allmänna villkor för Atlas partnerskap 2026 (UHR)',
    etikett: 'Allmänna villkor 2026',
    iText: 'i villkoren',
    url: 'https://uhr.guidecloud.se/1060.guide',
    lydelse: 'gäller ansökningsomgången 2026. Äldre projekt följer villkoren i sitt eget beslut'
  },

  snabbfaktaRubrik: 'Tre saker att känna till först',
  snabbfakta: [
    { rubrik: 'Fast belopp per deltagare', text: '20 000 kr för Europa utanför EU/EES och 22 000 kr för övriga världen. Varje schablon motsvarar en deltagare som reser.' },
    { rubrik: 'Lika mycket egen insats', text: 'Skolan ska själv bidra med minst lika mycket som bidraget, till exempel i form av arbetstid. Det följer av förordningen.' },
    { rubrik: 'Färre resor ger återkrav', text: 'Reser färre än antalet beviljade schabloner kräver UHR tillbaka hela schablonen för varje resa som inte blev av.' }
  ],
  snabbfaktaNot: 'Partnern ska vara en skola eller förskola i ett land utanför EU/EES. Resorna ska vara avgiftsfria för eleverna.',

  begreppRubrik: 'Ord som återkommer',
  begrepp: [
    { term: 'Schablon', forklaring: 'Ett fast belopp per deltagare. Ni redovisar att resan blev av, inte vad den kostade.' },
    { term: 'Medfinansiering', forklaring: 'Skolans egen insats i projektet. Den ska vara minst lika stor som bidraget och kan bestå av arbetstid och andra projektkostnader.' },
    { term: 'EU/EES', forklaring: 'EU-länderna samt Island, Liechtenstein och Norge. Atlas gäller alla länder utanför detta område.' },
    { term: 'Avsiktsförklaring (Letter of Intent)', forklaring: 'Ett papper där partnerskolan intygar att den vill delta. UHR har en obligatorisk mall.' },
    { term: 'Associerad partner', forklaring: 'Någon utanför skolan, till exempel från förvaltningen eller lärarutbildningen, som får följa med om det är motiverat. Kan inte söka själv.' },
    { term: 'Projektperiod', forklaring: 'Tiden från UHR:s beslut till sista dag för slutrapport. Resor, kostnader och medfinansiering måste ligga inom den.' }
  ],

  sektioner: {
    regler: {
      rubrik: 'Från villkor', rubrikKursiv: 'till praktik.',
      ingress: 'Rubrikerna följer UHR:s allmänna villkor för 2026. Öppna det avsnitt ni behöver, eller sök på till exempel ”medfinansiering”, ”elevutbyte” eller ”återkrav”. Varje avsnitt visar vilken paragraf i villkoren det gäller.'
    },
    praktik: {
      rubrik: 'Så används', rubrikKursiv: 'reglerna.',
      ingress: 'Ni söker en gång per år, pengarna kommer direkt vid beslut och resorna ska ingå i ett arbete som pågår hela året. Spara underlagen i sju år.'
    }
  },

  paragrafer: [
    {
      ref: 'Syfte', rubrik: 'Vad programmet är till för',
      text: [
        'Atlas partnerskap ska främja internationella kontakter i det svenska skolväsendet. Skolan använder utbytet som ett verktyg för sitt utvecklingsarbete, så att eleverna når läroplanens mål.',
        'Personalen ska stärka sin ämnes- och yrkeskompetens genom erfarenhetsutbyte. Eleverna ska stärka sina kunskaper genom samarbete med elever i andra länder.',
        'Bidraget lämnas med stöd av förordning (2000:523) om statsbidrag för att främja internationella kontakter inom skolans område. Förordningen säger att UHR beslutar om bidrag och villkor, att bidraget får vara högst lika stort som det huvudmannen själv bidrar med och att beslutet inte kan överklagas.'
      ],
      praktik: 'Projektet ska utgå från skolans egna utvecklingsbehov och vara en del av arbetet under hela året, inte bara resorna. Spridning av erfarenheterna ska ingå.',
      nyckelord: ['syfte', 'utvecklingsarbete', 'internationalisering', 'läroplan', 'förordning 2000:523', 'statliga medel']
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
        text: 'Det går inte att komplettera ansökan efter sista ansökningsdagen. Giltiga ansökningar går vidare till en kvalitetsbedömning av externa, oberoende bedömare.'
      },
      nyckelord: ['giltighet', 'klockan 12', 'sista ansökningsdag', 'avsiktsförklaring', 'letter of intent', 'komplettera']
    },
    {
      ref: '§ 2–3', rubrik: 'Vem kan söka och vem kan resa',
      text: ['Skolenheter i följande verksamheter kan söka:'],
      lista: [
        'Förskola, förskoleklass, grundskola, anpassad grundskola, specialskola och sameskola.',
        'Gymnasieskola och anpassad gymnasieskola.',
        'Kommunal vuxenutbildning, inklusive allmän kurs på folkhögskola och komvux som anpassad utbildning.',
        'Fritidshem som kompletterar förskoleklass och grundskolans skolformer.',
        'Internationella skolor som är godkända eller har rätt till bidrag enligt skollagen, och anordnare av kompletterande utbildningar med statligt stöd.',
        'Modersmålsenheter. Mottagningsenheter kan inte söka, men deras personal kan vara med som associerad partner.'
      ],
      praktik: {
        rubrik: 'Vem som reser',
        text: 'Skolledare, personal och elever från både den svenska skolan och partnerskolan kan delta, liksom en associerad partner om det är motiverat. Villkoren räknar kommuner, regioner, staten och enskilda som huvudmän, så fristående skolor kan söka på samma sätt som kommunala.'
      },
      nyckelord: ['vem kan söka', 'förskola', 'grundskola', 'gymnasieskola', 'komvux', 'folkhögskola', 'fritidshem', 'fristående', 'modersmål', 'associerad partner', 'deltagare']
    },
    {
      ref: '§ 4', rubrik: 'Vad ni kan göra',
      text: [
        'Ni kan söka för lärarutbyte eller för lärar- och elevutbyte. Bidraget täcker förberedelser, genomförande, uppföljning, spridning och rapportering.',
        'Studiebesök, även vid kulturella och historiska platser, går bra om de görs tillsammans med partnerskolan och har tydlig koppling till projektets mål.',
        'Biståndsarbete, volontärarbete, fältstudier och allmän sightseeing är inte giltiga aktiviteter.'
      ],
      praktik: {
        rubrik: 'UHR:s förklaring',
        text: 'Aktiviteterna ska inte bara vara resorna, utan ingå i undervisningen under året. Även om bara en mindre grupp reser ska projektet engagera fler elever och personal på skolorna. Rena fortbildningsresor eller studiebesök beviljas inte.'
      },
      nyckelord: ['aktiviteter', 'lärarutbyte', 'elevutbyte', 'studiebesök', 'workshop', 'volontär', 'bistånd', 'sightseeing']
    },
    {
      ref: '§ 5–6', rubrik: 'Partnerskola och land',
      text: [
        'Partnern ska vara en förskola, skola eller utbildningsorganisation med en målgrupp som motsvarar dem som kan söka, upp till gymnasial nivå. Samarbete mellan olika skolnivåer går bra.',
        'En frivilligorganisation kan bara vara partner om den driver skola med formell undervisning. Svenska skolor utomlands, och skolor som tillhör samma organisation som den sökande, kan inte vara partner.',
        'Alla länder utanför EU/EES är giltiga.'
      ],
      praktik: 'Ett beviljat projekt kan inte byta partnerskola. Med en ny partner krävs en ny ansökan. Hoppar partnern av måste projektet som regel avbrytas och pengarna betalas tillbaka.',
      nyckelord: ['partner', 'partnerskola', 'land', 'utanför EU', 'EES', 'frivilligorganisation', 'svensk skola utomlands', 'byta partner']
    },
    {
      ref: '§ 7', rubrik: 'Beslut och belopp',
      text: [
        'Bidraget beviljas som schabloner per deltagare: 20 000 kr för Europa utanför EU/EES och 22 000 kr för övriga världen.',
        'När UHR fördelar pengarna kan myndigheten vid behov prioritera spridning mellan utbildningsnivåer, nya sökande, geografisk spridning i Sverige och spridning mellan skolor. Beslutet gäller även om ni får mindre än ni sökte.'
      ],
      praktik: {
        rubrik: 'UHR:s förklaring',
        text: 'Ni söker det antal schabloner som behövs för projektet. Fler än antalet schabloner får resa, men bidraget blir inte större. Deltagandet ska vara avgiftsfritt för eleverna enligt skollagen. Rektor ansvarar för att förankra projektet hos huvudmannen. Bidraget är skattefritt, och beslutet kan inte överklagas.'
      },
      nyckelord: ['belopp', 'schablon', '20000', '22000', 'per deltagare', 'prioritering', 'avgiftsfri', 'överklaga', 'skattefritt']
    },
    {
      ref: '§ 8', rubrik: 'Krav på medfinansiering',
      text: [
        'Enligt förordningen får bidraget vara högst lika stort som det huvudmannen själv avser att bidra med. Skolan ska alltså själv stå för minst lika mycket som bidraget.',
        'Bara den svenska skolan står för medfinansieringen. Partnerskolan kan inte medfinansiera.',
        'Medfinansieringen kan till exempel vara arbetstid, personal- och vikariekostnader, traktamente, projektledning, tid för möten, samordning, spridning, stöd för särskilda behov och andra projektkostnader.'
      ],
      praktik: {
        rubrik: 'UHR:s räkneexempel',
        text: 'Söker ni 10 schabloner för resor utanför Europa blir bidraget 22 000 × 10 = 220 000 kr. Då ska skolan medfinansiera ytterligare 220 000 kr, och hela projektet är värt 440 000 kr. Medfinansieringen måste ligga inom projektperioden.'
      },
      nyckelord: ['medfinansiering', 'egen insats', 'arbetstid', 'vikarie', 'traktamente', 'lika mycket', 'förordning 2000:523']
    },
    {
      ref: '§ 9–11', rubrik: 'Projektperiod och utbetalning',
      text: [
        'Projektperioden börjar den dag UHR beslutar och slutar sista dag för slutrapporten. Resor, kostnader och medfinansiering måste ligga inom den perioden.',
        'Beslutsperioden räcker till tolv månader efter projektperiodens slut. Då granskar UHR rapporterna och reglerar eventuella återkrav.',
        'UHR betalar ut bidraget så snart som möjligt efter beslutet, i kronor och utan moms. Ni behöver inte begära ut pengarna.'
      ],
      praktik: {
        rubrik: 'UHR:s förklaring',
        text: 'Hela beloppet betalas ut på en gång till huvudmannens plus- eller bankgiro. Är er organisation inte momspliktig kan ni få kostnader inklusive moms godkända, men då ska ni skicka med ett intyg om det när ni rapporterar.'
      },
      nyckelord: ['projektperiod', 'beslutsperiod', 'utbetalning', 'förskott', 'moms', 'bankgiro']
    },
    {
      ref: '§ 12', rubrik: 'Vad pengarna får gå till',
      text: ['Bidraget får gå till kostnader som behövs för projektet, till exempel:'],
      lista: [
        'Resor i ekonomiklass med bagage, och avbeställningsskydd eller reseförsäkring.',
        'Lokala resor till och från flygplats och station, och mellan boende och skola.',
        'Logi och mat för deltagarna, med hänsyn till kostnad och säkerhet.',
        'Vaccinationer, visum (även resor till ambassaden), pass och försäkringar.',
        'Studiebesök med koppling till projektet där deltagare från båda länderna är med.',
        'Tolk eller översättare som inte finns på skolan, material och möten som projektet behöver.'
      ],
      praktik: {
        rubrik: 'Det här godtas inte',
        text: 'Resor dyrare än ekonomiklass och resor utanför projektperioden. Alkohol. Studiebesök där bara de svenska deltagarna är med. Nöjen som nöjesparker, safari, bio och sightseeing. Elektronisk utrustning som datorer och kameror. Gåvor. Lön och arvoden för personal och vikarier – de kostnaderna kan i stället räknas som medfinansiering.'
      },
      nyckelord: ['kostnader', 'godtagbara', 'ekonomiklass', 'logi', 'mat', 'visum', 'tolk', 'alkohol', 'sightseeing', 'dator', 'lön', 'gåva']
    },
    {
      ref: '§ 13–14', rubrik: 'Visum, vaccinationer och försäkringar',
      text: [
        'Skolan ska själv ta reda på och följa reglerna för visum och vaccinationer i det land deltagarna besöker.',
        'Skolan ska också se till att alla deltagare har de försäkringar som krävs. Bidraget ersätter inte kostnader som uppstår om skolan har missat detta.'
      ],
      praktik: 'Ska partnerskolans deltagare resa till Sverige behöver de kanske visum. Migrationsverket och Sweden Abroad har information. Var ute i god tid.',
      nyckelord: ['visum', 'vaccination', 'försäkring', 'ambassad', 'migrationsverket']
    },
    {
      ref: '§ 15–16', rubrik: 'Slutrapport, enkäter och revision',
      text: [
        'Skolan ska skicka in en slutrapport senast när projektperioden slutar. Rapporten ska visa hur bidraget har använts. Slutrapport krävs även om inget blev av.',
        'Alla svenska deltagare, både elever och personal, ska svara på en enkät efter besöket. Skolan ansvarar för att alla svarar.',
        'Skolan ska kunna styrka kostnaderna med kvitton och färdbevis, till exempel boardingkort, och spara dem i sju år. UHR och Riksrevisionen får granska.'
      ],
      praktik: {
        rubrik: 'UHR:s förklaring',
        text: 'Ni rapporterar i samma system som ni sökte i och anger hur många som faktiskt reste. Underlagen skickas inte in, men UHR gör slumpvisa kontroller. Om UD avråder från resor kan krav på återbetalning hävas, om ni i slutrapporten visar att kostnaderna uppstod innan UD ändrade sina råd.'
      },
      nyckelord: ['slutrapport', 'rapportering', 'enkät', 'kvitton', 'boardingkort', 'sju år', 'revision']
    },
    {
      ref: '§ 17–18', rubrik: 'Avbrutet projekt och återkrav',
      text: [
        'Om projektet inte kan genomföras kan skolan skriftligt begära att det avbryts, till exempel om partnern hoppar av eller om säkerhetsläget gör det omöjligt. Pengar som inte har använts ska betalas tillbaka.',
        'UHR bestämmer det slutliga beloppet när slutrapporten är godkänd. UHR kan kräva tillbaka hela eller delar av bidraget, till exempel om:'
      ],
      lista: [
        'skolan har fått andra pengar för samma projekt,',
        'syftet eller aktiviteterna har ändrats utan godkännande,',
        'projektet inte kan genomföras eller kostnaderna inte är giltiga,',
        'färre har rest än antalet beviljade schabloner – då krävs hela schablonen tillbaka,',
        'skolan inte har medfinansierat med minst lika mycket som bidraget.'
      ],
      praktik: 'Återbetalningen ska vara hos UHR inom 20 dagar efter att ni har fått betalningskravet. Flyttar ni deltagare mellan länderna i beslutet kan det påverka hur återkravet räknas.',
      nyckelord: ['återkrav', 'återbetalning', 'avbryta', 'färre deltagare', 'medfinansiering', '20 dagar']
    },
    {
      ref: '§ 19', rubrik: 'Säkerhet och UD:s reseråd',
      text: [
        'Skolan ansvarar för att bedöma riskerna i projektet och ha en beredskap för dem. Deltagarna får inte vistas där det innebär stor risk för deras säkerhet eller hälsa.',
        'Resor får bara gå till länder och områden som UD inte avråder från, inte heller med avrådan från icke nödvändiga resor. Skolan ska följa UD:s information före och under resan.',
        'Inför UD en avrådan efter avresan ska skolan snabbt bedöma om deltagarna ska stanna eller resa hem. UHR ska få veta om projektet skjuts upp eller ställs in.'
      ],
      praktik: 'Ansökan ska innehålla en riskhanteringsplan på både projekt- och individnivå. Ta med partnerskolan i arbetet.',
      nyckelord: ['säkerhet', 'UD', 'avrådan', 'reseråd', 'risk', 'riskhantering']
    },
    {
      ref: '§ 20–24', rubrik: 'Korruption, rättigheter och information',
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
      id: 'belopp', modul: 'atlas-partnerskap-belopp',
      flik: 'Räkna på bidrag', eyebrow: 'Schabloner enligt § 7–8',
      rubrik: 'Bidrag och', rubrikKursiv: 'egen insats.',
      ingress: 'Ange hur många schabloner ni vill söka, alltså hur många deltagare som ska resa till varje område. Räknaren visar bidraget och hur mycket skolan själv ska bidra med.',
      formel: { rubrik: 'Grundformeln', text: 'Bidrag = 20 000 kr × deltagare till Europa utanför EU/EES + 22 000 kr × deltagare till övriga världen. Skolans medfinansiering ska vara minst lika stor.' },
      resultatRubrik: 'Bidrag från UHR',
      falt: [
        { id: 'schablonerEuropa', typ: 'tal', etikett: 'Schabloner, Europa utanför EU/EES', min: 0, max: 1000, steg: 1, standard: 0,
          hjalp: 'En schablon per deltagare som reser. Ansökningssystemet avgör vilket område landet hör till.' },
        { id: 'schablonerVarlden', typ: 'tal', etikett: 'Schabloner, övriga världen', min: 0, max: 1000, steg: 1, standard: 10 },
        { id: 'resenarer', typ: 'tal', etikett: 'Deltagare som faktiskt reser', min: 0, max: 4000, steg: 1, standard: 10,
          hjalp: 'Fler än antalet schabloner går bra. Färre ger återkrav.' }
      ],
      exempel: [
        { etikett: 'Åtta resor i Europa utanför EU/EES', varden: { schablonerEuropa: 8, schablonerVarlden: 0, resenarer: 8 } },
        { etikett: 'Båda områdena', varden: { schablonerEuropa: 4, schablonerVarlden: 6, resenarer: 12 } },
        { etikett: 'En resa ställs in', varden: { resenarer: 9 } }
      ],
      resultatNotis: 'Beloppet är det ni kan söka. UHR bedömer kvaliteten och kan bevilja mindre, eller inget alls.',
      forbehall: [
        { rubrik: 'Källa', text: 'Schablonerna står i § 7 i UHR:s allmänna villkor för Atlas partnerskap 2026. Kravet på medfinansiering kommer från 2 § i förordning (2000:523) och § 8 i villkoren. Standardvärdena är UHR:s eget räkneexempel.' },
        { rubrik: 'Det här prövar räknaren inte', text: 'Om skolan och partnern är giltiga, om ansökan håller kvalitet, om schablonerna räcker till de faktiska kostnaderna eller om er medfinansiering går att styrka.' },
        { rubrik: 'Planeringsresa', text: 'Atlas planering, för att träffa en blivande partner, har egna belopp: 12 000 kr per deltagare i Europa utanför EU/EES och 20 000 kr i övriga världen. Räknaren tar inte med dem.' }
      ],
      tabell: {
        rubrik: 'Schabloner per deltagare',
        kolumner: ['Program', 'Europa utanför EU/EES', 'Övriga världen'],
        rader: [
          ['Atlas partnerskap', '20 000 kr', '22 000 kr'],
          ['Atlas planering (planeringsresa)', '12 000 kr', '20 000 kr']
        ],
        fotnot: 'Medfinansiering lika stor som bidraget gäller Atlas partnerskap. Atlas planering har egna villkor.'
      }
    }
  ],

  process: [
    { rubrik: 'Hitta en partner och ett tema', text: 'Hitta en skola utanför EU/EES och ett utvecklingsbehov som ni delar. Behöver ni träffas först kan ni söka Atlas planering. Förankra projektet hos ledning och huvudman.', ref: '§ 2–6' },
    { rubrik: 'Ansök i tid', text: 'Ansökan görs på UHR:s Mina sidor en gång per år och ska vara inne senast klockan 12.00 sista ansökningsdagen. Bifoga avsiktsförklaring från varje partner. Rektor intygar medfinansieringen. Datum för nästa omgång är inte publicerat.', ref: '§ 1, § 8' },
    { rubrik: 'Beslut och pengar', text: 'Beslut kommer tidigast tio veckor efter sista ansökningsdagen, via e-post till kontaktpersonerna och rektor. Hela beloppet betalas ut till huvudmannen samtidigt.', ref: '§ 7, § 9–11' },
    { rubrik: 'Genomför och dokumentera', text: 'Genomför besöken och arbetet däremellan. Följ UD:s reseråd. Kontakta UHR innan ni ändrar något. Dokumentera medfinansieringen, till exempel arbetstid.', ref: '§ 12–14, § 19' },
    { rubrik: 'Rapportera och spara', text: 'Se till att alla svenska deltagare svarar på enkäten direkt efter besöket. Skicka slutrapporten senast när projektperioden slutar. Spara kvitton och färdbevis i sju år.', ref: '§ 15–18' }
  ],

  underlagRubrik: 'Underlag att ha till hands',
  underlagIngress: 'Använd listan när ni förbereder ansökan och rapporten. Markeringarna sparas inte – de försvinner när ni stänger sidan.',
  underlag: [
    'Avsiktsförklaring på UHR:s obligatoriska mall, ifylld och undertecknad av varje partnerskola.',
    'Huvudmannens organisationsnummer och plus- eller bankgiro, och kontaktuppgifter till rektor.',
    'Mål kopplade till skolans utvecklingsbehov och till läroplans- eller examensmål, och partnerskolans behov.',
    'Planerade resor: land, ungefärligt datum, antal deltagare och antal dagar – åt båda hållen.',
    'Riskhanteringsplan på projekt- och individnivå, och en plan för utvärdering och spridning.',
    'Underlag för medfinansieringen, till exempel tidsredovisning för personal.',
    'Under projektet: kopior på resehandlingar, kvitton och annat betalningsunderlag, sparade i sju år.'
  ],

  kallor: [
    {
      titel: 'Allmänna villkor Atlas partnerskap 2026 · UHR',
      url: 'https://uhr.guidecloud.se/1060.guide',
      beskrivning: 'Villkoren för omgången 2026. Paragrafhänvisningarna i guiden gäller dessa villkor. Tabellen över godtagbara kostnader finns under § 12.'
    },
    {
      titel: 'Förordning (2000:523) · Sveriges riksdag',
      url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-2000523-om-statsbidrag-for-att_sfs-2000-523/',
      beskrivning: 'Förordningen om statsbidrag för att främja internationella kontakter inom skolans område: vem som kan få bidrag, kravet på lika stor egen insats och att beslutet inte kan överklagas.'
    },
    {
      titel: 'Atlas partnerskap · UHR',
      url: 'https://uhr.se/internationella-mojligheter/samarbete-och-utbyte/sok-finansiering/atlas-partnerskap/',
      beskrivning: 'Vem som kan söka, schabloner, räkneexempel för medfinansiering, ansökan, bedömning och utbetalning.'
    },
    {
      titel: 'Guide till ansökan, Atlas partnerskap · UHR',
      url: 'https://uhr.guidecloud.se/929.guide',
      beskrivning: 'Steg för steg genom ansökningssystemet, med vad bedömarna letar efter i varje fråga.'
    },
    {
      titel: 'Projektsida Atlas partnerskap · UHR',
      url: 'https://www.uhr.se/internationella-mojligheter/samarbete-och-utbyte/hantera-projekt/atlas-partnerskap/',
      beskrivning: 'Slutrapport, obligatoriska enkäter, ändringar under projektet och återkrav.'
    },
    {
      titel: 'Atlas planering · UHR',
      url: 'https://www.uhr.se/internationella-mojligheter/samarbete-och-utbyte/sok-finansiering/atlas-planering/',
      beskrivning: 'Bidrag för en planeringsresa till en blivande partner, högst två ansökningar per skolenhet och omgång.'
    }
  ],

  forbehall: 'Guiden sammanfattar förordning (2000:523) och UHR:s allmänna villkor för Atlas partnerskap 2026, och visar hur schabloner och medfinansiering räknas. Räknaren kontrollerar inte om ansökan är giltig eller hur UHR bedömer den. Villkor, belopp och datum kan ändras till nästa omgång, och projekt från tidigare år följer villkoren i sitt eget beslut. Använd UHR:s aktuella villkor och ert beslut när ni söker och rapporterar.'
};
