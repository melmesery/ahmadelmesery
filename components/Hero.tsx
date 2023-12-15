import Image from "next/image";
import Link from "next/link";
import { getReel } from "../sanity/sanity-utils.ts";

export const revalidate = 10;

export default async function Hero() {
  const { image } = await getReel();

  return (
    <div className="hero_container">
      <Link href="/work/ahmad-elmesery-reel" className="hero">
        <Image
          src={image}
          alt="Ahmad-Elmesery-Reel"
          width={1220}
          height={470}
        />
        <div className="hero_title">
          <h1>Motion Reel / {new Date().getFullYear()}</h1>
        </div>
      </Link>
    </div>
  );
}
