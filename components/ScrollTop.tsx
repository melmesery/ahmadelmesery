"use client";

import { useState, useEffect } from "react";
import { PiArrowFatLinesUpThin } from "react-icons/pi";

export default function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      onClick={scrollToTop}
      className={`cursor-pointer bg-[rgba(1,50,64,0.4)] dark:bg-[rgba(239,240,242,0.4)] text-[#EFF0F2] dark:text-[#013240] 
        hidden sm:flex text-3xl w-12 h-12 items-center justify-center rounded-full fixed right-10 bottom-[120px] ${isVisible ? "visible" : "invisible"
        }`}
    >
<PiArrowFatLinesUpThin />
    </div>
  );
}
