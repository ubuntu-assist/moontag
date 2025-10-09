'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import {
  ArrowRight,
  Bookmark,
  Calendar,
  Clock,
  Code,
  Share2,
  User,
} from 'lucide-react'
import { BlogType } from '@/app/[locale]/blog/page'

interface BlogContentProps {
  featuredPost: BlogType | null
  paginatedPosts: BlogType[]
  selectedCategory: string
  currentPage: number
  totalPages: number
  categories: string[]
  totalPosts: number
}

export function BlogContent({
  featuredPost,
  paginatedPosts,
  selectedCategory,
  currentPage,
  totalPages,
  categories,
  totalPosts,
}: BlogContentProps) {
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
              <h1 className='text-4xl md:text-5xl font-bold'>Moontag Blog</h1>
              <Badge className='bg-[#00BCD4] text-white border-0 text-sm font-mono'>
                Tech Insights
              </Badge>
            </div>
            <p className='text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl'>
              Technical insights, development best practices, and industry
              analysis for building digital solutions across Africa. Written by
              our engineering team.
            </p>
            <div className='flex flex-wrap gap-8 text-sm font-mono'>
              <div className='flex items-center gap-2'>
                <div className='w-2 h-2 bg-green-400 rounded-full'></div>
                <span className='text-green-400'>Weekly Technical Posts</span>
              </div>
              <div className='flex items-center gap-2'>
                <div className='w-2 h-2 bg-[#00BCD4] rounded-full'></div>
                <span className='text-gray-300'>
                  {totalPosts} Articles Published
                </span>
              </div>
              <div className='flex items-center gap-2'>
                <div className='w-2 h-2 bg-[#4CAF50] rounded-full'></div>
                <span className='text-gray-300'>Engineering Team Authors</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section className='py-16 border-b border-gray-100 bg-gray-50'>
          <div className='max-w-6xl mx-auto px-6'>
            <div className='mb-8'>
              <h2 className='text-2xl font-bold text-gray-900 mb-2'>
                Featured Article
              </h2>
              <p className='text-gray-600'>
                Latest technical insights from our engineering team
              </p>
            </div>

            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className='group'
            >
              <Link
                href={`/blog/${featuredPost?.slug?.current}`}
                className='block'
              >
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white border-2 border-gray-200 hover:border-[#00BCD4] rounded-lg overflow-hidden transition-all duration-300'>
                  {/* Image Section */}
                  <div className='relative h-80 lg:h-full'>
                    <img
                      src={featuredPost?.image?.asset?.url}
                      alt={featuredPost?.image?.alt}
                      className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700'
                    />
                    <Badge className='absolute top-4 left-4 bg-[#00BCD4] hover:bg-[#00BCD4] text-white border-0 font-mono'>
                      FEATURED
                    </Badge>
                  </div>

                  {/* Content Section */}
                  <div className='p-8 flex flex-col justify-center'>
                    <div className='space-y-4'>
                      <div className='flex items-center gap-2'>
                        <Badge
                          variant='outline'
                          className='border-[#00BCD4] text-[#00BCD4] hover:bg-[#00BCD4] hover:text-white font-mono'
                        >
                          {featuredPost.category}
                        </Badge>
                        <div className='flex gap-2'>
                          {featuredPost?.tags?.slice(0, 2).map((tag) => (
                            <Badge
                              key={tag}
                              variant='secondary'
                              className='text-xs font-mono'
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <h3 className='text-2xl md:text-3xl font-bold text-gray-900 leading-tight group-hover:text-[#00BCD4] transition-colors duration-300'>
                        {featuredPost.title}
                      </h3>

                      <p className='text-gray-600 leading-relaxed'>
                        {featuredPost.excerpt}
                      </p>

                      <div className='flex items-center justify-between'>
                        <div className='flex items-center space-x-4 text-sm text-gray-500 font-mono'>
                          <div className='flex items-center space-x-2'>
                            <User className='h-4 w-4' />
                            <span>{featuredPost?.author?.name}</span>
                          </div>
                          <div className='flex items-center space-x-2'>
                            <Calendar className='h-4 w-4' />
                            <span>{featuredPost.date}</span>
                          </div>
                          <div className='flex items-center space-x-2'>
                            <Clock className='h-4 w-4' />
                            <span>{featuredPost.readTime}</span>
                          </div>
                        </div>

                        <div className='flex items-center gap-2'>
                          <Button
                            variant='ghost'
                            size='sm'
                            className='text-gray-500 hover:text-[#00BCD4]'
                          >
                            <Bookmark className='h-4 w-4' />
                          </Button>
                          <Button
                            variant='ghost'
                            size='sm'
                            className='text-gray-500 hover:text-[#4CAF50]'
                          >
                            <Share2 className='h-4 w-4' />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className='py-8 border-b border-gray-100'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='flex flex-wrap gap-3'>
            {categories.map((category) => (
              <Link
                key={category}
                href={`/blog?category=${category}`}
                className={`px-4 py-2 rounded font-mono text-sm font-medium transition-colors duration-300 ${
                  selectedCategory === category
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-[#00BCD4] hover:text-white'
                }`}
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className='py-16'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {paginatedPosts.map((post, index) => (
              <motion.article
                key={post._id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='group'
              >
                <Link
                  href={`/blog/${post.slug!.current}`}
                  className='block h-full'
                >
                  <div className='border-2 border-gray-200 hover:border-[#00BCD4] rounded-lg overflow-hidden bg-white transition-all duration-300 h-full flex flex-col'>
                    <div className='relative h-48'>
                      <img
                        src={post?.image?.asset?.url}
                        alt={post?.image?.alt}
                        className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                      />
                    </div>

                    <div className='p-6 flex-1 flex flex-col'>
                      <div className='space-y-4 flex-1'>
                        <div className='flex items-center gap-2'>
                          <Badge
                            variant='outline'
                            className='border-[#4CAF50] text-[#4CAF50] hover:bg-[#4CAF50] hover:text-white font-mono'
                          >
                            {post.category}
                          </Badge>
                        </div>

                        <h3 className='text-lg font-bold text-gray-900 leading-tight group-hover:text-[#00BCD4] transition-colors duration-300'>
                          {post.title}
                        </h3>

                        <p className='text-gray-600 leading-relaxed text-sm line-clamp-3'>
                          {post.excerpt}
                        </p>

                        <div className='flex flex-wrap gap-1'>
                          {post.tags!.slice(0, 3).map((tag) => (
                            <Badge
                              key={tag}
                              variant='secondary'
                              className='text-xs font-mono'
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className='mt-6 pt-4 border-t border-gray-100'>
                        <div className='flex items-center justify-between'>
                          <div className='flex items-center space-x-3 text-xs text-gray-500 font-mono'>
                            <div className='flex items-center space-x-1'>
                              <User className='h-3 w-3' />
                              <span>{post?.author?.name}</span>
                            </div>
                            <div className='flex items-center space-x-1'>
                              <Clock className='h-3 w-3' />
                              <span>{post.readTime}</span>
                            </div>
                          </div>

                          <ArrowRight className='h-4 w-4 text-[#00BCD4] group-hover:translate-x-1 transition-transform duration-300' />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className='mt-16 pt-8 border-t border-gray-100'>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      className='text-gray-600 hover:text-[#00BCD4] hover:bg-gray-50 border-0'
                      href={`/blog?category=${selectedCategory}&page=${Math.max(currentPage - 1, 1)}`}
                    />
                  </PaginationItem>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <PaginationItem key={page}>
                        <PaginationLink
                          className={`border-0 font-mono ${
                            currentPage === page
                              ? 'bg-gray-900 text-white hover:bg-gray-900'
                              : 'text-gray-600 hover:text-[#00BCD4] hover:bg-gray-50'
                          }`}
                          href={`/blog?category=${selectedCategory}&page=${page}`}
                          isActive={currentPage === page}
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    )
                  )}
                  <PaginationItem>
                    <PaginationNext
                      className='text-gray-600 hover:text-[#00BCD4] hover:bg-gray-50 border-0'
                      href={`/blog?category=${selectedCategory}&page=${Math.min(currentPage + 1, totalPages)}`}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className='py-16 bg-gray-900 text-white'>
        <div className='max-w-6xl mx-auto px-6 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className='text-3xl font-bold mb-4'>Stay Updated</h2>
            <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
              Get the latest technical insights and development best practices
              delivered to your inbox
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button
                className='bg-[#00BCD4] hover:bg-[#4CAF50] text-white px-8 py-3 text-base font-medium'
                asChild
              >
                <Link href='/subscribe'>
                  <Code className='mr-2 h-4 w-4' />
                  Subscribe to Updates
                </Link>
              </Button>
              <Button
                variant='outline'
                className='border-gray-600 text-gray-700 hover:text-gray-300 hover:bg-gray-800 hover:border-[#00BCD4] px-8 py-3 text-base font-medium'
                asChild
              >
                <Link href='/contact'>Contact Our Team</Link>
              </Button>
            </div>
            <div className='mt-8 text-sm text-gray-400 font-mono'>
              Technical insights from the African tech ecosystem
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
