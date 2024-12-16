import clsx from "clsx";
import styles from "./TitleSubtitle.module.css";
import { ReactNode } from "react";

type TitleSubtitleProps = Readonly<{
    title: ReactNode;
    subtitle: ReactNode;
    centered?: boolean;
}>;

export default function TitleSubtitle({
    title,
    subtitle,
    centered,
}: TitleSubtitleProps) {
    return (
        <div className={clsx(centered && styles.centered)}>
            <h3 className={styles.subtitle}>{subtitle}</h3>
            <h2 className={styles.title}>{title}</h2>
        </div>
    );
}
