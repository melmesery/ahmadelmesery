import Preloader from "@/components/Preloader.tsx";
import ScrollTopBtn from "@/components/ScrollTopBtn.tsx";
import Navbar from "@/components/navbar/Navbar.tsx";
import AOSWrapper from "@/hooks/useAOS.tsx";
import type { Metadata } from "next";
import { Montserrat as FONT } from "next/font/google";
import "../globals.css";
import Providers from "./providers.tsx";

const font = FONT({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Ahmad Elmesery",
  description: "Motion Graphics Designer",
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
          <AOSWrapper>
            <Preloader>
              <main>
                <Navbar />
                {children}
                <ScrollTopBtn />
              </main>
            </Preloader>
          </AOSWrapper>
        </Providers>
      </body>
    </html>
  );
}
