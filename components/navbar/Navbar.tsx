import { getProfile, getReel } from "@/cms/sanity-utils.ts";
import "@/css/Navbar.css";
import Links from "./Links.tsx";
import Logo from "./Logo.tsx";
import MobileNav from "./MobileNav.tsx";

export default async function Navbar() {
  const { lightLogo, darkLogo } = await getProfile();
  const { url, publish } = await getReel();

  const links = [
    {
      src: "/",
      name: "Work",
      url: true,
      publish: true,
    },
    {
      src: "/ahmed-elmesery-portfolio",
      name: "Reel",
      url: url,
      publish: publish,
    },
    {
      src: "/about",
      name: "About",
      url: true,
      publish: true,
    },
    {
      src: "/contact",
      name: "Contact",
      url: true,
      publish: true,
    },
  ];

  return (
    <nav>
      <div className="navbar-container">
        <Logo lightLogo={lightLogo} darkLogo={darkLogo} />
        <Links links={links} />
      </div>
      <MobileNav lightLogo={lightLogo} darkLogo={darkLogo} links={links} />
    </nav>
  );
}
