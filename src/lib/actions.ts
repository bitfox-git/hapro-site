import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

import { promises as fs } from "fs";
import { AcceptedLangs } from "./constants";

export const getFaqs = async (lang: AcceptedLangs) => {
    const faqsFile = await fs.readFile(
        process.cwd() + `/public/content/${lang}/faqs.md`,
        "utf-8"
    );

    const faqHtmlRes = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeSanitize)
        .use(rehypeStringify)
        .process(faqsFile);

    const faqHtml = faqHtmlRes.value as string;

    // seperate the faqs by category

    // 1. find all categories (inside h1, between [])
    const categories = new Set(
        faqHtml.match(/\[.*\]/g)?.map((category) => category.slice(1, -1))
    );

    // 2. split the faqs by category
    const faqHtmlSplit = faqHtml.split("<h1>").slice(1);
    const faqHtmlSplitByCategory = Array.from(categories).map((category) => {
        const faqs = faqHtmlSplit.filter((faq) => faq.includes(category));
        return faqs;
    });

    // 3. remove the category between [] from the h1
    // also insert back the h1 opening tag that was removed by the split
    const finalCategories = faqHtmlSplitByCategory.map((faqs) => {
        return faqs.map((faq) => {
            return faq.replace(/\[.*\]/g, "<h1>");
        });
    });

    return {
        categories,
        faqs: Array.from(categories).map((category, index) => {
            return {
                category,
                faqs: finalCategories[index],
            };
        }),
    };
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