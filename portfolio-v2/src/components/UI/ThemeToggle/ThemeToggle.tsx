"use client";

import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { useTheme } from "../Providers/providers";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const t = useTranslations("Controls");

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-9 w-full animate-pulse rounded-lg bg-slate-200/50 dark:bg-slate-800/50" />;
  }

  const isDark = resolvedTheme === "dark";

  const handleToggle = () => {
    const nextTheme = isDark ? "light" : "dark";
    setTheme(nextTheme);
    toast.success(t("themeChanged"));
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
      aria-label={isDark ? t("themeLight") : t("themeDark")}
    >
      <Icon
        icon={isDark ? "lucide:sun" : "lucide:moon"}
        className="h-4 w-4 text-[#0C82FF]"
      />
      <span>{isDark ? t("themeLight") : t("themeDark")}</span>
    </button>
  );
}