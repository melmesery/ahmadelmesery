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
    lg:px-[65px]  py-[50px] 
     ">
      <Projects projects={projects} />
    </div>
  );
}
