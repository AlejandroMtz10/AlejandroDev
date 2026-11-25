import { getTranslations } from "next-intl/server";
import { Icon } from "@iconify/react";

const PLATFORMS = [
  {
    key: "beecrowd",
    url: "https://judge.beecrowd.com/es/profile/802361",
    handle: "@802361",
    headerBg: "bg-gradient-to-br from-[#F3E8FF] via-[#FAF5FF] to-[#EDE9FE] dark:from-[#2E1065]/60 dark:via-[#1E1B4B]/60 dark:to-[#0F172A]",
    accentText: "text-[#7E22CE] dark:text-[#C084FC]",
    buttonClass:
      "bg-[#7E22CE] hover:bg-[#6B21A8] shadow-[#7E22CE]/20 text-white",
    borderHover: "hover:border-[#9333EA]/50",
    icon: "lucide:hexagon",
  },
  {
    key: "leetcode",
    url: "https://leetcode.com/u/alejandromtz10/",
    handle: "@alejandromtz10",
    headerBg: "bg-gradient-to-br from-slate-900 via-neutral-900 to-zinc-950",
    accentText: "text-[#FFA116]",
    buttonClass:
      "bg-[#FFA116] hover:bg-[#E58E0D] shadow-[#FFA116]/20 text-slate-950 font-semibold",
    borderHover: "hover:border-[#FFA116]/50",
    icon: "simple-icons:leetcode",
  },
] as const;

export async function PlatformsSubsection() {
  const t = await getTranslations("Education");

  return (
    <div className="mt-10 space-y-5 border-t border-slate-200/70 pt-8 dark:border-slate-800/70">
      {/* Header */}
      <div className="space-y-1.5">
        <div className="flex items-center gap-2">
          <Icon icon="lucide:terminal-square" className="h-5 w-5 text-[#0C82FF]" />
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            {t("platforms.title")}
          </h3>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          {t("platforms.subtitle")}
        </p>
      </div>

      {/* Platforms Grid */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {PLATFORMS.map((platform) => {
          const name = t(`platforms.items.${platform.key}.name`);
          const description = t(`platforms.items.${platform.key}.description`);

          return (
            <article
              key={platform.key}
              className={`group flex flex-col overflow-hidden rounded-xl border border-slate-200/80 bg-slate-50/60 transition-all duration-200 hover:bg-white hover:shadow-md dark:border-slate-800/80 dark:bg-slate-900/40 dark:hover:bg-slate-900/90 ${platform.borderHover}`}
            >
              {/* Brand Banner Header (No modal) */}
              <div
                className={`relative flex h-40 w-full flex-col items-center justify-center gap-2 px-6 ${platform.headerBg}`}
              >
                <Icon
                  icon={platform.icon}
                  className={`h-12 w-12 transition-transform duration-300 group-hover:scale-110 ${platform.accentText}`}
                />
                <span
                  className={`text-lg font-bold tracking-tight ${
                    platform.key === "leetcode"
                      ? "text-white"
                      : "text-[#581C87] dark:text-white"
                  }`}
                >
                  {name}
                </span>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col justify-between p-5">
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      {name}
                    </h4>
                    <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                      {platform.handle}
                    </span>
                  </div>

                  <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400 sm:text-sm">
                    {description}
                  </p>
                </div>

                {/* External Profile Link Button */}
                <div className="mt-5 flex justify-end border-t border-slate-200/70 pt-3.5 dark:border-slate-800/70">
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-medium shadow-xs transition-all ${platform.buttonClass}`}
                  >
                    <span>{t("platforms.visitProfile")}</span>
                    <Icon icon="lucide:external-link" className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}