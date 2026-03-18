# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev      # Start development server (localhost:3000)
pnpm build    # Production build
pnpm start    # Start production server
pnpm lint     # Run ESLint
```

No test suite is configured.

## Architecture

**Stack:** Next.js 14 App Router, React 18, TypeScript 5, Tailwind CSS, shadcn/ui, Framer Motion, pnpm.

**Single-page portfolio** — all content lives on one route (`/`). The site is data-driven: `/src/data/resume.tsx` exports a single `DATA` object that is the source of truth for all portfolio content (work history, education, projects, skills, contact info). To update content, edit only that file.

**Key directories:**
- `src/app/` — App Router layout and root page
- `src/components/ui/` — shadcn/ui primitives (Card, Badge, Avatar, etc.)
- `src/components/magicui/` — animated components (BlurFade, Dock)
- `src/data/resume.tsx` — all portfolio content
- `src/lib/utils.ts` — `cn()` helper, `formatDate`, `convertMarkdownLinkToText`

**Animation pattern:** Sections on the page use `<BlurFade>` wrappers with staggered delays via `BLUR_FADE_DELAY * index`. The bottom navigation uses a Dock component with magnification on hover.

**Theming:** Dark mode via `next-themes` with class strategy. Colors are CSS HSL custom properties defined in `globals.css` and referenced by Tailwind via `hsl(var(--...))`.

**Components marked `"use client"`:** navbar, theme-provider, mode-toggle, and anything using Framer Motion or browser APIs. Everything else is RSC by default.

**shadcn/ui config:** Style is "new-york", RSC mode enabled, aliases at `@/components` and `@/lib/utils`. Add new components via `pnpm dlx shadcn@latest add <component>`.

**Path alias:** `@/*` maps to `src/*`.
