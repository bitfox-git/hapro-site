import { PropsWithChildren } from "react";

import styles from "./Marquee.module.css";
import React from "react";

export default function Marquee({ children }: PropsWithChildren<{}>) {
    return (
        <div
            className={styles.marquee}
            style={
                {
                    "--item-count": React.Children.count(children),
                } as React.CSSProperties
            }
        >
            <div className={styles.marquee_view}>
                {/* twice to guarantee looping */}
                {children}
                {children}
            </div>
        </div>
    );
}
