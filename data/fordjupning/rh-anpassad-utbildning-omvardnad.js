/* Fördjupning: Omvårdnadsinsatser vid Rh-anpassad utbildning (elevhem och habilitering), SPSM.
 * Det finns ingen egen bidragsförordning. Regelverket är skollagen (2010:800) 15 kap. 9 och 35–40 §§,
 * gymnasieförordningen (2010:2039) 11 kap. 5–8 §§, 4 § förordning (2011:130) med instruktion för SPSM,
 * SPSM:s regleringsbrev (anslag 1:6 ap.1), SPSM:s föreskrifter SKOLFS 2009:24 och 2009:25 samt den årliga
 * överenskommelsen. Innehållet är stämt mot SPSM:s sida om bidraget och "Anvisning inför ansökan och redovisning,
 * läsår 2026/27" (2026-04-13, dnr 6 STA-2026/294). Schema: se FORDJUPNING.md – "Regelverk som inte är en svensk förordning". */
window.SB_FORDJUPNING = window.SB_FORDJUPNING || {};
window.SB_FORDJUPNING['rh-anpassad-utbildning-omvardnad'] = {
  id: 'rh-anpassad-utbildning-omvardnad',
  rubrik: 'Omvårdnad vid Rh-anpassad utbildning',
  rubrikKursiv: 'i klartext.',
  ingress: 'Bidraget betalar elevhem och habilitering för elever med svåra rörelsehinder på de fyra riksgymnasierna. Bara fyra huvudmän kan få det. Här står hur ansökan, överenskommelsen och redovisningen går till.',
  kontrollerad: '2026-10-01',
  forordning: {
    namn: 'SPSM: Anvisning inför ansökan och redovisning för elevhem och habilitering vid Rh-anpassad utbildning, läsår 2026/27',
    etikett: 'Regelverket för Rh-anpassad utbildning',
    iText: 'i regelverket',
    lydelse: 'SPSM:s anvisning 13 april 2026, dnr 6 STA-2026/294',
    url: 'https://www.spsm.se/siteassets/vara-skolor/sok-till-rh-anpassad-utbildning/2026-27-anvisning-infor-ansokan-och-redovisning.pdf'
  },

  snabbfaktaRubrik: 'Två saker att känna till först',
  snabbfakta: [
    { rubrik: 'Bara fyra huvudmän', text: 'Umeå kommun, Kristianstads kommun, Stockholms stad och Stiftelsen Bräcke Diakoni i Göteborg. Andra kan inte söka.' },
    { rubrik: 'Två tredjedelar från staten', text: 'Statsbidraget är två tredjedelar av de genomsnittliga kostnaderna per elev. Hemkommun och hemregion betalar den sista tredjedelen, via SPSM.' }
  ],
  snabbfaktaNot: 'Beloppet bestäms i en överenskommelse mellan SPSM och huvudmannen varje juni. Det finns inget fast belopp per elev.',

  begreppRubrik: 'Ord som återkommer',
  begrepp: [
    { term: 'Rh-anpassad utbildning', forklaring: 'Gymnasieutbildning för ungdomar med svåra rörelsehinder i de kommuner som regeringen har bestämt. Den tar emot elever från hela landet.' },
    { term: 'Omvårdnadsinsatser', forklaring: 'Boende i elevhem, omvårdnad i boendet och habilitering.' },
    { term: 'Habilitering', forklaring: 'Stöd som hjälper en person med medfödd eller tidig funktionsnedsättning att utveckla och behålla sin förmåga och leva så självständigt som möjligt.' },
    { term: 'Överenskommelse', forklaring: 'Det avtal SPSM och huvudmannen skriver under varje år. Det reglerar pengar och kvalitetskrav för läsåret.' },
    { term: 'Basnyckeltal', forklaring: 'SPSM:s schablonkostnad per elev. Den bygger på verksamheternas tidigare kostnader och räknas upp varje år.' }
  ],

  sektioner: {
    regler: {
      rubrik: 'Från lag', rubrikKursiv: 'till praktik.',
      ingress: 'Bidraget har ingen egen förordning. Rubrikerna följer skollagen, gymnasieförordningen och SPSM:s anvisning för läsåret.'
    },
    praktik: {
      rubrik: 'Så används', rubrikKursiv: 'reglerna.',
      ingress: 'Året följer läsåret: ansökan i maj, överenskommelse i juni, utbetalning i september och februari, redovisning senast 1 oktober efter läsåret.'
    }
  },

  paragrafer: [
    {
      ref: '15 kap. 9 och 35–38 §§ skollagen', rubrik: 'Vilka elever och vilka skolor',
      text: [
        'Kommuner som regeringen bestämmer får anordna Rh-anpassad utbildning i sin gymnasieskola. Utbildningen tar emot sökande från hela landet.',
        'Ett svårt rörelsehinder betyder här ett rörelsehinder, ensamt eller tillsammans med en annan funktionsnedsättning, som gör att ungdomen behöver en skola med Rh-anpassad utbildning för att kunna gå ett gymnasieprogram. Ungdomen behöver också habilitering och ibland boende i elevhem och omvårdnad i boendet.',
        'En särskild nämnd prövar antagningen till utbildningen.'
      ],
      nyckelord: ['rörelsehinder', 'riksgymnasium', 'RgRh', 'antagning', 'nämnd', 'målgrupp', 'hela landet']
    },
    {
      ref: '15 kap. 39–40 §§ skollagen', rubrik: 'Avgifter och ersättning från hemkommun och hemregion',
      text: [
        'Eleverna får inte betala avgift för omvårdnad i boendet eller habilitering. Avgift får tas ut för kost och logi.',
        'Hemkommunen ska betala ersättning för boende och omvårdnad i boendet. Hemregionen ska betala ersättning för habilitering. Pengarna går till den huvudman som har avtal med staten om verksamheten.'
      ],
      praktik: {
        rubrik: 'SPSM:s förklaring',
        text: 'Enligt SPSM:s föreskrifter (SKOLFS 2009:24) betalar eleven 3 000 kr i månaden för kost och logi, högst 27 000 kr för ett helt läsår. Huvudmannen tar ut avgiften. Om eleven inte använder sin elevhemsplats under mer än 14 dagar i följd under terminstid halveras avgiften från den femtonde dagen.'
      },
      nyckelord: ['avgift', 'kost och logi', '3000', '27000', 'hemkommun', 'hemregion', 'ersättning']
    },
    {
      ref: '11 kap. 5–8 §§ gymnasieförordningen', rubrik: 'Avtal med staten och hur kostnaden delas',
      text: [
        'Omvårdnadsinsatserna regleras i avtal mellan staten och den kommun eller annan huvudman som ansvarar för omvårdnaden.',
        'Ersättningen från hemkommun och hemregion ska motsvara en tredjedel av de genomsnittliga kostnaderna per elev för boende, omvårdnad i boendet och habilitering. SPSM får skriva närmare föreskrifter om ersättningen.'
      ],
      praktik: {
        rubrik: 'SPSM:s förklaring',
        text: 'Statsbidraget är de återstående två tredjedelarna. Det årliga beloppet står i SPSM:s regleringsbrev (anslag 1:6 ap.1). SPSM sköter enligt sin instruktion (4 §) administrationen när hemkommuner och hemregioner betalar sin del.'
      },
      nyckelord: ['avtal', 'grundavtal', 'en tredjedel', 'två tredjedelar', 'regleringsbrev', 'anslag', 'instruktion']
    },
    {
      ref: 'Ansökan', rubrik: 'Ansökan i bidragsportalen',
      text: [
        'Ansökan för nästa läsår lämnas i SPSM:s bidragsportal senast 15 maj. Portalen öppnar för ansökan 15 april. Varje person som arbetar med ansökan behöver ett eget konto.',
        'Ansökan ska innehålla:'
      ],
      lista: [
        'Beräknade kostnader och intäkter för verksamheten.',
        'En jämförelse med förra överenskommelsen, med förklaringar till ökningar och minskningar per kostnadspost.',
        'En separat beskrivning av varför kostnaderna avviker från SPSM:s basnyckeltal och riktvärden, enligt mallen i portalen.',
        'Elevuppgifter som stämmer med elevlistan.',
        'Miljöpolicy eller motsvarande dokument, och mål för miljöarbetet.'
      ],
      praktik: {
        rubrik: 'SPSM:s förklaring',
        text: 'Räkna bara med elever som är antagna och har tackat ja. Elever som väntar på besked, har överklagat eller inte har tackat ja tar ni i stället upp i en dialog med SPSM. Går en elev kortare tid än ett läsår avrundas elevantalet uppåt till helt läsår, och ni förklarar avrundningen i kommentarsfältet.'
      },
      nyckelord: ['ansökan', 'bidragsportal', '15 maj', '15 april', 'elevlista', 'miljöpolicy', 'prognos', 'kostnader', 'intäkter']
    },
    {
      ref: 'Basnyckeltal', rubrik: 'Basnyckeltal och riktvärden',
      text: [
        'SPSM utgår från en schablonkostnad per elev, basnyckeltalet. Den bygger på verksamheternas tidigare kostnader och räknas upp varje år.',
        'Riktvärdet för personal är 1,60 årsarbetare per elev i elevhemmet och 0,36 årsarbetare per elev i habiliteringen. Det gäller personal som ger direkt stöd i kärnverksamheten.'
      ],
      praktik: {
        rubrik: 'Godtagbara avvikelser',
        text: 'SPSM kan godta högre kostnader av strukturella skäl (till exempel när ett boende avvecklas eller elevantalet tillfälligt minskar), ortsspecifika skäl, skäl som hänger ihop med organisationsformen (till exempel att en stiftelse inte kan dra av moms) och avgränsade utvecklingsinsatser. Andra skäl bedöms från fall till fall.'
      },
      nyckelord: ['basnyckeltal', 'riktvärde', 'schablon', 'årsarbetare', '1,60', '0,36', 'avvikelse', 'moms']
    },
    {
      ref: 'Överenskommelse', rubrik: 'Preliminär och slutlig överenskommelse',
      text: [
        'SPSM granskar ansökan och gör en preliminär överenskommelse i portalen. Huvudmannen granskar den, godkänner eller skriver in synpunkter.',
        'Elevförteckningen uppdateras i början av juni. SPSM:s mål är att den slutliga överenskommelsen ska vara undertecknad av båda parter i slutet av juni. Huvudmannen laddar upp den undertecknade versionen i portalen. Till överenskommelsen hör en avtalad elevlista.',
        'Överenskommelsen reglerar pengar och kvalitetskrav för elevhem, omvårdnad i boendet och habilitering.'
      ],
      praktik: {
        rubrik: 'Kvalitetskrav',
        text: 'SPSM:s anvisningar om kvalitetskrav för elevhem och för habilitering beskriver vad SPSM följer upp, till exempel ledningssystem för kvalitetsarbete, rutiner vid inflyttning och tillgängliga lokaler. Huvudmannen ska också bedriva verksamheten ekonomiskt effektivt och anpassa den när elevantalet ändras.'
      },
      nyckelord: ['överenskommelse', 'preliminär', 'juni', 'underteckna', 'elevlista', 'kvalitetskrav', 'elevhem', 'habilitering']
    },
    {
      ref: 'Kostnader', rubrik: 'Vilka kostnader som räknas',
      text: ['Statsbidraget täcker kostnader för:'],
      lista: [
        'Personal i kärnverksamheten: löner med personalomkostnader, arvoden, vikarier och inhyrd personal, utbildning och handledning.',
        'Lokaler: hyra, el, värme, vatten, larm, brandskydd, städ och vaktmästeri.',
        'Indirekt administration: till exempel central ekonomi, HR och IT. Kan anges som schablon.',
        'Övriga verksamhetskostnader: till exempel hjälpmedel, transporter, förbrukningsmaterial och fritidsaktiviteter för eleverna.',
        'Kapitaltjänst: avskrivningar och räntor vid investeringar. För stiftelsen även moms.'
      ],
      praktik: 'Intäkter ska också redovisas, till exempel elevavgifter för kost och logi, uthyrning och parkering. Huvudmannen ansvarar för att pengarna bara går till den avtalade verksamheten och att inget finansieras dubbelt.',
      nyckelord: ['kostnader', 'personal', 'lokaler', 'administration', 'kapitaltjänst', 'avskrivning', 'intäkter', 'dubbelfinansiering']
    },
    {
      ref: 'Utbetalning', rubrik: 'Utbetalning och ersättning',
      text: [
        'SPSM betalar ut statsbidraget enligt överenskommelsen: senast 1 september för höstterminen och senast 1 februari för vårterminen.',
        'Ersättningen från hemkommuner och hemregioner betalas ut senast 15 oktober för höstterminen och senast 15 april för vårterminen (8 § SKOLFS 2009:25).',
        'För elever som antas under läsåret, och som inte finns med i överenskommelsen, för SPSM över ersättningen från hemkommun och hemregion separat.'
      ],
      praktik: {
        rubrik: 'Återbetalning till hemkommunen',
        text: 'Om en elev avbryter studierna eller får studieuppehåll under terminen ska en del av ersättningen betalas tillbaka till hemkommun och hemregion (9 § SKOLFS 2009:25). Har eleven av annat skäl inte fått boende eller habilitering kan ersättningen delvis betalas tillbaka om det finns särskilda skäl. Beräkningen görs per vecka, avrundat uppåt.'
      },
      nyckelord: ['utbetalning', '1 september', '1 februari', '15 oktober', '15 april', 'återbetalning', 'studieavbrott', 'studieuppehåll']
    },
    {
      ref: 'Redovisning', rubrik: 'Ekonomisk redovisning och verksamhetsuppföljning',
      text: [
        'Senast 1 oktober efter läsåret lämnar huvudmannen en ekonomisk redovisning i portalen. Den ska förklara avvikelser i kostnader och årsarbetare jämfört med överenskommelsen och visa eventuellt överskott eller underskott.',
        'Samma datum ska verksamhetsuppföljningen vara inne. Den är en enkät om hur elevhemmet och habiliteringen uppfyller kvalitetskraven.',
        'Elevantalet i redovisningen ska vara det faktiska antalet elever under läsåret och stämma med elevlistan.'
      ],
      praktik: {
        rubrik: 'Överskott och underskott',
        text: 'SPSM bedömer om överskott eller underskott är rätt motiverat. Vid överskott betalar huvudmannen tillbaka enligt faktura. Vid underskott betalar SPSM ut det beslutade beloppet. Är ni inte överens beslutar SPSM om beloppet. Vartannat år gör SPSM också en enkät med eleverna.'
      },
      nyckelord: ['redovisning', '1 oktober', 'överskott', 'underskott', 'verksamhetsuppföljning', 'enkät', 'elevenkät']
    }
  ],

  process: [
    { rubrik: 'Ansök i maj', text: 'Räkna fram kostnader och intäkter för nästa läsår och förklara avvikelser mot basnyckeltalen. Skicka ansökan i bidragsportalen 15 april–15 maj.', ref: 'Ansökan, Basnyckeltal' },
    { rubrik: 'Överenskommelse i juni', text: 'Uppdatera elevförteckningen i början av juni, granska den preliminära överenskommelsen och skriv under den slutliga, helst i slutet av juni.', ref: 'Överenskommelse' },
    { rubrik: 'Under läsåret', text: 'Statsbidraget kommer senast 1 september och 1 februari. Uppdatera elevlistan i september och mars, och meddela SPSM när elever börjar, slutar eller flyttar.', ref: 'Utbetalning' },
    { rubrik: 'Redovisa 1 oktober', text: 'Lämna ekonomisk redovisning och verksamhetsuppföljning för läsåret senast 1 oktober.', ref: 'Redovisning' }
  ],

  underlagRubrik: 'Underlag att ha till hands',
  underlagIngress: 'Använd listan när ni förbereder ansökan och redovisning. Markeringarna sparas inte – de försvinner när ni stänger sidan.',
  underlag: [
    'Förra årets överenskommelse och avtalade elevlista.',
    'Prognos för kostnader och intäkter per kostnadspost, med förklaringar till förändringar.',
    'Beskrivning av avvikelser mot basnyckeltal och riktvärden enligt mallen i portalen.',
    'Aktuell elevlista: antagna elever som har tackat ja, för elevhem och habilitering.',
    'Miljöpolicy eller motsvarande dokument, med mål för miljöarbetet.',
    'Inför redovisningen: utfall per kostnadspost, årsarbetare och faktiskt antal elever.'
  ],

  kallor: [
    {
      titel: 'Omvårdnadsinsatser Rh-anpassad utbildning · SPSM',
      url: 'https://www.spsm.se/stod-och-rad/sok-statsbidrag/omvardnadsinsatser-rh-anpassad-utbildning/',
      beskrivning: 'SPSM:s sida med årshjul, bidragsportalen, anvisningar om kvalitetskrav och manual.'
    },
    {
      titel: 'Anvisning inför ansökan och redovisning, läsår 2026/27 · SPSM (pdf)',
      url: 'https://www.spsm.se/siteassets/vara-skolor/sok-till-rh-anpassad-utbildning/2026-27-anvisning-infor-ansokan-och-redovisning.pdf',
      beskrivning: 'Källan för ansökan, basnyckeltal, överenskommelse, kostnadsposter, redovisning och utbetalning.'
    },
    {
      titel: 'Skollag (2010:800) · Sveriges riksdag',
      url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/skollag-2010800_sfs-2010-800/',
      beskrivning: '15 kap. 9 och 35–40 §§ om Rh-anpassad utbildning, avgifter och ersättning från hemkommun och hemregion.'
    },
    {
      titel: 'Gymnasieförordning (2010:2039) · Sveriges riksdag',
      url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/gymnasieforordning-20102039_sfs-2010-2039/',
      beskrivning: '11 kap. 5–8 §§ om avtal med staten, avgifter och ersättningens storlek.'
    },
    {
      titel: 'SKOLFS 2009:25 om ersättning för vissa kostnader · Skolverkets författningssamling (pdf)',
      url: 'https://skolfs.skolverket.se/api/document/SENASTE_LYDELSE/2009:25/pdf',
      beskrivning: 'SPSM:s föreskrifter om ersättning från hemkommun och hemregion, utbetalning och återbetalning.'
    }
  ],

  forbehall: 'Guiden sammanfattar regelverket och SPSM:s anvisning för läsåret 2026/27. Det som gäller för er huvudman står i grundavtalet och den årliga överenskommelsen. Datum och nyckeltal kan ändras mellan läsåren. Använd SPSM:s aktuella anvisningar när ni ansöker och redovisar.'
};
