'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Check,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Terminal,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  subject: z.string({
    required_error: 'Please select a subject for your message',
  }),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters' }),
})

type ContactFormValues = z.infer<typeof contactFormSchema>

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  })

  const handleSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      console.log('Form data:', data)
      setIsSubmitting(false)
      setIsSubmitted(true)
      form.reset()

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  const contactMethods = [
    {
      icon: <Mail className='h-5 w-5' />,
      title: 'Email Support',
      description: 'Get in touch with our team',
      contact: 'hello@moontag.com',
      link: 'mailto:hello@moontag.com',
      badge: 'Primary',
    },
    {
      icon: <Phone className='h-5 w-5' />,
      title: 'Phone Support',
      description: 'Speak directly with us',
      contact: '+225 01 513 92626',
      link: 'tel:+22501513922626',
      badge: 'Available',
    },
    {
      icon: <MessageCircle className='h-5 w-5' />,
      title: 'Live Chat',
      description: 'Chat with our support team',
      contact: 'Available 9AM - 6PM',
      link: '#',
      badge: 'Online',
    },
  ]

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
              <h1 className='text-4xl md:text-5xl font-bold'>Get In Touch</h1>
              <Badge className='bg-[#00BCD4] text-white border-0 text-sm font-mono'>
                Support Ready
              </Badge>
            </div>
            <p className='text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl'>
              Have questions about Moontag? Ready to start your next project?
              Our team is here to help you build something amazing.
            </p>
            <div className='flex flex-wrap gap-8 text-sm font-mono'>
              <div className='flex items-center gap-2'>
                <div className='w-2 h-2 bg-green-400 rounded-full'></div>
                <span className='text-green-400'>Support Team Online</span>
              </div>
              <div className='flex items-center gap-2'>
                <div className='w-2 h-2 bg-[#00BCD4] rounded-full'></div>
                <span className='text-gray-300'>24h Response Time</span>
              </div>
              <div className='flex items-center gap-2'>
                <div className='w-2 h-2 bg-[#4CAF50] rounded-full'></div>
                <span className='text-gray-300'>Multiple Channels</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              Contact Methods
            </h2>
            <p className='text-lg text-gray-600'>
              Choose the best way to reach our team
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-16'>
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className='border-2 border-gray-200 hover:border-[#00BCD4] transition-all duration-300 h-full'>
                  <CardContent className='p-6 text-center'>
                    <div className='w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center mx-auto mb-4'>
                      {method.icon}
                    </div>
                    <div className='flex items-center justify-center gap-2 mb-2'>
                      <h3 className='font-bold text-gray-900'>
                        {method.title}
                      </h3>
                      <Badge
                        variant='outline'
                        className={`text-xs font-mono ${
                          method.badge === 'Online'
                            ? 'border-green-500 text-green-600 bg-green-50'
                            : method.badge === 'Available'
                              ? 'border-[#00BCD4] text-[#00BCD4] bg-blue-50'
                              : 'border-[#4CAF50] text-[#4CAF50] bg-green-50'
                        }`}
                      >
                        {method.badge}
                      </Badge>
                    </div>
                    <p className='text-gray-600 text-sm mb-4'>
                      {method.description}
                    </p>
                    <a
                      href={method.link}
                      className='text-[#00BCD4] hover:text-[#4CAF50] font-mono text-sm font-medium transition-colors'
                    >
                      {method.contact}
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className='py-16'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className='bg-gray-50 rounded-lg p-8 border-2 border-gray-200'>
                <div className='flex items-center gap-3 mb-6'>
                  <Terminal className='h-6 w-6 text-[#00BCD4]' />
                  <h2 className='text-2xl font-bold text-gray-900'>
                    Send Message
                  </h2>
                </div>

                {isSubmitted ? (
                  <div className='bg-green-50 border border-green-200 rounded-lg p-6 flex items-start'>
                    <Check className='text-green-600 mr-3 mt-1 flex-shrink-0' />
                    <div>
                      <h3 className='font-bold text-green-800 mb-2'>
                        Message Sent Successfully
                      </h3>
                      <p className='text-green-700 text-sm'>
                        Thank you for contacting us! We&apos;ve received your
                        message and will respond within 24 hours.
                      </p>
                    </div>
                  </div>
                ) : (
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(handleSubmit)}
                      className='space-y-6'
                    >
                      <FormField
                        control={form.control}
                        name='name'
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className='text-sm font-medium text-gray-700'>
                              Full Name
                            </FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder='Your full name'
                                className='border-gray-300 focus:ring-[#00BCD4] focus:border-[#00BCD4] bg-white'
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name='email'
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className='text-sm font-medium text-gray-700'>
                              Email Address
                            </FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type='email'
                                placeholder='your.email@domain.com'
                                className='border-gray-300 focus:ring-[#00BCD4] focus:border-[#00BCD4] bg-white font-mono'
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name='subject'
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className='text-sm font-medium text-gray-700'>
                              Subject
                            </FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className='border-gray-300 focus:ring-[#00BCD4] focus:border-[#00BCD4] bg-white'>
                                  <SelectValue placeholder='Select a subject' />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className='bg-white'>
                                <SelectItem value='project'>
                                  New Project
                                </SelectItem>
                                <SelectItem value='support'>
                                  Technical Support
                                </SelectItem>
                                <SelectItem value='partnership'>
                                  Partnership
                                </SelectItem>
                                <SelectItem value='training'>
                                  Training Programs
                                </SelectItem>
                                <SelectItem value='general'>
                                  General Inquiry
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name='message'
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className='text-sm font-medium text-gray-700'>
                              Message
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                {...field}
                                placeholder='Tell us about your project or how we can help...'
                                rows={6}
                                className='border-gray-300 focus:ring-[#00BCD4] focus:border-[#00BCD4] bg-white resize-none'
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type='submit'
                        className='w-full bg-[#00BCD4] hover:bg-[#4CAF50] text-white py-3 font-medium'
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2'></div>
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <Send className='mr-2 h-4 w-4' />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                )}
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='space-y-8'
            >
              <div>
                <h2 className='text-2xl font-bold text-gray-900 mb-6'>
                  Office Information
                </h2>

                <div className='space-y-6'>
                  <div className='flex items-start gap-4'>
                    <div className='p-2 bg-[#00BCD4] text-white rounded'>
                      <MapPin className='h-5 w-5' />
                    </div>
                    <div>
                      <h3 className='font-semibold text-gray-900 mb-1'>
                        Office Location
                      </h3>
                      <p className='text-gray-600'>
                        Cocody, Riviera
                        <br />
                        Abidjan, Côte d&apos;Ivoire
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start gap-4'>
                    <div className='p-2 bg-[#4CAF50] text-white rounded'>
                      <Clock className='h-5 w-5' />
                    </div>
                    <div>
                      <h3 className='font-semibold text-gray-900 mb-1'>
                        Business Hours
                      </h3>
                      <div className='text-gray-600 space-y-1 font-mono text-sm'>
                        <div>Monday - Friday: 9:00 AM - 6:00 PM</div>
                        <div>Saturday: 10:00 AM - 2:00 PM</div>
                        <div>Sunday: Closed</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Support */}
              <div className='bg-red-50 border border-red-200 rounded-lg p-6'>
                <h3 className='font-bold text-red-800 mb-2'>
                  Emergency Support
                </h3>
                <p className='text-red-700 text-sm mb-3'>
                  For urgent technical issues affecting production systems
                </p>
                <Button
                  variant='outline'
                  className='border-red-300 text-red-700 hover:bg-red-50 text-sm'
                  asChild
                >
                  <a href='mailto:emergency@moontag.com'>
                    Contact Emergency Support
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='text-center mb-8'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              Find Our Office
            </h2>
            <p className='text-lg text-gray-600'>
              Located in the heart of Abidjan&apos;s tech district
            </p>
          </div>
          <div className='bg-white rounded-lg border-2 border-gray-200 overflow-hidden'>
            <div className='h-96'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15889.656004167582!2d-3.9986410128418086!3d5.353620599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1ed002900554b%3A0xa1e0572106cab326!2sCocody%20Riviera%20bonoumin!5e0!3m2!1sen!2scm!4v1753373719535!5m2!1sen!2scm'
                width='100%'
                height='100%'
                style={{ border: 0 }}
                allowFullScreen
                loading='lazy'
                title='Moontag Office Location'
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ContactPage
