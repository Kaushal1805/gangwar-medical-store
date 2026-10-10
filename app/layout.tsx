import type { Metadata, Viewport } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0F9D58",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Gangwar Medical Store | Pharmacy in Rajghat, Aurangabad",
    template: "%s | Gangwar Medical Store",
  },
  description: "Gangwar Medical Store in Rajghat, Aurangabad offers genuine medicines, healthcare essentials and pharmacist guidance. Find us at GJ75+JMP, Uttar Pradesh 262406.",
  applicationName: "Gangwar Medical Store",
  category: "Pharmacy",
  keywords: [
    "Gangwar Medical Store",
    "medical store in Rajghat",
    "pharmacy in Aurangabad Uttar Pradesh",
    "medical store near Rajghat",
    "genuine medicines in Aurangabad",
    "healthcare products in Rajghat",
    "Gangwar Pharmacy"
  ],
  authors: [{ name: "Drx. Sunil Kumar (B.Pharm)" }],
  metadataBase: new URL("https://gangwarmedical.shop"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Gangwar Medical Store | Pharmacy in Rajghat, Aurangabad",
    description: "Genuine medicines, healthcare essentials and pharmacist guidance in Rajghat, Aurangabad.",
    url: "https://gangwarmedical.shop",
    siteName: "Gangwar Medical Store",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gangwar Medical Store | Genuine Medicines & Healthcare",
    description: "Genuine medicines and healthcare essentials in Rajghat, Aurangabad.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Local Business & Pharmacy Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Pharmacy",
    "@id": "https://gangwarmedical.shop/#pharmacy",
    "name": "Gangwar Medical Store",
    "alternateName": "Gangwar Pharmacy",
    "image": "https://gangwarmedical.shop/gangwar-storefront.jpeg",
    "url": "https://gangwarmedical.shop",
    "telephone": "+918394894546",
    "email": "sunilgangwar4326@gmail.com",
    "priceRange": "$$",
    "hasMap": "https://maps.app.goo.gl/WnBzQakgzkuJnN9j6?g_st=aw",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "GJ75+JMP, Rajghat, Aurangabad",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "262406",
      "addressCountry": "IN"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "08:00",
        "closes": "22:00"
      }
    ],
    "employee": {
      "@type": "Person",
      "name": "Drx. Sunil Kumar",
      "jobTitle": "Qualified Pharmacist",
      "description": "B.Pharm Qualified Pharmacist managing Gangwar Medical Store"
    },
    "additionalProperty": {
      "@type": "PropertyValue",
      "name": "Pharmacy Registration Number",
      "value": "200323/0070901"
    },
    "sameAs": [
      "https://wa.me/918394894546"
    ]
  };

  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased text-brand-gray-dark bg-brand-gray-light dark:text-gray-100 dark:bg-background">
        {children}
      </body>
    </html>
  );
}
