"use server";

import { SignupInputs } from "@/components/form/SignupForm";
import { connection } from "next/server";
import * as postmark from "postmark";

export async function signupEmail(values: SignupInputs) {
    await connection();

    const client = new postmark.ServerClient(
        process.env.POSTMARK_SERVER_TOKEN!
    );

    const res = await client.sendEmail({
        From: "noreply@hapro.cloud",
        To: process.env.POSTMARK_RECEIVER_EMAIL!,
        Subject: "New hapro partner registration",
        HtmlBody: `
        <h1>New partner registration</h1>
        <p>Company: ${values.company}</p>
        <p>Email: ${values.email}</p>
        <p>Location: ${values.location}</p>
        <p>Phone: ${values.phone}</p>
        <p>Website (optional): ${values.website || "not specified"}</p>
    `,
    });

    return res;
}
