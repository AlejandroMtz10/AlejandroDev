"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Icon } from "@iconify/react";
import { ThemeToggle } from "@/components/UI/ThemeToggle";
import { LanguageSwitcher } from "@/components/UI/LanguageSwitcher";

export function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("Navigation");

  const navItems = [
    { key: "home", href: `/${locale}/home`, icon: "lucide:home" },
    { key: "about", href: `/${locale}/about-me`, icon: "lucide:user" },
    { key: "projects", href: `/${locale}/projects`, icon: "lucide:folder-git-2" },
    { key: "contact", href: `/${locale}/contact`, icon: "lucide:mail" },
  ] as const;

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  const sidebarContent = (
    <div className="flex h-full flex-col justify-between border-r border-slate-200 bg-white px-4 py-6 dark:border-slate-800 dark:bg-slate-950">
      <div>
        <div className="mb-8 flex items-center justify-between px-2">
          <Link
            href={`/${locale}/home`}
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-slate-900 dark:text-white"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0C82FF] text-white shadow-sm">
              <Icon icon="lucide:terminal" className="h-5 w-5" />
            </div>
            <span>aledev</span>
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 lg:hidden"
            aria-label="Close menu"
          >
            <Icon icon="lucide:x" className="h-5 w-5" />
          </button>
        </div>

        <nav className="space-y-1.5" aria-label="Main Navigation">
          {navItems.map(({ key, href, icon }) => {
            const active = isActive(href);
            return (
              <Link
                key={key}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all ${
                  active
                    ? "bg-[#0C82FF] text-white shadow-sm shadow-[#0C82FF]/25"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-white"
                }`}
              >
                <Icon
                  icon={icon}
                  className={`h-4 w-4 ${
                    active ? "text-white" : "text-slate-400 dark:text-slate-500"
                  }`}
                />
                <span>{t(key)}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="space-y-1.5 border-t border-slate-200 pt-4 dark:border-slate-800">
        <ThemeToggle />
        <LanguageSwitcher />
      </div>
    </div>
  );

  return (
    <>
      <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white/80 px-4 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80 lg:hidden">
        <Link
          href={`/${locale}/home`}
          className="flex items-center gap-2 text-base font-bold text-slate-900 dark:text-white"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0C82FF] text-white">
            <Icon icon="lucide:terminal" className="h-4 w-4" />
          </div>
          <span>aledev</span>
        </Link>

        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
          aria-label="Open menu"
        >
          <Icon icon="lucide:menu" className="h-6 w-6" />
        </button>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden" role="dialog" aria-modal="true">
          <div
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileOpen(false)}
          />
          <aside className="fixed inset-y-0 left-0 z-50 w-72 max-w-[80vw]">
            {sidebarContent}
          </aside>
        </div>
      )}

      <aside className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-30 lg:block lg:w-64">
        {sidebarContent}
      </aside>
    </>
  );
}