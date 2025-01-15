"use client";

import styles from "./Navigation.module.css";
import Image from "next/image";
import { Link, usePathname } from "@/i18n/routing";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { Button, DropdownMenu } from "@radix-ui/themes";
import { GlobeIcon } from "@radix-ui/react-icons";

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
        label: "home",
    },
    {
        href: "/faq",
        label: "faq",
    },
    {
        href: "/partner",
        cta: true,
        label: "cta",
    },
];

export default function Navigation() {
    const t = useTranslations("navigation");

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
                                t(link.label)
                            )}
                        </Link>
                    </li>
                ))}
                <li className={styles.lang}>
                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger>
                            <Button variant="soft" size={"3"}>
                                <GlobeIcon width={20} height={20} />
                            </Button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content>
                            <DropdownMenu.Item asChild>
                                <Link href="/" locale="en">
                                    EN
                                </Link>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item asChild>
                                <Link href="/" locale="nl">
                                    NL
                                </Link>
                            </DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>
                </li>
            </ul>
        </nav>
    );
}
