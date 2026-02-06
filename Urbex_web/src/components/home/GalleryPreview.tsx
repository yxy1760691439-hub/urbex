import Link from 'next/link'
import ImageWithFallback from '@/components/ui/ImageWithFallback'
import { galleryImages } from '@/lib/data/gallery'

export default function GalleryPreview() {
  const preview = galleryImages.slice(0, 6)

  return (
    <section className="py-16 border-t border-gray-800">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h2 className="text-2xl font-display font-light text-white mb-2">
            Gallery / 图库
          </h2>
          <p className="text-sm text-gray-500">Visual documentation</p>
        </div>
        <Link 
          href="/gallery"
          className="text-sm text-gray-400 hover:text-white transition-colors underline-offset-4 hover:underline"
        >
          View all →
        </Link>
      </div>

      <div className="grid grid-cols-6 gap-2">
        {preview.map((image) => (
          <Link 
            key={image.id}
            href={`/gallery#${image.id}`}
            className="relative aspect-square bg-gray-900 overflow-hidden group"
          >
            <ImageWithFallback
              src={image.src}
              alt={image.title || 'Gallery preview'}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, 16.66vw"
              loading="lazy"
            />
          </Link>
        ))}
      </div>
    </section>
  )
}

