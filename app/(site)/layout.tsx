import Footer from "@/components/Footer.tsx";
import ScrollTop from "@/components/ScrollTop.tsx";
import type { Metadata } from "next";
import { Montserrat as FONT } from "next/font/google";
// import { Padauk as FONT } from "next/font/google";
import Navbar from "../../components/Navbar.tsx";
import "../globals.css";
import Providers from "./providers.tsx";
import 'animate.css';

const font = FONT({
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Ahmad Elmesery - Motion Designer",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
 }: {
  children: React.ReactNode;
 }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={font.className}>
        <Providers>
          <Navbar />
          <main>{children}</main>
           {/* <Footer /> */}
          <ScrollTop />
        </Providers>
      </body>
    </html>
  );
}