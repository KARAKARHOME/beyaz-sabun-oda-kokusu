'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Phone } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3 group" title="Beyaz Sabun Çubuklu Oda Kokusu - Ana Sayfa">
            <div className="relative flex items-center space-x-3">
              <Image 
                src="/logo.webp" 
                alt="Beyaz Sabun Çubuklu Oda Kokusu Logo" 
                width={50} 
                height={50}
                className="object-contain"
                priority
              />
              <div className="relative text-xl sm:text-2xl font-display font-bold text-sage-600 tracking-tight">
                Beyaz Sabun
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-sage-600 hover:text-sage-700 font-medium transition-colors duration-200 relative group"
            >
              Ana Sayfa
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sage-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/hakkimizda" 
              className="text-sage-600 hover:text-sage-700 font-medium transition-colors duration-200 relative group"
            >
              Hakkımızda
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sage-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/urun-detayi" 
              className="text-sage-600 hover:text-sage-700 font-medium transition-colors duration-200 relative group"
            >
              Ürün Detayı
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sage-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/iletisim" 
              className="text-sage-600 hover:text-sage-700 font-medium transition-colors duration-200 relative group"
            >
              İletişim
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sage-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:+905451814040"
              className="flex items-center space-x-2 text-sage-600 hover:text-sage-700 transition-colors duration-200"
            >
              <Phone className="w-5 h-5" />
              <span className="font-medium">0545 181 40 40</span>
            </a>
            <a
              href="https://www.karakarhome.com.tr/beyaz-sabun-oda-kokusu/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gradient-to-r from-sage-500 to-sage-600 text-white px-6 py-2.5 rounded-full hover:from-sage-600 hover:to-sage-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="font-semibold">Sipariş Ver</span>
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-sage-600 hover:text-sage-700 transition-colors duration-200"
            aria-label="Menü"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-sage-200 shadow-xl">
          <nav className="container mx-auto px-4 py-6 space-y-4">
            <Link 
              href="/" 
              className="block text-sage-600 hover:text-sage-700 font-medium py-2 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Ana Sayfa
            </Link>
            <Link 
              href="/hakkimizda" 
              className="block text-sage-600 hover:text-sage-700 font-medium py-2 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hakkımızda
            </Link>
            <Link 
              href="/urun-detayi" 
              className="block text-sage-600 hover:text-sage-700 font-medium py-2 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Ürün Detayı
            </Link>
            <Link 
              href="/iletisim" 
              className="block text-sage-600 hover:text-sage-700 font-medium py-2 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              İletişim
            </Link>
            <div className="pt-4 border-t border-sage-200 space-y-3">
              <a 
                href="tel:+905451814040"
                className="flex items-center space-x-2 text-sage-600 hover:text-sage-700 py-2 transition-colors duration-200"
              >
                <Phone className="w-5 h-5" />
                <span className="font-medium">0545 181 40 40</span>
              </a>
              <a
                href="https://www.karakarhome.com.tr/beyaz-sabun-oda-kokusu/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-sage-500 to-sage-600 text-white px-6 py-3 rounded-full hover:from-sage-600 hover:to-sage-700 transition-all duration-300 shadow-md"
              >
                <ShoppingCart className="w-5 h-5" />
                <span className="font-semibold">Sipariş Ver</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
