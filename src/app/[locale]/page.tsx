import Carousel from "@/components/carousel/Carousel";
import LandingHero from "@/components/landing/LandingHero";
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
            <Box style={{ gridColumn: "full !important" }}>
                <Carousel
                    slides={[0, 1, 2, 3]}
                    options={{ loop: true, startIndex: 1 }}
                />
            </Box>
        </>
    );
}
