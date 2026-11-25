"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface ExperienceNode {
  key: "4ll" | "caterpillar" | "toter";
  logo: string;
  align: "right" | "left";
}

const EXPERIENCE_NODES: ExperienceNode[] = [
  {
    key: "4ll",
    logo: "/images/experience/4ll_code_soft.jpg",
    align: "right",
  },
  {
    key: "caterpillar",
    logo: "/images/experience/caterpillar.svg",
    align: "left",
  },
  {
    key: "toter",
    logo: "/images/experience/toter.svg",
    align: "right",
  },
];

function TimelineItem({
  node,
  role,
  company,
  period,
  summary,
}: {
  node: ExperienceNode;
  role: string;
  company: string;
  period: string;
  summary: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Triggers both on scroll down and scroll up (enter & exit)
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
        rootMargin: "-40px 0px -40px 0px",
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const isContentRight = node.align === "right";

  return (
    <div
      ref={ref}
      className={`relative grid grid-cols-1 items-center gap-6 md:grid-cols-[1fr_auto_1fr] md:gap-8 transition-all duration-700 ease-out ${
        isVisible
          ? "translate-y-0 opacity-100 scale-100"
          : "translate-y-8 opacity-0 scale-95"
      }`}
    >
      {/* Left Side (Desktop) */}
      <div
        className={`hidden md:flex ${
          isContentRight ? "justify-end text-right" : "justify-end text-right"
        }`}
      >
        {isContentRight ? (
          <span className="inline-block rounded-full border border-slate-200/80 bg-slate-50 px-3.5 py-1 text-xs font-medium text-slate-600 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-400">
            {period}
          </span>
        ) : (
          <div className="max-w-md rounded-xl border border-slate-200/80 bg-slate-50/70 p-5 shadow-2xs transition-colors hover:border-[#0C82FF]/40 dark:border-slate-800/80 dark:bg-slate-900/50">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              {role}
            </h3>
            <p className="text-sm font-medium text-[#0C82FF]">{company}</p>
            <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
              {summary}
            </p>
          </div>
        )}
      </div>

      {/* Center Node (Logo Circle) */}
      <div className="relative z-10 flex items-center gap-4 md:justify-center">
        <div
          className={`relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-[#0C82FF] bg-white p-1.5 shadow-md shadow-[#0C82FF]/15 transition-transform duration-500 ${
            isVisible ? "scale-100" : "scale-75"
          }`}
        >
          <Image
            src={node.logo}
            alt={company}
            width={46}
            height={46}
            className="h-full w-full object-contain"
          />
        </div>

        {/* Mobile Period Badge */}
        <span className="inline-block rounded-full border border-slate-200/80 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-400 md:hidden">
          {period}
        </span>
      </div>

      {/* Right Side (Desktop) + Main Card (Mobile) */}
      <div className="flex justify-start">
        {isContentRight ? (
          <div className="w-full max-w-md rounded-xl border border-slate-200/80 bg-slate-50/70 p-5 shadow-2xs transition-colors hover:border-[#0C82FF]/40 dark:border-slate-800/80 dark:bg-slate-900/50">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              {role}
            </h3>
            <p className="text-sm font-medium text-[#0C82FF]">{company}</p>
            <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
              {summary}
            </p>
          </div>
        ) : (
          <>
            {/* Desktop Period Pill on the Right */}
            <span className="hidden rounded-full border border-slate-200/80 bg-slate-50 px-3.5 py-1 text-xs font-medium text-slate-600 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-400 md:inline-block">
              {period}
            </span>

            {/* Mobile Card */}
            <div className="w-full rounded-xl border border-slate-200/80 bg-slate-50/70 p-5 shadow-2xs dark:border-slate-800/80 dark:bg-slate-900/50 md:hidden">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {role}
              </h3>
              <p className="text-sm font-medium text-[#0C82FF]">{company}</p>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                {summary}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export function ExperienceSection() {
  const t = useTranslations("Experience");

  return (
    <section className="rounded-2xl border border-slate-200/80 bg-white px-6 py-8 shadow-xs dark:border-slate-800/80 dark:bg-[#070d12] sm:px-10 sm:py-10">
      {/* Header & Improved Description */}
      <div className="mb-10 space-y-3">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          {t("title")}
        </h2>
        <p className="max-w-3xl text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
          {t("description")}
        </p>
      </div>

      {/* Vertical Timeline Container */}
      <div className="relative py-4">
        {/* Vertical Axis Line */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-7 top-0 w-0.5 -translate-x-1/2 bg-linear-to-b from-transparent via-[#0C82FF]/50 to-transparent md:left-1/2"
        />

        <div className="space-y-10">
          {EXPERIENCE_NODES.map((node) => (
            <TimelineItem
              key={node.key}
              node={node}
              role={t(`items.${node.key}.role`)}
              company={t(`items.${node.key}.company`)}
              period={t(`items.${node.key}.period`)}
              summary={t(`items.${node.key}.summary`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}