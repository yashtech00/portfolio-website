
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Education from '../components/Education';
import TechStack from '../components/TechStack';
import Newsletter from '@/components/Newsletter';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="max-w-2xl mx-auto px-6 py-12">
        <Hero />
        <Projects />
        <Education />
        {/* <TechStack /> */}
        <Newsletter/>
      </div>
    </div>
  );
};

export default Index;
