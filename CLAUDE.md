# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Salary Sister AI — a Spanish-language financial empowerment platform helping women analyze salary gaps and negotiate better compensation. Built as a hackathon project ("She Ships").

## Commands

- **Dev server:** `pnpm dev` (runs on localhost:3000)
- **Build:** `pnpm build`
- **Lint:** `pnpm lint` (ESLint 9 with next config)
- **Package manager:** pnpm (lockfile is `pnpm-lock.yaml`)

## Tech Stack

- Next.js 16 with App Router (React 19)
- TypeScript (strict mode)
- Tailwind CSS v4 (via `@tailwindcss/postcss`)
- Geist font loaded via `next/font/google`
- Supabase (database + auth) via `@supabase/supabase-js`
- Featherless AI (OpenAI-compatible API) for salary market estimation via `openai` SDK

## Architecture

- Uses the Next.js App Router (`src/app/`) — all pages are React Server Components by default
- Path alias: `@/*` maps to `./src/*`
- Remote images allowed from `images.unsplash.com` (configured in `next.config.ts`)
- App language is Spanish (`lang="es"`)

### Key directories

- `src/app/` — Pages and routes (landing, `/salary-input`, `/reality-check`)
- `src/app/salary-input/actions.ts` — Server action: saves form to Supabase, returns submission ID
- `src/components/` — Shared components (`Header`, `Footer`)
- `src/lib/supabase.ts` — Supabase server-side client (uses `SUPABASE_SECRET_KEY`)
- `src/lib/featherless.ts` — Featherless AI client (lazy init, server-side only, OpenAI SDK)
- `src/lib/salary-estimator.ts` — Builds prompt from profile + calls Featherless AI to estimate market salary
- `src/types/database.ts` — TypeScript interfaces matching Supabase tables

### App Flow

1. `/salary-input` — User fills form → server action saves to Supabase → redirects to `/reality-check?id=xxx`
2. `/reality-check?id=xxx` — Dynamic server page: fetches submission from Supabase, calls OpenAI to estimate market salary, displays comparison cards (current salary, estimated salary, gap percentage)

### Supabase

- **Table:** `salary_submissions` (22 columns — see `FIELD_MAPPING.md` for full schema)
- **Types:** `SalarySubmission` / `SalarySubmissionInsert` in `src/types/database.ts`
- **Client:** Server-side only (`src/lib/supabase.ts`) — never import in client components
- **Env vars:** `NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SECRET_KEY` (see `.env.example`)
- **MCP:** Supabase MCP server configured in `.mcp.json`

### Featherless AI Integration

- **Client:** `src/lib/featherless.ts` — lazy singleton via `getFeatherless()` (OpenAI SDK with custom baseURL)
- **Base URL:** `https://api.featherless.ai/v1`
- **Estimator:** `src/lib/salary-estimator.ts` — takes a `SalarySubmission`, returns `SalaryEstimate` (estimated_salary, gap_percentage, gap_direction, summary)
- **Model:** `deepseek-ai/DeepSeek-R1` (671B params, most advanced open-source model)
- **Env var:** `FEATHERLESS_API_KEY` (see `.env.example`)

## Design Tokens

Custom warm theme defined in `src/app/globals.css` using Tailwind v4 `@theme inline`:

- **Ink (text):** `ink` #2D1B42, `ink-secondary` #5B4370, `ink-muted` #8B7D96, `ink-faint` #B8ADBE
- **Surfaces:** `parchment` #FAF7F2, `surface` #FFFDF9, `surface-elevated` #FFFFFF
- **Brand:** `plum` #5B2D8E, `plum-deep` #3D1A6E, `plum-light` #EDE5F5
- **Accent:** `valor` #C8860A (gold), `valor-light` #F5E6C8, `valor-subtle` #FBF3E4
- **Semantic:** `warmth` #C2724E, `growth` #5A7F60, `gap` #B84040
- **Borders:** `border` rgba(45,27,66,0.08), `border-strong` rgba(45,27,66,0.15)
