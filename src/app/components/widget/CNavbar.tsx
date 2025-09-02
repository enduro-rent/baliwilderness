'use client';
import {useState} from 'react';
import React from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import CLogo from "@/app/components/widget/CLogo";
import {Menu, UserLock, X} from "lucide-react";
import {menuItems} from "@/constants/dataConst";

export default function CNavbar() {
    const [openDropdown, setOpenDropdown] = useState<number | null>(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 w-full bg-[#F6AE01] text-black">
            <div className="max-w-9xl mx-auto flex items-center justify-between px-4 py-2 md:space-x-20">

                {/* Logo + Brand */}
                <div className="flex items-center space-x-3">
                    <CLogo/>
                    <span className="md:hidden font-bold text-lg uppercase">Baliwilderness</span>
                </div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex gap-6 uppercase font-medium items-center">
                    {menuItems.map((item, idx) =>
                        item.subMenu ? (
                            <div
                                key={idx}
                                className="relative group"
                                onMouseEnter={() => setOpenDropdown(idx)}
                                onMouseLeave={() => setOpenDropdown(null)}
                            >
                                <button
                                    className={`nav-link text-lg px-3 py-1 uppercase ${
                                        pathname.startsWith(item.href || '') ? 'active' : ''
                                    }`}
                                >
                                    {item.title}
                                    <svg
                                        className="w-4 h-4 ml-1 inline-block"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                                    </svg>
                                </button>

                                {openDropdown === idx && (
                                    <div className="absolute w-52 bg-black shadow-lg py-2 text-white">
                                        {item.subMenu.map((sub, subIdx) => (
                                            <Link
                                                key={subIdx}
                                                href={sub.href}
                                                className={`block px-4 py-2 nav-link uppercase ${
                                                    pathname === sub.href ? 'active' : ''
                                                }`}
                                            >
                                                {sub.title}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link
                                key={idx}
                                href={item.href}
                                className={`nav-link text-lg px-3 py-1 uppercase ${
                                    pathname === item.href ? 'active' : ''
                                }`}
                            >
                                {item.title}
                            </Link>
                        )
                    )}
                </nav>

                {/* Desktop Login */}
                <Link href="/login"
                      className={`hidden md:inline-block nav-link text-lg uppercase px-3 py-1 font-medium ${pathname === '/login' ? 'active' : ''}`}>
                    <UserLock/>
                </Link>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden p-2"
                >
                    {mobileOpen ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="md:hidden bg-black text-white px-4 py-4 space-y-3 uppercase font-medium">
                    {menuItems.map((item, idx) =>
                        item.subMenu ? (
                            <div key={idx}>
                                <p className="font-semibold">{item.title}</p>
                                <div className="pl-4 space-y-1">
                                    {item.subMenu.map((sub, subIdx) => (
                                        <Link
                                            key={subIdx}
                                            href={sub.href}
                                            className={`block nav-link ${
                                                pathname === sub.href ? 'active' : ''
                                            }`}
                                            onClick={() => setMobileOpen(false)}
                                        >
                                            {sub.title}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <Link
                                key={idx}
                                href={item.href}
                                className={`block nav-link ${
                                    pathname === item.href ? 'active' : ''
                                }`}
                                onClick={() => setMobileOpen(false)}
                            >
                                {item.title}
                            </Link>
                        )
                    )}
                    <Link
                        href="/login"
                        className={`block nav-link ${pathname === '/login' ? 'active' : ''}`}
                        onClick={() => setMobileOpen(false)}
                    >
                        Login
                    </Link>
                </div>
            )}
        </header>
    );
}
