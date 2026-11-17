"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import { toast } from "sonner";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("Controls");

  const toggleLanguage = () => {
    const nextLocale = locale === "en" ? "es" : "en";
    const segments = pathname.split("/");
    segments[1] = nextLocale;
    const newPath = segments.join("/") || `/${nextLocale}/home`;

    router.push(newPath);
    toast.info(
      nextLocale === "en"
        ? "Language switched to English"
        : "Idioma cambiado a Español"
    );
  };

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
    >
      <span className="flex items-center gap-3">
        <Icon icon="lucide:languages" className="h-4 w-4 text-[#0C82FF]" />
        <span>{locale === "en" ? "English" : "Español"}</span>
      </span>
      <span className="rounded bg-[#0C82FF]/10 px-2 py-0.5 text-xs font-semibold uppercase text-[#0C82FF]">
        {locale === "en" ? "EN → ES" : "ES → EN"}
      </span>
    </button>
  );
}