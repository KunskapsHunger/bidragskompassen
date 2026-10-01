/* Fördjupning: Allmänna arvsfonden – projektstöd. Inte ett statsbidrag: stödet styrs av lag (2021:401) om
 * Allmänna arvsfonden (ändrad t.o.m. SFS 2025:1279), förordning (2021:403) om Allmänna arvsfonden och
 * Arvsfondsdelegationens generella villkor för projektstöd (version 6.0 A, från 2023-04-01).
 * Stämt även mot Arvsfondens sidor om stödformer, vanliga frågor (uppdaterad 2026-09-28), avslagsskäl,
 * budgetriktlinjer för projektstöd, tidslinje och ekonomi. Schema: se FORDJUPNING.md ("Regelverk som inte är
 * en svensk förordning"). Klartext, inte citat – paragrafhänvisningarna gäller lagen. */
window.SB_FORDJUPNING = window.SB_FORDJUPNING || {};
window.SB_FORDJUPNING['arvsfonden-projektstod'] = {
  id: 'arvsfonden-projektstod',
  rubrik: 'Arvsfonden',
  rubrikKursiv: 'för skolor som samarbetar.',
  ingress: 'Vem kan söka, vad kan få stöd och vilken roll kan en skola ha? Här står reglerna för Arvsfondens projektstöd på vanlig svenska.',
  kontrollerad: '2026-10-01',
  forordning: {
    namn: 'Lag (2021:401) om Allmänna arvsfonden',
    etikett: 'Lag 2021:401',
    iText: 'i lagen',
    lydelse: 'ändrad t.o.m. SFS 2025:1279',
    url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-2021401-om-allmanna-arvsfonden_sfs-2021-401/'
  },

  snabbfaktaRubrik: 'Tre saker att känna till först',
  snabbfakta: [
    { rubrik: 'Inte ett statsbidrag', text: 'Pengarna kommer från arv efter personer som inte hade några arvingar. Stödet styrs av en egen lag och Arvsfondens villkor.' },
    { rubrik: 'Föreningen söker', text: 'Ideella organisationer söker. En skola kan vara samarbetspartner, men föreningen och målgruppen ska ha huvudrollen.' },
    { rubrik: 'Inte skolans uppdrag', text: 'Projektet ska vara nytt och utvecklande. Sådant som är skolans ansvar enligt läroplanerna får inte stöd.' }
  ],
  snabbfaktaNot: 'Ansökan kan skickas när som helst. Beslut om projektstöd tar i snitt 5–8 månader.',

  begreppRubrik: 'Ord som återkommer',
  begrepp: [
    { term: 'Arvsfondsdelegationen', forklaring: 'Den myndighet som beslutar om stöd ur fonden. Kammarkollegiet sköter handläggningen.' },
    { term: 'Projektstöd', forklaring: 'Stöd för att utveckla en metod eller verksamhet under ett, två eller tre år. Lokalstöd gäller byggen, och effektstöd att sprida resultat från ett projekt.' },
    { term: 'Målgrupperna', forklaring: 'Barn 0–11 år, unga 12–25 år, personer över 26 år med funktionsnedsättning och äldre från 65 år.' },
    { term: 'Offentlig huvudman', forklaring: 'Till exempel en kommun eller region. Den kan bara i undantagsfall få projektstöd.' },
    { term: 'Överlevnad', forklaring: 'Att projektets resultat lever vidare och gör nytta när pengarna från fonden har tagit slut.' }
  ],

  sektioner: {
    regler: {
      rubrik: 'Från paragraf', rubrikKursiv: 'till praktik.',
      ingress: 'Rubrikerna följer lagen om Allmänna arvsfonden. Arvsfondens egna regler och tolkningar står i rutorna. Sök på till exempel ”skola”, ”kommun” eller ”revisor”.'
    },
    praktik: {
      rubrik: 'Så används', rubrikKursiv: 'reglerna.',
      ingress: 'Ett arvsfondsprojekt drivs av en förening under upp till tre år. Skolan kan bidra med kontakter, lokaler eller elever som är med – men projektet ska inte vara skolans vanliga verksamhet.'
    }
  },

  paragrafer: [
    {
      ref: '1 kap. 1–2 §§', rubrik: 'Vad Arvsfonden är till för',
      text: [
        'Allmänna arvsfonden ska främja verksamhet av ideell karaktär för barn, ungdomar, äldre personer och personer med funktionsnedsättning.',
        'Fonden består av egendom som har tillfallit den genom arv, gåvor och testamenten. Det är alltså inte ett statsbidrag från statens budget.'
      ],
      praktik: {
        rubrik: 'Arvsfondens förklaring',
        text: 'Ett projekt måste rikta sig till minst en av fyra målgrupper: barn 0–11 år, ungdomar 12–25 år, personer som har fyllt 26 år och har en funktionsnedsättning, eller äldre som har fyllt 65 år. Målgruppen måste finnas i Sverige. Projekt för vuxna 26–65 år utan funktionsnedsättning, för allmänheten eller för enstaka personer får inte stöd.'
      },
      nyckelord: ['syfte', 'ideell', 'målgrupper', 'barn', 'unga', 'äldre', 'funktionsnedsättning', 'arv', 'inte statsbidrag']
    },
    {
      ref: '2 kap. 1–2 §§', rubrik: 'Vem som beslutar',
      text: [
        'Arvsfondsdelegationen beslutar om stöd ur fonden. Regeringen utser ledamöterna, och de ska ha goda kunskaper om fondens målgrupper.',
        'Kammarkollegiet sköter handläggningen åt delegationen, enligt förordningen (2021:403) om Allmänna arvsfonden.'
      ],
      praktik: 'Delegationen fattar beslut sex gånger per år. Beslutet skickas med e-post.',
      nyckelord: ['arvsfondsdelegationen', 'kammarkollegiet', 'beslut', 'sex gånger per år']
    },
    {
      ref: '2 kap. 3 §', rubrik: 'Vad som kan få stöd',
      text: [
        'Stöd kan ges till verksamhet som är utvecklande för någon av målgrupperna och som kan fortsätta göra nytta när stödet har tagit slut. Stöd ges inte till en organisations löpande verksamhet.',
        'Stöd kan också ges till att bygga nya, bygga till eller bygga om lokaler och anläggningar för sådan verksamhet.',
        'Vid bedömningen vägs in om målgruppen är med och planerar eller genomför projektet.'
      ],
      praktik: {
        rubrik: 'Arvsfondens förklaring',
        text: 'Alla ansökningar bedöms efter tre kriterier, och alla tre måste vara uppfyllda. Utvecklande: projektet ska pröva något nytt för målgruppen och skilja sig från er vanliga verksamhet. Delaktighet: målgruppen ska ha inflytande i planering, genomförande och den fortsatta verksamheten, till exempel genom referensgrupp, styrgrupp eller anställning. Överlevnad: det ska finnas en realistisk plan för vad som lever vidare, var och vem som betalar. Enstaka arrangemang som en klassresa, en konsert eller ett läger räknas inte som projekt, men kan ingå bland andra aktiviteter. Forskningsprojekt får inte stöd. Projektstöd söks för ett, två eller tre år på en gång.'
      },
      nyckelord: ['utvecklande', 'delaktighet', 'överlevnad', 'kriterier', 'löpande verksamhet', 'klassresa', 'läger', 'forskning', 'projekttid', 'tre år']
    },
    {
      ref: '2 kap. 4 §', rubrik: 'Vem kan få stöd',
      text: [
        'Stöd kan bara ges till en organisation som bedriver ideell verksamhet. Om det finns särskilda skäl kan projektstöd också ges till en offentlig huvudman, till exempel en kommun.',
        'Stöd ges inte till en organisation som har skulder för svenska skatter eller avgifter hos Kronofogden, eller som är i likvidation eller konkurs.'
      ],
      praktik: {
        rubrik: 'Arvsfondens förklaring',
        text: 'Ideella föreningar, ekonomiska föreningar, registrerade trossamfund och ideella stiftelser kan söka, liksom aktiebolag med särskild vinstutdelningsbegränsning. Andra bolag kan inte söka. Organisationen ska ha haft verksamhet i Sverige i minst ett år. En offentlig huvudman kan få projektstöd bara om allt detta gäller: projektet ligger utanför huvudmannens ansvar, behovet kan inte mötas med offentliga pengar, projektet görs i nära samarbete med ideella organisationer som har inflytande, huvudmannen bidrar med egen finansiering (till exempel personal eller lokaler) och tar ansvar för att projektet lever vidare. Organisationer där en offentlig huvudman utser majoriteten av styrelsen bedöms som offentlig huvudman.'
      },
      nyckelord: ['sökande', 'förening', 'stiftelse', 'aktiebolag', 'kommun', 'offentlig huvudman', 'ett år', 'konkurs', 'skulder', 'kronofogden']
    },
    {
      ref: '2 kap. 4 a–4 b §§', rubrik: 'Demokrativillkor',
      text: ['Stöd ges inte om organisationen, eller någon som företräder den i verksamheten:'],
      lista: [
        'Använder våld, tvång eller hot, eller på annat sätt kränker någons grundläggande fri- och rättigheter.',
        'Diskriminerar personer eller grupper, eller bryter på annat sätt mot principen om alla människors lika värde.',
        'Försvarar, främjar eller uppmanar till sådant.',
        'Motarbetar det demokratiska styrelseskicket.'
      ],
      praktik: {
        rubrik: 'Samarbetsorganisationer och undantag',
        text: 'Samma sak gäller om en samarbetsorganisation, eller någon som företräder den, agerar så. Stöd kan ändå ges om det finns särskilda skäl. Då vägs in om organisationen har tagit avstånd, vidtagit åtgärder, om det var en enstaka händelse och om den ligger långt tillbaka. Arvsfonden kräver dessutom att en förening har en demokratisk struktur, till exempel öppet och frivilligt medlemskap, lika röstvärde på årsmötet och en vald styrelse och revisor.'
      },
      nyckelord: ['demokrativillkor', 'våld', 'diskriminering', 'demokrati', 'samarbetsorganisation', 'demokratisk struktur', 'stadgar']
    },
    {
      ref: '2 kap. 5 §', rubrik: 'Ansökan',
      text: [
        'Ansökan görs skriftligen hos Arvsfondsdelegationen och ska innehålla de uppgifter som behövs för att bedöma den. Den skrivs under av sökanden eller ett ombud, och får skrivas under elektroniskt.',
        'Enligt förordningen (2021:403) ska ansökan beskriva projektet, en ekonomisk kalkyl, tid och plats och en plan för dokumentation. Stadgar, den senaste verksamhetsberättelsen och uppgifter om styrelsen bifogas när det behövs.'
      ],
      praktik: {
        rubrik: 'Arvsfondens förklaring',
        text: 'Det finns inga ansökningsperioder. Ansökningar tas emot och bedöms löpande hela året. Ansökan görs i e-tjänsten med BankID eller Freja eID+, och både kontaktpersonen och organisationens firmatecknare signerar. Den har inte kommit in förrän alla har signerat. Förbered svaren i ett ordbehandlingsprogram – utkast i e-tjänsten kan raderas vid uppdateringar. Den genomsnittliga handläggningstiden för projektstöd är 5–8 månader. Vill ni ha en första bedömning kan ni göra Arvsfondens webbtest och ringa en handläggare.'
      },
      nyckelord: ['ansökan', 'e-tjänst', 'bankid', 'signera', 'firmatecknare', 'löpande', 'handläggningstid', '5-8 månader', 'bilagor', 'stadgar']
    },
    {
      ref: '2 kap. 6 §', rubrik: 'Villkor och vad pengarna får gå till',
      text: [
        'Ett beslut om stöd ska ha de villkor som behövs. Till varje beslut hör Arvsfondens generella villkor och en sammanställning av den godkända budgeten.',
        'Tillåtna kostnader är skäliga, faktiska och nödvändiga för projektet, finns i den beviljade budgeten och har uppstått under projekttiden. Pengarna får till exempel inte gå till:'
      ],
      lista: [
        'Kostnader som en annan finansiär betalar, eller som täcks av till exempel lönebidrag.',
        'Kostnader före projektets start, eller kostnader som inte finns i den beviljade budgeten.',
        'Alkohol, tobak, böter eller rättegångskostnader.',
        'Verksamhet utomlands eller vidareförmedling av pengar till någon annan, utan skriftligt godkännande.',
        'Löner till närstående eller till någon i styrelsen, utan skriftligt godkännande.'
      ],
      praktik: {
        rubrik: 'Arvsfondens riktlinjer för budget',
        text: 'Budgeten tar bara upp det ni söker från Arvsfonden, och varje post ska bygga på offerter eller andra verklighetsbaserade uppgifter. Generella overheadkostnader beviljas inte. Lönebikostnader godkänns normalt upp till 42 procent. Ingen person får mer än heltid i arvsfondsprojekt. Arvoden till referens- och styrgrupper är högst 500 kr per person och tillfälle. Revisorns granskning är obligatorisk, och stödet för den är 50 000 kr inklusive moms per år. Kostnader för att skriva ansökan, rekrytering och utvärdering godtas inte. Utrustning finansieras restriktivt, och bara den del som förbrukas under projektet.'
      },
      nyckelord: ['villkor', 'generella villkor', 'budget', 'kostnader', 'lönebikostnad', '42 procent', 'overhead', 'revisor', 'jäv', 'närstående', 'utrustning']
    },
    {
      ref: '2 kap. 7–8 §§', rubrik: 'Stöd till lokaler',
      text: [
        'Den som får stöd för en lokal eller anläggning ska använda den för samma ändamål i minst tio år. Om lokalen hyrs eller lånas kan tiden vara minst fem år om det finns särskilda skäl.',
        'Lokalen ska vara anpassad för personer med funktionsnedsättning, om inget hindrar det.'
      ],
      praktik: {
        rubrik: 'Arvsfondens förklaring',
        text: 'Lokalstöd är en egen stödform för ideella organisationer. Det är högst 80 procent av kostnaden och högst 10 miljoner kr. En offentlig huvudman, till exempel en kommun, kan inte få lokalstöd. Projektstöd kan i stället innehålla tillgänglighetsåtgärder som en ramp eller hiss för högst 400 000 kr.'
      },
      nyckelord: ['lokalstöd', 'lokal', 'anläggning', 'tio år', 'tillgänglighet', '80 procent', '10 miljoner']
    },
    {
      ref: '2 kap. 9 §', rubrik: 'Håll pengarna avskilda',
      text: ['Den som har fått stöd ska hålla pengarna avskilda från organisationens övriga pengar, om inte beslutet säger något annat.'],
      praktik: {
        rubrik: 'Arvsfondens förklaring',
        text: 'Pengarna ska ligga på ett eget bankkonto som bara används för projektstödet och som tecknas av två personer gemensamt. Projektets kostnader bokförs för sig, gärna med en egen projektkod. Bokföringsunderlagen sparas i minst sju år efter att slutrapporten har godkänts. Pengarna får inte ”lånas” till annat i organisationen.'
      },
      nyckelord: ['bankkonto', 'avskilda medel', 'bokföring', 'projektkod', 'attest', 'sju år']
    },
    {
      ref: '2 kap. 10 §', rubrik: 'Anmäl förändringar',
      text: ['Den som har ansökt om eller fått stöd ska utan dröjsmål anmäla ändrade förhållanden som kan påverka rätten till stödet eller hur stort det är.'],
      praktik: {
        rubrik: 'Arvsfondens förklaring',
        text: 'Väsentliga ändringar i projektet eller budgeten ska godkännas skriftligen i förväg. Att flytta pengar mellan budgetposter inom samma projektår kallas omdisponering och ska godkännas av handläggaren innan. Pengar kan inte flyttas från ett kommande projektår till ett tidigare.'
      },
      nyckelord: ['ändringar', 'anmälan', 'omdisponering', 'budget', 'handläggare']
    },
    {
      ref: '2 kap. 11 §', rubrik: 'Redovisning',
      text: ['Den som har fått stöd ska inom en viss tid redovisa skriftligen hur pengarna har använts, och lämna de underlag som behövs för granskningen.'],
      praktik: {
        rubrik: 'Arvsfondens förklaring',
        text: 'Ett projekt startar normalt första dagen i månaden efter beslutet, och pengarna begärs ut med en rekvisition. Redovisning görs var tolfte månad och när projektet är slut: en årsrapport för verksamheten, en för ekonomin och en granskningsrapport från en auktoriserad eller godkänd revisor som inte är medlem eller anställd i organisationen. Pengar som blir över betalas tillbaka till Kammarkollegiet. Efter projektet följer Arvsfonden upp med en enkät, och cirka vart tionde projekt får kontrollbesök varje år.'
      },
      nyckelord: ['redovisning', 'årsrapport', 'slutrapport', 'revisor', 'granskningsrapport', 'rekvisition', 'kontrollbesök', 'kvarvarande medel']
    },
    {
      ref: '2 kap. 12 §', rubrik: 'Stopp för utbetalning',
      text: [
        'Delegationen ska helt eller delvis stoppa utbetalningen om mottagaren inte uppfyller kraven, till exempel om löpande verksamhet finansieras, villkoren inte följs, pengarna inte hålls avskilda eller redovisningen saknas. Detsamma gäller om demokrativillkoren inte är uppfyllda.',
        'Beslutet gäller direkt. Delegationen kan först ge mottagaren chans att rätta till bristen.'
      ],
      nyckelord: ['stopp', 'utbetalning', 'hinder', 'brister']
    },
    {
      ref: '2 kap. 13–14 §§', rubrik: 'Betala tillbaka',
      text: ['Stödet ska betalas tillbaka om något av det här gäller:'],
      lista: [
        'Stödet har inte använts inom den tid som angetts, eller inte till det det var avsett för.',
        'Redovisning eller underlag har inte lämnats i tid.',
        'Mottagaren har lämnat felaktiga uppgifter eller på annat sätt orsakat att stödet betalats ut felaktigt eller med för högt belopp.',
        'Stödet har av annat skäl betalats ut felaktigt eller med för högt belopp, och mottagaren borde ha förstått det.',
        'Demokrativillkoren är inte uppfyllda.'
      ],
      praktik: 'Det är Kammarkollegiet som beslutar om återbetalning, efter att delegationen har lämnat över ärendet. Kammarkollegiet kan befria mottagaren helt eller delvis om det finns särskilda skäl. För lokaler gäller också återbetalning om lokalen säljs eller används till annat inom den bundna tiden.',
      nyckelord: ['återbetalning', 'återkrav', 'betala tillbaka', 'kammarkollegiet', 'särskilda skäl']
    },
    {
      ref: '6 kap. 1 §', rubrik: 'Överklagande',
      text: [
        'Beslut om att stoppa en utbetalning och Kammarkollegiets beslut om återbetalning kan överklagas till allmän förvaltningsdomstol. Prövningstillstånd krävs i kammarrätten.',
        'Andra beslut enligt lagen, till exempel avslag på en ansökan, får inte överklagas.'
      ],
      praktik: 'Har ni fått avslag står skälen i beslutet. Ni kan ringa handläggaren för råd och sedan söka igen.',
      nyckelord: ['överklaga', 'avslag', 'förvaltningsdomstol', 'prövningstillstånd']
    }
  ],

  process: [
    { rubrik: 'Hitta föreningen och idén', text: 'Utgå från en förening som vill utveckla något nytt för barn eller unga, och låt målgruppen vara med från början. Kom överens om skolans roll som samarbetspartner.', ref: '2 kap. 3–4 §§' },
    { rubrik: 'Pröva idén mot kriterierna', text: 'Kontrollera att projektet är utvecklande, att målgruppen är delaktig och att det finns en plan för överlevnad. Det får inte vara skolans vanliga uppdrag.', ref: '2 kap. 3 §' },
    { rubrik: 'Föreningen ansöker', text: 'Förbered svar, budget och bilagor. Ansök i e-tjänsten när som helst under året och låt firmatecknarna signera.', ref: '2 kap. 5 §' },
    { rubrik: 'Beslut efter 5–8 månader', text: 'Läs beslutet, de generella villkoren och den godkända budgeten. Öppna ett eget bankkonto och begär ut pengarna.', ref: '2 kap. 6, 9 §§' },
    { rubrik: 'Driv, rapportera och avsluta', text: 'Rapportera var tolfte månad med revisorns granskning, anmäl ändringar i förväg och slutrapportera. Betala tillbaka det som blir över.', ref: '2 kap. 10–13 §§' }
  ],

  underlagRubrik: 'Underlag att ha till hands',
  underlagIngress: 'Listan gäller i första hand föreningen som söker. Markeringarna sparas inte – de försvinner när ni stänger sidan.',
  underlag: [
    'Föreningens stadgar, senaste verksamhetsberättelse, årsmötesprotokoll och uppgifter om styrelsen.',
    'En beskrivning av hur målgruppen har varit med och tagit fram idén.',
    'En plan för vad som ska leva vidare efter projektet, och vem som betalar.',
    'En budget i Arvsfondens budgetmall, med offerter och beräkningar.',
    'Ett samarbetsavtal med skolan eller kommunen som visar vem som gör vad.',
    'Personnummer och e-post till de firmatecknare som ska signera.'
  ],

  kallor: [
    {
      titel: 'Lag (2021:401) om Allmänna arvsfonden · Sveriges riksdag',
      url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-2021401-om-allmanna-arvsfonden_sfs-2021-401/',
      beskrivning: 'Källan för ändamål, vem som kan få stöd, demokrativillkor, redovisning och återbetalning. Paragrafhänvisningarna i guiden gäller den här lagen.'
    },
    {
      titel: 'Förordning (2021:403) om Allmänna arvsfonden · Sveriges riksdag',
      url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-2021403-om-allmanna-arvsfonden_sfs-2021-403/',
      beskrivning: 'Kompletterande regler, bland annat om vad en ansökan ska innehålla och Kammarkollegiets roll.'
    },
    {
      titel: 'Våra stödformer · Allmänna arvsfonden',
      url: 'https://www.arvsfonden.se/ansokan/vara-stodformer',
      beskrivning: 'Vilka som kan söka, målgrupper, de tre kriterierna, belopp och projekttid.'
    },
    {
      titel: 'Vanliga frågor om att ansöka · Allmänna arvsfonden',
      url: 'https://www.arvsfonden.se/ansokan/vanliga-fragor',
      beskrivning: 'Bland annat villkoren för offentlig huvudman, samarbete med kommunen, belopp, e-tjänsten och handläggningstid.'
    },
    {
      titel: 'Generella villkor · Allmänna arvsfonden',
      url: 'https://www.arvsfonden.se/ansokan/generella-villkor',
      beskrivning: 'Villkoren som följer med beslutet. Version 6.0 A gäller projektstöd som beviljats från 1 april 2023.'
    },
    {
      titel: 'Riktlinjer för budget vid ansökan om projektstöd · Allmänna arvsfonden',
      url: 'https://www.arvsfonden.se/ansokan/borja-ansoka/projektstod---forbered-ansokan/riktlinjer-for-budget-vid-ansokan-om-projektstod-eller-effektstod',
      beskrivning: 'Vad som godtas i budgeten: löner, lönebikostnader, externa tjänster, resor, utrustning och revisorns arvode.'
    },
    {
      titel: 'Tidslinje – från start till mål · Allmänna arvsfonden',
      url: 'https://www.arvsfonden.se/projekt/nar-ni-driver-projekt/tidslinje---fran-start-till-mal',
      beskrivning: 'Projektstart, rekvisition, årsrapporter och slutrapport för ett treårigt projekt.'
    }
  ],

  forbehall: 'Guiden sammanfattar lagen och Arvsfondens egna regler. Den säger inte om just ert projekt kan få stöd – det avgör Arvsfondsdelegationen i en samlad bedömning. Arvsfondens riktlinjer och villkor kan ändras. Använd Arvsfondens aktuella anvisningar och villkoren i ert beslut.'
};
