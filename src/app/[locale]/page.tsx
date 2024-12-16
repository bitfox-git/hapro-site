import FAQLanding from "@/components/landing/FAQLanding";
import HeroScreenshot from "@/components/landing/HeroScreenshot";
import LandingHero from "@/components/landing/LandingHero";
import ProblemCarousel from "@/components/landing/ProblemCarousel";
import Services from "@/components/landing/Services";
import Testimonials from "@/components/landing/Testimonials";
import { Box } from "@radix-ui/themes";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { use } from "react";

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

export default function Home({ params }: HomeProps) {
    const { locale } = use(params);

    // Enable static rendering
    setRequestLocale(locale);

    return (
        <>
            <LandingHero />
            <HeroScreenshot />
            <ProblemCarousel />
            <Services />
            <Testimonials />
            <FAQLanding />
        </>
    );
}
