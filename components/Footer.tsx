import {
  FaBehance,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { getProfile } from "../sanity/sanity-utils.ts";
import "../styles/Footer.css";

export const revalidate = 10;

export default async function Footer() {
  const { facebook, linkedin, behance, instagram, youtube, whatsapp } =
    await getProfile();

  const links = [
    {
      icon: <FaLinkedinIn />,
      source: linkedin,
    },
    {
      icon: <FaInstagram />,
      source: instagram,
    },
    {
      icon: <FaBehance />,
      source: behance,
    },

    {
      icon: <FaYoutube />,
      source: youtube,
    },
    {
      icon: <FaWhatsapp />,
      source: whatsapp,
    },
    {
      icon: <FaFacebookF />,
      source: facebook,
    },
  ];

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="flex flex-row items-center justify-center gap-3 sm:gap-5">
          {links.map(
            ({ icon, source }, index) =>
              source && (
                <a href={source} target="_blank" className="social" key={index}>
                  {icon}
                </a>
              )
          )}
        </div>
      </div>
    </div>
  );
}
