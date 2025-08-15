'use client'

import { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { UserPlus, Wallet, ShoppingBag, CreditCard } from 'lucide-react'
import { usePathname } from '@/i18n/navigation'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const HowItWorks: React.FC = () => {
  const t = useTranslations('HowItWorks')
  const sectionRef = useRef<HTMLDivElement>(null)
  const stepsRef = useRef<(HTMLDivElement | null)[]>([])
  const pathname = usePathname()

  useEffect(() => {
    console.log('HowItWorks useEffect running', { pathname })
    if (sectionRef.current && stepsRef.current.length > 0) {
      gsap.set(stepsRef.current.filter(Boolean), {
        opacity: 1,
        y: 0,
        clearProps: 'all',
      })

      stepsRef.current.forEach((step, index) => {
        if (step) {
          gsap.fromTo(
            step,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: step,
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
      console.log('Cleaning up ScrollTriggers')
      if (typeof window !== 'undefined') {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        if (stepsRef.current.length > 0) {
          gsap.set(stepsRef.current.filter(Boolean), {
            clearProps: 'all',
          })
        }
      }
    }
  }, [pathname])

  return (
    <div ref={sectionRef} className='py-20 bg-[#FFFFFF]'>
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

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Step 1 */}
          <div
            ref={(el) => {
              stepsRef.current[0] = el
            }}
            className='bg-[#00BCD4]/20 rounded-xl p-8 text-center relative'
          >
            <div className='absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#4CAF50] text-[#FFFFFF] flex items-center justify-center font-bold'>
              1
            </div>
            <UserPlus className='w-16 h-16 mx-auto mb-6 text-[#00BCD4]' />
            <h3 className='text-xl font-bold mb-3 text-[#000000]'>
              {t('steps.create_account.title')}
            </h3>
            <p className='text-[#000000]'>
              {t('steps.create_account.description')}
            </p>
          </div>

          {/* Step 2 */}
          <div
            ref={(el) => {
              stepsRef.current[1] = el
            }}
            className='bg-[#00BCD4]/20 rounded-xl p-8 text-center relative'
          >
            <div className='absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#4CAF50] text-[#FFFFFF] flex items-center justify-center font-bold'>
              2
            </div>
            <Wallet className='w-16 h-16 mx-auto mb-6 text-[#00BCD4]' />
            <h3 className='text-xl font-bold mb-3 text-[#000000]'>
              {t('steps.connect_wallet.title')}
            </h3>
            <p className='text-[#000000]'>
              {t('steps.connect_wallet.description')}
            </p>
          </div>

          {/* Step 3 */}
          <div
            ref={(el) => {
              stepsRef.current[2] = el
            }}
            className='bg-[#00BCD4]/20 rounded-xl p-8 text-center relative'
          >
            <div className='absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#4CAF50] text-[#FFFFFF] flex items-center justify-center font-bold'>
              3
            </div>
            <ShoppingBag className='w-16 h-16 mx-auto mb-6 text-[#00BCD4]' />
            <h3 className='text-xl font-bold mb-3 text-[#000000]'>
              {t('steps.explore_marketplace.title')}
            </h3>
            <p className='text-[#000000]'>
              {t('steps.explore_marketplace.description')}
            </p>
          </div>

          {/* Step 4 */}
          <div
            ref={(el) => {
              stepsRef.current[3] = el
            }}
            className='bg-[#00BCD4]/20 rounded-xl p-8 text-center relative'
          >
            <div className='absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#4CAF50] text-[#FFFFFF] flex items-center justify-center font-bold'>
              4
            </div>
            <CreditCard className='w-16 h-16 mx-auto mb-6 text-[#00BCD4]' />
            <h3 className='text-xl font-bold mb-3 text-[#000000]'>
              {t('steps.complete_purchase.title')}
            </h3>
            <p className='text-[#000000]'>
              {t('steps.complete_purchase.description')}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
