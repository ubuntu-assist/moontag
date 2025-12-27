'use client'

import { useState } from 'react'
import { Link } from '@/i18n/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  BookOpen,
  TrendingUp,
  Brain,
  Microscope,
  FileText,
  Eye,
  Heart,
  ChevronRight,
  Filter,
} from 'lucide-react'

export default function NewsArticlesSection() {
  const [activeFilter, setActiveFilter] = useState('all')

  const newsArticles = [
    {
      id: 1,
      title:
        'Breakthrough in Neuroplasticity Research: New Treatment for Stroke Recovery',
      excerpt:
        'Our research team has discovered a novel approach to enhance neuroplasticity in stroke patients, showing promising results in clinical trials with 85% improvement rate.',
      category: 'research',
      author: 'Dr. Stephanie Kameni',
      date: '2024-12-15',
      readTime: '5 min read',
      image: '/images/news/neuroplasticity-research.jpg',
      tags: ['Stroke', 'Research', 'Clinical Trials'],
      views: '2.5k',
      featured: true,
      color: 'from-blue-600 to-indigo-600',
    },
    {
      id: 2,
      title: 'Understanding Dysphasia: A Comprehensive Guide for Families',
      excerpt:
        'A detailed exploration of language disorders, their impact on daily life, and evidence-based therapeutic approaches that can make a significant difference.',
      category: 'education',
      author: 'Pr. Elisabeth Ngo Bum',
      date: '2024-12-10',
      readTime: '8 min read',
      image: '/images/news/dysphasia-guide.jpg',
      tags: ['Dysphasia', 'Education', 'Treatment'],
      views: '1.8k',
      featured: false,
      color: 'from-purple-600 to-pink-600',
    },
    {
      id: 3,
      title: 'CAMANE Conference 2024: Highlights and Key Takeaways',
      excerpt:
        'Recap of our annual neuroscience conference featuring groundbreaking presentations from leading researchers and clinicians across 12 countries.',
      category: 'events',
      author: 'Pr. Gwladys Temkou',
      date: '2024-12-08',
      readTime: '6 min read',
      image: '/images/news/conference-2024.jpg',
      tags: ['Conference', 'Events', 'Networking'],
      views: '3.2k',
      featured: true,
      color: 'from-green-600 to-teal-600',
    },
    {
      id: 4,
      title: 'Advanced Concussion Management Protocols in Sports Medicine',
      excerpt:
        'New guidelines for identifying and treating concussions in athletes, emphasizing early intervention and comprehensive monitoring.',
      category: 'clinical',
      author: 'Dr. Jean-Paul Mbarga',
      date: '2024-12-05',
      readTime: '7 min read',
      image: '/images/news/concussion-protocols.jpg',
      tags: ['Concussion', 'Sports', 'Protocol'],
      views: '2.1k',
      featured: false,
      color: 'from-orange-600 to-red-600',
    },
    {
      id: 5,
      title: 'AI and Neuroscience: The Future of Brain-Computer Interfaces',
      excerpt:
        'Exploring the intersection of artificial intelligence and neuroscience, and how BCIs are revolutionizing treatment for neurological disorders.',
      category: 'innovation',
      author: 'Dr. Marie Nkoulou',
      date: '2024-12-01',
      readTime: '10 min read',
      image: '/images/news/ai-neuroscience.jpg',
      tags: ['AI', 'Innovation', 'Technology'],
      views: '4.5k',
      featured: true,
      color: 'from-indigo-600 to-purple-600',
    },
    {
      id: 6,
      title: 'Mental Health Awareness: Breaking the Stigma in Cameroon',
      excerpt:
        'Our community initiative to raise awareness about mental health issues and promote accessible care for all members of society.',
      category: 'community',
      author: 'Dr. Stephanie Kameni',
      date: '2024-11-28',
      readTime: '5 min read',
      image: '/images/news/mental-health.jpg',
      tags: ['Mental Health', 'Community', 'Awareness'],
      views: '1.9k',
      featured: false,
      color: 'from-pink-600 to-rose-600',
    },
  ]

  const categories = [
    {
      id: 'all',
      label: 'All Articles',
      icon: <BookOpen className='h-4 w-4' />,
    },
    {
      id: 'research',
      label: 'Research',
      icon: <Microscope className='h-4 w-4' />,
    },
    { id: 'clinical', label: 'Clinical', icon: <Brain className='h-4 w-4' /> },
    {
      id: 'education',
      label: 'Education',
      icon: <FileText className='h-4 w-4' />,
    },
    { id: 'events', label: 'Events', icon: <Calendar className='h-4 w-4' /> },
    {
      id: 'innovation',
      label: 'Innovation',
      icon: <TrendingUp className='h-4 w-4' />,
    },
  ]

  const filteredArticles = newsArticles.filter(
    (article) => activeFilter === 'all' || article.category === activeFilter
  )

  const featuredArticle = newsArticles.find((article) => article.featured)

  return (
    <div className='bg-white'>
      {/* Section Header */}
      <section className='py-20 bg-gradient-to-b from-gray-50 to-white'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center mb-16'>
            <Badge className='bg-[#1e3a8a] text-white border-0 text-sm px-4 py-1 mb-4'>
              Latest Updates
            </Badge>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
              Our Latest News & Articles
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Stay informed with the latest updates, research, and insights from
              the world of neuroscience. Explore our thought leadership and
              discoveries.
            </p>
          </div>

          {/* Featured Article Hero */}
          {featuredArticle && (
            <Card className='mb-16 border-2 border-[#1e3a8a] overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300'>
              <CardContent className='p-0'>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                  {/* Image Section */}
                  <div className='relative aspect-[16/10] lg:aspect-auto overflow-hidden'>
                    {/* Placeholder gradient - replace with actual image */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${featuredArticle.color}`}
                    >
                      <div className='absolute inset-0 flex items-center justify-center'>
                        <Brain className='h-48 w-48 text-white opacity-20' />
                      </div>
                    </div>

                    {/* Uncomment when using actual images:
                    <img
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      className="w-full h-full object-cover"
                    />
                    */}

                    {/* Featured Badge */}
                    <div className='absolute top-6 left-6'>
                      <Badge className='bg-yellow-500 text-gray-900 border-0 font-bold text-sm px-4 py-2 shadow-lg'>
                        ⭐ Featured Article
                      </Badge>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className='p-8 lg:p-12 flex flex-col justify-center'>
                    <div className='flex flex-wrap items-center gap-3 mb-4'>
                      <Badge
                        variant='secondary'
                        className='bg-blue-100 text-blue-700 border-0'
                      >
                        {featuredArticle.category}
                      </Badge>
                      {featuredArticle.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant='outline' className='text-xs'>
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <h3 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight'>
                      {featuredArticle.title}
                    </h3>

                    <p className='text-lg text-gray-600 mb-6 leading-relaxed'>
                      {featuredArticle.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className='flex flex-wrap items-center gap-6 mb-8 text-sm text-gray-500'>
                      <div className='flex items-center gap-2'>
                        <User className='h-4 w-4' />
                        <span>{featuredArticle.author}</span>
                      </div>
                      <div className='flex items-center gap-2'>
                        <Calendar className='h-4 w-4' />
                        <span>
                          {new Date(featuredArticle.date).toLocaleDateString(
                            'en-US',
                            {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric',
                            }
                          )}
                        </span>
                      </div>
                      <div className='flex items-center gap-2'>
                        <Clock className='h-4 w-4' />
                        <span>{featuredArticle.readTime}</span>
                      </div>
                      <div className='flex items-center gap-2'>
                        <Eye className='h-4 w-4' />
                        <span>{featuredArticle.views} views</span>
                      </div>
                    </div>

                    <Button
                      className='bg-[#1e3a8a] hover:bg-[#16306e] text-white w-full sm:w-auto px-8 py-6 text-base font-semibold'
                      asChild
                    >
                      <Link href={`/news/${featuredArticle.id}`}>
                        Read Full Article
                        <ArrowRight className='ml-2 h-5 w-5' />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Category Filter */}
          <div className='flex items-center gap-4 mb-8 overflow-x-auto pb-4'>
            <div className='flex items-center gap-2 text-gray-700 font-semibold whitespace-nowrap'>
              <Filter className='h-5 w-5' />
              <span>Filter by:</span>
            </div>
            <div className='flex gap-3'>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 whitespace-nowrap ${
                    activeFilter === category.id
                      ? 'bg-[#1e3a8a] text-white shadow-lg'
                      : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-[#1e3a8a]'
                  }`}
                >
                  {category.icon}
                  <span>{category.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {filteredArticles.slice(0, 6).map((article) => (
              <Card
                key={article.id}
                className='group border-2 border-gray-200 hover:border-[#1e3a8a] hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer'
              >
                <CardContent className='p-0'>
                  {/* Image */}
                  <div className='relative aspect-[16/10] overflow-hidden'>
                    {/* Placeholder gradient - replace with actual image */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${article.color}`}
                    >
                      <div className='absolute inset-0 flex items-center justify-center'>
                        <Brain className='h-24 w-24 text-white opacity-20' />
                      </div>
                    </div>

                    {/* Uncomment when using actual images:
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    */}

                    {/* Category Badge */}
                    <div className='absolute top-4 left-4'>
                      <Badge
                        variant='secondary'
                        className='bg-white/90 backdrop-blur-sm text-gray-900 border-0 font-semibold capitalize'
                      >
                        {article.category}
                      </Badge>
                    </div>

                    {/* Views Counter */}
                    <div className='absolute bottom-4 right-4'>
                      <div className='flex items-center gap-1 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm'>
                        <Eye className='h-3 w-3' />
                        <span>{article.views}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className='p-6'>
                    {/* Tags */}
                    <div className='flex flex-wrap gap-2 mb-3'>
                      {article.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant='outline' className='text-xs'>
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className='text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#1e3a8a] transition-colors'>
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className='text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed'>
                      {article.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className='flex items-center justify-between text-xs text-gray-500 mb-4 pb-4 border-b border-gray-200'>
                      <div className='flex items-center gap-2'>
                        <User className='h-3 w-3' />
                        <span className='truncate'>{article.author}</span>
                      </div>
                      <div className='flex items-center gap-2'>
                        <Clock className='h-3 w-3' />
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <Link
                      href={`/news/${article.id}`}
                      className='flex items-center justify-between text-[#1e3a8a] font-semibold hover:gap-3 transition-all group'
                    >
                      <span>Read More</span>
                      <ChevronRight className='h-5 w-5 group-hover:translate-x-1 transition-transform' />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className='text-center mt-12'>
            <Button
              variant='outline'
              className='border-2 border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white px-8 py-6 text-base font-semibold'
              asChild
            >
              <Link href='/news'>
                View All Articles
                <ArrowRight className='ml-2 h-5 w-5' />
              </Link>
            </Button>
            <p className='text-gray-600 mt-4'>
              Interested in reading more?{' '}
              <Link
                href='/news'
                className='text-[#1e3a8a] font-semibold hover:underline'
              >
                Explore More In Blogging section
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription Section */}
      <section className='py-20 bg-gradient-to-r from-[#1e3a8a] via-indigo-700 to-[#1e3a8a]'>
        <div className='max-w-4xl mx-auto px-6 text-center'>
          <div className='inline-flex items-center justify-center p-4 bg-white/10 backdrop-blur-sm rounded-full mb-6'>
            <BookOpen className='h-12 w-12 text-white' />
          </div>

          <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
            Stay Updated with Latest Neuroscience Research
          </h2>
          <p className='text-xl text-blue-100 mb-8'>
            Subscribe to our newsletter and receive cutting-edge insights,
            research updates, and event notifications directly to your inbox.
          </p>

          {/* Newsletter Form */}
          <div className='max-w-xl mx-auto'>
            <div className='flex flex-col sm:flex-row gap-4'>
              <input
                type='email'
                placeholder='Enter your email address'
                className='flex-grow px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30 text-base'
              />
              <Button className='bg-white text-[#1e3a8a] hover:bg-blue-50 px-8 py-4 text-base font-semibold rounded-full whitespace-nowrap'>
                Subscribe Now
              </Button>
            </div>
            <p className='text-blue-200 text-sm mt-4'>
              Join 5,000+ subscribers. Unsubscribe anytime.
            </p>
          </div>

          {/* Social Proof */}
          <div className='grid grid-cols-3 gap-8 mt-12 max-w-2xl mx-auto'>
            <div className='text-center'>
              <div className='text-3xl font-bold text-white mb-1'>500+</div>
              <div className='text-blue-200 text-sm'>Articles Published</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-white mb-1'>5k+</div>
              <div className='text-blue-200 text-sm'>Newsletter Readers</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-white mb-1'>12</div>
              <div className='text-blue-200 text-sm'>Countries Reached</div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Research Highlights */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              Research Highlights
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Quick insights from our latest groundbreaking research and
              clinical studies
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {[
              {
                icon: <Brain className='h-8 w-8' />,
                stat: '85%',
                label: 'Improvement in Stroke Recovery',
                color: 'bg-blue-50 text-blue-600 border-blue-200',
              },
              {
                icon: <TrendingUp className='h-8 w-8' />,
                stat: '120+',
                label: 'Active Clinical Trials',
                color: 'bg-green-50 text-green-600 border-green-200',
              },
              {
                icon: <Heart className='h-8 w-8' />,
                stat: '95%',
                label: 'Patient Satisfaction Rate',
                color: 'bg-red-50 text-red-600 border-red-200',
              },
              {
                icon: <Microscope className='h-8 w-8' />,
                stat: '50+',
                label: 'Peer-Reviewed Publications',
                color: 'bg-purple-50 text-purple-600 border-purple-200',
              },
            ].map((item, index) => (
              <Card
                key={index}
                className={`border-2 hover:shadow-lg transition-all duration-300 ${item.color}`}
              >
                <CardContent className='p-6 text-center'>
                  <div className='inline-flex items-center justify-center p-3 bg-white rounded-full mb-4 shadow-sm'>
                    {item.icon}
                  </div>
                  <div className='text-4xl font-bold mb-2'>{item.stat}</div>
                  <div className='text-sm text-gray-600 font-medium'>
                    {item.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
