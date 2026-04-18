import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://beyazsabunodakokusu.com'),
  title: {
    default: "Beyaz Sabun Çubuklu Oda Kokusu - Premium 100ml | 689 TL",
    template: "%s | Beyaz Sabun Çubuklu Oda Kokusu"
  },
  description: "Beyaz sabun esintisiyle evinize ferahlık getiren premium çubuklu oda kokusu. 100ml şişede, 689 TL. Pendik'ten tüm Türkiye'ye hızlı kargo. Premium kalite, uzun süre etkili.",
  keywords: ["beyaz sabun oda kokusu", "çubuklu oda kokusu", "beyaz sabun çubuklu oda kokusu", "oda kokusu", "ev kokusu", "bambu çubuklu koku", "premium oda kokusu", "beyaz sabun kokusu", "pendik oda kokusu", "istanbul oda kokusu"],
  authors: [{ name: "Beyaz Sabun Çubuklu Oda Kokusu" }],
  creator: "Beyaz Sabun Çubuklu Oda Kokusu",
  publisher: "Beyaz Sabun Çubuklu Oda Kokusu",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://beyazsabunodakokusu.com',
    siteName: 'Beyaz Sabun Çubuklu Oda Kokusu',
    title: 'Beyaz Sabun Çubuklu Oda Kokusu - Premium 100ml | 689 TL',
    description: 'Beyaz sabun esintisiyle evinize ferahlık getiren premium çubuklu oda kokusu. 100ml şişede, 689 TL. Pendik İstanbul\'dan tüm Türkiye\'ye hızlı kargo.',
    images: [
      {
        url: '/Beyaz Sabun Çubuklu Oda Kokusu.webp',
        width: 800,
        height: 800,
        alt: 'Beyaz Sabun Çubuklu Oda Kokusu - Premium 100ml',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beyaz Sabun Çubuklu Oda Kokusu - Premium 100ml | 689 TL',
    description: 'Beyaz sabun esintisiyle evinize ferahlık getiren premium çubuklu oda kokusu. Pendik\'ten tüm Türkiye\'ye hızlı kargo.',
    images: ['/Beyaz Sabun Çubuklu Oda Kokusu.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://beyazsabunodakokusu.com',
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="icon" href="/favicon.webp" type="image/webp" />
        <link rel="apple-touch-icon" href="/favicon.webp" />
        <meta name="theme-color" content="#F7F3ED" />
        <meta name="geo.region" content="TR-34" />
        <meta name="geo.placename" content="Pendik, İstanbul" />
        <meta name="geo.position" content="40.8783;29.2333" />
        <meta name="ICBM" content="40.8783, 29.2333" />
      </head>
      <body className="font-sans">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
