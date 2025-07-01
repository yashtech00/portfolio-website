
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="mb-20 animate-fade-in">
      <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
        {/* Left side - Text content */}
        <div className="text-left">
          <h1 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            John Developer
          </h1>
          <h2 className="text-xl text-gray-300 mb-4">Full Stack Developer</h2>
          <p className="text-base text-gray-400 leading-relaxed mb-6">
            Passionate fresher specializing in MERN Stack development with expertise in modern web technologies, 
            cloud services, and DevOps practices. Ready to build scalable and efficient web applications.
          </p>
          <div className="flex items-center gap-2 text-gray-400 mb-6">
            <MapPin size={16} />
            <span className="text-sm">Available for opportunities worldwide</span>
          </div>
          <div className="flex gap-4">
            <a 
              href="https://github.com" 
              className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-white" />
            </a>
            <a 
              href="https://linkedin.com" 
              className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </a>
            <a 
              href="mailto:contact@example.com" 
              className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
        
        {/* Right side - Profile image */}
        <div className="flex justify-center md:justify-end">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
