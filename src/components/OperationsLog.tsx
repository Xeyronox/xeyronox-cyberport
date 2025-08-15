
import { useState, useEffect } from 'react';
import { Activity, Clock, MapPin, Zap } from 'lucide-react';

const OperationsLog = () => {
  const [activeLog, setActiveLog] = useState(0);

  const operations = [
    {
      id: 'OP_2024_001',
      title: 'Web Application Penetration Test',
      status: 'COMPLETED',
      timestamp: '2024-01-15 23:47:12',
      location: 'Phantom Network',
      description: 'Identified and exploited SQL injection vulnerability in client e-commerce platform',
      severity: 'HIGH',
      tools: ['SQLMap', 'Burp Suite', 'Custom Python Scripts']
    },
    {
      id: 'OP_2024_002',
      title: 'APK Reverse Engineering',
      status: 'IN_PROGRESS',
      timestamp: '2024-01-14 18:23:45',
      location: 'Mobile Lab',
      description: 'Analyzing Android banking application for security flaws and hidden functionalities',
      severity: 'CRITICAL',
      tools: ['JADX', 'Frida', 'APKTool', 'Ghidra']
    },
    {
      id: 'OP_2024_003',
      title: 'Network Infrastructure Assessment',
      status: 'COMPLETED',
      timestamp: '2024-01-12 14:15:30',
      location: 'Corporate Network',
      description: 'Comprehensive network scan and vulnerability assessment of enterprise infrastructure',
      severity: 'MEDIUM',
      tools: ['Nmap', 'Nessus', 'Metasploit', 'Wireshark']
    },
    {
      id: 'OP_2024_004',
      title: 'Social Engineering Campaign',
      status: 'COMPLETED',
      timestamp: '2024-01-10 09:42:18',
      location: 'Remote Operations',
      description: 'Successful phishing campaign targeting corporate employees for security awareness',
      severity: 'HIGH',
      tools: ['GoPhish', 'SET', 'Custom Payload']
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'COMPLETED': return 'cyber-green';
      case 'IN_PROGRESS': return 'cyber-rust';
      case 'FAILED': return 'red-500';
      default: return 'cyber-gray';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'CRITICAL': return 'red-500';
      case 'HIGH': return 'cyber-rust';
      case 'MEDIUM': return 'yellow-500';
      case 'LOW': return 'cyber-green';
      default: return 'cyber-gray';
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLog((prev) => (prev + 1) % operations.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [operations.length]);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-cyber-green neon-text mb-4">
          LATEST OPERATIONS
        </h2>
        <p className="text-cyber-gray text-lg">
          Recent activities from the digital battlefield
        </p>
      </div>

      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-title">operations_log.sh --live</div>
          <div className="terminal-controls">
            <div className="terminal-control terminal-control-close"></div>
            <div className="terminal-control terminal-control-minimize"></div>
            <div className="terminal-control terminal-control-maximize"></div>
          </div>
        </div>
        <div className="terminal-content min-h-[500px]">
          <div className="space-y-4">
            {operations.map((op, index) => (
              <div
                key={op.id}
                className={`border border-cyber-gray-dark rounded-lg p-4 transition-all duration-500 hover:border-cyber-rust cursor-pointer ${
                  index === activeLog ? 'border-cyber-rust shadow-neon-red bg-cyber-darker' : ''
                }`}
                onClick={() => setActiveLog(index)}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <Activity className="w-5 h-5 text-cyber-rust" />
                    <span className="text-cyber-white font-semibold">{op.id}</span>
                    <span className={`px-2 py-1 rounded text-xs font-bold bg-${getStatusColor(op.status)} text-cyber-black`}>
                      {op.status}
                    </span>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-bold bg-${getSeverityColor(op.severity)} text-cyber-black`}>
                    {op.severity}
                  </span>
                </div>

                <h3 className="text-cyber-green text-lg font-semibold mb-2">
                  {op.title}
                </h3>

                <p className="text-cyber-gray text-sm mb-3">
                  {op.description}
                </p>

                <div className="flex items-center space-x-6 text-xs text-cyber-gray mb-3">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{op.timestamp}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{op.location}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-cyber-blue" />
                  <span className="text-cyber-blue text-xs">Tools:</span>
                  <div className="flex flex-wrap gap-1">
                    {op.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="bg-cyber-blue text-cyber-black px-2 py-1 rounded text-xs font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Operation Navigation */}
      <div className="flex justify-center space-x-2 mt-6">
        {operations.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeLog
                ? 'bg-cyber-green shadow-neon-green scale-125'
                : 'bg-cyber-gray-dark hover:bg-cyber-green'
            }`}
            onClick={() => setActiveLog(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default OperationsLog;
