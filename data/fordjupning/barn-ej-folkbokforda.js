/* Fördjupning: Statsbidrag för barn som inte är folkbokförda i Sverige – förordning (2011:538).
 * Innehållet är stämt mot förordningen (ändrad t.o.m. SFS 2022:1622), Skolverkets föreskrifter SKOLFS 2011:143
 * (ändrade genom SKOLFS 2019:25), skollagen 29 kap. 2–3 och 6 §§ och Skolverkets sida för 2026
 * (senast uppdaterad 5 juni 2026). Ingen räknare: bidraget motsvarar kommunens faktiska kostnad per barn.
 * Schema: se FORDJUPNING.md. Klartext, inte citat – paragrafhänvisningarna gäller förordningen. */
window.SB_FORDJUPNING = window.SB_FORDJUPNING || {};
window.SB_FORDJUPNING['barn-ej-folkbokforda'] = {
  id: 'barn-ej-folkbokforda',
  rubrik: 'Barn som inte är folkbokförda',
  rubrikKursiv: 'i klartext.',
  ingress: 'Vissa barn som inte är folkbokförda i Sverige har ändå rätt till förskola och skola här, till exempel barn till EU-medborgare som arbetar här eller till diplomater. Hemkommunen kan få tillbaka kostnaden från staten. Här står reglerna på vanlig svenska.',
  kontrollerad: '2026-10-01',
  forordning: {
    sfs: '2011:538',
    namn: 'Förordning (2011:538) om utbildning och statsbidrag för vissa barn och ungdomar som inte är folkbokförda i Sverige',
    lydelse: 'ändrad t.o.m. SFS 2022:1622',
    url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-2011538-om-utbildning-och-statsbidrag_sfs-2011-538/'
  },

  snabbfaktaRubrik: 'Tre saker att känna till först',
  snabbfakta: [
    { rubrik: 'Bara hemkommunen söker', text: 'Det gäller även när barnet går i en fristående skola eller i en annan kommun. Skolor och kommunalförbund kan inte söka själva.' },
    { rubrik: 'Kommunen beslutar först', text: 'Kommunen ska först ha prövat barnets rätt till utbildning och tagit emot barnet. Först då kan Skolverket pröva bidraget.' },
    { rubrik: 'Fasta sista dagar', text: 'Senast 15 april för våren och senast 15 oktober för hösten. Sena ansökningar avvisas.' }
  ],
  snabbfaktaNot: 'Bidraget motsvarar kommunens kostnad för barnet. Är kostnaden oskäligt hög jämfört med andra barn minskas bidraget.',

  begreppRubrik: 'Ord som återkommer',
  begrepp: [
    { term: 'Folkbokförd', forklaring: 'Registrerad som boende i Sverige hos Skatteverket.' },
    { term: 'Hemkommun', forklaring: 'För ett barn som inte är folkbokfört: den kommun där barnet stadigvarande bor. Saknas en sådan är det kommunen där barnet för tillfället uppehåller sig.' },
    { term: 'Uppehållsrätt', forklaring: 'Rätten för EU-, EES- och schweiziska medborgare och deras familjer att bo i Sverige, till exempel för att arbeta eller studera.' },
    { term: 'Beskickning', forklaring: 'Ett annat lands ambassad eller lönade konsulat i Sverige.' },
    { term: 'Familjemedlem', forklaring: 'Samma betydelse som i utlänningslagen, 3 a kap. 2 §. Där räknas bland annat make eller sambo och barn under 21 år till en EES-medborgare.' },
    { term: 'Interkommunal ersättning', forklaring: 'Det hemkommunen betalar när barnet går i en annan kommuns, en regions eller statens skola.' }
  ],

  sektioner: {
    regler: {
      rubrik: 'Från paragraf', rubrikKursiv: 'till praktik.',
      ingress: 'Rubrikerna följer förordningen. Öppna det avsnitt ni behöver, eller sök på till exempel ”EU”, ”ambassad” eller ”15 oktober”. Varje avsnitt visar vilken paragraf det gäller.'
    },
    praktik: {
      rubrik: 'Så används', rubrikKursiv: 'reglerna.',
      ingress: 'Först prövar kommunen barnets rätt till utbildning och tar emot barnet. Sedan ansöker kommunen hos Skolverket för varje termin, med de barn och kostnader det gäller.'
    }
  },

  paragrafer: [
    {
      ref: '1 §', rubrik: 'Vilka barn det gäller',
      text: [
        'Förordningen gäller barn och ungdomar som inte är folkbokförda i Sverige men som enligt skollagen ändå ska räknas som bosatta här. Det gäller två grupper:'
      ],
      lista: [
        'Barn som har rätt till utbildning till följd av EU-rätten, EES-avtalet eller avtalet med Schweiz om fri rörlighet.',
        'Barn som är familjemedlemmar till någon som tillhör en främmande makts beskickning eller lönade konsulat, eller till vissa internationella organisationer i Sverige.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Det går inte att få bidrag för barn som har rätt till utbildning på någon annan grund, till exempel asylsökande eller papperslösa barn. Papperslösa barn har ett eget statsbidrag.'
      },
      nyckelord: ['eu-medborgare', 'ees', 'schweiz', 'fri rörlighet', 'diplomat', 'ambassad', 'konsulat', 'internationell organisation', 'ej folkbokförd']
    },
    {
      ref: '2–3 §§', rubrik: 'Rätt till utbildning efter ansökan till hemkommunen',
      text: [
        'Barnen ska erbjudas utbildning efter ansökan till hemkommunen. Hemkommunen ansvarar för mottagandet.',
        'Barn med rätt enligt EU-rätten ska erbjudas utbildning och annan pedagogisk verksamhet på samma villkor som barn som bor i Sverige. Det omfattar till exempel förskola, fritidshem och gymnasieskola.',
        'Barn till personal på beskickningar och vissa internationella organisationer ska erbjudas förskoleklass, grundskola, anpassad grundskola, specialskola och sameskola på samma villkor som andra barn.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Det är kommunen som avgör om barnet uppfyller kriterierna. Kommunen ska först ha utrett om barnet har en relevant uppehållsrätt, erbjudit utbildning och beslutat att ta emot barnet. Först då kan Skolverket pröva ansökan om bidrag. Behöver kommunen stöd i frågan om uppehållsrätt hänvisar Skolverket till Migrationsverket och Skatteverket.'
      },
      nyckelord: ['hemkommun', 'ansökan', 'mottagande', 'uppehållsrätt', 'beslut', 'migrationsverket', 'skatteverket', 'förskola', 'fritidshem']
    },
    {
      ref: '2 a §', rubrik: 'Storbritanniens utträde ur EU',
      text: ['Paragrafen gav barn med anknytning till Storbritannien fortsatt rätt till utbildning under högst fjorton månader, om Storbritannien lämnade EU utan utträdesavtal.'],
      praktik: 'Storbritannien lämnade EU med ett utträdesavtal. Paragrafen har därför ingen praktisk betydelse i dag.',
      nyckelord: ['storbritannien', 'brexit', 'utträde']
    },
    {
      ref: '4 §', rubrik: 'Vilka verksamheter som ger bidrag',
      text: ['Bidrag kan ges för barn som har tagits emot i:'],
      lista: [
        'förskola, eller pedagogisk omsorg i stället för förskola,',
        'förskoleklass,',
        'fritidshem, eller pedagogisk omsorg i stället för fritidshem,',
        'grundskola, anpassad grundskola, specialskola eller sameskola,',
        'gymnasieskola eller anpassad gymnasieskola,',
        'internationell skola vars huvudman har det godkännande, medgivande eller den förklaring om bidragsrätt som skollagen kräver.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'För barn med rätt enligt EU-rätten gäller alla verksamheter i listan. För barn till beskickningspersonal och vissa internationella organisationer gäller förskoleklass, grundskola, anpassad grundskola, specialskola, sameskola och internationell skola på grundskolenivå. Förskoleklassen upphör som egen skolform den 1 juli 2028. Därför saknas den redan i skollagens nya text, men fram till dess gäller äldre regler.'
      },
      nyckelord: ['förskola', 'pedagogisk omsorg', 'förskoleklass', 'fritidshem', 'grundskola', 'gymnasieskola', 'internationell skola', 'skolformer']
    },
    {
      ref: '5–6 §§', rubrik: 'Hur stort bidraget är',
      text: [
        'Bidraget motsvarar hemkommunens kostnad för barnets utbildning.',
        'Går barnet i en annan kommuns, en regions eller statens verksamhet är kostnaden den ersättning hemkommunen betalar dit. Går barnet i en fristående verksamhet är kostnaden det bidrag hemkommunen betalar till huvudmannen.',
        'Om kostnaden är oskäligt hög jämfört med vad kommunen betalar för andra barn i motsvarande utbildning minskas bidraget med det som överstiger.'
      ],
      praktik: {
        rubrik: 'Skolverkets föreskrifter',
        text: 'Kostnader för barn i fristående eller internationella skolor ska minskas med den momsersättning som ingår i beloppen.'
      },
      nyckelord: ['belopp', 'kostnad', 'interkommunal ersättning', 'bidrag till fristående', 'grundbelopp', 'oskäligt', 'moms', 'momsersättning']
    },
    {
      ref: '7 §', rubrik: 'Ansökan, beslut och utbetalning',
      text: [
        'Kommunen ansöker hos Skolverket, som beslutar och betalar ut bidraget till barnets hemkommun.'
      ],
      praktik: {
        rubrik: 'Skolverkets föreskrifter och datum',
        text: 'Ansökan ska ha kommit in senast den 15 april för våren och den 15 oktober för hösten. Den görs i Skolverkets e-tjänst. I ansökan anger kommunen vilka barn den gäller och kommunens kostnader för dem. Sena ansökningar avvisas. Skolverket planerar att besluta inom sex veckor och betalar ut i juni för våren och i december för hösten. Ett kommunalförbund kan inte söka, eftersom bidraget är knutet till barnets hemkommun.'
      },
      nyckelord: ['ansökan', '15 april', '15 oktober', 'e-tjänst', 'avvisas', 'utbetalning', 'juni', 'december', 'kommunalförbund', 'sex veckor']
    },
    {
      ref: '8 §', rubrik: 'Lämna uppgifter',
      text: ['Kommunen ska lämna de uppgifter Skolverket behöver för att bedöma rätten till bidrag.'],
      praktik: 'Det kan till exempel vara kommunens beslut om mottagande och underlag om familjemedlemmens uppehållsrätt eller anställning vid en beskickning.',
      nyckelord: ['uppgiftsskyldighet', 'underlag', 'kontroll']
    },
    {
      ref: '9 §', rubrik: 'Betala tillbaka (återkrav)',
      text: ['Kommunen ska betala tillbaka bidraget om något av följande gäller:'],
      lista: [
        'Kommunen har lämnat felaktiga eller ofullständiga uppgifter, eller på annat sätt orsakat att bidraget betalats ut felaktigt eller med för högt belopp.',
        'Bidraget har av annat skäl betalats ut felaktigt eller med för högt belopp, och kommunen borde ha förstått det.'
      ],
      praktik: {
        rubrik: 'Återkrav',
        text: 'Skolverket ska då kräva tillbaka bidraget helt eller delvis. Om det finns särskilda skäl får Skolverket avstå.'
      },
      nyckelord: ['återkrav', 'återbetalning', 'betala tillbaka', 'felaktiga uppgifter']
    },
    {
      ref: '10–11 §§', rubrik: 'Föreskrifter och överklagande',
      text: [
        'Skolverket får skriva de föreskrifter som behövs. Det har Skolverket gjort i SKOLFS 2011:143, som bland annat anger sista ansökningsdagar.',
        'Skolverkets beslut enligt förordningen får inte överklagas.'
      ],
      nyckelord: ['föreskrifter', 'skolfs', 'överklaga', 'överklagande']
    }
  ],

  process: [
    { rubrik: 'Pröva barnets rätt till utbildning', text: 'Familjen ansöker hos hemkommunen. Kommunen utreder om barnet har rätt till utbildning, till exempel genom en familjemedlems arbete i Sverige eller anställning vid en ambassad, och beslutar om mottagande.', ref: '2–3 §§' },
    { rubrik: 'Håll ordning på kostnaderna', text: 'Notera kostnaden per barn och termin: egen verksamhet, interkommunal ersättning eller bidrag till fristående verksamhet. Dra av momsersättningen för fristående och internationella skolor.', ref: '5–6 §§' },
    { rubrik: 'Ansök för terminen', text: 'Ansök i Skolverkets e-tjänst senast 15 april för våren och 15 oktober för hösten. Ansökan för hösten 2026 är öppen 15 september–15 oktober 2026.', ref: '7 §' },
    { rubrik: 'Beslut och utbetalning', text: 'Skolverket planerar att besluta inom sex veckor efter att ansökan stängt. Pengarna betalas ut i juni för våren och i december för hösten.', ref: '7 §' },
    { rubrik: 'Spara underlagen', text: 'Spara kommunens beslut och underlaget om rätten till utbildning. Skolverket kan begära uppgifter och kräva tillbaka felaktigt utbetalt bidrag.', ref: '8–9 §§' }
  ],

  underlagRubrik: 'Underlag att ha till hands',
  underlagIngress: 'Använd listan när ni förbereder ansökan. Markeringarna sparas inte – de försvinner när ni stänger sidan.',
  underlag: [
    'Kommunens beslut om att barnet har rätt till utbildning och har tagits emot.',
    'Underlag om grunden: familjemedlemmens arbete, studier, arbetssökande eller egen försörjning och sjukförsäkring, eller anställning vid en beskickning eller internationell organisation.',
    'Uppgift om att barnet inte är folkbokfört i Sverige.',
    'Vilken verksamhet barnet går i och för vilken period.',
    'Kostnad per barn: egen kostnad, interkommunal ersättning eller bidrag till fristående huvudman, med momsersättningen avdragen.',
    'Behörighet i Skolverkets e-tjänst för statsbidrag.'
  ],

  kallor: [
    {
      titel: 'Förordning (2011:538) · Sveriges riksdag',
      url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-2011538-om-utbildning-och-statsbidrag_sfs-2011-538/',
      beskrivning: 'Källan för vilka barn som omfattas, vilka verksamheter som ger bidrag, beloppet och återkrav. Paragrafhänvisningarna i guiden gäller den här förordningen.'
    },
    {
      titel: 'Statsbidrag för barn som inte är folkbokförda i Sverige 2026 · Skolverket',
      url: 'https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-barn-som-inte-ar-folkbokforda-i-sverige-2026',
      beskrivning: 'Vem som kan söka, villkoren för barn från EU/EES och från andra länder, datum, beslut och utbetalning.'
    },
    {
      titel: 'SKOLFS 2011:143 · Skolverket',
      url: 'https://skolfs.skolverket.se/api/document/GRUNDFORFATTNING/2011:143/pdf',
      beskrivning: 'Skolverkets föreskrifter om ansökan och utbetalning, bland annat momsavdraget för fristående och internationella skolor.'
    },
    {
      titel: 'SKOLFS 2019:25 · Skolverket',
      url: 'https://skolfs.skolverket.se/api/document/ANDRINGSFORFATTNING/2019:25/pdf',
      beskrivning: 'Ändringen som gör 15 april och 15 oktober till sista ansökningsdagar och kräver ansökan i e-tjänsten.'
    },
    {
      titel: 'Skollag (2010:800) · Sveriges riksdag',
      url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/skollag-2010800_sfs-2010-800/',
      beskrivning: '29 kap. 2–3 §§ om vem som räknas som bosatt och 6 § om hemkommun.'
    }
  ],

  forbehall: 'Guiden sammanfattar reglerna. Den prövar inte om ett barn har rätt till utbildning eller om en kostnad är skälig. Datum gäller 2026. Använd Skolverkets aktuella anvisningar när ni ansöker.'
};
