/* Fördjupning: Statsbidrag (ersättning) för nordiska elever – gymnasieförordningen (2010:2039) 12 kap. 6–10 §§
 * och förordningen (2011:1108) om vuxenutbildning 7 kap. 5–8 §§. Beloppen för 2026 står i regleringsbrevet för
 * Statens skolverk (senast ändrat 3 september 2026) och i riksprislistan SKOLFS 2026:7.
 * Innehållet är stämt mot förordningarna och Skolverkets sida för 2026 (senast uppdaterad 18 juni 2026).
 * Schema: se FORDJUPNING.md. Klartext, inte citat. GyF = gymnasieförordningen, VuxF = förordningen om vuxenutbildning. */
window.SB_FORDJUPNING = window.SB_FORDJUPNING || {};
window.SB_FORDJUPNING['nordiska-elever'] = {
  id: 'nordiska-elever',
  rubrik: 'Nordiska elever',
  rubrikKursiv: 'i klartext.',
  ingress: 'Elever från de andra nordiska länderna får läsa i svensk gymnasieskola och komvux. Ingen svensk hemkommun betalar för dem, så staten ersätter huvudmannen. Här står reglerna på vanlig svenska, och ni kan räkna på beloppet för en termin.',
  kontrollerad: '2026-10-01',
  forordning: {
    namn: 'Gymnasieförordningen (2010:2039) 12 kap. 6–10 §§ och förordningen (2011:1108) om vuxenutbildning 7 kap. 5–8 §§',
    etikett: 'Gymnasieförordningen och VuxF',
    iText: 'på riksdagen.se',
    url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/gymnasieforordning-20102039_sfs-2010-2039/',
    lydelse: 'gymnasieförordningen ändrad t.o.m. SFS 2026:1367, förordningen om vuxenutbildning ändrad t.o.m. SFS 2026:1723'
  },

  snabbfaktaRubrik: 'Tre saker att känna till först',
  snabbfakta: [
    { rubrik: 'Ni söker i efterhand, en termin i taget', text: 'Hösten söks i oktober–november och våren i april–maj. Varje termin är en egen ansökan.' },
    { rubrik: 'Gymnasiet: halva riksprislistan per termin', text: 'Kommuner och regioner får beloppet utan den momsersättning som ingår i riksprislistan. Enskilda huvudmän får hela halvan.' },
    { rubrik: 'Kommuner får ett avdrag', text: 'En kommun får bara ersättning för fler nordiska elever än det antal av kommunens egna ungdomar som studerar i ett annat nordiskt land.' }
  ],
  snabbfaktaNot: 'Eleven får inte vara folkbokförd i Sverige. Elever på introduktionsprogram ger ingen ersättning.',

  begreppRubrik: 'Ord som återkommer',
  begrepp: [
    { term: 'Nordisk elev', forklaring: 'En elev som bor i Danmark, Finland, Island eller Norge, eller på Färöarna, Grönland eller Åland, och som inte är folkbokförd i Sverige.' },
    { term: 'Folkbokförd', forklaring: 'Registrerad som boende i Sverige hos Skatteverket. Den som är folkbokförd här har en svensk hemkommun som betalar för utbildningen.' },
    { term: 'Riksprislistan', forklaring: 'Skolverkets lista med belopp per elev och läsår för varje gymnasieprogram. För 2026 är det SKOLFS 2026:7. Beloppen innehåller 6 procent momsersättning.' },
    { term: 'Interkommunal ersättning', forklaring: 'Det belopp en kommun eller region tar ut när en elev från en annan kommun går i dess gymnasieskola.' },
    { term: 'Verksamhetspoäng', forklaring: 'Ett mått på hur stor en kurs i komvux är. Ersättningen för komvux räknas per poäng.' },
    { term: 'GyF och VuxF', forklaring: 'Kortnamn i guiden för gymnasieförordningen (2010:2039) och förordningen (2011:1108) om vuxenutbildning.' }
  ],

  sektioner: {
    regler: {
      rubrik: 'Från paragraf', rubrikKursiv: 'till praktik.',
      ingress: 'Det finns ingen egen förordning för bidraget. Reglerna står i två förordningar: en för gymnasieskolan och en för komvux. Beloppen bestämmer regeringen i Skolverkets regleringsbrev.'
    },
    praktik: {
      rubrik: 'Så används', rubrikKursiv: 'reglerna.',
      ingress: 'Håll en aktuell lista över nordiska elever. Kontrollera folkbokföringen och vilken utbildning de läser. Sök sedan för varje termin i Skolverkets e-tjänst.'
    }
  },

  paragrafer: [
    {
      ref: '12 kap. 6–7 §§ GyF', rubrik: 'Nordiska elever i gymnasieskolan',
      text: [
        'En nordisk sökande är någon som bor i Danmark, Finland, Island eller Norge. Det gäller också de självstyrande områdena Färöarna, Grönland och Åland.',
        'En nordisk sökande får tas emot i gymnasieskolan om två saker gäller. Den tidigare skolgången ska i huvudsak motsvara den svenska grundskolan. Den sökande ska också vara behörig till utbildningen, med undantag för kravet på godkänt betyg i svenska.',
        'I övrigt ska nordiska sökande behandlas som sökande från den kommun där utbildningen finns.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Ersättning ges bara för elever som inte är folkbokförda i Sverige. Det är huvudmannen som ska ta reda på om eleven är folkbokförd i ett annat nordiskt land och läser en utbildning som omfattas. Elever på introduktionsprogram ger ingen ersättning. Ersättning ges bara för utbildning som kräver behörighet enligt 16 kap. 29–33 §§ skollagen, alltså nationella program.'
      },
      nyckelord: ['nordisk sökande', 'danmark', 'finland', 'island', 'norge', 'färöarna', 'grönland', 'åland', 'behörighet', 'svenska', 'folkbokförd', 'introduktionsprogram']
    },
    {
      ref: '12 kap. 8–9 §§ GyF', rubrik: 'Vem får ersättning för gymnasieskolan',
      text: [
        'En region eller en enskild huvudman, till exempel en fristående skola, får ersättning för alla nordiska elever den har tagit emot.',
        'En kommun får bara ersättning för en del av eleverna. Först räknas hur många svenska elever som bor i kommunen och samtidigt går gymnasial utbildning i ett annat nordiskt land. Kommunen får ersättning för de nordiska elever som är fler än så.',
        'Undantag: för nordiska elever på yrkesdansarutbildning får kommunen ersättning för alla.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Avdraget bygger på hur många svenska elever som är folkbokförda i kommunen och studerar med studiestöd i Danmark, Finland, Island, Norge, på Färöarna eller Åland. Skolverket hämtar uppgifterna från CSN. Både offentliga och fristående huvudmän kan söka för elever i gymnasieskolan.'
      },
      nyckelord: ['kommun', 'region', 'fristående', 'enskild huvudman', 'avdrag', 'överskjutande', 'csn', 'studiestöd', 'dansarutbildning']
    },
    {
      ref: '12 kap. 10 § GyF', rubrik: 'Belopp och ansökan för gymnasieskolan',
      text: [
        'Regeringen bestämmer hur stor ersättningen är. Huvudmannen ansöker hos Skolverket, som beslutar och betalar ut.',
        'För 2026 har regeringen bestämt beloppen i Skolverkets regleringsbrev. Grunden är riksprislistans belopp per elev, program och inriktning.'
      ],
      lista: [
        'Särskild variant eller riksrekryterande utbildning: det belopp som har beslutats för utbildningen. Riksrekryterande idrottsutbildningar följer ändå riksprislistan.',
        'IB-utbildning: naturvetenskapsprogrammets belopp.',
        'Ersättningen får inte vara högre än det huvudmannen tar ut i interkommunal ersättning.',
        'Kommuner och regioner får beloppet minskat med den momsersättning som ingår i riksprislistan.',
        'Yrkesdansarutbildning: anordnarens självkostnad.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Ni söker per termin och får hälften av beloppet per läsår, inklusive måltider. Riksprislistan kommer i januari varje år. Skolverket skriver att bidraget till offentliga huvudmän minskas för moms med 6 procent. Beloppen i Skolverkets beslut för våren 2026 stämmer med att halva beloppet delas med 1,06, till exempel 51 000 kr ÷ 1,06 = 48 113 kr. Beloppet för särskilda varianter och riksrekryterande utbildningar beslutar Skolverket för offentliga huvudmän. För enskilda huvudmän beslutar både Skolverket och Skolinspektionen.'
      },
      nyckelord: ['belopp', 'riksprislistan', 'hälften', 'termin', 'måltider', 'moms', '6 procent', 'interkommunal ersättning', 'ib', 'riksrekryterande', 'särskild variant', 'regleringsbrev']
    },
    {
      ref: '7 kap. 5 § VuxF', rubrik: 'Nordiska elever i komvux',
      text: [
        'Samma länder och områden gäller som för gymnasieskolan.',
        'En nordisk sökande till komvux på gymnasial nivå ska behandlas som en sökande från den kommun där utbildningen finns. Det förutsätter att den tidigare skolgången i hemlandet i huvudsak motsvarar svensk grundskola eller motsvarande vuxenutbildning.'
      ],
      nyckelord: ['komvux', 'vuxenutbildning', 'gymnasial nivå', 'nordisk sökande']
    },
    {
      ref: '7 kap. 6–7 §§ VuxF', rubrik: 'Vem får ersättning för komvux',
      text: [
        'En kommun får ersättning för nordiska elever i komvux på gymnasial nivå. Precis som i gymnasieskolan får kommunen bara ersättning för elever utöver antalet svenska elever från kommunen som samtidigt läser vuxenutbildning på gymnasial nivå i ett annat nordiskt land.',
        'En region får ersättning för alla nordiska elever i komvux på grundläggande nivå, på gymnasial nivå och i svenska för invandrare (sfi).'
      ],
      praktik: 'Förordningen nämner bara kommuner och regioner. En enskild huvudman kan alltså inte söka ersättningen för komvux. En kommun kan inte heller få ersättning för grundläggande nivå eller sfi.',
      nyckelord: ['kommun', 'region', 'grundläggande nivå', 'gymnasial nivå', 'sfi', 'svenska för invandrare', 'avdrag']
    },
    {
      ref: '7 kap. 8 § VuxF', rubrik: 'Belopp och ansökan för komvux',
      text: [
        'Regeringen bestämmer hur stor ersättningen är. Huvudmannen ansöker hos Skolverket, som beslutar och betalar ut så snart som möjligt.',
        'För 2026 är ersättningen 53 400 kr per 800 verksamhetspoäng enligt Skolverkets regleringsbrev. Det blir 66,75 kr per poäng.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Ersättningen räknas på verksamhetspoängen under den termin ni söker för. Högst 800 poäng per elev och år ger ersättning. Poängen får fördelas fritt mellan vår- och hösttermin samma kalenderår för samma elev.'
      },
      nyckelord: ['verksamhetspoäng', '800 poäng', '53400', 'belopp', 'per poäng', 'regleringsbrev']
    },
    {
      ref: '14 kap. 1 § GyF', rubrik: 'Överklagande',
      text: [
        'Skolverkets beslut enligt gymnasieförordningen får inte överklagas.',
        'Detsamma gäller beslut om ersättning enligt förordningen om vuxenutbildning (7 kap. 9 §). Där kan bara vissa beslut om tillstånd överklagas, och de gäller inte det här bidraget.'
      ],
      nyckelord: ['överklaga', 'överklagande', 'domstol']
    }
  ],

  kalkylatorer: [
    {
      id: 'gymnasieskola', modul: 'nordiska-elever-gymnasieskola',
      flik: 'Gymnasieskolan', eyebrow: 'Belopp för 2026',
      rubrik: 'Hur mycket', rubrikKursiv: 'blir det för en termin?',
      ingress: 'Välj program och ange hur många nordiska elever som går där. Räknaren använder riksprislistan för 2026. Har ni elever på flera program räknar ni ett program i taget och lägger ihop.',
      formel: { rubrik: 'Grundformeln', text: 'Ersättning per termin = belopp per läsår ÷ 2 × elever. Kommuner och regioner delar dessutom med 1,06 för momsen. Kommuner räknar bara elever utöver avdraget.' },
      resultatRubrik: 'Beräknad ersättning för en termin',
      falt: [
        { id: 'huvudman', typ: 'segment', etikett: 'Vem är huvudman?', standard: 'enskild',
          alternativ: [
            { varde: 'enskild', etikett: 'Enskild', hjalp: 'Till exempel en fristående skola. Inget momsavdrag och inget avdrag för svenska elever.' },
            { varde: 'region', etikett: 'Region', hjalp: 'Beloppet minskas med momsersättningen. Inget avdrag för svenska elever.' },
            { varde: 'kommun', etikett: 'Kommun', hjalp: 'Beloppet minskas med momsersättningen. Ersättning bara för elever utöver avdraget.' }
          ] },
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
            { varde: 'annat', etikett: 'Särskild variant eller riksrekryterande utbildning – ange beloppet själv' }
          ] },
        { id: 'egetBelopp', typ: 'tal', etikett: 'Belopp per elev och läsår enligt beslutet', min: 1, max: 2000000, steg: 1, standard: 150000, enhet: 'kr',
          hjalp: 'Beloppet i Skolverkets eller Skolinspektionens beslut för utbildningen.', visasOm: { falt: 'program', ar: 'annat' } },
        { id: 'elever', typ: 'tal', etikett: 'Nordiska elever på programmet', min: 1, max: 100000, steg: 1, standard: 2,
          hjalp: 'Elever som inte är folkbokförda i Sverige. Inte introduktionsprogram.' },
        { id: 'avdrag', typ: 'tal', etikett: 'Avdrag: svenska elever från kommunen i ett annat nordiskt land', min: 0, max: 100000, steg: 1, standard: 0,
          hjalp: 'Ungdomar som är folkbokförda i kommunen och studerar på gymnasial nivå med studiestöd i ett annat nordiskt land. Skolverket hämtar talet från CSN.', visasOm: { falt: 'huvudman', ar: 'kommun' } }
      ],
      exempel: [
        { etikett: 'Fristående skola, hästhållning', varden: { huvudman: 'enskild', program: 'nb-ha', elever: 3 } },
        { etikett: 'Kommun med avdrag', varden: { huvudman: 'kommun', program: 'te', elever: 5, avdrag: 2 } },
        { etikett: 'Region, riksrekryterande utbildning', varden: { huvudman: 'region', program: 'annat', egetBelopp: 180000, elever: 1 } }
      ],
      resultatNotis: 'Det är Skolverket som beslutar om beloppet. Kommunens avdrag bygger på CSN:s uppgifter, och ersättningen får inte bli högre än den interkommunala ersättningen.',
      forbehall: [
        { rubrik: 'Formel', text: 'Regleringsbrevet för 2026 anger riksprislistans belopp per elev och program. Skolverket ger hälften per termin, inklusive måltider. För kommuner och regioner delar räknaren med 1,06. Det stämmer med beloppen i Skolverkets beslut för våren 2026, men Skolverkets avrundning kan skilja någon krona.' },
        { rubrik: 'Det här prövar räknaren inte', text: 'Om eleven är folkbokförd i Sverige, är behörig eller läser ett introduktionsprogram. Inte heller taket vid interkommunal ersättning eller hur Skolverket fördelar kommunens avdrag när eleverna går olika program. Räknaren drar av eleverna från det program ni har valt.' },
        { rubrik: 'Andra år', text: 'Beloppen gäller 2026. Riksprislistan och regleringsbrevet kommer på nytt varje år.' }
      ],
      tabell: {
        rubrik: 'Exempel: samhällsvetenskapsprogrammet, 102 600 kr per läsår',
        kolumner: ['Huvudman', 'Per elev och termin', 'Avdrag för svenska elever'],
        rader: [
          ['Enskild huvudman', '51 300 kr', 'Nej'],
          ['Region', '48 396 kr (51 300 ÷ 1,06)', 'Nej'],
          ['Kommun', '48 396 kr (51 300 ÷ 1,06)', 'Ja']
        ],
        fotnot: 'Beloppet per läsår kommer från riksprislistan 2026 (SKOLFS 2026:7). Avrundat till hela kronor.'
      }
    },
    {
      id: 'komvux', modul: 'nordiska-elever-komvux',
      flik: 'Komvux', eyebrow: 'Belopp för 2026',
      rubrik: 'Ersättning', rubrikKursiv: 'för komvux.',
      ingress: 'Ange hur många nordiska elever ni har i komvux och hur många verksamhetspoäng de läser under terminen.',
      formel: { rubrik: 'Grundformeln', text: 'Ersättning = 53 400 kr ÷ 800 × verksamhetspoäng under terminen. Högst 800 poäng per elev och år.' },
      resultatRubrik: 'Beräknad ersättning för en termin',
      falt: [
        { id: 'huvudman', typ: 'segment', etikett: 'Vem är huvudman?', standard: 'region',
          alternativ: [
            { varde: 'region', etikett: 'Region', hjalp: 'Grundläggande nivå, gymnasial nivå och sfi. Ersättning för alla nordiska elever.' },
            { varde: 'kommun', etikett: 'Kommun', hjalp: 'Bara gymnasial nivå. Ersättning bara för elever utöver kommunens avdrag.' }
          ] },
        { id: 'elever', typ: 'tal', etikett: 'Nordiska elever i komvux', min: 1, max: 100000, steg: 1, standard: 3 },
        { id: 'poang', typ: 'tal', etikett: 'Verksamhetspoäng under terminen, alla eleverna tillsammans', min: 1, max: 80000000, steg: 1, standard: 1200,
          hjalp: 'Högst 800 poäng per elev och kalenderår, sammanlagt för våren och hösten.' }
      ],
      exempel: [
        { etikett: 'En elev, 400 poäng', varden: { elever: 1, poang: 400 } },
        { etikett: 'Kommun, gymnasial nivå', varden: { huvudman: 'kommun', elever: 4, poang: 1600 } }
      ],
      resultatNotis: 'Det är Skolverket som beslutar om beloppet. För kommuner görs ett avdrag som räknaren inte tar med.',
      forbehall: [
        { rubrik: 'Formel', text: 'Beloppet 53 400 kr per 800 verksamhetspoäng står i regleringsbrevet för 2026. Räknaren avrundar till hela kronor.' },
        { rubrik: 'Det här prövar räknaren inte', text: 'Om eleverna är folkbokförda i Sverige, om en elev redan har fått ersättning för poäng tidigare under året och kommunens avdrag för svenska elever i andra nordiska länder.' }
      ]
    }
  ],

  process: [
    { rubrik: 'Ta fram en elevlista', text: 'Lista eleverna från andra nordiska länder och vilken utbildning de läser. Kontrollera att ingen är folkbokförd i Sverige. Läser någon en särskild variant eller riksrekryterande utbildning: ta fram beloppet i beslutet för utbildningen.', ref: '12 kap. 6–7 §§ GyF' },
    { rubrik: 'Ansök för terminen', text: 'Ansök i Skolverkets e-tjänst för statsbidrag. Ansökan för hösten 2026 är öppen 15 oktober–16 november 2026. Ansökan för våren 2026 var öppen 15 april–18 maj 2026.', ref: '12 kap. 10 § GyF' },
    { rubrik: 'Beslut och utbetalning', text: 'Skolverket beslutar och betalar ut. Beslutet för våren 2026 kom i juni 2026. Beloppen per huvudman finns i en beslutsbilaga på Skolverkets webbplats.', ref: '12 kap. 10 § GyF, 7 kap. 8 § VuxF' },
    { rubrik: 'Hör av er vid ändringar', text: 'Om en elev folkbokför sig i Sverige eller avbryter studierna under terminen: kontakta Skolverket innan ni fyller i ansökan, på statsbidrag.nordiskaelever@skolverket.se.', ref: '12 kap. 6–7 §§ GyF' },
    { rubrik: 'Spara underlagen', text: 'Skolverket följer upp statsbidragen och kan kontrollera alla som har fått pengar. Spara uppgifter om elevernas folkbokföring, utbildning och poäng.' }
  ],

  underlagRubrik: 'Underlag att ha till hands',
  underlagIngress: 'Använd listan när ni förbereder ansökan. Markeringarna sparas inte – de försvinner när ni stänger sidan.',
  underlag: [
    'Lista över nordiska elever per skola, med program och inriktning eller komvuxkurser.',
    'Uppgift om att varje elev inte är folkbokförd i Sverige, och vilket nordiskt land eleven bor i.',
    'Beslut om belopp för särskilda varianter och riksrekryterande utbildningar.',
    'Er interkommunala ersättning per program (kommuner och regioner).',
    'Verksamhetspoäng per elev och termin i komvux, och vad som redan har sökts för tidigare under året.',
    'Uppgift om elever som har folkbokfört sig i Sverige eller avbrutit studierna under terminen.'
  ],

  kallor: [
    {
      titel: 'Statsbidrag för nordiska elever 2026 · Skolverket',
      url: 'https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-nordiska-elever-2026',
      beskrivning: 'Vem som kan söka, ansökningsperioder, halva riksprislistan per termin, momsavdrag, komvuxpoäng, avdraget för kommuner och frågor och svar.'
    },
    {
      titel: 'Gymnasieförordning (2010:2039) · Sveriges riksdag',
      url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/gymnasieforordning-20102039_sfs-2010-2039/',
      beskrivning: '12 kap. 6–10 §§ om nordiska sökande och ersättning, och 14 kap. 1 § om överklagande.'
    },
    {
      titel: 'Förordning (2011:1108) om vuxenutbildning · Sveriges riksdag',
      url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-20111108-om-vuxenutbildning_sfs-2011-1108/',
      beskrivning: '7 kap. 5–9 §§ om nordiska sökande i komvux, ersättning och överklagande.'
    },
    {
      titel: 'Regleringsbrev för budgetåret 2026 avseende Statens skolverk · Statskontoret',
      url: 'https://www.statskontoret.se/statsliggaren/regleringsbrev/1/2026/senaste',
      beskrivning: 'Anslag 1:8 anslagspost 2: hur beloppen för gymnasieskolan räknas och 53 400 kr per 800 verksamhetspoäng i komvux.'
    },
    {
      titel: 'Riksprislista 2026, SKOLFS 2026:7 · Skolverket',
      url: 'https://skolfs.skolverket.se/api/document/GRUNDFORFATTNING/2026:7/pdf',
      beskrivning: 'Belopp per elev och läsår för varje program 2026, med och utan måltider.'
    },
    {
      titel: 'Beslut om ansökan 1, nordiska elever vårterminen 2026 · Skolverket',
      url: 'https://www.skolverket.se/download/18.6c474fc619ed469a19a5d90/1781786409400/Beslut%20om%20ans%C3%B6kan%201,%20statsbidrag%20f%C3%B6r%20nordiska%20elever%20v%C3%A5rterminen%202026.pdf',
      beskrivning: 'Beslutade belopp per huvudman för våren 2026. Används här för att visa hur momsavdraget slår.'
    }
  ],

  forbehall: 'Guiden sammanfattar reglerna och visar hur beloppen räknas ut. Räknarna kontrollerar inte rätten till ersättning, kommunens avdrag eller taket vid interkommunal ersättning. Beloppen gäller 2026 och ändras varje år. Använd Skolverkets aktuella anvisningar när ni ansöker.'
};
