'use client'

export default function TestImagePage() {
  const images = [
    '/images/2024.12.12-琅钜温泉谷_副本.jpg',
    '/images/2025.3.8-和大哥出海_副本.jpg',
    '/images/IMG_6978_副本.jpeg',
  ]

  return (
    <div className="pt-24 pb-16 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl mb-8">图片测试页面</h1>
        
        <div className="space-y-8">
          {images.map((src, index) => (
            <div key={index} className="border border-gray-200 p-4">
              <p className="text-sm text-gray-600 mb-2">路径: {src}</p>
              
              {/* 方法1: Next.js Image */}
              <div className="mb-4">
                <p className="text-xs text-gray-500 mb-2">Next.js Image:</p>
                <div className="relative w-full h-64 bg-gray-100">
                  <img
                    src={src}
                    alt={`Test ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      console.error('Image error:', src)
                      e.currentTarget.style.display = 'none'
                    }}
                    onLoad={() => console.log('Image loaded:', src)}
                  />
                </div>
              </div>

              {/* 方法2: 直接 img 标签 */}
              <div>
                <p className="text-xs text-gray-500 mb-2">直接 img 标签:</p>
                <img
                  src={src}
                  alt={`Test ${index + 1}`}
                  className="max-w-full h-auto"
                  onError={(e) => {
                    console.error('Direct img error:', src)
                    e.currentTarget.alt = '图片加载失败'
                  }}
                  onLoad={() => console.log('Direct img loaded:', src)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}






