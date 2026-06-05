import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { brandAssets } from "@/lib/brand";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://project-cyprus.vercel.app"),
  title: "Project Cyprus | Nieruchomości na Cyprze",
  description:
    "Polskojęzyczne wsparcie w zakupie nieruchomości na Cyprze — apartamenty, wille i inwestycje w sprawdzonych lokalizacjach.",
  icons: {
    icon: [
      { url: brandAssets.faviconSvg, type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Project Cyprus | Nieruchomości na Cyprze",
    description:
      "Premium wsparcie w zakupie apartamentów, willi i inwestycji na południowym Cyprze.",
    url: "/",
    siteName: "Project Cyprus",
    images: [
      {
        url: brandAssets.ogImage,
        width: 1200,
        height: 630,
        alt: "Project Cyprus",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Cyprus | Nieruchomości na Cyprze",
    description:
      "Polskojęzyczne wsparcie w zakupie nieruchomości na Cyprze.",
    images: [brandAssets.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
