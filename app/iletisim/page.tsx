'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageCircle, Clock, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';

export default function IletisimPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-sage-50 via-cream-50 to-powder-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-sage-700 mb-6">
              Bize Ulaşın
            </h1>
            <p className="text-xl text-sage-600 max-w-3xl mx-auto leading-relaxed">
              <Link href="/urun-detayi" className="text-sage-700 hover:text-sage-800 font-bold underline decoration-sage-400 hover:decoration-sage-600 transition-colors" title="Ürün Detayları">Beyaz Sabun Çubuklu Oda Kokusu</Link> hakkında sorularınız için <em>her zaman</em> yanınızdayız. <Link href="/hakkimizda" className="text-sage-700 hover:text-sage-800 font-semibold" title="Hakkımızda">Pendik</Link> merkezli ekibimiz, <u>hızlı destek</u> sunuyor.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-display font-bold text-sage-700 mb-6">İletişim Bilgileri</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-sage-100 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-sage-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-sage-700 mb-2">Telefon</h3>
                      <a href="tel:+905451814040" className="text-sage-600 hover:text-sage-700 transition-colors">
                        +90 545 181 40 40
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-sage-100 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-sage-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-sage-700 mb-2">E-Posta</h3>
                      <a href="mailto:info@beyazsabunodakokusu.com.tr" className="text-sage-600 hover:text-sage-700 transition-colors break-all">
                        info@beyazsabunodakokusu.com.tr
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-sage-100 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-sage-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-sage-700 mb-2">Adres</h3>
                      <p className="text-sage-600 leading-relaxed">
                        Esenyalı Mah. Edebali Cad. No:13/A<br />
                        34903 Pendik / İstanbul
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-sage-100 rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-sage-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-sage-700 mb-2">Çalışma Saatleri</h3>
                      <p className="text-sage-600 leading-relaxed">
                        Pazartesi - Cumartesi: 09:00 - 18:00<br />
                        Pazar: Kapalı
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-display font-bold text-sage-700 mb-6">Hızlı Destek</h2>
                <div className="space-y-4">
                  <a
                    href="https://wa.me/905451814040?text=Merhaba"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-all duration-300 shadow-md hover:shadow-lg group"
                  >
                    <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform" />
                    <div>
                      <h3 className="font-semibold text-lg">WhatsApp</h3>
                      <p className="text-sm opacity-90">Anında mesaj gönderin</p>
                    </div>
                  </a>

                  <a
                    href="https://tawk.to/karakar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 bg-sage-500 text-white rounded-xl hover:bg-sage-600 transition-all duration-300 shadow-md hover:shadow-lg group"
                  >
                    <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform" />
                    <div>
                      <h3 className="font-semibold text-lg">Canlı Destek</h3>
                      <p className="text-sm opacity-90">Online sohbet başlatın</p>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-display font-bold text-sage-700 mb-6">Sosyal Medya</h2>
                <p className="text-sage-600 mb-6 leading-relaxed">
                  Sosyal medya hesaplarımızdan <strong>yeniliklerimizi</strong> takip edin, <em>kampanyalardan</em> haberdar olun.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="https://www.facebook.com/KARAKARHOME/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:shadow-lg transition-all duration-300 group"
                  >
                    <Facebook className="w-10 h-10 text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-semibold text-blue-700">Facebook</span>
                  </a>

                  <a
                    href="https://www.instagram.com/karakarhome"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-pink-50 to-purple-100 rounded-xl hover:shadow-lg transition-all duration-300 group"
                  >
                    <Instagram className="w-10 h-10 text-pink-600 mb-3 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-semibold text-pink-700">Instagram</span>
                  </a>

                  <a
                    href="https://x.com/karakarhome"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl hover:shadow-lg transition-all duration-300 group"
                  >
                    <Twitter className="w-10 h-10 text-gray-700 mb-3 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-semibold text-gray-700">Twitter</span>
                  </a>

                  <a
                    href="https://www.youtube.com/@KARAKARHOME"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-xl hover:shadow-lg transition-all duration-300 group"
                  >
                    <Youtube className="w-10 h-10 text-red-600 mb-3 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-semibold text-red-700">YouTube</span>
                  </a>

                  <a
                    href="https://tr.pinterest.com/karakarhome/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-red-50 to-pink-100 rounded-xl hover:shadow-lg transition-all duration-300 group col-span-2"
                  >
                    <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold text-xl">P</span>
                    </div>
                    <span className="text-sm font-semibold text-red-700">Pinterest</span>
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-sage-500 to-sage-600 p-8 rounded-2xl shadow-lg text-white">
                <h2 className="text-2xl font-display font-bold mb-4">Sipariş Vermek İster misiniz?</h2>
                <p className="mb-6 leading-relaxed">
                  <Link href="/urun-detayi" className="text-white hover:text-cream-100 font-bold underline decoration-white/50 hover:decoration-white transition-colors" title="Ürün Detayları">Beyaz Sabun Çubuklu Oda Kokusu</Link>'nu hemen sipariş edin. <Link href="/hakkimizda" className="text-white hover:text-cream-100 font-semibold underline decoration-white/50 hover:decoration-white transition-colors" title="Hakkımızda">Pendik</Link>'ten tüm Türkiye'ye <em>hızlı kargo</em>.
                </p>
                <div className="space-y-4">
                  <a
                    href="https://www.karakarhome.com.tr/beyaz-sabun-oda-kokusu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center px-8 py-4 bg-white text-sage-700 rounded-full font-bold text-lg hover:bg-cream-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    Sipariş Ver - 689 TL
                  </a>
                  <Link
                    href="/urun-detayi"
                    className="block text-center px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105"
                  >
                    Ürün Detaylarını İncele
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 bg-white p-8 md:p-12 rounded-3xl shadow-xl max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-display font-bold text-sage-700 mb-6 text-center">Sıkça Sorulan Sorular</h2>
            <div className="space-y-6">
              <div className="p-6 bg-sage-50 rounded-xl">
                <h3 className="text-lg font-semibold text-sage-700 mb-3">Kargo ne kadar sürede ulaşır?</h3>
                <p className="text-sage-600 leading-relaxed">
                  İstanbul içi <strong>1-2 iş günü</strong>, Türkiye geneli <strong>2-4 iş günü</strong> içinde kargoya teslim edilir.
                </p>
              </div>

              <div className="p-6 bg-cream-50 rounded-xl">
                <h3 className="text-lg font-semibold text-sage-700 mb-3">İade politikanız nedir?</h3>
                <p className="text-sage-600 leading-relaxed">
                  Ürün hasarlı veya hatalı gelirse <em>14 gün</em> içinde iade edebilirsiniz. Detaylar için bize ulaşın.
                </p>
              </div>

              <div className="p-6 bg-powder-50 rounded-xl">
                <h3 className="text-lg font-semibold text-sage-700 mb-3">Toplu sipariş verebilir miyim?</h3>
                <p className="text-sage-600 leading-relaxed">
                  Evet! Toplu siparişler için <u>özel fiyat</u> sunuyoruz. Telefon veya e-posta ile iletişime geçin.
                </p>
              </div>

              <div className="p-6 bg-sage-50 rounded-xl">
                <h3 className="text-lg font-semibold text-sage-700 mb-3">Ödeme seçenekleri nelerdir?</h3>
                <p className="text-sage-600 leading-relaxed">
                  Kredi kartı, banka kartı ve <strong>havale/EFT</strong> ile ödeme yapabilirsiniz. Güvenli ödeme altyapısı kullanıyoruz.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
