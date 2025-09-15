'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    // { name: 'Collection', href: '/collection' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
           <img src="/logo.png" alt="ICIC Heritage" className="h-10" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-black hover:text-[#EDD671] transition-colors duration-200 font-medium font-pragmatica group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#EDD671] transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/collection"
              aria-label="Explore our luxury collection"
              className="bg-[#5C130C] text-white px-6 py-2 rounded-lg hover:bg-[#170003] transition-colors duration-200 font-pragmatica font-medium shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5C130C] focus-visible:ring-offset-2"
            >
              Explore Collection
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-black hover:text-[#EDD671] hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#EDD671] focus:ring-offset-2 transition-all duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close main menu" : "Open main menu"}
          >
            <span className="sr-only">{isMenuOpen ? "Close main menu" : "Open main menu"}</span>
            {!isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 bg-white/98 backdrop-blur-sm">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-black hover:text-[#EDD671] hover:bg-gray-50 transition-all duration-200 font-medium font-pragmatica py-3 px-4 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/collection"
                aria-label="Explore our luxury collection"
                className="bg-[#5C130C] text-white px-6 py-3 rounded-lg hover:bg-[#170003] transition-colors duration-200 font-pragmatica font-medium text-center mt-4 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5C130C] focus-visible:ring-offset-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Explore Collection
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
