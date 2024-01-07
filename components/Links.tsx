'use client';

import Link from "next/link";
import { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher.tsx";
import { useTheme } from "next-themes";

export default function Links({ url, publish }: any) {
    const [activeLink, setActiveLink] = useState("/");
    const { theme } = useTheme();
    const handleLinkClick = (link: any) => {
        setActiveLink(link);
    };

    return (
        <div className="flex flex-row items-center gap-5">
            <Link
                href="/"
                className={`${activeLink === "/" ? theme === "light" ? "text-[#DD4C39]" : "dark:text-[rgb(84,186,111)]" : ""}
                    text-[#013240] dark:text-[#FFE9B7] 
                    hover:text-[#DD4C39] hover:font-extrabold hover:italic hover:dark:text-[#54BA6E]`}
                onClick={() => handleLinkClick("/")}
            >
                Work
            </Link>

            {url && publish && (
                <Link
                    href="/ahmed-elmesery-portfolio"
                    className={`${activeLink === "/ahmed-elmesery-portfolio" ? theme === "light" ? "text-[#DD4C39]" : "dark:text-[rgb(84,186,111)]" : ""}
                    text-[#013240] dark:text-[#FFE9B7] 
                    hover:text-[#DD4C39] hover:font-extrabold hover:italic hover:dark:text-[#54BA6E]`}
                    onClick={() => handleLinkClick("/ahmed-elmesery-portfolio")}
                >
                    Reel
                </Link>
            )}

            <Link
                href="/about"
                className={`${activeLink === "/about" ? theme === "light" ? "text-[#DD4C39]" : "dark:text-[rgb(84,186,111)]" : ""}
                    text-[#013240] dark:text-[#FFE9B7] 
                    hover:text-[#DD4C39] hover:font-extrabold hover:italic hover:dark:text-[#54BA6E]`}
                onClick={() => handleLinkClick("/about")}
            >
                About
            </Link>
            <Link
                href="/contact"
                className={`${activeLink === "/contact" ? theme === "light" ? "text-[#DD4C39]" : "dark:text-[rgb(84,186,111)]" : ""}
                    text-[#013240] dark:text-[#FFE9B7] 
                    hover:text-[#DD4C39] hover:font-extrabold hover:italic hover:dark:text-[#54BA6E]`}
                onClick={() => handleLinkClick("/contact")}
            >
                Contact
            </Link>
            <ThemeSwitcher />
        </div>
    )
}


