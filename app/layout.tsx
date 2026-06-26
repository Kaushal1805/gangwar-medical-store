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
  title: "Gangwar Medical Store | Genuine Medicines & Healthcare Guidance",
  description: "Trusted local pharmacy in Nawabganj, Bareilly managed by Drx. Sunil Kumar (B.Pharm). Get authentic prescription medicines, health supplements, daily care, and expert advice.",
  keywords: [
    "Gangwar Medical Store",
    "Best Medical Store in Nawabganj",
    "Pharmacy Near Me",
    "Medical Store Near Me",
    "Genuine Medicines",
    "Healthcare Products",
    "B.Pharm Pharmacist",
    "Prescription Medicines",
    "Medical Shop in Bareilly",
    "Drx. Sunil Kumar Pharmacist",
    "Gangwar Pharmacy"
  ],
  authors: [{ name: "Drx. Sunil Kumar (B.Pharm)" }],
  metadataBase: new URL("https://gangwarmedicalstore.com"), // Fallback base URL for canonicals
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Gangwar Medical Store | Genuine Medicines & Healthcare Guidance",
    description: "Trusted local pharmacy in Nawabganj, Bareilly managed by Drx. Sunil Kumar (B.Pharm). Authentic medicines, supplements, baby care, and surgical items.",
    url: "https://gangwarmedicalstore.com",
    siteName: "Gangwar Medical Store",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gangwar Medical Store - Managed by Drx. Sunil Kumar (B.Pharm)",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gangwar Medical Store | Genuine Medicines & Healthcare",
    description: "Trusted pharmacy in Nawabganj, Bareilly managed by Drx. Sunil Kumar (B.Pharm). Authentic products and pharmacist guidance.",
    images: ["/og-image.jpg"],
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
    "@id": "https://gangwarmedicalstore.com/#pharmacy",
    "name": "Gangwar Medical Store",
    "alternateName": "Gangwar Pharmacy",
    "image": "https://gangwarmedicalstore.com/store-front.jpg",
    "url": "https://gangwarmedicalstore.com",
    "telephone": "+918394894546",
    "email": "sunilgangwar4326@gmail.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rajghat, Aurangabaad, Nawabganj",
      "addressLocality": "Bareilly",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "262401",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.5400,
      "longitude": 79.6330
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
