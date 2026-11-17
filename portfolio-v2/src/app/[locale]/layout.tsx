import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Toaster } from "sonner";
import { Sidebar } from "@/components/UI/Sidebar";
import { Providers } from "@/components/UI/Providers";
import { routing } from "@/i18n/routing";
import "@/app/[locale]/globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased dark:bg-slate-900 dark:text-slate-100">
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <Sidebar />
            <main className="lg:pl-64">
              <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
                {children}
              </div>
            </main>
            <Toaster position="bottom-right" richColors />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}