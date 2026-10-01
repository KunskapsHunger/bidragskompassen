/* Fördjupning: Statsbidrag till lokalkostnader till svenska utlandsskolor – 28 och 39 §§ förordning (1994:519).
 * Innehållet är stämt mot förordningen (ändrad t.o.m. SFS 2019:1017), Skolverkets föreskrifter SKOLFS 2008:9
 * (senaste ändring 2021:26), Skolverkets sidor för 2026 och 2027 (senast uppdaterade 15 september och 11 juni 2026),
 * översiktssidan för svenska utlandsskolor 2026 och Riksrevisionens rapport RiR 2026:11. Schema: se FORDJUPNING.md.
 * Klartext, inte citat – paragrafhänvisningarna gäller förordningen (1994:519) om inget annat anges. */
window.SB_FORDJUPNING = window.SB_FORDJUPNING || {};
window.SB_FORDJUPNING['lokalkostnader-utlandsskolor'] = {
  id: 'lokalkostnader-utlandsskolor',
  rubrik: 'Lokalkostnader för utlandsskolor',
  rubrikKursiv: 'hälften av kostnaden.',
  ingress: 'Godkända svenska utlandsskolor kan få halva kostnaden för sina skollokaler. Här står vilka kostnader som räknas, hur bidraget justeras i efterhand och hur ni räknar på det.',
  kontrollerad: '2026-10-01',
  forordning: {
    sfs: '1994:519',
    namn: 'Förordning (1994:519) om statsbidrag till utbildning av utlandssvenska barn och ungdomar',
    lydelse: 'ändrad t.o.m. SFS 2019:1017',
    url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-1994519-om-statsbidrag-till_sfs-1994-519/'
  },

  snabbfaktaRubrik: 'Tre saker att känna till först',
  snabbfakta: [
    { rubrik: 'Bara godkända utlandsskolor', text: 'I dag kan 14 svenska utlandsskolor söka. Vanliga fristående skolor i Sverige kan inte söka, och inte heller skolor utomlands som saknar Skolverkets godkännande.' },
    { rubrik: '50 procent av lokalkostnaden', text: 'Bidraget är hälften av årskostnaden för de lokaler som behövs för att undervisa utlandssvenska elever. Bara vissa kostnader räknas.' },
    { rubrik: 'Ansök i förväg, redovisa i efterhand', text: 'Ni söker på beräknade kostnader för nästa år. Året efter redovisar ni de faktiska kostnaderna, och bidraget justeras.' }
  ],
  snabbfaktaNot: 'Riksrevisionen föreslog i juni 2026 att lokalkostnadsbidraget avskaffas om systemet behålls. Inget var beslutat när guiden kontrollerades.',

  begreppRubrik: 'Ord som återkommer',
  begrepp: [
    { term: 'Svensk utlandsskola', forklaring: 'En skola utomlands som Skolverket har godkänt för statsbidrag. Den undervisar enligt svensk läroplan.' },
    { term: 'Beräknade kostnader', forklaring: 'Det ni räknar med att lokalerna kostar nästa år. Ansökan och utbetalningarna bygger på dem.' },
    { term: 'Faktiska kostnader', forklaring: 'Det lokalerna verkligen kostade under året. Ni redovisar dem året efter, och bidraget stäms av mot dem.' },
    { term: 'Löpande underhåll', forklaring: 'Reparationer som behåller lokalernas skick eller återställer dem till hur de var. Inte ombyggnad eller förbättring.' },
    { term: 'Avskrivning', forklaring: 'När en dyr tillgång som håller länge delas upp som kostnad över flera år, i stället för att hela kostnaden tas på en gång.' }
  ],

  sektioner: {
    regler: {
      rubrik: 'Från paragraf', rubrikKursiv: 'till praktik.',
      ingress: 'Avsnitten följer förordningen och Skolverkets föreskrifter. Sök på till exempel ”hyra”, ”moms” eller ”underhåll”. Varje avsnitt visar vilken regel det gäller.'
    },
    praktik: {
      rubrik: 'Så används', rubrikKursiv: 'reglerna.',
      ingress: 'Ni söker hösten före bidragsåret, får pengarna fyra gånger under året och redovisar de faktiska kostnaderna i januari–februari året efter.'
    }
  },

  paragrafer: [
    {
      ref: '1–2 och 9 §§', rubrik: 'Vilka skolor som kan få bidraget',
      text: [
        'Förordningen gäller statsbidrag för utbildning av utlandssvenska barn och unga. Bidraget till lokalkostnader kan bara gå till huvudmannen för en svensk utlandsskola.',
        'Skolan måste först vara godkänd. Skolverket godkänner skolor för förskoleklass och årskurs 1–6, och regeringen beslutar om årskurs 7–9 och gymnasieskolan.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'I dag har 14 skolor rätt att söka: i England, Frankrike, Kenya, Moçambique, Portugal, Spanien, Tyskland och Österrike. En ny skola som vill bli godkänd kontaktar Skolverket på info.svenskutlandsundervisning@skolverket.se.'
      },
      nyckelord: ['utlandsskola', 'godkänd', 'huvudman', 'fristående skola', 'vem kan söka', 'ny skola']
    },
    {
      ref: '3 §', rubrik: 'Utlandssvenska elever',
      text: [
        'Bidraget gäller lokaler som behövs för utbildningen av utlandssvenska elever. Med det menas elever som har minst en vårdnadshavare som är svensk medborgare och minst en vårdnadshavare som bor utomlands av ett godkänt skäl.',
        'Godkända skäl är till exempel arbete för en svensk myndighet, en internationell organisation eller ett svenskt företag, studier eller forskning med studiemedel, stipendium eller lön, och kulturarbete som är huvudsaklig försörjning. Skolverket kan också godta synnerliga sociala skäl.'
      ],
      nyckelord: ['utlandssvensk', 'vårdnadshavare', 'svensk medborgare', 'tjänstgöring']
    },
    {
      ref: '28 §', rubrik: 'Hälften av årskostnaden',
      text: [
        'Bidraget är 50 procent av årskostnaden för de lokaler som behövs för utbildningen av utlandssvenska elever. Regeringen kan bestämma något annat genom avtal eller särskilda beslut.',
        'Skolverket ska skriva föreskrifter om vilka kostnader som får räknas. De finns i SKOLFS 2008:9.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Lokalkostnadsbidraget är, precis som bidraget för utbildningen, ett allmänt stöd till skolans verksamhet. Huvudmannen bestämmer själv hur pengarna används.'
      },
      nyckelord: ['50 procent', 'hälften', 'årskostnad', 'lokaler', 'allmänt stöd']
    },
    {
      ref: 'SKOLFS 2008:9, 7 §', rubrik: 'Kostnader som räknas',
      text: ['Enligt Skolverkets föreskrifter kan bidrag ges för de här kostnaderna:'],
      lista: [
        'Hyra för lokaler som behövs för undervisningen: klassrum, grupprum, bibliotek, slöjdsalar, gymnastiksal, skolmatsal, samlingslokal som bara skolan använder, expedition, personalrum, elevhälsans rum, kapprum, toaletter, städutrymmen och institutionslokaler.',
        'Ränta och avskrivning för investering i egen skolbyggnad, i de delar som staten har godkänt. Har annat statsbidrag täckt en del av investeringen ges bidrag bara för mellanskillnaden.',
        'Drift: värme, ventilation, belysning, städning, vatten och gas.',
        'Fastighetsskatt och fastighetsförsäkring.',
        'Löpande underhåll.',
        'Arrende, alltså hyra för mark.',
        'Bevakning av skollokalerna under särskilda förhållanden.'
      ],
      praktik: {
        rubrik: 'Riksrevisionens beskrivning',
        text: 'Enligt Riksrevisionen godkänner Skolverket också lön för till exempel städpersonal och vaktmästare. Bidraget var 2025 mellan cirka 15 000 och 103 000 kr per elev som gav elevbidrag, beroende på skola.'
      },
      nyckelord: ['hyra', 'ränta', 'avskrivning', 'drift', 'värme', 'el', 'belysning', 'städning', 'vatten', 'fastighetsskatt', 'försäkring', 'arrende', 'bevakning', 'vakt', 'gymnastiksal', 'matsal']
    },
    {
      ref: 'Underhåll', rubrik: 'Underhåll – men inte förbättring',
      text: [
        'Löpande underhåll är reparationer och underhåll som behåller lokalernas skick eller återställer dem till ursprungligt skick.',
        'Bidrag ges inte för åtgärder som markant ändrar eller förbättrar lokalerna, till exempel en ombyggnad.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Kostnader för löpande underhåll uppstår ofta när något oväntat händer, som en översvämning på en toalett eller fel på luftkonditioneringen. De är svåra att planera. Ta med dem när ni redovisar bidraget året efter.'
      },
      nyckelord: ['underhåll', 'reparation', 'ombyggnad', 'renovering', 'förbättring', 'oväntad kostnad', 'luftkonditionering']
    },
    {
      ref: 'Moms och avskrivning', rubrik: 'Moms och dyra inköp',
      text: [
        'Kan huvudmannen få tillbaka momsen redovisas kostnaderna utan moms. Kan huvudmannen inte få tillbaka den redovisas kostnaderna med moms.',
        'Kostar en tillgång mer än ett halvt prisbasbelopp och väntas den hålla mer än tre år ska den normalt skrivas av. Ett halvt prisbasbelopp var 29 400 kr för 2025. Då får ni bara ta med årets avskrivning, inte hela inköpet.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Huvudmannen ska kunna visa hur tillgången skaffades och hur avskrivningen är beräknad. Nästa år söker ni på nytt för det årets avskrivning. Huvudmannen ansvarar själv för att känna till skatte- och momsreglerna som gäller verksamheten.'
      },
      nyckelord: ['moms', 'avskrivning', 'prisbasbelopp', '29400', 'inköp', 'tillgång', 'tre år']
    },
    {
      ref: '38–39 §§', rubrik: 'Utbetalning och justering',
      text: [
        'Skolverket betalar ut bidraget utan att huvudmannen behöver begära det, med en fjärdedel i mars, juni, september och december under bidragsåret.',
        'Utbetalningarna bygger på de beräknade årskostnaderna. I mars året efter justeras bidraget med hänsyn till de faktiska kostnaderna.'
      ],
      praktik: 'Blev kostnaderna lägre än beräknat blir bidraget mindre. Har ni haft godtagbara kostnader som ni inte räknade med, till exempel oväntat underhåll, tar ni med dem i redovisningen.',
      nyckelord: ['utbetalning', 'kvartal', 'mars', 'justering', 'faktiska kostnader', 'redovisning']
    },
    {
      ref: '41–44 §§', rubrik: 'Avdrag, uppgifter och överklagande',
      text: [
        'Har för mycket betalats ut ett tidigare år får Skolverket minska nästa års bidrag med det beloppet.',
        'Följer huvudmannen inte reglerna för skolan får Skolverket hålla inne högst tio procent av bidraget tills felet är rättat, eller mer vid särskilda skäl.',
        'Huvudmannen ska lämna de uppgifter som Skolverket begär. Skolverket och Riksrevisionen kan också begära de uppgifter och verifikationer de behöver för att granska bidraget.',
        'Beslut om att hålla inne bidrag kan överklagas till regeringen. Andra beslut om lokalkostnadsbidraget går inte att överklaga.'
      ],
      praktik: {
        rubrik: 'Skolverkets föreskrifter',
        text: 'Huvudmannen ska varje år lämna en årsredovisning till Skolverket där intäkter och kostnader redovisas var för sig.'
      },
      nyckelord: ['avdrag', 'innehålla', 'verifikationer', 'fakturor', 'årsredovisning', 'överklaga']
    },
    {
      ref: 'RiR 2026:11', rubrik: 'Riksrevisionens granskning 2026',
      text: [
        'I juni 2026 kritiserade Riksrevisionen systemet med bidrag till svenska utlandsskolor. Riksrevisionen föreslår att regeringen tar ställning till om systemet behövs. Om det behålls föreslår Riksrevisionen bland annat att lokalkostnadsbidraget avskaffas.'
      ],
      praktik: 'Det är ett förslag, inte nya regler. När guiden kontrollerades gällde förordningen som tidigare.',
      nyckelord: ['Riksrevisionen', 'granskning', 'avskaffa', 'förändring']
    }
  ],

  kalkylatorer: [
    {
      id: 'bidrag', modul: 'lokalkostnader-utlandsskolor-bidrag',
      flik: 'Räkna på bidrag', eyebrow: 'Bidrag enligt 28 och 39 §§',
      rubrik: 'Hur mycket', rubrikKursiv: 'kan det bli?',
      ingress: 'Fyll i de lokalkostnader ni räknar med för året. Räknaren visar bidraget och hur stor varje utbetalning blir. Vill ni se justeringen efter redovisningen kan ni också fylla i de faktiska kostnaderna.',
      formel: { rubrik: 'Formeln', text: 'Bidrag = 50 % × godtagbara lokalkostnader för året. Justering = 50 % × faktiska kostnader − utbetalt bidrag.' },
      resultatRubrik: 'Bidrag på beräknade kostnader',
      falt: [
        { id: 'hyra', typ: 'tal', etikett: 'Hyra för undervisningslokaler', min: 0, max: 1000000000, steg: 1000, standard: 1000000, enhet: 'kr',
          hjalp: 'Bara lokaler som behövs för undervisningen, till exempel klassrum, matsal och personalrum.' },
        { id: 'kapital', typ: 'tal', etikett: 'Ränta och avskrivning på egen skolbyggnad', min: 0, max: 1000000000, steg: 1000, standard: 0, enhet: 'kr',
          hjalp: 'Bara för de delar av investeringen som staten har godkänt.' },
        { id: 'drift', typ: 'tal', etikett: 'Drift', min: 0, max: 1000000000, steg: 1000, standard: 200000, enhet: 'kr',
          hjalp: 'Värme, ventilation, belysning, städning, vatten och gas.' },
        { id: 'fastighet', typ: 'tal', etikett: 'Fastighetsskatt och fastighetsförsäkring', min: 0, max: 1000000000, steg: 1000, standard: 0, enhet: 'kr' },
        { id: 'underhall', typ: 'tal', etikett: 'Löpande underhåll', min: 0, max: 1000000000, steg: 1000, standard: 40000, enhet: 'kr',
          hjalp: 'Reparationer som behåller lokalernas skick. Inte ombyggnad eller förbättring.' },
        { id: 'ovrigt', typ: 'tal', etikett: 'Arrende och bevakning', min: 0, max: 1000000000, steg: 1000, standard: 0, enhet: 'kr',
          hjalp: 'Bevakning räknas bara under särskilda förhållanden.' },
        { id: 'redovisning', typ: 'kryss', etikett: 'Räkna också på justeringen efter redovisningen', standard: false },
        { id: 'faktiska', typ: 'tal', etikett: 'Faktiska godtagbara lokalkostnader för året', min: 0, max: 1000000000, steg: 1000, standard: 1240000, enhet: 'kr',
          hjalp: 'Summan av samma slags kostnader som ovan, så som de blev.', visasOm: { falt: 'redovisning', ar: true } }
      ],
      exempel: [
        { etikett: 'Hyrda lokaler', varden: { hyra: 1500000, drift: 300000, underhall: 60000 } },
        { etikett: 'Egen skolbyggnad', varden: { hyra: 0, kapital: 400000, drift: 250000, fastighet: 80000, underhall: 100000 } },
        { etikett: 'Lägre kostnader än beräknat', varden: { redovisning: true, faktiska: 1100000 } }
      ],
      resultatNotis: 'Räknaren visar 50 % av de belopp ni fyller i. Om kostnaderna godtas avgör Skolverket.',
      forbehall: [
        { rubrik: 'Formel', text: 'Förordningen (28 §) anger 50 procent av årskostnaden för lokalerna. Utbetalningen sker med en fjärdedel i mars, juni, september och december och justeras i mars året efter mot de faktiska kostnaderna (39 §). Räknaren avrundar till hela kronor.' },
        { rubrik: 'Det här prövar räknaren inte', text: 'Om kostnaderna är godtagbara, om lokalerna behövs för utbildningen av utlandssvenska elever, om regeringen har beslutat något annat för er skola, moms eller avskrivningar. Ombyggnad och förbättring ger aldrig bidrag.' },
        { rubrik: 'Valuta', text: 'Räknaren räknar i kronor. Hur kostnader i annan valuta ska anges framgår av Skolverkets blankett.' }
      ]
    }
  ],

  process: [
    { rubrik: 'Beräkna nästa års kostnader', text: 'Räkna fram de godtagbara lokalkostnaderna för bidragsåret, per kostnadsslag. Tänk på moms och avskrivningar.', ref: '28 §, SKOLFS 2008:9 7 §' },
    { rubrik: 'Ansök 15 oktober–16 november 2026', text: 'Ansökan för 2027 görs i Skolverkets e-tjänst. Blanketten publiceras på Skolverkets sida den 15 oktober. Går det inte i e-tjänsten kan ni få en länk till Sefos (säker filöverföring).', ref: '28 §' },
    { rubrik: 'Beslut och utbetalning', text: 'Skolverket planerar beslut i början av 2027. Bidraget betalas ut i mars, juni, september och december 2027.', ref: '37–39 §§' },
    { rubrik: 'Spara underlag under året', text: 'Spara hyresavtal, fakturor och kvitton. Notera oväntade underhållskostnader.', ref: '43 §' },
    { rubrik: 'Redovisa faktiska kostnader', text: 'Redovisningen för 2026 är öppen 15 januari–15 februari 2027, och för 2027 är den öppen 15 januari–15 februari 2028. Blanketten publiceras senast den 15 januari. Bidraget justeras sedan mot de faktiska kostnaderna.', ref: '39 §' }
  ],

  underlagRubrik: 'Underlag att ha till hands',
  underlagIngress: 'Använd listan när ni förbereder ansökan och redovisning. Markeringarna sparas inte – de försvinner när ni stänger sidan.',
  underlag: [
    'Hyresavtal och arrendeavtal för skolans lokaler.',
    'Uppgift om vilka lokaler som behövs för undervisningen.',
    'Beräknade kostnader per kostnadsslag: hyra, ränta och avskrivning, drift, skatt och försäkring, underhåll, arrende och bevakning.',
    'Underlag för avskrivningar: hur tillgången skaffades och hur avskrivningen är beräknad.',
    'Uppgift om huvudmannen kan få tillbaka momsen.',
    'Fakturor och kvitton för de faktiska kostnaderna, inklusive oväntat underhåll.',
    'Behörighet i Skolverkets e-tjänst.'
  ],

  kallor: [
    {
      titel: 'Förordning (1994:519) · Sveriges riksdag',
      url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-1994519-om-statsbidrag-till_sfs-1994-519/',
      beskrivning: 'Källan för 50 procent, utbetalning och justering. Paragrafhänvisningarna i guiden gäller den här förordningen.'
    },
    {
      titel: 'Skolverkets föreskrifter (SKOLFS 2008:9) · Skolverket',
      url: 'https://skolfs.skolverket.se/api/document/SENASTE_LYDELSE/2008:9/pdf',
      beskrivning: 'Listan över bidragsberättigade lokalkostnader (7 §) och kravet på årsredovisning.'
    },
    {
      titel: 'Statsbidrag till lokalkostnader till svenska utlandsskolor 2027 · Skolverket',
      url: 'https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-till-lokalkostnader-till-svenska-utlandsskolor-2027',
      beskrivning: 'Datum för ansökan och redovisning, underhåll, moms och avskrivningar.'
    },
    {
      titel: 'Statsbidrag till lokalkostnader till svenska utlandsskolor 2026 · Skolverket',
      url: 'https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-till-lokalkostnader-till-svenska-utlandsskolor-2026',
      beskrivning: 'Pågående omgång med beslut och redovisning 15 januari–15 februari 2027.'
    },
    {
      titel: 'Statsbidrag till svenska utlandsskolor – ett föråldrat och ineffektivt system (RiR 2026:11) · Riksrevisionen',
      url: 'https://www.riksrevisionen.se/granskningar/granskningsrapporter/2026/statsbidrag-till-svenska-utlandsskolor---ett-foraldrat-och-ineffektivt-system.html',
      beskrivning: 'Granskningen från juni 2026, med förslaget att avskaffa lokalkostnadsbidraget.'
    }
  ],

  forbehall: 'Guiden sammanfattar reglerna och visar hur 50 procent räknas. Räknaren prövar inte om kostnaderna godtas. Datumen gäller omgångarna 2026 och 2027. Riksrevisionen har föreslagit förändringar, så kontrollera Skolverkets aktuella sida och ert beslut inför varje ansökan och redovisning.'
};
