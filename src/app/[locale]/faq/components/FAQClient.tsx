"use client";

import { getFaqs } from "@/lib/actions";
import FAQCategorySelector from "./FAQCategorySelector";

import styles from "./FAQClient.module.css";
import { useState } from "react";
import FAQs from "./FAQs";
import TitleSubtitle from "@/components/type/TitleSubtitle";
import { TextField } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useTranslations } from "next-intl";

type FAQClientProps = Awaited<ReturnType<typeof getFaqs>>;

export default function FAQClient({ categories, faqs }: FAQClientProps) {
    const t = useTranslations("faq");

    const categoryArray = Array.from(categories);
    const [category, setCategory] = useState(categoryArray[0]);
    const [search, setSearch] = useState<string>("");

    return (
        <div className={styles.container}>
            <div className={styles.hero}>
                <div className={styles.heroContent}>
                    <TitleSubtitle
                        title={t("title")}
                        subtitle={t("subtitle")}
                        large
                    />
                    <TextField.Root
                        placeholder={t("search_placeholder")}
                        size={"3"}
                        className={styles.searchBox}
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                    >
                        <TextField.Slot>
                            <MagnifyingGlassIcon height="20" width="20" />
                        </TextField.Slot>
                    </TextField.Root>
                </div>
            </div>

            {!search && (
                <FAQCategorySelector
                    categories={categories}
                    onCategoryChange={setCategory}
                />
            )}
            <FAQs search={search} faqs={faqs} category={category} />
        </div>
    );
}
