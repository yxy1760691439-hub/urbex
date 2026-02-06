'use client'

import { useEffect } from 'react'
import ImageWithFallback from '@/components/ui/ImageWithFallback'
import { GalleryImage } from '@/lib/types'

interface ImageModalProps {
  imageId: string
  images: GalleryImage[]
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}

export default function ImageModal({ imageId, images, onClose, onNext, onPrev }: ImageModalProps) {
  const image = images.find(img => img.id === imageId)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNext()
      if (e.key === 'ArrowLeft') onPrev()
    }
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [onClose, onNext, onPrev])

  if (!image) return null

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="relative max-w-7xl max-h-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="relative w-full max-w-7xl max-h-[90vh] flex items-center justify-center">
          <div className="relative w-full aspect-video max-h-[90vh] bg-gray-900">
            <ImageWithFallback
              src={image.src}
              alt={image.title || 'Gallery image'}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>

        {image.title && (
          <div className="absolute bottom-4 left-4 right-4 text-white text-sm">
            {image.title}
            {image.location && <span className="text-gray-400 ml-2">· {image.location}</span>}
          </div>
        )}

        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}

