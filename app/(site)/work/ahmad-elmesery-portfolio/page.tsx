import Projects from "@/components/Projects.tsx";
import { getProjects } from "@/sanity/sanity-utils.ts";

export const revalidate = 10;

export default async function Work() {
  const projects = await getProjects();

  return (
    <div className="py-5 sm:py-10">
      <h1
        className="text-4xl sm:text-5xl mb-5 sm:mb-14 font-bold 
    animate-fade-left animate-delay-500 animate-ease-in-out"
      >
        Projects
      </h1>
      <Projects projects={projects} />
    </div>
  );
}
