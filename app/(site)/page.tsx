import Hero from "@/components/Hero.tsx";
import Projects from "@/components/Projects.tsx";
import { getProjects } from "../../sanity/sanity-utils.ts";

export const revalidate = 10;

export default async function Home() {
  const projects = await getProjects();
  return (
    <div>
      {/* <Projects projects={projects} /> */}
      <div className="min-h-[calc(100vh-64px)] sm:min-h-[calc(100vh-80px)] w-full grid items-center justify-center text-center">
        <p className="mb-0 text-3xl sm:text-6xl font-bold bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent">
          Ahmad Elmesery
        </p>
      </div>
    </div>
  );
}
