import Footer from "@/components/footer/Footer";
import { AcceptedLangs } from "@/lib/constants";
import { getTerms } from "@/lib/actions";
import ToSClient from "./components/ToSClient";

type TermsPageProps = Readonly<{
    params: Promise<{
        locale: AcceptedLangs;
    }>;
}>;

export default async function Terms({ params }: TermsPageProps) {
    const { locale } = await params;
    const terms = await getTerms(locale);

    return (
        <>
            <ToSClient terms={terms} />
            <Footer />
        </>
    )
}