import Carousel from "../../../components/carousel/Carousel";

import Problem1Illustration from "@/assets/landing/problem-illustration-devices.svg";
import Problem2Illustration from "@/assets/landing/problem-illustration-technical.svg";
import Problem3Illustration from "@/assets/landing/problem-illustration-networks.svg";
import ProblemSquiggle from "@/assets/landing/problem-squiggle.svg";
import Image from "next/image";

import styles from "./ProblemCarousel.module.css";
import TitleSubtitle from "../../../components/type/TitleSubtitle";
import { getTranslations } from "next-intl/server";

export default async function ProblemCarousel() {
    const t = await getTranslations("landing.problems");

    const slides = [
        <div className={styles.slide} key={0}>
            <Image
                className={styles.image}
                src={Problem1Illustration}
                alt={"alt"}
            />
            <div className={styles.content}>
                <h2 className={styles.title}>
                    {t.rich("problem1.title", {
                        italic: (children) => <span>{children}</span>,
                    })}
                </h2>
                <p className={styles.description}>
                    {t("problem1.description")}
                </p>
            </div>
        </div>,
        <div className={styles.slide} key={0}>
            <Image
                className={styles.image}
                src={Problem2Illustration}
                alt={"alt"}
            />
            <div className={styles.content}>
                <h2 className={styles.title}>
                    {t.rich("problem2.title", {
                        squiggle: (children) => (
                            <span className={styles.squiggle}>
                                <span> {children}</span>
                                <Image
                                    src={ProblemSquiggle}
                                    alt={"decorative squiggle"}
                                />
                            </span>
                        ),
                    })}
                </h2>
                <p className={styles.description}>
                    {t("problem2.description")}
                </p>
            </div>
        </div>,
        <div className={styles.slide} key={0}>
            <Image
                className={styles.image}
                src={Problem3Illustration}
                alt={"alt"}
            />
            <div className={styles.content}>
                <h2 className={styles.title}>
                    {t.rich("problem3.title", {
                        italic: (children) => <span>{children}</span>,
                    })}
                </h2>
                <p className={styles.description}>
                    {t("problem3.description")}
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
