
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce application built with MERN stack featuring user authentication, payment integration, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      tech: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "Task Management App",
      description: "Modern task management application with real-time updates, team collaboration, and analytics dashboard using Next.js and PostgreSQL.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with data visualization, scheduled posting, and performance metrics.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      tech: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "DevOps CI/CD Pipeline",
      description: "Automated deployment pipeline with Docker containerization, Kubernetes orchestration, and AWS cloud infrastructure.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      tech: ["Docker", "Kubernetes", "AWS", "Jenkins", "Terraform"],
      github: "https://github.com",
      live: "https://example.com"
    }
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-white text-center mb-8">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
          >
            <div className="h-32 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-3 text-sm leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-1 mb-3">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a 
                  href={project.github}
                  className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors text-sm"
                >
                  <Github size={14} />
                  Code
                </a>
                <a 
                  href={project.live}
                  className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors text-sm"
                >
                  <ExternalLink size={14} />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
