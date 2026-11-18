"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";
import { toast } from "sonner";

interface CopyEmailButtonProps {
  email?: string;
}

export function CopyEmailButton({
  email = "alex10mtz_rivera@outlook.com",
}: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);
  const t = useTranslations("Home");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      toast.success(t("emailCopied"), {
        description: email,
      });

      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Could not copy email");
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-slate-300 bg-white/60 px-4 py-2.5 text-sm font-medium text-slate-700 backdrop-blur-xs transition-colors hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:bg-slate-800"
    >
      <Icon
        icon={copied ? "lucide:check" : "lucide:copy"}
        className={`h-4 w-4 transition-colors ${
          copied ? "text-emerald-500" : "text-[#0C82FF]"
        }`}
      />
      <span>{copied ? t("emailCopied") : t("copyEmail")}</span>
    </button>
  );
}