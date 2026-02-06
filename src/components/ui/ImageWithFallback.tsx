'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface ImageWithFallbackProps {
  src: string
  alt: string
  fill?: boolean
  width?: number
  height?: number
  className?: string
  sizes?: string
  priority?: boolean
  loading?: 'lazy' | 'eager'
}

export default function ImageWithFallback({
  src,
  alt,
  fill,
  width,
  height,
  className,
  sizes,
  priority,
  loading = 'lazy',
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    setImgSrc(src)
    setHasError(false)
  }, [src])

  if (hasError) {
    return (
      <div 
        className={`bg-gray-900 flex items-center justify-center ${className || ''}`} 
        style={fill ? { position: 'absolute', inset: 0 } : { width, height }}
      >
        <span className="text-gray-500 text-sm">图片加载失败: {src}</span>
      </div>
    )
  }

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill={fill}
      width={width}
      height={height}
      className={className}
      sizes={sizes}
      priority={priority}
      loading={loading}
      unoptimized
      onError={() => {
        console.error('Image load error:', imgSrc)
        setHasError(true)
      }}
      onLoad={() => {
        console.log('Image loaded successfully:', imgSrc)
      }}
    />
  )
}






