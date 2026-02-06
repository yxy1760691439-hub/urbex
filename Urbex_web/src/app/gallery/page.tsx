'use client'

import { useState } from 'react'
import ImageWithFallback from '@/components/ui/ImageWithFallback'
import { galleryImages } from '@/lib/data/gallery'
import ImageModal from '@/components/gallery/ImageModal'

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className="pt-24 pb-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-display font-light text-white mb-4">
            Gallery / 图库
          </h1>
          <p className="text-sm text-gray-500">Visual documentation</p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="mb-4 break-inside-avoid cursor-pointer group"
              onClick={() => setSelectedImage(image.id)}
            >
              <div className="relative aspect-square overflow-hidden bg-gray-900 group-hover:opacity-90 transition-opacity">
                <ImageWithFallback
                  src={image.src}
                  alt={image.title || 'Gallery image'}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
              {image.title && (
                <div className="mt-2 text-xs text-gray-500">
                  {image.title}
                </div>
              )}
            </div>
          ))}
        </div>

        {selectedImage && (
          <ImageModal
            imageId={selectedImage}
            images={galleryImages}
            onClose={() => setSelectedImage(null)}
            onNext={() => {
              const currentIndex = galleryImages.findIndex(img => img.id === selectedImage)
              const nextIndex = (currentIndex + 1) % galleryImages.length
              setSelectedImage(galleryImages[nextIndex].id)
            }}
            onPrev={() => {
              const currentIndex = galleryImages.findIndex(img => img.id === selectedImage)
              const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length
              setSelectedImage(galleryImages[prevIndex].id)
            }}
          />
        )}
      </div>
    </div>
  )
}
