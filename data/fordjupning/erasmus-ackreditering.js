/* Fördjupning: Erasmus+ mobilitet ackreditering inom förskola och skola (KA120-SCH och budget KA121-SCH).
 * EU-medel, inte statsbidrag. Innehållet är stämt mot Erasmus+ programguide 2026 (version 1, 12.11.2025),
 * avsnitten "Erasmus accreditation in the fields of vocational education and training, school education and adult
 * education" och "Accredited projects for mobility of pupils and staff in school education", UHR:s sidor och UHR:s
 * "Rules of budget allocation for accredited applicants" för skola 2026. Schema: se FORDJUPNING.md. */
window.SB_FORDJUPNING = window.SB_FORDJUPNING || {};
window.SB_FORDJUPNING['erasmus-ackreditering'] = {
  id: 'erasmus-ackreditering',
  rubrik: 'Erasmus+ ackreditering',
  rubrikKursiv: 'i klartext.',
  ingress: 'Vad innebär det att vara ackrediterad, hur bedöms ansökan och hur fördelas pengarna sedan varje år? Här står reglerna för skolor, förskolor och huvudmän på vanlig svenska. Ni kan också räkna på grundbidrag och tak enligt UHR:s regler för 2026.',
  kontrollerad: '2026-10-01',
  forordning: {
    namn: 'Erasmus+ programguide 2026',
    etikett: 'Erasmus+ programguide 2026',
    iText: 'i programguiden',
    url: 'https://erasmus-plus.ec.europa.eu/document/erasmus-programme-guide-2026',
    lydelse: 'version 1 av 12 november 2025'
  },

  snabbfaktaRubrik: 'Två steg att hålla isär',
  snabbfakta: [
    { rubrik: 'Ackrediteringen', text: 'Ni söker en gång och beskriver en plan för hela organisationen, en Erasmusplan. Ackrediteringen ger inga pengar i sig, men ger tillgång till pengar varje år.' },
    { rubrik: 'Den årliga budgeten', text: 'Varje februari söker ni budget för nästa års utbyten. Ansökan bedöms inte på nytt för kvalitet. Alla godkända sökande får pengar, men beloppet kan bli lägre än det ni söker.' }
  ],
  snabbfaktaNot: 'Erasmus+ är EU-medel som UHR fördelar i Sverige, inte statsbidrag. Ansökan om ackreditering för 2026 stängde 29 september 2026.',

  begreppRubrik: 'Ord som återkommer',
  begrepp: [
    { term: 'Ackreditering', forklaring: 'Ett godkännande från UHR som ger enklare tillgång till pengar för utbyten varje år under programperioden.' },
    { term: 'Erasmusplan', forklaring: 'Organisationens plan för vad den vill uppnå med utbytena och hur. Den är kärnan i ansökan och gäller två till fem år.' },
    { term: 'Mobilitetskonsortium', forklaring: 'En grupp svenska organisationer som gör utbyten tillsammans. En samordnare, till exempel en kommun, har ackrediteringen och söker pengar för alla.' },
    { term: 'Kvalitetsstandarder', forklaring: 'EU:s regler för hur utbyten ska planeras, genomföras och följas upp. Den som söker ackreditering förbinder sig att följa dem.' },
    { term: 'Grundbidrag och tak', forklaring: 'Det minsta och det största belopp en ackrediterad organisation kan få ett år enligt UHR:s fördelningsregler.' }
  ],

  sektioner: {
    regler: {
      rubrik: 'Från programguide', rubrikKursiv: 'till praktik.',
      ingress: 'Rubrikerna följer programguidens avsnitt om ackreditering och om ackrediterade projekt inom skola. Öppna det ni behöver, eller sök på till exempel ”konsortium”, ”poäng” eller ”giltighet”.'
    },
    praktik: {
      rubrik: 'Så används', rubrikKursiv: 'reglerna.',
      ingress: 'Ackrediteringen är ett långsiktigt åtagande. Efter godkännandet söker ni budget varje år, genomför projekten och rapporterar. Minst en gång på fem år ska ni redovisa hur det går med Erasmusplanen.'
    }
  },

  paragrafer: [
    {
      ref: 'Erasmusackreditering', rubrik: 'Vad en ackreditering är',
      text: [
        'En Erasmusackreditering visar att organisationen har en plan för utbyten av hög kvalitet som en del av sitt utvecklingsarbete. Planen kallas Erasmusplan.',
        'Ni kan söka ackreditering för er egen organisation eller som samordnare för ett mobilitetskonsortium. Tidigare erfarenhet av Erasmus+ krävs inte.',
        'Den som är ackrediterad får enklare tillgång till pengar för utbyten genom ackrediterade projekt. Organisationer som har varit ackrediterade en tid kan få en utmärkelse för goda resultat.'
      ],
      praktik: {
        rubrik: 'UHR:s förklaring',
        text: 'Syftet är att gå från enstaka projekt till långsiktig och strategisk planering. Vill ni bara göra några utbyten finns korttidsprojekt i stället. En ackrediterad organisation kan inte söka korttidsprojekt inom samma område.'
      },
      nyckelord: ['ackreditering', 'KA120', 'Erasmusplan', 'långsiktig', 'strategi', 'utmärkelse']
    },
    {
      ref: 'Vem kan söka', rubrik: 'Vem kan söka inom skola',
      text: [
        'Inom skola kan två slags organisationer söka. Den ena är skolor med allmän utbildning på förskole-, grundskole- eller gymnasienivå, inklusive förskolor. Den andra är kommuner, regioner, samordningsorgan och andra organisationer med en roll inom skolan.',
        'Varje land bestämmer vilka utbildningar och organisationer som räknas. Sökanden ska vara etablerad i ett EU-land eller ett associerat land och söker hos sitt eget lands programkontor.'
      ],
      praktik: {
        rubrik: 'UHR:s förklaring',
        text: 'I Sverige kan förskolor och skolor som finns i Skolverkets skolenhetsregister söka, liksom huvudmän för dem – kommunala och enskilda. Fristående skolor kan alltså söka. Även organisationer som till exempel ansvarar för kompetensutveckling eller tillsyn inom skolan kan söka. Yrkesprogram och komvux söker inom andra områden.'
      },
      nyckelord: ['vem kan söka', 'fristående', 'huvudman', 'kommun', 'förskola', 'skolenhetsregistret']
    },
    {
      ref: 'Antal ansökningar', rubrik: 'En ansökan per område',
      text: [
        'En organisation kan söka en gång inom varje område: skola, yrkesutbildning och vuxenutbildning. Den som är verksam inom flera områden skickar en ansökan för varje.',
        'Den som redan har en ackreditering inom ett område kan inte söka en ny inom samma område.',
        'Ni söker antingen som egen organisation eller som samordnare för ett konsortium, inte båda inom samma område.'
      ],
      nyckelord: ['antal ansökningar', 'område', 'sektor', 'en per område']
    },
    {
      ref: 'Mobilitetskonsortium', rubrik: 'Söka som konsortium',
      text: [
        'Ett mobilitetskonsortium är en grupp organisationer från samma land som gör utbyten utifrån en gemensam Erasmusplan. Samordnaren ska ha ackrediteringen. Medlemmarna behöver ingen egen ackreditering.',
        'I ansökan beskriver samordnaren syftet och ungefär vilka slags organisationer som ska vara med. En exakt lista behövs inte förrän i budgetansökan. Där ska det finnas minst en medlem utöver samordnaren.',
        'Samarbetet ska bygga på samverkan utan vinstsyfte. Inom skola kan en konsortiemedlem vara med i högst två ansökningar om utbyten samma år. Söker den också eget korttidsprojekt eller egen budget kan den alltså vara med i ett konsortium till.'
      ],
      praktik: {
        rubrik: 'UHR:s förklaring',
        text: 'Konsortiet får bara omfatta ett område, till exempel skola, där förskola ingår. Det behöver inte finnas något organisatoriskt samband mellan samordnaren och medlemmarna. Medlemmarna kan vara olika från år till år.'
      },
      nyckelord: ['konsortium', 'samordnare', 'kommun', 'medlem', 'flera skolor', 'huvudman']
    },
    {
      ref: 'Ansökningsdatum', rubrik: 'När ni söker ackreditering',
      text: [
        'Sista dag för ansökan om ackreditering i 2026 års utlysning var 29 september 2026 kl. 12.00 (Bryssel-tid).'
      ],
      praktik: {
        rubrik: 'UHR:s förklaring',
        text: 'Ansökan öppnar på våren eller sommaren och stänger på hösten. Ansökan görs i EU:s webbformulär KA120-SCH och kan skrivas på svenska eller engelska. Ni söker ingen budget i ackrediteringsansökan, men uppskattar hur många utbyten ni vill göra de kommande två till fem åren. Besked kommer i början av vårterminen.'
      },
      nyckelord: ['deadline', 'sista dag', '29 september', 'september', 'KA120-SCH', 'ansökan']
    },
    {
      ref: 'Kvalitetsstandarder', rubrik: 'Erasmus kvalitetsstandarder',
      text: [
        'Den som söker förbinder sig att följa Erasmus kvalitetsstandarder. De handlar bland annat om inkludering, miljö, digitalisering, hur deltagare väljs och förbereds och hur lärandet tas till vara.',
        'Standarderna kan ändras under perioden. Då måste den ackrediterade organisationen godkänna de nya innan den kan söka nästa budget.'
      ],
      nyckelord: ['kvalitetsstandarder', 'quality standards', 'inkludering', 'miljö', 'digital', 'kvalitet']
    },
    {
      ref: 'Urvalskriterier', rubrik: 'Kapacitet och egen text',
      text: [
        'Den som söker ska ha tillräcklig kapacitet att genomföra Erasmusplanen. Det innebär minst två års relevant erfarenhet inom området. Erfarenhet från före en sammanslagning av till exempel skolor räknas med.',
        'Ekonomin kontrolleras senare, när ni söker budget.',
        'Ni intygar på heder och samvete att ingen har fått betalt för att skriva ansökan. Ni får gärna ta råd av myndigheter, experter och mer erfarna organisationer.'
      ],
      nyckelord: ['kapacitet', 'två år', 'erfarenhet', 'heder och samvete', 'konsult', 'skriva ansökan']
    },
    {
      ref: 'Bedömningskriterier', rubrik: 'Så bedöms ansökan',
      text: ['Ansökan bedöms med poäng, högst 100. För att godkännas krävs minst 70 poäng och minst hälften av poängen i varje del.'],
      lista: [
        'Relevans, högst 10 poäng.',
        'Erasmusplanens mål, högst 40 poäng: att målen svarar mot behoven, är realistiska och kan följas upp.',
        'Erasmusplanens aktiviteter, högst 20 poäng: att antalet deltagare passar organisationens storlek och mål, och att deltagare med begränsade möjligheter får vara med.',
        'Hur arbetet leds, högst 30 poäng: uppgifter, resurser, ledningens engagemang och hur resultaten tas in i det vanliga arbetet.'
      ],
      praktik: {
        rubrik: 'UHR:s förklaring',
        text: 'Två bedömare bedömer ansökan var för sig och kommer sedan fram till en gemensam bedömning. Ansökan kan ha 1–10 mål. Ni behöver inte ha partner klara när ni söker.'
      },
      nyckelord: ['bedömning', 'poäng', '70 poäng', 'mål', 'kriterier']
    },
    {
      ref: 'Högsta antal ackrediteringar', rubrik: 'Hur många som kan godkännas',
      text: [
        'Programkontoret bestämmer hur många ackrediteringar som kan ges inom varje område, utifrån pengarna. Beslutet publiceras minst 14 dagar före sista ansökningsdag.',
        'Godkända ansökningar rangordnas efter poäng. Har flera samma poäng som den sista som får plats, godkänns alla med den poängen.'
      ],
      praktik: {
        rubrik: 'UHR:s förklaring',
        text: 'I 2026 års omgång kan UHR godkänna högst 10 ackrediteringar inom förskola och skola, 15 inom vuxnas lärande och 20 inom yrkesutbildning.'
      },
      nyckelord: ['antal', 'tio', 'rangordning', 'konkurrens', 'platser']
    },
    {
      ref: 'Giltighet', rubrik: 'Hur länge ackrediteringen gäller',
      text: [
        'Ackrediteringar från 2026 års utlysning gäller från 1 februari 2027 till 31 december 2027, när programperioden slutar.',
        'Om en ackreditering behövs även efter 2027 kan programkontoret förlänga den, på villkor som EU-kommissionen bestämmer. Därför får Erasmusplanen vara två till fem år lång. Projekt som redan beviljats får avslutas efter 2027.',
        'En ackreditering kan inte överlåtas till en annan organisation. Vid till exempel en sammanslagning kan programkontoret flytta den till en efterträdare efter ansökan.'
      ],
      praktik: {
        rubrik: 'UHR:s förklaring',
        text: 'EU:s nästa program gäller 2028–2034. Detaljerna är inte klara. UHR skriver att inriktningen är att ackreditering ska finnas kvar, och att programguiden för 2027 ska innehålla övergångsregler.'
      },
      nyckelord: ['giltighet', '2027', '2028', 'förlängning', 'övergång', 'programperiod', 'överlåta']
    },
    {
      ref: 'Rapportering och kvalitetssäkring', rubrik: 'Rapporter, uppföljning och åtgärder',
      text: [
        'Efter varje beviljat projekt lämnar organisationen en slutrapport. Minst en gång på fem år ska den också rapportera hur kvalitetsstandarderna följs och hur Erasmusplanens mål går, och uppdatera planen.',
        'Programkontoret kan göra kontroller och besök. Vid brister kan det sätta organisationen under observation och begränsa pengarna, stänga av den eller avsluta ackrediteringen.',
        'Ackrediteringen kan avslutas om organisationen inte har sökt budget tre år i rad.'
      ],
      nyckelord: ['rapport', 'slutrapport', 'uppföljning', 'observation', 'avstängning', 'kontroll', 'tre år']
    },
    {
      ref: 'Ackrediterade projekt', rubrik: 'Den årliga budgetansökan',
      text: [
        'Den som har en giltig ackreditering när projektet startar kan söka budget en gång per omgång. Sista dag i 2026 var 19 februari kl. 12.00.',
        'Projekten startar 1 juni samma år och pågår i 15 månader. Ni kan begära förlängning till 24 månader. Projekt från olika år kan därför löpa parallellt.',
        'Antalet deltagare är inte begränsat, utöver det som följer av budgeten. Aktiviteterna och bidragsreglerna är desamma som i korttidsprojekt.'
      ],
      praktik: {
        rubrik: 'UHR:s förklaring',
        text: 'Ansökan om budget öppnar före årsskiftet och stänger i februari. Den görs i formuläret KA121-SCH. Slutrapporten ska lämnas inom 60 dagar efter projektets sista dag. Slututbetalningen kommer senast 60 dagar efter att rapporten kommit in.'
      },
      nyckelord: ['budgetansökan', 'KA121', 'februari', '15 månader', '24 månader', 'parallella projekt', 'slutrapport']
    },
    {
      ref: 'Budgetfördelning', rubrik: 'Hur pengarna fördelas',
      text: [
        'Erasmusplanen har redan bedömts. Budgetansökan bedöms därför inte för kvalitet, och alla godkända sökande får pengar.',
        'Hur mycket det blir beror på hur mycket pengar som finns, vad ni söker för, grundbidrag och tak, och på kvalitet, prioriteringar och ibland geografisk balans. Ingen kan få mer än den beräknade kostnaden för de sökta aktiviteterna.',
        'Får ni mindre än ni söker minskas antalet utbyten ni ska genomföra i samma proportion.'
      ],
      praktik: {
        rubrik: 'UHR:s regler för 2026',
        text: 'För skola fanns 11 161 000 euro att fördela 2026. Grundbidraget var minst 20 000 euro, för konsortier 20 000 euro per organisation och högst 100 000 euro. Den som har avslutat projekt fick 80 procent av sitt högsta förbrukade bidrag de tre senaste projekten, om det var mer. Taket var 200 000 euro, för konsortier 200 000 euro per organisation och högst 600 000 euro. Resten fördelades efter poäng och prioriteringar, till exempel deltagare med begränsade möjligheter.'
      },
      nyckelord: ['budget', 'fördelning', 'grundbidrag', 'tak', '20000', '200000', 'konsortium', 'poäng', 'förbrukning']
    }
  ],

  kalkylatorer: [
    {
      id: 'ram', modul: 'erasmus-ackreditering-ram',
      flik: 'Grundbidrag och tak', eyebrow: 'UHR:s fördelningsregler för skola 2026',
      rubrik: 'Hur mycket kan', rubrikKursiv: 'ni räkna med?',
      ingress: 'Räknaren visar grundbidraget i första fördelningsfasen och taket, enligt UHR:s regler för budgetansökan 2026. Regler och belopp för kommande år kan ändras.',
      formel: { rubrik: 'Grundformeln', text: 'Första fasen = det lägsta av grundbidraget och er beräknade budget. Grundbidrag = 20 000 euro, eller 80 % av ert högsta förbrukade bidrag om det är mer.' },
      resultatRubrik: 'Grundbidrag i första fasen',
      falt: [
        { id: 'typ', typ: 'segment', etikett: 'Hur är ni ackrediterade?', standard: 'egen',
          alternativ: [
            { varde: 'egen', etikett: 'Egen organisation', hjalp: 'Ackrediteringen gäller bara er organisation.' },
            { varde: 'konsortium', etikett: 'Konsortium', hjalp: 'Ni samordnar ett konsortium. Räkna samordnaren och alla medlemmar.' }
          ] },
        { id: 'organisationer', typ: 'tal', etikett: 'Antal organisationer i konsortiet', min: 2, max: 500, steg: 1, standard: 3,
          visasOm: { falt: 'typ', ar: 'konsortium' }, hjalp: 'Samordnaren och medlemmarna tillsammans.' },
        { id: 'behov', typ: 'tal', etikett: 'Beräknad budget för de aktiviteter ni söker', min: 0, max: 10000000, steg: 1, standard: 60000, enhet: 'euro',
          hjalp: 'UHR räknar fram den utifrån schablonerna. Använd gärna räknaren för korttidsprojekt för att uppskatta den.' },
        { id: 'tidigare', typ: 'kryss', etikett: 'Vi har avslutat minst ett ackrediterat projekt', standard: false },
        { id: 'hogsta', typ: 'tal', etikett: 'Högsta förbrukade bidrag i de tre senast avslutade projekten', min: 0, max: 10000000, steg: 1, standard: 50000, enhet: 'euro',
          visasOm: { falt: 'tidigare', ar: true } },
        { id: 'lagPoang', typ: 'kryss', etikett: 'Vår senaste rapport om kvalitetsstandarder eller Erasmusplan fick under 25 poäng', standard: false }
      ],
      exempel: [
        { etikett: 'Nyackrediterad skola', varden: { typ: 'egen', behov: 60000 } },
        { etikett: 'Kommunalt konsortium med fem skolor', varden: { typ: 'konsortium', organisationer: 6, behov: 250000 } },
        { etikett: 'Erfaren skola', varden: { typ: 'egen', behov: 90000, tidigare: true, hogsta: 70000 } }
      ],
      resultatNotis: 'Det här är bara första fasen. Mer pengar kan komma i nästa fas, efter poäng och prioriteringar. Beslutet kommer från UHR.',
      forbehall: [
        { rubrik: 'Regler', text: 'Beloppen kommer från UHR:s ”Rules of budget allocation for accredited applicants” för skola 2026. Räcker pengarna i första fasen inte till alla minskas grundbidragen i samma takt, men inte under 20 000 euro per organisation. Räcker pengarna till alla får alla det de söker, upp till taket.' },
        { rubrik: 'Det här prövar räknaren inte', text: 'Fördelningen i andra fasen, regeln om att taket sänks för den som förbrukade under hälften av sitt senaste bidrag, observation och kostnader för inkludering och särskilda kostnader, som söks separat. Den räknar inte heller fram er budget – det gör UHR utifrån de aktiviteter ni söker för.' }
      ]
    }
  ],

  process: [
    { rubrik: 'Skriv Erasmusplanen', text: 'Beskriv organisationens behov, 1–10 mål och hur utbytena ska hjälpa er att nå dem. Bestäm om ni söker själva eller som konsortium. Skaffa OID och EU Login.', ref: 'Erasmusackreditering' },
    { rubrik: 'Sök ackreditering', text: 'Ansökan görs i formuläret KA120-SCH. 2026 var sista dag 29 september kl. 12.00. Nästa omgång väntas under 2027 enligt programguiden för det året.', ref: 'Ansökningsdatum' },
    { rubrik: 'Besked', text: 'UHR skickar besked i början av vårterminen. Ackrediteringar från 2026 års omgång gäller från 1 februari 2027.', ref: 'Giltighet' },
    { rubrik: 'Sök budget varje år', text: 'Ansökan öppnar före årsskiftet och stänger i februari. Projektet startar 1 juni och pågår 15 månader, med möjlighet till förlängning.', ref: 'Ackrediterade projekt' },
    { rubrik: 'Rapportera och utveckla', text: 'Lämna slutrapport inom 60 dagar efter varje projekt. Minst en gång på fem år rapporterar ni om kvalitet och mål och uppdaterar Erasmusplanen.', ref: 'Rapportering och kvalitetssäkring' }
  ],

  underlagRubrik: 'Underlag att ha till hands',
  underlagIngress: 'Använd listan när ni förbereder ansökan och de årliga budgetansökningarna. Markeringarna sparas inte – de försvinner när ni stänger sidan.',
  underlag: [
    'OID-nummer och EU Login-konto.',
    'Organisationens utvecklingsplan, behov och eventuell strategi för internationellt arbete.',
    'Erasmusplanens mål och hur de ska följas upp.',
    'En uppskattning av hur många utbyten ni vill göra under två till fem år, och för vilka.',
    'För konsortier: vilka slags organisationer som ska vara med, och senare medlemsavtal med varje medlem.',
    'Vem som ansvarar för Erasmus-arbetet och hur arbetet fortsätter om personal byts ut.',
    'Inför budgetansökan: planerade aktiviteter, deltagare, länder och avstånd.'
  ],

  kallor: [
    {
      titel: 'Erasmus+ programguide 2026 · Europeiska kommissionen',
      url: 'https://erasmus-plus.ec.europa.eu/document/erasmus-programme-guide-2026',
      beskrivning: 'Regelverket för ackreditering, konsortier, bedömning, giltighet och ackrediterade projekt. Den engelska versionen gäller vid skillnader.'
    },
    {
      titel: 'Erasmus+ mobilitet ackreditering · UHR',
      url: 'https://www.uhr.se/internationella-mojligheter/samarbete-och-utbyte/sok-finansiering/erasmus-mobilitet-ackreditering/',
      beskrivning: 'UHR:s sida om vem som kan söka, konsortier, antal ackrediteringar 2026, ansökan och beslut.'
    },
    {
      titel: 'Projektsida Erasmus+ ackreditering skola · UHR',
      url: 'https://www.uhr.se/internationella-mojligheter/samarbete-och-utbyte/hantera-projekt/erasmus-mobilitet-ackreditering/skola/',
      beskrivning: 'Om budgetansökan, projekttid, slutrapport och övergången till nästa programperiod.'
    },
    {
      titel: 'Rules of budget allocation for accredited applicants, skola 2026 · UHR',
      url: 'https://www.uhr.se/globalassets/_uhr.se/internationellt/samarbete-och-utbyte/program/erasmus/mobilitet/driv-projekt/rules-of-budget-allocation-for-accredited-applicants-ka1-sch-2026.pdf',
      beskrivning: 'Källan för budget, grundbidrag, tak och fördelningen som räknaren använder.'
    }
  ],

  forbehall: 'Erasmus+ är EU-medel och inte statsbidrag. Guiden sammanfattar programguiden för 2026 och UHR:s anvisningar. Räknaren visar bara första fasen av budgetfördelningen enligt UHR:s regler för 2026 och kan inte förutsäga ert beslut. Programperioden slutar 2027 och reglerna för nästa program är inte klara. Läs alltid aktuell programguide, UHR:s fördelningsregler för året och ert kontrakt.'
};
