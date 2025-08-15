'use client'

import { useState } from 'react'
import { motion, MotionProps } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { Separator } from '@/components/ui/separator'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  image: string
  link: string
  category: string
}

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [currentPage, setCurrentPage] = useState<number>(1)
  const postsPerPage = 6

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Introduction to Cryptocurrency in Francophone Africa',
      excerpt:
        'Learn how cryptocurrency is transforming financial access in Francophone Africa.',
      image: '/images/post-image.jpg',
      link: '/blog/introduction-cryptocurrency',
      category: 'Cryptocurrency',
    },
    {
      id: '2',
      title: 'How to Use Abokyh for Everyday Payments',
      excerpt:
        'A step-by-step guide to using Abokyh for mobile top-ups and utility payments.',
      image: '/images/blog/abokyh-guide.jpg',
      link: '/blog/abokyh-guide',
      category: 'Payments',
    },
    {
      id: '3',
      title: 'The Future of Blockchain in Africa',
      excerpt:
        'Explore the potential of blockchain technology in driving economic growth in Africa.',
      image: '/images/blog/blockchain-future.jpg',
      link: '/blog/blockchain-future',
      category: 'Blockchain',
    },
    {
      id: '4',
      title: 'Why Gift Cards Are the Future of Crypto Spending',
      excerpt:
        'Discover how gift cards bridge the gap between crypto and everyday purchases.',
      image: '/images/blog/gift-cards.jpg',
      link: '/blog/gift-cards',
      category: 'Payments',
    },
    {
      id: '5',
      title: 'Securing Your Crypto Transactions',
      excerpt:
        'Tips and best practices for keeping your cryptocurrency transactions safe.',
      image: '/images/blog/crypto-security.jpg',
      link: '/blog/crypto-security',
      category: 'Cryptocurrency',
    },
    {
      id: '6',
      title: 'Blockchain for Financial Inclusion',
      excerpt:
        'How blockchain can empower unbanked communities in Francophone Africa.',
      image: '/images/blog/financial-inclusion.jpg',
      link: '/blog/financial-inclusion',
      category: 'Blockchain',
    },
    {
      id: '7',
      title: 'Abokyh’s Partnership Model Explained',
      excerpt:
        'Understand how businesses can partner with Abokyh to accept crypto payments.',
      image: '/images/blog/partnership-model.jpg',
      link: '/blog/partnership-model',
      category: 'Payments',
    },
  ]

  const featuredPost: BlogPost = blogPosts[0] // First post as featured

  const categories = ['All', 'Cryptocurrency', 'Blockchain', 'Payments']

  const filteredPosts =
    selectedCategory === 'All'
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory)

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  )

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

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
                Abokyh Blog
              </h1>
              <p className='text-xl text-white text-opacity-90 max-w-3xl mx-auto'>
                Stay updated with the latest insights on cryptocurrency,
                blockchain, and financial inclusion in Francophone Africa.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Post Section */}
      <section className='py-16 md:py-24'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold'>Featured Post</h2>
            <Separator className='w-20 h-1 bg-white mx-auto mt-4' />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className='bg-white border-2 border-[#00BCD4] hover:border-[#4CAF50] transition duration-300 shadow-md'>
              <CardContent className='p-8 flex flex-col md:flex-row gap-8'>
                <div className='md:w-1/2'>
                  <div className='relative h-64 rounded-md overflow-hidden'>
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className='w-full h-full object-cover'
                    />
                  </div>
                </div>
                <div className='md:w-1/2 flex flex-col justify-center'>
                  <CardHeader>
                    <CardTitle className='text-2xl text-black'>
                      {featuredPost.title}
                    </CardTitle>
                    <CardDescription className='text-gray-700'>
                      {featuredPost.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <Button
                    className='bg-[#00BCD4] hover:bg-[#4CAF50] text-white w-fit mt-4'
                    asChild
                  >
                    <Link href={featuredPost.link}>
                      Read More
                      <ArrowRight className='ml-2 h-4 w-4' />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className='py-16 md:py-24 bg-white text-black'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold'>Latest Posts</h2>
            <Separator className='w-20 h-1 bg-[#00BCD4] mx-auto mt-4' />
            <p className='mt-4 text-xl text-gray-700'>
              Explore our blog for tips, guides, and news about using
              cryptocurrency in everyday life.
            </p>
          </div>

          {/* Category Filters */}
          <Tabs
            value={selectedCategory}
            onValueChange={setSelectedCategory}
            className='mb-8'
          >
            <TabsList className='flex justify-center gap-4 bg-transparent'>
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className={`${
                    selectedCategory === category
                      ? 'bg-[#00BCD4] text-white'
                      : 'border-2 border-[#00BCD4] text-[#00BCD4] bg-white'
                  } px-4 py-2 rounded-md hover:bg-[#4CAF50] hover:text-white data-[state=active]:bg-[#00BCD4] data-[state=active]:text-white`}
                  onClick={() => setCurrentPage(1)}
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          {/* Blog Posts Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {paginatedPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className='h-full hover:shadow-lg transition-shadow duration-300 border-2 border-[#00BCD4] hover:border-[#4CAF50]'>
                  <CardContent className='p-6'>
                    <div className='relative h-48 mb-4 rounded-md overflow-hidden'>
                      <img
                        src={post.image}
                        alt={post.title}
                        className='w-full h-full object-cover'
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className='text-xl text-black'>
                        {post.title}
                      </CardTitle>
                      <CardDescription className='text-gray-700'>
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <Button
                      className='bg-[#00BCD4] hover:bg-[#4CAF50] text-white'
                      asChild
                    >
                      <Link href={post.link}>
                        Read More
                        <ArrowRight className='ml-2 h-4 w-4' />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          <Pagination className='mt-12'>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  className='border-2 border-[#00BCD4] text-[#00BCD4] hover:bg-[#00BCD4] hover:text-white'
                  onClick={() => handlePageChange(currentPage - 1)}
                  // disabled={currentPage === 1}
                />
              </PaginationItem>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      className={`${
                        currentPage === page
                          ? 'bg-[#00BCD4] text-white'
                          : 'border-2 border-[#00BCD4] text-[#00BCD4]'
                      } hover:bg-[#4CAF50] hover:text-white`}
                      onClick={() => handlePageChange(page)}
                      isActive={currentPage === page}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                )
              )}
              <PaginationItem>
                <PaginationNext
                  className='border-2 border-[#00BCD4] text-[#00BCD4] hover:bg-[#00BCD4] hover:text-white'
                  onClick={() => handlePageChange(currentPage + 1)}
                  // disabled={currentPage === totalPages}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-16 md:py-24'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.div {...motionProps}>
            <h2 className='text-3xl md:text-4xl font-bold mb-6'>
              Stay Informed with Abokyh
            </h2>
            <Separator className='w-20 h-1 bg-white mx-auto mb-8' />
            <p className='text-xl mb-8 max-w-3xl mx-auto text-white text-opacity-90'>
              Subscribe to our blog or contact our team to learn more about how
              Abokyh is revolutionizing crypto payments in Francophone Africa.
            </p>
            <div className='flex flex-col sm:flex-row justify-center gap-4'>
              <Button
                className='bg-[#00BCD4] hover:bg-[#4CAF50] text-white text-lg px-8 py-6'
                asChild
              >
                <Link href='/subscribe'>Subscribe to Blog</Link>
              </Button>
              <Button
                variant='outline'
                className='border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#00BCD4] text-lg px-8 py-6'
                asChild
              >
                <Link href='/contact'>Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default BlogPage
