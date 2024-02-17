import { getProjects, getReel } from "@/cms/sanity-utils.ts";
import Footer from "@/components/Footer.tsx";
import Hero from "@/components/homePage/Hero.tsx";
import Projects from "@/components/homePage/Projects.tsx";
import "@/css/Home.css";

export const revalidate = 10;

export default async function Home() {
  const projects = await getProjects();
  const { url, publish } = await getReel();

  return (
    <>
      <div className="home-container">
        {url && publish && <Hero />}
        <Projects projects={projects} />
      </div>
      <Footer />
    </>
  );
}
