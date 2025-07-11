
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Join the Revolution",
      subtitle: "Zillion Kulture Movement",
      description: "From chic smart-casual staples to show-stopping luxury wear, each item is crafted for confidence and cultural pride.",
      image: "/lovable-uploads/ed7d727a-63f4-4cbb-8619-da854d115838.png",
      cta1: { text: "Virtual Try-On", link: "/virtual-try-on" },
      cta2: { text: "Watch Story", link: "/about" }
    },
    {
      title: "Wake Up the World",
      subtitle: "Bold African Heritage",
      description: "Our hero carousel bursts with vibrant prints and luxe fabrics – each slide a snapshot of a story where tradition meets tomorrow.",
      image: "/lovable-uploads/ed7d727a-63f4-4cbb-8619-da854d115838.png",
      cta1: { text: "Shop Collection", link: "/shop" },
      cta2: { text: "Explore Lookbook", link: "/lookbook" }
    },
    {
      title: "Honor the Past",
      subtitle: "Wear the Future",
      description: "Unapologetically African, Uncommonly Stylish. Step into the revolution where every piece tells a story of heritage and innovation.",
      image: "/lovable-uploads/ed7d727a-63f4-4cbb-8619-da854d115838.png",
      cta1: { text: "Customize Now", link: "/customize" },
      cta2: { text: "Join Community", link: "/community" }
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-onyx via-transparent to-onyx opacity-70 z-10" />
          <div className="absolute inset-0 african-pattern-overlay z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Content overlay */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="animate-fade-in">
              <p className="text-gold text-sm sm:text-base lg:text-lg font-medium mb-2 sm:mb-4 tracking-wider uppercase">
                {slides[currentSlide].subtitle}
              </p>
              <h1 className="font-playfair font-bold text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-none mb-4 sm:mb-6 bg-gradient-to-r from-gold via-africanprint to-electric bg-clip-text text-transparent">
                {slides[currentSlide].title}
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-2xl">
                {slides[currentSlide].description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link to={slides[currentSlide].cta1.link} className="luxury-button rounded-full text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4">
                  {slides[currentSlide].cta1.text}
                </Link>
                <Link to={slides[currentSlide].cta2.link} className="flex items-center justify-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 border-2 border-gold text-gold hover:bg-gold hover:text-onyx transition-all duration-300 rounded-full text-sm sm:text-base">
                  <Play size={16} />
                  <span>{slides[currentSlide].cta2.text}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-8 top-1/2 transform -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-all duration-200"
      >
        <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-8 top-1/2 transform -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-all duration-200"
      >
        <ChevronRight size={20} className="sm:w-6 sm:h-6" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2 sm:space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
              index === currentSlide ? 'bg-gold scale-125' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
