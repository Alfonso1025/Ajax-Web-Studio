import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ajax Web Studio | Custom Websites for Cleaning Businesses in Southwest Sydney",
  description: "Ajax Web Studio builds fully custom websites and web applications for cleaning businesses, trades and local professionals across Southwest Sydney. Based in Campbelltown.",
  keywords: "web design Campbelltown, websites southwest sydney, cleaning business websites, web designer Campbelltown, Google Business Profile setup",
  verification: {
    google: "G_cDj3wnoRmw-55ijVjunwj2F7YSlituVC7eLoJlc9U",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
