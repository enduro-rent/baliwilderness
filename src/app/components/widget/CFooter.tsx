import Image from "next/image";
import {footerContent} from "@/constants/dataConst";
import {FaFacebookF, FaInstagram, FaYoutube, FaEnvelope, FaPhone} from "react-icons/fa";

// mapping string ke icon react
const icons: Record<string, JSX.Element> = {
    facebook: <FaFacebookF className="text-xl"/>,
    instagram: <FaInstagram className="text-xl"/>,
    youtube: <FaYoutube className="text-xl"/>,
    email: <FaEnvelope className="text-xl"/>,
    phone: <FaPhone className="text-xl"/>,
};

export default function CFooter() {
    return (
        <footer className="bg-[#F6AE01] py-5 text-center text-black text-sm uppercase">
            {/* Logo */}
            <div className="flex justify-center mb-6">
                <Image
                    src={footerContent.logo}
                    alt={footerContent.company}
                    width={70}
                    height={70}
                />
            </div>

            {/* Company + Year */}
            <p className="mb-2">
                {footerContent.company} © {footerContent.year}
            </p>

            {/* Description */}
            <p className="max-w-2xl mx-auto leading-relaxed">
                {footerContent.description}
            </p>

            {/* Actions with icons */}
            <div className="mt-4 flex justify-center gap-5">
                {footerContent.actions.map((action, idx) => (
                    <a
                        key={idx}
                        href={action.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-800 hover:text-[#00E0FF] transition"
                    >
                        {icons[action.icon]} {/* icon render di sini */}
                        <span className="hidden sm:inline">{action.label}</span>
                    </a>
                ))}
            </div>
        </footer>
    );
}
