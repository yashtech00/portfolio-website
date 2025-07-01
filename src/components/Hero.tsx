
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="text-center mb-20 animate-fade-in">
      <div className="mb-8">
        <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          John Developer
        </h1>
        <h2 className="text-2xl text-gray-300 mb-6">Full Stack Developer</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8">
          Passionate fresher specializing in MERN Stack development with expertise in modern web technologies, 
          cloud services, and DevOps practices. Ready to build scalable and efficient web applications.
        </p>
        <div className="flex items-center justify-center gap-2 text-gray-400 mb-8">
          <MapPin size={18} />
          <span>Available for opportunities worldwide</span>
        </div>
        <div className="flex justify-center gap-6">
          <a 
            href="https://github.com" 
            className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6 text-white" />
          </a>
          <a 
            href="https://linkedin.com" 
            className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6 text-white" />
          </a>
          <a 
            href="mailto:contact@example.com" 
            className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Email"
          >
            <Mail className="w-6 h-6 text-white" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
