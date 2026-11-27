"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import emailjs from "@emailjs/browser";
import { Icon } from "@iconify/react";
import { toast } from "sonner";

export function ContactForm() {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("Contact");

  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      toast.warning(t("toasts.invalidEmail"));
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    const receiverEmail =
      process.env.NEXT_PUBLIC_RECEIVER_EMAIL || "alex10mtz_rivera@outlook.com";

    if (!serviceId || !templateId || !publicKey) {
      toast.error(t("toasts.missingConfig"));
      return;
    }

    setIsLoading(true);

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: receiverEmail,
        },
        { publicKey }
      );

      toast.success(t("toasts.success"), {
        description: t("toasts.successDesc"),
      });

      setFormData({
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error(t("toasts.error"));
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    setFormData({
      email: "",
      subject: "",
      message: "",
    });
    toast.info(t("toasts.canceled"));
    router.push(`/${locale}/home`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Email */}
      <div className="space-y-1.5">
        <label
          htmlFor="email"
          className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300"
        >
          {t("form.emailLabel")}
        </label>
        <div className="relative">
          <Icon
            icon="lucide:at-sign"
            className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder={t("form.emailPlaceholder")}
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-slate-200 bg-slate-50/70 py-2.5 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:border-[#0C82FF] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#0C82FF]/20 dark:border-slate-800 dark:bg-slate-900/60 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-[#0C82FF] dark:focus:bg-slate-900"
          />
        </div>
      </div>

      {/* Subject */}
      <div className="space-y-1.5">
        <label
          htmlFor="subject"
          className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300"
        >
          {t("form.subjectLabel")}
        </label>
        <div className="relative">
          <Icon
            icon="lucide:tag"
            className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
          />
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder={t("form.subjectPlaceholder")}
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-slate-200 bg-slate-50/70 py-2.5 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:border-[#0C82FF] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#0C82FF]/20 dark:border-slate-800 dark:bg-slate-900/60 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-[#0C82FF] dark:focus:bg-slate-900"
          />
        </div>
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <label
          htmlFor="message"
          className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300"
        >
          {t("form.messageLabel")}
        </label>
        <textarea
          id="message"
          name="message"
          placeholder={t("form.messagePlaceholder")}
          value={formData.message}
          onChange={handleChange}
          rows={5}
          required
          className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50/70 p-3.5 text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:border-[#0C82FF] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#0C82FF]/20 dark:border-slate-800 dark:bg-slate-900/60 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-[#0C82FF] dark:focus:bg-slate-900"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
        <button
          type="button"
          onClick={handleCancel}
          disabled={isLoading}
          className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:border-red-300 hover:bg-red-50 hover:text-red-600 disabled:opacity-50 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:border-red-500/40 dark:hover:bg-red-950/30 dark:hover:text-red-400"
        >
          <Icon icon="lucide:x" className="h-4 w-4" />
          <span>{t("form.cancelButton")}</span>
        </button>

        <button
          type="submit"
          disabled={isLoading}
          className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-[#0C82FF] px-5 py-2.5 text-sm font-medium text-white shadow-sm shadow-[#0C82FF]/25 transition-all hover:bg-[#0C82FF]/90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Icon
            icon={isLoading ? "lucide:loader-2" : "lucide:send"}
            className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`}
          />
          <span>
            {isLoading ? t("form.sendingButton") : t("form.submitButton")}
          </span>
        </button>
      </div>
    </form>
  );
}