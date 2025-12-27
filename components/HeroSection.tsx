'use client'

import { useRef } from 'react'
import { Link } from '@/i18n/navigation'
import { Badge } from '@/components/ui/badge'
import { Phone, Mail, Brain, Users, Award, CheckCircle } from 'lucide-react'

export default function NeuroscienceHeroRedesigned() {
  const heroRef = useRef<HTMLDivElement>(null)

  return (
    <div className='bg-white'>
      {/* Top Contact Bar */}
      <header className='bg-[#1e3a8a] text-white py-3 border-b border-blue-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col sm:flex-row justify-between items-center gap-3 text-sm'>
            <div className='flex flex-wrap items-center gap-4'>
              <div className='flex items-center gap-2'>
                <Mail className='h-4 w-4' />
                <a
                  href='mailto:contact@camane-cameroon.com'
                  className='hover:text-blue-200 transition-colors'
                >
                  contact@camane-cameroon.com
                </a>
              </div>
              <div className='flex items-center gap-2'>
                <Phone className='h-4 w-4' />
                <a
                  href='tel:+237691508707'
                  className='hover:text-blue-200 transition-colors font-semibold'
                >
                  Emergency: +237 691 508 707
                </a>
              </div>
            </div>
            <Badge className='bg-red-600 text-white border-0 animate-pulse'>
              24/7 Emergency Support
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className='bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-10 sm:py-16 lg:py-24'>
        <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
          <div
            ref={heroRef}
            className='grid items-center grid-cols-1 gap-12 lg:grid-cols-2'
          >
            {/* Left Column - Content */}
            <div>
              {/* Badge */}
              <p className='text-base font-semibold tracking-wider text-[#1e3a8a] uppercase'>
                Excellence in Neuroscience Since 1984
              </p>

              {/* Main Heading */}
              <h1 className='mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-5xl xl:text-7xl leading-tight'>
                Neuroscience at the{' '}
                <span className='text-[#1e3a8a]'>Service of Well-Being</span>
              </h1>

              {/* Subheading */}
              <p className='mt-4 text-base text-gray-700 lg:mt-8 sm:text-xl leading-relaxed'>
                Advancing brain health through cutting-edge research, expert
                consultation, and cognitive performance optimization. Connect
                with our network of neuroscience specialists.
              </p>

              {/* Key Services Pills */}
              <div className='mt-6 lg:mt-8 flex flex-wrap gap-3'>
                {[
                  {
                    icon: <CheckCircle className='h-4 w-4' />,
                    text: 'Dysphasia',
                  },
                  {
                    icon: <CheckCircle className='h-4 w-4' />,
                    text: 'Concussions',
                  },
                  {
                    icon: <CheckCircle className='h-4 w-4' />,
                    text: 'Stroke Sequelae',
                  },
                  {
                    icon: <CheckCircle className='h-4 w-4' />,
                    text: 'Counseling',
                  },
                ].map((service, index) => (
                  <div
                    key={index}
                    className='flex items-center gap-2 px-4 py-2 bg-blue-100 text-[#1e3a8a] rounded-full text-sm font-medium'
                  >
                    {service.icon}
                    <span>{service.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Link
                href='/appointment'
                className='inline-flex items-center px-8 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-[#1e3a8a] rounded-full lg:mt-12 hover:bg-[#16306e] focus:bg-[#16306e] shadow-xl hover:shadow-2xl hover:scale-105'
                role='button'
              >
                Request Free Consultation
                <svg
                  className='w-6 h-6 ml-8 -mr-2'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='1.5'
                    d='M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </Link>

              {/* Secondary Links */}
              <p className='mt-5 text-gray-600'>
                Want to explore our team?{' '}
                <Link
                  href='/experts'
                  className='text-[#1e3a8a] font-semibold transition-all duration-200 hover:underline'
                >
                  Find an Expert
                </Link>
              </p>

              {/* Quick Stats */}
              <div className='mt-8 lg:mt-12 grid grid-cols-3 gap-6'>
                {[
                  {
                    icon: <Brain className='h-5 w-5' />,
                    value: '25+',
                    label: 'Neuroscientists',
                  },
                  {
                    icon: <Users className='h-5 w-5' />,
                    value: '30+',
                    label: 'Medical Experts',
                  },
                  {
                    icon: <Award className='h-5 w-5' />,
                    value: '40+',
                    label: 'Years Experience',
                  },
                ].map((stat, index) => (
                  <div key={index} className='text-center'>
                    <div className='flex items-center justify-center gap-1 mb-1'>
                      <div className='text-[#1e3a8a]'>{stat.icon}</div>
                      <div className='text-2xl font-bold text-gray-900'>
                        {stat.value}
                      </div>
                    </div>
                    <div className='text-xs text-gray-600'>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Image */}
            <div>
              <div className='relative'>
                {/* Main Image Container */}
                <div className='relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white'>
                  {/* Placeholder gradient background with brain illustration */}
                  <div className='aspect-[4/3] bg-gradient-to-br from-[#1e3a8a] via-indigo-600 to-blue-700 relative'>
                    {/* Decorative elements */}
                    <div className='absolute inset-0 opacity-10'>
                      <Brain className='absolute top-10 right-10 h-48 w-48 text-white' />
                      <Users className='absolute bottom-10 left-10 h-32 w-32 text-white' />
                    </div>

                    {/* Central illustration area - replace with actual image */}
                    <div className='absolute inset-0 flex items-center justify-center p-8'>
                      <div className='text-center text-white'>
                        <Brain className='h-48 w-48 mx-auto mb-6 opacity-80' />
                        <h3 className='text-3xl font-bold mb-2'>
                          Brain Health Excellence
                        </h3>
                        <p className='text-blue-100 text-lg'>
                          Advanced Research & Expert Care
                        </p>
                      </div>
                    </div>

                    {/* Uncomment when using actual image:
                    <img
                      src="/images/neuroscience-hero.jpg"
                      alt="Neuroscience Research and Patient Care"
                      className="w-full h-full object-cover"
                    />
                    */}
                  </div>

                  {/* Floating badge on image */}
                  <div className='absolute top-6 left-6'>
                    <Badge className='bg-white text-[#1e3a8a] border-0 font-bold text-sm px-4 py-2 shadow-lg'>
                      ⭐ 40 Years of Excellence
                    </Badge>
                  </div>
                </div>

                {/* Floating Info Card */}
                <div className='absolute -bottom-6 -left-6 bg-white rounded-xl shadow-2xl p-6 border-t-4 border-green-600 hidden lg:block max-w-xs'>
                  <div className='flex items-center gap-4'>
                    <div className='p-3 bg-green-50 rounded-lg'>
                      <CheckCircle className='h-10 w-10 text-green-600' />
                    </div>
                    <div>
                      <div className='text-3xl font-bold text-gray-900'>
                        98%
                      </div>
                      <div className='text-sm text-gray-600'>
                        Patient Satisfaction
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Stat Card */}
                <div className='absolute -top-6 -right-6 bg-white rounded-xl shadow-2xl p-6 border-t-4 border-[#1e3a8a] hidden lg:block'>
                  <div className='flex items-center gap-4'>
                    <div className='p-3 bg-blue-50 rounded-lg'>
                      <Users className='h-10 w-10 text-[#1e3a8a]' />
                    </div>
                    <div>
                      <div className='text-3xl font-bold text-gray-900'>
                        5000+
                      </div>
                      <div className='text-sm text-gray-600'>
                        Patients Treated
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Bar */}
      <section className='bg-white py-8 border-y border-gray-200'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
            <div className='text-center md:text-left'>
              <div className='text-sm text-gray-600 mb-1'>Trusted by</div>
              <div className='text-2xl font-bold text-gray-900'>
                12 Countries Worldwide
              </div>
            </div>
            <div className='h-12 w-px bg-gray-300 hidden md:block' />
            <div className='text-center'>
              <div className='text-sm text-gray-600 mb-1'>Established</div>
              <div className='text-2xl font-bold text-gray-900'>Since 1984</div>
            </div>
            <div className='h-12 w-px bg-gray-300 hidden md:block' />
            <div className='text-center'>
              <div className='text-sm text-gray-600 mb-1'>Research</div>
              <div className='text-2xl font-bold text-gray-900'>
                500+ Publications
              </div>
            </div>
            <div className='h-12 w-px bg-gray-300 hidden md:block' />
            <div className='text-center md:text-right'>
              <div className='text-sm text-gray-600 mb-1'>Excellence</div>
              <div className='text-2xl font-bold text-gray-900'>
                150+ Awards
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
