import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  neon?: boolean
  terminal?: boolean
}

export default function Card({ children, className, hover = false, neon = false, terminal = false }: CardProps) {
  return (
    <div
      className={cn(
        'bg-dark-800 border rounded-lg p-6',
        hover && 'card-hover cursor-pointer',
        terminal && 'card-terminal',
        neon && !terminal ? 'border-neon-cyan/30 shadow-glow-cyan' : '',
        !terminal && !neon && 'border-dark-600',
        hover && !neon && !terminal && 'hover:border-neon-cyan/50 hover:shadow-glow-cyan',
        hover && terminal && 'hover:shadow-glow-terminal',
        className
      )}
    >
      {children}
    </div>
  )
}


