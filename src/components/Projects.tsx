
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "CodePlus - Coding Platform",
      description: "CodePlus boosts coding skills with diverse data structure and algorithm problems. It offers challenging exercises for developer proficiency enhancement. Practice on CodePlus to sharpen problem-solving abilities.",
      image: "https://res.cloudinary.com/daqreikux/image/upload/v1751370582/codePlus_cyzuws.png",
      tech: ["Next.js 15","React", "Typescript","TurboRepo", "PostgreSQL", "NextAuth", "Express.js","TailwindCSS","Prisma-ORM","Shadcn-ui "],    
      github: "https://github.com/yashtech00/codeplus",
      live: "https://codeplus-sage.vercel.app/"
    },
    {
      title: "JobHost - Job Portal",
      description: "JobHost is a comprehensive job portal application designed to connect job seekers with employers. Built using Next.js, React.js, Node.js, PostgreSQL, and Prisma, it provides a seamless experience for job searching, hiring.",
      image: "https://res.cloudinary.com/daqreikux/image/upload/v1751370583/jobhost_kd1oge.png",
      tech: ["Next.js", "React", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
      github: "https://github.com/yashtech00/JobHost",
      live: "#"
    },
    {
      title: "Tweetify - Social Media Platform",
      description: "Tweetify is a full-stack Twitter clone developed with the MERN stack, TypeScript, and Tailwind CSS. It mimics essential Twitter functionalities such as posting tweets, liking, commenting, managing user profiles, and receiving notifications through polling. The platform allows users to register, log in",
      image: "https://res.cloudinary.com/daqreikux/image/upload/v1751370582/tweetify_sxf73l.png",
      tech: ["React", "Typescript", "Node.js", "Express", "MongoDB", "TailwindCSS"],
      github: "https://github.com/yashtech00/Tweetify",
      live: "https://tweetify-1.onrender.com/"
    },
    {
      title: "Tic-Tac-Toe - classic Game",
      description: "Tic-Tac-Toe is a real-time multiplayer game built with the MERN stack. It features WebSockets for seamless chat between opponents during matches. The application provides a user-friendly interface and is fully responsive across devices. Enjoy classic gameplay with real-time communication!",
      image: "https://res.cloudinary.com/daqreikux/image/upload/v1751370582/tic-tac-toe_vxl5eq.png",
      tech: ["React", "Typescript", "Socket.IO", "Node.js", "Express", "MongoDB", "TailwindCSS"],
      github: "https://github.com",
      live: "#"
    }
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-white text-center">Some of my cool stuff</h2>
     <h2 className="text-xl font-normal text-gray-500 text-center mb-8  ">I’ve worked on a variety of fun projects, from simple websites to full-stack web applications.Here are a few of my favorites.</h2>  {/* <h2>You can find more on my Projects Page.</h2> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
          >
            <div className="h-34 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-3 text-xs leading-relaxed">{project.description}</p>
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
