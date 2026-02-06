import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'cyan' | 'purple' | 'orange' | 'green'
  className?: string
}

export default function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default: 'bg-dark-700 text-gray-300 border-dark-600',
    cyan: 'bg-neon-cyan/10 text-neon-cyan border-neon-cyan/30',
    purple: 'bg-neon-purple/10 text-neon-purple border-neon-purple/30',
    orange: 'bg-neon-orange/10 text-neon-orange border-neon-orange/30',
    green: 'bg-neon-green/10 text-neon-green border-neon-green/30',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium border',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}







