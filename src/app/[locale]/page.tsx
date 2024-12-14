import LandingHero from "@/components/landing/LandingHero";
import { getTranslations, setRequestLocale } from "next-intl/server";

type HomeProps = Readonly<{
    params: Promise<{
        locale: string;
    }>;
}>;

export async function generateMetadata({ params }: HomeProps) {
    const { locale } = await params;

    const t = await getTranslations({ locale, namespace: "metadata" });

    return {
        title: t("title"),
    };
}

export default async function Home({ params }: HomeProps) {
    const { locale } = await params;

    // Enable static rendering
    setRequestLocale(locale);

    return <LandingHero />;
}
