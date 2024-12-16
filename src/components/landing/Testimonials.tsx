import TitleSubtitle from "../type/TitleSubtitle";

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
        </section>
    );
}
