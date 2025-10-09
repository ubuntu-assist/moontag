'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { Link, usePathname } from '@/i18n/navigation'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import {
  Code,
  Smartphone,
  Palette,
  ArrowRight,
  Globe,
  Users,
  TrendingUp,
  CheckCircle,
  ExternalLink,
} from 'lucide-react'

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const heroElement = heroRef.current

    if (heroElement) {
      const tl = gsap.timeline()

      gsap.set(
        [
          heroElement.querySelector('.hero-title'),
          heroElement.querySelector('.hero-subtitle'),
          heroElement.querySelector('.hero-cta'),
          heroElement.querySelector('.hero-code'),
        ],
        { clearProps: 'all' }
      )

      tl.from(heroElement.querySelector('.hero-title'), {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })
        .from(
          heroElement.querySelector('.hero-subtitle'),
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
          },
          '-=0.6'
        )
        .from(
          heroElement.querySelector('.hero-cta'),
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: 'power3.out',
          },
          '-=0.4'
        )
        .from(
          heroElement.querySelector('.hero-code'),
          {
            scale: 0.9,
            opacity: 0,
            duration: 1.2,
            ease: 'power2.out',
          },
          '-=0.8'
        )

      return () => {
        tl.kill()
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      }
    }
  }, [pathname])

  const services = [
    {
      icon: <Code className='h-6 w-6' />,
      title: 'Digital Solutions',
      description:
        'Web development, branding, and digital transformation services to bring your vision to life.',
      technologies: ['Web Development', 'Branding', 'Digital Transformation'],
    },
    {
      icon: <Smartphone className='h-6 w-6' />,
      title: 'Certified Training',
      description:
        'Professional IT, entrepreneurship, and digital marketing training programs with certification.',
      technologies: ['IT Training', 'Entrepreneurship', 'Digital Marketing'],
    },
    {
      icon: <Users className='h-6 w-6' />,
      title: 'Partnerships & Network',
      description:
        'Join our strong network of partners, affiliates, and business opportunities for collective growth.',
      technologies: ['Partnership Programs', 'Affiliates', 'Business Network'],
    },
  ]

  const stats = [
    {
      value: '100+',
      label: 'Projects Delivered',
      icon: <CheckCircle className='h-5 w-5' />,
    },
    {
      value: '50+',
      label: 'Happy Clients',
      icon: <Users className='h-5 w-5' />,
    },
    {
      value: '12',
      label: 'Countries Served',
      icon: <Globe className='h-5 w-5' />,
    },
    {
      value: '99.9%',
      label: 'Uptime SLA',
      icon: <TrendingUp className='h-5 w-5' />,
    },
  ]

  return (
    <div className='bg-white min-h-screen'>
      {/* Hero Section */}
      <section className='bg-gray-900 text-white border-b-4 border-[#00BCD4] relative overflow-hidden'>
        <div className='max-w-6xl mx-auto px-6'>
          <div
            ref={heroRef}
            className='pt-24 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'
          >
            {/* Left Column */}
            <div>
              <div className='flex items-center gap-2 mb-6'>
                <Badge className='bg-[#00BCD4] text-white border-0 font-mono'>
                  Digital Solutions
                </Badge>
                <Badge
                  variant='outline'
                  className='border-gray-600 text-gray-300 font-mono'
                >
                  v2.1.0
                </Badge>
              </div>

              <h1 className='hero-title text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6'>
                Build Your Vision with Moontag
                <span className='block text-[#00BCD4]'>Ecosystem</span>
              </h1>

              <p className='hero-subtitle text-xl text-gray-300 leading-relaxed mb-8 max-w-lg'>
                Moontag simplifies the success of your projects through a
                complete digital ecosystem, personalized support, and an engaged
                community. Manage everything easily from your phone, wherever
                you are.
              </p>

              <div className='hero-cta flex flex-col sm:flex-row gap-4 mb-8'>
                <Button
                  className='bg-[#00BCD4] hover:bg-[#4CAF50] text-white px-8 py-3 text-base font-medium'
                  asChild
                >
                  <Link href='/services'>
                    Start Your Project
                    <ArrowRight className='ml-2 h-4 w-4' />
                  </Link>
                </Button>
                <Button
                  variant='outline'
                  className='border-gray-600 text-gray-700 hover:text-gray-300 hover:bg-gray-800 hover:border-[#00BCD4] px-8 py-3 text-base font-medium'
                  asChild
                >
                  <Link href='/portfolio'>View Our Work</Link>
                </Button>
              </div>
            </div>

            {/* Right Column - Visual Dashboard */}
            <div className='hero-code'>
              <div className='bg-gray-800 rounded-lg p-6 border border-gray-700 relative overflow-hidden'>
                <div className='flex items-center gap-2 mb-6 pb-2 border-b border-gray-700'>
                  <div className='w-3 h-3 bg-red-500 rounded-full'></div>
                  <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
                  <div className='w-3 h-3 bg-green-500 rounded-full'></div>
                  <span className='text-gray-400 ml-2 font-mono text-sm'>
                    Moontag Dashboard
                  </span>
                </div>

                {/* Service Overview */}
                <div className='space-y-4'>
                  <div className='flex items-center justify-between'>
                    <span className='text-gray-300 font-medium'>
                      Active Services
                    </span>
                    <Badge className='bg-green-500 text-white text-xs'>
                      10
                    </Badge>
                  </div>

                  <div className='grid grid-cols-2 gap-3'>
                    <div className='bg-gray-700 rounded p-3 border border-[#00BCD4]/30'>
                      <div className='flex items-center gap-2 mb-2'>
                        <Code className='h-4 w-4 text-[#00BCD4]' />
                        <span className='text-white text-sm font-medium'>
                          Development
                        </span>
                      </div>
                      <div className='text-gray-300 text-xs'>
                        Web & Mobile Apps
                      </div>
                    </div>

                    <div className='bg-gray-700 rounded p-3 border border-[#4CAF50]/30'>
                      <div className='flex items-center gap-2 mb-2'>
                        <Palette className='h-4 w-4 text-[#4CAF50]' />
                        <span className='text-white text-sm font-medium'>
                          Design
                        </span>
                      </div>
                      <div className='text-gray-300 text-xs'>
                        Branding & UI/UX
                      </div>
                    </div>

                    <div className='bg-gray-700 rounded p-3 border border-orange-400/30'>
                      <div className='flex items-center gap-2 mb-2'>
                        <TrendingUp className='h-4 w-4 text-orange-400' />
                        <span className='text-white text-sm font-medium'>
                          Marketing
                        </span>
                      </div>
                      <div className='text-gray-300 text-xs'>
                        SEO & Analytics
                      </div>
                    </div>

                    <div className='bg-gray-700 rounded p-3 border border-purple-400/30'>
                      <div className='flex items-center gap-2 mb-2'>
                        <Globe className='h-4 w-4 text-purple-400' />
                        <span className='text-white text-sm font-medium'>
                          Support
                        </span>
                      </div>
                      <div className='text-gray-300 text-xs'>
                        24/7 Maintenance
                      </div>
                    </div>
                  </div>

                  <div className='mt-6 pt-4 border-t border-gray-700'>
                    <div className='flex items-center justify-between text-xs'>
                      <span className='text-gray-400 font-mono'>
                        Status: All Systems Operational
                      </span>
                      <div className='w-2 h-2 bg-green-400 rounded-full animate-pulse'></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-16 bg-gray-50 border-b border-gray-200'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            {stats.map((stat, index) => (
              <div key={index} className='text-center'>
                <div className='flex items-center justify-center gap-2 mb-2'>
                  <div className='text-[#00BCD4]'>{stat.icon}</div>
                  <div className='text-3xl font-bold text-gray-900 font-mono'>
                    {stat.value}
                  </div>
                </div>
                <div className='text-gray-600 text-sm'>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className='py-16'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              How Moontag Works
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              A complete digital ecosystem with personalized support and an
              engaged community
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {services.map((service, index) => (
              <Card
                key={index}
                className='border-2 border-gray-200 hover:border-[#00BCD4] transition-all duration-300 h-full'
              >
                <CardContent className='p-6 h-full flex flex-col'>
                  <div className='flex items-center gap-3 mb-4'>
                    <div className='p-2 bg-gray-900 text-white rounded'>
                      {service.icon}
                    </div>
                    <h3 className='text-xl font-bold text-gray-900'>
                      {service.title}
                    </h3>
                  </div>

                  <p className='text-gray-600 mb-6 flex-grow'>
                    {service.description}
                  </p>

                  <div className='space-y-3'>
                    <div className='flex flex-wrap gap-2'>
                      {service.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant='secondary'
                          className='font-mono text-xs'
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <Button
                      variant='outline'
                      className='w-full border-gray-300 text-gray-700 hover:border-[#00BCD4] hover:text-[#00BCD4] hover:bg-transparent'
                      asChild
                    >
                      <Link href='/services'>
                        Learn More
                        <ArrowRight className='ml-2 h-4 w-4' />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-3xl font-bold text-gray-900 mb-6'>
                How We Work
              </h2>
              <p className='text-lg text-gray-600 mb-8'>
                Our proven process ensures successful project delivery from
                concept to deployment
              </p>

              <div className='space-y-6'>
                {[
                  {
                    step: '01',
                    title: 'Join the Community',
                    desc: 'Sign up and access a dynamic network of entrepreneurs, creators, and partners',
                  },
                  {
                    step: '02',
                    title: 'Choose Your Solutions',
                    desc: 'Select services tailored to your needs: digital solutions, training, or partnerships',
                  },
                  {
                    step: '03',
                    title: 'Enjoy Personalized Support',
                    desc: 'Each project receives tailored support with modern tools and strategy',
                  },
                  {
                    step: '04',
                    title: 'Grow Your Projects',
                    desc: 'Your ideas become visible and impactful with our community support',
                  },
                ].map((item, index) => (
                  <div key={index} className='flex items-start gap-4'>
                    <div className='w-12 h-12 bg-[#00BCD4] text-white rounded-lg flex items-center justify-center font-mono font-bold'>
                      {item.step}
                    </div>
                    <div>
                      <h4 className='font-semibold text-gray-900 mb-1'>
                        {item.title}
                      </h4>
                      <p className='text-gray-600 text-sm'>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className='bg-gray-900 rounded-lg p-6 text-white'>
              <div className='flex items-center gap-2 mb-6 pb-2 border-b border-gray-700'>
                <div className='w-3 h-3 bg-red-500 rounded-full'></div>
                <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
                <div className='w-3 h-3 bg-green-500 rounded-full'></div>
                <span className='text-gray-400 ml-2 font-mono text-sm'>
                  project-workflow.md
                </span>
              </div>
              <div className='space-y-4'>
                <div className='flex items-center justify-between'>
                  <h4 className='text-lg font-semibold'>Development Process</h4>
                  <Badge className='bg-green-500 text-white text-xs'>
                    Active
                  </Badge>
                </div>

                <div className='space-y-3'>
                  {[
                    {
                      phase: 'Discovery',
                      status: 'completed',
                      color: 'text-green-400',
                    },
                    {
                      phase: 'Design',
                      status: 'completed',
                      color: 'text-green-400',
                    },
                    {
                      phase: 'Development',
                      status: 'in-progress',
                      color: 'text-yellow-400',
                    },
                    {
                      phase: 'Testing',
                      status: 'pending',
                      color: 'text-gray-500',
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className='flex items-center justify-between'
                    >
                      <span className='text-gray-300'>{item.phase}</span>
                      <div className='flex items-center gap-2'>
                        <div
                          className={`w-2 h-2 rounded-full ${
                            item.status === 'completed'
                              ? 'bg-green-400'
                              : item.status === 'in-progress'
                              ? 'bg-yellow-400 animate-pulse'
                              : 'bg-gray-500'
                          }`}
                        ></div>
                        <span className={`text-xs font-mono ${item.color}`}>
                          {item.status.replace('-', ' ')}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className='mt-6 pt-4 border-t border-gray-700'>
                  <div className='grid grid-cols-2 gap-4 text-xs'>
                    <div>
                      <span className='text-gray-400'>Framework:</span>
                      <span className='text-white ml-2'>
                        React + TypeScript
                      </span>
                    </div>
                    <div>
                      <span className='text-gray-400'>Deploy:</span>
                      <span className='text-white ml-2'>AWS + Docker</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-16 bg-gray-900 text-white'>
        <div className='max-w-6xl mx-auto px-6 text-center'>
          <h2 className='text-3xl font-bold mb-4'>Why Choose Moontag?</h2>
          <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
            We make the difference. Where other startups stop, Moontag goes
            further: innovation, support, and global vision.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              className='bg-[#00BCD4] hover:bg-[#4CAF50] text-white px-8 py-3 text-base font-medium'
              asChild
            >
              <Link href='/contact'>
                Start Your Project
                <ArrowRight className='ml-2 h-4 w-4' />
              </Link>
            </Button>
            <Button
              variant='outline'
              className='border-gray-600 text-gray-700 hover:text-gray-300 hover:bg-gray-800 hover:border-[#00BCD4] px-8 py-3 text-base font-medium'
              asChild
            >
              <Link href='/services'>
                Explore Services
                <ExternalLink className='ml-2 h-4 w-4' />
              </Link>
            </Button>
          </div>
          <div className='mt-8 text-sm text-gray-400 font-mono'>
            Your vision, our expertise, unlimited growth potential
          </div>
        </div>
      </section>
    </div>
  )
}
