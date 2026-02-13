'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import Link from 'next/link';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'outline-light';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-dark',
    secondary: 'bg-accent text-gray-900 hover:bg-accent/90',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    'outline-light': 'border-2 border-white text-white hover:bg-white hover:text-gray-900',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const combinedClassName = `inline-flex items-center justify-center font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ${variants[variant]} ${sizes[size]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { type: 'spring' as const, stiffness: 400, damping: 17 },
  };

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        <motion.span {...motionProps} className="inline-flex items-center">
          {children}
        </motion.span>
      </Link>
    );
  }

  return (
    <motion.button {...motionProps} className={combinedClassName} {...props}>
      {children}
    </motion.button>
  );
}
