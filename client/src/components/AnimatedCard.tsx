
import { ReactNode, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'glow' | 'hover-lift' | 'tilt';
  glowColor?: 'red' | 'green' | 'blue';
}

const AnimatedCard = ({ 
  children, 
  className, 
  variant = 'default',
  glowColor = 'red'
}: AnimatedCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const getVariantClasses = () => {
    switch (variant) {
      case 'glow':
        return `transition-all duration-500 hover:shadow-glow-${glowColor} hover:border-cyber-${glowColor} hover:scale-[1.02]`;
      case 'hover-lift':
        return `transition-all duration-300 hover:-translate-y-4 hover:rotate-1 hover:shadow-2xl`;
      case 'tilt':
        return `transition-all duration-300 hover:rotate-2 hover:scale-105`;
      default:
        return 'transition-all duration-300 hover:-translate-y-2';
    }
  };

  return (
    <div
      className={cn(
        'cyber-card',
        getVariantClasses(),
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={cn(
        'relative overflow-hidden',
        isHovered && variant === 'glow' && 'animate-pulse-neon'
      )}>
        {/* Animated border effect */}
        {isHovered && variant === 'glow' && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-rust to-transparent animate-pulse opacity-20" />
        )}
        {children}
      </div>
    </div>
  );
};

export default AnimatedCard;
