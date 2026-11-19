"use client";

import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { useTheme } from "@/components/UI/Providers";

export function ThemeToggle({ collapsed = false }: { collapsed?: boolean }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const t = useTranslations("Controls");

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="h-9 w-full animate-pulse rounded-lg bg-slate-200/50 dark:bg-slate-800/50" />
    );
  }

  const isDark = resolvedTheme === "dark";
  const label = isDark ? t("themeLight") : t("themeDark");

  const handleToggle = () => {
    const nextTheme = isDark ? "light" : "dark";
    setTheme(nextTheme);
    toast.success(t("themeChanged"));
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      title={collapsed ? label : undefined}
      aria-label={label}
      className={`flex w-full cursor-pointer items-center rounded-lg py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 ${
        collapsed ? "justify-center px-0" : "gap-3 px-3"
      }`}
    >
      <Icon
        icon={isDark ? "lucide:sun" : "lucide:moon"}
        className="h-4 w-4 shrink-0 text-[#0C82FF]"
      />
      {!collapsed && <span className="truncate">{label}</span>}
    </button>
  );
}