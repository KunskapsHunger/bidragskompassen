/* Fördjupning: Utvecklingsprojekt för barn och elever med funktionsnedsättning (SPSM).
 * Bidraget styrs av SPSM:s regleringsbrev. SPSM tillämpar delar av förordning (1991:931) om statsbidrag till
 * särskilda insatser på skolområdet analogt (3 § andra stycket, 7 § tredje stycket och 10–13 a §§).
 * Innehållet är stämt mot SPSM:s "Information om bidraget till utvecklingsprojekt", bidragsår 2027
 * (2026-08-28, dnr 6 STA-2026/311), motsvarande information för 2026, SPSM:s sida om bidraget och
 * förordningen (ändrad t.o.m. SFS 2025:97). Schema: se FORDJUPNING.md – "Regelverk som inte är en svensk förordning". */
window.SB_FORDJUPNING = window.SB_FORDJUPNING || {};
window.SB_FORDJUPNING['spsm-utvecklingsprojekt'] = {
  id: 'spsm-utvecklingsprojekt',
  rubrik: 'Utvecklingsprojekt',
  rubrikKursiv: 'för barn och elever med funktionsnedsättning.',
  ingress: 'Bidraget betalar lön för den som driver ett ettårigt utvecklingsprojekt. Här står villkoren på vanlig svenska, och hur SPSM bedömer ansökningarna. Ni kan också räkna på det högsta beloppet.',
  kontrollerad: '2026-10-01',
  forordning: {
    namn: 'SPSM: Information om bidraget till utvecklingsprojekt, bidragsår 2027',
    etikett: 'SPSM:s information om bidraget',
    iText: 'i SPSM:s information',
    lydelse: '28 augusti 2026, dnr 6 STA-2026/311',
    url: 'https://www.spsm.se/contentassets/ca478d2407dd406a8eb8ef28ae49ae8c/2027-information-om-bidraget-utvecklingsprojekt.pdf'
  },

  snabbfaktaRubrik: 'Tre saker att känna till först',
  snabbfakta: [
    { rubrik: 'Bara lön', text: 'Bidraget täcker faktiska lönekostnader för projektledning och projektgrupp, högst 1,2 årsarbetare. Inga andra kostnader.' },
    { rubrik: 'Tak för 2027', text: 'Högst 778 000 kr per årsarbetare i genomsnitt, alltså högst 933 600 kr per projekt. Projektet får pågå högst 12 månader.' },
    { rubrik: 'Konkurrens om pengarna', text: 'SPSM poängsätter och rangordnar ansökningarna. Bidraget brukar vara översökt, så alla som uppfyller villkoren får inte bidrag.' }
  ],
  snabbfaktaNot: 'Ansökan för läsåret 2027/28 är öppen 1 oktober–30 november 2026.',

  begreppRubrik: 'Ord som återkommer',
  begrepp: [
    { term: 'Huvudman', forklaring: 'Den som driver skolan eller förskolan och ansvarar för utbildningen, till exempel en kommun eller en fristående skola.' },
    { term: 'Årsarbetare', forklaring: 'En person som arbetar heltid i ett år. Två personer på halvtid i ett år är tillsammans en årsarbetare.' },
    { term: 'Lönekostnad', forklaring: 'Lön plus arbetsgivaravgifter, pension och försäkringar enligt kollektivavtal.' },
    { term: 'Fortsättningsprojekt', forklaring: 'Ett andra projektår som bygger vidare på ett beviljat projekt. Det söks på nytt och konkurrerar med andra ansökningar.' },
    { term: 'Regleringsbrev', forklaring: 'Regeringens årliga beslut om vad en myndighet ska göra och vilka pengar den får. Det är där bidraget har sin grund.' }
  ],

  sektioner: {
    regler: {
      rubrik: 'Från villkor', rubrikKursiv: 'till praktik.',
      ingress: 'Bidraget har ingen egen förordning. Rubrikerna följer därför SPSM:s information om bidraget. Där SPSM använder reglerna i förordning (1991:931) står paragrafen i texten. Sök på till exempel ”tidredovisning”, ”poäng” eller ”återkrav”.'
    },
    praktik: {
      rubrik: 'Så används', rubrikKursiv: 'reglerna.',
      ingress: 'Ni ansöker hösten innan projektåret, genomför projektet under ett läsår och redovisar senast 30 september efteråt.'
    }
  },

  paragrafer: [
    {
      ref: 'Regelverk', rubrik: 'Vad som styr bidraget',
      text: [
        'Bidraget styrs av SPSM:s regleringsbrev för året. Det är en del av statsbidraget för särskilda insatser på skolområdet, som ofta förkortas SIS.',
        'Förordning (1991:931) om statsbidrag till särskilda insatser på skolområdet gäller inte direkt. SPSM använder ändå delar av den på samma sätt: att beslut kan ha villkor (3 §), att ni ska lämna de uppgifter SPSM behöver (7 §), och reglerna om uppföljning, hinder, anmälan, återkrav och stopp för utbetalning (10–13 a §§).'
      ],
      praktik: {
        rubrik: 'SPSM:s förklaring',
        text: 'Det mesta som styr bidraget står i SPSM:s information om bidraget och i ert beslut. Läs informationen för rätt år. Belopp och datum ändras mellan åren.'
      },
      nyckelord: ['regleringsbrev', 'SIS', 'särskilda insatser', 'förordning 1991:931', 'analog']
    },
    {
      ref: 'Syfte', rubrik: 'Vad ett utvecklingsprojekt ska leda till',
      text: ['Projektet ska bidra till något av det här:'],
      lista: [
        'Att barn och elever med funktionsnedsättning når målen i högre grad.',
        'Mer kunskap om pedagogiska arbetssätt som kan stödja barn och elever med funktionsnedsättning.'
      ],
      praktik: 'Bidraget kan också gå till analyser med samma syfte, enligt SPSM:s webbsida. Målgruppen måste vara barn, elever eller vuxenstuderande med funktionsnedsättning.',
      nyckelord: ['syfte', 'måluppfyllelse', 'arbetssätt', 'funktionsnedsättning', 'analys']
    },
    {
      ref: 'Vem kan söka', rubrik: 'Vilka huvudmän och skolformer',
      text: [
        'Kommunala och enskilda (fristående) huvudmän inom skolväsendet kan få bidraget.',
        'Projektet kan gälla förskola, förskoleklass, fritidshem, grundskola, anpassad grundskola, sameskola, gymnasieskola, anpassad gymnasieskola, kommunal vuxenutbildning och kommunal vuxenutbildning som anpassad utbildning.',
        'Om en fristående anordnare driver komvux åt kommunen och ska genomföra projektet, är det kommunen som söker. Den statliga specialskolan kan inte få bidraget.'
      ],
      nyckelord: ['huvudman', 'kommun', 'fristående', 'förskola', 'fritidshem', 'komvux', 'anpassad', 'specialskola', 'sameskola']
    },
    {
      ref: 'Ansökan', rubrik: 'Ansökan och behörig företrädare',
      text: [
        'Bidrag för 2027 söks 1 oktober–30 november 2026. Projektet genomförs under läsåret 2027/28.',
        'Ni ansöker i SPSM:s bidragsportal och behöver först skapa ett konto. Ansökan ska göras av en behörig företrädare för huvudmannen, till exempel förvaltningschef, skolchef, vd eller styrelseordförande.',
        'Ni ska lämna de uppgifter och handlingar som SPSM behöver för att pröva ansökan (jämför 7 § tredje stycket i förordning 1991:931).'
      ],
      praktik: 'SPSM har ett stöd för planeringen, Projektkompassen, och en översikt över frågorna i ansökan. Använd dem innan ni skriver.',
      nyckelord: ['ansökan', 'bidragsportal', 'konto', 'behörig företrädare', 'projektkompassen', '30 november']
    },
    {
      ref: 'Kostnader', rubrik: 'Vad bidraget betalar',
      text: [
        'Bidrag ges bara för lönekostnader för projektledning och projektgrupp, upp till 1,2 årsarbetare. Personerna måste vara anställda hos huvudmannen. Andra kostnader ger inget bidrag.',
        'Bidraget gäller faktiska lönekostnader upp till ett tak. För 2027 är taket 778 000 kr per årsarbetare i genomsnitt. Ett projekt kan alltså som mest få 778 000 × 1,2 = 933 600 kr.',
        'Bidrag ges för högst 12 månader per projekt.'
      ],
      praktik: {
        rubrik: 'SPSM:s förklaring',
        text: 'Taket bygger på genomsnittslönen för grundskollärare enligt SCB, uppräknad med arbetskostnadsindex. För 2026 var taket 672 000 kr per heltidstjänst och högst 806 400 kr per projekt. Lön för sjukfrånvaro på högst 14 dagar (sjuklön) räknas in. Arbetar personen bara delvis i projektet räknas bara motsvarande del av sjuklönen.'
      },
      nyckelord: ['lönekostnad', 'lön', 'tak', '778000', '933600', '672000', '806400', '1,2', 'årsarbetare', 'projektledare', 'projektgrupp', 'sjuklön', 'anställd']
    },
    {
      ref: 'Bedömning', rubrik: 'Så poängsätter SPSM ansökan',
      text: ['SPSM bedömer varje ansökan efter fyra kriterier och ger poäng för varje:'],
      lista: [
        'Behov, 0–2 poäng: finns ett tydligt beskrivet behov i den egna verksamheten, kopplat till en definierad målgrupp och till projektets mål? SPSM bedömer hur stort behovet är, inte hur många barn som berörs.',
        'Struktur, 0–2 poäng: är målen kopplade till målgrupp och behov och går de att utvärdera? Leder aktiviteterna mot målen? Finns en förankrad projektorganisation?',
        'Hållbarhet, 0–2 poäng: finns en tydlig plan för hur erfarenheterna ska tas tillvara när projektet är slut?',
        'Effekt, 0–4 poäng: hur goda och långsiktiga effekter väntas projektet ge för målgruppen?'
      ],
      praktik: 'Effekt väger tyngst. Skriv konkret vad som ska bli bättre för barnen eller eleverna, och hur ni ska kunna se det.',
      nyckelord: ['bedömning', 'kriterier', 'poäng', 'behov', 'struktur', 'hållbarhet', 'effekt', 'mål', 'implementering']
    },
    {
      ref: 'Fördelning', rubrik: 'Hur pengarna fördelas',
      text: [
        'Alla ansökningar poängsätts och rangordnas. En ansökan som får noll poäng på något kriterium kan inte få bidrag.',
        'Bidraget är oftast översökt: fler uppfyller villkoren än det finns pengar till. SPSM vill sprida pengarna mellan många mottagare. Därför kan SPSM begränsa hur många projekt huvudmän i en kommun får, och samma skolenhet kan nekas flera projekt.'
      ],
      praktik: 'Att en ansökan uppfyller villkoren är alltså ingen garanti för bidrag.',
      nyckelord: ['fördelning', 'rangordning', 'översökt', 'spridning', 'noll poäng', 'skolenhet']
    },
    {
      ref: 'Fortsättning', rubrik: 'Ett andra projektår',
      text: [
        'Ett projekt kan få bidrag i högst två år sammanlagt. Det andra året söks som ett fortsättningsprojekt och bedöms och rangordnas tillsammans med alla andra ansökningar.',
        'Fortsättningen ska vara en vidareutveckling av projektet. Ansökan ska beskriva konkret, med aktiviteter, vad som ska utvecklas jämfört med första året och varför projektet behöver ett år till. Även fortsättningen får pågå högst 12 månader.'
      ],
      nyckelord: ['fortsättningsprojekt', 'år 2', 'två år', 'vidareutveckling', 'förlängning']
    },
    {
      ref: 'Bokföring och tid', rubrik: 'Bokföring och tidredovisning',
      text: [
        'Kostnaderna ska bokföras separat, till exempel på ett eget kostnadsställe. Ni ska kunna ta fram ett utdrag ur bokföringen med bara projektets kostnader och intäkter.',
        'Ni ska ha en tidredovisning som visar den sammanlagda arbetstiden i projektet per månad. Den ska bygga på faktiskt arbetad tid och kunna lämnas till SPSM om de ber om den.'
      ],
      praktik: {
        rubrik: 'SPSM:s förklaring',
        text: 'Sjukfrånvaro på högst 14 dagar får räknas som arbetad tid, men bara den tid personen skulle ha arbetat i projektet. Semester, tjänstledighet, vård av barn och sjukskrivning på 15 dagar eller mer ska räknas bort.'
      },
      nyckelord: ['bokföring', 'kostnadsställe', 'tidredovisning', 'arbetstid', 'semester', 'sjukfrånvaro', 'vab', 'tjänstledighet']
    },
    {
      ref: 'Hinder', rubrik: 'När bidrag inte ges',
      text: ['SPSM tillämpar 10 a–10 c §§ i förordning (1991:931). Bidrag ges inte till en huvudman som:'],
      lista: [
        'Är i likvidation eller konkurs.',
        'Har skatte- eller avgiftsskulder eller andra skulder hos Kronofogden som drivs in i allmänt mål.',
        'Inte i tid har betalat ett återkrav av bidrag från SPSM.',
        'Har fått sitt godkännande återkallat av Skolinspektionen, eller fått verksamhetsförbud, för verksamhet som bidraget gäller.'
      ],
      praktik: 'Bidrag ges inte heller för kostnader som redan har fått ett annat statligt bidrag.',
      nyckelord: ['konkurs', 'likvidation', 'kronofogden', 'skolinspektionen', 'verksamhetsförbud', 'dubbel finansiering']
    },
    {
      ref: 'Beslut och utbetalning', rubrik: 'Beslut, utbetalning och kontaktperson',
      text: [
        'SPSM bedömer ansökningarna under första kvartalet 2027 och meddelar beslut i april 2027. Beslutet kan förenas med villkor.',
        'Bidraget betalas ut i två delar, i augusti och i november.',
        'Ett beviljat projekt får en kontaktperson på SPSM med specialpedagogisk kompetens. Ni har ett samtal när projektet startar och ett efter att projektet har redovisats.'
      ],
      nyckelord: ['beslut', 'april', 'utbetalning', 'augusti', 'november', 'kontaktperson', 'villkor']
    },
    {
      ref: 'Anmälan', rubrik: 'Anmäl förändringar',
      text: ['Den som har sökt eller fått bidraget ska så snart som möjligt meddela SPSM om något ändras som kan påverka rätten till bidraget eller hur stort det är.'],
      praktik: 'Det kan till exempel vara att projektledaren slutar eller att projektet blir försenat.',
      nyckelord: ['anmälan', 'förändring', 'projektledare slutar', 'försening']
    },
    {
      ref: 'Redovisning', rubrik: 'Slutredovisning och slutrapport',
      text: [
        'Ett projekt under läsåret 2027/28 ska slutredovisas, med slutrapport, senast 30 september 2028. Det görs i bidragsportalen.',
        'Fortsättningsprojekt redovisas så här: efter år 1 lämnar ni en slutredovisning som bara gäller år 1. Efter år 2 lämnar ni en slutredovisning för år 2 och en slutrapport som beskriver hela projektet, båda åren.'
      ],
      praktik: 'SPSM har en mall för slutrapporten och en översikt över redovisningsfrågorna på sin webbplats.',
      nyckelord: ['redovisning', 'slutredovisning', 'slutrapport', '30 september', 'mall']
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
        text: 'På bidrag som krävs tillbaka tas ränta ut från den trettionde dagen efter beslutet om återkrav: statens utlåningsränta plus två procentenheter. SPSM tillämpar också 13 a § i förordning (1991:931), som innebär att en utbetalning kan stoppas om villkoren inte längre är uppfyllda.'
      },
      nyckelord: ['kontroll', 'återkrav', 'återbetalning', 'ränta', 'stopp', 'outnyttjat']
    }
  ],

  kalkylatorer: [
    {
      id: 'belopp', modul: 'spsm-utvecklingsprojekt-belopp',
      flik: 'Räkna på bidrag', eyebrow: 'SPSM:s lönetak',
      rubrik: 'Hur mycket', rubrikKursiv: 'kan det bli?',
      ingress: 'Ange hur många årsarbetare projektet har och vad de kostar. Räknaren visar det högsta bidrag som taket ger. Vad ni faktiskt får står i SPSM:s beslut.',
      formel: { rubrik: 'Grundformeln', text: 'Högsta bidrag = det lägsta av den faktiska lönekostnaden och taket × årsarbetare. Högst 1,2 årsarbetare räknas.' },
      resultatRubrik: 'Högsta möjliga bidrag',
      falt: [
        { id: 'ar', typ: 'segment', etikett: 'Bidragsår', standard: '2027',
          alternativ: [
            { varde: '2027', etikett: '2027 · läsår 2027/28', hjalp: 'Tak 778 000 kr per årsarbetare, högst 933 600 kr.' },
            { varde: '2026', etikett: '2026 · läsår 2026/27', hjalp: 'Tak 672 000 kr per årsarbetare, högst 806 400 kr.' }
          ] },
        { id: 'arsarbetare', typ: 'tal', etikett: 'Årsarbetare i projektet', min: 0.01, max: 20, steg: 'any', standard: 1.2,
          hjalp: 'Summan av allas arbetstid i projektet. En person på 60 % i 12 månader är 0,6 årsarbetare.' },
        { id: 'lonekostnad', typ: 'tal', etikett: 'Lönekostnad för de årsarbetarna', min: 0, max: 100000000, steg: 1, standard: 900000, enhet: 'kr',
          hjalp: 'Faktisk lön under projektåret, med arbetsgivaravgifter, pension och försäkringar enligt kollektivavtal.' }
      ],
      exempel: [
        { etikett: 'Heltid med hög lön', varden: { arsarbetare: 1, lonekostnad: 820000 } },
        { etikett: 'Projektledare på halvtid', varden: { arsarbetare: 0.5, lonekostnad: 360000 } },
        { etikett: 'Fler än 1,2 årsarbetare', varden: { arsarbetare: 1.5, lonekostnad: 1125000 } }
      ],
      resultatNotis: 'Beloppet är ett tak. SPSM rangordnar ansökningarna och fördelar så långt pengarna räcker. Ni kan alltså få mindre, eller inget alls.',
      forbehall: [
        { rubrik: 'Formel', text: 'SPSM anger att bidraget gäller faktiska lönekostnader upp till 778 000 kr per årsarbetare i genomsnitt (2027) och högst 1,2 årsarbetare. Räknaren jämför er lönekostnad med taket gånger årsarbetarna och tar det lägsta. Har ni fler än 1,2 årsarbetare räknar den med lönekostnaden för 1,2 av dem, i proportion. Det är en förenkling.' },
        { rubrik: 'Det här prövar räknaren inte', text: 'Om projektet uppfyller kriterierna, vilka poäng det får, om personerna är anställda hos huvudmannen eller om tidredovisningen håller. Den räknar inte heller bort semester, tjänstledighet eller lång sjukfrånvaro – det behöver ni göra innan ni anger årsarbetare.' }
      ],
      tabell: {
        rubrik: 'Lönetak enligt SPSM',
        kolumner: ['Bidragsår', 'Projektet genomförs', 'Tak per årsarbetare', 'Högst per projekt (1,2 årsarbetare)'],
        rader: [
          ['2027', 'Läsåret 2027/28', '778 000 kr', '933 600 kr'],
          ['2026', 'Läsåret 2026/27', '672 000 kr', '806 400 kr']
        ],
        fotnot: 'Taket bygger på genomsnittslönen för grundskollärare enligt SCB, uppräknad med arbetskostnadsindex. Det räknas om varje år.'
      }
    }
  ],

  process: [
    { rubrik: 'Hitta behovet', text: 'Beskriv ett tydligt behov i den egna verksamheten för barn eller elever med funktionsnedsättning. Sätt mål som går att utvärdera och planera hur resultatet ska leva vidare. Använd gärna Projektkompassen.', ref: 'Syfte, Bedömning' },
    { rubrik: 'Ansök', text: 'Skapa konto i bidragsportalen. En behörig företrädare skickar in ansökan senast 30 november 2026 för läsåret 2027/28.', ref: 'Ansökan' },
    { rubrik: 'Beslut och start', text: 'Beslut kommer i april 2027. Hälften betalas ut i augusti och hälften i november. SPSM:s kontaktperson hör av sig när projektet startar.', ref: 'Beslut och utbetalning' },
    { rubrik: 'Genomför och dokumentera', text: 'Bokför kostnaderna på ett eget kostnadsställe och för tidredovisning per månad. Anmäl förändringar till SPSM så snart som möjligt.', ref: 'Bokföring och tid, Anmälan' },
    { rubrik: 'Redovisa', text: 'Lämna slutredovisning och slutrapport i bidragsportalen senast 30 september 2028. Vill ni fortsätta ett år till söker ni ett fortsättningsprojekt i nästa ansökningsomgång.', ref: 'Redovisning, Fortsättning' }
  ],

  underlagRubrik: 'Underlag att ha till hands',
  underlagIngress: 'Använd listan när ni förbereder ansökan och redovisning. Markeringarna sparas inte – de försvinner när ni stänger sidan.',
  underlag: [
    'Beskrivning av behovet, målgruppen och problemet i den egna verksamheten.',
    'Mål som går att utvärdera, aktiviteter och en projektorganisation.',
    'Plan för hur resultatet ska tas tillvara när projektet är slut.',
    'Vilka anställda som ska ingå i projektet, med arbetstid och beräknad lönekostnad.',
    'Delegationsordning eller annat som visar vem som är behörig företrädare.',
    'Under projektet: eget kostnadsställe, utdrag ur bokföringen och tidredovisning per månad.',
    'Vid fortsättningsprojekt: ansökan för år 1 och en beskrivning av vad som ska utvecklas år 2.'
  ],

  kallor: [
    {
      titel: 'Information om bidraget till utvecklingsprojekt, bidragsår 2027 · SPSM (pdf)',
      url: 'https://www.spsm.se/contentassets/ca478d2407dd406a8eb8ef28ae49ae8c/2027-information-om-bidraget-utvecklingsprojekt.pdf',
      beskrivning: 'Källan för målgrupp, kostnader, lönetak, bedömningskriterier, fortsättningsprojekt, tidredovisning och tider för 2027.'
    },
    {
      titel: 'Utvecklingsprojekt för barn och elever med funktionsnedsättning · SPSM',
      url: 'https://www.spsm.se/stod-och-rad/sok-statsbidrag/skolor-inom-skolvasendet/utvecklingsprojekt-till-barn-och-elever-med-funktionsnedsattning/',
      beskrivning: 'SPSM:s sida om bidraget med länkar till bidragsportalen, Projektkompassen, mallar för redovisning och listor över beviljade projekt.'
    },
    {
      titel: 'Information om bidraget till utvecklingsprojekt, bidragsår 2026 · SPSM (pdf)',
      url: 'https://www.spsm.se/globalassets/statsbidrag/statsbidrag-2026/2026-information-om-kriterier-utvecklingsprojekt-1.pdf',
      beskrivning: 'Förra årets villkor med lönetaket 672 000 kr per heltidstjänst och redovisning senast 30 september 2027.'
    },
    {
      titel: 'Förordning (1991:931) · Sveriges riksdag',
      url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-1991931-om-statsbidrag-till_sfs-1991-931/',
      beskrivning: 'Förordningen om särskilda insatser på skolområdet. SPSM tillämpar 3 § andra stycket, 7 § tredje stycket och 10–13 a §§ på samma sätt för utvecklingsprojekten.'
    }
  ],

  forbehall: 'Guiden sammanfattar SPSM:s villkor och visar hur det högsta beloppet räknas ut. Räknaren kontrollerar inte rätten till bidrag, projektets poäng eller hur mycket SPSM kan fördela. Taket och datumen gäller bidragsår 2027 och ändras varje år. Använd SPSM:s aktuella information och ert beslut när ni ansöker och redovisar.'
};
