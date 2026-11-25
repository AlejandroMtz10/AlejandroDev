import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ResumeButton } from "@/components/UI/BtnResume";
import { SkillsSection } from "@/components/AboutMe/SkillsSection";
import { ExperienceSection } from "@/components/AboutMe/ExperienceSection";

export default async function AboutMePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("AboutMe");

  return (
    <div className="space-y-8">
      {/* Section 1: Bio & Photo Card */}
      <section className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white px-6 py-8 shadow-xs dark:border-slate-800/80 dark:bg-[#070d12] sm:px-12 sm:py-12">
        {/* Subtle Ambient Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 right-1/4 h-80 w-80 rounded-full bg-[#0C82FF]/15 blur-3xl dark:bg-[#0C82FF]/20"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-20 left-10 h-72 w-72 rounded-full bg-[#035252]/10 blur-3xl dark:bg-[#035252]/30"
        />

        {/* Header */}
        <div className="relative z-10 mb-8 space-y-2">
          <p className="text-lg text-right font-semibold uppercase tracking-[0.3em] text-[#0C82FF]">
            {t("eyebrow")}
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {t("title")}
          </h1>
        </div>

        {/* Content Grid: Framed Photo Left + Bio Right */}
        <div className="relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Photo */}
          <div className="flex justify-center lg:col-span-4 lg:justify-start">
            <div className="relative aspect-square w-64 overflow-hidden rounded-2xl border-2 border-[#0C82FF]/40 bg-slate-100 shadow-lg shadow-[#0C82FF]/10 dark:bg-slate-900 sm:w-72 lg:w-full">
              <Image
                src="/images/profile.png"
                alt="Alejandro Martinez Rivera"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Narrative + CTA */}
          <div className="space-y-4 text-base leading-relaxed text-slate-600 dark:text-slate-300 lg:col-span-8">
            <p>{t("paragraph1")}</p>
            <p>{t("paragraph2")}</p>

            <div className="flex flex-col justify-between gap-4 pt-4 sm:flex-row sm:items-center">
              <p className="font-semibold text-slate-900 dark:text-white">
                {t("closing")}
              </p>

              <ResumeButton locale={locale} label={t("ctaResume")} className="animate-bounce" />
            </div>
          </div>
        </div>
      </section>
      <SkillsSection />
      <ExperienceSection />
      {/* Next sections (Technologies, Tools, Experience, Education, etc.) will go here */}
    </div>
  );
}