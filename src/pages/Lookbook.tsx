
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Tag } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Lookbook = () => {
  const [selectedCollection, setSelectedCollection] = useState('all');

const collections = [
  {
    id: 1,
    title: "2025 Spring – Tropical Noir",
    season: "Spring 2025",
    description: "Lush greens and bold prints under city lights. Kente-styled jackets meet streetwear.",
    images: [
      { id: 1, src: "/photos/set_1_img_1.png", alt: "Tropical Noir Look 1" },
      { id: 2, src: "/photos/set_1_img_2.png", alt: "Tropical Noir Look 2" },
      { id: 3, src: "/photos/set_1_img_3.png", alt: "Tropical Noir Look 3" },
      { id: 4, src: "/photos/set_1_img_4.png", alt: "Tropical Noir Look 4" }
    ],
    tags: ["streetwear", "kente", "urban", "green"],
    color: "from-green-800 to-emerald-600"
  },
  {
    id: 2,
    title: "2024 Summer – Safari Sunset",
    season: "Summer 2024",
    description: "Earth-toned linens and fluid dresses on a beach at dusk.",
    images: [
      { id: 5, src: "/photos/set_2_img_1.png", alt: "Safari Sunset Look 1" },
      { id: 6, src: "/photos/set_2_img_2.png", alt: "Safari Sunset Look 2" },
      { id: 7, src: "/photos/set_2_img_3.png", alt: "Safari Sunset Look 3" },
      { id: 8, src: "/photos/set_2_img_4.png", alt: "Safari Sunset Look 4" }
    ],
    tags: ["linen", "earth-tones", "beach", "sunset"],
    color: "from-orange-800 to-amber-600"
  },
  {
    id: 3,
    title: "2024 Fall – Urban Tribal",
    season: "Fall 2024",
    description: "Structured blazers with traditional patterns, shot in the concrete jungle.",
    images: [
      { id: 9, src: "/photos/set_3_img_1.png", alt: "Urban Tribal Look 1" },
      { id: 10, src: "/photos/set_3_img_3.png", alt: "Urban Tribal Look 2" },
      { id: 11, src: "/photos/set_3_img_4.jpg", alt: "Urban Tribal Look 3" },
      { id: 12, src: "/photos/set_3_img_4.png", alt: "Urban Tribal Look 4" }
    ],
    tags: ["blazers", "structured", "urban", "patterns"],
    color: "from-gray-800 to-slate-600"
  },
  {
    id: 4,
    title: "2024 Holiday – Modern Heritage",
    season: "Holiday 2024",
    description: "Glittering gold and deep indigo wax prints for festive nights.",
    images: [
      { id: 13, src: "/photos/set_4_img_1.jpg", alt: "Modern Heritage Look 1" },
      { id: 14, src: "/photos/set_4_img_2.jpg", alt: "Modern Heritage Look 2" },
      { id: 15, src: "/photos/set_4_img_3.jpg", alt: "Modern Heritage Look 3" },
      { id: 16, src: "/photos/set_4_img_4.jpg", alt: "Modern Heritage Look 4" }
    ],
    tags: ["gold", "indigo", "wax-prints", "festive"],
    color: "from-yellow-800 to-blue-800"
  }
];
  const filteredCollections = selectedCollection === 'all' 
    ? collections 
    : collections.filter(collection => collection.season.toLowerCase().includes(selectedCollection));

  return (
    <div className="min-h-screen bg-onyx">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 relative">
        <div className="absolute inset-0 african-pattern-overlay opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="hero-text mb-6">
              <span className="text-gold">Lookbook</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              See the Vision in Action. High-end visuals of models and influencers owning ZK outfits in real-world settings.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {['all', 'spring', 'summer', 'fall', 'holiday'].map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedCollection(filter)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCollection === filter
                    ? 'bg-gold text-onyx font-bold'
                    : 'bg-card text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {filteredCollections.map((collection, index) => (
              <div key={collection.id} className="group">
                {/* Collection Header */}
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <Calendar className="text-gold" size={20} />
                    <span className="text-gold font-medium">{collection.season}</span>
                  </div>
                  <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
                    {collection.title}
                  </h2>
                  <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-6">
                    {collection.description}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {collection.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center space-x-1 bg-card px-3 py-1 rounded-full text-sm text-gray-300"
                      >
                        <Tag size={12} />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {collection.images.map((image, imageIndex) => (
                    <div
                      key={image.id}
                      className="relative overflow-hidden rounded-2xl group/image hover:transform hover:scale-105 transition-all duration-500"
                      style={{ animationDelay: `${imageIndex * 0.1}s` }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-t ${collection.color} opacity-20 group-hover/image:opacity-40 transition-opacity duration-300`} />
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-96 object-cover group-hover/image:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-onyx/80 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover/image:opacity-100 transition-all duration-300 transform translate-y-4 group-hover/image:translate-y-0">
                        <button className="w-full luxury-button rounded-lg py-3 text-sm font-medium">
                          Shop This Look
                        </button>
                      </div>
                    </div>
                  ))}
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

export default Lookbook;
