import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Icon } from "@iconify/react";
import { ImageLightboxModal } from "@/components/UI/ImageLightboxModal";

const CERTIFICATES = [
  {
    key: "architecture",
    picture: "/images/certificates/SoftwareArchitecture.webp",
  },
  {
    key: "github",
    picture: "/images/certificates/GitHub-CodigoFacilito.webp",
  },
  {
    key: "php",
    picture: "/images/certificates/PHP-SoloLearn.webp",
  },
  {
    key: "webdev",
    picture: "/images/certificates/Web-Development-Fundamentals-SoloLearn.webp",
  },
  {
    key: "sql",
    picture: "/images/certificates/SQL-SoloLearn.webp",
  },
] as const;

export async function CertificatesSubsection() {
  const t = await getTranslations("Education");

  return (
    <div className="mt-10 space-y-5 border-t border-slate-200/70 pt-8 dark:border-slate-800/70">
      {/* Header */}
      <div className="space-y-1.5">
        <div className="flex items-center gap-2">
          <Icon icon="lucide:badge-check" className="h-5 w-5 text-[#0C82FF]" />
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            {t("certificates.title")}
          </h3>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          {t("certificates.subtitle")}
        </p>
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {CERTIFICATES.map((cert) => {
          const course = t(`certificates.items.${cert.key}.course`);
          const platform = t(`certificates.items.${cert.key}.platform`);

          return (
            <article
              key={cert.key}
              tabIndex={0}
              className="group relative aspect-16/11 w-full overflow-hidden rounded-xl border border-slate-200/80 bg-slate-100 shadow-2xs transition-colors hover:border-[#0C82FF]/60 focus:outline-hidden focus:ring-2 focus:ring-[#0C82FF] dark:border-slate-800/80 dark:bg-slate-900"
            >
              {/* Certificate Preview Image */}
              <Image
                src={cert.picture}
                alt={`${course} - ${platform}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover / Focus Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-slate-950/80 p-5 text-center opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-white sm:text-lg">
                    {course}
                  </h4>
                  <p className="text-xs font-medium text-slate-300">
                    {platform}
                  </p>
                </div>

                <ImageLightboxModal
                  src={cert.picture}
                  alt={`${course} — ${platform}`}
                  caption={course}
                  subcaption={platform}
                  viewLabel={t("certificates.viewCertificate")}
                  closeLabel={t("closeModal")}
                  triggerVariant="button"
                  icon="lucide:eye"
                />
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}