import styles from "@/components/Navigation.module.css";
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
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}
