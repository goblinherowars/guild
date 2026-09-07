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
