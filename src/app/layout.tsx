import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import FloatingNav from "@/components/FloatingNav";
import "./globals.css";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "900"],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: {
    default: "TwentyPercent Designs | Effective Advertising Agency in Mumbai",
    template: "%s | TwentyPercent Designs",
  },
  description: "TwentyPercent is Mumbai's most effective advertising agency. We specialize in web design, branding, and strategic advertising to maximize your business results.",
  keywords: [
    "Advertising Agency Mumbai",
    "Web Design Navi Mumbai",
    "Branding Agency Pune",
    "Creative Copywriter Mumbai",
    "Logo Designer Mumbai",
    "Brochure Design Mumbai",
    "Digital Marketing Agency",
    "Effective Advertising India",
  ],
  icons: {
    icon: "/favicons/favicon.ico",
    apple: "/favicons/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AdvertisingAgency",
    "name": "TwentyPercent Designs",
    "image": "https://twentypercent.in/img/svg/twenty-nav-logo.svg",
    "url": "https://twentypercent.in",
    "telephone": "+918879094014",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jui-Kamothe, Sector 7, Kamothe",
      "addressLocality": "Navi Mumbai",
      "postalCode": "410209",
      "addressCountry": "IN"
    },
    "openingHoursSpecification": {
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
  };

  return (
    <html lang="en" className={workSans.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={workSans.className}>
        <div id="sitewrapper">
          <Loader />
          <Navbar />
          {children}
          <Footer />
        </div>
        <FloatingNav />
      </body>
    </html>
  );
}
