/* Fördjupning: Statsbidrag för judiska studier – förordning (2011:398).
 * Innehållet är stämt mot förordningen (ändrad t.o.m. SFS 2026:204, som införde statsbidragsreglerna 13–25 §§ den 7 april 2026),
 * Skolverkets föreskrifter SKOLFS 2011:153 i lydelse enligt SKOLFS 2026:69 (gäller från 15 oktober 2026), Skolverkets sida
 * för bidraget 2026/27 (senast uppdaterad 5 juni 2026) och sidan Anordna judiska studier i grundskolan (21 september 2026).
 * Ingen räknare: beloppet per elev räknas fram ur de merkostnader som Skolverket godkänner, och det finns inget fast belopp.
 * Schema: se FORDJUPNING.md. Klartext, inte citat – paragrafhänvisningarna gäller förordningen. */
window.SB_FORDJUPNING = window.SB_FORDJUPNING || {};
window.SB_FORDJUPNING['judiska-studier'] = {
  id: 'judiska-studier',
  rubrik: 'Judiska studier',
  rubrikKursiv: 'i klartext.',
  ingress: 'Skolor som har Skolverkets tillstånd att ge särskild utbildning i judiska studier i årskurs 7–9 kan få bidrag för sina merkostnader. Här står reglerna för både tillståndet och bidraget på vanlig svenska.',
  kontrollerad: '2026-10-01',
  forordning: {
    sfs: '2011:398',
    namn: 'Förordning (2011:398) om särskild utbildning med judiska studier i grundskolan och statsbidrag för sådan utbildning',
    lydelse: 'ändrad t.o.m. SFS 2026:204',
    url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-2011398-om-sarskild-utbildning-med_sfs-2011-398/'
  },

  snabbfaktaRubrik: 'Tre saker att känna till först',
  snabbfakta: [
    { rubrik: 'Tillstånd först', text: 'Bara den som har Skolverkets tillstånd att anordna utbildningen kan få bidraget. Det gäller kommunala och fristående skolor på samma sätt.' },
    { rubrik: 'Merkostnader, inte hela utbildningen', text: 'Bidraget täcker det som den särskilda utbildningen kostar extra, till exempel koshermat och säkerhetshöjande åtgärder.' },
    { rubrik: 'Belopp per elev den 15 oktober', text: 'Skolverket delar godkända merkostnader med antalet elever. För läsåret 2026/27 finns 3 miljoner kr att fördela.' }
  ],
  snabbfaktaNot: 'Ny tidsgräns för tillstånd: från den 15 oktober 2026 ska ansökan om tillstånd vara inne senast den 31 oktober läsåret innan utbildningen ska starta.',

  begreppRubrik: 'Ord som återkommer',
  begrepp: [
    { term: 'Huvudman', forklaring: 'Den som driver skolan och ansvarar för utbildningen, till exempel en kommun eller en fristående skola.' },
    { term: 'Särskild utbildning', forklaring: 'Grundskolans årskurs 7–9 med ämnet judiska studier och hebreiska och jiddisch som språkval.' },
    { term: 'Tillstånd', forklaring: 'Skolverkets beslut om att en viss skolenhet får anordna utbildningen, för hur många elever och hur länge.' },
    { term: 'Merkostnad', forklaring: 'Det som den särskilda utbildningen kostar utöver vanlig grundskola.' },
    { term: 'Riksrekrytering', forklaring: 'Att elever från hela landet kan söka till utbildningen.' }
  ],

  sektioner: {
    regler: {
      rubrik: 'Från paragraf', rubrikKursiv: 'till praktik.',
      ingress: 'Förordningen har två delar: först reglerna för själva utbildningen och tillståndet, sedan statsbidraget från 13 §. Sök på till exempel ”kosher”, ”tillstånd” eller ”återkrav”.'
    },
    praktik: {
      rubrik: 'Så används', rubrikKursiv: 'reglerna.',
      ingress: 'Ordningen är viktig: tillstånd först, sedan ansökan om bidrag varje läsår. Räkna eleverna den 15 oktober och motivera varför kostnaderna är extra.'
    }
  },

  paragrafer: [
    {
      ref: '1–3 §§', rubrik: 'Vad utbildningen är och vem som får anordna den',
      text: [
        'Förordningen innehåller regler om en särskild utbildning i grundskolan med judiska studier, och om statsbidrag för den.',
        'En huvudman för en skolenhet med grundskola får anordna utbildningen i årskurs 7–9 om Skolverket ger tillstånd. Ett tillstånd gäller i högst sex år.',
        'Syftet är att elever som tillhör den nationella minoriteten judar ska kunna fördjupa sina kunskaper om minoritetens kultur, historia, traditioner och religion. Utbildningen ska stå öppen även för andra elever.'
      ],
      praktik: {
        rubrik: 'Årskurs 8–10 från 2028',
        text: 'Enligt Skolverkets ändrade föreskrifter (SKOLFS 2026:69) gäller ett tillstånd för årskurs 7–9 som är giltigt före den 1 juli 2028 i stället för årskurs 8–10 från och med den 1 juli 2028.'
      },
      nyckelord: ['huvudman', 'tillstånd', 'sex år', 'årskurs 7-9', 'nationell minoritet', 'judar', 'syfte', 'kommunal', 'fristående', 'årskurs 8-10']
    },
    {
      ref: '4–5 §§', rubrik: 'Elever från hela landet och urval',
      text: [
        'När en kommun anordnar utbildningen ska elever från hela landet tas emot i mån av plats.',
        'Om platserna inte räcker ska urval göras på grunder som Skolverket godkänner. Skolverket ska fråga Skolinspektionen innan grunderna godkänns.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Om platserna inte räcker går sökande från kommunen där utbildningen finns, eller från en kommun med samverkansavtal, före andra. Det gäller bara offentliga huvudmän, eftersom fristående skolor tar emot elever från hela landet. Därefter har den som anmält sig tidigt företräde.'
      },
      nyckelord: ['riksrekrytering', 'hela landet', 'urval', 'plats', 'samverkansavtal', 'anmälan']
    },
    {
      ref: '6–9 §§', rubrik: 'Innehåll, språkval och lärare',
      text: [
        'Utöver grundskolans vanliga ämnen ska ämnet judiska studier ingå. Skolverket får bestämma betygskriterier för ämnet.',
        'Ämnet ska omfatta 240 timmar av den tid som timplanen ger till skolans val.',
        'Eleverna ska erbjudas hebreiska och jiddisch som språkval.',
        'Den som undervisar i judiska studier ska ha en lärarutbildning för historia, religionskunskap eller samhällskunskap i årskurs 7–9.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Elever som också vill läsa till exempel franska, spanska eller tyska som språkval kan göra det. Eleverna får betyg i judiska studier.'
      },
      nyckelord: ['judiska studier', 'ämne', '240 timmar', 'skolans val', 'hebreiska', 'jiddisch', 'språkval', 'lärare', 'behörighet', 'betyg']
    },
    {
      ref: '10–12 §§', rubrik: 'Ansökan om tillstånd',
      text: [
        'Ansökan om att få anordna utbildningen lämnas till Skolverket.',
        'Skolverket ska godkänna ansökan om utbildningen uppfyller villkoren i förordningen och kraven på grundskoleutbildning i övrigt, och om den bedöms bidra till syftet.',
        'Beslutet ska ange vid vilken skolenhet utbildningen får finnas, hur många elever den får omfatta och hur länge tillståndet gäller.'
      ],
      praktik: {
        rubrik: 'Ny tidsgräns',
        text: 'Enligt Skolverkets föreskrifter ska ansökan vara inne senast den 31 oktober läsåret innan utbildningen ska starta. Det gäller från den 15 oktober 2026 (SKOLFS 2026:69). Tidigare var gränsen den 15 december, och för läsåret 2026/27 skulle ansökan ha kommit in senast den 15 december 2025. Ansökan görs på Skolverkets blankett. Skolverket anger också att tillståndet måste vara beviljat innan ansökan om statsbidrag stänger.'
      },
      nyckelord: ['ansökan', 'tillstånd', '31 oktober', '15 december', 'blankett', 'skolenhet', 'antal elever', 'skolfs']
    },
    {
      ref: '13 §', rubrik: 'Vem som kan få bidrag och till vad',
      text: [
        'Statsbidrag kan ges till varje huvudman som har Skolverkets tillstånd att anordna utbildningen i årskurs 7–9.',
        'Bidraget får gå till de merkostnader huvudmannen har för den särskilda utbildningen, till exempel koshermat och säkerhetshöjande åtgärder.',
        'Bidrag ges för ett bidragsår i taget och bara i den mån det finns pengar. Bidragsåret börjar den 1 juli.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Kommunala, fristående, statliga och övriga huvudmän kan söka – villkoret är tillståndet. Bidraget gäller merkostnader under läsåret, för 2026/27 alltså 1 juli 2026–30 juni 2027. Köper ni något som kostar mer än ett halvt prisbasbelopp och håller längre än tre år ska kostnaden normalt skrivas av. Då får bara årets avskrivning räknas.'
      },
      nyckelord: ['merkostnad', 'kosher', 'koshermat', 'säkerhet', 'säkerhetshöjande', 'bidragsår', '1 juli', 'avskrivning']
    },
    {
      ref: '14–16 §§', rubrik: 'När bidrag inte ges',
      text: ['Inget bidrag ges till en huvudman som:'],
      lista: [
        'är i likvidation eller konkurs,',
        'har skulder för skatter eller avgifter, eller andra skulder, hos Kronofogden som handläggs som allmänt mål, eller',
        'har ett återkrav från Skolverket som inte är betalt i tid.'
      ],
      praktik: {
        rubrik: 'Fler hinder',
        text: 'Inget bidrag ges heller om Skolinspektionen har återkallat huvudmannens godkännande eller beslutat om verksamhetsförbud för verksamhet som bidraget gäller. Har beslutet upphävts kan bidrag ges. Kostnader som redan har fått något annat statligt bidrag kan inte få bidrag igen.'
      },
      nyckelord: ['konkurs', 'likvidation', 'kronofogden', 'skulder', 'återkrav', 'verksamhetsförbud', 'godkännande', 'dubbel finansiering']
    },
    {
      ref: '17 §', rubrik: 'Ansökan om bidrag',
      text: [
        'En behörig företrädare för huvudmannen ansöker skriftligen hos Skolverket.',
        'Uppgifterna lämnas på heder och samvete. Skolverket kan begära de uppgifter och handlingar som behövs för att pröva ansökan.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'För läsåret 2026/27 är ansökan öppen 1 oktober–2 november 2026 i e-tjänsten för statsbidrag. Ni behöver antalet elever i utbildningen den 15 oktober 2026, den beräknade merkostnaden och en motivering till varför kostnaden är extra jämfört med övrig verksamhet.'
      },
      nyckelord: ['ansökan', 'e-tjänst', 'heder och samvete', 'motivering', 'företrädare']
    },
    {
      ref: '18 §', rubrik: 'Belopp per elev och beslut',
      text: [
        'Bidraget ges med ett belopp för varje elev som deltar i utbildningen den 15 oktober under bidragsåret.',
        'Beslutet får förenas med villkor. Villkoren står i så fall i beslutet.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Skolverket delar de godkända merkostnaderna med antalet elever och får på så sätt fram beloppet per elev. Hur stora merkostnader som kan godkännas styrs av hur mycket pengar som finns. Normalt finns 2 miljoner kr per läsår. För 2026/27 finns 3 miljoner kr. Skolverket planerar att besluta senast i december 2026 och betalar ut senast i december 2026 och i maj 2027.'
      },
      nyckelord: ['belopp', 'per elev', '15 oktober', '3 miljoner', '2 miljoner', 'beslut', 'utbetalning', 'villkor']
    },
    {
      ref: '19–20 §§', rubrik: 'Uppföljning och anmälan av förändringar',
      text: [
        'Skolverket följer upp hur bidraget har använts. Den som har fått bidrag ska delta i den uppföljning och utvärdering som Skolverket, eller en annan myndighet med uppdrag från regeringen, bestämmer, och lämna de uppgifter som begärs.',
        'Den som har ansökt om eller fått bidrag ska så snart som möjligt anmäla förändringar som kan påverka rätten till bidraget eller hur stort det är.'
      ],
      praktik: 'Skolverkets sida beskriver ingen särskild redovisning för 2026/27, men alla som får statsbidrag kan bli kontrollerade. Spara underlag för merkostnaderna och elevantalet.',
      nyckelord: ['uppföljning', 'redovisning', 'kontroll', 'anmälan', 'förändring']
    },
    {
      ref: '21–24 §§', rubrik: 'Betala tillbaka och stopp för utbetalning',
      text: ['Den som har fått bidrag ska betala tillbaka det om något av följande gäller:'],
      lista: [
        'Bidraget har lämnats på felaktig grund eller med för högt belopp.',
        'Bidraget har inte använts, helt eller delvis, eller har använts till något annat.',
        'Mottagaren har inte deltagit i uppföljningen eller lämnat de uppgifter som begärts.',
        'Villkoren i beslutet har inte följts.'
      ],
      praktik: {
        rubrik: 'Återkrav, ränta och stopp',
        text: 'Skolverket ska då kräva tillbaka pengarna helt eller delvis, men får avstå om det finns särskilda skäl. Ränta tas ut från den trettionde dagen efter beslutet: statens utlåningsränta plus två procentenheter. Skolverket ska också stoppa en beviljad utbetalning om villkoren inte längre är uppfyllda eller om det finns skäl för återbetalning. Ett sådant beslut gäller direkt.'
      },
      nyckelord: ['återkrav', 'återbetalning', 'ränta', 'särskilda skäl', 'stopp', 'utbetalning']
    },
    {
      ref: '25–26 §§', rubrik: 'Skolverkets föreskrifter och överklagande',
      text: [
        'Skolverket får skriva mer detaljerade regler, så kallade föreskrifter, om bidragets storlek, om hur det räknas ut och fördelas och om hur förordningen ska tillämpas.',
        'Beslut om återkrav (22 §) och om stopp för utbetalning (24 §) kan överklagas till allmän förvaltningsdomstol. Andra beslut enligt förordningen, till exempel om tillstånd eller om ansökan om bidrag, får inte överklagas.'
      ],
      praktik: 'Skolverkets bidragssida hänvisar bara till förordningen. Skolverkets föreskrifter om ansökan om tillstånd (SKOLFS 2011:153) har ändrats med stöd av 25 § genom SKOLFS 2026:69.',
      nyckelord: ['föreskrifter', 'skolfs', 'överklaga', 'domstol']
    },
    {
      ref: 'Övergång', rubrik: 'Nya regler 2026',
      text: [
        'Reglerna om statsbidrag (13–25 §§) fördes in i förordningen genom SFS 2026:204, som började gälla den 7 april 2026. Samtidigt fick förordningen sitt nya namn.',
        'Ändringen innehåller inga övergångsregler. Tidsgränsen för ansökan om tillstånd står inte i förordningen utan i Skolverkets föreskrifter (SKOLFS 2011:153).'
      ],
      nyckelord: ['2026:204', 'ny förordning', 'ikraftträdande', 'ändring']
    }
  ],

  process: [
    { rubrik: 'Skaffa tillstånd', text: 'Ansök hos Skolverket på blanketten. Från den 15 oktober 2026 ska ansökan vara inne senast den 31 oktober läsåret innan start. Tillståndet anger skolenhet, antal elever och hur länge det gäller.', ref: '10–12 §§' },
    { rubrik: 'Räkna elever och merkostnader', text: 'Räkna eleverna i utbildningen den 15 oktober. Beräkna merkostnaden och skriv en motivering till varför kostnaderna är extra.', ref: '13 §, 18 §' },
    { rubrik: 'Ansök om bidrag', text: 'En behörig företrädare ansöker i e-tjänsten. För 2026/27 är ansökan öppen 1 oktober–2 november 2026.', ref: '17 §' },
    { rubrik: 'Beslut och utbetalning', text: 'Skolverket planerar att besluta senast i december 2026 och betalar ut senast i december 2026 och i maj 2027.', ref: '18 §' },
    { rubrik: 'Använd pengarna och följ upp', text: 'Använd bidraget till merkostnaderna under läsåret. Spara underlag och anmäl förändringar så snart som möjligt.', ref: '19–24 §§' }
  ],

  underlagRubrik: 'Underlag att ha till hands',
  underlagIngress: 'Använd listan när ni förbereder ansökan. Markeringarna sparas inte – de försvinner när ni stänger sidan.',
  underlag: [
    'Skolverkets beslut om tillstånd, med skolenhet, antal elever och giltighetstid.',
    'Antal elever i utbildningen den 15 oktober.',
    'Beräkning av merkostnaderna, uppdelad på till exempel koshermat, säkerhet, lärare och läromedel.',
    'Motivering till varför kostnaderna är extra jämfört med övrig verksamhet.',
    'Underlag för avskrivningar om ni köper dyrare utrustning.',
    'Vem som har behörighet i Skolverkets e-tjänst för statsbidrag.'
  ],

  kallor: [
    {
      titel: 'Förordning (2011:398) · Sveriges riksdag',
      url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-2011398-om-sarskild-utbildning-med_sfs-2011-398/',
      beskrivning: 'Källan för utbildningen, tillståndet och statsbidraget. Paragrafhänvisningarna i guiden gäller den här förordningen.'
    },
    {
      titel: 'Statsbidrag för judiska studier 2026/27 · Skolverket',
      url: 'https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-judiska-studier-2026-27',
      beskrivning: 'Ansökan 1 oktober–2 november 2026, hur beloppet per elev räknas och hur mycket pengar som finns.'
    },
    {
      titel: 'Anordna judiska studier i grundskolan · Skolverket',
      url: 'https://www.skolverket.se/styrning-och-ansvar/anordna-utbildning/anordna-utbildning-pa-grundskoleniva/anordna-judiska-studier-i-grundskolan',
      beskrivning: 'Om tillståndet, urval, ansökningsblanketten och tidsgränsen den 31 oktober.'
    },
    {
      titel: 'SKOLFS 2026:69 · Skolverkets författningssamling',
      url: 'https://skolfs.skolverket.se/api/document/ANDRINGSFORFATTNING/2026:69/pdf',
      beskrivning: 'Ändringen i Skolverkets föreskrifter (SKOLFS 2011:153) om ny tidsgräns för ansökan om tillstånd och om årskurs 8–10 från 2028.'
    }
  ],

  forbehall: 'Guiden sammanfattar reglerna. Det finns ingen räknare, eftersom beloppet per elev beror på vilka merkostnader Skolverket godkänner och på hur mycket pengar som finns. Belopp och datum för 2026/27 kan ändras till nästa läsår. Använd Skolverkets aktuella anvisningar och ert beslut.'
};
