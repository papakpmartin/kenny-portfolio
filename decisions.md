# Kenny Portfolio — Decisions

This file stores durable project decisions that should survive chat history.

## Collaboration / Process

- Telegram is the coordination layer; this repo is the source of truth.
- Project chat scope is intentionally limited to `projects/kenny-portfolio/`.
- Durable decisions should be written here rather than left only in Telegram.
- For Kenny-requested site changes, do not send a completion update until the change is live on the deployed site.

## Stack

- Site implementation lives in `site/`.
- Preferred stack: modern JavaScript, HTML, and CSS.
- Prefer vanilla-first when it makes sense and is not burdensome.
- When a framework is warranted, prefer Vue 3 SFC + Vite.
- Avoid TypeScript unless explicitly requested.
- Prefer plain CSS by default.

## Experience / Content Direction

- The portfolio should stay simple, static, and image-first.
- Preserve the visual pacing/grouping of Behance project pages as closely as practical.
- Do not force every project into one rigid template order.
- Keep the page light/white, typography minimal, and motion subtle.

## Secondary Page Strategy

- Use a hybrid approach:
  - shared renderer/components where useful
  - bespoke per-project page composition where needed
- Match Behance grouping cadence (hero, paired groupings, stacked/tall rhythm, square clusters).

## Current Routing / Collaboration Notes

- Telegram topic `1` routes to `main`.
- Telegram topic `3` (`Ops / IT`) routes to `ops`.
