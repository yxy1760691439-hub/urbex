'use client'

import Link from 'next/link'
import ImageWithFallback from '@/components/ui/ImageWithFallback'
import { onsiteLocations } from '@/lib/data/onsite'

export default function OnSitePage() {
  return (
    <div className="pt-24 pb-16 px-6 lg:px-8 min-h-screen bg-black" style={{ paddingTop: '6rem' }}>
      <div className="max-w-7xl mx-auto">
        {/* 标题 */}
        <div className="mb-12">
          <h1 className="text-4xl font-display font-light text-white mb-4">
            On-site / 在现场
          </h1>
          <p className="text-sm text-gray-500">记录展示</p>
        </div>

        {/* 卡片式瀑布流布局 - 每行三个 */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {onsiteLocations.map((location) => (
            <Link 
              key={location.id}
              href={`/onsite/${location.id}`}
              className="block mb-6 break-inside-avoid group"
            >
              <div className="bg-gray-900 border border-gray-800 rounded overflow-hidden transition-all duration-300 hover:border-gray-700">
                {/* 图片 */}
                <div className="relative aspect-[4/3] bg-gray-900 overflow-hidden">
                  <ImageWithFallback
                    src={location.coverImage}
                    alt={location.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                  />
                </div>
                
                {/* 内容 */}
                <div className="p-4">
                  <h3 className="text-lg font-medium text-white mb-2 group-hover:text-gray-300 transition-colors">
                    {location.name}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                    <span>{location.zone}</span>
                    <span>{location.date}</span>
                  </div>
                  <p className="text-sm text-gray-400 line-clamp-2">{location.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
