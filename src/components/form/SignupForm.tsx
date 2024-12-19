"use client";

import { useForm, SubmitHandler } from "react-hook-form";

import styles from "./SignupForm.module.css";
import { Button, TextField } from "@radix-ui/themes";
import { useState } from "react";
import clsx from "clsx";

export type SignupInputs = {
    company: string;
    email: string;
    location: string;
    phone: string;
    website?: string;
};

export default function SignupForm() {
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
                <h2>Get Started</h2>
                <p>Register as a partner below.</p>
            </div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className={clsx(styles.form, submitting && styles.submitting)}
            >
                <label htmlFor="company">Name of your company</label>
                <TextField.Root
                    type="text"
                    id="company"
                    placeholder="Example Inc."
                    size="3"
                    disabled={submitting}
                    {...register("company", { required: true })}
                ></TextField.Root>
                {errors.company && <span>This field is required</span>}
                <label htmlFor="email">Email</label>
                <TextField.Root
                    type="email"
                    id="email"
                    placeholder="email@example.com"
                    size="3"
                    disabled={submitting}
                    {...register("email", { required: true })}
                ></TextField.Root>
                {errors.email && <span>This field is required</span>}
                <label htmlFor="location">Location</label>
                <TextField.Root
                    type="text"
                    id="location"
                    placeholder="3445 AB, Sunset Ave"
                    size="3"
                    disabled={submitting}
                    {...register("location", { required: true })}
                ></TextField.Root>
                {errors.location && <span>This field is required</span>}
                <label htmlFor="phone">Phone Number</label>
                <TextField.Root
                    type="tel"
                    id="phone"
                    placeholder="+31 6 1234 5678"
                    size="3"
                    disabled={submitting}
                    {...register("phone", { required: true })}
                ></TextField.Root>
                {errors.phone && <span>This field is required</span>}
                <label htmlFor="website">Website (optional)</label>
                <TextField.Root
                    type="url"
                    id="website"
                    placeholder="https://example.com"
                    size="3"
                    disabled={submitting}
                    {...register("website", { required: false })}
                ></TextField.Root>
                <Button type="submit" size={"3"} loading={submitting}>
                    Sign up now
                </Button>
            </form>
            <div className={styles.success}>
                <h2>Registration Sent</h2>
                <p>
                    Thank you for registering as a partner. We will get back to
                    you shortly. You may close this window.
                </p>
            </div>
        </div>
    );
}
