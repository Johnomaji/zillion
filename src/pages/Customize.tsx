
import { useState } from 'react';
import { Palette, Scissors, Ruler, Sparkles, Download, Eye } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Customize = () => {
  const [selectedCategory, setSelectedCategory] = useState('blazers');
  const [selectedFabric, setSelectedFabric] = useState('ankara');
  const [selectedFit, setSelectedFit] = useState('regular');
  const [selectedColor, setSelectedColor] = useState('gold');
  const [measurements, setMeasurements] = useState({
    chest: '',
    waist: '',
    hips: '',
    length: ''
  });
const categories = [
  { id: 'blazers', name: 'Blazers', icon: '🧥', preview: '/photos/ankara_executive_blazer.png' },
  { id: 'dresses', name: 'Dresses', icon: '👗', preview: '/photos/kente_ceremonial_gown.png' },
  { id: 'shirts', name: 'Shirts', icon: '👔', preview: '/photos/urban_tribal_shirt.png' },
  { id: 'kaftans', name: 'Kaftans', icon: '👘', preview: '/photos/luxury_beaded_kaftan.png' },
  { id: 'suits', name: 'Suits', icon: '🤵', preview: '/photos/royal_wax_print_suit.png' },
  { id: 'accessories', name: 'Accessories', icon: '👜', preview: '/photos/set_4_img_2.jpg' }, // You can change this to any relevant accessory image
];
  const fabrics = [
    { id: 'ankara', name: 'Ankara Print', price: 0, texture: 'Cotton blend with vibrant wax prints' },
    { id: 'kente', name: 'Kente Strips', price: 50, texture: 'Hand-woven silk with traditional patterns' },
    { id: 'mudcloth', name: 'Mudcloth', price: 30, texture: 'Organic cotton with earth-tone designs' },
    { id: 'silk', name: 'Premium Silk', price: 80, texture: 'Luxurious silk with subtle sheen' },
    { id: 'velvet', name: 'Royal Velvet', price: 60, texture: 'Rich velvet with deep texture' },
    { id: 'brocade', name: 'Gold Brocade', price: 90, texture: 'Metallic thread woven fabric' }
  ];

  const fits = [
    { id: 'slim', name: 'Slim Fit', description: 'Tailored close to the body' },
    { id: 'regular', name: 'Regular Fit', description: 'Classic comfortable fit' },
    { id: 'relaxed', name: 'Relaxed Fit', description: 'Loose and comfortable' },
    { id: 'oversized', name: 'Oversized', description: 'Deliberately large silhouette' }
  ];

  const colors = [
    { id: 'gold', name: 'Gold', color: 'bg-gold' },
    { id: 'burgundy', name: 'Burgundy', color: 'bg-burgundy' },
    { id: 'electric', name: 'Electric Blue', color: 'bg-electric' },
    { id: 'onyx', name: 'Onyx Black', color: 'bg-onyx' },
    { id: 'africanprint', name: 'African Print', color: 'bg-africanprint' },
    { id: 'white', name: 'Pure White', color: 'bg-white' }
  ];

  const customizations = [
    { id: 'collar', name: 'Contrasting Collar', price: 25 },
    { id: 'lining', name: 'Custom Lining', price: 35 },
    { id: 'buttons', name: 'Statement Buttons', price: 20 },
    { id: 'embroidery', name: 'Embroidered Initials', price: 40 },
    { id: 'pockets', name: 'Additional Pockets', price: 30 },
    { id: 'trim', name: 'Decorative Trim', price: 45 }
  ];

  const [selectedCustomizations, setSelectedCustomizations] = useState<string[]>([]);

  const basePrice = 189;
  const fabricPrice = fabrics.find(f => f.id === selectedFabric)?.price || 0;
  const customizationPrice = selectedCustomizations.reduce((total, customId) => {
    const custom = customizations.find(c => c.id === customId);
    return total + (custom?.price || 0);
  }, 0);
  const totalPrice = basePrice + fabricPrice + customizationPrice;

  const toggleCustomization = (customId: string) => {
    setSelectedCustomizations(prev =>
      prev.includes(customId)
        ? prev.filter(id => id !== customId)
        : [...prev, customId]
    );
  };

  return (
    <div className="min-h-screen bg-onyx">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 relative">
        <div className="absolute inset-0 african-pattern-overlay opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="hero-text mb-6">
              <span className="text-gold">Customize</span> Your Style
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Everything Is Yours to Design. Create a unique piece that reflects your personal style and heritage.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Preview Panel */}
            <div className="space-y-6">
              <div className="glass-card p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-playfair text-2xl font-bold text-white">
                    Live Preview
                  </h3>
                  <div className="flex items-center space-x-2">
                    <button className="bg-card text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                      <Eye size={16} className="mr-2" />
                      Virtual Try-On
                    </button>
                  </div>
                </div>
                
                <div className="aspect-[3/4] bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden mb-6 relative">
                  <img
                    src={categories.find(c => c.id === selectedCategory)?.preview}
                    alt="Customized Design"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-onyx/30 to-transparent" />
                  
                  {/* Customization Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="glass-card p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-white font-medium">
                            Custom {categories.find(c => c.id === selectedCategory)?.name}
                          </h4>
                          <p className="text-gray-400 text-sm">
                            {fabrics.find(f => f.id === selectedFabric)?.name} • {fits.find(f => f.id === selectedFit)?.name}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-gold font-bold text-xl">${totalPrice}</div>
                          <div className="text-gray-400 text-sm">Made to Order</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button className="w-full luxury-button rounded-lg py-4 text-lg font-medium">
                    <Sparkles className="mr-2" size={20} />
                    Add to Cart - ${totalPrice}
                  </button>
                  <button className="w-full bg-card text-white border border-gray-700 py-3 rounded-lg hover:bg-gray-700 transition-colors">
                    <Download className="mr-2" size={16} />
                    Save Design
                  </button>
                </div>
              </div>
            </div>

            {/* Customization Panel */}
            <div className="space-y-6">
              
              {/* Step 1: Choose Category */}
              <div className="glass-card p-6">
                <h3 className="font-playfair text-xl font-bold text-white mb-4 flex items-center">
                  <span className="bg-gold text-onyx w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                  Choose Your Style
                </h3>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`p-4 rounded-lg border-2 transition-all duration-300 text-center ${
                        selectedCategory === category.id
                          ? 'border-gold bg-gold/10'
                          : 'border-gray-700 hover:border-gray-600'
                      }`}
                    >
                      <div className="text-3xl mb-2">{category.icon}</div>
                      <p className="text-white font-medium text-sm">{category.name}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Select Fabric */}
              <div className="glass-card p-6">
                <h3 className="font-playfair text-xl font-bold text-white mb-4 flex items-center">
                  <span className="bg-gold text-onyx w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                  <Palette className="mr-2" size={20} />
                  Choose Your Fabric
                </h3>
                <div className="space-y-3">
                  {fabrics.map((fabric) => (
                    <button
                      key={fabric.id}
                      onClick={() => setSelectedFabric(fabric.id)}
                      className={`w-full p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                        selectedFabric === fabric.id
                          ? 'border-gold bg-gold/10'
                          : 'border-gray-700 hover:border-gray-600'
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-white font-medium">{fabric.name}</p>
                          <p className="text-gray-400 text-sm">{fabric.texture}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-gold font-medium">
                            {fabric.price > 0 ? `+$${fabric.price}` : 'Included'}
                          </span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Select Fit */}
              <div className="glass-card p-6">
                <h3 className="font-playfair text-xl font-bold text-white mb-4 flex items-center">
                  <span className="bg-gold text-onyx w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                  <Scissors className="mr-2" size={20} />
                  Tailor the Fit
                </h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {fits.map((fit) => (
                    <button
                      key={fit.id}
                      onClick={() => setSelectedFit(fit.id)}
                      className={`p-4 rounded-lg border-2 transition-all duration-300 text-center ${
                        selectedFit === fit.id
                          ? 'border-gold bg-gold/10'
                          : 'border-gray-700 hover:border-gray-600'
                      }`}
                    >
                      <p className="text-white font-medium">{fit.name}</p>
                      <p className="text-gray-400 text-sm">{fit.description}</p>
                    </button>
                  ))}
                </div>

                {/* Measurements */}
                <div className="space-y-4">
                  <h4 className="text-white font-medium flex items-center">
                    <Ruler className="mr-2 text-gold" size={16} />
                    Custom Measurements (Optional)
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Chest (inches)"
                      value={measurements.chest}
                      onChange={(e) => setMeasurements({...measurements, chest: e.target.value})}
                      className="bg-card border border-gray-700 text-white px-3 py-2 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                    />
                    <input
                      type="text"
                      placeholder="Waist (inches)"
                      value={measurements.waist}
                      onChange={(e) => setMeasurements({...measurements, waist: e.target.value})}
                      className="bg-card border border-gray-700 text-white px-3 py-2 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                    />
                    <input
                      type="text"
                      placeholder="Hips (inches)"
                      value={measurements.hips}
                      onChange={(e) => setMeasurements({...measurements, hips: e.target.value})}
                      className="bg-card border border-gray-700 text-white px-3 py-2 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                    />
                    <input
                      type="text"
                      placeholder="Length (inches)"
                      value={measurements.length}
                      onChange={(e) => setMeasurements({...measurements, length: e.target.value})}
                      className="bg-card border border-gray-700 text-white px-3 py-2 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Step 4: Color Selection */}
              <div className="glass-card p-6">
                <h3 className="font-playfair text-xl font-bold text-white mb-4 flex items-center">
                  <span className="bg-gold text-onyx w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
                  Select Colors
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {colors.map((color) => (
                    <button
                      key={color.id}
                      onClick={() => setSelectedColor(color.id)}
                      className={`aspect-square rounded-lg border-2 transition-all duration-300 ${color.color} ${
                        selectedColor === color.id
                          ? 'border-white scale-110'
                          : 'border-gray-600 hover:border-gray-500'
                      }`}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Step 5: Personal Touches */}
              <div className="glass-card p-6">
                <h3 className="font-playfair text-xl font-bold text-white mb-4 flex items-center">
                  <span className="bg-gold text-onyx w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">5</span>
                  Personal Touches
                </h3>
                <div className="space-y-3">
                  {customizations.map((custom) => (
                    <label
                      key={custom.id}
                      className="flex items-center justify-between p-3 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={selectedCustomizations.includes(custom.id)}
                          onChange={() => toggleCustomization(custom.id)}
                          className="w-4 h-4 text-gold bg-gray-700 border-gray-600 rounded focus:ring-gold focus:ring-2"
                        />
                        <span className="text-white">{custom.name}</span>
                      </div>
                      <span className="text-gold font-medium">+${custom.price}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Customize;
