import Link from 'next/link';

export default function About() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-[#5C130C] via-[#170003] to-black">
        <div className="absolute inset-0 opacity-20 brand-gradient">
          <div className="absolute inset-0 bg-gradient-to-br from-[#EDD671]/10 via-transparent to-[#EDD671]/5"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <p className="font-pragmatica uppercase tracking-[0.3em] text-xs sm:text-sm text-[#EDD671] mb-3 animate-fade-in-up">About Us</p>
          <h1 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in-up">
            Our <span className="text-[#EDD671]">Heritage Story</span>
          </h1>
          <div className="w-24 h-[2px] bg-[#EDD671] mx-auto mb-6 opacity-80 animate-fade-in-up delay-300"></div>
          <p className="font-pragmatica text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-600">
            Discover the vision, craftsmanship, and passion behind ICIC Heritage — where every piece tells a story of elegance and cultural pride.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-black mb-8">
                Our Story
              </h2>
              <div className="space-y-6">
                <p className="font-pragmatica text-lg text-gray-700 leading-relaxed">
                  ICIC Heritage was founded with a vision to bring <strong className="text-[#5C130C]">prestige and heritage into modern Nigerian homes</strong>. 
                  We believe a home should be more than just a place — it should be a reflection of culture, elegance, and timeless luxury.
                </p>
                <p className="font-pragmatica text-lg text-gray-700 leading-relaxed">
                  From our carefully selected décor pieces to our premium household items, every creation embodies 
                  <strong className="text-[#5C130C]"> royalty, craftsmanship, and enduring beauty</strong>.
                </p>
                <p className="font-pragmatica text-lg text-gray-700 leading-relaxed">
                  At ICIC Heritage, we don't just sell décor — <strong className="text-[#EDD671] bg-[#5C130C] px-2 py-1">we curate experiences of prestige</strong>.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-[#5C130C] to-[#170003] p-8 lg:p-12 rounded-xl overflow-hidden shadow-2xl ring-1 ring-[#EDD671]/20">
                <div className="text-center text-white">
                  <div className="font-cinzel text-5xl lg:text-6xl font-bold mb-4">ICIC</div>
                  <div className="font-cinzel text-3xl lg:text-4xl text-[#EDD671] mb-4">Heritage</div>
                  <div className="w-16 h-1 bg-[#EDD671] mx-auto mb-4"></div>
                  <p className="font-pragmatica text-sm lg:text-base opacity-90 italic">
                    "Capturing heritage in a prestigious and royal style"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* CEO Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/images/ceo.jpg"
                  alt="Mrs. Ruth Edokpayi - CEO of ICIC Heritage"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#EDD671]/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#5C130C]/10 rounded-full blur-2xl"></div>
            </div>

            {/* CEO Content */}
            <div className="order-1 lg:order-2">
              <div className="mb-6">
                <p className="font-pragmatica uppercase tracking-[0.2em] text-xs text-[#5C130C] mb-2">Leadership</p>
                <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-2">
                  Meet Our <span className="text-[#EDD671]">Visionary</span>
                </h2>
                <h3 className="font-cinzel text-2xl sm:text-3xl font-semibold text-[#5C130C] mb-4">
                  Mrs. Ruth Edokpayi
                </h3>
                <div className="w-16 h-1 bg-[#EDD671] mb-6"></div>
              </div>

              <div className="space-y-6">
                <p className="font-pragmatica text-lg text-gray-700 leading-relaxed">
                  At the helm of ICIC Heritage stands <strong className="text-[#5C130C]">Mrs. Ruth Edokpayi</strong>, 
                  a visionary leader dedicated to bringing <strong className="text-[#5C130C]">luxury and cultural heritage</strong> 
                  into every Nigerian home.
                </p>
                <p className="font-pragmatica text-lg text-gray-700 leading-relaxed">
                  With an unwavering commitment to <strong className="text-[#5C130C]">excellence and authenticity</strong>, 
                  Mrs. Edokpayi has built ICIC Heritage on the foundation of celebrating Nigerian culture while embracing 
                  contemporary elegance and timeless craftsmanship.
                </p>
                <p className="font-pragmatica text-lg text-gray-700 leading-relaxed">
                  Under her visionary leadership, ICIC Heritage continues to redefine luxury home décor, 
                  creating spaces that tell stories of <strong className="text-[#EDD671] bg-[#5C130C] px-2 py-1 rounded">
                  prestige, heritage, and sophisticated living</strong>.
                </p>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-[#5C130C] to-[#170003] rounded-xl text-white">
                <blockquote className="font-pragmatica text-lg italic leading-relaxed mb-4">
                  "Every piece we curate is a testament to our rich heritage and a bridge to contemporary luxury. 
                  At ICIC Heritage, we don't just decorate homes — we create legacies."
                </blockquote>
                <cite className="font-pragmatica text-sm text-[#EDD671] not-italic font-semibold">
                  — Mrs. Ruth Edokpayi, CEO & Founder
                </cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
              Our <span className="text-[#EDD671]">Philosophy</span>
            </h2>
            <p className="font-pragmatica text-lg text-gray-600 max-w-2xl mx-auto">
              Three core principles guide everything we create and curate for your home
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Heritage, captured with majesty */}
            <div className="text-center group p-8 rounded-xl border border-gray-100 bg-white hover:border-[#EDD671]/30 hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[#5C130C] to-[#170003] w-24 h-24 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 rounded-xl">
                <svg className="w-12 h-12 text-[#EDD671]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-cinzel text-2xl font-semibold text-black mb-4">Heritage</h3>
              <p className="font-pragmatica text-[#5C130C] font-medium mb-2">Captured with Majesty</p>
              <p className="font-pragmatica text-gray-600 leading-relaxed">
                Every piece honors Nigerian cultural heritage while embracing the grandeur of royal traditions.
              </p>
            </div>

            {/* Elegance, styled for modern living */}
            <div className="text-center group p-8 rounded-xl border border-gray-100 bg-white hover:border-[#EDD671]/30 hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[#5C130C] to-[#170003] w-24 h-24 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 rounded-xl">
                <svg className="w-12 h-12 text-[#EDD671]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="font-cinzel text-2xl font-semibold text-black mb-4">Elegance</h3>
              <p className="font-pragmatica text-[#5C130C] font-medium mb-2">Styled for Modern Living</p>
              <p className="font-pragmatica text-gray-600 leading-relaxed">
                Contemporary sophistication meets timeless beauty in every carefully curated design.
              </p>
            </div>

            {/* Luxury, designed to last */}
            <div className="text-center group p-8 rounded-xl border border-gray-100 bg-white hover:border-[#EDD671]/30 hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[#5C130C] to-[#170003] w-24 h-24 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 rounded-xl">
                <svg className="w-12 h-12 text-[#EDD671]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-cinzel text-2xl font-semibold text-black mb-4">Luxury</h3>
              <p className="font-pragmatica text-[#5C130C] font-medium mb-2">Designed to Last</p>
              <p className="font-pragmatica text-gray-600 leading-relaxed">
                Premium materials and exceptional craftsmanship ensure enduring beauty for generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Mission */}
            <div className="text-center lg:text-left bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#EDD671] to-[#d4c05a] mb-6 rounded-xl">
                <svg className="w-8 h-8 text-[#5C130C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-cinzel text-2xl lg:text-3xl font-bold text-black mb-6">Our Mission</h3>
              <p className="font-pragmatica text-lg text-gray-700 leading-relaxed mb-6">
                To transform Nigerian homes into sanctuaries of luxury by curating exceptional décor that celebrates our rich heritage 
                while embracing contemporary elegance.
              </p>
              <p className="font-pragmatica text-base text-gray-600 leading-relaxed">
                We are committed to providing our customers with premium household items that reflect prestige, quality, and cultural pride.
              </p>
            </div>

            {/* Vision */}
            <div className="text-center lg:text-left bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#EDD671] to-[#d4c05a] mb-6 rounded-xl">
                <svg className="w-8 h-8 text-[#5C130C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="font-cinzel text-2xl lg:text-3xl font-bold text-black mb-6">Our Vision</h3>
              <p className="font-pragmatica text-lg text-gray-700 leading-relaxed mb-6">
                To become Nigeria's premier luxury home décor brand, renowned for our commitment to heritage, craftsmanship, and timeless elegance.
              </p>
              <p className="font-pragmatica text-base text-gray-600 leading-relaxed">
                We envision homes across Nigeria adorned with pieces that tell stories of cultural pride and sophisticated living.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-[#170003] text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Experience <span className="text-[#EDD671]">Heritage</span> in Your Home
          </h2>
          <p className="font-pragmatica text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl mx-auto">
            Ready to transform your living space with pieces that celebrate both luxury and heritage? 
            Explore our curated collection today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/collection"
              aria-label="View our luxury collection"
              className="bg-[#EDD671] text-[#170003] px-8 py-4 font-pragmatica font-semibold text-lg hover:bg-[#d4c05a] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EDD671] focus-visible:ring-offset-2 focus-visible:ring-offset-[#170003] rounded-lg"
            >
              View Our Collection
            </Link>
            <Link
              href="/contact"
              aria-label="Get in touch with our team"
              className="border-2 border-[#EDD671] text-[#EDD671] px-8 py-4 font-pragmatica font-semibold text-lg hover:bg-[#EDD671] hover:text-[#170003] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EDD671] focus-visible:ring-offset-2 focus-visible:ring-offset-[#170003] rounded-lg"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
