'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Globe,
  Shield,
  Zap,
  Users,
  TrendingUp,
  Heart,
  Mail,
  ExternalLink,
  ArrowRight,
} from 'lucide-react'

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Shaquille Mpeck',
      role: 'Founder & CEO',
      img: '/images/team/ceo-moontag.jpg',
      linkedin: '#',
      twitter: '#',
      email: '',
    },
    {
      name: 'Linda Fotso',
      role: 'Chief Operating Officier',
      img: '/images/team/coo-moontag.jpg',
      linkedin: '#',
      twitter: '#',
      email: '',
    },
    {
      name: 'Fopa Kuete Duclair',
      role: 'Chief Technology Officer',
      img: '/images/team/cto-abokyh.jpg',
      linkedin: 'https://www.linkedin.com/in/duclair-fopa/',
      twitter: 'https://x.com/BlockchainMonk_',
      email: 'duclair.fopa@hotmail.com',
    },
  ]

  const coreValues = [
    {
      icon: <Globe className='h-6 w-6' />,
      title: 'Global Accessibility',
      description:
        'Making digital solutions accessible to everyone, regardless of technical knowledge or traditional banking access.',
    },
    {
      icon: <Shield className='h-6 w-6' />,
      title: 'Enterprise Security',
      description:
        'Building trust through robust security measures, transparent operations, and compliance-first approach.',
    },
    {
      icon: <Zap className='h-6 w-6' />,
      title: 'Continuous Innovation',
      description:
        'Evolving our platform continuously to meet the unique needs of emerging markets and digital transformation.',
    },
  ]

  const impactMetrics = [
    { value: '100+', label: 'Users in Waitlist', color: 'bg-[#00BCD4]' },
    { value: '5', label: 'Countries', color: 'bg-[#4CAF50]' },
    { value: '5+', label: 'Partner Merchants', color: 'bg-gray-900' },
    { value: '24/7', label: 'Support', color: 'bg-orange-500' },
  ]

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
              <h1 className='text-4xl md:text-5xl font-bold'>About Moontag</h1>
              <Badge className='bg-[#00BCD4] text-white border-0 text-sm font-mono'>
                Est. 2024
              </Badge>
            </div>
            <p className='text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl'>
              Empowering digital transformation across Africa through innovative
              solutions, expert development, and strategic partnerships.
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
                <span className='text-gray-300'>Global Impact Focus</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className='text-3xl font-bold text-gray-900 mb-6'>
                Our Mission
              </h2>
              <div className='space-y-4 text-gray-600 leading-relaxed'>
                <p>
                  Founded in 2024, Moontag emerged from a simple observation:
                  while digital transformation was accelerating across Africa,
                  there remained a significant gap between having access to
                  technology and leveraging it effectively for business growth.
                </p>
                <p>
                  Our team of fintech experts, blockchain enthusiasts, and
                  digital strategists from across the region came together with
                  a shared vision: create a comprehensive platform that makes
                  digital solutions practical and accessible for startups,
                  enterprises, and forward-thinking brands.
                </p>
                <p>
                  Today, Moontag is at the forefront of bridging this gap,
                  enabling businesses to seamlessly integrate web development,
                  mobile applications, branding, marketing, and specialized
                  services into their growth strategies.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className='relative'
            >
              <div className='bg-gray-900 rounded-lg p-8 text-white'>
                <div className='flex items-center gap-2 mb-6 pb-2 border-b border-gray-700'>
                  <div className='w-3 h-3 bg-red-500 rounded-full'></div>
                  <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
                  <div className='w-3 h-3 bg-green-500 rounded-full'></div>
                  <span className='text-gray-400 ml-2 font-mono text-sm'>
                    moontag-vision.md
                  </span>
                </div>
                <div className='space-y-3 font-mono text-sm'>
                  <div>
                    <span className='text-purple-400'># Our Vision</span>
                  </div>
                  <div>
                    <span className='text-gray-400'>
                      Empowering African innovation
                    </span>
                  </div>
                  <div>
                    <span className='text-blue-400'>const</span>{' '}
                    <span className='text-yellow-300'>vision</span> = {'{'}
                  </div>
                  <div className='ml-4'>
                    <span className='text-red-400'>mission</span>:{' '}
                    <span className='text-green-400'>
                      &apos;Digital transformation for all&apos;
                    </span>
                    ,
                  </div>
                  <div className='ml-4'>
                    <span className='text-red-400'>focus</span>:{' '}
                    <span className='text-green-400'>
                      &apos;African markets&apos;
                    </span>
                    ,
                  </div>
                  <div className='ml-4'>
                    <span className='text-red-400'>approach</span>:{' '}
                    <span className='text-green-400'>
                      &apos;Complete ecosystem&apos;
                    </span>
                  </div>
                  <div>{'}'}</div>
                  <div className='mt-4'>
                    <span className='text-blue-400'>export</span>{' '}
                    <span className='text-purple-400'>default</span>{' '}
                    <span className='text-yellow-300'>vision</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className='py-16 bg-white'>
        <div className='max-w-6xl mx-auto px-6'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-12'
          >
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              Core Values
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              The principles that guide every decision and drive our commitment
              to excellence
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className='h-full border-2 border-gray-200 hover:border-[#00BCD4] transition-all duration-300'>
                  <CardContent className='p-6 text-center'>
                    <div className='w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center mx-auto mb-4'>
                      {value.icon}
                    </div>
                    <h3 className='text-xl font-bold text-gray-900 mb-3'>
                      {value.title}
                    </h3>
                    <p className='text-gray-600 leading-relaxed'>
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-6xl mx-auto px-6'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-12'
          >
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>Our Team</h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Meet the passionate team behind Moontag, working to revolutionize
              digital transformation across Africa
            </p>
          </motion.div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className='border-2 border-gray-200 hover:border-[#00BCD4] transition-all duration-300 overflow-hidden'>
                  <CardContent className='p-6 text-center'>
                    <div className='relative mb-6'>
                      <div className='h-32 w-32 mx-auto rounded-full overflow-hidden border-4 border-gray-200'>
                        <Image
                          src={member.img}
                          alt={member.name}
                          width={128}
                          height={128}
                          className='w-full h-full object-cover'
                        />
                      </div>
                    </div>

                    <h3 className='text-lg font-bold text-gray-900 mb-1'>
                      {member.name}
                    </h3>
                    <p className='text-gray-600 mb-4 text-sm'>{member.role}</p>

                    <div className='flex justify-center space-x-3'>
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='p-2 bg-gray-100 hover:bg-[#00BCD4] hover:text-white rounded transition-colors duration-300'
                        >
                          <ExternalLink className='w-4 h-4' />
                        </a>
                      )}
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className='p-2 bg-gray-100 hover:bg-[#4CAF50] hover:text-white rounded transition-colors duration-300'
                        >
                          <Mail className='w-4 h-4' />
                        </a>
                      )}
                      {member.twitter && (
                        <a
                          href={member.twitter}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='p-2 bg-gray-100 hover:bg-gray-900 hover:text-white rounded transition-colors duration-300'
                        >
                          <ExternalLink className='w-4 h-4' />
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className='py-16 bg-white'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className='text-3xl font-bold text-gray-900 mb-6'>
                Our Impact
              </h2>
              <p className='text-gray-600 mb-6 leading-relaxed'>
                At Moontag, we believe in the transformative power of technology
                to create positive change across Africa. By bridging the gap
                between innovation and practical implementation, we contribute
                to:
              </p>
              <div className='space-y-4'>
                {[
                  {
                    icon: <Users className='w-5 h-5' />,
                    title: 'Digital Inclusion',
                    desc: 'Providing access to digital tools and services for businesses of all sizes.',
                  },
                  {
                    icon: <TrendingUp className='w-5 h-5' />,
                    title: 'Economic Empowerment',
                    desc: 'Enabling businesses to compete in the global digital economy.',
                  },
                  {
                    icon: <Heart className='w-5 h-5' />,
                    title: 'Social Impact',
                    desc: 'Supporting NGOs and social enterprises with authentic digital campaigns.',
                  },
                ].map((item, index) => (
                  <div key={index} className='flex items-start gap-3'>
                    <div className='p-2 bg-[#00BCD4] text-white rounded flex-shrink-0'>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className='font-semibold text-gray-900 mb-1'>
                        {item.title}
                      </h4>
                      <p className='text-gray-600 text-sm'>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className='grid grid-cols-2 gap-4'>
                {impactMetrics.map((metric, index) => (
                  <Card
                    key={index}
                    className={`${metric.color} text-white border-0`}
                  >
                    <CardContent className='p-6 text-center'>
                      <div className='text-3xl font-bold font-mono mb-2'>
                        {metric.value}
                      </div>
                      <p className='text-sm opacity-90'>{metric.label}</p>
                    </CardContent>
                  </Card>
                ))}
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
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className='text-3xl font-bold mb-4'>Join Our Mission</h2>
            <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
              Whether you&apos;re a startup, enterprise, or change-maker,
              we&apos;d love to connect and explore how we can collaborate to
              shape the future of digital transformation in Africa.
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
                <Link href='/careers'>Join Our Team</Link>
              </Button>
            </div>
            <div className='mt-8 text-sm text-gray-400 font-mono'>
              Building the future of digital transformation, one project at a
              time
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default AboutPage
