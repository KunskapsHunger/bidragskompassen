/* Fördjupning: Statsbidrag för språkfrukost – regleringsbrevet för 2026 avseende Statens skolverk.
 * Det finns ingen egen förordning. Bidraget styrs av uppdrag 21 och villkoren under "Finansiering" i
 * regleringsbrevet (ändrat t.o.m. regeringsbeslut 2026-09-03, U2026/01562; språkfrukost tillkom 2026-06-18).
 * Innehållet är också stämt mot Skolverkets sida "Statsbidrag för språkfrukost 2026" och stödsidan
 * "Språkfrukost i skolan" (båda senast uppdaterade 17 september 2026). Schema: se FORDJUPNING.md. */
window.SB_FORDJUPNING = window.SB_FORDJUPNING || {};
window.SB_FORDJUPNING['sprakfrukost'] = {
  id: 'sprakfrukost',
  rubrik: 'Språkfrukost',
  rubrikKursiv: 'i klartext.',
  ingress: 'Vem kan få bidrag, vad räknas som regelbundet och vilka kostnader får ni ta med? Här står villkoren för språkfrukost hösten 2026 på vanlig svenska. Ni kan också räkna på det högsta beloppet och på personalkostnader.',
  kontrollerad: '2026-10-01',
  forordning: {
    namn: 'Regleringsbrev för budgetåret 2026 avseende Statens skolverk',
    etikett: 'Regleringsbrevet 2026',
    iText: 'i regleringsbrevet',
    lydelse: 'ändrat t.o.m. regeringsbeslut 3 september 2026',
    url: 'https://www.esv.se/statsliggaren/regleringsbrev/?RBID=27547'
  },

  snabbfaktaRubrik: 'Tre saker att känna till först',
  snabbfakta: [
    { rubrik: 'Bara huvudmän på listan', text: 'Bara kommuner och enskilda huvudmän som driver någon av de 500 skolenheter med svårast socioekonomiska förutsättningar kan söka. Skolverket har en lista.' },
    { rubrik: 'Högst 7 500 kr per erbjuden elev', text: 'Det är erbjudandet som räknas. Bidraget gäller elever i förskoleklass och årskurs 1–3 som behöver stärka sin svenska.' },
    { rubrik: 'Bara hösten 2026', text: 'Ansökan stängde 1 september 2026. Det finns 30 miljoner kr för hela landet. Om det kommer en ny omgång är inte känt.' }
  ],
  snabbfaktaNot: 'Det finns ingen egen förordning för bidraget. Villkoren står i Skolverkets regleringsbrev och på Skolverkets bidragssida.',

  begreppRubrik: 'Ord som återkommer',
  begrepp: [
    { term: 'Språkfrukost', forklaring: 'Eleverna erbjuds regelbundet frukost och språkträning tillsammans med skolpersonal som har goda kunskaper i svenska.' },
    { term: 'Huvudman', forklaring: 'Den som driver skolan, till exempel en kommun eller en fristående skola (enskild huvudman).' },
    { term: 'Regleringsbrev', forklaring: 'Regeringens årliga beslut om vad en myndighet ska göra och hur den får använda pengarna. Här står villkoren för språkfrukost.' },
    { term: 'Socioekonomiska förutsättningar', forklaring: 'Elevernas bakgrund, till exempel föräldrarnas utbildning och ekonomi.' },
    { term: 'Befintlig kostnad', forklaring: 'En kostnad ni redan hade innan ni började med språkfrukost. Den får bidraget inte gå till.' }
  ],

  sektioner: {
    regler: {
      rubrik: 'Från villkor', rubrikKursiv: 'till praktik.',
      ingress: 'Avsnitten följer regleringsbrevet och Skolverkets bidragssida. Öppna det avsnitt ni behöver, eller sök på till exempel ”fritids”, ”personal” eller ”redovisning”.'
    },
    praktik: {
      rubrik: 'Så används', rubrikKursiv: 'reglerna.',
      ingress: 'Ansökan är stängd. Nu gäller det att genomföra språkfrukosten under hösten, hålla isär kostnaderna och redovisa i början av 2027.'
    }
  },

  paragrafer: [
    {
      ref: 'Uppdrag 21', rubrik: 'Vad bidraget är till för',
      text: [
        'Regeringen har gett Skolverket i uppdrag att stödja kommuner och enskilda huvudmän med skolenheter med socioekonomiskt svåra förutsättningar att planera, organisera och genomföra språkfrukost. I uppdraget ingår att betala ut bidraget.',
        'Med språkfrukost menas att eleverna regelbundet erbjuds frukost och språkträning tillsammans med skolpersonal som har goda kunskaper i svenska.',
        'Insatsen ska riktas till elever i förskoleklass och grundskolans årskurs 1–3 som behöver stärka sina kunskaper i svenska.'
      ],
      praktik: 'Uppdraget lades till i regleringsbrevet i juni 2026, efter att riksdagen beslutat om vårändringsbudgeten. Skolverket ska redovisa uppdraget till regeringen senast den 12 mars 2027.',
      nyckelord: ['syfte', 'uppdrag', 'regleringsbrev', 'frukost', 'språkträning', 'svenska', 'vårändringsbudget']
    },
    {
      ref: 'Vem kan söka', rubrik: 'Bara huvudmän för de 500 skolenheterna',
      text: [
        'Bidraget kan sökas av kommuner eller enskilda huvudmän som ansvarar för någon av de 500 skolenheter som har svårast socioekonomiska förutsättningar.',
        'Enligt regleringsbrevet är bidraget till för att erbjuda språkfrukost vid just de skolenheterna, i förskoleklass och årskurs 1–3 i grundskolan.',
        'Statliga huvudmän och regioner finns inte med. Anpassad grundskola nämns inte.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Skolverket har publicerat en lista över huvudmännen och de skolenheter det gäller. Bara de som står på listan kan söka. Ni får samarbeta inom en huvudman, men bara om alla skolenheter i samarbetet har beviljats bidrag för språkfrukost.'
      },
      nyckelord: ['vem kan söka', 'lista', '500 skolenheter', 'kommun', 'fristående', 'enskild huvudman', 'socioekonomisk', 'samarbete']
    },
    {
      ref: 'Elever', rubrik: 'Vilka elever',
      text: [
        'Språkfrukosten ska riktas till elever som behöver stärka sina kunskaper i svenska. Bidraget gäller bara elever i förskoleklass och årskurs 1–3.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Huvudmannen väljer ut eleverna och avgör på vilka grunder en elev behöver språkfrukost. Eleverna behöver inte vara inskrivna på fritidshemmet. Skolenheten bestämmer gruppstorleken, men ska tänka på lokalen och att alla elever ska få tillfälle att prata.'
      },
      nyckelord: ['elever', 'urval', 'förskoleklass', 'årskurs 1-3', 'lågstadiet', 'behov', 'fritidshem', 'gruppstorlek']
    },
    {
      ref: 'Regelbundet', rubrik: 'Språkfrukost flera gånger under terminen',
      text: [
        'Språkfrukost ska erbjudas regelbundet. Det betyder att eleven ska erbjudas språkfrukost vid flera tillfällen under höstterminen 2026.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Det är huvudmannen som avgör hur många gånger. Språkfrukosten ska återkomma, till exempel varje vecka. Ett enstaka tillfälle räcker inte.'
      },
      nyckelord: ['regelbundet', 'flera gånger', 'varje vecka', 'hösttermin', 'tillfällen']
    },
    {
      ref: 'Personal', rubrik: 'Vem som håller i språkfrukosten',
      text: [
        'Språkfrukosten ska hållas av lämplig personal. Det betyder skolpersonal med goda kunskaper i svenska. Det behöver inte vara behöriga lärare.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Skolenheten ansvarar för att personalen har goda kunskaper i svenska. Fritidshemspersonal och skolbibliotekarier kan vara lämpliga. En språk-, läs- och skrivutvecklare kan vara till hjälp när ni organiserar arbetet.'
      },
      nyckelord: ['personal', 'lärare', 'behörighet', 'fritidspersonal', 'skolbibliotekarie', 'svenska']
    },
    {
      ref: 'Kostnader', rubrik: 'Vad pengarna får gå till',
      text: [
        'Bidraget får gå till kostnader för frukost och för lämplig personal när ni ordnar språkfrukost.',
        'Bidraget får inte gå till befintliga kostnader, alltså sådant ni redan betalade innan.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Skolverket ger ett exempel. Lisa arbetar heltid med frukost på fritidshemmet och ska arbeta 25 procent med språkfrukost. Har hon 30 000 kr i månadslön kan 7 500 kr av lönen betalas med bidraget. Resten, 22 500 kr, är befintliga kostnader. Elever som redan brukar äta frukost på fritids men nu erbjuds språkfrukost räknas inte som en befintlig kostnad. Bidraget kan alltså användas för dem.'
      },
      nyckelord: ['kostnader', 'frukost', 'mat', 'lön', 'personal', 'befintliga kostnader', 'fritids', 'andel av lön', 'Lisa']
    },
    {
      ref: 'Belopp', rubrik: 'Hur stort bidraget är',
      text: [
        'Bidraget är högst 7 500 kr för varje elev som erbjuds att delta under höstterminen 2026.',
        'Skolverket får betala ut högst 30 miljoner kr. Räcker pengarna inte ska skolenheterna med svårast socioekonomiska förutsättningar prioriteras.'
      ],
      praktik: '30 miljoner kr räcker till 4 000 elever med fullt belopp i hela landet. Uträkningen är vår. Söker huvudmännen för fler elever än så prioriterar Skolverket skolenheterna med svårast förutsättningar. Andra kan då få mindre eller inget.',
      nyckelord: ['belopp', '7500', 'per elev', 'erbjuds', '30 miljoner', 'prioritering', 'urval']
    },
    {
      ref: 'Ansökan', rubrik: 'Ansökan',
      text: [
        'Ansökan för höstterminen 2026 var öppen 1 juli–1 september 2026 i Skolverkets e-tjänst för statsbidrag. Den är nu stängd.',
        'I ansökan angav huvudmannen hur många elever per skolenhet som skulle erbjudas språkfrukost.'
      ],
      lista: [
        'Intyga att ansökan gäller frukost och språkträning för elever i förskoleklass eller årskurs 1–3 som behöver stärka sin svenska.',
        'Intyga att huvudmannen använder lämplig personal, alltså skolpersonal med goda kunskaper i svenska.',
        'Intyga att eleverna erbjuds språkfrukost regelbundet, vid flera tillfällen under höstterminen.'
      ],
      praktik: 'En huvudman som inte har sökt statsbidrag i e-tjänsten tidigare behöver först registrera sig hos Skolverket och utse ett ombud.',
      nyckelord: ['ansökan', 'e-tjänst', 'juli', 'september', 'intyga', 'per skolenhet', 'ombud', 'registrera']
    },
    {
      ref: 'Beslut', rubrik: 'Beslut och utbetalning',
      text: [
        'Skolverket planerar att besluta i oktober 2026. Beslutet publiceras på bidragssidan och i e-tjänsten.',
        'Det beviljade beloppet betalas ut i samband med beslutet.'
      ],
      praktik: 'Pengarna kommer alltså i förskott. Spara underlag från början, eftersom ni ska redovisa hur de har använts.',
      nyckelord: ['beslut', 'oktober', 'utbetalning', 'förskott']
    },
    {
      ref: 'Redovisning', rubrik: 'Redovisning och uppföljning',
      text: [
        'Skolverket ska följa upp hur bidraget har använts.',
        'Redovisningen är öppen 15 januari–15 februari 2027 i e-tjänsten.'
      ],
      lista: [
        'Vilka utgifter ni har haft för att genomföra språkfrukost.',
        'Vilka elever ni har erbjudit språkfrukost.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Alla huvudmän som får statsbidrag kan bli kontrollerade. Skolverket skriver att ett återkrav bygger på om bidraget har använts till syftet. Det är därför bra om insatsen går att mäta och att ni har underlag, även om det inte finns något uttalat krav på dokumentation.'
      },
      nyckelord: ['redovisning', 'uppföljning', 'utgifter', 'elever', 'januari', 'februari', 'kontroll', 'dokumentation']
    },
    {
      ref: 'Återkrav', rubrik: 'Betala tillbaka',
      text: [
        'Regleringsbrevet säger inget om återkrav. Skolverkets stödsida skriver att bidraget regleras med bestämmelser om återkrav och att återkravet bygger på om bidraget har använts till syftet.',
        'Vi har inte hittat någon förordning för språkfrukost. Utgå från att pengar som inte används, eller inte används till språkfrukost, kan krävas tillbaka. Villkoren i ert beslut gäller.'
      ],
      nyckelord: ['återkrav', 'betala tillbaka', 'outnyttjat', 'villkor', 'beslut']
    }
  ],

  kalkylatorer: [
    {
      id: 'belopp', modul: 'sprakfrukost-belopp',
      flik: 'Räkna på bidrag', eyebrow: 'Belopp enligt regleringsbrevet',
      rubrik: 'Hur mycket', rubrikKursiv: 'kan det bli?',
      ingress: 'Ange hur många elever som erbjuds språkfrukost. Räknaren visar det högsta bidrag som 7 500 kr per elev ger. Vad ni faktiskt får står i Skolverkets beslut.',
      formel: { rubrik: 'Grundformeln', text: 'Högsta bidrag = 7 500 kr × elever som erbjuds språkfrukost.' },
      resultatRubrik: 'Högsta möjliga bidrag',
      falt: [
        { id: 'elever', typ: 'tal', etikett: 'Elever som erbjuds språkfrukost', min: 1, max: 100000, steg: 1, standard: 40,
          hjalp: 'Elever i förskoleklass och årskurs 1–3 vid skolenheterna på Skolverkets lista. Räkna alla som får erbjudandet.' }
      ],
      exempel: [
        { etikett: 'En skolenhet, 25 elever', varden: { elever: 25 } },
        { etikett: 'Flera skolenheter', varden: { elever: 180 } }
      ],
      resultatNotis: 'Beloppet är ett tak. Skolverket fördelar högst 30 miljoner kr och prioriterar skolenheter med svårast förutsättningar.',
      forbehall: [
        { rubrik: 'Formel', text: 'Regleringsbrevet anger högst 7 500 kr för varje elev som erbjuds att delta. Räknaren multiplicerar med antalet elever.' },
        { rubrik: 'Det här prövar räknaren inte', text: 'Om er huvudman och skolenhet står på listan, om eleverna hör till målgruppen eller om pengarna räcker. Bidraget ska gå till kostnader för frukost och personal, och de redovisas i efterhand.' }
      ]
    },
    {
      id: 'personal', modul: 'sprakfrukost-personal',
      flik: 'Personalkostnad', eyebrow: 'Skolverkets exempel',
      rubrik: 'Hur stor del', rubrikKursiv: 'av lönen räknas?',
      ingress: 'Arbetar någon redan på skolan får bidraget bara gå till den del av lönen som gäller språkfrukosten. Resten är befintliga kostnader. Räknaren följer Skolverkets exempel.',
      formel: { rubrik: 'Grundformeln', text: 'Lönekostnad som bidraget får gå till = månadslön × andel av tjänsten för språkfrukost × antal månader.' },
      resultatRubrik: 'Kan betalas med bidraget',
      falt: [
        { id: 'lon', typ: 'tal', etikett: 'Månadslön', min: 1, max: 200000, steg: 1, standard: 30000, enhet: 'kr',
          hjalp: 'Lön för heltid. Standardvärdet är Skolverkets exempel.' },
        { id: 'andel', typ: 'reglage', etikett: 'Andel av tjänsten för språkfrukost', min: 1, max: 100, steg: 1, standard: 25, enhet: '%' },
        { id: 'manader', typ: 'tal', etikett: 'Antal månader', min: 1, max: 6, steg: 1, standard: 1,
          hjalp: 'De månader under höstterminen 2026 som personen arbetar med språkfrukost.' }
      ],
      exempel: [
        { etikett: 'Lisa i Skolverkets exempel', varden: { lon: 30000, andel: 25, manader: 1 } },
        { etikett: 'Tio procent i fyra månader', varden: { lon: 32000, andel: 10, manader: 4 } }
      ],
      resultatNotis: 'Räknaren visar en uppdelning av lönen. Den visar inte vad Skolverket godkänner.',
      forbehall: [
        { rubrik: 'Formel', text: 'Skolverkets exempel: 30 000 kr × 25 % = 7 500 kr får betalas med bidraget, och 22 500 kr är befintliga kostnader. Antal månader är vårt tillägg för att räkna på hela terminen.' },
        { rubrik: 'Det här prövar räknaren inte', text: 'Arbetsgivaravgifter, semesterersättning eller andra lönekostnader. Skolverket nämner bara lön i sitt exempel. Fråga Skolverket om ni är osäkra på vad som räknas.' }
      ]
    }
  ],

  process: [
    { rubrik: 'Kontrollera listan', text: 'Se efter att er huvudman och skolenhet finns på Skolverkets lista över de 500 skolenheterna.', ref: 'Vem kan söka' },
    { rubrik: 'Ansök', text: 'Ansökan var öppen 1 juli–1 september 2026. Ni angav antal elever per skolenhet och intygade villkoren.', ref: 'Ansökan' },
    { rubrik: 'Beslut och pengar', text: 'Skolverket planerar att besluta i oktober 2026 och betalar ut pengarna i samband med beslutet.', ref: 'Beslut' },
    { rubrik: 'Genomför under hösten', text: 'Erbjud språkfrukost regelbundet, till exempel varje vecka. Använd personal med goda kunskaper i svenska. Håll isär kostnaderna för frukost och personal.', ref: 'Regelbundet, Kostnader' },
    { rubrik: 'Redovisa', text: 'Redovisa utgifter och vilka elever som erbjöds språkfrukost 15 januari–15 februari 2027.', ref: 'Redovisning' }
  ],

  underlagRubrik: 'Underlag att ha till hands',
  underlagIngress: 'Använd listan när ni genomför och redovisar. Markeringarna sparas inte – de försvinner när ni stänger sidan.',
  underlag: [
    'Skolverkets beslut med beviljat belopp.',
    'Vilka elever som erbjuds språkfrukost, per skolenhet och årskurs, och hur ni valde ut dem.',
    'Schema eller plan som visar att språkfrukosten erbjuds regelbundet.',
    'Vilken personal som håller i språkfrukosten och hur stor del av tjänsten det gäller.',
    'Kostnader för frukost, till exempel fakturor och kvitton.',
    'Lönekostnader för den del av tjänsten som gäller språkfrukost.',
    'Gärna något som visar hur insatsen har gått, till exempel uppföljning av elevernas språk.'
  ],

  kallor: [
    {
      titel: 'Regleringsbrev 2026 för Statens skolverk · Ekonomistyrningsverket',
      url: 'https://www.esv.se/statsliggaren/regleringsbrev/?RBID=27547',
      beskrivning: 'Uppdrag 21 (Språkfrukost i skolan) och villkoren under Finansiering: 30 miljoner kr, de 500 skolenheterna, prioritering och högst 7 500 kr per elev.'
    },
    {
      titel: 'Statsbidrag för språkfrukost 2026 · Skolverket',
      url: 'https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-sprakfrukost-2026',
      beskrivning: 'Datum, villkor, giltiga kostnader, exemplet om befintliga kostnader och listan över huvudmän som kan söka.'
    },
    {
      titel: 'Språkfrukost i skolan · Skolverket',
      url: 'https://www.skolverket.se/larande-och-trygghet/skolbibliotek-och-lasning/sprakfrukost-i-skolan',
      beskrivning: 'Stöd för att organisera språkfrukost: urval av elever, personal, gruppstorlek, regelbundenhet och samarbete inom en huvudman.'
    },
    {
      titel: 'Skolverket ska ge stöd att genomföra språkfrukost i skolan · Regeringen',
      url: 'https://www.regeringen.se/pressmeddelanden/2026/06/skolverket-ska-ge-stod-att-genomfora-sprakfrukost-i-skolan/',
      beskrivning: 'Pressmeddelandet från 18 juni 2026 om uppdraget och de 30 miljonerna.'
    }
  ],

  forbehall: 'Guiden sammanfattar villkoren i regleringsbrevet och Skolverkets anvisningar. Det finns ingen egen förordning, och reglerna om återkrav är inte lika tydliga som för andra bidrag. Räknarna kontrollerar inte rätten till bidrag eller vad Skolverket godkänner. Bidraget gäller hittills bara höstterminen 2026. Använd ert beslut och Skolverkets aktuella anvisningar när ni genomför och redovisar.'
};
