import Image from "next/image";

import LogoFull from "../../assets/logo-full.svg";
import FooterGlowLine from "../../assets/footer/footer-glow-line.svg";

import styles from "./Footer.module.css";
import clsx from "clsx";
import { Link } from "@/i18n/routing";

type FooterLink = {
    title: string;
    url: string;
};

type FooterLinkCategory = {
    title: string;
    links: FooterLink[];
};

const footerLinks: FooterLinkCategory[] = [
    {
        title: "Company",
        links: [
            { title: "About us", url: "/about" },
            { title: "Contact us", url: "/contact" },
        ],
    },
    {
        title: "Platform",
        links: [
            { title: "Documentation", url: "/docs" },
            { title: "FAQ", url: "/faq" },
            { title: "Become a partner", url: "/partner" },
        ],
    },
    {
        title: "Legal",
        links: [
            { title: "Terms of service", url: "/terms" },
            { title: "Privacy policy", url: "/privacy" },
            { title: "Cookie policy", url: "/cookie" },
        ],
    },
];

const email = "contact@hapro.cloud";
const phone = "+31 6 12345678";

export default function Footer({ children }: { children?: React.ReactNode }) {
    return (
        <footer className={clsx("section", styles.container)}>
            {children}
            <div className={styles.content}>
                <div className={styles.info}>
                    <Image src={LogoFull} alt="Logo" />
                    <a href={`mailto:${email}`}>{email}</a>
                    <a href={`tel:${phone}`}>{phone}</a>
                </div>
                <div className={styles.links}>
                    {footerLinks.map((category) => (
                        <div key={category.title} className={styles.category}>
                            <h3>{category.title}</h3>
                            <ul>
                                {category.links.map((link) => (
                                    <li key={link.title}>
                                        <Link href={link.url}>
                                            {link.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <Image
                className={styles.glowLine}
                src={FooterGlowLine}
                alt="decorative glowing seperator line"
            />
            <div className={styles.legal}>
                <p>&copy; {new Date().getFullYear()} hapro</p>
            </div>
        </footer>
    );
}
