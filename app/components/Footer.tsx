import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Collection', href: '/collection' },
    { name: 'Contact', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
  ];

  const contactInfo = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      text: '+234 805 494 5656',
      href: 'tel:+2348054945656'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      text: '+234 703 852 1520',
      href: 'tel:+2347038521520'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      text: 'info@icicheritage.com',
      href: 'mailto:info@icicheritage.com'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      text: 'ICIC Heritage – Nigeria',
      href: null
    },
  ];

  return (
    <footer className="bg-[#170003] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="text-3xl font-bold">
                <span className="font-cinzel">ICIC</span>
                <span className="text-[#EDD671] font-cinzel">Heritage</span>
              </div>
              <p className="text-[#EDD671] font-cinzel italic mt-2">
                Where Heritage Meets Elegance
              </p>
            </div>
            <p className="text-gray-300 font-pragmatica max-w-md leading-relaxed">
              Discover luxury home décor that blends timeless Nigerian heritage with majestic craftsmanship. 
              Every piece tells a story of prestige, elegance, and refinement.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-cinzel font-semibold mb-6 text-[#EDD671]">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#EDD671] transition-colors duration-200 font-pragmatica"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-cinzel font-semibold mb-6 text-[#EDD671]">
              Contact Us
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((contact, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="text-[#EDD671] mt-1 flex-shrink-0">
                    {contact.icon}
                  </div>
                  {contact.href ? (
                    <Link
                      href={contact.href}
                      className="text-gray-300 hover:text-[#EDD671] transition-colors duration-200 font-pragmatica"
                    >
                      {contact.text}
                    </Link>
                  ) : (
                    <span className="text-gray-300 font-pragmatica">
                      {contact.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm font-pragmatica">
              © {currentYear} ICIC Heritage. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-[#EDD671] text-sm font-pragmatica transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-[#EDD671] text-sm font-pragmatica transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Brand Strip */}
      <div className="bg-[#5C130C] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-center sm:text-left text-[#EDD671] font-cinzel text-sm">
              Capturing Heritage in a Prestigious and Royal Style
            </p>
            <div className="flex items-center space-x-2">
              <span className="text-gray-300 font-pragmatica text-xs">Powered by</span>
              <Link
                href="https://shopkeeperpos.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#EDD671] hover:text-white transition-colors duration-200 font-pragmatica font-semibold text-sm"
                aria-label="Visit Shopkeeper POS website"
              >
                Shopkeeper POS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
