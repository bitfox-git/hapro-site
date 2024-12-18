"use client";

import styles from "./Navigation.module.css";
import Image from "next/image";
import { Link, usePathname } from "@/i18n/routing";
import { useEffect, useState } from "react";
import clsx from "clsx";

type Link = {
    href: string;
    label: string;
    logo?: boolean;
    cta?: boolean;
};

const links: Link[] = [
    {
        href: "/",
        logo: true,
        label: "Home",
    },
    {
        href: "/faq",
        label: "FAQ",
    },
    {
        href: "/partner",
        cta: true,
        label: "Join Now",
    },
];

export default function Navigation() {
    const pathname = usePathname();

    const [showNavCta, setShowNavCta] = useState(true);

    useEffect(() => {
        if (typeof window === "undefined") {
            return;
        }

        const handleScroll = () => {
            const currentScroll = window.scrollY;
            setShowNavCta(currentScroll < window.innerHeight);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={styles.nav}>
            <ul>
                {links.map((link) => (
                    <li
                        key={link.href}
                        className={link.logo ? styles.logo : undefined}
                    >
                        <Link
                            href={link.href}
                            className={clsx(
                                link.cta && styles.cta,
                                link.cta && showNavCta && styles.hide,
                                pathname === link.href && styles.active
                            )}
                        >
                            {link.logo ? (
                                <Image
                                    src="/hapro-logo-full.svg"
                                    alt="Logo"
                                    width={77}
                                    height={22}
                                />
                            ) : (
                                link.label
                            )}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
