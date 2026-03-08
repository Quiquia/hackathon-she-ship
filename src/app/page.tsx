import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  TrendingUp,
  Target,
  MessageCircle,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-parchment">
      <Header />

      <main className="relative w-full flex flex-col">
        {/* Hero — typography-driven, plum solid, gold accent */}
        <section className="relative w-full pt-24 pb-32 px-6 md:px-12 lg:px-24 overflow-hidden bg-plum-deep">
          {/* Subtle texture */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(91,45,142,0.4)_0%,_transparent_60%)]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-valor/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-[1248px] mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
            {/* Left content */}
            <div className="flex-1 flex flex-col gap-8 text-white">
              <span className="inline-flex items-center gap-2 bg-valor/20 border border-valor/30 rounded-full px-5 py-2.5 text-sm font-semibold w-fit text-valor-light">
                <TrendingUp className="w-4 h-4" />
                Plataforma de Empoderamiento Financiero
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-[4.25rem] font-extrabold leading-[1.08] tracking-tight">
                Descubre si tu salario refleja realmente{" "}
                <span className="text-valor-light">tu valor profesional.</span>
              </h1>

              <p className="text-lg md:text-xl font-medium text-white/75 max-w-xl leading-relaxed">
                Salary Sister AI analiza tu salario, identifica brechas respecto
                al mercado y te ayuda a negociar con confianza para alcanzar la
                igualdad salarial.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link
                  href="/salary-input"
                  className="bg-valor hover:bg-valor/90 text-white text-lg font-bold px-10 py-4 rounded-xl transition-colors inline-flex items-center gap-3"
                >
                  Analizar mi salario
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Social proof */}
              <div className="flex items-center gap-3 mt-2">
                <div className="flex -space-x-2">
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop"
                    alt="Usuario"
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-plum-deep object-cover"
                  />
                  <Image
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop"
                    alt="Usuario"
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-plum-deep object-cover"
                  />
                  <Image
                    src="https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?w=100&h=100&fit=crop"
                    alt="Usuario"
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-plum-deep object-cover"
                  />
                </div>
                <p className="text-sm font-medium text-white/60">
                  Únete a miles de mujeres cerrando la brecha salarial
                </p>
              </div>
            </div>

            {/* Right content — stat cards */}
            <div className="flex-1 hidden lg:flex flex-col gap-4 max-w-md">
              {/* Main insight card */}
              <div className="bg-white/[0.07] backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <p className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-6">
                  Incremento promedio tras negociar
                </p>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-7xl font-extrabold text-valor-light tracking-tight">+24</span>
                  <span className="text-3xl font-bold text-valor-light">%</span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-[75%] h-full bg-gradient-to-r from-valor to-valor-light rounded-full" />
                </div>
                <p className="text-sm text-white/50 mt-4 font-medium">
                  Basado en mujeres que usaron datos de mercado en su negociación
                </p>
              </div>

              {/* Secondary stat */}
              <div className="bg-white/[0.07] backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-4 flex items-center justify-between">
                <p className="text-sm text-white/50 font-medium">Brecha promedio en LATAM</p>
                <p className="text-2xl font-bold text-warmth">–21%</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tools Section — narrative flow, not identical cards */}
        <section
          id="herramientas"
          className="w-full py-24 px-6 md:px-12 lg:px-24 bg-parchment relative z-20 -mt-8 rounded-t-[2.5rem]"
        >
          <div className="max-w-[1248px] mx-auto">
            <div className="max-w-2xl mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold text-ink mb-5 tracking-tight">
                Tres pasos hacia tu valor real
              </h2>
              <p className="text-lg text-ink-muted leading-relaxed">
                Un camino claro: entiende tu posición, proyecta tu futuro y practica
                tu negociación.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Step 1 — Diagnóstico */}
              <div className="group bg-surface-elevated border border-border rounded-2xl p-8 hover:border-border-strong hover:shadow-lg hover:shadow-plum/[0.04] transition-all duration-300 relative">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-bold text-valor uppercase tracking-widest">Paso 01</span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-plum-light flex items-center justify-center mb-5">
                  <Target className="w-6 h-6 text-plum" />
                </div>
                <h3 className="text-xl font-bold text-ink mb-3">
                  Salary Reality Check
                </h3>
                <p className="text-ink-secondary leading-relaxed mb-6">
                  Analiza tu compensación actual frente a datos del mercado y
                  descubre tu rango salarial óptimo.
                </p>
                <Link
                  href="/salary-input"
                  className="text-sm font-bold text-ink-muted group-hover:text-plum transition-colors inline-flex items-center gap-2"
                >
                  Comenzar
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Step 2 — Proyección */}
              <div className="group bg-surface-elevated border border-border rounded-2xl p-8 hover:border-border-strong hover:shadow-lg hover:shadow-plum/[0.04] transition-all duration-300 relative">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-bold text-valor uppercase tracking-widest">Paso 02</span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-valor-subtle flex items-center justify-center mb-5">
                  <TrendingUp className="w-6 h-6 text-valor" />
                </div>
                <h3 className="text-xl font-bold text-ink mb-3">
                  Impacto Financiero
                </h3>
                <p className="text-ink-secondary leading-relaxed mb-6">
                  Visualiza cómo la brecha salarial afecta tu futuro a largo
                  plazo a través de proyecciones a 10 años.
                </p>
                <a
                  href="#"
                  className="text-sm font-bold text-ink-muted group-hover:text-plum transition-colors inline-flex items-center gap-2"
                >
                  Próximamente
                </a>
              </div>

              {/* Step 3 — Práctica */}
              <div className="group bg-surface-elevated border border-border rounded-2xl p-8 hover:border-border-strong hover:shadow-lg hover:shadow-plum/[0.04] transition-all duration-300 relative">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-bold text-valor uppercase tracking-widest">Paso 03</span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-plum-light flex items-center justify-center mb-5">
                  <MessageCircle className="w-6 h-6 text-plum" />
                </div>
                <h3 className="text-xl font-bold text-ink mb-3">
                  Simulador con IA
                </h3>
                <p className="text-ink-secondary leading-relaxed mb-6">
                  Practica tu pitch de negociación en un entorno seguro con
                  feedback en tiempo real.
                </p>
                <a
                  href="#"
                  className="text-sm font-bold text-ink-muted group-hover:text-plum transition-colors inline-flex items-center gap-2"
                >
                  Próximamente
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section — plum solid, gold accent */}
        <section className="w-full py-24 px-6 md:px-12 lg:px-24 bg-plum-deep text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(200,134,10,0.1)_0%,_transparent_50%)]" />
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-5 tracking-tight">
              ¿Lista para ganar lo que mereces?
            </h2>
            <p className="text-lg text-white/60 mb-10 font-medium">
              Tu primera negociación informada empieza aquí.
            </p>
            <Link
              href="/salary-input"
              className="inline-flex items-center gap-3 bg-valor hover:bg-valor/90 text-white text-xl font-bold px-12 py-4 rounded-xl transition-colors"
            >
              Comenzar mi análisis gratuito
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
