import TitleSubtitle from "@/components/type/TitleSubtitle";

import Scribble from "@/assets/partner/partner-hero-scribble.svg";

import Logo1 from "@/assets/partner/logo-1.svg";
import Logo2 from "@/assets/partner/logo-2.svg";
import Logo3 from "@/assets/partner/logo-3.svg";
import Logo4 from "@/assets/partner/logo-4.svg";
import Logo5 from "@/assets/partner/logo-5.svg";
import Logo6 from "@/assets/partner/logo-6.svg";
import Logo7 from "@/assets/partner/logo-7.svg";

import styles from "./PartnerHero.module.css";
import Image from "next/image";

export default function PartnerHero() {
    return (
        <div className={styles.container}>
            <TitleSubtitle
                title={
                    <>
                        Register as a partner{" "}
                        <span className={styles.scribbledText}>
                            <span>today</span>
                            <Image
                                src={Scribble}
                                alt="decorative scribble under text"
                            />
                        </span>
                    </>
                }
                centered
                large
                as="h1"
            />
            <h2 className={styles.subtitle}>And join these companies</h2>
            <div className={styles.logos}>
                <Image src={Logo1} alt="Logo 1" />
                <Image src={Logo2} alt="Logo 2" />
                <Image src={Logo3} alt="Logo 3" />
                <Image src={Logo4} alt="Logo 4" />
                <Image src={Logo5} alt="Logo 5" />
                <Image src={Logo6} alt="Logo 6" />
                <Image src={Logo7} alt="Logo 7" />
            </div>
        </div>
    );
}
