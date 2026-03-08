# GEMINI.md — Salary Sister AI

## Project Overview

Salary Sister AI — a Spanish-language financial empowerment platform helping women analyze salary gaps and negotiate better compensation. Hackathon project ("She Ships").

All UI text must be in Spanish (`lang="es"`).

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

## Architecture

- App Router in `src/app/` — pages are React Server Components by default
- Path alias: `@/*` maps to `./src/*`
- Remote images allowed from `images.unsplash.com` (configured in `next.config.ts`)

### Key directories

| Path | Purpose |
|---|---|
| `src/app/` | Pages and routes (landing, `/salary-input`, `/reality-check`) |
| `src/app/salary-input/actions.ts` | Server actions for Supabase inserts |
| `src/components/` | Shared components (`Header`, `Footer`) |
| `src/lib/supabase.ts` | Supabase server-side client (`SUPABASE_SECRET_KEY`) |
| `src/types/database.ts` | TypeScript interfaces matching Supabase tables |
| `src/app/globals.css` | Design tokens (Tailwind v4 `@theme inline`) |
| `FIELD_MAPPING.md` | Full schema of `salary_submissions` table |

### Supabase

- **Table:** `salary_submissions` (22 columns — see `FIELD_MAPPING.md` for full schema)
- **Types:** `SalarySubmission` / `SalarySubmissionInsert` in `src/types/database.ts`
- **Client:** Server-side only (`src/lib/supabase.ts`) — NEVER import in client components
- **Env vars:** `NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SECRET_KEY` (see `.env.example`)

### Server Actions Pattern

All Supabase mutations use server actions (`"use server"`) co-located with their route in `actions.ts` files. Return type: `{ success: boolean; error?: string }`.

```typescript
"use server";
import { supabase } from "@/lib/supabase";
import type { SalarySubmissionInsert } from "@/types/database";

export async function submitData(formData: FormData): Promise<{ success: boolean; error?: string }> {
  const data: SalarySubmissionInsert = {
    field: (formData.get("field") as string) || null,       // nullable text
    amount: formData.get("amount") ? Number(formData.get("amount")) : null,  // nullable number
    checked: formData.get("checked") === "on",              // boolean from checkbox
  };

  const { error } = await supabase.from("salary_submissions").insert(data);
  if (error) return { success: false, error: error.message };
  return { success: true };
}
```

## Design Tokens (Tailwind v4)

Custom warm theme in `src/app/globals.css`. Always use these tokens — never generic Tailwind colors.

| Category | Token | Hex |
|---|---|---|
| **Text** | `ink` | #2D1B42 |
| | `ink-secondary` | #5B4370 |
| | `ink-muted` | #8B7D96 |
| | `ink-faint` | #B8ADBE |
| **Surfaces** | `parchment` | #FAF7F2 |
| | `surface` | #FFFDF9 |
| | `surface-elevated` | #FFFFFF |
| **Brand** | `plum` | #5B2D8E |
| | `plum-deep` | #3D1A6E |
| | `plum-light` | #EDE5F5 |
| **Accent** | `valor` | #C8860A |
| | `valor-light` | #F5E6C8 |
| | `valor-subtle` | #FBF3E4 |
| **Semantic** | `warmth` | #C2724E |
| | `growth` | #5A7F60 |
| | `gap` | #B84040 |
| **Borders** | `border` | rgba(45,27,66,0.08) |
| | `border-strong` | rgba(45,27,66,0.15) |

### Usage in Tailwind

```
bg-parchment, bg-surface, bg-surface-elevated
text-ink, text-ink-secondary, text-ink-muted
bg-plum, bg-plum-deep, bg-plum-light
bg-valor, bg-valor-light
text-warmth, text-growth, text-gap
border-border, border-border-strong
```

## Coding Conventions

- Tailwind utility classes with project design tokens (no generic `gray-500`, `blue-600`)
- Icons from `lucide-react`
- `"use client"` only when state or browser APIs are needed
- Server logic in `actions.ts`, never in client components
- Forms follow consistent styling patterns (see `src/app/salary-input/page.tsx`)
