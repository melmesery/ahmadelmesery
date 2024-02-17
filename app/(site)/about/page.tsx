import Profile from "@/components/aboutPage/Profile.tsx";
import Summary from "@/components/aboutPage/Summary.tsx";
import "@/css/About.css";

export default function page() {
  return (
    <div className="about-container">
      <div className="about-data" data-aos="fade-right">
        <div className="about-profile">
          <Profile />
        </div>
        <div className="about-summary">
          <Summary />
        </div>
      </div>
    </div>
  );
}
