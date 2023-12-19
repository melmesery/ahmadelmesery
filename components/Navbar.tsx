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
                <div className="hidden max-w-[1350px] mx-auto py-[30px] px-[65px] lg:flex items-center justify-between">
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
                <div className="max-w-[90%] py-[15px] mx-auto lg:hidden flex items-center justify-between text-center">
                    <Logo />
                    <div className="flex flex-row items-center -mr-3">
                        <ThemeSwitcher />
                        <Toggler toggle={toggle} menuToggle={menuToggle} />
                    </div>
                </div>

            </nav>
            {toggle && (
                <div className="absolute top-20 z-50  w-full min-h-[30vh] dark:bg-[#013240] bg-[#EFF0F2] animate-fade-down">
                    <Link href="/" onClick={closeMenu} className="min-h-[10vh] border-b-[0.1px] dark:border-gray-700 grid items-center justify-center dark:text-[#FFE9B7] text-[#54BA6E] hover:font-extrabold hover:italic hover:text-[#54BA6E]">Home</Link>
                    <Link href="/work/ahmad-elmesery-portfolio" onClick={closeMenu} className="min-h-[10vh] border-b-[0.1px] dark:border-gray-700 grid items-center justify-center dark:text-[#FFE9B7] text-[#54BA6E] hover:font-extrabold hover:italic hover:text-[#54BA6E]">Work</Link>
                    <Link href="/about" onClick={closeMenu} className="min-h-[10vh] border-b-[0.1px] dark:border-gray-700 grid items-center justify-center dark:text-[#FFE9B7] text-[#54BA6E] hover:font-extrabold hover:italic hover:text-[#54BA6E]">About</Link>
                </div>
            )}
        </>
    );
}
