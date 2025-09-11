'use client';

import Link from 'next/link';
import { useState, useMemo } from 'react';
import { products } from '../../data/products';

interface Product {
  _id: string;
  name: string;
  description: string;
  primaryPhoto: string;
  amount: number;
  availability: string;
  stockQuantity: number;
  SKU: string;
}

interface ProductCardProps {
  product: Product;
  status: {
    text: string;
    color: string;
    bgColor: string;
  };
}

function ProductCard({ product, status }: ProductCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(false);
  };

  return (
    <div className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 group">
     
     <div  style={{
      paddingTop: '100%',
      backgroundImage: `url(${product.primaryPhoto})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
     }}/>
  
      {/* Product Info */}
      <div className="p-6">
        <h3 className="font-cinzel text-lg font-semibold text-black mb-2 truncate">
          {product.name}
        </h3>
        {product.description && (
          <p className="font-pragmatica text-gray-600 text-sm mb-3 line-clamp-2">
            {product.description}
          </p>
        )}
        <div className="mb-4">
          <span className="font-pragmatica text-2xl font-bold text-[#5C130C]">
            {formatPrice(product.amount)}
          </span>
        </div>
        {/* Action Buttons */}
        <div className="flex gap-2">
          <button
            disabled={true}
            className="flex-1 bg-gray-400 text-white py-3 font-pragmatica font-semibold cursor-not-allowed"
          >
            Add to Cart
          </button>
          <button disabled={true} className="px-4 py-3 border border-gray-400 text-gray-400 cursor-not-allowed">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Collection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [priceRange, setPriceRange] = useState('all');
  const [availabilityFilter, setAvailabilityFilter] = useState('all');

  // Filter products with images only and format them
  const productsWithImages = useMemo(() => {
    const filtered = products
      .filter((product: any) => {
        const hasImage = product.primaryPhoto && product.primaryPhoto.trim() !== '';
        return hasImage && product.primaryPhoto.startsWith('https://');
      })
      .map((product: any) => ({
        _id: product._id,
        name: product.name,
        description: product.description || '',
        primaryPhoto: product.primaryPhoto,
        amount: product.amount,
        availability: product.availability,
        stockQuantity: product.stockQuantity,
        SKU: product.SKU
      }));
    console.log('🎯 Collection page - Products with images found:', filtered.length);
    console.log('📷 Sample products:', filtered.slice(0, 2).map(p => ({ name: p.name, url: p.primaryPhoto })));
    return filtered;
  }, []);

  // Apply filters and search
  const filteredProducts = useMemo(() => {
    let filtered = productsWithImages.filter((product: Product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Price range filter
    if (priceRange !== 'all') {
      filtered = filtered.filter((product: Product) => {
        const price = product.amount;
        switch (priceRange) {
          case 'under-50k':
            return price < 50000;
          case '50k-100k':
            return price >= 50000 && price < 100000;
          case '100k-200k':
            return price >= 100000 && price < 200000;
          case 'over-200k':
            return price >= 200000;
          default:
            return true;
        }
      });
    }

    // Availability filter
    if (availabilityFilter !== 'all') {
      filtered = filtered.filter((product: Product) =>
        product.availability === availabilityFilter
      );
    }

    // Sort products
    filtered.sort((a: Product, b: Product) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price-low':
          return a.amount - b.amount;
        case 'price-high':
          return b.amount - a.amount;
        case 'availability':
          return a.availability.localeCompare(b.availability);
        default:
          return 0;
      }
    });

    return filtered;
  }, [productsWithImages, searchTerm, sortBy, priceRange, availabilityFilter]);

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const getAvailabilityStatus = (availability: string, stockQuantity: number) => {
    if (availability === 'in-stock' && stockQuantity > 0) {
      return { text: 'In Stock', color: 'text-green-600', bgColor: 'bg-green-50' };
    } else if (availability === 'out-of-stock' || stockQuantity === 0) {
      return { text: 'Out of Stock', color: 'text-red-600', bgColor: 'bg-red-50' };
    } else {
      return { text: 'Limited Stock', color: 'text-yellow-600', bgColor: 'bg-yellow-50' };
    }
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
            Our Luxury <span className="text-[#EDD671]">Collection</span>
          </h1>
          <p className="font-pragmatica text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
            Discover our curated selection of premium home décor and household items, each piece carefully chosen to bring elegance and heritage into your living space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
            <div className="flex items-center space-x-2 text-[#EDD671]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-pragmatica">Premium Quality</span>
            </div>
            <div className="flex items-center space-x-2 text-[#EDD671]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-pragmatica">Fast Delivery</span>
            </div>
            <div className="flex items-center space-x-2 text-[#EDD671]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-pragmatica">Authentic Heritage</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Search Bar */}
            <div className="lg:col-span-2">
              <div className="relative">
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search our collection..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 focus:ring-2 focus:ring-[#EDD671] focus:border-[#EDD671] outline-none font-pragmatica"
                />
              </div>
            </div>

            {/* Sort By */}
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-[#EDD671] focus:border-[#EDD671] outline-none font-pragmatica bg-white"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="availability">Availability</option>
              </select>
            </div>

            {/* Price Range */}
            <div>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-[#EDD671] focus:border-[#EDD671] outline-none font-pragmatica bg-white"
              >
                <option value="all">All Prices</option>
                <option value="under-50k">Under ₦50,000</option>
                <option value="50k-100k">₦50,000 - ₦100,000</option>
                <option value="100k-200k">₦100,000 - ₦200,000</option>
                <option value="over-200k">Over ₦200,000</option>
              </select>
            </div>
          </div>

          {/* Results Summary */}
          <div className="mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <p className="font-pragmatica text-gray-600">
              Showing {filteredProducts.length} of {productsWithImages.length} products
            </p>
            <div className="mt-2 sm:mt-0">
              <select
                value={availabilityFilter}
                onChange={(e) => setAvailabilityFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-[#EDD671] focus:border-[#EDD671] outline-none font-pragmatica bg-white text-sm"
              >
                <option value="all">All Items</option>
                <option value="in-stock">In Stock Only</option>
                <option value="out-of-stock">Out of Stock</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
              <h3 className="font-cinzel text-2xl font-bold text-gray-700 mb-2">No Products Found</h3>
              <p className="font-pragmatica text-gray-600 mb-6">
                Try adjusting your search terms or filters.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setPriceRange('all');
                  setAvailabilityFilter('all');
                  setSortBy('name');
                }}
                className="bg-[#EDD671] text-[#5C130C] px-6 py-3 font-pragmatica font-semibold hover:bg-[#d4c05a] transition-colors duration-300"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product: Product) => {
                const status = getAvailabilityStatus(product.availability, product.stockQuantity);
                return (
                  <ProductCard key={product._id} product={product} status={status} />
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-[#170003] text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold mb-6">
            Need Help Choosing the <span className="text-[#EDD671]">Perfect Pieces</span>?
          </h2>
          <p className="font-pragmatica text-lg text-gray-200 mb-8 leading-relaxed max-w-2xl mx-auto">
            Our design experts are here to help you create the perfect luxury living space.
            Contact us for personalized recommendations and bespoke options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#EDD671] text-[#170003] px-8 py-4 font-pragmatica font-semibold text-lg hover:bg-[#d4c05a] transition-colors duration-300"
            >
              Get Design Consultation
            </Link>
            <Link
              href="/about"
              className="border-2 border-[#EDD671] text-[#EDD671] px-8 py-4 font-pragmatica font-semibold text-lg hover:bg-[#EDD671] hover:text-[#170003] transition-all duration-300"
            >
              Learn Our Story
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
