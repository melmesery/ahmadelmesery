"use server";

import { getReel } from "@/cms/sanity-utils.ts";
import Footer from "@/components/Footer.tsx";
import VideoFrame from "@/components/VideoFrame.tsx";
import ViewBtn from "@/components/ViewBtn.tsx";
import ReelDetails from "@/components/reelPage/ReelDetails.tsx";
import "@/css/Reel.css";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";

export default async function page() {
  const { url, publish, content } = await getReel();

  return (
    <>
      {publish && url ? (
        <>
          <div className="reel-container">
            <VideoFrame url={url} />
            <div className="reel-content" data-aos="fade-up">
              <PortableText value={content} />
            </div>
            <ReelDetails />
            <ViewBtn />
          </div>
          <Footer />
        </>
      ) : (
        notFound()
      )}
    </>
  );
}
