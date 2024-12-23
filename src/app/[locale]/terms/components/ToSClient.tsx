"use server";

import TitleSubtitle from "@/components/type/TitleSubtitle";
import styles from "./ToSClient.module.css";
import { getTranslations } from "next-intl/server";

// I saw a way fancier way you did this at FAQ but I was unable to reproduce it so I did it this way
type ToSClientProps = {
    terms: { 
        heading: string, 
        paragraphs: string[]
    }[]
}

export default async function ToSClient({terms} : ToSClientProps) {
    const t = await getTranslations("terms");

    return (
        <div className={styles.container}>
            <div className={styles.hero}>
                <div className={styles.heroContent}>
                    <TitleSubtitle
                        title={t("title")}
                        subtitle={t("subtitle")}
                        large
                    />
                </div>
            </div>

            <div className={styles.textContent}>
                {terms.map(({heading, paragraphs}) => {
                    return (
                        <>
                            <h2>{heading}</h2>
                            {paragraphs.map((paragraph) => {
                                return <p>{paragraph}</p>;
                            })}
                        </>
                    );
                })}
            </div>
        </div>
    )
}