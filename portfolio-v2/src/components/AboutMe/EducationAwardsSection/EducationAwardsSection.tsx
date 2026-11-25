import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Icon } from "@iconify/react";
import { ImageLightboxModal } from "@/components/UI/ImageLightboxModal";
import { ContestsSubsection } from "@/components/AboutMe/ContestsSubsection";
import { PlatformsSubsection } from "@/components/AboutMe/PlatformsSubsection";
import { CertificatesSubsection } from "@/components/AboutMe/CertificatesSubsection";

const AWARDS = [
  { key: "award2021", image: "/images/awards/award-2021.jpeg" },
  { key: "award2022", image: "/images/awards/award-2022.jpeg" },
  { key: "award2023", image: "/images/awards/award-2023.jpeg" },
  { key: "award2024", image: "/images/awards/award-2024.jpeg" },
  { key: "degree2025", image: "/images/awards/degree.jpeg" },
] as const;

export async function EducationAwardsSection() {
  const t = await getTranslations("Education");

  return (
    <section className="rounded-2xl border border-slate-200/80 bg-white px-6 py-8 shadow-xs dark:border-slate-800/80 dark:bg-[#070d12] sm:px-10 sm:py-10">
      {/* Main Education Header & Summary */}
      <div className="mb-8 space-y-3 border-b border-slate-200/70 pb-8 dark:border-slate-800/70">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0C82FF]/10 text-[#0C82FF]">
            <Icon icon="lucide:graduation-cap" className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t("title")}
          </h2>
        </div>

        <p className="max-w-4xl text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
          {t("description")}
        </p>
      </div>

      {/* Subsection 1: Awards & Academic Recognitions */}
      <div className="space-y-5">
        <div className="flex items-center gap-2">
          <Icon icon="lucide:award" className="h-5 w-5 text-[#0C82FF]" />
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            {t("awardsTitle")}
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {AWARDS.map((award) => {
            const title = t(`awards.${award.key}.title`);
            const year = t(`awards.${award.key}.year`);

            return (
              <article
                key={award.key}
                className="group flex flex-col overflow-hidden rounded-xl border border-slate-200/80 bg-slate-50/60 transition-all duration-200 hover:-translate-y-1 hover:border-[#0C82FF]/50 hover:bg-white hover:shadow-md hover:shadow-[#0C82FF]/5 dark:border-slate-800/80 dark:bg-slate-900/40 dark:hover:border-[#0C82FF]/50 dark:hover:bg-slate-900/90"
              >
                {/* Photo Header */}
                <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                  <Image
                    src={award.image}
                    alt={title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <ImageLightboxModal
                    src={award.image}
                    alt={title}
                    caption={title}
                    subcaption={`TecNM Campus Ciudad Acuña • ${year}`}
                    viewLabel={t("viewImage")}
                    closeLabel={t("closeModal")}
                  />
                </div>

                {/* Card Body */}
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div className="space-y-2">
                    <h4 className="text-base font-bold text-slate-900 transition-colors group-hover:text-[#0C82FF] dark:text-white">
                      {title}
                    </h4>
                    <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400 sm:text-sm">
                      {t(`awards.${award.key}.description`)}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-slate-200/70 pt-3 dark:border-slate-800/70">
                    <span className="text-xs font-medium text-slate-400">
                      TecNM Campus Ciudad Acuña
                    </span>
                    <span className="text-xs font-bold text-[#0C82FF]">
                      {year}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
      <ContestsSubsection />
      <PlatformsSubsection />
      <CertificatesSubsection />
    </section>
  );
}