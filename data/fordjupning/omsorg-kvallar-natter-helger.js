/* Fördjupning: Statsbidrag för omsorg på kvällar, nätter och helger – förordning (2012:994).
 * Innehållet är stämt mot förordningen (ändrad t.o.m. SFS 2016:1001), 25 kap. skollagen (2010:800),
 * Skolverkets sida för 2026 (senast uppdaterad 24 juli 2026) och Skolverkets beslutsbilagor för 2026
 * (ansökan 2026-02-27, dnr 2025:0016201; utbetalning 1 2026-06-10, dnr 2025:0016202).
 * Schema: se FORDJUPNING.md. Klartext, inte citat – paragrafhänvisningarna gäller förordningen. */
window.SB_FORDJUPNING = window.SB_FORDJUPNING || {};
window.SB_FORDJUPNING['omsorg-kvallar-natter-helger'] = {
  id: 'omsorg-kvallar-natter-helger',
  rubrik: 'Omsorg på obekväm tid',
  rubrikKursiv: 'i klartext.',
  ingress: 'Vem kan få bidrag för omsorg på kvällar, nätter och helger, vad krävs och hur räknas pengarna? Här står reglerna på vanlig svenska. Ni kan också uppskatta bidraget utifrån hur många platser kommunen erbjuder.',
  kontrollerad: '2026-10-01',
  forordning: {
    sfs: '2012:994',
    namn: 'Förordning (2012:994) om statsbidrag för omsorg under tid då förskola eller fritidshem inte erbjuds',
    lydelse: 'ändrad t.o.m. SFS 2016:1001',
    url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-2012994-om-statsbidrag-for-omsorg_sfs-2012-994/'
  },

  snabbfaktaRubrik: 'Tre saker att känna till först',
  snabbfakta: [
    { rubrik: 'Bara kommuner kan söka', text: 'Kommunen söker, även när omsorgen drivs av ett företag på entreprenad. Fristående huvudmän kan inte söka själva.' },
    { rubrik: 'Minst 30 timmar per barn och månad', text: 'Bara platser som erbjuds i minst 30 timmar i månaden räknas. Barnet behöver inte vara där så länge.' },
    { rubrik: 'Kommunerna delar på pengarna', text: 'Skolverket fördelar det som finns mellan kommunerna som har sökt. För 2026 motsvarade det 1 160 kr per erbjuden plats, alltså per barn och månad.' }
  ],
  snabbfaktaNot: 'Kommunen söker en gång om året och begär sedan ut pengarna två gånger, en gång per halvår.',

  begreppRubrik: 'Ord som återkommer',
  begrepp: [
    { term: 'Omsorg på obekväm tid', forklaring: 'Omsorg för barn på kvällar, nätter och helger när förskola och fritidshem är stängda. Kallas ibland nattis.' },
    { term: 'Erbjuden plats', forklaring: 'Ett barn som under en månad har erbjudits omsorg i minst 30 timmar. Platserna räknas för varje månad och läggs ihop.' },
    { term: 'Entreprenad', forklaring: 'När kommunen låter ett företag eller en organisation driva verksamheten åt sig. Kommunen är ändå huvudman.' },
    { term: 'Huvudman', forklaring: 'Den som ansvarar för verksamheten. För den här omsorgen är det alltid kommunen.' },
    { term: 'Rekvisition', forklaring: 'När kommunen begär att få bidraget utbetalt. Skolverket kallar det begäran om utbetalning.' }
  ],

  sektioner: {
    regler: {
      rubrik: 'Från paragraf', rubrikKursiv: 'till praktik.',
      ingress: 'Rubrikerna följer förordningen. Öppna det avsnitt ni behöver, eller sök på till exempel ”nattis”, ”30 timmar” eller ”entreprenad”. Varje avsnitt visar vilken paragraf det gäller.'
    },
    praktik: {
      rubrik: 'Så används', rubrikKursiv: 'reglerna.',
      ingress: 'Kommunen söker i början av året. Sedan räknar den varje månad hur många barn som har erbjudits plats och begär ut pengarna två gånger, tillsammans med kostnaderna för halvåret.'
    }
  },

  paragrafer: [
    {
      ref: '1 §', rubrik: 'Vad bidraget är till för',
      text: [
        'Bidraget går till kommuner som erbjuder omsorg för barn när förskola eller fritidshem inte är öppna, enligt 25 kap. 5 § skollagen.',
        'Syftet är att kommunerna ska erbjuda sådan omsorg i större utsträckning.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Pengarna ska gå till kostnader för att barn som behöver det ska kunna få omsorg på kvällar, nätter och helger. De får användas både till verksamhet som redan finns och till ny verksamhet.'
      },
      nyckelord: ['syfte', 'nattis', 'nattomsorg', 'kvällsomsorg', 'helgomsorg', 'obekväm tid', 'skiftarbete', 'befintlig verksamhet', 'ny verksamhet']
    },
    {
      ref: '25 kap. skollagen', rubrik: 'Vad skollagen säger om omsorgen',
      text: [
        'Kommunen ska sträva efter att erbjuda omsorg när förskola eller fritidshem inte är öppna. Det gäller i den omfattning som behövs med hänsyn till föräldrarnas arbete och familjens situation i övrigt (25 kap. 5 §).',
        'Kommunen får ta ut avgifter för omsorgen på samma sätt som för förskola och fritidshem (25 kap. 9 §).'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Avgifterna ska vara skäliga, och maxtaxan gäller även här. Om ett hushåll betalar den högsta tillåtna avgiften får inga andra avgifter tas ut, till exempel för måltider. Skolverket anger att omsorgen gäller barn från ett års ålder till och med vårterminen det år barnet fyller 13.'
      },
      nyckelord: ['skollagen', 'sträva efter', 'förvärvsarbete', 'avgift', 'maxtaxa', 'ålder', '13 år', 'ett år']
    },
    {
      ref: '2 §', rubrik: 'Villkor: minst 30 timmar per barn och månad',
      text: [
        'Bidrag får ges för kostnader för omsorgen, om den erbjuds minst 30 timmar per barn och månad.',
        'Bidraget ges för ett kalenderår i taget och bara i den mån det finns pengar.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Det är antalet erbjudna platser som räknas, inte hur länge barnen faktiskt är där. Ett barn behöver alltså inte delta i 30 timmar. Barnets verkliga behov kan vara större eller mindre än 30 timmar. För varje månad anger kommunen hur många barn som har erbjudits plats i minst 30 timmar.'
      },
      nyckelord: ['30 timmar', 'villkor', 'erbjuden plats', 'per månad', 'kalenderår', 'kostnader']
    },
    {
      ref: '3 §', rubrik: 'Ansökan, beslut och utbetalning',
      text: [
        'Skolverket beslutar om bidraget efter ansökan från en kommun.',
        'Skolverket betalar ut pengarna efter att kommunen har begärt det, en eller två gånger per kalenderhalvår.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Kommunen kan söka för omsorg som den driver själv och för omsorg som drivs på entreprenad. Kommunen är alltid ansvarig huvudman. För 2026 var ansökan öppen 15 januari–16 februari. I februari beviljade Skolverket totalt 78 969 320 kr till 161 huvudmän. Pengarna begärs sedan ut två gånger: för januari–juni och för juli–december.'
      },
      nyckelord: ['ansökan', 'beslut', 'rekvisition', 'begäran om utbetalning', 'e-tjänst', 'entreprenad', 'kommun', 'fristående', 'halvår']
    },
    {
      ref: 'Fördelning', rubrik: 'Hur pengarna fördelas',
      text: [
        'Förordningen anger inget belopp per barn eller plats.',
        'Skolverket fördelar pengarna så att kommunerna som har sökt delar på det som finns. Ju fler platser som erbjuds totalt i landet, desto mindre blir beloppet per plats.'
      ],
      praktik: {
        rubrik: 'Beloppet för 2026',
        text: 'I Skolverkets beslut för 2026 fick kommunerna 1 160 kr per erbjuden plats: 78 969 320 kr för 68 077 platser under januari–december. Beloppet står inte uttryckligen på Skolverkets sida. Det är räknat ur beslutet och kan bli ett annat ett annat år. Vid utbetalningen för januari–juni 2026 betalades totalt 37 392 559 kr ut till 156 huvudmän för 32 277 platser, alltså något mindre än 1 160 kr per plats i genomsnitt.'
      },
      nyckelord: ['fördelning', 'belopp', 'per plats', '1160', 'dela på', 'pott']
    },
    {
      ref: '4 §', rubrik: 'Uppföljning och redovisning',
      text: [
        'Skolverket ska följa upp hur bidraget har använts.',
        'Kommunen är skyldig att lämna de uppgifter om verksamheten som Skolverket behöver för uppföljningen.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Kommunen redovisar kostnaderna för halvåret när den begär ut pengarna, tillsammans med antalet erbjudna platser per månad. Kan kommunen få tillbaka momsen redovisas kostnaderna utan moms. Dyrare inköp med lång livslängd ska normalt skrivas av, och då räknas bara årets avskrivning.'
      },
      nyckelord: ['uppföljning', 'redovisning', 'kostnader', 'moms', 'avskrivning', 'uppgifter']
    },
    {
      ref: '5 §', rubrik: 'Betala tillbaka (återkrav)',
      text: ['Kommunen ska betala tillbaka bidraget om något av följande gäller:'],
      lista: [
        'Kommunen har lämnat felaktiga uppgifter eller på annat sätt orsakat att bidraget betalats ut felaktigt eller med för högt belopp.',
        'Bidraget har av något annat skäl betalats ut felaktigt eller med för högt belopp, och kommunen borde ha förstått det.',
        'Kommunen har inte lämnat de uppgifter som krävs vid uppföljningen.',
        'Pengarna har inte använts till det de beviljades för.'
      ],
      praktik: {
        rubrik: 'Återkrav',
        text: 'Skolverket ska då besluta att kräva tillbaka pengarna, helt eller delvis. Om det finns särskilda skäl får Skolverket avstå helt eller delvis. Förordningen säger inget om ränta på återkrav.'
      },
      nyckelord: ['återkrav', 'återbetalning', 'betala tillbaka', 'felaktiga uppgifter', 'särskilda skäl']
    },
    {
      ref: '6–7 §§', rubrik: 'Föreskrifter och överklagande',
      text: [
        'Skolverket får skriva de föreskrifter som behövs för att verkställa förordningen. Skolverkets sida om bidraget hänvisar till förordningen och till 25 kap. skollagen.',
        'Beslut enligt förordningen får inte överklagas.'
      ],
      nyckelord: ['föreskrifter', 'överklaga', 'skolfs']
    }
  ],

  kalkylatorer: [
    {
      id: 'belopp', modul: 'omsorg-kvallar-natter-helger-belopp',
      flik: 'Uppskatta bidraget', eyebrow: 'Uppskattning utifrån 2026',
      rubrik: 'Ungefär hur mycket', rubrikKursiv: 'kan det bli?',
      ingress: 'Ange hur många barn som erbjuds plats om minst 30 timmar i månaden och under hur många månader. Räknaren använder beloppet per plats i Skolverkets beslut för 2026. Det är en uppskattning, inte ett besked.',
      formel: { rubrik: 'Grundformeln', text: 'Bidrag ≈ barn per månad × antal månader × belopp per erbjuden plats.' },
      resultatRubrik: 'Uppskattat bidrag',
      falt: [
        { id: 'barn', typ: 'tal', etikett: 'Barn som erbjuds plats om minst 30 timmar per månad', min: 0, max: 100000, steg: 1, standard: 10,
          hjalp: 'Ett genomsnitt per månad. Barnen behöver inte delta i 30 timmar – det är erbjudandet som räknas.' },
        { id: 'manader', typ: 'reglage', etikett: 'Antal månader', min: 0, max: 12, steg: 1, standard: 12, enhet: 'mån',
          hjalp: 'Sex månader motsvarar en begäran om utbetalning för ett halvår.' },
        { id: 'perPlats', typ: 'tal', etikett: 'Belopp per erbjuden plats', min: 1, max: 100000, steg: 1, standard: 1160, enhet: 'kr',
          hjalp: '1 160 kr är räknat ur Skolverkets beslut för 2026. Beloppet kan bli ett annat ett annat år.' }
      ],
      exempel: [
        { etikett: 'Ett halvår', varden: { barn: 8, manader: 6 } },
        { etikett: 'Liten verksamhet', varden: { barn: 2 } },
        { etikett: 'Större kommun', varden: { barn: 70 } }
      ],
      resultatNotis: 'Kommunerna delar på de pengar som finns. Hur mycket det blir per plats beror på hur många platser alla kommuner som söker erbjuder.',
      forbehall: [
        { rubrik: 'Beloppet per plats', text: 'Förordningen anger inget belopp. 1 160 kr kommer från Skolverkets beslut för 2026: 78 969 320 kr delat med 68 077 erbjudna platser. Utbetalningen för januari–juni 2026 blev i genomsnitt något lägre per plats. Skolverket förklarar inte skillnaden på bidragssidan.' },
        { rubrik: 'Det här prövar räknaren inte', text: 'Om kommunen har sökt i tid, om platserna verkligen erbjöds i minst 30 timmar, vilka kostnader kommunen har haft eller hur mycket pengar som finns ett visst år.' }
      ]
    }
  ],

  process: [
    { rubrik: 'Ansök i början av året', text: 'Kommunen ansöker i Skolverkets e-tjänst. För 2026 var ansökan öppen 15 januari–16 februari. Datumen för 2027 är inte publicerade.', ref: '3 §' },
    { rubrik: 'Erbjud och räkna platser', text: 'Erbjud omsorg i minst 30 timmar per barn och månad. Räkna varje månad hur många barn som har erbjudits plats.', ref: '2 §' },
    { rubrik: 'Begär ut för januari–juni', text: 'För 2026 var begäran öppen 15 april–18 maj och beslutet kom i juni. Redovisa samtidigt kostnaderna för halvåret.', ref: '3–4 §§' },
    { rubrik: 'Begär ut för juli–december', text: 'För 2026 är begäran öppen 1 oktober–2 november 2026. Ange erbjudna platser per månad och kostnaderna för 1 juli–31 december.', ref: '3–4 §§' },
    { rubrik: 'Spara underlagen', text: 'Spara underlag om platser och kostnader. Bidrag som betalats ut på fel grunder eller inte använts rätt kan krävas tillbaka.', ref: '4–5 §§' }
  ],

  underlagRubrik: 'Underlag att ha till hands',
  underlagIngress: 'Listan är till för kommunen. Markeringarna sparas inte – de försvinner när ni stänger sidan.',
  underlag: [
    'Antal barn per månad som har erbjudits plats om minst 30 timmar.',
    'Underlag som visar erbjudandet, till exempel placeringsbeslut eller scheman.',
    'Kostnader för omsorgen per halvår, utan moms om kommunen får tillbaka momsen.',
    'Avtal med utföraren om omsorgen drivs på entreprenad.',
    'Eventuella avskrivningsberäkningar för större inköp.',
    'Vem som har behörighet till bidraget i e-tjänsten för statsbidrag.'
  ],

  kallor: [
    {
      titel: 'Förordning (2012:994) · Sveriges riksdag',
      url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-2012994-om-statsbidrag-for-omsorg_sfs-2012-994/',
      beskrivning: 'Källan för syfte, villkoret om 30 timmar, ansökan, utbetalning, uppföljning och återkrav. Paragrafhänvisningarna i guiden gäller den här förordningen.'
    },
    {
      titel: 'Skollag (2010:800), 25 kap. · Sveriges riksdag',
      url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/skollag-2010800_sfs-2010-800/',
      beskrivning: 'Kommunens ansvar för omsorg när förskola och fritidshem är stängda (5 §) och avgifter (9 §).'
    },
    {
      titel: 'Statsbidrag för omsorg på kvällar, nätter och helger 2026 · Skolverket',
      url: 'https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-omsorg-pa-kvallar-natter-och-helger-2026',
      beskrivning: 'Vem som kan söka, villkor, datum, beslut med beviljade belopp per kommun, moms och avskrivning för 2026.'
    },
    {
      titel: 'Avgifter · Skolverket',
      url: 'https://www.skolverket.se/styrning-och-ansvar/regler-och-ansvar/ansvar-i-skolfragor/avgifter',
      beskrivning: 'Vad som gäller för avgifter i omsorg på kvällar, nätter och helger.'
    }
  ],

  forbehall: 'Guiden sammanfattar reglerna. Räknaren ger bara en uppskattning med 2026 års belopp per plats, som är räknat ur Skolverkets beslut och inte står i förordningen. Den prövar inte rätten till bidrag eller kommunens kostnader. Använd Skolverkets aktuella anvisningar och beslut när ni söker och begär ut pengarna.'
};
