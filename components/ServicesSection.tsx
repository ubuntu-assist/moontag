'use client'

import { useState } from 'react'
import { Link } from '@/i18n/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Brain,
  Activity,
  HeartPulse,
  Stethoscope,
  Users,
  Calendar,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Clock,
  Award,
} from 'lucide-react'

export default function KeyServicesSection() {
  const [activeService, setActiveService] = useState(0)

  const mainServices = [
    {
      icon: <Brain className='h-8 w-8' />,
      title: 'Dysphasia Treatment',
      description:
        'Comprehensive language disorder treatment with evidence-based therapies and personalized rehabilitation programs.',
      features: [
        'Speech therapy sessions',
        'Cognitive rehabilitation',
        'Family counseling',
        'Progress monitoring',
      ],
      color: 'from-blue-600 to-indigo-600',
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-100',
      textColor: 'text-blue-600',
    },
    {
      icon: <Activity className='h-8 w-8' />,
      title: 'Concussion Management',
      description:
        'Expert diagnosis and treatment of traumatic brain injuries with cutting-edge neuroscience approaches.',
      features: [
        'Immediate assessment',
        'Recovery protocols',
        'Neurological monitoring',
        'Return-to-activity planning',
      ],
      color: 'from-purple-600 to-pink-600',
      bgColor: 'bg-purple-50',
      iconBg: 'bg-purple-100',
      textColor: 'text-purple-600',
    },
    {
      icon: <HeartPulse className='h-8 w-8' />,
      title: 'Stroke Sequelae',
      description:
        'Specialized post-stroke rehabilitation focusing on neuroplasticity and functional recovery.',
      features: [
        'Motor function recovery',
        'Cognitive retraining',
        'Physical therapy',
        'Long-term support',
      ],
      color: 'from-red-600 to-orange-600',
      bgColor: 'bg-red-50',
      iconBg: 'bg-red-100',
      textColor: 'text-red-600',
    },
  ]

  const supportServices = [
    {
      icon: <Stethoscope className='h-6 w-6' />,
      title: 'Counseling',
      subtitle: 'Professional Guidance',
      description:
        'Expert psychological counseling for neurological conditions and mental well-being.',
    },
    {
      icon: <Users className='h-6 w-6' />,
      title: 'Psychotherapy',
      subtitle: 'Collaborative Treatment',
      description:
        'Evidence-based therapeutic approaches for cognitive and emotional challenges.',
    },
    {
      icon: <Shield className='h-6 w-6' />,
      title: 'Self Management',
      subtitle: 'Holistic Health',
      description:
        'Empowering patients with tools and strategies for physical and mental wellness.',
    },
  ]

  const whyChooseUs = [
    {
      icon: <Award className='h-6 w-6' />,
      title: 'Expert Team',
      description: '55+ certified neuroscientists and medical professionals',
    },
    {
      icon: <Clock className='h-6 w-6' />,
      title: '40+ Years',
      description: 'Established excellence since 1984',
    },
    {
      icon: <Zap className='h-6 w-6' />,
      title: 'Advanced Technology',
      description: 'State-of-the-art neuroscience equipment and methods',
    },
    {
      icon: <HeartPulse className='h-6 w-6' />,
      title: '24/7 Support',
      description: 'Round-the-clock emergency assistance available',
    },
  ]

  return (
    <div className='bg-white'>
      {/* Main Services Section */}
      <section className='py-20 bg-gradient-to-b from-white to-blue-50'>
        <div className='max-w-7xl mx-auto px-6'>
          {/* Section Header */}
          <div className='text-center mb-16'>
            <Badge className='bg-[#1e3a8a] text-white border-0 text-sm px-4 py-1 mb-4'>
              Our Expertise
            </Badge>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
              Key Neuroscience Services
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Advancing brain health through cutting-edge research and expert
              support. We provide comprehensive care for neurological
              conditions.
            </p>
          </div>

          {/* Interactive Service Cards */}
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12'>
            {mainServices.map((service, index) => (
              <Card
                key={index}
                className={`group border-2 transition-all duration-300 cursor-pointer overflow-hidden ${
                  activeService === index
                    ? 'border-[#1e3a8a] shadow-2xl scale-105'
                    : 'border-gray-200 hover:border-blue-300 hover:shadow-xl'
                }`}
                onMouseEnter={() => setActiveService(index)}
              >
                <CardContent className='p-0'>
                  {/* Gradient Header */}
                  <div
                    className={`bg-gradient-to-r ${service.color} p-6 text-white relative overflow-hidden`}
                  >
                    <div className='absolute top-0 right-0 opacity-10'>
                      <Brain className='h-32 w-32' />
                    </div>
                    <div className='relative z-10'>
                      <div className='mb-4'>{service.icon}</div>
                      <h3 className='text-2xl font-bold mb-2'>
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className='p-6'>
                    <p className='text-gray-600 mb-6 leading-relaxed'>
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className='space-y-3 mb-6'>
                      {service.features.map((feature, idx) => (
                        <div key={idx} className='flex items-start gap-3'>
                          <CheckCircle
                            className={`h-5 w-5 mt-0.5 flex-shrink-0 ${service.textColor}`}
                          />
                          <span className='text-gray-700 text-sm'>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Button
                      className={`w-full ${
                        activeService === index
                          ? 'bg-[#1e3a8a] hover:bg-[#16306e]'
                          : 'bg-gray-800 hover:bg-gray-700'
                      } text-white`}
                      asChild
                    >
                      <Link href='/appointment'>
                        Book Consultation
                        <ArrowRight className='ml-2 h-4 w-4' />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call-to-Action Banner */}
          <div className='bg-gradient-to-r from-[#1e3a8a] to-indigo-700 rounded-2xl p-8 md:p-12 text-white text-center relative overflow-hidden shadow-2xl'>
            <div className='absolute inset-0 opacity-10'>
              <div className='absolute top-0 left-0'>
                <Brain className='h-64 w-64' />
              </div>
              <div className='absolute bottom-0 right-0'>
                <Activity className='h-64 w-64' />
              </div>
            </div>
            <div className='relative z-10'>
              <h3 className='text-3xl md:text-4xl font-bold mb-4'>
                Request a Free Expert Consultation
              </h3>
              <p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>
                Feel free to contact our dedicated team for any
                neuroscience-related inquiries or professional guidance.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Button
                  className='bg-white text-[#1e3a8a] hover:bg-blue-50 px-8 py-6 text-lg font-semibold'
                  asChild
                >
                  <Link href='/appointment'>
                    <Calendar className='mr-2 h-5 w-5' />
                    Make an Appointment
                  </Link>
                </Button>
                <Button
                  variant='outline'
                  className='border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold'
                  asChild
                >
                  <Link href='/contact'>Contact Our Team</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Services Section */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              Comprehensive Support Services
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Holistic care approaches for your neurological and mental
              well-being journey
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {supportServices.map((service, index) => (
              <Card
                key={index}
                className='border-2 border-gray-200 hover:border-[#1e3a8a] hover:shadow-xl transition-all duration-300 group'
              >
                <CardContent className='p-8 text-center'>
                  <div className='inline-flex items-center justify-center p-4 bg-blue-50 rounded-full mb-6 group-hover:bg-[#1e3a8a] transition-colors'>
                    <div className='text-[#1e3a8a] group-hover:text-white transition-colors'>
                      {service.icon}
                    </div>
                  </div>
                  <h3 className='text-2xl font-bold text-gray-900 mb-2'>
                    {service.title}
                  </h3>
                  <p className='text-[#1e3a8a] font-semibold mb-4'>
                    {service.subtitle}
                  </p>
                  <p className='text-gray-600 leading-relaxed'>
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className='py-20 bg-gradient-to-b from-blue-50 to-white'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              Why Choose CAMANE?
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Leading neuroscience excellence with proven expertise and
              dedication to brain health
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className='bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-[#1e3a8a] hover:shadow-lg transition-all duration-300 text-center'
              >
                <div className='inline-flex items-center justify-center p-3 bg-blue-50 rounded-full mb-4'>
                  <div className='text-[#1e3a8a]'>{item.icon}</div>
                </div>
                <h4 className='text-xl font-bold text-gray-900 mb-2'>
                  {item.title}
                </h4>
                <p className='text-gray-600 text-sm'>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            {/* Left - Content */}
            <div>
              <Badge className='bg-[#1e3a8a] text-white border-0 text-sm px-4 py-1 mb-4'>
                Our Process
              </Badge>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
                Steps Toward Better Brain Health
              </h2>
              <p className='text-lg text-gray-600 mb-8'>
                Our proven pathway to comprehensive neuroscience care and
                cognitive excellence
              </p>

              <div className='space-y-6'>
                {[
                  {
                    number: '01',
                    title: 'Initial Consultation',
                    description:
                      'Connect with our expert team for comprehensive assessment and diagnosis',
                    icon: <Users className='h-5 w-5' />,
                  },
                  {
                    number: '02',
                    title: 'Personalized Treatment Plan',
                    description:
                      'Receive a customized care strategy based on your unique needs',
                    icon: <Brain className='h-5 w-5' />,
                  },
                  {
                    number: '03',
                    title: 'Expert Care & Monitoring',
                    description:
                      'Ongoing treatment with continuous progress tracking and adjustments',
                    icon: <Activity className='h-5 w-5' />,
                  },
                  {
                    number: '04',
                    title: 'Long-term Support',
                    description:
                      'Sustained wellness with follow-up care and community resources',
                    icon: <HeartPulse className='h-5 w-5' />,
                  },
                ].map((step, index) => (
                  <div
                    key={index}
                    className='flex items-start gap-4 group cursor-pointer'
                  >
                    <div className='flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#1e3a8a] to-indigo-700 text-white rounded-xl flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform shadow-lg'>
                      {step.number}
                    </div>
                    <div className='flex-grow'>
                      <div className='flex items-center gap-2 mb-2'>
                        <div className='text-[#1e3a8a]'>{step.icon}</div>
                        <h4 className='text-xl font-bold text-gray-900'>
                          {step.title}
                        </h4>
                      </div>
                      <p className='text-gray-600'>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Visual Element */}
            <div className='relative'>
              <div className='bg-gradient-to-br from-[#1e3a8a] to-indigo-700 rounded-2xl p-8 text-white shadow-2xl'>
                <div className='flex items-center justify-between mb-6 pb-4 border-b border-white/20'>
                  <h3 className='text-2xl font-bold'>Patient Journey</h3>
                  <Badge className='bg-green-500 text-white border-0'>
                    Active
                  </Badge>
                </div>

                <div className='space-y-4'>
                  {[
                    { phase: 'Assessment', progress: 100, status: 'completed' },
                    { phase: 'Treatment', progress: 75, status: 'in-progress' },
                    {
                      phase: 'Rehabilitation',
                      progress: 45,
                      status: 'in-progress',
                    },
                    { phase: 'Follow-up', progress: 0, status: 'pending' },
                  ].map((item, index) => (
                    <div key={index}>
                      <div className='flex items-center justify-between mb-2'>
                        <span className='text-white font-medium'>
                          {item.phase}
                        </span>
                        <span className='text-blue-200 text-sm'>
                          {item.progress}%
                        </span>
                      </div>
                      <div className='h-2 bg-white/20 rounded-full overflow-hidden'>
                        <div
                          className={`h-full transition-all duration-500 ${
                            item.status === 'completed'
                              ? 'bg-green-400'
                              : item.status === 'in-progress'
                                ? 'bg-yellow-400'
                                : 'bg-gray-400'
                          }`}
                          style={{ width: `${item.progress}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className='mt-8 pt-6 border-t border-white/20'>
                  <div className='grid grid-cols-2 gap-4 text-sm'>
                    <div>
                      <div className='text-blue-200 mb-1'>Next Session</div>
                      <div className='font-semibold'>In 3 days</div>
                    </div>
                    <div>
                      <div className='text-blue-200 mb-1'>Care Team</div>
                      <div className='font-semibold'>5 specialists</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating stat card */}
              <div className='absolute -bottom-6 -right-6 bg-white rounded-xl shadow-2xl p-6 border-t-4 border-green-500 max-w-xs'>
                <div className='flex items-center gap-4'>
                  <div className='p-3 bg-green-50 rounded-lg'>
                    <CheckCircle className='h-10 w-10 text-green-600' />
                  </div>
                  <div>
                    <div className='text-3xl font-bold text-gray-900'>98%</div>
                    <div className='text-sm text-gray-600'>
                      Patient Satisfaction
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
