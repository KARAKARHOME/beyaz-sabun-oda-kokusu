'use client';

import { motion } from 'framer-motion';
import { Target, Users, Leaf, Sparkles, Award, Heart } from 'lucide-react';
import Link from 'next/link';

export default function HakkimizdaPage() {
  return (
    <div className="pt-20">
      <section className="relative py-20 bg-gradient-to-br from-sage-50 via-cream-50 to-powder-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-sage-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-powder-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-sage-700 mb-6">
              <Link href="/urun-detayi" className="hover:text-sage-600 transition-colors" title="Ürün Detayları">Beyaz Sabun Çubuklu Oda Kokusu</Link> Hikayesi
            </h1>
            <p className="text-xl text-sage-600 max-w-3xl mx-auto leading-relaxed">
              <Link href="/" className="text-sage-700 hover:text-sage-800 font-bold underline decoration-sage-400 hover:decoration-sage-600 transition-colors" title="Ana Sayfa">Beyaz Sabun Oda Kokusu</Link> ailesi olarak, yaşam alanlarınıza <em>ferahlık</em> ve <u>huzur</u> taşıyan ürünler geliştiriyoruz.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 md:p-12 rounded-3xl shadow-xl"
            >
              <h2 className="text-3xl font-display font-bold text-sage-700 mb-6">Markamızın Doğuşu</h2>
              <p className="text-sage-600 leading-relaxed mb-4">
                İstanbul&apos;un <Link href="/iletisim" className="text-sage-700 hover:text-sage-800 font-semibold underline decoration-sage-400 hover:decoration-sage-600 transition-colors" title="İletişim Bilgileri">Pendik</Link> ilçesinde <Link href="/" className="text-sage-700 hover:text-sage-800 font-semibold underline decoration-sage-400 hover:decoration-sage-600 transition-colors" title="Ana Sayfa">Beyaz Sabun Oda Kokusu</Link> markamız kuruldu. Ev tekstili ve dekorasyon sektöründe yılların deneyimini taşıyoruz. Müşterilerimizin yaşam alanlarını <em>daha güzel</em> hale getirme tutkusuyla yola çıktık.
              </p>
              <p className="text-sage-600 leading-relaxed mb-4">
                <Link href="/urun-detayi" className="text-sage-700 hover:text-sage-800 font-semibold underline decoration-sage-400 hover:decoration-sage-600 transition-colors" title="Ürün Detayları">Beyaz Sabun Çubuklu Oda Kokusu</Link>, bu yolculuğun en <u>özel ürünlerinden</u> biri olarak hayat buldu. Beyaz sabun esansının verdiği temizlik hissini, modern difüzör teknolojisiyle birleştirdik.
              </p>
              <p className="text-sage-600 leading-relaxed">
                Her şişe, titizlikle seçilmiş <strong>doğal bileşenlerle</strong> hazırlanıyor. Amacımız, <Link href="/" className="text-sage-700 hover:text-sage-800 font-semibold" title="Ana Sayfa">evinize</Link> sadece koku değil, bir yaşam felsefesi getirmek.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: 'Vizyonumuz',
                  description: 'Türkiye\'nin her evinde beyaz sabun kokusunun ferahlığını hissettirmek istiyoruz.'
                },
                {
                  icon: Users,
                  title: 'Misyonumuz',
                  description: 'Kaliteli, doğal ve uzun ömürlü oda kokuları sunarak müşteri memnuniyetini sağlamak.'
                },
                {
                  icon: Leaf,
                  title: 'Değerlerimiz',
                  description: 'Doğallık, şeffaflık ve sürdürülebilirlik ilkelerine bağlı kalıyoruz.'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-cream-50 to-sage-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 border border-sage-100"
                >
                  <div className="w-14 h-14 bg-sage-100 rounded-xl flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-sage-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-sage-700 mb-3">{item.title}</h3>
                  <p className="text-sage-600 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 md:p-12 rounded-3xl shadow-xl"
            >
              <h2 className="text-3xl font-display font-bold text-sage-700 mb-6">Üretim Sürecimiz</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-sage-500 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-sage-700 mb-2">Hammadde Seçimi</h4>
                    <p className="text-sage-600 leading-relaxed">
                      <strong>Doğal esanslar</strong> ve yüksek kaliteli taşıyıcı sıvılar özenle belirleniyor. Her bileşen, <em>güvenlik testlerinden</em> geçiyor.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-sage-500 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-sage-700 mb-2">Formülasyon</h4>
                    <p className="text-sage-600 leading-relaxed">
                      Beyaz sabun notaları, <u>deneyimli parfümörler</u> tarafından harmonize ediliyor. Koku dengesi, uzun süre kalıcılık sağlayacak şekilde ayarlanıyor.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-sage-500 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-sage-700 mb-2">Kalite Kontrolü</h4>
                    <p className="text-sage-600 leading-relaxed">
                      Her parti, <strong>laboratuvar testlerinden</strong> geçiyor. Koku yoğunluğu, buharlaşma hızı ve güvenlik parametreleri kontrol ediliyor.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-sage-500 text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-sage-700 mb-2">Paketleme</h4>
                    <p className="text-sage-600 leading-relaxed">
                      100ml <em>premium cam şişeler</em> içine dolduruluyor. Bambu çubuklar ve kullanım talimatıyla birlikte paketleniyor.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-sage-500 to-sage-600 p-8 md:p-12 rounded-3xl shadow-xl text-white"
            >
              <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
                <div className="flex-1">
                  <h2 className="text-3xl font-display font-bold text-sage-700 mb-6">Neden Bizi Tercih Etmelisiniz?</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <Award className="w-6 h-6 flex-shrink-0 mt-1" />
                      <span><strong>Premium kalite:</strong> Yüksek standartlarda <Link href="/urun-detayi" className="text-white hover:text-cream-100 underline" title="Ürün Özellikleri">üretim</Link></span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Sparkles className="w-6 h-6 flex-shrink-0 mt-1" />
                      <span><strong>Benzersiz formül:</strong> Özel olarak geliştirilmiş <Link href="/urun-detayi" className="text-white hover:text-cream-100 underline" title="Koku Profili">esans</Link></span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Heart className="w-6 h-6 flex-shrink-0 mt-1" />
                      <span><strong>Müşteri odaklı:</strong> <Link href="/iletisim" className="text-white hover:text-cream-100 underline" title="Bize Ulaşın">Memnuniyetiniz</Link> bizim önceliğimiz</span>
                    </li>
                  </ul>
                </div>
                <div className="flex-shrink-0">
                  <Link
                    href="/urun-detayi"
                    className="inline-block bg-white text-sage-700 px-8 py-4 rounded-full font-semibold hover:bg-cream-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    Ürünü İncele
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 md:p-12 rounded-3xl shadow-xl"
            >
              <h2 className="text-3xl font-display font-bold text-sage-700 mb-6">İletişimde Kalın</h2>
              <p className="text-sage-600 leading-relaxed mb-6">
                Sorularınız, önerileriniz veya geri bildirimleriniz için <strong>her zaman</strong> yanınızdayız. <Link href="/iletisim" className="text-sage-700 hover:text-sage-800 font-semibold underline decoration-sage-400 hover:decoration-sage-600 transition-colors" title="İletişim Bilgileri">Pendik</Link> merkezli ekibimiz, <em>hızlı ve profesyonel</em> destek sunuyor.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-sage-500 to-sage-600 text-white rounded-full font-semibold hover:from-sage-600 hover:to-sage-700 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
                >
                  İletişime Geç
                </Link>
                <a
                  href="https://www.karakarhome.com.tr/beyaz-sabun-oda-kokusu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-sage-600 text-white rounded-full font-semibold hover:bg-sage-700 transition-all duration-300 hover:scale-105"
                >
                  Hemen Sipariş Ver - 689 TL
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
