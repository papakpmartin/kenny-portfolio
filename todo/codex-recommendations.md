# Codex Refactor Recommendations

This document captures a practical refactor plan based on the current portfolio site in `/site`, with an emphasis on small, low-risk improvements that fit the existing stack.

## Goals

- Keep the site simple and static.
- Improve maintainability without introducing a CMS or unnecessary abstraction.
- Prefer Vue SFC-local styles where that improves clarity.
- Reduce duplication and content drift risk.
- Make future portfolio updates easier.

## Constraints And Preferences

- Keep project content in JSON or JSONC rather than JavaScript modules.
- Prefer local SFC styles, including `scoped` styles where useful.
- Preserve the current image-first portfolio structure.
- Avoid high-churn rewrites unless there is a clear payoff.

## Recommended Work Order

1. Extract shared image helpers.
2. Split project data into per-project JSON or JSONC files.
3. Move page-specific styles into SFCs.
4. Add a proper not-found route and fallback UX.
5. Reduce resume content duplication.
6. Improve accessibility metadata.
7. Add a small smoke-test layer.
8. Tighten repo/docs organization.

## 1. Extract Shared Image Helpers

### Why

The WebP and responsive `srcset` logic is duplicated in `HomePage.vue` and `ProjectPage.vue`.

### Proposed Change

- Add a shared utility such as `/site/src/utils/images.js`.
- Move `asWebp` and `webpSrcSet` into that file.
- Update both page components to import the shared helpers.

### Expected Benefit

- Less repeated logic.
- Easier to update responsive image behavior in one place.
- Cleaner page components.

## 2. Split Project Data Into Per-Project JSON Or JSONC Files

### Why

`/site/src/data/projects.js` is currently the single source of truth for all portfolio content and layout metadata. It works, but it will become harder to scan and edit as projects grow.

### Proposed Change

Move project content into one file per project using JSON or JSONC:

- `/site/src/data/projects/index.js`
- `/site/src/data/projects/la-county-fair.json`
- `/site/src/data/projects/imaginarium.json`
- `/site/src/data/projects/justcbd.json`
- etc.

If comments are useful during content editing, prefer `.jsonc` instead of `.json`.

### Suggested Structure

Each project file contains raw content only:

- slug
- title
- category
- cover path
- intro/story
- modules
- image metadata such as shape and alt text

The index or loader file:

- loads all project content files
- normalizes image paths against the app base path
- exports the ordered `projects` array
- exports `projectMap`

### Notes

- This is not a CMS migration.
- This keeps project entries as content rather than code.
- This makes each case study easier to edit in isolation.
- This creates a cleaner separation between content and rendering logic.
- Relative asset paths should be stored in the JSON or JSONC files and resolved in one loader utility.

### JSON vs JSONC

Use `JSON` if the priority is strictness and minimal tooling.

Use `JSONC` if the priority is allowing editor comments such as:

- internal notes about layout intent
- reminders about asset reuse
- project-specific caveats

If there is no existing JSONC parser in the project, plain `JSON` is the lower-friction default.

### Migration Steps

1. Create the new `/site/src/data/projects/` directory.
2. Move one project object per file as JSON or JSONC.
3. Store relative image paths rather than computed `BASE_URL` strings.
4. Add an index or loader module that resolves paths and builds the aggregated exports.
5. Update imports in the views.
6. Verify all routes and project pages still render correctly.

## 3. Move Page-Specific Styles Into SFCs

### Why

`/site/src/style.css` currently mixes:

- global styles
- app-shell styles
- home page styles
- project page styles
- resume page styles
- project-specific layout exceptions

That makes it harder to understand ownership and safely edit one page at a time.

### Proposed Change

Keep only truly global styles in `/site/src/style.css`, and move view-specific styles closer to their components.

### Suggested Split

Keep in `/site/src/style.css`:

- resets
- root tokens and CSS variables
- base typography defaults
- `body`, `#app`, links
- shell/topbar/nav styles shared by the whole app

Move into `/site/src/views/HomePage.vue`:

- hero styles
- project grid styles
- project card styles
- card hover animation

Move into `/site/src/views/ProjectPage.vue`:

- project hero styles
- media stream/module layout styles
- project footer styles
- project-specific layout exceptions where they are still needed

Move into `/site/src/views/ResumePage.vue`:

- all resume page layout and print styles unless shared globally

### Style Strategy

- Prefer local `<style>` blocks in each SFC.
- Use `scoped` where it improves safety and does not fight the layout model.
- If a page needs broad layout selectors, use a local non-scoped `<style>` block in that SFC instead of forcing everything into the global stylesheet.

### Expected Benefit

- Clearer style ownership.
- Easier page-by-page iteration.
- Lower risk of unrelated CSS regressions.

## 4. Add A Proper Not-Found Experience

### Why

Unknown project slugs currently render a plain "Project not found." message inside `ProjectPage.vue`.

### Proposed Change

- Add a dedicated `NotFoundPage.vue`.
- Add a catch-all route in the router.
- Redirect missing project slugs to the not-found view, or render a richer local fallback with navigation back home.

### Expected Benefit

- Better UX.
- Cleaner routing behavior.
- More complete static-site feel.

## 5. Reduce Resume Content Duplication

### Why

The resume content exists in both:

- `/content/resume/ken-martin-resume-2026-03-03.md`
- `/site/src/views/ResumePage.vue`

That creates drift risk.

### Proposed Change

Choose one source of truth and derive the other from it.

### Best-Fit Option For This Repo

Keep a structured JS data source for the rendered resume page, and preserve the markdown file as imported/source material only if it is still useful operationally.

Possible implementation directions:

- Add `/site/src/data/resume.js` and render the page from that data.
- Or add a simple build-time transform if markdown authoring becomes important later.

### Recommended First Step

- Extract the repeated resume content into `/site/src/data/resume.js`.
- Update `ResumePage.vue` to render from data rather than embedding all content inline.

### Expected Benefit

- Safer updates.
- Cleaner component.
- Easier future export or print formatting work.

## 6. Improve Accessibility Metadata

### Why

Image alt text is currently generic, especially on project detail pages.

### Proposed Change

- Add per-image or per-module descriptive alt text in project data.
- Keep decorative images empty-alt only when they are truly decorative.
- Improve link labels and page landmarks where useful.

### Expected Benefit

- Better accessibility.
- Better semantic quality.
- Slight SEO upside.

## 7. Add A Lightweight Smoke-Test Layer

### Why

The app appears to have no automated tests right now.

### Proposed Change

Add a very small test surface rather than a full testing buildout.

### Suggested Coverage

- Home page renders project cards.
- Known project slug resolves.
- Unknown project slug shows fallback behavior.
- Resume page renders core sections.

### Tooling Options

Likely best fit:

- `vitest`
- `@vue/test-utils`

Alternative:

- a very small Playwright smoke pass if browser-level coverage is preferred

### Expected Benefit

- Protects against breakage during content and layout refactors.
- Gives confidence for routing/data changes.

## 8. Tighten Repo And Documentation Organization

### Why

The repository currently mixes:

- the site app
- raw assets
- imported content
- handoff notes
- planning documents

This is workable, but less clear for future maintenance.

### Proposed Change

Clarify folder intent rather than aggressively reorganizing everything at once.

### Suggested Documentation Additions

Update `/site/README.md` to document:

- how project data is organized
- where public images live
- how the WebP pipeline works
- how to add a new project
- how deployment base paths are handled

Optional later cleanup:

- move working notes into a dedicated `/todo` or `/docs` area
- separate source assets from app-consumed assets more explicitly

## Quick Wins

These are the best near-term changes for payoff versus effort:

1. Extract shared image helpers.
2. Split `projects.js` into per-project JSON or JSONC files.
3. Move page-specific CSS into SFC-local styles.
4. Add a not-found page.

## Bigger Follow-Ups

These are still worthwhile, but can happen after the structural cleanup:

1. Resume data normalization.
2. Accessibility text improvements.
3. Smoke tests.
4. Repo/documentation cleanup.

## Suggested Execution Strategy

If implementing this in phases, use:

### Phase 1

- shared image helpers
- per-project data modules
- no visual changes intended

### Phase 2

- CSS ownership refactor into SFC-local styles
- not-found route/page

### Phase 3

- resume data extraction
- accessibility pass
- smoke tests

### Phase 4

- README and repo cleanup

## Success Criteria

- Portfolio behavior remains unchanged for existing project pages.
- Styling ownership is easier to understand.
- Adding a new project requires editing a small, obvious set of files.
- Resume content has a clearer single source of truth.
- Missing routes and regressions are handled more gracefully.
