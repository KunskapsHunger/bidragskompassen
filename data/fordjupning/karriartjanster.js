/* Fördjupning: Statsbidrag för karriärtjänster – förordning (2019:1288).
 * Innehållet är stämt mot förordningen (ändrad t.o.m. SFS 2025:86) och Skolverkets sida för 2026/27.
 * Schema: se FORDJUPNING.md. Klartext, inte citat – paragrafhänvisningarna gäller förordningen. */
window.SB_FORDJUPNING = window.SB_FORDJUPNING || {};
window.SB_FORDJUPNING['karriartjanster'] = {
  id: 'karriartjanster',
  rubrik: 'Karriärtjänster',
  rubrikKursiv: 'i klartext.',
  ingress: 'Vem kan få bidrag, vilka villkor gäller och hur mycket blir det? Här står reglerna på vanlig svenska. Ni kan också räkna på förstelärare och lektorer med egna siffror.',
  kontrollerad: '2026-10-01',
  forordning: {
    sfs: '2019:1288',
    namn: 'Förordning (2019:1288) om statsbidrag till skolhuvudmän som inrättar karriärsteg för lärare',
    lydelse: 'ändrad t.o.m. SFS 2025:86',
    url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-20191288-om-statsbidrag-till_sfs-2019-1288/'
  },

  snabbfaktaRubrik: 'Två beräkningar att hålla isär',
  snabbfakta: [
    { rubrik: 'Huvudmannens bidragsram', text: 'Hur många elever huvudmannen har avgör hur stor ram Skolverket ger för året.' },
    { rubrik: 'Bidraget för lärarna', text: 'Karriärtjänst, skolenhet, tjänstgöringsgrad och tid avgör beloppet för varje lärare.' }
  ],
  snabbfaktaNot: 'En ram är ett tak. Pengarna betalas ut bara om villkoren är uppfyllda och huvudmannen begär ut dem.',

  begreppRubrik: 'Ord som återkommer',
  begrepp: [
    { term: 'Huvudman', forklaring: 'Den som driver skolan och ansvarar för utbildningen: kommunen, staten eller en fristående organisation.' },
    { term: 'Bidragsram', forklaring: 'Det belopp och det antal karriärtjänster som Skolverkets beslut ger huvudmannen.' },
    { term: 'Pott 1 och pott 2', forklaring: 'Pott 2 är skolenheter som Skolverket bedömt har särskilt svåra förutsättningar (17 §). Pott 1 är övriga skolenheter.' },
    { term: 'Rekvisition', forklaring: 'När huvudmannen begär att få bidraget utbetalt.' }
  ],

  sektioner: {
    regler: {
      rubrik: 'Från paragraf', rubrikKursiv: 'till praktik.',
      ingress: 'Rubrikerna följer förordningen. Öppna det avsnitt ni behöver, eller sök på till exempel ”legitimation”, ”lön” eller ”återkrav”. Varje avsnitt visar vilken paragraf det gäller.'
    },
    praktik: {
      rubrik: 'Så används', rubrikKursiv: 'reglerna.',
      ingress: 'Bidraget behöver följas från tillsättning till utbetalning och sedan under hela året. Underlagen ska visa att både huvudmannen och lärarna uppfyller villkoren.'
    }
  },

  paragrafer: [
    {
      ref: '1–2 c §§', rubrik: 'Vem som kan få bidrag',
      text: [
        'Bidraget går till huvudmän som inrättar karriärsteg som förstelärare eller lektor för särskilt yrkesskickliga lärare.',
        'Det gäller förskoleklass, grundskola, anpassad grundskola, specialskola, sameskola, gymnasieskola, anpassad gymnasieskola och kommunal vuxenutbildning (komvux).',
        'Huvudmannen får inte vara i likvidation eller konkurs. Den får inte heller ha sådana skulder hos Kronofogden som anges i 2 a §, eller ett återkrav från Skolverket som har förfallit till betalning.',
        'Har verksamheten fått sitt godkännande återkallat eller fått verksamhetsförbud ges inget bidrag, så länge beslutet inte har upphävts.',
        'Samma kostnad får inte redan vara betald med ett annat statligt bidrag. Varje lärare måste också uppfylla villkoren i 3–12 §§.'
      ],
      praktik: 'Kontrollera två saker: att huvudmannen uppfyller kraven och att varje lärare gör det. Förskolan finns inte med i uppräkningen.',
      nyckelord: ['huvudman', 'skolformer', 'förskola', 'komvux', 'konkurs', 'kronofogden', 'återkrav', 'verksamhetsförbud']
    },
    {
      ref: '3 §', rubrik: 'Så ska förstelärare och lektorer utses',
      text: [
        'Läraren ska utses efter ett öppet ansökningsförfarande, alltså en öppen utlysning.',
        'Skolverket anger att alla lärare på skolenheten åtminstone ska ha haft möjlighet att söka, och att tjänsten ska ha utlysts internt. Det räcker inte att bara erbjuda tjänsten till ett arbetslag.'
      ],
      praktik: {
        rubrik: 'Äldre tillsättningar',
        text: 'Enligt Skolverket behöver tillsvidaretjänster som tillsattes innan förordningen började gälla inte annonseras igen. Äldre tidsbegränsade uppdrag måste däremot utlysas på nytt när perioden har tagit slut.'
      },
      nyckelord: ['utlysning', 'ansökan', 'annons', 'rekrytering', 'tillsättning', 'arbetslag']
    },
    {
      ref: '4 §', rubrik: 'Vad läraren ska arbeta med',
      text: ['Arbetet ska till största delen bestå av undervisning och uppgifter som hör till undervisningen.'],
      praktik: 'Titta på vad uppdraget faktiskt innehåller. Villkoret ska vara uppfyllt även om läraren också har utvecklingsuppgifter.',
      nyckelord: ['arbetsuppgifter', 'undervisning', 'uppdrag', 'utvecklingsarbete']
    },
    {
      ref: '5 §', rubrik: 'Vem som kan bli förstelärare',
      text: ['En förstelärare måste uppfylla alla de här kraven:'],
      lista: [
        'Ha lärarlegitimation enligt reglerna i paragrafen. Det finns ett undantag i 8 §.',
        'Kunna visa minst fyra års väl vitsordad undervisning i skolväsendet. Väl vitsordad betyder att arbetet har fått goda omdömen.',
        'Ha särskilt god förmåga att förbättra elevernas studieresultat och ett starkt intresse för att utveckla undervisningen.',
        'Av huvudmannen även i övrigt bedömas som särskilt kvalificerad för undervisning och uppgifter som hör till den.'
      ],
      nyckelord: ['förstelärare', 'legitimation', 'erfarenhet', 'fyra år', 'behörighet', 'krav']
    },
    {
      ref: '6–7 §§', rubrik: 'Vem som kan bli lektor',
      text: [
        'En lektor ska ha lärarlegitimation enligt reglerna i paragrafen och en relevant examen på forskarnivå, eller en motsvarande utländsk examen.',
        'Läraren ska också ha visat pedagogisk skicklighet under minst fyra års tjänstgöring som lärare. Den som har undervisat vid universitet eller högskola slipper just kravet på fyra år.',
        'Forskarexamen ska gälla ämnesdidaktik (hur ett ämne lärs ut) eller ett ämne som helt eller till största delen hör till ett undervisningsämne. För vissa speciallärare och lärare med motsvarande äldre examen kan även en forskarexamen i specialpedagogik godtas, om den har nära koppling till undervisningen.'
      ],
      nyckelord: ['lektor', 'forskarexamen', 'doktor', 'legitimation', 'högskola', 'specialpedagogik', 'ämnesdidaktik']
    },
    {
      ref: '8 §', rubrik: 'Vissa lärare utan legitimation räknas som legitimerade',
      text: [
        'En lärare utan legitimation som undervisar med stöd av 2 kap. 17 § första stycket 1 skollagen räknas här som legitimerad.',
        'Undantaget är snävt. Det betyder inte att alla lärare utan legitimation kan omfattas.'
      ],
      nyckelord: ['legitimation', 'olegitimerad', 'undantag', 'skollagen']
    },
    {
      ref: '9 §', rubrik: 'Lönekrav när en förstelärare utses',
      text: [
        'Huvudregeln vid heltid: lönen ska öka med minst 5 000 kr i månaden. På en skolenhet i pott 2 (se 17 §) är kravet 10 000 kr.',
        'Om läraren redan arbetar hos huvudmannen jämförs den nya lönen med lönen före. Om läraren anställs samtidigt som hen utses ska lönen i stället ligga minst lika mycket över medianlönen för samma lärarkategori hos huvudmannen. Medianlön är mittvärdet: hälften tjänar mer och hälften mindre.',
        'Byter läraren från en skolenhet i pott 1 till en i pott 2 hos samma huvudman ska den sammanlagda löneökningen vara minst 10 000 kr. Den löneökning läraren redan har fått räknas alltså med.',
        'Läs också 11 § om flera redan anställda och 12 § om deltid.'
      ],
      nyckelord: ['lön', 'löneökning', 'lönepåslag', '5000', '10000', 'medianlön', 'nyanställning', 'pott 2']
    },
    {
      ref: '10 §', rubrik: 'Lönekrav när en lektor utses',
      text: [
        'Huvudregeln vid heltid: lönen ska öka med minst 10 000 kr i månaden, eller 15 000 kr på en skolenhet i pott 2. Om läraren anställs samtidigt som hen utses jämförs lönen i stället med medianlönen för samma lärarkategori.',
        'Blir en förstelärare lektor räknas den tidigare löneökningen enligt 9 § andra stycket in i den sammanlagda ökningen. Även vid flytt från pott 1 till pott 2 hos samma huvudman är det den sammanlagda ökningen som ska nå den högre nivån.',
        'Läs också 11 § om flera redan anställda och 12 § om deltid.'
      ],
      nyckelord: ['lön', 'löneökning', 'lektor', '10000', '15000', 'medianlön']
    },
    {
      ref: '11 §', rubrik: 'När flera lärare utses',
      text: [
        'Om flera lärare som redan arbetar hos samma huvudman utses kan löneökningarna fördelas olika mellan dem. Tillsammans måste ökningen vara minst lika stor som summan av beloppen för varje karriärtjänst.',
        'Exempel: Fyra förstelärare på heltid i pott 1 ska tillsammans få minst 4 × 5 000 = 20 000 kr mer i månaden. Beloppet kan fördelas olika mellan dem.'
      ],
      praktik: {
        rubrik: 'Så tillämpar Skolverket regeln',
        text: 'Löneökningarna får fördelas olika inom en pott. Belopp får inte flyttas mellan pott 1 och pott 2. Regeln gäller lärare som redan är anställda. För den som anställs samtidigt finns en egen regel.'
      },
      nyckelord: ['lön', 'fördela', 'lönedifferentiering', 'flera lärare']
    },
    {
      ref: '12 §', rubrik: 'Lönebelopp vid deltid och i båda potterna',
      text: [
        'Vid deltid minskas lönebeloppen i samma proportion. En förstelärare som arbetar 80 % i pott 1 ska enligt huvudregeln få 5 000 × 0,80 = 4 000 kr mer i månaden.',
        'Arbetar läraren i båda potterna vägs beloppen efter hur arbetstiden är fördelad. En förstelärare på heltid med halva tiden i varje pott: 5 000 × 0,50 + 10 000 × 0,50 = 7 500 kr i månaden.'
      ],
      nyckelord: ['deltid', 'tjänstgöringsgrad', 'båda potterna', 'lön']
    },
    {
      ref: '13 §', rubrik: 'Vilka lärare lönen jämförs med',
      text: ['När lönen jämförs med medianlönen används de här lärarkategorierna:'],
      lista: [
        'Förskoleklass och grundskolans årskurs 1–6.',
        'Grundskolans årskurs 7–9.',
        'Andra ämnen än yrkesämnen i gymnasieskolan.',
        'Yrkesämnen i gymnasieskolan.'
      ],
      praktik: 'Lärare i andra skolformer räknas till en av kategorierna utifrån sin grundläggande lärarexamen.',
      nyckelord: ['medianlön', 'jämförelse', 'kategori', 'lärarexamen']
    },
    {
      ref: '14 §', rubrik: 'Bidragsåret',
      text: [
        'Ett bidragsår går från 1 juli till 30 juni. Bidrag ges för ett år i taget och bara i den mån det finns pengar.',
        'Att ni får en ram ett år är alltså inget löfte om samma ram nästa år.'
      ],
      nyckelord: ['bidragsår', 'läsår', '1 juli', '30 juni']
    },
    {
      ref: '15–18 §§', rubrik: 'Bidragsramar: pott 1 och pott 2',
      text: [
        'Skolverket bestämmer ramar för två grupper av skolenheter. Myndigheten kallar dem pott 1 och pott 2.',
        'Pott 1: Ramen bygger på hur stor andel av eleverna i de berörda skolformerna som huvudmannen har. Elever på skolenheter i pott 2 räknas inte med. Minsta ram är 85 000 kr. Högre belopp avrundas till närmaste multipel av 85 000 kr (85 000, 170 000, 255 000 och så vidare).',
        'Pott 2: Gäller skolenheter med förskoleklass, grundskola eller gymnasieskola som har särskilt svåra förutsättningar utifrån elevernas socioekonomiska bakgrund och minst 50 elever. Skolverket bedömer vilka skolenheter som omfattas. Minsta ram är 170 000 kr, och högre belopp avrundas till närmaste multipel av 170 000 kr.',
        'Elevantalet räknas normalt som ett genomsnitt av de tre läsåren före bidragsåret. Har huvudmannen haft elever kortare tid används de läsåren. Hade huvudmannen inga elever läsåret närmast före bidragsåret bestäms ingen ram.',
        'Elever i komvux räknas inte med i elevunderlaget enligt 16 §, även om lärare i komvux kan omfattas av bidraget.'
      ],
      praktik: {
        rubrik: 'Pengar mellan potterna',
        text: 'Ramen i pott 1 får användas även på skolenheter i pott 2. Ramen i pott 2 får bara användas på skolenheter som omfattas av 17 §. De högre beloppen gäller där, oavsett vilken ram pengarna tas från.'
      },
      nyckelord: ['bidragsram', 'ram', 'pott 1', 'pott 2', 'elevantal', 'avrundning', 'socioekonomisk', '85000', '170000']
    },
    {
      ref: '19 §', rubrik: 'Bidragsbelopp per lärare',
      text: [
        'Vid heltid under hela bidragsåret är beloppen per år: 85 000 kr för en förstelärare i pott 1, 170 000 kr för en förstelärare i pott 2 eller en lektor i pott 1, och 255 000 kr för en lektor i pott 2.',
        'Bidraget minskas i proportion vid deltid, eller om läraren inte har haft karriärtjänsten hela året. Arbetar läraren i båda potterna vägs årsbeloppen efter hur arbetstiden är fördelad.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Årsbeloppen innehåller redan en schablon för sociala avgifter. Lägg därför inte till sociala avgifter ovanpå när ni räknar på bidraget. En högre löneökning ger inte högre bidrag – årsbeloppen är fasta.'
      },
      nyckelord: ['belopp', 'årsbelopp', '85000', '170000', '255000', 'sociala avgifter', 'deltid']
    },
    {
      ref: '20–20 a §§', rubrik: 'Begära ut pengarna (rekvisition)',
      text: [
        'Huvudmannen begär ut bidraget. Det kallas rekvisition. Skolverket beslutar och betalar ut två gånger per bidragsår.',
        'En behörig företrädare ska på heder och samvete intyga att villkoren i 2 a–2 c §§ är uppfyllda och att villkoren i 3–12 §§ kommer att uppfyllas. Huvudmannen ska lämna de uppgifter och handlingar som behövs för prövningen.',
        'Beslutet kan innehålla särskilda villkor. De står i så fall i beslutet.'
      ],
      nyckelord: ['rekvisition', 'rekvirera', 'utbetalning', 'intyga', 'företrädare', 'beslut']
    },
    {
      ref: '21 §', rubrik: 'Uppföljning',
      text: ['Skolverket följer upp hur bidraget används. Den som får bidraget ska delta i den uppföljning och utvärdering som beslutas, och lämna de uppgifter som Skolverket eller en annan ansvarig myndighet begär.'],
      praktik: 'Spara underlag om tillsättning, kvalifikationer, lön, tjänstgöring och hur pengarna har använts.',
      nyckelord: ['uppföljning', 'redovisning', 'utvärdering', 'underlag', 'dokumentation']
    },
    {
      ref: '22 §', rubrik: 'Anmäl förändringar',
      text: [
        'Förändringar som kan påverka rätten till bidrag eller beloppets storlek ska anmälas till Skolverket så snart som möjligt. Det gäller både den som har begärt bidrag och den som har fått det.',
        'Det kan till exempel vara att en lärare slutar eller ändrar sin tjänstgöring.'
      ],
      nyckelord: ['anmälan', 'förändring', 'slutar', 'ändring']
    },
    {
      ref: '23–24 §§', rubrik: 'Betala tillbaka (återkrav)',
      text: [
        'Bidraget ska betalas tillbaka om det har betalats ut på fel grund eller med för högt belopp, om det inte har använts till det det var avsett för, eller om kraven på uppföljning eller villkoren i beslutet inte har följts.',
        'Skolverket ska då besluta om återkrav, alltså kräva tillbaka pengarna. Finns det synnerliga skäl – mycket starka skäl – får Skolverket avstå helt eller delvis.',
        'Ränta tas ut från den trettionde dagen efter beslutet om återkrav. Räntan är statens utlåningsränta plus två procentenheter. Även räntan kan efterges vid synnerliga skäl.'
      ],
      nyckelord: ['återkrav', 'återbetalning', 'betala tillbaka', 'ränta', 'synnerliga skäl']
    },
    {
      ref: '24 a §', rubrik: 'Stopp för utbetalning',
      text: ['Skolverket ska helt eller delvis stoppa utbetalningen av ett bidrag som redan har beviljats, om villkoren inte längre bedöms vara uppfyllda eller om det finns skäl för återbetalning enligt 23 §. Beslutet gäller direkt.'],
      nyckelord: ['stopp', 'utbetalning', 'hinder']
    },
    {
      ref: '25 §', rubrik: 'Skolverkets föreskrifter',
      text: ['Skolverket får skriva mer detaljerade regler, så kallade föreskrifter. Förordningen behöver därför läsas tillsammans med Skolverkets föreskrifter, aktuella anvisningar och bidragsbeslut.'],
      nyckelord: ['föreskrifter', 'anvisningar', 'skolfs', 'bemyndigande']
    },
    {
      ref: '26 §', rubrik: 'Överklagande',
      text: ['Ett beslut enligt 24 a § om att helt eller delvis stoppa en utbetalning kan överklagas till allmän förvaltningsdomstol. Andra beslut enligt förordningen får enligt förordningen inte överklagas.'],
      nyckelord: ['överklaga', 'domstol', 'förvaltningsrätt']
    },
    {
      ref: 'Övergång', rubrik: 'Övergångsbestämmelser',
      text: [
        'Förordningen började gälla den 1 februari 2020 och ersatte tidigare förordningar. För äldre bidrag finns övergångsregler.',
        'Ändringen SFS 2025:86 började gälla den 1 juli 2025. För bidrag som gäller tid före dess gäller de äldre reglerna. För äldre perioder måste ni alltså använda rätt version av förordningen.'
      ],
      nyckelord: ['övergång', 'äldre regler', '2025:86', 'ikraftträdande']
    }
  ],

  kalkylatorer: [
    {
      id: 'belopp', modul: 'karriartjanster-belopp',
      flik: 'Räkna på bidrag', eyebrow: 'Bidrag enligt 19 §',
      rubrik: 'Vad blir', rubrikKursiv: 'beloppet?',
      ingress: 'Ändra värdena och följ uträkningen direkt. Räknaren visar bidraget innan det prövas mot huvudmannens ram och övriga villkor. Vilken pott en skola hör till står i Skolverkets beslut.',
      resultatRubrik: 'Beräknat bidrag för vald period',
      falt: [
        { id: 'tjanst', typ: 'val', etikett: 'Karriärtjänst', standard: 'forstelarare',
          alternativ: [{ varde: 'forstelarare', etikett: 'Förstelärare' }, { varde: 'lektor', etikett: 'Lektor' }] },
        { id: 'antal', typ: 'tal', etikett: 'Antal lärare', min: 1, max: 10000, steg: 1, standard: 1, hjalp: 'Samma förutsättningar för alla.' },
        { id: 'pott', typ: 'segment', etikett: 'Var arbetar läraren?', standard: 'pott1',
          alternativ: [
            { varde: 'pott1', etikett: 'Pott 1', hjalp: 'Skolenhet som inte omfattas av 17 §.' },
            { varde: 'pott2', etikett: 'Pott 2', hjalp: 'Skolenhet som Skolverket bedömt omfattas av 17 §.' },
            { varde: 'bada', etikett: 'Båda potterna', hjalp: 'Fördela lärarens arbetstid mellan skolenheter i de två potterna.' }
          ] },
        { id: 'andelPott2', typ: 'reglage', etikett: 'Andel av arbetstiden i pott 2', min: 0, max: 100, steg: 1, standard: 50, enhet: '%',
          delning: ['Pott 1', 'Pott 2'], visasOm: { falt: 'pott', ar: 'bada' } },
        { id: 'grad', typ: 'reglage', etikett: 'Tjänstgöringsgrad', min: 0, max: 100, steg: 1, standard: 100, enhet: '%',
          hjalp: 'Andel av heltid. Arbetar läraren i båda potterna fördelas den här tiden mellan dem.' },
        { id: 'manader', typ: 'reglage', etikett: 'Tid i karriärtjänsten under bidragsåret', min: 0, max: 12, steg: 1, standard: 12, enhet: 'mån',
          hjalp: '1 juli–30 juni. Förenklad modell med hela månader. Frånvaro räknas inte särskilt.' }
      ],
      exempel: [
        { etikett: 'Halvtid i sex månader', varden: { tjanst: 'forstelarare', pott: 'pott1', grad: 50, manader: 6, antal: 1 } },
        { etikett: 'Arbete i båda potterna', varden: { tjanst: 'forstelarare', pott: 'bada', andelPott2: 50, grad: 100, manader: 12, antal: 1 } },
        { etikett: 'Två lektorer i pott 2', varden: { tjanst: 'lektor', pott: 'pott2', grad: 100, manader: 12, antal: 2 } }
      ],
      resultatNotis: 'Bidraget innehåller en schablon för sociala avgifter. Vid nyanställning jämförs lönen med medianlönen. För flera redan anställda kan löneökningen fördelas enligt 11 §. Lönebeloppet ovan är ingen kontroll av de villkoren.',
      forbehall: [
        { rubrik: 'Formel', text: 'Årsbelopp × tjänstgöringsgrad × andel av bidragsåret × antal lärare. Arbetar läraren i båda potterna vägs årsbeloppet efter hur arbetstiden är fördelad. Olika förutsättningar, eller ändringar under året, behöver räknas var för sig.' },
        { rubrik: 'Kontrollera ramen', text: 'Räknaren prövar inte rätten till bidrag eller hur många tjänster som får användas. Skolverket anger bland annat att en lärare som arbetar i båda potterna tar en hel tjänst i anspråk i varje pott, även vid deltid. Utgå därför från både beloppet och antalet tjänster i ert beslut.' }
      ],
      tabell: {
        rubrik: 'Grundbelopp vid heltid under hela bidragsåret',
        kolumner: ['Karriärtjänst', 'Pott 1 · bidrag per år', 'Pott 2 · bidrag per år', 'Lönebelopp per månad, pott 1 / pott 2'],
        rader: [
          ['Förstelärare', '85 000 kr', '170 000 kr', '5 000 / 10 000 kr'],
          ['Lektor', '170 000 kr', '255 000 kr', '10 000 / 15 000 kr']
        ],
        fotnot: 'Lönebeloppen visar huvudregeln i 9–10 §§. Läs också 11–13 §§ om fördelning mellan lärare, deltid och jämförelsekategorier.'
      }
    },
    {
      id: 'ram', modul: 'karriartjanster-ram',
      flik: 'Bidragsramen', eyebrow: 'Ramar enligt 15–18 §§',
      rubrik: 'Elevandelen', rubrikKursiv: 'styr ramen.',
      ingress: 'Skolverket räknar fram varje pott för sig. Räknaren visar principen med påhittade siffror. För en riktig huvudman gäller Skolverkets beslutade ram och det elevunderlag som gäller för året.',
      formel: { rubrik: 'Grundformeln', text: 'Preliminär ram = pengarna i potten × huvudmannens elevantal i potten ÷ alla huvudmäns elevantal i samma pott.' },
      resultatRubrik: 'Exempel på bidragsram',
      falt: [
        { id: 'pott', typ: 'val', etikett: 'Vilken pott vill ni titta på?', standard: 'pott1',
          alternativ: [{ varde: 'pott1', etikett: 'Pott 1 · avrundas till 85 000 kr' }, { varde: 'pott2', etikett: 'Pott 2 · avrundas till 170 000 kr' }] },
        { id: 'medel', typ: 'tal', etikett: 'Pengar i potten', min: 1, max: 1e12, steg: 1, standard: 100000000, enhet: 'kr',
          hjalp: 'Exempelvärde. Förordningen anger inte hur mycket pengar som finns totalt varje år.' },
        { id: 'egnaElever', typ: 'tal', etikett: 'Huvudmannens elever', min: 1, max: 1e8, steg: 'any', standard: 1000 },
        { id: 'allaElever', typ: 'tal', etikett: 'Alla huvudmäns elever', min: 1, max: 1e8, steg: 'any', standard: 100000,
          hjalp: 'Ange genomsnittliga elevantal för samma pott och samma år. Elever i pott 2 ska inte räknas med i pott 1.' },
        { id: 'forraLasaret', typ: 'kryss', etikett: 'Huvudmannen hade elever läsåret närmast före bidragsåret.', standard: true },
        { id: 'harPott2Enhet', typ: 'kryss', etikett: 'Huvudmannen har minst en skolenhet som Skolverket bedömt uppfyller villkoren i 17 §, med minst 50 elever.',
          standard: true, visasOm: { falt: 'pott', ar: 'pott2' } }
      ],
      exempel: [
        { etikett: 'Under lägsta nivån', varden: { pott: 'pott1', medel: 100000000, egnaElever: 50, allaElever: 100000 } },
        { etikett: 'Pott 2', varden: { pott: 'pott2', medel: 100000000, egnaElever: 1000, allaElever: 100000 } }
      ],
      resultatNotis: 'Det här visar hur beräkningen går till. Ramen bestäms av Skolverket och förutsätter att huvudmannen hör till rätt pott och uppfyller övriga villkor.',
      forbehall: [
        { rubrik: 'Elevunderlaget', text: 'Enligt 18 § används normalt ett genomsnitt av tre läsår. För nyare huvudmän används den kortare tid de har haft elever. För 2026/27 anger Skolverket att myndigheten använder kvalitetssäkrad elevstatistik från oktober 2022, 2023 och 2024.' },
        { rubrik: 'Avrundningen', text: 'Minst 85 000 kr i pott 1 och 170 000 kr i pott 2. Högre belopp avrundas till närmaste multipel. Hamnar ett exempel precis mitt emellan två multiplar väljer räknaren den högre. Förordningen säger inget om just det fallet.' }
      ]
    }
  ],

  process: [
    { rubrik: 'Kontrollera ramen', text: 'Hämta årets beslut om bidragsram. Kontrollera beloppet, antalet tjänster och vilka skolenheter som hör till pott 2.', ref: '15–18 §§' },
    { rubrik: 'Säkra villkoren', text: 'Dokumentera den öppna utlysningen, lärarnas kvalifikationer, arbetsuppgifterna och att lönen är rätt satt.', ref: '2 a–13 §§' },
    { rubrik: 'Begär utbetalning', text: 'En behörig företrädare begär ut bidraget. Skolverket beslutar och betalar ut två gånger under bidragsåret.', ref: '20–20 a §§' },
    { rubrik: 'Följ upp och anmäl', text: 'Spara underlagen och anmäl förändringar så snart som möjligt. Bidrag som betalats ut felaktigt eller inte har använts kan behöva betalas tillbaka.', ref: '21–24 a §§' }
  ],

  underlagRubrik: 'Underlag att ha till hands',
  underlagIngress: 'Använd listan när ni förbereder arbetet. Markeringarna sparas inte – de försvinner när ni stänger sidan.',
  underlag: [
    'Årets beslut om bidragsram och listan över skolenheter i pott 2.',
    'Underlag om hur tjänsterna tillsattes och om varje lärares kvalifikationer.',
    'Uppgifter om lön, löneökning och eventuell medianlön.',
    'Tjänstgöringsgrad, skolenhet, period och frånvaro som påverkar bidraget.',
    'Vem som är behörig företrädare, och aktuella datum och anvisningar för rekvisitionen.'
  ],

  kallor: [
    {
      titel: 'Förordning (2019:1288) · Sveriges riksdag',
      url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-20191288-om-statsbidrag-till_sfs-2019-1288/',
      beskrivning: 'Källan för villkor, lönebelopp, bidragsramar, årsbelopp och återkrav. Paragrafhänvisningarna i guiden gäller den här förordningen.'
    },
    {
      titel: 'Statsbidrag för karriärtjänster 2026/27 · Skolverket',
      url: 'https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-karriartjanster-2026-27',
      beskrivning: 'Skolverkets anvisningar om potter, antal tjänster, sociala avgifter, rekvisition och elevstatistik. Sidan länkar också till föreskrifterna SKOLFS 2020:89 och årets bidragsbeslut.'
    }
  ],

  forbehall: 'Guiden sammanfattar reglerna och visar hur beräkningarna går till. Räknarna kontrollerar inte rätten till bidrag, frånvaro, lönevillkor eller hur mycket utrymme som finns i huvudmannens beslut. Använd aktuella föreskrifter, anvisningar och beslut när ni begär ut bidraget. För äldre bidragsperioder kan äldre regler gälla.'
};
