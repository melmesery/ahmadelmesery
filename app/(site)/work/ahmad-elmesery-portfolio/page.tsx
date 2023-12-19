import Projects from "@/components/Projects.tsx";
import { getProjects } from "@/sanity/sanity-utils.ts";

export const revalidate = 10;

export default async function Work() {
  const projects = await getProjects();

  return (
    <div className="
    max-w-[90%] 
    lg:max-w-[1350px] 
    mx-auto 
    lg:px-[65px]  pb-[50px]">
      <h1
        className="text-4xl sm:text-5xl font-bold mt-[17px] mb-[39px]
    animate-fade-left animate-duration-[0.5s] animate-ease-in-out"
      >
        Projects
      </h1>
      <Projects projects={projects} />
    </div>
  );
}
