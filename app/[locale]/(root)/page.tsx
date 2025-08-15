'use client'

import { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import MarqueeGiftCards from '@/components/MarqueeGiftCards'
import HowItWorks from '@/components/HowItWorks'
import FeatureHighlight from '@/components/FeatureHighlight'
import CryptoIntegration from '@/components/CryptoIntegration'
import CTASection from '@/components/CTASection'
import OrbitingLogos from '@/components/ui/orbiting-logos'
import { Link, usePathname } from '@/i18n/navigation'
import { PointerHighlight } from '@/components/ui/pointer-highlight'

export default function Home() {
  const t = useTranslations('Home')
  const heroRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const heroElement = heroRef.current

    if (heroElement) {
      const tl = gsap.timeline()

      gsap.set(
        [
          heroElement.querySelector('.hero-title'),
          heroElement.querySelector('.hero-subtitle'),
          heroElement.querySelector('.hero-cta'),
          heroElement.querySelector('.hero-image'),
        ],
        { clearProps: 'all' }
      )

      tl.from(heroElement.querySelector('.hero-title'), {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })
        .from(
          heroElement.querySelector('.hero-subtitle'),
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
          },
          '-=0.6'
        )
        .from(
          heroElement.querySelector('.hero-cta'),
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: 'power3.out',
          },
          '-=0.4'
        )
        .from(
          heroElement.querySelector('.hero-image'),
          {
            scale: 0.9,
            opacity: 0,
            duration: 1.2,
            ease: 'power2.out',
          },
          '-=0.8'
        )

      return () => {
        tl.kill()
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        if (heroElement) {
          gsap.set(
            [
              heroElement.querySelector('.hero-title'),
              heroElement.querySelector('.hero-subtitle'),
              heroElement.querySelector('.hero-cta'),
              heroElement.querySelector('.hero-image'),
            ],
            { clearProps: 'all' }
          )
        }
      }
    }
  }, [pathname])

  return (
    <div
      key={pathname}
      className='bg-gradient-to-r from-[#00BCD4] to-[#4CAF50] text-black min-h-screen'
    >
      <div className=' text-white'>
        <div
          ref={heroRef}
          className='pt-24 pb-12 px-4 sm:px-6 md:px-8 lg:px-16 max-w-7xl mx-auto'
        >
          <div className='flex flex-col lg:flex-row items-center'>
            <div className='lg:w-1/2 lg:pr-12'>
              <h1 className='hero-title text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
                {t.rich('hero.title', {
                  highlight: (chunks) => (
                    <PointerHighlight
                      rectangleClassName='bg-white bg-opacity-20 border-white'
                      pointerClassName='text-[#4CAF50]'
                    >
                      <span className='relative z-10'>{chunks}</span>
                    </PointerHighlight>
                  ),
                })}
              </h1>
              <p className='hero-subtitle mt-6 text-lg md:text-xl text-white text-opacity-90 max-w-lg'>
                {t('hero.subtitle')}
              </p>
              <div className='hero-cta mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4'>
                <Link
                  href='/marketplace'
                  className='bg-white text-[#00BCD4] py-3 px-8 rounded-full text-lg font-medium hover:bg-[#4CAF50] hover:text-white transition duration-300 transform hover:scale-105'
                >
                  {t('hero.cta.buy_now')}
                </Link>
                <Link
                  href='/join-waitlist'
                  className='bg-transparent border-2 border-white text-white py-3 px-8 rounded-full text-lg font-medium hover:bg-white hover:text-[#00BCD4] transition duration-300'
                >
                  {t('hero.cta.join_waitlist')}
                </Link>
              </div>
            </div>
            <div className='lg:w-1/2 mt-12 lg:mt-0 flex justify-center'>
              <OrbitingLogos className='max-w-md w-full' />
            </div>
          </div>
        </div>
      </div>

      <div className='py-12 overflow-hidden bg-white'>
        <MarqueeGiftCards />
      </div>
      <div className='py-16 px-4 sm:px-6 md:px-8 lg:px-16 max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl text-white font-bold'>
            {t('features.title')}
          </h2>
          <div className='w-20 h-1 bg-white mx-auto mt-4'></div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          <div className='bg-white rounded-xl p-8 shadow-lg transform transition duration-500 hover:scale-105 border-2 border-[#00BCD4] hover:border-[#4CAF50]'>
            <div className='w-16 h-16 bg-[#00BCD4] rounded-full flex items-center justify-center text-white mb-6'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-8 w-8'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </div>
            <h3 className='text-xl font-bold mb-3'>
              {t('features.seamless_crypto_payments.title')}
            </h3>
            <p className='text-gray-700'>
              {t('features.seamless_crypto_payments.description')}
            </p>
          </div>
          <div className='bg-white rounded-xl p-8 shadow-lg transform transition duration-500 hover:scale-105 border-2 border-[#00BCD4] hover:border-[#4CAF50]'>
            <div className='w-16 h-16 bg-[#00BCD4] rounded-full flex items-center justify-center text-white mb-6'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-8 w-8'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4'
                />
              </svg>
            </div>
            <h3 className='text-xl font-bold mb-3'>
              {t('features.gift_cards_marketplace.title')}
            </h3>
            <p className='text-gray-700'>
              {t('features.gift_cards_marketplace.description')}
            </p>
          </div>
          <div className='bg-white rounded-xl p-8 shadow-lg transform transition duration-500 hover:scale-105 border-2 border-[#00BCD4] hover:border-[#4CAF50]'>
            <div className='w-16 h-16 bg-[#00BCD4] rounded-full flex items-center justify-center text-white mb-6'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-8 w-8'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
                />
              </svg>
            </div>
            <h3 className='text-xl font-bold mb-3'>
              {t('features.mobile_topups.title')}
            </h3>
            <p className='text-gray-700'>
              {t('features.mobile_topups.description')}
            </p>
          </div>
        </div>
      </div>
      <HowItWorks />
      <FeatureHighlight />
      <CryptoIntegration />
      <CTASection />
    </div>
  )
}
