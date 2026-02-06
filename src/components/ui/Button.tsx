import { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost' | 'terminal'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-neon-cyan'
  
  const variants = {
    primary: 'px-6 py-3 bg-transparent border border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 hover:shadow-glow-cyan active:scale-95',
    secondary: 'px-6 py-3 bg-dark-700 border border-dark-600 text-gray-300 hover:border-gray-500 hover:text-gray-100 active:scale-95',
    danger: 'px-6 py-3 bg-transparent border border-red-500 text-red-400 hover:bg-red-500/10 active:scale-95',
    ghost: 'px-6 py-3 text-gray-300 hover:text-neon-cyan hover:bg-dark-700 active:scale-95',
    terminal: 'px-6 py-3 bg-transparent border border-terminal-green text-terminal-green font-mono hover:bg-terminal-green/10 hover:shadow-glow-terminal active:scale-95',
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  )
}


