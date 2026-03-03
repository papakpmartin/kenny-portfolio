# Kenny Portfolio — Secondary Pages Handoff

## Goal
Build bespoke secondary/project pages that mirror each corresponding Behance page's layout rhythm and grouping, while using a shared Vue component system.

## Source of truth
Behance profile: https://www.behance.net/kennethmartinii1

Project pages:
1. LA County Fair — https://www.behance.net/gallery/235159869/LA-County-Fair
2. Imaginarium — https://www.behance.net/gallery/241832025/Imaginarium
3. JustCBD — https://www.behance.net/gallery/235038001/JustCBD
4. GoodCook — https://www.behance.net/gallery/241757217/GoodCook
5. CLEARSTEM Skincare — https://www.behance.net/gallery/235038023/CLEARSTEM-Skincare
6. UCR Health — https://www.behance.net/gallery/241945529/UCR-Health
7. International Mission Board — https://www.behance.net/gallery/241684949/International-Mission-Board
8. NutriFusion — https://www.behance.net/gallery/235038133/NutriFusion
9. Ecco Bella — https://www.behance.net/gallery/241887961/Ecco-Bella

## Current implementation state
- Vue + Vite app running in `projects/kenny-portfolio/site`
- Home grid uses exact profile-grid image sources (3x3 desktop)
- Secondary routes exist: `/project/:slug`
- Reusable modules exist (`full`, `split`, `three`) with shape-aware media rendering

## Decision
Use hybrid approach:
- Keep shared renderer/components
- Make each project page bespoke via per-project module sequence and grouping
- Match Behance grouping cadence (hero, paired groupings, stacked/tall rhythm, square clusters)

## Non-negotiables
- Preserve each project's visual pacing from Behance as closely as practical
- Do not force one template order across all projects
- Keep page light/white and typography minimal
- Keep interactions subtle; no heavy motion/video hero behavior

## Build strategy
For each project (one at a time):
1. Inspect Behance page layout rhythm
2. Map groups into module sequence in `src/data/projects.js`
3. Extend module vocabulary only if required (e.g., `asymmetric`, `masonry`, `tall-stack`)
4. Verify desktop/tablet/mobile behavior
5. Commit with project-specific message

## Suggested module vocabulary
- `full` (12 cols)
- `split` (6/6)
- `three` (4/4/4)
- `asymmetric-left` (7/5)
- `asymmetric-right` (5/7)
- `masonry`
- `portrait-pair`
- `square-triptych`

## Review checkpoints
After each project page pass, check:
- Grouping resemblance to Behance source
- Image crop integrity
- Rhythm/whitespace
- Mobile stacking quality
- Performance feel (no obvious jank)

## Acceptance criteria (per page)
- Page visually resembles source grouping and flow
- No broken/missing media
- Responsive behavior stable
- Code stays data-driven (minimal one-off CSS hacks)

## Execution order
1. LA County Fair
2. Imaginarium
3. GoodCook
4. JustCBD
5. CLEARSTEM Skincare
6. UCR Health
7. International Mission Board
8. NutriFusion
9. Ecco Bella
