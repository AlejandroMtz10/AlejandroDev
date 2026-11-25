import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Icon } from "@iconify/react";
import { ImageLightboxModal } from "@/components/UI/ImageLightboxModal";

const CONTESTS = [
  {
    key: "icpc",
    picture: "/images/contests/icpc-contest.jpeg",
    certificate:
      "/images/certificates/2023-ICPC_TxState_Texas-Mexico_TheNoddlesTeam.webp",
  },
  {
    key: "sanpedro",
    picture: "/images/contests/8its-sanpedro-contest.jpeg",
    certificate: "/images/certificates/8its_san_pedro_contest.webp",
  },
  {
    key: "itsa",
    picture: "/images/contests/3er-itsa-contest.jpeg",
    certificate: "/images/certificates/tacuaches_coding.webp",
  },
] as const;

export async function ContestsSubsection() {
  const t = await getTranslations("Education");

  return (
    <div className="mt-10 space-y-5 border-t border-slate-200/70 pt-8 dark:border-slate-800/70">
      {/* Header & Description with GitHub Repo Link */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Icon icon="lucide:trophy" className="h-5 w-5 text-[#0C82FF]" />
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            {t("contests.title")}
          </h3>
        </div>

        <p className="max-w-4xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {t("contests.descriptionPrefix")}{" "}
          <a
            href="https://github.com/AlejandroMtz10/Competitive-programming"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-[#0C82FF] underline decoration-[#0C82FF]/40 underline-offset-4 transition-colors hover:text-[#0C82FF]/80"
          >
            <span>{t("contests.repoLinkText")}</span>
            <Icon icon="lucide:arrow-up-right" className="h-3.5 w-3.5" />
          </a>
          .
        </p>
      </div>

      {/* Contests Cards Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {CONTESTS.map((item) => {
          const title = t(`contests.items.${item.key}.title`);
          const place = t(`contests.items.${item.key}.place`);
          const technologies = t(`contests.items.${item.key}.technologies`);
          const team = t(`contests.items.${item.key}.team`);
          const type = t(`contests.items.${item.key}.type`);
          const date = t(`contests.items.${item.key}.date`);

          return (
            <article
              key={item.key}
              className="group flex flex-col overflow-hidden rounded-xl border border-slate-200/80 bg-slate-50/60 transition-all duration-200 hover:border-[#0C82FF]/50 hover:bg-white hover:shadow-md hover:shadow-[#0C82FF]/5 dark:border-slate-800/80 dark:bg-slate-900/40 dark:hover:border-[#0C82FF]/50 dark:hover:bg-slate-900/90"
            >
              {/* Photo Header with Modal Trigger */}
              <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                <Image
                  src={item.picture}
                  alt={title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <ImageLightboxModal
                  src={item.picture}
                  alt={title}
                  caption={title}
                  subcaption={`${place} • ${date}`}
                  viewLabel={t("viewImage")}
                  closeLabel={t("closeModal")}
                />
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col justify-between p-5">
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-base font-bold text-slate-900 transition-colors group-hover:text-[#0C82FF] dark:text-white">
                      {title}
                    </h4>
                    <span className="shrink-0 rounded-full border border-[#0C82FF]/25 bg-[#0C82FF]/10 px-2.5 py-0.5 text-[11px] font-semibold text-[#0C82FF]">
                      {type}
                    </span>
                  </div>

                  {/* Metadata Details */}
                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                    <li className="flex items-start gap-2">
                      <Icon
                        icon="lucide:map-pin"
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0C82FF]"
                      />
                      <span>
                        <strong className="font-medium text-slate-700 dark:text-slate-300">
                          {t("contests.labels.place")}:
                        </strong>{" "}
                        {place}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon
                        icon="lucide:users"
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0C82FF]"
                      />
                      <span>
                        <strong className="font-medium text-slate-700 dark:text-slate-300">
                          {t("contests.labels.team")}:
                        </strong>{" "}
                        {team}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon
                        icon="lucide:code-2"
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0C82FF]"
                      />
                      <span>
                        <strong className="font-medium text-slate-700 dark:text-slate-300">
                          {t("contests.labels.technologies")}:
                        </strong>{" "}
                        {technologies}
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Footer: Date + View Certificate Modal Button */}
                <div className="mt-5 space-y-3 border-t border-slate-200/70 pt-3.5 dark:border-slate-800/70">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 dark:text-slate-400">
                      {t("contests.labels.date")}
                    </span>
                    <span className="font-medium text-slate-700 dark:text-slate-300">
                      {date}
                    </span>
                  </div>

                  <ImageLightboxModal
                    src={item.certificate}
                    alt={`${title} - ${t("contests.labels.viewCertificate")}`}
                    caption={`${title} — ${team}`}
                    subcaption={`${type} • ${date}`}
                    viewLabel={t("contests.labels.viewCertificate")}
                    closeLabel={t("closeModal")}
                    triggerVariant="button"
                    icon="lucide:file-badge"
                  />
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}