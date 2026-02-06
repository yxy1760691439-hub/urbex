'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  const navItems = [
    { href: '/exploration', label: 'Exploration', labelCn: '探索' },
    { href: '/onsite', label: 'On-site', labelCn: '在现场' },
    { href: '/equipment', label: 'Equipment', labelCn: '装备' },
    { href: '/about', label: 'About', labelCn: '关于' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link 
            href="/" 
            className="text-lg font-display font-medium text-white hover:text-gray-300 transition-colors"
          >
            Urbex Notes
          </Link>
          
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-light transition-colors ${
                  pathname === item.href || pathname.startsWith(item.href + '/')
                    ? 'text-white font-medium'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                <span className="text-xs text-gray-500 ml-1">/{item.labelCn}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}
