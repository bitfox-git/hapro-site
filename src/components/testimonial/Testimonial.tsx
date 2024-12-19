import Image, { StaticImageData } from "next/image";

import styles from "./Testimonial.module.css";
import clsx from "clsx";

type TestimonialProps = Readonly<{
    quote: string;
    picture: StaticImageData;
    name: string;
    title: string;
    dark?: boolean;
}>;

export default function Testimonial({
    quote,
    picture,
    name,
    title,
    dark,
}: TestimonialProps) {
    return (
        <div className={clsx(styles.testimonial, dark && styles.dark)}>
            <blockquote>{quote}</blockquote>
            <div className={styles.footer}>
                <Image
                    className={styles.picture}
                    src={picture}
                    alt={name}
                    width={40}
                    height={40}
                />
                <cite className={styles.name}>{name}</cite>
                <span className={styles.title}>{title}</span>
            </div>
        </div>
    );
}
