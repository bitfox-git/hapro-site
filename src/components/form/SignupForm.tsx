"use client";

import { useForm, SubmitHandler } from "react-hook-form";

import styles from "./SignupForm.module.css";
import { Button, TextField } from "@radix-ui/themes";

export type SignupInputs = {
    company: string;
    email: string;
    location: string;
    phone: string;
    website?: string;
};

export default function SignupForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignupInputs>();

    const onSubmit: SubmitHandler<SignupInputs> = (data) => {
        fetch("/api/email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
    };

    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <h2>Get Started</h2>
                <p>Register as a partner below.</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <label htmlFor="company">Name of your company</label>
                <TextField.Root
                    type="text"
                    id="company"
                    placeholder="Example Inc."
                    size="3"
                    {...register("company", { required: true })}
                ></TextField.Root>
                {errors.company && <span>This field is required</span>}
                <label htmlFor="email">Email</label>
                <TextField.Root
                    type="email"
                    id="email"
                    placeholder="email@example.com"
                    size="3"
                    {...register("email", { required: true })}
                ></TextField.Root>
                {errors.email && <span>This field is required</span>}
                <label htmlFor="location">Location</label>
                <TextField.Root
                    type="text"
                    id="location"
                    placeholder="3445 AB, Sunset Ave"
                    size="3"
                    {...register("location", { required: true })}
                ></TextField.Root>
                {errors.location && <span>This field is required</span>}
                <label htmlFor="phone">Phone Number</label>
                <TextField.Root
                    type="tel"
                    id="phone"
                    placeholder="+31 6 1234 5678"
                    size="3"
                    {...register("phone", { required: true })}
                ></TextField.Root>
                {errors.phone && <span>This field is required</span>}
                <label htmlFor="website">Website (optional)</label>
                <TextField.Root
                    type="url"
                    id="website"
                    placeholder="https://example.com"
                    size="3"
                    {...register("website", { required: false })}
                ></TextField.Root>
                <Button type="submit" size={"3"}>
                    Sign up now
                </Button>
            </form>
        </div>
    );
}
