'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, MapPin, Phone, Mail, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
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
  name: z
    .string()
    .min(2, { message: 'Le nom doit comporter au moins 2 caractères' }),
  email: z
    .string()
    .email({ message: 'Veuillez entrer une adresse e-mail valide' }),
  subject: z.string({
    required_error: 'Veuillez sélectionner un sujet pour votre message',
  }),
  message: z
    .string()
    .min(10, { message: 'Le message doit comporter au moins 10 caractères' }),
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

  return (
    <div className='min-h-screen flex flex-col bg-gradient-to-r from-[#00BCD4] to-[#4CAF50]'>
      <main className='flex-grow'>
        {/* Hero Section */}
        <div className='bg-white py-16 md:py-24'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className='text-4xl md:text-5xl font-bold text-black mb-4'>
                Contactez-nous
              </h1>
              <p className='text-xl text-gray-700 max-w-3xl mx-auto'>
                Vous avez des questions sur Abokyh ? Nous sommes là pour vous
                aider ! Contactez notre équipe et nous vous répondrons dès que
                possible.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Contact Section */}
        <div className='py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className='text-2xl font-bold text-white mb-6'>
                Envoyez-nous un message
              </h2>

              {isSubmitted ? (
                <div className='bg-white bg-opacity-20 border border-white rounded-lg p-6 flex items-start'>
                  <Check className='text-[#4CAF50] mr-3 mt-1' />
                  <div>
                    <h3 className='font-bold text-white'>
                      Message envoyé avec succès
                    </h3>
                    <p className='text-white text-opacity-90'>
                      Merci de nous avoir contactés ! Nous avons reçu votre
                      message et vous répondrons dès que possible.
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
                          <FormLabel className='text-sm font-medium text-white'>
                            Nom complet
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder='Votre nom complet'
                              className='border-white focus:ring-[#4CAF50] focus:border-[#4CAF50] bg-white text-black'
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
                          <FormLabel className='text-sm font-medium text-white'>
                            Adresse e-mail
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type='email'
                              placeholder='Votre adresse e-mail'
                              className='border-white focus:ring-[#4CAF50] focus:border-[#4CAF50] bg-white text-black'
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
                          <FormLabel className='text-sm font-medium text-white'>
                            Sujet
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className='border-white focus:ring-[#4CAF50] focus:border-[#4CAF50] bg-white text-black'>
                                <SelectValue placeholder='Sélectionnez un sujet' />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className='bg-white text-black'>
                              <SelectItem value='general'>
                                Demande générale
                              </SelectItem>
                              <SelectItem value='support'>
                                Support technique
                              </SelectItem>
                              <SelectItem value='partnership'>
                                Partenariat commercial
                              </SelectItem>
                              <SelectItem value='feedback'>Feedback</SelectItem>
                              <SelectItem value='other'>Autre</SelectItem>
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
                          <FormLabel className='text-sm font-medium text-white'>
                            Message
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              placeholder='Comment pouvons-nous vous aider ?'
                              rows={6}
                              className='border-white focus:ring-[#4CAF50] focus:border-[#4CAF50] bg-white text-black resize-none'
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type='submit'
                      className='w-full bg-[#00BCD4] hover:bg-[#4CAF50] text-white py-3'
                      disabled={isSubmitting}
                    >
                      {isSubmitting
                        ? 'Envoi en cours...'
                        : 'Envoyer le message'}
                    </Button>
                  </form>
                </Form>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className='text-2xl font-bold text-white mb-6'>
                Informations de contact
              </h2>

              <div className='bg-white bg-opacity-90 rounded-xl p-8 mb-8'>
                <div className='space-y-6'>
                  <div className='flex items-start'>
                    <div className='flex-shrink-0'>
                      <MapPin className='h-6 w-6 text-[#00BCD4] mt-1' />
                    </div>
                    <div className='ml-4'>
                      <h3 className='text-lg font-bold text-black'>
                        Notre bureau
                      </h3>
                      <p className='text-gray-700 mt-1'>
                        Cocody, Riviera Abidjan
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start'>
                    <div className='flex-shrink-0'>
                      <Phone className='h-6 w-6 text-[#00BCD4] mt-1' />
                    </div>
                    <div className='ml-4'>
                      <h3 className='text-lg font-bold text-black'>
                        Téléphone
                      </h3>
                      <p className='text-gray-700 mt-1'>
                        <a
                          href='tel:+2250123456789'
                          className='hover:text-[#4CAF50]'
                        >
                          +225 01 513 92626
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start'>
                    <div className='flex-shrink-0'>
                      <Mail className='h-6 w-6 text-[#00BCD4] mt-1' />
                    </div>
                    <div className='ml-4'>
                      <h3 className='text-lg font-bold text-black'>E-mail</h3>
                      <p className='text-gray-700 mt-1'>
                        <a
                          href='mailto:support@abokyh.com'
                          className='hover:text-[#4CAF50]'
                        >
                          abokyh@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start'>
                    <div className='flex-shrink-0'>
                      <Clock className='h-6 w-6 text-[#00BCD4] mt-1' />
                    </div>
                    <div className='ml-4'>
                      <h3 className='text-lg font-bold text-black'>
                        Heures d&apos;ouverture
                      </h3>
                      <p className='text-gray-700 mt-1'>
                        Lundi - Vendredi : 9h00 - 18h00
                        <br />
                        Samedi : 10h00 - 14h00
                        <br />
                        Dimanche : Fermé
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              {/* <div>
                <h2 className='text-2xl font-bold text-white mb-4'>
                  Questions fréquentes
                </h2>
                <p className='text-white text-opacity-90 mb-4'>
                  Vous ne trouvez pas la réponse que vous cherchez ? Consultez
                  notre section FAQ complète.
                </p>
                <Button className='bg-[#00BCD4] hover:bg-[#4CAF50] text-white'>
                  Voir la FAQ
                </Button>
              </div> */}
            </motion.div>
          </div>
        </div>

        {/* Map Section */}
        <div className='bg-white py-16'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-2xl font-bold text-black mb-8 text-center'>
              Trouvez-nous
            </h2>
            <div className='h-96 rounded-xl overflow-hidden border-2 border-[#00BCD4]'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15889.656004167582!2d-3.9986410128418086!3d5.353620599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1ed002900554b%3A0xa1e0572106cab326!2sCocody%20Riviera%20bonoumin!5e0!3m2!1sen!2scm!4v1753373719535!5m2!1sen!2scm'
                width='100%'
                height='100%'
                style={{ border: 0 }}
                allowFullScreen
                loading='lazy'
                title='Carte de localisation de Tech Hub Abidjan'
              ></iframe>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ContactPage
