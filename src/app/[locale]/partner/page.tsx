import Footer from "@/components/footer/Footer";
import ComparisonTable from "./components/ComparisonTable";
import PartnerFeatures from "./components/PartnerFeatures";
import PartnerHero from "./components/PartnerHero";
import PartnerSignup from "./components/PartnerSignup";
import ContactCTA from "@/components/footer/ContactCTA";

export default function PartnerPage() {
    return (
        <>
            <PartnerHero />
            <PartnerFeatures />
            <ComparisonTable />
            <Footer>
                <PartnerSignup />
                <ContactCTA />
            </Footer>
        </>
    );
}
