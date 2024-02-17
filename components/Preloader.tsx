"use client";

import React, { useEffect, useState } from "react";
import "../css/Preloader.css";

const Preloader = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <div className="preloader-container">
      <div className="preloader-name">Ahmed Elmesery</div>
      <div className="preloader-title">Motion Graphics Designer</div>
    </div>
  ) : (
    children
  );
};

export default Preloader;
