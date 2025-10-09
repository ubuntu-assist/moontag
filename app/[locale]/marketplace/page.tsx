'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Search,
  ArrowUpDown,
  Grid3x3,
  List,
  Code,
  Palette,
  TrendingUp,
  Users,
  Monitor,
  Filter,
  Star,
  Clock,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import Link from 'next/link'

interface Service {
  id: string
  title: string
  provider: string
  logo: string
  category: string
  type: string
  rating: number
  reviews: number
  price: {
    min: number
    max: number
    currency: string
    unit: string
  }
  duration: string
  isPopular: boolean
  isNew: boolean
  isFeatured: boolean
  technologies: string[]
  description: string
}

interface Category {
  id: string
  name: string
  icon: React.ComponentType<{ size?: number | string; className?: string }>
  count: number
}

const Marketplace = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [services, setServices] = useState<Service[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [typeFilter, setTypeFilter] = useState('all')
  const [sortOption, setSortOption] = useState('popular')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  useEffect(() => {
    const timer = setTimeout(() => {
      setCategories([
        {
          id: 'development',
          name: 'Development',
          icon: Code,
          count: 3,
        },
        {
          id: 'design',
          name: 'Design & Branding',
          icon: Palette,
          count: 2,
        },
        {
          id: 'marketing',
          name: 'Digital Marketing',
          icon: TrendingUp,
          count: 2,
        },
        {
          id: 'training',
          name: 'Training Programs',
          icon: Users,
          count: 1,
        },
      ])

      setServices([
        {
          id: 'web-dev-01',
          title: 'E-commerce Platform Development',
          provider: 'Moontag Dev Team',
          logo: '/images/services/web-development.svg',
          category: 'development',
          type: 'project',
          rating: 4.9,
          reviews: 47,
          price: {
            min: 5000,
            max: 15000,
            currency: 'USD',
            unit: 'project',
          },
          duration: '6-12 weeks',
          isPopular: true,
          isNew: false,
          isFeatured: true,
          technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
          description:
            'Full-stack e-commerce solution with payment integration, inventory management, and mobile-responsive design.',
        },
        {
          id: 'mobile-dev-01',
          title: 'Cross-Platform Mobile App',
          provider: 'Moontag Mobile Team',
          logo: '/images/services/mobile-development.svg',
          category: 'development',
          type: 'project',
          rating: 4.8,
          reviews: 32,
          price: {
            min: 8000,
            max: 25000,
            currency: 'USD',
            unit: 'project',
          },
          duration: '8-16 weeks',
          isPopular: true,
          isNew: true,
          isFeatured: false,
          technologies: ['React Native', 'Firebase', 'API Integration'],
          description:
            'Native-quality mobile applications for iOS and Android with offline capabilities and real-time sync.',
        },
        {
          id: 'api-dev-01',
          title: 'REST API Development',
          provider: 'Backend Specialists',
          logo: '/images/services/api-development.svg',
          category: 'development',
          type: 'service',
          rating: 5.0,
          reviews: 28,
          price: {
            min: 100,
            max: 200,
            currency: 'USD',
            unit: 'hour',
          },
          duration: '2-8 weeks',
          isPopular: false,
          isNew: false,
          isFeatured: false,
          technologies: ['Node.js', 'Express', 'PostgreSQL', 'Docker'],
          description:
            'Scalable REST APIs with comprehensive documentation, authentication, and rate limiting.',
        },
        {
          id: 'brand-design-01',
          title: 'Complete Brand Identity Package',
          provider: 'Moontag Design Studio',
          logo: '/images/services/brand-design.svg',
          category: 'design',
          type: 'package',
          rating: 4.9,
          reviews: 55,
          price: {
            min: 2500,
            max: 8000,
            currency: 'USD',
            unit: 'package',
          },
          duration: '4-6 weeks',
          isPopular: true,
          isNew: false,
          isFeatured: true,
          technologies: ['Figma', 'Adobe Creative Suite', 'Brand Guidelines'],
          description:
            'Logo design, brand guidelines, business cards, and complete visual identity system.',
        },
        {
          id: 'ui-design-01',
          title: 'Web & Mobile UI/UX Design',
          provider: 'UX Design Experts',
          logo: '/images/services/ui-design.svg',
          category: 'design',
          type: 'service',
          rating: 4.7,
          reviews: 41,
          price: {
            min: 80,
            max: 150,
            currency: 'USD',
            unit: 'hour',
          },
          duration: '3-10 weeks',
          isPopular: false,
          isNew: true,
          isFeatured: false,
          technologies: ['Figma', 'Sketch', 'Prototyping', 'User Research'],
          description:
            'User-centered design for web and mobile applications with interactive prototypes.',
        },
        {
          id: 'seo-marketing-01',
          title: 'SEO & Digital Marketing Campaign',
          provider: 'Growth Marketing Team',
          logo: '/images/services/digital-marketing.svg',
          category: 'marketing',
          type: 'campaign',
          rating: 4.6,
          reviews: 67,
          price: {
            min: 1500,
            max: 5000,
            currency: 'USD',
            unit: 'month',
          },
          duration: '3-12 months',
          isPopular: true,
          isNew: false,
          isFeatured: false,
          technologies: [
            'Google Analytics',
            'SEO Tools',
            'Social Media',
            'Content Strategy',
          ],
          description:
            'Comprehensive digital marketing strategy including SEO, content marketing, and social media management.',
        },
        {
          id: 'social-media-01',
          title: 'Social Media Management',
          provider: 'Content Creators',
          logo: '/images/services/social-media.svg',
          category: 'marketing',
          type: 'service',
          rating: 4.4,
          reviews: 33,
          price: {
            min: 800,
            max: 2500,
            currency: 'USD',
            unit: 'month',
          },
          duration: 'Ongoing',
          isPopular: false,
          isNew: false,
          isFeatured: false,
          technologies: [
            'Content Creation',
            'Analytics',
            'Community Management',
          ],
          description:
            'Full-service social media management with content creation, scheduling, and community engagement.',
        },
        {
          id: 'dev-training-01',
          title: 'Full-Stack Developer Bootcamp',
          provider: 'Moontag Academy',
          logo: '/images/services/developer-training.svg',
          category: 'training',
          type: 'course',
          rating: 4.8,
          reviews: 156,
          price: {
            min: 2000,
            max: 4000,
            currency: 'USD',
            unit: 'course',
          },
          duration: '16 weeks',
          isPopular: true,
          isNew: true,
          isFeatured: true,
          technologies: ['JavaScript', 'React', 'Node.js', 'Database Design'],
          description:
            '16-week intensive bootcamp covering full-stack development with job placement assistance.',
        },
      ])

      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const filteredServices = services.filter((service) => {
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.technologies.some((tech) =>
        tech.toLowerCase().includes(searchQuery.toLowerCase())
      )
    const matchesCategory =
      categoryFilter === 'all' || service.category === categoryFilter
    const matchesType = typeFilter === 'all' || service.type === typeFilter
    return matchesSearch && matchesCategory && matchesType
  })

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortOption) {
      case 'popular':
        return b.rating - a.rating
      case 'newest':
        return a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1
      case 'price-low':
        return a.price.min - b.price.min
      case 'price-high':
        return b.price.max - a.price.max
      case 'rating':
        return b.rating - a.rating
      default:
        return 0
    }
  })

  const serviceTypes = [...new Set(services.map((service) => service.type))]

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
                Services Marketplace
              </h1>
              <Badge className='bg-[#00BCD4] text-white border-0 text-sm font-mono'>
                8 Services
              </Badge>
            </div>
            <p className='text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl'>
              Browse our collection of professional digital services from
              development to design, marketing to training. All delivered by
              expert teams with proven track records.
            </p>
            <div className='flex flex-wrap gap-8 text-sm font-mono'>
              <div className='flex items-center gap-2'>
                <div className='w-2 h-2 bg-green-400 rounded-full'></div>
                <span className='text-green-400'>Expert Providers</span>
              </div>
              <div className='flex items-center gap-2'>
                <div className='w-2 h-2 bg-[#00BCD4] rounded-full'></div>
                <span className='text-gray-300'>4.8 Average Rating</span>
              </div>
              <div className='flex items-center gap-2'>
                <div className='w-2 h-2 bg-[#4CAF50] rounded-full'></div>
                <span className='text-gray-300'>Fast Delivery</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className='py-12 bg-gray-50 border-b border-gray-200'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='relative max-w-2xl mx-auto'>
            <Input
              placeholder='Search services, technologies, or providers...'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='pl-10 pr-4 h-12 bg-white border-gray-300 focus:ring-[#00BCD4] focus:border-[#00BCD4] font-mono'
            />
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500' />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className='py-16'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
            {/* Sidebar Filters */}
            <div className='lg:col-span-1'>
              <div className='bg-gray-50 rounded-lg p-6 sticky top-24'>
                <div className='flex items-center gap-2 mb-6'>
                  <Filter className='h-5 w-5 text-gray-700' />
                  <h2 className='text-lg font-bold text-gray-900'>Filters</h2>
                </div>

                <div className='space-y-6'>
                  {/* Categories */}
                  <div>
                    <h3 className='font-medium text-gray-900 mb-3'>
                      Categories
                    </h3>
                    <div className='space-y-2'>
                      <div
                        className={`flex items-center justify-between cursor-pointer rounded p-2 font-mono text-sm ${
                          categoryFilter === 'all'
                            ? 'bg-gray-900 text-white'
                            : 'hover:bg-gray-100'
                        }`}
                        onClick={() => setCategoryFilter('all')}
                      >
                        <span>All Categories</span>
                        <span className='text-xs'>{services.length}</span>
                      </div>

                      {categories.map((category) => {
                        const Icon = category.icon
                        return (
                          <div
                            key={category.id}
                            className={`flex items-center justify-between cursor-pointer rounded p-2 text-sm ${
                              categoryFilter === category.id
                                ? 'bg-gray-900 text-white'
                                : 'hover:bg-gray-100'
                            }`}
                            onClick={() => setCategoryFilter(category.id)}
                          >
                            <div className='flex items-center gap-2'>
                              <Icon className='h-4 w-4' />
                              <span>{category.name}</span>
                            </div>
                            <span className='text-xs'>{category.count}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {/* Service Types */}
                  <div>
                    <h3 className='font-medium text-gray-900 mb-3'>
                      Service Type
                    </h3>
                    <Select value={typeFilter} onValueChange={setTypeFilter}>
                      <SelectTrigger className='border-gray-300 focus:ring-[#00BCD4] focus:border-[#00BCD4]'>
                        <SelectValue placeholder='All Types' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='all'>All Types</SelectItem>
                        {serviceTypes.map((type) => (
                          <SelectItem
                            key={type}
                            value={type}
                            className='capitalize'
                          >
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Quick Filters */}
                  <div>
                    <h3 className='font-medium text-gray-900 mb-3'>
                      Quick Filters
                    </h3>
                    <div className='space-y-2'>
                      <div className='flex items-center'>
                        <input
                          type='checkbox'
                          id='featured'
                          className='h-4 w-4 text-[#00BCD4] rounded border-gray-300 focus:ring-[#00BCD4]'
                        />
                        <label
                          htmlFor='featured'
                          className='ml-2 text-sm text-gray-700'
                        >
                          Featured Services
                        </label>
                      </div>
                      <div className='flex items-center'>
                        <input
                          type='checkbox'
                          id='new-services'
                          className='h-4 w-4 text-[#00BCD4] rounded border-gray-300 focus:ring-[#00BCD4]'
                        />
                        <label
                          htmlFor='new-services'
                          className='ml-2 text-sm text-gray-700'
                        >
                          New Services
                        </label>
                      </div>
                      <div className='flex items-center'>
                        <input
                          type='checkbox'
                          id='top-rated'
                          className='h-4 w-4 text-[#00BCD4] rounded border-gray-300 focus:ring-[#00BCD4]'
                        />
                        <label
                          htmlFor='top-rated'
                          className='ml-2 text-sm text-gray-700'
                        >
                          Top Rated (4.5+)
                        </label>
                      </div>
                    </div>
                  </div>

                  <Button
                    variant='outline'
                    className='w-full border-gray-300 hover:border-[#00BCD4] text-sm'
                    onClick={() => {
                      setSearchQuery('')
                      setCategoryFilter('all')
                      setTypeFilter('all')
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <div className='lg:col-span-3'>
              {/* Header */}
              <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6'>
                <div>
                  <h2 className='text-xl font-bold text-gray-900'>
                    {filteredServices.length} Services Available
                  </h2>
                  {(searchQuery ||
                    categoryFilter !== 'all' ||
                    typeFilter !== 'all') && (
                    <p className='text-sm text-gray-600 font-mono'>
                      Filtered results
                      {categoryFilter !== 'all' && ` in ${categoryFilter}`}
                      {typeFilter !== 'all' && ` • ${typeFilter}s`}
                      {searchQuery && ` • "${searchQuery}"`}
                    </p>
                  )}
                </div>

                <div className='flex mt-3 sm:mt-0 space-x-2'>
                  <Select value={sortOption} onValueChange={setSortOption}>
                    <SelectTrigger className='w-40 border-gray-300 focus:ring-[#00BCD4] focus:border-[#00BCD4]'>
                      <div className='flex items-center'>
                        <ArrowUpDown className='h-4 w-4 mr-2' />
                        <SelectValue placeholder='Sort by' />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='popular'>Most Popular</SelectItem>
                      <SelectItem value='newest'>Newest</SelectItem>
                      <SelectItem value='rating'>Highest Rated</SelectItem>
                      <SelectItem value='price-low'>
                        Price: Low to High
                      </SelectItem>
                      <SelectItem value='price-high'>
                        Price: High to Low
                      </SelectItem>
                    </SelectContent>
                  </Select>

                  <div className='flex border border-gray-300 rounded-md'>
                    <Button
                      variant='ghost'
                      size='sm'
                      className={`px-2 ${viewMode === 'grid' ? 'bg-gray-100' : ''}`}
                      onClick={() => setViewMode('grid')}
                    >
                      <Grid3x3 size={18} />
                    </Button>
                    <Button
                      variant='ghost'
                      size='sm'
                      className={`px-2 ${viewMode === 'list' ? 'bg-gray-100' : ''}`}
                      onClick={() => setViewMode('list')}
                    >
                      <List size={18} />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Services Content */}
              {isLoading ? (
                <div
                  className={
                    viewMode === 'grid'
                      ? 'grid grid-cols-1 md:grid-cols-2 gap-6'
                      : 'space-y-4'
                  }
                >
                  {Array(6)
                    .fill(0)
                    .map((_, i) => (
                      <div key={i} className='animate-pulse'>
                        <Card className='border-2 border-gray-200'>
                          <CardContent
                            className={viewMode === 'grid' ? 'p-6' : 'p-4 flex'}
                          >
                            <div
                              className={
                                viewMode === 'grid'
                                  ? ''
                                  : 'w-20 h-20 bg-gray-200 rounded mr-4'
                              }
                            >
                              {viewMode === 'grid' && (
                                <div className='h-32 bg-gray-200 rounded mb-4'></div>
                              )}
                            </div>
                            <div className='flex-1 space-y-3'>
                              <div className='h-4 bg-gray-200 rounded w-3/4'></div>
                              <div className='h-3 bg-gray-200 rounded w-1/2'></div>
                              <div className='h-8 bg-gray-200 rounded w-full'></div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                </div>
              ) : sortedServices.length > 0 ? (
                <div
                  className={
                    viewMode === 'grid'
                      ? 'grid grid-cols-1 md:grid-cols-2 gap-6'
                      : 'space-y-4'
                  }
                >
                  {sortedServices.map((service) => (
                    <Card
                      key={service.id}
                      className='border-2 border-gray-200 hover:border-[#00BCD4] transition-all duration-300 group'
                    >
                      <CardContent
                        className={viewMode === 'grid' ? 'p-6' : 'p-4 flex'}
                      >
                        {viewMode === 'list' && (
                          <div className='w-16 h-16 bg-gray-100 rounded-lg mr-4 flex items-center justify-center'>
                            <Monitor className='h-8 w-8 text-gray-600' />
                          </div>
                        )}

                        <div className='flex-1'>
                          {viewMode === 'grid' && (
                            <div className='h-24 bg-gray-100 rounded-lg mb-4 flex items-center justify-center'>
                              <Monitor className='h-12 w-12 text-gray-600' />
                            </div>
                          )}

                          <div className='flex items-start justify-between mb-2'>
                            <div className='flex-1'>
                              <div className='flex items-center gap-2 mb-1'>
                                {service.isFeatured && (
                                  <Badge className='bg-[#00BCD4] text-white text-xs font-mono'>
                                    FEATURED
                                  </Badge>
                                )}
                                {service.isNew && (
                                  <Badge className='bg-[#4CAF50] text-white text-xs font-mono'>
                                    NEW
                                  </Badge>
                                )}
                              </div>
                              <h3 className='font-bold text-gray-900 group-hover:text-[#00BCD4] transition-colors'>
                                {service.title}
                              </h3>
                              <p className='text-sm text-gray-600 font-mono'>
                                {service.provider}
                              </p>
                            </div>
                          </div>

                          <div className='flex items-center gap-2 mb-3'>
                            <div className='flex items-center gap-1'>
                              <Star className='h-4 w-4 fill-yellow-400 text-yellow-400' />
                              <span className='text-sm font-mono'>
                                {service.rating}
                              </span>
                            </div>
                            <span className='text-sm text-gray-500'>
                              ({service.reviews} reviews)
                            </span>
                            <div className='flex items-center gap-1 text-sm text-gray-500'>
                              <Clock className='h-3 w-3' />
                              <span className='font-mono'>
                                {service.duration}
                              </span>
                            </div>
                          </div>

                          <p className='text-sm text-gray-600 mb-4 line-clamp-2'>
                            {service.description}
                          </p>

                          <div className='flex flex-wrap gap-1 mb-4'>
                            {service.technologies.slice(0, 3).map((tech) => (
                              <Badge
                                key={tech}
                                variant='secondary'
                                className='text-xs font-mono'
                              >
                                {tech}
                              </Badge>
                            ))}
                            {service.technologies.length > 3 && (
                              <Badge
                                variant='secondary'
                                className='text-xs font-mono'
                              >
                                +{service.technologies.length - 3} more
                              </Badge>
                            )}
                          </div>

                          <div className='flex justify-between items-center'>
                            <div className='font-mono text-sm'>
                              <span className='text-lg font-bold text-gray-900'>
                                ${service.price.min.toLocaleString()}
                              </span>
                              {service.price.max !== service.price.min && (
                                <span className='text-gray-500'>
                                  - ${service.price.max.toLocaleString()}
                                </span>
                              )}
                              <span className='text-gray-500 ml-1'>
                                /{service.price.unit}
                              </span>
                            </div>
                            <Button
                              className='bg-gray-900 hover:bg-[#00BCD4] text-white text-sm'
                              size='sm'
                              asChild
                            >
                              <Link href={`/services/${service.id}`}>
                                View Details
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className='text-center py-12 bg-gray-50 rounded-lg'>
                  <Search className='mx-auto h-12 w-12 text-gray-400 mb-4' />
                  <h3 className='text-lg font-bold text-gray-900 mb-2'>
                    No services found
                  </h3>
                  <p className='text-gray-600 mb-6'>
                    Try adjusting your filters or search terms to see more
                    results
                  </p>
                  <Button
                    variant='outline'
                    className='border-gray-300 hover:border-[#00BCD4]'
                    onClick={() => {
                      setSearchQuery('')
                      setCategoryFilter('all')
                      setTypeFilter('all')
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Marketplace
