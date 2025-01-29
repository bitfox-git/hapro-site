import Footer from "@/components/footer/Footer";
import PrivacyClient from "./components/PrivacyClient";
import { getPrivacy } from "@/lib/actions";
import { AcceptedLangs } from "@/lib/constants";

type PrivacyPageProps = Readonly<{
    params: Promise<{
        locale: AcceptedLangs;
    }>;
}>;

export default async function PrivacyPage({ params } : PrivacyPageProps) {
    const { locale } = await params;
    const privacy = await getPrivacy(locale);

    return (
        <>
            <PrivacyClient privacy={privacy} />
            <Footer />
        </>
    );
}