import Footer from "@/components/Footer.tsx";
import Hero from "@/components/home/Hero.tsx";
import Projects from "@/components/home/Projects.tsx";
import AOSWrapper from "@/hooks/useAOS.tsx";
import { getProjects, getReel } from "@/sanity/sanity-utils.ts";
import "@/styles/Home.css";

export const revalidate = 10;

export default async function Home() {
  const projects = await getProjects();
  const { url, publish } = await getReel();

  return (
    <AOSWrapper>
      <div className="home-container">
        {url && publish && (
          <Hero />
        )}
        <Projects projects={projects} />
      </div>
      <Footer />
    </AOSWrapper>
  );
}
