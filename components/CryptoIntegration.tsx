'use client'

import { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { usePathname } from '@/i18n/navigation'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const CryptoIntegration: React.FC = () => {
  const t = useTranslations('CryptoIntegration')
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const pathname = usePathname()

  useEffect(() => {
    console.log('CryptoIntegration useEffect running', { pathname })
    if (sectionRef.current && cardsRef.current.length > 0) {
      gsap.set(cardsRef.current.filter(Boolean), {
        opacity: 1,
        y: 0,
        clearProps: 'all',
      })

      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
                toggleActions: 'play none none none',
              },
              delay: index * 0.2,
            }
          )
        }
      })
    }

    return () => {
      console.log('Cleaning up CryptoIntegration ScrollTriggers')
      if (typeof window !== 'undefined') {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        if (cardsRef.current.length > 0) {
          gsap.set(cardsRef.current.filter(Boolean), {
            clearProps: 'all',
          })
        }
      }
    }
  }, [pathname])

  return (
    <div key={pathname} ref={sectionRef} className='py-20 bg-[#FFFFFF]'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-[#000000]'>
            {t('title')}
          </h2>
          <div className='w-20 h-1 bg-[#4CAF50] mx-auto mt-4'></div>
          <p className='mt-6 text-[#000000] max-w-2xl mx-auto'>
            {t('subtitle')}
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Card 1 */}
          <div
            ref={(el) => {
              cardsRef.current[0] = el
            }}
            className='bg-[#00BCD4]/20 rounded-xl p-8 shadow-lg'
          >
            <div className='w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center mb-6'>
              <svg
                className='w-8 h-8 text-[#FFFFFF]'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
                />
              </svg>
            </div>
            <h3 className='text-xl font-bold text-[#000000] mb-3'>
              {t('cards.secure_transactions.title')}
            </h3>
            <p className='text-[#000000]'>
              {t('cards.secure_transactions.description')}
            </p>
          </div>

          {/* Card 2 */}
          <div
            ref={(el) => {
              cardsRef.current[1] = el
            }}
            className='bg-[#00BCD4]/20 rounded-xl p-8 shadow-lg'
          >
            <div className='w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center mb-6'>
              <svg
                className='w-8 h-8 text-[#FFFFFF]'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M13 10V3L4 14h7v7l9-11h-7z'
                />
              </svg>
            </div>
            <h3 className='text-xl font-bold text-[#000000] mb-3'>
              {t('cards.ultra_fast.title')}
            </h3>
            <p className='text-[#000000]'>
              {t('cards.ultra_fast.description')}
            </p>
          </div>

          {/* Card 3 */}
          <div
            ref={(el) => {
              cardsRef.current[2] = el
            }}
            className='bg-[#00BCD4]/20 rounded-xl p-8 shadow-lg'
          >
            <div className='w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center mb-6'>
              <svg
                className='w-8 h-8 text-[#FFFFFF]'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4'
                />
              </svg>
            </div>
            <h3 className='text-xl font-bold text-[#000000] mb-3'>
              {t('cards.low_fees.title')}
            </h3>
            <p className='text-[#000000]'>{t('cards.low_fees.description')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CryptoIntegration
