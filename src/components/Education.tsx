
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-white text-center mb-8">Education</h2>
      <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-blue-500/20 rounded-full">
            <GraduationCap className="w-6 h-6 text-blue-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-white mb-2">Bachelor of Technology</h3>
            <h4 className="text-lg text-blue-400 mb-2">Computer Science Engineering</h4>
            <p className="text-gray-400 mb-3">University Name</p>
            <div className="flex items-center gap-2 text-gray-500 mb-3">
              <Calendar size={14} />
              <span className="text-sm">2020 - 2024</span>
            </div>
            <div className="space-y-1">
              <p className="text-gray-400 text-sm">
                <span className="text-white font-medium">CGPA:</span> 8.5/10
              </p>
              <p className="text-gray-400 text-sm">
                <span className="text-white font-medium">Relevant Coursework:</span> 
                Data Structures & Algorithms, Database Management Systems, Operating Systems, 
                Computer Networks, Software Engineering, Web Development
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
