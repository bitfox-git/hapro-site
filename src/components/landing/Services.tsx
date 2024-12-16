import TitleSubtitle from "../type/TitleSubtitle";
import Image, { StaticImageData } from "next/image";

import Service1Illustration from "../../assets/landing/service-image-remotecontrol.jpg";
import Service2Illustration from "../../assets/landing/service-image-backups.svg";
import Service3Illustration from "../../assets/landing/service-image-massmanagement.jpg";

import styles from "./Services.module.css";
import clsx from "clsx";

export default function Services() {
    return (
        <section className={`section ${styles.container}`}>
            <TitleSubtitle title="What we offer" subtitle="Our services" />
            <div className={styles.services}>
                <Service
                    index={1}
                    title="Remote control"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    imageSrc={Service1Illustration}
                />
                <Service
                    index={2}
                    align="right"
                    title="Backups"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    imageSrc={Service2Illustration}
                />
                <Service
                    index={3}
                    title="Mass management"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    imageSrc={Service3Illustration}
                />
            </div>
        </section>
    );
}

type ServiceProps = Readonly<{
    index: number;
    title: string;
    description: string;
    imageSrc: StaticImageData;
    align?: "left" | "right";
}>;

function Service({ title, description, imageSrc, index, align }: ServiceProps) {
    return (
        <div
            className={clsx(
                styles.service,
                align === "right" ? styles.right : styles.left
            )}
        >
            <div className={styles.content}>
                <div className={styles.header}>
                    <div className={styles.index}>0{index}</div>
                    <h3 className={styles.title}>{title}</h3>
                </div>
                <div className={styles.image}>
                    <Image src={imageSrc} alt={title} />
                </div>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    );
}
