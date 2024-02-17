import "../css/VideoFrame.css";

export default function VideoFrame({ url }: any) {
  return (
    <iframe
      title="vimeo-player"
      src={url}
      allowFullScreen
      data-aos="fade-up"
    ></iframe>
  );
}
