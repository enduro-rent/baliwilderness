// components/AboutSection.tsx

import {aboutContent} from "@/constants/dataConst";

export default function AboutSection() {
    return (
        <section className="py-16 text-center">
            {/* Title */}
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-lg md:text-xl font-normal leading-relaxed">
                    {aboutContent.title.text}{" "}
                    <span className="mx-4">
            <a
                href={aboutContent.title.highlight.url}
                className="mt-6 inline-block bg-yellow-500 text-black text-xl px-3 py-3 brutal-shadow btn hover:bg-white"
            >
              {aboutContent.title.highlight.label}
            </a>
          </span>
                    {aboutContent.title.suffix}
                </h2>

                {/* Paragraphs */}
                {aboutContent.paragraphs.map((para, idx) => (
                    <p
                        key={idx}
                        className="mt-6 text-base md:text-lg leading-relaxed"
                    >
                        {para}
                    </p>
                ))}
            </div>

            {/* Video */}
            <div className="mt-10 flex justify-center">
                <div className="w-full max-w-3xl aspect-video">
                    <iframe
                        className="w-full h-full rounded-lg shadow-lg"
                        src={aboutContent.video.url}
                        title={aboutContent.video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
