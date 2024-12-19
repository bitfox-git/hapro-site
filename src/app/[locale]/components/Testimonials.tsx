import { getTranslations } from "next-intl/server";
import Marquee from "../../../components/marquee/Marquee";
import TitleSubtitle from "../../../components/type/TitleSubtitle";

import PlaceholderAvatar from "@/assets/landing/placeholder-avatar.jpg";
import Testimonial from "@/components/testimonial/Testimonial";

export default async function Testimonials() {
    const tLanding = await getTranslations("landing.testimonials");
    const tTestimonials = await getTranslations("testimonials");

    return (
        <section className="section">
            <TitleSubtitle
                centered
                title={tLanding.rich("title", {
                    italic: (children) => <span>{children}</span>,
                })}
                subtitle={tLanding("subtitle")}
            />
            <Marquee direction="left" duration={60}>
                <Testimonial
                    quote={tTestimonials("testimonial1.quote")}
                    picture={PlaceholderAvatar}
                    name={tTestimonials("testimonial1.name")}
                    title={tTestimonials("testimonial1.title")}
                />
                <Testimonial
                    quote={tTestimonials("testimonial1.quote")}
                    picture={PlaceholderAvatar}
                    name={tTestimonials("testimonial1.name")}
                    title={tTestimonials("testimonial1.title")}
                />
                <Testimonial
                    quote={tTestimonials("testimonial1.quote")}
                    picture={PlaceholderAvatar}
                    name={tTestimonials("testimonial1.name")}
                    title={tTestimonials("testimonial1.title")}
                />
                <Testimonial
                    quote={tTestimonials("testimonial1.quote")}
                    picture={PlaceholderAvatar}
                    name={tTestimonials("testimonial1.name")}
                    title={tTestimonials("testimonial1.title")}
                />
            </Marquee>
            <Marquee direction="right" duration={60}>
                <Testimonial
                    quote={tTestimonials("testimonial1.quote")}
                    picture={PlaceholderAvatar}
                    name={tTestimonials("testimonial1.name")}
                    title={tTestimonials("testimonial1.title")}
                />
                <Testimonial
                    quote={tTestimonials("testimonial1.quote")}
                    picture={PlaceholderAvatar}
                    name={tTestimonials("testimonial1.name")}
                    title={tTestimonials("testimonial1.title")}
                />
                <Testimonial
                    quote={tTestimonials("testimonial1.quote")}
                    picture={PlaceholderAvatar}
                    name={tTestimonials("testimonial1.name")}
                    title={tTestimonials("testimonial1.title")}
                />
                <Testimonial
                    quote={tTestimonials("testimonial1.quote")}
                    picture={PlaceholderAvatar}
                    name={tTestimonials("testimonial1.name")}
                    title={tTestimonials("testimonial1.title")}
                />
            </Marquee>
        </section>
    );
}
