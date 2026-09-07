# Goblins Guild Portal — Design Specification

## Goal
Create a static bilingual RU/EN guild portal for the Hero Wars: Alliance guild **Гоблины / Goblins**, deployable on GitHub Pages with no backend.

## Visual Direction
- Dark fantasy interface inspired by Hero Wars: Alliance.
- Primary palette: black / deep brown, gold borders and typography accents, red accent color taken from the guild crest.
- Guild crest is displayed prominently in the header.
- Responsive desktop/tablet/mobile layout.
- Visual language follows the approved mockup: large guild banner, navigation bar, summary strip, roster table/cards, compact hero/titan compositions.
- Avoid copying copyrighted game UI assets beyond user-supplied screenshots/crest; use the supplied images only as guild/player reference data unless explicit reusable assets are extracted from them.

## Navigation
The site contains these top-level sections:

1. **Главная / Home**
2. **Игроки / Players**
3. **Подземелье / Dungeon**
4. **Герои / Heroes**
5. **Титаны / Titans**
6. **Guild VS**
7. **О гильдии / About**

`Guild VS` is the exact English label for the Russian event section **Схватка**.

## Languages
- Full site supports Russian and English.
- Language switcher is always available in the header.
- Selected language is persisted in `localStorage`.
- Russian is the default language.
- Player nicknames remain unchanged in both languages.

## Home Page
The home page is a guild landing page rather than a raw table.

It contains:
- Guild crest.
- Guild name: **Гоблины / Goblins**.
- Short guild motto/description.
- Count of guild members: 30.
- Summary stats derived from roster data when available:
  - total hero team power;
  - total titan team power.
- Quick links/cards to Players, Dungeon, Heroes, Titans, Guild VS.
- Compact preview of the strongest / most relevant guild members.

## Players Page
The guild has exactly **30 member slots**.

Each player record may contain:
- nickname;
- guild activity / weekly score if available from source screenshots;
- hero team power;
- 5 heroes used for Guild War;
- titan team power;
- 5 titans used for Guild War;
- optional notes/recommendations to be added later.

The page supports:
- search by nickname;
- sorting by total power, hero power, titan power, nickname;
- list view optimized for comparing all 30 members;
- responsive card view for mobile;
- clear empty state when a player's battle composition is not yet known.

## Initial Data Import
Data is transcribed from the screenshots supplied by the user.

Initial screenshots include:
- guild crest;
- full player ranking/activity list;
- several Guild War compositions showing hero teams and titan teams.

Known compositions from screenshots should be entered for the visible players. The remaining players should still appear in the roster with unknown composition fields until data is supplied later.

## Future Guides
The architecture must support adding guide content without changing the roster implementation.

### Dungeon
Future guide page covering:
- dungeon progression;
- healing / sustain strategies;
- recommended titan combinations;
- practical progression rules.

### Heroes
Future guide page covering:
- suggestions for changing a player's hero team;
- recommended team compositions;
- hero upgrade priorities;
- upgrade instructions.

### Titans
Future guide page covering:
- titan upgrade priorities;
- skins/artifacts/levels;
- recommended compositions;
- Guild War and Dungeon priorities.

### Guild VS
Future guide page covering:
- event rules;
- participation instructions;
- guild strategy;
- practical recommendations.

## Data Architecture
Use static JavaScript data modules so GitHub Pages can host the site without build-time APIs or a backend.

Suggested structure:

```text
/
├── index.html
├── players.html
├── dungeon.html
├── heroes.html
├── titans.html
├── guild-vs.html
├── about.html
├── assets/
│   ├── images/
│   │   └── guild-crest.png
│   └── icons/
├── css/
│   └── styles.css
├── js/
│   ├── app.js
│   ├── i18n.js
│   ├── roster.js
│   └── players-page.js
└── data/
    └── players.js
```

`data/players.js` is the single source of truth for player data.

Example record shape:

```js
{
  nickname: "PhysicalOfficer",
  activity: [1570, 8642, 3344, 2564, 2270, 1056, 3208],
  activityTotal: 22654,
  heroPower: 578441,
  heroes: ["...", "...", "...", "...", "..."],
  titanPower: 177793,
  titans: ["...", "...", "...", "...", "..."]
}
```

Unknown values are represented by `null` or an empty array and rendered as “Нет данных / No data”.

## Interaction Model
- No login.
- No backend.
- No database.
- No tracking requirement.
- Works directly from GitHub Pages.
- Search, sorting, language switching and view switching run entirely in-browser.

## GitHub Pages Constraints
- Use relative paths so the site works both at `username.github.io` and `username.github.io/repository-name/`.
- Do not require server-side routing.
- Do not depend on Node.js at runtime.
- Site should work when deployed from the repository root or `/docs` with a simple Pages configuration.

## Quality Requirements
- Valid responsive layout from 360px mobile width upward.
- No horizontal overflow on mobile.
- Keyboard-accessible language and navigation controls.
- Meaningful alt text for guild crest and non-decorative images.
- Search/sort continues to work after language switching.
- Every visible navigation label has RU and EN translations.

## Initial Delivery Scope
The first release includes:
- complete visual shell;
- RU/EN language switching;
- Home page;
- Players page with all 30 players;
- transcription of all roster/activity values visible in supplied screenshots;
- hero/titan Guild War compositions for every player visible in supplied composition screenshots;
- placeholder guide pages for Dungeon, Heroes, Titans and Guild VS with “coming soon” content in both languages;
- About page;
- GitHub Pages-ready repository structure.
