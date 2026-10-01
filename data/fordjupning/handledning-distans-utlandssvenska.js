/* Fördjupning: Statsbidrag till handledning åt utlandssvenska elever vid distansundervisning – 29–30, 32 och 40 §§
 * förordning (1994:519). Innehållet är stämt mot förordningen (ändrad t.o.m. SFS 2019:1017), beloppsförordningarna
 * SKOLFS 2025:456 (2026) och SKOLFS 2024:667 (2025), Skolverkets sidor för 2026 och 2027 (senast uppdaterade 5 och
 * 11 juni 2026), Skolverkets beslutsbilaga 2026-01-23 och Riksrevisionens rapport RiR 2026:11. Schema: se FORDJUPNING.md.
 * Klartext, inte citat – paragrafhänvisningarna gäller förordningen (1994:519). */
window.SB_FORDJUPNING = window.SB_FORDJUPNING || {};
window.SB_FORDJUPNING['handledning-distans-utlandssvenska'] = {
  id: 'handledning-distans-utlandssvenska',
  rubrik: 'Handledning vid distansstudier',
  rubrikKursiv: 'för elever utomlands.',
  ingress: 'Utlandssvenska elever som läser svensk skola på distans kan få stöd av en handledare på plats. Här står vem som kan få bidraget för handledningen, vilka elever som räknas och hur beloppet bestäms.',
  kontrollerad: '2026-10-01',
  forordning: {
    sfs: '1994:519',
    namn: 'Förordning (1994:519) om statsbidrag till utbildning av utlandssvenska barn och ungdomar',
    lydelse: 'ändrad t.o.m. SFS 2019:1017',
    url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-1994519-om-statsbidrag-till_sfs-1994-519/'
  },

  snabbfaktaRubrik: 'Tre saker att känna till först',
  snabbfakta: [
    { rubrik: 'För handledning utomlands', text: 'Bidraget går till den huvudman som handleder eleverna på plats. I praktiken är det svenska utlandsskolor. Skolor i Sverige, också vanliga fristående skolor, kan inte söka. Familjer kan inte heller söka.' },
    { rubrik: 'Belopp per elev', text: 'Regeringen bestämmer ett belopp per elev varje år. Ju fler elever, desto lägre belopp per elev. Hela bidraget justeras efter levnadskostnaderna i landet.' },
    { rubrik: 'Ett allmänt stöd', text: 'Huvudmannen bestämmer själv hur pengarna används. Elevunderlag behöver inte skickas med ansökan, men Skolverket kan begära det.' }
  ],
  snabbfaktaNot: 'Själva distansundervisningen ges av Sofia distans (årskurs 6–9) och Hermods (gymnasiet). De får ett eget statsbidrag.',

  begreppRubrik: 'Ord som återkommer',
  begrepp: [
    { term: 'Distansundervisning', forklaring: 'Svensk skola som eleven läser på distans, i dag genom Sofia distans eller Hermods, som har avtal med Skolverket.' },
    { term: 'Handledning', forklaring: 'Stöd på plats till en elev som läser på distans. Förordningen beskriver inte närmare vad handledningen ska innehålla.' },
    { term: 'Huvudman', forklaring: 'Den som driver verksamheten och söker bidraget, oftast en förening eller stiftelse som driver en svensk utlandsskola.' },
    { term: 'Utlandssvensk elev', forklaring: 'En elev som har minst en vårdnadshavare som är svensk medborgare och minst en vårdnadshavare som bor utomlands av ett godkänt skäl.' },
    { term: 'ECA-index', forklaring: 'Ett index (Employment Conditions Abroad) för levnadskostnader i olika länder. Det används för att justera bidraget.' }
  ],

  sektioner: {
    regler: {
      rubrik: 'Från paragraf', rubrikKursiv: 'till praktik.',
      ingress: 'Rubrikerna följer förordningen. Sök på till exempel ”årskurs 6”, ”belopp” eller ”utbetalning”. Varje avsnitt visar vilken paragraf det gäller.'
    },
    praktik: {
      rubrik: 'Så används', rubrikKursiv: 'reglerna.',
      ingress: 'Huvudmannen söker en gång om året, hösten före bidragsåret. Bidraget betalas sedan ut i två delar.'
    }
  },

  paragrafer: [
    {
      ref: '1–2 §§', rubrik: 'Vad förordningen gäller',
      text: [
        'Förordningen gäller statsbidrag för att utlandssvenska barn och unga ska få en utbildning som motsvarar den svenska skolan, eller undervisning i svenska och om Sverige.',
        'Bidrag kan ges till huvudmannen för en svensk utlandsskola, för distansundervisning, för kompletterande svensk undervisning och för en internationell skola. Handledningsbidraget hör till distansundervisningen.'
      ],
      nyckelord: ['syfte', 'distansundervisning', 'utlandsskola', 'skola i Sverige']
    },
    {
      ref: '3 §', rubrik: 'Vilka elever som räknas',
      text: ['Eleven ska ha minst en vårdnadshavare som är svensk medborgare. Minst en vårdnadshavare ska bo utomlands av något av de här skälen:'],
      lista: [
        'Arbete för en svensk myndighet eller organisation, eller för en internationell organisation.',
        'Arbete för ett svenskt företag, för ett utländskt företag som ett svenskt företag bestämmer över, tillfälligt för ett utländskt företag med verksamhet i Sverige, eller ett tidsbegränsat arbete för ett utländskt företag.',
        'Studier eller forskning med studiemedel, stipendium eller lön.',
        'Kulturarbete som är den huvudsakliga försörjningen.',
        'Annan verksamhet som bedöms vara väsentlig för det svenska samhället.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Skolverket kan också godta andra elever om det finns synnerliga – mycket starka – sociala skäl. En enskild firma är inte en egen juridisk person och räknas därför inte som ett svenskt företag.'
      },
      nyckelord: ['vårdnadshavare', 'svensk medborgare', 'tjänstgöring', 'intyg', 'svenskt företag', 'enskild firma', 'synnerliga skäl']
    },
    {
      ref: '29–30 §§', rubrik: 'Vad bidraget gäller och för vilka elever',
      text: [
        'Till stöd för distansundervisning kan Skolverket besluta om tre slags bidrag: för studiematerial, för andra kostnader för undervisningen och till den huvudman som ordnar handledning åt eleverna. Den här guiden gäller det sista.',
        'Eleven ska uppfylla villkoren i 3 §, ha en ålder som motsvarar årskurs 6–9 i grundskolan eller gymnasieskolan, och inte vara elev vid en svensk utlandsskola. Bidraget gäller bara ämnen som finns i den svenska grundskolan eller gymnasieskolan.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Det avgörande är om eleven med hänsyn till sin ålder skulle ha gått i årskurs 6–9 eller i gymnasieskolan. Ett barn kan räknas från årskurs 6 om det har klarat de tidigare årskurserna, och kan då vara 11 år. Enligt Riksrevisionen ges handledningsbidrag för elever som läser på distans på heltid.'
      },
      nyckelord: ['årskurs 6-9', 'gymnasiet', 'ålder', '11 år', 'heltid', 'ämnen', 'inte elev vid utlandsskola', 'studiematerial']
    },
    {
      ref: '16 och 22 §§', rubrik: 'Handledning vid utlandsskolorna',
      text: [
        'En svensk utlandsskola får, utöver den vanliga utbildningen, ordna handledning för elever som läser på distans och kompletterande svensk undervisning.',
        'Lärarna vid en utlandsskola är skyldiga att handleda vid distansundervisning när det behövs.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Förordningen talar om ”den huvudman som anordnar handledning”. Skolverket beskriver att en skola måste vara godkänd som svensk utlandsskola för att få statsbidrag. Är ni en annan sorts huvudman: kontakta Skolverket på info.svenskutlandsundervisning@skolverket.se innan ni söker.'
      },
      nyckelord: ['utlandsskola', 'lärare', 'handledare', 'godkänd', 'vem kan söka']
    },
    {
      ref: '23 §', rubrik: 'Vad pengarna får användas till',
      text: [
        'Förordningen säger att statsbidraget till en utlandsskola är ett allmänt stöd till verksamheten. Huvudmannen bestämmer själv hur det används.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Skolverket hänvisar till 23 § också för handledningsbidraget. Vissa skolor sänker avgiften för elever som ger bidrag, men det bestämmer skolan själv.'
      },
      nyckelord: ['allmänt stöd', 'användning', 'avgift']
    },
    {
      ref: '32 §', rubrik: 'Hur beloppet räknas',
      text: [
        'Bidraget ges med ett belopp per elev. Det räknas på antalet elever den 15 oktober året före bidragsåret. För 2027 är det alltså eleverna den 15 oktober 2026.',
        'Regeringen bestämmer beloppen varje år, och beloppet per elev blir lägre ju fler elever huvudmannen har. För 2026 gäller:'
      ],
      lista: [
        'Högst 5 elever: 20 920 kr per elev.',
        '6–19 elever: 20 110 kr per elev för 6 elever. För varje elev därutöver blir beloppet 850 kr lägre.',
        'Minst 20 elever: 8 130 kr per elev.',
        'Därefter justeras hela bidraget efter levnadskostnaderna i landet där handledningen ges, med ECA-index.'
      ],
      praktik: {
        rubrik: 'Hur beloppen ska läsas',
        text: 'Beloppen står i regeringens förordning SKOLFS 2025:456. För 2025 var de 19 890 kr, 19 130 kr (minus 810 kr per elev) och 7 730 kr. Indexet och Skolverkets avrundning går inte att återskapa från källorna, så guiden har ingen räknare. För 2026 fick fem utlandsskolor i Spanien mellan cirka 25 000 och 405 000 kr, sammanlagt 1 231 282 kr.'
      },
      nyckelord: ['belopp', 'per elev', '15 oktober', 'intervall', '20920', '8130', 'index', 'ECA', 'levnadskostnader', 'SKOLFS 2025:456']
    },
    {
      ref: '37–40 §§', rubrik: 'Beslut och utbetalning',
      text: [
        'Skolverket beslutar om bidraget och betalar ut det utan att huvudmannen behöver begära det.',
        'Bidraget betalas ut med hälften i juni och hälften i december under bidragsåret.'
      ],
      praktik: 'För 2026 fattade Skolverket beslut den 23 januari 2026. Inför 2027 planerar Skolverket beslut i början av 2027.',
      nyckelord: ['beslut', 'utbetalning', 'juni', 'december']
    },
    {
      ref: '41–44 §§', rubrik: 'Avdrag, uppgifter och överklagande',
      text: [
        'Har för mycket betalats ut ett tidigare år får Skolverket minska nästa års bidrag med det beloppet. Följer huvudmannen inte reglerna för verksamheten får Skolverket hålla inne högst tio procent av bidraget tills felet är rättat, eller mer vid särskilda skäl.',
        'Huvudmannen ska lämna de uppgifter som Skolverket begär för uppföljning. Skolverket och Riksrevisionen kan också begära verifikationer för granskning.',
        'Beslut om att hålla inne bidrag kan överklagas till regeringen. Andra beslut om bidraget går inte att överklaga.'
      ],
      nyckelord: ['avdrag', 'innehålla', 'uppgifter', 'kontroll', 'överklaga']
    },
    {
      ref: 'RiR 2026:11', rubrik: 'Riksrevisionens granskning 2026',
      text: [
        'Riksrevisionen granskade i juni 2026 statsbidragen till svensk utbildning utomlands. Där beskrivs handledningsbidraget som knappt 20 000 kr per elev och läsår, och att fem svenska utlandsskolor ger handledning vid distansstudier.',
        'Riksrevisionen föreslår att regeringen tar ställning till om systemet med utlandsskolor behövs. Förslagen gäller främst bidragen till utlandsskolornas vanliga undervisning och lokaler.'
      ],
      praktik: 'Det är förslag, inte nya regler. När guiden kontrollerades gällde förordningen som tidigare.',
      nyckelord: ['Riksrevisionen', 'granskning', 'förändring']
    }
  ],

  process: [
    { rubrik: 'Kontrollera eleverna', text: 'Ta reda på vilka elever som läser på distans, uppfyller villkoren och inte går i utlandsskolans vanliga undervisning. Räkna dem den 15 oktober. Se till att det finns intyg om varför vårdnadshavaren bor utomlands.', ref: '3 och 30 §§' },
    { rubrik: 'Ansök 15 oktober–16 november 2026', text: 'Ansökan för 2027 görs i Skolverkets e-tjänst för statsbidrag. Elevunderlag behöver inte skickas med – Skolverket begär komplettering vid behov. Går det inte i e-tjänsten kan ni få en länk till Sefos (säker filöverföring).', ref: '32 §' },
    { rubrik: 'Beslut', text: 'Skolverket planerar beslut i början av 2027.', ref: '37 §' },
    { rubrik: 'Utbetalning', text: 'Hälften betalas ut i juni och hälften i december.', ref: '40 §' },
    { rubrik: 'Uppföljning', text: 'Lämna de uppgifter Skolverket begär och spara elevunderlaget om Skolverket vill kontrollera.', ref: '43 §' }
  ],

  underlagRubrik: 'Underlag att ha till hands',
  underlagIngress: 'Använd listan när ni förbereder ansökan. Markeringarna sparas inte – de försvinner när ni stänger sidan.',
  underlag: [
    'Lista över elever som läser på distans och får handledning, med antal den 15 oktober.',
    'Uppgift om vilken anordnare eleven läser hos (Sofia distans eller Hermods) och om eleven läser på heltid.',
    'Intyg om tjänstgöring eller rätt blankett för varje elev, beroende på varför vårdnadshavaren bor utomlands.',
    'Den ifyllda ansökningsblanketten.',
    'Behörighet i Skolverkets e-tjänst för den som ska skicka in ansökan.'
  ],

  kallor: [
    {
      titel: 'Förordning (1994:519) · Sveriges riksdag',
      url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-1994519-om-statsbidrag-till_sfs-1994-519/',
      beskrivning: 'Källan för villkor, beräkning och utbetalning. Paragrafhänvisningarna i guiden gäller den här förordningen.'
    },
    {
      titel: 'Belopp för bidragsåret 2026 (SKOLFS 2025:456) · Skolverket',
      url: 'https://skolfs.skolverket.se/api/document/GRUNDFORFATTNING/2025:456/pdf',
      beskrivning: 'Regeringens förordning med beloppen per elev för handledning (bidrag enligt 32 §).'
    },
    {
      titel: 'Statsbidrag till handledning åt utlandssvenska elever vid distansundervisning 2027 · Skolverket',
      url: 'https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-till-handledning-at-utlandssvenska-elever-vid-distansundervisning-2027',
      beskrivning: 'Ansökan för 2027, e-tjänsten och vanliga frågor.'
    },
    {
      titel: 'Statsbidrag till handledning åt utlandssvenska elever vid distansundervisning 2026 · Skolverket',
      url: 'https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-till-handledning-at-utlandssvenska-elever-vid-distansundervisning-2026',
      beskrivning: 'Förra omgången med beslutsbilaga per huvudman.'
    },
    {
      titel: 'Statsbidrag för distansundervisning 2027 · Skolverket',
      url: 'https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-distansundervisning-2027',
      beskrivning: 'Om Sofia distans och Hermods, intyg och vanliga frågor om vilka elever som räknas.'
    },
    {
      titel: 'Statsbidrag till svenska utlandsskolor – ett föråldrat och ineffektivt system (RiR 2026:11) · Riksrevisionen',
      url: 'https://www.riksrevisionen.se/granskningar/granskningsrapporter/2026/statsbidrag-till-svenska-utlandsskolor---ett-foraldrat-och-ineffektivt-system.html',
      beskrivning: 'Granskningen från juni 2026 med en beskrivning av handledningsbidraget.'
    }
  ],

  forbehall: 'Guiden sammanfattar reglerna. Den räknar inte ut bidraget, eftersom indexet och avrundningen inte går att återskapa från källorna. Beloppen gäller 2026 och kan ändras för 2027. Kontrollera Skolverkets aktuella sida och ert beslut inför varje ansökan.'
};
