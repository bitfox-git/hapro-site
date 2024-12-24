import TitleSubtitle from "@/components/type/TitleSubtitle";
import styles from "./PrivacyClient.module.css";
import { getTranslations } from "next-intl/server";

type PrivacyClientProps = {
    privacy: {
        heading: string,
        paragraphs: string[]
    }[];
}

export default async function PrivacyClient({privacy} : PrivacyClientProps) {
    const t = await getTranslations("privacy");

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
                {privacy.map(({heading, paragraphs}) => {
                    return (
                        <div key={heading}>
                            <h2>{heading}</h2>
                            {paragraphs.map((paragraph) => {
                                return <p>{paragraph}</p>;
                            })}
                        </div>
                    );
                })}                
            </div>  
        </div>
    );
}