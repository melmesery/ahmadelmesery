import Footer from "@/components/Footer.tsx";
import Images from "@/components/project/Images.tsx";
import Project from "@/components/project/Project.tsx";
import Team from "@/components/project/Team.tsx";
import AOSWrapper from "@/hooks/useAOS.tsx";
import { getProject } from "@/sanity/sanity-utils.ts";
import "@/styles/Project.css";
import { Props } from "@/types/Props.ts";
import Link from "next/link";

export const revalidate = 10;

export default async function ProjectPage({ params }: Props) {
  const project = await getProject(params.slug);

  return (
    <AOSWrapper>
      <div className="project-container">
        <Project project={project} />
        <Team project={project} />
        <Images project={project} />
        <section className="view-projects" data-aos="fade-up">
          <Link href="/" className="view-button">
            View more projects
          </Link>
        </section>
      </div>
      <Footer />
    </AOSWrapper>
  );
}
