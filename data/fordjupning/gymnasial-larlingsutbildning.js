/* Fördjupning: Statsbidrag för gymnasial lärlingsutbildning – förordning (2011:947).
 * Innehållet är stämt mot förordningen (ändrad t.o.m. SFS 2025:879), Skolverkets föreskrifter
 * SKOLFS 2017:95 och 2014:49, skollagen 16 kap. 11–11 b §§ och Skolverkets sidor för 2026 och 2027.
 * Schema: se FORDJUPNING.md. Klartext, inte citat – paragrafhänvisningarna gäller förordningen. */
window.SB_FORDJUPNING = window.SB_FORDJUPNING || {};
window.SB_FORDJUPNING['gymnasial-larlingsutbildning'] = {
  id: 'gymnasial-larlingsutbildning',
  rubrik: 'Gymnasial lärlingsutbildning',
  rubrikKursiv: 'i klartext.',
  ingress: 'Vilka elever ger bidrag, hur mycket blir det per termin och vad måste skolan betala vidare till arbetsplatsen? Här står reglerna på vanlig svenska. Ni kan också räkna på era egna lärlingar.',
  kontrollerad: '2026-10-01',
  forordning: {
    sfs: '2011:947',
    namn: 'Förordning (2011:947) om statsbidrag för gymnasial lärlingsutbildning och lärlingsliknande utbildning inom introduktionsprogram',
    lydelse: 'ändrad t.o.m. SFS 2025:879',
    url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-2011947-om-statsbidrag-for-gymnasial_sfs-2011-947/'
  },

  snabbfaktaRubrik: 'Tre saker att hålla isär',
  snabbfakta: [
    { rubrik: 'Tre delar per elev', text: 'En del till arbetsgivaren för varje lärling. Två tillägg: om handledaren har gått en godkänd handledarutbildning och om eleven har en lärlingsanställning.' },
    { rubrik: 'Maxbelopp, inte fast belopp', text: 'Förordningen anger högsta belopp. Räcker pengarna inte minskas alla delar lika mycket. Våren 2026 blev det drygt 62 procent av maxbeloppen.' },
    { rubrik: 'Pengarna går vidare', text: 'Skolan behåller inget. Hela bidraget ska betalas till arbetsgivaren inom tre månader. Det som inte betalas vidare ska tillbaka till Skolverket.' }
  ],
  snabbfaktaNot: 'Förordningen räknar per läsår. Skolverket söker, beviljar och betalar per termin, med halva årsbeloppet per termin.',

  begreppRubrik: 'Ord som återkommer',
  begrepp: [
    { term: 'Huvudman', forklaring: 'Den som driver skolan och ansvarar för utbildningen, till exempel en kommun eller den som driver en fristående skola.' },
    { term: 'Gymnasial lärlingsutbildning', forklaring: 'En utbildning på ett yrkesprogram, eller ett nationellt program i anpassade gymnasieskolan, som i huvudsak är förlagd till en eller flera arbetsplatser.' },
    { term: 'Lärlingsliknande utbildning', forklaring: 'Utbildning på ett introduktionsprogram där mer än hälften genomförs som arbetsplatsförlagt lärande, räknat från det läsår eleven börjar.' },
    { term: 'Arbetsplatsförlagt lärande (apl)', forklaring: 'Den del av utbildningen som eleven gör på en arbetsplats, med en handledare där.' },
    { term: 'Utbildningskontrakt', forklaring: 'Ett skriftligt avtal mellan eleven, huvudmannen och arbetsplatsen om den del av utbildningen som görs på arbetsplatsen.' },
    { term: 'Gymnasial lärlingsanställning', forklaring: 'En tidsbegränsad anställning som eleven har hos arbetsplatsen under lärlingsutbildningen. Den regleras i en egen lag (2014:421).' }
  ],

  sektioner: {
    regler: {
      rubrik: 'Från paragraf', rubrikKursiv: 'till praktik.',
      ingress: 'Rubrikerna följer förordningen. Öppna det avsnitt ni behöver, eller sök på till exempel ”kontrakt”, ”handledare”, ”F-skatt” eller ”återkrav”. Varje avsnitt visar vilken paragraf det gäller.'
    },
    praktik: {
      rubrik: 'Så används', rubrikKursiv: 'reglerna.',
      ingress: 'Varje termin följer samma gång: kontrakt före ett visst datum, ansökan, utbetalning och vidarebetalning till arbetsgivaren. Året efter redovisar huvudmannen hela bidragsåret.'
    }
  },

  paragrafer: [
    {
      ref: '1 §', rubrik: 'Vilken utbildning bidraget gäller',
      text: [
        'Förordningen gäller två sorters utbildning: gymnasial lärlingsutbildning och lärlingsliknande utbildning inom introduktionsprogram.',
        'Lärlingsliknande betyder att mer än hälften av utbildningen genomförs som arbetsplatsförlagt lärande. Det räknas från och med det läsår eleven börjar den lärlingsliknande utbildningen.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Bidraget gäller lärlingar i gymnasieskolan och i anpassade gymnasieskolan. Lärlingsliknande utbildning kan finnas på programinriktat val, yrkesintroduktion och individuellt alternativ. Enligt skollagen ska gymnasial lärlingsutbildning i huvudsak vara förlagd till en eller flera arbetsplatser.'
      },
      nyckelord: ['lärling', 'lärlingsliknande', 'introduktionsprogram', 'yrkesintroduktion', 'programinriktat val', 'individuellt alternativ', 'anpassad gymnasieskola', 'apl', 'yrkesprogram']
    },
    {
      ref: '2 §', rubrik: 'Vem som kan få bidrag',
      text: [
        'Bidraget går till huvudmän inom skolväsendet. Gymnasial lärlingsutbildning ska ha börjat efter den 1 juli 2011, och lärlingsliknande utbildning inom introduktionsprogram efter den 1 juli 2018.',
        'Bidrag lämnas bara i mån av tillgång på medel. Det betyder att det finns en begränsad summa pengar varje år.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Kommunala och fristående huvudmän kan söka. Huvudmannen skickar en samlad ansökan för alla elever och skolor som ingår. Skolverket kan fördela 482 miljoner kronor under 2026: 241 miljoner för våren och 241 miljoner för hösten.'
      },
      nyckelord: ['huvudman', 'kommun', 'fristående', 'friskola', 'i mån av medel', 'budget', '482 miljoner']
    },
    {
      ref: '3 § första–andra st.', rubrik: 'Bidraget till arbetsgivaren',
      text: [
        'Bidraget ska täcka huvudmannens kostnad för ersättning till den som tar emot eleven på arbetsplatsen. Det kan till exempel vara ett företag, en förening eller en offentlig arbetsgivare.',
        'Det högsta beloppet är 37 500 kr per läsår för varje elev. Eleven ska delta i gymnasial lärlingsutbildning eller lärlingsliknande utbildning och ha ett utbildningskontrakt.',
        'För lärlingsutbildningen gäller skollagens regler om utbildningskontrakt. För introduktionsprogrammen gäller 3 a § i förordningen.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Skolverket söker och beviljar bidraget per elev och termin: högst 18 750 kr. Hela beloppet ska gå till arbetsgivaren inom tre månader efter att huvudmannen fått pengarna. Arbetsgivaren bestämmer själv hur pengarna används. Skolan får inte sätta upp villkor för det. Enligt Skatteverket är ersättningen ett näringsbidrag, alltså en skattepliktig intäkt för arbetsgivaren.'
      },
      nyckelord: ['belopp', '37500', '18750', 'arbetsgivare', 'ersättning', 'per termin', 'per läsår', 'skatt', 'näringsbidrag', 'lärlingsersättning']
    },
    {
      ref: '3 § tredje st.', rubrik: 'Tillägg för utbildad handledare',
      text: [
        'Om elevens handledare på arbetsplatsen har fullföljt en handledarutbildning kan huvudmannen få högst 10 000 kr till per läsår för eleven.',
        'Utbildningen måste uppfylla de krav som Skolverket har ställt upp. Kraven står i Skolverkets föreskrifter SKOLFS 2014:49. Där räknas de områden upp som utbildningen ska ta upp, till exempel handledarens roll, arbetsmiljö och säkerhet och bedömning av elevens arbete.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Per termin är tillägget högst 5 000 kr per elev, och det ska också betalas vidare till arbetsgivaren. Handledaren ska ha slutfört utbildningen innan ansökan lämnas in. Att ha börjat räcker inte. Skolverkets egen webbaserade utbildning räknas om handledaren har intyg för del A och B (modul 1–5). Skolverket listar också andra godkända utbildningar.'
      },
      nyckelord: ['handledare', 'handledarutbildning', '10000', '5000', 'intyg', 'skolfs 2014:49', 'apl-handledare']
    },
    {
      ref: '3 § fjärde st.', rubrik: 'Tillägg för lärlingsanställning',
      text: [
        'Har eleven en anställning enligt lagen (2014:421) om gymnasial lärlingsanställning kan huvudmannen få högst 5 000 kr till per läsår för eleven.',
        'Tillägget kommer ovanpå bidraget till arbetsgivaren och ett eventuellt tillägg för utbildad handledare.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Per termin är tillägget högst 2 500 kr per elev, och det går till arbetsgivaren. Eleven ska ha ett A på sjunde plats i studievägskoden. Tillägget kan inte sökas för elever på lärlingsliknande utbildning inom introduktionsprogram. Anställningen kan inte fortsätta om utbildningskontraktet upphör, men eleven kan fortsätta utbildningen om anställningen upphör.'
      },
      nyckelord: ['lärlingsanställning', 'anställning', '2014:421', '2500', 'studievägskod', 'lön']
    },
    {
      ref: '3 § femte st.', rubrik: 'När pengarna inte räcker',
      text: [
        'Om ansökningarna ett läsår tillsammans är större än pengarna som finns ska bidraget minskas för alla huvudmän.',
        'Minskningen ska vara proportionerlig. Det betyder att alla tre delarna minskas lika mycket i procent, så att fördelningen mellan dem blir densamma som utan minskning.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Om Skolverket kan bevilja 80 procent av det som sökts blir delarna högst 15 000, 4 000 och 2 000 kr per elev och termin. Våren 2026 beviljade Skolverket högst 11 720 kr till arbetsgivaren, 3 127 kr för utbildad handledare och 1 577 kr för lärlingsanställning per elev. Informera arbetsgivarna om att beloppet kan bli lägre än maxbeloppet.'
      },
      nyckelord: ['reducering', 'minskning', 'proportionerlig', 'räcker inte', '11720', 'beviljat belopp', 'procent']
    },
    {
      ref: '3 a §', rubrik: 'Utbildningskontraktet',
      text: [
        'För lärlingsliknande utbildning inom introduktionsprogram är utbildningskontraktet ett skriftligt avtal som huvudmannen, eleven och arbetsplatsen har skrivit under. Det ska ange vilka delar av utbildningen som görs på arbetsplatsen och hur stora de är, och vilken lärare och vilken handledare som ansvarar för den delen.',
        'För gymnasial lärlingsutbildning gäller skollagen (16 kap. 11 a § och 19 kap. 10 a §). Där ska kontraktet också ange antal veckor och tider på arbetsplatsen varje termin, hur kostnader för skador som eleven kan orsaka fördelas, avtalstiden och när avtalet kan upphöra i förtid. Är eleven under 18 år ska vårdnadshavaren också skriva under.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Kontraktet ska vara upprättat senast den 15 februari för vårens ansökan och den 15 oktober för höstens, och eleven ska delta i utbildningen då. Kontraktet behöver inte skrivas om inför varje ansökan, om inget har ändrats och det gäller för flera perioder.'
      },
      nyckelord: ['utbildningskontrakt', 'kontrakt', 'avtal', '15 oktober', '15 februari', 'vårdnadshavare', 'underskrift', 'skollagen']
    },
    {
      ref: '3 b §', rubrik: 'F-skatt för arbetsplatsen',
      text: [
        'Är det en privat aktör – ett företag, en förening eller en privatperson – som tar emot eleven får bidrag bara lämnas för ersättning till den om den är godkänd för F-skatt.',
        'En utländsk mottagare ska i stället visa ett intyg eller en annan handling om att den i sitt hemland genomgår motsvarande kontroll av skatter och avgifter.'
      ],
      praktik: 'Kontrollera F-skatten för varje arbetsplats innan ni söker. I ansökan anger ni arbetsplatsens organisationsnummer för varje elev. Regeln för utländska mottagare fick sin nuvarande lydelse den 1 november 2025.',
      nyckelord: ['f-skatt', 'skatt', 'organisationsnummer', 'utländsk', 'arbetsplats', 'intyg']
    },
    {
      ref: '3 c–3 e §§', rubrik: 'När bidrag inte lämnas',
      text: ['Huvudmannen kan inte få bidrag om något av det här gäller:'],
      lista: [
        'Huvudmannen är i likvidation eller konkurs.',
        'Huvudmannen har skatte- eller avgiftsskulder eller andra skulder som har lämnats till Kronofogden och handläggs som allmänt mål.',
        'Huvudmannen har inte betalat ett återkrav från Skolverket i tid.',
        'Skolinspektionen har återkallat huvudmannens godkännande eller beslutat om verksamhetsförbud för verksamhet som bidraget gäller. Har beslutet upphävts kan bidrag lämnas.',
        'Kostnaden har redan fått ett annat statligt bidrag. Det kallas dubbelfinansiering.'
      ],
      nyckelord: ['konkurs', 'likvidation', 'kronofogden', 'skulder', 'återkrav', 'verksamhetsförbud', 'skolinspektionen', 'dubbelfinansiering']
    },
    {
      ref: '4 §', rubrik: 'Ansökan och beslut',
      text: [
        'En behörig företrädare för huvudmannen ansöker skriftligen hos Skolverket. Uppgifterna lämnas på heder och samvete. Av ansökan ska det framgå att det finns utbildningskontrakt för eleverna.',
        'Skolverket prövar ansökan och betalar ut bidraget. Beslutet kan innehålla villkor, och de står då i beslutet. Huvudmannen ska lämna de uppgifter och handlingar som Skolverket behöver.',
        'Enligt Skolverkets föreskrifter (SKOLFS 2017:95) ska ansökan komma in senast den 1 november för hösten och senast den 1 april för våren.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Ansökan görs i Skolverkets e-tjänst för statsbidrag. För hösten 2026 är den öppen 1 oktober–2 november 2026, och för våren 2027 1 mars–1 april 2027. Ni lämnar personnummer, skolenhet, årskurs och studievägskod för varje elev. Studievägskoden ska ha ett L på sjunde plats, eller ett A om eleven har lärlingsanställning. Det är samma kod som rapporteras till CSN.'
      },
      nyckelord: ['ansökan', 'e-tjänst', 'ansökningsperiod', '1 november', '1 april', 'studievägskod', 'csn', 'personnummer', 'heder och samvete']
    },
    {
      ref: '5–7 §§', rubrik: 'Uppföljning och redovisning',
      text: [
        'Skolverket följer upp hur bidraget används och utvärderar effekterna. Den som får bidraget ska delta i uppföljningen och lämna de uppgifter som Skolverket eller en annan ansvarig myndighet begär.',
        'Skolverket redovisar varje år till Regeringskansliet hur mycket som har betalats ut och hur pengarna används.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Huvudmannen redovisar varje vår föregående bidragsår, våren och hösten tillsammans. Bidragsåret 2026 redovisas 15 april–17 maj 2027. Ni anger hur mycket av varje del som har betalats till arbetsgivarna. Skolverket kan också granska med stickprov och begära in kontrakt, fakturor, kvitton och intyg om handledarutbildning.'
      },
      nyckelord: ['redovisning', 'uppföljning', 'stickprov', 'granskning', 'faktura', 'kvitto', 'underlag']
    },
    {
      ref: '7 a §', rubrik: 'Anmäl förändringar',
      text: ['Den som har sökt eller fått bidrag ska så snart som möjligt anmäla ändrade förhållanden till Skolverket, om de kan påverka rätten till bidraget eller hur stort det blir.'],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'En elev som deltog och hade ett giltigt kontrakt den 15 februari eller den 15 oktober ger bidrag för terminen, även om eleven sedan avbryter. Betalas ersättningen till arbetsgivaren inte ut, helt eller delvis, ska motsvarande belopp betalas tillbaka. Det tas upp i den årliga redovisningen.'
      },
      nyckelord: ['anmälan', 'förändring', 'avbrott', 'avbryter', 'slutar', 'byter arbetsplats']
    },
    {
      ref: '8–8 b §§', rubrik: 'Betala tillbaka (återkrav)',
      text: [
        'Bidraget ska betalas tillbaka om det har lämnats på felaktig grund eller med för högt belopp, om det inte har använts eller inte har använts till rätt sak, om huvudmannen inte har deltagit i uppföljningen, eller om villkoren i beslutet inte har följts.',
        'Skolverket ska då besluta om återkrav, alltså kräva tillbaka pengarna. Finns det synnerliga skäl – mycket starka skäl – får Skolverket avstå helt eller delvis.',
        'Ränta tas ut från den trettionde dagen efter beslutet om återkrav. Räntan är statens utlåningsränta plus två procentenheter. Även räntan kan efterges vid synnerliga skäl.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Det som inte har betalats vidare till arbetsgivarna ska betalas tillbaka efter beslutet om redovisningen. Huvudmannen får då en faktura. Bidrag som inte har betalats ut inom tre månader kan också krävas tillbaka.'
      },
      nyckelord: ['återkrav', 'återbetalning', 'betala tillbaka', 'ränta', 'synnerliga skäl', 'tre månader']
    },
    {
      ref: '8 c §', rubrik: 'Stopp för utbetalning',
      text: ['Skolverket ska helt eller delvis stoppa utbetalningen av ett beviljat bidrag om huvudmannen inte längre bedöms uppfylla villkoren, eller om det finns grund för återbetalning enligt 8 §. Beslutet gäller direkt.'],
      nyckelord: ['stopp', 'utbetalning', 'hinder', 'villkor']
    },
    {
      ref: '9 §', rubrik: 'Skolverkets föreskrifter',
      text: [
        'Skolverket får skriva mer detaljerade regler, så kallade föreskrifter. Två föreskrifter gäller bidraget.',
        'SKOLFS 2017:95 anger sista dag för ansökan, att eleven ska ha deltagit och haft kontrakt den 15 oktober eller den 15 februari, och att hela bidraget ska betalas till arbetsgivaren senast tre månader efter Skolverkets utbetalning. SKOLFS 2014:49 anger kraven på handledarutbildningen.'
      ],
      praktik: 'Läs förordningen tillsammans med föreskrifterna, Skolverkets aktuella sida för året och ert eget beslut.',
      nyckelord: ['föreskrifter', 'skolfs', '2017:95', '2014:49', 'tre månader', 'vidarebetalning']
    },
    {
      ref: '10 §', rubrik: 'Överklagande',
      text: ['Ett beslut enligt 8 c § om att stoppa en utbetalning kan överklagas till allmän förvaltningsdomstol. Andra beslut enligt förordningen får inte överklagas.'],
      nyckelord: ['överklaga', 'domstol', 'förvaltningsrätt']
    },
    {
      ref: 'Övergång', rubrik: 'Övergångsbestämmelser',
      text: [
        'Förordningen har ändrats flera gånger. Ändringen SFS 2024:1277 började gälla den 15 januari 2025. För bidrag som beviljades före dess gäller de äldre reglerna.',
        'Den senaste ändringen, SFS 2025:879, gäller F-skatt (3 b §) och började gälla den 1 november 2025.'
      ],
      nyckelord: ['övergång', 'äldre regler', '2024:1277', '2025:879', 'ikraftträdande']
    }
  ],

  kalkylatorer: [
    {
      id: 'belopp', modul: 'gymnasial-larlingsutbildning-belopp',
      flik: 'Räkna på bidrag', eyebrow: 'Bidrag enligt 3 §',
      rubrik: 'Vad blir', rubrikKursiv: 'beloppet?',
      ingress: 'Ange hur många lärlingar ni har och hur många av dem som har en utbildad handledare eller en lärlingsanställning. Räknaren visar maxbeloppet, vårens nivå 2026 eller en nivå ni väljer själva.',
      formel: { rubrik: 'Grundformeln', text: '(elever × del till arbetsgivare + elever med utbildad handledare × handledardel + elever med lärlingsanställning × anställningsdel) × antal terminer.' },
      resultatRubrik: 'Beräknat bidrag för valda terminer',
      falt: [
        { id: 'niva', typ: 'segment', etikett: 'Vilken nivå vill ni räkna med?', standard: 'max',
          alternativ: [
            { varde: 'max', etikett: 'Maxbelopp', hjalp: 'Högsta belopp per elev och termin: 18 750, 5 000 och 2 500 kr. Blir det fler sökande än pengarna räcker till blir beloppen lägre.' },
            { varde: 'vt26', etikett: 'Våren 2026', hjalp: 'Det Skolverket beviljade per elev för våren 2026: 11 720, 3 127 och 1 577 kr. Andra terminer kan bli annorlunda.' },
            { varde: 'egen', etikett: 'Egen nivå', hjalp: 'Alla tre delarna minskas lika mycket i procent, som förordningen kräver. Nivån är ett antagande.' }
          ] },
        { id: 'andel', typ: 'reglage', etikett: 'Andel av maxbeloppen', min: 1, max: 100, steg: 1, standard: 80, enhet: '%',
          visasOm: { falt: 'niva', ar: 'egen' }, hjalp: 'Skolverkets eget exempel är 80 %.' },
        { id: 'elever', typ: 'tal', etikett: 'Antal lärlingselever', min: 1, max: 100000, steg: 1, standard: 10,
          hjalp: 'Elever som deltar och har utbildningskontrakt den 15 februari (våren) eller den 15 oktober (hösten).' },
        { id: 'handledare', typ: 'tal', etikett: 'Varav elever med utbildad handledare', min: 0, max: 100000, steg: 1, standard: 4,
          hjalp: 'Handledaren ska ha slutfört en handledarutbildning som Skolverket godkänt innan ni söker.' },
        { id: 'anstallda', typ: 'tal', etikett: 'Varav elever med lärlingsanställning', min: 0, max: 100000, steg: 1, standard: 0,
          hjalp: 'Gymnasial lärlingsanställning enligt lag (2014:421). Gäller inte elever på introduktionsprogram.' },
        { id: 'terminer', typ: 'reglage', etikett: 'Antal terminer', min: 1, max: 8, steg: 1, standard: 1, enhet: 'terminer',
          hjalp: 'Förenklad modell: samma elever och samma nivå varje termin. Varje termin söks och beslutas för sig.' }
      ],
      exempel: [
        { etikett: 'En elev under ett läsår', varden: { niva: 'max', elever: 1, handledare: 1, anstallda: 1, terminer: 2 } },
        { etikett: 'Om 80 % beviljas', varden: { niva: 'egen', andel: 80, elever: 1, handledare: 1, anstallda: 1, terminer: 1 } },
        { etikett: 'Med vårens nivå 2026', varden: { niva: 'vt26', elever: 10, handledare: 4, anstallda: 0, terminer: 1 } }
      ],
      resultatNotis: 'Hela beloppet ska betalas vidare till arbetsgivarna. Huvudmannen får inte behålla någon del för egna kostnader.',
      forbehall: [
        { rubrik: 'Formel', text: 'Beloppen per termin är hälften av förordningens belopp per läsår, så som Skolverket söker och beviljar. Vid minskning multipliceras alla tre delarna med samma andel. Olika elever under olika terminer behöver räknas var för sig.' },
        { rubrik: 'Vad räknaren inte prövar', text: 'Räknaren prövar inte om eleverna uppfyller villkoren, om kontrakten skrevs i tid, om arbetsplatsen har F-skatt eller om handledarutbildningen är godkänd. Den vet inte heller hur mycket som beviljas en kommande termin. Det beror på hur många som söker.' }
      ],
      tabell: {
        rubrik: 'Högsta belopp per elev',
        kolumner: ['Del', 'Per läsår (3 §)', 'Per termin (Skolverket)', 'Beviljat våren 2026'],
        rader: [
          ['Till arbetsgivare', '37 500 kr', '18 750 kr', '11 720 kr'],
          ['Utbildad handledare', '10 000 kr', '5 000 kr', '3 127 kr'],
          ['Lärlingsanställning', '5 000 kr', '2 500 kr', '1 577 kr']
        ],
        fotnot: 'Våren 2026 beviljade Skolverket bidrag till 150 huvudmän, totalt 240 999 714 kr. Alla delar ska betalas vidare till arbetsgivaren.'
      }
    },
    {
      id: 'vidare', modul: 'gymnasial-larlingsutbildning-redovisning',
      flik: 'Betala vidare', eyebrow: 'Vidarebetalning och redovisning',
      rubrik: 'Har allt', rubrikKursiv: 'gått vidare?',
      ingress: 'Hela bidraget ska betalas till arbetsgivarna. Fyll i vad ni fick beviljat och vad ni har betalat ut. Räknaren visar hur mycket som i så fall ska tillbaka till Skolverket i redovisningen.',
      formel: { rubrik: 'Grundformeln', text: 'Att betala tillbaka = beviljat − utbetalt till arbetsgivaren, för varje del för sig.' },
      resultatRubrik: 'Att betala tillbaka till Skolverket',
      falt: [
        { id: 'beviljatArb', typ: 'tal', etikett: 'Beviljat · till arbetsgivare', min: 0, max: 1e10, steg: 'any', standard: 117200, enhet: 'kr',
          hjalp: 'Står i ert beslut. Redovisningen gäller hela bidragsåret, våren och hösten tillsammans.' },
        { id: 'utbetaltArb', typ: 'tal', etikett: 'Utbetalt · till arbetsgivare', min: 0, max: 1e10, steg: 'any', standard: 105480, enhet: 'kr' },
        { id: 'beviljatHand', typ: 'tal', etikett: 'Beviljat · utbildad handledare', min: 0, max: 1e10, steg: 'any', standard: 12508, enhet: 'kr' },
        { id: 'utbetaltHand', typ: 'tal', etikett: 'Utbetalt · utbildad handledare', min: 0, max: 1e10, steg: 'any', standard: 12508, enhet: 'kr' },
        { id: 'beviljatAnst', typ: 'tal', etikett: 'Beviljat · lärlingsanställning', min: 0, max: 1e10, steg: 'any', standard: 0, enhet: 'kr' },
        { id: 'utbetaltAnst', typ: 'tal', etikett: 'Utbetalt · lärlingsanställning', min: 0, max: 1e10, steg: 'any', standard: 0, enhet: 'kr' },
        { id: 'inomTreManader', typ: 'kryss', etikett: 'Allt har betalats till arbetsgivarna inom tre månader från Skolverkets utbetalning.', standard: true }
      ],
      exempel: [
        { etikett: 'Allt betalt vidare', varden: { beviljatArb: 117200, utbetaltArb: 117200, beviljatHand: 12508, utbetaltHand: 12508, beviljatAnst: 0, utbetaltAnst: 0 } },
        { etikett: 'Betalt för sent', varden: { utbetaltArb: 117200, inomTreManader: false } }
      ],
      resultatNotis: 'Det här är en kontrollräkning inför redovisningen. Skolverket beslutar om återkrav efter att ha granskat redovisningen.',
      forbehall: [
        { rubrik: 'Standardexemplet', text: 'Tio elever och fyra utbildade handledare med vårens nivå 2026. En arbetsgivare har inte fått sin del, till exempel efter att en elev avbröt. Den delen, 11 720 kr, ska då tillbaka.' },
        { rubrik: 'Varje del för sig', text: 'Redovisningen frågar efter varje del. Räknaren låter därför inte ett överskott i en del minska återbetalningen i en annan. Källorna säger inget om sådan kvittning – fråga Skolverket om det gäller er.' },
        { rubrik: 'Vad räknaren inte prövar', text: 'Räknaren tar inte med ränta, eventuella återkrav för sena utbetalningar eller andra skäl till återkrav enligt 8 §. Den kontrollerar inte heller att beloppen stämmer mot ert beslut.' }
      ]
    }
  ],

  process: [
    { rubrik: 'Skriv kontrakten i tid', text: 'Se till att varje lärlingselev har ett utbildningskontrakt senast den 15 februari (våren) eller den 15 oktober (hösten). Kontrollera att arbetsplatsen har F-skatt och att handledarens utbildning är slutförd.', ref: '3–3 b §§' },
    { rubrik: 'Ansök per termin', text: 'Sök i Skolverkets e-tjänst, senast den 1 april för våren och den 1 november för hösten. Ange studievägskod, skolenhet och arbetsplats för varje elev.', ref: '4 §' },
    { rubrik: 'Betala vidare', text: 'Skolverket betalar ut veckan efter beslutet. Betala hela bidraget till arbetsgivarna senast tre månader efter utbetalningen. Märk gärna fakturorna med elevens namn, termin och vilken del de gäller.', ref: '3 § och SKOLFS 2017:95' },
    { rubrik: 'Redovisa och betala tillbaka', text: 'Varje vår redovisar ni föregående bidragsår. Det som inte har betalats vidare ska tillbaka till Skolverket. Anmäl förändringar så snart som möjligt.', ref: '5–8 b §§' }
  ],

  underlagRubrik: 'Underlag att ha till hands',
  underlagIngress: 'Använd listan när ni förbereder ansökan och redovisningen. Markeringarna sparas inte – de försvinner när ni stänger sidan.',
  underlag: [
    'Undertecknade utbildningskontrakt med datum, ett för varje elev och arbetsplats.',
    'Personnummer, skolenhet, årskurs och studievägskod för varje elev.',
    'Organisationsnummer och kontroll av F-skatt för varje arbetsplats (intyg för utländska arbetsplatser).',
    'Intyg om slutförd handledarutbildning, med vilken utbildning, när och vilken handledare det gäller.',
    'Avtal om gymnasial lärlingsanställning för de elever som har en sådan.',
    'Fakturor, kvitton eller bokföringsordrar som visar vad som betalats till varje arbetsgivare och när.',
    'Vem som har behörighet i Skolverkets e-tjänst för statsbidrag.'
  ],

  kallor: [
    {
      titel: 'Förordning (2011:947) · Sveriges riksdag',
      url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-2011947-om-statsbidrag-for-gymnasial_sfs-2011-947/',
      beskrivning: 'Källan för vilka elever som ger bidrag, beloppen per läsår, minskning när pengarna inte räcker, F-skatt och återkrav. Paragrafhänvisningarna i guiden gäller den här förordningen.'
    },
    {
      titel: 'Statsbidrag för gymnasial lärlingsutbildning 2026 · Skolverket',
      url: 'https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-gymnasial-larlingsutbildning-2026',
      beskrivning: 'Belopp per termin, beviljade belopp för våren 2026, datum för ansökan och redovisning, studievägskoder, stickprov och frågor och svar.'
    },
    {
      titel: 'Statsbidrag för gymnasial lärlingsutbildning 2027 · Skolverket',
      url: 'https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-gymnasial-larlingsutbildning-2027',
      beskrivning: 'Ansökningsperioder 2027 och redovisning av bidragsåret 2027.'
    },
    {
      titel: 'Skolverkets föreskrifter SKOLFS 2017:95 och 2014:49',
      url: 'https://www.skolverket.se/styrning-och-ansvar/regler-och-ansvar/sok-forordningar-och-foreskrifter-skolfs#/dokument/2017:95/selected/2017:95',
      beskrivning: 'SKOLFS 2017:95 om sista ansökningsdag, kontraktsdatum och vidarebetalning inom tre månader. SKOLFS 2014:49 om kraven på handledarutbildning.'
    },
    {
      titel: 'Godkända apl-handledarutbildningar · Skolverket',
      url: 'https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/fragor-och-svar/godkanda-apl-handledarutbildningar',
      beskrivning: 'Vilka handledarutbildningar som ger rätt till tillägget för utbildad handledare.'
    },
    {
      titel: 'Skollagen (2010:800) · Sveriges riksdag',
      url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/skollag-2010800_sfs-2010-800/',
      beskrivning: 'Gymnasial lärlingsutbildning och utbildningskontrakt: 16 kap. 11–11 b §§ (gymnasieskolan) och 19 kap. 10–10 a §§ (anpassade gymnasieskolan).'
    },
    {
      titel: 'Lag (2014:421) om gymnasial lärlingsanställning · Sveriges riksdag',
      url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-2014421-om-gymnasial-larlingsanstallning_sfs-2014-421/',
      beskrivning: 'Reglerna för den anställning som ger tillägget för lärlingsanställning.'
    }
  ],

  forbehall: 'Guiden sammanfattar reglerna och visar hur beräkningarna går till. Räknarna kontrollerar inte rätten till bidrag, kontraktsdatum, F-skatt, handledarutbildning eller hur mycket Skolverket beviljar en viss termin. Använd Skolverkets aktuella sida, föreskrifterna och ert beslut när ni söker och redovisar. För bidrag som beviljades före den 15 januari 2025 kan äldre regler gälla.'
};
