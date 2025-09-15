'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You would typically send this to your backend or email service
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Call Us',
      details: ['+234 916 075 7433'],
      action: 'tel:+2349160757433',
      actionText: 'Call Now'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email Us',
      details: ['icicheritageltd0@gmail.com'],
      action: 'mailto:icicheritageltd0@gmail.com',
      actionText: 'Send Email'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Visit Us',
      details: ['Yingi, Rayfield – Jos South LGA, Plateau state'],
      action: null,
      actionText: null
    }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-[#5C130C] via-[#170003] to-black">
        <div className="absolute inset-0 opacity-20 brand-gradient">
          <div className="absolute inset-0 bg-gradient-to-br from-[#EDD671]/10 via-transparent to-[#EDD671]/5"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <p className="font-pragmatica uppercase tracking-[0.3em] text-xs sm:text-sm text-[#EDD671] mb-3 animate-fade-in-up">Contact Us</p>
          <h1 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in-up">
            Get in <span className="text-[#EDD671]">Touch</span>
          </h1>
          <div className="w-24 h-[2px] bg-[#EDD671] mx-auto mb-6 opacity-80 animate-fade-in-up delay-300"></div>
          <p className="font-pragmatica text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-6 animate-fade-in-up delay-600">
            We would love to hear from you. Reach out to discuss your luxury home décor needs or learn more about our heritage collection.
          </p>
          <p className="font-pragmatica text-base text-[#EDD671] font-medium animate-fade-in-up delay-900">
            Our team will reach out to you within 24 hours
          </p>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-black mb-4">
              Multiple Ways to <span className="text-[#EDD671]">Connect</span>
            </h2>
            <p className="font-pragmatica text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the most convenient way to reach our team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="text-center group p-8 rounded-xl border border-gray-100 bg-white hover:border-[#EDD671]/30 hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-br from-[#5C130C] to-[#170003] w-20 h-20 mx-auto mb-6 flex items-center justify-center text-[#EDD671] group-hover:scale-110 transition-transform duration-300 rounded-xl">
                  {method.icon}
                </div>
                <h3 className="font-cinzel text-2xl font-semibold text-black mb-4">{method.title}</h3>
                <div className="space-y-2 mb-6">
                  {method.details.map((detail, idx) => (
                    <p key={idx} className="font-pragmatica text-gray-700 text-lg">
                      {detail}
                    </p>
                  ))}
                </div>
                {method.action && method.actionText && (
                  <Link
                    href={method.action}
                    aria-label={`${method.actionText} - ${method.title}`}
                    className="inline-block bg-[#EDD671] text-[#5C130C] px-6 py-3 font-pragmatica font-semibold hover:bg-[#d4c05a] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EDD671] focus-visible:ring-offset-2 rounded-lg"
                  >
                    {method.actionText}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-black mb-8">
                Send Us a <span className="text-[#EDD671]">Message</span>
              </h2>
              <p className="font-pragmatica text-lg text-gray-700 mb-8 leading-relaxed">
                Fill out the contact form below and our team will reach out to you to discuss your luxury home décor needs.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block font-pragmatica font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EDD671] focus:border-[#EDD671] outline-none font-pragmatica transition-all duration-200 hover:border-gray-400"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block font-pragmatica font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EDD671] focus:border-[#EDD671] outline-none font-pragmatica transition-all duration-200 hover:border-gray-400"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block font-pragmatica font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EDD671] focus:border-[#EDD671] outline-none font-pragmatica transition-all duration-200 hover:border-gray-400"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block font-pragmatica font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EDD671] focus:border-[#EDD671] outline-none font-pragmatica transition-all duration-200 hover:border-gray-400"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="collection">Collection Information</option>
                    <option value="custom">Custom Order</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="support">Customer Support</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block font-pragmatica font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EDD671] focus:border-[#EDD671] outline-none font-pragmatica resize-vertical transition-all duration-200 hover:border-gray-400"
                    placeholder="Tell us about your luxury home décor needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#5C130C] text-white px-8 py-4 font-pragmatica font-semibold text-lg hover:bg-[#170003] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EDD671] focus-visible:ring-offset-2 rounded-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Additional Info & Business Hours */}
            <div className="space-y-12">
              {/* Business Hours */}
              <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="font-cinzel text-2xl font-bold text-black mb-6">Business Hours</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="font-pragmatica font-medium text-gray-700">Monday - Friday</span>
                    <span className="font-pragmatica text-gray-600">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="font-pragmatica font-medium text-gray-700">Saturday</span>
                    <span className="font-pragmatica text-gray-600">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-pragmatica font-medium text-gray-700">Sunday</span>
                    <span className="font-pragmatica text-gray-600">Closed</span>
                  </div>
                </div>
              </div>

              {/* Quick Services */}
              <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="font-cinzel text-2xl font-bold text-black mb-6">Our Services</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-gradient-to-br from-[#EDD671] to-[#d4c05a] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-pragmatica font-semibold text-gray-800 mb-1">Custom Orders</h4>
                      <p className="font-pragmatica text-gray-600 text-sm">Bespoke luxury décor tailored to your preferences</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-gradient-to-br from-[#EDD671] to-[#d4c05a] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-pragmatica font-semibold text-gray-800 mb-1">Design Consultation</h4>
                      <p className="font-pragmatica text-gray-600 text-sm">Expert advice on luxury home styling</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-gradient-to-br from-[#EDD671] to-[#d4c05a] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-pragmatica font-semibold text-gray-800 mb-1">Nationwide Delivery</h4>
                      <p className="font-pragmatica text-gray-600 text-sm">Premium shipping across Nigeria</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-gradient-to-br from-[#EDD671] to-[#d4c05a] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-pragmatica font-semibold text-gray-800 mb-1">Heritage Collections</h4>
                      <p className="font-pragmatica text-gray-600 text-sm">Curated pieces celebrating Nigerian culture</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-gradient-to-br from-[#5C130C] to-[#170003] p-8 text-white rounded-xl shadow-2xl ring-1 ring-[#EDD671]/20">
                <h3 className="font-cinzel text-2xl font-bold text-[#EDD671] mb-4">Visit Our Showroom</h3>
                <p className="font-pragmatica text-gray-200 mb-6">
                  Experience our luxury collection in person at our Nigerian showroom. 
                  See the craftsmanship and quality up close.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-[#EDD671] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="font-pragmatica">Yingi, Rayfield – Jos South LGA, Plateau state</span>
                  </div>
                  <p className="font-pragmatica text-sm text-gray-300 ml-8">
                    Call ahead to schedule a private viewing appointment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-black mb-6">
            Have <span className="text-[#EDD671]">Questions</span>?
          </h2>
          <p className="font-pragmatica text-lg text-gray-700 mb-8 leading-relaxed">
            Check out our frequently asked questions or reach out directly for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/faq"
              aria-label="View frequently asked questions"
              className="bg-[#EDD671] text-[#5C130C] px-8 py-4 font-pragmatica font-semibold text-lg hover:bg-[#d4c05a] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EDD671] focus-visible:ring-offset-2 rounded-lg"
            >
              View FAQ
            </Link>
            <Link
              href="/collection"
              aria-label="Browse our luxury collection"
              className="border-2 border-[#5C130C] text-[#5C130C] px-8 py-4 font-pragmatica font-semibold text-lg hover:bg-[#5C130C] hover:text-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5C130C] focus-visible:ring-offset-2 rounded-lg"
            >
              Browse Collection
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
