"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import { toast } from "sonner";

export function LanguageSwitcher({ collapsed = false }: { collapsed?: boolean }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

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
      title={collapsed ? (locale === "en" ? "Switch to Español" : "Cambiar a English") : undefined}
      className={`flex w-full cursor-pointer items-center rounded-lg py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 ${
        collapsed ? "justify-center px-0" : "justify-between px-3"
      }`}
    >
      {collapsed ? (
        <span className="rounded bg-[#0C82FF]/10 px-1.5 py-0.5 text-xs font-bold uppercase text-[#0C82FF]">
          {locale}
        </span>
      ) : (
        <>
          <span className="flex items-center gap-3">
            <Icon icon="lucide:languages" className="h-4 w-4 shrink-0 text-[#0C82FF]" />
            <span>{locale === "en" ? "English" : "Español"}</span>
          </span>
          <span className="rounded bg-[#0C82FF]/10 px-2 py-0.5 text-xs font-semibold uppercase text-[#0C82FF]">
            {locale === "en" ? "EN → ES" : "ES → EN"}
          </span>
        </>
      )}
    </button>
  );
}