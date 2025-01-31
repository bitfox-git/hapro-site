import Footer from "@/components/footer/Footer";
import FooterCTA from "@/components/footer/FooterCTA";
import FAQLanding from "@/app/[locale]/components/FAQLanding";
import HeroScreenshot from "@/app/[locale]/components/HeroScreenshot";
import LandingHero from "@/app/[locale]/components/LandingHero";
import ProblemCarousel from "@/app/[locale]/components/ProblemCarousel";
import Services from "@/app/[locale]/components/Services";
import Testimonials from "@/app/[locale]/components/Testimonials";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { use } from "react";
import { AcceptedLangs } from "@/lib/constants";

type HomeProps = Readonly<{
    params: Promise<{
        locale: AcceptedLangs;
    }>;
}>;

export async function generateMetadata({ params }: HomeProps) {
    const { locale } = await params;

    const t = await getTranslations({ locale, namespace: "metadata" });

    return {
        title: t("title"),
        description: t("description"),
        openGraph: {
            title: t("title"),
            description: t("description"),
            type: "website",
            images: [
                {
                    url: "https://hapro.cloud/opengraph.png",
                    width: 1200,
                    height: 630,
                    alt: t("ogImageAlt"),
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: t("title"),
            description: t("description"),
            image: "https://hapro.cloud/opengraph.png",
        },
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
            <FAQLanding locale={locale} />
            <Footer>
                <FooterCTA />
            </Footer>
        </>
    );
}
