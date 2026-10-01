/* Fördjupning: Statsbidrag för fortbildning av lärare och förskollärare – förordning (2023:144).
 * Innehållet är stämt mot förordningen (ändrad t.o.m. SFS 2026:613), Skolverkets föreskrifter SKOLFS 2024:497,
 * Skolverkets sida för 2026 (senast uppdaterad 3 juli 2026) och Skolverkets beräkningsstöd för 2026.
 * Schema: se FORDJUPNING.md. Klartext, inte citat – paragrafhänvisningarna gäller förordningen. */
window.SB_FORDJUPNING = window.SB_FORDJUPNING || {};
window.SB_FORDJUPNING['fortbildning-larare-forskollarare'] = {
  id: 'fortbildning-larare-forskollarare',
  rubrik: 'Fortbildning för lärare',
  rubrikKursiv: 'i klartext.',
  ingress: 'Vilka utbildningar ger bidrag, vilka lärare omfattas och hur mycket blir det per termin? Här står reglerna på vanlig svenska. Ni kan också räkna på båda ersättningsmodellerna med egna siffror.',
  kontrollerad: '2026-10-01',
  forordning: {
    sfs: '2023:144',
    namn: 'Förordning (2023:144) om statsbidrag för fortbildning av lärare och förskollärare',
    lydelse: 'ändrad t.o.m. SFS 2026:613',
    url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-2023144-om-statsbidrag-for_sfs-2023-144/'
  },

  snabbfaktaRubrik: 'Tre saker att känna till först',
  snabbfakta: [
    { rubrik: 'Två modeller per lärare', text: 'Löneersättning ger 56 % av en schablonlön för den tid ni avsätter till studier. Högskolepoäng ger 1 000 kr per poäng, eller 1 500 kr för svenska som andraspråk.' },
    { rubrik: 'Ni söker varje termin', text: 'Ansökan ska ha kommit in senast 15 februari för våren och 15 september för hösten. Sena ansökningar avvisas.' },
    { rubrik: 'Bara vissa utbildningar', text: 'Lärarlyftet, speciallärare och specialpedagog, svenska som andraspråk, yrkeslärarexamen och några riktade uppdragsutbildningar. Andra kurser ger inte bidrag.' }
  ],
  snabbfaktaNot: 'Bidraget går till huvudmannen. En enskild lärare kan inte söka själv.',

  begreppRubrik: 'Ord som återkommer',
  begrepp: [
    { term: 'Huvudman', forklaring: 'Den som driver skolan eller förskolan: en kommun, en region, staten eller en fristående huvudman.' },
    { term: 'Lärarlyftet', forklaring: 'Skolverkets uppdragsutbildningar för lärare som vill bli behöriga i fler ämnen, årskurser eller skolformer.' },
    { term: 'Uppdragsutbildning', forklaring: 'En kurs som Skolverket köper av ett universitet eller en högskola. Den är inte samma sak som lärosätets vanliga kurser.' },
    { term: 'Schablonlön', forklaring: 'En fast lön per termin som Skolverket räknar med, oavsett vad läraren faktiskt tjänar. Den bygger på statistik från SCB och innehåller sociala avgifter.' },
    { term: 'Högskolepoäng', forklaring: 'Hur omfattande en kurs är. Heltidsstudier under en termin är 30 högskolepoäng.' },
    { term: 'VFU', forklaring: 'Verksamhetsförlagd utbildning, alltså den del av lärarutbildningen som görs ute i skolan.' }
  ],

  sektioner: {
    regler: {
      rubrik: 'Från paragraf', rubrikKursiv: 'till praktik.',
      ingress: 'Rubrikerna följer förordningen. Öppna det avsnitt ni behöver, eller sök på till exempel ”speciallärare”, ”80 procent” eller ”återkrav”. Varje avsnitt visar vilken paragraf det gäller.'
    },
    praktik: {
      rubrik: 'Så används', rubrikKursiv: 'reglerna.',
      ingress: 'Bidraget följer terminerna. Ni pratar med läraren, söker i början av terminen, följer upp om studierna ändras och redovisar året efter.'
    }
  },

  paragrafer: [
    {
      ref: '1 §', rubrik: 'Vad bidraget är till för',
      text: [
        'Bidraget ska göra det möjligt för lärare och förskollärare att fortbilda sig. Målet är att de ska bli behöriga i fler ämnen eller skolformer, ta en viss examen eller få ny kunskap.'
      ],
      nyckelord: ['syfte', 'fortbildning', 'behörighet', 'vidareutbildning', 'kompetensutveckling']
    },
    {
      ref: '2 §', rubrik: 'Vem som kan få bidrag',
      text: ['Bidraget kan gå till:'],
      lista: [
        'Huvudmän inom skolväsendet, alltså kommunala, fristående, regionala och statliga huvudmän.',
        'Huvudmän för svenska utlandsskolor.',
        'Statens institutionsstyrelse, för utbildning på särskilda ungdomshem.',
        'Kriminalvården, för utbildning av intagna.',
        'Folkhögskolor som får statsbidrag och har tillstånd från Skolinspektionen. De kan bara få bidrag för vissa utbildningar, se 7 §.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'En enskild lärare kan inte söka. Är läraren anställd hos en entreprenör, alltså ett företag som har avtal med huvudmannen, är det huvudmannen som söker och tar emot bidraget. Från hösten 2026 söker även svenska utlandsskolor i Skolverkets e-tjänst.'
      },
      nyckelord: ['huvudman', 'friskola', 'fristående', 'kommun', 'utlandsskola', 'folkhögskola', 'kriminalvården', 'sis', 'entreprenör']
    },
    {
      ref: '3 §', rubrik: 'Vilka lärare som omfattas',
      text: [
        'Läraren eller förskolläraren ska vara anställd hos huvudmannen eller hos en entreprenör som huvudmannen har avtal med.',
        'Hen ska också ha en grundlärarexamen, ämneslärarexamen, yrkeslärarexamen, förskollärarexamen, en motsvarande äldre examen eller motsvarande utländsk behörighet.',
        'Kravet på examen gäller inte för lärare på en fristående skola med waldorfpedagogisk inriktning, för lärare som läser svenska som andraspråk eller för lärare i yrkesämnen som studerar för en yrkeslärarexamen.',
        'För en yrkeslärare utan examen gäller ett extra villkor. Arbetet ska vara ordnat så att det rimligen kan räknas som VFU i utbildningen. Det gäller inte om läraren redan har undervisat på ett sätt som kan räknas som VFU.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Det är examen som avgör, inte titeln. Bidrag kan alltså sökas även för en rektor eller annan anställd med lärarexamen, om hen läser en utbildning som ger bidrag. Den som saknar examen och läser svenska som andraspråk eller yrkeslärarutbildning måste däremot arbeta som lärare i skolväsendet, men inte i förskolan. Det är universitetet eller högskolan som till slut bedömer om arbetet räknas som VFU.'
      },
      nyckelord: ['lärarexamen', 'förskollärarexamen', 'examen', 'obehörig', 'waldorf', 'yrkeslärare', 'vfu', 'rektor', 'utländsk']
    },
    {
      ref: '4–5 §§', rubrik: 'Uppdragsutbildningar som ger bidrag',
      text: [
        'Läraren måste delta i en utbildning som anges i 5 eller 6 §. Enligt 5 § ger de här uppdragsutbildningarna bidrag:'
      ],
      lista: [
        'Kurser som gör lärare behöriga i fler skolformer, årskurser och ämnen (Lärarlyftet).',
        'Utbildning till speciallärarexamen.',
        'Kurser som ger kunskap i svenska som andraspråk.',
        'Kurser för förskollärare i förskoleklass om hur elever lär sig läsa, skriva och räkna, inför den tioåriga grundskolan.',
        'Kurser som ger ny kunskap till lärare utan behörighetsgivande examen på fristående skolor med waldorfpedagogisk inriktning.',
        'Kurser för lärare som efter 30 juni 2028 ska undervisa i årskurs 1, om hur förskolans pedagogik och arbetssätt kan användas i undervisningen. Punkten gäller sedan 1 juli 2026.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Lärosätenas egna, vanliga ämneskurser ger inte bidrag. Det gäller bara Lärarlyftets kurser. Motsvarande utbildningar hos en enskild utbildningsanordnare med rätt att utfärda examina räknas också. Kurserna för förskollärare i förskoleklass är 15 högskolepoäng på kvartsfart under två terminer. Ni kan då söka för 7,5 poäng per termin, eller för högst 25 % av en heltid.'
      },
      nyckelord: ['lärarlyftet', 'uppdragsutbildning', 'ämneskurs', 'behörighet', 'förskoleklass', 'tioårig grundskola', 'årskurs 1', 'waldorf', 'speciallärare']
    },
    {
      ref: '6 §', rubrik: 'Annan högskoleutbildning som ger bidrag',
      text: ['Även vanlig högskoleutbildning ger bidrag om den syftar till att läraren ska:'],
      lista: [
        'Ta en speciallärarexamen.',
        'Ta en specialpedagogexamen.',
        'Ta en yrkeslärarexamen (gäller lärare i yrkesämnen).',
        'Bli behörig i svenska som andraspråk, eller få kunskap i ämnet.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'För dessa utbildningar går både lärosätenas vanliga utbud och Lärarlyftets utbildningar. VAL-utbildning ger bara bidrag om den leder till yrkeslärarexamen eller gäller svenska som andraspråk. Den som redan är speciallärare kan få bidrag för att bli specialpedagog, och tvärtom, men inte för att bygga på till en masterexamen. Professionsprogrammet och VAK ger inte bidrag.'
      },
      nyckelord: ['specialpedagog', 'speciallärare', 'yrkeslärare', 'svenska som andraspråk', 'sva', 'val', 'master', 'professionsprogrammet', 'vak']
    },
    {
      ref: '7 §', rubrik: 'Särskilt för folkhögskolor',
      text: ['En folkhögskola kan bara få bidrag när läraren läser en utbildning som ger behörighet att undervisa i svenska för invandrare (sfi), eller behörighet eller kunskap i svenska som andraspråk.'],
      nyckelord: ['folkhögskola', 'sfi', 'svenska för invandrare', 'svenska som andraspråk']
    },
    {
      ref: '8–8 b §§', rubrik: 'Krav på huvudmannen och dubbel finansiering',
      text: [
        'Bidrag ges inte för kostnader som redan har betalats med något annat statligt bidrag.',
        'Bidrag ges inte heller till en huvudman som är i likvidation eller konkurs, som har skulder hos Kronofogden för skatter, avgifter eller annat som drivs in som allmänt mål, eller som inte i tid har betalat ett återkrav till Skolverket.',
        'Har Skolinspektionen eller en kommun återkallat huvudmannens godkännande, eller har Skolinspektionen beslutat om verksamhetsförbud, ges inget bidrag för den verksamheten. Har beslutet upphävts kan bidrag ges.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Reglerna gäller sedan 1 januari 2026. Bidraget kan kombineras med bidragen för karriärtjänster och Lärarlönelyftet, så länge läraren arbetar till någon del och villkoren här är uppfyllda. Att läraren har studiemedel eller omställningsstudiestöd från CSN hindrar inte bidraget, men CSN kan ha egna regler.'
      },
      nyckelord: ['dubbelfinansiering', 'kronofogden', 'konkurs', 'återkrav', 'verksamhetsförbud', 'karriärtjänst', 'lärarlönelyftet', 'csn', 'omställningsstudiestöd']
    },
    {
      ref: '9 §', rubrik: 'Ett år i taget',
      text: ['Bidrag ges för högst ett år i taget och bara i den mån det finns pengar.'],
      nyckelord: ['bidragsår', 'medel', 'anslag']
    },
    {
      ref: '10 §', rubrik: 'Två ersättningsmodeller',
      text: [
        'För varje lärare väljer huvudmannen en av två modeller: löneersättning (11 §) eller högskolepoäng (12 §). Löneersättning bygger på en schablonlön. Högskolepoäng bygger på hur stor utbildningen är.',
        'Bidrag enligt högskolepoängmodellen får användas till ett studiestipendium till läraren och till andra kostnader som huvudmannen får på grund av utbildningen.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Ni kan välja olika modeller för olika lärare, och byta modell till nästa termin. Ni kan inte byta modell för en lärare efter sista ansökningsdag. Andra kostnader kan till exempel vara vikarier, resor och kurslitteratur. Med högskolepoängmodellen behöver ni inte avsätta arbetstid för studierna.'
      },
      nyckelord: ['ersättningsmodell', 'löneersättning', 'högskolepoäng', 'studiestipendium', 'vikarie', 'kurslitteratur', 'byta modell']
    },
    {
      ref: '11 §', rubrik: 'Löneersättning: 56 procent av schablonlönen',
      text: [
        'Bidraget är 56 % av lönekostnaden räknad på en schablonlön. Det gäller tid då läraren studerar på arbetstid, är tjänstledig för studierna eller studerar på den tid hen inte arbetar eftersom anställningen är på deltid.',
        'Är läraren tjänstledig eller studerar på tid utanför en deltidstjänst ges bidraget bara om arbetsgivaren betalar minst 80 % av lönen för studietiden.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Formeln är schablonlön per termin × tjänstgöringsgrad × tid som avsätts för studier × 0,56. Det är tiden ni avsätter som räknas, inte hur mycket läraren faktiskt pluggar. Tiden får inte vara större än studietakten: en kurs på halvfart ger högst 50 % av en heltid. Läraren ska ha minst 80 % av lönen under hela kursen, även om höstens kurs slutar i januari. Är läraren delvis föräldraledig eller sjukskriven går det att söka för den del hen arbetar.'
      },
      nyckelord: ['löneersättning', '56 procent', '80 procent', 'tjänstledig', 'deltid', 'studietakt', 'halvfart', 'föräldraledig', 'sjukskriven']
    },
    {
      ref: '12 §', rubrik: 'Högskolepoäng: 1 000 eller 1 500 kronor per poäng',
      text: [
        'Om ni inte väljer löneersättning ges 1 000 kr för varje högskolepoäng som utbildningen omfattar.',
        'För utbildning som ger behörighet eller kunskap i svenska som andraspråk är beloppet 1 500 kr per högskolepoäng.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Ni räknar på de poäng läraren läser under terminen. Studerar läraren bara en del av terminen räknar ni bara med den delen. Exempel: 30 poäng på helfart, men läraren avbryter efter 15 av 20 veckor. Då kan ni söka för 75 % av 30 poäng, alltså 22,5 poäng. Det går att söka så länge läraren är anställd under studietiden, även vid sjukskrivning eller föräldraledighet.'
      },
      nyckelord: ['högskolepoäng', '1000', '1500', 'per poäng', 'svenska som andraspråk', 'avbryter', 'del av termin']
    },
    {
      ref: '13 §', rubrik: 'Schablonlönen',
      text: [
        'Schablonlönen är en genomsnittlig månadslön som SCB räknar fram för lärare eller förskollärare i förskolan, i förskoleklass och årskurs 1–6, i årskurs 7–9, i andra ämnen än yrkesämnen på gymnasiet eller i yrkesämnen på gymnasiet.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'För 2026 räknar Skolverket med tre schablonlöner per termin, inklusive sociala avgifter: 346 000 kr för Lärarlyftet, speciallärar- och specialpedagogutbildning och svenska som andraspråk, 318 000 kr för förskollärare i förskoleklass och 364 000 kr för yrkeslärare. En heltidsanställd lärare som studerar på heltid i Lärarlyftet ger alltså 346 000 × 0,56 = 193 760 kr per termin.'
      },
      nyckelord: ['schablonlön', 'scb', '346000', '318000', '364000', '193760', 'sociala avgifter']
    },
    {
      ref: '14–14 a §§', rubrik: 'Ansökan',
      text: [
        'En behörig företrädare för huvudmannen ansöker skriftligen hos Skolverket, som beslutar om bidraget. Uppgifterna lämnas på heder och samvete.',
        'Skolverket kan begära de uppgifter och handlingar som behövs. Beslutet kan förenas med villkor, och de står i så fall i beslutet.'
      ],
      praktik: {
        rubrik: 'Skolverkets föreskrifter',
        text: 'Enligt SKOLFS 2024:497 ska ansökan för våren ha kommit in senast 15 februari, och för hösten senast 15 september. Faller dagen på en helg gäller nästa vardag. Ansökan görs i Skolverkets e-tjänst. Efter sista dag går det inte att lägga till lärare eller byta modell. Ansök i början av den termin läraren studerar, och sök igen varje termin tills utbildningen är klar.'
      },
      nyckelord: ['ansökan', 'e-tjänst', 'sista ansökningsdag', '15 februari', '15 september', 'skolfs 2024:497', 'heder och samvete', 'personnummer']
    },
    {
      ref: '15–16 §§', rubrik: 'Om pengarna inte räcker',
      text: ['Kommer det in fler ansökningar än det finns pengar till väljer Skolverket i den här ordningen:'],
      lista: [
        'Lärare som redan har fått bidrag för samma utbildning, så att de kan slutföra den.',
        'Lärare på de 150 skolenheter med förskoleklass eller grundskola som har svårast förutsättningar utifrån elevernas socioekonomiska bakgrund. Skolenheten ska ha minst 50 elever och ligga i en större kommun eller en kommun nära en storstad, enligt villkoren i 16 §.',
        'Huvudmän med en låg andel behöriga lärare och speciallärare, eller en låg andel behöriga förskollärare.'
      ],
      praktik: 'I det tredje steget ska Skolverket också tänka på geografisk spridning och på att både offentliga och enskilda huvudmän får bidrag.',
      nyckelord: ['urval', 'prioritering', 'översökt', 'socioekonomisk', '150 skolenheter', 'behöriga lärare', 'pågående utbildning']
    },
    {
      ref: '17 §', rubrik: 'Utbetalning',
      text: ['Bidraget betalas ut en gång per termin.'],
      praktik: 'För våren 2026 beviljade Skolverket 168 373 939 kr till 528 huvudmän. Beslutet kom i maj 2026.',
      nyckelord: ['utbetalning', 'termin', 'beslut']
    },
    {
      ref: '18–19 §§', rubrik: 'Uppföljning och redovisning',
      text: [
        'Skolverket följer upp hur bidraget har använts.',
        'Den som har fått bidrag ska delta i den uppföljning och utvärdering som Skolverket, eller en annan myndighet med uppdrag från regeringen, bestämmer. Mottagaren ska också lämna de uppgifter som begärs.'
      ],
      praktik: {
        rubrik: 'Skolverkets förklaring',
        text: 'Ni redovisar i e-tjänsten året efter. Bidrag för våren och hösten 2026 redovisas 1 april–3 maj 2027. Ange personnummer, beviljat belopp per lärare, hur mycket som har använts enligt villkoren och varför eventuella pengar inte har använts. Slutar läraren mitt i terminen räknar ni beviljat belopp × den andel av terminen läraren var anställd och studerade.'
      },
      nyckelord: ['redovisning', 'uppföljning', 'använt belopp', 'e-tjänst', '2027']
    },
    {
      ref: '20 §', rubrik: 'Anmäl förändringar',
      text: ['Den som har ansökt om eller fått bidrag ska så snart som möjligt anmäla förändringar som kan påverka rätten till bidraget eller hur stort det blir.'],
      praktik: 'Det kan till exempel vara att läraren avbryter studierna, byter arbetsgivare eller får ändrad tjänstgöringsgrad. Skolverket ber er kontrollera detta varje termin.',
      nyckelord: ['anmälan', 'förändring', 'avbryter', 'byter arbetsgivare', 'slutar']
    },
    {
      ref: '21 §', rubrik: 'När pengarna ska betalas tillbaka',
      text: ['Mottagaren ska betala tillbaka bidraget om något av följande gäller:'],
      lista: [
        'Bidraget har getts på felaktig grund eller med för högt belopp.',
        'Bidraget har inte använts, helt eller delvis, eller inte använts till det det var avsett för.',
        'Mottagaren har inte deltagit i uppföljningen eller lämnat de uppgifter som begärts.',
        'Mottagaren har inte följt villkoren i beslutet.'
      ],
      praktik: {
        rubrik: 'Undantag för yrkeslärare',
        text: 'Ni behöver inte betala tillbaka bara för att lärosätet till slut inte godkänner arbetet som VFU. Det förutsätter att ni har gjort vad som rimligen kan krävas för att arbetet ska kunna räknas som VFU.'
      },
      nyckelord: ['återbetalning', 'betala tillbaka', 'felaktig grund', 'inte använt', 'vfu', 'yrkeslärare']
    },
    {
      ref: '22–23 §§', rubrik: 'Återkrav och ränta',
      text: [
        'Skolverket ska besluta att kräva tillbaka bidraget helt eller delvis när någon är skyldig att betala tillbaka. Om det finns särskilda skäl får Skolverket avstå helt eller delvis.',
        'Ränta tas ut från den trettionde dagen efter beslutet om återkrav. Räntan är statens utlåningsränta plus två procentenheter. Skolverket får avstå från räntan om det finns särskilda skäl.'
      ],
      praktik: 'Sedan 1 juli 2026 räcker det med särskilda skäl för att Skolverket ska kunna avstå. Under första halvåret 2026 krävdes synnerliga, alltså mycket starka, skäl. Äldre regler gäller för bidrag som avser tid före 1 juli 2026.',
      nyckelord: ['återkrav', 'ränta', 'särskilda skäl', 'statens utlåningsränta']
    },
    {
      ref: '24 §', rubrik: 'Stopp för utbetalning',
      text: ['Skolverket ska helt eller delvis stoppa utbetalningen av ett beviljat bidrag om mottagaren inte längre bedöms uppfylla villkoren, eller om det finns skäl för återbetalning enligt 21 §. Beslutet gäller direkt.'],
      nyckelord: ['stopp', 'utbetalning', 'hinder']
    },
    {
      ref: '25 §', rubrik: 'Skolverkets föreskrifter',
      text: [
        'Skolverket får skriva mer detaljerade regler för hur förordningen ska tillämpas.',
        'Just nu finns SKOLFS 2024:497. Den säger när ansökan senast ska ha kommit in och att den ska lämnas i Skolverkets e-tjänst, om Skolverket inte beslutar något annat av särskilda skäl.'
      ],
      nyckelord: ['föreskrifter', 'skolfs', 'skolfs 2024:497', 'bemyndigande']
    },
    {
      ref: '26 §', rubrik: 'Överklagande',
      text: ['Ett beslut enligt 24 § om att stoppa en utbetalning kan överklagas till allmän förvaltningsdomstol. Andra beslut enligt förordningen, till exempel beslut om ansökan, får inte överklagas.'],
      nyckelord: ['överklaga', 'domstol', 'förvaltningsrätt']
    },
    {
      ref: 'Övergång', rubrik: 'Bakgrund och övergångsbestämmelser',
      text: [
        'Förordningen gäller sedan 1 juli 2023. Den ersatte fem äldre bidrag: Lärarlyftet, specialpedagogik, svenska som andraspråk och sfi, fortbildning av förskollärare och behörighetsgivande utbildning för yrkeslärare. Bidrag som beviljades enligt de äldre förordningarna följer fortfarande dem.',
        'SFS 2025:553 gäller från 1 januari 2026 och SFS 2026:559 och 2026:613 från 1 juli 2026. För bidrag som avser tid före respektive datum gäller de äldre reglerna.'
      ],
      nyckelord: ['övergång', 'äldre regler', 'lärarlyftet ii', '2025:553', '2026:613', 'ikraftträdande']
    }
  ],

  kalkylatorer: [
    {
      id: 'belopp', modul: 'fortbildning-larare-forskollarare-belopp',
      flik: 'Räkna på bidrag', eyebrow: 'Bidrag enligt 11–13 §§',
      rubrik: 'Vad blir', rubrikKursiv: 'det per termin?',
      ingress: 'Välj utbildning och ersättningsmodell och följ uträkningen direkt. Räknaren visar bidraget för en termin, innan Skolverket har prövat ansökan.',
      resultatRubrik: 'Beräknat bidrag för en termin',
      falt: [
        { id: 'utbildning', typ: 'val', etikett: 'Utbildning', standard: 'lararlyftet',
          alternativ: [
            { varde: 'lararlyftet', etikett: 'Lärarlyftets ämneskurser' },
            { varde: 'special', etikett: 'Speciallärare eller specialpedagog' },
            { varde: 'sva', etikett: 'Svenska som andraspråk' },
            { varde: 'forskoleklass', etikett: 'Förskollärare i förskoleklass (tioårig grundskola)' },
            { varde: 'yrkeslarare', etikett: 'Yrkeslärarexamen' }
          ] },
        { id: 'modell', typ: 'segment', etikett: 'Ersättningsmodell', standard: 'lon',
          alternativ: [
            { varde: 'lon', etikett: 'Löneersättning', hjalp: '56 % av schablonlönen för den tid ni avsätter till studier (11 §).' },
            { varde: 'hp', etikett: 'Högskolepoäng', hjalp: '1 000 kr per poäng, 1 500 kr för svenska som andraspråk (12 §).' }
          ] },
        { id: 'grad', typ: 'reglage', etikett: 'Tjänstgöringsgrad', min: 1, max: 100, steg: 1, standard: 100, enhet: '%',
          hjalp: 'Lärarens anställning i procent av heltid. Studerar läraren på tid utanför en deltidstjänst anger ni den lediga delen här, till exempel 20 %.',
          visasOm: { falt: 'modell', ar: 'lon' } },
        { id: 'studietid', typ: 'reglage', etikett: 'Tid som avsätts för studier', min: 1, max: 100, steg: 1, standard: 100, enhet: '%',
          hjalp: 'Andel av tjänstgöringsgraden. Får inte vara större än studietakten.',
          visasOm: { falt: 'modell', ar: 'lon' } },
        { id: 'hp', typ: 'tal', etikett: 'Högskolepoäng under terminen', min: 0.5, max: 60, steg: 'any', standard: 15,
          hjalp: 'Heltidsstudier under en termin är 30 poäng, halvfart 15 och kvartsfart 7,5.',
          visasOm: { falt: 'modell', ar: 'hp' } },
        { id: 'terminsandel', typ: 'reglage', etikett: 'Del av terminen som läraren studerar och är anställd', min: 1, max: 100, steg: 1, standard: 100, enhet: '%',
          hjalp: 'Lämna 100 % om läraren studerar hela terminen. Exempel: 15 av 20 veckor är 75 %.' },
        { id: 'antal', typ: 'tal', etikett: 'Antal lärare', min: 1, max: 10000, steg: 1, standard: 1, hjalp: 'Samma förutsättningar för alla.' }
      ],
      exempel: [
        { etikett: 'Deltid 80 %, halva tiden för studier', varden: { modell: 'lon', grad: 80, studietid: 50 } },
        { etikett: 'Svenska som andraspråk, 7,5 poäng', varden: { utbildning: 'sva', modell: 'hp', hp: 7.5 } },
        { etikett: 'Yrkeslärare på heltid', varden: { utbildning: 'yrkeslarare', modell: 'lon', grad: 100, studietid: 100 } },
        { etikett: 'Avbryter efter 15 av 20 veckor', varden: { modell: 'hp', hp: 30, terminsandel: 75 } }
      ],
      resultatNotis: 'Beloppet gäller en termin. Ni söker på nytt varje termin. Skolverket gör ett urval om pengarna inte räcker, så ni kan få mindre eller inget alls.',
      forbehall: [
        { rubrik: 'Formel', text: 'Löneersättning: schablonlön × tjänstgöringsgrad × tid för studier × andel av terminen × 0,56. Högskolepoäng: poäng × andel av terminen × 1 000 kr (1 500 kr för svenska som andraspråk). Schablonlönerna är Skolverkets för 2026 och kan ändras till ett annat år.' },
        { rubrik: 'Det här prövar räknaren inte', text: 'Om läraren har rätt examen, om kursen ger bidrag, om ni betalar minst 80 % av lönen vid tjänstledighet eller om tiden ni avsätter stämmer med studietakten. Räknaren tar inte heller hänsyn till urvalet i 15–16 §§.' },
        { rubrik: 'Utbildningar som inte finns med', text: 'Skolverkets sida anger ingen schablonlön för kurserna för waldorflärare eller för de nya kurserna om årskurs 1 (5 § 5–6). Räkna inte på dem här.' }
      ],
      tabell: {
        rubrik: 'Belopp per lärare och termin 2026',
        kolumner: ['Utbildning', 'Schablonlön per termin', 'Löneersättning, heltid', 'Per högskolepoäng'],
        rader: [
          ['Lärarlyftet', '346 000 kr', '193 760 kr', '1 000 kr'],
          ['Speciallärare eller specialpedagog', '346 000 kr', '193 760 kr', '1 000 kr'],
          ['Svenska som andraspråk', '346 000 kr', '193 760 kr', '1 500 kr'],
          ['Förskollärare i förskoleklass', '318 000 kr', '178 080 kr', '1 000 kr'],
          ['Yrkeslärarexamen', '364 000 kr', '203 840 kr', '1 000 kr']
        ],
        fotnot: 'Heltid betyder 100 % tjänstgöring och 100 % av tiden för studier. Förskollärare i förskoleklass läser på kvartsfart, så där kan ni som mest söka för 25 % av en heltid: 44 520 kr. Schablonlönerna innehåller sociala avgifter.'
      }
    }
  ],

  process: [
    { rubrik: 'Planera med läraren', text: 'Bestäm vilken utbildning det gäller, vilken modell ni väljer och hur mycket arbetstid ni kan avsätta. Kontrollera att utbildningen och läraren omfattas.', ref: '3–7 §§, 10 §' },
    { rubrik: 'Ansök varje termin', text: 'En behörig företrädare ansöker i Skolverkets e-tjänst i början av terminen. Ansökan ska ha kommit in senast 15 februari respektive 15 september.', ref: '14 §' },
    { rubrik: 'Beslut och utbetalning', text: 'Skolverket beslutar och betalar ut en gång per termin. Räcker pengarna inte prioriteras pågående utbildningar först.', ref: '15–17 §§' },
    { rubrik: 'Följ upp under terminen', text: 'Betala minst 80 % av lönen om modellen kräver det. Anmäl till Skolverket om läraren avbryter, byter arbetsgivare eller studerar mindre.', ref: '11 §, 20 §' },
    { rubrik: 'Redovisa året efter', text: 'Redovisa beviljat och använt belopp per lärare i e-tjänsten. Bidrag för 2026 redovisas 1 april–3 maj 2027. Pengar som inte har använts kan krävas tillbaka.', ref: '18–23 §§' }
  ],

  underlagRubrik: 'Underlag att ha till hands',
  underlagIngress: 'Använd listan när ni förbereder ansökan och redovisning. Markeringarna sparas inte – de försvinner när ni stänger sidan.',
  underlag: [
    'Lärarens personnummer, skolenhet och den skolform hen främst arbetar i.',
    'Vilken utbildning eller kurs läraren läser, antal högskolepoäng och studietakt.',
    'Lärarens examen, eller vilket undantag i 3 § som gäller.',
    'Vald ersättningsmodell, tjänstgöringsgrad och hur stor del av tiden som avsätts för studier.',
    'Underlag som visar att läraren har fått minst 80 % av lönen vid tjänstledighet eller studier utanför deltid.',
    'För yrkeslärare utan examen: hur arbetet är ordnat för att kunna räknas som VFU.',
    'Uppgifter om avbrott, byte av arbetsgivare och hur mycket av bidraget som har använts.'
  ],

  kallor: [
    {
      titel: 'Förordning (2023:144) · Sveriges riksdag',
      url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-2023144-om-statsbidrag-for_sfs-2023-144/',
      beskrivning: 'Källan för vilka lärare och utbildningar som omfattas, de två ersättningsmodellerna, prioriteringen och återkrav. Paragrafhänvisningarna i guiden gäller den här förordningen.'
    },
    {
      titel: 'Statsbidrag för fortbildning av lärare och förskollärare 2026 · Skolverket',
      url: 'https://www.skolverket.se/styrning-och-ansvar/statsbidrag/hitta-statsbidrag/statsbidrag-for-fortbildning-av-larare-och-forskollarare-2026',
      beskrivning: 'Skolverkets anvisningar med schablonlöner, räkneexempel, utbildningar som omfattas, datum för 2026 och beräkningsstöd.'
    },
    {
      titel: 'SKOLFS 2024:497 · Skolverkets föreskrifter',
      url: 'https://skolfs.skolverket.se/api/document/GRUNDFORFATTNING/2024:497/pdf',
      beskrivning: 'Föreskrifterna om sista ansökningsdag (15 februari och 15 september) och ansökan i e-tjänsten.'
    }
  ],

  forbehall: 'Guiden sammanfattar reglerna och visar hur beloppet räknas ut. Räknaren kontrollerar inte rätten till bidrag, om en kurs omfattas eller om villkoret om 80 % av lönen är uppfyllt. Schablonlöner och datum gäller 2026 och kan ändras. Använd Skolverkets aktuella anvisningar och ert beslut när ni ansöker och redovisar. För äldre terminer kan äldre regler gälla.'
};
