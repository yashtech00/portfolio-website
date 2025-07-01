
const TechStack = () => {
  const technologies = [
    {
      category: "Frontend",
      skills: [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" }
      ]
    },
    {
      category: "DevOps & Cloud",
      skills: [
        { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
        { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" }
      ]
    }
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-white text-center mb-8">Tech Stack</h2>
      <div className="space-y-6">
        {technologies.map((category) => (
          <div key={category.category} className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-4 text-center">{category.category}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {category.skills.map((skill) => (
                <div 
                  key={skill.name} 
                  className="flex flex-col items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <img 
                    src={skill.logo} 
                    alt={skill.name}
                    className="w-8 h-8 mb-2 filter brightness-0 invert"
                  />
                  <span className="text-gray-300 text-xs font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <p className="text-gray-400 mb-4 text-sm">Ready to bring your ideas to life with modern technology</p>
        <a 
          href="mailto:contact@example.com" 
          className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:transform hover:scale-105 text-sm"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default TechStack;
