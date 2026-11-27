"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Icon } from "@iconify/react";
import { PROJECTS, type ProjectCategory } from "@/data/projects";
import { ImageLightboxModal } from "@/components/UI/ImageLightboxModal";

type FilterOption = "all" | ProjectCategory;

export function ProjectsGrid() {
  const [filter, setFilter] = useState<FilterOption>("all");
  const t = useTranslations("Projects");

  const sortedProjects = [...PROJECTS]
    .sort((a, b) => b.sortDate.localeCompare(a.sortDate))
    .filter((project) => (filter === "all" ? true : project.category === filter));

  const filterButtons: { key: FilterOption; icon: string }[] = [
    { key: "all", icon: "lucide:layers" },
    { key: "web", icon: "lucide:globe" },
    { key: "desktop", icon: "lucide:monitor" },
    { key: "lowcode", icon: "lucide:workflow" },
  ];

  return (
    <div className="space-y-6">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2">
        {filterButtons.map(({ key, icon }) => {
          const active = filter === key;
          return (
            <button
              key={key}
              type="button"
              onClick={() => setFilter(key)}
              className={`inline-flex cursor-pointer items-center gap-2 rounded-lg border px-3.5 py-2 text-xs font-medium transition-all ${
                active
                  ? "border-[#0C82FF] bg-[#0C82FF] text-white shadow-xs shadow-[#0C82FF]/25"
                  : "border-slate-200/80 bg-slate-50/80 text-slate-600 hover:border-[#0C82FF]/40 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-400 dark:hover:text-white"
              }`}
            >
              <Icon icon={icon} className="h-3.5 w-3.5" />
              <span>{t(`filters.${key}`)}</span>
            </button>
          );
        })}
      </div>

      {/* Unified Chronological Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {sortedProjects.map((project) => {
          const title = t(`items.${project.key}.title`);
          const platform = t(`items.${project.key}.platform`);
          const context = t(`items.${project.key}.context`);
          const date = t(`items.${project.key}.date`);
          const description = t(`items.${project.key}.description`);

          return (
            <article
              key={project.key}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-50/60 transition-colors duration-200 hover:border-[#0C82FF]/50 hover:bg-white hover:shadow-md hover:shadow-[#0C82FF]/5 dark:border-slate-800/80 dark:bg-slate-900/40 dark:hover:border-[#0C82FF]/50 dark:hover:bg-slate-900/90"
            >
              {/* Screenshot Header with Lightbox Modal */}
              <div className="relative aspect-16/10 w-full overflow-hidden border-b border-slate-200/70 bg-slate-200 dark:border-slate-800/70 dark:bg-slate-800">
                <Image
                  src={project.picture}
                  alt={title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <ImageLightboxModal
                  src={project.picture}
                  alt={title}
                  caption={title}
                  subcaption={`${context} • ${platform} (${date})`}
                  viewLabel={t("viewImage")}
                  closeLabel={t("closeModal")}
                />
              </div>

              {/* Project Body */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div className="space-y-3">
                  {/* Title + Date */}
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h2 className="text-lg font-bold text-slate-900 transition-colors group-hover:text-[#0C82FF] dark:text-white">
                        {title}
                      </h2>
                      <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                        <span className="inline-flex items-center gap-1 font-medium text-[#0C82FF]">
                          <Icon icon="lucide:building-2" className="h-3.5 w-3.5" />
                          {context}
                        </span>
                        <span>•</span>
                        <span>{platform}</span>
                      </div>
                    </div>

                    <span className="shrink-0 rounded-full border border-slate-200/80 bg-white px-2.5 py-0.5 text-[11px] font-medium text-slate-600 dark:border-slate-700/80 dark:bg-slate-800/80 dark:text-slate-300">
                      {date}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300 sm:text-sm">
                    {description}
                  </p>
                </div>

                {/* Tech Stack + GitHub / Private Status Footer */}
                <div className="mt-5 space-y-4 border-t border-slate-200/70 pt-4 dark:border-slate-800/70">
                  {/* Stack Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech.name}
                        className="inline-flex items-center gap-1.5 rounded-md border border-slate-200/80 bg-white px-2 py-1 text-[11px] font-medium text-slate-700 dark:border-slate-700/80 dark:bg-slate-800/70 dark:text-slate-300"
                      >
                        <Icon
                          icon={tech.icon}
                          className={`h-3.5 w-3.5 ${tech.colorClass ?? ""}`}
                        />
                        <span>{tech.name}</span>
                      </span>
                    ))}
                  </div>

                  {/* Repository Action */}
                  <div className="flex items-center justify-end">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-[#0C82FF] px-3.5 py-2 text-xs font-medium text-white shadow-xs shadow-[#0C82FF]/20 transition-colors hover:bg-[#0C82FF]/90"
                      >
                        <Icon icon="simple-icons:github" className="h-3.5 w-3.5" />
                        <span>{t("viewCode")}</span>
                        <Icon icon="lucide:arrow-up-right" className="h-3.5 w-3.5" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200/80 bg-slate-100/80 px-3 py-1.5 text-xs font-medium text-slate-500 dark:border-slate-800 dark:bg-slate-800/50 dark:text-slate-400">
                        <Icon icon="lucide:lock" className="h-3.5 w-3.5" />
                        <span>{t("privateRepo")}</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}