import { getReel } from "@/cms/sanity-utils.ts";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 10;

export default async function Hero() {
    const { image, name } = await getReel();

    return (
        <div data-aos="fade-up">
            <div className="hero-container">
                <Image src={image} width={1900} height={900} alt={name} />
                <Link href="ahmed-elmesery-portfolio" className="hero-reel-cover">
                    <h1>{name}</h1>
                </Link>
            </div>
        </div>
    );
}
