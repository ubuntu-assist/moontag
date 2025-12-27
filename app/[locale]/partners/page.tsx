'use client'

import { JSX, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Check,
  Building2,
  Code,
  Users,
  Globe,
  Shield,
  ArrowRight,
  ExternalLink,
  Handshake,
  Zap,
  Database,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog'

type PartnerFormType = 'enterprise' | 'developer' | 'tech'

interface PartnerType {
  icon: JSX.Element
  title: string
  description: string
  features: string[]
  badge: string
  formType: PartnerFormType
}

const PartnerPage = () => {
  const [showDialog, setShowDialog] = useState(false)

  const TALLY_FORM_URLS = {
    enterprise: 'https://tally.so/r/YOUR_ENTERPRISE_FORM_ID',
    developer: 'https://tally.so/r/444oWB',
    tech: 'https://tally.so/r/ODDvda',
  }

  const partnerTypes: PartnerType[] = [
    {
      icon: <Building2 className='h-6 w-6' />,
      title: 'Enterprise Partners',
      description:
        'Large-scale digital transformation projects requiring comprehensive solutions and dedicated support.',
      features: [
        'Custom solution architecture',
        'Dedicated account management',
        'Enterprise-grade SLA',
        'White-label options',
      ],
      badge: 'Enterprise',
      formType: 'enterprise',
    },
    {
      icon: <Code className='h-6 w-6' />,
      title: 'Development Partners',
      description:
        'Development agencies and freelancers who integrate Moontag services into client projects.',
      features: [
        'Partner portal access',
        'Revenue sharing programs',
        'Technical documentation',
        'Co-marketing opportunities',
      ],
      badge: 'Developer',
      formType: 'developer',
    },
    {
      icon: <Database className='h-6 w-6' />,
      title: 'Technology Partners',
      description:
        'SaaS platforms and tech companies looking to integrate our services via API partnerships.',
      features: [
        'API integration support',
        'Joint product development',
        'Technical co-innovation',
        'Marketplace listings',
      ],
      badge: 'Tech',
      formType: 'tech',
    },
  ]

  const partners = [
    {
      src: '/images/partners/stellar-logo.png',
      alt: 'Stellar',
      name: 'Stellar',
      description: 'Blockchain infrastructure partnership',
      url: 'https://stellar.org',
      type: 'Infrastructure',
    },
    {
      src: '/images/partners/talantachain.png',
      alt: 'Talanta Chain',
      name: 'Talanta Chain',
      description: 'Decentralized solutions for African markets',
      url: 'https://www.linkedin.com/company/talantachain',
      type: 'Blockchain',
    },
  ]

  const benefits = [
    {
      icon: <Users className='h-5 w-5' />,
      title: 'Market Access',
      description:
        'Access to growing African tech market and our client network',
    },
    {
      icon: <Shield className='h-5 w-5' />,
      title: 'Technical Support',
      description: 'Dedicated technical resources and integration assistance',
    },
    {
      icon: <Zap className='h-5 w-5' />,
      title: 'Revenue Growth',
      description:
        'Multiple revenue streams through referrals and joint projects',
    },
    {
      icon: <Globe className='h-5 w-5' />,
      title: 'Global Reach',
      description: 'Expand your services across Francophone African markets',
    },
  ]

  const handleApplyClick = (formType: PartnerFormType) => {
    const url = TALLY_FORM_URLS[formType]
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <main className='bg-white min-h-screen'>
      {/* Header */}
      <section className='bg-gray-900 text-white border-b-4 border-[#00BCD4]'>
        <div className='max-w-6xl mx-auto px-6 pt-24 pb-16'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='max-w-4xl'
          >
            <div className='flex items-center gap-3 mb-6'>
              <h1 className='text-4xl md:text-5xl font-bold'>
                Partner with Moontag
              </h1>
              <Badge className='bg-[#00BCD4] text-white border-0 text-sm font-mono'>
                API Ready
              </Badge>
            </div>
            <p className='text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl'>
              Join our growing ecosystem of partners and contribute to
              delivering cutting-edge digital solutions across Africa. Build,
              integrate, and scale together.
            </p>
            <div className='flex flex-wrap gap-8 text-sm font-mono'>
              <div className='flex items-center gap-2'>
                <div className='w-2 h-2 bg-green-400 rounded-full'></div>
                <span className='text-green-400'>Open API Program</span>
              </div>
              <div className='flex items-center gap-2'>
                <div className='w-2 h-2 bg-[#00BCD4] rounded-full'></div>
                <span className='text-gray-300'>50+ Active Partners</span>
              </div>
              <div className='flex items-center gap-2'>
                <div className='w-2 h-2 bg-[#4CAF50] rounded-full'></div>
                <span className='text-gray-300'>Multi-tier Program</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              Partnership Programs
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Choose the partnership model that best fits your business goals
              and technical requirements
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            {partnerTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className='h-full border-2 border-gray-200 hover:border-[#00BCD4] transition-all duration-300 bg-white'>
                  <CardContent className='p-6 h-full flex flex-col'>
                    <div className='flex items-start gap-3 mb-4'>
                      <div className='p-2 bg-gray-900 text-white rounded'>
                        {type.icon}
                      </div>
                      <div className='flex-1'>
                        <div className='flex items-center gap-2 mb-2'>
                          <h3 className='text-xl font-bold text-gray-900'>
                            {type.title}
                          </h3>
                          <Badge
                            variant='outline'
                            className='text-xs font-mono border-[#4CAF50] text-[#4CAF50] bg-green-50'
                          >
                            {type.badge}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <p className='text-gray-600 mb-6 leading-relaxed flex-grow'>
                      {type.description}
                    </p>

                    <div className='space-y-2 mb-6'>
                      {type.features.map((feature, idx) => (
                        <div key={idx} className='flex items-center gap-2'>
                          <Check className='h-4 w-4 text-[#4CAF50] flex-shrink-0' />
                          <span className='text-gray-600 text-sm'>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Button
                      className='w-full bg-gray-900 hover:bg-[#00BCD4] text-white transition-colors duration-300 mt-auto'
                      onClick={() => handleApplyClick(type.formType)}
                    >
                      Apply Now
                      <ArrowRight className='ml-2 h-4 w-4' />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className='py-16 bg-white'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className='text-3xl font-bold text-gray-900 mb-6'>
                Partner Benefits
              </h2>
              <p className='text-lg text-gray-600 mb-8 leading-relaxed'>
                Join our partner network and unlock a range of benefits designed
                to help your business grow and succeed in the African tech
                ecosystem.
              </p>
              <div className='space-y-6'>
                {benefits.map((benefit, index) => (
                  <div key={index} className='flex items-start gap-3'>
                    <div className='p-2 bg-[#00BCD4] text-white rounded flex-shrink-0'>
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className='font-semibold text-gray-900 mb-1'>
                        {benefit.title}
                      </h4>
                      <p className='text-gray-600 text-sm leading-relaxed'>
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='bg-gray-900 rounded-lg p-6 text-white font-mono text-sm overflow-hidden'
            >
              <div className='flex items-center gap-2 mb-4 pb-2 border-b border-gray-700'>
                <div className='w-3 h-3 bg-red-500 rounded-full'></div>
                <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
                <div className='w-3 h-3 bg-green-500 rounded-full'></div>
                <span className='text-gray-400 ml-2'>
                  partner-integration.js
                </span>
              </div>
              <div className='space-y-2'>
                <div>
                  <span className='text-purple-400'>import</span>{' '}
                  <span className='text-yellow-300'>
                    {'{ MoontagPartnerAPI }'}
                  </span>{' '}
                  <span className='text-purple-400'>from</span>{' '}
                  <span className='text-green-400'>
                    &apos;@moontag/partner-sdk&apos;
                  </span>
                </div>
                <div className='mt-4'>
                  <span className='text-purple-400'>const</span>{' '}
                  <span className='text-blue-400'>partner</span> ={' '}
                  <span className='text-purple-400'>new</span>{' '}
                  <span className='text-yellow-300'>MoontagPartnerAPI</span>(
                  {'{'}
                </div>
                <div className='ml-4'>
                  <span className='text-red-400'>apiKey</span>:{' '}
                  <span className='text-green-400'>
                    process.env.PARTNER_API_KEY
                  </span>
                  ,
                </div>
                <div className='ml-4'>
                  <span className='text-red-400'>tier</span>:{' '}
                  <span className='text-green-400'>&apos;enterprise&apos;</span>
                  ,
                </div>
                <div className='ml-4'>
                  <span className='text-red-400'>region</span>:{' '}
                  <span className='text-green-400'>&apos;africa&apos;</span>
                </div>
                <div>{'}'}</div>
                <div className='mt-4'>
                  <span className='text-gray-500'>Start earning revenue</span>
                </div>
                <div>
                  <span className='text-purple-400'>const</span>{' '}
                  <span className='text-blue-400'>project</span> ={' '}
                  <span className='text-purple-400'>await</span>{' '}
                  <span className='text-blue-400'>partner</span>.
                  <span className='text-yellow-300'>createProject</span>({'{'}
                </div>
                <div className='ml-4'>
                  <span className='text-red-400'>client</span>:{' '}
                  <span className='text-green-400'>
                    &apos;enterprise-client&apos;
                  </span>
                  ,
                </div>
                <div className='ml-4'>
                  <span className='text-red-400'>services</span>: [
                  <span className='text-green-400'>&apos;web&apos;</span>,{' '}
                  <span className='text-green-400'>&apos;mobile&apos;</span>,{' '}
                  <span className='text-green-400'>&apos;branding&apos;</span>]
                </div>
                <div>{'}'}</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              Our Partner Network
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Join these leading companies already partnering with Moontag to
              deliver innovative solutions across Africa
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='group'
              >
                <Card className='border-2 border-gray-200 hover:border-[#00BCD4] transition-all duration-300 overflow-hidden'>
                  <CardContent className='p-6 relative'>
                    <div className='flex items-center justify-center h-20 mb-4'>
                      <img
                        src={partner.src}
                        alt={partner.alt}
                        className='max-h-12 w-auto object-contain'
                      />
                    </div>
                    <div className='text-center'>
                      <h3 className='font-semibold text-gray-900 mb-1 text-sm'>
                        {partner.name}
                      </h3>
                      <Badge variant='outline' className='text-xs mb-2'>
                        {partner.type}
                      </Badge>
                      <p className='text-xs text-gray-600 leading-relaxed'>
                        {partner.description}
                      </p>
                    </div>
                    <div className='absolute inset-0 bg-gray-900 bg-opacity-95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                      <a
                        href={partner.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-white hover:text-[#00BCD4] transition-colors'
                      >
                        <ExternalLink className='h-6 w-6' />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-6'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              Frequently Asked Questions
            </h2>
            <p className='text-lg text-gray-600'>
              Common questions about our partnership program
            </p>
          </div>

          <Accordion type='single' collapsible className='w-full'>
            <AccordionItem value='item-1' className='border-gray-200'>
              <AccordionTrigger className='text-left font-medium hover:text-[#00BCD4]'>
                What types of companies can become Moontag partners?
              </AccordionTrigger>
              <AccordionContent className='text-gray-600'>
                We partner with development agencies, tech companies,
                consultants, and enterprises across Africa. Whether you&apos;re
                a freelancer, small agency, or large corporation, we have
                partnership tiers designed to fit your business model and growth
                goals.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value='item-2' className='border-gray-200'>
              <AccordionTrigger className='text-left font-medium hover:text-[#00BCD4]'>
                How does the revenue sharing work?
              </AccordionTrigger>
              <AccordionContent className='text-gray-600'>
                Our revenue sharing model varies by partnership tier and project
                type. Enterprise partners typically receive 15-25% revenue
                share, while development partners can earn 10-20% on referred
                projects. We also offer performance bonuses and long-term
                incentives for high-performing partners.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value='item-3' className='border-gray-200'>
              <AccordionTrigger className='text-left font-medium hover:text-[#00BCD4]'>
                What technical requirements are needed for API integration?
              </AccordionTrigger>
              <AccordionContent className='text-gray-600'>
                Our Partner API is RESTful with comprehensive documentation,
                SDKs for major programming languages, and sandbox environments
                for testing. Most integrations can be completed in 1-2 weeks. We
                provide dedicated technical support throughout the integration
                process.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value='item-4' className='border-gray-200'>
              <AccordionTrigger className='text-left font-medium hover:text-[#00BCD4]'>
                How long does the application process take?
              </AccordionTrigger>
              <AccordionContent className='text-gray-600'>
                After submitting your application, our partnership team will
                review it within 3-5 business days. If approved, the onboarding
                process typically takes 1-2 weeks, depending on the partnership
                tier and integration complexity. We&apos;ll assign you a
                dedicated partner success manager to guide you through the
                process.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-16 bg-gray-900 text-white'>
        <div className='max-w-6xl mx-auto px-6 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className='text-3xl font-bold mb-4'>Ready to Partner?</h2>
            <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
              Join our growing network of partners and start building the future
              of digital transformation in Africa
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button
                className='bg-[#00BCD4] hover:bg-[#4CAF50] text-white px-8 py-3 text-base font-medium'
                onClick={() => setShowDialog(true)}
              >
                <Handshake className='mr-2 h-4 w-4' />
                Apply for Partnership
              </Button>
              <Button
                variant='outline'
                className='border-gray-600 text-gray-700 hover:text-gray-300 hover:bg-gray-800 hover:border-[#00BCD4] px-8 py-3 text-base font-medium'
                asChild
              >
                <a href='mailto:partnerships@moontag.com'>Contact Sales Team</a>
              </Button>
            </div>
            <div className='mt-8 text-sm text-gray-400 font-mono'>
              Building partnerships that scale across Africa
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className='max-w-md bg-white'>
          <DialogHeader>
            <DialogTitle className='text-xl font-bold text-gray-900'>
              Partnership Application
            </DialogTitle>
          </DialogHeader>

          <div className='py-6 text-center'>
            <div className='w-16 h-16 bg-[#00BCD4] rounded-full flex items-center justify-center mx-auto mb-4'>
              <Check className='h-8 w-8 text-white' />
            </div>
            <p className='text-gray-600 mb-4'>
              Thank you for your interest in partnering with Moontag. We&apos;ve
              received your application and our partnership team will review it
              shortly.
            </p>
            <p className='text-gray-600'>
              You can expect a response from us within 3-5 business days.
            </p>
          </div>

          <DialogFooter>
            <Button
              className='w-full bg-[#00BCD4] hover:bg-[#4CAF50] text-white'
              onClick={() => setShowDialog(false)}
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  )
}

export default PartnerPage
