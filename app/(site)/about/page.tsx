import Profile from "@/components/Profile.tsx";
import Summary from "@/components/Summary.tsx";
import "@/styles/About.css";
import AOSWrapper from "@/utils/AOS.tsx";

export default function About() {
  return (
    <AOSWrapper>
      <div className="about_container">
        <div className="about_data">
          <div className="about_profile" data-aos="flip-up">
            <Profile />
          </div>
          <div className="about_summary" data-aos="flip-up">
            <Summary />
          </div>
        </div>
      </div>
    </AOSWrapper>
  );
}
