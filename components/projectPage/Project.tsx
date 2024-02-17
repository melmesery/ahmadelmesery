import { PortableText } from "@portabletext/react";
import VideoFrame from "../VideoFrame.tsx";

export default function Project({ project }: any) {
    const { client, name, url, content } = project;

    return (
        <div>
            <h3 className="project-creator" data-aos="fade-right">{client}</h3>
            <h1 className="project-headline" data-aos="fade-right">{name}</h1>
            <VideoFrame url={url} />
            <div className="project-content" data-aos="fade-up">
                <PortableText value={content} />
            </div>
        </div>
    );
}
