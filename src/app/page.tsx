import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="relative w-full flex flex-col">
        {/* Hero Section */}
        <section className="relative w-full pt-20 pb-28 px-6 md:px-12 lg:px-24 overflow-hidden bg-gradient-to-br from-primary via-purple-700 to-accent">
          <div className="max-w-[1248px] mx-auto flex flex-col lg:flex-row items-center gap-12">
            {/* Left content */}
            <div className="flex-1 flex flex-col gap-8 text-white">
              <span className="inline-flex items-center gap-2 bg-white/20 rounded-full px-5 py-2.5 text-sm font-bold w-fit backdrop-blur-sm">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
                Plataforma de Empoderamiento Financiero
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight">
                Descubre si tu salario refleja realmente tu valor profesional.
              </h1>

              <p className="text-lg md:text-xl font-medium text-white/90 max-w-xl">
                Salary Sister AI analiza tu salario, identifica brechas respecto
                al mercado y te ayuda a negociar con confianza para alcanzar la
                igualdad salarial.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link
                  href="/salary-input"
                  className="bg-accent hover:bg-accent/90 text-white text-lg font-extrabold px-10 py-4 rounded-2xl transition-colors"
                >
                  Analizar mi salario
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
                    className="rounded-full border-2 border-white object-cover"
                  />
                  <Image
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop"
                    alt="Usuario"
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-white object-cover"
                  />
                  <Image
                    src="https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?w=100&h=100&fit=crop"
                    alt="Usuario"
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-white object-cover"
                  />
                </div>
                <p className="text-sm font-medium text-white/80">
                  Únete a miles de mujeres cerrando la brecha salarial
                </p>
              </div>
            </div>

            {/* Right content */}
            <div className="flex-1 relative hidden lg:block">
              <Image
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80"
                alt="Mujer profesional moderna negociando con confianza"
                width={630}
                height={674}
                className="rounded-3xl object-cover w-full max-w-[630px]"
                priority
              />
              {/* Stat card */}
              <div className="absolute bottom-8 left-4 right-4 bg-white/10 backdrop-blur-md rounded-2xl p-6 flex items-center gap-4">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-accent shrink-0"
                >
                  <path
                    d="M23 6L13.5 15.5L8.5 10.5L1 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17 6H23V12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div>
                  <p className="text-sm font-medium text-white/80">
                    Incremento salarial promedio
                  </p>
                  <p className="text-2xl font-bold text-white">
                    +24% tras negociar
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section
          id="herramientas"
          className="w-full py-20 px-6 md:px-12 lg:px-24 bg-white relative z-20 -mt-10 rounded-t-[3rem]"
        >
          <div className="max-w-[1248px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6">
                Herramientas diseñadas para tu éxito
              </h2>
              <p className="text-lg md:text-xl text-muted">
                Datos claros y práctica inmersiva para tomar el control de tu
                carrera y cerrar la brecha.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="group border border-violet-200 rounded-3xl p-10 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-primary"
                  >
                    <path
                      d="M22 12H18L15 21L9 3L6 12H2"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Salary Reality Check
                </h3>
                <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                  Analiza tu compensación actual frente a datos del mercado y
                  descubre tu rango salarial óptimo.
                </p>
                <Link
                  href="/salary-input"
                  className="text-lg font-bold text-foreground group-hover:text-primary transition-colors inline-flex items-center gap-2"
                >
                  Explorar
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Card 2 */}
              <div className="group border border-violet-200 rounded-3xl p-10 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-accent"
                  >
                    <path
                      d="M12 1V23M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Impacto Financiero
                </h3>
                <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                  Visualiza cómo la brecha salarial afecta tu futuro a largo
                  plazo a través de proyecciones a 10 años.
                </p>
                <a
                  href="#"
                  className="text-lg font-bold text-foreground group-hover:text-primary transition-colors inline-flex items-center gap-2"
                >
                  Explorar
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              {/* Card 3 */}
              <div className="group border border-violet-200 rounded-3xl p-10 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center mb-6">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-primary"
                  >
                    <path
                      d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Simulador con IA
                </h3>
                <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                  Practica tu pitch de negociación en un entorno seguro con
                  feedback en tiempo real y sugerencias de mejora.
                </p>
                <a
                  href="#"
                  className="text-lg font-bold text-foreground group-hover:text-primary transition-colors inline-flex items-center gap-2"
                >
                  Explorar
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-primary to-accent text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-10">
              ¿Lista para ganar lo que mereces?
            </h2>
            <Link
              href="/salary-input"
              className="inline-block bg-white text-primary text-xl font-extrabold px-12 py-4 rounded-2xl hover:bg-white/90 transition-colors"
            >
              Comenzar mi análisis gratuito
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
