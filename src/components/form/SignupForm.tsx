"use client";

import { useForm, SubmitHandler } from "react-hook-form";

import styles from "./SignupForm.module.css";
import { Button, TextField } from "@radix-ui/themes";
import { useState } from "react";
import clsx from "clsx";
import { useTranslations } from "next-intl";

export type SignupInputs = {
    company: string;
    email: string;
    location: string;
    phone: string;
    website?: string;
};

export default function SignupForm() {
    const t = useTranslations("partner.signup.form");

    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<SignupInputs>();

    const onSubmit: SubmitHandler<SignupInputs> = async (data) => {
        if (submitting) return;

        setSubmitting(true);
        const res = await fetch("/api/email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (res.ok) {
            setSubmitted(true);
        } else {
            alert("An error occurred. Please try again.");
        }

        reset();
        setSubmitting(false);
    };

    return (
        <div className={clsx(styles.container, submitted && styles.submitted)}>
            <div className={styles.text}>
                <h2>{t("title")}</h2>
                <p>{t("description")}</p>
            </div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className={clsx(styles.form, submitting && styles.submitting)}
            >
                <label htmlFor="company">{t("company.label")}</label>
                <TextField.Root
                    type="text"
                    id="company"
                    placeholder={t("company.placeholder")}
                    size="3"
                    disabled={submitting}
                    {...register("company", { required: true })}
                ></TextField.Root>
                {errors.company && <span>{t("error.required")}</span>}
                <label htmlFor="email">{t("email.label")}</label>
                <TextField.Root
                    type="email"
                    id="email"
                    placeholder={t("email.placeholder")}
                    size="3"
                    disabled={submitting}
                    {...register("email", { required: true })}
                ></TextField.Root>
                {errors.email && <span>{t("error.required")}</span>}
                <label htmlFor="location">{t("location.label")}</label>
                <TextField.Root
                    type="text"
                    id="location"
                    placeholder={t("location.placeholder")}
                    size="3"
                    disabled={submitting}
                    {...register("location", { required: true })}
                ></TextField.Root>
                {errors.location && <span>{t("error.required")}</span>}
                <label htmlFor="phone">{t("phone.label")}</label>
                <TextField.Root
                    type="tel"
                    id="phone"
                    placeholder={t("phone.placeholder")}
                    size="3"
                    disabled={submitting}
                    {...register("phone", { required: true })}
                ></TextField.Root>
                {errors.phone && <span>{t("error.required")}</span>}
                <label htmlFor="website">{t("website.label")}</label>
                <TextField.Root
                    type="url"
                    id="website"
                    placeholder={t("website.placeholder")}
                    size="3"
                    disabled={submitting}
                    {...register("website", { required: false })}
                ></TextField.Root>
                <Button type="submit" size={"3"} loading={submitting}>
                    {t("submit")}
                </Button>
            </form>
            <div className={styles.success}>
                <h2>{t("success.title")}</h2>
                <p>{t("success.description")}</p>
            </div>
        </div>
    );
}
