'use client'

import { motion, MotionProps } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import {
  CreditCard,
  Smartphone,
  Zap,
  ArrowRight,
  ChevronsRight,
  Shield,
  Clock,
  Globe,
  Wallet,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

interface Service {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  features: string[]
  callToAction: string
  link: string
}

interface Benefit {
  title: string
  description: string
  icon: React.ReactNode
}

interface ServiceTranslation {
  id: string
  title: string
  description: string
  features: string[]
  callToAction: string
  link: string
}

interface BenefitTranslation {
  title: string
  description: string
}

const ServicesPage = () => {
  const t = useTranslations('ServicesPage')

  const serviceIcons: Record<string, React.ReactNode> = {
    'gift-cards': <CreditCard size={32} className='text-white' />,
    'mobile-topup': <Smartphone size={32} className='text-white' />,
    'utility-payments': <Zap size={32} className='text-white' />,
    'crypto-wallet': <Wallet size={32} className='text-white' />,
  }

  const benefitIcons: Record<string, React.ReactNode> = {
    'Secure Transactions': <Shield className='h-8 w-8 text-white' />,
    'Fast Processing': <Clock className='h-8 w-8 text-white' />,
    'Regional Focus': <Globe className='h-8 w-8 text-white' />,
    'Transactions Sécurisées': <Shield className='h-8 w-8 text-white' />,
    'Traitement Rapide': <Clock className='h-8 w-8 text-white' />,
    'Focus Régional': <Globe className='h-8 w-8 text-white' />,
  }

  const services: Service[] = t
    .raw('services')
    .map((service: ServiceTranslation) => ({
      id: service.id,
      title: service.title,
      description: service.description,
      icon: serviceIcons[service.id] ?? (
        <CreditCard size={32} className='text-white' />
      ),
      features: service.features,
      callToAction: service.callToAction,
      link: service.link,
    }))

  const benefits: Benefit[] = t
    .raw('benefits.items')
    .map((benefit: BenefitTranslation) => ({
      title: benefit.title,
      description: benefit.description,
      icon: benefitIcons[benefit.title] ?? (
        <Shield className='h-8 w-8 text-white' />
      ),
    }))

  const motionProps: MotionProps = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  }

  return (
    <main className='bg-gradient-to-r from-[#00BCD4] to-[#4CAF50] min-h-screen text-white'>
      {/* Hero Section */}
      <section className='py-16 md:py-24'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <motion.div {...motionProps}>
              <h1 className='text-4xl md:text-5xl font-bold mb-6'>
                {t('hero.title')}
              </h1>
              <p className='text-xl text-white text-opacity-90 max-w-3xl mx-auto'>
                {t('hero.description')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className='py-16 md:py-24 bg-white text-black'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold'>{t('overview.title')}</h2>
            <div className='w-20 h-1 bg-[#00BCD4] mx-auto mt-4'></div>
            <p className='mt-4 text-xl text-gray-700'>
              {t('overview.description')}
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mb-16'>
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className='h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden border-2 border-[#00BCD4] hover:border-[#4CAF50] shadow-md'>
                  <CardContent className='p-0'>
                    <div className='p-8'>
                      <div className='mb-6 w-16 h-16 bg-[#00BCD4] rounded-full flex items-center justify-center'>
                        {service.icon}
                      </div>
                      <h3 className='text-2xl font-bold text-black mb-4'>
                        {service.title}
                      </h3>
                      <p className='text-gray-700 mb-6'>
                        {service.description}
                      </p>
                      <ul className='space-y-2 mb-8'>
                        {service.features.map((feature, index) => (
                          <li key={index} className='flex items-start'>
                            <ChevronsRight className='h-5 w-5 text-[#00BCD4] mr-2 flex-shrink-0 mt-0.5' />
                            <span className='text-gray-700'>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        className='bg-[#00BCD4] hover:bg-[#4CAF50] text-white'
                        asChild
                      >
                        <Link href={service.link}>
                          {service.callToAction}
                          <ArrowRight className='ml-2 h-4 w-4' />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className='py-16 md:py-24'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold'>{t('benefits.title')}</h2>
            <div className='w-20 h-1 bg-white mx-auto mt-4'></div>
            <p className='mt-4 text-xl text-white text-opacity-90'>
              {t('benefits.description')}
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='bg-white p-8 rounded-xl shadow-md border-2 border-[#00BCD4] hover:border-[#4CAF50] transition duration-300'
              >
                <div className='mb-6 w-16 h-16 bg-[#00BCD4] rounded-full flex items-center justify-center'>
                  {benefit.icon}
                </div>
                <h3 className='text-xl font-bold text-black mb-4'>
                  {benefit.title}
                </h3>
                <p className='text-gray-700'>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-16 md:py-24'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.div {...motionProps}>
            <h2 className='text-3xl md:text-4xl font-bold mb-6'>
              {t('cta.title')}
            </h2>
            <p className='text-xl mb-8 max-w-3xl mx-auto text-white text-opacity-90'>
              {t('cta.description')}
            </p>
            <div className='flex flex-col sm:flex-row justify-center gap-4'>
              <Button
                className='bg-[#00BCD4] hover:bg-[#4CAF50] text-white text-lg px-8 py-6'
                asChild
              >
                <Link href='/auth'>{t('cta.buttons.create_account')}</Link>
              </Button>
              <Button
                variant='outline'
                className='border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#00BCD4] text-lg px-8 py-6'
                asChild
              >
                <Link href='/contact'>{t('cta.buttons.contact_sales')}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default ServicesPage
