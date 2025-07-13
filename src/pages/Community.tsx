
import { useState } from 'react';
import { Heart, MessageCircle, Share2, Play, Users, Award, Camera } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Community = () => {
  const [activeTab, setActiveTab] = useState('stories');

const testimonials = [
  {
    id: 1,
    name: "Amina Hassan",
    location: "Lagos, Nigeria",
    image: "/photos/amina_hassan.png",
    quote: "Wearing Zillion Kulture, I feel unstoppable. The fit and print — it's like it was made for me.",
    rating: 5,
    product: "Ankara Executive Blazer",
    verified: true
  },
  {
    id: 2,
    name: "Marcus Johnson",
    location: "London, UK",
    image: "/photos/marcus_johnson.jpg",
    quote: "The craftsmanship is incredible. I've never received so many compliments on an outfit.",
    rating: 5,
    product: "Urban Tribal Shirt",
    verified: true
  },
  {
    id: 3,
    name: "Fatima Al-Rashid",
    location: "Dubai, UAE",
    image: "/photos/fatima_el-rashid.png",
    quote: "ZK represents everything I love about fashion - heritage, innovation, and pure luxury.",
    rating: 5,
    product: "Luxury Beaded Kaftan",
    verified: true
  }
];

const communityPosts = [
  {
    id: 1,
    user: "StyleWithSarah",
    avatar: "/photos/aisha.png",
    image: "/photos/set_1_img_1.png",
    caption: "Stepped out in my new ZK piece and felt like royalty! ✨ #ZillionKulture #AfroFuture",
    likes: 1247,
    comments: 89,
    hashtag: "#ZillionKulture",
    verified: true
  },
  {
    id: 2,
    user: "KwameStyles",
    avatar: "/photos/kemi.png",
    image: "/photos/set_1_img_2.png",
    caption: "From boardroom to the red carpet - ZK has me covered! 🔥 #StyleGoals #ZillionKulture",
    likes: 892,
    comments: 67,
    hashtag: "#ZillionKulture",
    verified: false
  },
  {
    id: 3,
    user: "ElegantEbony",
    avatar: "/photos/zara.png",
    image: "/photos/set_1_img_3.png",
    caption: "The attention to detail in this kaftan is unmatched. Pure artistry! 👑 #ZillionKulture",
    likes: 1456,
    comments: 123,
    hashtag: "#ZillionKulture",
    verified: true
  }
];

const events = [
  {
    id: 1,
    title: "Lagos Fashion Week 2024",
    date: "March 15, 2024",
    image: "/photos/kente_ceremonial_gown.png",
    description: "ZK showcased our latest collection at Africa's premier fashion event."
  },
  {
    id: 2,
    title: "Vogue Feature",
    date: "February 28, 2024",
    image: "/photos/ankara_executive_blazer.png",
    description: "Featured in Vogue's 'Designers to Watch' highlighting African fashion innovation."
  },
  {
    id: 3,
    title: "Cannes Red Carpet",
    date: "May 20, 2024",
    image: "/photos/luxury_beaded_kaftan.png",
    description: "Our luxury pieces graced the red carpet at the Cannes Film Festival."
  }
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
              Join the <span className="text-gold">Culture</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Zillion Kulture is as much about people as it is about clothes. Discover real testimonials and user photos that prove ZK is a lifestyle, not just a label.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="glass-card p-6">
              <Users className="text-gold mx-auto mb-2" size={32} />
              <div className="text-2xl font-bold text-white">15K+</div>
              <div className="text-gray-400 text-sm">Community Members</div>
            </div>
            <div className="glass-card p-6">
              <Heart className="text-burgundy mx-auto mb-2" size={32} />
              <div className="text-2xl font-bold text-white">98%</div>
              <div className="text-gray-400 text-sm">Customer Satisfaction</div>
            </div>
            <div className="glass-card p-6">
              <Award className="text-electric mx-auto mb-2" size={32} />
              <div className="text-2xl font-bold text-white">25+</div>
              <div className="text-gray-400 text-sm">Fashion Awards</div>
            </div>
            <div className="glass-card p-6">
              <Camera className="text-africanprint mx-auto mb-2" size={32} />
              <div className="text-2xl font-bold text-white">500K+</div>
              <div className="text-gray-400 text-sm">Photos Shared</div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 sticky top-24 bg-onyx/95 backdrop-blur-lg z-40 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-8">
            {['stories', 'gallery', 'events'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? 'text-gold border-b-2 border-gold'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Real Stories Tab */}
          {activeTab === 'stories' && (
            <div className="space-y-12">
              <div className="text-center mb-12">
                <h2 className="font-playfair text-3xl font-bold text-white mb-4">
                  Real Stories from Our Community
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Honest voices matter: 40% of shoppers say user-generated content is extremely important when deciding what to buy.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="glass-card p-6 hover:transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-center space-x-4 mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <div className="flex items-center space-x-2">
                          <h4 className="text-white font-medium">{testimonial.name}</h4>
                          {testimonial.verified && (
                            <div className="w-4 h-4 bg-gold rounded-full flex items-center justify-center">
                              <span className="text-onyx text-xs">✓</span>
                            </div>
                          )}
                        </div>
                        <p className="text-gray-400 text-sm">{testimonial.location}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-gold">★</span>
                      ))}
                    </div>
                    
                    <blockquote className="text-gray-300 italic mb-4">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="text-sm text-gold font-medium">
                      Purchased: {testimonial.product}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Fan Gallery Tab */}
          {activeTab === 'gallery' && (
            <div className="space-y-12">
              <div className="text-center mb-12">
                <h2 className="font-playfair text-3xl font-bold text-white mb-4">
                  Fan Gallery
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  A live feed of our community showcasing ZK styles around the world. Tag us #ZillionKulture to be featured!
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {communityPosts.map((post) => (
                  <div key={post.id} className="glass-card overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                    <div className="p-4 flex items-center space-x-3">
                      <img
                        src={post.avatar}
                        alt={post.user}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-white font-medium">{post.user}</span>
                          {post.verified && (
                            <div className="w-4 h-4 bg-gold rounded-full flex items-center justify-center">
                              <span className="text-onyx text-xs">✓</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <img
                      src={post.image}
                      alt="Community post"
                      className="w-full h-80 object-cover"
                    />
                    
                    <div className="p-4">
                      <p className="text-gray-300 text-sm mb-3">{post.caption}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <button className="flex items-center space-x-1 text-gray-400 hover:text-burgundy transition-colors">
                            <Heart size={18} />
                            <span className="text-sm">{post.likes}</span>
                          </button>
                          <button className="flex items-center space-x-1 text-gray-400 hover:text-electric transition-colors">
                            <MessageCircle size={18} />
                            <span className="text-sm">{post.comments}</span>
                          </button>
                        </div>
                        <button className="text-gray-400 hover:text-gold transition-colors">
                          <Share2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Events & Press Tab */}
          {activeTab === 'events' && (
            <div className="space-y-12">
              <div className="text-center mb-12">
                <h2 className="font-playfair text-3xl font-bold text-white mb-4">
                  Events & Press
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Photos of ZK on the red carpet, in fashion shows, and featured in media.
                </p>
              </div>
              
              <div className="space-y-8">
                {events.map((event, index) => (
                  <div
                    key={event.id}
                    className={`glass-card overflow-hidden hover:transform hover:scale-105 transition-all duration-300 ${
                      index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    } flex flex-col lg:flex`}
                  >
                    <div className="lg:w-1/2">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-80 lg:h-full object-cover"
                      />
                    </div>
                    <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                      <div className="text-gold font-medium mb-2">{event.date}</div>
                      <h3 className="font-playfair text-2xl font-bold text-white mb-4">
                        {event.title}
                      </h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {event.description}
                      </p>
                      <button className="luxury-button rounded-lg py-3 px-6 self-start">
                        Read More
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Community;
