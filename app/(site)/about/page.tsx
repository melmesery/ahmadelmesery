// "use client";

import Profile from "@/components/Profile.tsx";
import Summary from "@/components/Summary.tsx";
import "@/styles/About.css";
// import AOS from "aos";
// import { useEffect } from "react";

export default function About() {
  // useEffect(() => {
  //   AOS.init();
  // }, []);

  return (
    <div className="about_container">
      <div className="about_data">
        <div className="about_profile" 
        // data-aos="flip-up"
        >
          <Profile />
        </div>
        <div className="about_summary" 
        // data-aos="fade-up"
        >
          <Summary />
        </div>
      </div>
    </div>
  );
}
