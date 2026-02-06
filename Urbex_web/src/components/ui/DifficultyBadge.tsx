interface DifficultyBadgeProps {
  level: 1 | 2 | 3 | 4 | 5
}

export default function DifficultyBadge({ level }: DifficultyBadgeProps) {
  const colors = {
    1: 'text-neon-green border-neon-green/30 bg-neon-green/10',
    2: 'text-neon-green border-neon-green/30 bg-neon-green/10',
    3: 'text-neon-orange border-neon-orange/30 bg-neon-orange/10',
    4: 'text-neon-orange border-neon-orange/30 bg-neon-orange/10',
    5: 'text-red-400 border-red-500/30 bg-red-500/10',
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium border ${colors[level]}`}
    >
      ⚠️ 难度 {level}
    </span>
  )
}







