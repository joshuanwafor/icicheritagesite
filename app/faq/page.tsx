'use client';

import Link from 'next/link';
import { useState } from 'react';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const faqs: FAQ[] = [
    // From docs
    {
      id: 'what-makes-different',
      question: 'What makes ICIC Heritage different?',
      answer: 'Our collections are rooted in Nigeria\'s rich heritage and designed with luxury craftsmanship, offering décor that is both timeless and elegant. Every piece tells a story of prestige while celebrating our cultural identity.',
      category: 'brand'
    },
    {
      id: 'shipping-nationwide',
      question: 'Do you ship nationwide?',
      answer: 'Yes, ICIC Heritage ships across Nigeria. Premium shipping options are available to ensure your items arrive safely and in perfect condition.',
      category: 'shipping'
    },
    {
      id: 'custom-orders',
      question: 'Can I customize an order?',
      answer: 'Absolutely. We offer bespoke options for customers who desire personalized luxury for their homes. Our design team works closely with you to create pieces that match your vision and space.',
      category: 'orders'
    },
    {
      id: 'contact-team',
      question: 'How can I reach your team?',
      answer: 'You can call us at +234 805 494 5656 or +234 703 852 1520, email us at info@icicheritage.com, or use our contact form. Our support team is always available to assist.',
      category: 'contact'
    },
    // Additional relevant FAQs
    {
      id: 'payment-methods',
      question: 'What payment methods do you accept?',
      answer: 'We accept various payment methods including bank transfers, credit/debit cards, and mobile payment platforms. All transactions are secured and processed through encrypted channels for your safety.',
      category: 'payment'
    },
    {
      id: 'delivery-time',
      question: 'How long does delivery take?',
      answer: 'Standard delivery within Nigeria takes 3-7 business days depending on your location. Express delivery options are available for urgent orders. Custom pieces may require 2-4 weeks depending on complexity.',
      category: 'shipping'
    },
    {
      id: 'return-policy',
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for items in original condition. Custom-made pieces are non-returnable unless there\'s a manufacturing defect. Return shipping costs may apply.',
      category: 'returns'
    },
    {
      id: 'care-instructions',
      question: 'How do I care for my luxury décor pieces?',
      answer: 'Each piece comes with specific care instructions. Generally, use soft, dry cloths for dusting, avoid harsh chemicals, and keep items away from direct sunlight. We provide detailed care guides with every purchase.',
      category: 'care'
    },
    {
      id: 'wholesale-bulk',
      question: 'Do you offer wholesale or bulk pricing?',
      answer: 'Yes, we offer special pricing for bulk orders, interior designers, and business clients. Contact our sales team to discuss volume discounts and partnership opportunities.',
      category: 'business'
    },
    {
      id: 'showroom-visit',
      question: 'Can I visit your showroom?',
      answer: 'Yes, we welcome showroom visits by appointment. This allows you to experience our craftsmanship firsthand and receive personalized consultation from our design experts.',
      category: 'showroom'
    },
    {
      id: 'design-consultation',
      question: 'Do you offer interior design consultation?',
      answer: 'Yes, our experienced design consultants can help you create cohesive luxury interiors that reflect both heritage and modern elegance. Consultation fees may apply based on scope.',
      category: 'services'
    },
    {
      id: 'authenticity-guarantee',
      question: 'How do you guarantee authenticity and quality?',
      answer: 'Every ICIC Heritage piece comes with a certificate of authenticity and quality guarantee. We carefully select artisans and suppliers who meet our strict standards for craftsmanship and materials.',
      category: 'quality'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'brand', name: 'About ICIC Heritage' },
    { id: 'orders', name: 'Orders & Customization' },
    { id: 'shipping', name: 'Shipping & Delivery' },
    { id: 'payment', name: 'Payment & Pricing' },
    { id: 'returns', name: 'Returns & Exchanges' },
    { id: 'care', name: 'Care & Maintenance' },
    { id: 'services', name: 'Services' },
    { id: 'contact', name: 'Contact & Support' }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-[#5C130C] via-[#170003] to-black">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#EDD671]/10 via-transparent to-[#EDD671]/5"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Frequently Asked <span className="text-[#EDD671]">Questions</span>
          </h1>
          <p className="font-pragmatica text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
            Find answers to common questions about our luxury home décor collection, services, and policies.
          </p>
          <p className="font-pragmatica text-base text-[#EDD671] font-medium">
            Can't find what you're looking for? Contact our team directly.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search Bar */}
            <div className="flex-1 w-full">
              <div className="relative">
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-[#EDD671] focus:border-[#EDD671] outline-none font-pragmatica"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="w-full lg:w-auto">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full lg:w-auto px-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-[#EDD671] focus:border-[#EDD671] outline-none font-pragmatica bg-white"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-center">
            <p className="font-pragmatica text-gray-600">
              Showing {filteredFAQs.length} of {faqs.length} questions
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-16">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.562M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <h3 className="font-cinzel text-2xl font-bold text-gray-700 mb-2">No Questions Found</h3>
              <p className="font-pragmatica text-gray-600 mb-6">
                Try adjusting your search terms or category filter.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="bg-[#EDD671] text-[#5C130C] px-6 py-3 font-pragmatica font-semibold hover:bg-[#d4c05a] transition-colors duration-300"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFAQs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                  >
                    <h3 className="font-pragmatica font-semibold text-lg text-gray-800 pr-4">
                      {faq.question}
                    </h3>
                    <svg
                      className={`w-6 h-6 text-[#5C130C] transform transition-transform duration-200 flex-shrink-0 ${
                        openFAQ === faq.id ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFAQ === faq.id && (
                    <div className="px-6 pb-6 border-t border-gray-100">
                      <p className="font-pragmatica text-gray-700 leading-relaxed pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-20 bg-[#170003] text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Still Have <span className="text-[#EDD671]">Questions</span>?
          </h2>
          <p className="font-pragmatica text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl mx-auto">
            Our team is here to help with any additional questions about our luxury home décor collection or services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="bg-[#EDD671] text-[#170003] px-8 py-4 font-pragmatica font-semibold text-lg hover:bg-[#d4c05a] transition-colors duration-300 shadow-lg"
            >
              Contact Our Team
            </Link>
            <Link
              href="/collection"
              className="border-2 border-[#EDD671] text-[#EDD671] px-8 py-4 font-pragmatica font-semibold text-lg hover:bg-[#EDD671] hover:text-[#170003] transition-all duration-300"
            >
              Browse Collection
            </Link>
          </div>

          {/* Quick Contact Info */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <svg className="w-8 h-8 text-[#EDD671] mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p className="font-pragmatica text-gray-300 text-sm">Call Us</p>
                <p className="font-pragmatica text-white font-medium">+234 805 494 5656</p>
              </div>
              <div>
                <svg className="w-8 h-8 text-[#EDD671] mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="font-pragmatica text-gray-300 text-sm">Email Us</p>
                <p className="font-pragmatica text-white font-medium">info@icicheritage.com</p>
              </div>
              <div>
                <svg className="w-8 h-8 text-[#EDD671] mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="font-pragmatica text-gray-300 text-sm">Response Time</p>
                <p className="font-pragmatica text-white font-medium">Within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
