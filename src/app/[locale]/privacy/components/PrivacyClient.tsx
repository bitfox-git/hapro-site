import TitleSubtitle from "@/components/type/TitleSubtitle";
import styles from "./PrivacyClient.module.css";
import { getTranslations } from "next-intl/server";

export default async function PrivacyClient() {
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
                {/* Privacy Policy here, look into how to display this, probably going to look like Terms of Service */}
            </div>
        </div>
    );
}