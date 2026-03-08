# Mapeo de campos: Formulario anterior vs Tabla `salary_submissions`

## Campos del formulario anterior que NO existen en la tabla

| Campo anterior (form name) | Campo en actions.ts | Estado |
|---|---|---|
| `educationLevel` | `education_level` | **ELIMINADO** — No existe en la tabla |
| `career` | `career` | **ELIMINADO** — No existe en la tabla |
| `yearsExperience` | `years_experience` | **RENOMBRADO** → `frontend_years_experience` |
| `experienceType` | `experience_type` | **ELIMINADO** — No existe en la tabla |
| `experienceArea` | `experience_area` | **REEMPLAZADO** → `role_area` (concepto similar) |
| `techSkills` | `tech_skills` | **RENOMBRADO** → `technical_skills` |
| `softSkills` | `soft_skills` | **ELIMINADO** — No existe en la tabla |
| `recentAchievements` | `recent_achievements` | **ELIMINADO** — No existe en la tabla |
| `currentSalary` | `current_salary` | **RENOMBRADO** → `monthly_salary_amount` (numeric 12,2) |
| `location` | `location` | **DIVIDIDO** → `country` + `city` |
| `jobType` | `job_type` | **RENOMBRADO** → `employment_type` |

## Campos de la tabla que NO existían en el formulario anterior

| Campo en tabla | Tipo | Agregado en nuevo form |
|---|---|---|
| `accepted_terms` | boolean (NOT NULL) | Sí — checkbox obligatorio |
| `seniority` | text | Sí — select (Trainee, Junior, Semi-Senior, Senior, Lead, Manager) |
| `main_technology` | text | Sí — input texto libre |
| `english_level` | text | Sí — select (Básico, Intermedio, Avanzado, Nativo/Bilingüe) |
| `uses_english_current_job` | text | Sí — select (Sí diariamente, Sí ocasionalmente, No) |
| `role_description` | text | Sí — textarea |
| `work_mode` | text | Sí — select (Presencial, Remoto, Híbrido) |
| `company_type` | text | Sí — select (Startup, Pyme, Corporativo, etc.) |
| `work_schedule` | text | Sí — select (Tiempo completo 40h+, Medio tiempo, Por horas) |
| `company_scope` | text | Sí — select (Local, Nacional, Multinacional) |
| `salary_currency` | text | Sí — select (MXN, USD, COP, ARS, CLP, PEN, EUR, BRL) |
| `salary_type` | text | Sí — select (Bruto, Neto) |
| `has_variable_compensation` | boolean | Sí — checkbox |
| `last_raise_period` | text | Sí — select (periodos de tiempo) |
| `negotiation_confidence` | text | Sí — select (Nada segura → Muy segura) |
| `wants_salary_negotiation_practice` | boolean | Sí — checkbox |

## Tabla anterior vs tabla actual

- **Tabla anterior:** `salary_profiles` (no existía en Supabase)
- **Tabla actual:** `salary_submissions` (la que existe en Supabase)

## Tipo TypeScript anterior vs actual

- **Antes:** `SalaryProfile` / `SalaryProfileInsert`
- **Ahora:** `SalarySubmission` / `SalarySubmissionInsert`
