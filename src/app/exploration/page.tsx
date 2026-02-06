'use client'

import { useState, useMemo } from 'react'
import ImageWithFallback from '@/components/ui/ImageWithFallback'
import ImageModal from '@/components/gallery/ImageModal'
import { explorationImages, cities, types, statuses, years } from '@/lib/data/exploration'
import { GalleryImage } from '@/lib/types'

export default function ExplorationPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [filters, setFilters] = useState({
    city: '',
    type: '',
    status: '',
    year: '',
    sortBy: 'date' as 'date' | 'city' | 'type' | 'status',
  })

  // 筛选和排序图片
  const filteredImages = useMemo(() => {
    let result = [...explorationImages]

    // 应用筛选
    if (filters.city) {
      result = result.filter(img => img.city === filters.city)
    }
    if (filters.type) {
      result = result.filter(img => img.type === filters.type)
    }
    if (filters.status) {
      result = result.filter(img => img.status === filters.status)
    }
    if (filters.year) {
      result = result.filter(img => img.year === parseInt(filters.year))
    }

    // 排序
    switch (filters.sortBy) {
      case 'date':
        result.sort((a, b) => (b.year || 0) - (a.year || 0))
        break
      case 'city':
        result.sort((a, b) => (a.city || '').localeCompare(b.city || ''))
        break
      case 'type':
        result.sort((a, b) => (a.type || '').localeCompare(b.type || ''))
        break
      case 'status':
        result.sort((a, b) => (a.status || '').localeCompare(b.status || ''))
        break
    }

    return result
  }, [filters])

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
    <div className="pt-24 pb-16 px-6 lg:px-8 min-h-screen bg-black" style={{ paddingTop: '6rem' }}>
      <div className="max-w-7xl mx-auto">
        {/* 标题 */}
        <div className="mb-12">
          <h1 className="text-4xl font-display font-light text-white mb-4">
            Exploration / 探索
          </h1>
          <p className="text-sm text-gray-500">按城市、类型、年代、状态分类浏览</p>
        </div>

        {/* 筛选器 */}
        <div className="mb-12 pb-8 border-b border-gray-800">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {/* 城市筛选 */}
            <select
              value={filters.city}
              onChange={(e) => setFilters({ ...filters, city: e.target.value })}
              className="bg-gray-900 border border-gray-800 text-white text-sm px-4 py-2 rounded focus:outline-none focus:border-gray-700 transition-colors"
            >
              <option value="">所有城市</option>
              {cities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>

            {/* 类型筛选 */}
            <select
              value={filters.type}
              onChange={(e) => setFilters({ ...filters, type: e.target.value })}
              className="bg-gray-900 border border-gray-800 text-white text-sm px-4 py-2 rounded focus:outline-none focus:border-gray-700 transition-colors"
            >
              <option value="">所有类型</option>
              {types.map(type => (
                <option key={type} value={type}>
                  {type === 'industrial' ? '工业' : 
                   type === 'school' ? '学校' : 
                   type === 'residential' ? '住宅' : 
                   type === 'hospital' ? '医院' : 
                   type === 'commercial' ? '商业' : '其他'}
                </option>
              ))}
            </select>

            {/* 状态筛选 */}
            <select
              value={filters.status}
              onChange={(e) => setFilters({ ...filters, status: e.target.value })}
              className="bg-gray-900 border border-gray-800 text-white text-sm px-4 py-2 rounded focus:outline-none focus:border-gray-700 transition-colors"
            >
              <option value="">所有状态</option>
              {statuses.map(status => (
                <option key={status} value={status}>
                  {status === 'abandoned' ? '废弃' : 
                   status === 'demolished' ? '已拆除' : 
                   status === 'renovated' ? '已翻新' : '已保护'}
                </option>
              ))}
            </select>

            {/* 年代筛选 */}
            <select
              value={filters.year}
              onChange={(e) => setFilters({ ...filters, year: e.target.value })}
              className="bg-gray-900 border border-gray-800 text-white text-sm px-4 py-2 rounded focus:outline-none focus:border-gray-700 transition-colors"
            >
              <option value="">所有年代</option>
              {years.map(year => (
                <option key={year} value={year?.toString()}>{year}</option>
              ))}
            </select>

            {/* 排序 */}
            <select
              value={filters.sortBy}
              onChange={(e) => setFilters({ ...filters, sortBy: e.target.value as any })}
              className="bg-gray-900 border border-gray-800 text-white text-sm px-4 py-2 rounded focus:outline-none focus:border-gray-700 transition-colors"
            >
              <option value="date">按时间</option>
              <option value="city">按城市</option>
              <option value="type">按类型</option>
              <option value="status">按状态</option>
            </select>

            {/* 清除筛选 */}
            <button
              onClick={() => setFilters({ city: '', type: '', status: '', year: '', sortBy: 'date' })}
              className="bg-gray-900 border border-gray-800 text-white text-sm px-4 py-2 rounded hover:bg-gray-800 transition-colors"
            >
              清除
            </button>
          </div>
        </div>

        {/* 结果数量 */}
        <div className="mb-8 text-sm text-gray-500">
          找到 {filteredImages.length} 个结果
        </div>

        {/* 瀑布流布局 - 每行三个 */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="mb-4 break-inside-avoid cursor-pointer group"
              onClick={() => setSelectedImage(image.id)}
            >
              <div className="relative aspect-square overflow-hidden bg-gray-900 group-hover:opacity-90 transition-opacity">
                <ImageWithFallback
                  src={image.src}
                  alt={image.title || 'Exploration image'}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
              {image.title && (
                <div className="mt-2 text-xs text-gray-500">
                  <p className="text-white">{image.title}</p>
                  <div className="flex gap-2 mt-1">
                    {image.city && <span>{image.city}</span>}
                    {image.year && <span>· {image.year}</span>}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

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
