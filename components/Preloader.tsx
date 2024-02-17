"use client";

import React, { useEffect, useState } from "react";
import "../css/Preloader.css";

const Preloader = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <div className="preloader-container">
      <div className="preloader"></div>
    </div>
  ) : (
    children
  );
};

export default Preloader;
