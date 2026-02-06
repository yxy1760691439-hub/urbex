import Link from 'next/link'
import ImageWithFallback from '@/components/ui/ImageWithFallback'
import { onsiteLocations } from '@/lib/data/onsite'

export default function OnSitePreview() {
  const recent = onsiteLocations.slice(0, 6)

  return (
    <section className="py-16 border-t border-gray-800">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h2 className="text-2xl font-display font-light text-white mb-2">
            On-site / 在现场
          </h2>
          <p className="text-sm text-gray-500">Latest field explorations</p>
        </div>
        <Link 
          href="/onsite"
          className="text-sm text-gray-400 hover:text-white transition-colors underline-offset-4 hover:underline"
        >
          View all →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recent.map((location) => (
          <Link 
            key={location.id}
            href={`/onsite/${location.id}`}
            className="group"
          >
            <div className="relative aspect-[4/3] bg-gray-900 mb-4 overflow-hidden">
              <ImageWithFallback
                src={location.coverImage}
                alt={location.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="lazy"
              />
            </div>
            <h3 className="text-lg font-medium text-white mb-1 group-hover:text-gray-300 transition-colors">
              {location.name}
            </h3>
            <p className="text-sm text-gray-500 mb-2">{location.date}</p>
            <p className="text-sm text-gray-400 line-clamp-2">{location.description}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}

