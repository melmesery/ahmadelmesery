"use server";

import Footer from "@/components/Footer.tsx";
import ReelDetails from "@/components/reel/ReelDetails.tsx";
import AOSWrapper from "@/hooks/useAOS.tsx";
import { getReel } from "@/sanity/sanity-utils.ts";
import "@/styles/Reel.css";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function page() {
    const { url, publish, content } = await getReel();

    return (
        <AOSWrapper>
            {publish && url ? (
                <>
                    <div
                        className="reel-container"
                    >
                        <iframe
                            title="vimeo-player"
                            src={url}
                            allowFullScreen
                            data-aos="fade-up"
                        ></iframe>
                        <div className="reel-content" data-aos="fade-up">
                            <PortableText value={content} />
                        </div>
                        <ReelDetails />
                        <section className="view-projects" data-aos="fade-up">
                            <Link href="/" className="view-button">
                                View more projects
                            </Link>
                        </section>
                    </div>
                    <Footer />
                </>
            ) : (
                notFound()
            )}

        </AOSWrapper>
    );
}
