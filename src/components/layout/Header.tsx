'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { href: '/explore', label: 'Explore', labelCn: '探索' },
    { href: '/stories', label: 'Stories', labelCn: '故事' },
    { href: '/guide', label: 'Guide', labelCn: '指南' },
    { href: '/about', label: 'About', labelCn: '关于' },
  ]

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname === href || pathname.startsWith(href + '/')
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-lg font-display font-light text-white hover:text-terminal-green transition-colors"
          >
            <span className="hidden sm:inline">Urbex Notes</span>
            <span className="sm:hidden">UN</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-light transition-colors font-mono group ${
                  isActive(item.href)
                    ? 'text-terminal-green'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <span className="group-hover:text-terminal-bright transition-colors">
                  {item.label}
                </span>
                <span className="text-xs text-gray-600 ml-1.5">/{item.labelCn}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-800 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-3 text-sm font-light transition-colors ${
                  isActive(item.href)
                    ? 'text-terminal-green'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                <span className="text-xs text-gray-600 ml-2">/{item.labelCn}</span>
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
