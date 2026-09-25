/* EXEMPELDATA – endast för utveckling.
 * Fyller window.SB_GRANTS / window.SB_GUIDE bara om de riktiga datafilerna saknas eller är tomma.
 * Alla bidrag här är påhittade platshållare. */
(function () {
  'use strict';
  var KALLA = [{ titel: 'Skolverket – Statsbidrag (exempellänk)', url: 'https://www.skolverket.se/' }];
  var OSAKER = 'Exempeldata. Namn, datum och belopp är påhittade och ska ersättas med kontrollerade uppgifter.';

  var grants = [
    {
      id: 'exempel-lasning', namn: 'Exempelbidrag för stärkt läsning i grundskolan', kortnamn: 'Läsning i grundskolan',
      myndighet: 'Skolverket', giltighet: 'aktiv',
      sammanfattning: 'Pengar för att köpa böcker, bemanna skolbiblioteket och ge fler elever tid att läsa varje dag.',
      syfte: 'Fler elever ska läsa bra när de lämnar grundskolan. Bidraget ska stärka skolbiblioteken och läsundervisningen.',
      omraden: ['lasning', 'likvardighet'], skolformer: ['forskoleklass', 'grundskola', 'anpassad-grundskola'],
      sokande: { fristaende: 'ja', kommun: 'ja', region: 'nej', stat: 'ja', ovriga: 'nej' },
      sokandeNot: 'Både kommunala och fristående huvudmän kan söka. Huvudman betyder den som driver skolan.',
      typ: 'ansokan',
      perioder: [
        { typ: 'ansokan', fran: '2026-09-01', till: '2026-10-15', text: 'Ansökan är öppen i e-tjänsten.', ungefar: false },
        { typ: 'beslut', fran: '2026-12-15', till: null, text: 'Beslut meddelas.', ungefar: true },
        { typ: 'redovisning', fran: '2027-08-01', till: '2027-09-30', text: 'Redovisa hur pengarna använts.', ungefar: false }
      ],
      belopp: 'Fördelas efter antal elever. Exempel: ca 300 kr per elev.',
      villkor: ['Pengarna får inte ersätta ordinarie budget för läromedel.', 'Skolan måste ha ett skolbibliotek eller en plan för ett.'],
      hurDuGor: ['Ta reda på hur många elever ni har i de aktuella skolformerna.', 'Logga in i myndighetens e-tjänst.', 'Beskriv kort vad ni vill göra och vad det kostar.', 'Skicka in ansökan före sista dagen.'],
      redovisning: 'Senast 30 september året efter redovisar ni hur pengarna använts och vad det gav.',
      fallgropar: ['Pengar som inte används måste betalas tillbaka.', 'Glöm inte att spara kvitton.'],
      nyckelord: ['läsa', 'böcker', 'skolbibliotek', 'läslyft', 'läromedel'],
      kallor: KALLA, senastKontrollerad: '2026-09-20', osakerhet: OSAKER
    },
    {
      id: 'exempel-lararloner', namn: 'Exempelbidrag för höjda lärarlöner', kortnamn: 'Höjda lärarlöner',
      myndighet: 'Skolverket', giltighet: 'aktiv',
      sammanfattning: 'En summa är avsatt för varje huvudman så att lärare kan få högre lön. Ni begär ut pengarna.',
      syfte: 'Läraryrket ska bli mer attraktivt genom bättre löneutveckling.',
      omraden: ['lon-karriar'], skolformer: ['grundskola', 'gymnasieskola', 'komvux', 'fritidshem'],
      sokande: { fristaende: 'villkor', kommun: 'ja', region: 'ja', stat: 'nej', ovriga: 'nej' },
      sokandeNot: 'Fristående huvudmän kan rekvirera om de har anmält att de vill delta innan fristen.',
      typ: 'rekvisition',
      perioder: [
        { typ: 'rekvisition', fran: '2026-10-01', till: '2026-11-02', text: 'Begär ut pengarna.', ungefar: false },
        { typ: 'utbetalning', fran: '2026-12-10', till: null, text: 'Pengarna betalas ut.', ungefar: true },
        { typ: 'redovisning', fran: '2027-02-01', till: '2027-03-31', text: 'Redovisa lönehöjningarna.', ungefar: false }
      ],
      belopp: 'Beräknas efter antal lärare. Totalt ca 1 miljard kr (exempel).',
      villkor: ['Lönehöjningen ska ligga utöver den vanliga lönerevisionen.', 'Huvudmannen måste medfinansiera.'],
      hurDuGor: ['Kontrollera er summa i myndighetens lista.', 'Välj vilka lärare som ska få höjd lön.', 'Rekvirera i e-tjänsten.'],
      redovisning: 'Redovisa vilka lärare som fått höjd lön och med hur mycket.',
      fallgropar: ['Höjningen får inte ingå i den vanliga lönerevisionen.'],
      nyckelord: ['lön', 'lärarlön', 'lärarlönelyft', 'karriärtjänst'],
      kallor: KALLA, senastKontrollerad: '2026-09-18', osakerhet: OSAKER
    },
    {
      id: 'exempel-lovskola', namn: 'Exempelbidrag för lovskola', kortnamn: 'Lovskola',
      myndighet: 'Skolverket', giltighet: 'ny',
      sammanfattning: 'Stöd för att ordna undervisning på lov för elever som riskerar att inte nå godkänt.',
      syfte: 'Fler elever ska bli behöriga till gymnasiet.',
      omraden: ['utokad-tid', 'likvardighet'], skolformer: ['grundskola', 'anpassad-grundskola'],
      sokande: { fristaende: 'ja', kommun: 'ja', region: 'nej', stat: 'nej', ovriga: 'nej' },
      sokandeNot: 'Alla huvudmän för grundskola kan söka.',
      typ: 'ansokan',
      perioder: [
        { typ: 'ansokan', fran: '2027-01-15', till: '2027-02-28', text: 'Brukar vara öppen i början av året.', ungefar: true },
        { typ: 'redovisning', fran: null, till: '2027-11-30', text: 'Redovisa genomförd lovskola.', ungefar: true }
      ],
      belopp: 'Ersättning per elev och undervisningstimme (exempel).',
      villkor: ['Lovskolan ska ges av behöriga lärare.'],
      hurDuGor: ['Planera när lovskolan ska ske.', 'Uppskatta antal elever.', 'Ansök i e-tjänsten.'],
      redovisning: 'Antal elever och timmar redovisas efter sommaren.',
      fallgropar: ['Söker ni för fler elever än som deltar kan ni behöva betala tillbaka.'],
      nyckelord: ['sommarskola', 'lovskola', 'läxhjälp', 'extra undervisning'],
      kallor: KALLA, senastKontrollerad: '2026-09-10',
      osakerhet: OSAKER + ' Datumen är uppskattade utifrån tidigare år.'
    },
    {
      id: 'exempel-yrkesvux', namn: 'Exempelbidrag för regional yrkesutbildning för vuxna', kortnamn: 'Yrkesvux',
      myndighet: 'Skolverket', giltighet: 'aktiv',
      sammanfattning: 'Pengar till kommuner som tillsammans ordnar yrkesutbildning för vuxna i regionen.',
      syfte: 'Vuxna ska kunna utbilda sig till yrken där det saknas arbetskraft.',
      omraden: ['yrke'], skolformer: ['komvux'],
      sokande: { fristaende: 'nej', kommun: 'ja', region: 'villkor', stat: 'nej', ovriga: 'nej' },
      sokandeNot: 'Bara kommuner som samarbetar kan söka. Fristående utbildningsföretag kan bli anlitade av kommunen men kan inte söka själva.',
      typ: 'ansokan',
      perioder: [
        { typ: 'ansokan', fran: '2026-08-15', till: '2026-09-15', text: 'Ansökan för nästa år.', ungefar: false },
        { typ: 'redovisning', fran: '2027-01-15', till: '2027-02-28', text: 'Redovisa platser och kostnader.', ungefar: false }
      ],
      belopp: 'Bidrag per utbildningsplats (exempel).',
      villkor: ['Kommunerna måste samarbeta i en region.', 'Kommunen ska själv bekosta en del av platserna.'],
      hurDuGor: ['Kom överens med grannkommunerna.', 'En kommun ansöker för hela samarbetet.'],
      redovisning: 'Redovisa antal platser och deltagare.',
      fallgropar: ['Platser som inte fylls kan leda till återkrav.'],
      nyckelord: ['vux', 'yrkesutbildning', 'komvux', 'lärling'],
      kallor: KALLA, senastKontrollerad: '2026-09-01', osakerhet: OSAKER
    },
    {
      id: 'exempel-kultur', namn: 'Exempelbidrag för kultur i skolan', kortnamn: 'Kultur i skolan',
      myndighet: 'Kulturrådet', giltighet: 'aktiv',
      sammanfattning: 'Pengar för att bjuda in konstnärer, författare och musiker så att eleverna får skapa själva.',
      syfte: 'Alla elever ska få möta professionell kultur och skapa eget.',
      omraden: ['kultur'], skolformer: ['forskoleklass', 'grundskola', 'anpassad-grundskola'],
      sokande: { fristaende: 'ja', kommun: 'ja', region: 'nej', stat: 'nej', ovriga: 'nej' },
      sokandeNot: 'Både kommunala och fristående huvudmän kan söka.',
      typ: 'ansokan',
      perioder: [
        { typ: 'ansokan', fran: '2027-01-10', till: '2027-02-12', text: 'Ansökan för nästa läsår.', ungefar: false },
        { typ: 'beslut', fran: '2027-05-15', till: null, text: 'Beslut.', ungefar: true }
      ],
      belopp: 'Belopp beror på antal elever (exempel).',
      villkor: ['Eleverna ska vara med och skapa, inte bara titta på.'],
      hurDuGor: ['Prata med lärare och elever om vad ni vill göra.', 'Kontakta kulturskapare.', 'Ansök hos Kulturrådet.'],
      redovisning: 'Kort redovisning efter läsåret.',
      fallgropar: [],
      nyckelord: ['skapande skola', 'konst', 'musik', 'teater', 'dans'],
      kallor: [{ titel: 'Kulturrådet (exempellänk)', url: 'https://www.kulturradet.se/' }],
      senastKontrollerad: '2026-09-12', osakerhet: OSAKER
    },
    {
      id: 'exempel-elevhalsa', namn: 'Exempelbidrag för stärkt elevhälsa', kortnamn: 'Stärkt elevhälsa',
      myndighet: 'SPSM', giltighet: 'ny',
      sammanfattning: 'Pengar som betalas ut utan ansökan för att anställa fler i elevhälsan, som kuratorer och specialpedagoger.',
      syfte: 'Elever som behöver stöd ska få det tidigt.',
      omraden: ['stod', 'personal'], skolformer: ['grundskola', 'gymnasieskola', 'specialskola'],
      sokande: { fristaende: 'via-kommun', kommun: 'ja', region: 'nej', stat: 'nej', ovriga: 'nej' },
      sokandeNot: 'Pengarna går till kommunen. Fristående skolor får del av dem via kommunens bidrag per elev (grundbeloppet).',
      typ: 'automatisk',
      perioder: [{ typ: 'utbetalning', fran: '2026-12-01', till: '2026-12-01', text: 'Utbetalning till kommunerna.', ungefar: true }],
      belopp: 'Fördelas efter antal elever i kommunen (exempel).',
      villkor: ['Pengarna ska gå till elevhälsan.'],
      hurDuGor: ['Ni behöver inte ansöka.', 'Fråga kommunen hur pengarna påverkar grundbeloppet.'],
      redovisning: 'Ingen särskild redovisning för fristående skolor.',
      fallgropar: ['Det är lätt att missa att pengarna finns med i grundbeloppet.'],
      nyckelord: ['kurator', 'skolsköterska', 'specialpedagog', 'elevhälsoteam'],
      kallor: KALLA, senastKontrollerad: '2026-09-15', osakerhet: OSAKER
    }
  ];

  var guide = {
    steg: [
      { rubrik: 'Hitta rätt bidrag', text: 'Börja med vad skolan behöver. Leta sedan efter bidrag som passar.', detaljer: ['Använd Kompassen på den här sidan.', 'Läs vem som får söka.'] },
      { rubrik: 'Kolla datumen', text: 'De flesta bidrag har en period då ni kan söka. Missar ni den får ni vänta ett år.', detaljer: ['Skriv in sista dagen i kalendern.'] },
      { rubrik: 'Förbered underlaget', text: 'Ta fram elevantal, budget och en kort plan.', detaljer: ['Be ekonomen om siffror i god tid.'] },
      { rubrik: 'Ansök eller rekvirera', text: 'Logga in i myndighetens e-tjänst och skicka in.', detaljer: ['Den som skickar in måste ha rätt att företräda huvudmannen.'] },
      { rubrik: 'Använd och redovisa', text: 'Använd pengarna till det ni sökt för och spara underlag.', detaljer: ['Redovisa i tid, annars kan ni behöva betala tillbaka.'] }
    ],
    fristaende: [
      { rubrik: 'Ni söker ofta själva', text: 'Många statsbidrag kan sökas direkt av fristående huvudmän.' },
      { rubrik: 'Ibland går pengarna via kommunen', text: 'Vissa bidrag går till kommunen och når er via grundbeloppet.' },
      { rubrik: 'Anmälan kan krävas i förväg', text: 'För en del bidrag måste ni anmäla intresse långt innan pengarna kan sökas.' }
    ],
    ordlista: [
      { term: 'Huvudman', forklaring: 'Den som driver skolan, till exempel en kommun eller ett skolföretag.' },
      { term: 'Rekvisition', forklaring: 'När en summa redan är avsatt åt er och ni begär att få ut den.' },
      { term: 'Återkrav', forklaring: 'När myndigheten kräver tillbaka pengar som inte använts rätt.' },
      { term: 'Grundbelopp', forklaring: 'Pengarna som kommunen betalar till fristående skolor per elev.' },
      { term: 'Redovisning', forklaring: 'När ni berättar för myndigheten vad pengarna använts till.' },
      { term: 'Statsbidrag', forklaring: 'Pengar från staten som skolor kan få för ett visst syfte.' },
      { term: 'E-tjänst', forklaring: 'Webbplatsen där ni loggar in och ansöker.' },
      { term: 'Medfinansiering', forklaring: 'Att ni själva betalar en del av kostnaden.' }
    ],
    faq: [
      { fraga: 'Kan en fristående skola söka statsbidrag?', svar: 'Ja, de flesta. Men vissa bidrag går bara till kommuner. Kolla "Vem kan söka" för varje bidrag.' },
      { fraga: 'Vad händer om vi missar sista dagen?', svar: 'Oftast får ni vänta till nästa år. Sen ansökan brukar inte godkännas.' },
      { fraga: 'Måste vi betala tillbaka pengar?', svar: 'Ja, om pengarna inte används som det var tänkt eller om ni inte redovisar i tid.' },
      { fraga: 'Vad är skillnaden mellan ansökan och rekvisition?', svar: 'Vid ansökan bedöms ni. Vid rekvisition är pengarna redan avsatta och ni begär ut dem.' },
      { fraga: 'Vem på skolan brukar söka?', svar: 'Ofta rektor eller en ekonom, men den som skickar in måste ha rätt att företräda huvudmannen.' }
    ],
    kalenderNot: 'Många bidrag söks under hösten eller i början av året. Redovisning sker oftast året efter. (Exempeltext.)',
    kallor: KALLA,
    senastKontrollerad: '2026-09-20'
  };

  window.SB_SAMPLE = { grants: false, guide: false };
  if (!Array.isArray(window.SB_GRANTS) || window.SB_GRANTS.length === 0) {
    window.SB_GRANTS = grants;
    window.SB_SAMPLE.grants = true;
  }
  if (!window.SB_GUIDE || typeof window.SB_GUIDE !== 'object') {
    window.SB_GUIDE = guide;
    window.SB_SAMPLE.guide = true;
  }
})();
