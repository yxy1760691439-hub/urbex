'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { explorationImages } from '@/lib/data/exploration'

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const heroImages = explorationImages.slice(0, 8)

  // 自动轮播
  useEffect(() => {
    if (heroImages.length === 0) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [heroImages.length])

  const modules = [
    {
      title: 'Explore',
      titleCn: '探索',
      description: '记录那些被遗忘的空间',
      href: '/explore',
      icon: '📸',
      gradient: 'from-cyan-500/20 to-transparent'
    },
    {
      title: 'Stories',
      titleCn: '故事',
      description: '每个废墟背后的故事',
      href: '/stories',
      icon: '📖',
      gradient: 'from-purple-500/20 to-transparent'
    },
    {
      title: 'Guide',
      titleCn: '指南',
      description: '城市探险的知识与伦理',
      href: '/guide',
      icon: '📘',
      gradient: 'from-orange-500/20 to-transparent'
    },
    {
      title: 'About',
      titleCn: '关于',
      description: '了解我们的理念',
      href: '/about',
      icon: 'ℹ️',
      gradient: 'from-green-500/20 to-transparent'
    }
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section - 全屏背景图 */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* 背景图片轮播 */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={image.id}
              className="absolute inset-0 transition-opacity duration-1000"
              style={{ opacity: index === currentIndex ? 1 : 0 }}
            >
              <Image
                src={image.src}
                alt={image.title || 'Urban exploration'}
                fill
                className="object-cover"
                priority={index === 0}
                unoptimized
              />
            </div>
          ))}
        </div>

        {/* 渐变遮罩 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />

        {/* Hero 内容 */}
        <div className="relative h-full flex flex-col items-center justify-center px-6 text-center">
          <h1 className="text-6xl md:text-8xl font-light text-white mb-6 tracking-tight font-display">
            Urban <span className="text-terminal-green">Ruins</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light mb-4">
            探索被时间遗忘的空间
          </p>
          <p className="text-sm md:text-base text-gray-500 max-w-2xl mb-12">
            记录那些即将消失的城市记忆，每一处废墟都在诉说着它的故事
          </p>

          {/* 向下滚动提示 */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
            <svg 
              className="w-6 h-6 text-gray-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 9l-7 7-7-7" 
              />
            </svg>
          </div>
        </div>

        {/* 图片指示器 */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-8 bg-white' 
                  : 'w-1 bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`切换到第 ${index + 1} 张图片`}
            />
          ))}
        </div>
      </section>

      {/* 模块入口区域 */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light text-white mb-12 text-center font-display">
            <span className="terminal-prompt">discover</span>
          </h2>

          {/* 模块卡片网格 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((module) => (
              <Link
                key={module.href}
                href={module.href}
                className="group relative bg-dark-800 border border-gray-800 rounded-lg p-8 hover:border-gray-700 transition-all duration-300 overflow-hidden"
              >
                {/* 渐变背景 */}
                <div className={`absolute inset-0 bg-gradient-to-br ${module.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* 内容 */}
                <div className="relative z-10">
                  <div className="text-4xl mb-4">{module.icon}</div>
                  <h3 className="text-2xl font-display font-light text-white mb-2 group-hover:text-terminal-green transition-colors">
                    {module.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">{module.titleCn}</p>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {module.description}
                  </p>
                </div>

                {/* 箭头 */}
                <div className="relative mt-6 flex items-center text-gray-600 group-hover:text-terminal-green transition-colors">
                  <span className="text-sm font-mono">Enter</span>
                  <svg 
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 视觉焦点区域 - 精选图片 */}
      <section className="relative py-24 px-6 bg-dark-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light text-white mb-12 text-center font-display">
            <span className="terminal-prompt">featured</span>
          </h2>

          {/* 精选图片网格 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {explorationImages.slice(0, 6).map((image) => (
              <Link
                key={image.id}
                href="/explore"
                className="group relative aspect-[4/3] overflow-hidden bg-dark-800 rounded-lg"
              >
                <Image
                  src={image.src}
                  alt={image.title || 'Featured'}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-light text-lg">{image.title}</p>
                    {image.city && (
                      <p className="text-gray-400 text-sm mt-1">{image.city}</p>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/explore"
              className="inline-flex items-center text-terminal-green hover:text-terminal-bright transition-colors font-mono text-sm"
            >
              View All
              <svg 
                className="w-4 h-4 ml-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
