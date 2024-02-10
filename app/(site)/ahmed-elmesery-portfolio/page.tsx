"use server";

import ReelDetails from "@/components/ReelDetails.tsx";
import { getReel } from "@/sanity/sanity-utils.ts";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { notFound } from "next/navigation";
import AOSWrapper from "@/utils/AOS.tsx";

export default async function page() {
    const { url, publish, content } = await getReel();

    return (
        <AOSWrapper>
            {publish && url ? (
                <div
                    className="max-w-[90%] lg:max-w-[1350px] mx-auto lg:px-[65px] py-[50px]"
                >
                    <iframe
                        className="w-full aspect-video"
                        title="vimeo-player"
                        src={url}
                        allowFullScreen
                        data-aos="fade-up"
                    ></iframe>
                    <div className="mt-10" data-aos="fade-up">
                        <PortableText value={content} />
                    </div>
                    <ReelDetails />
                    <section className="view_projects" data-aos="fade-up">
                        <Link href="/" className="view_button">
                            View more projects
                        </Link>
                    </section>
                </div>
            ) : (
                notFound()
            )}
        </AOSWrapper>
    );
}
