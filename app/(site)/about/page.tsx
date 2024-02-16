import Profile from "@/components/about/Profile.tsx";
import Summary from "@/components/about/Summary.tsx";
import AOSWrapper from "@/hooks/useAOS.tsx";
import "@/styles/About.css";

export default function About() {
  return (
    <AOSWrapper>
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
    </AOSWrapper>
  );
}
