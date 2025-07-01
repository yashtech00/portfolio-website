
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  return (
    <section className="mb-20">
      <h2 className="text-4xl font-bold text-white text-center mb-12">Education</h2>
      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
        <div className="flex items-start gap-6">
          <div className="p-4 bg-blue-500/20 rounded-full">
            <GraduationCap className="w-8 h-8 text-blue-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-white mb-2">Bachelor of Technology</h3>
            <h4 className="text-xl text-blue-400 mb-3">Computer Science Engineering</h4>
            <p className="text-gray-400 mb-4">University Name</p>
            <div className="flex items-center gap-2 text-gray-500 mb-4">
              <Calendar size={16} />
              <span>2020 - 2024</span>
            </div>
            <div className="space-y-2">
              <p className="text-gray-400">
                <span className="text-white font-medium">CGPA:</span> 8.5/10
              </p>
              <p className="text-gray-400">
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
