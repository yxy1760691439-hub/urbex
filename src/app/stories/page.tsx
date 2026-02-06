import Link from 'next/link'
import Image from 'next/image'
import { stories } from '@/lib/data/stories'
import { formatDate } from '@/lib/utils'

export default function StoriesPage() {
  // Sort by date, newest first
  const sorted = [...stories].sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )

  return (
    <div className="min-h-screen bg-black pt-24 pb-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* 页面标题 */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-light text-white mb-6">
            Stories <span className="text-terminal-green">/</span> 故事
          </h1>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            每一处废墟都有它的故事，每一次探索都是一段旅程
          </p>
        </div>

        {/* 故事列表 */}
        <div className="space-y-12">
          {sorted.map((story, index) => (
            <Link 
              key={story.id}
              href={`/stories/${story.slug}`}
              className="block group"
            >
              <article className={`flex flex-col gap-8 pb-12 ${
                index < sorted.length - 1 ? 'border-b border-gray-900' : ''
              }`}>
                {/* 如果有封面图 */}
                {story.coverImage && (
                  <div className="relative aspect-[21/9] w-full overflow-hidden bg-dark-800 rounded-lg">
                    <Image
                      src={story.coverImage}
                      alt={story.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 1024px"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                )}

                {/* 故事信息 */}
                <div className="flex flex-col gap-4">
                  {/* 元信息 */}
                  <div className="flex items-center gap-3 text-xs text-gray-600 font-mono">
                    <time dateTime={story.publishedAt}>
                      {formatDate(story.publishedAt)}
                    </time>
                    {story.tags && story.tags.length > 0 && (
                      <>
                        <span>·</span>
                        <div className="flex gap-2">
                          {story.tags.slice(0, 3).map((tag) => (
                            <span 
                              key={tag}
                              className="px-2 py-0.5 bg-dark-800 border border-gray-800 rounded text-gray-500"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  {/* 标题 */}
                  <h2 className="text-3xl md:text-4xl font-display font-light text-white group-hover:text-terminal-green transition-colors">
                    {story.title}
                  </h2>

                  {/* 摘要 */}
                  <p className="text-gray-400 leading-relaxed text-base md:text-lg line-clamp-3">
                    {story.excerpt}
                  </p>

                  {/* 阅读更多 */}
                  <div className="flex items-center gap-2 text-terminal-green text-sm font-mono group-hover:text-terminal-bright transition-colors">
                    <span>Read Story</span>
                    <svg 
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 5l7 7-7 7" 
                      />
                    </svg>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* 空状态 */}
        {sorted.length === 0 && (
          <div className="text-center py-24">
            <p className="text-gray-600 font-mono text-sm">No stories yet</p>
          </div>
        )}
      </div>
    </div>
  )
}
