/* Fördjupning: Statsbidrag för utlandssvenska elever – förordning (2015:736).
 * Innehållet är stämt mot förordningen (ändrad t.o.m. SFS 2022:1635), Skolverkets sida för 2026
 * (senast uppdaterad 24 juli 2026), regleringsbrevet för Statens skolverk 2026 (42 400 kr per termin och elev
 * i grundskolan) och riksprislistan SKOLFS 2026:7. Schema: se FORDJUPNING.md. Klartext, inte citat –
 * paragrafhänvisningarna gäller förordningen. */
window.SB_FORDJUPNING = window.SB_FORDJUPNING || {};
window.SB_FORDJUPNING['utlandssvenska-elever'] = {
  id: 'utlandssvenska-elever',
  rubrik: 'Utlandssvenska elever',
  rubrikKursiv: 'i klartext.',
  ingress: 'När en elev vars familj bor utomlands går i skola i Sverige finns ingen svensk hemkommun som betalar. Från årskurs 7 kan skolans huvudman då få statsbidrag. Här står reglerna på vanlig svenska, och ni kan räkna på beloppet för en termin.',
  kontrollerad: '2026-10-01',
  forordning: {
    sfs: '2015:736',
    namn: 'Förordning (2015:736) om statsbidrag till kostnader för utbildning i Sverige för utlandssvenska elever',
    lydelse: 'ändrad t.o.m. SFS 2022:1635',
    url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-2015736-om-statsbidrag-till_sfs-2015-736/'
  },

  snabbfaktaRubrik: 'Tre saker att känna till först',
  snabbfakta: [
    { rubrik: 'Ni bedömer själva vem som är utlandssvensk', text: 'Huvudmannen gör bedömningen när eleven börjar årskurs 7–9 och på nytt när eleven börjar gymnasiet. Spara underlaget.' },
    { rubrik: 'Två ansökningar om året – fasta sista dagar', text: 'Senast 1 mars för våren och senast 1 oktober för hösten. Datumen står i förordningen, och sena ansökningar avvisas.' },
    { rubrik: 'Fast belopp eller halva riksprislistan', text: 'I årskurs 7–9 är bidraget 42 400 kr per elev och termin 2026. I gymnasiet är det hälften av programmets belopp per läsår.' }
  ],
  snabbfaktaNot: 'Kommunala, fristående och statliga huvudmän söker på samma villkor. Elever som är folkbokförda i Sverige ger inget bidrag.',

  begreppRubrik: 'Ord som återkommer',
  begrepp: [
    { term: 'Utlandssvensk elev', forklaring: 'En elev vars vårdnadshavare stadigvarande bor utomlands, där minst en av dem är svensk medborgare, och som inte är folkbokförd i Sverige.' },
    { term: 'Vårdnadshavare', forklaring: 'Den eller de som har vårdnaden om barnet, oftast föräldrarna.' },
    { term: 'Stadigvarande', forklaring: 'Varaktigt. Skolverket räknar med en sammanhängande period på minst sex månader.' },
    { term: 'Kalenderhalvår', forklaring: 'Januari–juni eller juli–december. Bidraget räknas ett halvår i taget, alltså per termin.' },
    { term: 'Riksprislistan', forklaring: 'Skolverkets lista med belopp per elev och läsår för varje gymnasieprogram. För 2026 är det SKOLFS 2026:7.' },
    { term: 'IB-utbildning', forklaring: 'International Baccalaureate, en internationell gymnasieutbildning som finns på vissa skolor i Sverige.' }
  ],

  sektioner: {
    regler: {
      rubrik: 'Från paragraf', rubrikKursiv: 'till praktik.',
      ingress: 'Rubrikerna följer förordningen. Öppna det avsnitt ni behöver, eller sök på till exempel ”sex månader”, ”IB” eller ”15 september”. Varje avsnitt visar vilken paragraf det gäller.'
    },
    praktik: {
      rubrik: 'Så används', rubrikKursiv: 'reglerna.',
      ingress: 'Bedöm varje elev och spara underlaget. Kontrollera vilka som går hos er på mätdagen och ansök före sista dagen. Skolverket kan i efterhand begära in underlaget.'
    }
  },

  paragrafer: [
    {
      ref: '1–2 §§', rubrik: 'Vem kan få bidrag',
      text: [
        'Bidraget går till huvudmän inom skolväsendet som tar emot utlandssvenska elever. Det gäller huvudmän för grundskola, anpassad grundskola, gymnasieskola och anpassad gymnasieskola.',
        'Även den som anordnar IB-utbildning kan få bidrag för utlandssvenska elever.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Kommunala, fristående och statliga huvudmän kan söka. Det är alltså skolans huvudman som söker, inte familjen eller en kommun där eleven bor.'
      },
      nyckelord: ['huvudman', 'kommunal', 'fristående', 'statlig', 'internatskola', 'ib', 'vem kan söka']
    },
    {
      ref: '3 §', rubrik: 'För vilka elever och utbildningar',
      text: [
        'Bidrag ges för utlandssvenska elever från årskurs 7 i grundskolan eller anpassade grundskolan till och med sista året i gymnasieskolan, anpassade gymnasieskolan eller IB-utbildningen.',
        'Inget bidrag ges för elever som är folkbokförda i Sverige.',
        'Inget bidrag ges heller för IB-utbildningen i Stockholms och Göteborgs kommuner och vid Sigtunaskolan Humanistiska Läroverket. Den utbildningen får ett annat statsbidrag.'
      ],
      praktik: 'Årskurs 1–6 ger inget bidrag. Kontrollera folkbokföringen inför varje ansökan. Skolverket ber er särskilt att göra det.',
      nyckelord: ['årskurs 7', 'årskurs 7-9', 'gymnasiet', 'folkbokförd', 'sigtuna', 'stockholm', 'göteborg', 'ib']
    },
    {
      ref: '4 §', rubrik: 'Vem är utlandssvensk elev',
      text: [
        'En utlandssvensk elev har vårdnadshavare som stadigvarande bor utomlands, och minst en av vårdnadshavarna är svensk medborgare.',
        'Är eleven utlandssvensk när utbildningen börjar räknas eleven som utlandssvensk under hela tiden i årskurs 7–9. Detsamma gäller hela tiden i gymnasieskolan, anpassade gymnasieskolan eller IB-utbildningen. Det gäller även om familjens förhållanden ändras under tiden.',
        'Uppfyller eleven villkoren först senare räknas eleven som utlandssvensk resten av tiden i samma skolform.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Båda vårdnadshavarna ska bo utomlands under en sammanhängande period på sex månader eller mer. Tillfälliga avbrott spelar ingen roll. Eleven får inte vara folkbokförd i Sverige. Huvudmannen gör bedömningen när eleven börjar årskurs 7–9 och en ny bedömning när eleven börjar gymnasiet. Spara uppgifter som visar att bedömningen är gjord och att villkoren är uppfyllda. Skolverket kan begära in dem.'
      },
      nyckelord: ['utlandssvensk', 'vårdnadshavare', 'svensk medborgare', 'bor utomlands', 'sex månader', 'stadigvarande', 'bedömning', 'dokumentation']
    },
    {
      ref: '5–6 §§', rubrik: 'Halvår och mätdagar',
      text: [
        'Bidraget räknas för ett kalenderhalvår i taget.',
        'För januari–juni ges bidrag för den som är elev i utbildningen den 15 februari. För juli–december ges bidrag för den som är elev den 15 september.'
      ],
      praktik: 'Det är alltså eleverna som går hos er på mätdagen som räknas. En elev som börjar efter den 15 september ger inget bidrag för hösten.',
      nyckelord: ['kalenderhalvår', 'termin', 'mätdag', '15 februari', '15 september', 'inskriven']
    },
    {
      ref: '7 §', rubrik: 'Belopp i årskurs 7–9',
      text: [
        'För elever i grundskolan och anpassade grundskolan ges ett belopp per elev och halvår som regeringen bestämmer.',
        'För 2026 är beloppet 42 400 kr per elev och termin. Det står i regeringens regleringsbrev till Skolverket.'
      ],
      nyckelord: ['belopp', '42400', 'grundskolan', 'anpassade grundskolan', 'regleringsbrev', 'per termin']
    },
    {
      ref: '8 §', rubrik: 'Belopp i gymnasiet',
      text: [
        'För elever i gymnasieskolan och anpassade gymnasieskolan ges hälften av riksprislistans belopp per elev och läsår för programmet, och i förekommande fall inriktningen.',
        'Har Skolverket eller Skolinspektionen beslutat ett särskilt belopp för utbildningen, till exempel för en riksrekryterande utbildning eller en särskild variant, ges hälften av det beloppet.',
        'För elever i fjärde tekniskt år ges hälften av det belopp per elev som huvudmannen får i statsbidrag för fjärde tekniskt år.',
        'För elever på introduktionsprogram ges ett belopp per elev och halvår som regeringen bestämmer.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Skolverket använder riksprislistans belopp inklusive måltider. Inget avdrag görs för moms. Vi har inte hittat något belopp för introduktionsprogram i regleringsbrevet för 2026, och Skolverkets sida nämner det inte. Fråga Skolverket om ni har sådana elever.'
      },
      nyckelord: ['riksprislistan', 'hälften', 'program', 'inriktning', 'måltider', 'riksrekryterande', 'särskild variant', 'fjärde tekniskt år', 'introduktionsprogram']
    },
    {
      ref: '9 §', rubrik: 'Belopp i IB-utbildning',
      text: ['För elever i IB-utbildning ges hälften av riksprislistans belopp för naturvetenskapsprogrammet.'],
      praktik: 'För 2026 är naturvetenskapsprogrammets belopp 111 300 kr per läsår inklusive måltider. Det ger 55 650 kr per elev och termin.',
      nyckelord: ['ib', 'international baccalaureate', 'naturvetenskapsprogrammet', '55650']
    },
    {
      ref: '10 §', rubrik: 'Ansökan och sista dag',
      text: [
        'Bidraget för januari–juni söks hos Skolverket senast den 1 mars samma år. Bidraget för juli–december söks senast den 1 oktober.',
        'Skolverket beslutar om bidraget och betalar ut det.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Ansökan görs i Skolverkets e-tjänst för statsbidrag. Sena ansökningar avvisas, eftersom sista dagen står i förordningen. För 2026 var ansökan 1 öppen 15 februari–2 mars, eftersom den 1 mars var en söndag. Ansökan 2 är öppen 15 september–1 oktober 2026.'
      },
      nyckelord: ['ansökan', 'sista dag', '1 mars', '1 oktober', 'e-tjänst', 'avvisas', 'sen ansökan']
    },
    {
      ref: '11 §', rubrik: 'Lämna uppgifter',
      text: ['Huvudmannen ska lämna de uppgifter som Skolverket behöver för att bedöma om bidrag får ges.'],
      praktik: 'Det gäller till exempel underlaget som visar att ni har bedömt att eleven är utlandssvensk.',
      nyckelord: ['uppgiftsskyldighet', 'underlag', 'kontroll']
    },
    {
      ref: '12 §', rubrik: 'Betala tillbaka (återkrav)',
      text: ['Den som har fått bidrag ska betala tillbaka det om något av följande gäller:'],
      lista: [
        'Mottagaren har lämnat felaktiga eller ofullständiga uppgifter, eller på annat sätt orsakat att bidraget har betalats ut felaktigt eller med för högt belopp.',
        'Bidraget har av något annat skäl betalats ut felaktigt eller med för högt belopp, och mottagaren borde ha förstått det.'
      ],
      praktik: {
        rubrik: 'Återkrav',
        text: 'Skolverket ska då kräva tillbaka bidraget helt eller delvis. Om det finns särskilda skäl får Skolverket avstå. Kontrollera därför folkbokföringen och spara bedömningen för varje elev.'
      },
      nyckelord: ['återkrav', 'återbetalning', 'betala tillbaka', 'felaktiga uppgifter']
    },
    {
      ref: '14–15 §§', rubrik: 'Föreskrifter och överklagande',
      text: [
        'Skolverket får skriva de föreskrifter som behövs för att tillämpa förordningen.',
        'Skolverkets beslut kan överklagas till allmän förvaltningsdomstol enligt förvaltningslagen.'
      ],
      nyckelord: ['föreskrifter', 'överklaga', 'förvaltningsrätt', 'förvaltningslagen']
    }
  ],

  kalkylatorer: [
    {
      id: 'belopp', modul: 'utlandssvenska-elever-belopp',
      flik: 'Räkna på bidrag', eyebrow: 'Belopp enligt 7–9 §§',
      rubrik: 'Hur mycket', rubrikKursiv: 'blir det för en termin?',
      ingress: 'Ange hur många utlandssvenska elever ni har i årskurs 7–9 och i gymnasiet. Räknaren använder beloppen för 2026. Har ni gymnasieelever på flera program räknar ni ett program i taget.',
      formel: { rubrik: 'Grundformeln', text: 'Bidrag per termin = 42 400 kr × elever i årskurs 7–9 + programmets belopp per läsår ÷ 2 × elever i gymnasiet.' },
      resultatRubrik: 'Beräknat bidrag för en termin',
      falt: [
        { id: 'grundElever', typ: 'tal', etikett: 'Elever i årskurs 7–9', min: 0, max: 100000, steg: 1, standard: 2,
          hjalp: 'Grundskolan och anpassade grundskolan.' },
        { id: 'gyElever', typ: 'tal', etikett: 'Elever i gymnasiet', min: 0, max: 100000, steg: 1, standard: 3,
          hjalp: 'Elever på det program ni väljer nedan.' },
        { id: 'program', typ: 'val', etikett: 'Program (belopp per elev och läsår 2026)', standard: 'sa',
          hjalp: 'Riksprislistan 2026, inklusive måltider.',
          alternativ: [
            { varde: 'bf', etikett: 'Barn- och fritidsprogrammet · 121 200 kr' },
            { varde: 'ba-fore', etikett: 'Bygg- och anläggningsprogrammet utom anläggningsfordon (påbörjad före 1 juli 2025) · 161 700 kr' },
            { varde: 'ba-af-fore', etikett: 'Bygg- och anläggningsprogrammet, anläggningsfordon (påbörjad före 1 juli 2025) · 221 500 kr' },
            { varde: 'ba-efter', etikett: 'Bygg- och anläggningsprogrammet utom mark och anläggning (påbörjad efter 30 juni 2025) · 163 700 kr' },
            { varde: 'ba-ma-efter', etikett: 'Bygg- och anläggningsprogrammet, mark och anläggning (påbörjad efter 30 juni 2025) · 206 600 kr' },
            { varde: 'ee', etikett: 'El- och energiprogrammet · 148 700 kr' },
            { varde: 'ek', etikett: 'Ekonomiprogrammet · 102 000 kr' },
            { varde: 'es', etikett: 'Estetiska programmet utom musik · 135 100 kr' },
            { varde: 'es-mu', etikett: 'Estetiska programmet, musik · 170 500 kr' },
            { varde: 'ft', etikett: 'Fordons- och transportprogrammet utom transport · 176 400 kr' },
            { varde: 'ft-tr', etikett: 'Fordons- och transportprogrammet, transport · 238 900 kr' },
            { varde: 'fs', etikett: 'Frisör- och stylistprogrammet · 147 900 kr' },
            { varde: 'fo', etikett: 'Försäljnings- och serviceprogrammet · 120 300 kr' },
            { varde: 'ha', etikett: 'Handels- och administrationsprogrammet · 125 000 kr' },
            { varde: 'hv', etikett: 'Hantverksprogrammet · 144 300 kr' },
            { varde: 'ht', etikett: 'Hotell- och turismprogrammet · 128 600 kr' },
            { varde: 'hu', etikett: 'Humanistiska programmet · 111 500 kr' },
            { varde: 'in', etikett: 'Industritekniska programmet · 185 500 kr' },
            { varde: 'na', etikett: 'Naturvetenskapsprogrammet · 111 300 kr' },
            { varde: 'ib', etikett: 'IB-utbildning (naturvetenskapsprogrammets belopp) · 111 300 kr' },
            { varde: 'nb-dj', etikett: 'Naturbruksprogrammet, djurvård · 243 700 kr' },
            { varde: 'nb-ha', etikett: 'Naturbruksprogrammet, hästhållning · 274 100 kr' },
            { varde: 'nb-la', etikett: 'Naturbruksprogrammet, lantbruk · 302 700 kr' },
            { varde: 'nb-nt', etikett: 'Naturbruksprogrammet, naturturism · 285 500 kr' },
            { varde: 'nb-sk', etikett: 'Naturbruksprogrammet, skogsbruk · 308 200 kr' },
            { varde: 'nb-tr', etikett: 'Naturbruksprogrammet, trädgård · 313 800 kr' },
            { varde: 'rl', etikett: 'Restaurang- och livsmedelsprogrammet · 170 000 kr' },
            { varde: 'sa', etikett: 'Samhällsvetenskapsprogrammet · 102 600 kr' },
            { varde: 'te', etikett: 'Teknikprogrammet · 121 900 kr' },
            { varde: 'vf', etikett: 'VVS- och fastighetsprogrammet · 161 700 kr' },
            { varde: 'vo', etikett: 'Vård- och omsorgsprogrammet · 131 500 kr' },
            { varde: 'agy', etikett: 'Anpassade gymnasieskolan · 430 800 kr' },
            { varde: 'annat', etikett: 'Särskilt belopp eller fjärde tekniskt år – ange beloppet själv' }
          ] },
        { id: 'egetBelopp', typ: 'tal', etikett: 'Belopp per elev och läsår enligt beslutet', min: 1, max: 2000000, steg: 1, standard: 150000, enhet: 'kr',
          hjalp: 'Särskild variant eller riksrekryterande utbildning: beloppet i Skolverkets eller Skolinspektionens beslut. Fjärde tekniskt år: beloppet per elev i ert beslut om det bidraget.',
          visasOm: { falt: 'program', ar: 'annat' } }
      ],
      exempel: [
        { etikett: 'En elev i årskurs 8', varden: { grundElever: 1, gyElever: 0 } },
        { etikett: 'En elev i IB', varden: { grundElever: 0, gyElever: 1, program: 'ib' } },
        { etikett: 'Internatskola med naturbruk', varden: { grundElever: 4, gyElever: 6, program: 'nb-dj' } }
      ],
      resultatNotis: 'Det är Skolverket som beslutar om bidraget. Bara elever som går hos er på mätdagen och som ni har bedömt som utlandssvenska räknas.',
      forbehall: [
        { rubrik: 'Formel', text: 'Beloppet i årskurs 7–9 kommer från regleringsbrevet för 2026. Beloppen i gymnasiet är hälften av riksprislistan 2026 inklusive måltider (8–9 §§). Ingen moms dras av. Det stämmer med beloppen i Skolverkets beslut för våren 2026.' },
        { rubrik: 'Det här prövar räknaren inte', text: 'Om eleven är utlandssvensk, är folkbokförd i Sverige eller går hos er på mätdagen. Introduktionsprogram finns inte med, eftersom vi inte har hittat något belopp för 2026.' },
        { rubrik: 'Andra år', text: 'Beloppen gäller 2026. Regleringsbrevet och riksprislistan kommer på nytt varje år.' }
      ],
      tabell: {
        rubrik: 'Belopp per elev och termin 2026',
        kolumner: ['Utbildning', 'Per elev och termin', 'Grund'],
        rader: [
          ['Årskurs 7–9, grundskolan och anpassade grundskolan', '42 400 kr', 'Regleringsbrevet 2026 (7 §)'],
          ['Gymnasieskolan, till exempel samhällsvetenskapsprogrammet', '51 300 kr', 'Halva riksprislistan (8 §)'],
          ['IB-utbildning', '55 650 kr', 'Halva beloppet för naturvetenskapsprogrammet (9 §)'],
          ['Anpassade gymnasieskolan', '215 400 kr', 'Halva riksprislistan (8 §)'],
          ['Fjärde tekniskt år', 'Hälften av beloppet per elev i ert beslut', '8 §'],
          ['Introduktionsprogram', 'Belopp som regeringen bestämmer', '8 §, inget belopp hittat för 2026']
        ],
        fotnot: 'Riksprislistan 2026 är SKOLFS 2026:7. Beloppen kan ändras till 2027.'
      }
    }
  ],

  process: [
    { rubrik: 'Bedöm och dokumentera', text: 'När eleven börjar årskurs 7–9, och igen när eleven börjar gymnasiet: kontrollera att vårdnadshavarna bor utomlands, att minst en är svensk medborgare och att eleven inte är folkbokförd i Sverige. Spara underlaget.', ref: '4 §' },
    { rubrik: 'Kontrollera mätdagen', text: 'Ta fram vilka utlandssvenska elever som går hos er den 15 februari respektive den 15 september, och vilket program eller vilken utbildning de läser.', ref: '5–6 §§' },
    { rubrik: 'Ansök före sista dagen', text: 'Ansök i Skolverkets e-tjänst senast 1 mars för våren och senast 1 oktober för hösten. Se till att rätt personer har behörighet i e-tjänsten i god tid. Ansökan 2 för hösten 2026 stänger 1 oktober 2026.', ref: '10 §' },
    { rubrik: 'Beslut och utbetalning', text: 'Skolverket beslutar och betalar ut. Beslutet om ansökan 1 för 2026 kom i mars. Beslutet om ansökan 2 publiceras i november 2026.', ref: '10 §' },
    { rubrik: 'Spara för kontroll', text: 'Skolverket kan begära in underlaget för att kontrollera att ni har gjort en bedömning för varje elev. Har bidraget betalats ut felaktigt kan det krävas tillbaka.', ref: '11–12 §§' }
  ],

  underlagRubrik: 'Underlag att ha till hands',
  underlagIngress: 'Använd listan när ni förbereder ansökan. Markeringarna sparas inte – de försvinner när ni stänger sidan.',
  underlag: [
    'Lista över utlandssvenska elever som går hos er på mätdagen, med årskurs eller program.',
    'Bedömningen för varje elev: när den gjordes och vad den bygger på.',
    'Uppgifter om var vårdnadshavarna bor och sedan när, till exempel intyg eller adressuppgifter.',
    'Uppgift om att minst en vårdnadshavare är svensk medborgare.',
    'Kontroll av att eleven inte är folkbokförd i Sverige.',
    'Beslut om särskilt belopp för utbildningen, eller beslut om statsbidrag för fjärde tekniskt år, om det gäller er.',
    'Behörighet i Skolverkets e-tjänst för statsbidrag.'
  ],

  kallor: [
    {
      titel: 'Förordning (2015:736) · Sveriges riksdag',
      url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-2015736-om-statsbidrag-till_sfs-2015-736/',
      beskrivning: 'Källan för vilka elever som omfattas, mätdagar, belopp, sista ansökningsdag och återkrav. Paragrafhänvisningarna i guiden gäller den här förordningen.'
    },
    {
      titel: 'Statsbidrag för utlandssvenska elever 2026 · Skolverket',
      url: 'https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-utlandssvenska-elever-2026',
      beskrivning: 'Skolverkets anvisningar om bedömningen (sex månader), dokumentation, ansökningsperioder och belopp.'
    },
    {
      titel: 'Regleringsbrev för budgetåret 2026 avseende Statens skolverk · Statskontoret',
      url: 'https://www.statskontoret.se/statsliggaren/regleringsbrev/1/2026/senaste',
      beskrivning: 'Anslag 1:8 anslagspost 2: 42 400 kr per termin och elev i grundskolan för 2026.'
    },
    {
      titel: 'Riksprislista 2026, SKOLFS 2026:7 · Skolverket',
      url: 'https://skolfs.skolverket.se/api/document/GRUNDFORFATTNING/2026:7/pdf',
      beskrivning: 'Belopp per elev och läsår för varje gymnasieprogram och för anpassade gymnasieskolan 2026.'
    },
    {
      titel: 'Beslut om ansökan 1, utlandssvenska elever 2026 · Skolverket',
      url: 'https://www.skolverket.se/download/18.79d34aad19ed42d266cca9e0/1784865268568/Beslut%20om%20ans%C3%B6kan%201,%20statsbidrag%20f%C3%B6r%20utlandssvenska%20elever%202026-2.pdf',
      beskrivning: 'Beslutade belopp per huvudman för våren 2026.'
    }
  ],

  forbehall: 'Guiden sammanfattar reglerna och visar hur beloppet räknas ut. Räknaren kontrollerar inte om en elev är utlandssvensk eller folkbokförd i Sverige. Beloppen gäller 2026 och ändras varje år. Använd Skolverkets aktuella anvisningar när ni ansöker.'
};
