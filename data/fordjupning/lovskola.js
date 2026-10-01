/* Fördjupning: Statsbidrag för lovskola – förordning (2014:47) om statsbidrag för undervisning under skollov.
 * Innehållet är stämt mot förordningen (ändrad t.o.m. SFS 2025:1018), skollagen 10 kap. 23 a–23 c §§
 * och Skolverkets sidor för lovskola 2025 och 2026 (senast uppdaterad 10 augusti 2026).
 * Schema: se FORDJUPNING.md. Klartext, inte citat – paragrafhänvisningarna gäller förordningen om inget annat anges. */
window.SB_FORDJUPNING = window.SB_FORDJUPNING || {};
window.SB_FORDJUPNING['lovskola'] = {
  id: 'lovskola',
  rubrik: 'Lovskola',
  rubrikKursiv: 'i klartext.',
  ingress: 'Vilka elever kan gå lovskola med bidrag, hur räknas elevdagar och hur hänger ansökan ihop med utbetalningen? Här står reglerna på vanlig svenska. Ni kan också räkna på egna siffror.',
  kontrollerad: '2026-10-01',
  forordning: {
    sfs: '2014:47',
    namn: 'Förordning (2014:47) om statsbidrag för undervisning under skollov',
    lydelse: 'ändrad t.o.m. SFS 2025:1018',
    url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-201447-om-statsbidrag-for_sfs-2014-47/'
  },

  snabbfaktaRubrik: 'Tre saker att hålla isär',
  snabbfakta: [
    { rubrik: 'Ansökan', text: 'Ni ansöker i januari–februari för årets lov. Beslutet visar hur mycket ni har fått, men inga pengar betalas ut då.' },
    { rubrik: 'Begäran om utbetalning', text: 'Efter loven anger ni hur många elevdagar ni har genomfört. Det är först då pengarna betalas ut.' },
    { rubrik: 'Frivillig, inte obligatorisk', text: 'Bidraget gäller bara lovskola som huvudmannen anordnar frivilligt. Lovskola som skollagen kräver ger inget bidrag.' }
  ],
  snabbfaktaNot: 'Skolverket räknar med 300 kr per elevdag. Räcker inte pengarna kan beloppet sänkas lika för alla.',

  begreppRubrik: 'Ord som återkommer',
  begrepp: [
    { term: 'Huvudman', forklaring: 'Den som driver skolan och ansvarar för utbildningen: kommunen, staten eller en fristående organisation.' },
    { term: 'Elevdag', forklaring: 'En elev som går lovskola en dag. Fem elever som går tio dagar blir 5 × 10 = 50 elevdagar.' },
    { term: 'Schablonbelopp', forklaring: 'Ett fast belopp i stället för faktiska kostnader. För lovskola använder Skolverket 300 kr per elevdag.' },
    { term: 'Obligatorisk lovskola', forklaring: 'Lovskola som skollagen kräver att huvudmannen erbjuder vissa elever i årskurs 8 och 9. Den ger inget statsbidrag.' },
    { term: 'Begäran om utbetalning', forklaring: 'När huvudmannen begär att få pengarna. Kallas också rekvisition.' },
    { term: 'Särskilda skäl', forklaring: 'Extra kostnader på grund av antalet elever i verksamheten. Då kan bidraget bli högre än schablonen.' }
  ],

  sektioner: {
    regler: {
      rubrik: 'Från paragraf', rubrikKursiv: 'till praktik.',
      ingress: 'Rubrikerna följer förordningen. Öppna det avsnitt ni behöver, eller sök på till exempel ”elevdag”, ”årskurs 9” eller ”återkrav”. Varje avsnitt visar vilken paragraf det gäller.'
    },
    praktik: {
      rubrik: 'Så används', rubrikKursiv: 'reglerna.',
      ingress: 'Bidraget följer ett år i fyra steg: ansökan, lovskola, begäran om utbetalning och uppföljning. Elevlistorna är det viktigaste underlaget hela vägen.'
    }
  },

  paragrafer: [
    {
      ref: '1 §', rubrik: 'Vad bidraget är till för',
      text: [
        'Bidraget gäller frivillig undervisning under skollov i vissa skolformer. Det gäller också frivillig undervisning under sommaren det år en elev har avslutat årskurs 10 i specialskolan.',
        'Syftet är att elever som inte har nått, eller riskerar att inte nå, kraven för betyget E ska få större möjlighet att nå dem. I de lägre årskurserna där betyg inte sätts gäller det kriterierna för bedömning av kunskaper.',
        'Bidrag ges bara i den mån det finns pengar. Anslaget för 2026 är 112 miljoner kr.'
      ],
      nyckelord: ['syfte', 'betyget E', 'godkänt', 'frivillig', 'specialskola', 'årskurs 10', 'anslag', 'skollov']
    },
    {
      ref: '2 §', rubrik: 'Prövning för betyg',
      text: [
        'Paragrafen hänvisar till reglerna om prövning i skollagen, skolförordningen och gymnasieförordningen. En prövning är ett särskilt tillfälle där eleven visar sina kunskaper i ett helt ämne och kan få betyg.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Elever som går i lovskola kan få göra en prövning för att visa att de når betygskriterierna för alla delar av ett ämne. Prövningen ska göras så att eleven kan nå alla betyg från F till A.'
      },
      nyckelord: ['prövning', 'betyg', 'höja betyg', 'F till A']
    },
    {
      ref: '3 §', rubrik: 'Vem som kan få bidrag',
      text: [
        'Bidraget kan gå till huvudmän för grundskola, sameskola, specialskola och gymnasieskola. Det gäller kommunala, fristående och statliga huvudmän.',
        'Anpassad grundskola och anpassad gymnasieskola finns inte med i uppräkningen.',
        'Tidigare krävde 3 a § att en fristående huvudman skulle vara godkänd för F-skatt och registrerad som arbetsgivare. Det kravet togs bort den 1 december 2025.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'När flera huvudmän samarbetar om lovskola är det den huvudman som har kostnaden som ska ansöka och begära ut bidraget. Flera huvudmän kan inte få bidrag för samma elev.'
      },
      nyckelord: ['huvudman', 'skolformer', 'fristående', 'kommun', 'sameskola', 'specialskola', 'gymnasieskola', 'samarbete', 'F-skatt']
    },
    {
      ref: '3 b–3 d §§', rubrik: 'När bidrag inte kan ges',
      text: [
        'Huvudmannen får inte vara i likvidation eller konkurs. Den får inte heller ha sådana skulder hos Kronofogden som anges i 3 b §, eller ett förfallet återkrav från Skolverket.',
        'Har Skolinspektionen eller en kommun återkallat huvudmannens godkännande, eller har Skolinspektionen beslutat om verksamhetsförbud, ges inget bidrag så länge beslutet inte har upphävts.',
        'Samma kostnad får inte redan vara betald med ett annat statligt bidrag.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Ni kan inte få statsbidrag för både lovskola och språkstärkande insatser under skollov för samma elev under samma period.'
      },
      nyckelord: ['konkurs', 'kronofogden', 'skulder', 'återkrav', 'verksamhetsförbud', 'dubbelfinansiering', 'språkstärkande insatser']
    },
    {
      ref: '4 §', rubrik: 'Vilka elever och vilka lov',
      text: [
        'Bidraget gäller elever som behöver undervisningen för att nå kraven för betyget E i ett eller flera ämnen.',
        'Grundskola, sameskola och specialskola: undervisning under lov under läsåret, eller under sommaren efter att en årskurs har avslutats.',
        'Gymnasieskola: undervisning under lov under läsåret, eller i anslutning till att läsåret har avslutats.',
        'Inget bidrag ges för lovskola som huvudmannen är skyldig att anordna enligt skollagen. Inget bidrag ges heller för undervisning efter att eleven har avslutat gymnasieskolan.'
      ],
      lista: [
        'Jullovet (den del som infaller i januari), sportlovet, påsklovet, sommarlovet och läslovet ingår i 2026 års bidrag enligt Skolverket.',
        'Sommarlovskola: eleven ska ha gått i någon av årskurserna det senaste läsåret.',
        'Årskurs 1–5 i grundskolan: bidrag kan ges för elever som riskerar att inte nå kriterierna för bedömning av kunskaper.',
        'Introduktionsprogram: bidrag kan ges för elever som behöver lovskola i ämnen som ingår i deras individuella studieplan.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Huvudmannen planerar lovskolan och ska veta vilka elever som behöver den. Skolverket kan begära elevlistor och scheman som visar vilka elever som deltog och vilka dagar. Elevlistorna ska vara uppdelade per lov och visa elevens fullständiga namn, skolenhet, årskurs, dagar och ämnen.'
      },
      nyckelord: ['elever', 'betyget E', 'sommarlov', 'läslov', 'jullov', 'sportlov', 'påsklov', 'introduktionsprogram', 'studieplan', 'elevlistor', 'gymnasieexamen']
    },
    {
      ref: '4 § · skollagen', rubrik: 'Obligatorisk lovskola först',
      text: [
        'Skollagen (10 kap. 23 a–23 c §§) kräver att huvudmän för grundskolan erbjuder lovskola till vissa elever. Det gäller elever som riskerar att inte bli behöriga till ett nationellt yrkesprogram i gymnasieskolan.',
        'Lovskolan ska enligt Skolverket omfatta minst 50 timmar i juni efter årskurs 8, minst 25 timmar på loven under årskurs 9 och minst 50 timmar i juni efter årskurs 9. Undervisningen får vara högst åtta timmar per dag och inte på helger.',
        'Den här lovskolan ger inget statsbidrag. Det gäller också den frivilliga lovskola under läsåret som huvudmannen får räkna av från den obligatoriska.',
        'Skyldigheten gäller inte sameskolan, specialskolan eller anpassade grundskolan. Där kan huvudmannen anordna lovskola frivilligt.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Elever som har rätt till obligatorisk lovskola kan få frivillig lovskola med bidrag först när den obligatoriska är genomförd: 50 timmar i årskurs 8 och 75 timmar i årskurs 9. Det räcker inte att den är erbjuden eller planerad. Timmarna räknas per läsår, inte per kalenderår, och timmar från årskurs 8 kan inte räknas av i årskurs 9.'
      },
      nyckelord: ['obligatorisk lovskola', 'årskurs 8', 'årskurs 9', '50 timmar', '75 timmar', '25 timmar', 'behörighet', 'yrkesprogram', 'avräkningsbar', 'skollagen', 'tilläggsbelopp']
    },
    {
      ref: '5 §', rubrik: 'Vilka lärare som ska undervisa',
      text: [
        'Huvudmannen ska använda lärare som får anställas i skolväsendet utan tidsbegränsning. Det betyder i regel lärare med legitimation och behörighet för undervisningen.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Skolverket anser att lärare i lovskolan inte ska behöva uppfylla högre krav än i den vanliga undervisningen. Där får huvudmannen ibland göra undantag under en begränsad tid. I undantagsfall kan därför lärare utan legitimation undervisa i lovskolan, till exempel en lärare som redan finns hos huvudmannen eller som anställs på visstid för lovskolan.'
      },
      nyckelord: ['lärare', 'legitimation', 'behörighet', 'undantag', 'visstid', 'personal']
    },
    {
      ref: '6 §', rubrik: 'Hur stort bidraget är',
      text: [
        'Bidraget är högst 1 500 kr per elev och vecka.',
        'Skolverket får besluta om mer än 1 500 kr per elev och vecka om det finns särskilda skäl med hänsyn till antalet elever i verksamheten.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Skolverket använder ett schablonbelopp på 300 kr per elev och dag, alltså per elevdag. Räcker inte pengarna kan Skolverket betala ett lägre belopp, räknat som en procentuell minskning för alla huvudmän. Har ni haft särskilda skäl kan ni begära ersättning för dem när ni begär utbetalning, även om ni inte fick det i ansökan. Ni beskriver då kostnaderna, hur ni räknat fram dem, varför schablonen inte räcker och hur antalet elever gör det dyrare.'
      },
      nyckelord: ['belopp', '300 kr', '1500', 'elevdag', 'per vecka', 'schablon', 'särskilda skäl', 'sänkning', 'anslag']
    },
    {
      ref: 'Anvisning', rubrik: 'Vad pengarna får användas till',
      text: [
        'Det här står i Skolverkets anvisningar, inte i förordningen. Bidraget ska gå till merkostnader, alltså kostnader utöver dem ni redan har. Hyra för lokaler ni redan har räknas till exempel inte.',
        'Bidraget får inte användas till kostnader för den obligatoriska lovskolan.'
      ],
      lista: [
        'Lön för personal som leder undervisningen.',
        'Lön för övrig personal, till exempel för administration och samordning.',
        'Lokaler, teknisk utrustning och undervisningsmaterial.',
        'Måltider.',
        'Ersättning för resor som behövs för att eleven ska kunna delta.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Kan huvudmannen få tillbaka momsen redovisas kostnaderna utan moms, annars med moms. Större inköp som ska skrivas av räknas bara med den del av avskrivningen som gäller bidragsåret.'
      },
      nyckelord: ['kostnader', 'merkostnad', 'lön', 'lokaler', 'hyra', 'material', 'mat', 'måltider', 'resor', 'moms', 'avskrivning']
    },
    {
      ref: '6 a §', rubrik: 'Ansökan',
      text: [
        'En behörig företrädare för huvudmannen ansöker skriftligen hos Skolverket. Uppgifterna lämnas på heder och samvete.',
        'I ansökan ska huvudmannen beskriva hur lovskolan ska bedrivas, vilka mål som sätts upp och hur verksamheten ska följas upp. Skolverket kan begära de uppgifter och handlingar som behövs.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Ansökan görs i Skolverkets e-tjänst för statsbidrag. För 2026 var den öppen 15 januari–16 februari och gällde alla årets lov. Inga pengar betalas ut i samband med ansökan. Den som inte har fått sin ansökan beviljad kan inte begära ut bidrag senare.'
      },
      nyckelord: ['ansökan', 'ansöka', 'e-tjänst', 'företrädare', 'heder och samvete', 'mål', 'uppföljning', 'januari', 'februari']
    },
    {
      ref: '7–7 a §§', rubrik: 'Beslut och utbetalning',
      text: [
        'Skolverket beslutar om bidraget. Pengarna betalas ut först när huvudmannen har lämnat uppgift om att de elever som ansökan gällde har deltagit i undervisningen.',
        'Beslutet kan innehålla särskilda villkor. De står i så fall i beslutet.'
      ],
      lista: [
        'Begäran om utbetalning 1, för jullovet i januari, sportlovet, påsklovet och sommarlovet 2026: 15 augusti–15 september 2026. Beslut i oktober 2026.',
        'Begäran om utbetalning 2, för läslovet 2026: 1–16 november 2026. Beslut i december 2026.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Ni anger antalet elevdagar och antalet enskilda elever för varje lov. Har ni inte haft någon lovskola behöver ni inte höra av er. En elev med giltig frånvaro, till exempel sjukdom, kan räknas om eleven ändå har fullföljt lovskolan, till exempel genom att lämna in en uppgift senare.'
      },
      nyckelord: ['utbetalning', 'rekvisition', 'begäran', 'elevdagar', 'beslut', 'villkor', 'frånvaro', 'sjuk', 'augusti', 'september', 'november']
    },
    {
      ref: '8–9 §§', rubrik: 'Uppföljning',
      text: [
        'Skolverket följer upp hur bidraget har använts. Den som har fått bidraget ska delta i den uppföljning och utvärdering som Skolverket, eller en annan myndighet med uppdrag från regeringen, bestämmer.',
        'Mottagaren ska också lämna de uppgifter som myndigheten begär.'
      ],
      praktik: 'Skolverkets sida för 2026 beskriver ingen separat redovisning efter utbetalningen. Spara ändå elevlistor, scheman och kostnadsunderlag. Alla huvudmän som får statsbidrag kan bli kontrollerade.',
      nyckelord: ['uppföljning', 'redovisning', 'kontroll', 'utvärdering', 'elevlistor', 'scheman']
    },
    {
      ref: '9 a §', rubrik: 'Anmäl förändringar',
      text: [
        'Förändringar som kan påverka rätten till bidrag eller hur stort det blir ska anmälas till Skolverket så snart som möjligt. Det gäller både den som har ansökt och den som har fått bidrag.'
      ],
      nyckelord: ['anmälan', 'förändring', 'ändrade förhållanden']
    },
    {
      ref: '10–12 §§', rubrik: 'Betala tillbaka (återkrav)',
      text: [
        'Bidraget ska betalas tillbaka om det har betalats ut på fel grund eller med för högt belopp, om det inte har använts eller inte har använts till det det var avsett för, eller om kraven på uppföljning eller villkoren i beslutet inte har följts.',
        'Skolverket ska då besluta om återkrav, alltså kräva tillbaka pengarna. Finns det synnerliga skäl – mycket starka skäl – får Skolverket avstå helt eller delvis.',
        'Ränta tas ut från den trettionde dagen efter beslutet om återkrav. Räntan är statens utlåningsränta plus två procentenheter. Även räntan kan efterges vid synnerliga skäl.'
      ],
      nyckelord: ['återkrav', 'återbetalning', 'betala tillbaka', 'ränta', 'synnerliga skäl']
    },
    {
      ref: '12 a §', rubrik: 'Stopp för utbetalning',
      text: ['Skolverket ska helt eller delvis stoppa utbetalningen av ett beviljat bidrag om villkoren inte längre bedöms vara uppfyllda, eller om det finns skäl för återbetalning enligt 10 §. Beslutet gäller direkt.'],
      nyckelord: ['stopp', 'utbetalning', 'hinder']
    },
    {
      ref: '13 §', rubrik: 'Skolverkets föreskrifter',
      text: ['Skolverket får skriva föreskrifter om hur förordningen ska tillämpas. Skolverkets sida för 2026 hänvisar till skollagen och förordningen. Läs alltid också det aktuella bidragsbeslutet.'],
      nyckelord: ['föreskrifter', 'anvisningar', 'bemyndigande']
    },
    {
      ref: '14 §', rubrik: 'Överklagande',
      text: ['Ett beslut enligt 12 a § om att stoppa en utbetalning kan överklagas till allmän förvaltningsdomstol. Andra beslut enligt förordningen får inte överklagas.'],
      nyckelord: ['överklaga', 'domstol', 'förvaltningsrätt']
    },
    {
      ref: 'Övergång', rubrik: 'Övergångsbestämmelser och kommande ändringar',
      text: [
        'Ändringen SFS 2025:658 började gälla den 8 juli 2025. Den äldre lydelsen av 4 § gäller fortfarande för betyg på kurser i gymnasieskolan, för utbildning som påbörjades före höstterminen 2025. För bidrag som gäller tid före ändringen gäller äldre föreskrifter.',
        'Ändringen SFS 2025:1018 tog bort 3 a § från den 1 december 2025.',
        'Skollagen är ändrad inför den tioåriga grundskolan. Ändringarna tillämpas på utbildning efter den 30 juni 2028. Då gäller reglerna om obligatorisk lovskola årskurs 9 och 10 i stället för 8 och 9.'
      ],
      nyckelord: ['övergång', 'äldre regler', '2025:658', '2025:1018', 'kurser', 'tioårig grundskola', '2028']
    }
  ],

  kalkylatorer: [
    {
      id: 'belopp', modul: 'lovskola-belopp',
      flik: 'Räkna på bidrag', eyebrow: 'Elevdagar enligt Skolverket',
      rubrik: 'Vad blir', rubrikKursiv: 'beloppet?',
      ingress: 'Räkna elevdagar för ett lov och se vad de motsvarar i bidrag. Räknaren använder Skolverkets schablon på 300 kr per elevdag. Ni kan sänka beloppet för att se vad som händer om anslaget inte räcker.',
      formel: { rubrik: 'Grundformeln', text: 'Antal elever × dagar per elev = elevdagar. Elevdagar × belopp per elevdag = bidrag.' },
      resultatRubrik: 'Beräknat bidrag för lovet',
      falt: [
        { id: 'elever', typ: 'tal', etikett: 'Antal elever', min: 1, max: 100000, steg: 1, standard: 5,
          hjalp: 'Enskilda elever som går lovskolan. Räkna varje lov för sig.' },
        { id: 'dagar', typ: 'tal', etikett: 'Dagar per elev', min: 1, max: 60, steg: 1, standard: 10,
          hjalp: 'Dagar som varje elev har gått lovskolan. Går eleverna olika många dagar kan ni räkna grupperna var för sig.' },
        { id: 'belopp', typ: 'tal', etikett: 'Belopp per elevdag', min: 0, max: 300, steg: 'any', standard: 300, enhet: 'kr',
          hjalp: '300 kr är Skolverkets schablon. I ansökningsbeslutet 2026 blev nivån ungefär 256 kr per sökt elevdag.' },
        { id: 'ak89', typ: 'kryss', etikett: 'Eleverna går i årskurs 8 eller 9 och har rätt till obligatorisk lovskola.', standard: false },
        { id: 'obligKlar', typ: 'kryss', etikett: 'Den obligatoriska lovskolan är genomförd för de här eleverna.', standard: false,
          visasOm: { falt: 'ak89', ar: true } }
      ],
      exempel: [
        { etikett: 'Läslov: 5 elever i 5 dagar', varden: { elever: 5, dagar: 5 } },
        { etikett: 'Lägre belopp per elevdag', varden: { elever: 40, dagar: 10, belopp: 256.11 } },
        { etikett: 'Årskurs 9 före obligatorisk lovskola', varden: { elever: 12, dagar: 5, ak89: true, obligKlar: false } }
      ],
      resultatNotis: 'Räknaren visar bidraget för genomförda elevdagar. Det slutliga beloppet står i Skolverkets beslut om utbetalning.',
      forbehall: [
        { rubrik: 'Formel', text: 'Elever × dagar × belopp per elevdag, avrundat till hela kronor. Exemplen 5 × 10 = 50 elevdagar och 5 × 5 = 25 elevdagar kommer från Skolverkets sida.' },
        { rubrik: 'Det här prövar räknaren inte', text: 'Om eleverna hör till rätt målgrupp, om lärarna uppfyller kraven, om kostnaderna är merkostnader eller om ni har en beviljad ansökan. Den räknar inte heller med särskilda skäl, som kan ge mer än schablonen.' },
        { rubrik: 'Lägre belopp', text: 'Räcker inte anslaget kan Skolverket sänka beloppet per elevdag med samma procentsats för alla. Hur stor sänkningen blir vet ni först i beslutet.' }
      ],
      tabell: {
        rubrik: 'Belopp att känna till',
        kolumner: ['Vad', 'Belopp', 'Källa'],
        rader: [
          ['Högsta bidrag per elev och vecka', '1 500 kr', 'Förordningen, 6 §'],
          ['Schablon per elevdag', '300 kr', 'Skolverket'],
          ['Särskilda skäl', 'Mer än 1 500 kr per vecka', 'Förordningen, 6 §'],
          ['Anslag 2026', '112 miljoner kr', 'Skolverket']
        ],
        fotnot: '300 kr per dag i fem dagar blir 1 500 kr, alltså förordningens tak för en vecka.'
      }
    },
    {
      id: 'ansokan', modul: 'lovskola-ansokan',
      flik: 'Ansökan och utbetalning', eyebrow: 'Beslut enligt 6–7 §§',
      rubrik: 'Från ansökan', rubrikKursiv: 'till utbetalning.',
      ingress: 'Beslutet om ansökan kan ge mindre än 300 kr per sökt elevdag. Här ser ni vilken nivå ert beslut motsvarar och hur det förhåller sig till de elevdagar ni faktiskt genomför. Räknaren visar en jämförelse, inte vad som kommer att betalas ut.',
      formel: { rubrik: 'Grundformeln', text: 'Nivå per elevdag = beviljat belopp ÷ sökta elevdagar.' },
      resultatRubrik: 'Ansökningsbeslutet per sökt elevdag',
      falt: [
        { id: 'sokta', typ: 'tal', etikett: 'Sökta elevdagar i ansökan', min: 1, max: 10000000, steg: 1, standard: 100,
          hjalp: 'Står i Skolverkets beslutslista och i e-tjänsten.' },
        { id: 'beviljat', typ: 'tal', etikett: 'Beviljat belopp i ansökan', min: 0, max: 1000000000, steg: 1, standard: 25611, enhet: 'kr',
          hjalp: 'Standardvärdena är ett verkligt exempel ur Skolverkets beslutslista för 2026.' },
        { id: 'genomforda', typ: 'tal', etikett: 'Genomförda elevdagar', min: 0, max: 10000000, steg: 1, standard: 90,
          hjalp: 'De elevdagar ni tänker ange när ni begär utbetalning.' }
      ],
      exempel: [
        { etikett: 'Hela landet 2026', varden: { sokta: 437316, beviljat: 112000000, genomforda: 437316 } },
        { etikett: 'Fler elevdagar än sökt', varden: { sokta: 100, beviljat: 25611, genomforda: 120 } },
        { etikett: 'Ansökan avslogs', varden: { sokta: 100, beviljat: 0, genomforda: 50 } }
      ],
      resultatNotis: 'Utbetalningen bestäms i Skolverkets beslut efter er begäran om utbetalning. Siffrorna ovan är en jämförelse, inte ett besked.',
      forbehall: [
        { rubrik: 'Varför under 300 kr?', text: 'För 2026 sökte huvudmännen sammanlagt 437 316 elevdagar. Anslaget var 112 miljoner kr. Det blir ungefär 256 kr per sökt elevdag, och Skolverket beviljade 406 huvudmän delvis. Uträkningen är vår, gjord på Skolverkets beslutslista.' },
        { rubrik: 'Vad som händer vid utbetalningen', text: 'Förordningen säger bara att pengarna betalas ut när huvudmannen har visat att eleverna har deltagit. Skolverket säger inte uttryckligen om utbetalningen följer ansökningsbeslutets nivå eller hela schablonen. I besluten om utbetalning för 2025 var nästan alla belopp jämna multiplar av 300 kr. Det tyder på att hela schablonen betalades ut det året. Det är vår iakttagelse, ingen regel.' },
        { rubrik: 'Det här prövar räknaren inte', text: 'Om elevdagarna ger rätt till bidrag, om ni har särskilda skäl eller om pengarna räcker ett visst år.' }
      ]
    }
  ],

  process: [
    { rubrik: 'Planera och ansök', text: 'Bestäm vilka elever som behöver lovskola och under vilka lov. Beskriv upplägg, mål och uppföljning och ansök i e-tjänsten i januari–februari.', ref: '4–6 a §§' },
    { rubrik: 'Obligatorisk lovskola först', text: 'För elever i årskurs 8–9 med rätt till obligatorisk lovskola: genomför den först. Först därefter kan frivillig lovskola för dem ge bidrag.', ref: '4 § · skollagen' },
    { rubrik: 'Genomför och för elevlistor', text: 'För elevlistor per lov med namn, skolenhet, årskurs, dagar och ämnen. Räkna elevdagar och antal enskilda elever för varje lov.', ref: '4 §' },
    { rubrik: 'Begär utbetalning', text: 'Ange elevdagar och elever i e-tjänsten: i augusti–september för jullovet i januari, sportlovet, påsklovet och sommarlovet, och i november för läslovet.', ref: '6–7 §§' },
    { rubrik: 'Spara underlag och anmäl', text: 'Spara elevlistor, scheman och kostnadsunderlag. Anmäl förändringar så snart som möjligt. Felaktigt utbetalt bidrag kan krävas tillbaka.', ref: '8–12 a §§' }
  ],

  underlagRubrik: 'Underlag att ha till hands',
  underlagIngress: 'Använd listan när ni förbereder arbetet. Markeringarna sparas inte – de försvinner när ni stänger sidan.',
  underlag: [
    'Beslutet om ansökan, med beviljat belopp och antal sökta elevdagar.',
    'Beskrivning av upplägg, mål och uppföljning för lovskolan.',
    'Elevlistor per lov: fullständigt namn, skolenhet, årskurs, dagar och ämnen.',
    'Scheman för lovskolan.',
    'Underlag som visar att den obligatoriska lovskolan är genomförd för elever i årskurs 8–9 som har rätt till den.',
    'Uppgifter om lärarnas legitimation och behörighet, och skäl om ni gör undantag.',
    'Kostnadsunderlag som visar merkostnader, och beskrivning av särskilda skäl om ni begär mer än schablonen.',
    'Vem som har behörighet för bidraget i e-tjänsten.'
  ],

  kallor: [
    {
      titel: 'Förordning (2014:47) · Sveriges riksdag',
      url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-201447-om-statsbidrag-for_sfs-2014-47/',
      beskrivning: 'Källan för villkor, belopp per vecka, ansökan, utbetalning och återkrav. Paragrafhänvisningarna i guiden gäller den här förordningen.'
    },
    {
      titel: 'Statsbidrag för lovskola 2026 · Skolverket',
      url: 'https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-lovskola-2026',
      beskrivning: 'Datum, schablonen på 300 kr per elevdag, giltiga kostnader, elevlistor, lärarkrav och beslutslistan för ansökan 2026.'
    },
    {
      titel: 'Statsbidrag för lovskola 2025 · Skolverket',
      url: 'https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-lovskola-2025',
      beskrivning: 'Besluten om ansökan och utbetalning för 2025, med beslutslistor per huvudman.'
    },
    {
      titel: 'Lovskola · Skolverket',
      url: 'https://www.skolverket.se/styrning-och-ansvar/regler-och-ansvar/ansvar-i-skolfragor/lovskola',
      beskrivning: 'Reglerna om obligatorisk lovskola i skollagen: vilka elever, hur många timmar och vilken lovskola som inte ger statsbidrag.'
    },
    {
      titel: 'Skollag (2010:800) · Sveriges riksdag',
      url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/skollag-2010800_sfs-2010-800/',
      beskrivning: 'Bestämmelserna om lovskola finns i 10 kap. 23 a–23 e §§.'
    }
  ],

  forbehall: 'Guiden sammanfattar reglerna och visar hur beräkningarna går till. Räknarna kontrollerar inte rätten till bidrag, vilka elever som omfattas, lärarnas behörighet eller hur mycket pengar som finns ett visst år. Använd Skolverkets aktuella anvisningar och beslut när ni ansöker och begär utbetalning. För äldre perioder kan äldre regler gälla.'
};
