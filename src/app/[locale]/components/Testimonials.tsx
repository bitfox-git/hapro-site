import Image, { StaticImageData } from "next/image";
import Marquee from "../../../components/marquee/Marquee";
import TitleSubtitle from "../../../components/type/TitleSubtitle";

import PlaceholderAvatar from "@/assets/landing/placeholder-avatar.jpg";

import styles from "./Testimonials.module.css";

export default function Testimonials() {
    return (
        <section className="section">
            <TitleSubtitle
                centered
                title={
                    <>
                        Take <span>their</span> word for it
                    </>
                }
                subtitle="Don't take our word for it"
            />
            <Marquee direction="left" duration={60}>
                <Testimonial
                    quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    picture={PlaceholderAvatar}
                    name="Jane Doe"
                    title="CEO & Founder of Acme Inc."
                />
                <Testimonial
                    quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    picture={PlaceholderAvatar}
                    name="Jane Doe"
                    title="CEO & Founder of Acme Inc."
                />
                <Testimonial
                    quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    picture={PlaceholderAvatar}
                    name="Jane Doe"
                    title="CEO & Founder of Acme Inc."
                />
                <Testimonial
                    quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    picture={PlaceholderAvatar}
                    name="Jane Doe"
                    title="CEO & Founder of Acme Inc."
                />
            </Marquee>
            <Marquee direction="right" duration={60}>
                <Testimonial
                    quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    picture={PlaceholderAvatar}
                    name="Jane Doe"
                    title="CEO & Founder of Acme Inc."
                />
                <Testimonial
                    quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    picture={PlaceholderAvatar}
                    name="Jane Doe"
                    title="CEO & Founder of Acme Inc."
                />
                <Testimonial
                    quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    picture={PlaceholderAvatar}
                    name="Jane Doe"
                    title="CEO & Founder of Acme Inc."
                />
                <Testimonial
                    quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    picture={PlaceholderAvatar}
                    name="Jane Doe"
                    title="CEO & Founder of Acme Inc."
                />
            </Marquee>
        </section>
    );
}

type TestimonialProps = Readonly<{
    quote: string;
    picture: StaticImageData;
    name: string;
    title: string;
}>;

function Testimonial({ quote, picture, name, title }: TestimonialProps) {
    return (
        <div className={styles.testimonial}>
            <blockquote>{quote}</blockquote>
            <div className={styles.footer}>
                <Image
                    className={styles.picture}
                    src={picture}
                    alt={name}
                    width={40}
                    height={40}
                />
                <cite className={styles.name}>{name}</cite>
                <span className={styles.title}>{title}</span>
            </div>
        </div>
    );
}
