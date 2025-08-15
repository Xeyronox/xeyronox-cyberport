
import { useState, useEffect } from 'react';

const MottoSection = () => {
  const [currentMotto, setCurrentMotto] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const mottos = [
    '🔐 "Code isn\'t just logic. It\'s a weapon."',
    '💥 "Real hackers build, break, and never beg."',
    '♻️ "Learn. Automate. Repeat. Outgrow them all."',
    '🕶️ "Noise talks. Silence strikes."'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentMotto((prev) => (prev + 1) % mottos.length);
        setIsVisible(true);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, [mottos.length]);

  return (
    <div className="max-w-6xl mx-auto text-center">
      <div className="terminal-window max-w-4xl mx-auto">
        <div className="terminal-header">
          <div className="terminal-title">motto_display.sh</div>
          <div className="terminal-controls">
            <div className="terminal-control terminal-control-close"></div>
            <div className="terminal-control terminal-control-minimize"></div>
            <div className="terminal-control terminal-control-maximize"></div>
          </div>
        </div>
        <div className="terminal-content min-h-[200px] flex items-center justify-center">
          <div 
            className={`text-2xl md:text-4xl font-bold text-cyber-green neon-text transition-all duration-500 ${
              isVisible ? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-95'
            }`}
          >
            {mottos[currentMotto]}
          </div>
        </div>
      </div>

      {/* Motto Navigation Dots */}
      <div className="flex justify-center space-x-3 mt-8">
        {mottos.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentMotto
                ? 'bg-cyber-rust shadow-neon-red scale-125'
                : 'bg-cyber-gray-dark hover:bg-cyber-rust'
            }`}
            onClick={() => setCurrentMotto(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default MottoSection;
