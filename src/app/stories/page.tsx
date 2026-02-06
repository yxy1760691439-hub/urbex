import Link from 'next/link'
import { stories } from '@/lib/data/stories'
import { formatDate } from '@/lib/utils'

export default function StoriesPage() {
  // Sort by date, newest first
  const sorted = [...stories].sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )

  return (
    <div className="pt-24 pb-16 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-display font-light text-white mb-4">
            Stories / 日志
          </h1>
          <p className="text-sm text-gray-500">Essays, gear reviews, and thoughts</p>
        </div>

        <div className="space-y-0">
          {sorted.map((story) => (
            <Link 
              key={story.id}
              href={`/stories/${story.slug}`}
              className="block group"
            >
              <div className="flex items-start justify-between gap-8 py-8 border-b border-gray-800 group-hover:border-gray-700 transition-colors">
                <div className="flex-1">
                  <h3 className="text-2xl font-medium text-white mb-3 group-hover:text-gray-300 transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-sm text-gray-400 line-clamp-2">{story.excerpt}</p>
                </div>
                <div className="text-sm text-gray-500 whitespace-nowrap">
                  {formatDate(story.publishedAt)}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
