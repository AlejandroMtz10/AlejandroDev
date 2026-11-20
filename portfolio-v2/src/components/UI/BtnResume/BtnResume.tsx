import { Icon } from "@iconify/react";

interface ResumeButtonProps {
  locale: string;
  label: string;
  className?: string;
}

export function ResumeButton({
  locale,
  label,
  className = "",
}: ResumeButtonProps) {
  const href =
    locale === "es"
      ? "/docs/AlejandroMartinezRivera-CV.pdf"
      : "/docs/AlejandroMartinezRivera-Resume.pdf";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-2 rounded-lg bg-[#0C82FF] px-5 py-2.5 text-sm font-medium text-white shadow-sm shadow-[#0C82FF]/25 transition-all hover:-translate-y-0.5 hover:bg-[#0C82FF]/90 ${className}`}
    >
      <Icon icon="lucide:file-text" className="h-4 w-4" />
      <span>{label}</span>
    </a>
  );
}