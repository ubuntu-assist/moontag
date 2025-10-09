'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowLeft,
  Camera,
  MapPin,
  Calendar,
  X,
  ChevronLeft,
  ChevronRight,
  Image,
  Download,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Project } from '@/sanity/sanity.types'

interface PhotographyProjectDetailsProps {
  project: Project
}

export default function PhotographyProjectDetails({
  project,
}: PhotographyProjectDetailsProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  )

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedImageIndex(null)
    document.body.style.overflow = 'unset'
  }

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImageIndex === null || !project.gallery) return

    if (direction === 'prev') {
      setSelectedImageIndex(
        selectedImageIndex === 0
          ? project.gallery.length - 1
          : selectedImageIndex - 1
      )
    } else {
      setSelectedImageIndex(
        selectedImageIndex === project.gallery.length - 1
          ? 0
          : selectedImageIndex + 1
      )
    }
  }

  const downloadImage = async (imageUrl: string, imageName: string) => {
    try {
      const response = await fetch(imageUrl)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = imageName || 'image.jpg'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Error downloading image:', error)
    }
  }

  const handleDownloadFromLightbox = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedImageIndex !== null && project.gallery) {
      const currentImage = project.gallery[selectedImageIndex]
      const imageUrl = currentImage?.image?.asset?.url
      const imageName = currentImage?.caption
        ? `${currentImage.caption.replace(/[^a-z0-9]/gi, '-').toLowerCase()}.jpg`
        : `image-${selectedImageIndex + 1}.jpg`

      if (imageUrl) {
        downloadImage(imageUrl, imageName)
      }
    }
  }

  return (
    <main className='bg-white min-h-screen'>
      {/* Navigation */}
      <section className='bg-gray-900 text-white border-b-4 border-[#00BCD4]'>
        <div className='max-w-7xl mx-auto px-6 pt-24 pb-6'>
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
      <section className='py-16 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-6'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className='flex items-center gap-3 mb-4'>
              <Badge className='bg-[#00BCD4] text-white border-0 font-mono'>
                {project.category}
              </Badge>
              {project.style && (
                <Badge
                  variant='outline'
                  className='border-[#4CAF50] text-[#4CAF50] font-mono'
                >
                  {project.style}
                </Badge>
              )}
            </div>

            <h1 className='text-5xl font-bold text-gray-900 mb-3 leading-tight'>
              {project.title}
            </h1>

            {project.subtitle && (
              <p className='text-2xl text-gray-600 mb-8'>{project.subtitle}</p>
            )}

            <div className='flex flex-wrap gap-6 text-sm'>
              {project.location && (
                <div className='flex items-center gap-2 text-gray-600'>
                  <MapPin className='h-4 w-4 text-[#00BCD4]' />
                  <span>{project.location}</span>
                </div>
              )}
              {project.date && (
                <div className='flex items-center gap-2 text-gray-600'>
                  <Calendar className='h-4 w-4 text-[#00BCD4]' />
                  <span>{project.date}</span>
                </div>
              )}
              {project.equipment && (
                <div className='flex items-center gap-2 text-gray-600'>
                  <Camera className='h-4 w-4 text-[#00BCD4]' />
                  <span>{project.equipment}</span>
                </div>
              )}
              {project.gallery && (
                <div className='flex items-center gap-2 text-gray-600'>
                  <Image className='h-4 w-4 text-[#00BCD4]' />
                  <span>{project.gallery.length} Images</span>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Photo Grid */}
      {project.gallery && project.gallery.length > 0 && (
        <section className='py-16'>
          <div className='max-w-7xl mx-auto px-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {project.gallery.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className='group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer'
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={item?.image?.asset?.url || ''}
                    alt={item?.alt || item?.caption || ''}
                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <div className='absolute bottom-0 left-0 right-0 p-4'>
                      {item?.caption && (
                        <p className='text-white text-sm font-medium'>
                          {item.caption}
                        </p>
                      )}
                      {item?.location && (
                        <p className='text-gray-300 text-xs'>{item.location}</p>
                      )}
                    </div>
                    {/* Download button on grid item */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        const imageUrl = item?.image?.asset?.url
                        const imageName = item?.caption
                          ? `${item.caption.replace(/[^a-z0-9]/gi, '-').toLowerCase()}.jpg`
                          : `image-${index + 1}.jpg`
                        if (imageUrl) {
                          downloadImage(imageUrl, imageName)
                        }
                      }}
                      className='absolute top-4 right-4 p-2 bg-white/90 hover:bg-white rounded-full transition-colors duration-200'
                    >
                      <Download className='h-4 w-4 text-gray-900' />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Project Story */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-4xl mx-auto px-6'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='space-y-12'
          >
            {/* Story */}
            {project.story && (
              <div>
                <h2 className='text-3xl font-bold text-gray-900 mb-4'>
                  The Story
                </h2>
                <p className='text-lg text-gray-700 leading-relaxed'>
                  {project.story}
                </p>
              </div>
            )}

            {/* Approach */}
            {project.approach && (
              <div>
                <h2 className='text-3xl font-bold text-gray-900 mb-4'>
                  My Approach
                </h2>
                <p className='text-lg text-gray-700 leading-relaxed'>
                  {project.approach}
                </p>
              </div>
            )}

            {/* Impact */}
            {project.impact && (
              <div>
                <h2 className='text-3xl font-bold text-gray-900 mb-4'>
                  Impact
                </h2>
                <p className='text-lg text-gray-700 leading-relaxed mb-6'>
                  {project.impact}
                </p>

                {/* Featured In */}
                {project.featured && project.featured.length > 0 && (
                  <div className='bg-white rounded-lg border-2 border-gray-200 p-6'>
                    <h3 className='font-bold text-gray-900 mb-4'>
                      Featured In:
                    </h3>
                    <div className='space-y-2'>
                      {project.featured.map((publication, index) => (
                        <div key={index} className='flex items-center gap-2'>
                          <div className='w-2 h-2 bg-[#00BCD4] rounded-full'></div>
                          <span className='text-gray-700'>{publication}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Testimonial */}
            {project.testimonial && (
              <Card className='border-2 border-gray-200'>
                <CardContent className='p-8'>
                  <div className='flex items-start gap-4 mb-4'>
                    <Camera className='h-8 w-8 text-[#00BCD4] flex-shrink-0' />
                    <blockquote className='text-xl text-gray-700 leading-relaxed italic'>
                      &quot;{project.testimonial.quote}&quot;
                    </blockquote>
                  </div>
                  <div className='flex items-center gap-4 ml-12'>
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
            )}
          </motion.div>
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
              Need Photography Services?
            </h2>
            <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
              Let&apos;s create stunning visual stories together
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button
                className='bg-[#00BCD4] hover:bg-[#4CAF50] text-white px-8 py-3 text-base font-medium'
                asChild
              >
                <Link href='/contact'>
                  Get in Touch
                  <Camera className='ml-2 h-4 w-4' />
                </Link>
              </Button>
              <Button
                variant='outline'
                className='border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-[#00BCD4] px-8 py-3 text-base font-medium'
                asChild
              >
                <Link href='/portfolio'>View More Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImageIndex !== null && project.gallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-black/95 z-50 flex items-center justify-center'
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className='absolute top-6 right-6 text-white hover:text-[#00BCD4] transition-colors z-10'
            >
              <X className='h-8 w-8' />
            </button>

            {/* Download Button */}
            <button
              onClick={handleDownloadFromLightbox}
              className='absolute top-6 right-20 text-white hover:text-[#00BCD4] transition-colors z-10'
            >
              <Download className='h-8 w-8' />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                navigateImage('prev')
              }}
              className='absolute left-6 text-white hover:text-[#00BCD4] transition-colors'
            >
              <ChevronLeft className='h-12 w-12' />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                navigateImage('next')
              }}
              className='absolute right-6 text-white hover:text-[#00BCD4] transition-colors'
            >
              <ChevronRight className='h-12 w-12' />
            </button>

            {/* Image */}
            <motion.div
              key={selectedImageIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className='max-w-7xl max-h-[90vh] mx-auto px-20'
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={
                  project.gallery[selectedImageIndex]?.image?.asset?.url || ''
                }
                alt={
                  project.gallery[selectedImageIndex]?.alt ||
                  project.gallery[selectedImageIndex]?.caption ||
                  ''
                }
                className='max-w-full max-h-[80vh] object-contain'
              />
              <div className='text-center mt-4'>
                {project.gallery[selectedImageIndex]?.caption && (
                  <p className='text-white text-lg font-medium'>
                    {project.gallery[selectedImageIndex].caption}
                  </p>
                )}
                {project.gallery[selectedImageIndex]?.location && (
                  <p className='text-gray-400 text-sm'>
                    {project.gallery[selectedImageIndex].location}
                  </p>
                )}
                <p className='text-gray-500 text-xs mt-2 font-mono'>
                  {selectedImageIndex + 1} / {project.gallery.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
