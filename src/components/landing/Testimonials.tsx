import Image, { StaticImageData } from "next/image";
import Marquee from "../marquee/Marquee";
import TitleSubtitle from "../type/TitleSubtitle";

import PlaceholderAvatar from "../../assets/landing/placeholder-avatar.jpg";

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
            <Marquee>
                <Testimonial
                    quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    picture={PlaceholderAvatar}
                    name="John Doe"
                    title="CEO"
                />
                <Testimonial
                    quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    picture={PlaceholderAvatar}
                    name="Jane Doe"
                    title="CTO"
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
        <div>
            <blockquote>{quote}</blockquote>
            <div>
                <Image src={picture} alt={name} width={100} height={100} />
                <cite>{name}</cite>
                <span>{title}</span>
            </div>
        </div>
    );
}
