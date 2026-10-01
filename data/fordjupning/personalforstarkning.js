/* Fördjupning: Statsbidrag för personalförstärkning – förordning (2024:1341).
 * Innehållet är stämt mot förordningen (ändrad t.o.m. SFS 2024:1343) och Skolverkets sidor för 2026 och 2027
 * (senast uppdaterade 28 september 2026), Skolverkets beräkningsstöd för årsarbetskrafter och den arkiverade
 * sidan för 2025, där räkneregeln för bidragsbeloppet står utskriven.
 * Schema: se FORDJUPNING.md. Klartext, inte citat – paragrafhänvisningarna gäller förordningen. */
window.SB_FORDJUPNING = window.SB_FORDJUPNING || {};
window.SB_FORDJUPNING['personalforstarkning'] = {
  id: 'personalforstarkning',
  rubrik: 'Personalförstärkning',
  rubrikKursiv: 'i klartext.',
  ingress: 'Vilka yrken ger bidrag, vad räknas som en förstärkning och hur mycket kan det bli? Här står reglerna på vanlig svenska. Ni kan också räkna årsarbetskrafter och uppskatta bidraget med egna siffror.',
  kontrollerad: '2026-10-01',
  forordning: {
    sfs: '2024:1341',
    namn: 'Förordning (2024:1341) om statsbidrag för personalförstärkning',
    lydelse: 'ändrad t.o.m. SFS 2024:1343',
    url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-20241341-om-statsbidrag-for_sfs-2024-1341/'
  },

  snabbfaktaRubrik: 'Tre saker att hålla isär',
  snabbfakta: [
    { rubrik: 'Ny förstärkning', text: 'Bidrag för ökningen av årsarbetskrafter under bidragsåret, jämfört med året innan.' },
    { rubrik: 'Bibehållande', text: 'Bidrag för att behålla en ökning som ni redan har fått bidrag för året innan.' },
    { rubrik: 'Schablonbelopp', text: 'Bidraget räknas på ett fast belopp per yrkeskategori, inte på era egna lönekostnader.' }
  ],
  snabbfaktaNot: 'Allt räknas i årsarbetskrafter, per yrkeskategori och för hela huvudmannen – inte per skola.',

  begreppRubrik: 'Ord som återkommer',
  begrepp: [
    { term: 'Huvudman', forklaring: 'Den som driver skolan och ansvarar för utbildningen: kommunen, staten, regionen eller en fristående organisation.' },
    { term: 'Årsarbetskraft', forklaring: 'En person som arbetar heltid under hela året. Halvtid i ett helt år är 0,5 årsarbetskrafter. För timavlönade motsvarar 1 700 timmar en årsarbetskraft.' },
    { term: 'Bidragsår', forklaring: 'Ett kalenderår, 1 januari–31 december.' },
    { term: 'Schablonbelopp', forklaring: 'Ett fast belopp per årsarbetskraft och yrkeskategori. Skolverket bestämmer det utifrån nationell lönestatistik.' },
    { term: 'Läraravlastande personal', forklaring: 'Personal som tar över uppgifter från lärarna, så att lärarna kan ägna sig åt undervisningen. Hit hör lärarassistenter.' }
  ],

  sektioner: {
    regler: {
      rubrik: 'Från paragraf', rubrikKursiv: 'till praktik.',
      ingress: 'Rubrikerna följer förordningen. Öppna det avsnitt ni behöver, eller sök på till exempel ”kurator”, ”sex månader” eller ”återkrav”. Varje avsnitt visar vilken paragraf det gäller.'
    },
    praktik: {
      rubrik: 'Så används', rubrikKursiv: 'reglerna.',
      ingress: 'Bidraget söks i början av året och redovisas året efter. Underlagen ska visa hur många årsarbetskrafter ni hade, per yrkeskategori, både året innan och under bidragsåret.'
    }
  },

  paragrafer: [
    {
      ref: '1 §', rubrik: 'Vad bidraget ska användas till',
      text: [
        'Bidraget ska göra det lättare för skolan att ge elever stöd i undervisningen, att stärka elevhälsan och att göra skolan tryggare och lugnare. Det ska också avlasta lärarna.',
        'Pengarna går till personalkostnader i förskoleklass, grundskola, anpassad grundskola, gymnasieskola och anpassad gymnasieskola.',
        'Tre grupper av personal omfattas: speciallärare, personal i elevhälsan och läraravlastande personal.'
      ],
      praktik: 'Förskolan, komvux och övriga skolformer finns inte med. Kommunala, fristående, statliga och regionala huvudmän kan söka.',
      nyckelord: ['syfte', 'skolformer', 'förskoleklass', 'grundskola', 'gymnasieskola', 'anpassad', 'studiero', 'trygghet', 'avlasta lärare', 'friskola']
    },
    {
      ref: '2 §', rubrik: 'Bidragsåret',
      text: [
        'Bidraget ges för ett kalenderår i taget och bara i den mån det finns pengar.',
        'Att ni får bidrag ett år är alltså inget löfte om bidrag nästa år.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Bidraget gäller tills regeringen bestämmer något annat. Skolverket påminner om att statsbidrag inte ska ses som en fast finansiering av verksamheten, eftersom de kan försvinna när regeringen ändrar sina prioriteringar.'
      },
      nyckelord: ['bidragsår', 'kalenderår', '1 januari', '31 december', 'fasta tjänster', 'finansiering']
    },
    {
      ref: '3 §', rubrik: 'Inte dubbla bidrag',
      text: [
        'Bidrag ges inte för kostnader som redan har fått ett annat statligt bidrag.',
        'Bidrag ges inte heller för uppdragsutbildning, alltså utbildning som en huvudman säljer till någon annan enligt förordningen (1992:395).'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Ni kan inte söka för samma arbetstid som redan betalas med ett annat statsbidrag, till exempel bidraget för likvärdig skola. När ni räknar årsarbetskrafter ska ni ändå ta med all personal i yrkeskategorin – även den som betalas med andra stöd och den som ni köper in.'
      },
      nyckelord: ['dubbelfinansiering', 'andra statsbidrag', 'likvärdig skola', 'uppdragsutbildning', 'inhyrd']
    },
    {
      ref: '4 §', rubrik: 'Speciallärare',
      text: ['Bidrag ges för fler speciallärare som antingen'],
      lista: [
        'har legitimation som speciallärare, eller',
        'går en fortbildning som ska leda till speciallärarexamen eller specialpedagogexamen.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Speciallärare i särskilda undervisningsgrupper ger bidrag bara hos huvudmän för grundskola eller anpassad grundskola. Specialpedagoger som redan är färdigutbildade omfattas inte, bara lärare som studerar till specialpedagog. För en lärare i fortbildning räknas bara den tid läraren arbetar, inte studietiden. Samma lärare kan samtidigt ha bidrag för fortbildning av lärare.'
      },
      nyckelord: ['speciallärare', 'specialpedagog', 'legitimation', 'fortbildning', 'särskild undervisningsgrupp', 'studietid', 'lärarlyftet']
    },
    {
      ref: '5–6 §§', rubrik: 'Personal i elevhälsan',
      text: [
        'Bidrag ges för fler skolläkare, skolsköterskor, kuratorer och psykologer i elevhälsan.',
        'Skolläkare, skolsköterskor och psykologer måste ha legitimation och behörighet för yrket. En kurator ska ha tillräcklig utbildning för anställningen eller uppdraget.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Bidraget får inte betala den elevhälsa som ni redan måste ha enligt skollagen. Det är ni själva som bedömer vad som är tillräcklig utbildning för en kurator. Andra yrken, till exempel logoped eller sjukgymnast, ger inte bidrag.'
      },
      nyckelord: ['elevhälsa', 'skolläkare', 'skolsköterska', 'kurator', 'psykolog', 'legitimation', 'behörighet', 'logoped', 'skollagen']
    },
    {
      ref: '7 §', rubrik: 'Läraravlastande personal och lärarassistenter',
      text: ['Bidrag ges för två grupper av personal som avlastar lärarna:'],
      lista: [
        'Läraravlastande personal med relevant utbildning, som till största delen arbetar för bättre trygghet och studiero.',
        'Personal som på annat sätt avlastar lärarna, så att de kan ägna sig åt undervisningen och det som hör till den.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Den andra gruppen är lärarassistenter. Sedan 2026 ingår de här, eftersom det tidigare bidraget för lärarassistenter (förordning 2019:551) har upphört. Skolverket har olika schablonbelopp för grupperna: ett för läraravlastande personal med relevant utbildning och ett för lärarassistenter och läraravlastande personal utan relevant utbildning.'
      },
      nyckelord: ['lärarassistent', 'läraravlastande', 'assistent', 'trygghet', 'studiero', 'avlasta', '2019:551']
    },
    {
      ref: '8 §', rubrik: 'Vad som räknas som en förstärkning',
      text: [
        'Förstärkningen ska vara en anställning eller ett uppdrag som varar minst sex månader, på heltid eller deltid.',
        'Bidrag kan också ges för att behålla den ökning av årsarbetskrafter som huvudmannen fick bidrag för året innan.',
        'Det räknas inte som en förstärkning om ni flyttar runt befintlig personal eller organiserar om verksamheten.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'En förstärkning är en ökning av antalet årsarbetskrafter under bidragsåret jämfört med året innan, räknat för hela huvudmannen. Den kan bestå av fler anställda eller av att befintlig personal får högre tjänstgöringsgrad i ett nytt anställningsavtal. Det räknas inte om en heltidsanställd som arbetar deltid bara går upp i tid inom sin anställning. Ni kan behålla högst det som ni fick beviljat året innan, justerat efter redovisningen. Sökte ni inte bidraget året innan kan ni inte söka för att behålla tjänster, och det året räknas då som ett vanligt år att jämföra med. Huvudmannen måste också ha haft verksamhet året innan bidragsåret.'
      },
      nyckelord: ['ökning', 'årsarbetskrafter', 'sex månader', 'bibehålla', 'behålla', 'omfördelning', 'omorganisation', 'tjänstgöringsgrad', 'normalår']
    },
    {
      ref: '9 §', rubrik: 'Så stort är bidraget',
      text: [
        'Bidraget ska motsvara hälften av kostnaden för en heltidsanställning, eller ett uppdrag som motsvarar heltid.',
        'Kostnaden räknas inte fram ur era egna löner. Den bygger på ett schablonbelopp som motsvarar en genomsnittlig heltidslön i yrkeskategorin.',
        'Ni kan få bidrag för flera heltider. Vid deltid minskas bidraget i samma proportion.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Skolverket anger ett belopp per årsarbetskraft för varje yrkeskategori. Bidraget räknas som antalet årsarbetskrafter som ni behåller och ökar med, gånger beloppet. Enligt Skolverkets räkneregel för 2025 multipliceras ökningen direkt med beloppet, så ni ska inte halvera beloppen en gång till. För 2026 är beloppen till exempel 248 000 kr för en lärarassistent och 402 000 kr för en speciallärare. Beloppen för 2027 är inte beslutade.'
      },
      nyckelord: ['belopp', 'schablon', 'schablonbelopp', 'hälften', 'lön', 'deltid', 'heltid', '248000', '402000']
    },
    {
      ref: '10 §', rubrik: 'Bara för de beviljade yrkeskategorierna',
      text: ['Bidraget får bara användas för de yrkeskategorier som huvudmannen har sökt och fått bidrag för.'],
      praktik: 'Har ni fått bidrag för kuratorer kan ni alltså inte använda pengarna till lärarassistenter. Hur pengarna fördelas mellan era skolenheter bestämmer ni själva.',
      nyckelord: ['yrkeskategori', 'använda', 'flytta pengar', 'skolenhet', 'fördela']
    },
    {
      ref: '11–12 §§', rubrik: 'När huvudmannen inte kan få bidrag',
      text: [
        'Huvudmannen får inte vara i likvidation eller konkurs. Den får inte heller ha skulder hos Kronofogden som handläggs som allmänt mål, eller en förfallen skuld för ett återkrav från Skolverket.',
        'Bidrag ges inte om Skolinspektionen har återkallat huvudmannens godkännande eller beslutat om verksamhetsförbud för en verksamhet som bidraget gäller. Har beslutet upphävts kan bidrag ges.'
      ],
      praktik: 'Skolverket kontrollerar skulderna både innan beslutet om bidrag och när pengarna betalas ut.',
      nyckelord: ['konkurs', 'likvidation', 'kronofogden', 'skulder', 'återkallat godkännande', 'verksamhetsförbud', 'skolinspektionen']
    },
    {
      ref: '13 §', rubrik: 'Ansökan',
      text: [
        'En behörig företrädare för huvudmannen ansöker skriftligen hos Skolverket. I ansökan ska det stå vilka yrkeskategorier bidraget ska användas till.',
        'Uppgifterna lämnas på heder och samvete. Det betyder att den som skriver under intygar att de är sanna.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Ansökan för 2027 är öppen 15 januari–15 februari 2027 i Skolverkets e-tjänst för statsbidrag. Ni anger hur många årsarbetskrafter per yrkeskategori ni hade 2026, och hur många ni söker för 2027 – dels för att behålla tidigare förstärkning, dels för ny förstärkning. Bidraget söks för hela huvudmannen. En enskild skolenhet kan inte söka.'
      },
      nyckelord: ['ansökan', 'ansöka', 'e-tjänst', 'företrädare', 'heder och samvete', 'sista dag', '15 februari', 'skolenhet']
    },
    {
      ref: '14 §', rubrik: 'Villkor i beslutet',
      text: ['Skolverkets beslut om bidrag kan innehålla villkor. De står i så fall i beslutet.'],
      praktik: 'Läs beslutet noga. Följer ni inte villkoren kan ni behöva betala tillbaka bidraget (18 §).',
      nyckelord: ['beslut', 'villkor']
    },
    {
      ref: '15 §', rubrik: 'När pengarna inte räcker',
      text: [
        'Kommer det in fler ansökningar än det finns pengar till väljer Skolverket ut vilka som får bidrag.',
        'Pengarna fördelas då i första hand efter huvudmannens andel av eleverna i de skolformer som bidraget gäller, enligt Skolverkets senast publicerade statistik. Inget bidrag ska vara lägre än 75 000 kr.',
        'Blir det pengar över prioriterar Skolverket de huvudmän som har störst behov av personalförstärkning.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Störst behov har enligt Skolverket huvudmän med särskilt svåra förutsättningar. Det bedöms med Skolverkets fördelningsnycklar för grundskolan och gymnasieskolan. Ingen yrkeskategori prioriteras före en annan. För 2026 fanns 1 550 miljoner kronor, varav 200 miljoner bara för elevhälsan. Pengarna fördelades till 723 huvudmän.'
      },
      nyckelord: ['urval', 'fördelning', 'elevantal', '75000', 'prioritering', 'svåra förutsättningar', 'anslag', 'budget']
    },
    {
      ref: '16 §', rubrik: 'Uppföljning och redovisning',
      text: ['Skolverket följer upp hur bidraget används. Den som har fått bidrag ska delta i uppföljningen och lämna de uppgifter som Skolverket, eller en annan myndighet med uppdrag från regeringen, begär.'],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Efter bidragsåret redovisar ni antalet årsarbetskrafter per yrkeskategori för båda åren, och om ni har behållit tidigare förstärkningar. Bidraget för 2026 redovisas 15 januari–15 februari 2027, och bidraget för 2027 redovisas 15 januari–15 februari 2028. Kommer redovisningen in för sent riskerar ni att behöva betala tillbaka.'
      },
      nyckelord: ['redovisning', 'uppföljning', 'utvärdering', 'underlag', 'sista dag', 'e-tjänst']
    },
    {
      ref: '17 §', rubrik: 'Anmäl förändringar',
      text: [
        'Förändringar som kan påverka rätten till bidrag eller hur stort det blir ska anmälas till Skolverket så snart som möjligt. Det gäller både den som har sökt och den som har fått bidrag.',
        'Det kan till exempel vara att en anställning upphör eller att förstärkningen blir mindre än ni har sökt för.'
      ],
      nyckelord: ['anmälan', 'förändring', 'slutar', 'ändring']
    },
    {
      ref: '18–19 §§', rubrik: 'Betala tillbaka (återkrav)',
      text: ['Ni kan behöva betala tillbaka bidraget om'],
      lista: [
        'det har betalats ut på fel grund eller med för högt belopp,',
        'hela eller delar av det inte har använts, eller har använts till något annat,',
        'ni inte har deltagit i uppföljningen eller lämnat de uppgifter som har begärts, eller',
        'ni inte har följt villkoren i beslutet.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Skolverket ska då besluta om återkrav, men kan avstå helt eller delvis om det finns synnerliga skäl, alltså mycket starka skäl. Vanliga orsaker till återkrav är att förstärkningen blev mindre än ni sökte för, eller att kostnaderna – räknade med schablonbeloppen – inte motsvarar bidraget. Har ni särskilda skäl för att inte ha använt bidraget kan ni beskriva dem i redovisningen. Skolverket bedömer varje fall för sig.'
      },
      nyckelord: ['återkrav', 'återbetalning', 'betala tillbaka', 'synnerliga skäl', 'särskilda skäl']
    },
    {
      ref: '20 §', rubrik: 'Ränta vid återkrav',
      text: [
        'Ränta tas ut från den trettionde dagen efter beslutet om återkrav. Räntan är statens utlåningsränta plus två procentenheter.',
        'Finns det synnerliga skäl kan Skolverket avstå helt eller delvis från räntan.'
      ],
      nyckelord: ['ränta', 'återkrav', '30 dagar']
    },
    {
      ref: '21 §', rubrik: 'Stopp för utbetalning',
      text: ['Skolverket ska helt eller delvis stoppa utbetalningen av ett beviljat bidrag om villkoren inte längre bedöms vara uppfyllda, eller om det finns skäl för återbetalning enligt 18 §. Beslutet gäller direkt.'],
      praktik: 'Beviljat bidrag betalas ut en gång per termin.',
      nyckelord: ['stopp', 'utbetalning', 'hinder', 'termin']
    },
    {
      ref: '22 §', rubrik: 'Skolverkets föreskrifter',
      text: ['Skolverket får skriva mer detaljerade regler, så kallade föreskrifter, om hur bidraget fördelas och beräknas och om hur förordningen ska tillämpas. Läs därför förordningen tillsammans med Skolverkets aktuella anvisningar och ert beslut.'],
      nyckelord: ['föreskrifter', 'anvisningar', 'skolfs', 'bemyndigande']
    },
    {
      ref: '23 §', rubrik: 'Överklagande',
      text: ['Bara ett beslut enligt 21 § om att stoppa en utbetalning kan överklagas till allmän förvaltningsdomstol. Andra beslut enligt förordningen kan inte överklagas.'],
      nyckelord: ['överklaga', 'domstol', 'förvaltningsrätt']
    },
    {
      ref: 'Övergång', rubrik: 'Övergångsbestämmelser',
      text: [
        'Förordningen började gälla den 1 februari 2025, men bidrag kan ges för tid från den 1 januari 2025. Ökningar som fick bidrag 2024 enligt den upphävda förordningen (2023:117) om akutskolor, speciallärare och elevhälsan fick behållas med bidrag enligt 4 och 5 §§.',
        'Ändringen SFS 2024:1343 började gälla den 1 januari 2026. Den gav 7 § sin nuvarande lydelse. Ökningar av lärarassistenter som fick bidrag 2025 enligt den upphävda förordningen (2019:551) får behållas med bidrag enligt 7 §.'
      ],
      nyckelord: ['övergång', 'äldre regler', '2024:1343', '2023:117', '2019:551', 'ikraftträdande', 'lärarassistenter 2025']
    }
  ],

  kalkylatorer: [
    {
      id: 'belopp', modul: 'personalforstarkning-belopp',
      flik: 'Räkna på bidrag', eyebrow: 'Bidrag enligt 8–9 §§',
      rubrik: 'Hur stor blir', rubrikKursiv: 'förstärkningen?',
      ingress: 'Räkna en yrkeskategori i taget och lägg ihop resultaten. Räknaren visar bidraget innan Skolverket har prövat ansökan och innan ett eventuellt urval. Beloppen gäller 2026, eftersom beloppen för 2027 ännu inte är beslutade.',
      formel: { rubrik: 'Grundformeln', text: 'Bidrag = (ny förstärkning + bibehållande) × schablonbelopp. Ny förstärkning = årsarbetskrafter under bidragsåret − årsarbetskrafter året innan.' },
      resultatRubrik: 'Uppskattat bidrag för yrkeskategorin',
      falt: [
        { id: 'kategori', typ: 'val', etikett: 'Yrkeskategori', standard: 'lararassistent',
          alternativ: [
            { varde: 'lararassistent', etikett: 'Lärarassistent eller läraravlastande utan relevant utbildning' },
            { varde: 'laravlastande', etikett: 'Läraravlastande personal med relevant utbildning' },
            { varde: 'speciallarare', etikett: 'Speciallärare (legitimerad)' },
            { varde: 'fortbildning', etikett: 'Lärare i fortbildning till speciallärare eller specialpedagog' },
            { varde: 'kurator', etikett: 'Kurator' },
            { varde: 'skolskoterska', etikett: 'Skolsköterska (legitimerad)' },
            { varde: 'psykolog', etikett: 'Psykolog (legitimerad)' },
            { varde: 'skollakare', etikett: 'Skolläkare (legitimerad)' }
          ] },
        { id: 'aaForegaende', typ: 'tal', etikett: 'Årsarbetskrafter året innan', min: 0, max: 100000, steg: 'any', standard: 4,
          hjalp: 'För hela huvudmannen i den här yrkeskategorin. För 2027 jämför ni med 2026. Räkna med all personal, även inhyrd och den som betalas med andra bidrag.' },
        { id: 'aaBidragsar', typ: 'tal', etikett: 'Årsarbetskrafter under bidragsåret', min: 0, max: 100000, steg: 'any', standard: 5,
          hjalp: 'Det antal ni planerar att ha. Bara anställningar och uppdrag som varar minst sex månader räknas. Använd fliken Årsarbetskrafter om ni behöver räkna om tid till årsarbetskrafter.' },
        { id: 'hadeBidrag', typ: 'kryss', etikett: 'Vi fick bidrag för personalförstärkning i den här yrkeskategorin året innan.', standard: false },
        { id: 'bibehall', typ: 'tal', etikett: 'Årsarbetskrafter att behålla', min: 0, max: 100000, steg: 'any', standard: 0,
          hjalp: 'Högst det ni fick beviljat året innan, justerat efter redovisningen. Förstärkningen måste finnas kvar.',
          visasOm: { falt: 'hadeBidrag', ar: true } }
      ],
      exempel: [
        { etikett: 'Två nya speciallärare', varden: { kategori: 'speciallarare', aaForegaende: 10, aaBidragsar: 12 } },
        { etikett: 'Behålla tre skolläkare', varden: { kategori: 'skollakare', aaForegaende: 5, aaBidragsar: 5, hadeBidrag: true, bibehall: 3 } },
        { etikett: 'Efter återkrav för en halv', varden: { kategori: 'skollakare', aaForegaende: 5, aaBidragsar: 5, hadeBidrag: true, bibehall: 2.5 } },
        { etikett: 'Lärarassistent från 1 juli', varden: { kategori: 'lararassistent', aaForegaende: 4, aaBidragsar: 4.5 } }
      ],
      resultatNotis: 'Beräknat med 2026 års schablonbelopp. Om ansökningarna är fler än pengarna räcker till fördelas bidraget efter elevantal (15 §), och då kan det bli lägre än här.',
      forbehall: [
        { rubrik: 'Formeln', text: 'Ökningen av årsarbetskrafter plus det ni behåller, gånger schablonbeloppet. Räkneregeln står på Skolverkets sida för 2025. Sidorna för 2026 och 2027 beskriver samma princip i ord. Årsarbetskrafterna avrundas till två decimaler.' },
        { rubrik: 'Det här prövar räknaren inte', text: 'Om huvudmannen och personalen uppfyller villkoren, till exempel legitimation, tillräcklig utbildning och att anställningen varar minst sex månader. Inte heller om förstärkningen beror på omfördelning, om arbetstiden redan betalas med andra statsbidrag eller om elevhälsan är sådan som ni ändå måste ha.' },
        { rubrik: 'Bibehållande', text: 'Räknaren litar på den siffra ni anger. Skolverket utgår från vad ni fick beviljat året innan och från er redovisning.' }
      ],
      tabell: {
        rubrik: 'Schablonbelopp per årsarbetskraft',
        kolumner: ['Yrkeskategori', 'Paragraf', '2025', '2026'],
        rader: [
          ['Skolläkare (legitimerad)', '6 §', '863 000 kr', '878 000 kr'],
          ['Skolsköterska (legitimerad)', '6 §', '381 000 kr', '393 000 kr'],
          ['Kurator', '6 §', '341 000 kr', '351 000 kr'],
          ['Psykolog (legitimerad)', '6 §', '404 000 kr', '414 000 kr'],
          ['Speciallärare (legitimerad)', '4 §', '390 000 kr', '402 000 kr'],
          ['Lärare i fortbildning till speciallärare eller specialpedagog', '4 §', '354 000 kr', '363 000 kr'],
          ['Läraravlastande personal med relevant utbildning', '7 §', '295 000 kr', '302 000 kr'],
          ['Lärarassistenter och läraravlastande personal utan relevant utbildning', '7 §', '–', '248 000 kr']
        ],
        fotnot: 'Källa: Skolverkets sidor för 2025 och 2026. Lärarassistenter hade ett eget bidrag 2025. Beloppen för 2027 är inte beslutade.'
      }
    },
    {
      id: 'arsarbetskraft', modul: 'personalforstarkning-arsarbetskraft',
      flik: 'Årsarbetskrafter', eyebrow: 'Skolverkets beräkningsstöd',
      rubrik: 'Från tid', rubrikKursiv: 'till årsarbetskrafter.',
      ingress: 'Ansökan och redovisningen räknas i årsarbetskrafter. Räknaren gör samma uträkning som Skolverkets beräkningsstöd i Excel och visar vad tiden motsvarar i bidrag om allt är förstärkning med bidrag.',
      formel: { rubrik: 'Grundformeln', text: 'Årsarbetskrafter = antal personer × tjänstgöringsgrad × månader under bidragsåret ÷ 12. För timavlönade: arbetade timmar ÷ 1 700.' },
      resultatRubrik: 'Bidrag för den här tiden',
      falt: [
        { id: 'kategori', typ: 'val', etikett: 'Yrkeskategori', standard: 'speciallarare',
          alternativ: [
            { varde: 'lararassistent', etikett: 'Lärarassistent eller läraravlastande utan relevant utbildning' },
            { varde: 'laravlastande', etikett: 'Läraravlastande personal med relevant utbildning' },
            { varde: 'speciallarare', etikett: 'Speciallärare (legitimerad)' },
            { varde: 'fortbildning', etikett: 'Lärare i fortbildning till speciallärare eller specialpedagog' },
            { varde: 'kurator', etikett: 'Kurator' },
            { varde: 'skolskoterska', etikett: 'Skolsköterska (legitimerad)' },
            { varde: 'psykolog', etikett: 'Psykolog (legitimerad)' },
            { varde: 'skollakare', etikett: 'Skolläkare (legitimerad)' }
          ] },
        { id: 'satt', typ: 'segment', etikett: 'Hur räknas tiden?', standard: 'tid',
          alternativ: [
            { varde: 'tid', etikett: 'Tjänstgöringsgrad', hjalp: 'För månadsanställda och uppdrag med en viss andel av heltid.' },
            { varde: 'timmar', etikett: 'Timmar', hjalp: 'För timavlönade. 1 700 timmar motsvarar en årsarbetskraft.' }
          ] },
        { id: 'antal', typ: 'tal', etikett: 'Antal personer', min: 1, max: 10000, steg: 1, standard: 1,
          hjalp: 'Samma tjänstgöringsgrad och tid för alla.', visasOm: { falt: 'satt', ar: 'tid' } },
        { id: 'grad', typ: 'reglage', etikett: 'Tjänstgöringsgrad', min: 0, max: 100, steg: 1, standard: 75, enhet: '%',
          visasOm: { falt: 'satt', ar: 'tid' } },
        { id: 'manader', typ: 'reglage', etikett: 'Månader under bidragsåret', min: 0, max: 12, steg: 1, standard: 3, enhet: 'mån',
          hjalp: '1 januari–31 december. Räkna bort sammanhängande frånvaro över 30 dagar, till exempel tjänstledighet, föräldraledighet eller sjukskrivning.',
          visasOm: { falt: 'satt', ar: 'tid' } },
        { id: 'timmar', typ: 'tal', etikett: 'Arbetade timmar under bidragsåret', min: 0, max: 17000000, steg: 'any', standard: 850, enhet: 'tim',
          visasOm: { falt: 'satt', ar: 'timmar' } },
        { id: 'minstSexManader', typ: 'kryss', etikett: 'Anställningen eller uppdraget varar minst sex månader totalt, även om en del ligger efter årsskiftet.', standard: true }
      ],
      exempel: [
        { etikett: 'Skolverkets exempel: 75 % i tre månader', varden: { kategori: 'speciallarare', satt: 'tid', antal: 1, grad: 75, manader: 3 } },
        { etikett: 'Två på heltid från 1 juli', varden: { kategori: 'speciallarare', satt: 'tid', antal: 2, grad: 100, manader: 6 } },
        { etikett: 'Timavlönad lärarassistent', varden: { kategori: 'lararassistent', satt: 'timmar', timmar: 850 } }
      ],
      resultatNotis: 'Beloppet gäller bara om tiden är en ny förstärkning eller en förstärkning som ni behåller. Räkna med 2026 års schablonbelopp tills beloppen för 2027 är beslutade.',
      forbehall: [
        { rubrik: 'Vad som ska räknas med', text: 'Både egen personal och inhyrd personal, till exempel konsulter. Vikarier kan räknas med om de uppfyller villkoren. Kortare frånvaro behöver inte räknas bort.' },
        { rubrik: 'Avrundning', text: 'Skolverket vill helst ha årsarbetskrafter med högst två decimaler. Räknaren avrundar summan. I Skolverkets eget exempel avrundas varje person för sig, så summan kan skilja en hundradel.' },
        { rubrik: 'Det här prövar räknaren inte', text: 'Om tiden verkligen är en ökning jämfört med året innan. Använd fliken Räkna på bidrag för det.' }
      ]
    }
  ],

  process: [
    { rubrik: 'Räkna årsarbetskrafterna', text: 'Räkna hur många årsarbetskrafter per yrkeskategori huvudmannen hade året innan. Ta med inhyrd personal och personal som betalas med andra bidrag. Skolverkets beräkningsstöd i Excel kan hjälpa till.', ref: '8 §' },
    { rubrik: 'Planera förstärkningen', text: 'Bestäm vad ni vill behålla från tidigare bidrag och hur många nya årsarbetskrafter ni vill anställa. Varje anställning eller uppdrag ska vara minst sex månader, och personalen ska uppfylla kraven för yrket.', ref: '4–8 §§' },
    { rubrik: 'Sök i e-tjänsten', text: 'En behörig företrädare söker på heder och samvete och anger yrkeskategorierna. För 2027 är ansökan öppen 15 januari–15 februari 2027.', ref: '13 §' },
    { rubrik: 'Beslut och utbetalning', text: 'Skolverket beslutar och gör ett urval om pengarna inte räcker. För 2026 kom beslutet i juli. Pengarna betalas ut en gång per termin och får bara användas för de beviljade yrkeskategorierna.', ref: '10, 14–15 §§' },
    { rubrik: 'Följ upp, anmäl och redovisa', text: 'Anmäl förändringar så snart som möjligt. Redovisa årsarbetskrafterna i tid efter bidragsåret – för 2027 är det 15 januari–15 februari 2028. Bidrag som inte har använts rätt kan behöva betalas tillbaka.', ref: '16–21 §§' }
  ],

  underlagRubrik: 'Underlag att ha till hands',
  underlagIngress: 'Använd listan när ni förbereder ansökan eller redovisningen. Markeringarna sparas inte – de försvinner när ni stänger sidan.',
  underlag: [
    'Årsarbetskrafter per yrkeskategori för året innan, för hela huvudmannen, med inhyrd personal och personal som betalas med andra bidrag.',
    'Förra årets beslut och redovisning, om ni vill behålla tidigare förstärkning.',
    'Anställningsavtal och uppdragsavtal som visar tjänstgöringsgrad, start och att anställningen varar minst sex månader.',
    'Legitimation och behörighet för skolläkare, skolsköterskor, psykologer och speciallärare. Er bedömning av kuratorernas utbildning. Intyg om fortbildning för lärare som studerar.',
    'Uppgifter om längre frånvaro (över 30 dagar i följd) och arbetade timmar för timavlönade.',
    'Vem som är behörig företrädare och har behörighet i Skolverkets e-tjänst.'
  ],

  kallor: [
    {
      titel: 'Förordning (2024:1341) · Sveriges riksdag',
      url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-20241341-om-statsbidrag-for_sfs-2024-1341/',
      beskrivning: 'Källan för villkor, yrkeskategorier, bidragets storlek, fördelning och återkrav. Paragrafhänvisningarna i guiden gäller den här förordningen, ändrad t.o.m. SFS 2024:1343.'
    },
    {
      titel: 'Statsbidrag för personalförstärkning 2027 · Skolverket',
      url: 'https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-personalforstarkning-2027',
      beskrivning: 'Datum för ansökan och redovisning, villkor, bibehållande, årsarbetskrafter, urval och frågor och svar. Sidan länkar till beräkningsstödet för årsarbetskrafter.'
    },
    {
      titel: 'Statsbidrag för personalförstärkning 2026 · Skolverket',
      url: 'https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-personalforstarkning-2026',
      beskrivning: 'Schablonbeloppen för 2026, anslaget, beslutet från juli 2026 och redovisningen av 2026 års bidrag.'
    },
    {
      titel: 'Statsbidrag för personalförstärkning 2025 · Skolverket (arkiverad sida)',
      url: 'https://web.archive.org/web/20260711045911/https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-personalforstarkning-2025',
      beskrivning: 'Kopia i Internet Archive. Där står Skolverkets räkneregel för bidragsbeloppet och schablonbeloppen för 2025.'
    }
  ],

  forbehall: 'Guiden sammanfattar reglerna och visar hur beräkningarna går till. Räknarna kontrollerar inte rätten till bidrag, personalens behörighet, om förstärkningen är en verklig ökning eller hur Skolverket fördelar pengarna vid ett urval. Beloppen gäller 2026 tills Skolverket har beslutat beloppen för 2027. Använd aktuella anvisningar och ert beslut när ni ansöker och redovisar.'
};
