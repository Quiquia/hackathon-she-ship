"use client";

import { type FormEvent } from "react";
import { useRouter } from "next/navigation";
import {
  Briefcase,
  GraduationCap,
  Code,
  Award,
  DollarSign,
  MapPin,
  ArrowRight,
  LockKeyhole,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const selectStyles =
  "w-full h-14 px-4 bg-parchment border border-border-strong rounded-xl focus:border-plum focus:ring-4 focus:ring-plum/10 transition-all outline-none text-base text-ink appearance-none";

const inputStyles =
  "w-full h-14 px-4 bg-parchment border border-border-strong rounded-xl focus:border-plum focus:ring-4 focus:ring-plum/10 transition-all outline-none text-base text-ink";

const textareaStyles =
  "w-full p-4 bg-parchment border border-border-strong rounded-xl focus:border-plum focus:ring-4 focus:ring-plum/10 transition-all outline-none text-base text-ink resize-none";

const labelStyles = "text-sm font-semibold text-ink-secondary pl-0.5 block";

const sectionTitleStyles =
  "text-lg font-bold text-ink flex items-center gap-2.5 border-b border-border pb-3";

export default function SalaryInputPage() {
  const router = useRouter();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push("/reality-check");
  }

  return (
    <div className="min-h-screen bg-parchment font-sans text-ink flex flex-col">
      <Header />

      <main className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex-1">
        <div className="flex flex-col items-center justify-center py-10 md:py-16 max-w-3xl mx-auto w-full">
          <div className="w-full bg-surface-elevated border border-border rounded-2xl p-6 md:p-10 shadow-lg shadow-plum/[0.04] relative overflow-hidden">
            {/* Subtle top accent */}
            <div className="absolute top-0 inset-x-0 h-1 bg-plum" />

            {/* Header */}
            <div className="text-center mb-10 mt-2">
              <div className="w-14 h-14 bg-plum rounded-xl flex items-center justify-center mx-auto mb-6 text-white shadow-sm">
                <Briefcase className="w-7 h-7" />
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-ink mb-3 tracking-tight">
                Cuéntanos sobre tu perfil
              </h1>
              <p className="text-lg text-ink-muted font-medium">
                Mientras más información compartas, más preciso será tu análisis
                salarial.
              </p>
            </div>

            <form className="space-y-10" onSubmit={handleSubmit}>
              {/* Educación */}
              <div className="space-y-5">
                <h2 className={sectionTitleStyles}>
                  <GraduationCap className="w-5 h-5 text-plum" />
                  Educación
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="educationLevel" className={labelStyles}>
                      Nivel educativo actual
                    </label>
                    <select
                      id="educationLevel"
                      name="educationLevel"
                      className={selectStyles}
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Selecciona una opción
                      </option>
                      <option value="Estudiante universitaria">
                        Estudiante universitaria
                      </option>
                      <option value="Egresada">Egresada</option>
                      <option value="Titulada">Titulada</option>
                      <option value="Posgrado">Posgrado</option>
                    </select>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label htmlFor="career" className={labelStyles}>
                      Carrera o especialidad
                    </label>
                    <input
                      id="career"
                      name="career"
                      className={inputStyles}
                      placeholder="Ej. Ingeniería de Software, Diseño Gráfico"
                    />
                  </div>
                </div>
              </div>

              {/* Experiencia profesional */}
              <div className="space-y-5">
                <h2 className={sectionTitleStyles}>
                  <Briefcase className="w-5 h-5 text-plum" />
                  Experiencia profesional
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="yearsExperience" className={labelStyles}>
                      Años de experiencia laboral
                    </label>
                    <select
                      id="yearsExperience"
                      name="yearsExperience"
                      className={selectStyles}
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Selecciona una opción
                      </option>
                      <option value="Sin experiencia formal">
                        Sin experiencia formal
                      </option>
                      <option value="Menos de 1 año">Menos de 1 año</option>
                      <option value="1-3 años">1–3 años</option>
                      <option value="3-5 años">3–5 años</option>
                      <option value="5+ años">5+ años</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="experienceType" className={labelStyles}>
                      Tipo de experiencia
                    </label>
                    <select
                      id="experienceType"
                      name="experienceType"
                      className={selectStyles}
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Selecciona una opción
                      </option>
                      <option value="Experiencia formal">
                        Experiencia formal
                      </option>
                      <option value="Prácticas profesionales">
                        Prácticas profesionales
                      </option>
                      <option value="Trabajo freelance">
                        Trabajo freelance
                      </option>
                      <option value="Voluntariado">Voluntariado</option>
                      <option value="Experiencia informal">
                        Experiencia informal
                      </option>
                    </select>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label htmlFor="experienceArea" className={labelStyles}>
                      Área de experiencia
                    </label>
                    <input
                      id="experienceArea"
                      name="experienceArea"
                      className={inputStyles}
                      placeholder="Ej. Diseño UX, Marketing, Finanzas"
                    />
                  </div>
                </div>
              </div>

              {/* Tus habilidades */}
              <div className="space-y-5">
                <h2 className={sectionTitleStyles}>
                  <Code className="w-5 h-5 text-plum" />
                  Tus habilidades
                </h2>
                <div className="grid grid-cols-1 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="techSkills" className={labelStyles}>
                      Habilidades técnicas
                    </label>
                    <textarea
                      id="techSkills"
                      name="techSkills"
                      className={textareaStyles}
                      rows={2}
                      placeholder="Ej. Figma, Excel, programación, análisis de datos"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="softSkills" className={labelStyles}>
                      Habilidades blandas
                    </label>
                    <textarea
                      id="softSkills"
                      name="softSkills"
                      className={textareaStyles}
                      rows={2}
                      placeholder="Ej. Comunicación, liderazgo, trabajo en equipo"
                    />
                  </div>
                </div>
              </div>

              {/* Logros recientes */}
              <div className="space-y-5">
                <h2 className={sectionTitleStyles}>
                  <Award className="w-5 h-5 text-plum" />
                  Logros recientes
                </h2>
                <div className="space-y-2">
                  <label
                    htmlFor="recentAchievements"
                    className={labelStyles}
                  >
                    Logros o proyectos destacados
                  </label>
                  <textarea
                    id="recentAchievements"
                    name="recentAchievements"
                    className={textareaStyles}
                    rows={3}
                    placeholder="Ej. Lideré un proyecto, lancé un producto, mejoré un proceso..."
                  />
                </div>
              </div>

              {/* Situación salarial actual */}
              <div className="space-y-5">
                <h2 className={sectionTitleStyles}>
                  <DollarSign className="w-5 h-5 text-plum" />
                  Situación salarial actual
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="currentSalary" className={labelStyles}>
                      Salario actual (mensual)
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <DollarSign className="h-5 w-5 text-ink-muted" />
                      </div>
                      <input
                        type="number"
                        id="currentSalary"
                        name="currentSalary"
                        className={`${inputStyles} pl-12`}
                        placeholder="Ej. 6000"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="location" className={labelStyles}>
                      Ciudad o país
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <MapPin className="h-5 w-5 text-ink-muted" />
                      </div>
                      <input
                        id="location"
                        name="location"
                        className={`${inputStyles} pl-12`}
                        placeholder="Ej. Lima, Perú"
                      />
                    </div>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label htmlFor="jobType" className={labelStyles}>
                      Tipo de trabajo
                    </label>
                    <select
                      id="jobType"
                      name="jobType"
                      className={selectStyles}
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Selecciona una opción
                      </option>
                      <option value="Tiempo completo">Tiempo completo</option>
                      <option value="Medio tiempo">Medio tiempo</option>
                      <option value="Freelance">Freelance</option>
                      <option value="Prácticas">Prácticas</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full h-14 rounded-xl bg-plum text-white font-bold text-lg flex items-center justify-center gap-3 hover:bg-plum-deep hover:shadow-lg hover:shadow-plum/20 transition-all cursor-pointer"
                >
                  Generar mi análisis salarial
                  <ArrowRight className="w-5 h-5" />
                </button>
                <div className="flex items-center justify-center gap-2 text-sm text-ink-muted mt-5 py-2">
                  <LockKeyhole className="w-4 h-4" />
                  <span className="font-medium">
                    Tu información se usa únicamente para generar
                    recomendaciones personalizadas.
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
