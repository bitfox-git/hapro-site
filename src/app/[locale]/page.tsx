import LandingHero from "@/components/landing/LandingHero";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

type HomeProps = Readonly<{
    params: {
        locale: string;
    };
}>;

export async function generateMetadata({ params: { locale } }: HomeProps) {
    const t = await getTranslations({ locale, namespace: "metadata" });

    return {
        title: t("title"),
    };
}

export default function Home({ params: { locale } }: HomeProps) {
    // Enable static rendering
    setRequestLocale(locale);

    const t = useTranslations("home_page");

    return <LandingHero />;
}
