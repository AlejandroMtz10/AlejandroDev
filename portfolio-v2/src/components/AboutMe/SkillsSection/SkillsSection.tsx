import { getTranslations } from "next-intl/server";
import { Icon } from "@iconify/react";
import { TECHNOLOGIES, TOOLS } from "@/data/skills";

export async function SkillsSection() {
  const t = await getTranslations("Skills");

  return (
    <div className="space-y-8">
      {/* Technologies Section */}
      <section className="rounded-2xl border border-slate-200/80 bg-white px-6 py-8 shadow-xs dark:border-slate-800/80 dark:bg-[#070d12] sm:px-10 sm:py-10">
        <div className="mb-6 space-y-1">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t("techTitle")}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {t("techSubtitle")}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
          {TECHNOLOGIES.map((tech) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center justify-center gap-3 rounded-xl border border-slate-200/80 bg-slate-50/60 p-4 text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0C82FF]/50 hover:bg-white hover:shadow-md hover:shadow-[#0C82FF]/5 dark:border-slate-800/80 dark:bg-slate-900/40 dark:hover:border-[#0C82FF]/50 dark:hover:bg-slate-900/90"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white shadow-2xs transition-transform duration-200 group-hover:scale-110 dark:bg-slate-800/80">
                <Icon
                  icon={tech.icon}
                  className={`h-6 w-6 ${tech.colorClass ?? ""}`}
                />
              </div>
              <span className="text-sm font-medium text-slate-700 transition-colors group-hover:text-slate-900 dark:text-slate-300 dark:group-hover:text-white">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Tools & Platforms Section */}
      <section className="rounded-2xl border border-slate-200/80 bg-white px-6 py-8 shadow-xs dark:border-slate-800/80 dark:bg-[#070d12] sm:px-10 sm:py-10">
        <div className="mb-6 space-y-1">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t("toolsTitle")}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {t("toolsSubtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {TOOLS.map((tool) => (
            <div
              key={tool.key}
              className="group flex flex-col gap-3 rounded-xl border border-slate-200/80 bg-slate-50/60 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0C82FF]/50 hover:bg-white hover:shadow-md hover:shadow-[#0C82FF]/5 dark:border-slate-800/80 dark:bg-slate-900/40 dark:hover:border-[#0C82FF]/50 dark:hover:bg-slate-900/90"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200/70 bg-white shadow-2xs transition-transform duration-200 group-hover:scale-105 dark:border-slate-700/70 dark:bg-slate-800/90">
                  <Icon
                    icon={tool.icon}
                    className={`h-5 w-5 ${tool.colorClass ?? ""}`}
                  />
                </div>
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                  {tool.name}
                </h3>
              </div>

              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                {t(`tools.${tool.key}`)}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}