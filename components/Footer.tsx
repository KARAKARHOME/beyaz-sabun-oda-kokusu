'use client';

import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-sage-50 via-cream-100 to-powder-50 border-t border-sage-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold text-sage-700">Beyaz Sabun Çubuklu Oda Kokusu</h3>
            <p className="text-sage-600 leading-relaxed">
              Beyaz sabun esintisiyle evinize ferahlık getiren premium <Link href="/urun-detayi" className="text-sage-700 hover:text-sage-800 font-semibold underline decoration-sage-400 hover:decoration-sage-600 transition-colors duration-200" title="Ürün Detayları">çubuklu oda kokusu</Link>. KARAKAR HOME kalitesiyle <Link href="https://www.karakarhome.com.tr/oda-kokulari/" target="_blank" rel="noopener noreferrer" className="text-sage-700 hover:text-sage-800 underline decoration-sage-400 hover:decoration-sage-600 transition-colors duration-200" title="Tüm Oda Kokuları">oda kokusu</Link> çeşitleri.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://www.facebook.com/KARAKARHOME/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sage-600 hover:text-sage-700 transition-colors duration-200 hover:scale-110 transform"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="https://www.instagram.com/karakarhome" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sage-600 hover:text-sage-700 transition-colors duration-200 hover:scale-110 transform"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://x.com/karakarhome" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sage-600 hover:text-sage-700 transition-colors duration-200 hover:scale-110 transform"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a 
                href="https://www.youtube.com/@KARAKARHOME" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sage-600 hover:text-sage-700 transition-colors duration-200 hover:scale-110 transform"
                aria-label="YouTube"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-sage-700">Hızlı Bağlantılar</h4>
            <nav className="flex flex-col space-y-2">
              <Link 
                href="/" 
                className="text-sage-600 hover:text-sage-700 transition-colors duration-200 hover:translate-x-1 transform inline-block"
              >
                Ana Sayfa
              </Link>
              <Link 
                href="/hakkimizda" 
                className="text-sage-600 hover:text-sage-700 transition-colors duration-200 hover:translate-x-1 transform inline-block"
              >
                Hakkımızda
              </Link>
              <Link 
                href="/urun-detayi" 
                className="text-sage-600 hover:text-sage-700 transition-colors duration-200 hover:translate-x-1 transform inline-block"
              >
                Ürün Detayı
              </Link>
              <Link 
                href="/iletisim" 
                className="text-sage-600 hover:text-sage-700 transition-colors duration-200 hover:translate-x-1 transform inline-block"
              >
                İletişim
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-sage-700">İletişim Bilgileri</h4>
            <div className="space-y-3">
              <a 
                href="tel:+905451814040" 
                className="flex items-start space-x-3 text-sage-600 hover:text-sage-700 transition-colors duration-200 group"
              >
                <Phone className="w-5 h-5 mt-0.5 group-hover:scale-110 transform transition-transform duration-200" />
                <span>+90 545 181 40 40</span>
              </a>
              <a 
                href="mailto:info@beyazsabunodakokusu.com.tr" 
                className="flex items-start space-x-3 text-sage-600 hover:text-sage-700 transition-colors duration-200 group"
              >
                <Mail className="w-5 h-5 mt-0.5 group-hover:scale-110 transform transition-transform duration-200" />
                <span className="break-all">info@beyazsabunodakokusu.com.tr</span>
              </a>
              <div className="flex items-start space-x-3 text-sage-600">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Esenyalı Mah. Edebali Cad. No:13/A 34903 Pendik / İstanbul</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-sage-700">Destek</h4>
            <div className="space-y-3">
              <a 
                href="https://wa.me/905451814040?text=Merhaba" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-green-500 text-white px-4 py-2.5 rounded-lg hover:bg-green-600 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="font-medium">WhatsApp</span>
              </a>
              <a 
                href="https://tawk.to/karakar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-sage-500 text-white px-4 py-2.5 rounded-lg hover:bg-sage-600 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="font-medium">Canlı Destek</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-sage-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sage-600 text-sm text-center md:text-left">
              © {currentYear} <strong>KARAKAR HOME</strong>. Tüm hakları saklıdır.
            </p>
            <p className="text-sage-600 text-sm text-center md:text-right">
              Beyaz Sabun Çubuklu Oda Kokusu - Premium Kalite
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
