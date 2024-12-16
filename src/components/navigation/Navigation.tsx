import styles from "./Navigation.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
    return (
        <nav className={styles.nav}>
            <ul>
                <li className={styles.logo}>
                    <Link href="/">
                        <Image
                            src="/hapro-logo-full.svg"
                            alt="Logo"
                            width={77}
                            height={22}
                        />
                    </Link>
                </li>
                <li>
                    <Link href="/pricing">Pricing</Link>
                </li>
                <li>
                    <Link href="/faq">FAQ</Link>
                </li>
            </ul>
        </nav>
    );
}
