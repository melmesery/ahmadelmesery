"use client";

import Image from "next/image";
import Link from "next/link";

export default function Projects({ projects }: any) {
  return (
    <div className="projects_container">
      {projects &&
        projects.map((project: any) => (
          <Link
            key={project._id}
            href={`project/${project.slug}`}
            className="project"
          >
            <div>
              <Image
                src={project.gif}
                alt={project.name}
                width={1960}
                height={1080}
                className="project_gif"
              />
              <Image
                src={project.mainImage}
                alt={project.name}
                width={1960}
                height={1080}
                className="project_img"
              />
              <div className="project_title">
                <h1>{project.name}</h1>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}
