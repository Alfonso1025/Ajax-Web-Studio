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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "LocalBusiness",
                  "@id": "https://www.ajaxwebstudio.com/#business",
                  "name": "Ajax Web Studio",
                  "url": "https://www.ajaxwebstudio.com",
                  "logo": "https://www.ajaxwebstudio.com/icon.png",
                  "image": "https://www.ajaxwebstudio.com/icon.png",
                  "description": "Ajax Web Studio builds fully custom websites and web applications for cleaning businesses, trades and local professionals across Southwest Sydney. Based in Campbelltown NSW.",
                  "telephone": "+61424237010",
                  "email": "team@ajaxwebstudio.com",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Campbelltown",
                    "addressRegion": "NSW",
                    "postalCode": "2560",
                    "addressCountry": "AU"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": -34.0641,
                    "longitude": 150.8142
                  },
                  "areaServed": [
                    "Campbelltown",
                    "Camden",
                    "Narellan",
                    "Ingleburn",
                    "Minto",
                    "Leumeah",
                    "Gregory Hills",
                    "Harrington Park",
                    "Macquarie Fields"
                  ],
                  "serviceType": [
                    "Web Design",
                    "Web Development",
                    "Custom Website Development",
                    "Google Business Profile Setup",
                    "Local SEO",
                    "Web Application Development"
                  ],
                  "priceRange": "$$",
                  "openingHoursSpecification": [
                    {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday"
                      ],
                      "opens": "09:00",
                      "closes": "18:00"
                    }
                  ],
                  "sameAs": [
                    "https://www.google.com/maps?cid=3375096205030165435"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.ajaxwebstudio.com/#website",
                  "url": "https://www.ajaxwebstudio.com",
                  "name": "Ajax Web Studio",
                  "description": "Custom websites for cleaning businesses and trades in Southwest Sydney",
                  "publisher": {
                    "@id": "https://www.ajaxwebstudio.com/#business"
                  }
                }
              ]
            })
          }}
        />
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
