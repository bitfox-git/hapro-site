import Carousel from "../carousel/Carousel";

import Problem1Illustration from "../../assets/landing/problem-illustration-devices.svg";
import Problem2Illustration from "../../assets/landing/problem-illustration-technical.svg";
import Problem3Illustration from "../../assets/landing/problem-illustration-networks.svg";
import ProblemSquiggle from "../../assets/landing/problem-squiggle.svg";
import Image from "next/image";

import styles from "./ProblemCarousel.module.css";
import TitleSubtitle from "../type/TitleSubtitle";

export default function ProblemCarousel() {
    const slides = [
        <div className={styles.slide}>
            <Image
                className={styles.image}
                src={Problem1Illustration}
                alt={"alt"}
            />
            <div className={styles.content}>
                <h2 className={styles.title}>
                    Setup multiple devices <span>with ease</span>
                </h2>
                <p className={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </p>
            </div>
        </div>,
        <div className={styles.slide}>
            <Image
                className={styles.image}
                src={Problem2Illustration}
                alt={"alt"}
            />
            <div className={styles.content}>
                <h2 className={styles.title}>
                    <span className={styles.squiggle}>
                        <span>No</span>
                        <Image src={ProblemSquiggle} alt={"alt"} />
                    </span>{" "}
                    technical knowledge required
                </h2>
                <p className={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </p>
            </div>
        </div>,
        <div className={styles.slide}>
            <Image
                className={styles.image}
                src={Problem3Illustration}
                alt={"alt"}
            />
            <div className={styles.content}>
                <h2 className={styles.title}>
                    No more <span>struggling</span> with networks
                </h2>
                <p className={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </p>
            </div>
        </div>,
    ];

    return (
        <section className={styles.section}>
            <TitleSubtitle
                title="These problems are a thing of the past"
                subtitle="No need to worry"
            />
            <div className={styles.carouselWrapper}>
                <Carousel options={{ loop: true }} slides={slides} />
            </div>
        </section>
    );
}
