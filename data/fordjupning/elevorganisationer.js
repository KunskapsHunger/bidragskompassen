/* Fördjupning: Statsbidrag för elevorganisationer – förordning (1998:1636).
 * Innehållet är stämt mot förordningen (ändrad t.o.m. SFS 2025:551), regleringsbrevet för Skolverket 2026
 * (anslag 1:5 ap. 4) och Skolverkets sidor för elevorganisationer 2026 och 2027 (senast uppdaterad 17 september 2026).
 * Förordningen gäller både elev- och föräldraorganisationer. Schema: se FORDJUPNING.md. Klartext, inte citat. */
window.SB_FORDJUPNING = window.SB_FORDJUPNING || {};
window.SB_FORDJUPNING['elevorganisationer'] = {
  id: 'elevorganisationer',
  rubrik: 'Elevorganisationer',
  rubrikKursiv: 'i klartext.',
  ingress: 'Ett bidrag till riksomfattande elevorganisationer som arbetar för elevinflytande. Här står reglerna på vanlig svenska, hur pengarna fördelas och vad elever och skolor kan ha för nytta av bidraget.',
  kontrollerad: '2026-10-01',
  forordning: {
    sfs: '1998:1636',
    namn: 'Förordning (1998:1636) om vissa statsbidrag för utveckling av skolväsendet',
    lydelse: 'ändrad t.o.m. SFS 2025:551',
    url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-19981636-om-vissa-statsbidrag-for_sfs-1998-1636/'
  },

  snabbfaktaRubrik: 'Tre saker att känna till först',
  snabbfakta: [
    { rubrik: 'Bara organisationer söker', text: 'Det är riksomfattande elevorganisationer som söker. En skola, en huvudman eller en enskild elevkår kan inte söka själv.' },
    { rubrik: 'Elevkårer kan ha nytta av det', text: 'En elevkår eller ett elevråd som är anslutet till en riksorganisation kan få stöd från den. Hur stödet ser ut bestämmer organisationen.' },
    { rubrik: 'Lokala föreningar väger tungt', text: 'Efter ett fast grundbidrag fördelas resten efter antal medlemmar och antal lokala föreningar. Modellen ger mer per förening än per medlem.' }
  ],
  snabbfaktaNot: 'Hur mycket som finns för 2027 bestäms i regleringsbrevet i mitten av december 2026. För 2026 fick 4 organisationer totalt 7 050 000 kr.',

  begreppRubrik: 'Ord som återkommer',
  begrepp: [
    { term: 'Elevorganisation', forklaring: 'En förening som i huvudsak består av elever i skolväsendet och arbetar för elevers inflytande, till exempel ett förbund för elevkårer eller elevråd.' },
    { term: 'Lokalorganisation', forklaring: 'En lokal eller regional förening som hör till riksorganisationen, till exempel en elevkår på en skola.' },
    { term: 'Bidragsgrundande medlem', forklaring: 'En medlem som räknas när Skolverket fördelar pengarna. En oberoende revisor ska ha kontrollerat antalet.' },
    { term: 'Demokrativillkor', forklaring: 'Regler om att organisationen och dess företrädare inte får använda våld, diskriminera eller motarbeta demokratin.' },
    { term: 'Återkrav', forklaring: 'När Skolverket kräver tillbaka bidrag, helt eller delvis.' }
  ],

  sektioner: {
    regler: {
      rubrik: 'Från paragraf', rubrikKursiv: 'till praktik.',
      ingress: 'Rubrikerna följer förordningen. Samma förordning gäller också föräldraorganisationer. Sök på till exempel ”elevkår”, ”revisor” eller ”återkrav”.'
    },
    praktik: {
      rubrik: 'Så används', rubrikKursiv: 'reglerna.',
      ingress: 'Organisationen ansöker hösten före bidragsåret, använder pengarna under året och redovisar våren året efter.'
    }
  },

  paragrafer: [
    {
      ref: '1–2 §§', rubrik: 'Vad bidraget är till för och vem som kan få det',
      text: [
        'Bidrag ges för att utveckla skolväsendet, i den mån det finns pengar.',
        'Bidrag får ges till elev- och föräldraorganisationer. Pengarna ska i första hand gå till åtgärder som ökar elevernas inflytande i skolväsendet. De får också gå till att stärka elevernas lokala organisationer, till exempel elevkårer och elevråd.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Skolverket ger bidraget till organisationer som i huvudsak består av elever i skolväsendet. Organisationen ska arbeta för elevinflytande, ha riksomfattande verksamhet med flera lokala eller regionala föreningar och vara ideell. För 2026 krävde Skolverket också att minst 60 procent av medlemmarna var elever. Det kravet står inte med på sidan för 2027. Skolor och huvudmän kan inte söka. Elever har nytta av bidraget genom de elevkårer och elevråd som är anslutna till en organisation.'
      },
      nyckelord: ['syfte', 'elevinflytande', 'elevkår', 'elevråd', 'riksomfattande', 'ideell', 'skola', 'huvudman', '60 procent']
    },
    {
      ref: '3–4 §§', rubrik: 'Skulder, konkurs och dubbel finansiering',
      text: ['Bidrag ges inte till en organisation som:'],
      lista: [
        'är i likvidation eller konkurs,',
        'har skulder för skatter, avgifter eller annat som har lämnats till Kronofogden,',
        'inte i tid har betalat tillbaka bidrag som Skolverket har krävt tillbaka.'
      ],
      praktik: 'Bidrag ges inte heller för kostnader som redan har betalats med ett annat statligt bidrag.',
      nyckelord: ['kronofogden', 'skulder', 'konkurs', 'likvidation', 'återkrav', 'dubbel finansiering', 'annat statsbidrag']
    },
    {
      ref: '5–6 §§', rubrik: 'Demokrativillkor',
      text: ['Bidrag ges inte om organisationen, eller någon som företräder den i verksamheten, gör något av följande:'],
      lista: [
        'Använder våld, tvång eller hot mot någon, eller kränker någons grundläggande fri- och rättigheter på annat sätt.',
        'Diskriminerar personer eller grupper, eller bryter på annat sätt mot principen om alla människors lika värde.',
        'Försvarar, främjar eller uppmanar till sådant.',
        'Motarbetar det demokratiska styrelseskicket.'
      ],
      praktik: {
        rubrik: 'Samarbetsorganisationer och undantag',
        text: 'Samma sak gäller om en samarbetsorganisation eller dess företrädare agerar så. Bidrag kan ändå ges om det finns särskilda skäl. Då väger Skolverket in om organisationen har tagit avstånd, vidtagit åtgärder, om det var en enstaka händelse och om den ligger långt tillbaka i tiden. Skolverket skriver att organisationen ansvarar för sina lokalföreningar. Skolverket granskar stadgar, årsmötesprotokoll, verksamhetsberättelser, webbplats, öppna sociala medier och nyhetsrapportering.'
      },
      nyckelord: ['demokrativillkor', 'våld', 'hot', 'diskriminering', 'lika värde', 'samarbetsorganisation', 'lokalförening', 'särskilda skäl']
    },
    {
      ref: '7–8 §§', rubrik: 'Ansökan och beslut',
      text: [
        'En behörig företrädare för organisationen ansöker skriftligen hos Skolverket. Uppgifterna lämnas på heder och samvete. Skolverket kan begära fler uppgifter och handlingar.',
        'Skolverket beslutar om bidraget. Beslutet kan förenas med villkor, och de står i så fall i beslutet.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Ansökan för 2027 är öppen 1 oktober–2 november 2026 i e-tjänsten för statsbidrag. En ny organisation behövde registrera sig och ansöka om ombud senast den 17 september 2026. Den som är sen kan ändå mejla Skolverket och ansöka på annat sätt. I ansökan anger ni bland annat planerade åtgärder, vilka typer av kostnader ni planerar (utan belopp), antal medlemmar, bidragsgrundande medlemmar och lokalorganisationer. Stadgar, verksamhetsberättelse, protokoll och revisorsintyg begär Skolverket in efter ansökan.'
      },
      nyckelord: ['ansökan', 'e-tjänst', 'ombud', 'registrering', 'heder och samvete', 'revisorsintyg', 'stadgar']
    },
    {
      ref: 'Fördelning', rubrik: 'Så fördelas pengarna',
      text: [
        'Förordningen säger inte hur pengarna ska fördelas. Skolverket använder den här modellen:'
      ],
      lista: [
        'Varje organisation får ett fast grundbidrag.',
        'Av det som är kvar fördelas 65 procent efter antal bidragsgrundande medlemmar. Varje medlem ger en fast summa.',
        'Resten, 35 procent, fördelas efter antal bidragsgrundande lokalorganisationer. Varje lokalorganisation ger en fast summa.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Modellen ger mer per förening än per medlem, eftersom Skolverket anser att spridning i landet och lokal verksamhet betyder mer än antalet medlemmar. Hur stort grundbidraget är framgår inte av Skolverkets sida. För 2026 fanns 7 050 000 kr, som delades av 4 organisationer. Beloppet för 2027 bestäms i regleringsbrevet i december 2026.'
      },
      nyckelord: ['fördelning', 'grundbidrag', '65 procent', '35 procent', 'medlemmar', 'lokalorganisationer', 'belopp', '7050000']
    },
    {
      ref: '9–10 §§', rubrik: 'Uppföljning, redovisning och ändrade förhållanden',
      text: [
        'Skolverket följer upp hur bidraget har använts. Organisationen ska delta i den uppföljning och utvärdering som Skolverket, eller en annan myndighet med uppdrag från regeringen, bestämmer och lämna de uppgifter som begärs.',
        'Organisationen ska så snart som möjligt anmäla förändringar som kan påverka rätten till bidraget eller hur stort det är.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Redovisningen för 2027 är preliminärt öppen 1 mars–3 april 2028. Ni beskriver verksamheten och redovisar kostnaderna med belopp, till exempel stöd till lokala elevorganisationer, löner, konsulter, material, lokaler, kompetensutveckling och resor. Signerade protokoll, årsredovisning och revisionsberättelse skickas in när Skolverket begär dem. Vid stickprov ska ni kunna visa hur både riksorganisationen och de lokala organisationerna har använt pengarna.'
      },
      nyckelord: ['redovisning', 'uppföljning', 'stickprov', 'kostnader', 'anmälan', 'förändring', 'lokala organisationer', 'årsredovisning']
    },
    {
      ref: '11–14 §§', rubrik: 'Betala tillbaka och stopp för utbetalning',
      text: ['Organisationen ska betala tillbaka bidraget om något av följande gäller:'],
      lista: [
        'Bidraget har getts på felaktig grund eller med för högt belopp.',
        'Pengarna har inte använts, eller inte använts till det de var avsedda för.',
        'Organisationen har inte deltagit i uppföljningen eller lämnat begärda uppgifter.',
        'Villkoren i beslutet har inte följts.',
        'Demokrativillkoren är inte uppfyllda och det finns inga särskilda skäl.'
      ],
      praktik: {
        rubrik: 'Återkrav, ränta och stopp',
        text: 'Skolverket ska då kräva tillbaka pengarna helt eller delvis, men kan avstå vid synnerliga skäl, alltså mycket starka skäl. Ränta tas ut från den trettionde dagen efter beslutet: statens utlåningsränta plus två procentenheter. Skolverket ska också stoppa utbetalningar om organisationen inte längre uppfyller villkoren. Det beslutet gäller direkt.'
      },
      nyckelord: ['återkrav', 'återbetalning', 'ränta', 'synnerliga skäl', 'stopp', 'utbetalning']
    },
    {
      ref: '15–16 §§', rubrik: 'Föreskrifter, överklagande och äldre regler',
      text: [
        'Skolverket får skriva föreskrifter om hur förordningen ska tillämpas. Skolverkets sida hänvisar bara till förordningen.',
        'Bara ett beslut om att stoppa en utbetalning (14 §) kan överklagas till allmän förvaltningsdomstol. Andra beslut, till exempel om ansökan, kan inte överklagas.',
        'De senaste ändringarna (SFS 2025:551) gäller från den 1 juli 2025. För bidrag som gäller tid före dess gäller äldre regler.'
      ],
      nyckelord: ['föreskrifter', 'överklaga', 'förvaltningsdomstol', 'övergång', '2025:551']
    }
  ],

  process: [
    { rubrik: 'Förbered och ansök', text: 'Se till att organisationen finns i e-tjänsten och har ett ombud. Ta fram uppgifter om planerade åtgärder, medlemmar och lokalorganisationer och ett revisorsintyg. Ansök 1 oktober–2 november 2026.', ref: '7–8 §§' },
    { rubrik: 'Beslut, utbetalning och genomförande', text: 'Skolverket planerar beslut i februari 2027. Hälften betalas ut i samband med beslutet och hälften i juni. Använd pengarna till elevinflytande och lokala organisationer, och anmäl förändringar.', ref: '9–10 §§' },
    { rubrik: 'Redovisa året efter', text: 'Redovisningen för 2027 är preliminärt öppen 1 mars–3 april 2028. Beslut om redovisningen planeras i juni 2028. För 2026 års bidrag är redovisningen öppen 1 mars–1 april 2027.', ref: '9–13 §§' }
  ],

  underlagRubrik: 'Underlag att ha till hands',
  underlagIngress: 'Markeringarna sparas inte – de försvinner när ni stänger sidan.',
  underlag: [
    'Organisationens syfte, verksamhetsmål och planerade åtgärder för året.',
    'Antal medlemmar, bidragsgrundande medlemmar och lokalorganisationer.',
    'Revisorsintyg från en oberoende revisor om medlemsantalet.',
    'Stadgar, verksamhetsberättelse och signerade protokoll från årsmöte och konstituerande möte.',
    'Firmatecknare och samarbetsorganisationer.',
    'Verifikationer för kostnaderna, också för stöd till lokala organisationer.'
  ],

  kallor: [
    {
      titel: 'Förordning (1998:1636) · Sveriges riksdag',
      url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-19981636-om-vissa-statsbidrag-for_sfs-1998-1636/',
      beskrivning: 'Källan för syfte, hinder, demokrativillkor, ansökan, uppföljning och återkrav. Paragrafhänvisningarna gäller den här förordningen.'
    },
    {
      titel: 'Statsbidrag för elevorganisationer 2027 · Skolverket',
      url: 'https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-elevorganisationer-2027',
      beskrivning: 'Villkor, fördelningsmodell, datum, bilagor och redovisning för bidragsåret 2027.'
    },
    {
      titel: 'Statsbidrag för elevorganisationer 2026 · Skolverket',
      url: 'https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-elevorganisationer-2026',
      beskrivning: 'Beslut för 2026 (7 050 000 kr till 4 organisationer) och redovisning 1 mars–1 april 2027.'
    },
    {
      titel: 'Regleringsbrev 2026 för Statens skolverk · ESV',
      url: 'https://www.esv.se/statsliggaren/regleringsbrev/?RBID=26231',
      beskrivning: 'Anslag 1:5, anslagspost 4: pengar till elevorganisationer i form av verksamhetsstöd.'
    }
  ],

  forbehall: 'Guiden sammanfattar reglerna. Fördelningsmodellen och datumen kommer från Skolverket och kan ändras från år till år. Hur mycket varje organisation får beror på årets pengar och på alla sökande. Använd Skolverkets aktuella sida och ert beslut när ni ansöker och redovisar.'
};
