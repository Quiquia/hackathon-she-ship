import Link from "next/link";
import { TrendingUp, ArrowRight, Target } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RealityCheckPage() {
  return (
    <div className="min-h-screen bg-parchment font-sans text-ink flex flex-col">
      <Header />

      <main className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex-1">
        <div className="flex flex-col items-center py-12 px-4 sm:px-6 max-w-5xl mx-auto w-full">
          {/* Hero banner — plum solid, not gradient chaos */}
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

          {/* Salary cards — warm, clear hierarchy */}
          <div className="grid md:grid-cols-3 gap-5 w-full mb-12">
            {/* Current salary */}
            <div className="bg-surface-elevated border border-border p-8 rounded-2xl flex flex-col items-center text-center">
              <p className="text-ink-muted font-semibold uppercase tracking-wider text-xs mb-4">
                Tu salario actual
              </p>
              <p className="text-4xl font-extrabold text-ink tracking-tight">
                S/5,500
              </p>
              <p className="text-sm text-ink-muted mt-2 font-medium">mensual</p>
            </div>

            {/* Estimated market salary — gold accent, this is your "valor" */}
            <div className="bg-surface-elevated border-2 border-valor/30 p-8 rounded-2xl flex flex-col items-center text-center relative transform md:-translate-y-3">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-valor text-white text-xs font-bold rounded-full tracking-wide">
                Tu valor real
              </div>
              <p className="text-ink-muted font-semibold uppercase tracking-wider text-xs mb-4 mt-2">
                Salario promedio estimado
              </p>
              <p className="text-5xl font-extrabold text-ink tracking-tight">
                S/7,799
              </p>
              <div className="flex items-center gap-1.5 mt-3 text-valor">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-bold">Tu objetivo ideal</span>
              </div>
            </div>

            {/* Salary gap — warm red, not aggressive */}
            <div className="bg-surface-elevated border border-gap/20 p-8 rounded-2xl flex flex-col items-center text-center">
              <p className="text-ink-muted font-semibold uppercase tracking-wider text-xs mb-4">
                Brecha salarial
              </p>
              <p className="text-5xl font-extrabold text-gap tracking-tight">
                29%
              </p>
              <p className="mt-3 text-gap/80 text-sm font-semibold">
                Por debajo del mercado
              </p>
            </div>
          </div>

          {/* CTA banner — warm, encouraging */}
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
