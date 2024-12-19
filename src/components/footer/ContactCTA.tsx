import { Button } from "@radix-ui/themes";
import TitleSubtitle from "../type/TitleSubtitle";
import { HandIcon } from "@radix-ui/react-icons";
import { Link } from "@/i18n/routing";

import styles from "./ContactCTA.module.css";
import clsx from "clsx";
import { getTranslations } from "next-intl/server";

export default async function ContactCTA() {
    const t = await getTranslations("contact_cta");

    return (
        <section className={clsx("section", styles.container)}>
            <TitleSubtitle
                centered
                dark
                titleFirst
                title={t("title")}
                subtitle={t("subtitle")}
            />
            <Link href="/contact">
                <Button size={"3"} className="mt-4">
                    <HandIcon />
                    {t("cta")}
                </Button>
            </Link>
        </section>
    );
}
