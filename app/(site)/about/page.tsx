import Profile from "@/components/Profile.tsx";
import Summary from "@/components/Summary.tsx";
import "@/styles/About.css";
import RootLayout from "../layout.tsx";

export default function About() {
  return (
    // <RootLayout showFooter={false}>
      <div className="about_container">
        {/* <h1 className="about_headline">About</h1> */}
        <div className="about_data">
          <div className="about_profile animate-fade-up">
            <Profile />
          </div>
          <div className="about_summary animate-fade-up">
            <Summary />
          </div>
        </div>
      </div>
    // </RootLayout>
  );
}
