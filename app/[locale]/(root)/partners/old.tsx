'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Check,
  ArrowRight,
  Building2,
  CreditCard,
  Users,
  Globe,
  Shield,
  // Loader2,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import { Textarea } from '@/components/ui/textarea'
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from '@/components/ui/select'
// import { Checkbox } from '@/components/ui/checkbox'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog'
// import { useForm } from 'react-hook-form'
// import { zodResolver } from '@hookform/resolvers/zod'
// import * as z from 'zod'
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from '@/components/ui/form'

// const businessTypes = [
//   'Détaillant',
//   'Boutique en ligne',
//   'Fournisseur de gift cards',
//   'Fournisseur de services publics',
//   'Opérateur de réseau mobile',
//   'Institution financière',
//   'Autre',
// ]

// const partnerTypes = [
//   'Partenaire marchand',
//   'Fournisseur de gift cards',
//   'Fournisseur de services publics',
//   'Fournisseur de réseau mobile',
//   'Partenaire technologique',
//   'Revendeur',
// ]

// const countries = [
//   'Bénin',
//   'Burkina Faso',
//   'Cameroun',
//   'République centrafricaine',
//   'Tchad',
//   'Congo',
//   "Côte d'Ivoire",
//   'République démocratique du Congo',
//   'Guinée équatoriale',
//   'Gabon',
//   'Guinée',
//   'Mali',
//   'Niger',
//   'Sénégal',
//   'Togo',
// ]

// const partnerFormSchema = z.object({
//   businessName: z.string().min(2, {
//     message: "Le nom de l'entreprise doit comporter au moins 2 caractères",
//   }),

//   businessType: z
//     .string()
//     .min(1, { message: "Veuillez sélectionner un type d'entreprise" }),

//   country: z
//     .string()
//     .min(1, { message: "Veuillez sélectionner un pays d'opération" }),

//   website: z
//     .string()
//     .url({ message: 'Veuillez entrer une URL valide' })
//     .optional()
//     .or(z.literal('')),

//   description: z.string().min(20, {
//     message: 'La description doit comporter au moins 20 caractères',
//   }),

//   // Contact Information
//   contactName: z.string().min(2, {
//     message: 'Le nom du contact doit comporter au moins 2 caractères',
//   }),

//   email: z
//     .string()
//     .min(1, { message: "L'email est requis" })
//     .email({ message: 'Veuillez entrer une adresse email valide' }),

//   phone: z
//     .string()
//     .min(7, {
//       message: 'Le numéro de téléphone doit comporter au moins 7 caractères',
//     })
//     .regex(/^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,9}$/, {
//       message: 'Veuillez entrer un numéro de téléphone valide',
//     }),

//   partnerType: z
//     .string()
//     .min(1, { message: 'Veuillez sélectionner un type de partenariat' }),

//   acceptTerms: z.literal(true, {
//     errorMap: () => ({
//       message: 'Vous devez accepter les conditions générales',
//     }),
//   }),
// })

// type PartnerFormValues = z.infer<typeof partnerFormSchema>

const PartnerPage = () => {
  const [showDialog, setShowDialog] = useState(false)
  // const [isSubmitting, setIsSubmitting] = useState(false)

  // const form = useForm<PartnerFormValues>({
  //   resolver: zodResolver(partnerFormSchema),
  //   defaultValues: {
  //     businessName: '',
  //     businessType: '',
  //     country: '',
  //     website: '',
  //     description: '',
  //     contactName: '',
  //     email: '',
  //     phone: '',
  //     partnerType: '',
  //     acceptTerms: undefined,
  //   },
  // })

  // const handleSubmit = (data: PartnerFormValues) => {
  //   setIsSubmitting(true)

  //   setTimeout(() => {
  //     console.log('Partner application data:', data)
  //     setIsSubmitting(false)
  //     setShowDialog(true)
  //   }, 1500)
  // }

  return (
    <div>
      <main>
        {/* Hero Section */}
        <section className='bg-[#FFF4E9] py-16 md:py-24'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex flex-col lg:flex-row items-center'>
              <div className='lg:w-1/2 lg:pr-12 mb-8 lg:mb-0'>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className='text-4xl md:text-5xl font-bold leading-tight text-gray-900'>
                    Devenez Partenaire d&apos;Abokyh
                  </h1>
                  <p className='mt-6 text-lg text-gray-700 max-w-lg'>
                    Rejoignez notre écosystème croissant de partenaires et
                    contribuez à offrir des solutions en cryptomonnaie aux
                    consommateurs à travers l&apos;Afrique francophone.
                  </p>
                  <div className='mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4'>
                    <Button className='bg-black text-white' size='lg'>
                      <a href='mailto:abokyh@gmail.com'>Postuler Maintenant</a>
                    </Button>
                    <Button
                      variant='outline'
                      className='border-gray-300'
                      size='lg'
                    >
                      <a href='#benefits'>En Savoir Plus</a>
                    </Button>
                  </div>
                </motion.div>
              </div>
              <div className='lg:w-1/2'>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <img
                    src='/images/partners/stellar-logo.png'
                    alt='Partenaires Abokyh'
                    className='w-full h-auto rounded-xl shadow-lg'
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Types Section */}
        <section className='py-16 bg-white' id='benefits'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
                Pourquoi Devenir Partenaire
              </h2>
              <div className='w-20 h-1 bg-black mx-auto mt-4'></div>
              <p className='mt-6 text-xl text-gray-600 max-w-3xl mx-auto'>
                Abokyh offre diverses opportunités de partenariat aux
                entreprises souhaitant élargir leur portée sur le marché
                croissant de la cryptomonnaie en Afrique francophone.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              <Card className='border-none shadow-md'>
                <CardHeader>
                  <div className='w-12 h-12 bg-[#FFE9D1] rounded-full flex items-center justify-center mb-4'>
                    <Building2 className='h-6 w-6 text-black' />
                  </div>
                  <CardTitle className='text-xl'>
                    Partenaires Marchands
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-gray-600'>
                    Acceptez les gift cards Abokyh comme moyen de paiement dans
                    votre entreprise et atteignez les utilisateurs de
                    cryptomonnaie à travers l&apos;Afrique francophone.
                  </p>
                  <ul className='mt-4 space-y-2'>
                    <li className='flex items-start'>
                      <Check className='h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5' />
                      <span>Élargissez votre clientèle</span>
                    </li>
                    <li className='flex items-start'>
                      <Check className='h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5' />
                      <span>Aucune connaissance en cryptomonnaie requise</span>
                    </li>
                    <li className='flex items-start'>
                      <Check className='h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5' />
                      <span>Recevez les paiements en monnaie locale</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant='outline' className='w-full mt-4' asChild>
                    <a href='#apply'>
                      Postuler comme Marchand
                      <ArrowRight className='ml-2 h-4 w-4' />
                    </a>
                  </Button>
                </CardFooter>
              </Card>

              <Card className='border-none shadow-md'>
                <CardHeader>
                  <div className='w-12 h-12 bg-[#FFE9D1] rounded-full flex items-center justify-center mb-4'>
                    <CreditCard className='h-6 w-6 text-black' />
                  </div>
                  <CardTitle className='text-xl'>
                    Fournisseurs de Gift Cards
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-gray-600'>
                    Listez vos gift cards sur notre plateforme et accédez au
                    marché croissant de la cryptomonnaie en Afrique francophone.
                  </p>
                  <ul className='mt-4 space-y-2'>
                    <li className='flex items-start'>
                      <Check className='h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5' />
                      <span>Atteignez de nouveaux segments de clients</span>
                    </li>
                    <li className='flex items-start'>
                      <Check className='h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5' />
                      <span>Processus d&apos;intégration simplifié</span>
                    </li>
                    <li className='flex items-start'>
                      <Check className='h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5' />
                      <span>
                        Règlements réguliers dans la devise de votre choix
                      </span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant='outline' className='w-full mt-4' asChild>
                    <a href='#apply'>
                      Postuler comme Fournisseur
                      <ArrowRight className='ml-2 h-4 w-4' />
                    </a>
                  </Button>
                </CardFooter>
              </Card>

              <Card className='border-none shadow-md'>
                <CardHeader>
                  <div className='w-12 h-12 bg-[#FFE9D1] rounded-full flex items-center justify-center mb-4'>
                    <Globe className='h-6 w-6 text-black' />
                  </div>
                  <CardTitle className='text-xl'>
                    Fournisseurs de Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-gray-600'>
                    Activez les paiements en cryptomonnaie pour vos services
                    publics, mobiles ou autres services essentiels via notre
                    plateforme.
                  </p>
                  <ul className='mt-4 space-y-2'>
                    <li className='flex items-start'>
                      <Check className='h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5' />
                      <span>Réduisez les coûts de collecte des paiements</span>
                    </li>
                    <li className='flex items-start'>
                      <Check className='h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5' />
                      <span>Améliorez l&apos;accessibilité des paiements</span>
                    </li>
                    <li className='flex items-start'>
                      <Check className='h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5' />
                      <span>Intégration API et support technique</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant='outline' className='w-full mt-4' asChild>
                    <a href='#apply'>
                      Postuler comme Fournisseur de Services
                      <ArrowRight className='ml-2 h-4 w-4' />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Partner Benefits Section */}
        <section className='py-16 bg-[#FFF4E9]'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
                Avantages pour les Partenaires
              </h2>
              <div className='w-20 h-1 bg-black mx-auto mt-4'></div>
              <p className='mt-6 text-xl text-gray-600 max-w-3xl mx-auto'>
                Rejoignez notre réseau de partenaires et profitez d&apos;une
                gamme d&apos;avantages conçus pour aider votre entreprise à se
                développer.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16'>
              <div>
                <img
                  src='/images/partnership.gif'
                  alt='Avantages des Partenaires Abokyh'
                  className='w-full h-auto rounded-xl shadow-lg'
                />
              </div>
              <div className='space-y-6'>
                <div className='flex'>
                  <div className='flex-shrink-0'>
                    <div className='w-10 h-10 bg-black rounded-full flex items-center justify-center'>
                      <Users className='h-5 w-5 text-white' />
                    </div>
                  </div>
                  <div className='ml-4'>
                    <h3 className='text-xl font-bold text-gray-900'>
                      Accès à de Nouveaux Clients
                    </h3>
                    <p className='mt-2 text-gray-600'>
                      Accédez à la base croissante d&apos;utilisateurs
                      d&apos;Abokyh, détenteurs de cryptomonnaies souhaitant
                      dépenser leurs actifs numériques pour des achats
                      quotidiens.
                    </p>
                  </div>
                </div>

                <div className='flex'>
                  <div className='flex-shrink-0'>
                    <div className='w-10 h-10 bg-black rounded-full flex items-center justify-center'>
                      <Shield className='h-5 w-5 text-white' />
                    </div>
                  </div>
                  <div className='ml-4'>
                    <h3 className='text-xl font-bold text-gray-900'>
                      Intégration Sans Risque
                    </h3>
                    <p className='mt-2 text-gray-600'>
                      Aucune exposition à la volatilité des cryptomonnaies.
                      Recevez des règlements en monnaie locale avec des
                      calendriers de paiement prévisibles.
                    </p>
                  </div>
                </div>

                <div className='flex'>
                  <div className='flex-shrink-0'>
                    <div className='w-10 h-10 bg-black rounded-full flex items-center justify-center'>
                      <CreditCard className='h-5 w-5 text-white' />
                    </div>
                  </div>
                  <div className='ml-4'>
                    <h3 className='text-xl font-bold text-gray-900'>
                      Frais de Transaction Réduits
                    </h3>
                    <p className='mt-2 text-gray-600'>
                      Des frais de traitement des paiements plus bas que les
                      méthodes traditionnelles, vous aidant à améliorer vos
                      marges.
                    </p>
                  </div>
                </div>

                <div className='flex'>
                  <div className='flex-shrink-0'>
                    <div className='w-10 h-10 bg-black rounded-full flex items-center justify-center'>
                      <Globe className='h-5 w-5 text-white' />
                    </div>
                  </div>
                  <div className='ml-4'>
                    <h3 className='text-xl font-bold text-gray-900'>
                      Support Technique
                    </h3>
                    <p className='mt-2 text-gray-600'>
                      Notre équipe dédiée au succès des partenaires fournit un
                      support technique, une assistance à l&apos;intégration et
                      une gestion continue des relations.
                    </p>
                  </div>
                </div>

                <Button className='mt-4 bg-black text-white' size='lg' asChild>
                  <a href='#apply'>Devenir Partenaire</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className='py-16 bg-white'>
          <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
                Questions Fréquemment Posées
              </h2>
              <div className='w-20 h-1 bg-black mx-auto mt-4'></div>
            </div>

            <Accordion type='single' collapsible className='w-full'>
              <AccordionItem value='item-1'>
                <AccordionTrigger className='text-left text-gray-900 font-medium'>
                  Quels types d&apos;entreprises peuvent devenir partenaires
                  d&apos;Abokyh ?
                </AccordionTrigger>
                <AccordionContent className='text-gray-600'>
                  Nous collaborons avec une large gamme d&apos;entreprises,
                  notamment des détaillants, des boutiques en ligne, des
                  fournisseurs de gift cards, des compagnies de services
                  publics, des opérateurs de réseaux mobiles et des institutions
                  financières. Si votre entreprise sert des clients en Afrique
                  francophone, nous serions ravis d&apos;explorer des
                  opportunités de partenariat avec vous.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value='item-2'>
                <AccordionTrigger className='text-left text-gray-900 font-medium'>
                  Dois-je comprendre la cryptomonnaie pour devenir partenaire ?
                </AccordionTrigger>
                <AccordionContent className='text-gray-600'>
                  Non, aucune connaissance en cryptomonnaie n&apos;est requise.
                  Nous gérons toute la complexité des transactions en
                  cryptomonnaie. Vous pouvez recevoir des règlements en monnaie
                  locale et intégrer notre plateforme à l&apos;aide d&apos;API
                  standards. Notre équipe vous guidera tout au long du
                  processus.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value='item-3'>
                <AccordionTrigger className='text-left text-gray-900 font-medium'>
                  Comment fonctionnent les règlements pour les partenaires ?
                </AccordionTrigger>
                <AccordionContent className='text-gray-600'>
                  Les partenaires peuvent choisir de recevoir des règlements en
                  monnaie locale ou en cryptomonnaie. Nous proposons des
                  calendriers de règlement flexibles (quotidiens, hebdomadaires
                  ou mensuels) pour répondre aux besoins de votre entreprise.
                  Les règlements sont traités automatiquement, et vous recevrez
                  des rapports détaillés de toutes les transactions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value='item-4'>
                <AccordionTrigger className='text-left text-gray-900 font-medium'>
                  Quelles sont les exigences techniques pour l&apos;intégration
                  ?
                </AccordionTrigger>
                <AccordionContent className='text-gray-600'>
                  Pour la plupart des partenaires, l&apos;intégration est simple
                  et nécessite des ressources techniques minimales. Nous
                  fournissons une documentation API complète, des SDK et un
                  support pour les développeurs. Pour les partenaires marchands,
                  vous pouvez commencer à accepter les gift cards sans aucune
                  intégration technique. Notre équipe collaborera avec vous pour
                  déterminer la meilleure approche d&apos;intégration pour votre
                  entreprise.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value='item-5'>
                <AccordionTrigger className='text-left text-gray-900 font-medium'>
                  Combien de temps prend le processus de candidature pour les
                  partenaires ?
                </AccordionTrigger>
                <AccordionContent className='text-gray-600'>
                  Après avoir soumis votre candidature, notre équipe de
                  partenariat l&apos;examinera et vous répondra dans un délai de
                  3 à 5 jours ouvrables. Si elle est approuvée, le processus
                  d&apos;intégration prend généralement 1 à 2 semaines, selon la
                  complexité de l&apos;intégration et le type de partenariat.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Application Form Section */}
        {/*
        <section className='py-16 bg-[#FFF4E9]' id='apply'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
                Postuler pour Devenir Partenaire
              </h2>
              <div className='w-20 h-1 bg-black mx-auto mt-4'></div>
              <p className='mt-6 text-xl text-gray-600 max-w-3xl mx-auto'>
                Remplissez le formulaire ci-dessous pour postuler à un
                partenariat avec Abokyh. Notre équipe examinera votre
                candidature et vous répondra sous peu.
              </p>
            </div>

            <div className='max-w-3xl mx-auto'>
              <Card className='border-none shadow-lg'>
                <CardContent className='p-6'>
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(handleSubmit)}
                      className='space-y-6'
                    >
                      <div className='space-y-4'>
                        <h3 className='text-lg font-bold text-gray-900'>
                          Informations sur l'Entreprise
                        </h3>

                        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                          <FormField
                            control={form.control}
                            name='businessName'
                            render={({ field }) => (
                              <FormItem className='space-y-2'>
                                <FormLabel>
                                  Nom de l'Entreprise{' '}
                                  <span className='text-red-500'>*</span>
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    {...field}
                                    placeholder='Nom de votre entreprise'
                                    className='border-gray-300 focus:ring-black focus:border-black'
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name='businessType'
                            render={({ field }) => (
                              <FormItem className='space-y-2'>
                                <FormLabel>
                                  Type d'Entreprise{' '}
                                  <span className='text-red-500'>*</span>
                                </FormLabel>
                                <Select
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger className='border-gray-300 focus:ring-black focus:border-black'>
                                      <SelectValue placeholder="Sélectionnez le type d'entreprise" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {businessTypes.map((type) => (
                                      <SelectItem key={type} value={type}>
                                        {type}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                          <FormField
                            control={form.control}
                            name='country'
                            render={({ field }) => (
                              <FormItem className='space-y-2'>
                                <FormLabel>
                                  Pays d'Opération{' '}
                                  <span className='text-red-500'>*</span>
                                </FormLabel>
                                <Select
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger className='border-gray-300 focus:ring-black focus:border-black'>
                                      <SelectValue placeholder='Sélectionnez le pays' />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {countries.map((country) => (
                                      <SelectItem key={country} value={country}>
                                        {country}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name='website'
                            render={({ field }) => (
                              <FormItem className='space-y-2'>
                                <FormLabel>Site Web</FormLabel>
                                <FormControl>
                                  <Input
                                    {...field}
                                    placeholder='https://www.exemple.com'
                                    className='border-gray-300 focus:ring-black focus:border-black'
                                  />
                                </FormControl>
                                <FormDescription className='text-xs'>
                                  Optionnel - Laissez vide si vous n'avez
                                  pas de site web
                                </FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name='description'
                          render={({ field }) => (
                            <FormItem className='space-y-2'>
                              <FormLabel>
                                Description de l'Entreprise{' '}
                                <span className='text-red-500'>*</span>
                              </FormLabel>
                              <FormControl>
                                <Textarea
                                  {...field}
                                  placeholder='Décrivez brièvement votre entreprise et comment vous souhaitez collaborer avec Abokyh'
                                  className='border-gray-300 focus:ring-black focus:border-black'
                                  rows={4}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className='space-y-4'>
                        <h3 className='text-lg font-bold text-gray-900'>
                          Informations de Contact
                        </h3>

                        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                          <FormField
                            control={form.control}
                            name='contactName'
                            render={({ field }) => (
                              <FormItem className='space-y-2'>
                                <FormLabel>
                                  Nom du Contact{' '}
                                  <span className='text-red-500'>*</span>
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    {...field}
                                    placeholder='Nom complet'
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
                                <FormLabel>
                                  Adresse Email{' '}
                                  <span className='text-red-500'>*</span>
                                </FormLabel>
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
                        </div>

                        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                          <FormField
                            control={form.control}
                            name='phone'
                            render={({ field }) => (
                              <FormItem className='space-y-2'>
                                <FormLabel>
                                  Numéro de Téléphone{' '}
                                  <span className='text-red-500'>*</span>
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    {...field}
                                    placeholder='ex. +123 456 7890'
                                    className='border-gray-300 focus:ring-black focus:border-black'
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name='partnerType'
                            render={({ field }) => (
                              <FormItem className='space-y-2'>
                                <FormLabel>
                                  Type de Partenariat{' '}
                                  <span className='text-red-500'>*</span>
                                </FormLabel>
                                <Select
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger className='border-gray-300 focus:ring-black focus:border-black'>
                                      <SelectValue placeholder='Sélectionnez le type de partenariat' />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {partnerTypes.map((type) => (
                                      <SelectItem key={type} value={type}>
                                        {type}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>

                      <FormField
                        control={form.control}
                        name='acceptTerms'
                        render={({ field }) => (
                          <FormItem className='flex items-start space-x-2'>
                            <FormControl>
                              <Checkbox
                                checked={field.value as boolean}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className='grid gap-1.5 leading-none'>
                              <FormLabel className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                                J'accepte les{' '}
                                <a href='#' className='underline'>
                                  conditions générales
                                </a>{' '}
                                et la{' '}
                                <Link
                                  href='/privacy-policy'
                                  className='underline'
                                >
                                  politique de confidentialité
                                </Link>
                              </FormLabel>
                              <FormMessage />
                            </div>
                          </FormItem>
                        )}
                      />

                      <Button
                        type='submit'
                        className='w-full bg-black text-white'
                        size='lg'
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <div className='flex items-center justify-center'>
                            <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                            <span>Traitement en cours...</span>
                          </div>
                        ) : (
                          'Soumettre la Candidature'
                        )}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        */}

        {/* Current Partners Section */}
        <section className='py-16 bg-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
                Nos Partenaires
              </h2>
              <div className='w-20 h-1 bg-black mx-auto mt-4'></div>
              <p className='mt-6 text-xl text-gray-600 max-w-3xl mx-auto'>
                Rejoignez ces entreprises leaders qui collaborent déjà avec
                Abokyh pour offrir des solutions en cryptomonnaie en Afrique
                francophone.
              </p>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 items-center justify-items-center'>
              {[
                {
                  src: '/images/partners/africa-web3-academy.png',
                  alt: 'Partenaire 1',
                },
                {
                  src: '/images/partners/bit-trading-edu.png',
                  alt: 'Partenaire 2',
                },
                {
                  src: '/images/partners/crypto-boutique.png',
                  alt: 'Partenaire 3',
                },
                {
                  src: '/images/partners/logo-tech-blockchain.png',
                  alt: 'Partenaire 4',
                },
                {
                  src: '/images/partners/pizza-dao.png',
                  alt: 'Partenaire 5',
                },
                {
                  src: '/images/partners/stellar-logo.png',
                  alt: 'Partenaire 6',
                },
                {
                  src: '/images/partners/talantachain.png',
                  alt: 'Partenaire 7',
                },
              ].map((partner, i) => (
                <div key={i} className='p-4'>
                  <img
                    src={partner.src}
                    alt={partner.alt}
                    className='h-16 w-auto mx-auto'
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Success Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className='max-w-md'>
          <DialogHeader>
            <DialogTitle className='text-xl font-bold'>
              Candidature Soumise !
            </DialogTitle>
          </DialogHeader>

          <div className='py-6 text-center'>
            <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
              <Check className='h-8 w-8 text-green-600' />
            </div>
            <p className='text-gray-700 mb-4'>
              Merci pour votre intérêt à devenir partenaire d’Abokyh. Nous avons
              reçu votre candidature et notre équipe l’examinera sous peu.
            </p>
            <p className='text-gray-700'>
              Vous pouvez attendre une réponse de notre part dans un délai de 3
              à 5 jours ouvrables.
            </p>
          </div>

          <DialogFooter>
            <Button
              className='w-full bg-black text-white'
              onClick={() => setShowDialog(false)}
            >
              Fermer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default PartnerPage
