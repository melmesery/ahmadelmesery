'use client';


import Image from "next/image";
import Link from "next/link";
import { getProfile } from "../sanity/sanity-utils.ts";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

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
        // Handle error state if needed
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();

    // Cleanup function
    return () => {
      // Perform cleanup if necessary
    };
  }, []); // Empty dependency array means this effect runs once when the component mounts

  if (loading) {
    // You can replace this with a loading spinner or any other loading indicator
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
