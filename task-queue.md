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
- 2026-03-10: Applied site-wide no-crop + centered-group pass for all project modules: media rows now center as units, with image rendering forced to contain/natural height (no cover-crop), allowing side breathing room where needed.
- 2026-03-10: Patched follow-up white-bar regression by top-aligning grid items at module level (`align-items: start`) and per-card (`align-self: start`) so mixed-aspect rows no longer stretch shorter cards to tallest-row height.
