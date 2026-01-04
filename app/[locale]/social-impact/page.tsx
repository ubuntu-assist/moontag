'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import {
  Heart,
  Users,
  Lightbulb,
  HandHeart,
  Globe,
  Target,
  TrendingUp,
  Check,
  Smartphone,
  Building2,
  Copy,
  CheckCircle2,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface Campaign {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  features: string[]
  impact: string
  category: 'NGO' | 'Community' | 'Education' | 'Environment'
}

interface PaymentAccount {
  provider: string
  accountName: string
  accountNumber: string
  icon: React.ReactNode
  color: string
}

interface Benefit {
  title: string
  description: string
  icon: React.ReactNode
}

const SocialImpactPage = () => {
  const [copiedAccount, setCopiedAccount] = React.useState<string | null>(null)

  const campaigns: Campaign[] = [
    {
      id: 'ngo-campaigns',
      title: 'NGO Digital Campaigns',
      description:
        'Comprehensive digital marketing campaigns for non-profit organizations to amplify their message, reach wider audiences, and drive meaningful engagement with their cause.',
      icon: <Heart className='h-6 w-6' />,
      features: [
        'Social media strategy & management',
        'Fundraising campaign development',
        'Donor engagement & retention',
        'Impact storytelling & content creation',
      ],
      impact: '500+ NGOs supported',
      category: 'NGO',
    },
    {
      id: 'community-engagement',
      title: 'Community Engagement Programs',
      description:
        'Build stronger communities through digital platforms that facilitate dialogue, mobilize volunteers, and create lasting connections between organizations and the people they serve.',
      icon: <Users className='h-6 w-6' />,
      features: [
        'Community platform development',
        'Volunteer management systems',
        'Event promotion & coordination',
        'Community feedback & surveys',
      ],
      impact: '100+ communities empowered',
      category: 'Community',
    },
    {
      id: 'educational-initiatives',
      title: 'Educational Initiatives',
      description:
        'Support educational programs with digital tools that enhance learning outcomes, connect students with resources, and help educational nonprofits maximize their impact.',
      icon: <Lightbulb className='h-6 w-6' />,
      features: [
        'E-learning platform development',
        'Student scholarship programs',
        'Educational content creation',
        'Teacher training & resources',
      ],
      impact: '10,000+ students reached',
      category: 'Education',
    },
    {
      id: 'cause-marketing',
      title: 'Cause Marketing Campaigns',
      description:
        'Strategic marketing campaigns that align brands with social causes, creating win-win partnerships that drive both business results and positive social change.',
      icon: <Target className='h-6 w-6' />,
      features: [
        'Cause alignment strategy',
        'Brand-NGO partnerships',
        'Corporate social responsibility',
        'Impact measurement & reporting',
      ],
      impact: '50+ successful partnerships',
      category: 'NGO',
    },
    {
      id: 'environmental-awareness',
      title: 'Environmental Awareness',
      description:
        'Digital campaigns focused on environmental conservation, climate action, and sustainability education to drive behavioral change and protect our planet.',
      icon: <Globe className='h-6 w-6' />,
      features: [
        'Climate action campaigns',
        'Sustainability education',
        'Green initiative promotion',
        'Environmental impact tracking',
      ],
      impact: '1M+ people engaged',
      category: 'Environment',
    },
    {
      id: 'humanitarian-aid',
      title: 'Humanitarian Aid Support',
      description:
        'Emergency response campaigns and ongoing support for humanitarian organizations working in crisis zones and underserved communities worldwide.',
      icon: <HandHeart className='h-6 w-6' />,
      features: [
        'Emergency campaign deployment',
        'Crisis communication strategies',
        'Donation platform integration',
        'Real-time impact reporting',
      ],
      impact: '200+ relief campaigns',
      category: 'NGO',
    },
  ]

  const paymentAccounts: PaymentAccount[] = [
    {
      provider: 'Orange Money',
      accountName: 'Moontag Foundation',
      accountNumber: '+237 6XX XXX XXX',
      icon: <Smartphone className='h-5 w-5' />,
      color: 'bg-orange-500',
    },
    {
      provider: 'MTN Mobile Money',
      accountName: 'Moontag Foundation',
      accountNumber: '+237 6XX XXX XXX',
      icon: <Smartphone className='h-5 w-5' />,
      color: 'bg-yellow-500',
    },
    {
      provider: 'Bank Account',
      accountName: 'Moontag Foundation',
      accountNumber: 'IBAN: CM21 XXXX XXXX XXXX XXXX XXXX XXX',
      icon: <Building2 className='h-5 w-5' />,
      color: 'bg-blue-600',
    },
  ]

  const benefits: Benefit[] = [
    {
      title: 'Authentic Impact Stories',
      description:
        'We help you tell compelling stories that resonate with audiences and inspire action through genuine, transparent communication.',
      icon: <Heart className='h-6 w-6' />,
    },
    {
      title: 'Maximized Reach',
      description:
        'Strategic digital campaigns that amplify your message across multiple channels to reach and engage your target audience effectively.',
      icon: <TrendingUp className='h-6 w-6' />,
    },
    {
      title: 'Measurable Impact',
      description:
        'Data-driven approaches with clear metrics to track campaign performance, donor engagement, and real-world social impact.',
      icon: <Target className='h-6 w-6' />,
    },
  ]

  const categories = ['All', 'NGO', 'Community', 'Education', 'Environment']
  const [selectedCategory, setSelectedCategory] = React.useState('All')

  const filteredCampaigns =
    selectedCategory === 'All'
      ? campaigns
      : campaigns.filter((campaign) => campaign.category === selectedCategory)

  const copyToClipboard = (text: string, provider: string) => {
    navigator.clipboard.writeText(text)
    setCopiedAccount(provider)
    setTimeout(() => setCopiedAccount(null), 2000)
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
                Social & Humanitarian Impact
              </h1>
              <Badge className='bg-[#00BCD4] text-white border-0 text-sm font-mono'>
                Making a Difference
              </Badge>
            </div>
            <p className='text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl'>
              Supporting NGOs, nonprofits, and impact-driven businesses with
              authentic and impactful digital campaigns to maximize their social
              and community impact.
            </p>
            <div className='flex flex-wrap gap-8 text-sm font-mono'>
              <div className='flex items-center gap-2'>
                <div className='w-2 h-2 bg-green-400 rounded-full'></div>
                <span className='text-green-400'>Authentic Storytelling</span>
              </div>
              <div className='flex items-center gap-2'>
                <div className='w-2 h-2 bg-[#00BCD4] rounded-full'></div>
                <span className='text-gray-300'>500+ NGOs Supported</span>
              </div>
              <div className='flex items-center gap-2'>
                <div className='w-2 h-2 bg-[#4CAF50] rounded-full'></div>
                <span className='text-gray-300'>Global Impact</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Images Section */}
      <section className='py-16 bg-white'>
        <div className='max-w-6xl mx-auto px-6'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-center mb-12'
          >
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              Our Impact in Action
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              See how we&apos;re making a difference in communities around the
              world
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className='relative h-64 rounded-lg overflow-hidden group'
            >
              <div className='absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent z-10'></div>
              <Image
                src='/images/mtg1.jpg'
                alt='Community Empowerment'
                fill
                className='object-cover'
              />
              <div className='absolute bottom-0 left-0 right-0 p-4 z-20'>
                <h3 className='text-white font-bold text-lg'>
                  Community Empowerment
                </h3>
                <p className='text-gray-300 text-sm'>
                  Building stronger communities together
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='relative h-64 rounded-lg overflow-hidden group'
            >
              <div className='absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent z-10'></div>
              <Image
                src='/images/mtg2.jpg'
                alt='Education for All'
                fill
                className='object-cover'
              />
              <div className='absolute bottom-0 left-0 right-0 p-4 z-20'>
                <h3 className='text-white font-bold text-lg'>
                  Education for All
                </h3>
                <p className='text-gray-300 text-sm'>
                  Empowering through knowledge
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className='relative h-64 rounded-lg overflow-hidden group'
            >
              <div className='absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent z-10'></div>
              <Image
                src='/images/mtg3.jpg'
                alt='Environmental Conservation'
                fill
                className='object-cover'
              />
              <div className='absolute bottom-0 left-0 right-0 p-4 z-20'>
                <h3 className='text-white font-bold text-lg'>
                  Environmental Conservation
                </h3>
                <p className='text-gray-300 text-sm'>Protecting our planet</p>
              </div>
            </motion.div>
          </div>
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

      {/* Campaigns Grid */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {filteredCampaigns.map((campaign, index) => (
              <motion.div
                key={campaign.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className='h-full border-2 border-gray-200 hover:border-[#00BCD4] transition-all duration-300 bg-white hover:shadow-lg'>
                  <CardContent className='p-6 h-full flex flex-col'>
                    {/* Header */}
                    <div className='flex items-start gap-3 mb-4'>
                      <div className='p-2 bg-gray-900 text-white rounded'>
                        {campaign.icon}
                      </div>
                      <div className='flex-1'>
                        <h3 className='text-lg font-bold text-gray-900 mb-2'>
                          {campaign.title}
                        </h3>
                        <Badge
                          variant='outline'
                          className='text-xs font-mono border-[#4CAF50] text-[#4CAF50] bg-green-50'
                        >
                          {campaign.category}
                        </Badge>
                      </div>
                    </div>

                    <p className='text-gray-600 mb-4 leading-relaxed text-sm'>
                      {campaign.description}
                    </p>

                    {/* Impact Badge */}
                    <div className='mb-4'>
                      <Badge className='bg-[#00BCD4] text-white border-0 text-xs'>
                        {campaign.impact}
                      </Badge>
                    </div>

                    {/* Features */}
                    <div className='space-y-2 mb-6 flex-grow'>
                      {campaign.features.map((feature, idx) => (
                        <div key={idx} className='flex items-start gap-2'>
                          <Check className='h-4 w-4 text-[#4CAF50] flex-shrink-0 mt-0.5' />
                          <span className='text-gray-600 text-sm'>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className='py-16 bg-white'>
        <div className='max-w-6xl mx-auto px-6'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-center mb-12'
          >
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              Support Our Mission
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Your donation helps us continue supporting NGOs and humanitarian
              organizations in creating meaningful social impact
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto'>
            {paymentAccounts.map((account, index) => (
              <motion.div
                key={account.provider}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className='border-2 border-gray-200 hover:border-[#00BCD4] transition-all duration-300'>
                  <CardContent className='p-6'>
                    <div
                      className={`${account.color} text-white p-3 rounded-lg inline-flex mb-4`}
                    >
                      {account.icon}
                    </div>
                    <h3 className='font-bold text-gray-900 mb-2'>
                      {account.provider}
                    </h3>
                    <p className='text-sm text-gray-600 mb-2'>
                      {account.accountName}
                    </p>
                    <div className='bg-gray-50 p-3 rounded border border-gray-200 mb-3'>
                      <p className='text-sm font-mono text-gray-900'>
                        {account.accountNumber}
                      </p>
                    </div>
                    <Button
                      variant='outline'
                      size='sm'
                      className='w-full'
                      onClick={() =>
                        copyToClipboard(account.accountNumber, account.provider)
                      }
                    >
                      {copiedAccount === account.provider ? (
                        <>
                          <CheckCircle2 className='h-4 w-4 mr-2 text-green-600' />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className='h-4 w-4 mr-2' />
                          Copy Account
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='text-center mt-8'
          >
            <p className='text-sm text-gray-500'>
              All donations are tax-deductible and go directly to supporting our
              social impact initiatives
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Partner With Us Section */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className='text-3xl font-bold text-gray-900 mb-6'>
                Why Partner With Moontag
              </h2>
              <p className='text-lg text-gray-600 mb-6 leading-relaxed'>
                We believe in the power of digital technology to amplify the
                work of organizations making a real difference in the world. Our
                approach combines technical excellence with genuine passion for
                social impact.
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
                <span className='text-gray-400 ml-2'>impact-strategy.js</span>
              </div>
              <div className='space-y-2'>
                <div>
                  <span className='text-purple-400'>const</span>{' '}
                  <span className='text-blue-400'>campaign</span> ={' '}
                  <span className='text-purple-400'>new</span>{' '}
                  <span className='text-yellow-300'>SocialImpact</span>({'{'}
                </div>
                <div className='ml-4'>
                  <span className='text-red-400'>mission</span>:{' '}
                  <span className='text-green-400'>
                    &apos;change lives&apos;
                  </span>
                  ,
                </div>
                <div className='ml-4'>
                  <span className='text-red-400'>approach</span>: [
                </div>
                <div className='ml-8'>
                  <span className='text-green-400'>
                    &apos;authentic storytelling&apos;
                  </span>
                  ,
                </div>
                <div className='ml-8'>
                  <span className='text-green-400'>
                    &apos;community engagement&apos;
                  </span>
                  ,
                </div>
                <div className='ml-8'>
                  <span className='text-green-400'>
                    &apos;measurable impact&apos;
                  </span>
                </div>
                <div className='ml-4'>],</div>
                <div className='ml-4'>
                  <span className='text-red-400'>commitment</span>:{' '}
                  <span className='text-green-400'>&apos;long-term&apos;</span>
                </div>
                <div>{'}'}</div>
                <div className='mt-4'>
                  <span className='text-gray-500'>Create lasting change</span>
                </div>
                <div>
                  <span className='text-blue-400'>campaign</span>.
                  <span className='text-yellow-300'>launch</span>().
                  <span className='text-yellow-300'>then</span>(
                  <span className='text-red-400'>impact</span>{' '}
                  <span className='text-purple-400'>={'>'}</span> {'{'}
                </div>
                <div className='ml-4'>
                  <span className='text-blue-400'>console</span>.
                  <span className='text-yellow-300'>log</span>(
                  <span className='text-green-400'>
                    &apos;Lives transformed!&apos;
                  </span>
                  )
                </div>
                <div>{'}'}</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default SocialImpactPage
