import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "ICICHeritage – Luxury Home Décor",
  description: "ICICHeritage is a luxury home décor brand. Coming soon.",
  keywords: ["ICICHeritage", "luxury", "home decor", "home décor", "interiors"],
  metadataBase: new URL("https://icicheritage.com"),
  robots: { index: true, follow: true },
  openGraph: {
    title: "ICICHeritage – Luxury Home Décor",
    description: "A luxury home décor brand. Coming soon.",
    url: "https://icicheritage.com",
    siteName: "ICICHeritage",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ICICHeritage – Luxury Home Décor",
    description: "A luxury home décor brand. Coming soon.",
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
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
