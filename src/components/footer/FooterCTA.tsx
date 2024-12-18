import clsx from "clsx";
import TitleSubtitle from "../type/TitleSubtitle";

import FooterCTALineLeft from "../../assets/footer/footer-cta-line-left.svg";
import FooterCTALineRight from "../../assets/footer/footer-cta-line-right.svg";

import styles from "./FooterCTA.module.css";
import Image from "next/image";
import { Button } from "@radix-ui/themes";
import { Link } from "@/i18n/routing";

export default function FooterCTA() {
    return (
        <section className={clsx("section", styles.container)}>
            <TitleSubtitle
                centered
                large
                dark
                title="Become a partner today"
                subtitle="Ready to take the leap?"
            />
            <div className={styles.cta}>
                <Image
                    className={clsx(styles.lineLeft, styles.lineDesktop)}
                    src={FooterCTALineLeft}
                    alt="Decorative glowing line pointing to a button"
                />
                <Button
                    asChild
                    size={{
                        initial: "3",
                        md: "4",
                    }}
                    color="orange"
                    className={styles.button}
                >
                    <Link href="/partner">Go To Partner Registration Page</Link>
                </Button>
                <Image
                    className={clsx(
                        styles.lineRight,
                        styles.lineDesktop,
                        styles.lineRight
                    )}
                    src={FooterCTALineRight}
                    alt="Decorative glowing line pointing to a button"
                />
            </div>
        </section>
    );
}
