
import { useState, useEffect } from 'react';
import { Mail, Instagram, Globe, Github } from 'lucide-react';

const ContactTerminal = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const contactLines = [
    'xeyronox@phantom~$ cat contact_info.txt',
    '',
    '📥 Email     : xeyronox@outlook.com',
    '📷 Instagram : @xeyronox',
    '🌐 Website   : https://xeyronox-shop.vercel.app/',
    '🐙 GitHub    : https://github.com/Xeyronox',
    '',
    'xeyronox@phantom~$ echo "Ready for collaboration..."',
    'Ready for collaboration...',
    'xeyronox@phantom~$ _'
  ];

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'xeyronox@outlook.com',
      href: 'mailto:xeyronox@outlook.com',
      color: 'cyber-rust'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@xeyronox',
      href: 'https://instagram.com/xeyronox',
      color: 'cyber-blue'
    },
    {
      icon: Globe,
      label: 'Website',
      value: 'xeyronox-shop.vercel.app',
      href: 'https://xeyronox-shop.vercel.app/',
      color: 'cyber-green'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Xeyronox',
      href: 'https://github.com/Xeyronox',
      color: 'cyber-rust'
    }
  ];

  useEffect(() => {
    if (currentLine < contactLines.length - 1) {
      const timer = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
      }, currentLine === 0 ? 1000 : 600);

      return () => clearTimeout(timer);
    } else {
      setIsComplete(true);
    }
  }, [currentLine, contactLines.length]);

  const renderLine = (line: string, index: number) => {
    if (index > currentLine) return null;

    if (line.startsWith('xeyronox@phantom~$')) {
      const parts = line.split('$ ');
      return (
        <div key={index} className="flex items-center mb-2">
          <span className="terminal-prompt">{parts[0]}$ </span>
          <span className="text-cyber-white">{parts[1]}</span>
          {index === currentLine && !isComplete && <span className="terminal-cursor"></span>}
        </div>
      );
    }

    if (line === '') {
      return <div key={index} className="mb-2"></div>;
    }

    if (line.startsWith('📥') || line.startsWith('📷') || line.startsWith('🌐') || line.startsWith('🐙')) {
      return (
        <div key={index} className="mb-2 animate-fade-in text-cyber-green hover:text-cyber-green-bright transition-colors cursor-pointer">
          {line}
        </div>
      );
    }

    return (
      <div key={index} className="mb-2 animate-fade-in text-cyber-white">
        {line}
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-cyber-blue neon-text mb-4">
          ESTABLISH CONNECTION
        </h2>
        <p className="text-cyber-gray text-lg">
          Ready to collaborate on your next operation
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Terminal Display */}
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-title">contact_display.sh</div>
            <div className="terminal-controls">
              <div className="terminal-control terminal-control-close"></div>
              <div className="terminal-control terminal-control-minimize"></div>
              <div className="terminal-control terminal-control-maximize"></div>
            </div>
          </div>
          <div className="terminal-content min-h-[350px]">
            {contactLines.map((line, index) => renderLine(line, index))}
          </div>
        </div>

        {/* Interactive Contact Cards */}
        <div className="space-y-4">
          {contactMethods.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-card flex items-center space-x-4 group"
              >
                <div className={`p-3 rounded-lg bg-${contact.color} text-cyber-black group-hover:shadow-glow-${contact.color.split('-')[1]} transition-all duration-300`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className={`text-${contact.color} font-semibold neon-text`}>
                    {contact.label}
                  </h3>
                  <p className="text-cyber-gray group-hover:text-cyber-white transition-colors">
                    {contact.value}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* Footer Message */}
      <div className="text-center mt-16 p-8 border border-cyber-gray-dark rounded-lg bg-cyber-darker">
        <p className="text-cyber-green text-lg neon-text mb-2">
          "In the shadows of the digital realm, precision is everything."
        </p>
        <p className="text-cyber-gray text-sm">
          Available for freelance projects, bug bounty collaborations, and security consultations.
        </p>
      </div>
    </div>
  );
};

export default ContactTerminal;
