/* Fördjupning: Statsbidrag för papperslösa barn – förordning (2013:361).
 * Innehållet är stämt mot förordningen (ändrad t.o.m. SFS 2022:1627), skollagen 29 kap. 2–3 §§,
 * Skolverkets sida för 2026 (senast uppdaterad 23 juli 2026) och regleringsbrevet för Statens skolverk 2026.
 * Ingen räknare: beloppet beror på alla sökande kommuners fördelningstal, som inte är offentliga i förväg.
 * Schema: se FORDJUPNING.md. Klartext, inte citat – paragrafhänvisningarna gäller förordningen. */
window.SB_FORDJUPNING = window.SB_FORDJUPNING || {};
window.SB_FORDJUPNING['papperslosa-barn'] = {
  id: 'papperslosa-barn',
  rubrik: 'Papperslösa barn',
  rubrikKursiv: 'i klartext.',
  ingress: 'Barn som vistas i Sverige utan tillstånd har i stort sett samma rätt till skola som andra barn. Kommunen kan få statsbidrag för kostnaderna. Här står reglerna på vanlig svenska: vem som räknas, hur pengarna fördelas och hur barnens identitet skyddas.',
  kontrollerad: '2026-10-01',
  forordning: {
    sfs: '2013:361',
    namn: 'Förordning (2013:361) om statsbidrag för utbildning för barn som vistas i landet utan tillstånd',
    lydelse: 'ändrad t.o.m. SFS 2022:1627',
    url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-2013361-om-statsbidrag-for-utbildning_sfs-2013-361/'
  },

  snabbfaktaRubrik: 'Tre saker att känna till först',
  snabbfakta: [
    { rubrik: 'Bara kommuner kan söka', text: 'Kommunen söker för sina kostnader för barnens utbildning. Fristående skolor och andra huvudmän kan inte söka.' },
    { rubrik: 'Pengarna fördelas efter asylstatistik', text: '50 miljoner kr om året delas mellan de kommuner som söker. Andelen beror på hur många asylsökande barn kommunen haft, inte på hur många papperslösa barn som går i skolan.' },
    { rubrik: 'Inga barn ska kunna identifieras', text: 'Skolverket får inte kräva uppgifter som gör det möjligt att identifiera enskilda papperslösa barn, varken i ansökan eller i redovisningen.' }
  ],
  snabbfaktaNot: 'Asylsökande som väntar på beslut räknas inte som papperslösa. Barn som är här enligt EU:s massflyktsdirektiv omfattas inte heller.',

  begreppRubrik: 'Ord som återkommer',
  begrepp: [
    { term: 'Papperslöst barn', forklaring: 'Ett barn som vistas i Sverige utan tillstånd, till exempel efter avslag på en asylansökan eller efter att ett visum har gått ut.' },
    { term: 'Asylsökande', forklaring: 'Den som har sökt skydd i Sverige och väntar på beslut, eller på ett överklagande. Asylsökande barn har rätt till skola på annan grund och ingår inte i bidraget.' },
    { term: 'Massflyktsdirektivet', forklaring: 'EU-regler om tillfälligt skydd, till exempel för människor från Ukraina. De som omfattas har lagligt stöd för att vara här och är inte papperslösa.' },
    { term: 'Fördelningstal', forklaring: 'Ett tal per kommun som Skolverket räknar fram. Det styr hur stor del av pengarna kommunen får.' },
    { term: 'Skolplikt', forklaring: 'Skyldigheten att gå i skolan. Papperslösa barn har rätt till utbildning men ingen skolplikt.' }
  ],

  sektioner: {
    regler: {
      rubrik: 'Från paragraf', rubrikKursiv: 'till praktik.',
      ingress: 'Rubrikerna följer förordningen. Öppna det avsnitt ni behöver, eller sök på till exempel ”asyl”, ”fördelningstal” eller ”redovisning”. Varje avsnitt visar vilken paragraf det gäller.'
    },
    praktik: {
      rubrik: 'Så används', rubrikKursiv: 'reglerna.',
      ingress: 'Kommunen söker två gånger om året, en gång per termin. Sedan redovisar kommunen hur pengarna använts, utan att något barn kan pekas ut.'
    }
  },

  paragrafer: [
    {
      ref: '1 §', rubrik: 'Vad bidraget gäller',
      text: [
        'Bidraget gäller kostnader för utbildning för barn som vistas i Sverige utan tillstånd.',
        'Det gäller förskoleklassen, grundskolan, anpassade grundskolan, specialskolan, sameskolan, gymnasieskolan och anpassade gymnasieskolan.',
        'Reglerna om när de här barnen har rätt till utbildning finns i skollagen, 29 kap. 2–3 §§. Där räknas barn som vistas här utan stöd av myndighetsbeslut eller författning som bosatta när det gäller rätten till skola. De har rätt till grundskola, anpassad grundskola, specialskola och sameskola, och till gymnasieskola och anpassad gymnasieskola om de börjar innan de fyllt 18 år.',
        'Enligt skollagen räknas ett asylsökande barn som har fått beslut om avvisning eller utvisning fortfarande som asylsökande tills det lämnar landet. Håller sig barnet undan så att beslutet inte kan verkställas räknas det i stället som papperslöst.',
        'Förskoleklassen saknas i skollagens nya uppräkning, eftersom den upphör som egen skolform den 1 juli 2028. Fram till dess gäller äldre regler, och förordningen nämner förskoleklassen.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Ett barn räknas som papperslöst om det har fått avslag på sin asylansökan men ändå är kvar i Sverige, eller är kvar efter att visumet har gått ut. Asylsökande som inte har fått beslut, eller som väntar på ett överklagande, räknas inte. Papperslösa barn har ingen skolplikt. Rätten till gymnasieskola gäller bara om barnet har börjat utbildningen före 18 års ålder.'
      },
      nyckelord: ['papperslös', 'utan tillstånd', 'avslag', 'asyl', 'visum', 'skolformer', 'förskoleklass', 'gymnasieskola', '18 år', 'skolplikt', 'massflyktsdirektivet', 'ukraina', 'skollagen', 'avvisning', 'utvisning', 'håller sig undan']
    },
    {
      ref: '2–3 §§', rubrik: 'Vem kan söka och vad pengarna får gå till',
      text: [
        'En kommun får söka om den har papperslösa barn inom sitt område och har kostnader för deras utbildning i någon av skolformerna ovan.',
        'Bidrag ges bara i den mån det finns pengar.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Bidraget ska gå till huvudmännens kostnader för undervisning, lärverktyg, elevhälsa, administration, moms, lokaler och skolskjuts. Förordningen säger inget särskilt om barn i fristående skolor. Det är kommunen som söker, för de kostnader den har.'
      },
      nyckelord: ['kommun', 'vem kan söka', 'fristående', 'kostnader', 'undervisning', 'lärverktyg', 'elevhälsa', 'lokaler', 'skolskjuts', 'moms']
    },
    {
      ref: '4–5 §§', rubrik: 'Ansökan per termin',
      text: [
        'Kommunen ansöker hos Skolverket, som beslutar och betalar ut.',
        'Ansökan görs för en termin i taget. Enligt förordningen ska den lämnas senast den 15 september för hösten och senast den 15 februari för våren.'
      ],
      praktik: {
        rubrik: 'Skolverkets datum för 2026',
        text: 'Ansökan görs i Skolverkets e-tjänst för statsbidrag. För 2026 var ansökan 1 öppen 15 januari–21 februari och ansökan 2 öppen 15 augusti–15 september. Våren 2026 var e-tjänsten alltså öppen några dagar efter förordningens datum. Kontrollera Skolverkets datum varje år.'
      },
      nyckelord: ['ansökan', 'termin', '15 september', '15 februari', 'e-tjänst', 'ansökan 1', 'ansökan 2']
    },
    {
      ref: '6 §', rubrik: 'Hur pengarna fördelas',
      text: [
        'Pengarna fördelas i proportion mellan alla kommuner som söker. Varje kommun får ett fördelningstal som Skolverket beslutar.',
        'Fördelningstalet är medelvärdet av antalet asylsökande barn i åldern 6–17 år i kommunen under de tre år som kommer närmast före ansökningsåret.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Det finns 50 miljoner kr om året. Skolverket tar fram fördelningstalen med statistik från Migrationsverket. Beloppet räknas alltså inte på hur många papperslösa barn kommunen har. Ju fler kommuner som söker, desto mindre blir varje kommuns del.'
      },
      nyckelord: ['fördelning', 'fördelningstal', 'proportionellt', 'asylsökande barn', '6-17 år', 'tre år', 'migrationsverket', '50 miljoner', 'belopp']
    },
    {
      ref: '7 §', rubrik: 'Utbetalning',
      text: ['Bidraget betalas ut en gång per termin: senast den 15 maj för våren och senast den 15 december för hösten.'],
      nyckelord: ['utbetalning', '15 maj', '15 december']
    },
    {
      ref: '8–9 §§', rubrik: 'Uppföljning och redovisning',
      text: [
        'Skolverket följer upp hur bidraget har använts. Kommunen ska lämna den ekonomiska och annan redovisning som Skolverket begär.',
        'Skolverket får inte begära uppgifter som gör det möjligt att identifiera enskilda barn som vistas i landet utan tillstånd.'
      ],
      praktik: {
        rubrik: 'Skolverkets datum',
        text: 'Redovisningen av 2026 års bidrag är öppen 1 april–4 maj 2027 i e-tjänsten. Beslut om redovisningen kommer i maj eller juni 2027. Skolverket kan dessutom kontrollera alla som får statsbidrag.'
      },
      nyckelord: ['redovisning', 'uppföljning', 'identifiera', 'anonymitet', 'sekretess', 'kontroll']
    },
    {
      ref: '10–11 §§', rubrik: 'Betala tillbaka (återkrav)',
      text: ['Kommunen ska betala tillbaka bidraget om något av följande gäller:'],
      lista: [
        'Kommunen har lämnat felaktiga uppgifter eller på annat sätt orsakat att bidraget betalats ut felaktigt eller med för högt belopp.',
        'Bidraget har av annat skäl betalats ut felaktigt eller med för högt belopp, och kommunen borde ha förstått det.',
        'Kommunen lämnar inte den redovisning som Skolverket begär.',
        'Pengarna har inte använts till det de beviljades för.'
      ],
      praktik: {
        rubrik: 'Återkrav och ränta',
        text: 'Skolverket ska då kräva tillbaka bidraget helt eller delvis. Om det finns särskilda skäl får Skolverket avstå. Ränta tas ut från en månad efter beslutet om återkrav: statens utlåningsränta plus två procentenheter. Även räntan kan efterges vid särskilda skäl.'
      },
      nyckelord: ['återkrav', 'återbetalning', 'betala tillbaka', 'ränta', 'särskilda skäl']
    },
    {
      ref: '12–13 §§', rubrik: 'Föreskrifter och överklagande',
      text: [
        'Skolverket får skriva föreskrifter om hur förordningen ska tillämpas. Inte heller föreskrifterna får kräva uppgifter som gör det möjligt att identifiera enskilda barn.',
        'Beslut enligt förordningen får inte överklagas.'
      ],
      nyckelord: ['föreskrifter', 'överklaga', 'överklagande']
    }
  ],

  process: [
    { rubrik: 'Förbered e-tjänsten', text: 'Se till att de personer som ska göra ansökan och redovisning har rätt behörighet i Skolverkets e-tjänst för statsbidrag.', ref: '4 §' },
    { rubrik: 'Ansök för terminen', text: 'Ansök senast 15 februari för våren och senast 15 september för hösten. För 2026 var perioderna 15 januari–21 februari och 15 augusti–15 september.', ref: '5 §' },
    { rubrik: 'Beslut och utbetalning', text: 'Skolverket räknar ut kommunens andel med fördelningstalet. Beslutet för våren 2026 kom i mars. Pengarna betalas ut senast 15 maj respektive 15 december.', ref: '6–7 §§' },
    { rubrik: 'Använd pengarna till utbildningen', text: 'Pengarna ska gå till kostnader för de papperslösa barnens utbildning, till exempel undervisning, elevhälsa och skolskjuts. Ingen uppgift ska kunna peka ut ett enskilt barn.', ref: '2 §, 9 §' },
    { rubrik: 'Redovisa året efter', text: 'Redovisningen av 2026 års bidrag är öppen 1 april–4 maj 2027. Beslut om redovisningen kommer i maj eller juni 2027.', ref: '8–11 §§' }
  ],

  underlagRubrik: 'Underlag att ha till hands',
  underlagIngress: 'Använd listan när ni förbereder ansökan och redovisning. Markeringarna sparas inte – de försvinner när ni stänger sidan.',
  underlag: [
    'Behörighet i Skolverkets e-tjänst för statsbidrag.',
    'Rutin för att avgöra vilka barn som räknas som papperslösa, och att asylsökande och barn med tillfälligt skydd inte räknas.',
    'Kostnader för barnens utbildning: undervisning, lärverktyg, elevhälsa, administration, moms, lokaler och skolskjuts.',
    'Underlag som visar hur pengarna använts, utan uppgifter som kan identifiera enskilda barn.',
    'Skolverkets beslut för varje termin.'
  ],

  kallor: [
    {
      titel: 'Förordning (2013:361) · Sveriges riksdag',
      url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-2013361-om-statsbidrag-for-utbildning_sfs-2013-361/',
      beskrivning: 'Källan för skolformer, ansökan per termin, fördelningstal, utbetalning, skydd mot identifiering och återkrav. Paragrafhänvisningarna i guiden gäller den här förordningen.'
    },
    {
      titel: 'Statsbidrag för papperslösa barn 2026 · Skolverket',
      url: 'https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-papperslosa-barn-2026',
      beskrivning: 'Vem som räknas som papperslös, vilka kostnader bidraget får gå till, 50 miljoner kr per år och datum för 2026.'
    },
    {
      titel: 'Skollag (2010:800) · Sveriges riksdag',
      url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/skollag-2010800_sfs-2010-800/',
      beskrivning: '29 kap. 2–3 §§ om vem som räknas som bosatt och vilka skolformer papperslösa barn har rätt till.'
    },
    {
      titel: 'Regleringsbrev för budgetåret 2026 avseende Statens skolverk · Statskontoret',
      url: 'https://www.statskontoret.se/statsliggaren/regleringsbrev/1/2026/senaste',
      beskrivning: 'Anslag 1:8 anslagspost 3: högst 50 miljoner kr för 2026.'
    }
  ],

  forbehall: 'Guiden sammanfattar reglerna. Den räknar inte ut kommunens belopp, eftersom det beror på alla sökande kommuners fördelningstal. Datum och belopp gäller 2026 och kan ändras. Använd Skolverkets aktuella anvisningar när ni ansöker och redovisar.'
};
