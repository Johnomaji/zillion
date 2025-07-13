
import { useState } from 'react';
import { Star, Heart, ShoppingBag, Filter, Eye } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [selectedSize, setSelectedSize] = useState('all');

  const products = [
  {
    id: 1,
    name: "Ankara Executive Blazer",
    category: "smart-casual",
    price: 189,
    originalPrice: 249,
    image: "/photos/ankara_executive_blazer.png",
    rating: 4.8,
    reviews: 124,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["gold", "burgundy", "electric"],
    isNew: true,
    description: "Tailored Ankara blazer perfect for professional settings with traditional flair."
  },
  {
    id: 2,
    name: "Kente Ceremonial Gown",
    category: "luxury",
    price: 1299,
    originalPrice: null,
    image: "/photos/kente_ceremonial_gown.png",
    rating: 4.9,
    reviews: 89,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["gold", "burgundy"],
    isNew: false,
    description: "Exquisite hand-woven Kente gown for special occasions and ceremonies."
  },
  {
    id: 3,
    name: "Urban Tribal Shirt",
    category: "smart-casual",
    price: 89,
    originalPrice: null,
    image: "/photos/urban_tribal_shirt.png",
    rating: 4.7,
    reviews: 203,
    sizes: ["S", "M", "L", "XL"],
    colors: ["onyx", "gold", "electric"],
    isNew: true,
    description: "Contemporary shirt with traditional patterns for everyday sophistication."
  },
  {
    id: 4,
    name: "Luxury Beaded Kaftan",
    category: "luxury",
    price: 899,
    originalPrice: 1099,
    image: "/photos/luxury_beaded_kaftan.png",
    rating: 4.8,
    reviews: 67,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["burgundy", "gold"],
    isNew: false,
    description: "Intricately beaded kaftan crafted from premium silk and velvet."
  },
  {
    id: 5,
    name: "Mudcloth Casual Jacket",
    category: "smart-casual",
    price: 159,
    originalPrice: null,
    image: "/photos/mudcloth_casual_jacket.png",
    rating: 4.6,
    reviews: 156,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["onyx", "africanprint"],
    isNew: false,
    description: "Lightweight jacket featuring authentic mudcloth patterns and modern cut."
  },
  {
    id: 6,
    name: "Royal Wax Print Suit",
    category: "luxury",
    price: 1899,
    originalPrice: null,
    image: "/photos/royal_wax_print_suit.png",
    rating: 5.0,
    reviews: 45,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["gold", "burgundy", "electric"],
    isNew: true,
    description: "Bespoke suit in luxurious wax print fabric with impeccable tailoring."
  }
];

  const filteredProducts = products.filter(product => {
    if (selectedCategory !== 'all' && product.category !== selectedCategory) return false;
    if (selectedPriceRange !== 'all') {
      const price = product.price;
      switch (selectedPriceRange) {
        case 'under-100': return price < 100;
        case '100-500': return price >= 100 && price <= 500;
        case '500-1000': return price > 500 && price <= 1000;
        case 'over-1000': return price > 1000;
        default: return true;
      }
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-onyx">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 relative">
        <div className="absolute inset-0 african-pattern-overlay opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="hero-text mb-6">
              Shop <span className="text-gold">Zillion Kulture</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover our curated collections of Afrofuturistic luxury fashion
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex items-center space-x-2">
              <Filter className="text-gold" size={20} />
              <span className="text-white font-medium">Filter by:</span>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-card border border-gray-700 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
              >
                <option value="all">All Categories</option>
                <option value="smart-casual">Smart Casual</option>
                <option value="luxury">Luxury Collection</option>
              </select>

              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="bg-card border border-gray-700 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
              >
                <option value="all">All Prices</option>
                <option value="under-100">Under $100</option>
                <option value="100-500">$100 - $500</option>
                <option value="500-1000">$500 - $1000</option>
                <option value="over-1000">Over $1000</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="glass-card group hover:transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-onyx/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {product.isNew && (
                      <span className="bg-gold text-onyx px-3 py-1 rounded-full text-sm font-bold">
                        NEW
                      </span>
                    )}
                    {product.originalPrice && (
                      <span className="bg-burgundy text-white px-3 py-1 rounded-full text-sm font-bold">
                        SALE
                      </span>
                    )}
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                      <Heart size={20} className="text-burgundy" />
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
                    <button className="flex-1 luxury-button rounded-lg py-2 text-sm">
                      <Eye size={16} className="mr-2" />
                      Try On
                    </button>
                    <button className="flex-1 bg-white/90 text-onyx py-2 rounded-lg hover:bg-white transition-colors text-sm font-medium">
                      <ShoppingBag size={16} className="mr-2 inline" />
                      Add to Cart
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gold font-medium">
                      {product.category === 'smart-casual' ? 'Smart Casual' : 'Luxury Collection'}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="text-gold fill-current" size={16} />
                      <span className="text-sm text-gray-300">{product.rating}</span>
                      <span className="text-sm text-gray-500">({product.reviews})</span>
                    </div>
                  </div>
                  
                  <h3 className="font-playfair text-xl font-bold text-white mb-2">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-gold text-xl">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-gray-500 line-through text-sm">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <span>Sizes:</span>
                      <span>{product.sizes.join(', ')}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;
