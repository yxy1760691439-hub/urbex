import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-display font-bold text-neon-cyan mb-4">404</h1>
        <p className="text-xl text-gray-300 mb-8">页面未找到</p>
        <Link href="/">
          <Button>返回首页</Button>
        </Link>
      </div>
    </div>
  )
}







