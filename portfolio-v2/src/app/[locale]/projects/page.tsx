import { getTranslations, setRequestLocale } from "next-intl/server";
import { Icon } from "@iconify/react";
import { ProjectsGrid } from "@/components/Projects/ProjectsGrid";

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Projects");

  return (
    <section className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white px-6 py-8 shadow-xs dark:border-slate-800/80 dark:bg-[#070d12] sm:px-10 sm:py-10">
      {/* Subtle Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-1/4 h-80 w-80 rounded-full bg-[#0C82FF]/15 blur-3xl dark:bg-[#0C82FF]/20"
      />

      {/* Page Header */}
      <div className="relative z-10 mb-8 space-y-2 border-b border-slate-200/70 pb-6 dark:border-slate-800/70">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0C82FF]">
          {t("eyebrow")}
        </p>
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0C82FF]/10 text-[#0C82FF]">
            <Icon icon="lucide:folder-git-2" className="h-5 w-5" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {t("title")}
          </h1>
        </div>
        <p className="max-w-3xl text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
          {t("subtitle")}
        </p>
      </div>

      {/* Unified Chronological Projects Grid */}
      <div className="relative z-10">
        <ProjectsGrid />
      </div>
    </section>
  );
}