import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { brandAssets } from "@/lib/brand";
import { META_PIXEL_ID } from "@/lib/meta";
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
      <head>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');`}
        </Script>
      </head>
      <body className="min-h-full flex flex-col">
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element -- Meta Pixel tracking fallback must be a plain img */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
