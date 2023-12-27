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
  const { linkedin, facebook, behance, instagram, youtube, whatsapp } =
    await getProfile();
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="flex flex-row items-center justify-center gap-3 sm:gap-5">
          {linkedin && (
            <a href={linkedin} target="_blank" className="social">
              <FaLinkedinIn />
            </a>
          )}
          {facebook && (
            <a href={facebook} target="_blank" className="social">
              <FaFacebookF />
            </a>
          )}
          {behance && (
            <a href={behance} target="_blank" className="social">
              <FaBehance />
            </a>
          )}
          {youtube && (
            <a href={youtube} target="_blank" className="social">
              <FaYoutube />
            </a>
          )}
          {whatsapp && (
            <a
              href={`https://wa.me/2${whatsapp}`}
              target="_blank"
              className="social"
            >
              <FaWhatsapp />
            </a>
          )}
          {instagram && (
            <a
              href={instagram}
              target="_blank" 
              className="social"
            >
              <FaInstagram />
            </a>
          )}
        </div>
        {/* <p className="mb-0 text-sm sm:text-base font-bold">Ahmad Elmesery &copy; {new Date().getFullYear()}</p> */}
      </div>
    </div>
  );
}
