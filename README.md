# Goblins Guild Portal

Static bilingual RU/EN portal for the **Goblins** guild in Hero Wars: Alliance.

## Run locally

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000/`.

## GitHub Pages

1. Push this repository to GitHub.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Select your default branch and `/ (root)`.
5. Save. The site uses only relative URLs and requires no build step.

Player data lives in `data/players.js`; translations live in `js/i18n.js`.

The hero catalog (`heroes.html`) uses all 80 portraits in `assets/heroes`. Names, RU/EN summaries, classes, and source links live in `data/heroes.js`. Image paths preserve the original filename spelling and case; display names use the Hero Wars: Alliance mobile names. The catalog supports bilingual name search and class filtering, and follows the site's RU/EN switch. Source descriptions were checked on 2026-09-09; review the linked guides when updating them. No build step or runtime external API is required.

Dungeon instructions live in separate HTML files: `content/dungeon/ru.html` (Russian) and `content/dungeon/en.html` (English). The Dungeon page loads the file for the selected language. Edit these files to update the guide; no build step is required.

Player hero compositions can use a `heroTeam` array of catalog IDs in `data/players.js`, ordered left to right. All 30 players now have confirmed five-hero compositions from the supplied screenshots, with updated hero and titan power. These render localized hero portraits on the Players and Home pages. Hero composition counts are independent of titan image availability. Hero-team screenshots are no longer used; players without a known composition display the localized empty state.
