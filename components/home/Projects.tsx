"use client";

import AOSWrapper from "@/hooks/useAOS.tsx";
import Image from "next/image";
import Link from "next/link";

export default function Projects({ projects }: any) {
  return (
    <AOSWrapper>
      <div className="projects-container">
        {projects &&
          projects.map((project: any) => (
            <Link
              key={project._id}
              href={`work/project/${project.slug}`}
              className="project"
            >
              <>
                <div className="project-gif-img" data-aos="fade-up"
                >
                  <Image
                    src={project.gif}
                    alt={project.name}
                    width={1960}
                    height={1080}
                  />
                  <Image
                    src={project.mainImage}
                    alt={project.name}
                    width={1960}
                    height={1080}
                    className="project-img"
                  />
                </div>

                <div className="project-title">
                  <h1>{project.name}</h1>
                </div>
              </>
            </Link>
          ))}
      </div>
    </AOSWrapper>
  );
}
