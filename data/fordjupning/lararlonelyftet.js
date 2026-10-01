/* Fördjupning: Statsbidrag för Lärarlönelyftet – förordning (2016:100).
 * Innehållet är stämt mot förordningen (ändrad t.o.m. SFS 2025:1019), Skolverkets föreskrifter SKOLFS 2016:61
 * (senaste ändring SKOLFS 2019:27), Skolverkets sida för 2026/27 och Skolverkets räknehjälp i Excel.
 * Schema: se FORDJUPNING.md. Klartext, inte citat – paragrafhänvisningarna gäller förordningen. */
window.SB_FORDJUPNING = window.SB_FORDJUPNING || {};
window.SB_FORDJUPNING['lararlonelyftet'] = {
  id: 'lararlonelyftet',
  rubrik: 'Lärarlönelyftet',
  rubrikKursiv: 'i klartext.',
  ingress: 'Vilka lärare kan få högre lön, hur stor ska löneökningen vara och hur långt räcker ramen? Här står reglerna på vanlig svenska. Ni kan också räkna på en lönesatsning med egna siffror.',
  kontrollerad: '2026-10-01',
  forordning: {
    sfs: '2016:100',
    namn: 'Förordning (2016:100) om statsbidrag för höjda löner till lärare och förskollärare',
    lydelse: 'ändrad t.o.m. SFS 2025:1019',
    url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-2016100-om-statsbidrag-for-hojda_sfs-2016-100/'
  },

  snabbfaktaRubrik: 'Tre saker att hålla isär',
  snabbfakta: [
    { rubrik: 'Huvudmannens bidragsram', text: 'Hur många elever huvudmannen har haft avgör ramen. Ramen är det mesta ni kan begära ut under läsåret.' },
    { rubrik: 'Lärarnas löneökning', text: 'Huvudmannen väljer lärare och belopp. I genomsnitt ska ökningen vara 2 500–3 500 kr i månaden per lärare.' },
    { rubrik: 'Bidraget', text: 'Bidraget är den löneökning ni faktiskt betalar ut, gånger 1,42 för sociala avgifter.' }
  ],
  snabbfaktaNot: 'Ingen ansökan behövs för att få en ram. Men pengarna betalas bara ut om ni själva begär ut dem i tid, två gånger per läsår.',

  begreppRubrik: 'Ord som återkommer',
  begrepp: [
    { term: 'Huvudman', forklaring: 'Den som driver skolan och ansvarar för utbildningen: kommunen, staten eller en fristående organisation.' },
    { term: 'Bidragsram', forklaring: 'Det högsta belopp som huvudmannen kan begära ut för ett bidragsår. Skolverket beslutar om ramen.' },
    { term: 'Ordinarie lönerevision', forklaring: 'Den vanliga årliga löneöversynen. Lärarlönelyftet ska ligga ovanpå den, inte ersätta den.' },
    { term: 'Rekvisition', forklaring: 'När huvudmannen begär att få bidraget utbetalt. Skolverket kallar det begäran om utbetalning.' },
    { term: 'Heltidsbelopp', forklaring: 'Löneökningen räknad som om läraren arbetade heltid. Skolverket vill ha löneökningen angiven så.' }
  ],

  sektioner: {
    regler: {
      rubrik: 'Från paragraf', rubrikKursiv: 'till praktik.',
      ingress: 'Rubrikerna följer förordningen. Öppna det avsnitt ni behöver, eller sök på till exempel ”legitimation”, ”snitt” eller ”återkrav”. Varje avsnitt visar vilken paragraf det gäller.'
    },
    praktik: {
      rubrik: 'Så används', rubrikKursiv: 'reglerna.',
      ingress: 'Bidraget följer läsåret: ramen beslutas före läsåret, och ni begär ut pengarna på hösten och på våren. Däremellan ska ni betala ut löneökningen varje månad och hålla koll på frånvaro och ändringar.'
    }
  },

  paragrafer: [
    {
      ref: '1–3 §§', rubrik: 'Vad bidraget är till för',
      text: [
        'Bidraget går till huvudmän som höjer lönen för lärare eller förskollärare mer än vad den ordinarie lönerevisionen ger.',
        'Syftet är att särskilt kvalificerade lärare och förskollärare ska få högre lön. Det ska bidra till bättre undervisning, bättre kunskapsresultat och att verksamheten utvecklas.',
        'Förordningen påminner också om skollagens krav: kommunerna ska fördela resurser efter barnens och elevernas olika förutsättningar och behov.',
        'Bidraget kan kombineras med statsbidraget för karriärtjänster (förstelärare och lektorer). Hur de två hänger ihop står i 9 § tredje stycket.'
      ],
      nyckelord: ['syfte', 'lönerevision', 'karriärtjänst', 'förstelärare', 'lektor', 'kombinera']
    },
    {
      ref: '4 §', rubrik: 'Bidragsåret',
      text: [
        'Bidrag lämnas för ett år i taget och bara i den mån det finns pengar. Bidragsåret börjar den 1 juli.',
        'En ram ett år är alltså inget löfte om samma ram nästa år.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Skolverket beskriver Lärarlönelyftet som en permanent satsning från regeringens sida, utan sista datum. Om bidraget finns kvar avgörs ändå av politiska beslut. Huvudmannen bestämmer själv om löneökningen ska vara tills vidare eller tidsbegränsad.'
      },
      nyckelord: ['bidragsår', 'läsår', '1 juli', 'permanent', 'tidsbegränsad']
    },
    {
      ref: '5 §', rubrik: 'Vilka huvudmän och verksamheter som omfattas',
      text: [
        'Bidraget går till huvudmän för förskoleklass, grundskola, anpassad grundskola, specialskola, sameskola, gymnasieskola och anpassad gymnasieskola.',
        'Pengarna får användas till höjda löner i de skolformerna. En sådan huvudman som också driver förskola eller fritidshem får använda bidraget även där. Hur mycket står i 16 §: högst tio procent av ramen.',
        'En huvudman som bara driver förskola eller fritidshem kan inte få bidraget. Komvux finns inte med i uppräkningen.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Enligt Skolverket omfattas inte heller internationella skolor, IB-utbildning och undervisning på sjukhus eller institution som hör till ett sjukhus. En lärare som också undervisar i en sådan verksamhet ska ägna minst 75 procent av arbetstiden åt undervisning i en skolform som omfattas.'
      },
      nyckelord: ['huvudman', 'skolformer', 'förskola', 'fritidshem', 'komvux', 'internationell skola', 'IB', 'sjukhusundervisning']
    },
    {
      ref: '6 §', rubrik: 'Legitimation',
      text: [
        'Bidrag kan lämnas för en legitimerad lärare som arbetar i någon av skolformerna i 5 §, i förskolan eller i fritidshemmet. Det kan också lämnas för en legitimerad förskollärare som arbetar i förskolan eller förskoleklassen.',
        'Tre grupper utan legitimation räknas här som legitimerade lärare:'
      ],
      lista: [
        'Lärare som är tillsvidareanställda för att undervisa i modersmål, eller i ett yrkesämne i gymnasieskolan eller anpassade gymnasieskolan, med stöd av 2 kap. 20 § skollagen.',
        'Lärare som undervisar med stöd av 2 kap. 17 § första stycket 1 skollagen.',
        'Lärare som är undantagna från legitimationskravet enligt föreskrifter som har meddelats med stöd av 2 kap. 13 § tredje stycket skollagen.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Skolverket nämner bland annat lärare med en utländsk lärarexamen som undervisar i andra ämnen än språk på engelska i grundskolan eller på ett främmande språk i gymnasieskolan, och vissa speciallärare och specialpedagoger i anpassad skola och specialskola som var anställda den 1 december 2013. Bidrag kan begäras från och med den dag legitimationen är utfärdad. Även rektorer och andra skolledare kan omfattas om de uppfyller alla villkor.'
      },
      nyckelord: ['legitimation', 'förskollärare', 'modersmål', 'yrkeslärare', 'undantag', 'rektor', 'skolledare', 'utländsk examen']
    },
    {
      ref: '7 §', rubrik: 'Särskilt kvalificerad',
      text: [
        'Läraren eller förskolläraren ska vara särskilt kvalificerad för den undervisning som huvudmannen bedriver.',
        'Hen ska ha visat intresse för och god förmåga att utveckla undervisningen, ensam och tillsammans med kollegor. Det ska ha lett till bättre studieresultat eller bättre måluppfyllelse i förskolan. Det ska ha skett på minst ett av de här sätten:'
      ],
      lista: [
        'Tagit särskilt ansvar för att utveckla undervisningen genom kollegialt lärande, alltså att lärare lär av varandra, på vetenskaplig grund och beprövad erfarenhet.',
        'Med stöd av utbildning på avancerad nivå, utöver lärar- eller förskollärarexamen, förbättrat undervisningens innehåll, metoder och arbetssätt.',
        'Tagit särskilt ansvar för att stödja lärarstudenter och nya kollegor, eller för att utveckla ämnen eller ämnesövergripande områden.',
        'Tagit särskilt ansvar för särskilt komplicerade undervisningssituationer.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Det är huvudmannen som avgör vilka lärare som är kvalificerade och hur de utses. Huvudmannen får ställa fler krav än förordningen, men bör tänka på att lagar och avtal kan begränsa vilka urvalskriterier som får användas.'
      },
      nyckelord: ['kvalificerad', 'kollegialt lärande', 'urval', 'kriterier', 'nya lärare', 'handledare', 'avancerad nivå']
    },
    {
      ref: '8 §', rubrik: 'Vad läraren ska arbeta med',
      text: [
        'Arbetet ska till största delen bestå av undervisning, uppgifter som hör till undervisningen eller andra uppgifter av pedagogisk natur.',
        'Skolverkets föreskrifter (SKOLFS 2016:61, 7 §) säger att ”till största delen” betyder minst 75 procent av arbetstiden. Uppgifter som hör till undervisningen är att planera och följa upp undervisningen, att bedöma, betygsätta och dokumentera elevernas kunskapsutveckling, och att återkoppla till elever och vårdnadshavare.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: '”Andra uppgifter av pedagogisk natur” har ingen fast definition – huvudmannen får avgöra. Skolverket hänvisar till regeringens promemoria: det är uppgifter som utvecklar undervisningens kvalitet, till exempel pedagogiskt ledarskap eller en speciallärares eller specialpedagogs arbete i ett elevvårdsteam. En lärare med fackliga uppdrag kan få bidrag om 75-procentskravet ändå är uppfyllt.'
      },
      nyckelord: ['75 procent', 'arbetstid', 'undervisning', 'pedagogisk', 'facklig', 'speciallärare', 'arbetsuppgifter']
    },
    {
      ref: '9 §', rubrik: 'Löneökningen: utöver lönerevisionen och i snitt 2 500–3 500 kr',
      text: [
        'Läraren ska få en lön som är högre än den lön hen skulle ha fått enligt den ordinarie lönerevisionen.',
        'Räknat på alla lärare och förskollärare som huvudmannen begär bidrag för ska höjningen i genomsnitt vara minst 2 500 kr och högst 3 500 kr per månad och person. De enskilda beloppen kan alltså variera, så länge snittet håller sig inom spannet.',
        'Bidrag lämnas inte för en nyanställning.',
        'För en förstelärare eller lektor räknas den del av lönen som det redan ges karriärtjänstbidrag för som ordinarie lön. Lärarlönelyftet ska alltså ligga ovanpå karriärtjänstens lönepåslag.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Löneökningen ska betalas ut i samma takt som lönen, normalt varje månad. Den får ges först när den ordinarie månadslönen har betalats ut en gång. Byte av tjänst eller skolenhet hos samma huvudman räknas inte som nyanställning. Ökningen följer inte med läraren till en ny huvudman. Skolverket vill ha löneökningen angiven som heltidsbelopp, och Skolverkets räknehjälp räknar snittet på heltidsbeloppen.'
      },
      nyckelord: ['lön', 'löneökning', 'snitt', 'genomsnitt', '2500', '3500', 'nyanställning', 'lönerevision', 'förstelärare', 'heltid']
    },
    {
      ref: '9 a–9 c §§', rubrik: 'När huvudmannen inte kan få bidrag',
      text: [
        'Huvudmannen får inte vara i likvidation eller konkurs. Den får inte heller ha skatte-, avgifts- eller andra skulder hos Kronofogden som handläggs i allmänt mål, eller ett förfallet återkrav från Skolverket.',
        'Har Skolinspektionen eller en kommun återkallat huvudmannens godkännande, eller har Skolinspektionen beslutat om verksamhetsförbud, ges inget bidrag så länge beslutet inte har upphävts.',
        '9 a § ställde tidigare krav på F-skatt och registrering som arbetsgivare för enskilda huvudmän. Paragrafen upphörde att gälla vid utgången av november 2025.'
      ],
      nyckelord: ['konkurs', 'likvidation', 'kronofogden', 'skuld', 'återkrav', 'verksamhetsförbud', 'godkännande', 'F-skatt']
    },
    {
      ref: '10–11 §§', rubrik: 'Hur stort bidraget blir per lärare',
      text: [
        'Bidraget för en lärare är den löneökning som betalas ut under bidragsåret, gånger 1,42. Påslaget på 42 procent är en schablon för sociala avgifter.',
        'Arbetar läraren mindre än heltid, eller har hen inte haft den högre lönen hela året, minskas beloppet i samma proportion.',
        'Exempel från Skolverket: 3 000 kr i månaden i ett helt läsår ger (3 000 × 12) × 1,42 = 51 120 kr. Det blir 25 560 kr per begäran om utbetalning.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Täcker bidraget inte de sociala avgifterna fullt ut får huvudmannen betala mellanskillnaden. Blir det pengar över när avgifterna är betalda bestämmer huvudmannen själv hur resten fördelas. Frånvaro i 30 sammanhängande dagar eller mer, av samma orsak och i samma omfattning, ska rapporteras och minskar bidraget. En lärare som är helt frånvarande hela perioden ska inte tas med.'
      },
      nyckelord: ['belopp', 'sociala avgifter', '1,42', '42 procent', 'deltid', 'tjänstgöringsgrad', 'frånvaro', 'sjukdom', 'föräldraledighet']
    },
    {
      ref: '12–15 §§', rubrik: 'Bidragsramen',
      text: [
        'Skolverket bestämmer en bidragsram för varje huvudman inför varje bidragsår.',
        'Huvudmän med färre än 30 elever i genomsnitt de tre senaste läsåren får 50 000 kr.',
        'För övriga huvudmän dras först de ramarna av från det totala bidraget. Resten fördelas efter elevantal: huvudmannens elever delat med alla elever hos huvudmän som har minst 30 elever. Beloppet avrundas till närmaste tal som är jämnt delbart med 50 000.',
        'Har huvudmannen haft elever kortare tid än tre läsår används de läsår den har haft elever. Hade huvudmannen inga elever läsåret närmast före bidragsåret lämnas inget bidrag.',
        'Elever i förskoleklass, grundskola, anpassad grundskola, specialskola, sameskola, gymnasieskola och anpassad gymnasieskola räknas med. Barn i förskola och fritidshem räknas inte.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Skolverket använder SCB:s elevstatistik. Ni behöver inte göra något för att få en ram, utöver att rapportera elevantalet till SCB. Ökar eller minskar ert elevantal mycket jämfört med hela landet kan ramen ändras mellan åren. För 2026/27 är anslaget 3 miljarder kronor.'
      },
      nyckelord: ['bidragsram', 'ram', 'elevantal', 'elevstatistik', 'SCB', '50000', 'avrundning', 'små huvudmän', '30 elever']
    },
    {
      ref: '16 §', rubrik: 'Begära ut pengarna (rekvisition)',
      text: [
        'Skolverket beslutar och betalar ut bidraget efter rekvisition en gång per halvår. Beslutet kan innehålla villkor. De står i så fall i beslutet.',
        'En behörig företrädare för huvudmannen ska på heder och samvete ange vilka personer bidraget gäller och hur stor löneökning var och en har fått. Företrädaren ska också intyga att villkoren i 5–9 c §§ är uppfyllda. Skolverket kan begära fler uppgifter och handlingar.',
        'Högst tio procent av ramen får gå till förskollärare som arbetar i förskolan och lärare som arbetar i fritidshemmet.',
        'Enligt Skolverkets föreskrifter (SKOLFS 2016:61) görs rekvisitionen i Skolverkets e-tjänst. Hösten ska vara inne senast 1 november och våren senast 15 maj. Varje gång får ni begära ut högst 50 procent av ramen.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'För 2026/27 är det öppet 15 september–2 november 2026 och 1 april–17 maj 2027 (1 november 2026 är en söndag och 15 maj 2027 en lördag). En för sen begäran avvisas i normalfallet. Pengar som inte begärs ut kan inte sparas till nästa halvår, men att begära mindre påverkar inte framtida ramar. En ny person kan inte läggas till efter sista dagen.'
      },
      nyckelord: ['rekvisition', 'begäran om utbetalning', 'e-tjänst', 'sista dag', '50 procent', 'tio procent', 'förskola', 'fritidshem', 'företrädare']
    },
    {
      ref: '16 a §', rubrik: 'Anmäl förändringar',
      text: [
        'Ändrade förhållanden som kan påverka rätten till bidrag eller beloppets storlek ska anmälas till Skolverket så snart som möjligt. Det gäller både den som har begärt bidrag och den som har fått det.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Det kan vara tjänstledighet, sjukdom, att en lärare slutar eller går ned i tid. Mejla Skolverket, så öppnas ett omprövningsärende i e-tjänsten. Ta med även tidigare rapporterad frånvaro – den sparas inte. Vid överlåtelse eller övertagande av skolenheter måste ramarna omprövas.'
      },
      nyckelord: ['anmälan', 'förändring', 'slutar', 'tjänstledig', 'omprövning', 'överlåtelse']
    },
    {
      ref: '17–18 §§', rubrik: 'Betala tillbaka (återkrav)',
      text: [
        'Bidraget ska betalas tillbaka om det har lämnats på fel grund eller med för högt belopp, om det inte har använts eller inte har använts till det det var avsett för, om ni inte har medverkat i uppföljningen eller om villkoren i beslutet inte har följts.',
        'Skolverket ska då besluta om återkrav, alltså kräva tillbaka pengarna. Finns det synnerliga skäl – mycket starka skäl – får Skolverket avstå helt eller delvis.',
        'Ränta tas ut från den trettionde dagen efter beslutet om återkrav. Räntan är statens utlåningsränta plus två procentenheter. Även räntan kan efterges vid synnerliga skäl.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Skolverket gör stickprov, slumpmässigt eller när det finns anledning. Pengar som inte har använts, till exempel för att någon har slutat, ska betalas tillbaka.'
      },
      nyckelord: ['återkrav', 'återbetalning', 'betala tillbaka', 'ränta', 'synnerliga skäl', 'stickprov']
    },
    {
      ref: '19 §', rubrik: 'Uppföljning',
      text: ['Skolverket följer upp hur bidraget används. Den som har fått bidrag ska delta i den uppföljning och utvärdering som beslutas, och lämna de uppgifter som Skolverket eller en annan ansvarig myndighet begär.'],
      praktik: 'Det finns ingen separat slutredovisning – uppgifterna lämnas i varje begäran om utbetalning. Spara ändå underlag om urval, kvalifikationer, arbetsuppgifter, lön och frånvaro.',
      nyckelord: ['uppföljning', 'redovisning', 'utvärdering', 'underlag', 'dokumentation']
    },
    {
      ref: '19 a §', rubrik: 'Stopp för utbetalning',
      text: ['Skolverket ska helt eller delvis stoppa utbetalningen av ett beviljat bidrag om villkoren inte längre bedöms vara uppfyllda, eller om det finns skäl för återbetalning enligt 17 §. Beslutet gäller direkt.'],
      nyckelord: ['stopp', 'utbetalning', 'hinder']
    },
    {
      ref: '20 §', rubrik: 'Skolverkets föreskrifter',
      text: ['Skolverket får skriva mer detaljerade regler, så kallade föreskrifter. För Lärarlönelyftet finns SKOLFS 2016:61, om bland annat sista dagar, 50-procentsgränsen och vad ”till största delen” betyder. Läs förordningen tillsammans med föreskrifterna, Skolverkets anvisningar och ert beslut.'],
      nyckelord: ['föreskrifter', 'SKOLFS 2016:61', 'anvisningar', 'bemyndigande']
    },
    {
      ref: '21 §', rubrik: 'Överklagande',
      text: ['Ett beslut enligt 19 a § om att helt eller delvis stoppa en utbetalning kan överklagas till allmän förvaltningsdomstol. Andra beslut enligt förordningen får inte överklagas.'],
      nyckelord: ['överklaga', 'domstol', 'förvaltningsrätt']
    },
    {
      ref: 'Övergång', rubrik: 'Övergångsbestämmelser och äldre regler',
      text: [
        'Förordningen kom 2016. Den hette från början ”… höjda löner till lärare och vissa andra personalkategorier”. Sedan ändringen SFS 2018:1309 heter den ”… höjda löner till lärare och förskollärare”. Skolverkets föreskrifter använder fortfarande det äldre namnet i vissa delar.',
        'Ändringen SFS 2025:281 började gälla den 1 juli 2025. Den lade bland annat till reglerna om hinder för huvudmannen (9 b–9 c §§) och anmälningsplikten (16 a §). För bidrag som beviljades före dess gäller de äldre bestämmelserna.',
        'Genom SFS 2025:1019 upphörde 9 a § att gälla vid utgången av november 2025. För äldre perioder måste ni använda rätt version av förordningen.'
      ],
      nyckelord: ['övergång', 'äldre regler', '2025:281', '2025:1019', '2018:1309', 'ikraftträdande']
    }
  ],

  kalkylatorer: [
    {
      id: 'belopp', modul: 'lararlonelyftet-belopp',
      flik: 'Räkna på ramen', eyebrow: 'Bidrag enligt 9–11 §§',
      rubrik: 'Hur långt räcker', rubrikKursiv: 'ramen?',
      ingress: 'Ange er bidragsram och de löneökningar ni planerar. Räknaren visar vad det kostar med sociala avgifter, hur stor del av ramen det tar och om snittet ligger inom 2 500–3 500 kr. Ange löneökningen som heltidsbelopp.',
      formel: { rubrik: 'Grundformeln', text: 'Bidrag = löneökning per månad × antal lärare × tjänstgöringsgrad × antal månader × 1,42.' },
      resultatRubrik: 'Bidrag ni kan begära för perioden',
      falt: [
        { id: 'ram', typ: 'tal', etikett: 'Bidragsram för läsåret', min: 0, max: 1e10, steg: 1, standard: 1000000, enhet: 'kr',
          hjalp: 'Står i Skolverkets beslut om bidragsramar. Förifyllt är ett exempelvärde.' },
        { id: 'antal', typ: 'tal', etikett: 'Antal lärare', min: 1, max: 100000, steg: 1, standard: 10 },
        { id: 'okning', typ: 'tal', etikett: 'Löneökning per lärare och månad', min: 0, max: 50000, steg: 100, standard: 3000, enhet: 'kr',
          hjalp: 'Som heltidsbelopp, utöver den ordinarie lönerevisionen.' },
        { id: 'tvaGrupper', typ: 'kryss', etikett: 'Lägg till en grupp med en annan löneökning', standard: false },
        { id: 'antal2', typ: 'tal', etikett: 'Antal lärare i grupp 2', min: 0, max: 100000, steg: 1, standard: 5, visasOm: { falt: 'tvaGrupper', ar: true } },
        { id: 'okning2', typ: 'tal', etikett: 'Löneökning per lärare och månad i grupp 2', min: 0, max: 50000, steg: 100, standard: 2000, enhet: 'kr',
          visasOm: { falt: 'tvaGrupper', ar: true }, hjalp: 'Snittet räknas på alla lärare i båda grupperna.' },
        { id: 'grad', typ: 'reglage', etikett: 'Tjänstgöringsgrad', min: 0, max: 100, steg: 1, standard: 100, enhet: '%',
          hjalp: 'Andel av heltid. Samma för alla i räknaren.' },
        { id: 'manader', typ: 'reglage', etikett: 'Månader med löneökning under bidragsåret', min: 0, max: 12, steg: 1, standard: 12, enhet: 'mån',
          hjalp: '1 juli–30 juni. Förenklad modell med hela månader. Frånvaro räknas inte särskilt.' }
      ],
      exempel: [
        { etikett: 'Skolverkets exempel: 3 000 kr i ett år', varden: { antal: 1, okning: 3000, ram: 100000 } },
        { etikett: 'Olika belopp, snitt 3 000 kr', varden: { antal: 10, okning: 3500, tvaGrupper: true, antal2: 5, okning2: 2000 } },
        { etikett: 'Halvtid under en termin', varden: { antal: 4, okning: 2500, grad: 50, manader: 6, ram: 100000 } }
      ],
      resultatNotis: 'Beloppet är löneökningen plus 42 procent för sociala avgifter. Ni kan högst begära ut ramen, och högst hälften av den vid varje begäran om utbetalning.',
      forbehall: [
        { rubrik: 'Formel', text: 'Löneökning per månad (heltid) × antal lärare × tjänstgöringsgrad × månader × 1,42. Snittet räknas som i Skolverkets räknehjälp: summan av löneökningarna delat med antalet lärare. Lärare med olika tjänstgöringsgrad eller olika perioder behöver räknas var för sig.' },
        { rubrik: 'Det här prövas inte', text: 'Räknaren prövar inte om lärarna är legitimerade och särskilt kvalificerade, om de arbetar minst 75 procent med undervisning, om ökningen ligger utöver lönerevisionen eller om det rör sig om nyanställning. Den kontrollerar inte heller tiondelen för förskola och fritidshem, frånvaro eller fördelningen mellan höst och vår.' },
        { rubrik: 'Skolverkets räknehjälp', text: 'Skolverket har en räknehjälp i Excel som räknar med datum och dagar. Använd den eller e-tjänsten när ni ska begära ut pengarna.' }
      ],
      tabell: {
        rubrik: 'Bidrag per lärare vid heltid under hela bidragsåret',
        kolumner: ['Löneökning per månad', 'Löneökning per år', 'Bidrag med sociala avgifter (× 1,42)', 'Per begäran om utbetalning'],
        rader: [
          ['2 500 kr', '30 000 kr', '42 600 kr', '21 300 kr'],
          ['3 000 kr', '36 000 kr', '51 120 kr', '25 560 kr'],
          ['3 500 kr', '42 000 kr', '59 640 kr', '29 820 kr']
        ],
        fotnot: 'Raden för 3 000 kr är Skolverkets eget exempel. Övriga rader är räknade på samma sätt. Det är snittet som ska ligga inom 2 500–3 500 kr – en enskild lärare kan få mer eller mindre.'
      }
    },
    {
      id: 'ram', modul: 'lararlonelyftet-ram',
      flik: 'Bidragsramen', eyebrow: 'Ramar enligt 12–15 §§',
      rubrik: 'Elevandelen', rubrikKursiv: 'styr ramen.',
      ingress: 'Räknaren visar principen bakom ramen med exempelsiffror. För en riktig huvudman gäller Skolverkets beslutade ram, som bygger på SCB:s elevstatistik.',
      formel: { rubrik: 'Grundformeln', text: 'Ram = (totalt bidrag − 50 000 kr × antal huvudmän med färre än 30 elever) × huvudmannens elever ÷ alla elever hos huvudmän med minst 30 elever.' },
      resultatRubrik: 'Exempel på bidragsram',
      falt: [
        { id: 'medel', typ: 'tal', etikett: 'Totalt bidrag att fördela', min: 1, max: 1e12, steg: 1, standard: 3000000000, enhet: 'kr',
          hjalp: 'Anslaget för 2026/27 är 3 miljarder kronor enligt Skolverket.' },
        { id: 'antalSma', typ: 'tal', etikett: 'Antal huvudmän med färre än 30 elever', min: 0, max: 1000000, steg: 1, standard: 100,
          hjalp: 'Exempelvärde. Var och en får 50 000 kr, som dras av innan resten fördelas.' },
        { id: 'egnaElever', typ: 'tal', etikett: 'Huvudmannens elever', min: 0, max: 1e8, steg: 'any', standard: 1000,
          hjalp: 'Genomsnitt av de tre senaste läsåren före bidragsåret, eller kortare tid för en nyare huvudman.' },
        { id: 'allaElever', typ: 'tal', etikett: 'Alla elever hos huvudmän med minst 30 elever', min: 1, max: 1e8, steg: 'any', standard: 1500000,
          hjalp: 'Exempelvärde, inte en officiell siffra. Använd samma år och samma skolformer som för huvudmannen.' },
        { id: 'forraLasaret', typ: 'kryss', etikett: 'Huvudmannen hade elever läsåret närmast före bidragsåret.', standard: true }
      ],
      exempel: [
        { etikett: 'Liten huvudman', varden: { egnaElever: 25 } },
        { etikett: 'Större huvudman', varden: { egnaElever: 5000 } }
      ],
      resultatNotis: 'Det här visar hur beräkningen går till. Ramen bestäms av Skolverket och förutsätter att huvudmannen uppfyller villkoren.',
      forbehall: [
        { rubrik: 'Elevunderlaget', text: 'Skolverket räknar på SCB:s elevstatistik för förskoleklass, grundskola, anpassad grundskola, specialskola, sameskola, gymnasieskola och anpassad gymnasieskola. Antalet elever i landet och antalet små huvudmän i räknaren är påhittade exempel.' },
        { rubrik: 'Avrundningen', text: 'Beloppet avrundas till närmaste tal som är jämnt delbart med 50 000. Hamnar ett exempel precis mitt emellan väljer räknaren det högre talet. Förordningen säger inget om just det fallet. Den anger inte heller någon lägsta ram för huvudmän med minst 30 elever.' }
      ]
    }
  ],

  process: [
    { rubrik: 'Kontrollera ramen', text: 'Hämta Skolverkets beslut om bidragsramar (kommunala, fristående eller övriga huvudmän). Ramarna för 2026/27 beslutades i maj 2026.', ref: '12–15 §§' },
    { rubrik: 'Välj lärare och belopp', text: 'Bestäm vilka lärare som är särskilt kvalificerade och hur stor ökningen ska bli. Kontrollera att snittet blir 2 500–3 500 kr och att löneökningen ligger utöver lönerevisionen.', ref: '6–9 §§' },
    { rubrik: 'Betala ut löneökningen', text: 'Betala ut ökningen varje månad, tidigast efter första ordinarie månadslönen. Håll koll på tjänstgöringsgrad och frånvaro.', ref: '9–11 §§' },
    { rubrik: 'Begär utbetalning', text: 'En behörig företrädare begär ut bidraget i e-tjänsten, på hösten och på våren. Högst halva ramen varje gång.', ref: '16 §' },
    { rubrik: 'Anmäl och följ upp', text: 'Anmäl förändringar så snart som möjligt och spara underlagen. Felaktiga eller oanvända bidrag kan krävas tillbaka.', ref: '16 a–19 a §§' }
  ],

  underlagRubrik: 'Underlag att ha till hands',
  underlagIngress: 'Använd listan när ni förbereder arbetet. Markeringarna sparas inte – de försvinner när ni stänger sidan.',
  underlag: [
    'Årets beslut om bidragsram.',
    'Hur lärarna valdes ut och varför var och en bedöms som särskilt kvalificerad.',
    'Personnummer, legitimation, personalkategori, skolform, skolenhet och program för gymnasiet.',
    'Löneökning per månad och månadslön med alla tillägg, båda som heltidsbelopp.',
    'Tjänstgöringsgrad, datum för löneökningen och frånvaro på 30 dagar eller mer.',
    'Vem som är behörig företrädare och har behörighet till bidraget i e-tjänsten.'
  ],

  kallor: [
    {
      titel: 'Förordning (2016:100) · Sveriges riksdag',
      url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-2016100-om-statsbidrag-for-hojda_sfs-2016-100/',
      beskrivning: 'Källan för villkor, snittkravet, bidragsbeloppet, bidragsramar och återkrav. Paragrafhänvisningarna i guiden gäller den här förordningen.'
    },
    {
      titel: 'Statsbidrag för Lärarlönelyftet 2026/27 · Skolverket',
      url: 'https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-lararlonelyftet-2026-27',
      beskrivning: 'Skolverkets anvisningar om villkor, sociala avgifter, frånvaro, datum för begäran om utbetalning och återkrav. Här finns också bidragsramarna och räknehjälpen i Excel.'
    },
    {
      titel: 'SKOLFS 2016:61 · Skolverkets föreskrifter',
      url: 'https://skolfs.skolverket.se/api/document/SENASTE_LYDELSE/2016:61/pdf',
      beskrivning: 'Föreskrifterna om rekvisition: e-tjänsten, sista dagar, högst 50 procent per gång och att ”till största delen” betyder minst 75 procent.'
    }
  ],

  forbehall: 'Guiden sammanfattar reglerna och visar hur beräkningarna går till. Räknarna kontrollerar inte rätten till bidrag, lärarnas kvalifikationer, frånvaro eller hur ramen fördelas mellan höst och vår. Använd aktuella föreskrifter, anvisningar och beslut när ni begär ut bidraget. För äldre bidragsperioder kan äldre regler gälla.'
};
