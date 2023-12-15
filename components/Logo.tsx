'use client';

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getProfile } from "../sanity/sanity-utils.ts";

export const revalidate = 10;

export default function Logo() {
  const { theme } = useTheme();
  const [coloredLogo, setColoredLogo] = useState("");
  const [darkLogo, setDarkLogo] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { coloredLogo, darkLogo } = await getProfile();
        setColoredLogo(coloredLogo);
        setDarkLogo(darkLogo);
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Link href="/" className="cursor-pointer">
      <Image
        src={theme === "dark" ? darkLogo : coloredLogo}
        alt="Ahmad-Elmesery-logo"
        width={50}
        height={50}
      />
    </Link>
  );
}
