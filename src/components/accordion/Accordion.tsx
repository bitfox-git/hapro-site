"use client";

import { PropsWithChildren, ReactNode, useState } from "react";

import styles from "./Accordion.module.css";
import clsx from "clsx";

type AccordionProps = PropsWithChildren<
    Readonly<{
        title: ReactNode;
    }>
>;

export default function Accordion({ children, title }: AccordionProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={clsx(styles.wrapper, isOpen && styles.open)}>
            <div className={styles.header} onClick={() => setIsOpen(!isOpen)}>
                <h3 className={styles.title}>{title}</h3>
                <span className={styles.icon} aria-hidden="true" />
            </div>
            <div className={styles.content}>{children}</div>
        </div>
    );
}
