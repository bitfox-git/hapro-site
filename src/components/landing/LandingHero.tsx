"use client";

import desktopIllustration from "../../assets/landing/hero-illustration-desktop.svg";
import tabletIllustration from "../../assets/landing/hero-illustration-tablet.svg";
import mobileIllustration from "../../assets/landing/hero-illustration-mobile.svg";

import styles from "./LandingHero.module.css";
import { Button, Heading } from "@radix-ui/themes";
import Image from "next/image";

export default function LandingHero() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.illustration}>
                    <Image
                        className={styles.mobile}
                        src={mobileIllustration}
                        alt="Mobile Illustration"
                    />
                    <Image
                        className={styles.tablet}
                        src={tabletIllustration}
                        alt="Tablet Illustration"
                    />
                    <Image
                        className={styles.desktop}
                        src={desktopIllustration}
                        alt="Desktop Illustration"
                    />
                </div>
                <div className={styles.text}>
                    <Heading
                        size={"9"}
                        weight={"medium"}
                        className={styles.title}
                    >
                        Home Assistant, <span>For Businesses</span>
                    </Heading>
                    <Heading as="h2" size={"3"} weight={"light"}>
                        A subtitle that says something about the frustrations of
                        managing a fleet of Home Assistant devices as a business
                    </Heading>
                </div>
                <div className={styles.buttons}>
                    <Button size={"4"} color="orange" variant="solid">
                        Join Now
                    </Button>
                    <Button size={"4"} color="gray" variant="outline">
                        Learn More
                    </Button>
                </div>
            </div>
        </div>
    );
}
