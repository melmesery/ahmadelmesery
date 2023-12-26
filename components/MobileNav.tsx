"use client";

import { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher.tsx";
import Toggler from "./Toggler.tsx";
import Link from "next/link";
import Logo from "./Logo.tsx";

export default function MobileNav({ lightLogo, darkLogo }: any) {
    const [toggle, setToggle] = useState(false);
    const menuToggle = () => {
        setToggle(!toggle);
    };
    const closeMenu = () => {
        setToggle(false);
    };
    return (
        <>
            <div className="max-w-[90%] py-[15px] mx-auto lg:hidden flex items-center justify-between text-center">
                <Logo lightLogo={lightLogo} darkLogo={darkLogo} />
                <div className="flex flex-row items-center -mr-3">
                    <ThemeSwitcher />
                    <Toggler toggle={toggle} menuToggle={menuToggle} />
                </div>
            </div>
            {toggle && (
                <div className="absolute top-20 z-50  w-full min-h-[30vh] dark:bg-[#013240] bg-[#EFF0F2] 
                animate-fade-down animate-once animate-duration-[0.1s] animate-delay-[0.2s]                
                ">
                    <Link
                        href="/"
                        onClick={closeMenu}
                        className="min-h-[10vh] border-b-[0.1px] dark:border-gray-700 grid items-center justify-center dark:hover:bg-gray-800 hover:bg-slate-200 hover:border-b-[0.3px] dark:text-[#FFE9B7] text-[#54BA6E] hover:font-extrabold hover:italic hover:text-[#54BA6E]"
                    >
                        Home
                    </Link>
                    <Link
                        href="/work/ahmad-elmesery-portfolio"
                        onClick={closeMenu}
                        className="min-h-[10vh] border-b-[0.1px] dark:border-gray-700 grid items-center justify-center dark:hover:bg-gray-800 hover:bg-slate-200 hover:border-b-[0.3px] dark:text-[#FFE9B7] text-[#54BA6E] hover:font-extrabold hover:italic hover:text-[#54BA6E]"
                    >
                        Work
                    </Link>
                    <Link
                        href="/about"
                        onClick={closeMenu}
                        className="min-h-[10vh] border-b-[0.1px] dark:border-gray-700 grid items-center justify-center dark:hover:bg-gray-800 hover:bg-slate-200 hover:border-b-[0.3px] dark:text-[#FFE9B7] text-[#54BA6E] hover:font-extrabold hover:italic hover:text-[#54BA6E]"
                    >
                        About
                    </Link>
                </div>
            )}
        </>
    );
}
