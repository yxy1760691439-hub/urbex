import { notFound } from 'next/navigation'
import Link from 'next/link'
import ImageWithFallback from '@/components/ui/ImageWithFallback'
import { onsiteLocations } from '@/lib/data/onsite'

// 生成静态参数
export async function generateStaticParams() {
  return onsiteLocations.map((location) => ({
    id: location.id,
  }))
}

export default function OnSiteDetailPage({ params }: { params: { id: string } }) {
  const location = onsiteLocations.find((loc) => loc.id === params.id)
  
  if (!location) {
    notFound()
  }

  return (
    <div className="pt-24 pb-16 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/onsite"
          className="text-sm text-gray-400 hover:text-white transition-colors mb-8 inline-block"
        >
          ← Back to On-site
        </Link>

        <div className="mb-8">
          <div className="text-sm text-gray-500 mb-4">{location.zone}</div>
          <h1 className="text-4xl font-display font-light text-white mb-4">
            {location.name}
          </h1>
          <p className="text-sm text-gray-500 mb-8">{location.date}</p>
        </div>

        <div className="relative aspect-video bg-gray-900 mb-12 overflow-hidden">
          <ImageWithFallback
            src={location.coverImage}
            alt={location.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 896px"
            priority
          />
        </div>

        <div className="prose prose-sm max-w-none">
          <p className="text-gray-300 leading-relaxed mb-6">
            {location.description}
          </p>
          <p className="text-gray-300 leading-relaxed">
            [Content placeholder - Add your detailed exploration notes, observations, and images here]
          </p>
        </div>
      </div>
    </div>
  )
}

