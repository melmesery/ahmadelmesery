"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getProfile } from "../sanity/sanity-utils.ts";

export default function Logo() {
  const { theme } = useTheme();
  const [dark, setDark] = useState("");
  const [light, setLight] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const { coloredLogo, darkLogo } = await getProfile();
      setDark(darkLogo);
      setLight(coloredLogo);
    };
    fetchData();
  }, []);

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
          <div className="rounded-tl-lg rounded-bl-lg rounded-br-lg bg-slate-700 h-12 w-12" />
        </div>
      )}
    </>
  );
}

