/* Fördjupning: Statsbidrag för personalkostnader för skolsociala team – förordning (2023:179).
 * Innehållet är stämt mot förordningen (omtryck och ändring SFS 2023:946, ingen senare ändring enligt
 * riksdagen.se och lagen.nu 1 oktober 2026), Skolverkets sida för 2026 (senast uppdaterad 23 juli 2026) med
 * beslutsbilagor från 2 april 2026, Socialstyrelsens anvisningar för 2026 (14 april 2026), Skolverkets
 * regleringsbrev för 2026 och regeringens pressmeddelande 19 december 2025.
 * Schema: se FORDJUPNING.md. Klartext, inte citat – paragrafhänvisningarna gäller förordningen. */
window.SB_FORDJUPNING = window.SB_FORDJUPNING || {};
window.SB_FORDJUPNING['skolsociala-team'] = {
  id: 'skolsociala-team',
  rubrik: 'Skolsociala team',
  rubrikKursiv: 'i klartext.',
  ingress: 'Vem ska ingå i teamet, vilken utbildning krävs och hur delas pengarna mellan skolan och socialtjänsten? Här står reglerna på vanlig svenska. Ni kan också räkna på skolans del av bidraget.',
  kontrollerad: '2026-10-01',
  forordning: {
    sfs: '2023:179',
    namn: 'Förordning (2023:179) om statsbidrag för personalkostnader för skolsociala team',
    lydelse: 'omtryck SFS 2023:946',
    url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-2023179-om-statsbidrag-for_sfs-2023-179/'
  },

  snabbfaktaRubrik: 'Tre saker att hålla isär',
  snabbfakta: [
    { rubrik: 'Skolans del – Skolverket', text: 'Huvudmannen för skolan söker hos Skolverket och kan få hälften av kostnaden för skolpersonalen i teamet.' },
    { rubrik: 'Socialtjänstens del – Socialstyrelsen', text: 'Kommunen begär ut pengar från Socialstyrelsen för socialtjänstens personal, efter Skolverkets beslut. Den får också högst hälften av kostnaden.' },
    { rubrik: 'Minst en heltid från vardera', text: 'Teamet ska ha minst en årsarbetskraft från skolan och minst en från socialtjänsten, med rätt utbildning.' }
  ],
  snabbfaktaNot: 'En fristående skola behöver alltså samarbeta med socialtjänsten i den kommun där teamet ska arbeta.',

  begreppRubrik: 'Ord som återkommer',
  begrepp: [
    { term: 'Huvudman', forklaring: 'Den som driver skolan och ansvarar för utbildningen, till exempel en kommun eller en fristående organisation.' },
    { term: 'Skolsocialt team', forklaring: 'En grupp med personal från skolan och socialtjänsten som arbetar tillsammans för trygghet, studiero och ökad närvaro i skolan.' },
    { term: 'Socialtjänsten', forklaring: 'Kommunens verksamhet för socialt stöd, till exempel för barn och familjer. Den styrs av socialnämnden.' },
    { term: 'Årsarbetskraft', forklaring: 'En heltidstjänst. Två personer på 50 % är tillsammans en årsarbetskraft.' },
    { term: 'Rekvisition', forklaring: 'När en mottagare begär att få ut pengar som den har rätt till, utan att först ansöka i konkurrens med andra.' },
    { term: 'Bidragsår', forklaring: 'Ett kalenderår, 1 januari–31 december.' }
  ],

  sektioner: {
    regler: {
      rubrik: 'Från paragraf', rubrikKursiv: 'till praktik.',
      ingress: 'Rubrikerna följer förordningen. Öppna det avsnitt ni behöver, eller sök på till exempel ”socionom”, ”gymnasieskola” eller ”återkrav”. Varje avsnitt visar vilken paragraf det gäller.'
    },
    praktik: {
      rubrik: 'Så används', rubrikKursiv: 'reglerna.',
      ingress: 'Skolan söker i början av året. Efter Skolverkets beslut begär kommunen ut socialtjänstens del från Socialstyrelsen. Båda redovisar året efter, till var sin myndighet.'
    }
  },

  paragrafer: [
    {
      ref: '1 §', rubrik: 'Vad ett skolsocialt team är',
      text: [
        'Förordningen gäller bidrag för personalkostnader i skolsociala team i grundskolan och gymnasieskolan.',
        'Ett skolsocialt team är en grupp med personal från skolan och socialtjänsten som samarbetar för trygghet och studiero och för att eleverna ska vara mer närvarande i skolan.',
        'Genom teamen får socialtjänsten möjlighet att tidigt bygga förtroende och arbeta förebyggande.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Ett team kan arbeta mot både grundskolan och gymnasieskolan, eller så kan ni ha ett team för varje skolform. Ett team som arbetar mot båda prioriteras som grundskola om Skolverket måste göra ett urval. Regeringens stöduppdrag till Skolverket och Socialstyrelsen omfattar även anpassade grundskolan och anpassade gymnasieskolan, men förordningen nämner bara grundskolan och gymnasieskolan.'
      },
      nyckelord: ['definition', 'samverkan', 'socialtjänst', 'trygghet', 'studiero', 'närvaro', 'frånvaro', 'hemmasittare', 'förebyggande', 'grundskola', 'gymnasieskola', 'anpassad skola']
    },
    {
      ref: '2 §', rubrik: 'Bidragsåret',
      text: [
        'Bidraget ges för ett kalenderår i taget och bara i den mån det finns pengar.',
        'Att ni får bidrag ett år är alltså inget löfte om bidrag nästa år.'
      ],
      praktik: 'Regeringen har aviserat att satsningen ska fortsätta till och med 2028, med 400 miljoner kronor per år. För 2026 gick 200 miljoner via Skolverket och 200 miljoner via Socialstyrelsen.',
      nyckelord: ['bidragsår', 'kalenderår', '2028', '400 miljoner', 'nästa år']
    },
    {
      ref: '3 §', rubrik: 'Inte dubbla bidrag',
      text: [
        'Bidrag ges inte för insatser som redan får bidrag på annat sätt.',
        'Bidrag ges inte heller för uppdragsutbildning, alltså utbildning som en huvudman säljer till någon annan enligt förordningen (1992:395).'
      ],
      praktik: 'Samma tjänst kan alltså inte betalas med både det här bidraget och till exempel bidraget för personalförstärkning.',
      nyckelord: ['dubbelfinansiering', 'andra statsbidrag', 'uppdragsutbildning', 'personalförstärkning']
    },
    {
      ref: '4 §', rubrik: 'Vem som ska ingå i teamet',
      text: ['En huvudman för grundskola eller gymnasieskola kan få bidrag för kostnader för skolpersonal i skolsociala team, om'],
      lista: [
        'teamet har minst två årsarbetskrafter, och',
        'minst en årsarbetskraft är skolpersonal med relevant utbildning inom psykosocialt arbete, och minst en årsarbetskraft är personal från socialtjänsten med socionomexamen eller annan relevant examen på minst grundnivå i högskolan.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Villkoret är uppfyllt om skolpersonalen tillsammans har minst 100 % tjänstgöringsgrad och socialtjänstens personal tillsammans minst 100 %, under hela den period ansökan gäller. Tiden får delas på flera personer på deltid. För skolpersonalen krävs ingen högskoleutbildning. Skolverket räknar till exempel socionom-, socialpedagog- och behandlingspedagogutbildning som relevanta, liksom utbildningar och kurser i bland annat socialt arbete, psykologi, beteendevetenskap, kriminologi, KBT, motiverande samtal och familjeterapi. För socialtjänstens personal räknas en examen på 180 högskolepoäng, till exempel socialpedagogexamen eller en kandidatexamen i psykologi, socialpsykologi, sociologi eller behandlingspedagogik. I ansökan intygar ni att all personal uppfyller kraven.'
      },
      nyckelord: ['villkor', 'två årsarbetskrafter', 'skolpersonal', 'kurator', 'socionom', 'behandlingspedagog', 'socialpedagog', 'psykosocial', 'utbildningskrav', '180 högskolepoäng', 'deltid', 'tjänstgöringsgrad']
    },
    {
      ref: '5 §', rubrik: 'Sex månader, bibehållande och omfördelning',
      text: [
        'Personalkostnaderna ska gälla en anställning eller ett uppdrag som varar minst sex månader, på heltid eller deltid.',
        'Bidrag kan också ges för att behålla det antal årsarbetskrafter som huvudmannen har fått bidrag för tidigare.',
        'Bidrag ges inte för personalkostnader som uppstår när personal flyttas om eller när verksamheten organiseras om.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'De sex månaderna behöver inte rymmas inom bidragsåret. En anställning kan börja när som helst fram till 31 december, om den fortsätter efter årsskiftet och varar minst sex månader totalt. Bidraget gäller ändå bara kostnaderna under bidragsåret. Slutar någon eller blir sjukskriven kan ni ersätta personen. Ersättaren måste uppfylla samma utbildningskrav och ha en anställning eller ett uppdrag på minst sex månader.'
      },
      nyckelord: ['sex månader', 'anställning', 'uppdrag', 'bibehålla', 'behålla', 'omfördelning', 'omorganisation', 'ersättare', 'sjukskrivning', 'personalbyte']
    },
    {
      ref: '6 §', rubrik: 'Så stort är bidraget',
      text: [
        'Bidraget motsvarar hälften av kostnaden för en heltidsanställning, eller för ett uppdrag som motsvarar heltid.',
        'En huvudman kan få bidrag för flera heltider. Vid deltid minskas bidraget i samma proportion.'
      ],
      praktik: 'Bidraget från Skolverket gäller bara skolpersonalen. Det finns inget fast belopp per tjänst – det är er egen kostnad som räknas.',
      nyckelord: ['belopp', 'hälften', 'halva kostnaden', 'lön', 'deltid', 'heltid']
    },
    {
      ref: '7 §', rubrik: 'Ansökan och beslut',
      text: [
        'Huvudmannen för grundskolan eller gymnasieskolan söker bidraget för skolpersonalen hos Skolverket, som prövar ansökan och betalar ut pengarna.',
        'I beslutet står sista dag för redovisningen. Beslutet kan också innehålla villkor.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'För 2026 var ansökan öppen 15 januari–16 februari 2026 i Skolverkets e-tjänst för statsbidrag, och beslutet kom i april 2026. Kommunala och fristående huvudmän kan söka. Någon sida för 2027 finns ännu inte (1 oktober 2026).'
      },
      nyckelord: ['ansökan', 'ansöka', 'e-tjänst', 'beslut', 'villkor', 'friskola', '2027']
    },
    {
      ref: '8 §', rubrik: 'När pengarna inte räcker',
      text: ['Kommer det in fler ansökningar än det finns pengar till väljer Skolverket ut vilka som får bidrag, i den här ordningen:'],
      lista: [
        'att behålla det antal årsarbetskrafter i team i grundskolan som huvudmannen redan har fått bidrag för,',
        'nya team i grundskolan,',
        'förstärkning av befintliga team i grundskolan,',
        'team i gymnasieskolan.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Skolverket ska också ta hänsyn till geografisk spridning. I första hand prioriteras ansökningar där varje team har minst en årsarbetskraft från skolan och en från socialtjänsten. I andra hand prioriteras ansökningar där kraven bara är uppfyllda för huvudmannens team sammantaget. För 2026 söktes cirka 262 miljoner kronor. Skolverket beviljade 200 miljoner kronor till 237 huvudmän, och många fick mindre än de sökte.'
      },
      nyckelord: ['urval', 'prioritering', 'fördelning', 'gymnasieskola', 'geografisk spridning', 'anslag', '200 miljoner', 'beslut 2026']
    },
    {
      ref: '9–12 §§', rubrik: 'Socialtjänstens del via Socialstyrelsen',
      text: [
        'Skolverket lämnar uppgifter till Socialstyrelsen om vilka huvudmän som har fått bidrag och i vilka kommuner teamen ska finnas.',
        'Kommunen kan sedan få bidrag för personal från socialtjänsten som ingår i ett team som Skolverket har beviljat bidrag för. Socialstyrelsen fördelar lika mycket pengar till kommunerna som Skolverket har beviljat huvudmännen.',
        'Kommunen söker inte i konkurrens med andra. Socialstyrelsen meddelar de kommuner som har rätt att begära ut pengarna, och kommunen rekvirerar dem. Socialstyrelsen beslutar, betalar ut och anger sista dag för redovisningen.'
      ],
      praktik: {
        rubrik: 'Socialstyrelsens anvisningar',
        text: 'För 2026 var rekvisitionen öppen 15 april–1 juni 2026 i Socialstyrelsens e-tjänst, och beslutet var planerat till juni. Kommunen behöver ha utsett ett ombud i e-tjänsten. Bidraget täcker högst halva personalkostnaden, betalas ut som ett engångsbelopp och ska användas under 2026. Hur mycket kommunen kan få beror på vad Skolverket har beviljat skolhuvudmannen i teamet.'
      },
      nyckelord: ['socialstyrelsen', 'socialtjänst', 'kommun', 'rekvisition', 'rekvirera', 'ombud', 'fristående skola', 'samarbete']
    },
    {
      ref: '13–14 §§', rubrik: 'Uppföljning och redovisning',
      text: [
        'Skolverket och Socialstyrelsen följer tillsammans upp hur bidraget används.',
        'Den som har fått bidrag för skolpersonal redovisar ekonomiskt och på annat sätt till Skolverket, så som Skolverket begär. Den som har fått bidrag för socialtjänstens personal redovisar till Socialstyrelsen.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Bidraget för 2026 redovisas till Skolverket 15 januari–15 februari 2027. Skolverket har ännu inte beskrivit vilka uppgifter som ska lämnas, men ni ska redogöra för personalbyten under året. Socialstyrelsen vill ha redovisningen i början av 2027 och kan begära utdrag ur huvudboken, fakturor, lönespecifikationer och anställningsavtal. Ett eget kostnadsställe eller en projektkod gör det lättare.'
      },
      nyckelord: ['redovisning', 'uppföljning', 'personalbyten', 'huvudbok', 'kostnadsställe', 'lönespecifikation', '15 februari']
    },
    {
      ref: '15 §', rubrik: 'Anmäl förändringar',
      text: ['Förändringar som kan påverka rätten till bidrag eller hur stort det blir ska anmälas utan dröjsmål – till Skolverket för skolpersonalen och till Socialstyrelsen för socialtjänstens personal.'],
      praktik: 'Det kan till exempel vara att någon i teamet slutar, att teamet blir mindre än en årsarbetskraft från skolan eller socialtjänsten, eller att samarbetet upphör.',
      nyckelord: ['anmälan', 'förändring', 'slutar', 'utan dröjsmål']
    },
    {
      ref: '16–17 §§', rubrik: 'Betala tillbaka (återkrav)',
      text: ['Ni kan behöva betala tillbaka bidraget om'],
      lista: [
        'det har betalats ut på fel grund eller med för högt belopp,',
        'hela eller delar av det inte har använts, eller har använts till något annat,',
        'redovisningen inte har lämnats, eller',
        'ni inte har följt villkoren i beslutet.'
      ],
      praktik: 'Skolverket beslutar om återkrav för skolans del och Socialstyrelsen för socialtjänstens del. Båda kan avstå helt eller delvis om det finns särskilda skäl. Socialstyrelsen skriver att pengar som inte har använts under 2026 ska betalas tillbaka.',
      nyckelord: ['återkrav', 'återbetalning', 'betala tillbaka', 'särskilda skäl', 'oanvända pengar']
    },
    {
      ref: '18 §', rubrik: 'Ränta vid återkrav',
      text: [
        'Ränta tas ut från en månad efter beslutet om återkrav. Räntan är statens utlåningsränta plus två procentenheter.',
        'Finns det särskilda skäl kan Skolverket eller Socialstyrelsen avstå helt eller delvis från räntan.'
      ],
      nyckelord: ['ränta', 'återkrav', 'en månad']
    },
    {
      ref: '19 §', rubrik: 'Stopp för utbetalning',
      text: ['Skolverket och Socialstyrelsen ska, var och en för sin del, helt eller delvis stoppa utbetalningen av ett beviljat bidrag om villkoren inte längre bedöms vara uppfyllda, eller om det finns skäl för återbetalning. Beslutet gäller direkt.'],
      nyckelord: ['stopp', 'utbetalning', 'hinder']
    },
    {
      ref: '20 §', rubrik: 'Föreskrifter',
      text: ['Skolverket och Socialstyrelsen får, var och en för sin del, skriva de mer detaljerade regler som behövs för att tillämpa förordningen. Läs därför förordningen tillsammans med myndigheternas aktuella anvisningar och ert beslut.'],
      nyckelord: ['föreskrifter', 'anvisningar', 'bemyndigande']
    },
    {
      ref: '21 §', rubrik: 'Överklagande',
      text: ['Bara ett beslut om att stoppa en utbetalning (19 §) kan överklagas till allmän förvaltningsdomstol. Andra beslut enligt förordningen, till exempel ett avslag eller ett återkrav, kan inte överklagas.'],
      nyckelord: ['överklaga', 'domstol', 'förvaltningsrätt', 'avslag']
    },
    {
      ref: 'Övergång', rubrik: 'Övergångsbestämmelser',
      text: [
        'Förordningen började gälla den 10 maj 2023. Det första bidragsåret var 10 maj–31 december 2023.',
        'Ändringen SFS 2023:946 började gälla den 1 februari 2024, men tillämpas från 1 januari 2024. Då kom reglerna om socialtjänstens del via Socialstyrelsen till (9–12 §§). För bidrag som beviljades före 1 januari 2024 gäller de äldre reglerna.'
      ],
      nyckelord: ['övergång', 'äldre regler', '2023:946', 'ikraftträdande', '2023', '2024']
    }
  ],

  kalkylatorer: [
    {
      id: 'belopp', modul: 'skolsociala-team-belopp',
      flik: 'Räkna på bidrag', eyebrow: 'Bidrag enligt 4–6 §§',
      rubrik: 'Hur mycket', rubrikKursiv: 'kan skolan få?',
      ingress: 'Räkna ett team i taget. Räknaren visar Skolverkets bidrag för skolpersonalen och om teamet når upp till kravet på en årsarbetskraft från vardera skolan och socialtjänsten.',
      formel: { rubrik: 'Grundformeln', text: 'Bidrag = personalkostnad per månad vid heltid × skolpersonalens tjänstgöringsgrad × antal månader × 0,5.' },
      resultatRubrik: 'Uppskattat bidrag från Skolverket',
      falt: [
        { id: 'skolform', typ: 'segment', etikett: 'Teamet arbetar mot', standard: 'grundskola',
          alternativ: [
            { varde: 'grundskola', etikett: 'Grundskolan' },
            { varde: 'gymnasieskola', etikett: 'Gymnasieskolan', hjalp: 'Team i gymnasieskolan prioriteras sist om pengarna inte räcker.' },
            { varde: 'bada', etikett: 'Båda', hjalp: 'Ett team som arbetar mot båda skolformerna prioriteras som grundskola.' }
          ] },
        { id: 'skolGrad', typ: 'tal', etikett: 'Skolpersonal: sammanlagd tjänstgöringsgrad i teamet', min: 0, max: 5000, steg: 5, standard: 100, enhet: '%',
          hjalp: '100 % är en heltid. Två personer på halvtid är också 100 %. Bara personal med relevant psykosocial utbildning räknas.' },
        { id: 'kostnad', typ: 'tal', etikett: 'Skolpersonalens kostnad per månad vid heltid, med sociala avgifter', min: 0, max: 300000, steg: 100, standard: 55000, enhet: 'kr',
          hjalp: 'Lön plus sociala avgifter, i genomsnitt. Standardvärdet är bara ett exempel – ange era egna kostnader.' },
        { id: 'socGrad', typ: 'tal', etikett: 'Personal från socialtjänsten: sammanlagd tjänstgöringsgrad i teamet', min: 0, max: 5000, steg: 5, standard: 100, enhet: '%',
          hjalp: 'Används bara för att kontrollera kravet på minst en årsarbetskraft. Kommunen får bidrag för den här personalen från Socialstyrelsen.' },
        { id: 'manader', typ: 'reglage', etikett: 'Månader under bidragsåret', min: 1, max: 12, steg: 1, standard: 12, enhet: 'mån' }
      ],
      exempel: [
        { etikett: 'En kurator och en socialsekreterare', varden: {} },
        { etikett: 'Två på halvtid från 1 juli', varden: { skolGrad: 100, manader: 6 } },
        { etikett: 'Större team i båda skolformerna', varden: { skolform: 'bada', skolGrad: 250, socGrad: 200 } },
        { etikett: 'Socialtjänsten bara på halvtid', varden: { socGrad: 50 } }
      ],
      resultatNotis: 'Beloppet bygger på era egna kostnader. Om ansökningarna är fler än pengarna räcker till gör Skolverket ett urval, och då kan ni få mindre eller inget alls.',
      forbehall: [
        { rubrik: 'Formeln', text: 'Förordningen säger hälften av kostnaden, minskad i proportion vid deltid (6 §). Skolverket anger inget fast påslag för sociala avgifter för det här bidraget, så ni anger kostnaden med avgifterna inräknade.' },
        { rubrik: 'Det här prövar räknaren inte', text: 'Om personalen har den utbildning som krävs, om anställningarna varar minst sex månader, om tjänsterna är omfördelade från annan verksamhet och om kraven gäller under hela perioden. Inte heller om pengarna räcker eller hur mycket kommunen får från Socialstyrelsen.' }
      ]
    }
  ],

  process: [
    { rubrik: 'Kom överens med socialtjänsten', text: 'Skolan och kommunens socialtjänst kommer överens om att bilda ett team: vilka skolor det ska arbeta med och vem som ska ingå. En fristående huvudman behöver samarbeta med kommunen.', ref: '1, 4 §§' },
    { rubrik: 'Kontrollera bemanning och utbildning', text: 'Minst 100 % skolpersonal med relevant psykosocial utbildning och minst 100 % från socialtjänsten med socionomexamen eller annan relevant examen. Varje anställning eller uppdrag ska vara minst sex månader.', ref: '4–5 §§' },
    { rubrik: 'Skolan söker hos Skolverket', text: 'Huvudmannen söker i Skolverkets e-tjänst och intygar att personalen har rätt utbildning. För 2026 var ansökan öppen 15 januari–16 februari. Datum för 2027 är inte publicerade ännu.', ref: '7–8 §§' },
    { rubrik: 'Kommunen rekvirerar från Socialstyrelsen', text: 'Efter Skolverkets beslut meddelar Socialstyrelsen kommunen, som begär ut pengarna för socialtjänstens personal. För 2026 var det 15 april–1 juni.', ref: '9–12 §§' },
    { rubrik: 'Anmäl förändringar och redovisa', text: 'Anmäl personalbyten och andra förändringar utan dröjsmål. Skolan redovisar till Skolverket och kommunen till Socialstyrelsen – för 2026 i början av 2027.', ref: '13–18 §§' }
  ],

  underlagRubrik: 'Underlag att ha till hands',
  underlagIngress: 'Använd listan när ni förbereder ansökan, rekvisitionen eller redovisningen. Markeringarna sparas inte – de försvinner när ni stänger sidan.',
  underlag: [
    'Överenskommelse med socialtjänsten om teamet: vilka skolor det arbetar med och vem som ingår.',
    'Anställningsavtal och uppdragsavtal som visar tjänstgöringsgrad i teamet, start och att anställningen varar minst sex månader.',
    'Examensbevis och kursintyg som visar skolpersonalens psykosociala utbildning och socialtjänstpersonalens examen.',
    'Lönekostnader för skolpersonalen i teamet under året.',
    'Anteckningar om personalbyten, med ersättarnas utbildning och anställningstid.',
    'För kommunen: ombud i Socialstyrelsens e-tjänst, ett eget kostnadsställe eller en projektkod och lönespecifikationer för socialtjänstens personal.',
    'Vem som är behörig företrädare och har behörighet i Skolverkets e-tjänst.'
  ],

  kallor: [
    {
      titel: 'Förordning (2023:179) · Sveriges riksdag',
      url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-2023179-om-statsbidrag-for_sfs-2023-179/',
      beskrivning: 'Källan för villkor, bidragets storlek, urval, Socialstyrelsens del och återkrav. Paragrafhänvisningarna i guiden gäller förordningen i lydelsen enligt omtrycket SFS 2023:946.'
    },
    {
      titel: 'Statsbidrag för personalkostnader för skolsociala team 2026 · Skolverket',
      url: 'https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-personalkostnader-for-skolsociala-team-2026',
      beskrivning: 'Datum, villkor, exempel på relevanta utbildningar och examina, urval, beslutsbilagor och frågor och svar.'
    },
    {
      titel: 'Anvisningar för statsbidrag för skolsociala team 2026 · Socialstyrelsen',
      url: 'https://statsbidrag.socialstyrelsen.se/globalassets/dokument/anvisningar/statsbidrag-anvisningar-skolsociala-team-2026.pdf',
      beskrivning: 'Kommunens rekvisition av socialtjänstens del: datum, belopp, villkor, underlag och återkrav.'
    },
    {
      titel: 'Anpassad grund- och gymnasieskola ska omfattas i stödet till skolsociala team · Regeringen',
      url: 'https://regeringen.se/pressmeddelanden/2025/12/anpassad-grund--och-gymnasieskola-ska-omfattas-i-stodet-till-skolsociala-team/',
      beskrivning: 'Pressmeddelande 19 december 2025 om myndigheternas stöduppdrag och om satsningen på 400 miljoner kronor per år till och med 2028.'
    }
  ],

  forbehall: 'Guiden sammanfattar reglerna och visar hur skolans del av bidraget räknas. Räknaren kontrollerar inte personalens utbildning, om anställningarna varar minst sex månader, om tjänsterna är omfördelade eller hur Skolverket gör ett urval. Den räknar inte ut socialtjänstens del. Använd aktuella anvisningar från Skolverket och Socialstyrelsen och ert beslut när ni ansöker och redovisar.'
};
