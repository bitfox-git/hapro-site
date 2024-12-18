import { getFaqs } from "@/lib/actions";
import FAQClient from "./components/FAQClient";
import Footer from "@/components/footer/Footer";
import FooterCTA from "@/components/footer/FooterCTA";

export default async function FAQPage() {
    const { faqs, categories } = await getFaqs();
    console.log(categories);

    return (
        <>
            <FAQClient faqs={faqs} categories={categories} />
            <Footer>
                <FooterCTA />
            </Footer>
        </>
    );
}
