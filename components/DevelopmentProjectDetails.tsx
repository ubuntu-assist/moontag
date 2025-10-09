'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowLeft,
  Monitor,
  Code,
  CheckCircle,
  Globe,
  Github,
  ExternalLink,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Project } from '@/sanity/sanity.types'

interface DevelopmentProjectDetailsProps {
  project: Project
}

export default function DevelopmentProjectDetails({
  project,
}: DevelopmentProjectDetailsProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0)

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

      {/* Project Header */}
      <section className='py-16 bg-gray-50 border-b border-gray-200'>
        <div className='max-w-6xl mx-auto px-6'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='grid grid-cols-1 lg:grid-cols-3 gap-8'
          >
            {/* Main Info */}
            <div className='lg:col-span-2'>
              <div className='flex items-center gap-3 mb-4'>
                <Badge className='bg-[#4CAF50] text-white border-0 font-mono'>
                  {project.status}
                </Badge>
                <Badge
                  variant='outline'
                  className='border-[#00BCD4] text-[#00BCD4] font-mono'
                >
                  {project.category}
                </Badge>
              </div>

              <h1 className='text-4xl font-bold text-gray-900 mb-4 leading-tight'>
                {project.title}
              </h1>

              <p className='text-xl text-gray-600 leading-relaxed mb-6'>
                {project.overview}
              </p>

              <div className='flex flex-wrap gap-4'>
                {project.url && (
                  <Button
                    className='bg-[#00BCD4] hover:bg-[#4CAF50] text-white'
                    asChild
                  >
                    <a
                      href={project.url}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Globe className='mr-2 h-4 w-4' />
                      View Live Site
                    </a>
                  </Button>
                )}

                {project.githubUrl && (
                  <Button
                    variant='outline'
                    className='border-gray-300 text-gray-700 hover:border-gray-900 hover:text-gray-900'
                    asChild
                  >
                    <a
                      href={project.githubUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Github className='mr-2 h-4 w-4' />
                      Source Code
                    </a>
                  </Button>
                )}
              </div>
            </div>

            {/* Project Meta */}
            <div className='bg-white rounded-lg border-2 border-gray-200 p-6'>
              <h3 className='font-bold text-gray-900 mb-4'>Project Details</h3>
              <div className='space-y-4 text-sm'>
                <div className='flex justify-between'>
                  <span className='text-gray-600'>Client:</span>
                  <span className='font-mono text-gray-900'>
                    {project.client}
                  </span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-600'>Duration:</span>
                  <span className='font-mono text-gray-900'>
                    {project.duration}
                  </span>
                </div>
                {project.team && (
                  <div className='flex justify-between'>
                    <span className='text-gray-600'>Team Size:</span>
                    <span className='font-mono text-gray-900'>
                      {project.team}
                    </span>
                  </div>
                )}
                {project.launchDate && (
                  <div className='flex justify-between'>
                    <span className='text-gray-600'>Launch Date:</span>
                    <span className='font-mono text-gray-900'>
                      {project.launchDate}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Images */}
      {project.projectImages && project.projectImages.length > 0 && (
        <section className='py-16'>
          <div className='max-w-6xl mx-auto px-6'>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
              {/* Main Image */}
              <div className='lg:col-span-3'>
                <div className='relative h-96 rounded-lg overflow-hidden border-2 border-gray-200'>
                  <img
                    src={
                      project.projectImages[activeImageIndex]?.asset?.url || ''
                    }
                    alt={
                      project.projectImages[activeImageIndex]?.alt ||
                      `${project.title} screenshot ${activeImageIndex + 1}`
                    }
                    className='w-full h-full object-cover'
                  />
                </div>
              </div>

              {/* Thumbnails */}
              <div className='space-y-4'>
                {project.projectImages.slice(0, 4).map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`w-full h-20 rounded border-2 overflow-hidden transition-all duration-200 ${
                      activeImageIndex === index
                        ? 'border-[#00BCD4]'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={image?.asset?.url || ''}
                      alt={
                        image?.alt || `${project.title} thumbnail ${index + 1}`
                      }
                      className='w-full h-full object-cover'
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Results */}
      {project.results && project.results.length > 0 && (
        <section className='py-16 bg-gray-50'>
          <div className='max-w-6xl mx-auto px-6'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-4'>
                Project Results
              </h2>
              <p className='text-lg text-gray-600'>
                Measurable impact and business outcomes
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
              {project.results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className='text-center'
                >
                  <div className='w-12 h-12 bg-[#00BCD4] text-white rounded-lg flex items-center justify-center mx-auto mb-4'>
                    <Monitor className='h-5 w-5' />
                  </div>
                  <div className='text-3xl font-bold text-gray-900 font-mono mb-2'>
                    {result.metric}
                  </div>
                  <div className='text-gray-600'>{result.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Project Details Tabs */}
      <section className='py-16'>
        <div className='max-w-6xl mx-auto px-6'>
          <Tabs defaultValue='overview' className='w-full'>
            <TabsList className='grid grid-cols-4 w-full max-w-md'>
              <TabsTrigger value='overview'>Overview</TabsTrigger>
              <TabsTrigger value='tech'>Tech Stack</TabsTrigger>
              <TabsTrigger value='features'>Features</TabsTrigger>
              <TabsTrigger value='testimonial'>Client</TabsTrigger>
            </TabsList>

            <TabsContent value='overview' className='mt-8'>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
                <div>
                  <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                    The Challenge
                  </h3>
                  <p className='text-gray-600 leading-relaxed'>
                    {project.challenge}
                  </p>
                </div>
                <div>
                  <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                    Our Solution
                  </h3>
                  <p className='text-gray-600 leading-relaxed'>
                    {project.solution}
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value='tech' className='mt-8'>
              {project.techStack && project.techStack.length > 0 ? (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                  {project.techStack.map((tech, index) => (
                    <Card
                      key={index}
                      className='border-2 border-gray-200 hover:border-[#00BCD4] transition-colors duration-200'
                    >
                      <CardContent className='p-4 text-center'>
                        <div className='w-10 h-10 bg-gray-900 text-white rounded flex items-center justify-center mx-auto mb-3'>
                          <Code className='h-4 w-4' />
                        </div>
                        <h4 className='font-semibold text-gray-900 mb-1'>
                          {tech.name}
                        </h4>
                        <p className='text-sm text-gray-600'>{tech.category}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className='flex flex-wrap gap-3'>
                  {project.technologies?.map((tech) => (
                    <Badge
                      key={tech}
                      variant='secondary'
                      className='text-sm font-mono px-4 py-2'
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              )}
            </TabsContent>

            <TabsContent value='features' className='mt-8'>
              {project.features && project.features.length > 0 ? (
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  {project.features.map((feature, index) => (
                    <div key={index} className='flex items-start gap-3'>
                      <CheckCircle className='h-5 w-5 text-[#4CAF50] flex-shrink-0 mt-0.5' />
                      <span className='text-gray-700'>{feature}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className='text-gray-600'>
                  No features listed for this project.
                </p>
              )}
            </TabsContent>

            <TabsContent value='testimonial' className='mt-8'>
              {project.testimonial ? (
                <Card className='border-2 border-gray-200 max-w-4xl mx-auto'>
                  <CardContent className='p-8'>
                    <blockquote className='text-xl text-gray-700 leading-relaxed mb-6'>
                      &quot;{project.testimonial.quote}&quot;
                    </blockquote>
                    <div className='flex items-center gap-4'>
                      {project.testimonial.avatar?.asset?.url && (
                        <img
                          src={project.testimonial.avatar.asset.url}
                          alt={project.testimonial.author || ''}
                          className='w-12 h-12 rounded-full object-cover'
                        />
                      )}
                      <div>
                        <div className='font-semibold text-gray-900'>
                          {project.testimonial.author}
                        </div>
                        <div className='text-gray-600 text-sm'>
                          {project.testimonial.position}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <p className='text-gray-600 text-center'>
                  No testimonial available.
                </p>
              )}
            </TabsContent>
          </Tabs>
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
              Let&apos;s discuss how we can help you achieve similar results for
              your business
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button
                className='bg-[#00BCD4] hover:bg-[#4CAF50] text-white px-8 py-3 text-base font-medium'
                asChild
              >
                <Link href='/contact'>
                  Get Started
                  <ExternalLink className='ml-2 h-4 w-4' />
                </Link>
              </Button>
              <Button
                variant='outline'
                className='border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-[#00BCD4] px-8 py-3 text-base font-medium'
                asChild
              >
                <Link href='/portfolio'>View More Projects</Link>
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
