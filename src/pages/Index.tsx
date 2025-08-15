
import { useEffect, useState } from 'react';
import TerminalHero from '../components/TerminalHero';
import MottoSection from '../components/MottoSection';
import SkillsMatrix from '../components/SkillsMatrix';
import OperationsLog from '../components/OperationsLog';
import ContactTerminal from '../components/ContactTerminal';
import MatrixRain from '../components/MatrixRain';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-cyber-black text-cyber-white relative overflow-x-hidden">
      {/* Matrix Background Effect */}
      <MatrixRain />
      
      {/* Main Content */}
      <div className={`relative z-10 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {/* Hero Terminal Section */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <TerminalHero />
        </section>

        {/* Animated Motto Section */}
        <section className="py-20 px-4">
          <MottoSection />
        </section>

        {/* Skills Matrix Section */}
        <section className="py-20 px-4">
          <SkillsMatrix />
        </section>

        {/* Operations Log Section */}
        <section className="py-20 px-4">
          <OperationsLog />
        </section>

        {/* Contact Terminal Section */}
        <section className="py-20 px-4">
          <ContactTerminal />
        </section>
      </div>

      {/* Scanlines Effect */}
      <div className="scanlines fixed inset-0 pointer-events-none z-20"></div>
    </div>
  );
};

export default Index;
