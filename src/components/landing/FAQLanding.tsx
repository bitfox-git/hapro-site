import { Link as RadixLink } from "@radix-ui/themes";
import TitleSubtitle from "../type/TitleSubtitle";

import styles from "./FAQLanding.module.css";
import Accordion from "../accordion/Accordion";

import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

import { Link } from "@/i18n/routing";

import { promises as fs } from "fs";
import { unstable_cache } from "next/cache";

const getFaqs = unstable_cache(
    async () => {
        const faqsFile = await fs.readFile(
            process.cwd() + "/public/content/faqs.md",
            "utf-8"
        );

        return unified()
            .use(remarkParse)
            .use(remarkRehype)
            .use(rehypeSanitize)
            .use(rehypeStringify)
            .process(faqsFile);
    },
    ["faqs-md"],
    {
        revalidate: false,
    }
);

export default async function FAQLanding() {
    const faqsHtml = await getFaqs();

    // take the first 10
    const faqArray = faqsHtml.toString().split("<h1>").slice(1, 11);

    // get exactly half of the faqs, we will divide the faqs over two columns, grid doesn't work here since the faqs grow
    // which would make the entire row grow, we want to keep the faqs in the same row, masonry style.
    const half = Math.ceil(faqArray.length / 2);
    const faqArrayLeft = half > 1 ? faqArray.slice(0, half) : faqArray;
    const faqArrayRight = half > 1 ? faqArray.slice(half) : [];

    const parseArray = (array: string[]) => {
        return array.map((faq, index) => {
            const [question, answer] = faq.split("</h1>");

            return (
                <Accordion key={index} title={question}>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: `<div>${answer.replace("<hr>", "")}</div>`,
                        }}
                    />
                </Accordion>
            );
        });
    };

    return (
        <section className="section">
            <TitleSubtitle
                title="Small questions, big answers"
                subtitle="FAQ"
            />
            <p className={styles.description}>
                Find answers to commonly asked questions about our services,
                features and products below, for further assistance,{" "}
                <RadixLink asChild>
                    <Link href="/faq">check out our complete help page.</Link>
                </RadixLink>
            </p>
            <div className={styles.faqs}>
                <div className={styles.column}>{parseArray(faqArrayLeft)}</div>
                <div className={styles.column}>{parseArray(faqArrayRight)}</div>
            </div>
        </section>
    );
}
