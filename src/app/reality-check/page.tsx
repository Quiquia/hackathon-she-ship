/**
 * Página de resultados — "Reality Check"
 *
 * Esta página es DINÁMICA (no se genera en build).
 * Recibe ?id=xxx en la URL, busca la submission en Supabase,
 * y llama a OpenAI para estimar el salario de mercado.
 */
export const dynamic = "force-dynamic";

import Link from "next/link";
import { redirect } from "next/navigation";
import { TrendingUp, ArrowRight, Target, AlertCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { supabase } from "@/lib/supabase";
import { estimateSalary } from "@/lib/salary-estimator";
import type { SalarySubmission } from "@/types/database";

// --- Helpers para formatear números y moneda ---

/** Formatea un número como moneda: 7799 → "7,799" */
function formatMoney(amount: number): string {
  return new Intl.NumberFormat("es-LA", {
    maximumFractionDigits: 0,
  }).format(amount);
}

/** Devuelve el símbolo de la moneda: "PEN" → "S/", "MXN" → "$" */
function getCurrencySymbol(currency: string): string {
  const symbols: Record<string, string> = {
    PEN: "S/",
    MXN: "$",
    USD: "$",
    COP: "$",
    ARS: "$",
    CLP: "$",
    EUR: "€",
    BRL: "R$",
  };
  return symbols[currency] ?? "$";
}

// --- Componente de la página ---

interface PageProps {
  searchParams: Promise<{ id?: string }>;
}

export default async function RealityCheckPage({ searchParams }: PageProps) {
  const { id } = await searchParams;

  // Si no hay ID, redirigir al formulario
  if (!id) {
    redirect("/salary-input");
  }

  // 1. Buscar la submission en Supabase
  const { data: submission, error: dbError } = await supabase
    .from("salary_submissions")
    .select("*")
    .eq("id", id)
    .single();

  if (dbError || !submission) {
    redirect("/salary-input");
  }

  const profile = submission as SalarySubmission;

  // 2. Estimar el salario de mercado con OpenAI
  let estimate;
  let estimateError = false;

  try {
    estimate = await estimateSalary(profile);
  } catch {
    estimateError = true;
  }

  // 3. Calcular valores para mostrar
  const currentSalary = profile.monthly_salary_amount ?? 0;
  const currency = profile.salary_currency ?? "USD";
  const symbol = getCurrencySymbol(currency);

  const estimatedSalary = estimate?.estimated_salary ?? 0;
  const gapPercentage = estimate?.gap_percentage ?? 0;
  const gapDirection = estimate?.gap_direction ?? "below";
  const summary = estimate?.summary ?? "";

  // Texto de la brecha según dirección
  const gapLabel =
    gapDirection === "below"
      ? "Por debajo del mercado"
      : gapDirection === "above"
        ? "Por encima del mercado"
        : "En el promedio del mercado";

  return (
    <div className="min-h-screen bg-parchment font-sans text-ink flex flex-col">
      <Header />

      <main className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex-1">
        <div className="flex flex-col items-center py-12 px-4 sm:px-6 max-w-5xl mx-auto w-full">
          {/* Hero banner */}
          <div className="text-center mb-12 w-full bg-plum-deep p-10 sm:p-14 rounded-2xl text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(200,134,10,0.12)_0%,_transparent_50%)]" />

            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-6 border border-white/10 relative z-10">
              <Target className="w-8 h-8 text-valor-light" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 relative z-10">
              Tu Salary Reality Check
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed relative z-10 font-medium">
              Descubre dónde te encuentras realmente en el mercado y cuánto
              valor estás dejando en la mesa.
            </p>
          </div>

          {/* Error de estimación */}
          {estimateError && (
            <div className="w-full mb-8 p-5 bg-gap/10 border border-gap/20 rounded-xl flex items-center gap-3 text-gap">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <p className="text-sm font-medium">
                No pudimos generar la estimación en este momento. Intenta de
                nuevo más tarde.
              </p>
            </div>
          )}

          {/* Salary cards */}
          {!estimateError && (
            <div className="grid md:grid-cols-3 gap-5 w-full mb-12">
              {/* Salario actual */}
              <div className="bg-surface-elevated border border-border p-8 rounded-2xl flex flex-col items-center text-center">
                <p className="text-ink-muted font-semibold uppercase tracking-wider text-xs mb-4">
                  Tu salario actual
                </p>
                <p className="text-4xl font-extrabold text-ink tracking-tight">
                  {symbol}
                  {formatMoney(currentSalary)}
                </p>
                <p className="text-sm text-ink-muted mt-2 font-medium">
                  mensual
                </p>
              </div>

              {/* Salario estimado del mercado */}
              <div className="bg-surface-elevated border-2 border-valor/30 p-8 rounded-2xl flex flex-col items-center text-center relative transform md:-translate-y-3">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-valor text-white text-xs font-bold rounded-full tracking-wide">
                  Tu valor real
                </div>
                <p className="text-ink-muted font-semibold uppercase tracking-wider text-xs mb-4 mt-2">
                  Salario promedio estimado
                </p>
                <p className="text-5xl font-extrabold text-ink tracking-tight">
                  {symbol}
                  {formatMoney(estimatedSalary)}
                </p>
                <div className="flex items-center gap-1.5 mt-3 text-valor">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm font-bold">Tu objetivo ideal</span>
                </div>
              </div>

              {/* Brecha salarial */}
              <div className="bg-surface-elevated border border-gap/20 p-8 rounded-2xl flex flex-col items-center text-center">
                <p className="text-ink-muted font-semibold uppercase tracking-wider text-xs mb-4">
                  Brecha salarial
                </p>
                <p className="text-5xl font-extrabold text-gap tracking-tight">
                  {Math.abs(gapPercentage).toFixed(0)}%
                </p>
                <p className="mt-3 text-gap/80 text-sm font-semibold">
                  {gapLabel}
                </p>
              </div>
            </div>
          )}

          {/* Resumen de la IA */}
          {!estimateError && summary && (
            <div className="w-full bg-plum-light/50 border border-plum/10 rounded-2xl p-6 mb-12 text-center">
              <p className="text-ink-secondary text-base leading-relaxed">
                {summary}
              </p>
            </div>
          )}

          {/* CTA banner */}
          <div className="w-full bg-surface-elevated border border-border rounded-2xl p-8 md:p-10 mb-12 flex flex-col md:flex-row items-center gap-8 justify-between">
            <div className="flex items-center gap-5 text-left">
              <div className="w-14 h-14 bg-plum-light rounded-xl flex items-center justify-center shrink-0">
                <TrendingUp className="w-7 h-7 text-plum" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-ink mb-1">
                  El conocimiento es poder
                </h3>
                <p className="text-ink-secondary">
                  Ahora tienes información respaldada por datos. Estás lista
                  para el siguiente paso.
                </p>
              </div>
            </div>
            <Link
              href="/salary-impact"
              className="shrink-0 h-14 px-8 rounded-xl bg-plum text-white font-bold text-lg flex items-center justify-center gap-3 hover:bg-plum-deep hover:shadow-lg hover:shadow-plum/20 transition-all"
            >
              Ver mi impacto a 10 años
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
