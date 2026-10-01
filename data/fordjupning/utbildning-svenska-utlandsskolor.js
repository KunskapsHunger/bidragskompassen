/* Fördjupning: Statsbidrag till utbildning vid svenska utlandsskolor – förordning (1994:519).
 * Innehållet är stämt mot förordningen (ändrad t.o.m. SFS 2019:1017), beloppsförordningarna SKOLFS 2025:456 (2026) och
 * SKOLFS 2024:667 (2025), Skolverkets föreskrifter SKOLFS 2008:9 (senaste ändring 2021:26), Skolverkets sidor för 2026
 * och 2027 (senast uppdaterade 5 och 11 juni 2026) och Riksrevisionens rapport RiR 2026:11. Schema: se FORDJUPNING.md.
 * Klartext, inte citat – paragrafhänvisningarna gäller förordningen (1994:519) om inget annat anges. */
window.SB_FORDJUPNING = window.SB_FORDJUPNING || {};
window.SB_FORDJUPNING['utbildning-svenska-utlandsskolor'] = {
  id: 'utbildning-svenska-utlandsskolor',
  rubrik: 'Svenska utlandsskolor',
  rubrikKursiv: 'bidraget för utbildningen.',
  ingress: 'Vilka skolor kan få bidraget, vilka elever räknas och hur bestäms beloppet? Här står reglerna på vanlig svenska, med 2026 års belopp per elev.',
  kontrollerad: '2026-10-01',
  forordning: {
    sfs: '1994:519',
    namn: 'Förordning (1994:519) om statsbidrag till utbildning av utlandssvenska barn och ungdomar',
    lydelse: 'ändrad t.o.m. SFS 2019:1017',
    url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-1994519-om-statsbidrag-till_sfs-1994-519/'
  },

  snabbfaktaRubrik: 'Tre saker att känna till först',
  snabbfakta: [
    { rubrik: 'Bara godkända utlandsskolor', text: 'I dag kan 14 skolor söka, i England, Frankrike, Kenya, Moçambique, Portugal, Spanien, Tyskland och Österrike. Vanliga fristående skolor i Sverige kan inte söka. Familjer kan inte heller söka själva.' },
    { rubrik: 'Inte alla elever räknas', text: 'Bidrag ges bara för elever vars vårdnadshavare är svensk medborgare och bor utomlands av ett godkänt skäl, till exempel arbete för ett svenskt företag. Antalet räknas som ett snitt av tre år.' },
    { rubrik: 'Ett allmänt stöd till skolan', text: 'Skolan bestämmer själv hur pengarna används. Det finns ingen redovisning av hur bidraget har använts, men skolan ska lämna uppgifter och årsredovisning till Skolverket.' }
  ],
  snabbfaktaNot: 'Riksrevisionen kritiserade systemet i juni 2026 och föreslog bland annat att bidragen ses över. Inga ändringar var beslutade när guiden kontrollerades.',

  begreppRubrik: 'Ord som återkommer',
  begrepp: [
    { term: 'Svensk utlandsskola', forklaring: 'En skola utomlands som Skolverket har godkänt för statsbidrag. Den undervisar enligt svensk läroplan och sätter svenska betyg.' },
    { term: 'Huvudman', forklaring: 'Den som driver skolan, oftast en förening, en stiftelse eller ett aktiebolag.' },
    { term: 'Utlandssvensk elev', forklaring: 'I guiden: en elev som uppfyller villkoren i 3 § och därför räknas när bidraget bestäms. Andra elever får gå på skolan men ger inget bidrag.' },
    { term: '15 oktober', forklaring: 'Räknedagen. Eleverna räknas den 15 oktober varje år, och bidraget bygger på ett snitt av de tre senaste åren.' },
    { term: 'ECA-index', forklaring: 'Ett index (Employment Conditions Abroad) som visar hur levnadskostnaderna utvecklas i olika länder. Det används för att justera tre fjärdedelar av bidraget.' }
  ],

  sektioner: {
    regler: {
      rubrik: 'Från paragraf', rubrikKursiv: 'till praktik.',
      ingress: 'Rubrikerna följer förordningen. Öppna det avsnitt ni behöver, eller sök på till exempel ”intyg”, ”avgift” eller ”index”. Varje avsnitt visar vilken paragraf det gäller.'
    },
    praktik: {
      rubrik: 'Så används', rubrikKursiv: 'reglerna.',
      ingress: 'Skolan söker en gång om året för nästa kalenderår. Sedan betalar Skolverket ut bidraget fyra gånger under året, utan att skolan behöver begära det.'
    }
  },

  paragrafer: [
    {
      ref: '1–2 §§', rubrik: 'Vad förordningen gäller',
      text: [
        'Förordningen gäller statsbidrag för att utlandssvenska barn och unga ska få en utbildning som motsvarar förskoleklassen, grundskolan och, så långt det går, gymnasieskolan. Den gäller också undervisning i svenska och om Sverige för elever som går i en utländsk skola.',
        'Bidrag kan ges till huvudmannen för en svensk utlandsskola, för distansundervisning, för kompletterande svensk undervisning och för en utländsk (internationell) skola. Den här guiden handlar om bidraget till utbildningen vid utlandsskolorna.',
        'Skolor i Sverige som tar emot utlandssvenska elever söker inte det här bidraget. För dem finns ett annat statsbidrag med egna regler.'
      ],
      nyckelord: ['syfte', 'utlandsskola', 'förskoleklass', 'grundskola', 'gymnasieskola', 'fristående skola', 'skola i Sverige']
    },
    {
      ref: '3 §', rubrik: 'Vilka elever som räknas',
      text: [
        'Bidraget räknas på de elever som har minst en vårdnadshavare som är svensk medborgare och minst en vårdnadshavare som bor utomlands av något av de här skälen:'
      ],
      lista: [
        'Arbete för en svensk myndighet eller organisation.',
        'Arbete för en internationell organisation.',
        'Arbete för ett företag som är en svensk juridisk person, eller för ett utländskt företag som ett svenskt företag har bestämmande inflytande över.',
        'Tillfälligt arbete utomlands för ett utländskt företag som har verksamhet i Sverige, eller ett arbete för ett utländskt företag som är tidsbegränsat från början.',
        'Studier eller forskning med studiemedel, stipendium eller lön.',
        'Kulturarbete som är vårdnadshavarens huvudsakliga försörjning.',
        'Annan verksamhet utomlands som bedöms vara väsentlig för det svenska samhället.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Skolverket får också räkna med andra elever om det finns synnerliga – mycket starka – sociala skäl. Vilket intyg som behövs beror på skälet: intyg om tjänstgöring (finns på engelska) eller blankett för studier och forskning, kulturarbete, väsentlig verksamhet eller synnerliga skäl. En enskild firma är inte en egen juridisk person och räknas därför inte som ett svenskt företag. Familjen får besked först när Skolverket har beslutat, i februari eller mars.'
      },
      nyckelord: ['vårdnadshavare', 'svensk medborgare', 'tjänstgöring', 'intyg', 'arbetsgivarintyg', 'employer certificate', 'svenskt företag', 'enskild firma', 'studier', 'forskning', 'kulturarbete', 'synnerliga skäl']
    },
    {
      ref: '4–8 §§', rubrik: 'Bidragsår, tillsyn och föreskrifter',
      text: [
        'Bidraget ges för ett kalenderår, som kallas bidragsår.',
        'Skolinspektionen har tillsyn över verksamheten. Skolverket följer upp och utvärderar den, och ska ge råd om utbildning för utlandssvenska barn både utomlands och i Sverige.',
        'Skolverket får skriva mer detaljerade regler, så kallade föreskrifter. De finns i SKOLFS 2008:9. Skolverket ska också skriva de regler som behövs för Sveriges avtal med andra länder om undervisning utomlands.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Sverige har avtal med Finland och Norge. De gör att bidrag kan ges för en svensk elev i årskurs 1–9 vid en godkänd finländsk eller norsk utlandsskola.'
      },
      nyckelord: ['kalenderår', 'bidragsår', 'Skolinspektionen', 'tillsyn', 'föreskrifter', 'SKOLFS 2008:9', 'Finland', 'Norge']
    },
    {
      ref: '9–12 §§', rubrik: 'Att bli godkänd som utlandsskola',
      text: [
        'Skolverket kan efter ansökan förklara att en huvudman har rätt till bidrag för förskoleklass och årskurs 1–6. Huvudmannen ska ha förutsättningar att driva skolan, det ska finnas ett behov och elevantalet ska vara tillräckligt stort och någorlunda stabilt.',
        'Minskar elevantalet kraftigt och inte bara tillfälligt ska Skolverket pröva om skolan fortfarande ska ha rätt till bidrag.',
        'För årskurs 7–9 och gymnasieskolan är det regeringen som beslutar, efter ansökan från en skola som redan är godkänd. Byter skolan huvudman ska det anmälas till Skolverket eller regeringen.'
      ],
      praktik: {
        rubrik: 'Skolverkets föreskrifter',
        text: 'Ansökan ska beskriva huvudmannens planering, förutsättningarna på orten och det allmänna svenska intresset av skolan. Den ska ha med handlingar som visar att huvudmannen är en juridisk person och är registrerad i värdlandet, och stadgar. Kontakta Skolverket på info.svenskutlandsundervisning@skolverket.se.'
      },
      nyckelord: ['godkännande', 'ny skola', 'behörighet', 'regeringen', 'högstadiet', 'gymnasiet', 'elevantal', 'byte av huvudman', 'stadgar']
    },
    {
      ref: '13–22 §§', rubrik: 'Styrelse, undervisning, avgifter och lärare',
      text: [
        'Skolan leds av en styrelse med säte i landet där skolan finns. Skolverket utser en av ledamöterna. Det ska finnas en rektor med pedagogisk insikt.',
        'Undervisningen ska följa svensk läroplan, kursplaner och timplan för förskoleklass och grundskola, och ämnesplaner för gymnasieskolan. Delar av skollagen och skolförordningarna gäller så långt det är möjligt. Timplanen får jämkas något för en mer internationell inriktning, värdlandets språk och kultur eller nordiskt samarbete.',
        'Elevavgifterna ska vara skäliga med hänsyn till skolans kostnader och statsbidraget. Eleverna ska i rimlig omfattning erbjudas elevhälsans medicinska insatser.',
        'Lärarna anställs av styrelsen och ska ha utbildning för den undervisning de ger, om inte sådana lärare saknas eller det finns särskilda skäl. Lärarna kan också behöva ge kompletterande svenska och handleda elever som läser på distans.'
      ],
      praktik: {
        rubrik: 'Skolverkets föreskrifter',
        text: 'Ledamoten som Skolverket utser ska bevaka att svenska skolförfattningar följs och säga till Skolverket om det finns problem som kan påverka statsbidraget.'
      },
      nyckelord: ['styrelse', 'rektor', 'läroplan', 'timplan', 'skollagen', 'så långt det är möjligt', 'elevavgift', 'skolavgift', 'elevhälsa', 'lärare', 'behörighet']
    },
    {
      ref: '23 §', rubrik: 'Vad pengarna får användas till',
      text: [
        'Statsbidraget är ett allmänt stöd till skolans verksamhet. Huvudmannen bestämmer själv hur det används för att täcka verksamhetens kostnader.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Bidraget går till skolan, inte till familjen. Vissa skolor sänker avgiften för elever som ger bidrag, men det bestämmer skolan själv.'
      },
      nyckelord: ['allmänt stöd', 'användning', 'avgift', 'familj', 'sänkt avgift']
    },
    {
      ref: '24–25 §§', rubrik: 'Hur bidraget räknas ut',
      text: [
        'Bidraget räknas ut efter hur många elever som uppfyller villkoren i 3 §. Skolverket räknar eleverna den 15 oktober och tar ett medelvärde av de tre senaste bidragsåren. Avviker medelvärdet kraftigt från det faktiska elevantalet får Skolverket bestämma ett annat underlag.',
        'För förskoleklass och grundskola ges ett belopp per elev. Regeringen bestämmer beloppen varje år, och beloppet per elev blir lägre ju fler elever skolan har. För 2026 gäller:'
      ],
      lista: [
        'Skolor med högst 10 elever: 112 800 kr per elev.',
        'Skolor med 11–53 elever: 111 640 kr per elev för en skola med 11 elever. För varje elev därutöver blir beloppet 1 210 kr lägre.',
        'Skolor med minst 54 elever: 57 830 kr per elev.',
        'Därefter justeras 75 procent av bidraget efter levnadskostnaderna i landet där skolan ligger, med ECA-index.'
      ],
      praktik: {
        rubrik: 'Hur beloppen ska läsas',
        text: 'Beloppen står i regeringens förordning SKOLFS 2025:456. För 2025 var de 107 270 kr, 106 170 kr (minus 1 150 kr per elev) och 55 000 kr. Källorna förklarar inte steg för steg hur Skolverket räknar när medelvärdet inte är ett heltal, och indexet varierar mellan länderna. Därför har guiden ingen räknare för det här bidraget. Det exakta beloppet står i ert beslut. För 2026 beviljades mellan cirka 1,1 och 5,8 miljoner kr per skola för förskoleklass och grundskola.'
      },
      nyckelord: ['belopp', 'per elev', 'medelvärde', 'tre år', '15 oktober', 'intervall', '112800', '57830', 'index', 'ECA', 'levnadskostnader', 'SKOLFS 2025:456']
    },
    {
      ref: '26–27 §§', rubrik: 'Gymnasieskolan och nya skolor',
      text: [
        'För gymnasieskolan bestämmer regeringen ett belopp per elev, oberoende av hur stor skolan är. För 2026 är det 59 380 kr per elev (56 470 kr för 2025).',
        'När en skola godkänns för första gången räknas bidraget på färre år de första tre åren: år 1 på antalet elever den 15 oktober året före, år 2 på ett medelvärde av två år och år 3 på ett medelvärde av tre år.'
      ],
      nyckelord: ['gymnasieskola', 'gymnasiet', '59380', 'ny skola', 'första året', 'medelvärde']
    },
    {
      ref: '37–40 §§', rubrik: 'Beslut och utbetalning',
      text: [
        'Skolverket beslutar om bidraget och betalar ut det utan att huvudmannen behöver begära det.',
        'Bidraget för förskoleklass, grundskola och gymnasieskola betalas ut med en fjärdedel i mars, juni, september och december under bidragsåret.'
      ],
      praktik: 'För 2026 fattade Skolverket beslut den 20 februari 2026. Inför 2027 planerar Skolverket beslut under första kvartalet 2027.',
      nyckelord: ['beslut', 'utbetalning', 'mars', 'juni', 'september', 'december', 'kvartal']
    },
    {
      ref: '41–43 §§', rubrik: 'Avdrag, innehållna pengar och uppgifter',
      text: [
        'Har för mycket betalats ut ett tidigare år får Skolverket minska nästa års bidrag med det beloppet.',
        'Om huvudmannen inte följer de regler som gäller för skolan får Skolverket hålla inne högst tio procent av bidraget tills felet är rättat, och mer om det finns särskilda skäl. Rättas felet inte får beloppet dras av.',
        'Huvudmannen ska lämna de uppgifter som Skolverket behöver för uppföljning och utvärdering. Skolverket och Riksrevisionen kan också begära uppgifter och verifikationer för granskning.'
      ],
      praktik: {
        rubrik: 'Skolverkets föreskrifter',
        text: 'Huvudmannen ska varje år lämna en årsredovisning till Skolverket, med protokoll från årsmötet, resultaträkning, balansräkning och förvaltningsberättelse. Förordningen har ingen egen paragraf om återkrav, som många nyare bidragsförordningar har. Skolverket kan ändå kontrollera alla huvudmän som får bidrag.'
      },
      nyckelord: ['avdrag', 'innehålla', 'tio procent', 'rättelse', 'uppgifter', 'årsredovisning', 'Riksrevisionen', 'kontroll', 'återkrav']
    },
    {
      ref: '44 §', rubrik: 'Överklagande',
      text: [
        'Skolverkets beslut om att godkänna en skola (9 §) och om att hålla inne bidrag (42 §) kan överklagas till regeringen. Andra beslut enligt förordningen, till exempel om bidragets storlek, går inte att överklaga.'
      ],
      nyckelord: ['överklaga', 'regeringen', 'godkännande', 'innehållande']
    },
    {
      ref: 'RiR 2026:11', rubrik: 'Riksrevisionens granskning 2026',
      text: [
        'I juni 2026 granskade Riksrevisionen bidragen till svenska utlandsskolor i rapporten ”Statsbidrag till svenska utlandsskolor – ett föråldrat och ineffektivt system”. Riksrevisionen anser att reglerna är gamla och lämnar stort utrymme för tolkning.',
        'Riksrevisionen föreslår att regeringen tar ställning till om systemet behövs. Ett alternativ är att ta bort bidragen till den ordinarie undervisningen. Behålls systemet föreslås bland annat skarpare krav på att följa skollagen, en tidsgräns för hur länge en elev kan ge bidrag och att ECA-indexet slutar användas.'
      ],
      praktik: 'Rapporten är ett förslag, inte nya regler. När guiden kontrollerades gällde förordningen som tidigare. Håll koll på Skolverkets sida inför varje ansökan.',
      nyckelord: ['Riksrevisionen', 'granskning', 'kritik', 'förändring', 'framtid', 'avskaffa', 'tidsgräns']
    }
  ],

  process: [
    { rubrik: 'Samla elevunderlag och intyg', text: 'Ta reda på vilka elever som uppfyller villkoren och samla rätt intyg eller blankett från deras vårdnadshavare. Se till att ni har behörighet i Skolverkets e-tjänst.', ref: '3 §' },
    { rubrik: 'Ansök 15 oktober–16 november 2026', text: 'Ansökan för 2027 görs i e-tjänsten för statsbidrag, separat för förskoleklass och grundskola och för gymnasieskolan. Blanketten publiceras på Skolverkets sida den 15 oktober. Går det inte i e-tjänsten kan ni få en länk till Sefos (säker filöverföring).', ref: '24 §' },
    { rubrik: 'Beslut', text: 'Skolverket planerar beslut under första kvartalet 2027. Beslutet visar hur mycket skolan får för året. För 2026 kom beslutet den 20 februari.', ref: '24–25 och 37 §§' },
    { rubrik: 'Utbetalning', text: 'Bidraget betalas ut med en fjärdedel i mars, juni, september och december. Ni behöver inte begära det.', ref: '38–39 §§' },
    { rubrik: 'Uppföljning', text: 'Lämna årsredovisning och de uppgifter Skolverket begär. Anmäl byte av huvudman. Spara intygen om Skolverket vill kontrollera.', ref: '12 och 43 §§' }
  ],

  underlagRubrik: 'Underlag att ha till hands',
  underlagIngress: 'Använd listan när ni förbereder ansökan. Markeringarna sparas inte – de försvinner när ni stänger sidan.',
  underlag: [
    'Lista över elever per skolform som ni söker bidrag för, med antal den 15 oktober.',
    'Intyg om tjänstgöring eller rätt blankett för varje elev, beroende på varför vårdnadshavaren bor utomlands.',
    'Uppgift om att minst en vårdnadshavare är svensk medborgare.',
    'Den ifyllda ansökningsblanketten från Skolverkets sida.',
    'Behörighet i Skolverkets e-tjänst för den som ska skicka in ansökan.',
    'Statistikuppgifter som efterfrågas i ansökan.',
    'Årsredovisning med årsmötesprotokoll, resultaträkning, balansräkning och förvaltningsberättelse.'
  ],

  kallor: [
    {
      titel: 'Förordning (1994:519) · Sveriges riksdag',
      url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-1994519-om-statsbidrag-till_sfs-1994-519/',
      beskrivning: 'Källan för villkor, beräkning, utbetalning och överklagande. Paragrafhänvisningarna i guiden gäller den här förordningen.'
    },
    {
      titel: 'Belopp för bidragsåret 2026 (SKOLFS 2025:456) · Skolverket',
      url: 'https://skolfs.skolverket.se/api/document/GRUNDFORFATTNING/2025:456/pdf',
      beskrivning: 'Regeringens förordning med beloppen per elev för 2026.'
    },
    {
      titel: 'Skolverkets föreskrifter (SKOLFS 2008:9) · Skolverket',
      url: 'https://skolfs.skolverket.se/api/document/SENASTE_LYDELSE/2008:9/pdf',
      beskrivning: 'Krav på ansökan om godkännande, styrelseledamoten och årsredovisningen.'
    },
    {
      titel: 'Statsbidrag till utbildning vid svenska utlandsskolor 2027 · Skolverket',
      url: 'https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-till-utbildning-vid-svenska-utlandsskolor-2027',
      beskrivning: 'Ansökan för 2027, intyg och blanketter, e-tjänsten och vanliga frågor.'
    },
    {
      titel: 'Statsbidrag till utbildning vid svenska utlandsskolor 2026 · Skolverket',
      url: 'https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-till-utbildning-vid-svenska-utlandsskolor-2026',
      beskrivning: 'Förra omgången med beslut per skola och hur beloppet räknas.'
    },
    {
      titel: 'Statsbidrag till svenska utlandsskolor – ett föråldrat och ineffektivt system (RiR 2026:11) · Riksrevisionen',
      url: 'https://www.riksrevisionen.se/granskningar/granskningsrapporter/2026/statsbidrag-till-svenska-utlandsskolor---ett-foraldrat-och-ineffektivt-system.html',
      beskrivning: 'Granskningen från juni 2026 med förslag till regeringen.'
    }
  ],

  forbehall: 'Guiden sammanfattar reglerna. Den räknar inte ut bidraget, eftersom indexet och avrundningen inte går att återskapa från källorna. Beloppen gäller 2026 och kan ändras för 2027. Riksrevisionen har föreslagit förändringar, så kontrollera Skolverkets aktuella sida och ert beslut inför varje ansökan.'
};
