# Kenny Portfolio

Portfolio rebuild project for Kenny’s design/creative work.

## Purpose

This repo combines:
- project coordination docs
- extracted source/reference material
- the actual portfolio site app in `site/`

## Collaboration model

- **Telegram group/topic** = coordination, questions, approvals, quick status
- **This repo** = source of truth for project work, decisions, handoffs, and implementation

If a decision made in chat matters later, it should be written back into this repo.

## Current structure

- `site/` — Vue + Vite site implementation
- `task-queue.md` — active work queue and current next actions
- `decisions.md` — durable project decisions
- `progress-log.md` — implementation/progress history
- `assets-manifest.md` — captured asset inventory
- `extraction-log.md` — asset extraction results
- `references/` — inspiration and handoff/reference docs
- `todo/` — temporary or speculative work notes
- `artifacts/qa/` — saved QA screenshots and similar review artifacts

## Working rules

- Prefer modern JavaScript, HTML, and CSS.
- Prefer vanilla-first when it makes sense and is not burdensome.
- When a framework is warranted, prefer Vue 3 SFC + Vite.
- Avoid TypeScript unless explicitly requested.
- Keep durable decisions in `decisions.md`, not just Telegram.
- Keep active work in `task-queue.md`; move old implementation history to `progress-log.md`.

## Quick start

From `site/`:

- Install: `npm ci`
- Dev (LAN): `npm run dev:lan`
- Build: `npm run build`
- Preview (LAN): `npm run preview`

## Notes

- Telegram scope guard for the project chat is intentionally limited to `projects/kenny-portfolio/`.
- Topic routing now supports project-role coordination (for example, `Ops / IT` → `ops`).
