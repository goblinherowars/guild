# Goblins Guild Portal Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a bilingual, responsive, GitHub Pages-ready static guild portal for Goblins with all 30 players and the known Guild War hero/titan compositions transcribed from user screenshots.

**Architecture:** Use plain HTML, CSS and ES modules with no runtime dependencies. Keep roster data in `data/players.js`, translations in `js/i18n.js`, common shell behavior in `js/app.js`, and player rendering/filtering in `js/players-page.js`; player team visuals are cropped from user-supplied screenshots into local assets.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript ES modules, Node.js built-in test runner.

**Spec:** `docs/superpowers/specs/2026-09-07-goblins-guild-portal-design.md`

## Global Constraints

- Static site only; no backend or database.
- Russian is default; English switch persists in `localStorage`.
- Exactly 30 guild members in initial roster.
- `Guild VS` is the exact English label for Russian `Схватка`.
- Use relative paths compatible with GitHub Pages project sites.
- Responsive from 360px without horizontal page overflow.
- Use only user-supplied guild/player visuals and locally-created UI artwork.

---

### Task 1: Repository shell, source assets and roster data

**Files:**
- Create: `package.json`
- Create: `assets/images/guild-crest.png`
- Create: `assets/teams/*.webp`
- Create: `data/players.js`
- Create: `tests/data.test.mjs`

**Interfaces:**
- Produces: `players` array with exactly 30 records and optional `teamImage`/power fields.

- [ ] Copy the guild crest and crop the 12 known hero/titan Guild War compositions from the supplied screenshots.
- [ ] Create `data/players.js` with all weekly activity values and known hero/titan powers.
- [ ] Add Node tests asserting roster length, unique nicknames, activity totals and known composition count.
- [ ] Run `npm test` and verify the data tests pass.
- [ ] Commit the data foundation.

### Task 2: Shared visual shell and bilingual navigation

**Files:**
- Create: `css/styles.css`
- Create: `js/i18n.js`
- Create: `js/app.js`
- Create: `tests/i18n.test.mjs`

**Interfaces:**
- Produces: `setLanguage(lang)`, `getLanguage()`, `t(key)` and shared header/footer behavior.

- [ ] Add complete RU/EN translation dictionaries for every shared navigation and visible UI label.
- [ ] Implement persisted language switching and active-navigation state.
- [ ] Build the approved dark fantasy/red/gold responsive design system in CSS.
- [ ] Add tests for critical translation keys including `Guild VS`.
- [ ] Run `npm test` and commit shared shell.

### Task 3: Home and Players pages

**Files:**
- Create: `index.html`
- Create: `players.html`
- Create: `js/home-page.js`
- Create: `js/players-page.js`
- Create: `tests/pages.test.mjs`

**Interfaces:**
- Consumes: `players`, `t()`, language-change events.
- Produces: home summary and searchable/sortable roster list/cards.

- [ ] Build the landing page with guild crest, member count, derived power totals and quick navigation cards.
- [ ] Build Players with all 30 members, search, sorting and list/card view toggle.
- [ ] Render known team composition crops and clear no-data states for unknown compositions.
- [ ] Re-render translated labels after language changes without losing search/sort state.
- [ ] Add structural tests for required pages and navigation.
- [ ] Run `npm test` and commit core pages.

### Task 4: Future-guide placeholders and About page

**Files:**
- Create: `dungeon.html`
- Create: `heroes.html`
- Create: `titans.html`
- Create: `guild-vs.html`
- Create: `about.html`

**Interfaces:**
- Consumes: shared CSS, `app.js`, i18n attributes.

- [ ] Build bilingual placeholder pages for Dungeon, Heroes, Titans and Guild VS describing planned guide content.
- [ ] Build bilingual About page explaining the portal purpose and data source.
- [ ] Verify every top-level nav link works with relative paths.
- [ ] Run `npm test` and commit guide shell.

### Task 5: GitHub Pages readiness and verification

**Files:**
- Create: `.nojekyll`
- Create: `README.md`
- Create: `tests/assets.test.mjs`

**Interfaces:**
- Produces: deployable repository root with documented Pages setup.

- [ ] Add `.nojekyll` and deployment instructions for GitHub Pages.
- [ ] Add tests checking local image references and all seven HTML pages exist.
- [ ] Run full test suite.
- [ ] Start a local static server and smoke-test the key pages.
- [ ] Commit final GitHub Pages readiness changes.
