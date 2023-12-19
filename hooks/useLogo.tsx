import { useEffect, useState } from "react";
import { getProfile } from "../sanity/sanity-utils.ts";

export const revalidate = 10;

export default function useLogo() {
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
  return { dark, light };
}
