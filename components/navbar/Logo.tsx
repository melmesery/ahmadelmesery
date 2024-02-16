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
        <Link href="/">
          <Image
            src={logoToggle ? lightLogo : darkLogo}
            width={50}
            height={50}
            alt="Ahmad-Elmesery-logo"
          />
        </Link>
      ) : (
        <div className="logo-animation">
          <div className="logo-skeleton" />
        </div>
      )}
    </>
  );
}

