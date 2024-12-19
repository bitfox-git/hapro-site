import { Button } from "@radix-ui/themes";
import TitleSubtitle from "../type/TitleSubtitle";
import { HandIcon } from "@radix-ui/react-icons";
import { Link } from "@/i18n/routing";

import styles from "./ContactCTA.module.css";
import clsx from "clsx";

export default function ContactCTA() {
    return (
        <section className={clsx("section", styles.container)}>
            <TitleSubtitle
                centered
                dark
                titleFirst
                title="Still have questions?"
                subtitle="Our support team is always ready to help"
            />
            <Link href="/contact">
                <Button size={"3"} className="mt-4">
                    <HandIcon />
                    Get in touch
                </Button>
            </Link>
        </section>
    );
}
