
import Navigation from '../components/Navigation';
import { Users, Lightbulb, Globe } from 'lucide-react';

const About = () => {
  const team = [
    {
      role: "Founder & Creative Director",
      description: "A design innovator steeped in heritage. Our creative lead channels family tradition into every stitch, crafting each silhouette with cultural flair.",
      icon: Lightbulb
    },
    {
      role: "Tech Lead",
      description: "A virtual fitting-room pioneer. They integrate Google's generative AI so every customer can try before they buy.",
      icon: Globe
    },
    {
      role: "Community Manager",
      description: "A global storyteller connecting you through testimonials and real-world adventures in ZK gear.",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-onyx">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 african-pattern-overlay opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="font-playfair text-6xl md:text-8xl font-bold text-white mb-6">
              Born from <span className="text-gold">Heritage</span>.<br />
              Designed for <span className="text-electric">Tomorrow</span>.
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We are Zillion Kulture: a visionary startup founded on pride in African tradition and a passion for innovation. 
              Our roots run deep in the continent's rich textile history.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-playfair text-5xl font-bold text-white mb-8">
                Our <span className="text-gold">Story</span>
              </h2>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  It started with a spark: the recognition that African couture deserved a global stage equipped with the latest tools. 
                  We fused artisanal craftsmanship (hand-woven Ankara, kente, mudcloth) with data-driven design.
                </p>
                <p>
                  Fueled by the surge in worldwide demand for African fashion, we launched Zillion Kulture to make high-end African style accessible everywhere. 
                  Vibrant African fabrics have always symbolized identity and status, and we bring those symbols boldly into the modern world.
                </p>
                <p>
                  Our founding team – a blend of creative heritage and tech savvy – came together with a clear mission: 
                  to bridge cultures and rewire style for the 21st century.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="glass-card p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <img
                  src="/lovable-uploads/ed7d727a-63f4-4cbb-8619-da854d115838.png"
                  alt="African Heritage"
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-burgundy opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-5xl font-bold text-white mb-6">
              The <span className="text-gold">Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Together, we honor African legacy and pursue a fearless future.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="glass-card p-8 hover:transform hover:scale-105 transition-all duration-300 group"
              >
                <div className="text-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                  <member.icon size={48} />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-white mb-4">
                  {member.role}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-4xl font-bold text-white mb-8">
            Ready to Join the <span className="text-gold">Revolution</span>?
          </h2>
          <button className="luxury-button rounded-full text-lg px-12 py-6">
            Explore Our Collections
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
