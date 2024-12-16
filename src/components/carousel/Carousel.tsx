"use client";

import React, { ReactNode, useCallback } from "react";
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import {
    PrevButton,
    NextButton,
    usePrevNextButtons,
} from "./CarouselArrowButtons";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

import styles from "./Carousel.module.css";

type PropType = {
    slides: ReactNode[];
    options?: EmblaOptionsType;
};

export default function Carousel({ slides, options }: PropType) {
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

    const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
        const autoplay = emblaApi?.plugins()?.autoplay;
        if (!autoplay) return;

        const resetOrStop =
            autoplay.options.stopOnInteraction === false
                ? autoplay.reset
                : autoplay.stop;

        resetOrStop();
    }, []);

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi, onNavButtonClick);

    return (
        <>
            <section className={styles.embla}>
                <div className={styles.embla__viewport} ref={emblaRef}>
                    <div className={styles.embla__container}>
                        {[...slides, ...slides].map((slide, index) => (
                            <div className={styles.embla__slide} key={index}>
                                <div className={styles.embla__slide__number}>
                                    {slide}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.embla__controls}>
                    <div className={styles.embla__buttons}>
                        <PrevButton
                            onClick={onPrevButtonClick}
                            disabled={prevBtnDisabled}
                        />
                        <NextButton
                            onClick={onNextButtonClick}
                            disabled={nextBtnDisabled}
                        />
                    </div>
                </div>
            </section>

            <div className={styles.desktop}>
                {slides.map((slide, index) => (
                    <div key={index}>{slide}</div>
                ))}
            </div>
        </>
    );
}