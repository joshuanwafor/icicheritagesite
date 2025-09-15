'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // List of all images in the public/images folder
  const images = [
    'IMG_0089_red.JPG',
    'IMG_0090.JPG',
    'IMG_0091.JPG',
    'IMG_0092.JPG',
    'IMG_0094.JPG',
    'IMG_0095.JPG',
    'IMG_0096.JPG',
    'IMG_0098.JPG',
    'IMG_0099.JPG',
    'IMG_0102.JPG',
    'IMG_0104.JPG',
    'IMG_0107.JPG',
    'IMG_0108.JPG',
    'IMG_0109.JPG',
    'IMG_0111.JPG',
    'IMG_0114.JPG',
    'IMG_0116.JPG',
    'IMG_0117.JPG',
    'IMG_0118.JPG',
    'IMG_0120.JPG',
    'IMG_0121.JPG',
    'IMG_0123.JPG',
    'IMG_0124.JPG',
    'IMG_0126.JPG',
    'IMG_0127.JPG',
    'IMG_0128.JPG',
    'IMG_0129.JPG',
    'IMG_0130.JPG',
    'IMG_0132.JPG',
  ];

  const openModal = (imageName: string) => {
    setSelectedImage(imageName);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#170003] via-[#5C130C] to-[#170003]">
      {/* Hero Section */}
      <div className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span className="font-cinzel">ICIC</span>
            <span className="text-[#EDD671] font-cinzel"> Heritage</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#EDD671] font-cinzel italic mb-8">
            Gallery of Excellence
          </p>
          <p className="text-lg text-gray-300 font-pragmatica max-w-3xl mx-auto leading-relaxed">
            Explore our curated collection of luxury home décor pieces that embody the perfect blend 
            of Nigerian heritage and contemporary elegance. Each piece tells a story of craftsmanship, 
            prestige, and timeless beauty.
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((imageName, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => openModal(imageName)}
            >
              <div className="aspect-square relative">
                <Image
                  src={`/images/${imageName}`}
                  alt={`ICIC Heritage Product ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Full-Size Image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-[90vh] mx-4">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-[#EDD671] transition-colors duration-200 z-10"
              aria-label="Close modal"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative">
              <Image
                src={`/images/${selectedImage}`}
                alt={`ICIC Heritage Product - ${selectedImage}`}
                width={800}
                height={800}
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <div className="bg-[#5C130C] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            <span className="font-cinzel">Ready to Transform</span>
            <span className="text-[#EDD671] font-cinzel"> Your Space?</span>
          </h2>
          <p className="text-lg text-gray-300 font-pragmatica mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our luxury heritage pieces can elevate your home 
            with timeless elegance and royal sophistication.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-[#EDD671] text-[#170003] px-8 py-3 rounded-lg hover:bg-[#D4C05A] transition-colors duration-200 font-pragmatica font-semibold shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </a>
            <a
              href="/collection"
              className="border-2 border-[#EDD671] text-[#EDD671] px-8 py-3 rounded-lg hover:bg-[#EDD671] hover:text-[#170003] transition-colors duration-200 font-pragmatica font-semibold"
            >
              View Collection
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
