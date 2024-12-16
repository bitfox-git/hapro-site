import styles from "./TitleSubtitle.module.css";

type TitleSubtitleProps = Readonly<{
    title: string;
    subtitle: string;
}>;

export default function TitleSubtitle({ title, subtitle }: TitleSubtitleProps) {
    return (
        <div>
            <h3 className={styles.subtitle}>{subtitle}</h3>
            <h2 className={styles.title}>{title}</h2>
        </div>
    );
}
