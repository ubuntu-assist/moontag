'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import {
  Globe,
  Palette,
  Gift,
  Camera,
  Shirt,
  Megaphone,
  GraduationCap,
  ShoppingCart,
  Shield,
  Heart,
  ArrowRight,
  Check,
  Code,
  Users,
  TrendingUp,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface Service {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  features: string[]
  callToAction: string
  link: string
  category: 'Development' | 'Design' | 'Marketing' | 'Strategy'
}

interface Benefit {
  title: string
  description: string
  icon: React.ReactNode
}

const ServicesPage = () => {
  const services: Service[] = [
    {
      id: 'web-mobile-dev',
      title: 'Web & Mobile Development',
      description:
        'Modern, professional websites and high-performance mobile apps to increase online visibility, accelerate growth, and turn your ideas into measurable success.',
      icon: <Globe className='h-6 w-6' />,
      features: [
        'Responsive web applications',
        'Native & cross-platform mobile apps',
        'Progressive Web Apps (PWA)',
        'Performance optimization',
      ],
      callToAction: 'Start Project',
      link: '/services/development',
      category: 'Development',
    },
    {
      id: 'branding-design',
      title: 'Branding & Graphic Design',
      description:
        'Strong and memorable visual identities, including logos, brand guidelines, and visual assets to help your brand stand out, inspire trust, and engage your audience.',
      icon: <Palette className='h-6 w-6' />,
      features: [
        'Logo design & brand identity',
        'Brand guidelines & style guides',
        'Marketing collateral design',
        'Visual asset creation',
      ],
      callToAction: 'View Portfolio',
      link: '/services/branding',
      category: 'Design',
    },
    {
      id: 'custom-merchandise',
      title: 'Custom Merchandise & Branded Swag',
      description:
        'Original branded merchandise and custom promotional items that build brand awareness and customer loyalty. Each item becomes a powerful marketing tool.',
      icon: <Gift className='h-6 w-6' />,
      features: [
        'Custom promotional products',
        'Corporate gift solutions',
        'Event merchandise',
        'Brand visibility tools',
      ],
      callToAction: 'Get Quote',
      link: '/services/merchandise',
      category: 'Marketing',
    },
    {
      id: 'photography',
      title: 'Photography & Visual Storytelling',
      description:
        'Professional photoshoots and impactful visual content to tell your brand story, capture attention, and strengthen credibility across all digital channels.',
      icon: <Camera className='h-6 w-6' />,
      features: [
        'Professional photography',
        'Product & lifestyle shoots',
        'Visual content creation',
        'Brand storytelling',
      ],
      callToAction: 'Book Session',
      link: '/services/photography',
      category: 'Design',
    },
    {
      id: 'textile-printing',
      title: 'Branded Apparel & Textile Printing',
      description:
        'Custom apparel and textile branding for teams, events, and marketing campaigns, combining style, comfort, and brand visibility.',
      icon: <Shirt className='h-6 w-6' />,
      features: [
        'Custom team apparel',
        'Event merchandise',
        'High-quality textile printing',
        'Brand uniform solutions',
      ],
      callToAction: 'Design Apparel',
      link: '/services/apparel',
      category: 'Design',
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing & Communication',
      description:
        'Comprehensive digital strategies including SEO, multi-channel campaigns, paid ads, and creative storytelling to generate leads, increase sales, and build engaged communities.',
      icon: <Megaphone className='h-6 w-6' />,
      features: [
        'SEO & content marketing',
        'Social media management',
        'Paid advertising campaigns',
        'Multi-channel strategies',
      ],
      callToAction: 'Get Strategy',
      link: '/services/marketing',
      category: 'Marketing',
    },
    {
      id: 'training-coaching',
      title: 'Digital Training & Coaching',
      description:
        'Tailored digital training and coaching that equips teams and professionals to master digital tools, strengthen skills, and stay competitive.',
      icon: <GraduationCap className='h-6 w-6' />,
      features: [
        'Digital skills training',
        'Team coaching sessions',
        'Custom learning programs',
        'Competency development',
      ],
      callToAction: 'Learn More',
      link: '/services/training',
      category: 'Strategy',
    },
    {
      id: 'ecommerce',
      title: 'E-commerce & Online Sales',
      description:
        'Optimized online stores with intuitive design, secure payments, and marketing automation to turn visitors into loyal customers and maximize online sales.',
      icon: <ShoppingCart className='h-6 w-6' />,
      features: [
        'E-commerce development',
        'Payment integration',
        'Inventory management',
        'Sales optimization',
      ],
      callToAction: 'Build Store',
      link: '/services/ecommerce',
      category: 'Development',
    },
    {
      id: 'maintenance-security',
      title: 'Maintenance, Hosting & Security',
      description:
        'Reliable and secure solutions: professional hosting, continuous maintenance, regular updates, and advanced cybersecurity to protect your digital assets.',
      icon: <Shield className='h-6 w-6' />,
      features: [
        'Professional hosting',
        'Security monitoring',
        'Regular updates & backups',
        'Performance optimization',
      ],
      callToAction: 'Secure Assets',
      link: '/services/maintenance',
      category: 'Development',
    },
    {
      id: 'social-impact',
      title: 'Social & Humanitarian Impact',
      description:
        'Supporting NGOs, nonprofits, and impact-driven businesses with authentic and impactful digital campaigns to maximize their social and community impact.',
      icon: <Heart className='h-6 w-6' />,
      features: [
        'NGO digital campaigns',
        'Social impact storytelling',
        'Community engagement',
        'Cause marketing',
      ],
      callToAction: 'Make Impact',
      link: '/services/social-impact',
      category: 'Strategy',
    },
  ]

  const benefits: Benefit[] = [
    {
      title: 'Complete Digital Ecosystem',
      description:
        'End-to-end digital solutions from strategy to execution, all managed through our integrated platform.',
      icon: <Code className='h-6 w-6' />,
    },
    {
      title: 'Personalized Support',
      description:
        'Dedicated account management and custom solutions tailored to your unique business needs and goals.',
      icon: <Users className='h-6 w-6' />,
    },
    {
      title: 'Measurable Growth',
      description:
        'Data-driven approaches with clear metrics and ROI tracking to ensure your investment delivers results.',
      icon: <TrendingUp className='h-6 w-6' />,
    },
  ]

  const categories = ['All', 'Development', 'Design', 'Marketing', 'Strategy']
  const [selectedCategory, setSelectedCategory] = React.useState('All')

  const filteredServices =
    selectedCategory === 'All'
      ? services
      : services.filter((service) => service.category === selectedCategory)

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
                Moontag Services
              </h1>
              <Badge className='bg-[#00BCD4] text-white border-0 text-sm font-mono'>
                Full Stack
              </Badge>
            </div>
            <p className='text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl'>
              Empowering startups, innovative companies, and forward-thinking
              brands with high-performance digital solutions to maximize
              visibility, reputation, and growth.
            </p>
            <div className='flex flex-wrap gap-8 text-sm font-mono'>
              <div className='flex items-center gap-2'>
                <div className='w-2 h-2 bg-green-400 rounded-full'></div>
                <span className='text-green-400'>
                  Complete Digital Ecosystem
                </span>
              </div>
              <div className='flex items-center gap-2'>
                <div className='w-2 h-2 bg-[#00BCD4] rounded-full'></div>
                <span className='text-gray-300'>10+ Service Categories</span>
              </div>
              <div className='flex items-center gap-2'>
                <div className='w-2 h-2 bg-[#4CAF50] rounded-full'></div>
                <span className='text-gray-300'>Mobile-First Management</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className='py-8 border-b border-gray-100 bg-gray-50'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='flex flex-wrap gap-3'>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded text-sm font-medium transition-colors duration-300 ${
                  selectedCategory === category
                    ? 'bg-gray-900 text-white'
                    : 'bg-white text-gray-700 hover:bg-[#00BCD4] hover:text-white border border-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className='h-full border-2 border-gray-200 hover:border-[#00BCD4] transition-all duration-300 bg-white hover:shadow-lg'>
                  <CardContent className='p-6 h-full flex flex-col'>
                    {/* Header */}
                    <div className='flex items-start gap-3 mb-4'>
                      <div className='p-2 bg-gray-900 text-white rounded'>
                        {service.icon}
                      </div>
                      <div className='flex-1'>
                        <h3 className='text-lg font-bold text-gray-900 mb-2'>
                          {service.title}
                        </h3>
                        <Badge
                          variant='outline'
                          className='text-xs font-mono border-[#4CAF50] text-[#4CAF50] bg-green-50'
                        >
                          {service.category}
                        </Badge>
                      </div>
                    </div>

                    <p className='text-gray-600 mb-4 leading-relaxed text-sm'>
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className='space-y-2 mb-6 flex-grow'>
                      {service.features.map((feature, idx) => (
                        <div key={idx} className='flex items-start gap-2'>
                          <Check className='h-4 w-4 text-[#4CAF50] flex-shrink-0 mt-0.5' />
                          <span className='text-gray-600 text-sm'>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Button
                      className='w-full bg-gray-900 hover:bg-[#00BCD4] text-white transition-colors duration-300 mt-auto'
                      asChild
                    >
                      <Link href={service.link}>
                        {service.callToAction}
                        <ArrowRight className='ml-2 h-4 w-4' />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className='py-16 bg-white'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className='text-3xl font-bold text-gray-900 mb-6'>
                How Moontag Works
              </h2>
              <p className='text-lg text-gray-600 mb-6 leading-relaxed'>
                Moontag simplifies the success of your projects through a
                complete digital ecosystem, personalized support, and an engaged
                community. Manage everything easily from your phone, wherever
                you are.
              </p>
              <div className='space-y-4'>
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
                <span className='text-gray-400 ml-2'>moontag-workflow.js</span>
              </div>
              <div className='space-y-2'>
                <div>
                  <span className='text-purple-400'>const</span>{' '}
                  <span className='text-blue-400'>project</span> ={' '}
                  <span className='text-purple-400'>new</span>{' '}
                  <span className='text-yellow-300'>MoontagProject</span>({'{'}
                </div>
                <div className='ml-4'>
                  <span className='text-red-400'>type</span>:{' '}
                  <span className='text-green-400'>
                    &apos;full-stack-solution&apos;
                  </span>
                  ,
                </div>
                <div className='ml-4'>
                  <span className='text-red-400'>services</span>: [
                </div>
                <div className='ml-8'>
                  <span className='text-green-400'>
                    &apos;web-development&apos;
                  </span>
                  ,
                </div>
                <div className='ml-8'>
                  <span className='text-green-400'>&apos;branding&apos;</span>,
                </div>
                <div className='ml-8'>
                  <span className='text-green-400'>
                    &apos;digital-marketing&apos;
                  </span>
                </div>
                <div className='ml-4'>],</div>
                <div className='ml-4'>
                  <span className='text-red-400'>management</span>:{' '}
                  <span className='text-green-400'>
                    &apos;mobile-first&apos;
                  </span>
                </div>
                <div>{'}'}</div>
                <div className='mt-4'>
                  <span className='text-gray-500'>Launch your vision</span>
                </div>
                <div>
                  <span className='text-blue-400'>project</span>.
                  <span className='text-yellow-300'>launch</span>().
                  <span className='text-yellow-300'>then</span>(
                  <span className='text-red-400'>success</span>{' '}
                  <span className='text-purple-400'>={'>'}</span> {'{'}
                </div>
                <div className='ml-4'>
                  <span className='text-blue-400'>console</span>.
                  <span className='text-yellow-300'>log</span>(
                  <span className='text-green-400'>
                    &apos;Growth achieved!&apos;
                  </span>
                  )
                </div>
                <div>{'}'}</div>
              </div>
            </motion.div>
          </div>
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
            <h2 className='text-3xl font-bold mb-4'>
              Ready to Transform Your Vision?
            </h2>
            <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
              Join innovative companies building their digital presence with
              Moontag&apos;s complete ecosystem
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button
                className='bg-[#00BCD4] hover:bg-[#4CAF50] text-white px-8 py-3 text-base font-medium'
                asChild
              >
                <Link href='/contact'>
                  Start Your Project
                  <ArrowRight className='ml-2 h-4 w-4' />
                </Link>
              </Button>
              <Button
                variant='outline'
                className='border-gray-600 text-gray-700 hover:text-gray-300 hover:bg-gray-800 hover:border-[#00BCD4] px-8 py-3 text-base font-medium'
                asChild
              >
                <Link href='/portfolio'>View Our Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default ServicesPage
