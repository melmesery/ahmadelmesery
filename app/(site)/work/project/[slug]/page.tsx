import Images from "@/components/Images.tsx";
import Project from "@/components/Project.tsx";
import Team from "@/components/Team.tsx";
import { getProject } from "@/sanity/sanity-utils.ts";
import "@/styles/Project.css";
import { Props } from "@/types/Props.ts";
import Link from "next/link";

export const revalidate = 10;

export default async function ProjectPage({ params }: Props) {
  const project = await getProject(params.slug);
   return (
    <div className="product_container">
      <Project project={project} />
      <Team project={project} />
      <Images project={project} />
      <section className="view_projects">
        <Link href="/" className="view_button">
          View more projects
        </Link>
      </section>
    </div>
  );
}
