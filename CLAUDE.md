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

## Architecture

- Uses the Next.js App Router (`src/app/`) — all pages are React Server Components by default
- Path alias: `@/*` maps to `./src/*`
- Remote images allowed from `images.unsplash.com` (configured in `next.config.ts`)
- App language is Spanish (`lang="es"`)

## Design Tokens

Custom theme colors defined in `src/app/globals.css` using Tailwind v4 `@theme inline`:
- `primary`: #9333ea (purple)
- `accent`: #f43f5e (rose)
- `foreground`: #0f172a (dark slate)
- `muted`: #64748b (slate gray)
- `violet-200`: #ddd6fe
