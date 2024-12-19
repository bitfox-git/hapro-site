"use client";

import { useForm, SubmitHandler } from "react-hook-form";

import styles from "./SignupForm.module.css";
import { Button, TextField } from "@radix-ui/themes";

type Inputs = {
    company: string;
    email: string;
    location: string;
    phone: string;
    website: string;
};

export default function SignupForm() {
    const { register, handleSubmit } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
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
                <label htmlFor="email">Email</label>
                <TextField.Root
                    type="email"
                    id="email"
                    placeholder="email@example.com"
                    size="3"
                    {...register("email", { required: true })}
                ></TextField.Root>
                <label htmlFor="location">Location</label>
                <TextField.Root
                    type="text"
                    id="location"
                    placeholder="3445 AB, Sunset Ave"
                    size="3"
                    {...register("location", { required: true })}
                ></TextField.Root>
                <label htmlFor="phone">Phone Number</label>
                <TextField.Root
                    type="tel"
                    id="phone"
                    placeholder="+31 6 1234 5678"
                    size="3"
                    {...register("phone", { required: true })}
                ></TextField.Root>
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
