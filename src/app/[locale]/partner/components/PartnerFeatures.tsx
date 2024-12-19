import Carousel from "@/components/carousel/Carousel";

import Feature1Illustration from "@/assets/partner/Feature1.svg";
import Feature2Illustration from "@/assets/partner/Feature2.svg";
import Feature3Illustration from "@/assets/partner/Feature3.svg";
import ProblemSquiggle from "@/assets/landing/problem-squiggle.svg";
import Image from "next/image";

import styles from "./PartnerFeatures.module.css";
import TitleSubtitle from "@/components/type/TitleSubtitle";
import { getTranslations } from "next-intl/server";

export default async function PartnerFeatures() {
    const t = await getTranslations("partner.features");

    const slides = [
        <div className={styles.slide} key={0}>
            <Image
                className={styles.image}
                src={Feature1Illustration}
                alt={"alt"}
            />
            <div className={styles.content}>
                <h2 className={styles.title}>
                    {t.rich("feature1.title", {
                        italic: (children) => <span>{children}</span>,
                    })}
                </h2>
                <p className={styles.description}>
                    {t("feature1.description")}
                </p>
            </div>
        </div>,
        <div className={styles.slide} key={0}>
            <Image
                className={styles.image}
                src={Feature2Illustration}
                alt={"alt"}
            />
            <div className={styles.content}>
                <h2 className={styles.title}>
                    {t.rich("feature2.title", {
                        scribble: (children) => (
                            <span className={styles.squiggle}>
                                <span>{children}</span>
                                <Image src={ProblemSquiggle} alt={"alt"} />
                            </span>
                        ),
                    })}
                </h2>
                <p className={styles.description}>
                    {t("feature2.description")}
                </p>
            </div>
        </div>,
        <div className={styles.slide} key={0}>
            <Image
                className={styles.image}
                src={Feature3Illustration}
                alt={"alt"}
            />
            <div className={styles.content}>
                <h2 className={styles.title}>
                    {t.rich("feature3.title", {
                        italic: (children) => <span>{children}</span>,
                    })}
                </h2>
                <p className={styles.description}>
                    {t("feature3.description")}
                </p>
            </div>
        </div>,
    ];

    return (
        <section className="section" id="problems">
            <TitleSubtitle title={t("title")} subtitle={t("subtitle")} />
            <div className={styles.carouselWrapper}>
                <Carousel options={{ loop: true }} slides={slides} />
            </div>
        </section>
    );
}
