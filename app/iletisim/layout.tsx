import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'İletişim - Bize Ulaşın',
  description: 'Beyaz Sabun Çubuklu Oda Kokusu iletişim bilgileri. Pendik İstanbul adresimiz, telefon numaramız ve e-posta adresimiz. Sorularınız için bize ulaşın.',
  keywords: ['beyaz sabun oda kokusu iletişim', 'pendik oda kokusu adres', 'oda kokusu telefon', 'istanbul oda kokusu iletişim', 'müşteri hizmetleri'],
  openGraph: {
    title: 'İletişim - Beyaz Sabun Çubuklu Oda Kokusu',
    description: 'Beyaz Sabun Çubuklu Oda Kokusu iletişim bilgileri. Pendik İstanbul\'dan size ulaşıyoruz. Sorularınız için bizimle iletişime geçin.',
    url: 'https://beyazsabunodakokusu.com/iletisim',
    type: 'website',
    images: [
      {
        url: '/Beyaz Sabun Çubuklu Oda Kokusu.webp',
        width: 800,
        height: 800,
        alt: 'Beyaz Sabun Çubuklu Oda Kokusu - İletişim',
      },
    ],
  },
  alternates: {
    canonical: 'https://beyazsabunodakokusu.com/iletisim',
  },
};

export default function IletisimLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
