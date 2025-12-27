'use client'

import { useState } from 'react'
import { Link } from '@/i18n/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Brain,
  Users,
  Award,
  BookOpen,
  GraduationCap,
  Mail,
  Linkedin,
  Twitter,
  Globe,
  ArrowRight,
  Star,
  TrendingUp,
  Lightbulb,
  ChevronRight,
} from 'lucide-react'

export default function ExpertsSection() {
  const [activeCategory, setActiveCategory] = useState('all')

  const teamMembers = [
    {
      name: 'Pr Elisabeth Ngo Bum',
      role: 'President',
      position: 'Chief Neuroscientist',
      image: '/images/team/elisabeth-ngo-bum.jpg',
      specialization: 'Neuroplasticity & Cognitive Research',
      category: 'leadership',
      credentials: ['PhD Neuroscience', '25+ Years Experience'],
      achievements: '50+ Published Papers',
      color: 'from-blue-600 to-indigo-600',
    },
    {
      name: 'Dr Stephanie J. Kameni Njapdounke',
      role: 'Secretary General',
      position: 'Director of Operations',
      image: '/images/team/stephanie-kameni.jpg',
      specialization: 'Clinical Neurology & Patient Care',
      category: 'leadership',
      credentials: ['MD Neurology', 'Board Certified'],
      achievements: '1000+ Patients Treated',
      color: 'from-purple-600 to-pink-600',
    },
    {
      name: 'Pr Moto O. Fleur Clarisse',
      role: 'Treasurer',
      position: 'Financial Director',
      image: '/images/team/fleur-clarisse.jpg',
      specialization: 'Healthcare Administration & Research Funding',
      category: 'leadership',
      credentials: ['PhD Healthcare Admin', 'CPA'],
      achievements: '$5M+ Research Grants',
      color: 'from-green-600 to-teal-600',
    },
    {
      name: 'Pr Gwladys Temkou Ngoupaye',
      role: 'Director of Programs',
      position: 'Development & Communication',
      image: '/images/team/gwladys-temkou.jpg',
      specialization: 'Neuroscience Education & Outreach',
      category: 'leadership',
      credentials: ['PhD Neuroscience', 'MEd Education'],
      achievements: '30+ Training Programs',
      color: 'from-orange-600 to-red-600',
    },
  ]

  const expertiseAreas = [
    {
      icon: <Brain className='h-8 w-8' />,
      title: 'Neuroscientists',
      count: '25+',
      description: 'Advancing brain science and neurological discoveries',
      color: 'bg-blue-50 text-blue-600 border-blue-200',
    },
    {
      icon: <Users className='h-8 w-8' />,
      title: 'Medical Experts',
      count: '30+',
      description:
        'Specialists in neurology, cognitive health, and rehabilitation',
      color: 'bg-purple-50 text-purple-600 border-purple-200',
    },
    {
      icon: <Lightbulb className='h-8 w-8' />,
      title: 'Innovators',
      count: '100+',
      description: 'Exploring AI, neurofeedback, and brain-computer interfaces',
      color: 'bg-green-50 text-green-600 border-green-200',
    },
  ]

  const categories = [
    { id: 'all', label: 'All Experts' },
    { id: 'leadership', label: 'Leadership Team' },
    { id: 'researchers', label: 'Researchers' },
    { id: 'clinicians', label: 'Clinicians' },
  ]

  const stats = [
    {
      icon: <Award className='h-6 w-6' />,
      value: '150+',
      label: 'Awards & Recognition',
    },
    {
      icon: <BookOpen className='h-6 w-6' />,
      value: '500+',
      label: 'Research Publications',
    },
    {
      icon: <GraduationCap className='h-6 w-6' />,
      value: '1000+',
      label: 'Students Mentored',
    },
    {
      icon: <Globe className='h-6 w-6' />,
      value: '12',
      label: 'Countries Reached',
    },
  ]

  return (
    <div className='bg-white'>
      {/* Section Header */}
      <section className='py-20 bg-gradient-to-b from-white to-gray-50'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center mb-16'>
            <Badge className='bg-[#1e3a8a] text-white border-0 text-sm px-4 py-1 mb-4'>
              Our Expert Team
            </Badge>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
              Meet Our Neuroscience Specialists
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Connect with leading neuroscience specialists dedicated to brain
              research, innovation, and well-being. Our team of dedicated
              professionals is committed to advancing brain health.
            </p>
          </div>

          {/* Expertise Overview Cards */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
            {expertiseAreas.map((area, index) => (
              <Card
                key={index}
                className={`border-2 hover:shadow-xl transition-all duration-300 ${area.color}`}
              >
                <CardContent className='p-8 text-center'>
                  <div className='inline-flex items-center justify-center p-4 bg-white rounded-full mb-4 shadow-md'>
                    {area.icon}
                  </div>
                  <div className='text-4xl font-bold mb-2'>{area.count}</div>
                  <h3 className='text-xl font-bold mb-3'>{area.title}</h3>
                  <p className='text-gray-600 text-sm leading-relaxed'>
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Category Filter */}
          <div className='flex flex-wrap justify-center gap-3 mb-12'>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-[#1e3a8a] text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-[#1e3a8a] hover:text-[#1e3a8a]'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Leadership Team Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {teamMembers
              .filter(
                (member) =>
                  activeCategory === 'all' || member.category === activeCategory
              )
              .map((member, index) => (
                <Card
                  key={index}
                  className='group border-2 border-gray-200 hover:border-[#1e3a8a] hover:shadow-2xl transition-all duration-300 overflow-hidden'
                >
                  <CardContent className='p-0'>
                    {/* Image Section */}
                    <div className='relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200'>
                      {/* Placeholder gradient - replace with actual image */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-80`}
                      >
                        {/* Image placeholder - replace with actual image */}
                        <div className='absolute inset-0 flex items-center justify-center'>
                          <Users className='h-32 w-32 text-white opacity-30' />
                        </div>
                      </div>

                      {/* Uncomment when using actual images:
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      */}

                      {/* Overlay on hover */}
                      <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        <div className='absolute bottom-4 left-4 right-4'>
                          <div className='flex gap-2 justify-center'>
                            <button className='p-2 bg-white/90 rounded-full hover:bg-white transition-colors'>
                              <Mail className='h-4 w-4 text-[#1e3a8a]' />
                            </button>
                            <button className='p-2 bg-white/90 rounded-full hover:bg-white transition-colors'>
                              <Linkedin className='h-4 w-4 text-[#1e3a8a]' />
                            </button>
                            <button className='p-2 bg-white/90 rounded-full hover:bg-white transition-colors'>
                              <Twitter className='h-4 w-4 text-[#1e3a8a]' />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Role Badge */}
                      <div className='absolute top-4 left-4'>
                        <Badge className='bg-white text-[#1e3a8a] border-0 font-semibold'>
                          {member.role}
                        </Badge>
                      </div>
                    </div>

                    {/* Info Section */}
                    <div className='p-6'>
                      <h3 className='text-xl font-bold text-gray-900 mb-1'>
                        {member.name}
                      </h3>
                      <p className='text-[#1e3a8a] font-semibold mb-3'>
                        {member.position}
                      </p>
                      <p className='text-gray-600 text-sm mb-4'>
                        {member.specialization}
                      </p>

                      {/* Credentials */}
                      <div className='space-y-2 mb-4'>
                        {member.credentials.map((cred, idx) => (
                          <div
                            key={idx}
                            className='flex items-center gap-2 text-xs text-gray-600'
                          >
                            <Star className='h-3 w-3 text-yellow-500 fill-yellow-500' />
                            <span>{cred}</span>
                          </div>
                        ))}
                      </div>

                      {/* Achievement */}
                      <div className='pt-4 border-t border-gray-200'>
                        <div className='flex items-center gap-2 text-sm'>
                          <TrendingUp className='h-4 w-4 text-green-600' />
                          <span className='text-gray-700 font-medium'>
                            {member.achievements}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>

          {/* View All Experts CTA */}
          <div className='text-center mt-12'>
            <Button
              className='bg-[#1e3a8a] hover:bg-[#16306e] text-white px-8 py-6 text-lg font-semibold shadow-lg'
              asChild
            >
              <Link href='/experts'>
                Explore More Specialists
                <ArrowRight className='ml-2 h-5 w-5' />
              </Link>
            </Button>
            <p className='text-gray-600 mt-4'>
              Want to contact with experts?{' '}
              <Link
                href='/experts'
                className='text-[#1e3a8a] font-semibold hover:underline'
              >
                Explore More Specialist section
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className='py-16 bg-gradient-to-r from-[#1e3a8a] via-indigo-700 to-[#1e3a8a]'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            {stats.map((stat, index) => (
              <div key={index} className='text-center text-white'>
                <div className='flex items-center justify-center gap-3 mb-2'>
                  <div className='p-2 bg-white/20 rounded-lg'>{stat.icon}</div>
                  <div className='text-4xl font-bold'>{stat.value}</div>
                </div>
                <div className='text-blue-100 text-sm'>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Find an Expert CTA Section */}
      <section className='py-20 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='bg-white rounded-2xl shadow-xl overflow-hidden'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              {/* Left Side - Content */}
              <div className='p-12'>
                <Badge className='bg-green-600 text-white border-0 mb-4'>
                  Expert Network
                </Badge>
                <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                  Find a Neuroscience Expert
                </h2>
                <p className='text-lg text-gray-600 mb-8'>
                  Connect with our network of neuroscientists, researchers, and
                  specialists for conferences, collaboration opportunities, or
                  professional consultations.
                </p>

                <div className='space-y-4 mb-8'>
                  {[
                    {
                      icon: <Brain className='h-5 w-5' />,
                      text: 'Access to 55+ certified specialists',
                    },
                    {
                      icon: <Globe className='h-5 w-5' />,
                      text: 'International collaboration network',
                    },
                    {
                      icon: <BookOpen className='h-5 w-5' />,
                      text: 'Research partnerships available',
                    },
                    {
                      icon: <Users className='h-5 w-5' />,
                      text: 'Conference speakers & consultants',
                    },
                  ].map((item, index) => (
                    <div key={index} className='flex items-center gap-3'>
                      <div className='flex-shrink-0 p-2 bg-blue-50 rounded-lg text-[#1e3a8a]'>
                        {item.icon}
                      </div>
                      <span className='text-gray-700'>{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className='flex flex-col sm:flex-row gap-4'>
                  <Button
                    className='bg-[#1e3a8a] hover:bg-[#16306e] text-white px-6 py-6 text-base font-semibold'
                    asChild
                  >
                    <Link href='/experts'>
                      Browse All Experts
                      <ChevronRight className='ml-2 h-5 w-5' />
                    </Link>
                  </Button>
                  <Button
                    variant='outline'
                    className='border-2 border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white px-6 py-6 text-base font-semibold'
                    asChild
                  >
                    <Link href='/contact'>Request Introduction</Link>
                  </Button>
                </div>
              </div>

              {/* Right Side - Visual */}
              <div className='bg-gradient-to-br from-[#1e3a8a] to-indigo-700 p-12 flex items-center justify-center relative overflow-hidden'>
                <div className='absolute inset-0 opacity-10'>
                  <Brain className='absolute top-10 right-10 h-64 w-64' />
                  <Users className='absolute bottom-10 left-10 h-48 w-48' />
                </div>

                <div className='relative z-10 text-white text-center'>
                  <div className='inline-flex items-center justify-center p-6 bg-white/10 backdrop-blur-sm rounded-full mb-6'>
                    <Users className='h-24 w-24' />
                  </div>
                  <h3 className='text-3xl font-bold mb-4'>55+ Specialists</h3>
                  <p className='text-blue-100 text-lg mb-6'>
                    Ready to collaborate and share expertise
                  </p>
                  <div className='grid grid-cols-2 gap-4 max-w-sm mx-auto'>
                    <div className='bg-white/10 backdrop-blur-sm rounded-lg p-4'>
                      <div className='text-3xl font-bold mb-1'>25+</div>
                      <div className='text-blue-200 text-sm'>
                        Neuroscientists
                      </div>
                    </div>
                    <div className='bg-white/10 backdrop-blur-sm rounded-lg p-4'>
                      <div className='text-3xl font-bold mb-1'>30+</div>
                      <div className='text-blue-200 text-sm'>
                        Medical Experts
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Banner */}
      <section className='py-16 bg-white border-t border-gray-200'>
        <div className='max-w-7xl mx-auto px-6 text-center'>
          <h3 className='text-2xl md:text-3xl font-bold text-gray-900 mb-4'>
            Join Our Growing Network of Neuroscience Professionals
          </h3>
          <p className='text-lg text-gray-600 mb-8 max-w-2xl mx-auto'>
            Whether you&apos;re seeking collaboration, consultation, or
            partnership opportunities, our expert team is here to support your
            initiatives.
          </p>
          <Button
            variant='outline'
            className='border-2 border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white px-8 py-6 text-lg font-semibold'
            asChild
          >
            <Link href='/membership'>
              Explore Membership Options
              <ArrowRight className='ml-2 h-5 w-5' />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
