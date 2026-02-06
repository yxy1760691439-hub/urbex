'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import ImageModal from '@/components/gallery/ImageModal'
import { explorationImages, cities } from '@/lib/data/exploration'
import { GalleryImage } from '@/lib/types'

export default function ExplorePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedCity, setSelectedCity] = useState<string>('')

  // 筛选图片
  const filteredImages = useMemo(() => {
    if (!selectedCity) return explorationImages
    return explorationImages.filter(img => img.city === selectedCity)
  }, [selectedCity])

  const handleNext = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage)
    const nextIndex = (currentIndex + 1) % filteredImages.length
    setSelectedImage(filteredImages[nextIndex].id)
  }

  const handlePrev = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage)
    const prevIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1
    setSelectedImage(filteredImages[prevIndex].id)
  }

  return (
    <div className="min-h-screen bg-black pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* 页面标题 */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-light text-white mb-4">
            Explore <span className="text-terminal-green">/</span> 探索
          </h1>
          <p className="text-gray-500 text-sm md:text-base">
            记录那些被时间遗忘的空间
          </p>
        </div>

        {/* 简单的城市筛选 */}
        <div className="mb-12 flex flex-wrap items-center gap-3">
          <button
            onClick={() => setSelectedCity('')}
            className={`px-4 py-2 text-sm font-mono rounded border transition-colors ${
              selectedCity === ''
                ? 'bg-terminal-green/20 border-terminal-green text-terminal-green'
                : 'bg-dark-800 border-gray-800 text-gray-400 hover:border-gray-700 hover:text-white'
            }`}
          >
            All
          </button>
          {cities.map(city => (
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`px-4 py-2 text-sm font-mono rounded border transition-colors ${
                selectedCity === city
                  ? 'bg-terminal-green/20 border-terminal-green text-terminal-green'
                  : 'bg-dark-800 border-gray-800 text-gray-400 hover:border-gray-700 hover:text-white'
              }`}
            >
              {city}
            </button>
          ))}
        </div>

        {/* 结果计数 */}
        <div className="mb-8 text-sm text-gray-600 font-mono">
          <span className="text-terminal-green">{filteredImages.length}</span> images found
        </div>

        {/* 瀑布流布局 */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="mb-4 break-inside-avoid cursor-pointer group"
              onClick={() => setSelectedImage(image.id)}
            >
              <div className="relative overflow-hidden bg-dark-800 rounded">
                <div className="relative aspect-[3/4]">
                  <Image
                    src={image.src}
                    alt={image.title || 'Urban exploration'}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    loading="lazy"
                    unoptimized
                  />
                </div>
                
                {/* 悬浮信息 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    {image.title && (
                      <p className="text-white font-light text-sm mb-1">{image.title}</p>
                    )}
                    <div className="flex gap-2 text-xs text-gray-400 font-mono">
                      {image.city && <span>{image.city}</span>}
                      {image.year && <span>· {image.year}</span>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 空状态 */}
        {filteredImages.length === 0 && (
          <div className="text-center py-24">
            <p className="text-gray-600 font-mono text-sm">No images found</p>
          </div>
        )}

        {/* 图片模态框 */}
        {selectedImage && (
          <ImageModal
            imageId={selectedImage}
            images={filteredImages as GalleryImage[]}
            onClose={() => setSelectedImage(null)}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        )}
      </div>
    </div>
  )
}
