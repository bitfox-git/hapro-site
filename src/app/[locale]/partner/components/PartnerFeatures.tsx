import Carousel from "@/components/carousel/Carousel";

import Feature1Illustration from "@/assets/partner/Feature1.svg";
import Feature2Illustration from "@/assets/partner/Feature2.svg";
import Feature3Illustration from "@/assets/partner/Feature3.svg";
import ProblemSquiggle from "@/assets/landing/problem-squiggle.svg";
import Image from "next/image";

import styles from "./PartnerFeatures.module.css";
import TitleSubtitle from "@/components/type/TitleSubtitle";

export default function PartnerFeatures() {
    const slides = [
        <div className={styles.slide} key={0}>
            <Image
                className={styles.image}
                src={Feature1Illustration}
                alt={"alt"}
            />
            <div className={styles.content}>
                <h2 className={styles.title}>
                    dynamic DNS, SSL certificates, middleware,{" "}
                    <span>all set up for you</span>
                </h2>
                <p className={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
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
                    Manage{" "}
                    <span className={styles.squiggle}>
                        <span>all</span>
                        <Image src={ProblemSquiggle} alt={"alt"} />
                    </span>{" "}
                    your installations from one central dashboard
                </h2>
                <p className={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
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
                    Set up devices <span>in advance</span>, and simplify
                    customer onboarding
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
        <section className="section" id="problems">
            <TitleSubtitle
                title="This is what you'll be getting"
                subtitle="Straight to the point"
            />
            <div className={styles.carouselWrapper}>
                <Carousel options={{ loop: true }} slides={slides} />
            </div>
        </section>
    );
}
