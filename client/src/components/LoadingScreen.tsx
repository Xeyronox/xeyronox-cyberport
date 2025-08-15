
import { useState, useEffect } from 'react';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);
  
  const loadingTexts = [
    'INITIALIZING PHANTOM PROTOCOL...',
    'ESTABLISHING SECURE CONNECTION...',
    'LOADING NEURAL NETWORKS...',
    'DECRYPTING IDENTITY MATRIX...',
    'SYSTEM READY FOR INFILTRATION...'
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const textInterval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % loadingTexts.length);
    }, 800);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, [onComplete, loadingTexts.length]);

  return (
    <div className="fixed inset-0 bg-cyber-black z-50 flex items-center justify-center">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-12 gap-4 h-full animate-pulse">
          {Array.from({ length: 48 }).map((_, i) => (
            <div
              key={i}
              className="bg-cyber-green rounded animate-pulse"
              style={{
                animationDelay: `${i * 0.1}s`,
                animationDuration: '2s'
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 text-center space-y-8">
        {/* Logo/Title */}
        <div className="mb-12">
          <h1 className="text-6xl font-display font-bold text-cyber-rust neon-text glitch mb-4" data-text="XEYRONOX">
            XEYRONOX
          </h1>
          <div className="text-cyber-green text-xl tracking-wider">
            PHANTOM INITIALIZATION
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-96 mx-auto">
          <div className="bg-cyber-darker border border-cyber-rust rounded-lg p-4">
            <div className="mb-4">
              <div className="text-cyber-green text-sm font-mono mb-2">
                {loadingTexts[currentText]}
              </div>
              <div className="w-full bg-cyber-gray-dark rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-cyber-rust to-cyber-green h-2 rounded-full transition-all duration-300 shadow-glow-red"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
            <div className="text-cyber-white text-right font-mono text-sm">
              {progress}%
            </div>
          </div>
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-3 h-3 bg-cyber-green rounded-full animate-bounce"
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: '1s'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
