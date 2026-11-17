import Link from "next/link";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Icon } from "@iconify/react";

const CORE_STACK = [
  { name: "Laravel", icon: "devicon:laravel" },
  { name: "Spring Boot", icon: "devicon:spring" },
  { name: "React", icon: "devicon:react" },
  { name: "Next.js", icon: "simple-icons:nextdotjs" },
  { name: "PostgreSQL", icon: "devicon:postgresql" },
  { name: "MySQL", icon: "devicon:mysql" },
];

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Home");

  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white px-6 py-8 shadow-xs dark:border-slate-800/80 dark:bg-[#070d12] sm:px-12 sm:py-12">
      {/* Subtle Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 right-1/4 h-96 w-96 rounded-full bg-[#0C82FF]/15 blur-3xl dark:bg-[#0C82FF]/20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 right-0 h-80 w-80 rounded-full bg-[#035252]/15 blur-3xl dark:bg-[#035252]/35"
      />

      {/* Top Row: Eyebrow + Status Badge + Minimalist Terminal */}
      <div className="relative z-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-start">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
            {t("eyebrow")}
          </p>

          <div className="inline-flex items-center gap-2 rounded-full border border-[#0C82FF]/25 bg-[#0C82FF]/5 px-3 py-1 text-xs font-medium text-[#0C82FF]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0C82FF] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#0C82FF]" />
            </span>
            <span>{t("status")}</span>
          </div>
        </div>

        {/* Terminal Snippet */}
        <div className="hidden font-mono text-xs leading-relaxed text-slate-500 dark:text-slate-400 sm:block sm:text-right">
          <p>{t("terminalLine1")}</p>
          <p>{t("terminalLine2")}</p>
          <p>{t("terminalLine3")}</p>
          <p className="font-semibold text-[#0C82FF]">
            {t("terminalLine4")}
            <span className="animate-pulse">|</span>
          </p>
        </div>
      </div>

      {/* Center / Main Content Grid */}
      <div className="relative z-10 my-auto grid grid-cols-1 items-center gap-8 py-8 lg:grid-cols-12">
        {/* Left Typography & CTAs */}
        <div className="space-y-6 lg:col-span-7">
          <h1 className="text-5xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl lg:text-[4.25rem] lg:leading-[1.08]">
            <span className="block">{t("titleMain")}</span>
            <span className="mt-1 block text-slate-800 dark:text-slate-100">
              <span className="mr-2.5 font-normal text-[#0C82FF]">+</span>
              {t("titleAccent").replace(/^\+\s*/, "")}
            </span>
          </h1>

          <p className="max-w-lg text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
            {t("descriptionPrefix")}{" "}
            <span className="font-semibold text-[#0C82FF]">
              {t("descriptionHighlight")}
            </span>{" "}
            {t("descriptionSuffix")}
          </p>

          {/* Primary Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href={`/${locale}/projects`}
              className="group inline-flex items-center gap-2 rounded-lg bg-[#0C82FF] px-5 py-2.5 text-sm font-medium text-white shadow-sm shadow-[#0C82FF]/25 transition-all hover:bg-[#0C82FF]/90"
            >
              <span>{t("ctaProjects")}</span>
              <Icon
                icon="lucide:arrow-up-right"
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white/60 px-4 py-2.5 text-sm font-medium text-slate-700 backdrop-blur-xs transition-colors hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              <Icon icon="lucide:mail" className="h-4 w-4 text-[#0C82FF]" />
              <span>{t("ctaContact")}</span>
            </Link>

            <a
              href={locale === "es" ? "/cv-es.pdf" : "/cv-en.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/60 dark:hover:text-white"
            >
              <Icon icon="lucide:file-text" className="h-4 w-4 text-[#0C82FF]" />
              <span>{t("ctaResume")}</span>
            </a>
          </div>
        </div>

        {/* Right Portrait Area */}
        <div className="relative flex justify-center lg:col-span-5 lg:justify-end">
          <div className="relative h-72 w-72 sm:h-80 sm:w-80 lg:h-92 lg:w-92">
            {/* Subtle Halo */}
            <div className="absolute inset-6 rounded-full bg-linear-to-tr from-[#0C82FF]/25 via-transparent to-[#035252]/30 blur-2xl" />

            <Image
              src="/images/profile.png"
              alt="Alejandro Martinez"
              fill
              priority
              className="object-contain object-bottom mask-[linear-gradient(to_bottom,black_82%,transparent_100%)]"
            />
          </div>
        </div>
      </div>

      {/* Bottom Bar: Social Links + Core Stack Strip */}
      <div className="relative z-10 flex flex-col justify-between gap-5 border-t border-slate-200/70 pt-6 dark:border-slate-800/70 md:flex-row md:items-center">
        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/AlejandroMartinezRivera"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-[#0C82FF] dark:text-slate-400 dark:hover:text-[#0C82FF]"
          >
            <Icon icon="simple-icons:github" className="h-4 w-4" />
            <span>@AlejandroMtz10</span>
          </a>

          <span className="text-slate-300 dark:text-slate-700">•</span>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-[#0C82FF] dark:text-slate-400 dark:hover:text-[#0C82FF]"
          >
            <Icon icon="simple-icons:linkedin" className="h-4 w-4" />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Minimalist Tech Stack Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {CORE_STACK.map((tech) => (
            <span
              key={tech.name}
              title={tech.name}
              className="inline-flex items-center gap-1.5 rounded-md border border-slate-200/80 bg-slate-50/80 px-2.5 py-1 text-xs font-medium text-slate-600 transition-colors hover:border-[#0C82FF]/40 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-400 dark:hover:text-white"
            >
              <Icon icon={tech.icon} className="h-3.5 w-3.5" />
              <span>{tech.name}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}