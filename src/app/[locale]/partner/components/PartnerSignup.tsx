import Image from "next/image";
import Testimonial from "@/components/testimonial/Testimonial";

import PlaceholderAvatar from "@/assets/landing/placeholder-avatar.jpg";
import SignupForm from "@/components/form/SignupForm";

import styles from "./PartnerSignup.module.css";
import Carousel from "@/components/carousel/Carousel";
import { getTranslations } from "next-intl/server";

export default async function PartnerSignup() {
    const t = await getTranslations("partner.signup");
    const tTestimonials = await getTranslations("testimonials");

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
                        <h2>{t("title")}</h2>
                        <p>{t("description")}</p>
                    </div>
                    <Carousel
                        forceCarousel
                        hideControls
                        options={{
                            loop: true,
                        }}
                        slides={[
                            <Testimonial
                                dark
                                key={0}
                                quote={tTestimonials("testimonial1.quote")}
                                picture={PlaceholderAvatar}
                                name={tTestimonials("testimonial1.name")}
                                title={tTestimonials("testimonial1.title")}
                            />,
                            <Testimonial
                                dark
                                key={0}
                                quote={tTestimonials("testimonial1.quote")}
                                picture={PlaceholderAvatar}
                                name={tTestimonials("testimonial1.name")}
                                title={tTestimonials("testimonial1.title")}
                            />,
                            <Testimonial
                                dark
                                key={0}
                                quote={tTestimonials("testimonial1.quote")}
                                picture={PlaceholderAvatar}
                                name={tTestimonials("testimonial1.name")}
                                title={tTestimonials("testimonial1.title")}
                            />,
                        ]}
                    />
                </div>
                <SignupForm />
            </div>
        </div>
    );
}
