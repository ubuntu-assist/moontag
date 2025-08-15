'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Globe, Zap, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

// Define validation schema
const waitlistFormSchema = z.object({
  name: z.string().min(2, { message: 'Veuillez entrer votre nom complet' }),
  email: z
    .string()
    .min(1, { message: "L'email est requis" })
    .email({ message: 'Veuillez entrer une adresse email valide' }),
  country: z
    .string()
    .min(1, { message: 'Veuillez sélectionner votre pays' })
    .refine(
      (value) =>
        [
          'benin',
          'burkina_faso',
          'cameroon',
          'cote_divoire',
          'guinea',
          'mali',
          'niger',
          'senegal',
          'togo',
          'other',
        ].includes(value),
      {
        message: 'Veuillez sélectionner un pays valide',
      }
    ),
  reason: z
    .string()
    .min(1, { message: 'Veuillez indiquer ce qui vous intéresse' })
    .refine(
      (value) =>
        [
          'gift_cards',
          'mobile_topup',
          'utility_payments',
          'crypto_wallet',
          'all',
        ].includes(value),
      {
        message: 'Veuillez sélectionner une option valide',
      }
    ),
})

// Create a type for our form values
type WaitlistFormValues = z.infer<typeof waitlistFormSchema>

export default function WaitlistPage() {
  const [showSuccessDialog, setShowSuccessDialog] = useState<boolean>(false)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [submittedEmail, setSubmittedEmail] = useState<string>('')

  // Initialize the form with React Hook Form
  const form = useForm<WaitlistFormValues>({
    resolver: zodResolver(waitlistFormSchema),
    defaultValues: {
      name: '',
      email: '',
      country: '',
      reason: '',
    },
  })

  const handleSubmit = async (data: WaitlistFormValues) => {
    setIsSubmitting(true)

    // Store email for success message
    setSubmittedEmail(data.email)

    // Mock API call - in a real app, you'd submit to your waitlist API endpoint
    setTimeout(() => {
      console.log('Form data:', data)
      setIsSubmitting(false)
      setShowSuccessDialog(true)
    }, 1500)
  }

  return (
    <>
      <main className='flex-1'>
        {/* Hero Section */}
        <section className='bg-[#FFF4E9] pt-16 pb-20 md:pt-24 md:pb-28'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex flex-col lg:flex-row items-center'>
              <div className='lg:w-1/2 lg:pr-12 mb-12 lg:mb-0'>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900'>
                    Rejoignez la Liste d&apos;Attente d&apos;Abokyh
                  </h1>
                  <p className='mt-6 text-lg md:text-xl text-gray-700 max-w-lg'>
                    Soyez parmi les premiers à accéder à notre plateforme
                    révolutionnaire de gift cards basée sur la cryptomonnaie,
                    conçue pour l&apos;Afrique francophone.
                  </p>
                </motion.div>
              </div>

              <div className='lg:w-1/2 w-full max-w-md mx-auto lg:mx-0'>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className='bg-white rounded-xl shadow-xl p-6 md:p-8'>
                    <h2 className='text-2xl font-bold text-gray-900 mb-6'>
                      Demander un Accès Anticipé
                    </h2>

                    <Form {...form}>
                      <form
                        onSubmit={form.handleSubmit(handleSubmit)}
                        className='space-y-5'
                      >
                        <FormField
                          control={form.control}
                          name='name'
                          render={({ field }) => (
                            <FormItem className='space-y-2'>
                              <FormLabel>Nom Complet</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  placeholder='Entrez votre nom complet'
                                  className='border-gray-300 focus:ring-black focus:border-black'
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
                            <FormItem className='space-y-2'>
                              <FormLabel>Adresse Email</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  type='email'
                                  placeholder='vous@exemple.com'
                                  className='border-gray-300 focus:ring-black focus:border-black'
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name='country'
                          render={({ field }) => (
                            <FormItem className='space-y-2'>
                              <FormLabel>Pays</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger className='border-gray-300 focus:ring-black focus:border-black'>
                                    <SelectValue placeholder='Sélectionnez votre pays' />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value='benin'>Bénin</SelectItem>
                                  <SelectItem value='burkina_faso'>
                                    Burkina Faso
                                  </SelectItem>
                                  <SelectItem value='cameroon'>
                                    Cameroun
                                  </SelectItem>
                                  <SelectItem value='cote_divoire'>
                                    Côte d&apos;Ivoire
                                  </SelectItem>
                                  <SelectItem value='guinea'>Guinée</SelectItem>
                                  <SelectItem value='mali'>Mali</SelectItem>
                                  <SelectItem value='niger'>Niger</SelectItem>
                                  <SelectItem value='senegal'>
                                    Sénégal
                                  </SelectItem>
                                  <SelectItem value='togo'>Togo</SelectItem>
                                  <SelectItem value='other'>Autre</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name='reason'
                          render={({ field }) => (
                            <FormItem className='space-y-2'>
                              <FormLabel>
                                Qu&apos;est-ce qui vous intéresse le plus ?
                              </FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger className='border-gray-300 focus:ring-black focus:border-black'>
                                    <SelectValue placeholder='Sélectionnez une option' />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value='gift_cards'>
                                    Achat de Gift Cards
                                  </SelectItem>
                                  <SelectItem value='mobile_topup'>
                                    Recharges Mobiles
                                  </SelectItem>
                                  <SelectItem value='utility_payments'>
                                    Paiements de Factures
                                  </SelectItem>
                                  <SelectItem value='crypto_wallet'>
                                    Fonctionnalités du Portefeuille Crypto
                                  </SelectItem>
                                  <SelectItem value='all'>
                                    Toutes les Fonctionnalités
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button
                          type='submit'
                          className='w-full bg-black hover:bg-gray-800 text-white py-3'
                          disabled={isSubmitting}
                        >
                          {isSubmitting
                            ? 'Envoi en cours...'
                            : "Rejoindre la Liste d'Attente"}
                        </Button>

                        <p className='text-xs text-gray-500 text-center'>
                          En rejoignant, vous acceptez nos Conditions Générales
                          et notre Politique de Confidentialité.
                        </p>
                      </form>
                    </Form>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className='py-16 md:py-24 bg-white'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='max-w-3xl mx-auto text-center mb-16'>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
                Pourquoi Rejoindre Notre Liste d&apos;Attente ?
              </h2>
              <p className='mt-4 text-lg text-gray-700'>
                Soyez les premiers à découvrir l&apos;avenir des transactions en
                cryptomonnaie en Afrique francophone
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className='bg-[#FFF4E9] rounded-xl p-8'
              >
                <div className='w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm'>
                  <Globe className='h-6 w-6 text-black' />
                </div>
                <h3 className='text-xl font-bold mb-3 text-gray-900'>
                  Accès Anticipé
                </h3>
                <p className='text-gray-700'>
                  Obtenez un accès prioritaire à notre plateforme avant son
                  lancement public, avec un accompagnement exclusif.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className='bg-[#FFF4E9] rounded-xl p-8'
              >
                <div className='w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm'>
                  <Zap className='h-6 w-6 text-black' />
                </div>
                <h3 className='text-xl font-bold mb-3 text-gray-900'>
                  Offres Exclusives
                </h3>
                <p className='text-gray-700'>
                  Profitez de réductions spéciales, de promotions et de bonus
                  réservés exclusivement aux membres de la liste d&apos;attente.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='bg-[#FFF4E9] rounded-xl p-8'
              >
                <div className='w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm'>
                  <Shield className='h-6 w-6 text-black' />
                </div>
                <h3 className='text-xl font-bold mb-3 text-gray-900'>
                  Façonner Notre Avenir
                </h3>
                <p className='text-gray-700'>
                  Fournissez des commentaires qui influenceront directement le
                  développement des fonctionnalités de notre plateforme.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className='py-16 md:py-24 bg-gray-50'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='max-w-3xl mx-auto'>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12'>
                Questions Fréquemment Posées
              </h2>

              <div className='space-y-8'>
                <div>
                  <h3 className='text-xl font-bold text-gray-900 mb-2'>
                    Quand Abokyh sera-t-il lancé ?
                  </h3>
                  <p className='text-gray-700'>
                    Nous prévoyons de lancer notre version bêta au deuxième
                    trimestre 2025. Les membres de la liste d&apos;attente
                    auront un accès prioritaire à la plateforme.
                  </p>
                </div>

                <div>
                  <h3 className='text-xl font-bold text-gray-900 mb-2'>
                    Quels pays seront pris en charge au lancement ?
                  </h3>
                  <p className='text-gray-700'>
                    Nous lancerons initialement dans certains pays francophones
                    d&apos;Afrique, notamment la Côte d&apos;Ivoire, le Sénégal
                    et le Cameroun, avec des plans d&apos;expansion vers
                    d&apos;autres pays peu après.
                  </p>
                </div>

                <div>
                  <h3 className='text-xl font-bold text-gray-900 mb-2'>
                    Quelles cryptomonnaies seront prises en charge ?
                  </h3>
                  <p className='text-gray-700'>
                    Au lancement, nous prendrons en charge Stellar (XLM),
                    Bitcoin (BTC), Ethereum (ETH) et USD Coin (USDC), avec des
                    plans pour ajouter d&apos;autres cryptomonnaies en fonction
                    de la demande.
                  </p>
                </div>

                <div>
                  <h3 className='text-xl font-bold text-gray-900 mb-2'>
                    Y aura-t-il des frais pour utiliser Abokyh ?
                  </h3>
                  <p className='text-gray-700'>
                    Abokyh appliquera des frais de transaction minimes, avec des
                    tarifs réduits spéciaux pour les membres de la liste
                    d&apos;attente. La structure exacte des frais sera annoncée
                    prochainement avant le lancement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className='max-w-md'>
          <DialogHeader>
            <DialogTitle className='text-xl font-bold text-center'>
              Vous êtes sur la liste !
            </DialogTitle>
          </DialogHeader>

          {/* Using separate elements instead of nesting div inside DialogDescription */}
          <div className='text-center'>
            <div className='mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center my-6'>
              <Check className='h-8 w-8 text-green-600' />
            </div>
            <p className='text-gray-700'>
              Merci d&apos;avoir rejoint la liste d&apos;attente d&apos;Abokyh.
              Nous avons reçu vos informations et vous informerons lorsque nous
              serons prêts à accueillir de nouveaux utilisateurs.
            </p>
          </div>

          <div className='bg-[#FFF4E9] p-4 rounded-lg mt-2'>
            <div className='flex items-center'>
              <span className='text-sm text-gray-700'>
                Veuillez vérifier votre email <strong>{submittedEmail}</strong>{' '}
                pour un message de confirmation.
              </span>
            </div>
          </div>

          <div className='text-center mt-2'>
            <p className='text-sm text-gray-600'>
              Restez à l&apos;écoute pour des mises à jour exclusives et des
              informations sur l&apos;accès anticipé.
            </p>
          </div>

          <DialogFooter className='mt-6'>
            <Button
              className='w-full bg-black hover:bg-gray-800 text-white'
              onClick={() => setShowSuccessDialog(false)}
            >
              Compris, merci !
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
