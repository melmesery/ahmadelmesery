"use client";

import { useState, useEffect } from "react";
import { TfiArrowUp } from "react-icons/tfi";

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
        text-2xl w-10 h-10 sm:text-3xl sm:w-14 sm:h-14 grid items-center justify-center rounded-full fixed right-5 sm:right-10 bottom-14 sm:bottom-[100px] ${isVisible ? "visible" : "invisible"
        }`}
    >
      <TfiArrowUp />
    </div>
  );
}
