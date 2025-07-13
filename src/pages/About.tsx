import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Sparkles, Users, Award, Globe } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: "Amara Okafor",
      role: "Founder & Creative Director",
      bio: "A design innovator steeped in heritage. Our creative lead channels family tradition into every stitch, crafting each silhouette with cultural flair.",
      image: "/photos/amara_okafor.jpg",
      color: "from-gold to-africanprint"
    },
    {
      name: "Kwame Asante",
      role: "Tech Lead",
      bio: "A virtual fitting-room pioneer. They integrate Google's generative AI so every customer can try before they buy.",
      image: "/photos/kwame_asante.png",
      color: "from-electric to-burgundy"
    },
    {
      name: "Zara Molina",
      role: "Community Manager",
      bio: "A global storyteller connecting you through testimonials and real-world adventures in ZK gear.",
      image: "/photos/zara_molina.png",
      color: "from-burgundy to-gold"
    }
  ];

  const values = [
    {
      icon: Sparkles,
      title: "Heritage & Innovation",
      description: "We honor African legacy while pursuing a fearless future, blending traditional craftsmanship with cutting-edge technology."
    },
    {
      icon: Users,
      title: "Community First",
      description: "Our customers are family. We celebrate every story, every style, and every moment of confidence our pieces inspire."
    },
    {
      icon: Award,
      title: "Uncompromising Quality",
      description: "From hand-woven fabrics to precision tailoring, we never compromise on the excellence our heritage deserves."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "We're building bridges between cultures, making African fashion accessible and celebrated worldwide."
    }
  ];

  return (
    <div className="min-h-screen bg-onyx">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative">
        <div className="absolute inset-0 african-pattern-overlay opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="hero-text mb-6">
              Born from <span className="text-gold">Heritage</span><br />
              Designed for <span className="text-electric">Tomorrow</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We are Zillion Kulture: a visionary startup founded on pride in African tradition and a passion for innovation. 
              Our roots run deep in the continent's rich textile history – vibrant African fabrics have always symbolized identity and status, 
              and we bring those symbols boldly into the modern world.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="font-playfair text-4xl font-bold text-white mb-6">Our Story</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  It started with a spark: the recognition that African couture deserved a global stage equipped with the latest tools. 
                  We fused artisanal craftsmanship (hand-woven Ankara, kente, mudcloth) with data-driven design.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Fueled by the surge in worldwide demand for African fashion, we launched Zillion Kulture to make high-end African style accessible everywhere.
                  Our founding team – a blend of creative heritage and tech savvy – came together with a clear mission: to bridge cultures and rewire style for the 21st century.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img
                  src="/photos/our_story.jpg"
                  alt="Our Story"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 to-electric/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 relative">
        <div className="absolute inset-0 african-pattern-overlay opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-white mb-6">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do, from design to delivery.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="glass-card p-8 hover:transform hover:scale-105 transition-all duration-300 group"
              >
                <div className="text-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon size={48} />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-white mb-6">The Team</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Meet the visionaries bringing African fashion into the future.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="glass-card overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group"
              >
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${member.color} opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
                </div>
                <div className="p-8">
                  <h3 className="font-playfair text-2xl font-bold text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-gold font-medium mb-4">{member.role}</p>
                  <p className="text-gray-300 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative">
        <div className="absolute inset-0 african-pattern-overlay opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="font-playfair text-4xl font-bold text-white mb-6">
              Ready to Join the <span className="text-gold">Movement</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Together, we honor African legacy and pursue a fearless future. Experience fashion that celebrates heritage while embracing innovation.
            </p>
            <button className="luxury-button rounded-full text-lg px-12 py-6">
              Explore Our Collections
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
