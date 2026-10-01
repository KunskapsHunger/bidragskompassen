/* Fördjupning: Statsbidrag för inköp av läroböcker och lärarhandledningar – förordning (2023:86).
 * Innehållet är stämt mot förordningen (ändrad t.o.m. SFS 2025:88), skollagen 1 kap. 3 § (definitionen av lärobok)
 * och Skolverkets sidor för 2026 och 2025 (båda senast uppdaterade 22 juni 2026). Schema: se FORDJUPNING.md.
 * Klartext, inte citat – paragrafhänvisningarna gäller förordningen. */
window.SB_FORDJUPNING = window.SB_FORDJUPNING || {};
window.SB_FORDJUPNING['larobocker-lararhandledningar'] = {
  id: 'larobocker-lararhandledningar',
  rubrik: 'Läroböcker och lärarhandledningar',
  rubrikKursiv: 'i klartext.',
  ingress: 'Vilka böcker räknas, hur stor del måste ni betala själva och hur mycket kan ni begära ut? Här står reglerna på vanlig svenska. Ni kan också räkna på er egen finansiering och på beloppet att begära ut.',
  kontrollerad: '2026-10-01',
  forordning: {
    sfs: '2023:86',
    namn: 'Förordning (2023:86) om statsbidrag för inköp av läroböcker och lärarhandledningar',
    lydelse: 'ändrad t.o.m. SFS 2025:88',
    url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-202386-om-statsbidrag-for-inkop-av_sfs-2023-86/'
  },

  snabbfaktaRubrik: 'Tre saker att veta först',
  snabbfakta: [
    { rubrik: 'Ingen ansökan', text: 'Alla huvudmän som kan få bidraget får en bidragsram. Ni begär ut hela eller delar av den i Skolverkets e-tjänst – för 2026 under 1 september–1 oktober.' },
    { rubrik: 'Ni betalar först er vanliga nivå', text: 'Ni ska själva köpa läroböcker för lika mycket per elev som ni i snitt har gjort de tre senaste åren. Bidraget får bara täcka det ni köper utöver den nivån.' },
    { rubrik: 'Bara tryckta läroböcker', text: 'En lärobok är tryckt, med eller utan digitala delar. Rent digitala läromedel, skönlitteratur, facklitteratur och böcker till skolbiblioteket ingår inte.' }
  ],
  snabbfaktaNot: 'Ramen är ett tak. Köper ni inte mer än er vanliga nivå har ni ingen rätt till bidraget, hur stor ramen än är.',

  begreppRubrik: 'Ord som återkommer',
  begrepp: [
    { term: 'Huvudman', forklaring: 'Den som driver skolan och ansvarar för utbildningen: en kommun, en region, staten eller en fristående huvudman.' },
    { term: 'Lärobok', forklaring: 'Enligt skollagen ett tryckt läromedel, med eller utan digitala komponenter. Ett läromedel ska vara avsett för undervisningen, stämma med kurs- eller ämnesplanen och läroplanen och vara utgivet av ett professionellt förlag.' },
    { term: 'Lärarhandledning', forklaring: 'En handledning för läraren som är gjord för att fungera tillsammans med ett läromedel och stödja planering och genomförande av undervisningen.' },
    { term: 'Bidragsram', forklaring: 'Det högsta belopp som huvudmannen kan begära ut för året. Skolverket bestämmer ramen utifrån antalet elever.' },
    { term: 'Egen finansiering', forklaring: 'Det ni själva ska betala för läroböcker och lärarhandledningar under året: er genomsnittliga kostnad per elev de tre senaste åren gånger årets elevantal.' },
    { term: 'Rekvisition', forklaring: 'När huvudmannen begär att få bidraget utbetalt. Skolverket kallar det begäran om utbetalning.' }
  ],

  sektioner: {
    regler: {
      rubrik: 'Från paragraf', rubrikKursiv: 'till praktik.',
      ingress: 'Rubrikerna följer förordningen. Öppna det avsnitt ni behöver, eller sök på till exempel ”övningsbok”, ”snittkostnad” eller ”återkrav”. Varje avsnitt visar vilken paragraf det gäller.'
    },
    praktik: {
      rubrik: 'Så används', rubrikKursiv: 'reglerna.',
      ingress: 'Bidraget följer kalenderåret. Räkna ut er egen nivå tidigt, köp böckerna under året och spara underlag som visar både era tidigare kostnader och årets inköp.'
    }
  },

  paragrafer: [
    {
      ref: '1 §', rubrik: 'Vad bidraget är till för',
      text: [
        'Bidraget går till huvudmän för inköp av läroböcker och lärarhandledningar.',
        'Syftet är att eleverna ska få bättre tillgång till läroböcker och lärarna bättre tillgång till lärarhandledningar.'
      ],
      nyckelord: ['syfte', 'läroböcker', 'lärarhandledningar', 'tillgång']
    },
    {
      ref: '2 §', rubrik: 'Bidragsåret är kalenderåret',
      text: [
        'Bidraget ges för ett kalenderår i taget och bara i den mån det finns pengar. Ett kalenderår kallas här bidragsår.',
        'Att ni får en ram ett år är alltså inget löfte om bidrag nästa år.'
      ],
      praktik: 'För 2026 fanns 555 miljoner kr att fördela. För 2025 var det 755 miljoner kr. Skolverket har ännu ingen sida för 2027.',
      nyckelord: ['bidragsår', 'kalenderår', '555 miljoner', '755 miljoner', '2027']
    },
    {
      ref: '3 §', rubrik: 'Vem som kan få bidrag',
      text: [
        'Bidraget kan gå till huvudmän för förskoleklass, grundskola, anpassad grundskola, specialskola och sameskola.',
        'Skolverket anger att det gäller kommunala, statliga, regionala och fristående huvudmän.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Bara de skolformer som står i förordningen omfattas. Bidraget kan till exempel inte användas för introduktionsprogrammen i gymnasieskolan.'
      },
      nyckelord: ['huvudman', 'skolformer', 'förskoleklass', 'grundskola', 'anpassad grundskola', 'specialskola', 'sameskola', 'fristående', 'introduktionsprogram', 'gymnasieskola']
    },
    {
      ref: '4 §', rubrik: 'Vad pengarna får gå till',
      text: [
        'Bidraget får gå till inköp av läroböcker och av lärarhandledningar som är gjorda för att fungera tillsammans med ett läromedel och stödja planering och genomförande av undervisningen.',
        'Böckerna ska köpas in under bidragsåret för att ge rätt till bidrag.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'En lärobok är enligt skollagen ett tryckt läromedel, med eller utan digitala delar. Rent digitala läromedel ingår därför inte. Läroboken ska vara avsedd för undervisningen och utgiven av ett professionellt förlag. Övningsböcker och facit kan godtas om de hör direkt till en lärobok som används i undervisningen. Lärarhandledningen ska höra till en lärobok som används. Skönlitteratur, facklitteratur och böcker till skolbiblioteket ingår inte – för dem kan bidraget för inköp av litteratur passa. Spel, pussel och andra lärverktyg ingår inte heller. För 2026 ska böckerna köpas 1 januari–31 december 2026. Skolverket tar inte ställning till enskilda titlar, men ni ska kunna motivera era inköp vid en kontroll.'
      },
      nyckelord: ['lärobok', 'tryckt', 'digitala läromedel', 'övningsbok', 'facit', 'lärarhandledning', 'förlag', 'skönlitteratur', 'facklitteratur', 'skolbibliotek', 'spel', 'pussel', 'lärverktyg', 'bidragsår']
    },
    {
      ref: '4 a–4 b §§', rubrik: 'När huvudmannen inte kan få bidrag',
      text: [
        'Huvudmannen får inte vara i likvidation eller konkurs. Den får inte heller ha skatte- eller avgiftsskulder eller andra skulder som har lämnats till Kronofogden som allmänt mål, eller en förfallen skuld till Skolverket för ett tidigare återkrav.',
        'Har Skolinspektionen återkallat huvudmannens godkännande för en verksamhet som bidraget gäller, ges inget bidrag. Detsamma gäller om Skolinspektionen har beslutat om verksamhetsförbud, alltså förbjudit huvudmannen att fortsätta driva verksamheten. Har beslutet upphävts kan bidrag ges.'
      ],
      nyckelord: ['konkurs', 'likvidation', 'kronofogden', 'skatteskulder', 'återkrav', 'återkallat godkännande', 'verksamhetsförbud', 'skolinspektionen']
    },
    {
      ref: '5 §', rubrik: 'En kostnad – ett statsbidrag',
      text: ['Bidraget får inte gå till sådant som redan har fått statsbidrag på annat sätt.'],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Läroböcker som ni betalar med till exempel bidraget för stärkt kunskapsutveckling kan inte också betalas med det här bidraget. Håll isär fakturorna.'
      },
      nyckelord: ['dubbelfinansiering', 'annat statsbidrag', 'stärkt kunskapsutveckling', 'samma kostnad']
    },
    {
      ref: '6 §', rubrik: 'Egen finansiering – bidraget ska ge fler böcker',
      text: [
        'För att få bidrag ska huvudmannen under bidragsåret själv betala läroböcker och lärarhandledningar för lika mycket per elev som den i genomsnitt har betalat de senaste tre åren.',
        'Har huvudmannen haft elever kortare tid än tre läsår före bidragsåret räknas snittet på det eller de läsår då den har haft elever.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Bidraget ska inte leda till besparingar utan till fler inköp. Dela era totala kostnader 2023–2025 med det totala antalet elever 2023–2025. Det ger snittkostnaden per elev. Gånger elevantalet 2026 blir det er egen finansiering. Exempel: 1 500 000 kr ÷ 3 000 elever = 500 kr per elev. Med 1 200 elever 2026 ska ni själva betala 600 000 kr, och ni kan bara begära bidrag för kostnader över det. Räkna med alla huvudmannens skolor, inte bara de som ska få böckerna. Ta inte med skönlitteratur, facklitteratur, skolbiblioteksböcker eller böcker som köpts med statsbidrag, till exempel 2025 års bidrag för läroböcker eller stärkt kunskapsutveckling. Elevantalet 2026 finns det ingen regel för. Ni beräknar det själva och ska kunna visa hur. För tidigare år föreslår Skolverket elevstatistik från SCB. Snittkostnaden påverkar inte er bidragsram.'
      },
      nyckelord: ['egen finansiering', 'snittkostnad', 'genomsnittlig kostnad', 'per elev', 'tre år', '2023-2025', 'elevantal', 'scb', 'besparing', 'ökat inköp', 'ny huvudman']
    },
    {
      ref: '7–9 §§', rubrik: 'Bidragsramen',
      text: [
        'Skolverket bestämmer varje år en bidragsram för varje huvudman.',
        'Ramen är lika stor andel av pengarna som huvudmannens elever är av alla elever i de här skolformerna i hela landet.',
        'Elevantalet räknas i första hand som ett genomsnitt av de tre läsåren närmast före bidragsåret. Har huvudmannen haft elever kortare tid räknas de läsår den har haft elever. Hade huvudmannen inga elever läsåret närmast före bidragsåret blir det ingen ram.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Har en huvudman 5 procent av landets elever får den 5 procent av pengarna. Skolverket använder elevstatistik som huvudmännen lämnar till SCB. Ramarna för 2026 bygger på snittet för läsåren 2022/23, 2023/24 och 2024/25. De beslutades i januari 2026 och står i en beslutsbilaga på Skolverkets sida. En huvudman som inte har lämnat statistik till SCB eller saknar tillstånd får ingen ram. Vid överlåtelse eller övertagande av en verksamhet kan ramen ibland omprövas – kontakta då Skolverket.'
      },
      nyckelord: ['bidragsram', 'ram', 'elevantal', 'andel', 'scb', 'statistik', 'läsår', 'beslutsbilaga', 'övertagande', 'överlåtelse']
    },
    {
      ref: '10–11 §§', rubrik: 'Begära ut pengarna (rekvisition)',
      text: [
        'En behörig företrädare för huvudmannen begär ut bidraget hos Skolverket. I begäran anger företrädaren huvudmannens genomsnittliga kostnad per elev för läroböcker och lärarhandledningar de senaste tre åren, eller de år huvudmannen har haft elever.',
        'Företrädaren intygar också på heder och samvete att villkoren i 4 a–5 §§ är uppfyllda och att villkoren om inköp under året och egen finansiering (4 och 6 §§) kommer att uppfyllas.',
        'Huvudmannen ska lämna de uppgifter och handlingar som Skolverket behöver för att pröva begäran. Skolverket beslutar och betalar ut bidraget en eller flera gånger per år. Beslutet kan innehålla villkor. De står i så fall i beslutet.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Ni ansöker inte – ni begär ut hela eller delar av ramen i e-tjänsten för statsbidrag. För 2026 är den öppen 1 september–1 oktober 2026. Ni anger snittkostnaden per elev, elevantalet 2026 och hur mycket av ramen ni vill begära ut. Ni kan begära bidrag både för kostnader ni redan har haft och för kostnader ni väntas ha under 2026. Kan ni få ersättning för momsen ska kostnaderna anges utan moms, annars med moms. För 2025 var begäran öppen 1 september–8 oktober och beslutet kom i december 2025.'
      },
      nyckelord: ['rekvisition', 'begäran om utbetalning', 'e-tjänst', 'intyga', 'heder och samvete', 'företrädare', 'moms', '1 oktober', 'utbetalning', 'beslut']
    },
    {
      ref: '12 §', rubrik: 'Uppföljning',
      text: ['Skolverket följer upp hur bidraget har använts. Den som har fått bidrag ska delta i den uppföljning och utvärdering som Skolverket, eller en annan myndighet med uppdrag från regeringen, bestämmer. Huvudmannen ska också lämna de uppgifter som begärs.'],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Det finns ingen vanlig redovisning för bidraget. I stället kan Skolverket göra kontroller och stickprov hos alla som har fått pengar. Spara därför fakturor och er beräkning av snittkostnad och elevantal.'
      },
      nyckelord: ['uppföljning', 'redovisning', 'kontroll', 'stickprov', 'fakturor', 'underlag']
    },
    {
      ref: '13 §', rubrik: 'Anmäl förändringar',
      text: ['Den som har begärt eller fått bidrag ska utan dröjsmål anmäla till Skolverket sådant som har ändrats och som kan påverka rätten till bidraget eller hur stort det är.'],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Eftersom det inte finns någon redovisning är det viktigt att ni meddelar Skolverket om ni inte har använt hela bidraget, till exempel om inköpen blev mindre än planerat.'
      },
      nyckelord: ['anmälan', 'förändring', 'ändrade förhållanden', 'outnyttjat', 'inte använt']
    },
    {
      ref: '14–16 §§', rubrik: 'Betala tillbaka (återkrav)',
      text: ['Den som har fått bidrag ska betala tillbaka det om något av följande gäller:'],
      lista: [
        'Bidraget har betalats ut på felaktig grund eller med för högt belopp.',
        'Bidraget har helt eller delvis inte använts, eller inte gått till det det var avsett för.',
        'Mottagaren har inte deltagit i uppföljningen eller inte lämnat de uppgifter som begärts.',
        'Villkoren i beslutet har inte följts.'
      ],
      praktik: {
        rubrik: 'Återkrav och ränta',
        text: 'Skolverket ska då besluta om återkrav, alltså kräva tillbaka pengarna helt eller delvis. Vid synnerliga skäl – mycket starka skäl – får Skolverket avstå. Ränta tas ut från den trettionde dagen efter beslutet om återkrav: statens utlåningsränta plus två procentenheter. Även räntan kan efterges vid synnerliga skäl. Begär ni ut pengar för inköp ni väntas göra, och inköpen sedan blir mindre, kan mellanskillnaden behöva betalas tillbaka.'
      },
      nyckelord: ['återkrav', 'återbetalning', 'betala tillbaka', 'ränta', 'synnerliga skäl', 'outnyttjat']
    },
    {
      ref: '17 §', rubrik: 'Stopp för utbetalning',
      text: ['Skolverket ska helt eller delvis stoppa utbetalningen av ett beviljat bidrag om mottagaren inte längre bedöms uppfylla villkoren, eller om det finns skäl för återbetalning enligt 14 §. Beslutet gäller direkt.'],
      nyckelord: ['stopp', 'utbetalning', 'hinder']
    },
    {
      ref: '18 §', rubrik: 'Skolverkets föreskrifter',
      text: ['Skolverket får skriva de mer detaljerade regler, så kallade föreskrifter, som behövs för att tillämpa förordningen. På bidragssidan för 2026 hänvisar Skolverket bara till förordningen och skollagen. Läs dem tillsammans med Skolverkets anvisningar och årets beslut.'],
      nyckelord: ['föreskrifter', 'anvisningar', 'skolfs', 'skollagen', 'bemyndigande']
    },
    {
      ref: '19 §', rubrik: 'Överklagande',
      text: ['Bara ett beslut enligt 17 § om att helt eller delvis stoppa en utbetalning kan överklagas till allmän förvaltningsdomstol. Andra beslut enligt förordningen, till exempel om bidragsramen, får inte överklagas.'],
      nyckelord: ['överklaga', 'domstol', 'förvaltningsrätt']
    },
    {
      ref: 'Övergång', rubrik: 'Ändringar och äldre regler',
      text: [
        'Förordningen började gälla den 3 april 2023 och hette då förordningen om statsbidrag för inköp av vissa läromedel. Från den 1 juli 2024 har den sitt nuvarande namn. Samtidigt skrevs reglerna om vad bidraget får gå till, om egen finansiering och om rekvisition om (SFS 2024:267).',
        'Den senaste ändringen, SFS 2025:88, började gälla den 1 juli 2025. Den lade till villkoren om skulder, konkurs, återkallat godkännande och verksamhetsförbud (4 a–4 b §§) och ändrade bland annat reglerna om rekvisition och återkrav. För bidrag som beviljades före den 1 juli 2025 gäller de äldre reglerna.'
      ],
      nyckelord: ['övergång', 'äldre regler', 'vissa läromedel', '2024:267', '2025:88', 'ikraftträdande']
    }
  ],

  kalkylatorer: [
    {
      id: 'begaran', modul: 'larobocker-lararhandledningar-begaran',
      flik: 'Räkna på bidraget', eyebrow: 'Egen finansiering enligt 6 §',
      rubrik: 'Hur mycket kan ni', rubrikKursiv: 'begära ut?',
      ingress: 'Ange era kostnader och elevantal. Räknaren visar hur mycket ni själva ska betala under 2026 och hur mycket av ramen ni kan begära ut. Standardvärdena är Skolverkets eget räkneexempel.',
      formel: { rubrik: 'Så räknar räknaren', text: 'Egen finansiering = kostnader 2023–2025 ÷ elever 2023–2025 × elever 2026. Kan begäras ut = kostnader 2026 − egen finansiering, men högst bidragsramen.' },
      resultatRubrik: 'Högsta belopp att begära ut för 2026',
      falt: [
        { id: 'ram', typ: 'tal', etikett: 'Er bidragsram för 2026', min: 1, max: 1e10, steg: 1, standard: 250000, enhet: 'kr',
          hjalp: 'Står i Skolverkets beslutsbilaga från januari 2026. Exempelvärde.' },
        { id: 'kostnaderTidigare', typ: 'tal', etikett: 'Kostnader för läroböcker och lärarhandledningar 2023–2025', min: 0, max: 1e10, steg: 1, standard: 1500000, enhet: 'kr',
          hjalp: 'Summan för alla tre åren och alla era skolor. Ta inte med skön- och facklitteratur, skolbiblioteksböcker eller böcker som köpts med statsbidrag.' },
        { id: 'eleverTidigare', typ: 'tal', etikett: 'Elever 2023–2025, alla tre åren sammanlagt', min: 1, max: 1e7, steg: 1, standard: 3000,
          hjalp: 'Elever i förskoleklass, grundskola, anpassad grundskola, specialskola och sameskola. Skolverket föreslår SCB:s elevstatistik. Har ni haft elever kortare tid: räkna de år ni har haft elever.' },
        { id: 'elever', typ: 'tal', etikett: 'Elever 2026', min: 0, max: 1e7, steg: 1, standard: 1200,
          hjalp: 'Det finns ingen regel för hur elevantalet 2026 räknas. Ni beräknar det själva och ska kunna visa hur.' },
        { id: 'kostnader', typ: 'tal', etikett: 'Kostnader för läroböcker och lärarhandledningar 2026', min: 0, max: 1e10, steg: 1, standard: 800000, enhet: 'kr',
          hjalp: 'Allt ni köper eller väntas köpa under 2026, både det ni betalar själva och det bidraget ska täcka.' }
      ],
      exempel: [
        { etikett: 'Ramen sätter taket', varden: { ram: 150000 } },
        { etikett: 'Köper som vanligt', varden: { kostnader: 600000 } },
        { etikett: 'Kortare historik', varden: { kostnaderTidigare: 100000, eleverTidigare: 300, elever: 310, kostnader: 150000, ram: 60000 } }
      ],
      resultatNotis: 'Beloppet är ett tak. Det förutsätter att böckerna omfattas, köps under 2026 och inte betalas med något annat statsbidrag.',
      forbehall: [
        { rubrik: 'Formel', text: 'Kravet på egen finansiering står i 6 §. Sättet att räkna snittkostnaden – totala kostnader delat med totalt antal elever för de tre åren – och exemplet med 500 kr per elev kommer från Skolverkets sida för 2026.' },
        { rubrik: 'Avrundning', text: 'Förordningen anger ingen avrundning. Räknaren avrundar den egna finansieringen till hela kronor.' },
        { rubrik: 'Moms', text: 'Ange beloppen utan moms om ni kan få ersättning för momsen, annars med moms. Räknaren prövar inte vilket som gäller för er.' },
        { rubrik: 'Det räknaren inte prövar', text: 'Om böckerna räknas som läroböcker eller lärarhandledningar, om elevantalen är rätt beräknade, om huvudmannen uppfyller villkoren i 4 a–4 b §§ eller vilken ram ni har fått.' }
      ]
    }
  ],

  process: [
    { rubrik: 'Kontrollera ramen', text: 'Hämta årets beslutsbilaga och se hur stor er bidragsram är. För 2026 beslutades ramarna i januari.', ref: '7–9 §§' },
    { rubrik: 'Räkna ut er egen nivå', text: 'Ta fram kostnaderna för läroböcker och lärarhandledningar 2023–2025 och elevantalen för samma år. Räkna ut snittkostnaden per elev och er egen finansiering för 2026.', ref: '6 §' },
    { rubrik: 'Köp under året', text: 'Köp tryckta läroböcker och lärarhandledningar mellan 1 januari och 31 december. Köp för mer än er egen nivå om ni vill använda bidraget. Spara fakturorna.', ref: '4–5 §§' },
    { rubrik: 'Begär ut bidraget', text: 'En behörig företrädare begär ut pengarna i e-tjänsten och anger snittkostnad, elevantal och belopp. För 2026: 1 september–1 oktober.', ref: '10–11 §§' },
    { rubrik: 'Spara underlag och anmäl ändringar', text: 'Det finns ingen redovisning, men Skolverket kan kontrollera er. Meddela Skolverket om ni inte använder hela bidraget.', ref: '12–17 §§' }
  ],

  underlagRubrik: 'Underlag att ha till hands',
  underlagIngress: 'Använd listan när ni förbereder begäran och inför en eventuell kontroll. Markeringarna sparas inte – de försvinner när ni stänger sidan.',
  underlag: [
    'Årets beslut om bidragsram (beslutsbilagan från januari 2026).',
    'Kostnader för läroböcker och lärarhandledningar 2023–2025 för alla huvudmannens skolor, utan sådant som betalats med statsbidrag.',
    'Elevantal 2023–2025, till exempel från SCB:s elevstatistik.',
    'Beräkning av elevantalet 2026 och hur ni har gjort den.',
    'Fakturor för inköpen 2026 som visar titel, att boken är tryckt och vilket datum den köptes.',
    'Uppgift om vilka lärarhandledningar som hör till vilka läroböcker.',
    'Uppgift om ni kan få ersättning för moms.',
    'Vem som är behörig företrädare för huvudmannen.'
  ],

  kallor: [
    {
      titel: 'Förordning (2023:86) · Sveriges riksdag',
      url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-202386-om-statsbidrag-for-inkop-av_sfs-2023-86/',
      beskrivning: 'Källan för villkor, egen finansiering, bidragsram, rekvisition och återkrav. Paragrafhänvisningarna i guiden gäller den här förordningen.'
    },
    {
      titel: 'Statsbidrag för inköp av läroböcker och lärarhandledningar 2026 · Skolverket',
      url: 'https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-inkop-av-larobocker-och-lararhandledningar-2026',
      beskrivning: 'Skolverkets anvisningar om vilka böcker som omfattas, hur snittkostnaden räknas, moms, ramar och datum för 2026. Sidan länkar till beslutsbilagan med alla bidragsramar.'
    },
    {
      titel: 'Statsbidrag för inköp av läroböcker och lärarhandledningar 2025 · Skolverket',
      url: 'https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-inkop-av-larobocker-och-lararhandledningar-2025',
      beskrivning: 'Förra årets omgång med belopp, period för begäran om utbetalning och beslut.'
    },
    {
      titel: 'Skollagen (2010:800) · Sveriges riksdag',
      url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/skollag-2010800_sfs-2010-800/',
      beskrivning: 'Definitionerna av lärobok, läromedel och lärverktyg står i 1 kap. 3 §.'
    }
  ],

  forbehall: 'Guiden sammanfattar reglerna och visar hur beräkningen går till. Räknaren prövar inte om en bok omfattas, om huvudmannen uppfyller villkoren eller vilken ram ni har fått. Använd Skolverkets aktuella anvisningar och beslut när ni begär ut bidraget. Det är inte känt om bidraget fortsätter efter 2026. För äldre bidragsår kan äldre regler gälla.'
};
