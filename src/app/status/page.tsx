'use client'

import { useEffect, useState } from 'react'

export default function StatusPage() {
  const [status, setStatus] = useState<'checking' | 'online' | 'offline'>('checking')
  const [serverTime, setServerTime] = useState<string>('')

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const response = await fetch('/')
        if (response.ok) {
          setStatus('online')
          setServerTime(new Date().toLocaleString('zh-CN'))
        } else {
          setStatus('offline')
        }
      } catch (error) {
        setStatus('offline')
      }
    }

    checkStatus()
    const interval = setInterval(checkStatus, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="pt-24 pb-16 px-6 lg:px-8 min-h-screen bg-black">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-display font-light text-white mb-8">
          服务器状态
        </h1>

        <div className="space-y-6">
          <div className="border border-gray-800 p-6 rounded">
            <div className="flex items-center gap-4 mb-4">
              <div className={`w-4 h-4 rounded-full ${
                status === 'online' ? 'bg-green-500' : 
                status === 'offline' ? 'bg-red-500' : 
                'bg-yellow-500 animate-pulse'
              }`} />
              <span className="text-white font-medium">
                {status === 'online' ? '在线' : 
                 status === 'offline' ? '离线' : 
                 '检查中...'}
              </span>
            </div>
            
            {status === 'online' && (
              <div className="space-y-2 text-gray-400 text-sm">
                <p>✅ 服务器运行正常</p>
                <p>📍 访问地址: <a href="/" className="text-white underline">http://localhost:3000</a></p>
                {serverTime && <p>🕐 最后检查: {serverTime}</p>}
              </div>
            )}

            {status === 'offline' && (
              <div className="space-y-2 text-gray-400 text-sm">
                <p>❌ 无法连接到服务器</p>
                <p>请确保开发服务器正在运行：</p>
                <code className="block bg-gray-900 p-3 rounded mt-2 text-xs">
                  npm run dev
                </code>
              </div>
            )}
          </div>

          <div className="border border-gray-800 p-6 rounded">
            <h2 className="text-white font-medium mb-4">快速链接</h2>
            <div className="space-y-2">
              <a href="/" className="block text-gray-400 hover:text-white transition-colors">
                → 首页
              </a>
              <a href="/onsite" className="block text-gray-400 hover:text-white transition-colors">
                → On-site / 在现场
              </a>
              <a href="/stories" className="block text-gray-400 hover:text-white transition-colors">
                → Stories / 日志
              </a>
              <a href="/gallery" className="block text-gray-400 hover:text-white transition-colors">
                → Gallery / 图库
              </a>
              <a href="/about" className="block text-gray-400 hover:text-white transition-colors">
                → About / 关于
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

