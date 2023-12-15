import {
  FaBehance,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import "../styles/Footer.css";
import { getProfile } from "../sanity/sanity-utils.ts";

export const revalidate = 10;

export default async function Footer() {
  const { linkedin, facebook, behance, instagram, youtube, whatsapp } =
    await getProfile();
  return (
    <div className="footer">
      <p className="mb-0 text-sm sm:text-base">Ahmad Elmesery &copy; {new Date().getFullYear()}</p>
      <div className="flex flex-row items-center justify-center gap-3 sm:gap-5">
        {linkedin && (
          <a href={linkedin} target="_blank" title={linkedin}>
            <FaLinkedinIn />
          </a>
        )}
        {facebook && (
          <a href={facebook} target="_blank" title={facebook}>
            <FaFacebookF />
          </a>
        )}
        {behance && (
          <a href={behance} target="_blank" title={behance}>
            <FaBehance />
          </a>
        )}
        {youtube && (
          <a href={youtube} target="_blank" title={youtube}>
            <FaYoutube />
          </a>
        )}
        {whatsapp && (
          <a
            href={`https://wa.me/2${whatsapp}`}
            target="_blank"
            title={whatsapp}
          >
            <FaWhatsapp />
          </a>
        )}
        {instagram && (
          <a href={instagram} target="_blank" title={instagram}>
            <FaInstagram />
          </a>
        )}
      </div>
    </div>
  );
}
