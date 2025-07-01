
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "CodePlus - Coding Platform",
      description: "CodePlus boosts coding skills with diverse data structure and algorithm problems. It offers challenging exercises for developer proficiency enhancement. Practice on CodePlus to sharpen problem-solving abilities.",
      image: "https://media.licdn.com/dms/image/v2/D562DAQEn2kiOb_mgdg/profile-treasury-image-shrink_800_800/B56ZWtCt3XGUAY-/0/1742364926826?e=1751972400&v=beta&t=Rod6L9i0KSiHQ_eEsrrv8Iw8n8CNa5Y6JZFNVzq7Ckg",
      tech: ["Next.js 15","React", "Typescript","TurboRepo", "PostgreSQL", "NextAuth", "Express.js","TailwindCSS","Prisma-ORM","Shadcn-ui "],    
      github: "https://github.com/yashtech00/codeplus",
      live: "https://codeplus-sage.vercel.app/"
    },
    {
      title: "JobHost - Job Portal",
      description: "JobHost is a comprehensive job portal application designed to connect job seekers with employers. Built using Next.js, React.js, Node.js, PostgreSQL, and Prisma, it provides a seamless experience for job searching, hiring.",
      image: "https://private-user-images.githubusercontent.com/141262414/434018704-871a65b6-5738-4433-afc2-2798bb333fcc.PNG?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTEzNTA2NjksIm5iZiI6MTc1MTM1MDM2OSwicGF0aCI6Ii8xNDEyNjI0MTQvNDM0MDE4NzA0LTg3MWE2NWI2LTU3MzgtNDQzMy1hZmMyLTI3OThiYjMzM2ZjYy5QTkc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzAxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcwMVQwNjEyNDlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01ODYwNGZlYTVhOWViZGJmZTE3ZWQ2OTFlNDBlODNmNmRmMGRiYTA2ZGJmM2JlMzc5NzM2MDAwYTIzNDgxNjdlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.c8IMmRgVUtaCcMYpKPSUtW42R4hFDXA4io92jLXY_HQ",
      tech: ["Next.js", "React", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
      github: "https://github.com/yashtech00/JobHost",
      live: "#"
    },
    {
      title: "Tweetify - Social Media Platform",
      description: "Tweetify is a full-stack Twitter clone developed with the MERN stack, TypeScript, and Tailwind CSS. It mimics essential Twitter functionalities such as posting tweets, liking, commenting, managing user profiles, and receiving notifications through polling. The platform allows users to register, log in",
      image: "tweetify.png",
      tech: ["React", "Typescript", "Node.js", "Express", "MongoDB", "TailwindCSS"],
      github: "https://github.com/yashtech00/Tweetify",
      live: "https://tweetify-1.onrender.com/"
    },
    {
      title: "Tic-Tac-Toe - classic Game",
      description: "Tic-Tac-Toe is a real-time multiplayer game built with the MERN stack. It features WebSockets for seamless chat between opponents during matches. The application provides a user-friendly interface and is fully responsive across devices. Enjoy classic gameplay with real-time communication!",
      image: "https://private-user-images.githubusercontent.com/141262414/434030776-1509bccf-6729-4706-879b-13b1f835546e.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTEzNjQyNjMsIm5iZiI6MTc1MTM2Mzk2MywicGF0aCI6Ii8xNDEyNjI0MTQvNDM0MDMwNzc2LTE1MDliY2NmLTY3MjktNDcwNi04NzliLTEzYjFmODM1NTQ2ZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzAxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcwMVQwOTU5MjNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1lOTYwNTE4M2M3ZDU3MGEwYzJmZDA2NGU2NmI5ZDFkYjliZTAzNmFhZTNlMDcxMDkxM2ZkZDM2NjIyYjMxYjU1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.MIUy7clvAQTSzxFNumWzGn1YOtP_zYiYU_i-1Xrul00",
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
