'use client';

import { motion } from 'framer-motion';
import { Package, Droplet, Clock, Leaf, Shield, Star, CheckCircle, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function UrunDetayiPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-cream-50 via-sage-50 to-powder-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-sage-700 mb-6">
              Beyaz Sabun Çubuklu Oda Kokusu
            </h1>
            <p className="text-2xl text-sage-600 mb-4">
              <Link href="/" className="text-sage-700 hover:text-sage-800 font-bold underline decoration-sage-400 hover:decoration-sage-600 transition-colors" title="Ana Sayfa">Beyaz Sabun Oda Kokusu</Link> - Premium 100ml
            </p>
            <div className="flex items-center justify-center space-x-2 text-3xl font-bold text-sage-700">
              <span>689 TL</span>
            </div>
          </motion.div>

          <div className="max-w-6xl mx-auto space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-3xl shadow-xl"
            >
              <h2 className="text-3xl font-display font-bold text-sage-700 mb-6">Ürün Özellikleri</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Package className="w-8 h-8 text-sage-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-sage-700 mb-2">Hacim ve Paket</h3>
                      <p className="text-sage-600 leading-relaxed">
                        <strong>100ml</strong> premium cam şişe içinde sunuluyor. Şık tasarımıyla dekoratif bir unsur olarak da kullanılabilir.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Droplet className="w-8 h-8 text-sage-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-sage-700 mb-2">Koku Profili</h3>
                      <p className="text-sage-600 leading-relaxed">
                        <em>Beyaz sabun</em> esansı, temizlik ve ferahlık hissi veriyor. Üst notalar taze, orta notalar yumuşak, alt notalar kalıcı.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="w-8 h-8 text-sage-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-sage-700 mb-2">Kullanım Süresi</h3>
                      <p className="text-sage-600 leading-relaxed">
                        Normal koşullarda <u>4-6 hafta</u> arası etkili kalıyor. Çubuk sayısını azaltarak süreyi uzatabilirsiniz.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Leaf className="w-8 h-8 text-sage-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-sage-700 mb-2">Doğal İçerik</h3>
                      <p className="text-sage-600 leading-relaxed">
                        Zararsız formülü sayesinde <strong>güvenle</strong> kullanabilirsiniz. Alerjik reaksiyonlara karşı test edilmiştir.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Shield className="w-8 h-8 text-sage-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-sage-700 mb-2">Kalite Garantisi</h3>
                      <p className="text-sage-600 leading-relaxed">
                        <Link href="/hakkimizda" className="text-sage-700 hover:text-sage-800 font-bold underline decoration-sage-400 hover:decoration-sage-600 transition-colors" title="Hakkımızda">Premium kalite</Link> standartlarıyla üretiliyor. Her şişe, titiz kalite kontrolünden geçiyor.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Star className="w-8 h-8 text-sage-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-sage-700 mb-2">Premium Deneyim</h3>
                      <p className="text-sage-600 leading-relaxed">
                        Bambu çubuklar ve özel formül ile <em>lüks</em> bir oda kokusu deneyimi sunuyor.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-3xl shadow-xl"
            >
              <h2 className="text-3xl font-display font-bold text-sage-700 mb-6">Teknik Özellikler</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-sage-200">
                      <th className="text-left py-4 px-4 text-sage-700 font-semibold">Özellik</th>
                      <th className="text-left py-4 px-4 text-sage-700 font-semibold">Detay</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-sage-100 hover:bg-sage-50 transition-colors">
                      <td className="py-4 px-4 text-sage-600"><strong>Hacim</strong></td>
                      <td className="py-4 px-4 text-sage-600">100ml</td>
                    </tr>
                    <tr className="border-b border-sage-100 hover:bg-sage-50 transition-colors">
                      <td className="py-4 px-4 text-sage-600"><strong>Koku Tipi</strong></td>
                      <td className="py-4 px-4 text-sage-600">Beyaz Sabun Esansı</td>
                    </tr>
                    <tr className="border-b border-sage-100 hover:bg-sage-50 transition-colors">
                      <td className="py-4 px-4 text-sage-600"><strong>Kullanım Şekli</strong></td>
                      <td className="py-4 px-4 text-sage-600">Bambu Çubuklu Difüzör</td>
                    </tr>
                    <tr className="border-b border-sage-100 hover:bg-sage-50 transition-colors">
                      <td className="py-4 px-4 text-sage-600"><strong>Etki Süresi</strong></td>
                      <td className="py-4 px-4 text-sage-600">4-6 Hafta</td>
                    </tr>
                    <tr className="border-b border-sage-100 hover:bg-sage-50 transition-colors">
                      <td className="py-4 px-4 text-sage-600"><strong>Kapsama Alanı</strong></td>
                      <td className="py-4 px-4 text-sage-600">15-25 m²</td>
                    </tr>
                    <tr className="border-b border-sage-100 hover:bg-sage-50 transition-colors">
                      <td className="py-4 px-4 text-sage-600"><strong>Şişe Malzemesi</strong></td>
                      <td className="py-4 px-4 text-sage-600">Premium Cam</td>
                    </tr>
                    <tr className="border-b border-sage-100 hover:bg-sage-50 transition-colors">
                      <td className="py-4 px-4 text-sage-600"><strong>Çubuk Sayısı</strong></td>
                      <td className="py-4 px-4 text-sage-600">6-8 Adet Bambu Çubuk</td>
                    </tr>
                    <tr className="hover:bg-sage-50 transition-colors">
                      <td className="py-4 px-4 text-sage-600"><strong>Fiyat</strong></td>
                      <td className="py-4 px-4 text-sage-600 font-bold text-lg">689 TL</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-3xl shadow-xl"
            >
              <h2 className="text-3xl font-display font-bold text-sage-700 mb-6">Kullanım Talimatları</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-sage-50 rounded-xl">
                  <div className="flex-shrink-0 w-10 h-10 bg-sage-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-sage-700 mb-3">Şişeyi Hazırlayın</h3>
                    <p className="text-sage-600 leading-relaxed mb-3">
                      Premium cam şişenin <strong>kapağını</strong> dikkatlice açın. Şişeyi düz bir yüzeye yerleştirin.
                    </p>
                    <div className="flex items-start space-x-2 text-sm text-sage-600">
                      <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span><em>İpucu:</em> Dökmemek için yavaş hareket edin.</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-cream-50 rounded-xl">
                  <div className="flex-shrink-0 w-10 h-10 bg-sage-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-sage-700 mb-3">Çubukları Yerleştirin</h3>
                    <p className="text-sage-600 leading-relaxed mb-3">
                      Bambu çubukları şişeye yerleştirin. Hafif koku için <strong>3-4 çubuk</strong>, yoğun koku için <strong>6-8 çubuk</strong> kullanın.
                    </p>
                    <div className="flex items-start space-x-2 text-sm text-sage-600">
                      <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span><em>İpucu:</em> Çubuk sayısını ihtiyacınıza göre ayarlayabilirsiniz.</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-powder-50 rounded-xl">
                  <div className="flex-shrink-0 w-10 h-10 bg-sage-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-sage-700 mb-3">Bekleme Süresi</h3>
                    <p className="text-sage-600 leading-relaxed mb-3">
                      İlk <u>24 saat</u> içinde çubuklar sıvıyı emerek kokuyu yaymaya başlar. Sabırlı olun.
                    </p>
                    <div className="flex items-start space-x-2 text-sm text-sage-600">
                      <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span><em>İpucu:</em> Daha hızlı etki için çubukları ters çevirin.</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-sage-50 rounded-xl">
                  <div className="flex-shrink-0 w-10 h-10 bg-sage-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-sage-700 mb-3">Bakım ve Yenileme</h3>
                    <p className="text-sage-600 leading-relaxed mb-3">
                      Haftada bir kez çubukları <strong>ters çevirerek</strong> koku yoğunluğunu tazeleyin.
                    </p>
                    <div className="flex items-start space-x-2 text-sm text-sage-600">
                      <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span><em>Uyarı:</em> Ters çevirirken sıvı dökülmesine dikkat edin.</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-3xl shadow-xl"
            >
              <h2 className="text-3xl font-display font-bold text-sage-700 mb-6">Kullanım Alanları</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: 'Salon', desc: 'Misafirlerinizi karşılayın' },
                  { name: 'Yatak Odası', desc: 'Rahat uyku için' },
                  { name: 'Banyo', desc: 'Spa atmosferi' },
                  { name: 'Ofis', desc: 'Konsantrasyon artırıcı' },
                  { name: 'Koridor', desc: 'Hoş karşılama' },
                  { name: 'Oturma Odası', desc: 'Aile zamanı' }
                ].map((area, index) => (
                  <div key={index} className="p-6 bg-gradient-to-br from-sage-50 to-cream-50 rounded-xl border border-sage-100 hover:shadow-lg transition-all">
                    <h3 className="text-lg font-semibold text-sage-700 mb-2">{area.name}</h3>
                    <p className="text-sage-600">{area.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-sage-500 to-sage-600 p-8 md:p-12 rounded-3xl shadow-xl text-white text-center"
            >
              <h2 className="text-3xl font-display font-bold mb-6">Hemen Sipariş Verin</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                <Link href="/" className="text-white hover:text-cream-100 font-bold underline decoration-white/50 hover:decoration-white transition-colors" title="Ana Sayfa">Beyaz Sabun Çubuklu Oda Kokusu</Link> ile evinize <em>ferahlık</em> getirin. <Link href="/iletisim" className="text-white hover:text-cream-100 font-semibold underline decoration-white/50 hover:decoration-white transition-colors" title="İletişim">Pendik</Link>&apos;ten tüm Türkiye&apos;ye hızlı kargo.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a
                  href="https://www.karakarhome.com.tr/beyaz-sabun-oda-kokusu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-10 py-5 bg-sage-600 text-white rounded-full font-bold text-lg hover:bg-sage-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  Sipariş Ver - 689 TL
                </a>
                <Link
                  href="/iletisim"
                  className="inline-flex items-center justify-center px-10 py-5 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  Soru Sorun
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
