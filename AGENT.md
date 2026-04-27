# Kenny Portfolio — Agent Instructions

**Read this at the start of every session.**

## Three-Step Workflow for Code Changes

**Step 1 — Confirmation**
Briefly restate the task and ask for explicit confirmation before beginning.

**Step 2 — Execution (Local Dev Loop)**
For visual/CSS changes, use local dev server with screenshot verification:

1. **Start dev server**: `npm run dev:lan` from `site/`
2. **Screenshot with lazy-loading fix**: Use the script that scrolls to trigger intersection observer:
   ```bash
   node site/scripts/screenshot-lazy.cjs <output-path>
   ```
   This handles `loading="lazy"` by scrolling through the page to trigger image loading.
3. **Attach**: Use `MEDIA:path` to share screenshot in chat
4. **Iterate**: Adjust CSS → screenshot → attach cycle until approved
5. **Only when approved**: Build (`npm run build`), commit, push

**Screenshot script requirements:**
- Located at `site/scripts/screenshot-lazy.cjs`
- Uses Playwright to navigate and scroll
- Triggers `loading="lazy"` images via intersection observer
- Waits for images to fully load before capture
- Supports `fullPage: true` for complete page view

**Step 3 — Completion & Verification**
- Acknowledge completion when work is done
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
