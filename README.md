# Bidragskompassen

Statsbidrag för skolan, förklarat på vanlig svenska. Bidragskompassen samlar statens bidrag till förskola, skola och vuxenutbildning – vem som får söka, när ni ska söka och hur det går till. Förvalt perspektiv är fristående huvudmän, men alla bidrag är märkta med vem som kan söka.

**Live:** https://kunskapshunger.github.io/bidragskompassen/

> Informationen är förenklad och kontrollerades mot myndigheternas egna sidor 2026-09-25. Kontrollera alltid villkoren hos myndigheten innan ni söker.

## Funktioner

- **Kompassen** – tre frågor som leder till rätt bidrag.
- **Årshjulet** – ansökningsperioder året runt, med listvy för tangentbord och skärmläsare.
- **Registret** – sök (tål stavning utan å, ä, ö), filtrera på skolform, område, myndighet, typ och status. Urvalet sparas i länken.
- **Smart sökning** (valfri) – sorterar om träffarna efter vad frågan troligen handlar om, med beslutsmodellen Jev från TypeSafe via en Supabase Edge Function. Den vanliga sökningen fungerar alltid som reserv.
- **Så söker ni**, ordlista och vanliga frågor.

## Teknik

Statisk sida utan byggsteg: klassiska `<script>`-filer, inga npm-beroenden. Den fungerar även när `index.html` öppnas direkt från disk.

| Mapp | Innehåll |
|---|---|
| `data/` | Bidragsdata enligt [SCHEMA.md](SCHEMA.md) |
| `js/`, `css/` | Sidans logik och stil (`js/core*.js` är ren logik som testas i Node) |
| `tests/` | `node --test` |
| `supabase/functions/bidragskompassen-sok/` | Edge Function för smart sökning (Jev-nyckeln ligger i Supabase Vault, aldrig här) |
| `tools/` | Lokal server och byggskript för sökkatalogen |
| `film/` | Skript som spelar in demofilmen (röst via Gemini TTS, nyckel endast som miljövariabel) |

```bash
node --test                      # tester
node tools/serve.mjs 5178        # lokal förhandsvisning
node tools/build-jev-catalog.mjs # bygg om sökkatalogen efter ändrad data (och publicera funktionen igen)
```

Typsnitt: Bodoni Moda och Inter (SIL Open Font License) via Google Fonts.
