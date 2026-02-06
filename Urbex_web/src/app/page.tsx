'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { explorationImages } from '@/lib/data/exploration'

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [currentX, setCurrentX] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // 选择图片用于轮播
  const heroImages = explorationImages.slice(0, 6)

  // 每5秒切换图片（仅在非拖拽时）
  useEffect(() => {
    if (heroImages.length === 0 || isDragging) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [heroImages.length, isDragging])

  // 切换到上一张
  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  // 切换到下一张
  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length)
  }

  // 鼠标/触摸开始
  const handleStart = (clientX: number) => {
    setIsDragging(true)
    setStartX(clientX)
    setCurrentX(clientX)
  }

  // 鼠标/触摸移动
  const handleMove = (clientX: number) => {
    if (!isDragging) return
    setCurrentX(clientX)
  }

  // 鼠标/触摸结束
  const handleEnd = () => {
    if (!isDragging) return
    
    const diff = startX - currentX
    const threshold = 50 // 滑动阈值

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // 向左滑动，显示下一张
        goToNext()
      } else {
        // 向右滑动，显示上一张
        goToPrev()
      }
    }

    setIsDragging(false)
    setStartX(0)
    setCurrentX(0)
  }

  // 鼠标事件
  const handleMouseDown = (e: React.MouseEvent) => {
    handleStart(e.clientX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX)
  }

  const handleMouseUp = () => {
    handleEnd()
  }

  const handleMouseLeave = () => {
    if (isDragging) {
      handleEnd()
    }
  }

  // 触摸事件
  const handleTouchStart = (e: React.TouchEvent) => {
    handleStart(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX)
  }

  const handleTouchEnd = () => {
    handleEnd()
  }

  const currentImage = heroImages[currentIndex] || heroImages[0]
  const dragOffset = isDragging ? currentX - startX : 0

  return (
    <div 
      ref={containerRef}
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: '#000000',
        overflow: 'hidden',
        zIndex: 0,
        cursor: isDragging ? 'grabbing' : 'grab',
        userSelect: 'none'
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* 背景图片容器 */}
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%',
        display: 'flex',
        transform: `translateX(${-currentIndex * 100 + (dragOffset / (containerRef.current?.offsetWidth || 1)) * 100}%)`,
        transition: isDragging ? 'none' : 'transform 0.5s ease-in-out'
      }}>
        {heroImages.map((image, index) => (
          <div 
            key={image.id}
            style={{ 
              position: 'relative',
              minWidth: '100%',
              width: '100%',
              height: '100%',
              flexShrink: 0
            }}
          >
            <Image
              src={image.src}
              alt={image.title || 'Hero image'}
              fill
              style={{ objectFit: 'cover' }}
              priority={index === 0}
              unoptimized
            />
          </div>
        ))}
      </div>

      {/* 半透明暗色毛玻璃遮罩 */}
      <div 
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(4px)',
          zIndex: 2,
          pointerEvents: 'none'
        }}
      >
        {/* 内容区域 */}
        <div 
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 3
          }}
        >
          <div style={{ textAlign: 'center', padding: '0 24px', maxWidth: '896px' }}>
            <h1 style={{ 
              fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
              fontFamily: 'Space Grotesk, Inter, sans-serif',
              fontWeight: 300,
              color: '#ffffff',
              marginBottom: '24px',
              letterSpacing: '-0.02em'
            }}>
              Urban Ruins
            </h1>
            <p style={{ 
              fontSize: 'clamp(1.25rem, 4vw, 1.5rem)',
              color: '#d1d5db',
              fontWeight: 300,
              marginBottom: '32px'
            }}>
              记录被遗忘的城市空间
            </p>
            <p style={{ 
              fontSize: 'clamp(1rem, 3vw, 1.125rem)',
              color: '#9ca3af',
              fontWeight: 300,
              maxWidth: '672px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              探索那些被时间遗忘的角落，记录城市的历史与记忆
            </p>
          </div>
        </div>
      </div>

      {/* 左右箭头按钮 */}
      {heroImages.length > 1 && (
        <>
          <button
            onClick={goToPrev}
            style={{
              position: 'absolute',
              left: '24px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              color: '#ffffff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 3,
              transition: 'all 0.3s',
              backdropFilter: 'blur(4px)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.3)'
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)'
            }}
            aria-label="上一张"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            style={{
              position: 'absolute',
              right: '24px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              color: '#ffffff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 3,
              transition: 'all 0.3s',
              backdropFilter: 'blur(4px)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.3)'
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)'
            }}
            aria-label="下一张"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </>
      )}

      {/* 图片指示器 */}
      {heroImages.length > 1 && (
        <div 
          style={{ 
            position: 'absolute',
            bottom: '32px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '8px',
            zIndex: 3
          }}
        >
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              style={{
                height: '8px',
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s',
                backgroundColor: index === currentIndex ? '#ffffff' : 'rgba(255, 255, 255, 0.4)',
                width: index === currentIndex ? '32px' : '8px'
              }}
              aria-label={`切换到第 ${index + 1} 张图片`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
