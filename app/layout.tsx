import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://gizlibahceodakokusu.com.tr'),
  title: {
    default: "Beyaz Sabun Çubuklu Oda Kokusu - 100ml Premium | KARAKAR HOME",
    template: "%s | Beyaz Sabun Çubuklu Oda Kokusu"
  },
  description: "Beyaz sabun esintisiyle evinize ferahlık getiren premium çubuklu oda kokusu. 100ml şişede, 689 TL. Pendik'ten tüm Türkiye'ye hızlı kargo. KARAKAR HOME kalitesi, uzun süre etkili.",
  keywords: ["beyaz sabun oda kokusu", "çubuklu oda kokusu", "beyaz sabun çubuklu oda kokusu", "oda kokusu", "ev kokusu", "bambu çubuklu koku", "premium oda kokusu", "beyaz sabun kokusu", "karakar home", "pendik oda kokusu"],
  authors: [{ name: "KARAKAR HOME" }],
  creator: "KARAKAR HOME",
  publisher: "KARAKAR HOME",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://gizlibahceodakokusu.com.tr',
    siteName: 'Beyaz Sabun Çubuklu Oda Kokusu',
    title: 'Beyaz Sabun Çubuklu Oda Kokusu - 100ml Premium | KARAKAR HOME',
    description: 'Beyaz sabun esintisiyle evinize ferahlık getiren premium çubuklu oda kokusu. 100ml şişede, 689 TL. KARAKAR HOME kalitesi, uzun süre etkili.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Beyaz Sabun Çubuklu Oda Kokusu - KARAKAR HOME',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@karakarhome',
    creator: '@karakarhome',
    title: 'Beyaz Sabun Çubuklu Oda Kokusu - 100ml Premium',
    description: 'Beyaz sabun esintisiyle evinize ferahlık getiren premium çubuklu oda kokusu. 100ml - 689 TL',
    images: ['/og-image.jpg'],
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
    canonical: 'https://gizlibahceodakokusu.com.tr',
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
