import { PortableText } from "@portabletext/react";
import { getProfile } from "../sanity/sanity-utils.ts";
// import {
//   FaBehance,
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaWhatsapp,
//   FaYoutube,
// } from "react-icons/fa";
 import "../styles/Footer.css";
 import { FaBehanceSquare, FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaWhatsappSquare, FaYoutubeSquare } from "react-icons/fa";



export const revalidate = 10;

export default async function Summary() {
  const { summary, email, facebook, linkedin, behance, instagram, youtube, whatsapp } = await getProfile();
  
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
    <>
      <PortableText value={summary} /> <br />
      <p className="mt-8">
        Feel free to ask questions or contact for possible business inquiries{" "}
        {email}
      </p>
      <div className="flex flex-row items-center gap-3 mt-5 sm:mt-3">
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
