"use server";

import { notFound } from "next/navigation";
import { getReel } from "../../../sanity/sanity-utils.ts";
import { PortableText } from "@portabletext/react";
import ReelDetails from "../../../components/ReelDetails.tsx";
import Link from "next/link";

export default async function page() {
    const { url, publish, content } = await getReel();

    return (
        <>
            {publish && url ? (
                <div
                    className="max-w-[90%] lg:max-w-[1350px] mx-auto lg:px-[65px] py-[50px]"
                >
                    <iframe
                        className="w-full aspect-video"
                        title="vimeo-player"
                        src={url}
                        allowFullScreen
                    ></iframe>
                    <div className="mt-10">
                        <PortableText value={content} />
                    </div>
                    <ReelDetails />
                    <section className="view_projects">
                        <Link href="/" className="view_button">
                            View more projects
                        </Link>
                    </section>
                </div>
            ) : (
                notFound()
            )}
        </>
    );
}
