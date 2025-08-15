'use client'

import { motion, MotionProps } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Button } from '@/components/ui/button'

interface PortfolioItem {
  id: string
  title: string
  description: string
  image: string
  link: string
}

const PortfolioPage = () => {
  const portfolioItems: PortfolioItem[] = [
    {
      id: '1',
      title: 'Mobile Top-Up Integration',
      description:
        'Partnered with regional telecom providers to enable seamless cryptocurrency-based mobile top-ups across Francophone Africa.',
      image: '/images/portfolio/mobile-topup.jpg',
      link: '/portfolio/mobile-topup',
    },
    {
      id: '2',
      title: 'Utility Payment Platform',
      description:
        'Developed a platform for paying utility bills with cryptocurrency, simplifying access for unbanked communities.',
      image: '/images/portfolio/utility-payments.jpg',
      link: '/portfolio/utility-payments',
    },
    {
      id: '3',
      title: 'Gift Card Marketplace',
      description:
        'Created a marketplace for purchasing gift cards with cryptocurrency, expanding spending options for users.',
      image: '/images/portfolio/gift-cards.jpg',
      link: '/portfolio/gift-cards',
    },
    {
      id: '4',
      title: 'Blockchain Education Initiative',
      description:
        'Launched an educational campaign to promote blockchain literacy in Francophone Africa, in collaboration with local partners.',
      image: '/images/portfolio/blockchain-education.jpg',
      link: '/portfolio/blockchain-education',
    },
  ]

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
                Our Portfolio
              </h1>
              <p className='text-xl text-white text-opacity-90 max-w-3xl mx-auto'>
                Discover the innovative projects and partnerships that showcase
                Abokyh’s commitment to revolutionizing cryptocurrency payments
                in Francophone Africa.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Items Section */}
      <section className='py-16 md:py-24 bg-white text-black'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold'>Our Projects</h2>
            <Separator className='w-20 h-1 bg-[#00BCD4] mx-auto mt-4' />
            <p className='mt-4 text-xl text-gray-700'>
              Explore our key initiatives driving financial inclusion and crypto
              adoption across the region.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className='h-full hover:shadow-lg transition-shadow duration-300 border-2 border-[#00BCD4] hover:border-[#4CAF50]'>
                  <CardContent className='p-6'>
                    <AspectRatio ratio={16 / 9} className='mb-4'>
                      <img
                        src={item.image}
                        alt={item.title}
                        className='w-full h-full object-cover rounded-md'
                      />
                    </AspectRatio>
                    <CardHeader>
                      <CardTitle className='text-xl text-black'>
                        {item.title}
                      </CardTitle>
                      <CardDescription className='text-gray-700'>
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                    <Button
                      className='bg-[#00BCD4] hover:bg-[#4CAF50] text-white'
                      asChild
                    >
                      <Link href={item.link}>
                        Learn More
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

      {/* CTA Section */}
      <section className='py-16 md:py-24'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.div {...motionProps}>
            <h2 className='text-3xl md:text-4xl font-bold mb-6'>
              Partner with Abokyh
            </h2>
            <Separator className='w-20 h-1 bg-white mx-auto mb-8' />
            <p className='text-xl mb-8 max-w-3xl mx-auto text-white text-opacity-90'>
              Interested in collaborating on innovative crypto solutions?
              Contact our team or explore our services to see how we can work
              together.
            </p>
            <div className='flex flex-col sm:flex-row justify-center gap-4'>
              <Button
                className='bg-[#00BCD4] hover:bg-[#4CAF50] text-white text-lg px-8 py-6'
                asChild
              >
                <Link href='/services'>Explore Services</Link>
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

export default PortfolioPage
