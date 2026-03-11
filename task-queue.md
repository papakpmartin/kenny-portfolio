# Kenny Portfolio — Task Queue

## Queued: Behance Resource Capture

Source profile: https://www.behance.net/kennethmartinii1

Status: queued (pending go-ahead while inspiration review continues)
Owner: freelancer-fullstack
Priority: high

### Objective
Capture and organize all reusable project resources from the Behance profile into a clean local asset library for portfolio rebuild work.

### Deliverables
1. `projects/kenny-portfolio/assets/` organized by project slug
2. `projects/kenny-portfolio/assets-manifest.md` with:
   - source URL
   - local filename/path
   - media type
   - resolution/size (when available)
   - notes (hero candidate, thumbnail candidate, etc.)
3. `projects/kenny-portfolio/extraction-log.md` with what succeeded/failed and any manual follow-up needed

### Folder convention
- `projects/kenny-portfolio/assets/<project-slug>/images/`
- `projects/kenny-portfolio/assets/<project-slug>/video/`
- `projects/kenny-portfolio/assets/<project-slug>/docs/`

### Selection tags (for downstream design/build)
- `hero`
- `gallery`
- `detail`
- `process`
- `cover`

### Notes
- Rights confirmed by user (all works are their own).
- Prefer highest practical quality and preserve original filenames where possible.

## Progress Log
- 2026-03-10: Tuned LA County Fair desktop split module to match Behance visual-unit behavior (locked shared height + correlated image framing) with 72/28 columns and desktop clamp height 360–430px in `site/src/style.css`.
- 2026-03-10: Fixed white-gap regression under LA County Fair paired module by extending fill/crop rules from ≥1200px down to ≥961px so stretched cards and image fill behavior stay aligned across laptop+desktop widths.
- 2026-03-10: Reworked LA County Fair paired module to enforce no-crop behavior (removed forced shared-height cover-crop treatment, set asymmetric pair to top-aligned natural image heights) after QA showed right-image clipping and left-image phantom whitespace.
- 2026-03-10: Rolled back the site-wide no-crop/centering experiment after QA regression screenshots; restored prior baseline for targeted per-module fixes.
- 2026-03-10: Completed additional rollback cleanup in `site/src/style.css` by restoring `.module-asymmetric-left` to original 7/5 columns and removing leftover ≥961px gap override that was shrinking the lead image.
- 2026-03-10: Implemented LA-only asymmetric-pair prototype using intrinsic centered visual-unit behavior (`project-page--la-county-fair`): matched render heights, no crop, and unit-level centering without site-wide impact.
- 2026-03-10: Tightened LA County Fair unit cadence by removing the extra spacer before the final eight-grid to normalize vertical rhythm between the last two visual units.
- 2026-03-10: Updated LA asymmetric-unit sizing priority to maximize border reach while preserving matched-height + centered-unit constraints; increased shared render-height clamp (340px/34vw/560px).
- 2026-03-10: Switched LA asymmetric pairs to a CSS-only ratio-driven recipe (columns proportional to native image aspect ratios) so units fill available width while keeping both images uncropped and equal-height without JS.
- 2026-03-10: Patched LA asymmetric modules to neutralize inherited `.media-module` internal gap (`gap: 0`) and validated locally with headless Chromium desktop+narrow screenshots before commit.
- 2026-03-11: Updated LA Unit 2 + Unit 7 layout locks across all breakpoints: Unit 2 now remains one row of six; Unit 7 remains four-up (two rows of four with eight items), including on small windows.
- 2026-03-11: Extended the new LA visual-unit ruleset to all project pages (global project-page selectors for asymmetric pairs + six/eight clusters) per user request to propagate all LA adjustments to the other eight pages.
- 2026-03-11: Added universal project-page responsiveness rule: multi-image groups that are single-row at desktop remain single-row on smaller windows (unless explicitly requested otherwise).
- 2026-03-11: Escalated to hard-lock selectors (`!important`) for project-page one-line multi-image groups to prevent breakpoint fallbacks from re-stacking modules during QA.
- 2026-03-11: Imaginarium spacing normalized by removing spacer modules between visual units; International Mission Board updated so each quad module renders as a 4-up unit across breakpoints.
