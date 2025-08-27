import React from 'react'
import Image from "next/image";
import Link from "next/link";

export default function CLogo() {
    return (
        <div>
            <Link href="/" className="inline-flex items-center">
                <Image
                    src="/images/wilderness-logo.png"
                    alt="bali-wilderness-logo"
                    width={70}
                    height={70}
                />
            </Link>
        </div>
    )
}