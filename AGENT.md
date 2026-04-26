# Kenny Portfolio — Agent Instructions

**Read this at the start of every session.**

## Three-Step Workflow for Code Changes

**Step 1 — Confirmation**
Briefly restate the task and ask for explicit confirmation before beginning.

**Step 2 — Execution**
If web work is involved, hand off to `fullstack` agent. Report: "Handed off to fullstack — work begun."

**Step 3 — Completion & Verification**
- Acknowledge completion when work is done (by me or subagent)
- Wait silently for GitHub Pages deploy (5-10 min)
- Verify changes are live at: https://papakpmartin.github.io/kenny-portfolio/
- Only then announce: "Changes complete and live: [link]"

---

## Deployment

- **Push to `main` triggers GitHub Actions** → deploys to GitHub Pages
- GitHub Pages CDN can take **5-10 minutes** to propagate
- Don't check "too soon" — allow time for the deploy to complete
- **CRITICAL**: The Action does a **fresh build** (`npm ci && npm run build`) — it does NOT use committed `dist/` files
- The `site/dist/` directory is **gitignored** — local builds don't affect deployment
- Only the GitHub Action build matters for the live site

## Workflow

1. **Wait for explicit commands** — Don't anticipate or jump ahead
2. **Confirm percentages/values** — Wait for the user to specify exact numbers
3. **Build before committing** — `npm run build` from `site/` directory
4. **Commit with descriptive messages** — Include the changes made
5. **Push to trigger deploy** — Then allow 5-10 minutes for GitHub Pages

## Code Handoffs

- For implementation work, **hand off to `fullstack`** agent
- I coordinate; specialists execute

## Project Structure

- `site/` — Vue + Vite site (build from here)
- `site/src/views/HomePage.vue` — Home page with project cards
- `site/src/style.css` — Global styles including card zooms
- `site/src/data/projects.js` — Project data
- `.github/workflows/deploy-pages.yml` — Deploy action

## Zoom Pattern (for cards)

```css
.project-card.zoom--N .thumb { transform: scale(1.0N); }
```

- Add class via `cardZoomClass(slug)` in HomePage.vue
- Define CSS class in style.css
- Keep `transform-origin: center center`

## Remember

- **Do not jump ahead** — Wait for clear commands
- **GitHub Pages needs time** — 5-10 minutes after push
- **Delegate code work** — Use `fullstack` agent
