
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="mb-20 animate-fade-in">
      <div className='flex justify-between '>
      <div>
         <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Hi, I'am Yash
          </h1>
          <h2 className="text-xl text-gray-300 mb-4">Full Stack Developer</h2>
        </div>
        {/* Right side - Profile image */}
        <div className="">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        </div>


      <div className="">
        {/* Left side - Text content */}
        <div className="">
         
           <h2 className="text-xl text-white font-semibold  mb-4">About</h2>
          <p className="text-base text-gray-400 leading-relaxed mb-6">
            Passionate Full Stack Developer from Haryana, India, skilled in the MERN Stack.
            Focused on building efficient, scalable, and user-centric web applications.
            Experience with Cloud services and DevOps practices for modern deployments.
            Active community contributor, sharing projects and learning in public.
            Eager to explore Web3 and emerging technologies to drive meaningful impact.
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

        
      </div>
    </section>
  );
};

export default Hero;
