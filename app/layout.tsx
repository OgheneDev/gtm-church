import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Footer } from "@/components/GiveAndFooter";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});

const SITE_URL = "https://www.gtmbirmingham.com/";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "CAC Grace & Truth Ministry | Church in Walsall & Birmingham",
    template: "%s | CAC Grace & Truth Ministry",
  },
  description:
    "CAC Grace & Truth Ministry is a welcoming Christ Apostolic Church serving Walsall and Birmingham, led by Pastor Dennis Agho. Join us in person or online every Sunday at 10:00am.",
  keywords: [
    "church in Walsall",
    "church in Birmingham",
    "Christ Apostolic Church Walsall",
    "Christ Apostolic Church Birmingham",
    "Pastor Dennis Agho",
    "CAC Grace and Truth Ministry",
    "Sunday service Walsall",
    "Pentecostal church Birmingham",
  ],
  authors: [{ name: "CAC Grace & Truth Ministry" }],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: "CAC Grace & Truth Ministry",
    title: "CAC Grace & Truth Ministry | Church in Walsall & Birmingham",
    description:
      "A Christ Apostolic Church community in Walsall and Birmingham, led by Pastor Dennis Agho. Join us in person or online — Sundays at 10:00am.",
    images: [
      {
        url: "https://res.cloudinary.com/dgc8cd67w/image/upload/v1789054284/gtm-og-image_gdmf8i.png",
        width: 1200,
        height: 630,
        alt: "CAC Grace & Truth Ministry",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CAC Grace & Truth Ministry | Church in Walsall & Birmingham",
    description:
      "A Christ Apostolic Church community in Walsall and Birmingham, led by Pastor Dennis Agho.",
    images: [
      "https://res.cloudinary.com/dgc8cd67w/image/upload/v1789054284/gtm-og-image_gdmf8i.png",
    ],
  },
  icons: {
    icon: "https://res.cloudinary.com/dgc8cd67w/image/upload/v1788767437/outdor_pannel_qk6nti.avif",
    apple:
      "https://res.cloudinary.com/dgc8cd67w/image/upload/v1788767437/outdor_pannel_qk6nti.avif",
  },
  verification: {
    google: "TODO-google-search-console-verification-code",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Church",
  name: "CAC Grace & Truth Ministry",
  alternateName: "Christ Apostolic Church Grace & Truth Ministry",
  url: SITE_URL,
  logo: `https://res.cloudinary.com/dgc8cd67w/image/upload/v1788767437/outdor_pannel_qk6nti.avif`,
  image: `https://res.cloudinary.com/dgc8cd67w/image/upload/v1789054284/gtm-og-image_gdmf8i.png`,
  founder: {
    "@type": "Person",
    name: "Pastor Dennis Agho",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "TODO: street address",
    addressLocality: "Walsall",
    addressRegion: "West Midlands",
    postalCode: "TODO",
    addressCountry: "GB",
  },
  areaServed: ["Walsall", "Birmingham"],
  telephone: "07478734631",
  sameAs: [
    "https://www.facebook.com/TODO",
    "https://www.instagram.com/TODO",
    "https://www.youtube.com/TODO",
  ],
  event: {
    "@type": "Event",
    name: "Sunday Service",
    startDate: "10:00",
    eventSchedule: "Weekly on Sunday",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${poppins.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
