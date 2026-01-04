'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import {
  Code,
  Server,
  Shield,
  Camera,
  Plane,
  PenTool,
  Monitor,
  ArrowRight,
  Check,
  Users,
  Award,
  TrendingUp,
  Clock,
  Target,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface Training {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  features: string[]
  duration: string
  level: string
  callToAction: string
  link: string
  category: 'Development' | 'Security' | 'Media' | 'Design' | 'Office'
}

interface Benefit {
  title: string
  description: string
  icon: React.ReactNode
}

const TrainingPage = () => {
  const trainings: Training[] = [
    {
      id: 'web-mobile-dev',
      title: 'Développement Web & Mobile',
      description:
        'Master modern web and mobile development technologies. Learn to build responsive websites and native mobile applications using industry-standard frameworks and best practices.',
      icon: <Code className='h-6 w-6' />,
      features: [
        'HTML, CSS, JavaScript fundamentals',
        'React & React Native development',
        'Backend development with Node.js',
        'Database management & API integration',
      ],
      duration: '12 weeks',
      level: 'Beginner to Advanced',
      callToAction: 'Enroll Now',
      link: 'https://tally.so/r/web-mobile-dev',
      category: 'Development',
    },
    {
      id: 'maintenance',
      title: 'Maintenance & Support Technique',
      description:
        'Learn comprehensive system maintenance, troubleshooting, and technical support. Gain practical skills in hardware and software maintenance for websites and applications.',
      icon: <Server className='h-6 w-6' />,
      features: [
        'System diagnostics & troubleshooting',
        'Hardware & software maintenance',
        'Performance optimization techniques',
        'Backup & recovery strategies',
      ],
      duration: '8 weeks',
      level: 'Intermediate',
      callToAction: 'Enroll Now',
      link: 'https://tally.so/r/maintenance',
      category: 'Development',
    },
    {
      id: 'networks-security',
      title: 'Réseaux et Sécurité',
      description:
        'Comprehensive training in network infrastructure and cybersecurity. Learn to design, implement, and secure network systems while protecting against cyber threats.',
      icon: <Shield className='h-6 w-6' />,
      features: [
        'Network architecture & protocols',
        'Cybersecurity fundamentals',
        'Firewall & VPN configuration',
        'Threat detection & prevention',
      ],
      duration: '10 weeks',
      level: 'Intermediate to Advanced',
      callToAction: 'Enroll Now',
      link: 'https://tally.so/r/networks-security',
      category: 'Security',
    },
    {
      id: 'photography-video',
      title: 'Photography & Montage Vidéo',
      description:
        'Professional photography and video editing training. Master camera techniques, composition, lighting, and advanced video editing software for creating stunning visual content.',
      icon: <Camera className='h-6 w-6' />,
      features: [
        'Photography fundamentals & composition',
        'Professional lighting techniques',
        'Adobe Premiere Pro & After Effects',
        'Color grading & post-production',
      ],
      duration: '10 weeks',
      level: 'Beginner to Advanced',
      callToAction: 'Enroll Now',
      link: 'https://tally.so/r/photography-video',
      category: 'Media',
    },
    {
      id: 'aerial-photography',
      title: 'Prise de Vue Aérienne',
      description:
        'Specialized drone photography and videography training. Learn to operate drones safely, capture breathtaking aerial footage, and comply with aviation regulations.',
      icon: <Plane className='h-6 w-6' />,
      features: [
        'Drone operation & safety protocols',
        'Aerial composition techniques',
        'Flight regulations & licensing',
        'Advanced aerial cinematography',
      ],
      duration: '6 weeks',
      level: 'Intermediate',
      callToAction: 'Enroll Now',
      link: 'https://tally.so/r/aerial-photography',
      category: 'Media',
    },
    {
      id: 'infography',
      title: 'Infographie',
      description:
        'Master graphic design and digital illustration. Learn industry-standard tools like Adobe Photoshop, Illustrator, and InDesign to create professional visual communications.',
      icon: <PenTool className='h-6 w-6' />,
      features: [
        'Adobe Creative Suite mastery',
        'Logo design & brand identity',
        'Typography & color theory',
        'Print & digital design principles',
      ],
      duration: '12 weeks',
      level: 'Beginner to Advanced',
      callToAction: 'Enroll Now',
      link: 'https://tally.so/r/infography',
      category: 'Design',
    },
    {
      id: 'office-suite',
      title: 'Bureautique',
      description:
        'Complete office productivity training. Master Microsoft Office Suite and Google Workspace tools to enhance efficiency, create professional documents, and manage data effectively.',
      icon: <Monitor className='h-6 w-6' />,
      features: [
        'Advanced Microsoft Word & Excel',
        'PowerPoint presentation design',
        'Google Workspace collaboration',
        'Data analysis & visualization',
      ],
      duration: '6 weeks',
      level: 'Beginner to Intermediate',
      callToAction: 'Enroll Now',
      link: 'https://tally.so/r/office-suite',
      category: 'Office',
    },
  ]

  const benefits: Benefit[] = [
    {
      title: 'Expert Instructors',
      description:
        'Learn from industry professionals with years of real-world experience and a passion for teaching.',
      icon: <Users className='h-6 w-6' />,
    },
    {
      title: 'Certified Programs',
      description:
        'Earn recognized certifications upon completion to boost your career prospects and credibility.',
      icon: <Award className='h-6 w-6' />,
    },
    {
      title: 'Career Growth',
      description:
        'Gain practical skills that translate directly to job opportunities and professional advancement.',
      icon: <TrendingUp className='h-6 w-6' />,
    },
  ]

  const categories = [
    'All',
    'Development',
    'Security',
    'Media',
    'Design',
    'Office',
  ]
  const [selectedCategory, setSelectedCategory] = React.useState('All')

  const filteredTrainings =
    selectedCategory === 'All'
      ? trainings
      : trainings.filter((training) => training.category === selectedCategory)

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
                Digital Training & Coaching
              </h1>
              <Badge className='bg-[#00BCD4] text-white border-0 text-sm font-mono'>
                Professional
              </Badge>
            </div>
            <p className='text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl'>
              Tailored digital training programs that equip teams and
              professionals to master cutting-edge tools, strengthen technical
              skills, and stay competitive in the rapidly evolving digital
              landscape.
            </p>
            <div className='flex flex-wrap gap-8 text-sm font-mono'>
              <div className='flex items-center gap-2'>
                <div className='w-2 h-2 bg-green-400 rounded-full'></div>
                <span className='text-green-400'>Expert Instructors</span>
              </div>
              <div className='flex items-center gap-2'>
                <div className='w-2 h-2 bg-[#00BCD4] rounded-full'></div>
                <span className='text-gray-300'>7+ Training Programs</span>
              </div>
              <div className='flex items-center gap-2'>
                <div className='w-2 h-2 bg-[#4CAF50] rounded-full'></div>
                <span className='text-gray-300'>Certified Courses</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className='py-8 border-b border-gray-100 bg-gray-50'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='flex flex-wrap gap-3'>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded text-sm font-medium transition-colors duration-300 ${
                  selectedCategory === category
                    ? 'bg-gray-900 text-white'
                    : 'bg-white text-gray-700 hover:bg-[#00BCD4] hover:text-white border border-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Training Grid */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {filteredTrainings.map((training, index) => (
              <motion.div
                key={training.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className='h-full border-2 border-gray-200 hover:border-[#00BCD4] transition-all duration-300 bg-white hover:shadow-lg'>
                  <CardContent className='p-6 h-full flex flex-col'>
                    {/* Header */}
                    <div className='flex items-start gap-3 mb-4'>
                      <div className='p-2 bg-gray-900 text-white rounded'>
                        {training.icon}
                      </div>
                      <div className='flex-1'>
                        <h3 className='text-lg font-bold text-gray-900 mb-2'>
                          {training.title}
                        </h3>
                        <Badge
                          variant='outline'
                          className='text-xs font-mono border-[#4CAF50] text-[#4CAF50] bg-green-50'
                        >
                          {training.category}
                        </Badge>
                      </div>
                    </div>

                    <p className='text-gray-600 mb-4 leading-relaxed text-sm'>
                      {training.description}
                    </p>

                    {/* Course Info */}
                    <div className='flex items-center gap-4 mb-4 text-xs'>
                      <div className='flex items-center gap-1 text-gray-600'>
                        <Clock className='h-3 w-3 text-[#00BCD4]' />
                        <span>{training.duration}</span>
                      </div>
                      <div className='flex items-center gap-1 text-gray-600'>
                        <Target className='h-3 w-3 text-[#4CAF50]' />
                        <span>{training.level}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className='space-y-2 mb-6 flex-grow'>
                      {training.features.map((feature, idx) => (
                        <div key={idx} className='flex items-start gap-2'>
                          <Check className='h-4 w-4 text-[#4CAF50] flex-shrink-0 mt-0.5' />
                          <span className='text-gray-600 text-sm'>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Button
                      className='w-full bg-gray-900 hover:bg-[#00BCD4] text-white transition-colors duration-300 mt-auto'
                      asChild
                    >
                      <a
                        href={training.link}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        {training.callToAction}
                        <ArrowRight className='ml-2 h-4 w-4' />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Training Section */}
      <section className='py-16 bg-white'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className='text-3xl font-bold text-gray-900 mb-6'>
                Why Choose Moontag Training
              </h2>
              <p className='text-lg text-gray-600 mb-6 leading-relaxed'>
                Our training programs combine theoretical knowledge with
                hands-on practical experience, ensuring you gain real-world
                skills that make an immediate impact on your career.
              </p>
              <div className='space-y-4'>
                {benefits.map((benefit, index) => (
                  <div key={index} className='flex items-start gap-3'>
                    <div className='p-2 bg-[#00BCD4] text-white rounded flex-shrink-0'>
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className='font-semibold text-gray-900 mb-1'>
                        {benefit.title}
                      </h4>
                      <p className='text-gray-600 text-sm leading-relaxed'>
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='bg-gray-900 rounded-lg p-6 text-white font-mono text-sm overflow-hidden'
            >
              <div className='flex items-center gap-2 mb-4 pb-2 border-b border-gray-700'>
                <div className='w-3 h-3 bg-red-500 rounded-full'></div>
                <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
                <div className='w-3 h-3 bg-green-500 rounded-full'></div>
                <span className='text-gray-400 ml-2'>learning-path.js</span>
              </div>
              <div className='space-y-2'>
                <div>
                  <span className='text-purple-400'>const</span>{' '}
                  <span className='text-blue-400'>student</span> ={' '}
                  <span className='text-purple-400'>new</span>{' '}
                  <span className='text-yellow-300'>MoontagStudent</span>({'{'}
                </div>
                <div className='ml-4'>
                  <span className='text-red-400'>goal</span>:{' '}
                  <span className='text-green-400'>
                    &apos;master digital skills&apos;
                  </span>
                  ,
                </div>
                <div className='ml-4'>
                  <span className='text-red-400'>courses</span>: [
                </div>
                <div className='ml-8'>
                  <span className='text-green-400'>
                    &apos;web-development&apos;
                  </span>
                  ,
                </div>
                <div className='ml-8'>
                  <span className='text-green-400'>
                    &apos;photography&apos;
                  </span>
                  ,
                </div>
                <div className='ml-8'>
                  <span className='text-green-400'>&apos;infography&apos;</span>
                </div>
                <div className='ml-4'>],</div>
                <div className='ml-4'>
                  <span className='text-red-400'>commitment</span>:{' '}
                  <span className='text-green-400'>&apos;full-time&apos;</span>
                </div>
                <div>{'}'}</div>
                <div className='mt-4'>
                  <span className='text-gray-500'> Start your journey</span>
                </div>
                <div>
                  <span className='text-blue-400'>student</span>.
                  <span className='text-yellow-300'>enroll</span>().
                  <span className='text-yellow-300'>then</span>(
                  <span className='text-red-400'>result</span>{' '}
                  <span className='text-purple-400'>={'>'}</span> {'{'}
                </div>
                <div className='ml-4'>
                  <span className='text-blue-400'>console</span>.
                  <span className='text-yellow-300'>log</span>(
                  <span className='text-green-400'>
                    &apos;Skills unlocked!&apos;
                  </span>
                  )
                </div>
                <div>{'}'}</div>
              </div>
            </motion.div>
          </div>
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
              Ready to Upgrade Your Skills?
            </h2>
            <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
              Join hundreds of professionals who have transformed their careers
              through Moontag&apos;s comprehensive training programs
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button
                className='bg-[#00BCD4] hover:bg-[#4CAF50] text-white px-8 py-3 text-base font-medium'
                asChild
              >
                <a
                  href='https://tally.so/r/training-contact'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Get Started Today
                  <ArrowRight className='ml-2 h-4 w-4' />
                </a>
              </Button>
              <Button
                variant='outline'
                className='border-gray-600 text-white hover:text-gray-300 hover:bg-gray-800 hover:border-[#00BCD4] px-8 py-3 text-base font-medium'
                asChild
              >
                <Link href='/services'>Explore All Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default TrainingPage
