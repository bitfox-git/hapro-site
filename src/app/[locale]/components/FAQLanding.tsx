import { Link as RadixLink } from "@radix-ui/themes";
import TitleSubtitle from "../../../components/type/TitleSubtitle";

import styles from "./FAQLanding.module.css";
import Accordion from "../../../components/accordion/Accordion";

import { Link } from "@/i18n/routing";
import { getFaqs } from "@/lib/actions";
import { AcceptedLangs } from "@/lib/constants";
import { getTranslations } from "next-intl/server";

export default async function FAQLanding({
    locale,
}: {
    locale: AcceptedLangs;
}) {
    const t = await getTranslations("landing.faq");

    const { faqs } = await getFaqs(locale);

    // flatten the faqs into a single string
    const faqsHtml = faqs
        .map((faq) => faq.faqs)
        .flat()
        .join("");

    // take the first 10
    const faqArray = faqsHtml.split("<h1>").slice(1, 11);

    // get exactly half of the faqs, we will divide the faqs over two columns, grid doesn't work here since the faqs grow
    // which would make the entire row grow, we want to keep the faqs in the same row, masonry style.
    const half = Math.ceil(faqArray.length / 2);
    const faqArrayLeft = half > 1 ? faqArray.slice(0, half) : faqArray;
    const faqArrayRight = half > 1 ? faqArray.slice(half) : [];

    const parseArray = (array: string[]) => {
        return array.map((faq, index) => {
            const [question, answer] = faq.split("</h1>");

            // console.log(answer);

            return (
                <Accordion key={index} title={question}>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: `<div>${answer?.replace("<hr>", "")}</div>`,
                        }}
                    />
                </Accordion>
            );
        });
    };

    return (
        <section className="section">
            <TitleSubtitle title={t("title")} subtitle={t("subtitle")} />
            <p className={styles.description}>
                {t("description")}{" "}
                <RadixLink asChild>
                    <Link href="/faq">{t("link")}</Link>
                </RadixLink>
            </p>
            <div className={styles.faqs}>
                <div className={styles.column}>{parseArray(faqArrayLeft)}</div>
                <div className={styles.column}>{parseArray(faqArrayRight)}</div>
            </div>
        </section>
    );
}
