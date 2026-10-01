/* Fördjupning: Erasmus+ småskaliga partnerskap inom förskola och skola (KA210-SCH).
 * EU-medel, inte statsbidrag. Innehållet är stämt mot Erasmus+ programguide 2026 (version 1, 12.11.2025),
 * avsnittet "Small-scale partnerships", UHR:s sida om småskaliga partnerskap och kommissionens handbok om
 * klumpsummemodellen för KA2 2026. Schema: se FORDJUPNING.md. Ingen räknare: bidraget är ett av två fasta
 * belopp och det finns inga schabloner att räkna med. */
window.SB_FORDJUPNING = window.SB_FORDJUPNING || {};
window.SB_FORDJUPNING['erasmus-smaskaliga-partnerskap'] = {
  id: 'erasmus-smaskaliga-partnerskap',
  rubrik: 'Småskaliga partnerskap',
  rubrikKursiv: 'i klartext.',
  ingress: 'Vem kan vara med, vad kan projektet handla om och hur fungerar de fasta beloppen på 30 000 och 60 000 euro? Här står reglerna för skolor och förskolor på vanlig svenska.',
  kontrollerad: '2026-10-01',
  forordning: {
    namn: 'Erasmus+ programguide 2026',
    etikett: 'Erasmus+ programguide 2026',
    iText: 'i programguiden',
    url: 'https://erasmus-plus.ec.europa.eu/document/erasmus-programme-guide-2026',
    lydelse: 'version 1 av 12 november 2025'
  },

  snabbfaktaRubrik: 'Tre saker att känna till först',
  snabbfakta: [
    { rubrik: 'EU-pengar, inte statsbidrag', text: 'Partnerskapen ingår i Erasmus+, EU:s program för utbildning. UHR fördelar pengarna i Sverige enligt EU:s programguide.' },
    { rubrik: 'Två fasta belopp', text: 'Ni väljer 30 000 eller 60 000 euro för hela projektet. Ni redovisar inte kvitton. I stället ska ni genomföra de aktiviteter och ge de resultat ni lovat.' },
    { rubrik: 'Minst två länder', text: 'Minst två organisationer från två olika länder i Erasmus+ ska vara med. Det finns ingen övre gräns.' }
  ],
  snabbfaktaNot: 'Partnerskapen riktar sig särskilt till organisationer som är nya i Erasmus+ eller har liten erfarenhet.',

  begreppRubrik: 'Ord som återkommer',
  begrepp: [
    { term: 'Klumpsumma', forklaring: 'Ett fast belopp för hela projektet. Det betalas ut när aktiviteterna är genomförda med god kvalitet, inte efter faktiska kostnader.' },
    { term: 'Koordinator', forklaring: 'Den organisation som skickar in ansökan, skriver kontraktet och ansvarar för ekonomin och kontakten med programkontoret.' },
    { term: 'Partner', forklaring: 'De andra organisationerna i projektet. Alla ska anges redan i ansökan.' },
    { term: 'Prioritering', forklaring: 'Ett område som EU vill stödja, till exempel inkludering, miljö, digitalisering eller demokrati. Projektet ska bidra till minst en.' },
    { term: 'Medfinansiering', forklaring: 'Det ni själva står för. Klumpsumman är tänkt att täcka en del, inte allt. Det kan vara egen arbetstid eller lokaler.' }
  ],

  sektioner: {
    regler: {
      rubrik: 'Från programguide', rubrikKursiv: 'till praktik.',
      ingress: 'Rubrikerna följer programguidens avsnitt om småskaliga partnerskap. Öppna det ni behöver, eller sök på till exempel ”partner”, ”klumpsumma” eller ”poäng”.'
    },
    praktik: {
      rubrik: 'Så används', rubrikKursiv: 'reglerna.',
      ingress: 'Det viktigaste arbetet görs före ansökan: att hitta partner och komma överens om ett gemensamt behov. Under projektet ska aktiviteterna genomföras och dokumenteras, och resultaten ska spridas.'
    }
  },

  paragrafer: [
    {
      ref: 'Småskaliga partnerskap', rubrik: 'Vad ett småskaligt partnerskap är',
      text: [
        'Småskaliga partnerskap ska göra Erasmus+ tillgängligt för små organisationer, nya organisationer och sådana med liten erfarenhet. Beloppen är lägre, projekten kortare och administrationen enklare än i de större samarbetspartnerskapen.',
        'Partnerskapet kan blanda aktiviteter i flera länder med aktiviteter hemma, så länge de har en europeisk dimension.'
      ],
      lista: [
        'Locka nya och mindre erfarna organisationer till programmet, som ett första steg mot europeiskt samarbete.',
        'Stödja inkludering av grupper med begränsade möjligheter.',
        'Stödja ett aktivt europeiskt medborgarskap och föra in det europeiska perspektivet på lokal nivå.'
      ],
      praktik: {
        rubrik: 'UHR:s förklaring',
        text: 'Tillsammans med partner kan ni utforska områden där ni behöver utvecklas eller har stora utmaningar. Det kan vara projektarbete, workshoppar, kompetensbyggande och undervisnings- och lärandeaktiviteter för elever eller personal, fysiskt, digitalt eller blandat. Resultaten ska kunna spridas i organisationerna och i lokalsamhället.'
      },
      nyckelord: ['partnerskap', 'KA210', 'samarbete', 'nybörjare', 'syfte', 'europeisk']
    },
    {
      ref: 'Vem kan söka', rubrik: 'Vem kan söka och vara med',
      text: [
        'Alla offentliga och privata organisationer i ett EU-land eller ett associerat land kan vara med, oavsett område. Den som söker gör det för alla organisationer i projektet.',
        'Inom skola, yrkesutbildning, vuxenutbildning och ungdom kan en organisation söka en gång per ansökningsomgång.'
      ],
      praktik: {
        rubrik: 'UHR:s förklaring',
        text: 'Alla skolformer från förskola till gymnasium och vuxenutbildning kan söka, både fristående och kommunala. Även kommuner, regioner, myndigheter, bibliotek, museer, stiftelser, föreningar och företag kan vara med. Det avgörande är att partnerskapet kan påverka målgruppen och bidra till utveckling inom skola, yrkesutbildning eller vuxnas lärande.'
      },
      nyckelord: ['vem kan söka', 'fristående', 'kommunal', 'förening', 'företag', 'organisation', 'skolform']
    },
    {
      ref: 'Partnerskapet', rubrik: 'Partner och antal ansökningar',
      text: [
        'Ett partnerskap ska ha minst två organisationer från två olika EU-länder eller associerade länder. Det finns ingen övre gräns. Alla organisationer ska anges i ansökan.',
        'Välj partner med olika erfarenheter och profiler, som tillsammans passar projektets mål.',
        'Samma organisation får vara med i högst fem ansökningar om småskaliga partnerskap per ansökningsomgång, som sökande eller partner. Samma grupp av partner kan bara skicka en ansökan per omgång.'
      ],
      praktik: {
        rubrik: 'UHR:s förklaring',
        text: 'Ni kan få bidrag till högst ett småskaligt projekt som koordinator per omgång, och av fem ansökningar får högst en vara som koordinator. Länder utanför Erasmus+ kan vara med som associerade partner om de ger ett tydligt mervärde. Ansökningar som är för lika varandra eller tidigare projekt kan räknas som dubbelfinansiering och blir då ogiltiga.'
      },
      nyckelord: ['partner', 'två länder', 'fem ansökningar', 'koordinator', 'eTwinning', 'dubbelfinansiering', 'associerad partner']
    },
    {
      ref: 'Prioriteringar', rubrik: 'Vad projektet ska bidra till',
      text: [
        'Projektet ska ta upp minst en övergripande prioritering eller minst en prioritering för det område som påverkas mest, till exempel skola.',
        'De övergripande prioriteringarna är inkludering och mångfald, miljön och klimatet, digital omställning samt deltagande i det demokratiska livet. Programkontoret kan lyfta fram prioriteringar som är särskilt viktiga i landet.'
      ],
      praktik: 'Projektet ska utgå från ett behov som alla organisationerna har gemensamt. Bedömarna ser särskilt positivt på projekt om inkludering och mångfald.',
      nyckelord: ['prioritering', 'inkludering', 'mångfald', 'miljö', 'klimat', 'digital', 'demokrati']
    },
    {
      ref: 'Plats och projekttid', rubrik: 'Var och hur länge',
      text: [
        'Alla aktiviteter ska ske i länder där någon av organisationerna i projektet finns. Om det är motiverat kan aktiviteter också ske där EU:s institutioner har säte.',
        'Projektet pågår 6–24 månader. Ni väljer längden i ansökan utifrån mål och aktiviteter. I undantagsfall kan projektet förlängas, men bidraget blir detsamma.'
      ],
      nyckelord: ['projekttid', '6-24 månader', 'förlängning', 'plats', 'land']
    },
    {
      ref: 'Ansökningsdatum', rubrik: 'När ni söker',
      text: [
        'Sista dag är 5 mars kl. 12.00 (Bryssel-tid) för projekt som startar mellan 1 september och 31 december samma år.',
        'Programkontoret kan öppna en extra omgång med sista dag 1 oktober, för projekt som startar mellan 1 januari och 31 augusti året efter.'
      ],
      praktik: {
        rubrik: 'UHR:s förklaring',
        text: 'I Sverige går det att söka en gång per år. Ansökan öppnar på hösten och sista dag är i mars. Koordinatorn söker i EU:s formulär KA210-SCH, i normalfallet på engelska som är partnerskapets arbetsspråk. Bifoga bara försäkran på heder och samvete och partnernas fullmakter.'
      },
      nyckelord: ['deadline', 'sista dag', 'mars', '5 mars', 'klockan 12', 'KA210-SCH', 'engelska']
    },
    {
      ref: 'Bedömningskriterier', rubrik: 'Så bedöms ansökan',
      text: ['Ansökan bedöms med poäng, högst 100. Den måste få minst 60 poäng och minst hälften av poängen i varje del.'],
      lista: [
        'Relevans, högst 30 poäng: koppling till syftet och prioriteringarna, EU:s värderingar och organisationernas profil.',
        'Projektets upplägg och genomförande, högst 30 poäng: tydliga och realistiska mål, inkluderande aktiviteter, kostnadseffektivitet, digitala verktyg och miljö.',
        'Partnerskapet, högst 20 poäng: rätt blandning av organisationer, nya organisationer och en tydlig fördelning av uppgifter.',
        'Effekt, högst 20 poäng: hur resultaten tas till vara, utvärderas och sprids, och hur EU-stödet syns.'
      ],
      praktik: 'Har två ansökningar samma poäng går den med högst poäng för relevans före, och därefter den med högst poäng för effekt.',
      nyckelord: ['bedömning', 'poäng', '60 poäng', 'relevans', 'kvalitet', 'effekt']
    },
    {
      ref: 'Bidragsregler', rubrik: 'Klumpsumman på 30 000 eller 60 000 euro',
      text: [
        'Bidraget är ett av två fasta belopp: 30 000 eller 60 000 euro. Ni väljer det belopp som passar de aktiviteter ni vill göra och de resultat ni vill nå.',
        'Valet ska bygga på en uppskattning av vad hela projektet kostar. Projekten förutsätts delfinansieras på annat sätt, så den uppskattade kostnaden ska vara högre än beloppet ni väljer.',
        'I ansökan beskriver ni varje aktivitet och hur stor del av bidraget den får. Någon detaljerad budget behövs inte. Tjänster får köpas in, men inte för kärnan i projektet.'
      ],
      praktik: {
        rubrik: 'Om ni tvekar mellan beloppen',
        text: 'Programguiden ger två vägar: gör projektet billigare, till exempel med färre eller enklare aktiviteter, eller gör det större med fler deltagare, aktiviteter eller resultat. Hur väl aktiviteterna motsvarar beloppet är en viktig del av bedömningen.'
      },
      nyckelord: ['klumpsumma', 'lump sum', '30000', '60000', 'budget', 'medfinansiering', 'kostnad']
    },
    {
      ref: 'Utbetalning av bidraget', rubrik: 'Utbetalning och slutrapport',
      text: [
        'För att få hela bidraget ska alla aktiviteter vara genomförda med den kvalitet som beskrevs i ansökan.',
        'Har en aktivitet inte genomförts, bara delvis eller med för låg kvalitet, kan bidraget minskas vid slutrapporten. Programkontoret kan då stryka beloppet för enskilda aktiviteter eller minska hela beloppet med en viss procent.',
        'Slutrapporten bedöms utifrån beskrivningen av varje aktivitet, hur målen har nåtts och kvaliteten på de resultat ni laddat upp på Erasmus+ Project Results Platform.'
      ],
      praktik: {
        rubrik: 'UHR:s förklaring',
        text: 'Beslut kommer senast sex månader efter sista ansökningsdag. Projektet startar mellan 1 september och 31 december samma år. För de flesta projekt betalas en första del ut när kontraktet är undertecknat, och resten efter eventuell delrapport och slutrapport. Koordinatorn ansvarar för utbetalningar till partnerna och för att betala tillbaka om rapporter inte godkänns.'
      },
      nyckelord: ['utbetalning', 'slutrapport', 'minskning', 'avdrag', 'Project Results Platform', 'resultat', 'återbetalning']
    },
    {
      ref: 'Koordinatorns ansvar', rubrik: 'Vad koordinatorn ansvarar för',
      text: [
        'Koordinatorn skickar in ansökan för hela partnerskapet till sitt lands programkontor och skriver under kontraktet. Den har ansvaret för att projektet genomförs som det står i ansökan.'
      ],
      praktik: {
        rubrik: 'UHR:s förklaring',
        text: 'Koordinatorn ska ha en tydlig koppling till landet där ansökan lämnas. Den ansvarar för ekonomin, kontakten med UHR och rapporteringen. Övriga uppgifter fördelar partnerna mellan sig i en egen överenskommelse. UHR kontrollerar också att ansökan inte liknar andra ansökningar för mycket, och ibland organisationens kapacitet.'
      },
      nyckelord: ['koordinator', 'ansvar', 'kontrakt', 'överenskommelse', 'partneravtal', 'ekonomi']
    }
  ],

  process: [
    { rubrik: 'Hitta partner', text: 'Börja i god tid före hösten. Partner kan ni hitta via eTwinning, European School Education Platform, UHR:s kontaktseminarier eller egna kontakter.', ref: 'Partnerskapet' },
    { rubrik: 'Planera tillsammans', text: 'Kom överens om ett gemensamt behov, mål, aktiviteter och resultat. Uppskatta kostnaden och välj 30 000 eller 60 000 euro. Alla svenska partner behöver OID.', ref: 'Bidragsregler' },
    { rubrik: 'Ansök i mars', text: 'Koordinatorn skickar in ansökan i formuläret KA210-SCH före kl. 12.00 sista dagen.', ref: 'Ansökningsdatum' },
    { rubrik: 'Beslut och start', text: 'Beslut kommer senast sex månader efter sista ansökningsdag. Projektet startar mellan 1 september och 31 december.', ref: 'Utbetalning av bidraget' },
    { rubrik: 'Genomför och rapportera', text: 'Genomför aktiviteterna, dokumentera dem och sprid resultaten. Lämna slutrapporten och ladda upp resultaten på Project Results Platform.', ref: 'Utbetalning av bidraget' }
  ],

  underlagRubrik: 'Underlag att ha till hands',
  underlagIngress: 'Använd listan när ni förbereder ansökan med era partner. Markeringarna sparas inte – de försvinner när ni stänger sidan.',
  underlag: [
    'OID för alla organisationer och EU Login för den som fyller i ansökan.',
    'En behovsanalys som visar det gemensamma behovet hos partnerna och målgruppen.',
    'Mål, aktiviteter och förväntade resultat som hänger ihop, och vilken prioritering projektet bidrar till.',
    'En kostnadsuppskattning per aktivitet som stöd för valet av belopp.',
    'Fördelningen av uppgifter mellan partnerna och en överenskommelse om ansvar och pengar.',
    'Försäkran på heder och samvete och fullmakter från partnerna.',
    'Plan för hur resultaten ska utvärderas och spridas.'
  ],

  kallor: [
    {
      titel: 'Erasmus+ programguide 2026 · Europeiska kommissionen',
      url: 'https://erasmus-plus.ec.europa.eu/document/erasmus-programme-guide-2026',
      beskrivning: 'Avsnittet Small-scale partnerships styr vem som kan vara med, datum, bedömning och klumpsummorna. Den engelska versionen gäller vid skillnader.'
    },
    {
      titel: 'Erasmus+ småskaliga partnerskap · UHR',
      url: 'https://www.uhr.se/internationella-mojligheter/samarbete-och-utbyte/sok-finansiering/erasmus-smaskaliga-partnerskap/',
      beskrivning: 'UHR:s sida om vilka som kan söka i Sverige, antal ansökningar, beslut och utbetalning.'
    },
    {
      titel: 'Handbook on the lump sum funding model, KA2 2026 · UHR',
      url: 'https://www.uhr.se/globalassets/_uhr.se/internationellt/samarbete-och-utbyte/program/erasmus/partnerskap/driv-projekt/handbook-on-the-lump-sum-funding-model-ka2-2026.pdf',
      beskrivning: 'Kommissionens handbok om klumpsummor: hur aktiviteter beskrivs och beloppet fördelas i ansökan.'
    }
  ],

  forbehall: 'Erasmus+ är EU-medel och inte statsbidrag. Guiden sammanfattar programguiden för 2026 och UHR:s anvisningar. Det finns ingen räknare eftersom bidraget är ett av två fasta belopp. Datum för 2027 är inte publicerade. Programguiden kommer i en ny version varje år, och programperioden slutar 2027. Läs alltid aktuell programguide, UHR:s anvisningar och ert kontrakt.'
};
