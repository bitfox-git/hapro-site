import Checkmark from "@/assets/partner/checkmark.svg";
import Cross from "@/assets/partner/cross.svg";

import styles from "./ComparisonTable.module.css";
import Image from "next/image";
import TitleSubtitle from "@/components/type/TitleSubtitle";
import { getTranslations } from "next-intl/server";

const comparingApps = ["Nabu Casa", "Homeway.io", "hapro"];

type Comparison = {
    title: string;
    hasFeature: boolean[]; // boolean per comparing app
};

export default async function ComparisonTable() {
    const t = await getTranslations("partner.comparison");

    const comparisons: Comparison[] = [
        {
            // title: "Offers support for multiple devices in a single dashboard",
            title: t("comparison1.title"),
            hasFeature: [false, false, true],
        },
        {
            // title: "Aimed towards a professional user group",
            title: t("comparison2.title"),
            hasFeature: [false, false, true],
        },
        {
            // title: "Backup management on the cloud",
            title: t("comparison3.title"),
            hasFeature: [false, false, true],
        },
        {
            // title: "Connect with voice-assistants like Google Home and Alexa",
            title: t("comparison4.title"),
            hasFeature: [true, true, false],
        },
        {
            // title: "Custom subdomains on a per-device basis",
            title: t("comparison5.title"),
            hasFeature: [false, false, true],
        },
    ];

    return (
        <div className={styles.container}>
            <TitleSubtitle
                title={t.rich("title", {
                    span: (children) => (
                        <span className={styles.span}>{children}</span>
                    ),
                })}
                subtitle={t("subtitle")}
                centered
            />
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th></th>
                        {comparingApps.map((app, i) => (
                            <th key={i}>{app}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {comparisons.map((comparison, i) => (
                        <tr key={i}>
                            <td className={styles.title}>
                                <span>{comparison.title}</span>
                            </td>
                            {comparison.hasFeature.map((hasFeature, j) => (
                                <td key={j}>
                                    {hasFeature ? (
                                        <Image src={Checkmark} alt="yes" />
                                    ) : (
                                        <Image src={Cross} alt="no" />
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <p className={styles.note}>{t("note")}</p>
        </div>
    );
}
