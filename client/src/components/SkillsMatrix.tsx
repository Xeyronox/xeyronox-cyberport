
import { useState } from 'react';
import { ChevronDown, ChevronRight, Code, Shield, Zap, Globe, Database, Terminal } from 'lucide-react';

const SkillsMatrix = () => {
  const [expandedCategories, setExpandedCategories] = useState<number[]>([0]);

  const skillCategories = [
    {
      title: 'Offensive Operations',
      icon: Shield,
      color: 'cyber-rust',
      skills: [
        'Malware Engineering',
        'APK Modding',
        'DDoS/R-DDoS Operations',
        'Web Exploits',
        'Social Engineering',
        'Botnet Logic'
      ]
    },
    {
      title: 'Programming Arsenal',
      icon: Code,
      color: 'cyber-green',
      skills: [
        'Python',
        'Rust',
        'C/C++',
        'C#',
        'JavaScript/TypeScript',
        'Kotlin'
      ]
    },
    {
      title: 'Web Technologies',
      icon: Globe,
      color: 'cyber-blue',
      skills: [
        'React/Next.js',
        'Node.js',
        'Web3/Blockchain',
        'GraphQL/REST APIs',
        'Docker/Kubernetes',
        'Cloud Architecture'
      ]
    },
    {
      title: 'Security & Analysis',
      icon: Zap,
      color: 'cyber-rust',
      skills: [
        'Penetration Testing',
        'Reverse Engineering',
        'Network Analysis',
        'Vulnerability Assessment',
        'Forensics',
        'Cryptography'
      ]
    },
    {
      title: 'Data Operations',
      icon: Database,
      color: 'cyber-green',
      skills: [
        'Database Exploitation',
        'Data Mining',
        'Trading Algorithms',
        'Market Analysis',
        'Big Data Processing',
        'ML/AI Integration'
      ]
    },
    {
      title: 'System Administration',
      icon: Terminal,
      color: 'cyber-blue',
      skills: [
        'Linux/Unix Systems',
        'Network Configuration',
        'Server Management',
        'Automation Scripts',
        'Dark Web Operations',
        'Anonymity Networks'
      ]
    }
  ];

  const toggleCategory = (index: number) => {
    setExpandedCategories(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-cyber-rust neon-text mb-4">
          SKILLS MATRIX
        </h2>
        <p className="text-cyber-gray text-lg">
          Exploiting vulnerabilities across the digital spectrum
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {skillCategories.map((category, categoryIndex) => {
          const Icon = category.icon;
          const isExpanded = expandedCategories.includes(categoryIndex);

          return (
            <div key={categoryIndex} className="cyber-card">
              <button
                className="w-full flex items-center justify-between p-4 focus:outline-none"
                onClick={() => toggleCategory(categoryIndex)}
              >
                <div className="flex items-center space-x-4">
                  <Icon className={`w-6 h-6 text-${category.color}`} />
                  <h3 className={`text-xl font-semibold text-${category.color} neon-text`}>
                    {category.title}
                  </h3>
                </div>
                {isExpanded ? (
                  <ChevronDown className="w-5 h-5 text-cyber-gray" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-cyber-gray" />
                )}
              </button>

              {isExpanded && (
                <div className="px-4 pb-4 animate-fade-in">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="bg-cyber-darker border border-cyber-gray-dark rounded-lg p-3 hover:border-cyber-rust transition-all duration-300 hover:shadow-neon-red"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-cyber-white text-sm font-medium">
                            {skill}
                          </span>
                          <div className="flex space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className={`w-2 h-2 rounded-full ${
                                  i < Math.floor(Math.random() * 2) + 3
                                    ? `bg-${category.color}`
                                    : 'bg-cyber-gray-dark'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <div className="w-full bg-cyber-gray-dark rounded-full h-1 mt-2">
                          <div
                            className={`bg-${category.color} h-1 rounded-full shadow-glow-red transition-all duration-1000`}
                            style={{
                              width: `${Math.floor(Math.random() * 30) + 70}%`
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsMatrix;
