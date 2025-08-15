'use client'

import { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { usePathname } from '@/i18n/navigation'
import PhoneMockup from './ui/iphone-15-pro'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const FeatureHighlight = () => {
  const t = useTranslations('FeatureHighlight')
  const sectionRef = useRef<HTMLDivElement>(null)
  const phoneRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    console.log('FeatureHighlight useEffect running', { pathname })
    if (sectionRef.current && phoneRef.current && contentRef.current) {
      gsap.set([phoneRef.current, ...contentRef.current.children], {
        opacity: 1,
        x: 0,
        y: 0,
        clearProps: 'all',
      })

      // Animate phone
      gsap.fromTo(
        phoneRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )

      // Animate content children
      gsap.fromTo(
        contentRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    }

    return () => {
      console.log('Cleaning up FeatureHighlight ScrollTriggers')
      if (typeof window !== 'undefined') {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        if (phoneRef.current && contentRef.current) {
          gsap.set([phoneRef.current, ...contentRef.current.children], {
            clearProps: 'all',
          })
        }
      }
    }
  }, [pathname])

  return (
    <div
      key={pathname}
      ref={sectionRef}
      className='py-20 bg-gradient-to-r from-[#00BCD4] to-[#4CAF50]'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col lg:flex-row items-center'>
          <div ref={phoneRef} className='lg:w-1/2 mb-12 lg:mb-0'>
            <div className='relative mx-auto' style={{ maxWidth: '300px' }}>
              <div className='relative'>
                <PhoneMockup
                  className='size-full'
                  videoSrc='https://videos.pexels.com/video-files/8946986/8946986-uhd_1440_2732_25fps.mp4'
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className='lg:w-1/2 lg:pl-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>
              {t('title')}
            </h2>
            <p className='text-lg text-white/90 mb-8'>{t('subtitle')}</p>

            <div className='space-y-6'>
              {/* Feature 1 */}
              <div className='flex items-start'>
                <div className='flex-shrink-0 mt-1'>
                  <div className='w-6 h-6 bg-white rounded-full flex items-center justify-center'>
                    <svg
                      className='w-4 h-4 text-[#4CAF50]'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                  </div>
                </div>
                <div className='ml-4'>
                  <h3 className='text-xl font-bold text-white'>
                    {t('features.intuitive_interface.title')}
                  </h3>
                  <p className='text-white/90'>
                    {t('features.intuitive_interface.description')}
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className='flex items-start'>
                <div className='flex-shrink-0 mt-1'>
                  <div className='w-6 h-6 bg-white rounded-full flex items-center justify-center'>
                    <svg
                      className='w-4 h-4 text-[#4CAF50]'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                  </div>
                </div>
                <div className='ml-4'>
                  <h3 className='text-xl font-bold text-white'>
                    {t('features.offline_mode.title')}
                  </h3>
                  <p className='text-white/90'>
                    {t('features.offline_mode.description')}
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className='flex items-start'>
                <div className='flex-shrink-0 mt-1'>
                  <div className='w-6 h-6 bg-white rounded-full flex items-center justify-center'>
                    <svg
                      className='w-4 h-4 text-[#4CAF50]'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                  </div>
                </div>
                <div className='ml-4'>
                  <h3 className='text-xl font-bold text-white'>
                    {t('features.real_time_notifications.title')}
                  </h3>
                  <p className='text-white/90'>
                    {t('features.real_time_notifications.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureHighlight
