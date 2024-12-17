"use client";

import desktopIllustration from "../../assets/landing/hero-illustration-desktop.svg";
import tabletIllustration from "../../assets/landing/hero-illustration-tablet.svg";
import mobileIllustration from "../../assets/landing/hero-illustration-mobile.svg";

import styles from "./LandingHero.module.css";
import { Button, Heading } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";

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
                    <Button asChild size={"4"} color="orange" variant="solid">
                        <Link href="/partner">Join Now</Link>
                    </Button>
                    <Button asChild size={"4"} color="gray" variant="outline">
                        <Link href="#problems">Learn More</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
