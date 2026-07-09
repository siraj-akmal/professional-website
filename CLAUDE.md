# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server on port 3000
npm run build    # Production build
npm run preview  # Preview production build locally
```

Deployment to GitHub Pages is automated via GitHub Actions on push to `main`.

## Architecture

React 19 + TypeScript SPA built with Vite, styled with Tailwind CSS (loaded via CDN in `index.html`), and routed with React Router v7 using `HashRouter` (required for GitHub Pages compatibility).

**Key files:**
- `constants.tsx` — all site data (projects, experience, tech stack); edit here to update content
- `types.ts` — shared TypeScript interfaces (`Project`, `ExperienceItem`, `ProjectCategory`)
- `App.tsx` — top-level routing and dark mode state (`isDarkMode` applied as `"dark"` class on `<html>`)
- `index.html` — Tailwind CDN config with custom theme (colors, fonts); this is where the design token source lives

**Design system** (defined in `index.html` Tailwind config):
- Colors: `primary` (#17cf54 green), `forest` (#1e3a29), `charcoal` (#1A1D1C), `concrete` (#f0f2f0), `terracotta` (accent)
- Fonts: Inter (display), JetBrains Mono (code), Space Mono (alternate)
- Aesthetic: brutalist/minimalist with slab shadows and subtle texture overlays

**Component pattern:** All 8 components in `components/` are functional with TypeScript props. They receive data directly from `constants.tsx` imports — there is no global state management or context beyond the dark mode prop drilled from `App.tsx`.

**Routing:** Hash-based (`/#/about`, `/#/projects`, etc.) — do not change to `BrowserRouter` as this breaks GitHub Pages.
