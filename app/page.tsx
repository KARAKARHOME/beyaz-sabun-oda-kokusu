'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Home, Wind, Clock, Shield, Award, TrendingUp } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="pt-20">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream-50 via-powder-50 to-sage-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-sage-200/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-powder-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cream-200/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-flex items-center space-x-2 bg-sage-100 text-sage-700 px-6 py-2 rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                <span>Premium Çubuklu Oda Kokusu</span>
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-sage-700 mb-6 leading-tight"
            >
              <Link href="/urun-detayi" className="hover:text-sage-600 transition-colors" title="Ürün Detayları">Beyaz Sabun Çubuklu</Link><br />
              <span className="text-sage-600">Oda Kokusu</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-8 flex justify-center"
            >
              <Link href="/urun-detayi" title="Ürün Detaylarını İncele">
                <Image 
                  src="/Beyaz Sabun Çubuklu Oda Kokusu.webp" 
                  alt="Beyaz Sabun Çubuklu Oda Kokusu - 100ml Premium" 
                  width={400} 
                  height={400}
                  className="object-contain hover:scale-105 transition-transform duration-300"
                  priority
                />
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg sm:text-xl md:text-2xl text-sage-600 mb-8 leading-relaxed max-w-3xl mx-auto"
            >
              Yaşam alanlarınıza <em>temizlik</em> ve <u>huzur</u> taşıyan özel formülü ile hazırlandı. <Link href="/hakkimizda" className="text-sage-700 hover:text-sage-800 font-semibold underline decoration-sage-400 hover:decoration-sage-600 transition-colors" title="Hakkımızda">KARAKAR HOME</Link> kalitesiyle 100ml şişede sunulan bu eşsiz koku, mekanlarınızı adeta bir bahçeye dönüştürüyor.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <a
                href="https://www.karakarhome.com.tr/beyaz-sabun-oda-kokusu/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-sage-500 to-sage-600 rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Hemen Sipariş Ver</span>
                  <span className="text-2xl font-bold">689 TL</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-sage-600 to-sage-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </a>

              <Link
                href="/urun-detayi"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-sage-700 bg-white border-2 border-sage-300 rounded-full hover:bg-sage-50 transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Ürün Detaylarını İncele
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12 flex items-center justify-center space-x-8 text-sage-600"
            >
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-sage-500" />
                <span className="text-sm font-medium">Güvenli Ödeme</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-sage-500" />
                <span className="text-sm font-medium">Hızlı Kargo</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-sage-500" />
                <span className="text-sm font-medium">Premium Kalite</span>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce">
            <Wind className="w-8 h-8 text-sage-400" />
          </div>
        </motion.div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-sage-700 mb-4">
              Neden <Link href="/urun-detayi" className="hover:text-sage-600 transition-colors underline decoration-sage-300" title="Ürün Detayları">Beyaz Sabun Çubuklu Oda Kokusu</Link>?
            </h2>
            <p className="text-lg text-sage-600 max-w-2xl mx-auto">
              Yaşam alanlarınıza <strong>ferahlık</strong> ve <em>huzur</em> getiren özellikleriyle öne çıkıyor. <Link href="/hakkimizda" className="text-sage-700 hover:text-sage-800 font-semibold" title="Hakkımızda">Daha fazla bilgi</Link>.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Sparkles,
                title: 'Benzersiz Formül',
                description: 'Beyaz sabun esansı, özenle seçilmiş doğal bileşenlerle harmanlanarak yaratıldı.'
              },
              {
                icon: Clock,
                title: 'Uzun Süre Etkili',
                description: '100ml şişe, haftalarca evinizde kalıcı ferahlık sağlıyor.'
              },
              {
                icon: Home,
                title: 'Her Mekan İçin',
                description: 'Salon, yatak odası, banyo - tüm yaşam alanlarınızda kullanabilirsiniz.'
              },
              {
                icon: Heart,
                title: 'Doğal İçerik',
                description: 'Zararsız formülü sayesinde ailenizin her ferdi için güvenli.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-gradient-to-br from-cream-50 to-sage-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-sage-100"
              >
                <div className="w-16 h-16 bg-sage-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sage-200 transition-colors duration-300 group-hover:scale-110 transform">
                  <feature.icon className="w-8 h-8 text-sage-600" />
                </div>
                <h3 className="text-xl font-semibold text-sage-700 mb-3">{feature.title}</h3>
                <p className="text-sage-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-sage-50 via-cream-50 to-powder-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-sage-700 mb-4">
              Beyaz Sabun Kokusu Nedir?
            </h2>
            <p className="text-lg text-sage-600 max-w-3xl mx-auto">
              Temizlik hissini <u>yaşam alanlarınıza</u> taşıyan bu eşsiz esans, <strong>ferahlık</strong> arayanlar için ideal seçim.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-sage-700 mb-4">Temizlik ve Ferahlığın Buluşması</h3>
              <p className="text-sage-600 leading-relaxed mb-4">
                <Link href="/urun-detayi" className="text-sage-700 hover:text-sage-800 font-semibold underline decoration-sage-400 hover:decoration-sage-600 transition-colors" title="Beyaz Sabun Kokusu Detayları">Beyaz sabun kokusu</Link>, <em>geleneksel temizlik</em> ritüellerinden ilham alınarak modern yaşam tarzına uyarlandı. Mekanlarınızda adeta yeni yıkanmış çamaşırların verdiği o <strong>berrak hissi</strong> yaratıyor.
              </p>
              <p className="text-sage-600 leading-relaxed">
                Bu klasik esansı <u>çubuklu difüzör</u> teknolojisiyle birleştirerek evinize sürekli ferahlık sunuyor. Elektrik ya da ateşe gerek kalmadan, doğal buharlaşma sayesinde mekanınız kokulanıyor. <Link href="/hakkimizda" className="text-sage-700 hover:text-sage-800 font-semibold" title="Üretim Sürecimiz">Üretim sürecimiz hakkında</Link> daha fazla bilgi edinin.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-sage-700 mb-4">Kullanım Alanları</h3>
              <p className="text-sage-600 mb-4">
                <Link href="/urun-detayi" className="text-sage-700 hover:text-sage-800 font-semibold underline decoration-sage-400 hover:decoration-sage-600 transition-colors" title="Detaylı Kullanım Talimatları">Beyaz Sabun Çubuklu Oda Kokusu</Link>&apos;nu farklı mekanlarda kullanabilirsiniz:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-sage-200">
                      <th className="text-left py-3 px-4 text-sage-700 font-semibold">Mekan</th>
                      <th className="text-left py-3 px-4 text-sage-700 font-semibold">Etki</th>
                      <th className="text-left py-3 px-4 text-sage-700 font-semibold">Süre</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-sage-100 hover:bg-sage-50 transition-colors duration-200">
                      <td className="py-3 px-4 text-sage-600"><strong>Salon</strong></td>
                      <td className="py-3 px-4 text-sage-600">Misafirleri karşılayan ferah atmosfer</td>
                      <td className="py-3 px-4 text-sage-600"><em>4-6 hafta</em></td>
                    </tr>
                    <tr className="border-b border-sage-100 hover:bg-sage-50 transition-colors duration-200">
                      <td className="py-3 px-4 text-sage-600"><strong>Yatak Odası</strong></td>
                      <td className="py-3 px-4 text-sage-600">Rahat uyku için huzurlu ortam</td>
                      <td className="py-3 px-4 text-sage-600"><em>4-6 hafta</em></td>
                    </tr>
                    <tr className="border-b border-sage-100 hover:bg-sage-50 transition-colors duration-200">
                      <td className="py-3 px-4 text-sage-600"><strong>Banyo</strong></td>
                      <td className="py-3 px-4 text-sage-600">Spa deneyimi sunan temizlik hissi</td>
                      <td className="py-3 px-4 text-sage-600"><em>3-5 hafta</em></td>
                    </tr>
                    <tr className="hover:bg-sage-50 transition-colors duration-200">
                      <td className="py-3 px-4 text-sage-600"><strong>Ofis</strong></td>
                      <td className="py-3 px-4 text-sage-600">Konsantrasyonu artıran ferah hava</td>
                      <td className="py-3 px-4 text-sage-600"><em>4-6 hafta</em></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-sage-700 mb-4">Ürün Özellikleri</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-sage-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sage-600"><strong>Hacim:</strong> 100ml premium cam şişe</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-sage-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sage-600"><strong>İçerik:</strong> Doğal esanslar ve özel formül</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-sage-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sage-600"><strong>Kullanım:</strong> Bambu çubuklar ile difüzyon</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-sage-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sage-600"><strong>Etki Süresi:</strong> 4-6 hafta arası</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-sage-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sage-600"><strong>Koku Yoğunluğu:</strong> Ayarlanabilir (çubuk sayısı ile)</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-sage-700 mb-4">
              Nasıl Kullanılır?
            </h2>
            <p className="text-lg text-sage-600 max-w-2xl mx-auto">
              Sadece <strong>üç basit adımda</strong> eviniz <em>ferahlık</em> kazanıyor.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: '1',
                  title: 'Şişeyi Açın',
                  description: 'Premium cam şişenin kapağını dikkatlice çıkarın. İçindeki sıvının dökülmemesine özen gösterin.'
                },
                {
                  step: '2',
                  title: 'Çubukları Yerleştirin',
                  description: 'Bambu çubukları şişeye yerleştirin. Koku yoğunluğunu ayarlamak için 3-6 adet çubuk kullanabilirsiniz.'
                },
                {
                  step: '3',
                  title: 'Keyfini Çıkarın',
                  description: 'Çubuklar sıvıyı emerek havaya yayar. İlk 24 saat içinde mekanınız kokulanmaya başlar.'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="flex items-start space-x-6 bg-gradient-to-r from-cream-50 to-sage-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-sage-500 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-sage-700 mb-3">{item.title}</h3>
                    <p className="text-sage-600 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-sage-500 to-sage-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <TrendingUp className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
              Evinize Ferahlık Getirin
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              <Link href="/urun-detayi" className="text-white hover:text-cream-100 font-bold underline decoration-white/50 hover:decoration-white transition-colors" title="Ürün Detayları">Beyaz Sabun Çubuklu Oda Kokusu</Link> ile yaşam alanlarınız <em>temizlik</em> ve <u>huzur</u> dolu bir atmosfere kavuşuyor. <Link href="/iletisim" className="text-white hover:text-cream-100 font-semibold underline decoration-white/50 hover:decoration-white transition-colors" title="İletişim">Pendik</Link>&apos;ten tüm Türkiye&apos;ye hızlı kargo ile ulaşıyor.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="https://www.karakarhome.com.tr/beyaz-sabun-oda-kokusu/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-sage-600 rounded-full hover:bg-sage-700 transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                <span className="flex items-center space-x-2">
                  <span>Şimdi Sipariş Ver</span>
                  <span className="text-2xl font-bold">689 TL</span>
                </span>
              </a>
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                Bize Ulaşın
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-cream-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-sage-700 mb-4">
              Sıkça Sorulan Sorular
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: 'Beyaz Sabun Çubuklu Oda Kokusu ne kadar süre dayanır?',
                answer: 'Kullanım koşullarına bağlı olarak 4-6 hafta arası etkili kalır. Çubuk sayısını azaltarak süreyi uzatabilirsiniz.'
              },
              {
                question: 'Alerjik reaksiyon yapar mı?',
                answer: 'Doğal içerikli formülümüz güvenli kullanım için tasarlandı. Ancak hassasiyetiniz varsa önce küçük bir alanda test edin.'
              },
              {
                question: 'Hangi mekanlarda kullanabilirim?',
                answer: 'Salon, yatak odası, banyo, ofis gibi tüm kapalı alanlarda kullanabilirsiniz. Özellikle 15-25 m² alanlar için ideal.'
              },
              {
                question: 'Koku yoğunluğunu nasıl ayarlarım?',
                answer: 'Şişeye yerleştirdiğiniz çubuk sayısı ile yoğunluğu kontrol edebilirsiniz. 3 çubuk hafif, 6 çubuk yoğun koku sağlar.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-sage-700 mb-3">{faq.question}</h3>
                <p className="text-sage-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mt-12"
          >
            <p className="text-sage-600 mb-6">
              Daha fazla bilgi için <Link href="/urun-detayi" className="text-sage-700 hover:text-sage-800 font-semibold underline decoration-sage-400 hover:decoration-sage-600 transition-colors" title="Ürün Detayları">ürün detayları</Link> sayfamızı ziyaret edin veya <Link href="/iletisim" className="text-sage-700 hover:text-sage-800 font-semibold underline decoration-sage-400 hover:decoration-sage-600 transition-colors" title="Bize Ulaşın">bizimle iletişime</Link> geçin.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
