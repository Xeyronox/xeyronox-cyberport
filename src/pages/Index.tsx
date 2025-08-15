
import { useEffect, useState } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import InteractiveNav from '../components/InteractiveNav';
import TerminalHero from '../components/TerminalHero';
import MottoSection from '../components/MottoSection';
import SkillsMatrix from '../components/SkillsMatrix';
import OperationsLog from '../components/OperationsLog';
import ContactTerminal from '../components/ContactTerminal';
import MatrixRain from '../components/MatrixRain';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => setIsLoaded(true), 100);
  };

  useEffect(() => {
    // Simulate initial loading time
    const timer = setTimeout(() => {
      if (isLoading) handleLoadingComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [isLoading]);

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-cyber-black text-cyber-white relative overflow-x-hidden">
      {/* Matrix Background Effect */}
      <MatrixRain />
      
      {/* Interactive Navigation */}
      <InteractiveNav />
      
      {/* Main Content */}
      <div className={`relative z-10 pt-20 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {/* Hero Terminal Section */}
        <section 
          data-section="terminal"
          className="min-h-screen flex items-center justify-center px-4 py-20"
        >
          <TerminalHero />
        </section>

        {/* Animated Motto Section */}
        <section 
          data-section="motto"
          className="py-32 px-4 bg-gradient-to-b from-transparent via-cyber-darker/20 to-transparent"
        >
          <MottoSection />
        </section>

        {/* Skills Matrix Section */}
        <section 
          data-section="skills"
          className="py-32 px-4"
        >
          <SkillsMatrix />
        </section>

        {/* Operations Log Section */}
        <section 
          data-section="operations"
          className="py-32 px-4 bg-gradient-to-b from-transparent via-cyber-darker/20 to-transparent"
        >
          <OperationsLog />
        </section>

        {/* Contact Terminal Section */}
        <section 
          data-section="contact"
          className="py-32 px-4 pb-20"
        >
          <ContactTerminal />
        </section>
      </div>

      {/* Enhanced Scanlines Effect */}
      <div className="scanlines fixed inset-0 pointer-events-none z-20"></div>
      
      {/* Additional atmospheric effects */}
      <div className="fixed inset-0 pointer-events-none z-5">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-rust to-transparent animate-pulse" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-green to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
    </div>
  );
};

export default Index;
