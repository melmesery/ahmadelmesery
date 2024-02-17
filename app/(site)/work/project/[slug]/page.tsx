
import { getProject } from "@/cms/sanity-utils.ts";
import Footer from "@/components/Footer.tsx";
import Images from "@/components/projectPage/Images.tsx";
import Project from "@/components/projectPage/Project.tsx";
import Team from "@/components/projectPage/Team.tsx";
import "@/css/Project.css";
import { Props } from "@/types/Props.ts";
import ViewBtn from "@/components/ViewBtn.tsx";

export const revalidate = 10;

export default async function ProjectPage({ params }: Props) {
  const project = await getProject(params.slug);

  return (
    <>
      <div className="project-container">
        <Project project={project} />
        <Team project={project} />
        <Images project={project} />
        <ViewBtn />
      </div>
      <Footer />
    </>
  );
}
