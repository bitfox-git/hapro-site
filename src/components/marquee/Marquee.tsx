import { PropsWithChildren } from "react";

import styles from "./Marquee.module.css";
import React from "react";

type MarqueeProps = PropsWithChildren<
    Readonly<{
        direction?: "left" | "right";
        duration?: number;
    }>
>;

export default function Marquee({
    children,
    direction,
    duration = 20,
}: MarqueeProps) {
    return (
        <div
            className={styles.marquee}
            style={
                {
                    "--item-count": React.Children.count(children),
                    "--duration": duration + "s",
                } as React.CSSProperties
            }
            data-direction={direction}
        >
            <div className={styles.marquee_view}>
                {/* twice to guarantee looping */}
                {children}
                {children}
            </div>
        </div>
    );
}
