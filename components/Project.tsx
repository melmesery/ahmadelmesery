import { PortableText } from "@portabletext/react";

export default function Project({ project }: any) {
  const { client, name, url, content } = project;
  return (
    <section className="product_video">
      <h3 className="product_creator">{client}</h3>
      <h1 className="product_head">{name}</h1>
      <div className="prod">
        <iframe
          className="w-full aspect-video"
          title="vimeo-player"
          src={url}
          allowFullScreen
          data-aos="fade-up"
        ></iframe>
      </div>
      <div className="product_content" data-aos="fade-up">
        <PortableText value={content} />
      </div>
    </section>
  );
}
