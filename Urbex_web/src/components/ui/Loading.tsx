interface LoadingProps {
  size?: 'sm' | 'md' | 'lg'
}

export default function Loading({ size = 'md' }: LoadingProps) {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  }

  return (
    <div className="flex items-center justify-center">
      <div
        className={`${sizes[size]} border-2 border-neon-cyan/30 border-t-neon-cyan rounded-full animate-spin`}
      />
    </div>
  )
}







