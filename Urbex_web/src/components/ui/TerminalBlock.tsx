'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface TerminalBlockProps {
  children: ReactNode
  className?: string
  title?: string
  prompt?: string
}

export default function TerminalBlock({ 
  children, 
  className,
  title,
  prompt = '$'
}: TerminalBlockProps) {
  return (
    <div className={cn('code-block data-stream', className)}>
      {title && (
        <div className="flex items-center gap-2 mb-3 pb-2 border-b border-terminal-green/20">
          <span className="text-terminal-green font-mono text-xs">{prompt}</span>
          <span className="text-terminal-green/80 font-mono text-xs">{title}</span>
        </div>
      )}
      <div className="font-mono text-terminal-green/90 text-sm leading-relaxed">
        {children}
      </div>
    </div>
  )
}






