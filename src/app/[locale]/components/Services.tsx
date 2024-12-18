import TitleSubtitle from "../../../components/type/TitleSubtitle";
import Image, { StaticImageData } from "next/image";

import Service1Illustration from "@/assets/landing/service-image-remotecontrol.jpg";
import Service2Illustration from "@/assets/landing/service-image-backups.svg";
import Service3Illustration from "@/assets/landing/service-image-massmanagement.jpg";

import styles from "./Services.module.css";
import clsx from "clsx";

export default function Services() {
    const services: Omit<ServiceProps, "index" | "total">[] = [
        {
            title: "Remote control",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            imageSrc: Service1Illustration,
        },
        {
            title: "Backups",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            imageSrc: Service2Illustration,
            align: "right",
        },
        {
            title: "Mass management",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            imageSrc: Service3Illustration,
        },
    ];

    return (
        <section className={`section ${styles.container}`}>
            <TitleSubtitle title="What we offer" subtitle="Our services" />
            <div className={styles.services}>
                {services.map((service, index) => (
                    <Service
                        key={service.title}
                        index={index + 1}
                        total={services.length}
                        {...service}
                    />
                ))}
            </div>
        </section>
    );
}

type ServiceProps = Readonly<{
    index: number;
    total: number;
    title: string;
    description: string;
    imageSrc: StaticImageData;

    align?: "left" | "right";
}>;

function Service({
    title,
    description,
    imageSrc,
    index,
    total,
    align,
}: ServiceProps) {
    const animationDelay = index * 2.5;
    const beginValue = `${animationDelay}s;motion.end+${animationDelay}s`;

    return (
        <div
            className={clsx(
                styles.service,
                align === "right" ? styles.right : styles.left
            )}
            // we have to reverse the z-index order to make the glow line work, connectors overlap the glow line
            style={{ zIndex: total - index }}
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
                        <use href="#path" stroke="white" strokeWidth="3" />
                    </mask>
                    <g mask="url(#mask)">
                        <use href="#path" stroke="#E0E0E0" strokeWidth="3" />

                        <circle
                            r="50"
                            fill="#FF8052"
                            filter="url(#blur_filter)"
                        >
                            <animateMotion
                                id="motion"
                                dur="4s"
                                repeatCount="indefinite"
                                begin={beginValue}
                            >
                                <mpath href="#path" />
                            </animateMotion>
                            <animate
                                attributeName="r"
                                values="10;50;10"
                                dur="4s"
                                repeatCount="indefinite"
                                begin={beginValue}
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
