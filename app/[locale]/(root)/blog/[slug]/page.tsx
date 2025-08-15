'use client'

import { useParams } from 'next/navigation'
import { motion, MotionProps } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { AspectRatio } from '@/components/ui/aspect-ratio'

interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  image: string
  author: string
  date: string
  category: string
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'introduction-cryptocurrency',
    title: 'Introduction to Cryptocurrency in Francophone Africa',
    excerpt:
      'Learn how cryptocurrency is transforming financial access in Francophone Africa.',
    content: `
      <p>Cryptocurrency is revolutionizing financial systems across the globe, and Francophone Africa is no exception. With limited access to traditional banking, many individuals and businesses in the region are turning to digital currencies to facilitate transactions, save money, and access global markets.</p>
      <p>Abokyh is at the forefront of this transformation, providing a platform that enables users to spend cryptocurrency on everyday purchases like mobile top-ups, utility payments, and gift cards. Our mission is to make crypto accessible and practical for everyone in Francophone Africa.</p>
      <p>In this article, we explore the rise of cryptocurrency in the region, the challenges it addresses, and how Abokyh is bridging the gap between digital assets and real-world spending.</p>
      <h2>Why Cryptocurrency Matters</h2>
      <p>Cryptocurrencies like Bitcoin and Ethereum offer a decentralized alternative to traditional banking, which is critical in areas with underdeveloped financial infrastructure. They enable fast, secure, and low-cost transactions, empowering users to participate in the global economy.</p>
      <p>Stay tuned for more insights on how Abokyh is driving financial inclusion through innovative crypto solutions.</p>
    `,
    image: '/images/post-image.jpg',
    author: 'John Doe',
    date: 'August 10, 2025',
    category: 'Cryptocurrency',
  },
  {
    id: '2',
    slug: 'abokyh-guide',
    title: 'How to Use Abokyh for Everyday Payments',
    excerpt:
      'A step-by-step guide to using Abokyh for mobile top-ups and utility payments.',
    content: `
      <p>Abokyh makes it easy to use cryptocurrency for everyday purchases. This guide walks you through the steps to top up your mobile phone or pay utility bills using our platform.</p>
      <p>From setting up your wallet to completing a transaction, we cover everything you need to know to get started with Abokyh.</p>
      <h2>Step-by-Step Instructions</h2>
      <p>1. Create an account on Abokyh.<br>2. Link your crypto wallet.<br>3. Choose a service (e.g., mobile top-up or utility payment).<br>4. Complete the transaction with your preferred cryptocurrency.</p>
      <p>Join thousands of users in Francophone Africa who are simplifying payments with Abokyh.</p>
    `,
    image: '/images/blog/abokyh-guide.jpg',
    author: 'Jane Smith',
    date: 'August 5, 2025',
    category: 'Payments',
  },
  // Add more posts as needed
]

const BlogDetailsPage = () => {
  const { slug } = useParams<{ slug: string }>()
  const post = blogPosts.find((p) => p.slug === slug)

  const motionProps: MotionProps = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  }

  if (!post) {
    return (
      <main className='bg-gradient-to-r from-[#00BCD4] to-[#4CAF50] min-h-screen text-white'>
        <section className='py-16 md:py-24'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center'>
              <motion.div {...motionProps}>
                <h1 className='text-4xl md:text-5xl font-bold mb-6'>
                  Post Not Found
                </h1>
                <p className='text-xl text-white text-opacity-90 max-w-3xl mx-auto'>
                  Sorry, we couldn’t find the blog post you’re looking for.
                </p>
                <Button
                  className='mt-8 bg-[#00BCD4] hover:bg-[#4CAF50] text-white text-lg px-8 py-6'
                  asChild
                >
                  <Link href='/blog'>Back to Blog</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className='bg-gradient-to-r from-[#00BCD4] to-[#4CAF50] min-h-screen text-white'>
      {/* Hero Section */}
      <section className='py-16 md:py-24'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <motion.div {...motionProps}>
              <h1 className='text-4xl md:text-5xl font-bold mb-6'>
                {post.title}
              </h1>
              <p className='text-xl text-white text-opacity-90 max-w-3xl mx-auto'>
                {post.excerpt}
              </p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='mt-12'
          >
            <AspectRatio ratio={16 / 9} className='max-w-5xl mx-auto'>
              <img
                src={post.image}
                alt={post.title}
                className='w-full h-full object-cover rounded-md border-2 border-[#00BCD4]'
              />
            </AspectRatio>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className='py-16 md:py-24 bg-white text-black'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <Card className='border-2 border-[#00BCD4] hover:border-[#4CAF50] transition duration-300 shadow-md'>
            <CardHeader>
              <CardTitle className='text-3xl text-black'>
                {post.title}
              </CardTitle>
              <CardDescription className='text-gray-700'>
                By {post.author} | {post.date} | {post.category}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Separator className='w-full h-1 bg-[#00BCD4] mb-6' />
              <div
                className='prose prose-lg text-gray-700 max-w-none'
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </CardContent>
          </Card>
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

export default BlogDetailsPage
