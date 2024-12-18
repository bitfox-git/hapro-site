import TitleSubtitle from "@/components/type/TitleSubtitle";
import styles from "./page.module.css";
import { TextField } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export default function FAQPage() {
    return (
        <div className={styles.container}>
            <div className={styles.hero}>
                <TitleSubtitle
                    title="What can we help you find?"
                    subtitle="FAQ"
                    large
                />
                <TextField.Root
                    placeholder="Search the faqs…"
                    size={"3"}
                    className={styles.searchBox}
                >
                    <TextField.Slot>
                        <MagnifyingGlassIcon height="20" width="20" />
                    </TextField.Slot>
                </TextField.Root>
            </div>
        </div>
    );
}
