
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

export const CyberHeading = ({ children, className }: TypographyProps) => (
  <h1 className={cn(
    'text-4xl md:text-6xl lg:text-7xl font-display font-bold text-cyber-rust neon-text glitch mb-6',
    'tracking-wider leading-tight',
    className
  )} data-text={children}>
    {children}
  </h1>
);

export const SectionTitle = ({ children, className }: TypographyProps) => (
  <h2 className={cn(
    'text-3xl md:text-5xl font-bold neon-text mb-4',
    'tracking-wide leading-tight font-display',
    className
  )}>
    {children}
  </h2>
);

export const SubTitle = ({ children, className }: TypographyProps) => (
  <h3 className={cn(
    'text-xl md:text-2xl font-semibold text-cyber-green neon-text mb-3',
    'tracking-wide font-mono',
    className
  )}>
    {children}
  </h3>
);

export const BodyText = ({ children, className }: TypographyProps) => (
  <p className={cn(
    'text-cyber-gray leading-relaxed mb-4',
    'text-base md:text-lg font-sans',
    className
  )}>
    {children}
  </p>
);

export const CodeText = ({ children, className }: TypographyProps) => (
  <code className={cn(
    'bg-cyber-darker text-cyber-green px-2 py-1 rounded font-mono text-sm',
    'border border-cyber-gray-dark',
    className
  )}>
    {children}
  </code>
);

export const HighlightText = ({ children, className }: TypographyProps) => (
  <span className={cn(
    'text-cyber-rust neon-text font-semibold',
    className
  )}>
    {children}
  </span>
);
