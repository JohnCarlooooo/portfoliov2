import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import LenisProvider from "./LenisProvider";
import Script from "next/script";
import Preloader from "./Preloader/Preloader";
const ibmPlexSans = IBM_Plex_Sans({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibmPlexMono",
});

export const metadata = {
  title: "John Carlo Carbonel",
  description:
    "John Carlo Carbonel's portfolio. A Full-Stack Web Developer & an aspiring DevOps Engineer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexSans.variable} antialiased font-ibmPlexMono bg-customGray text-customWhite`}
      >
        <Preloader />
        <div className="z-50 pointer fixed w-2 h-2 bg-orange rounded-full top-0 left-0"></div>
        <div className="z-50 pointer-outline fixed w-6 h-6 border-orange border-[1px] rounded-full top-0 left-0 transition-all"></div>
        {typeof window !== "undefined" && (
          <LenisProvider>{children}</LenisProvider>
        )}
        {typeof window === "undefined" && children}
        <Script type="text/javascript" src="/scripts/pointer.js" />
      </body>
    </html>
  );
}
