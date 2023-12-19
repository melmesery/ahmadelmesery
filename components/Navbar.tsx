import Link from "next/link";
import { getProfile } from "../sanity/sanity-utils.ts";
import "../styles/MobileNav.css";
import Logo from "./Logo.tsx";
import ThemeSwitcher from "./ThemeSwitcher.tsx";
import MobileNav from "./MobileNav.tsx";

export const revalidate = 10;

export default async function Navbar() {
    const { lightLogo, darkLogo } = await getProfile();
    return (
        <>
            <nav>
                <div className="hidden max-w-[1350px] mx-auto py-[30px] px-[65px] lg:flex items-center justify-between">
                    <Logo lightLogo={lightLogo} darkLogo={darkLogo} />
                    <div className="flex flex-row items-center gap-5">
                        <Link href="/" className="text-[#54BA6E] dark:text-[#FFE9B7] hover:text-[#DD4C39] 
                    hover:font-extrabold hover:italic dark:hover:text-[#54BA6E]">Home</Link>
                        <Link href="/work/ahmad-elmesery-portfolio" className="text-[#54BA6E] dark:text-[#FFE9B7] hover:text-[#DD4C39] 
                    hover:font-extrabold hover:italic dark:hover:text-[#54BA6E]">Work</Link>
                        <Link href="/about" className="text-[#54BA6E] dark:text-[#FFE9B7] hover:text-[#DD4C39] 
                    hover:font-extrabold hover:italic dark:hover:text-[#54BA6E]">About</Link>
                        <ThemeSwitcher />
                    </div>
                </div>
                <MobileNav lightLogo={lightLogo} darkLogo={darkLogo} />
            </nav>
        </>
    );
}
