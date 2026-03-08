"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Briefcase,
  Code,
  DollarSign,
  MapPin,
  ArrowRight,
  LockKeyhole,
  Loader2,
  Globe,
  Building2,
  TrendingUp,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { submitSalaryProfile } from "./actions";

const selectStyles =
  "w-full h-14 px-4 bg-parchment border border-border-strong rounded-xl focus:border-plum focus:ring-4 focus:ring-plum/10 transition-all outline-none text-base text-ink appearance-none";

const inputStyles =
  "w-full h-14 px-4 bg-parchment border border-border-strong rounded-xl focus:border-plum focus:ring-4 focus:ring-plum/10 transition-all outline-none text-base text-ink";

const textareaStyles =
  "w-full p-4 bg-parchment border border-border-strong rounded-xl focus:border-plum focus:ring-4 focus:ring-plum/10 transition-all outline-none text-base text-ink resize-none";

const labelStyles = "text-sm font-semibold text-ink-secondary pl-0.5 block";

const sectionTitleStyles =
  "text-lg font-bold text-ink flex items-center gap-2.5 border-b border-border pb-3";

const checkboxLabelStyles =
  "flex items-center gap-3 cursor-pointer text-sm text-ink-secondary font-medium";

export default function SalaryInputPage() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const result = await submitSalaryProfile(formData);

    if (!result.success) {
      setError(result.error ?? "Error al enviar. Intenta de nuevo.");
      setSubmitting(false);
      return;
    }

    router.push(`/reality-check?id=${result.id}`);
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
              {/* Rol y experiencia */}
              <div className="space-y-5">
                <h2 className={sectionTitleStyles}>
                  <Briefcase className="w-5 h-5 text-plum" />
                  Rol y experiencia
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="roleArea" className={labelStyles}>
                      Área del rol
                    </label>
                    <select
                      id="roleArea"
                      name="roleArea"
                      className={selectStyles}
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Selecciona una opción
                      </option>
                      <option value="Frontend">Frontend</option>
                      <option value="Backend">Backend</option>
                      <option value="Fullstack">Fullstack</option>
                      <option value="Mobile">Mobile</option>
                      <option value="Data">Data / Analytics</option>
                      <option value="DevOps">DevOps / SRE</option>
                      <option value="QA">QA / Testing</option>
                      <option value="Design">Diseño UX/UI</option>
                      <option value="Product">Producto</option>
                      <option value="Other">Otro</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="seniority" className={labelStyles}>
                      Nivel de seniority
                    </label>
                    <select
                      id="seniority"
                      name="seniority"
                      className={selectStyles}
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Selecciona una opción
                      </option>
                      <option value="Trainee">Trainee</option>
                      <option value="Junior">Junior</option>
                      <option value="Semi-Senior">Semi-Senior</option>
                      <option value="Senior">Senior</option>
                      <option value="Lead">Lead</option>
                      <option value="Manager">Manager</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="frontendYearsExperience"
                      className={labelStyles}
                    >
                      Años de experiencia
                    </label>
                    <select
                      id="frontendYearsExperience"
                      name="frontendYearsExperience"
                      className={selectStyles}
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Selecciona una opción
                      </option>
                      <option value="Sin experiencia">Sin experiencia</option>
                      <option value="Menos de 1 año">Menos de 1 año</option>
                      <option value="1-2 años">1–2 años</option>
                      <option value="3-5 años">3–5 años</option>
                      <option value="5-10 años">5–10 años</option>
                      <option value="10+ años">10+ años</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="mainTechnology" className={labelStyles}>
                      Tecnología principal
                    </label>
                    <input
                      id="mainTechnology"
                      name="mainTechnology"
                      className={inputStyles}
                      placeholder="Ej. React, Python, Figma"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label htmlFor="roleDescription" className={labelStyles}>
                      Descripción del rol actual
                    </label>
                    <textarea
                      id="roleDescription"
                      name="roleDescription"
                      className={textareaStyles}
                      rows={3}
                      placeholder="Describe brevemente lo que haces en tu rol actual"
                    />
                  </div>
                </div>
              </div>

              {/* Habilidades e idiomas */}
              <div className="space-y-5">
                <h2 className={sectionTitleStyles}>
                  <Code className="w-5 h-5 text-plum" />
                  Habilidades e idiomas
                </h2>
                <div className="grid grid-cols-1 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="technicalSkills" className={labelStyles}>
                      Habilidades técnicas
                    </label>
                    <textarea
                      id="technicalSkills"
                      name="technicalSkills"
                      className={textareaStyles}
                      rows={2}
                      placeholder="Ej. React, TypeScript, Node.js, SQL, Figma"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="englishLevel" className={labelStyles}>
                        Nivel de inglés
                      </label>
                      <select
                        id="englishLevel"
                        name="englishLevel"
                        className={selectStyles}
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Selecciona una opción
                        </option>
                        <option value="Básico">Básico</option>
                        <option value="Intermedio">Intermedio</option>
                        <option value="Avanzado">Avanzado</option>
                        <option value="Nativo/Bilingüe">Nativo / Bilingüe</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="usesEnglishCurrentJob"
                        className={labelStyles}
                      >
                        ¿Usas inglés en tu trabajo actual?
                      </label>
                      <select
                        id="usesEnglishCurrentJob"
                        name="usesEnglishCurrentJob"
                        className={selectStyles}
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Selecciona una opción
                        </option>
                        <option value="Sí, diariamente">Sí, diariamente</option>
                        <option value="Sí, ocasionalmente">
                          Sí, ocasionalmente
                        </option>
                        <option value="No">No</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ubicación y modalidad */}
              <div className="space-y-5">
                <h2 className={sectionTitleStyles}>
                  <MapPin className="w-5 h-5 text-plum" />
                  Ubicación y modalidad
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="country" className={labelStyles}>
                      País
                    </label>
                    <input
                      id="country"
                      name="country"
                      className={inputStyles}
                      placeholder="Ej. México"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="city" className={labelStyles}>
                      Ciudad
                    </label>
                    <input
                      id="city"
                      name="city"
                      className={inputStyles}
                      placeholder="Ej. Ciudad de México"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="workMode" className={labelStyles}>
                      Modalidad de trabajo
                    </label>
                    <select
                      id="workMode"
                      name="workMode"
                      className={selectStyles}
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Selecciona una opción
                      </option>
                      <option value="Presencial">Presencial</option>
                      <option value="Remoto">Remoto</option>
                      <option value="Híbrido">Híbrido</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Empresa */}
              <div className="space-y-5">
                <h2 className={sectionTitleStyles}>
                  <Building2 className="w-5 h-5 text-plum" />
                  Empresa
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="companyType" className={labelStyles}>
                      Tipo de empresa
                    </label>
                    <select
                      id="companyType"
                      name="companyType"
                      className={selectStyles}
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Selecciona una opción
                      </option>
                      <option value="Startup">Startup</option>
                      <option value="Pyme">Pyme</option>
                      <option value="Corporativo">Corporativo</option>
                      <option value="Agencia/Consultora">
                        Agencia / Consultora
                      </option>
                      <option value="Freelance">Freelance</option>
                      <option value="Gobierno">Gobierno</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="companyScope" className={labelStyles}>
                      Alcance de la empresa
                    </label>
                    <select
                      id="companyScope"
                      name="companyScope"
                      className={selectStyles}
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Selecciona una opción
                      </option>
                      <option value="Local">Local</option>
                      <option value="Nacional">Nacional</option>
                      <option value="Multinacional">Multinacional</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="employmentType" className={labelStyles}>
                      Tipo de empleo
                    </label>
                    <select
                      id="employmentType"
                      name="employmentType"
                      className={selectStyles}
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Selecciona una opción
                      </option>
                      <option value="Tiempo completo">Tiempo completo</option>
                      <option value="Medio tiempo">Medio tiempo</option>
                      <option value="Freelance">Freelance</option>
                      <option value="Contrato temporal">
                        Contrato temporal
                      </option>
                      <option value="Prácticas">Prácticas</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="workSchedule" className={labelStyles}>
                      Jornada laboral
                    </label>
                    <select
                      id="workSchedule"
                      name="workSchedule"
                      className={selectStyles}
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Selecciona una opción
                      </option>
                      <option value="Tiempo completo (40h+)">
                        Tiempo completo (40h+)
                      </option>
                      <option value="Medio tiempo (20-30h)">
                        Medio tiempo (20–30h)
                      </option>
                      <option value="Por horas">Por horas</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Situación salarial */}
              <div className="space-y-5">
                <h2 className={sectionTitleStyles}>
                  <DollarSign className="w-5 h-5 text-plum" />
                  Situación salarial
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label
                      htmlFor="monthlySalaryAmount"
                      className={labelStyles}
                    >
                      Salario mensual
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <DollarSign className="h-5 w-5 text-ink-muted" />
                      </div>
                      <input
                        type="number"
                        id="monthlySalaryAmount"
                        name="monthlySalaryAmount"
                        className={`${inputStyles} pl-12`}
                        placeholder="Ej. 25000"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="salaryCurrency" className={labelStyles}>
                      Moneda
                    </label>
                    <select
                      id="salaryCurrency"
                      name="salaryCurrency"
                      className={selectStyles}
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Selecciona una opción
                      </option>
                      <option value="MXN">MXN — Peso mexicano</option>
                      <option value="USD">USD — Dólar estadounidense</option>
                      <option value="COP">COP — Peso colombiano</option>
                      <option value="ARS">ARS — Peso argentino</option>
                      <option value="CLP">CLP — Peso chileno</option>
                      <option value="PEN">PEN — Sol peruano</option>
                      <option value="EUR">EUR — Euro</option>
                      <option value="BRL">BRL — Real brasileño</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="salaryType" className={labelStyles}>
                      Tipo de salario
                    </label>
                    <select
                      id="salaryType"
                      name="salaryType"
                      className={selectStyles}
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Selecciona una opción
                      </option>
                      <option value="Bruto">Bruto</option>
                      <option value="Neto">Neto</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastRaisePeriod" className={labelStyles}>
                      ¿Cuándo fue tu último aumento?
                    </label>
                    <select
                      id="lastRaisePeriod"
                      name="lastRaisePeriod"
                      className={selectStyles}
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Selecciona una opción
                      </option>
                      <option value="Menos de 6 meses">
                        Menos de 6 meses
                      </option>
                      <option value="6-12 meses">6–12 meses</option>
                      <option value="1-2 años">1–2 años</option>
                      <option value="Más de 2 años">Más de 2 años</option>
                      <option value="Nunca he recibido aumento">
                        Nunca he recibido aumento
                      </option>
                    </select>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className={checkboxLabelStyles}>
                      <input
                        type="checkbox"
                        name="hasVariableCompensation"
                        className="w-5 h-5 rounded border-border-strong text-plum focus:ring-plum/20"
                      />
                      Tengo compensación variable (bonos, comisiones, etc.)
                    </label>
                  </div>
                </div>
              </div>

              {/* Negociación */}
              <div className="space-y-5">
                <h2 className={sectionTitleStyles}>
                  <TrendingUp className="w-5 h-5 text-plum" />
                  Negociación salarial
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label
                      htmlFor="negotiationConfidence"
                      className={labelStyles}
                    >
                      ¿Qué tan segura te sientes negociando tu salario?
                    </label>
                    <select
                      id="negotiationConfidence"
                      name="negotiationConfidence"
                      className={selectStyles}
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Selecciona una opción
                      </option>
                      <option value="Nada segura">Nada segura</option>
                      <option value="Poco segura">Poco segura</option>
                      <option value="Algo segura">Algo segura</option>
                      <option value="Muy segura">Muy segura</option>
                    </select>
                  </div>
                  <div className="space-y-2 flex items-end">
                    <label className={checkboxLabelStyles}>
                      <input
                        type="checkbox"
                        name="wantsSalaryNegotiationPractice"
                        className="w-5 h-5 rounded border-border-strong text-plum focus:ring-plum/20"
                      />
                      Quiero practicar negociación salarial
                    </label>
                  </div>
                </div>
              </div>

              {/* Términos y submit */}
              <div className="pt-6 space-y-6">
                <label className={checkboxLabelStyles}>
                  <input
                    type="checkbox"
                    name="acceptedTerms"
                    required
                    className="w-5 h-5 rounded border-border-strong text-plum focus:ring-plum/20"
                  />
                  Acepto que mi información se use de forma anónima para generar
                  análisis salariales
                </label>

                {error && (
                  <div className="p-4 bg-gap/10 border border-gap/20 rounded-xl text-gap text-sm font-medium">
                    {error}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full h-14 rounded-xl bg-plum text-white font-bold text-lg flex items-center justify-center gap-3 hover:bg-plum-deep hover:shadow-lg hover:shadow-plum/20 transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Generar mi análisis salarial
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
                <div className="flex items-center justify-center gap-2 text-sm text-ink-muted py-2">
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
