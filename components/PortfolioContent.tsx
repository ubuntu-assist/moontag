'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowRight,
  ExternalLink,
  Users,
  Shield,
  Palette,
  TrendingUp,
  Monitor,
  Camera,
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { PortfolioType } from '@/app/[locale]/portfolio/page'

interface PortfolioContentProps {
  portfolioProjects: PortfolioType[]
  selectedCategory: string
  categories: string[]
  totalProjects: number
}

const categoryIcons: Record<string, React.ElementType> = {
  Development: Monitor,
  Design: Palette,
  Photography: Camera,
}

export function PortfolioContent({
  portfolioProjects,
  selectedCategory,
  categories,
  totalProjects,
}: PortfolioContentProps) {
  const [activeCategory, setActiveCategory] = useState(selectedCategory)

  const getIcon = (category: string) => {
    return categoryIcons[category] || Monitor
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
              <h1 className='text-4xl md:text-5xl font-bold'>Our Portfolio</h1>
              <Badge className='bg-[#00BCD4] text-white border-0 text-sm font-mono'>
                {totalProjects} Projects
              </Badge>
            </div>
            <p className='text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl'>
              Showcasing successful digital transformation projects across
              Africa. From fintech platforms to photography collections, we
              deliver solutions that drive real business impact.
            </p>
            <div className='flex flex-wrap gap-8 text-sm font-mono'>
              <div className='flex items-center gap-2'>
                <div className='w-2 h-2 bg-green-400 rounded-full'></div>
                <span className='text-green-400'>350K+ Users Impacted</span>
              </div>
              <div className='flex items-center gap-2'>
                <div className='w-2 h-2 bg-[#00BCD4] rounded-full'></div>
                <span className='text-gray-300'>$7.5M+ Revenue Generated</span>
              </div>
              <div className='flex items-center gap-2'>
                <div className='w-2 h-2 bg-[#4CAF50] rounded-full'></div>
                <span className='text-gray-300'>98% Success Rate</span>
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
              <Link
                key={category}
                href={`/portfolio${category !== 'All' ? `?category=${category}` : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                <button
                  className={`px-4 py-2 rounded font-mono text-sm font-medium transition-colors duration-300 ${
                    activeCategory === category
                      ? 'bg-gray-900 text-white'
                      : 'bg-white text-gray-700 hover:bg-[#00BCD4] hover:text-white border border-gray-300'
                  }`}
                >
                  {category}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Items */}
      <section className='py-16'>
        <div className='max-w-6xl mx-auto px-6'>
          {portfolioProjects.length === 0 ? (
            <div className='text-center py-16'>
              <p className='text-xl text-gray-600'>
                No projects found in this category.
              </p>
            </div>
          ) : (
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
              {portfolioProjects.map((item, index) => {
                const IconComponent = getIcon(item.category || 'Development')
                return (
                  <motion.div
                    key={item._id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className='group'
                  >
                    <Card className='h-full border-2 border-gray-200 hover:border-[#00BCD4] transition-all duration-300 overflow-hidden'>
                      <CardContent className='p-0 h-full flex flex-col'>
                        {/* Image Section */}
                        <div className='relative h-48'>
                          <img
                            src={
                              item.featuredImage?.asset?.url ||
                              '/images/placeholder.jpg'
                            }
                            alt={item.featuredImage?.alt || item.title || ''}
                            className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                          />
                          <div className='absolute top-4 left-4'>
                            <Badge
                              variant={
                                item.status === 'Live'
                                  ? 'default'
                                  : item.status === 'Beta'
                                    ? 'secondary'
                                    : 'outline'
                              }
                              className={`font-mono ${
                                item.status === 'Live'
                                  ? 'bg-[#4CAF50] hover:bg-[#4CAF50] text-white'
                                  : item.status === 'Beta'
                                    ? 'bg-[#00BCD4] hover:bg-[#00BCD4] text-white'
                                    : 'border-green-500 text-green-700 bg-green-50'
                              }`}
                            >
                              {item.status}
                            </Badge>
                          </div>
                          <div className='absolute top-4 right-4'>
                            <div className='p-2 bg-gray-900/80 backdrop-blur-sm text-white rounded'>
                              <IconComponent className='h-5 w-5' />
                            </div>
                          </div>
                        </div>

                        {/* Content Section */}
                        <div className='p-6 flex-1 flex flex-col'>
                          <div className='flex items-center gap-2 mb-3'>
                            <Badge
                              variant='outline'
                              className='text-xs font-mono border-[#4CAF50] text-[#4CAF50] bg-green-50'
                            >
                              {item.category}
                            </Badge>
                          </div>

                          <h3 className='text-xl font-bold text-gray-900 mb-3 group-hover:text-[#00BCD4] transition-colors duration-300'>
                            {item.title}
                          </h3>

                          <p className='text-gray-600 mb-4 leading-relaxed text-sm flex-grow'>
                            {item.longDescription}
                          </p>

                          {/* Technologies */}
                          <div className='flex flex-wrap gap-2 mb-4'>
                            {item.technologies?.slice(0, 4).map((tech) => (
                              <Badge
                                key={tech}
                                variant='secondary'
                                className='text-xs font-mono'
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>

                          {/* CTA */}
                          <Button
                            variant='outline'
                            className='w-full border-gray-300 text-gray-700 hover:border-[#00BCD4] hover:text-[#00BCD4] hover:bg-transparent group/btn mt-auto'
                            asChild
                          >
                            <Link href={`/portfolio/${item.slug?.current}`}>
                              View Case Study
                              <ArrowRight className='ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300' />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* Impact Section */}
      <section className='py-16 bg-gray-50 border-t border-gray-200'>
        <div className='max-w-6xl mx-auto px-6'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-center mb-12'
          >
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              Our Impact by the Numbers
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Measurable results across all our projects and partnerships
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
            {[
              {
                value: '350K+',
                label: 'Users Served',
                icon: <Users className='h-5 w-5' />,
                color: 'text-[#00BCD4]',
              },
              {
                value: '$7.5M+',
                label: 'Revenue Generated',
                icon: <TrendingUp className='h-5 w-5' />,
                color: 'text-[#4CAF50]',
              },
              {
                value: totalProjects.toString(),
                label: 'Major Projects',
                icon: <Monitor className='h-5 w-5' />,
                color: 'text-purple-500',
              },
              {
                value: '98%',
                label: 'Success Rate',
                icon: <Shield className='h-5 w-5' />,
                color: 'text-orange-500',
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='text-center'
              >
                <div className='flex items-center justify-center gap-2 mb-2'>
                  <div className={stat.color}>{stat.icon}</div>
                  <div className={`text-3xl font-bold font-mono ${stat.color}`}>
                    {stat.value}
                  </div>
                </div>
                <div className='text-gray-600'>{stat.label}</div>
              </motion.div>
            ))}
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
              Ready to Start Your Project?
            </h2>
            <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
              Join successful companies who&apos;ve transformed their digital
              presence with Moontag&apos;s expertise
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
                className='border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-[#00BCD4] px-8 py-3 text-base font-medium'
                asChild
              >
                <Link href='/services'>
                  View Our Services
                  <ExternalLink className='ml-2 h-4 w-4' />
                </Link>
              </Button>
            </div>
            <div className='mt-8 text-sm text-gray-400 font-mono'>
              Building digital solutions that scale across Africa
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
