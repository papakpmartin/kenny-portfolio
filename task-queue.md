# Kenny Portfolio — Task Queue

Active work queue for the project.

Historical implementation notes live in `progress-log.md`.
Durable project decisions live in `decisions.md`.

## Queued: Behance Resource Capture

Source profile: https://www.behance.net/kennethmartinii1

Status: queued (pending go-ahead while inspiration review continues)
Owner: fullstack
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
