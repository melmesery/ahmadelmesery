import Projects from "@/components/Projects.tsx";
import { getProjects, getReel } from "@/sanity/sanity-utils.ts";
import "@/styles/Reel.css";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 10;

export default async function Home() {
  const projects = await getProjects();
  const { url, publish, image, name } = await getReel();
  return (
    <div
      className="max-w-[90%] 
      lg:max-w-[1350px] 
      mx-auto lg:px-[65px] pt-[30px] pb-[50px]"
    >
      {url && publish && (
        <div className="animate-fade-up">
          <div className="reel">
            <Image src={image} width={1900} height={900} alt={name} />
            <Link href="work/ahmed-elmesery-portfolio" className="reel_cover">
              <h1>{name}</h1>
            </Link>
          </div>
        </div>
      )}

      <Projects projects={projects} />
    </div>
  );
}
