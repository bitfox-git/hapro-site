import { getFaqs } from "@/lib/actions";
import FAQClient from "./components/FAQClient";
import Footer from "@/components/footer/Footer";
import FooterCTA from "@/components/footer/FooterCTA";
import { AcceptedLangs } from "@/lib/constants";

type FAQPageProps = Readonly<{
    params: Promise<{
        locale: AcceptedLangs;
    }>;
}>;

export default async function FAQPage({ params }: FAQPageProps) {
    const { locale } = await params;
    const { faqs, categories } = await getFaqs(locale);

    return (
        <>
            <FAQClient faqs={faqs} categories={categories} />
            <Footer>
                <FooterCTA />
            </Footer>
        </>
    );
}
