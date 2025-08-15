'use client'

import { useEffect, useRef, useState } from 'react'
import { useTranslations } from 'next-intl'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Loader2 } from 'lucide-react'
import { Link, usePathname } from '@/i18n/navigation'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const CTASection = () => {
  const t = useTranslations('CTASection')
  const newsletterSchema = z.object({
    name: z
      .string()
      .min(2, { message: t('newsletter.validation.name_required') }),
    email: z
      .string()
      .min(1, { message: t('newsletter.validation.email_required') })
      .email({ message: t('newsletter.validation.email_invalid') }),
  })

  type NewsletterFormValues = z.infer<typeof newsletterSchema>

  const sectionRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      name: '',
      email: '',
    },
  })

  const onSubmit = async (data: NewsletterFormValues) => {
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      console.log('Newsletter form data:', data)
      setIsSubmitting(false)
      setIsSubmitted(true)
      reset()
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  useEffect(() => {
    console.log('CTASection useEffect running', { pathname })
    if (sectionRef.current) {
      const animateItems = sectionRef.current.querySelectorAll('.animate-item')
      // Reset styles to ensure elements are visible
      gsap.set(animateItems, {
        opacity: 1,
        y: 0,
        clearProps: 'all',
      })

      gsap.fromTo(
        animateItems,
        { y: 30, opacity: 0 },
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
      console.log('Cleaning up CTASection ScrollTriggers')
      if (typeof window !== 'undefined' && sectionRef.current) {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        gsap.set(sectionRef.current.querySelectorAll('.animate-item'), {
          clearProps: 'all',
        })
      }
    }
  }, [pathname])

  return (
    <div key={pathname} ref={sectionRef} className='py-20 bg-[#FFFFFF]'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col lg:flex-row items-center justify-between'>
          <div className='lg:w-1/2 mb-10 lg:mb-0'>
            <h2 className='animate-item text-3xl md:text-4xl font-bold text-[#000000] mb-6'>
              {t('title')}
            </h2>
            <p className='animate-item text-lg text-[#000000] mb-8 max-w-lg'>
              {t('subtitle')}
            </p>
            <div className='animate-item flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4'>
              <button className='bg-[#4CAF50] text-[#FFFFFF] py-3 px-8 rounded-full text-lg font-medium hover:bg-[#45a049] transition duration-300 transform hover:scale-105'>
                {t('cta_buttons.start_now')}
              </button>
              <Link
                href='/contact'
                className='bg-transparent border-2 border-[#00BCD4] text-[#000000] py-3 px-8 rounded-full text-lg font-medium hover:bg-[#00BCD4] hover:text-[#FFFFFF] transition duration-300'
              >
                {t('cta_buttons.contact_sales')}
              </Link>
            </div>
          </div>
          <div className='lg:w-1/2 lg:pl-12'>
            <div className='animate-item bg-[#00BCD4]/20 text-[#000000] p-8 rounded-xl'>
              <h3 className='text-2xl font-bold mb-6'>
                {t('newsletter.title')}
              </h3>
              <p className='text-[#000000] mb-6'>
                {t('newsletter.description')}
              </p>

              {isSubmitted ? (
                <div className='bg-[#e6ffe6] border border-[#4CAF50] text-[#2e7d32] px-4 py-3 rounded relative mb-4'>
                  <span className='block sm:inline'>
                    {t('newsletter.success_message')}
                  </span>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
                  <div>
                    <input
                      {...register('name')}
                      type='text'
                      placeholder={t('newsletter.form.name_placeholder')}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.name
                          ? 'border-[#ff0000] focus:ring-[#ff0000]'
                          : 'border-[#000000]/20 focus:ring-[#00BCD4]'
                      } focus:outline-none focus:ring-2`}
                    />
                    {errors.name && (
                      <p className='text-[#ff0000] text-xs mt-1'>
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      {...register('email')}
                      type='email'
                      placeholder={t('newsletter.form.email_placeholder')}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.email
                          ? 'border-[#ff0000] focus:ring-[#ff0000]'
                          : 'border-[#000000]/20 focus:ring-[#00BCD4]'
                      } focus:outline-none focus:ring-2`}
                    />
                    {errors.email && (
                      <p className='text-[#ff0000] text-xs mt-1'>
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <button
                    type='submit'
                    disabled={isSubmitting}
                    className='w-full bg-[#00BCD4] text-[#FFFFFF] py-3 rounded-lg font-medium hover:bg-[#0097a7] transition duration-300 flex justify-center items-center'
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className='mr-2 h-4 w-4 animate-spin' />{' '}
                        {t('newsletter.form.submitting')}
                      </>
                    ) : (
                      t('newsletter.form.submit_button')
                    )}
                  </button>
                </form>
              )}

              <p className='text-xs text-[#000000] mt-4'>
                {t('newsletter.agreement')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CTASection
