/* Fördjupning: Särskilt anordnad utbildning för ungdomar med svår synnedsättning (mellanår), SPSM.
 * Bidraget styrs av SPSM:s regleringsbrev. SPSM tillämpar delar av förordning (1991:931) om statsbidrag till
 * särskilda insatser på skolområdet analogt (3 § andra stycket, 7 § första och tredje styckena och 10–13 a §§).
 * Innehållet är stämt mot SPSM:s "Information om bidraget särskilt anordnad utbildning för ungdomar med svår
 * synnedsättning", bidragsår 2027 (2026-09-24, dnr 6 STA-2026/311), SPSM:s sida om bidraget och förordningen
 * (ändrad t.o.m. SFS 2025:97). Schema: se FORDJUPNING.md – "Regelverk som inte är en svensk förordning". */
window.SB_FORDJUPNING = window.SB_FORDJUPNING || {};
window.SB_FORDJUPNING['synnedsattning-mellanar'] = {
  id: 'synnedsattning-mellanar',
  rubrik: 'Mellanår vid svår synnedsättning',
  rubrikKursiv: 'i klartext.',
  ingress: 'Bidraget betalar en särskilt anordnad utbildning för ungdomar med svår synnedsättning, mellan grundskolan och en avslutad gymnasieutbildning. Här står villkoren på vanlig svenska.',
  kontrollerad: '2026-10-01',
  forordning: {
    namn: 'SPSM: Information om bidraget särskilt anordnad utbildning för ungdomar med svår synnedsättning, bidragsår 2027',
    etikett: 'SPSM:s information om bidraget',
    iText: 'i SPSM:s information',
    lydelse: '24 september 2026, dnr 6 STA-2026/311',
    url: 'https://www.spsm.se/siteassets/stod-och-rad/sok-statsbidrag/2027-information-om-bidraget-sarskilt-anordnad-utbildning-synnedsattning.pdf'
  },

  snabbfaktaRubrik: 'Två saker att känna till först',
  snabbfakta: [
    { rubrik: 'Högst ett år per deltagare', text: 'Bidraget gäller ungdomar med svår synnedsättning som har gått ut grundskolan men inte avslutat en gymnasieutbildning.' },
    { rubrik: 'Faktiska kostnader, inget fast belopp', text: 'Bidraget täcker verksamhetens kostnader för personal, lokaler, kost och logi med mera. SPSM anger inget belopp per elev.' }
  ],
  snabbfaktaNot: 'Ansökan för 2027 mejlas till SPSM 1 november–15 december 2026. Slutredovisningen för 2026 ska in senast 30 november 2026.',

  begreppRubrik: 'Ord som återkommer',
  begrepp: [
    { term: 'Huvudman', forklaring: 'Den som driver utbildningen och ansvarar för den.' },
    { term: 'Mellanår', forklaring: 'Ett förberedande år efter grundskolan, innan eleven har avslutat en gymnasieutbildning.' },
    { term: 'Kursstödjare', forklaring: 'Personal som stöttar deltagarna, till exempel elevassistenter. Personliga assistenter räknas inte hit.' },
    { term: 'Behörig företrädare', forklaring: 'Den som får skriva under för organisationen, normalt kommunchef, förvaltningschef, skolchef, vd eller ordförande.' }
  ],

  sektioner: {
    regler: {
      rubrik: 'Från villkor', rubrikKursiv: 'till praktik.',
      ingress: 'Bidraget har ingen egen förordning. Rubrikerna följer SPSM:s information om bidraget. Där SPSM använder reglerna i förordning (1991:931) står paragrafen i texten.'
    },
    praktik: {
      rubrik: 'Så används', rubrikKursiv: 'reglerna.',
      ingress: 'Bidraget söks för ett kalenderår i taget, på en blankett som mejlas till SPSM. Året slutredovisas i november samma år.'
    }
  },

  paragrafer: [
    {
      ref: 'Regelverk', rubrik: 'Vad som styr bidraget',
      text: [
        'Bidraget styrs av SPSM:s regleringsbrev för bidragsåret. Det är en del av statsbidraget för särskilda insatser på skolområdet, som ofta förkortas SIS.',
        'Förordning (1991:931) gäller inte direkt. SPSM använder ändå delar av den på samma sätt: att beslut kan ha villkor (3 §), att ansökan görs av en behörig företrädare och att ni ska lämna de uppgifter SPSM behöver (7 §), och reglerna om uppföljning, hinder, anmälan, återkrav och stopp för utbetalning (10–13 a §§).'
      ],
      nyckelord: ['regleringsbrev', 'SIS', 'särskilda insatser', 'förordning 1991:931']
    },
    {
      ref: 'Vem kan söka', rubrik: 'Vem kan få bidrag och för vilka deltagare',
      text: [
        'Huvudmän som anordnar en särskild utbildning för ungdomar med svår synnedsättning kan få bidraget.',
        'Utbildningen är till för ungdomar med svår synnedsättning som efter grundskolan inte har avslutat en gymnasieutbildning, och som behöver den särskilt anordnade utbildningen.',
        'Bidrag ges för högst ett år per deltagare.'
      ],
      praktik: 'SPSM:s information räknar inte upp vilka sorters huvudmän som kan söka. Villkoret är att ni själva anordnar utbildningen.',
      nyckelord: ['huvudman', 'synnedsättning', 'synskada', 'blind', 'målgrupp', 'ett år', 'grundskola', 'gymnasium']
    },
    {
      ref: 'Kostnader', rubrik: 'Vad bidraget betalar',
      text: [
        'Bidrag kan ges för verksamhetens kostnader under bidragsåret. Kostnaderna ska gälla eleverna i målgruppen och höra till den särskilt anordnade utbildningen.'
      ],
      lista: [
        'Personal: lärare, kursstödjare (elevassistenter men inte personliga assistenter), elevhälsa och administration. Bidraget gäller lönekostnader: lön med arbetsgivaravgifter, pension och försäkringar enligt kollektivavtal.',
        'Lokaler: utbildningens andel av lokalerna för undervisning, matsal och andra ytor, till exempel hyra, el, värme, vatten, städ och vaktmästeri.',
        'Kost och logi: deltagarnas andel av kostnaden för boendet och maten, till exempel livsmedel, kökspersonal och internatföreståndare.',
        'Administration: utbildningens andel av gemensamma kostnader, till exempel marknadsföring.',
        'Läromedel och studiebesök: resa, boende och inträden kan räknas in för studiebesök.',
        'Övriga kostnader som är en förutsättning för utbildningen.'
      ],
      praktik: {
        rubrik: 'SPSM:s förklaring',
        text: 'Extra lokalkostnader för anpassningar kan godtas efter särskild prövning. Personalkostnaderna ska specificeras i redovisningen så att det syns hur många tjänster det är, vilken sorts tjänster och hur kostnaden är beräknad.'
      },
      nyckelord: ['kostnader', 'personal', 'lärare', 'elevassistent', 'lokaler', 'kost', 'logi', 'internat', 'studiebesök', 'läromedel', 'administration']
    },
    {
      ref: 'Ansökan och beslut', rubrik: 'Ansökan, beslut och utbetalning',
      text: [
        'Ansökan för bidragsåret 2027 görs 1 november–15 december 2026. Ni fyller i SPSM:s blankett och mejlar den till spsm@spsm.se.',
        'Ansökan ska skrivas under av en behörig företrädare. Behörigheten ska kunna styrkas, till exempel med en delegationsordning eller ett protokollsutdrag.',
        'SPSM beslutar i januari 2027 och meddelar beslutet via mejl. Bidraget betalas ut fyra gånger: i mars, juni, september och december.'
      ],
      nyckelord: ['ansökan', 'blankett', 'mejl', 'behörig företrädare', 'delegationsordning', 'beslut', 'januari', 'utbetalning']
    },
    {
      ref: 'Hinder', rubrik: 'När bidrag inte ges',
      text: ['Bidrag ges inte till en huvudman som:'],
      lista: [
        'Är i likvidation eller konkurs.',
        'Har skatte- eller avgiftsskulder eller andra skulder hos Kronofogden som drivs in i allmänt mål.',
        'Inte i tid har betalat ett återkrav av bidrag från SPSM.'
      ],
      praktik: 'Bidrag ges inte heller för kostnader som redan täcks av ett annat statligt bidrag.',
      nyckelord: ['konkurs', 'kronofogden', 'skulder', 'dubbel finansiering', 'annat statsbidrag']
    },
    {
      ref: 'Anmälan', rubrik: 'Anmäl förändringar',
      text: ['Den som har sökt eller fått bidraget ska så snart som möjligt meddela SPSM om något ändras som kan påverka rätten till bidraget eller hur stort det är.'],
      praktik: 'Det kan till exempel vara att färre deltagare börjar än ni räknade med.',
      nyckelord: ['anmälan', 'förändring', 'deltagare']
    },
    {
      ref: 'Redovisning', rubrik: 'Slutredovisning',
      text: [
        'Bidragsåret ska slutredovisas senast 30 november samma år, på SPSM:s blankett. Den mejlas till spsm@spsm.se.',
        'Redovisningen ska visa de faktiska kostnaderna och antalet elever för hela året.'
      ],
      nyckelord: ['redovisning', 'slutredovisning', '30 november', 'blankett', 'faktiska kostnader']
    },
    {
      ref: 'Kontroll och återkrav', rubrik: 'Kontroll och betala tillbaka',
      text: [
        'SPSM kan göra egna kontroller och begära underlag som styrker det ni har uppgett i ansökan och redovisning.',
        'Mottagaren kan behöva betala tillbaka hela eller delar av bidraget om:'
      ],
      lista: [
        'Bidraget har getts på felaktig grund eller med för högt belopp.',
        'Bidraget helt eller delvis inte har använts, eller inte har använts till det det gavs för.',
        'Mottagaren inte har deltagit i uppföljningen eller lämnat de uppgifter som begärts.',
        'Villkoren i beslutet inte har följts.'
      ],
      praktik: {
        rubrik: 'Ränta och stopp',
        text: 'SPSM tillämpar 12–13 a §§ i förordning (1991:931). Det innebär ränta från den trettionde dagen efter ett beslut om återkrav – statens utlåningsränta plus två procentenheter – och att en utbetalning kan stoppas om villkoren inte längre är uppfyllda.'
      },
      nyckelord: ['kontroll', 'återkrav', 'återbetalning', 'ränta', 'stopp']
    }
  ],

  process: [
    { rubrik: 'Beräkna året', text: 'Räkna fram kostnaderna för utbildningen och hur många deltagare ni väntar er under kalenderåret.', ref: 'Kostnader' },
    { rubrik: 'Ansök', text: 'Fyll i SPSM:s blankett. En behörig företrädare skriver under. Mejla den till spsm@spsm.se 1 november–15 december 2026.', ref: 'Ansökan och beslut' },
    { rubrik: 'Beslut och utbetalning', text: 'SPSM beslutar i januari 2027. Pengarna kommer i mars, juni, september och december. Anmäl förändringar så snart som möjligt.', ref: 'Ansökan och beslut, Anmälan' },
    { rubrik: 'Redovisa', text: 'Slutredovisa bidragsåret senast 30 november med faktiska kostnader och antal elever. Specificera personalkostnaderna.', ref: 'Redovisning' }
  ],

  underlagRubrik: 'Underlag att ha till hands',
  underlagIngress: 'Använd listan när ni förbereder ansökan och redovisning. Markeringarna sparas inte – de försvinner när ni stänger sidan.',
  underlag: [
    'Antal deltagare och hur länge var och en går utbildningen.',
    'Personalkostnader per tjänst: typ av tjänst, omfattning och hur kostnaden är beräknad.',
    'Utbildningens andel av lokal-, kost- och logikostnader, och hur andelen är beräknad.',
    'Kostnader för läromedel, studiebesök och administration.',
    'Delegationsordning eller protokollsutdrag som visar vem som är behörig företrädare.'
  ],

  kallor: [
    {
      titel: 'Information om bidraget, bidragsår 2027 · SPSM (pdf)',
      url: 'https://www.spsm.se/siteassets/stod-och-rad/sok-statsbidrag/2027-information-om-bidraget-sarskilt-anordnad-utbildning-synnedsattning.pdf',
      beskrivning: 'Källan för målgrupp, godtagbara kostnader, tider, utbetalning, redovisning och återkrav för 2027.'
    },
    {
      titel: 'Särskilt anordnad utbildning för ungdomar med svår synnedsättning · SPSM',
      url: 'https://www.spsm.se/stod-och-rad/sok-statsbidrag/skolor-inom-skolvasendet/sarskilt-anordnad-utbildning-for-ungdomar-med-svar-synnedsattning/',
      beskrivning: 'SPSM:s sida om bidraget med blanketter för ansökan och slutredovisning.'
    },
    {
      titel: 'Förordning (1991:931) · Sveriges riksdag',
      url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-1991931-om-statsbidrag-till_sfs-1991-931/',
      beskrivning: 'Förordningen om särskilda insatser på skolområdet. SPSM tillämpar delar av den på samma sätt för det här bidraget.'
    }
  ],

  forbehall: 'Guiden sammanfattar SPSM:s villkor. Den prövar inte rätten till bidrag eller vilka kostnader SPSM godtar. Datumen gäller bidragsår 2027 och kan ändras. Använd SPSM:s aktuella information, blanketter och ert beslut när ni ansöker och redovisar.'
};
