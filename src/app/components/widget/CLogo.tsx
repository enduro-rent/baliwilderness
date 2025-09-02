import React from 'react'
import Image from "next/image";
import Link from "next/link";

interface CLogoProps {
    className?: string;
}

export default function CLogo() {
    return (
        <div>
            <Link href="/" className="inline-flex items-center">
                <Image
                    src="/images/wilderness-logo.png"
                    alt="bali-wilderness-logo"
                    width={70}
                    height={70}
                    priority
                    className="h-10 w-auto md:h-14"
                />
            </Link>
        </div>
    )
}