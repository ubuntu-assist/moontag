'use client'
import React, { FormEvent } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowRight, Mail, ExternalLink } from 'lucide-react'

const Footer = () => {
  const handleNewsLetterData = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <footer className='bg-gray-900 text-white border-t-4 border-[#00BCD4]'>
      <div className='max-w-6xl mx-auto px-6'>
        {/* Main Footer Content */}
        <div className='py-16 grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Newsletter Section */}
          <div className='max-w-lg'>
            <h2 className='text-3xl font-bold mb-4'>Stay Updated</h2>
            <p className='text-gray-300 mb-6 leading-relaxed'>
              Get the latest technical insights, development best practices, and
              product updates delivered directly to your inbox.
            </p>

            <form onSubmit={handleNewsLetterData} className='space-y-4'>
              <div className='flex gap-3'>
                <Input
                  type='email'
                  name='newsletter_email'
                  placeholder='your.email@domain.com'
                  className='bg-gray-800 border-gray-700 text-white placeholder-gray-400 font-mono text-sm'
                  required
                />
                <Button
                  type='submit'
                  className='bg-[#00BCD4] hover:bg-[#4CAF50] text-white px-6'
                >
                  <ArrowRight className='h-4 w-4' />
                </Button>
              </div>
              <p className='text-xs text-gray-400 font-mono'>
                No spam, unsubscribe anytime
              </p>
            </form>
          </div>

          {/* Navigation Links */}
          <div className='grid grid-cols-2 gap-8'>
            {/* Sitemap */}
            <div>
              <h3 className='text-lg font-bold mb-4 text-[#00BCD4] font-mono'>
                NAVIGATION
              </h3>
              <nav className='space-y-3'>
                <Link
                  href='/'
                  className='block text-gray-300 hover:text-white transition-colors duration-200'
                >
                  Home
                </Link>
                <Link
                  href='/about'
                  className='block text-gray-300 hover:text-white transition-colors duration-200'
                >
                  About
                </Link>
                <Link
                  href='/services'
                  className='block text-gray-300 hover:text-white transition-colors duration-200'
                >
                  Services
                </Link>
                <Link
                  href='/portfolio'
                  className='block text-gray-300 hover:text-white transition-colors duration-200'
                >
                  Portfolio
                </Link>
                <Link
                  href='/blog'
                  className='block text-gray-300 hover:text-white transition-colors duration-200'
                >
                  Blog
                </Link>
                <Link
                  href='/contact'
                  className='block text-gray-300 hover:text-white transition-colors duration-200'
                >
                  Contact
                </Link>
              </nav>
            </div>

            {/* Social & Resources */}
            <div>
              <h3 className='text-lg font-bold mb-4 text-[#4CAF50] font-mono'>
                CONNECT
              </h3>
              <nav className='space-y-3'>
                <a
                  href='https://github.com/moontag'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center text-gray-300 hover:text-white transition-colors duration-200'
                >
                  GitHub
                  <ExternalLink className='ml-1 h-3 w-3' />
                </a>
                <a
                  href='https://www.linkedin.com/company/moontag'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center text-gray-300 hover:text-white transition-colors duration-200'
                >
                  LinkedIn
                  <ExternalLink className='ml-1 h-3 w-3' />
                </a>
                <a
                  href='https://twitter.com/moontag'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center text-gray-300 hover:text-white transition-colors duration-200'
                >
                  Twitter
                  <ExternalLink className='ml-1 h-3 w-3' />
                </a>
                <a
                  href='mailto:hello@moontag.com'
                  className='flex items-center text-gray-300 hover:text-white transition-colors duration-200'
                >
                  <Mail className='mr-2 h-4 w-4' />
                  Email Us
                </a>
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='py-6 border-t border-gray-800'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <div className='flex items-center gap-4'>
              <span className='text-gray-400 font-mono text-sm'>
                © {new Date().getFullYear()} Moontag. All rights reserved.
              </span>
            </div>

            <div className='flex items-center gap-6'>
              {/* Status Indicator */}
              <div className='flex items-center gap-2 text-sm'>
                <div className='w-2 h-2 bg-green-400 rounded-full animate-pulse'></div>
                <span className='text-gray-400 font-mono'>
                  All systems operational
                </span>
              </div>

              {/* Version Info */}
              <div className='text-xs text-gray-500 font-mono'>v2.1.0</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
