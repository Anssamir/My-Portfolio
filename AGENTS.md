<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Portfolio — Anas Amir

Personal portfolio site for Anas Amir (designer / AI product engineer). A static marketing site: **no backend, no database, no API routes, no data fetching at runtime.** All content is hard-coded in components or the `data/` modules.

## Stack

- **Next.js 16 (App Router)** + **React 19** + **TypeScript** (strict)
- **npm** — do not switch to yarn/pnpm
- Styling: Tailwind v4 is imported, but the real stylesheet is hand-written CSS in `app/globals.css`. See "Styling" below.
- Path alias: `@/*` → project root (`tsconfig.json`)

## Commands

- `npm run dev` — dev server on **http://localhost:3000**
- `npm run build` / `npm start`
- There is **no test and no lint script.** Do not run or invent `npm test` / `npm run lint`.
- Verify changes with `npx tsc --noEmit` (must pass) and by loading `http://localhost:3000`.
- **Run only one dev server.** If one is already on:3000, reuse it — do **not** kill it or start a second (`pkill -f "next dev"` kills the user's server).

## Architecture

- `app/` holds the routes. The pattern is: a server `page.tsx` exports `metadata` and renders an interactive sibling `*Content.tsx` that starts with `'use client'`.
  - `app/page.tsx` — home, composes the section components
  - `app/work/` → `WorkContent.tsx`
  - `app/about-me/` → `AboutContent.tsx`
  - `app/projects/[slug]/` → `ProjectContent.tsx` (+ `generateMetadata`)
  - `app/contact/page.tsx`, `app/resume/page.tsx` — server, static content
- `app/layout.tsx` → `app/ClientProviders.tsx` (client) mounts `<CustomCursor>`, `<CustomHoverCursor>`, `<Header>`, and scrolls to top on every route change.
- `components/` — presentational components (Header, Footer, ProjectCard, CaseBody, Process, Skills, Journey, AboutPreview, CTA, UpworkButton, CustomCursor, CustomHoverCursor). `GridBackground.tsx` exists but is **unused**.
- `hooks/useReveal.ts` — IntersectionObserver hook; adds `.show` to `.reveal` elements as they enter the viewport. Attach its ref to a `<main>` and mark animated blocks with `className="reveal"`.
- `data/projects.ts` — the `Project` interface and the project list (drives the home grid + work page). `data/assets.ts` — image path/URL map.

## Adding or editing content

- **New project:** add an entry to `data/projects.ts` and an image key to `data/assets.ts`.
- **Remote images** come from `framerusercontent.com`; any new remote host must be added to `images.remotePatterns` in `next.config.mjs` before `next/image` will load it.
- **Special cases to preserve:** `marketly` renders a bespoke NDA page inside `ProjectContent`; `CaseBody.tsx` holds per-slug narrative sections. Local SVG assets live in `public/` (e.g. `public/Skills Svgs/`). Some of those are large (one ~890 KB, several embed raster images).

## Styling

- `app/globals.css` (~2,800 lines of hand-written CSS) is the source of truth. **Do not assume utility-first Tailwind** — match the existing class names and add plain CSS rules, following the file's section/comment structure.
- Design tokens: `--ink #0b1d38`, `--lime #dcffa2`, `--paper #fcfcfa`, `--gray #e8e8e5`.
- Fonts: Inter via `next/font` in `layout.tsx`, plus Google font imports at the top of `globals.css`.
- Infinite marquees use a duplicated track animated with `translateX` and uniform `margin-right` (not flex `gap`) so the loop is seamless. Keep this pattern if editing marquees.

## Guardrails

- Don't add dependencies without asking first.
- Don't rewrite `globals.css` wholesale or restructure files during an unrelated change.
- Keep each page's exported `metadata` (SEO) intact.
- Known issue: `app/projects/[slug]/page.tsx` reads `params` synchronously in `generateMetadata`, but Next 16 dynamic `params` is async — treat as existing/known; don't "fix" it by guessing.
- Keep edits consistent with surrounding naming, structure, and comment style.

## Git

- `main` is the default branch; changes land via feature branches and PRs.
