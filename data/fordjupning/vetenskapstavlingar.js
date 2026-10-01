/* Fördjupning: Statsbidrag för vetenskapstävlingar. Bidraget har ingen egen förordning.
 * Pengarna och prioriteringen står i regleringsbrevet för Skolverket (2026: anslag 1:5 ap. 3, högst 10 000 000 kr) och
 * villkoren på Skolverkets sidor för 2026 och 2027 (senast uppdaterad 22 september 2026). Paragrafernas ref är avsnitt.
 * Schema: se FORDJUPNING.md, "Regelverk som inte är en svensk förordning". */
window.SB_FORDJUPNING = window.SB_FORDJUPNING || {};
window.SB_FORDJUPNING['vetenskapstavlingar'] = {
  id: 'vetenskapstavlingar',
  rubrik: 'Vetenskapstävlingar',
  rubrikKursiv: 'i klartext.',
  ingress: 'Pengar till organisationer som tar elever till skololympiader och andra internationella vetenskapstävlingar, eller som ordnar tävlingar i Sverige. Här står villkoren på vanlig svenska.',
  kontrollerad: '2026-10-01',
  forordning: {
    namn: 'Skolverkets villkor för statsbidrag för vetenskapstävlingar 2027',
    etikett: 'Skolverkets villkor 2027',
    iText: 'på Skolverkets sida',
    url: 'https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-vetenskapstavlingar-2027',
    lydelse: 'sidan uppdaterad 22 september 2026'
  },

  snabbfaktaRubrik: 'Tre saker att känna till först',
  snabbfakta: [
    { rubrik: 'Internationellt först', text: 'Internationella tävlingar får pengar först. Nationella kvalificeringstävlingar får bara pengar om det finns kvar.' },
    { rubrik: 'Elever deltar – arrangören söker', text: 'Det är organisationen som skickar elever till tävlingen eller ordnar den som söker. Elever och skolor har nytta av bidraget genom tävlingarna och uttagningarna.' },
    { rubrik: 'Resor ja, löner nej', text: 'Resor, kost, logi och avgifter för elever och lärare godkänns. Löner, arvoden och prispengar godkänns inte.' }
  ],
  snabbfaktaNot: 'Det finns 10 miljoner kr att fördela för 2027. Ansökan är öppen 15 januari–15 februari 2027.',

  begreppRubrik: 'Ord som återkommer',
  begrepp: [
    { term: 'Vetenskapstävling', forklaring: 'En tävling för elever i ett ämne, till exempel matematik, fysik, kemi, biologi eller programmering.' },
    { term: 'Vetenskapsolympiad', forklaring: 'En internationell vetenskapstävling där länder skickar lag med elever.' },
    { term: 'Kvalificeringstävling', forklaring: 'En nationell uttagning där elever tävlar om en plats i den internationella tävlingen.' },
    { term: 'Regleringsbrev', forklaring: 'Regeringens årliga beslut om vad Skolverket ska göra och hur myndighetens pengar får användas.' }
  ],

  sektioner: {
    regler: {
      rubrik: 'Från villkor', rubrikKursiv: 'till praktik.',
      ingress: 'Bidraget styrs inte av en förordning. Rubrikerna följer regleringsbrevet och Skolverkets sida för 2027.'
    },
    praktik: {
      rubrik: 'Så används', rubrikKursiv: 'reglerna.',
      ingress: 'Organisationen ansöker i början av samma år som tävlingen hålls.'
    }
  },

  paragrafer: [
    {
      ref: 'Regleringsbrevet', rubrik: 'Var pengarna kommer ifrån',
      text: [
        'Bidraget har ingen egen förordning. I regleringsbrevet för 2026 står att högst 10 miljoner kr ska användas för elevers deltagande i och för anordnande av vetenskapstävlingar.',
        'Pengarna ska i första hand gå till vetenskapsolympiader och andra internationella tävlingar och i andra hand till nationella tävlingar och kvalificeringstävlingar. De ska fördelas så att kostnaderna står i rimlig proportion till aktiviteterna.'
      ],
      praktik: 'Skolverket skriver att det finns 10 miljoner kr för 2027 också.',
      nyckelord: ['regleringsbrev', '10 miljoner', 'prioritering', 'olympiad', 'rimlighet']
    },
    {
      ref: 'Vem kan söka', rubrik: 'Vem kan söka',
      text: [
        'Svenska organisationer som gör det möjligt för elever att delta i internationella och nationella vetenskapstävlingar.'
      ],
      praktik: {
        rubrik: 'Vilka som fick bidrag 2026',
        text: 'Skolverkets sida säger inte vilken sorts organisation det ska vara. I beslutet för 2026 finns bland annat lärar- och elevföreningar, vetenskapliga samfund, en högskola, företag och några skolhuvudmän. Pengarna gäller kostnader för en tävling eller elevers deltagande i den, inte skolans vanliga undervisning. Är ni osäkra på om ni kan söka, fråga Skolverket.'
      },
      nyckelord: ['vem kan söka', 'organisation', 'förening', 'samfund', 'skola', 'huvudman', 'elever']
    },
    {
      ref: 'Användning', rubrik: 'Vad pengarna får gå till',
      text: ['Bidraget får gå till kostnader för:'],
      lista: [
        'elevers deltagande i internationella vetenskapstävlingar utomlands,',
        'att ordna internationella tävlingar i Sverige,',
        'elevers deltagande i nationella kvalificeringstävlingar i Sverige,',
        'att ordna nationella kvalificeringstävlingar i Sverige.'
      ],
      nyckelord: ['internationell tävling', 'uttagning', 'kvalificering', 'anordna', 'deltagande']
    },
    {
      ref: 'Kostnader', rubrik: 'Godkända och ej godkända kostnader',
      text: [
        'Exempel på godkända kostnader: resor för elever och medföljande lärare, kost och logi, anmälningsavgifter, lokalhyra i Sverige, informations- och tävlingsmaterial, försäkringar, träningsläger, lagdräkter, webbplats och logi för jury, domare, bedömare och översättare.',
        'Exempel på kostnader som inte godkänns: prispengar, löner och arvoden, samordning och administration, resor till samverkansmöten, resor och logi för medföljande arrangörer som inte är lärare och administration i den vanliga verksamheten.'
      ],
      praktik: 'Skolverket godkänner bara kostnader som hänger direkt ihop med tävlingen. Kan ni dra av momsen räknas kostnaderna utan moms.',
      nyckelord: ['kostnader', 'resor', 'logi', 'kost', 'anmälningsavgift', 'träningsläger', 'lagdräkt', 'försäkring', 'lön', 'arvode', 'prispengar', 'administration', 'moms']
    },
    {
      ref: 'Villkor', rubrik: 'Villkor och fördelning',
      text: [
        'Tävlingen ska hållas samma kalenderår som bidraget gäller.',
        'När Skolverket fördelar pengarna tas hänsyn till att kostnaderna är rimliga i förhållande till aktiviteterna. Internationella tävlingar prioriteras före nationella kvalificeringstävlingar.'
      ],
      praktik: {
        rubrik: 'Skolverkets logotyp',
        text: 'Ni får inte använda Skolverkets logotyp när ni ordnar en tävling, eftersom Skolverket inte är med och genomför den.'
      },
      nyckelord: ['kalenderår', 'samma år', 'rimlighet', 'prioritering', 'logotyp']
    },
    {
      ref: 'Ansökan', rubrik: 'Ansökan och kontroll',
      text: [
        'Ansökan för 2027 är öppen 15 januari–15 februari 2027 i e-tjänsten för statsbidrag.',
        'För elevers deltagande anger ni tävlingens namn, inriktning och syfte, tid, plats, antal elever och antal medföljande lärare eller lagledare. Det sökta beloppet delas upp på boende, resor och kost för deltagare, samma sak för lärare och lagledare, registreringsavgifter och övriga kostnader.',
        'Ordnar ni en tävling anger ni också vilka länder och hur många deltagare som väntas, och vad pengarna ska gå till.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Skolverkets sida beskriver ingen särskild redovisning. Skolverket kan kontrollera alla som får bidrag, så spara kvitton och underlag. För 2026 kom beslutet i mars.'
      },
      nyckelord: ['ansökan', 'e-tjänst', 'behörighet', 'kostnadsposter', 'lagledare', 'kontroll', 'kvitton']
    }
  ],

  process: [
    { rubrik: 'Planera tävlingen', text: 'Bestäm vilka tävlingar ni ska delta i eller ordna under året. Räkna på kostnaderna för elever och lärare och kontrollera att de är godkända.', ref: 'Kostnader' },
    { rubrik: 'Ansök', text: 'Se till att rätt personer har behörighet i e-tjänsten. Ansök 15 januari–15 februari 2027.', ref: 'Ansökan' },
    { rubrik: 'Genomför och spara underlag', text: 'Tävlingen ska hållas under 2027. Spara kvitton och underlag om Skolverket vill kontrollera.', ref: 'Villkor' }
  ],

  underlagRubrik: 'Underlag att ha till hands',
  underlagIngress: 'Markeringarna sparas inte – de försvinner när ni stänger sidan.',
  underlag: [
    'Tävlingens namn, inriktning, syfte, tid och plats.',
    'Antal elever och medföljande lärare eller lagledare.',
    'Budget uppdelad på resor, boende, kost, avgifter och övrigt.',
    'Kvitton och underlag för kostnaderna.'
  ],

  kallor: [
    {
      titel: 'Statsbidrag för vetenskapstävlingar 2027 · Skolverket',
      url: 'https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-vetenskapstavlingar-2027',
      beskrivning: 'Vem kan söka, kostnader, prioritering, ansökan och datum för 2027. Avsnitten i guiden bygger på den här sidan.'
    },
    {
      titel: 'Statsbidrag för vetenskapstävlingar 2026 · Skolverket',
      url: 'https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-vetenskapstavlingar-2026',
      beskrivning: 'Beslut för 2026 med lista över vilka som fick bidrag.'
    },
    {
      titel: 'Regleringsbrev 2026 för Statens skolverk · ESV',
      url: 'https://www.esv.se/statsliggaren/regleringsbrev/?RBID=26231',
      beskrivning: 'Anslag 1:5, anslagspost 3, övriga villkor: högst 10 000 000 kr och prioriteringen mellan internationella och nationella tävlingar.'
    }
  ],

  forbehall: 'Guiden sammanfattar villkoren. Bidraget har ingen förordning, så villkor och belopp kan ändras från år till år. Hur mycket ni får beror på alla ansökningar och Skolverkets bedömning av kostnaderna. Använd Skolverkets aktuella sida när ni ansöker.'
};
