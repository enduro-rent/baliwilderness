"use client";
import React, {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {TOUR_PACKAGES} from "@/constants/dataConst";

export default function PackageList() {
    type CardProps = {
        images: string[];
        title: string;
        shortDesc: string;
        description: string;
    };
    const Card: React.FC<CardProps> = ({images, title, shortDesc, description}) => {
        const [expanded, setExpanded] = useState(false);

        return (
            <div className="border-4 border-white brutal-shadow">
                <div className="overflow-hidden shadow-xl flex flex-col h-full">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        navigation
                        pagination={{clickable: true}}
                        loop={true}
                        className="h-80 w-full"
                    >
                        {images.map((src, idx) => (
                            <SwiperSlide key={idx}>
                                <img
                                    src={src}
                                    alt={`Slide ${idx}`}
                                    className="h-80 w-full object-cover"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-2xl font-bold">{title}</h3>
                        <p className="text-sm mb-4">{shortDesc}</p>
                        <p className="mt-2 flex-1">
                            {expanded ? description : description.slice(0, 150) + "..."}
                        </p>
                        <button
                            onClick={() => setExpanded(!expanded)}
                            className="text-[#00E0FF] font-medium items-center mt-2 self-start hover:text-[#F6AE01] transition-colors duration-200"
                        >
                            {expanded ? "Show Less" : "More"}
                        </button>
                        <a
                            href="/contact"
                            className="my-6 inline-block bg-yellow-500 font-medium text-black text-center text-lg px-4 py-2 brutal-shadow btn hover:bg-white"
                        >
                            Book Now
                        </a>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section className="py-12 px-2 md:px-24">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 gap-4">
                <div className="flex flex-col items-start">
                    <div className="py-2">
                        <h2 className="text-3xl md:text-4xl font-bold mb-2 brutal-shadow inline-block pr-0 md:pr-5">
                            Tour Packages
                        </h2>
                    </div>
                    <p className="text-lg md:text-xl">
                        Bali’s best Professional Dirt Bike and Enduro Tours.
                    </p>
                </div>
                <a
                    href="/packages"
                    className="nav-link text-base md:text-lg px-3 py-1 uppercase bg-[#F6AE01] text-black font-medium hover:text-black transition-colors duration-200"
                >
                    See More
                </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {TOUR_PACKAGES.map((pkg, i) => (
                    <Card
                        key={i}
                        images={pkg.images}
                        title={pkg.title}
                        shortDesc={pkg.shortDesc}
                        description={pkg.description}
                    />
                ))}
            </div>
        </section>
    );
}