import { notFound } from 'next/navigation'
import Link from 'next/link'
import { stories } from '@/lib/data/stories'
import { formatDate } from '@/lib/utils'

// 生成静态参数
export async function generateStaticParams() {
  return stories.map((story) => ({
    slug: story.slug,
  }))
}

export default function StoryPage({ params }: { params: { slug: string } }) {
  const story = stories.find((s) => s.slug === params.slug)
  
  if (!story) {
    notFound()
  }

  return (
    <div className="pt-24 pb-16 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link 
          href="/stories"
          className="text-sm text-gray-600 hover:text-black transition-colors mb-8 inline-block"
        >
          ← Back to Stories
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl font-display font-light text-black mb-4">
            {story.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>{formatDate(story.publishedAt)}</span>
            {story.tags.map((tag) => (
              <span key={tag} className="text-gray-400">#{tag}</span>
            ))}
          </div>
        </div>

        <div className="prose prose-sm max-w-none">
          <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
            {story.content}
          </div>
        </div>
      </div>
    </div>
  )
}
