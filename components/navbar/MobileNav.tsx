"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo.tsx";
import ThemeSwitcher from "./ThemeSwitcher.tsx";
import Toggler from "./Toggler.tsx";

export default function MobileNav({ lightLogo, darkLogo, links }: any) {
  const [toggle, setToggle] = useState(false);
  const menuToggle = () => {
    setToggle(!toggle);
  };
  const closeMenu = () => {
    setToggle(false);
  };

  return (
    <div className="mobile-nav-container">
      <Logo lightLogo={lightLogo} darkLogo={darkLogo} />
      <div className="mobile-icons">
        <ThemeSwitcher />
        <Toggler toggle={toggle} menuToggle={menuToggle} />
      </div>
      {toggle && (
        <div
          className="mobile-links"
          data-aos="fade-down"
        >
          {links?.map((link: any) => (
            <>
              {link.url && link.publish && (
                <Link
                  key={link.name}
                  href={link.src}
                  onClick={closeMenu}
                  className="link"
                >
                  {link.name}
                </Link>
              )}
            </>
          ))}
        </div>
      )}
    </div>
  );
}
