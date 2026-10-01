/* Fördjupning: Statsbidrag för kvalitetshöjande åtgärder i förskolan – förordning (2021:848).
 * Innehållet är stämt mot förordningen (ändrad t.o.m. SFS 2023:528), Skolverkets sidor för 2026 (senast uppdaterad
 * 27 juli 2026) och 2027 (senast uppdaterad 11 juni 2026) samt Skolverkets bidragsramar för 2026 (dnr 2025:2684).
 * Schema: se FORDJUPNING.md. Klartext, inte citat – paragrafhänvisningarna gäller förordningen. */
window.SB_FORDJUPNING = window.SB_FORDJUPNING || {};
window.SB_FORDJUPNING['kvalitetshojande-atgarder-forskolan'] = {
  id: 'kvalitetshojande-atgarder-forskolan',
  rubrik: 'Kvalitet i förskolan',
  rubrikKursiv: 'i klartext.',
  ingress: 'Vad får pengarna gå till, hur räknas kommunens ram ut och vad gäller för fristående förskolor? Här står reglerna på vanlig svenska. Ni kan också se hur ramen räknas fram med egna exempelsiffror.',
  kontrollerad: '2026-10-01',
  forordning: {
    sfs: '2021:848',
    namn: 'Förordning (2021:848) om statsbidrag för kvalitetshöjande åtgärder inom förskolan',
    lydelse: 'ändrad t.o.m. SFS 2023:528',
    url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-2021848-om-statsbidrag-for_sfs-2021-848/'
  },

  snabbfaktaRubrik: 'Tre saker att känna till först',
  snabbfakta: [
    { rubrik: 'Bara kommuner får bidraget', text: 'Skolverket betalar bara ut pengarna till kommuner. En fristående förskola kan inte söka själv.' },
    { rubrik: 'Fristående förskolor via kommunen', text: 'Kommunen får använda pengarna i både kommunala och fristående förskolor. Det är kommunen som bestämmer om och hur mycket som går vidare.' },
    { rubrik: 'Tre tillåtna ändamål', text: 'Mindre barngrupper, att behålla eller anställa personal och kompetensutveckling. Kommunen får flytta pengar mellan dem under året.' }
  ],
  snabbfaktaNot: 'Ramen räknas fram automatiskt, men kommunen måste själv begära ut pengarna och sedan redovisa hur de har använts.',

  begreppRubrik: 'Ord som återkommer',
  begrepp: [
    { term: 'Bidragsram', forklaring: 'Det högsta belopp kommunen kan begära ut för året. Skolverket beslutar ramen utifrån SCB:s beräkning.' },
    { term: 'Riktmärke för barngrupper', forklaring: 'Skolverkets rekommenderade storlek på barngrupperna: 6–12 barn för barn som är 1–3 år och 9–15 barn för barn som är 4–5 år.' },
    { term: 'Standardkostnad', forklaring: 'En beräknad kostnad i den kommunala kostnadsutjämningen. Den visar vad förskola, fritidshem och annan pedagogisk verksamhet borde kosta i kommunen utifrån dess förutsättningar.' },
    { term: 'Index', forklaring: 'Kommunens justerade standardkostnad delad med landets genomsnitt. Ett index över 1 ger mer pengar per invånare än genomsnittet.' },
    { term: 'Rekvisition', forklaring: 'När kommunen begär att få bidraget utbetalt. Skolverket kallar det begäran om utbetalning.' }
  ],

  sektioner: {
    regler: {
      rubrik: 'Från paragraf', rubrikKursiv: 'till praktik.',
      ingress: 'Rubrikerna följer förordningen. Öppna det avsnitt ni behöver, eller sök på till exempel ”barngrupp”, ”fristående” eller ”återkrav”. Varje avsnitt visar vilken paragraf det gäller.'
    },
    praktik: {
      rubrik: 'Så används', rubrikKursiv: 'reglerna.',
      ingress: 'Kommunen begär ut pengarna i början av året, använder dem under kalenderåret och redovisar året efter. Fristående förskolor som vill ta del behöver tala med kommunen i god tid.'
    }
  },

  paragrafer: [
    {
      ref: '1–2 §§', rubrik: 'Bidraget och bidragsåret',
      text: [
        'Förordningen gäller statsbidrag för kvalitetshöjande åtgärder inom förskolan.',
        'Bidraget ges för ett kalenderår i taget, alltså 1 januari–31 december. Det kallas bidragsår. Bidraget ges bara i den mån det finns pengar.'
      ],
      praktik: 'Att kommunen fick bidrag ett år är inget löfte om samma belopp nästa år. Anslaget var 3 086 miljoner kr för 2026 och är 2 886 miljoner kr för 2027.',
      nyckelord: ['bidragsår', 'kalenderår', 'anslag', 'i mån av tillgång']
    },
    {
      ref: '3 §', rubrik: 'Vem får bidraget och vad får det gå till',
      text: [
        'Bidraget lämnas till kommuner för insatser som ska höja kvaliteten i förskolan. Pengarna får användas till kostnader för:'
      ],
      lista: [
        'Att arbeta för att barngrupperna får en storlek som stämmer med Skolverkets riktmärke.',
        'Att behålla eller anställa personal i förskolan.',
        'Kompetensutveckling för förskollärare och annan personal som arbetar i barngrupperna.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Kommunen får använda pengarna till alla tre ändamålen eller bara till ett eller två. Det är tillåtet att flytta pengar mellan dem under året. Kommunen får också använda bidraget för insatser i fristående förskolor, men fristående huvudmän kan inte söka själva. Riktmärket är 6–12 barn i grupper med 1–3-åringar och 9–15 barn i grupper med 4–5-åringar.'
      },
      nyckelord: ['kommun', 'fristående förskola', 'barngrupper', 'riktmärke', 'personal', 'rekrytera', 'behålla', 'kompetensutveckling', 'barnskötare', 'förskollärare']
    },
    {
      ref: '4 §', rubrik: 'Inte för sådant som redan har fått bidrag',
      text: ['Bidrag får inte lämnas för insatser som redan har fått bidrag på annat sätt.'],
      praktik: 'Samma kostnad får inte betalas två gånger. Har en insats redan betalats med ett annat statsbidrag kan den inte räknas in här också.',
      nyckelord: ['dubbel finansiering', 'annat statsbidrag', 'samma kostnad']
    },
    {
      ref: '5 §', rubrik: 'Kommunens bidragsram',
      text: [
        'Skolverket beslutar varje år en bidragsram för varje kommun. Ramen bygger på ett indexbaserat belopp som Statistiska centralbyrån (SCB) räknar fram enligt 6 §.',
        'Kommunen kan inte få mer än sin ram.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'För 2026 beslutade Skolverket ramar för alla 290 kommuner, totalt drygt 3 086 miljoner kr. Ramen ändrades i januari 2026 eftersom regeringen höjde anslaget i december 2025. Ramarna för 2027 har inte publicerats ännu.'
      },
      nyckelord: ['bidragsram', 'ram', 'SCB', 'beslut', 'tak']
    },
    {
      ref: '6 §', rubrik: 'Så räknas ramen ut',
      text: [
        'SCB räknar fram ett index för varje kommun. Indexet utgår från kommunens standardkostnad för förskola, fritidshem och annan pedagogisk verksamhet i den kommunala kostnadsutjämningen. Den delas med landets genomsnittliga standardkostnad.',
        'Standardkostnaden justeras för socioekonomiska skillnader för barn som är 1–5 år. Kommuner med större socioekonomiska behov får ett tillägg, och alla kommuner får ett avdrag per invånare. Avdragen är lika stora som tilläggen sammanlagt.',
        'Sedan delas pengarna för året med antalet invånare i landet den 30 juni året före bidragsåret. Det ger ett belopp per invånare. Kommunens belopp blir: beloppet per invånare × kommunens index × kommunens invånare samma dag × en korrigeringsfaktor.',
        'Korrigeringsfaktorn ser till att summan för alla kommuner blir lika stor som den totala bidragsramen.'
      ],
      praktik: 'En kommun med fler invånare eller ett högre index får en större ram. Kommunens egen ram står i Skolverkets beslut. Räknaren nedan visar bara principen.',
      nyckelord: ['index', 'standardkostnad', 'kostnadsutjämning', 'socioekonomi', 'invånare', '30 juni', 'korrigeringsfaktor', 'SCB']
    },
    {
      ref: '7 §', rubrik: 'Begära ut pengarna och utbetalning',
      text: [
        'Skolverket beslutar om bidraget och betalar ut det efter att kommunen har begärt det, en eller flera gånger per bidragsår.',
        'Beslutet kan innehålla villkor. De står i så fall i beslutet.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Kommunen begär ut pengarna i e-tjänsten för statsbidrag och anger hur mycket den planerar att använda till vart och ett av de tre ändamålen. Det går inte att begära mer än ramen. Hälften betalas ut i samband med beslutet i mars eller april, och resten planeras till september. För 2026 beviljade Skolverket totalt 3 085 998 706 kr till 290 kommuner.'
      },
      nyckelord: ['rekvisition', 'begäran om utbetalning', 'e-tjänst', 'utbetalning', 'september', 'villkor']
    },
    {
      ref: '8–9 §§', rubrik: 'Uppföljning och redovisning',
      text: [
        'Skolverket ska följa upp och utvärdera vad bidraget leder till och sprida information om hur kommunerna använder det.',
        'En kommun som får bidrag är skyldig att lämna de uppgifter om verksamheten som Skolverket behöver för uppföljningen.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Kommunen redovisar året efter hur mycket den har använt till vart och ett av de tre ändamålen. Den anger också om pengar har gått vidare till fristående förskolor och i så fall hur mycket. För 2027 ska även beloppet till fristående förskolor delas upp på de tre ändamålen.'
      },
      nyckelord: ['redovisning', 'uppföljning', 'utvärdering', 'fristående förskolor', 'e-tjänst']
    },
    {
      ref: '10–11 §§', rubrik: 'Betala tillbaka (återkrav)',
      text: ['Kommunen ska betala tillbaka bidraget om något av följande gäller:'],
      lista: [
        'Bidraget har lämnats på felaktig grund eller med för högt belopp.',
        'Pengarna har inte använts, helt eller delvis, eller har använts till något annat än det de var avsedda för.',
        'Kommunen har inte lämnat den redovisning som krävs.',
        'Kommunen har inte följt villkoren i beslutet.'
      ],
      praktik: {
        rubrik: 'Återkrav',
        text: 'Skolverket ska då besluta att kräva tillbaka pengarna, helt eller delvis. Om det finns särskilda skäl får Skolverket avstå helt eller delvis. Pengar som inte har använts under bidragsåret kan alltså behöva betalas tillbaka.'
      },
      nyckelord: ['återkrav', 'återbetalning', 'betala tillbaka', 'outnyttjat', 'särskilda skäl']
    },
    {
      ref: '12 §', rubrik: 'Ränta vid återkrav',
      text: [
        'Ränta tas ut från och med den dag som infaller en månad efter beslutet om återkrav. Räntan är statens utlåningsränta plus två procentenheter.',
        'Om det finns särskilda skäl får Skolverket avstå från räntan, helt eller delvis.'
      ],
      nyckelord: ['ränta', 'återkrav', 'utlåningsränta']
    },
    {
      ref: '13–14 §§', rubrik: 'Föreskrifter och överklagande',
      text: [
        'Skolverket får skriva föreskrifter om hur förordningen ska verkställas. Skolverkets sidor om bidraget hänvisar bara till förordningen.',
        'Beslut enligt förordningen får inte överklagas.'
      ],
      nyckelord: ['föreskrifter', 'överklaga', 'skolfs']
    },
    {
      ref: 'Övergång', rubrik: 'Övergångsbestämmelser',
      text: [
        'Förordningen började gälla den 12 oktober 2021 och användes första gången för bidragsåret 2022.',
        'Den har ändrats flera gånger, senast genom SFS 2023:528 som började gälla den 1 oktober 2023. För beslut som fattades före en ändring gäller de äldre reglerna.'
      ],
      nyckelord: ['övergång', 'äldre regler', '2023:528', 'ikraftträdande']
    }
  ],

  kalkylatorer: [
    {
      id: 'ram', modul: 'kvalitetshojande-atgarder-forskolan-ram',
      flik: 'Bidragsramen', eyebrow: 'Bidragsram enligt 6 §',
      rubrik: 'Invånare och index', rubrikKursiv: 'styr ramen.',
      ingress: 'Räknaren visar principen i förordningen. Kommunens index och korrigeringsfaktorn räknas fram av SCB, så siffrorna här är exempel. Den riktiga ramen står i Skolverkets beslut.',
      formel: { rubrik: 'Grundformeln', text: 'Ram = pengarna för året ÷ landets invånare × kommunens index × kommunens invånare × korrigeringsfaktor.' },
      resultatRubrik: 'Exempel på bidragsram',
      falt: [
        { id: 'medel', typ: 'tal', etikett: 'Pengar för året', min: 1, max: 1e12, steg: 1, standard: 2886000000, enhet: 'kr',
          hjalp: 'Anslaget för 2027 enligt Skolverket. Summan av ramarna kan bli något annorlunda.' },
        { id: 'landetsInvanare', typ: 'tal', etikett: 'Invånare i landet den 30 juni året före', min: 1, max: 1e8, steg: 1, standard: 10610500,
          hjalp: 'SCB: 10 610 500 personer den 30 juni 2026, avrundat. Det är det datum som gäller för bidragsåret 2027.' },
        { id: 'kommunensInvanare', typ: 'tal', etikett: 'Invånare i kommunen samma dag', min: 1, max: 1e7, steg: 1, standard: 50000,
          hjalp: 'Exempelvärde.' },
        { id: 'index', typ: 'tal', etikett: 'Kommunens index', min: 0.01, max: 10, steg: 'any', standard: 1,
          hjalp: 'Exempelvärde. 1 betyder samma som genomsnittet i landet. SCB räknar fram det riktiga indexet.' },
        { id: 'korrigering', typ: 'tal', etikett: 'Korrigeringsfaktor', min: 0.5, max: 2, steg: 'any', standard: 1,
          hjalp: 'Bestäms så att alla kommuners belopp tillsammans blir den totala ramen. 1 betyder ingen korrigering.' }
      ],
      exempel: [
        { etikett: 'Index över genomsnittet', varden: { index: 1.15 } },
        { etikett: 'Liten kommun', varden: { kommunensInvanare: 5000 } },
        { etikett: 'Pengarna för 2026', varden: { medel: 3086000000, landetsInvanare: 10592700 } }
      ],
      resultatNotis: 'Det här visar hur beräkningen går till. Kommunens verkliga ram bestäms av Skolverket utifrån SCB:s beräkning.',
      forbehall: [
        { rubrik: 'Formel', text: 'Räknaren följer 6 § tredje stycket. Ett index på 1,15 ger 15 procent mer per invånare än ett index på 1.' },
        { rubrik: 'Det räknaren inte gör', text: 'Den räknar inte fram kommunens index. Indexet bygger på standardkostnaden i den kommunala kostnadsutjämningen och en socioekonomisk justering för barn som är 1–5 år. Räknaren prövar inte heller villkoren eller vad kommunen har begärt ut.' },
        { rubrik: 'Uppgifterna', text: 'Antalet invånare i landet är SCB:s avrundade siffra. För 2026 är exemplet räknat med 10 592 700 invånare den 30 juni 2025. Förordningen anger ingen lägsta ram och ingen avrundning. Räknaren visar hela kronor.' }
      ]
    }
  ],

  process: [
    { rubrik: 'Kontrollera ramen', text: 'Hämta Skolverkets beslut om bidragsramar för året. Ramarna för 2027 är inte publicerade ännu.', ref: '5–6 §§' },
    { rubrik: 'Planera användningen', text: 'Bestäm hur pengarna ska fördelas mellan de tre ändamålen. Bestäm också om en del ska gå till fristående förskolor och hur det i så fall ska gå till.', ref: '3–4 §§' },
    { rubrik: 'Begär ut pengarna', text: 'Begäran om utbetalning för 2027 är öppen 15 januari–15 februari 2027 i e-tjänsten. Ange hur mycket ni planerar för varje ändamål. Ni kan inte begära mer än ramen.', ref: '7 §' },
    { rubrik: 'Använd pengarna under året', text: 'Hälften betalas ut vid beslutet i mars eller april, resten planeras till september. Kostnaderna ska uppstå under kalenderåret.', ref: '2–3 §§, 7 §' },
    { rubrik: 'Redovisa året efter', text: 'Redovisa per ändamål och hur mycket som gått till fristående förskolor. För 2026: 1 mars–1 april 2027. För 2027: 1 mars–3 april 2028.', ref: '9–12 §§' }
  ],

  underlagRubrik: 'Underlag att ha till hands',
  underlagIngress: 'Använd listan när ni förbereder begäran och redovisning. Markeringarna sparas inte – de försvinner när ni stänger sidan.',
  underlag: [
    'Skolverkets beslut om kommunens bidragsram för året.',
    'En plan för hur mycket som ska gå till barngrupper, personal och kompetensutveckling.',
    'Kommunens beslut om fördelning till fristående förskolor, om pengar ska gå vidare dit.',
    'Uppgifter om barngruppernas storlek i förhållande till Skolverkets riktmärke.',
    'Kostnader per ändamål under kalenderåret, utan moms om kommunen får tillbaka momsen.',
    'Underlag som visar att kostnaderna inte redan är betalda med ett annat statsbidrag.',
    'Vem som har behörighet till bidraget i e-tjänsten för statsbidrag.'
  ],

  kallor: [
    {
      titel: 'Förordning (2021:848) · Sveriges riksdag',
      url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-2021848-om-statsbidrag-for_sfs-2021-848/',
      beskrivning: 'Källan för ändamål, bidragsram, index, utbetalning, uppföljning och återkrav. Paragrafhänvisningarna i guiden gäller den här förordningen.'
    },
    {
      titel: 'Statsbidrag för kvalitetshöjande åtgärder i förskolan 2027 · Skolverket',
      url: 'https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-kvalitetshojande-atgarder-i-forskolan-2027',
      beskrivning: 'Anslag, datum för begäran och redovisning, riktmärket för barngrupper, fristående förskolor och vanliga frågor för 2027.'
    },
    {
      titel: 'Statsbidrag för kvalitetshöjande åtgärder i förskolan 2026 · Skolverket',
      url: 'https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-kvalitetshojande-atgarder-i-forskolan-2026',
      beskrivning: 'Bidragsramar och beslut för 2026, moms, avskrivning och redovisningen 2027.'
    },
    {
      titel: 'Befolkningsstatistik första halvåret 2026 · SCB',
      url: 'https://www.scb.se/hitta-statistik/statistik-efter-amne/befolkning-och-levnadsforhallanden/befolkningens-sammansattning-och-utveckling/befolkningsstatistik/pong/statistiknyhet/befolkningsstatistik-forsta-halvaret-2026/',
      beskrivning: 'Antalet folkbokförda i Sverige den 30 juni 2026, som räknaren använder som exempel.'
    }
  ],

  forbehall: 'Guiden sammanfattar reglerna och visar hur ramen räknas fram. Räknaren räknar inte fram kommunens index och prövar inte rätten till bidrag eller hur pengarna används. Använd Skolverkets beslut om bidragsramar och aktuella anvisningar när ni begär ut och redovisar. Om fristående förskolor får del av pengarna bestämmer kommunen.'
};
