import { getProfile } from "@/sanity/sanity-utils.ts";
import { PortableText } from "@portabletext/react";
import {
  FaBehanceSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaWhatsappSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

export const revalidate = 10;

export default async function Summary() {
  const {
    summary,
    email,
    facebook,
    linkedin,
    behance,
    instagram,
    youtube,
    whatsapp,
  } = await getProfile();

  const links = [
    {
      icon: <FaLinkedin />,
      source: linkedin,
    },
    {
      icon: <FaInstagramSquare />,
      source: instagram,
    },
    {
      icon: <FaBehanceSquare />,
      source: behance,
    },

    {
      icon: <FaYoutubeSquare />,
      source: youtube,
    },
    {
      icon: <FaWhatsappSquare />,
      source: whatsapp,
    },
    {
      icon: <FaFacebookSquare />,
      source: facebook,
    },
  ];
  return (
    <>
      <PortableText value={summary} /> <br />
      <p className="description">
        Feel free to ask questions or contact for possible business inquiries{" "}
        {email}
      </p>
      <div className="summary-social-container">
        {links.map(
          ({ icon, source }, index) =>
            source && (
              <a href={source} target="_blank" className="social" key={index}>
                {icon}
              </a>
            )
        )}
      </div>
    </>
  );
}
