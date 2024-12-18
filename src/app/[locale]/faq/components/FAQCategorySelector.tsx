"use client";

import { SegmentedControl, Select } from "@radix-ui/themes";

import styles from "./FAQCategorySelector.module.css";
import { getFaqs } from "@/lib/actions";

type FAQCategorySelectorProps = {
    categories: Awaited<ReturnType<typeof getFaqs>>["categories"];
    onCategoryChange: (category: string) => void;
};

export default function FAQCategorySelector({
    categories,
    onCategoryChange,
}: FAQCategorySelectorProps) {
    const categoryArray = Array.from(categories);

    return (
        <>
            <SegmentedControl.Root
                defaultValue={categoryArray[0]}
                onValueChange={onCategoryChange}
                className={styles.selector}
            >
                {categoryArray.map((category) => (
                    <SegmentedControl.Item
                        key={category}
                        value={category}
                        className={styles.item}
                    >
                        {category}
                    </SegmentedControl.Item>
                ))}
            </SegmentedControl.Root>

            <div className={styles.dropdown}>
                <h3 className={styles.label}>Categories:</h3>
                <Select.Root
                    defaultValue={categoryArray[0]}
                    onValueChange={onCategoryChange}
                    size={"3"}
                >
                    <Select.Trigger />
                    <Select.Content>
                        <Select.Group>
                            <Select.Label>Categories:</Select.Label>
                            {categoryArray.map((category) => (
                                <Select.Item key={category} value={category}>
                                    {category}
                                </Select.Item>
                            ))}
                        </Select.Group>
                    </Select.Content>
                </Select.Root>
            </div>
        </>
    );
}
