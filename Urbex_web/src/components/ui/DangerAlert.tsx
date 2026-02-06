interface DangerAlertProps {
  title: string
  message: string
  level?: 'high' | 'medium' | 'low'
}

export default function DangerAlert({ title, message, level = 'medium' }: DangerAlertProps) {
  const levelStyles = {
    high: 'bg-red-900/20 border-red-500 text-red-400',
    medium: 'bg-orange-900/20 border-neon-orange text-neon-orange',
    low: 'bg-yellow-900/20 border-yellow-500 text-yellow-400',
  }

  return (
    <div className={`rounded-lg border p-4 ${levelStyles[level]}`}>
      <div className="flex items-start">
        <span className="text-xl mr-3">⚠️</span>
        <div>
          <h4 className="font-semibold mb-1">{title}</h4>
          <p className="text-sm opacity-90">{message}</p>
        </div>
      </div>
    </div>
  )
}







