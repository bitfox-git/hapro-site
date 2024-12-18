import clsx from "clsx";
import styles from "./TitleSubtitle.module.css";
import { createElement, ReactNode } from "react";

type TitleSubtitleProps = Readonly<{
    title: ReactNode;
    subtitle?: ReactNode;
    centered?: boolean;
    large?: boolean;
    dark?: boolean;
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}>;

export default function TitleSubtitle({
    title,
    subtitle,
    centered,
    large,
    dark,
    as,
}: TitleSubtitleProps) {
    return (
        <div
            className={clsx(
                centered && styles.centered,
                large && styles.large,
                dark && styles.dark
            )}
        >
            {subtitle && <h3 className={styles.subtitle}>{subtitle}</h3>}
            {createElement(as || "h2", { className: styles.title }, title)}
        </div>
    );
}
