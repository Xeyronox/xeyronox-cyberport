
import { useState, useEffect } from 'react';

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
    'xeyronox@phantom~$ _'
  ];

  useEffect(() => {
    if (currentLine < terminalLines.length - 1) {
      const timer = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
      }, currentLine === 0 ? 1500 : currentLine === 1 ? 500 : 800);

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
        <div key={index} className="flex items-center mb-2">
          <span className="terminal-prompt">{parts[0]}$ </span>
          <span className="text-cyber-white">{parts[1]}</span>
          {index === currentLine && isTyping && <span className="terminal-cursor"></span>}
        </div>
      );
    }

    if (line === '') {
      return <div key={index} className="mb-2"></div>;
    }

    return (
      <div key={index} className="mb-2 animate-fade-in text-cyber-green">
        {line}
      </div>
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-title">xeyronox@phantom: ~</div>
          <div className="terminal-controls">
            <div className="terminal-control terminal-control-close"></div>
            <div className="terminal-control terminal-control-minimize"></div>
            <div className="terminal-control terminal-control-maximize"></div>
          </div>
        </div>
        <div className="terminal-content min-h-[400px]">
          {terminalLines.map((line, index) => renderLine(line, index))}
        </div>
      </div>

      {/* Glitch Effect Title */}
      <div className="text-center mt-12">
        <h1 
          className="text-4xl md:text-6xl font-bold text-cyber-rust neon-text glitch"
          data-text="XEYRONOX"
        >
          XEYRONOX
        </h1>
        <p className="text-cyber-green text-xl md:text-2xl mt-4 neon-text">
          Phantom in the Machine
        </p>
      </div>
    </div>
  );
};

export default TerminalHero;
