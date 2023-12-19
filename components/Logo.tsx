'use client';

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import useLogo from "../hooks/useLogo.tsx";

export default function Logo() {
  const { theme } = useTheme();
  const { light, dark } = useLogo();

  return (
    <>
      {light && dark ? (
        <Link href="/" className="cursor-pointer">
          <Image
            src={theme === "light" ? light : dark}
            alt="Ahmad-Elmesery-logo"
            width={50}
            height={50}
          />
        </Link>
      ) : (
        <div className="animate-pulse">
          <div className="rounded-full bg-slate-700 h-10 w-10" />
        </div>
      )}
    </>
  );
}
