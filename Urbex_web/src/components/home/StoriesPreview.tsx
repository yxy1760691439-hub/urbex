import Link from 'next/link'
import { stories } from '@/lib/data/stories'

export default function StoriesPreview() {
  const featured = stories.slice(0, 3)

  return (
    <section className="py-16 border-t border-gray-800">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h2 className="text-2xl font-display font-light text-white mb-2">
            Highlight Stories / 精选日志
          </h2>
          <p className="text-sm text-gray-500">Essays, gear reviews, and thoughts</p>
        </div>
        <Link 
          href="/stories"
          className="text-sm text-gray-400 hover:text-white transition-colors underline-offset-4 hover:underline"
        >
          View all →
        </Link>
      </div>

      <div className="space-y-8">
        {featured.map((story) => (
          <Link 
            key={story.id}
            href={`/stories/${story.slug}`}
            className="block group"
          >
            <div className="flex items-start justify-between gap-8 py-6 border-b border-gray-800 group-hover:border-gray-700 transition-colors">
              <div className="flex-1">
                <h3 className="text-xl font-medium text-white mb-2 group-hover:text-gray-300 transition-colors">
                  {story.title}
                </h3>
                <p className="text-sm text-gray-400 line-clamp-2">{story.excerpt}</p>
              </div>
              <div className="text-sm text-gray-500 whitespace-nowrap">
                {story.publishedAt}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}






