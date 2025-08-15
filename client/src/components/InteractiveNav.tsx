
import { useState, useEffect } from 'react';
import { Terminal, User, Code, Activity, Mail, Menu, X } from 'lucide-react';

const InteractiveNav = () => {
  const [activeSection, setActiveSection] = useState('terminal');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'terminal', label: 'IDENTITY', icon: Terminal },
    { id: 'motto', label: 'PHILOSOPHY', icon: User },
    { id: 'skills', label: 'ARSENAL', icon: Code },
    { id: 'operations', label: 'OPERATIONS', icon: Activity },
    { id: 'contact', label: 'CONNECT', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.id);
      const current = sections.find(section => {
        const element = document.querySelector(`[data-section="${section}"]`);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(`[data-section="${sectionId}"]`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Main Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-cyber-black/95 backdrop-blur-md border-b border-cyber-rust' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-cyber-rust font-display font-bold text-xl neon-text">
              XEYRONOX
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-mono text-sm transition-all duration-300 ${
                      activeSection === item.id
                        ? 'bg-cyber-rust text-cyber-black shadow-glow-red'
                        : 'text-cyber-gray hover:text-cyber-white hover:bg-cyber-darker'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-cyber-white hover:text-cyber-rust transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-cyber-black/95 backdrop-blur-md" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed right-0 top-0 h-full w-64 bg-cyber-dark border-l border-cyber-rust shadow-glow-red">
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <div className="text-cyber-rust font-display font-bold text-lg neon-text">
                  MENU
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-cyber-white hover:text-cyber-rust transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg font-mono text-sm transition-all duration-300 ${
                        activeSection === item.id
                          ? 'bg-cyber-rust text-cyber-black'
                          : 'text-cyber-gray hover:text-cyber-white hover:bg-cyber-darker'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InteractiveNav;
