'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowLeft,
  Palette,
  Calendar,
  Users,
  Layers,
  Eye,
  Download,
  ExternalLink,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Project } from '@/sanity/sanity.types'

interface DesignProjectDetailsProps {
  project: Project
}

const principleIcons: Record<string, React.ElementType> = {
  'Trust & Security': Layers,
  'Accessibility First': Eye,
  'Cultural Relevance': Users,
}

export default function DesignProjectDetails({
  project,
}: DesignProjectDetailsProps) {
  return (
    <main className='bg-white min-h-screen'>
      {/* Navigation */}
      <section className='bg-gray-900 text-white border-b-4 border-[#00BCD4]'>
        <div className='max-w-6xl mx-auto px-6 pt-24 pb-6'>
          <Button
            variant='ghost'
            className='text-gray-300 hover:text-white hover:bg-gray-800 p-2 font-mono'
            asChild
          >
            <Link href='/portfolio'>
              <ArrowLeft className='mr-2 h-4 w-4' />
              cd ../portfolio
            </Link>
          </Button>
        </div>
      </section>

      {/* Hero Section */}
      {project.designImages?.hero?.asset?.url && (
        <section className='relative h-[60vh] overflow-hidden'>
          <img
            src={project.designImages.hero.asset.url}
            alt={project.title || ''}
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent'></div>
          <div className='absolute bottom-0 left-0 right-0 p-12'>
            <div className='max-w-6xl mx-auto'>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className='flex items-center gap-3 mb-4'>
                  <Badge className='bg-[#00BCD4] text-white border-0 font-mono'>
                    {project.category}
                  </Badge>
                  {project.services?.map((service, index) => (
                    <Badge
                      key={index}
                      variant='outline'
                      className='border-white text-white font-mono'
                    >
                      {service}
                    </Badge>
                  ))}
                </div>
                <h1 className='text-5xl font-bold text-white mb-3 leading-tight'>
                  {project.title}
                </h1>
                <p className='text-2xl text-gray-200 mb-6'>
                  {project.subtitle}
                </p>
                <div className='flex flex-wrap gap-6 text-sm text-gray-300'>
                  <div className='flex items-center gap-2'>
                    <Calendar className='h-4 w-4' />
                    <span>{project.deliveryDate || project.date}</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Users className='h-4 w-4' />
                    <span>{project.team || project.duration}</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Palette className='h-4 w-4' />
                    <span>{project.duration}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Overview */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-6xl mx-auto px-6'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='grid grid-cols-1 lg:grid-cols-3 gap-8'
          >
            <div className='lg:col-span-2'>
              <h2 className='text-3xl font-bold text-gray-900 mb-4'>
                Project Overview
              </h2>
              <p className='text-lg text-gray-700 leading-relaxed mb-6'>
                {project.designOverview || project.overview}
              </p>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <h3 className='text-xl font-bold text-gray-900 mb-3'>
                    The Challenge
                  </h3>
                  <p className='text-gray-600 leading-relaxed'>
                    {project.designChallenge || project.challenge}
                  </p>
                </div>
                <div>
                  <h3 className='text-xl font-bold text-gray-900 mb-3'>
                    Our Solution
                  </h3>
                  <p className='text-gray-600 leading-relaxed'>
                    {project.designSolution || project.solution}
                  </p>
                </div>
              </div>
            </div>

            {/* Design Principles Card */}
            {project.designPrinciples &&
              project.designPrinciples.length > 0 && (
                <div className='bg-white rounded-lg border-2 border-gray-200 p-6'>
                  <h3 className='font-bold text-gray-900 mb-4 flex items-center gap-2'>
                    <Palette className='h-5 w-5 text-[#00BCD4]' />
                    Design Principles
                  </h3>
                  <div className='space-y-4'>
                    {project.designPrinciples.map((principle, index) => {
                      const IconComponent =
                        principleIcons[principle.title || ''] || Layers
                      return (
                        <div key={index} className='flex gap-3'>
                          <div className='w-10 h-10 rounded bg-gray-100 flex items-center justify-center flex-shrink-0 text-[#00BCD4]'>
                            <IconComponent className='h-5 w-5' />
                          </div>
                          <div>
                            <h4 className='font-semibold text-gray-900 text-sm'>
                              {principle.title}
                            </h4>
                            <p className='text-xs text-gray-600 mt-1'>
                              {principle.description}
                            </p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}
          </motion.div>
        </div>
      </section>

      {/* Brand Identity Showcase */}
      <section className='py-16'>
        <div className='max-w-6xl mx-auto px-6'>
          <h2 className='text-3xl font-bold text-gray-900 mb-12 text-center'>
            Brand Identity Elements
          </h2>

          <Tabs defaultValue='logo' className='w-full'>
            <TabsList className='grid grid-cols-5 w-full max-w-3xl mx-auto mb-8'>
              <TabsTrigger value='logo'>Logo</TabsTrigger>
              <TabsTrigger value='colors'>Colors</TabsTrigger>
              <TabsTrigger value='typography'>Type</TabsTrigger>
              <TabsTrigger value='components'>UI</TabsTrigger>
              <TabsTrigger value='mockups'>Mockups</TabsTrigger>
            </TabsList>

            <TabsContent value='logo' className='mt-8'>
              {project.designImages?.logo?.asset?.url && (
                <Card className='border-2 border-gray-200 overflow-hidden'>
                  <img
                    src={project.designImages.logo.asset.url}
                    alt='Logo variations'
                    className='w-full h-auto'
                  />
                </Card>
              )}
            </TabsContent>

            <TabsContent value='colors' className='mt-8'>
              <div className='space-y-6'>
                {project.designImages?.colors?.asset?.url && (
                  <Card className='border-2 border-gray-200 overflow-hidden'>
                    <img
                      src={project.designImages.colors.asset.url}
                      alt='Color palette'
                      className='w-full h-auto'
                    />
                  </Card>
                )}
                {project.brandColors && project.brandColors.length > 0 && (
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
                    {project.brandColors.map((color, index) => (
                      <Card key={index} className='border-2 border-gray-200'>
                        <CardContent className='p-4'>
                          <div
                            className='w-full h-24 rounded mb-3'
                            style={{ backgroundColor: color.hex || '#000' }}
                          ></div>
                          <h4 className='font-semibold text-gray-900 text-sm mb-1'>
                            {color.name}
                          </h4>
                          <p className='text-xs font-mono text-gray-600 mb-2'>
                            {color.hex}
                          </p>
                          <p className='text-xs text-gray-500'>{color.usage}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value='typography' className='mt-8'>
              {project.designImages?.typography?.asset?.url && (
                <Card className='border-2 border-gray-200 overflow-hidden mb-6'>
                  <img
                    src={project.designImages.typography.asset.url}
                    alt='Typography system'
                    className='w-full h-auto'
                  />
                </Card>
              )}
              {project.typography && (
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                  {project.typography.primary && (
                    <Card className='border-2 border-gray-200'>
                      <CardContent className='p-6 text-center'>
                        <p
                          className='text-4xl font-bold mb-2'
                          style={{ fontFamily: project.typography.primary }}
                        >
                          Aa
                        </p>
                        <h4 className='font-semibold text-gray-900 text-sm'>
                          {project.typography.primary}
                        </h4>
                        <p className='text-xs text-gray-500'>Primary Font</p>
                      </CardContent>
                    </Card>
                  )}
                  {project.typography.secondary && (
                    <Card className='border-2 border-gray-200'>
                      <CardContent className='p-6 text-center'>
                        <p
                          className='text-4xl font-bold mb-2'
                          style={{ fontFamily: project.typography.secondary }}
                        >
                          Aa
                        </p>
                        <h4 className='font-semibold text-gray-900 text-sm'>
                          {project.typography.secondary}
                        </h4>
                        <p className='text-xs text-gray-500'>Secondary Font</p>
                      </CardContent>
                    </Card>
                  )}
                  {project.typography.mono && (
                    <Card className='border-2 border-gray-200'>
                      <CardContent className='p-6 text-center'>
                        <p
                          className='text-4xl font-bold mb-2'
                          style={{ fontFamily: project.typography.mono }}
                        >
                          Aa
                        </p>
                        <h4 className='font-semibold text-gray-900 text-sm'>
                          {project.typography.mono}
                        </h4>
                        <p className='text-xs text-gray-500'>Monospace Font</p>
                      </CardContent>
                    </Card>
                  )}
                </div>
              )}
            </TabsContent>

            <TabsContent value='components' className='mt-8'>
              {project.designImages?.components?.asset?.url && (
                <Card className='border-2 border-gray-200 overflow-hidden'>
                  <img
                    src={project.designImages.components.asset.url}
                    alt='UI components'
                    className='w-full h-auto'
                  />
                </Card>
              )}
            </TabsContent>

            <TabsContent value='mockups' className='mt-8'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {project.designImages?.mockups?.asset?.url && (
                  <Card className='border-2 border-gray-200 overflow-hidden'>
                    <img
                      src={project.designImages.mockups.asset.url}
                      alt='Brand mockups'
                      className='w-full h-auto'
                    />
                  </Card>
                )}
                {project.designImages?.marketing?.asset?.url && (
                  <Card className='border-2 border-gray-200 overflow-hidden'>
                    <img
                      src={project.designImages.marketing.asset.url}
                      alt='Marketing materials'
                      className='w-full h-auto'
                    />
                  </Card>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Deliverables */}
      {project.deliverables && project.deliverables.length > 0 && (
        <section className='py-16 bg-gray-50'>
          <div className='max-w-6xl mx-auto px-6'>
            <h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>
              Project Deliverables
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {project.deliverables.map((deliverable, index) => (
                <Card key={index} className='border-2 border-gray-200'>
                  <CardContent className='p-4 flex items-start gap-3'>
                    <Download className='h-5 w-5 text-[#00BCD4] flex-shrink-0 mt-0.5' />
                    <span className='text-gray-700'>{deliverable}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Impact */}
      {project.impactMetrics && project.impactMetrics.length > 0 && (
        <section className='py-16'>
          <div className='max-w-6xl mx-auto px-6'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-4'>
                Project Impact
              </h2>
              {project.impactDescription && (
                <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
                  {project.impactDescription}
                </p>
              )}
            </div>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
              {project.impactMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className='text-center'
                >
                  <div className='text-4xl font-bold text-[#00BCD4] font-mono mb-2'>
                    {metric.value}
                  </div>
                  <div className='text-gray-600'>{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonial */}
      {project.testimonial && (
        <section className='py-16 bg-gray-50'>
          <div className='max-w-4xl mx-auto px-6'>
            <Card className='border-2 border-gray-200'>
              <CardContent className='p-8'>
                <Palette className='h-12 w-12 text-[#00BCD4] mb-6' />
                <blockquote className='text-2xl text-gray-700 leading-relaxed mb-6'>
                  &quot;{project.testimonial.quote}&quot;
                </blockquote>
                <div className='flex items-center gap-4'>
                  {project.testimonial.avatar?.asset?.url && (
                    <img
                      src={project.testimonial.avatar.asset.url}
                      alt={project.testimonial.author || ''}
                      className='w-16 h-16 rounded-full object-cover'
                    />
                  )}
                  <div>
                    <div className='font-semibold text-gray-900 text-lg'>
                      {project.testimonial.author}
                    </div>
                    <div className='text-gray-600'>
                      {project.testimonial.position}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className='py-16 bg-gray-900 text-white'>
        <div className='max-w-6xl mx-auto px-6 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className='text-3xl font-bold mb-4'>
              Need Brand Identity Design?
            </h2>
            <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
              Let&apos;s create a powerful brand identity that sets you apart
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button
                className='bg-[#00BCD4] hover:bg-[#4CAF50] text-white px-8 py-3 text-base font-medium'
                asChild
              >
                <Link href='/contact'>
                  Start Your Project
                  <Palette className='ml-2 h-4 w-4' />
                </Link>
              </Button>
              <Button
                variant='outline'
                className='border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-[#00BCD4] px-8 py-3 text-base font-medium'
                asChild
              >
                <Link href='/portfolio'>
                  View More Projects
                  <ExternalLink className='ml-2 h-4 w-4' />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
