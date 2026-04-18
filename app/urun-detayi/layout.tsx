import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ürün Detayı - Beyaz Sabun Çubuklu Oda Kokusu 100ml',
  description: 'Beyaz Sabun Çubuklu Oda Kokusu 100ml ürün detayları, özellikleri, kullanım talimatları ve fiyat bilgisi. 689 TL, Pendik\'ten tüm Türkiye\'ye ücretsiz kargo.',
  keywords: ['beyaz sabun oda kokusu fiyat', 'çubuklu oda kokusu 100ml', 'oda kokusu özellikleri', 'bambu çubuklu koku', 'premium oda kokusu satın al', 'oda kokusu kullanımı'],
  openGraph: {
    title: 'Beyaz Sabun Çubuklu Oda Kokusu - 100ml Premium | 689 TL',
    description: 'Premium beyaz sabun çubuklu oda kokusu. 100ml şişe, 4-6 hafta etkili, doğal içerikli. Pendik\'ten tüm Türkiye\'ye hızlı kargo.',
    url: 'https://beyazsabunodakokusu.com/urun-detayi',
    type: 'website',
    images: [
      {
        url: '/Beyaz Sabun Çubuklu Oda Kokusu.webp',
        width: 800,
        height: 800,
        alt: 'Beyaz Sabun Çubuklu Oda Kokusu - 100ml Premium',
      },
    ],
  },
  alternates: {
    canonical: 'https://beyazsabunodakokusu.com/urun-detayi',
  },
};

export default function UrunDetayiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
