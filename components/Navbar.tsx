"use client";

import { useState } from "react";
import "../styles/MobileNav.css";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher.tsx";
import Toggler from "./Toggler.tsx";
import Logo from "./Logo.tsx";

export default function Navbar() {
    const [toggle, setToggle] = useState(false);

    const menuToggle = () => {
        setToggle(!toggle);
    };

    const closeMenu = () => {
        setToggle(false);
    };

    return (
        <>
            <nav className="">
                <div className="hidden max-w-[80%] mx-auto md:flex items-center justify-between py-2">
                    <Logo />
                    <div className="flex flex-row items-center gap-5">
                        <Link href="/" onClick={closeMenu} className="text-[#54BA6E] dark:text-[#FFE9B7] hover:text-[#DD4C39] 
                    hover:font-extrabold hover:italic dark:hover:text-[#54BA6E]">Home</Link>
                        <Link href="/work/ahmad-elmesery-portfolio" onClick={closeMenu} className="text-[#54BA6E] dark:text-[#FFE9B7] hover:text-[#DD4C39] 
                    hover:font-extrabold hover:italic dark:hover:text-[#54BA6E]">Work</Link>
                        <Link href="/about" onClick={closeMenu} className="text-[#54BA6E] dark:text-[#FFE9B7] hover:text-[#DD4C39] 
                    hover:font-extrabold hover:italic dark:hover:text-[#54BA6E]">About</Link>
                        <ThemeSwitcher />
                    </div>
                </div>
                <div className="max-w-[100%] sm:max-w-[80%] mx-auto md:hidden flex items-center justify-between text-center py-2">
                    <div className="flex flex-row items-center gap-2">
                        <Toggler toggle={toggle} menuToggle={menuToggle} />
                        <Logo />
                    </div>
                    <ThemeSwitcher />
                </div>

            </nav>
            {toggle && (
                <div className="sticky min-h-[calc(100vh- 64px)] max-w-[95%] mx-auto grid items-center justify-center animate-fade-down animate-duration-500 
                bg-[rgba(1,50,64,0.4)] dark:bg-[rgba(239,240,242,0.25)]">
                    <Link href="/" onClick={closeMenu} className="text-[#FFE9B7] dark:text-[#54BA6E] hover:font-extrabold hover:italic hover:text-[#54BA6E]">Home</Link>
                    <Link href="/work/ahmad-elmesery-portfolio" onClick={closeMenu} className="text-[#FFE9B7] dark:text-[#54BA6E] hover:font-extrabold hover:italic hover:text-[#54BA6E]">Work</Link>
                    <Link href="/about" onClick={closeMenu} className="text-[#FFE9B7] dark:text-[#54BA6E] hover:font-extrabold hover:italic hover:text-[#54BA6E]">About</Link>
                </div>
            )}</>
    );
}
