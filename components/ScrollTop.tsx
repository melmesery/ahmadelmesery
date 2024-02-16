"use client";

import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import "../styles/Scroll.css";

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
      className={`scroll ${isVisible ? "visible" : "invisible"}`}
    >
      <IoIosArrowUp />
    </div>
  );
}
