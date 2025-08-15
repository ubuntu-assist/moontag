'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { Link, usePathname } from '@/i18n/navigation'

const Navbar = () => {
  const t = useTranslations('Navbar')
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
    { href: '/marketplace', label: t('links.marketplace') },
    { href: '/services', label: t('links.services') },
    { href: '/about', label: t('links.about') },
    { href: '/partners', label: t('links.partners') },
  ]

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-white shadow-md'
          : 'py-5 bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <Link href='/'>
              <img
                src='/images/moontag-logo.png'
                alt='Abokyh Logo'
                className='h-10 w-auto'
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:block'>
            <div className='ml-10 flex items-center space-x-8'>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-medium transition-all duration-300 ${
                    pathname === link.href
                      ? 'font-bold text-[#00BCD4] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-1 after:bg-[#4CAF50] after:rounded-full'
                      : 'text-black hover:text-[#00BCD4]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className='hidden md:flex items-center space-x-4'>
            <Link
              href='/auth'
              className={`relative px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                pathname === '/auth'
                  ? 'bg-[#00BCD4] text-white after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-1 after:bg-[#4CAF50] after:rounded-full'
                  : 'bg-[#00BCD4] text-white hover:bg-[#4CAF50]'
              }`}
            >
              {t('login')}
            </Link>
          </div>

          <div className='md:hidden flex items-center'>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className='inline-flex items-center justify-center p-2 rounded-md text-black hover:text-[#00BCD4] transition-colors'
            >
              <svg
                className={`h-6 w-6 ${isMobileMenuOpen ? 'hidden' : 'block'}`}
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
              <svg
                className={`h-6 w-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className='px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg'>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-3 py-2 text-base font-medium rounded-md transition-all duration-300 ${
                pathname === link.href
                  ? 'font-bold text-[#00BCD4] bg-[#00BCD4]/10 relative after:absolute after:bottom-0 after:left-3 after:right-3 after:h-1 after:bg-[#4CAF50] after:rounded-full'
                  : 'text-black hover:bg-[#00BCD4]/5 hover:text-[#00BCD4]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className='pt-4 pb-2 border-t border-[#00BCD4]/20'>
            <Link
              href='/auth'
              className={`block px-3 py-2 mt-2 text-base font-medium rounded-md transition-all duration-300 ${
                pathname === '/auth'
                  ? 'text-white bg-[#00BCD4] relative after:absolute after:bottom-0 after:left-3 after:right-3 after:h-1 after:bg-[#4CAF50] after:rounded-full'
                  : 'text-white bg-[#00BCD4] hover:bg-[#4CAF50]'
              }`}
            >
              {t('login')}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
