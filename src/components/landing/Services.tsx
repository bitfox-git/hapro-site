import TitleSubtitle from "../type/TitleSubtitle";
import Image, { StaticImageData } from "next/image";

import Service1Illustration from "../../assets/landing/service-image-remotecontrol.jpg";
import Service2Illustration from "../../assets/landing/service-image-backups.svg";
import Service3Illustration from "../../assets/landing/service-image-massmanagement.jpg";

import GlowLine from "../../assets/landing/service-glow-line.svg";

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
                <svg
                    className={styles.glowLine}
                    xmlns="http://www.w3.org/2000/svg"
                    width="123"
                    height="381"
                    viewBox="0 0 123 381"
                    fill="none"
                >
                    <path
                        id="path"
                        d="M121 0V347.5C121 365.173 106.673 379.5 89 379.5H0"
                    />

                    <mask id="mask">
                        <use href="#path" stroke="white" stroke-width="3" />
                    </mask>
                    <g mask="url(#mask)">
                        <use href="#path" stroke="#E0E0E0" stroke-width="3" />

                        <circle
                            r="50"
                            fill="#FF8052"
                            filter="url(#blur_filter)"
                        >
                            <animateMotion dur="4s" repeatCount="indefinite">
                                <mpath href="#path" />
                            </animateMotion>
                            <animate
                                attributeName="r"
                                values="10;50;10"
                                dur="4s"
                                repeatCount="indefinite"
                            />
                        </circle>
                    </g>

                    <defs>
                        <filter id="blur_filter" x="0" y="0">
                            <feGaussianBlur
                                in="SourceGraphic"
                                stdDeviation="15"
                            />
                        </filter>
                    </defs>
                </svg>
            </div>
        </div>
    );
}
