import { Link } from "@radix-ui/themes";
import TitleSubtitle from "../type/TitleSubtitle";

import styles from "./FAQLanding.module.css";

export default function FAQLanding() {
    return (
        <section className="section">
            <TitleSubtitle
                title="Small questions, big answers"
                subtitle="Frequently Asked Questions (FAQ)"
            />
            <p className={styles.description}>
                Find answers to commonly asked questions about our services,
                features and products below, for further assistance,{" "}
                <Link asChild>
                    <a href="/faq">check out our complete help page.</a>
                </Link>
            </p>
        </section>
    );
}
