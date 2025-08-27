"use client";

import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Autoplay, EffectFade} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import {motion} from "framer-motion";
import {heroSlides} from "@/constants/dataConst";

export default function HeroSlider() {
    return (
        <div className="relative w-full h-screen">
            <Swiper
                modules={[Navigation, Autoplay, EffectFade]}
                navigation
                effect="fade"
                autoplay={{delay: 5000, disableOnInteraction: false}}
                loop
                className="w-full h-full"
            >
                {heroSlides.map((slide, i) => (
                    <SwiperSlide key={i}>
                        <div
                            className="relative w-full h-screen bg-cover bg-center"
                            style={{backgroundImage: `url(${slide.image})`}}
                        >
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/30"/>

                            {/* Content */}
                            <div
                                className="
                                    relative z-10 flex flex-col
                                    h-full text-white
                                    px-6 sm:px-12 md:px-24
                                    justify-end pb-20 sm:pb-28
                                "
                            >
                                <motion.h1
                                    initial={{opacity: 0, y: 30}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.8}}
                                    className="
                                        uppercase font-bold leading-tight
                                        text-3xl sm:text-4xl md:text-6xl
                                    "
                                >
                                    {slide.title} <br/>
                                    <span className="text-red-500">{slide.highlight}</span>
                                </motion.h1>

                                <motion.p
                                    initial={{opacity: 0, y: 20}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 1, delay: 0.2}}
                                    className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl max-w-xl"
                                >
                                    {slide.subtitle}
                                </motion.p>

                                {/*<motion.a*/}
                                {/*    href={slide.link}*/}
                                {/*    initial={{opacity: 0, y: 20}}*/}
                                {/*    animate={{opacity: 1, y: 0}}*/}
                                {/*    transition={{duration: 1, delay: 0.4}}*/}
                                {/*    className="*/}
                                {/*        mt-5 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3*/}
                                {/*        bg-red-600 text-white font-semibold rounded-lg shadow-lg*/}
                                {/*        hover:bg-red-700 w-fit text-sm sm:text-base*/}
                                {/*    "*/}
                                {/*>*/}
                                {/*    {slide.button}*/}
                                {/*</motion.a>*/}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
