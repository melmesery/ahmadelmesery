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
      mx-auto lg:px-[65px] py-[50px] text-center"
    >
      {/* <p className="mt-12 text-3xl sm:text-6xl font-bold 
        bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent">
          Ahmad Elmesery
        </p> */}
      {url && publish && (
        <Link href="/reel" className="relative reel_link mb-3 sm:mb-5">
          <>
            <Image src={image} width={1900} height={900} alt={name} />
            <div className="absolute w-full h-full top-0 left-0 opacity-0 bg-[#333] grid items-center justify-center hover:z-50 hover:opacity-75">
              <h1 className="reel_name">{name}</h1>
            </div>
          </>
        </Link>
      )}

      <Projects projects={projects} />
    </div>
  );
}
