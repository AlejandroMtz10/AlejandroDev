import { getTranslations, setRequestLocale } from "next-intl/server";
import { Icon } from "@iconify/react";
import { ContactForm } from "@/components/Contact/ContactForm";
import { CopyEmailButton } from "@/components/UI/CopyEmailButton";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Contact");

  return (
    <section className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white px-6 py-8 shadow-xs dark:border-slate-800/80 dark:bg-[#070d12] sm:px-10 sm:py-10">
      {/* Subtle Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-1/4 h-80 w-80 rounded-full bg-[#0C82FF]/15 blur-3xl dark:bg-[#0C82FF]/20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 left-10 h-72 w-72 rounded-full bg-[#035252]/10 blur-3xl dark:bg-[#035252]/30"
      />

      {/* Page Header */}
      <div className="relative z-10 mb-8 space-y-2 border-b border-slate-200/70 pb-6 dark:border-slate-800/70">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0C82FF]">
          {t("eyebrow")}
        </p>
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0C82FF]/10 text-[#0C82FF]">
            <Icon icon="lucide:mail" className="h-5 w-5" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {t("title")}
          </h1>
        </div>
        <p className="max-w-3xl text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
          {t("subtitle")}
        </p>
      </div>

      {/* Main Content Grid: Direct Channels + Contact Form */}
      <div className="relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Left Column: Direct Contact Info */}
        <aside className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-slate-50/70 p-6 dark:border-slate-800/80 dark:bg-slate-900/40 lg:col-span-5">
          <div className="space-y-6">
            <div className="space-y-1.5">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                {t("directTitle")}
              </h2>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400 sm:text-sm">
                {t("directSubtitle")}
              </p>
            </div>

            <div className="space-y-4">
              {/* Email Item */}
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#0C82FF]/10 text-[#0C82FF]">
                  <Icon icon="lucide:mail" className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    Email
                  </p>
                  <a
                    href="mailto:alex10mtz_rivera@outlook.com"
                    className="block truncate text-sm font-semibold text-slate-900 transition-colors hover:text-[#0C82FF] dark:text-white"
                  >
                    alex10mtz_rivera@outlook.com
                  </a>
                </div>
              </div>

              {/* Location Item */}
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#0C82FF]/10 text-[#0C82FF]">
                  <Icon icon="lucide:map-pin" className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    {t("locationLabel")}
                  </p>
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                    {t("locationValue")}
                  </p>
                </div>
              </div>

              {/* Availability Item */}
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#0C82FF]/10 text-[#0C82FF]">
                  <Icon icon="lucide:briefcase" className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    {t("availabilityLabel")}
                  </p>
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                    {t("availabilityValue")}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-1">
              <CopyEmailButton email="alex10mtz_rivera@outlook.com" />
            </div>
          </div>

          {/* Social Links Footer */}
          <div className="mt-8 flex items-center gap-3 border-t border-slate-200/70 pt-5 dark:border-slate-800/70">
            <a
              href="https://github.com/AlejandroMtz10"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200/80 bg-white px-3.5 py-2 text-xs font-medium text-slate-700 transition-colors hover:border-[#0C82FF]/50 hover:text-[#0C82FF] dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
            >
              <Icon icon="simple-icons:github" className="h-4 w-4" />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/alejandro-martínez-rivera-a35541248"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200/80 bg-white px-3.5 py-2 text-xs font-medium text-slate-700 transition-colors hover:border-[#0C82FF]/50 hover:text-[#0C82FF] dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
            >
              <Icon icon="simple-icons:linkedin" className="h-4 w-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </aside>

        {/* Right Column: EmailJS Form */}
        <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-2xs dark:border-slate-800/80 dark:bg-slate-900/30 lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}