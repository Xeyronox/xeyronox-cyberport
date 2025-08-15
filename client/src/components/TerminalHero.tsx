
import { useState, useEffect } from 'react';
import { CyberHeading } from './EnhancedTypography';

const TerminalHero = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const terminalLines = [
    'xeyronox@phantom~$ whoami',
    '',
    '🧠 Name      : Xeyronox',
    '🎭 Alias     : Black/Red Hat Hacker 👨‍💻 + Bugbounty Hunter 🕷️ + Trader 💲',
    '📍 Location  : Deep-Wired | 🇮🇳 Phantom Frequency',
    '🗣️ Comment   : Learning in Silence | Executing with Precision',
    '',
    'xeyronox@phantom~$ echo "Ready for digital warfare..."',
    'Ready for digital warfare...',
    'xeyronox@phantom~$ _'
  ];

  useEffect(() => {
    if (currentLine < terminalLines.length - 1) {
      const timer = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
      }, currentLine === 0 ? 1500 : currentLine === 1 ? 500 : 900);

      return () => clearTimeout(timer);
    } else {
      setIsTyping(false);
    }
  }, [currentLine, terminalLines.length]);

  const renderLine = (line: string, index: number) => {
    if (index > currentLine) return null;

    if (line.startsWith('xeyronox@phantom~$')) {
      const parts = line.split('$ ');
      return (
        <div key={index} className="flex items-center mb-3 animate-fade-in">
          <span className="terminal-prompt text-lg">{parts[0]}$ </span>
          <span className="text-cyber-white text-lg">{parts[1]}</span>
          {index === currentLine && isTyping && <span className="terminal-cursor"></span>}
        </div>
      );
    }

    if (line === '') {
      return <div key={index} className="mb-3"></div>;
    }

    return (
      <div key={index} className="mb-3 animate-fade-in text-cyber-green text-lg leading-relaxed">
        {line}
      </div>
    );
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="terminal-window shadow-2xl">
        <div className="terminal-header">
          <div className="terminal-title text-base">xeyronox@phantom: ~</div>
          <div className="terminal-controls">
            <div className="terminal-control terminal-control-close"></div>
            <div className="terminal-control terminal-control-minimize"></div>
            <div className="terminal-control terminal-control-maximize"></div>
          </div>
        </div>
        <div className="terminal-content min-h-[500px] text-base">
          {terminalLines.map((line, index) => renderLine(line, index))}
        </div>
      </div>

      {/* Enhanced Title Section */}
      <div className="text-center mt-16 space-y-6">
        <CyberHeading>XEYRONOX</CyberHeading>
        <div className="space-y-4">
          <p className="text-cyber-green text-2xl md:text-3xl neon-text font-mono tracking-wider">
            Phantom in the Machine
          </p>
          <p className="text-cyber-gray text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-sans">
            Digital infiltrator operating in the shadows of cyberspace, 
            turning vulnerabilities into opportunities.
          </p>
        </div>
        
        {/* Status Indicators */}
        <div className="flex justify-center space-x-8 mt-8">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-cyber-green rounded-full animate-pulse shadow-glow-green"></div>
            <span className="text-cyber-green text-sm font-mono">ONLINE</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-cyber-rust rounded-full animate-pulse shadow-glow-red"></div>
            <span className="text-cyber-rust text-sm font-mono">ACTIVE</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-cyber-blue rounded-full animate-pulse shadow-glow-blue"></div>
            <span className="text-cyber-blue text-sm font-mono">SECURED</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalHero;
