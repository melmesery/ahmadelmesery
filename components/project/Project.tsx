import { PortableText } from "@portabletext/react";

export default function Project({ project }: any) {
  const { client, name, url, content } = project;
  return (
    <section className="project-video">
      <h3 className="project-creator">{client}</h3>
      <h1 className="project-title">{name}</h1>
      <iframe
        title="vimeo-player"
        src={url}
        allowFullScreen
        data-aos="fade-up"
      ></iframe>
      <div className="project-content" data-aos="fade-up">
        <PortableText value={content} />
      </div>
    </section>
  );
}
