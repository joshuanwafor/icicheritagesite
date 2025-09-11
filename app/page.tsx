import Link from 'next/link';

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#5C130C] via-[#170003] to-black">
        {/* Background Pattern/Overlay */}
        <div className="absolute inset-0 opacity-20 brand-gradient">
          <div className="absolute inset-0 bg-gradient-to-br from-[#EDD671]/5 via-transparent to-[#EDD671]/10"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, rgba(237, 214, 113, 0.1) 0%, transparent 50%), 
                              radial-gradient(circle at 80% 80%, rgba(237, 214, 113, 0.1) 0%, transparent 50%)`
          }}></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <p className="font-pragmatica uppercase tracking-[0.3em] text-xs sm:text-sm text-[#EDD671] mb-3 animate-fade-in-up">ICIC Heritage</p>
          <h1 className="font-cinzel text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 animate-fade-in-up">
            <span className="block">Where Heritage</span>
            <span className="block text-[#EDD671]">Meets Elegance</span>
          </h1>
          <div className="w-24 h-[2px] bg-[#EDD671] mx-auto mb-6 opacity-80 animate-fade-in-up delay-300"></div>
          
          <p className="font-pragmatica text-lg sm:text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-600">
            Discover luxury home décor that blends timeless Nigerian heritage with majestic craftsmanship. 
            Every piece tells a story of prestige, elegance, and refinement.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-900">
            <Link
              href="/collection"
              aria-label="Explore our collection"
              className="bg-[#EDD671] text-[#170003] px-8 py-4 font-pragmatica font-semibold text-lg hover:bg-[#d4c05a] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EDD671] focus-visible:ring-offset-2 focus-visible:ring-offset-[#170003]"
            >
              Explore Our Collection →
            </Link>
            <Link
              href="/about"
              aria-label="Read our story"
              className="border-2 border-[#EDD671] text-[#EDD671] px-8 py-4 font-pragmatica font-semibold text-lg hover:bg-[#EDD671] hover:text-[#170003] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EDD671] focus-visible:ring-offset-2 focus-visible:ring-offset-[#170003]"
            >
              Our Story
            </Link>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" aria-hidden="true">
          <svg className="w-7 h-7 text-[#EDD671]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
              Designed for <span className="text-[#EDD671]">Royal Living</span>
            </h2>
            <p className="font-pragmatica text-lg text-gray-600 max-w-2xl mx-auto">
              Transform your home into a sanctuary of luxury with our carefully curated collection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Majestic Designs */}
            <div className="text-center group p-8 rounded-xl border border-gray-100 bg-white hover:border-[#EDD671]/30 hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[#5C130C] to-[#170003] w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-[#EDD671]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="font-cinzel text-2xl font-semibold text-black mb-4">Majestic Designs</h3>
              <p className="font-pragmatica text-gray-600 leading-relaxed">
                Curated home items inspired by heritage and crafted for modern luxury living spaces.
              </p>
            </div>

            {/* Quality You Can Trust */}
            <div className="text-center group p-8 rounded-xl border border-gray-100 bg-white hover:border-[#EDD671]/30 hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[#5C130C] to-[#170003] w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-[#EDD671]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-cinzel text-2xl font-semibold text-black mb-4">Quality You Can Trust</h3>
              <p className="font-pragmatica text-gray-600 leading-relaxed">
                Every detail reflects excellence, from premium materials to flawless finishing touches.
              </p>
            </div>

            {/* Timeless Elegance */}
            <div className="text-center group p-8 rounded-xl border border-gray-100 bg-white hover:border-[#EDD671]/30 hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[#5C130C] to-[#170003] w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-[#EDD671]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="font-cinzel text-2xl font-semibold text-black mb-4">Timeless Elegance</h3>
              <p className="font-pragmatica text-gray-600 leading-relaxed">
                Décor that elevates your living space into a masterpiece of enduring beauty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-black mb-6">
                Our <span className="text-[#EDD671]">Heritage Story</span>
              </h2>
              <p className="font-pragmatica text-lg text-gray-700 mb-6 leading-relaxed">
                ICIC Heritage was founded with a vision to bring prestige and heritage into modern Nigerian homes. 
                We believe a home should be more than just a place — it should be a reflection of culture, elegance, and timeless luxury.
              </p>
              <p className="font-pragmatica text-lg text-gray-700 mb-8 leading-relaxed">
                From our carefully selected décor pieces to our premium household items, every creation embodies 
                <span className="font-semibold text-[#5C130C]"> royalty, craftsmanship, and enduring beauty</span>.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center font-pragmatica font-semibold text-[#5C130C] hover:text-[#170003] transition-colors duration-200"
              >
                Learn More About Us
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#5C130C] to-[#170003] h-96 flex items-center justify-center rounded-xl overflow-hidden shadow-2xl ring-1 ring-[#EDD671]/20">
                <div className="text-center text-white">
                  <div className="font-cinzel text-4xl font-bold mb-4">ICIC</div>
                  <div className="font-cinzel text-2xl text-[#EDD671] mb-2">Heritage</div>
                  <div className="font-pragmatica text-sm opacity-75">Capturing heritage in a prestigious and royal style</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-[#170003] text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your <span className="text-[#EDD671]">Home</span>?
          </h2>
          <p className="font-pragmatica text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
            Discover our exclusive collection of luxury home décor and experience the perfect blend of heritage and modern elegance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/collection"
              aria-label="Explore the collection"
              className="bg-[#EDD671] text-[#170003] px-8 py-4 font-pragmatica font-semibold text-lg hover:bg-[#d4c05a] transition-colors duration-300 shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EDD671] focus-visible:ring-offset-2 focus-visible:ring-offset-[#170003]"
            >
              Explore Collection
            </Link>
            <Link
              href="/contact"
              aria-label="Get in touch with our team"
              className="border-2 border-[#EDD671] text-[#EDD671] px-8 py-4 font-pragmatica font-semibold text-lg hover:bg-[#EDD671] hover:text-[#170003] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EDD671] focus-visible:ring-offset-2 focus-visible:ring-offset-[#170003]"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
