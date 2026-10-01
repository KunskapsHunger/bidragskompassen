// Bidrag och offentlig finansiering för skolor från andra myndigheter än Skolverket.
// Kontrollerat 2026-09-25. Se SCHEMA.md för fältbeskrivningar.
window.SB_GRANTS = window.SB_GRANTS || [];
window.SB_GRANTS.push(
  {
    id: "skapande-skola",
    namn: "Skapande skola",
    kortnamn: "Skapande skola – kultur i grundskolan",
    myndighet: "Kulturrådet",
    giltighet: "aktiv",
    sammanfattning: "Pengar för att låta elever i grundskolan möta professionella kulturaktörer och själva skapa – till exempel teater, dans, musik, film, konst och litteratur. Både kommunala och fristående skolor kan söka.",
    syfte: "Bidraget ska ge elever möjlighet att uppleva och själva skapa kultur tillsammans med professionella konstnärer och kulturskapare. Tanken är att kulturen ska bli en naturlig del av skolans arbete på lång sikt.",
    omraden: ["kultur"],
    skolformer: ["forskoleklass", "grundskola", "anpassad-grundskola", "specialskola", "sameskola"],
    sokande: { fristaende: "ja", kommun: "ja", region: "nej", stat: "ja", ovriga: "nej" },
    sokandeNot: "Den som driver skolan (huvudmannen) söker – kommun, stat eller fristående huvudman. En fristående skola kan söka själv eller ingå i kommunens ansökan. Flera fristående huvudmän kan söka tillsammans, men då måste en av dem ansvara för både ansökan och redovisning. Kulturaktörer kan inte söka själva.",
    typ: "ansokan",
    perioder: [
      { typ: "ansokan", fran: "2027-01-11", till: "2027-02-10", text: "Ansökan för läsåret 2027/28 väntas vara öppen i januari–början av februari 2027. För läsåret 2026/27 var perioden 13 januari–10 februari 2026.", ungefar: true },
      { typ: "beslut", fran: "2027-04-01", till: "2027-04-30", text: "Beslut kommer cirka 12 veckor efter sista ansökningsdag, vanligen i april.", ungefar: true },
      { typ: "redovisning", fran: null, till: null, text: "Sista redovisningsdag står i ert beslut. Redovisningen öppnar i e-tjänsten 28 dagar innan.", ungefar: false }
    ],
    belopp: "Inget fast belopp per elev. Läsåret 2026/27 fördelades cirka 220 miljoner kronor på 443 ansökningar. Pengarna räckte till knappt 71 procent av det totala sökta beloppet. Hur stor andel varje huvudman fick varierar, eftersom beloppet viktas – bland annat så att små huvudmän kan göra satsningar på liknande villkor som stora. Ansökningar med elever i anpassad grundskola och särskilda undervisningsformer (t.ex. specialskola och sjukhusskola) samt huvudmän i glesbygd prioriterades.",
    villkor: [
      "Pengarna ska gå till professionella kulturaktörer, t.ex. arvoden, resor, entréer, material och lokalhyra.",
      "Transporter får vara högst 20 procent av bidraget.",
      "Pengarna får inte gå till skolans vanliga undervisning, lärarlöner, administration eller skolresor.",
      "Skolhuvudmannen intygar i ansökan att det finns ett eget kulturarbete och en handlingsplan med tydliga mål. Planen skickas inte in.",
      "Bidraget får inte ersätta pengar som skolan redan lägger på kultur."
    ],
    hurDuGor: [
      "Prata med elever och lärare om vilken kultur de vill möta och skapa.",
      "Hitta professionella kulturaktörer, till exempel via Kulturrådets tips eller regionens kulturkonsulenter.",
      "Bestäm vem hos huvudmannen som samordnar ansökan och är kontaktperson.",
      "Sök i Kulturrådets e-tjänst under ansökningsperioden i januari–februari.",
      "Genomför projekten under läsåret och spara alla kvitton.",
      "Redovisa i e-tjänsten senast det datum som står i beslutet och betala tillbaka pengar som inte använts."
    ],
    redovisning: "Ni redovisar i Kulturrådets e-tjänst vad som gjorts, hur många elever som deltog, vilka kulturaktörer som medverkade och hur pengarna använts per kostnadsslag. Sista dag står i beslutet. Pengar som inte använts betalas tillbaka till Kulturrådet.",
    fallgropar: [
      "Att använda pengarna till sådant som hör till vanlig undervisning eller skolresor – det kan leda till återkrav.",
      "Att ändra projektet utan att först kontakta Kulturrådet (skapandeskola@kulturradet.se).",
      "Att kulturaktören inte räknas som professionell enligt Kulturrådets definition.",
      "Att missa att ansökan bara går att göra en gång per år."
    ],
    nyckelord: ["kultur", "teater", "dans", "musik", "konst", "författarbesök", "skapande", "kulturaktör", "Skapande skola", "kulturbidrag"],
    kallor: [
      { titel: "Kulturrådet – Skapande skola", url: "https://www.kulturradet.se/sok-bidrag/skapande-skola/" },
      { titel: "Kulturrådet – Beslut och fördelning läsåret 2026/2027", url: "https://www.kulturradet.se/i-fokus/barn-och-unga/skapande-skola/nyheter/2026/beslut-och-fordelning-av-skapande-skola-bidraget-lasaret-2026-2027/" },
      { titel: "Kulturrådet – Så redovisar du Skapande skola", url: "https://www.kulturradet.se/sok-bidrag/skapande-skola/sa-redovisar-du/" },
      { titel: "Förordning (2007:1436) om statsbidrag till kulturell verksamhet i skolan", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-20071436-om-statsbidrag-till_sfs-2007-1436/" },
      { titel: "Kulturrådet – Riktlinjer för statsbidrag till Skapande skola", url: "https://www.kulturradet.se/globalassets/start/om-oss/sa-arbetar-kulturradet/sa-styrs-vi/riktlinjer/riktlinjer-dokument/riktlinjer-for-statsbidrag-till-skapande-skola-260609.pdf" }
    ],
    senastKontrollerad: "2026-10-01",
    osakerhet: "Datum för ansökan 2027 är inte publicerade ännu; de är uppskattade utifrån 2026. Förskoleklassen omfattas: det framgår av förordningen (1 och 4 §§) och Kulturrådets riktlinjer."
  },

  {
    id: "kulturradet-mer-lasning",
    namn: "Mer läsning – främja litteratur och läsning",
    kortnamn: "Mer läsning – läsfrämjande projekt",
    myndighet: "Kulturrådet",
    giltighet: "aktiv",
    sammanfattning: "Projektpengar för att få barn och unga att läsa mer, främst på fritiden. Folkbibliotek och kommuner söker oftast, men förskolor, skolor och skolbibliotek kan i vissa fall söka själva.",
    syfte: "Bidraget ska utveckla arbetet med att främja litteratur och läsning genom tidsbegränsade projekt, särskilt för barn och unga.",
    omraden: ["lasning", "kultur"],
    skolformer: ["forskola", "grundskola", "anpassad-grundskola", "gymnasieskola", "anpassad-gymnasieskola"],
    sokande: { fristaende: "villkor", kommun: "ja", region: "ja", stat: "villkor", ovriga: "nej" },
    sokandeNot: "Folkbibliotek, kommuner, regioner och andra offentliga aktörer kan söka. Kulturrådet nämner uttryckligen fristående skolor och förskolor. En förskola, skola eller ett skolbibliotek kan bara söka själv om projektet ligger utanför skolans vanliga uppdrag, till exempel läsning på fritiden. Annars kan skolan vara med i ett projekt tillsammans med folkbiblioteket. Föreningar kan vara samarbetspartner men inte söka.",
    typ: "ansokan",
    perioder: [
      { typ: "ansokan", fran: "2026-09-03", till: "2026-10-01", text: "Ansökan är öppen 3 september–1 oktober 2026.", ungefar: false },
      { typ: "beslut", fran: "2026-11-15", till: "2026-12-15", text: "Beslut kommer cirka 8 veckor efter sista ansökningsdag och skickas med e-post till kontaktpersonen.", ungefar: true },
      { typ: "redovisning", fran: null, till: null, text: "Redovisning i Kulturrådets e-tjänst senast det datum som står i beslutet.", ungefar: false }
    ],
    belopp: "Inget högsta eller lägsta belopp anges. Budgeten ska vara skälig. Pengarna kan gå till t.ex. arvoden till professionella kulturaktörer, resor, material, nätverk, fortbildning och spridning av erfarenheter.",
    villkor: [
      "Projektet ska vara tidsbegränsat.",
      "Skolor och skolbibliotek som söker själva måste visa att insatsen ligger utanför skolans ordinarie verksamhet och ansvar.",
      "Budgeten ska vara rimlig."
    ],
    hurDuGor: [
      "Kontakta folkbiblioteket i kommunen – ofta är det enklast att söka tillsammans.",
      "Beskriv vilka barn eller unga ni vill nå och hur de ska läsa mer på fritiden.",
      "Gör en enkel budget med arvoden, material och resor.",
      "Sök i Kulturrådets e-tjänst senast 1 oktober 2026.",
      "Genomför projektet och spara underlag.",
      "Redovisa i e-tjänsten när projektet är klart."
    ],
    redovisning: "Ni redovisar i Kulturrådets e-tjänst senast det datum som anges i beslutet, enligt villkoren i beslutet.",
    fallgropar: [
      "Att söka för sådant som redan är skolans ansvar, till exempel vanlig läsundervisning.",
      "Att söka som förening – föreningar kan bara vara samarbetspartner här.",
      "Att missa att ansökan bara är öppen i ungefär en månad på hösten."
    ],
    nyckelord: ["läsning", "läsfrämjande", "bibliotek", "skolbibliotek", "böcker", "litteratur", "läslust", "författare"],
    kallor: [
      { titel: "Kulturrådet – Mer läsning – främja litteratur och läsning", url: "https://www.kulturradet.se/sok-bidrag/mer-lasning-framja-litteratur-och-lasning/" }
    ],
    senastKontrollerad: "2026-09-25",
    osakerhet: "Totalbudget för 2026 års omgång är inte angiven på sidan. Beslutsdatum är uppskattat utifrån Kulturrådets uppgift om cirka 8 veckor. Om statliga skolor (t.ex. specialskolan) kan söka framgår inte uttryckligen."
  },

  {
    id: "spsm-utvecklingsprojekt",
    namn: "Utvecklingsprojekt för barn och elever med funktionsnedsättning",
    kortnamn: "SPSM – utvecklingsprojekt, särskilt stöd",
    myndighet: "SPSM",
    giltighet: "aktiv",
    sammanfattning: "Statsbidrag för att under ett år pröva och utveckla arbetssätt för barn och elever med funktionsnedsättning. Pengarna betalar lön för projektledare och projektgrupp. Både kommunala och fristående huvudmän kan söka.",
    syfte: "Bidraget ska öka måluppfyllelsen och kunskapen om olika pedagogiska arbetssätt för barn och elever med funktionsnedsättning. Det ingår i statsbidraget för särskilda insatser på skolområdet (SIS).",
    omraden: ["stod"],
    skolformer: ["forskola", "forskoleklass", "fritidshem", "grundskola", "anpassad-grundskola", "sameskola", "gymnasieskola", "anpassad-gymnasieskola", "komvux"],
    sokande: { fristaende: "ja", kommun: "ja", region: "villkor", stat: "nej", ovriga: "nej" },
    sokandeNot: "Kommunala och enskilda (fristående) huvudmän inom skolväsendet kan söka. Projektet kan gälla förskola, förskoleklass, fritidshem, grundskola, anpassad grundskola, sameskola, gymnasieskola, anpassad gymnasieskola och komvux, även komvux som anpassad utbildning. En region kan söka om den är huvudman för en skola. Specialskolan (staten) kan inte få bidraget. Om en fristående anordnare driver komvux på uppdrag av kommunen är det kommunen som söker. Ansökan ska göras av en behörig företrädare, till exempel förvaltningschef, skolchef, vd eller styrelseordförande.",
    typ: "ansokan",
    perioder: [
      { typ: "ansokan", fran: "2026-10-01", till: "2026-11-30", text: "Ansökan 1 oktober–30 november 2026, för projekt under läsåret 2027/28.", ungefar: false },
      { typ: "beslut", fran: "2027-04-01", till: "2027-04-30", text: "SPSM bedömer ansökningarna under första kvartalet 2027 och meddelar beslut i april 2027.", ungefar: false },
      { typ: "utbetalning", fran: "2027-08-01", till: "2027-11-30", text: "Hälften betalas ut i augusti och hälften i november 2027.", ungefar: false },
      { typ: "redovisning", fran: null, till: "2028-09-30", text: "Slutredovisning och slutrapport för projekt under läsåret 2027/28 senast 30 september 2028, i SPSM:s bidragsportal.", ungefar: false }
    ],
    belopp: "Bidraget täcker faktiska lönekostnader för högst 1,2 tjänst i projektledning och projektgrupp. För 2027 är taket 778 000 kr per heltidstjänst, alltså högst 933 600 kr per projekt.",
    villkor: [
      "Projektet får pågå högst 12 månader per ansökan. Vill ni fortsätta ett andra år måste ni söka igen (högst 2 år totalt).",
      "Pengarna gäller lönekostnader för projektledning och projektgrupp.",
      "Projektet ska handla om barn eller elever med funktionsnedsättning."
    ],
    hurDuGor: [
      "Beskriv ett tydligt utvecklingsbehov för barn eller elever med funktionsnedsättning.",
      "Använd gärna SPSM:s stöd Projektkompassen när ni planerar.",
      "Skapa konto i SPSM:s bidragsportal.",
      "Låt en behörig företrädare för huvudmannen skicka in ansökan senast 30 november 2026.",
      "Genomför projektet under läsåret 2027/28 och följ upp resultaten.",
      "Redovisa till SPSM senast 30 september året efter."
    ],
    redovisning: "Redovisning till SPSM senast 30 september efter projektåret, med resultat och hur pengarna använts.",
    fallgropar: [
      "Att ansökan skickas in av någon som inte är behörig företrädare för huvudmannen.",
      "Att räkna med kostnader för annat än lön – bidraget gäller personalkostnader i projektet.",
      "Att planera ett projekt längre än 12 månader utan att söka igen."
    ],
    nyckelord: ["funktionsnedsättning", "NPF", "särskilt stöd", "specialpedagogik", "SIS", "utvecklingsprojekt", "SPSM", "anpassningar"],
    kallor: [
      { titel: "SPSM – Utvecklingsprojekt för barn och elever med funktionsnedsättning", url: "https://www.spsm.se/stod-och-rad/sok-statsbidrag/skolor-inom-skolvasendet/utvecklingsprojekt-till-barn-och-elever-med-funktionsnedsattning/" },
      { titel: "SPSM – Statsbidrag för skolor och förskolor", url: "https://www.spsm.se/stod-och-rad/sok-statsbidrag/skolor-inom-skolvasendet/" },
      { titel: "SPSM – Information om bidraget till utvecklingsprojekt, bidragsår 2027 (pdf)", url: "https://www.spsm.se/contentassets/ca478d2407dd406a8eb8ef28ae49ae8c/2027-information-om-bidraget-utvecklingsprojekt.pdf" },
      { titel: "Förordning (1991:931) om statsbidrag till särskilda insatser på skolområdet", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-1991931-om-statsbidrag-till_sfs-1991-931/" }
    ],
    senastKontrollerad: "2026-10-01",
    osakerhet: "Bidraget har ingen egen förordning. Det styrs av SPSM:s regleringsbrev, och SPSM tillämpar delar av förordning (1991:931) på samma sätt (bland annat om uppgifter, uppföljning, återkrav och stopp för utbetalning). Villkor och belopp kan därför ändras från år till år. Att regioner kan söka bygger på att de kan vara huvudmän; SPSM nämner bara kommunala och enskilda huvudmän."
  },

  {
    id: "spsm-regionala-utbildningsinsatser",
    namn: "Regionala utbildningsinsatser",
    kortnamn: "Regionala insatser – särskilt stöd",
    myndighet: "SPSM",
    giltighet: "aktiv",
    sammanfattning: "Statsbidrag till skolor som ordnar särskild undervisning för elever med funktionsnedsättning som kommer från andra kommuner. Upp till 25 000 kr per elev och termin.",
    syfte: "Bidraget ska göra det möjligt att erbjuda samordnad och anpassad utbildning för elever med funktionsnedsättning i en region, även när eleverna bor i olika kommuner. Det ingår i statsbidraget för särskilda insatser på skolområdet (SIS).",
    omraden: ["stod"],
    skolformer: ["grundskola", "anpassad-grundskola", "gymnasieskola", "anpassad-gymnasieskola"],
    sokande: { fristaende: "ja", kommun: "ja", region: "villkor", stat: "nej", ovriga: "nej" },
    sokandeNot: "Huvudmän som ordnar en regional utbildningsinsats i grundskola, anpassad grundskola, gymnasieskola eller anpassad gymnasieskola kan söka. Regelverket talar om huvudmän inom skolväsendet, vilket även omfattar fristående huvudmän. Ansökan ska göras av en behörig företrädare.",
    typ: "ansokan",
    perioder: [
      { typ: "ansokan", fran: "2026-09-15", till: "2026-10-30", text: "Ansökan för bidragsåret 2027 görs 15 september–30 oktober 2026.", ungefar: false },
      { typ: "redovisning", fran: "2026-11-01", till: "2026-11-30", text: "Redovisning för bidragsåret 2026 görs 1–30 november 2026.", ungefar: false },
      { typ: "beslut", fran: "2026-11-01", till: "2026-11-30", text: "SPSM räknar med att besluta om preliminär fördelning för 2027 i november 2026.", ungefar: true },
      { typ: "beslut", fran: "2027-01-01", till: "2027-01-31", text: "SPSM räknar med att besluta om utbetalning för 2027 i januari 2027.", ungefar: true },
      { typ: "utbetalning", fran: null, till: null, text: "Bidraget betalas ut med en fjärdedel i mars, juni, september och december 2027 (9 § i förordningen).", ungefar: false }
    ],
    belopp: "Upp till 25 000 kr per elev och termin. För en hel termin ska eleven ha deltagit i minst 30 kalenderdagar. För kortare insatser med ett begränsat antal tillfällen under året: högst 750 kr per tillfälle och elev.",
    villkor: [
      "Insatsen ska i stor utsträckning komma elever till del som är folkbokförda i en annan kommun än där utbildningen bedrivs. Enligt SPSM ges bidrag bara för de eleverna, inte för elever från den egna kommunen.",
      "Eleverna ska ha en funktionsnedsättning eller andra särskilda behov som kräver anpassningar. I anpassad skola gäller det elever med intellektuell funktionsnedsättning och minst en ytterligare funktionsnedsättning."
    ],
    hurDuGor: [
      "Kontrollera att er insats tar emot elever från flera kommuner.",
      "Skapa konto i SPSM:s bidragsportal (kontoregistrering öppnar i början av september).",
      "Räkna ut hur många elever och terminer eller tillfällen ni söker för.",
      "Låt en behörig företrädare skicka in ansökan senast 30 oktober 2026.",
      "Redovisa förra årets bidrag under november."
    ],
    redovisning: "Redovisning görs i SPSM:s bidragsportal. För bidragsåret 2026 är redovisningsperioden 1–30 november 2026.",
    fallgropar: [
      "Att de flesta eleverna bor i den egna kommunen – då uppfylls inte kravet.",
      "Att glömma att redovisa förra årets bidrag samtidigt som ni söker nytt."
    ],
    nyckelord: ["funktionsnedsättning", "hörselklass", "synnedsättning", "regional skola", "SIS", "särskilt stöd", "SPSM"],
    kallor: [
      { titel: "SPSM – Regionala utbildningsinsatser", url: "https://www.spsm.se/stod-och-rad/sok-statsbidrag/skolor-inom-skolvasendet/regionala-utbildningsinsatser/" },
      { titel: "Förordning (1991:931) om statsbidrag till särskilda insatser på skolområdet", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-1991931-om-statsbidrag-till_sfs-1991-931/" },
      { titel: "SPSM – Information om bidraget Regionala utbildningsinsatser, bidragsår 2027 (pdf)", url: "https://www.spsm.se/contentassets/be7f1d8e5187492e96fad4488a428f00/2027-information-om-bidraget-regionala-utbildningsinsatser.pdf" }
    ],
    senastKontrollerad: "2026-10-01",
    osakerhet: "Besluten i november 2026 och januari 2027 är SPSM:s planering, inte fasta datum. SPSM:s sida skriver ”huvudmän” utan att räkna upp fristående; att fristående huvudmän kan söka bygger på förordningens formulering ”huvudman inom skolväsendet”."
  },

  {
    id: "atlas-partnerskap",
    namn: "Atlas partnerskap",
    kortnamn: "Atlas – utbyte med skolor utanför EU",
    myndighet: "UHR",
    giltighet: "aktiv",
    sammanfattning: "Statliga pengar för utbyte mellan lärare och elever och en partnerskola utanför EU/EES, till exempel i Asien, Afrika eller Amerika. För förskola till komvux. Finns också Atlas planering för att hitta en partner.",
    syfte: "Programmet ska hjälpa svenska skolor att samarbeta med skolor i resten av världen, så att elever når läroplanens mål och får ett internationellt perspektiv.",
    omraden: ["internationellt"],
    skolformer: ["forskola", "forskoleklass", "grundskola", "anpassad-grundskola", "specialskola", "sameskola", "fritidshem", "gymnasieskola", "anpassad-gymnasieskola", "komvux"],
    sokande: { fristaende: "ja", kommun: "ja", region: "ja", stat: "ja", ovriga: "villkor" },
    sokandeNot: "Förskolor, skolor och organisationer inom vuxenutbildningen söker som skolenhet – det gäller både kommunala och fristående skolor. Även specialskolor, sameskolor, fritidshem och allmän kurs på folkhögskola kan söka. Beslut och post går till rektor.",
    typ: "ansokan",
    perioder: [
      { typ: "ansokan", fran: null, till: null, text: "Man kan söka en gång per år. Ansökan är stängd nu och nästa omgång är inte publicerad. UHR har tidigare haft informationsmöten om ansökan i mars.", ungefar: true },
      { typ: "beslut", fran: null, till: null, text: "Beslut tidigast 10 veckor efter sista ansökningsdag.", ungefar: false }
    ],
    belopp: "Schablonbelopp per deltagare: 20 000 kr för Europa utanför EU/EES och 22 000 kr för övriga världen. Skolan måste själv bidra med lika mycket (medfinansiering). Atlas planering (för att träffa en möjlig partner): 12 000 kr respektive 20 000 kr per deltagare.",
    villkor: [
      "Partnerskolan ska ligga utanför EU/EES.",
      "Skolan ska medfinansiera med minst lika mycket som bidraget, till exempel med arbetstid. Kravet kommer från förordning (2000:523), som säger att bidraget får vara högst lika stort som det huvudmannen själv bidrar med.",
      "Projektet ska engagera fler elever än de som reser.",
      "Alla svenska deltagare måste fylla i en enkät efter besöket.",
      "Kvitton och underlag ska sparas i sju år."
    ],
    hurDuGor: [
      "Hitta en partnerskola utanför EU/EES – eller sök Atlas planering för att träffa en först.",
      "Planera ett gemensamt tema kopplat till läroplanen.",
      "Håll koll på uhr.se när ansökan öppnar och gå gärna på UHR:s webbinarium.",
      "Skicka in ansökan via UHR:s webbtjänst senast kl. 12.00 sista ansökningsdag.",
      "Genomför besöken och se till att deltagarna svarar på enkäten.",
      "Skicka in slutrapport när partnerskapet är klart."
    ],
    redovisning: "Efter projektet skickar ni in en slutrapport till UHR. Alla svenska deltagare fyller i en obligatorisk enkät efter besöket. Ekonomiska underlag sparas i sju år.",
    fallgropar: [
      "Att glömma medfinansieringen – skolan måste stå för lika mycket själv.",
      "Att skicka in efter kl. 12.00 sista dagen – det går inte att komplettera efteråt.",
      "Att inte spara kvitton och färdbevis i sju år."
    ],
    nyckelord: ["utbyte", "utlandsresa", "partnerskola", "internationellt", "lärarutbyte", "elevutbyte", "Atlas", "UHR", "vänskola"],
    kallor: [
      { titel: "UHR – Atlas partnerskap", url: "https://uhr.se/internationella-mojligheter/samarbete-och-utbyte/sok-finansiering/atlas-partnerskap/" },
      { titel: "UHR – Atlas planering", url: "https://www.uhr.se/internationella-mojligheter/samarbete-och-utbyte/sok-finansiering/atlas-planering/" },
      { titel: "UHR – Projektsida Atlas partnerskap", url: "https://www.uhr.se/internationella-mojligheter/samarbete-och-utbyte/hantera-projekt/atlas-partnerskap/" },
      { titel: "Förordning (2000:523) om statsbidrag för att främja internationella kontakter inom skolans område", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-2000523-om-statsbidrag-for-att_sfs-2000-523/" }
    ],
    senastKontrollerad: "2026-10-01",
    osakerhet: "UHR har inte publicerat datum för nästa ansökningsomgång. Att regioner kan söka bygger på att de kan driva skolor; UHR räknar upp skolformer, inte huvudmän."
  },

  {
    id: "atlas-praktik",
    namn: "Atlas praktik",
    kortnamn: "Atlas praktik – APL utomlands",
    myndighet: "UHR",
    giltighet: "aktiv",
    sammanfattning: "Statliga pengar så att elever på yrkesprogram och i yrkesvux kan göra sin arbetsplatsförlagda utbildning (APL) i ett land utanför EU/EES, i 3–15 veckor.",
    syfte: "Programmet ska ge yrkeselever internationell arbetslivserfarenhet och stärka yrkesutbildningen i Sverige.",
    omraden: ["internationellt", "yrke"],
    skolformer: ["gymnasieskola", "anpassad-gymnasieskola", "komvux"],
    sokande: { fristaende: "ja", kommun: "ja", region: "villkor", stat: "nej", ovriga: "villkor" },
    sokandeNot: "Skolor, utbildningsorganisationer och kommuner som ansvarar för gymnasieskolans yrkesprogram eller för anpassad gymnasieskola med minst 15 veckors obligatorisk APL kan söka – både kommunala och fristående. Även anordnare av yrkesinriktad vuxenutbildning, yrkesintroduktion och lärlingsutbildning kan söka. En region kan söka om den driver yrkesutbildning.",
    typ: "ansokan",
    perioder: [
      { typ: "ansokan", fran: null, till: null, text: "Ansökan är stängd nu och nästa omgång är inte publicerad. UHR har tidigare haft informationsmöten om ansökan i mars.", ungefar: true }
    ],
    belopp: "Per elev: 18 000 kr (Europa utanför EU/EES) eller 22 000 kr (övriga världen) för minst 3 veckor, plus 2 000 kr per extra vecka, högst 12 extra veckor. Medföljande lärare: 20 000 kr (högst en per projekt). För en stödperson till en elev som behöver extra stöd kan ni söka extra pengar i ansökan och motivera summan.",
    villkor: [
      "Praktiken ska vara minst 3 veckor (15 arbetsdagar) och högst 15 veckor. För anpassad gymnasieskola räcker 2 veckor.",
      "Praktikplatsen ska ligga utanför EU/EES.",
      "Kvitton, färdbevis och andra ekonomiska underlag ska sparas i sju år."
    ],
    hurDuGor: [
      "Hitta en arbetsplats utomlands som passar elevernas yrkesutbildning.",
      "Planera hur APL-perioden kopplas till kursernas mål och hur den bedöms.",
      "Följ uhr.se för att se när ansökan öppnar.",
      "Sök via UHR:s webbtjänst senast kl. 12.00 sista ansökningsdag.",
      "Förbered eleverna (försäkring, resa, boende) och genomför praktiken.",
      "Rapportera till UHR efter projektet."
    ],
    redovisning: "Efter projektet rapporterar ni till UHR. Alla ekonomiska underlag ska sparas i sju år för eventuell granskning.",
    fallgropar: [
      "Att praktiken blir kortare än 3 veckor – då uppfylls inte kraven.",
      "Att inte spara kvitton och färdbevis i sju år.",
      "Att välja ett land inom EU/EES – då gäller Erasmus+ i stället."
    ],
    nyckelord: ["APL", "praktik utomlands", "yrkesprogram", "lärling", "yrkesvux", "utlandspraktik", "Atlas", "UHR"],
    kallor: [
      { titel: "UHR – Atlas praktik", url: "https://www.uhr.se/internationella-mojligheter/samarbete-och-utbyte/sok-finansiering/atlas-praktik/" }
    ],
    senastKontrollerad: "2026-10-01",
    osakerhet: "UHR har inte publicerat datum för nästa ansökningsomgång. UHR nämner inte fristående skolor uttryckligen, men texten omfattar alla skolor med yrkesprogram."
  },

  {
    id: "erasmus-korttidsprojekt",
    namn: "Erasmus+ mobilitet korttidsprojekt",
    kortnamn: "Erasmus+ – kortare utbytesprojekt",
    myndighet: "UHR",
    giltighet: "aktiv",
    sammanfattning: "EU-medel (inte statsbidrag) via UHR för att personal och elever ska kunna åka på utbyte, jobbskugga eller kurs i ett annat Erasmus+-land. Enkelt sätt att komma igång – högst 30 deltagare per projekt.",
    syfte: "Erasmus+ är EU:s program för utbildning. Korttidsprojekt ska göra det lätt för skolor som inte har ackreditering att prova på europeiskt utbyte och kompetensutveckling.",
    omraden: ["internationellt", "kompetens"],
    skolformer: ["forskola", "forskoleklass", "grundskola", "anpassad-grundskola", "specialskola", "sameskola", "gymnasieskola", "anpassad-gymnasieskola", "komvux"],
    sokande: { fristaende: "ja", kommun: "ja", region: "ja", stat: "ja", ovriga: "ja" },
    sokandeNot: "Detta är EU-pengar som UHR fördelar i Sverige. Organisationer inom förskola och skola, vuxnas lärande och yrkesutbildning kan söka – både offentliga och privata. UHR nämner uttryckligen enskilda huvudmän och friskolekoncerner, alltså även fristående skolor. Kommuner kan söka som utbildningsanordnare. Privatpersoner kan inte söka. En organisation som själv har en Erasmus-ackreditering inom skola kan inte söka korttidsprojekt inom skola. Den som bara är medlem i ett ackrediterat konsortium, till exempel kommunens, kan däremot söka.",
    typ: "ansokan",
    perioder: [
      { typ: "ansokan", fran: null, till: null, text: "Ansökan öppnar under hösten och sista dag är i februari året efter. 2026 var sista dag 19 februari. Nästa sista dag väntas i februari 2027. Någon extra höstomgång 2026 finns inte i Sverige.", ungefar: true }
    ],
    belopp: "Schabloner enligt EU:s regler för resor, uppehälle, kursavgifter, språkstöd, förberedande besök och organisationsstöd. Extra stöd finns för deltagare med sämre möjligheter. Beloppet beror på antal deltagare, land och längd.",
    villkor: [
      "Högst 30 deltagare per projekt.",
      "Projektet pågår 6–18 månader.",
      "Organisationer som själva har en Erasmus-ackreditering inom skola kan inte söka korttidsprojekt inom skola.",
      "Slutrapport krävs innan den sista delen av pengarna betalas ut."
    ],
    hurDuGor: [
      "Bestäm vad skolan vill utveckla och vilka som ska åka.",
      "Registrera organisationen i EU:s system och få ett organisations-id (OID).",
      "Följ uhr.se för att se när ansökan öppnar i höst.",
      "Fyll i EU:s ansökningsformulär och skicka in före deadline i februari.",
      "Genomför utbytena och dokumentera vad deltagarna lärt sig.",
      "Skicka in slutrapport för att få resterande pengar."
    ],
    redovisning: "Slutrapport efter projektet. Den stämmer av budgeten och är ett krav för att sista utbetalningen ska göras.",
    fallgropar: [
      "Att söka korttidsprojekt inom skola när organisationen redan har en egen ackreditering inom skola.",
      "Att missa deadline – EU:s system stänger exakt på klockslaget.",
      "Att inte dokumentera aktiviteterna – det kan leda till att pengar måste betalas tillbaka."
    ],
    nyckelord: ["Erasmus", "Erasmus+", "EU", "utbyte", "jobbskuggning", "fortbildning utomlands", "kurs utomlands", "utlandsresa", "UHR"],
    kallor: [
      { titel: "UHR – Erasmus+ mobilitet korttidsprojekt", url: "https://www.uhr.se/internationella-mojligheter/samarbete-och-utbyte/sok-finansiering/erasmus-mobilitet-korttidsprojekt/" }
    ],
    senastKontrollerad: "2026-10-01",
    osakerhet: "Exakt deadline för 2027 är inte publicerad; februari bygger på tidigare år (19 februari 2026 enligt EU:s utlysning). Nuvarande Erasmus+-program gäller 2021–2027. Hur utbyten finansieras från 2028 beror på EU:s nästa program."
  },

  {
    id: "erasmus-ackreditering",
    namn: "Erasmus+ mobilitet ackreditering",
    kortnamn: "Erasmus+ – ackreditering",
    myndighet: "UHR",
    giltighet: "aktiv",
    sammanfattning: "EU-medel via UHR. En ackreditering är ett slags medlemskap i Erasmus+. Den ger skolan eller kommunen tillgång till pengar för utbyten varje år utan att konkurrera med ett nytt projekt varje gång. 2026 års omgång stängde 29 september.",
    syfte: "Ackrediteringen ska göra att skolor kan planera internationellt utbyte långsiktigt och strategiskt i stället för projekt för projekt.",
    omraden: ["internationellt", "kompetens"],
    skolformer: ["forskola", "forskoleklass", "grundskola", "anpassad-grundskola", "specialskola", "sameskola", "gymnasieskola", "anpassad-gymnasieskola", "komvux"],
    sokande: { fristaende: "ja", kommun: "ja", region: "ja", stat: "ja", ovriga: "ja" },
    sokandeNot: "Detta är EU-pengar som UHR fördelar. Offentliga och privata utbildningsanordnare kan söka, alltså även fristående huvudmän. Kommuner och regioner kan också söka, ensamma eller som samordnare för ett konsortium (minst två organisationer). I 2026 års omgång (stängd) kunde UHR bevilja högst 10 ansökningar inom förskola och skola, 15 inom vuxnas lärande och 20 inom yrkesutbildning.",
    typ: "ansokan",
    perioder: [
      { typ: "ansokan", fran: null, till: "2026-09-29", text: "2026 års ansökan om ackreditering stängde 29 september 2026 kl. 12.00. Nästa omgång väntas under 2027 enligt programguiden för det året.", ungefar: false },
      { typ: "beslut", fran: null, till: null, text: "Besked om beslut för 2026 års omgång skickas med e-post i början av vårterminen 2027. Nya ackrediteringar gäller från 1 februari 2027 till 31 december 2027.", ungefar: true },
      { typ: "ansokan", fran: null, till: null, text: "Ackrediterade organisationer kan sedan söka budget varje år. Ansökan öppnar före årsskiftet med sista dag i februari.", ungefar: true }
    ],
    belopp: "Ackrediteringen i sig ger inga pengar. Den ger rätt att varje år söka budget för utbyten, och den budgeten är i stort sett garanterad (beloppet kan variera).",
    villkor: [
      "Ni behöver en plan för hur utbytena ska utveckla verksamheten.",
      "Ackrediteringar från 2026 års omgång gäller 1 februari 2027–31 december 2027, när programperioden slutar.",
      "En organisation med ackreditering inom skola kan inte söka korttidsprojekt inom skola."
    ],
    hurDuGor: [
      "Skriv en plan för vad skolan eller kommunen vill utveckla med hjälp av utbyten.",
      "Bestäm om ni söker själva eller som konsortium med flera skolor.",
      "Registrera organisationen i EU:s system och få ett organisations-id (OID).",
      "Håll utkik på uhr.se efter nästa ansökningsomgång – 2026 var sista dag 29 september kl. 12.00.",
      "Om ni blir ackrediterade: sök budget i februari de år ni vill genomföra utbyten."
    ],
    redovisning: "Ackrediterade organisationer rapporterar för varje budgetprojekt enligt villkoren i avtalet med UHR.",
    fallgropar: [
      "Att skicka in efter kl. 12.00 sista dagen.",
      "Att tro att ackrediteringen ger pengar direkt – ni måste också söka budget för de år ni vill genomföra utbyten.",
      "Att ackrediteringen bara gäller till 2027 och att reglerna efter det inte är kända."
    ],
    nyckelord: ["Erasmus", "Erasmus+", "EU", "ackreditering", "konsortium", "utbyte", "internationalisering", "UHR"],
    kallor: [
      { titel: "UHR – Erasmus+ mobilitet ackreditering", url: "https://www.uhr.se/internationella-mojligheter/samarbete-och-utbyte/sok-finansiering/erasmus-mobilitet-ackreditering/" },
      { titel: "UHR – Erasmus+ ackreditering skola", url: "https://www.uhr.se/internationella-mojligheter/samarbete-och-utbyte/hantera-projekt/erasmus-mobilitet-ackreditering/skola/" }
    ],
    senastKontrollerad: "2026-10-01",
    osakerhet: "Programperioden slutar 2027. Det är inte klart hur ackrediteringar hanteras i EU:s nästa program från 2028. UHR anger bara att besked kommer i början av vårterminen, inget exakt beslutsdatum."
  },

  {
    id: "erasmus-smaskaliga-partnerskap",
    namn: "Erasmus+ småskaliga partnerskap",
    kortnamn: "Erasmus+ – samarbete med skolor i Europa",
    myndighet: "UHR",
    giltighet: "aktiv",
    sammanfattning: "EU-medel via UHR för ett gemensamt projekt med minst en skola eller organisation i ett annat Erasmus+-land. Fast belopp på 30 000 eller 60 000 euro. Passar dem som är nya i Erasmus+.",
    syfte: "Partnerskapen ska höja kvaliteten i verksamheten, bygga förmåga att samarbeta över gränser och främja inkludering och aktivt medborgarskap.",
    omraden: ["internationellt"],
    skolformer: ["forskola", "forskoleklass", "grundskola", "anpassad-grundskola", "specialskola", "sameskola", "gymnasieskola", "anpassad-gymnasieskola", "komvux"],
    sokande: { fristaende: "ja", kommun: "ja", region: "ja", stat: "ja", ovriga: "ja" },
    sokandeNot: "Detta är EU-pengar som UHR fördelar. Organisationer inom förskola och skola, yrkesutbildning och vuxnas lärande kan söka, både offentliga och privata – alltså även fristående huvudmän. Minst två organisationer från två olika programländer måste vara med.",
    typ: "ansokan",
    perioder: [
      { typ: "ansokan", fran: null, till: null, text: "Ansökan öppnar på hösten och sista dag är i mars året efter. 2026 var sista dag 5 mars. Nästa omgång väntas med sista dag i mars 2027.", ungefar: true }
    ],
    belopp: "Ett fast klumpbelopp: 30 000 euro eller 60 000 euro, beroende på planerade aktiviteter och resultat. För större och mer erfarna organisationer finns även samarbetspartnerskap med högre belopp.",
    villkor: [
      "Minst två organisationer från två olika programländer.",
      "Projektet pågår 6–24 månader.",
      "Pengarna betalas som ett fast belopp – resultaten måste levereras som utlovat."
    ],
    hurDuGor: [
      "Hitta en partnerskola i Europa, till exempel via eTwinning.",
      "Bestäm ett gemensamt mål och vilka resultat projektet ska ge.",
      "Välj 30 000 eller 60 000 euro utifrån hur stort projektet är.",
      "Registrera organisationen i EU:s system (OID) och skicka in ansökan före deadline i mars.",
      "Genomför projektet och dokumentera resultaten.",
      "Lämna slutrapport till UHR."
    ],
    redovisning: "Slutrapport till UHR efter projektet. Eftersom bidraget är ett fast belopp bedöms om aktiviteterna och resultaten blev som planerat.",
    fallgropar: [
      "Att inte leverera de resultat som utlovats – vid fast belopp kan det leda till att pengar dras av.",
      "Att hitta partner för sent – börja i god tid före hösten.",
      "Att missa att EU:s system stänger exakt vid deadline."
    ],
    nyckelord: ["Erasmus", "Erasmus+", "EU", "partnerskap", "samarbete", "Europa", "eTwinning", "skolprojekt", "UHR"],
    kallor: [
      { titel: "UHR – Erasmus+ småskaliga partnerskap", url: "https://www.uhr.se/internationella-mojligheter/samarbete-och-utbyte/sok-finansiering/erasmus-smaskaliga-partnerskap/" }
    ],
    senastKontrollerad: "2026-09-25",
    osakerhet: "Exakt deadline 2027 är inte publicerad; mars bygger på tidigare år. Nuvarande Erasmus+-program gäller 2021–2027."
  },

  {
    id: "nordplus-junior",
    namn: "Nordplus Junior",
    kortnamn: "Nordplus Junior – Norden och Baltikum",
    myndighet: "UHR",
    giltighet: "aktiv",
    sammanfattning: "Nordiska pengar (Nordiska ministerrådet) via UHR för klassutbyten, lärarutbyten och gemensamma projekt med skolor i Norden och Baltikum. För förskola, grundskola och gymnasium.",
    syfte: "Programmet ska stärka samarbete och utbyte mellan skolor i de nordiska och baltiska länderna och utveckla undervisningens kvalitet.",
    omraden: ["internationellt"],
    skolformer: ["forskola", "forskoleklass", "grundskola", "anpassad-grundskola", "gymnasieskola", "anpassad-gymnasieskola"],
    sokande: { fristaende: "ja", kommun: "ja", region: "ja", stat: "ja", ovriga: "villkor" },
    sokandeNot: "Förskolor, grundskolor och gymnasieskolor (både teoretiska och yrkesprogram) kan söka – kommunala och fristående. Även kulturskolor kan söka. Pengarna kommer från Nordiska ministerrådet, inte från svenska staten.",
    typ: "ansokan",
    perioder: [
      { typ: "ansokan", fran: null, till: "2026-10-01", text: "Extra omgång för förberedande besök och studiebesök: sista dag 1 oktober 2026 kl. 23.59.", ungefar: false },
      { typ: "ansokan", fran: "2026-11-02", till: "2027-02-01", text: "Huvudomgången öppnar i början av november och har sista dag 1 februari (kl. 23.59). 2026 var sista dag 2 februari.", ungefar: true },
      { typ: "beslut", fran: "2027-05-01", till: "2027-05-31", text: "Beslut i huvudomgången brukar komma i maj.", ungefar: true }
    ],
    belopp: "Fasta schabloner per deltagare och aktivitet, inte faktiska kostnader. Skolan måste medfinansiera en del. Bidrag på högst 15 000 euro betalas ut helt när kontraktet är underskrivet. Större bidrag betalas med 80 procent i förskott och 20 procent när slutrapporten är godkänd.",
    villkor: [
      "Samarbete med minst en partner i ett annat nordiskt eller baltiskt land (inklusive Åland, Färöarna och Grönland).",
      "Projektet pågår 6–24 månader.",
      "Medfinansiering från de deltagande organisationerna krävs."
    ],
    hurDuGor: [
      "Hitta en partnerskola i Norden eller Baltikum.",
      "Välj typ av projekt: klassutbyte, lärarutbyte, studiebesök eller utvecklingsprojekt.",
      "Sök i Nordplus webbsystem när det öppnar i november.",
      "Skicka in senast 1 februari (kl. 23.59).",
      "Genomför projektet och lämna slutrapport. Är bidraget över 15 000 euro betalas de sista 20 procenten först då."
    ],
    redovisning: "Slutrapport och ekonomisk redovisning efter projektet. För bidrag över 15 000 euro betalas de sista 20 procenten ut först när rapporten är godkänd.",
    fallgropar: [
      "Att glömma medfinansieringen.",
      "Att inte lämna slutrapport – för bidrag över 15 000 euro betalas då inte sista delen ut.",
      "Att tro att programmet gäller hela Europa – bara Norden och Baltikum ingår."
    ],
    nyckelord: ["Nordplus", "Norden", "Baltikum", "klassresa", "klassutbyte", "vänskola", "utbyte", "Finland", "Norge", "Danmark"],
    kallor: [
      { titel: "UHR – Nordplus Junior", url: "https://www.uhr.se/internationella-mojligheter/samarbete-och-utbyte/sok-finansiering/nordplus-junior/" },
      { titel: "Nordplus – Apply", url: "https://nordplusonline.org/apply-for-funding/apply/" },
      { titel: "Nordplus – Call for applications 2026", url: "https://nordplusonline.org/whats-new/call-for-applications" },
      { titel: "UHR – Nordplus förberedande besök", url: "https://www.uhr.se/internationella-mojligheter/samarbete-och-utbyte/sok-finansiering/nordplus-forberedande-besok/" }
    ],
    senastKontrollerad: "2026-10-01",
    osakerhet: "Datum för huvudomgången 2027 är uppskattade utifrån Nordplus fasta mönster (1 februari, eller närmast följande vardag). Beslutsmånad är uppskattad. Nordplus nuvarande programperiod gäller 2023–2027."
  },

  {
    id: "nordplus-vuxen",
    namn: "Nordplus Vuxen",
    kortnamn: "Nordplus Vuxen – vuxnas lärande i Norden",
    myndighet: "UHR",
    giltighet: "aktiv",
    sammanfattning: "Nordiska pengar för utbyten och samarbetsprojekt inom vuxnas lärande i Norden och Baltikum. Programmet leds från Danmark, och UHR svarar på frågor i Sverige. Kan passa komvux, sfi och andra som arbetar med vuxenutbildning.",
    syfte: "Programmet ska stärka vuxnas lärande genom samarbete, nätverk och utbyte mellan nordiska och baltiska organisationer.",
    omraden: ["internationellt", "kompetens"],
    skolformer: ["komvux"],
    sokande: { fristaende: "ja", kommun: "ja", region: "ja", stat: "ja", ovriga: "ja" },
    sokandeNot: "Organisationer, institutioner och föreningar som arbetar med eller stödjer vuxnas lärande kan söka. Det gäller både kommunal vuxenutbildning och privata anordnare. Pengarna kommer från Nordiska ministerrådet. Huvudadministratör är danska Uddannelses- og Forskningsstyrelsen, som beslutar, skriver kontrakt och betalar ut. UHR är Nordplus informationskontor i Sverige.",
    typ: "ansokan",
    perioder: [
      { typ: "ansokan", fran: null, till: "2026-10-01", text: "Extra omgång för förberedande besök och studiebesök: sista dag 1 oktober 2026 kl. 23.59.", ungefar: false },
      { typ: "ansokan", fran: "2026-11-02", till: "2027-02-01", text: "Huvudomgången öppnar i början av november. Sista dag är 1 februari, eller närmast följande vardag om den 1:a är en helgdag.", ungefar: true },
      { typ: "beslut", fran: "2027-06-01", till: "2027-06-30", text: "Beslut i huvudomgången kommer från den danska huvudadministratören, enligt UHR i mitten av juni.", ungefar: true }
    ],
    belopp: "Fasta schabloner per deltagare och aktivitet enligt Nordplus handbok. För 2026: resa tur och retur 330 euro inom Norden och Baltikum, 660 euro till eller från Färöarna och Island och 1 300 euro till eller från Grönland. Uppehälle från 70 euro per dag för vuxenstuderande upp till 1 350 euro per månad för personal. Bidrag på högst 15 000 euro betalas ut helt när kontraktet är underskrivet. Större bidrag betalas med 80 procent i förskott och 20 procent när slutrapporten är godkänd.",
    villkor: [
      "Samarbete med partner i minst ett annat nordiskt eller baltiskt land.",
      "Medfinansiering krävs – bidraget täcker bara en del av kostnaderna.",
      "Bidrag över 15 000 euro betalas i två delar: 80 procent efter underskrivet kontrakt och 20 procent när slutrapporten är godkänd."
    ],
    hurDuGor: [
      "Hitta en partner i Norden eller Baltikum som arbetar med vuxenutbildning.",
      "Välj mellan mobilitetsprojekt (utbyte, besök) och samarbetsprojekt (nätverk, utveckling).",
      "Sök i Nordplus webbsystem från november.",
      "Skicka in senast 1 februari.",
      "Genomför projektet och lämna slutrapport."
    ],
    redovisning: "Slutrapport och ekonomisk redovisning efter projektet enligt Nordplus regler.",
    fallgropar: [
      "Att glömma medfinansieringen.",
      "Att söka för sent – den stora omgången är bara en gång per år."
    ],
    nyckelord: ["Nordplus", "vuxenutbildning", "komvux", "sfi", "Norden", "utbyte", "vuxnas lärande", "Baltikum"],
    kallor: [
      { titel: "UHR – Nordplus vuxen", url: "https://www.uhr.se/internationella-mojligheter/samarbete-och-utbyte/sok-finansiering/nordplus-vuxen/" },
      { titel: "Nordplus – Apply", url: "https://nordplusonline.org/apply-for-funding/apply/" },
      { titel: "UHR – Nordplus förberedande besök", url: "https://www.uhr.se/internationella-mojligheter/samarbete-och-utbyte/sok-finansiering/nordplus-forberedande-besok/" },
      { titel: "Nordplus handbok 2026", url: "https://nordplusonline.org/globalassets/documents/conditions/the-nordplus-handbook-2026.pdf" }
    ],
    senastKontrollerad: "2026-10-01",
    osakerhet: "UHR:s sida nämner inte komvux eller folkhögskolor med namn, men de ingår i beskrivningen av organisationer inom vuxnas lärande. Datum för 2027 är uppskattade utifrån fast mönster. Beloppen gäller handboken för 2026 och kan ändras till omgången 2027."
  },

  {
    id: "europeiska-solidaritetskaren-volontarer",
    namn: "Europeiska solidaritetskåren – Volontärprojekt",
    kortnamn: "Solidaritetskåren – ta emot volontär",
    myndighet: "MUCF",
    giltighet: "aktiv",
    sammanfattning: "EU-medel via MUCF. En skola eller annan organisation kan ta emot en ung europeisk volontär (18–30 år) i 2–12 månader. EU betalar resa, boende, mat, fickpengar och handledning.",
    syfte: "Programmet ger unga möjlighet att göra volontärarbete som stöttar lokalsamhället, samtidigt som den mottagande organisationen får hjälp och ett internationellt inslag.",
    omraden: ["internationellt", "personal"],
    skolformer: ["forskola", "grundskola", "fritidshem", "gymnasieskola"],
    sokande: { fristaende: "villkor", kommun: "villkor", region: "villkor", stat: "villkor", ovriga: "villkor" },
    sokandeNot: "Detta är EU-pengar som MUCF fördelar. Organisationer som vill ta emot volontärer måste först ha en kvalitetsmärkning (Quality Label) från MUCF. Bara den som har Quality Label som ledande organisation kan söka pengarna. En skola kan bli ledande organisation själv, eller bara vara värd och delta i ett projekt som en annan organisation leder och söker pengar för. Enligt EU:s regler kan både offentliga och privata organisationer få Quality Label, alltså även skolor och kommuner. Volontären får inte ersätta ordinarie personal.",
    typ: "ansokan",
    perioder: [
      { typ: "ansokan", fran: null, till: "2026-10-29", text: "Den som vill söka pengar som ledande organisation i vårens omgång 2027 ska ha sökt Quality Label för den rollen senast 29 oktober 2026. Handläggningen tar cirka två månader enligt MUCF:s sida om Quality Label, men minst tre månader enligt MUCF:s vanliga frågor. Är skolan bara värd räcker det att märkningen är klar när aktiviteten startar.", ungefar: false },
      { typ: "ansokan", fran: null, till: null, text: "Volontärprojekt går inte att söka just nu. Huvudomgången brukar ha sista dag i februari (18 februari 2026).", ungefar: true }
    ],
    belopp: "Organisationen får bidrag för handledning och volontärens vistelse (boende och mat). Volontären får resebidrag, fickpengar, språkkurs och bostad. Beloppen följer EU:s schabloner.",
    villkor: [
      "Alla organisationer som tar emot volontärer måste ha en giltig Quality Label. För att söka pengarna krävs Quality Label som ledande organisation.",
      "Volontären ska vara 18–30 år.",
      "Volontärinsatsen pågår 2–12 månader.",
      "Volontären ska göra en solidaritetsinsats – inte ersätta anställd personal."
    ],
    hurDuGor: [
      "Fundera på vilken roll en volontär kan ha, till exempel på fritids eller i språkstödjande aktiviteter.",
      "Bestäm om skolan ska söka pengar själv som ledande organisation eller vara värd i ett projekt som någon annan leder.",
      "Ansök om Quality Label hos MUCF – för ledande roll senast 29 oktober om ni vill söka pengar i vårens omgång.",
      "Som ledande organisation: sök pengar för volontärprojekt i vårens omgång.",
      "Hitta en volontär via Europeiska ungdomsportalen.",
      "Ordna boende, handledare och introduktion.",
      "Rapportera enligt avtalet med MUCF."
    ],
    redovisning: "Rapport till MUCF efter projektet enligt avtalet. Volontären får också ett intyg (Youthpass).",
    fallgropar: [
      "Att söka pengar innan organisationen har Quality Label.",
      "Att använda volontären som vanlig personal.",
      "Att underskatta arbetet med boende och handledning."
    ],
    nyckelord: ["volontär", "Europeiska solidaritetskåren", "ESC", "EU", "Quality Label", "ung", "MUCF", "internationellt"],
    kallor: [
      { titel: "MUCF – Volontärprojekt", url: "https://www.mucf.se/bidrag/volontarprojekt" },
      { titel: "MUCF – Ansök om Quality Label", url: "https://www.mucf.se/bidrag/ansok-om-quality-label" },
      { titel: "MUCF – Bidrag inom Europeiska solidaritetskåren", url: "https://www.mucf.se/bidrag/eu-bidrag/europeiskasolidaritetskaren" }
    ],
    senastKontrollerad: "2026-10-01",
    osakerhet: "MUCF:s egna sidor säger inte uttryckligen att skolor kan vara värdorganisation; det bygger på EU:s allmänna regel att offentliga och privata organisationer kan delta. Deadline 2027 är inte publicerad. Programmet gäller 2021–2027."
  },

  {
    id: "esf-plus",
    namn: "Europeiska socialfonden+ (ESF+) – projektmedel",
    kortnamn: "ESF+ – EU-projekt för utbildning",
    myndighet: "Svenska ESF-rådet",
    giltighet: "aktiv",
    sammanfattning: "EU-medel via Svenska ESF-rådet för större utvecklingsprojekt, t.ex. för unga som riskerar att inte klara skolan eller kompetensutveckling av personal. Vilka som kan söka och när styrs av varje utlysning.",
    syfte: "ESF+ ska öka sysselsättningen, stärka kompetensen hos yrkesverksamma och hjälpa personer som står långt från arbetsmarknaden. Vissa utlysningar riktar sig till unga och till utbildning.",
    omraden: ["yrke", "likvardighet", "kompetens"],
    skolformer: ["grundskola", "gymnasieskola", "anpassad-gymnasieskola", "komvux"],
    sokande: { fristaende: "villkor", kommun: "ja", region: "ja", stat: "villkor", ovriga: "villkor" },
    sokandeNot: "Detta är EU-pengar. Privata, offentliga och ideella organisationer kan söka, till exempel kommuner, aktiebolag och föreningar. Privatpersoner och enskilda firmor kan inte söka. Varje utlysning anger vilka som får söka, så en fristående huvudman kan söka bara om utlysningen tillåter det. För företag kan regler om statsstöd begränsa.",
    typ: "ansokan",
    perioder: [
      { typ: "ansokan", fran: "2026-10-20", till: "2027-03-16", text: "Planerade utlysningar i Västsverige, Sydsverige, Mellersta Norrland och Norra Mellansverige hösten 2026–våren 2027. I Norra Mellansverige gäller en utlysning kompetensutveckling för personal inom socialtjänst och skola som arbetar med barn och unga vuxna 13–29 år.", ungefar: true },
      { typ: "ansokan", fran: "2026-12-15", till: "2027-03-18", text: "Planerade utlysningar i Östra Mellansverige, Stockholm och Övre Norrland. I Stockholm riktar sig en utlysning till unga från 13 år som riskerar att avbryta sina studier.", ungefar: true }
    ],
    belopp: "Varierar mycket mellan utlysningar, från under 1 miljon till över 100 miljoner kr. Projekt får vara högst 36 månader.",
    villkor: [
      "Projektet måste passa en öppen utlysning.",
      "Projektet ska visa vilka resultat det ger.",
      "Ofta krävs medfinansiering – pengar eller till exempel egen personaltid eller lokaler. Utlysningen anger vad som gäller.",
      "Pengarna betalas ut efter att ni ansökt om utbetalning, så organisationen behöver kunna ligga ute med pengar."
    ],
    hurDuGor: [
      "Titta i ESF-rådets utlysningsplan för er region.",
      "Läs utlysningen noga: vem får söka, vilka målgrupper och hur mycket pengar finns.",
      "Gå på ESF-rådets informationsmöte för utlysningen.",
      "Sök i ESF-rådets system Projektrummet.",
      "Om ni beviljas: rapportera löpande och ansök om utbetalning."
    ],
    redovisning: "Projektet lämnar en kvartalsrapport var tredje månad, med start tre månader efter projektstart. Ansökan om utbetalning görs för en kalendermånad i taget, senast två månader efter månadens slut, om inte beslutet säger något annat. Den sista ansökan om utbetalning ska komma in senast två månader efter projektets slut och innehålla slutrapporten.",
    fallgropar: [
      "Att underskatta administrationen – ESF-projekt kräver noggrann ekonomisk redovisning.",
      "Att inte ha råd att ligga ute med pengar innan utbetalning.",
      "Att projektet inte passar utlysningens målgrupp."
    ],
    nyckelord: ["ESF", "ESF+", "socialfonden", "EU-projekt", "EU", "unga", "avhopp", "komvux", "kompetensutveckling"],
    kallor: [
      { titel: "Svenska ESF-rådet – Så fungerar det", url: "https://www.esf.se/soka-stod/sa-fungerar-det/" },
      { titel: "Svenska ESF-rådet – Utlysningsplan", url: "https://www.esf.se/utlysningar/utlysningsplan/" },
      { titel: "Svenska ESF-rådet – Sök stöd steg för steg", url: "https://www.esf.se/soka-stod/sok-stod-steg-for-steg/" }
    ],
    senastKontrollerad: "2026-10-01",
    osakerhet: "Utlysningsplanen är preliminär och kan ändras. Om en fristående skolhuvudman kan söka avgörs i varje utlysning. Utlysningsplanen nämner personal i skolverksamhet i Norra Mellansverige, unga som riskerar studieavbrott i Stockholm och (hösten 2027) skolelever 13–16 år i Norra Mellansverige; ingen planerad utlysning riktar sig uttryckligen till komvux. Om medfinansiering krävs och hur mycket anges i varje utlysning. ESF+ finansieras med EU-pengar och statliga medel i samma stöd."
  },

  {
    id: "bra-brottsforebyggande-kommuner",
    namn: "Ekonomiskt stöd till kommuner för brottsförebyggande åtgärder",
    kortnamn: "Brå – brottsförebyggande i kommunen",
    myndighet: "Brå",
    giltighet: "aktiv",
    sammanfattning: "Statsbidrag som kommuner kan söka för att pröva nya brottsförebyggande åtgärder, till exempel för barn och unga. Skolan kan vara en del av kommunens projekt. Sista ansökningsdag 1 oktober 2026.",
    syfte: "Bidraget ska hjälpa kommuner att stärka, utveckla eller utvärdera kunskapsbaserade åtgärder mot brott i kommunen.",
    omraden: ["halsa-trygghet"],
    skolformer: ["grundskola", "anpassad-grundskola", "fritidshem", "gymnasieskola", "anpassad-gymnasieskola"],
    sokande: { fristaende: "nej", kommun: "ja", region: "nej", stat: "nej", ovriga: "nej" },
    sokandeNot: "Bara kommuner och kommunalförbund kan söka. Fristående skolor kan inte söka själva men kan vara med som samarbetspartner i kommunens projekt.",
    typ: "ansokan",
    perioder: [
      { typ: "ansokan", fran: "2026-06-15", till: "2026-10-01", text: "Ansökan är öppen 15 juni–1 oktober 2026, för projekt under 2027.", ungefar: false },
      { typ: "beslut", fran: "2027-01-01", till: "2027-02-28", text: "Beslut kommer kort efter årsskiftet.", ungefar: true },
      { typ: "redovisning", fran: null, till: null, text: "Delrapport och slutrapport enligt beslutet.", ungefar: false }
    ],
    belopp: "Cirka 50 miljoner kr att fördela. Det finns inget högsta eller lägsta belopp per ansökan.",
    villkor: [
      "Kommunen ska ha en lokal lägesbild över brottsligheten och en åtgärdsplan.",
      "Pengarna får inte gå till sådant kommunen redan måste göra enligt lag, till exempel att ta fram lägesbilden eller samordningsfunktionen.",
      "Projektet pågår under ett kalenderår (1 januari–31 december)."
    ],
    hurDuGor: [
      "Prata med kommunens samordnare för brottsförebyggande arbete.",
      "Utgå från kommunens lägesbild och åtgärdsplan – vilka problem rör barn och unga eller skolan?",
      "Välj en åtgärd som bygger på kunskap om vad som fungerar.",
      "Låt kommunen skicka in ansökan till Brå senast 1 oktober 2026.",
      "Genomför och följ upp åtgärden under 2027."
    ],
    redovisning: "Delrapport och slutrapport till Brå enligt villkoren i beslutet.",
    fallgropar: [
      "Att söka för sådant som kommunen redan är skyldig att göra.",
      "Att sakna lägesbild och åtgärdsplan.",
      "Att tro att en skola kan söka själv – det är kommunen som söker."
    ],
    nyckelord: ["brottsförebyggande", "trygghet", "Brå", "unga", "kriminalitet", "våld", "trygg skola"],
    kallor: [
      { titel: "Brå – Ekonomiskt stöd till kommuner för brottsförebyggande åtgärder", url: "https://bra.se/kunskapsstod/ekonomiskt-stod/ekonomiskt-stod-till-kommuner-for-brottsforebyggande-atgarder" },
      { titel: "Brå – Frågor och svar om ekonomiska stödet till kommuner", url: "https://bra.se/kunskapsstod/ekonomiskt-stod/fragor-och-svar-om-ekonomiska-stodet-till-kommuner" }
    ],
    senastKontrollerad: "2026-09-25",
    osakerhet: "Bidraget är inte riktat särskilt till skolor. Det tas med eftersom kommunen som skolhuvudman kan söka för åtgärder i skolan. Beslutsmånad är uppskattad."
  },

  {
    id: "arvsfonden-projektstod",
    namn: "Allmänna arvsfonden – projektstöd",
    kortnamn: "Arvsfonden – samarbete med föreningar",
    myndighet: "Allmänna arvsfonden",
    giltighet: "aktiv",
    sammanfattning: "Allmänna arvsfonden är inte ett statsbidrag, men offentliga pengar för nya projekt för barn och unga. Föreningar söker. Skolor kan vara samarbetspartner, och en kommun kan i vissa fall få projektstöd.",
    syfte: "Arvsfonden stödjer nyskapande projekt inom ideell verksamhet för barn, unga, äldre och personer med funktionsnedsättning.",
    omraden: ["ovrigt", "halsa-trygghet"],
    skolformer: ["grundskola", "anpassad-grundskola", "fritidshem", "gymnasieskola", "anpassad-gymnasieskola"],
    sokande: { fristaende: "villkor", kommun: "villkor", region: "villkor", stat: "villkor", ovriga: "ja" },
    sokandeNot: "Ideella föreningar, stiftelser och liknande organisationer söker. Bolag kan inte söka (utom aktiebolag med särskild vinstutdelningsbegränsning). En offentlig huvudman, till exempel en kommun eller region, kan få projektstöd om det finns särskilda skäl (lag 2021:401, 2 kap. 4 §): projektet ska ligga utanför huvudmannens vanliga ansvar, göras i nära samarbete med ideella organisationer som har inflytande, och huvudmannen ska bidra med egen finansiering, till exempel personal eller lokaler. En skola – kommunal eller fristående – kan normalt vara samarbetspartner, men föreningen och målgruppen ska ha huvudrollen.",
    typ: "ansokan",
    perioder: [
      { typ: "ansokan", fran: null, till: null, text: "Ansökningar tas emot löpande hela året.", ungefar: false },
      { typ: "beslut", fran: null, till: null, text: "Handläggningen tar i snitt 5–8 månader för projektstöd. Beslut fattas sex gånger per år.", ungefar: false }
    ],
    belopp: "Varierar efter projekt. För projektstöd finns ingen beloppsgräns, och Arvsfonden kan betala hela projektkostnaden.",
    villkor: [
      "Projektet ska vara nytt och får inte ersätta sådant som kommunen eller skolan redan ansvarar för.",
      "Målgruppen ska vara delaktig i projektet.",
      "Föreningen ska ha huvudrollen, inte skolan eller kommunen.",
      "Föreningen ska ha haft verksamhet i Sverige i minst ett år för att få projektstöd."
    ],
    hurDuGor: [
      "Hitta en förening som vill driva ett nytt projekt för barn eller unga.",
      "Kom överens om skolans roll som samarbetspartner.",
      "Se till att projektet inte är vanlig skolverksamhet.",
      "Låt föreningen söka via Arvsfondens webbplats – det går när som helst under året.",
      "Räkna med att det tar 5–8 månader innan beslut."
    ],
    redovisning: "Den som fått stödet rapporterar till Arvsfonden enligt villkoren i beslutet.",
    fallgropar: [
      "Att projektet ser ut som vanlig undervisning – då beviljas det inte.",
      "Att skolan tar huvudrollen i stället för föreningen.",
      "Att räkna med snabbt besked – handläggningen tar flera månader."
    ],
    nyckelord: ["Arvsfonden", "förening", "projekt", "barn och unga", "fritid", "samarbete", "ideell"],
    kallor: [
      { titel: "Allmänna arvsfonden – Vanliga frågor", url: "https://www.arvsfonden.se/ansokan/vanliga-fragor" },
      { titel: "Lag (2021:401) om Allmänna arvsfonden", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-2021401-om-allmanna-arvsfonden_sfs-2021-401/" }
    ],
    senastKontrollerad: "2026-10-01",
    osakerhet: "Arvsfonden är inte ett statsbidrag. Det är inte närmare beskrivet hur ofta skolor är partner i beviljade projekt. En fristående skola som drivs av en ideell förening eller stiftelse kan möjligen söka själv, men bara för verksamhet utanför skolans uppdrag – detta kunde inte bekräftas."
  }
);
