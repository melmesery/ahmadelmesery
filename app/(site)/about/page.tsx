import Profile from "@/components/Profile.tsx";
import Summary from "@/components/Summary.tsx";
import "@/styles/About.css";

export default function About() {
  return (
    <div className="about_container">
      <h1 className="about_headline">About</h1>
      <div className="about_data">
        <div className="about_profile">
          <Profile />
        </div>
        <div className="about_summary">
          <Summary />
        </div>
      </div>
    </div>
  );
}
