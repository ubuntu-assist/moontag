'use client'

import { useState, useEffect } from 'react'
import { Link, usePathname } from '@/i18n/navigation'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Menu, X, ExternalLink } from 'lucide-react'
import Image from 'next/image'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/services', label: 'Services', description: 'Our solutions' },
    { href: '/about', label: 'About', description: 'Our story' },
    { href: '/partners', label: 'Partners', description: 'Collaborate' },
    { href: '/blog', label: 'Blog', description: 'Tech insights' },
    { href: '/portfolio', label: 'Portfolio', description: 'Our work' },
  ]

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white border-b border-gray-200 shadow-sm'
          : 'bg-white/95 backdrop-blur-md border-b border-gray-100'
      }`}
    >
      <div className='max-w-6xl mx-auto px-6'>
        <div className='flex justify-between items-center h-20'>
          {/* Logo */}
          <div className='flex items-center gap-3'>
            <Link href='/' className='flex items-center gap-3 group'>
              <div className='relative'>
                <Image
                  src='/images/moontag-logo.png'
                  alt='Logo'
                  width={64}
                  height={64}
                  className='object-contain'
                />
              </div>
              <Badge className='bg-[#00BCD4] text-white border-0 text-xs font-mono'>
                v1.0
              </Badge>
            </Link>
          </div>
          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-1'>
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 group ${
                    isActive
                      ? 'text-[#00BCD4] bg-gray-50'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <span className='relative z-10'>{link.label}</span>
                  {isActive && (
                    <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#00BCD4] rounded-full'></div>
                  )}

                  {/* Tooltip */}
                  <div className='absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap font-mono'>
                    {link.description}
                  </div>
                </Link>
              )
            })}
          </div>
          {/* Desktop CTA */}
          <div className='hidden md:flex items-center gap-3'>
            <Button
              variant='outline'
              size='sm'
              className='border-gray-300 text-gray-700 hover:border-[#00BCD4] hover:text-[#00BCD4] font-medium'
              asChild
            >
              <Link href='/docs'>
                Docs
                <ExternalLink className='ml-1 h-3 w-3' />
              </Link>
            </Button>

            <Button
              size='sm'
              className={`font-medium transition-all duration-200 ${
                pathname === '/contact'
                  ? 'bg-[#4CAF50] hover:bg-[#4CAF50] text-white'
                  : 'bg-[#00BCD4] hover:bg-[#4CAF50] text-white'
              }`}
              asChild
            >
              <Link href='/contact'>Get Started</Link>
            </Button>
          </div>
          {/* Mobile Menu Button */}
          <div className='md:hidden'>
            <Button
              variant='ghost'
              size='sm'
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className='text-gray-700 hover:text-gray-900 hover:bg-gray-50'
            >
              {isMobileMenuOpen ? (
                <X className='h-6 w-6' />
              ) : (
                <Menu className='h-6 w-6' />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ${
          isMobileMenuOpen
            ? 'max-h-96 opacity-100'
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className='bg-white border-t border-gray-100 shadow-lg'>
          <div className='px-6 py-4 space-y-1'>
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-[#00BCD4] bg-gray-50 border-l-2 border-[#00BCD4]'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <div>
                    <div className='font-medium'>{link.label}</div>
                    <div className='text-xs text-gray-500 font-mono'>
                      {link.description}
                    </div>
                  </div>
                  {isActive && (
                    <div className='w-2 h-2 bg-[#00BCD4] rounded-full'></div>
                  )}
                </Link>
              )
            })}

            {/* Mobile CTA */}
            <div className='pt-4 mt-4 border-t border-gray-100 space-y-2'>
              <Button
                variant='outline'
                size='sm'
                className='w-full border-gray-300 text-gray-700 hover:border-[#00BCD4] hover:text-[#00BCD4] font-medium'
                asChild
              >
                <Link href='/docs' onClick={() => setIsMobileMenuOpen(false)}>
                  Documentation
                  <ExternalLink className='ml-2 h-4 w-4' />
                </Link>
              </Button>

              <Button
                size='sm'
                className='w-full bg-[#00BCD4] hover:bg-[#4CAF50] text-white font-medium'
                asChild
              >
                <Link
                  href='/contact'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </Button>
            </div>
          </div>

          {/* Mobile Status Bar */}
          <div className='px-6 py-3 bg-gray-50 border-t border-gray-100'>
            <div className='flex items-center justify-between text-xs'>
              <div className='flex items-center gap-2 text-gray-500 font-mono'>
                <div className='w-2 h-2 bg-green-400 rounded-full'></div>
                <span>All systems operational</span>
              </div>
              <span className='text-gray-400 font-mono'>v2.1.0</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
