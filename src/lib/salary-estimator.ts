/**
 * Estimador de salario de mercado usando OpenAI.
 *
 * Recibe el perfil de una usuaria y devuelve:
 * - estimated_salary: el salario mensual estimado del mercado
 * - currency: la moneda del salario
 * - gap_percentage: qué tan lejos está del mercado (positivo = por debajo)
 * - summary: una explicación corta en español
 */
import { getOpenAI } from "@/lib/openai";
import type { SalarySubmission } from "@/types/database";

// --- Tipos ---

export interface SalaryEstimate {
  estimated_salary: number;
  currency: string;
  gap_percentage: number;
  gap_direction: "below" | "above" | "at_market";
  summary: string;
}

// --- Prompt ---

/**
 * Construye el prompt que describe el perfil de la usuaria.
 * Se separa del llamado a OpenAI para que sea fácil de leer y testear.
 */
function buildPrompt(profile: SalarySubmission): string {
  return `Eres una experta en compensación y mercado laboral en Latinoamérica.

Analiza el siguiente perfil profesional y estima el SALARIO MENSUAL DE MERCADO
para una persona con estas características. Basa tu estimación en datos reales
del mercado laboral de la región.

## Perfil

- Área del rol: ${profile.role_area ?? "No especificado"}
- Seniority: ${profile.seniority ?? "No especificado"}
- Años de experiencia: ${profile.frontend_years_experience ?? "No especificado"}
- Tecnología principal: ${profile.main_technology ?? "No especificado"}
- Habilidades técnicas: ${profile.technical_skills ?? "No especificado"}
- Nivel de inglés: ${profile.english_level ?? "No especificado"}
- Usa inglés en el trabajo: ${profile.uses_english_current_job ?? "No especificado"}
- Descripción del rol: ${profile.role_description ?? "No especificado"}
- País: ${profile.country ?? "No especificado"}
- Ciudad: ${profile.city ?? "No especificado"}
- Modalidad: ${profile.work_mode ?? "No especificado"}
- Tipo de empresa: ${profile.company_type ?? "No especificado"}
- Tipo de empleo: ${profile.employment_type ?? "No especificado"}
- Jornada: ${profile.work_schedule ?? "No especificado"}
- Alcance de empresa: ${profile.company_scope ?? "No especificado"}
- Salario actual: ${profile.monthly_salary_amount ?? "No especificado"} ${profile.salary_currency ?? ""}
- Tipo de salario: ${profile.salary_type ?? "No especificado"}
- Compensación variable: ${profile.has_variable_compensation ? "Sí" : "No"}

## Instrucciones

1. Estima el salario mensual de mercado en la MISMA moneda (${profile.salary_currency ?? "USD"}).
2. Calcula el porcentaje de brecha: ((estimado - actual) / estimado) * 100.
3. Responde ÚNICAMENTE con un JSON válido, sin markdown ni explicaciones fuera del JSON.

## Formato de respuesta (JSON)

{
  "estimated_salary": <número entero>,
  "currency": "${profile.salary_currency ?? "USD"}",
  "gap_percentage": <número con 1 decimal>,
  "gap_direction": "below" | "above" | "at_market",
  "summary": "<1-2 oraciones en español explicando la estimación>"
}`;
}

// --- Llamada a OpenAI ---

/**
 * Llama a OpenAI para estimar el salario de mercado.
 *
 * Usa gpt-4o-mini por ser rápido y económico (ideal para hackathon).
 * Si necesitas más precisión, cambia a "gpt-4o".
 */
export async function estimateSalary(
  profile: SalarySubmission
): Promise<SalaryEstimate> {
  const prompt = buildPrompt(profile);

  const response = await getOpenAI().chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          "Eres una experta en compensación laboral. Responde SOLO con JSON válido.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    temperature: 0.3, // Baja temperatura = respuestas más consistentes
    max_tokens: 300,
  });

  const content = response.choices[0]?.message?.content ?? "";

  // Limpiar respuesta: a veces OpenAI envuelve el JSON en ```json ... ```
  const cleaned = content.replace(/```json\n?|```\n?/g, "").trim();

  const parsed: SalaryEstimate = JSON.parse(cleaned);

  return parsed;
}
