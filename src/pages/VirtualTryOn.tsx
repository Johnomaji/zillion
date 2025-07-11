
import { useState } from 'react';
import { Camera, Upload, Sparkles, RotateCcw, Palette, Ruler } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const VirtualTryOn = () => {
  const [selectedModel, setSelectedModel] = useState('model1');
  const [selectedProduct, setSelectedProduct] = useState('');
  const [selectedColor, setSelectedColor] = useState('original');

  const models = [
    { id: 'model1', name: 'Amara', size: 'M', ethnicity: 'African', image: '/placeholder.svg' },
    { id: 'model2', name: 'Kemi', size: 'L', ethnicity: 'African', image: '/placeholder.svg' },
    { id: 'model3', name: 'Zara', size: 'S', ethnicity: 'Mixed', image: '/placeholder.svg' },
    { id: 'model4', name: 'Aisha', size: 'XL', ethnicity: 'African', image: '/placeholder.svg' },
  ];

  const products = [
    { id: 'blazer1', name: 'Ankara Executive Blazer', category: 'Blazers', image: '/placeholder.svg' },
    { id: 'dress1', name: 'Kente Ceremonial Gown', category: 'Dresses', image: '/placeholder.svg' },
    { id: 'shirt1', name: 'Urban Tribal Shirt', category: 'Shirts', image: '/placeholder.svg' },
    { id: 'kaftan1', name: 'Luxury Beaded Kaftan', category: 'Kaftans', image: '/placeholder.svg' },
  ];

  const colors = [
    { id: 'original', name: 'Original', color: 'bg-gradient-to-br from-gold to-africanprint' },
    { id: 'gold', name: 'Gold', color: 'bg-gold' },
    { id: 'burgundy', name: 'Burgundy', color: 'bg-burgundy' },
    { id: 'electric', name: 'Electric Blue', color: 'bg-electric' },
    { id: 'onyx', name: 'Onyx Black', color: 'bg-onyx' },
  ];

  return (
    <div className="min-h-screen bg-onyx">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 relative">
        <div className="absolute inset-0 african-pattern-overlay opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="hero-text mb-6">
              Virtual <span className="text-gold">Try-On</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Tech-Powered Fitting Room. See how our Afrofuturistic designs look on you with advanced AI technology.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Virtual Try-On Display */}
            <div className="space-y-6">
              <div className="glass-card p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-playfair text-2xl font-bold text-white">
                    Virtual Fitting Room
                  </h3>
                  <div className="flex items-center space-x-2 text-gold">
                    <Sparkles size={20} />
                    <span className="text-sm font-medium">AI Powered</span>
                  </div>
                </div>
                
                <div className="relative aspect-[3/4] bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden mb-6">
                  {selectedModel && (
                    <img
                      src={models.find(m => m.id === selectedModel)?.image}
                      alt="Virtual Try-On"
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-onyx/30 to-transparent" />
                  
                  {/* Overlay Controls */}
                  <div className="absolute top-4 right-4 flex flex-col space-y-2">
                    <button className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-colors">
                      <RotateCcw size={20} />
                    </button>
                    <button className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-colors">
                      <Ruler size={20} />
                    </button>
                  </div>
                  
                  {/* Loading State */}
                  {!selectedProduct && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <Sparkles className="text-gold mx-auto mb-4 animate-pulse" size={48} />
                        <p className="text-white text-lg font-medium">Select a product to try on</p>
                        <p className="text-gray-400 text-sm">AI magic happens here</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Model Info */}
                {selectedModel && (
                  <div className="glass-card p-4">
                    <div className="flex items-center space-x-4">
                      <img
                        src={models.find(m => m.id === selectedModel)?.image}
                        alt="Model"
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="text-white font-medium">
                          {models.find(m => m.id === selectedModel)?.name}
                        </h4>
                        <p className="text-gray-400 text-sm">
                          Size {models.find(m => m.id === selectedModel)?.size} • {models.find(m => m.id === selectedModel)?.ethnicity}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Controls Panel */}
            <div className="space-y-6">
              
              {/* Step 1: Choose Model */}
              <div className="glass-card p-6">
                <h3 className="font-playfair text-xl font-bold text-white mb-4 flex items-center">
                  <span className="bg-gold text-onyx w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                  Choose a Model
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {models.map((model) => (
                    <button
                      key={model.id}
                      onClick={() => setSelectedModel(model.id)}
                      className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                        selectedModel === model.id
                          ? 'border-gold bg-gold/10'
                          : 'border-gray-700 hover:border-gray-600'
                      }`}
                    >
                      <img
                        src={model.image}
                        alt={model.name}
                        className="w-full h-32 object-cover rounded-lg mb-2"
                      />
                      <p className="text-white font-medium text-sm">{model.name}</p>
                      <p className="text-gray-400 text-xs">Size {model.size}</p>
                    </button>
                  ))}
                </div>
                
                <div className="mt-4 p-4 bg-card rounded-lg border border-gray-700">
                  <div className="flex items-center space-x-2 mb-2">
                    <Upload className="text-gold" size={16} />
                    <span className="text-white font-medium text-sm">Upload Your Photo</span>
                  </div>
                  <p className="text-gray-400 text-xs mb-3">
                    Get a personalized try-on experience with your own photo
                  </p>
                  <button className="w-full bg-gradient-to-r from-gold to-africanprint text-onyx py-2 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity">
                    Choose File
                  </button>
                </div>
              </div>

              {/* Step 2: Select Product */}
              <div className="glass-card p-6">
                <h3 className="font-playfair text-xl font-bold text-white mb-4 flex items-center">
                  <span className="bg-gold text-onyx w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                  Select Product
                </h3>
                <div className="space-y-3">
                  {products.map((product) => (
                    <button
                      key={product.id}
                      onClick={() => setSelectedProduct(product.id)}
                      className={`w-full p-4 rounded-lg border-2 transition-all duration-300 flex items-center space-x-4 ${
                        selectedProduct === product.id
                          ? 'border-gold bg-gold/10'
                          : 'border-gray-700 hover:border-gray-600'
                      }`}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="text-left">
                        <p className="text-white font-medium">{product.name}</p>
                        <p className="text-gray-400 text-sm">{product.category}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Customize */}
              <div className="glass-card p-6">
                <h3 className="font-playfair text-xl font-bold text-white mb-4 flex items-center">
                  <span className="bg-gold text-onyx w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                  Customize Colors
                </h3>
                <div className="grid grid-cols-5 gap-3">
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

              {/* Action Buttons */}
              <div className="space-y-3">
                <button className="w-full luxury-button rounded-lg py-4 text-lg font-medium">
                  <Sparkles className="mr-2" size={20} />
                  Generate Try-On
                </button>
                <button className="w-full bg-card text-white border border-gray-700 py-4 rounded-lg hover:bg-gray-700 transition-colors">
                  <Camera className="mr-2" size={20} />
                  Take Screenshot
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VirtualTryOn;
