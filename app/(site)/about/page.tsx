import Profile from "@/components/aboutPage/Profile.tsx";
import Summary from "@/components/aboutPage/Summary.tsx";
import "@/css/About.css";

export default function page() {
  return (
    <div className="about-container">
      <div className="about-data">
        <div className="about-profile" data-aos="fade-right">
          <Profile />
        </div>
        <div className="about-summary" data-aos="fade-right">
          <Summary />
        </div>
      </div>
    </div>
  );
}
