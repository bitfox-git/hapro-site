"use server";

import TitleSubtitle from "@/components/type/TitleSubtitle";
import styles from "./ToSClient.module.css";
import { getTranslations } from "next-intl/server";
import { getTerms } from "@/lib/actions";

type ToSClientProps = {
    terms: Awaited<ReturnType<typeof getTerms>>;
};

export default async function ToSClient({ terms }: ToSClientProps) {
    const t = await getTranslations("terms");

    console.log(terms);

    return (
        <div className={styles.container}>
            <div className={styles.hero}>
                <div className={styles.heroContent}>
                    <TitleSubtitle title={t("title")} large />
                </div>
            </div>

            <div className={styles.textContent}>
                {terms.map(({ heading, paragraphs }) => {
                    return (
                        <div key={heading}>
                            <h2>{heading}</h2>
                            {paragraphs.map((paragraph, index) => {
                                return <p key={index}>{paragraph}</p>;
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
