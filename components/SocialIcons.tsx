import {
  FaBehanceSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaWhatsappSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { getProfile } from "../cms/sanity-utils.ts";
import "../css/SocialIcons.css";

export const revalidate = 10;

export default async function SocialIcons() {
  const { facebook, linkedin, behance, instagram, youtube, whatsapp } =
    await getProfile();

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
    <div className="social-container">
      {links.map(
        ({ icon, source }, index) =>
          source && (
            <a href={source} target="_blank" className="social" key={index}>
              {icon}
            </a>
          )
      )}
    </div>
  );
}
