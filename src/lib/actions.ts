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

const getContent = async (file : string) => {
    const htmlRes = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeSanitize)
        .use(rehypeStringify)
        .process(file);

    const html = htmlRes.value as string;

    const content : { heading: string; paragraphs: string[] }[] = [];

    // Create pairs of headings and their content
    html.split("<h1>").forEach((heading) => {
        if(heading !== ""){
            const headingContent = heading.split("</h1>")[0];
            const afterHeadingContent = heading.split("</h1>")[1];
            const paragraphs = afterHeadingContent.split("<p>").slice(1);
            for(let i = 0; i < paragraphs.length; i++){
                paragraphs[i] = paragraphs[i].split("</p>")[0];
            }
            content.push({
                heading: headingContent,
                paragraphs,
            });
        }
    });

    return content;
}

// Same function as getTerms, so getTerms could also use getContent
export const getPrivacy = async (lang: AcceptedLangs) => {
    const privacyFile = await fs.readFile(
        process.cwd() + `/public/content/${lang}/privacy.md`,
        "utf-8"
    );

    const privacy = await getContent(privacyFile);
    return privacy
};