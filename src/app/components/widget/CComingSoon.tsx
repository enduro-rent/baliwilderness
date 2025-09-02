import Image from 'next/image';
import Link from 'next/link';

export default function ComingSoonPage() {
    return (
        <div className="flex flex-col items-center px-4 text-center">
            <div className="max-w-md">
                <Image
                    src="/images/comingSoonx.png"
                    alt="Working on something exciting"
                    width={300}
                    height={300}
                    className="mx-auto pt-10"
                />
                <h1 className="text-2xl md:text-3xl font-semibold text-white mt-6">
                    We are working on something exciting!
                </h1>
                <p className="text-gray-500 mt-3 text-sm md:text-base">
                    Get ready for a powerful addition to our platform. Designed to enhance your accommodation
                    experience.
                </p>

                <Link
                    href="/"
                    className="inline-flex items-center my-8 px-5 py-2 border border-gray-300 text-sm font-medium rounded-full hover:bg-[#00E0FF] hover:text-black transition"
                >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
                    </svg>
                    Back to Home
                </Link>
            </div>
        </div>
    );
}
