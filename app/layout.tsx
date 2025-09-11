import type { Metadata } from "next";
import { Geist, Geist_Mono, Cinzel } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Using Inter as a substitute for Pragmatica (clean, classic readability)
const pragmatica = Geist({
  variable: "--font-pragmatica",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ICIC Heritage – Where Heritage Meets Elegance",
  description: "Discover luxury home décor that blends timeless Nigerian heritage with majestic craftsmanship. Every piece tells a story of prestige, elegance, and refinement.",
  keywords: ["ICIC Heritage", "luxury home decor", "Nigerian heritage", "majestic craftsmanship", "royal decor", "premium lifestyle", "elegant interiors"],
  metadataBase: new URL("https://icicheritageltd.com"),
  robots: { index: true, follow: true },
  openGraph: {
    title: "ICIC Heritage – Where Heritage Meets Elegance",
    description: "Discover luxury home décor that blends timeless Nigerian heritage with majestic craftsmanship. Every piece tells a story of prestige, elegance, and refinement.",
    url: "https://icicheritageltd.com",
    siteName: "ICIC Heritage",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ICIC Heritage – Where Heritage Meets Elegance",
    description: "Luxury home décor that blends timeless Nigerian heritage with majestic craftsmanship.",
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
        className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} ${pragmatica.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
