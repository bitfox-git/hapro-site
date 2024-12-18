import Checkmark from "@/assets/partner/checkmark.svg";
import Cross from "@/assets/partner/cross.svg";

import styles from "./ComparisonTable.module.css";
import Image from "next/image";
import TitleSubtitle from "@/components/type/TitleSubtitle";

const comparingApps = ["Nabu Casa", "Homeway.io", "hapro"];

type Comparison = {
    title: string;
    hasFeature: boolean[]; // boolean per comparing app
};

const comparisons: Comparison[] = [
    {
        title: "Offers support for multiple devices in a single dashboard",
        hasFeature: [false, false, true],
    },
    {
        title: "Aimed towards a professional user group",
        hasFeature: [false, false, true],
    },
    {
        title: "Backup management on the cloud",
        hasFeature: [false, false, true],
    },
    {
        title: "Connect with voice-assistants like Google Home and Alexa",
        hasFeature: [true, true, false],
    },
    {
        title: "Custom subdomains on a per-device basis",
        hasFeature: [false, false, true],
    },
];

export default function ComparisonTable() {
    return (
        <div className={styles.container}>
            <TitleSubtitle
                title={
                    <>
                        Why hapro is the better option for{" "}
                        <span>Your Business</span>
                    </>
                }
                subtitle="The solution you seek"
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
            <p>* Naby Casa assigns your device a random subdomain</p>
        </div>
    );
}
