// import {
//   FaBehance,
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaWhatsapp,
//   FaYoutube,
// } from "react-icons/fa";
import { getProfile } from "../sanity/sanity-utils.ts";
import "../styles/Footer.css";
import { FaBehanceSquare, FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaWhatsappSquare, FaYoutubeSquare } from "react-icons/fa";

export const revalidate = 10;

export default async function Footer() {
  const { facebook, linkedin, behance, instagram, youtube, whatsapp } =
    await getProfile();

    const links = [
      {
        // icon: <FaLinkedinIn />,
        icon: <FaLinkedin />,
        source: linkedin,
      },
      {
        // icon: <FaInstagram />,
        icon: <FaInstagramSquare />,
        source: instagram,
      },
      {
        // icon: <FaBehance />,
        icon: <FaBehanceSquare />,
        source: behance,
      },
    
      {
        // icon: <FaYoutube />,
        icon: <FaYoutubeSquare />,
        source: youtube,
      },
      {
        // icon: <FaWhatsapp />,
        icon: <FaWhatsappSquare />,
        source: whatsapp,
      },
      {
        // icon: <FaFacebookF />,
        icon: <FaFacebookSquare />,
        source: facebook,
      },
    ];

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="flex flex-row items-center justify-center gap-3">
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
