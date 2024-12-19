"use client";

import Accordion from "@/components/accordion/Accordion";
import { getFaqs } from "@/lib/actions";
import { useMemo } from "react";

import styles from "./FAQs.module.css";

type FAQsProps = {
    search?: string;
    faqs: Awaited<ReturnType<typeof getFaqs>>["faqs"];
    category: string;
};

export default function FAQs({ search, faqs, category }: FAQsProps) {
    const categoryFaqs = useMemo(() => {
        if (search) {
            return faqs
                .map((faq) => faq.faqs)
                .flat()
                .filter((faq) => {
                    const terms = search.split(" ");
                    return terms.every((term) =>
                        faq.toLowerCase().includes(term.toLowerCase())
                    );
                });
        }

        return faqs.find((faq) => faq.category === category)?.faqs;
    }, [faqs, category, search]);

    if (!categoryFaqs) {
        return null;
    }

    return (
        <div className={styles.faqs}>
            {categoryFaqs.map((faq, index) => {
                const [question, answer] = faq.split("</h1>");

                return (
                    <Accordion key={index} title={question.replace("<h1>", "")}>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: `<div>${answer.replace(
                                    "<hr>",
                                    ""
                                )}</div>`,
                            }}
                        />
                    </Accordion>
                );
            })}

            {!categoryFaqs.length && (
                <p className={styles.noResults}>
                    No results found for <strong>{search}</strong>
                </p>
            )}
        </div>
    );
}
