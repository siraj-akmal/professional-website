# Static assets (`/public`)

Files here are served as-is from the site root. Paths are resolved through
Vite's `BASE_URL`, so they work locally (`/`) and on GitHub Pages
(`/professional-website/`). **Do not hardcode `/professional-website/` in paths.**

## Replacing the placeholders

Everything below is currently a themed SVG placeholder. Drop in your real files
and the site picks them up automatically.

### Project thumbnails — `public/projects/`
Referenced in `constants.tsx` via `asset('projects/<name>')`. Recommended:
**16:9, ~1280×720, PNG or JPG** (screenshots of the actual project).

| File | Project |
| :--- | :--- |
| `onboarding-rag-chatbot.svg`   | Onboarding RAG Chatbot |
| `boston-weather-prediction.svg` | Boston Weather Prediction |
| `aws-financial-dashboard.svg`   | AWS Financial Dashboard |
| `mlb-player-performance.svg`    | MLB Player Performance |
| `nba-salary-prediction.svg`     | NBA Salary Prediction |

To use a real image, add e.g. `onboarding-rag-chatbot.png` and update that one
line in `constants.tsx` from `.svg` → `.png` (or just save your file as the same
`.svg` name and skip the edit).

### Portrait — `public/portrait.jpg`
Wired in `components/About.tsx`. It already points at `portrait.jpg`; until that
file exists it falls back to `portrait.svg`. Recommended: **3:4 portrait, ~900×1200**.

### Résumé — `public/resume.pdf`
The "Download PDF" button on the Experience page links to `/resume.pdf`.
Add your `resume.pdf` here to make it live (no code change needed).
