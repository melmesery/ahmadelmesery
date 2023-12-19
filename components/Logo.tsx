'use client';

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export default function Logo({ coloredLogo, darkLogo }: any) {
  const { theme } = useTheme();
  return (
    <>
      {coloredLogo && darkLogo ? (
        <Link href="/" className="cursor-pointer">
          <Image
            src={theme === "light" ? coloredLogo : darkLogo}
            alt="Ahmad-Elmesery-logo"
            width={50}
            height={50}
          />
        </Link>
      ) : (
        <div className="animate-pulse">
          <div className="rounded-tl-lg rounded-bl-lg rounded-br-lg bg-slate-700 h-12 w-12" />
        </div>
      )}
    </>
  );
}

