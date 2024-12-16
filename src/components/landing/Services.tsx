import TitleSubtitle from "../type/TitleSubtitle";

import styles from "./Services.module.css";

export default function Services() {
    return (
        <section className={`section ${styles.container}`}>
            <TitleSubtitle title="What we offer" subtitle="Our services" />
        </section>
    );
}
