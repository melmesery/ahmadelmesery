"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Logo({ lightLogo, darkLogo }: any) {
  const [logoToggle, setLogoToggle] = useState(false)
  const { theme } = useTheme();

  useEffect(() => {
    if (theme === 'light') {
      setLogoToggle(true);
    } else {
      setLogoToggle(false);
    }
  }, [theme]);

  return (
    <>
      {lightLogo && darkLogo ? (
        <Link href="/" className="cursor-pointer">
          <Image
            src={logoToggle ? lightLogo : darkLogo}
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

