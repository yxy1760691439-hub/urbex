import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-medium text-white mb-4">About</h3>
            <Link href="/about" className="text-sm text-gray-400 hover:text-white transition-colors block mb-2">
              About / 关于
            </Link>
            <p className="text-xs text-gray-500 mt-4">
              本网站仅用于记录个人城市探索历程，无任何引导或教学性质。
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-white mb-4">Contact</h3>
            <a 
              href="mailto:contact@example.com" 
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              contact@example.com
            </a>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-white mb-4">Copyright</h3>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Urbex Notes
            </p>
            <p className="text-xs text-gray-500 mt-2">
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
