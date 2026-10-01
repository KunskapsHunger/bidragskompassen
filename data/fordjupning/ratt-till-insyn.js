/* Fördjupning: Statsbidrag för införande av rätt till insyn 2026.
 * Skolverkets bidragssida (senast uppdaterad 8 september 2026) anger ingen egen förordning för bidraget. Guiden följer
 * därför bidragssidans avsnitt (se "Regelverk som inte är en svensk förordning" i FORDJUPNING.md). Bakgrunden om
 * reformen är stämd mot Skolverkets sidor om offentlighetsprincipen hos enskilda huvudmän (2 september 2026),
 * prop. 2025/26:191 och regeringens budgetsatsningar för 2026. Lista över huvudmän som kan ansöka: Skolverket (xlsx). */
window.SB_FORDJUPNING = window.SB_FORDJUPNING || {};
window.SB_FORDJUPNING['ratt-till-insyn'] = {
  id: 'ratt-till-insyn',
  rubrik: 'Rätt till insyn',
  rubrikKursiv: 'i klartext.',
  ingress: 'Offentlighetsprincipen börjar gälla hos fristående huvudmän den 1 januari 2027. Här står vad det innebär, vilka mindre huvudmän som kan få bidrag för att förbereda sig och hur pengarna fördelas.',
  kontrollerad: '2026-10-01',
  forordning: {
    namn: 'Statsbidrag för införande av rätt till insyn 2026 · Skolverket',
    etikett: 'Skolverkets bidragssida 2026',
    iText: 'på Skolverkets bidragssida',
    url: 'https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-inforande-av-ratt-till-insyn-2026',
    lydelse: 'senast uppdaterad 8 september 2026'
  },

  snabbfaktaRubrik: 'Tre saker att känna till först',
  snabbfakta: [
    { rubrik: 'Bara mindre fristående huvudmän', text: 'Högst 450 barn och elever, eller högst 100 barn om ni bara har förskolor. I en koncern räknas alla tillsammans.' },
    { rubrik: 'Samma belopp till alla', text: '88 miljoner kr delas lika mellan alla som beviljas. Ni anger inget belopp i ansökan.' },
    { rubrik: 'Ni bestämmer vad som behövs', text: 'Pengarna ska gå till förberedelser för offentlighetsprincipen. De får användas även efter 2026.' }
  ],
  snabbfaktaNot: 'Ansökan för 2026 var öppen 15 augusti–1 oktober 2026. Det är inte känt om det blir fler omgångar.',

  begreppRubrik: 'Ord som återkommer',
  begrepp: [
    { term: 'Offentlighetsprincipen', forklaring: 'Allmänhetens rätt att ta del av allmänna handlingar. Den har gällt för kommunala skolor och gäller från 2027 även hos fristående huvudmän.' },
    { term: 'Allmän handling', forklaring: 'En handling som har kommit in till eller skapats hos huvudmannen, till exempel ett dokument, ett mejl eller en bild.' },
    { term: 'Enskild huvudman', forklaring: 'Ett aktiebolag, en förening, en stiftelse eller en annan enskild som är godkänd att driva fristående förskola, skola eller fritidshem.' },
    { term: 'Enskild mindre huvudman', forklaring: 'En enskild huvudman, eller koncern, med högst 450 barn och elever. Har den bara förskolor är gränsen 100 barn.' },
    { term: 'Lättnadsregler', forklaring: 'Regler i skollagen som gör hanteringen av allmänna handlingar enklare för mindre huvudmän. De är inga undantag från offentlighetsprincipen.' },
    { term: 'Sekretess', forklaring: 'Regler om uppgifter som inte får lämnas ut. Huvudmannen ska pröva sekretessen innan en handling lämnas ut.' }
  ],

  sektioner: {
    regler: {
      rubrik: 'Reformen', rubrikKursiv: 'och bidraget.',
      ingress: 'De första avsnitten förklarar reformen kort. Sedan följer bidraget, i samma ordning som på Skolverkets bidragssida. Sök på till exempel ”koncern”, ”förskola” eller ”arkiv”.'
    },
    praktik: {
      rubrik: 'Så används', rubrikKursiv: 'bidraget.',
      ingress: 'Ansökan är enkel: ni anger inget belopp. Det viktiga är att använda pengarna till förberedelser och kunna visa det om Skolverket kontrollerar.'
    }
  },

  paragrafer: [
    {
      ref: 'Reformen', rubrik: 'Offentlighetsprincipen hos fristående huvudmän',
      text: [
        'Från den 1 januari 2027 gäller offentlighetsprincipen hos enskilda huvudmän som är juridiska personer, till exempel aktiebolag, föreningar och stiftelser. Det gäller fristående förskolor, skolor och fritidshem.',
        'Allmänheten får rätt att ta del av allmänna handlingar hos huvudmannen. Det gäller bara handlingar som hör till verksamheten som huvudman, inte annan verksamhet i samma bolag. Handlingar från före den 1 januari 2027 omfattas inte.',
        'Huvudmännen ska tillämpa offentlighets- och sekretesslagen och jämställs då med myndigheter. Den som får avslag på en begäran ska få ett beslut som kan överklagas till kammarrätten. Anställda och uppdragstagare får ett starkare meddelarskydd.'
      ],
      praktik: {
        rubrik: 'Vilka som inte omfattas',
        text: 'Huvudmän som är fysiska personer omfattas inte. Det gör inte heller enskilda utbildningsanordnare som utför komvux på entreprenad, eller folkhögskolor med utbildning som motsvarar sfi.'
      },
      nyckelord: ['offentlighetsprincipen', '2027', 'allmänna handlingar', 'osl', 'offentlighets- och sekretesslagen', 'meddelarskydd', 'kammarrätten', 'aktiebolag', 'friskola', 'förskola', 'fritidshem']
    },
    {
      ref: 'Varför', rubrik: 'Därför införs reformen',
      text: [
        'Riksdagen har beslutat om ändringar i offentlighets- och sekretesslagen, skollagen och arkivlagen, efter förslag i proposition 2025/26:191.',
        'Syftet är att stärka allmänhetens insyn och ge mer likvärdiga villkor för all utbildning som betalas med skattepengar, oavsett huvudman. Reformen ska också långsiktigt säkra tillgången till skolstatistik, som har varit begränsad sedan 2020.'
      ],
      nyckelord: ['proposition 2025/26:191', 'insyn', 'likvärdighet', 'skolstatistik', 'scb', 'bakgrund']
    },
    {
      ref: 'Lättnadsregler', rubrik: 'Enklare regler för mindre huvudmän',
      text: ['En enskild mindre huvudman får använda lättnadsregler i skollagen. De innebär bland annat att huvudmannen:'],
      lista: [
        'Inte behöver registrera allmänna handlingar, men ska hålla dem ordnade så att det går att se om de har kommit in eller skapats.',
        'Får göra en enklare beskrivning av sina allmänna handlingar.',
        'Ska behandla en begäran om att få ta del av en handling inom rimlig tid, i stället för genast. Enligt förarbetena är det normalt inom en vecka.',
        'Inte behöver visa handlingen på plats om det är svårt, till exempel när alla lokaler används i verksamheten. Den som frågar har då rätt till en kopia mot avgift.',
        'Får fråga efter kontaktuppgifter för att kunna skicka kopior, när det är svårt att visa handlingen på plats.',
        'Inte behöver ta fram sammanställningar ur sina datasystem för att kunna lämna ut dem.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Under 2027 och 2028 får alla enskilda huvudmän använda lättnadsreglerna, oavsett storlek. Från 1 januari 2029 gäller de bara mindre huvudmän. Arkivlagen gäller inte för mindre huvudmän. De ska i stället bevara och vårda allmänna handlingar i minst sju år enligt skollagen. Övriga enskilda huvudmän omfattas av arkivlagen från 2029.'
      },
      nyckelord: ['lättnadsregler', 'registrering', 'diarium', 'rimlig tid', 'en vecka', 'kopia', 'avgift', 'arkivlagen', 'sju år', '2029', 'mindre huvudman']
    },
    {
      ref: 'Syfte', rubrik: 'Vad bidraget är till för',
      text: [
        'Bidraget ska göra det lättare för enskilda mindre huvudmän att förbereda sig för de uppgifter som offentlighetsprincipen för med sig.',
        'Regeringen föreslog bidraget i budgeten för 2026 som ett införandebidrag för mindre enskilda huvudmän, och nämnde att det till exempel kan användas för att anlita juridisk kompetens.'
      ],
      nyckelord: ['syfte', 'förberedelser', 'införandebidrag', 'juridisk kompetens', 'budget 2026']
    },
    {
      ref: 'Vem kan söka', rubrik: 'Vem kan söka',
      text: [
        'Enskilda mindre huvudmän inom skolväsendet för förskola, förskoleklass, grundskola, anpassad grundskola, gymnasieskola och anpassad gymnasieskola.',
        'Mindre betyder högst 450 barn och elever. Har huvudmannen bara förskolor är gränsen 100 barn. Ingår huvudmannen i en koncern får koncernen tillsammans inte ha fler barn och elever än gränserna.',
        'Kommuner, regioner och staten kan inte söka.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Skolverket bedömer storleken utifrån den statistik som huvudmannen har rapporterat till SCB för läsåret 2025/26. Har ni inte rapporterat barn- och elevantal för det läsåret kan ni inte söka. Skolverket har publicerat en lista med de huvudmän som kan ansöka, 1 848 stycken. Har koncerntillhörigheten ändrats efter maj 2026 behöver ni meddela Skolverket.'
      },
      nyckelord: ['vem kan söka', '450 elever', '100 barn', 'koncern', 'förskola', 'scb', 'elevstatistik', 'lista', 'mindre huvudman']
    },
    {
      ref: 'Användning', rubrik: 'Vad pengarna får användas till',
      text: [
        'Pengarna ska gå till kostnader som gör det lättare att förbereda sig för offentlighetsprincipen.',
        'Det är huvudmannen som avgör vad som behövs. Det viktiga är att kostnaderna syftar till förberedelserna.',
        'Bidragssidan ger inga exempel. Utifrån reformen kan det till exempel handla om rutiner för att ta emot och pröva en begäran, ordning på handlingar, sekretessprövning och arkivering. Det är våra exempel, inte Skolverkets.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Det finns ingen regel om vilken period bidraget gäller. Ni kan alltså använda pengarna under 2026 och senare.'
      },
      nyckelord: ['användning', 'kostnader', 'rutiner', 'sekretessprövning', 'arkivering', 'utbildning', 'juridisk hjälp', 'efter 2026']
    },
    {
      ref: 'Belopp', rubrik: 'Hur stort bidraget är',
      text: [
        'För 2026 finns 88 miljoner kr att fördela.',
        'Alla huvudmän som beviljas får samma belopp. Hur mycket det blir beror alltså på hur många som beviljas. Skolverket kan inte säga i förväg hur stort beloppet blir.'
      ],
      praktik: 'Ni anger inget belopp i ansökan. Beloppet beror inte på hur många barn eller elever ni har.',
      nyckelord: ['belopp', '88 miljoner', 'samma belopp', 'fördelning', 'engångsbelopp']
    },
    {
      ref: 'Ansökan', rubrik: 'Ansökan',
      text: [
        'Ansökan för 2026 var öppen 15 augusti–1 oktober 2026 i Skolverkets e-tjänst för statsbidrag. Skolverket fördelar pengarna efter att ansökan har stängt.',
        'För att ansöka behöver huvudmannen behörighet till e-tjänsten. Saknas den mejlar ni Skolverkets statsbidragsadministration med ert organisationsnummer.'
      ],
      praktik: 'Skolverket påpekar att en sen ansökan riskerar att inte få del av bidraget, eftersom pengarna fördelas när ansökan har stängt.',
      nyckelord: ['ansökan', 'e-tjänst', 'behörighet', 'organisationsnummer', '1 oktober', 'sista dag']
    },
    {
      ref: 'Kontroll', rubrik: 'Kontroll och uppföljning',
      text: [
        'Skolverket följer upp och kontrollerar att statsbidrag används på rätt sätt. Alla som får pengar kan bli kontrollerade.',
        'Bidragssidan beskriver ingen särskild redovisning för det här bidraget.'
      ],
      praktik: 'Spara underlag som visar vad pengarna har gått till och hur det hänger ihop med förberedelserna för offentlighetsprincipen.',
      nyckelord: ['kontroll', 'uppföljning', 'redovisning', 'underlag', 'stickprov']
    },
    {
      ref: 'Regelverk', rubrik: 'Vilka regler som styr bidraget',
      text: [
        'Skolverkets bidragssida hänvisar inte till någon egen förordning för bidraget, och vi har inte hittat någon. Guiden bygger därför på bidragssidan.',
        'Själva reformen finns i lag (2026:714) om ändring i offentlighets- och sekretesslagen, lag (2026:715) om ändring i arkivlagen och lag (2026:716) om ändring i skollagen. Regeringen har också beslutat förordning (2026:1760) om avgifter för utlämnande av allmänna handlingar hos enskilda huvudmän inom skolväsendet.'
      ],
      praktik: {
        rubrik: 'Stöd från Skolverket',
        text: 'Skolverket har fått i uppdrag att ta fram stöd om allmänna handlingar, sekretess och arkivering. Stödmaterialet ska publiceras under senhösten 2026, och kompetensutveckling erbjuds lite senare.'
      },
      nyckelord: ['förordning', 'lag 2026:714', 'lag 2026:716', 'arkivlagen', 'avgifter', '2026:1760', 'stödmaterial', 'kompetensutveckling']
    }
  ],

  kalkylatorer: [
    {
      id: 'belopp', modul: 'ratt-till-insyn-belopp',
      flik: 'Räkna på beloppet', eyebrow: 'Lika fördelning',
      rubrik: 'Hur mycket', rubrikKursiv: 'kan det bli?',
      ingress: 'Alla som beviljas får lika mycket. Ändra antalet beviljade huvudmän och se hur beloppet påverkas. Antalet är inte känt förrän Skolverket har beslutat.',
      formel: { rubrik: 'Grundformeln', text: 'Belopp per huvudman = 88 000 000 kr ÷ antal huvudmän som beviljas.' },
      resultatRubrik: 'Belopp per huvudman (exempel)',
      falt: [
        { id: 'antal', typ: 'tal', etikett: 'Antal huvudmän som beviljas', min: 1, max: 10000, steg: 1, standard: 1848,
          hjalp: 'Standardvärdet är alla 1 848 huvudmän på Skolverkets lista. Färre ansökningar ger mer till var och en.' }
      ],
      exempel: [
        { etikett: 'Hälften av listan söker', varden: { antal: 924 } },
        { etikett: '500 huvudmän', varden: { antal: 500 } }
      ],
      resultatNotis: 'Det här är ett räkneexempel. Det faktiska beloppet står i Skolverkets beslut.',
      forbehall: [
        { rubrik: 'Formel', text: 'Skolverket anger att 88 miljoner kr fördelas med samma belopp till alla som beviljas. Hur Skolverket avrundar anges inte. Räknaren avrundar nedåt till hela kronor.' },
        { rubrik: 'Det här prövar räknaren inte', text: 'Om ni räknas som mindre huvudman, om ni har rapporterat statistik till SCB eller om er ansökan beviljas.' }
      ]
    }
  ],

  process: [
    { rubrik: 'Kontrollera att ni kan söka', text: 'Se om ni finns på Skolverkets lista. Meddela Skolverket om er koncerntillhörighet har ändrats efter maj 2026.', ref: 'Vem kan söka' },
    { rubrik: 'Ordna behörighet och ansök', text: 'Skaffa behörighet till e-tjänsten i god tid och ansök. För 2026 var sista dag 1 oktober.', ref: 'Ansökan' },
    { rubrik: 'Förbered er', text: 'Använd pengarna till det ni behöver för att kunna hantera allmänna handlingar, sekretess och arkivering från 1 januari 2027.', ref: 'Användning' },
    { rubrik: 'Spara underlag', text: 'Spara fakturor och annat som visar vad pengarna har gått till. Skolverket kan göra kontroller.', ref: 'Kontroll' }
  ],

  underlagRubrik: 'Underlag att ha till hands',
  underlagIngress: 'Använd listan när ni ansöker och förbereder er. Markeringarna sparas inte – de försvinner när ni stänger sidan.',
  underlag: [
    'Organisationsnummer och uppgift om vem som har behörighet till Skolverkets e-tjänst.',
    'Bekräftelse på att barn- och elevantal för läsåret 2025/26 har rapporterats till SCB.',
    'Uppgifter om eventuell koncern och ändringar i den efter maj 2026.',
    'En plan för hur ni ska ta emot och pröva en begäran om allmän handling, och hur handlingar ska hållas ordnade och bevaras.',
    'Fakturor och andra underlag för kostnaderna.'
  ],

  kallor: [
    {
      titel: 'Statsbidrag för införande av rätt till insyn 2026 · Skolverket',
      url: 'https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-inforande-av-ratt-till-insyn-2026',
      beskrivning: 'Källan för vem som kan söka, belopp, fördelning, användning och ansökan. Sidan länkar till listan över huvudmän som kan ansöka.'
    },
    {
      titel: 'Offentlighetsprincipen hos enskilda huvudmän · Skolverket',
      url: 'https://www.skolverket.se/forandringar-inom-skolomradet/en-skola-i-forandring/offentlighetsprincipen-hos-enskilda-huvudman',
      beskrivning: 'Översikt över reformen, viktiga datum och vilka huvudmän som omfattas.'
    },
    {
      titel: 'Lättnadsregler för mindre huvudmän · Skolverket',
      url: 'https://www.skolverket.se/forandringar-inom-skolomradet/en-skola-i-forandring/offentlighetsprincipen-hos-enskilda-huvudman/lattnadsregler-for-mindre-huvudman',
      beskrivning: 'Definitionen av enskild mindre huvudman och lättnadsreglerna, med hänvisningar till lagtext och proposition.'
    },
    {
      titel: 'Proposition 2025/26:191 · Sveriges riksdag',
      url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/proposition/offentlighetsprincipen-med-lattnadsregler-for_hd03191/',
      beskrivning: 'Regeringens förslag om offentlighetsprincipen med lättnadsregler för enskilda mindre huvudmän i skolväsendet.'
    },
    {
      titel: 'Utbildningsdepartementets budgetsatsningar 2026 · Regeringen',
      url: 'https://www.regeringen.se/regeringens-politik/utbildningsdepartementets-samlade-budgetsatsningar/utbildningsdepartementets-samlade-budgetsatsningar-2026/',
      beskrivning: 'Regeringens beskrivning av införandebidraget på 88 miljoner kr för 2026.'
    }
  ],

  forbehall: 'Guiden sammanfattar Skolverkets bidragssida och reformen. Bidraget har ingen egen förordning som vi har hittat, så reglerna kan finnas i beslut som inte är publicerade på sidan. Räknaren är ett exempel och visar inte vad ni faktiskt får. Använd Skolverkets aktuella anvisningar och ert beslut.'
};
