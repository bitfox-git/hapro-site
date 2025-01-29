import { AcceptedLangs } from "./constants";
import { getFileHtml, parser } from "./parse";

export const getFaqs = async (lang: AcceptedLangs) => {
    const html = await getFileHtml(`${lang}/faqs.md`);
    const faqs = parser.faq(html);

    return faqs;
};

export const getTerms = async (lang: AcceptedLangs) => {
    const html = await getFileHtml(`${lang}/terms.md`);
    const terms = parser.simple(html);

    return terms;
};

// Same function as getTerms, so getTerms could also use getContent
export const getPrivacy = async (lang: AcceptedLangs) => {
    const html = await getFileHtml(`${lang}/privacy.md`);
    const privacy = parser.simple(html);

    return privacy;
};
