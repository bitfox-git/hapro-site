import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Theme } from "@radix-ui/themes";

import "@radix-ui/themes/styles.css";
import "../globals.css";
import Navigation from "@/components/Navigation";

import { Geologica } from "next/font/google";

const geologica = Geologica({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

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

    // Ensure that the incoming `locale` is valid
    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    // Enable static rendering
    setRequestLocale(locale);

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    return (
        <html lang={locale} className={geologica.className}>
            <body>
                <NextIntlClientProvider messages={messages}>
                    <Theme>
                        <Navigation />
                        {children}
                    </Theme>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
