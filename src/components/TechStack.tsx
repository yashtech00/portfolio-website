
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
    <section className="mb-20">
      <h2 className="text-4xl font-bold text-white text-center mb-12">Tech Stack</h2>
      <div className="space-y-8">
        {technologies.map((category) => (
          <div key={category.category} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">{category.category}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {category.skills.map((skill) => (
                <div 
                  key={skill.name} 
                  className="flex flex-col items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <img 
                    src={skill.logo} 
                    alt={skill.name}
                    className="w-12 h-12 mb-3 filter brightness-0 invert"
                  />
                  <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <p className="text-gray-400 mb-6">Ready to bring your ideas to life with modern technology</p>
        <a 
          href="mailto:contact@example.com" 
          className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:transform hover:scale-105"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default TechStack;
