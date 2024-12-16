import Image from "next/image";
import styles from "./HeroScreenshot.module.css";

import HeroScreenshotDesktop from "../../assets/landing/hero-screenshot.jpg";
import HeroScreenshotMobile from "../../assets/landing/hero-screenshot-mobile.jpg";

export default function HeroScreenshot() {
    return (
        <div className={styles.wrapper}>
            <Image
                src={HeroScreenshotDesktop}
                alt="Hero screenshot"
                layout="fill"
                objectFit="contain"
                quality={100}
                className={styles.desktop}
            />
            <Image
                src={HeroScreenshotMobile}
                alt="Hero screenshot"
                layout="fill"
                objectFit="contain"
                quality={100}
                className={styles.mobile}
            />
        </div>
    );
}
