import { SignupInputs } from "@/components/form/SignupForm";
import { signupEmail } from "@/server/postmark";

export async function POST(request: Request) {
    const body = (await request.json()) as SignupInputs;

    const res = await signupEmail(body);

    return new Response(JSON.stringify(res), {
        headers: {
            "Content-Type": "application/json",
        },
    });
}
