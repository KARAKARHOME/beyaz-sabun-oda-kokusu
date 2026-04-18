import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hakkımızda - Markamızın Hikayesi',
  description: 'Beyaz Sabun Çubuklu Oda Kokusu markamızın hikayesi, vizyonumuz ve misyonumuz. Pendik İstanbul\'dan tüm Türkiye\'ye premium oda kokusu hizmeti sunuyoruz.',
  keywords: ['beyaz sabun oda kokusu hakkında', 'marka hikayesi', 'pendik oda kokusu', 'premium oda kokusu üretimi', 'istanbul oda kokusu', 'oda kokusu markası'],
  openGraph: {
    title: 'Hakkımızda - Beyaz Sabun Çubuklu Oda Kokusu',
    description: 'Beyaz Sabun Çubuklu Oda Kokusu markamızın hikayesi, vizyonumuz ve misyonumuz. Pendik\'ten tüm Türkiye\'ye hizmet veriyoruz.',
    url: 'https://beyazsabunodakokusu.com/hakkimizda',
    type: 'website',
    images: [
      {
        url: '/Beyaz Sabun Çubuklu Oda Kokusu.webp',
        width: 800,
        height: 800,
        alt: 'Beyaz Sabun Çubuklu Oda Kokusu - Hakkımızda',
      },
    ],
  },
  alternates: {
    canonical: 'https://beyazsabunodakokusu.com/hakkimizda',
  },
};

export default function HakkimizdaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
