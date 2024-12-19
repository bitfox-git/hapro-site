import Image from "next/image";
import Testimonial from "@/components/testimonial/Testimonial";

import PlaceholderAvatar from "@/assets/landing/placeholder-avatar.jpg";
import SignupForm from "@/components/form/SignupForm";

import styles from "./PartnerSignup.module.css";
import Carousel from "@/components/carousel/Carousel";

export default function PartnerSignup() {
    return (
        <div className={styles.container}>
            <div className={styles.split}>
                <div className={styles.info}>
                    <Image
                        src="/hapro-logo-full-dark.svg"
                        alt="hapro logo"
                        width={191}
                        height={54}
                    />
                    <div className={styles.text}>
                        <h2>Let us help you manage your devices today.</h2>
                        <p>
                            Thank you for choosing hapro. Sign up using the
                            form, we will reach out to you as soon as possible.
                        </p>
                    </div>
                    <Carousel
                        forceCarousel
                        hideControls
                        options={{
                            loop: true,
                        }}
                        slides={[
                            <Testimonial
                                key={1}
                                quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                picture={PlaceholderAvatar}
                                name="Jane Doe"
                                title="CEO & Founder of Acme Inc."
                                dark
                            />,
                            <Testimonial
                                key={1}
                                quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                picture={PlaceholderAvatar}
                                name="Jane Doe"
                                title="CEO & Founder of Acme Inc."
                                dark
                            />,
                            <Testimonial
                                key={1}
                                quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                picture={PlaceholderAvatar}
                                name="Jane Doe"
                                title="CEO & Founder of Acme Inc."
                                dark
                            />,
                        ]}
                    />
                </div>
                <SignupForm />
            </div>
        </div>
    );
}
