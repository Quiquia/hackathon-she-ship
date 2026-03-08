import Link from "next/link";
import { ChartColumn, Zap, ShieldCheck, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RealityCheckPage() {
  return (
    <div className="min-h-screen bg-[#F5F3FF] font-sans text-foreground selection:bg-primary selection:text-white flex flex-col">
      <Header />

      <main className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex-1">
        <div className="flex flex-col items-center min-h-[80vh] py-12 px-4 sm:px-6 max-w-5xl mx-auto w-full">
          {/* Hero banner */}
          <div className="text-center mb-12 w-full bg-gradient-to-br from-[#6B21A8] via-primary to-blue-500 p-10 sm:p-14 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/30 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-400/30 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-white/30 relative z-10">
              <ChartColumn className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 relative z-10">
              Tu Salary Reality Check
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed relative z-10 font-medium">
              Descubre dónde te encuentras realmente en el mercado y cuánto
              valor estás dejando en la mesa.
            </p>
          </div>

          {/* Salary cards */}
          <div className="grid md:grid-cols-3 gap-6 w-full mb-12">
            {/* Current salary */}
            <div className="bg-white border-2 border-violet-200 p-8 rounded-[2rem] shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center relative overflow-hidden">
              <div className="w-full h-2 bg-gradient-to-r from-gray-200 to-gray-300 absolute top-0 left-0" />
              <p className="text-muted font-bold uppercase tracking-wider text-sm mb-3">
                Tu salario actual
              </p>
              <p className="text-4xl font-extrabold text-foreground">
                S/5,500
              </p>
            </div>

            {/* Estimated market salary */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-[2rem] shadow-xl shadow-blue-500/20 flex flex-col items-center text-center text-white relative overflow-hidden transform md:-translate-y-4">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />
              <p className="text-blue-100 font-bold uppercase tracking-wider text-sm mb-3 relative z-10 flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-300" />
                Salario promedio estimado
              </p>
              <p className="text-5xl font-extrabold text-white relative z-10">
                S/7,799
              </p>
              <div className="mt-4 px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/20">
                Tu objetivo ideal
              </div>
            </div>

            {/* Salary gap */}
            <div className="bg-gradient-to-br from-accent to-[#E11D48] border-2 border-transparent p-8 rounded-[2rem] shadow-lg shadow-rose-500/20 flex flex-col items-center text-center text-white relative overflow-hidden">
              <div className="w-full h-2 bg-white/20 absolute top-0 left-0" />
              <p className="text-rose-100 font-bold uppercase tracking-wider text-sm mb-3">
                Brecha salarial
              </p>
              <p className="text-5xl font-extrabold text-white">29%</p>
              <p className="mt-4 text-rose-100 text-sm font-medium">
                Por debajo del mercado
              </p>
            </div>
          </div>

          {/* CTA banner */}
          <div className="w-full bg-gradient-to-r from-[#EDE9FE] to-[#E0E7FF] border border-white/50 rounded-3xl p-8 md:p-10 mb-12 shadow-md flex flex-col md:flex-row items-center gap-8 justify-between">
            <div className="flex items-center gap-6 text-left">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                <ShieldCheck className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#1E1B4B] mb-2">
                  El conocimiento es poder
                </h3>
                <p className="text-[#4338CA] text-lg">
                  Ahora tienes información respaldada por datos. Estás lista
                  para el siguiente paso.
                </p>
              </div>
            </div>
            <Link
              href="/salary-impact"
              className="shrink-0 h-16 px-8 rounded-full bg-primary text-white font-extrabold text-lg flex items-center justify-center gap-3 shadow-xl shadow-primary/30 hover:scale-105 transition-all"
            >
              Ver mi impacto a 10 años
              <ChevronRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
