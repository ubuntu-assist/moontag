'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Check,
  Building2,
  CreditCard,
  Users,
  Globe,
  Shield,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
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

const PartnerPage = () => {
  const [showDialog, setShowDialog] = useState(false)

  const partners = [
    {
      src: '/images/partners/africa-web3-academy.png',
      alt: 'Africa Web3 Academy',
      name: 'Africa Web3 Academy',
      description: 'Empowering blockchain education across Africa.',
      url: 'https://www.linkedin.com/company/africa-web3-academy/',
    },
    {
      src: '/images/partners/bit-trading-edu.png',
      alt: 'Bit Trading Edu',
      name: 'Bit Trading Edu',
      description: 'Leading platform for crypto trading education.',
      url: 'https://www.linkedin.com/company/bit-trading-edu/',
    },
    {
      src: '/images/partners/crypto-boutique.png',
      alt: 'Crypto Boutique',
      name: 'Crypto Boutique',
      description: 'Premium crypto merchandise and services.',
      url: 'https://cryptoboutique.com',
    },
    {
      src: '/images/partners/logo-tech-blockchain.png',
      alt: 'Tech Blockchain',
      name: 'Tech Blockchain',
      description: 'Innovative blockchain solutions provider.',
      url: 'https://www.linkedin.com/company/techblockchainaf',
    },
    {
      src: '/images/partners/pizza-dao.png',
      alt: 'Pizza DAO',
      name: 'Pizza DAO',
      description: 'Community-driven crypto initiatives.',
      url: 'https://globalpizza.party/',
    },
    {
      src: '/images/partners/stellar-logo.png',
      alt: 'Stellar',
      name: 'Stellar',
      description: 'Global blockchain for financial services.',
      url: 'https://stellar.org',
    },
    {
      src: '/images/partners/talantachain.png',
      alt: 'Talanta Chain',
      name: 'Talanta Chain',
      description: 'Decentralized solutions for African markets.',
      url: 'https://www.linkedin.com/company/talantachain',
    },
  ]

  return (
    <div className='bg-gradient-to-r from-[#00BCD4] to-[#4CAF50] min-h-screen text-white'>
      <main>
        {/* Hero Section */}
        <section className='py-16 md:py-24'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex flex-col items-center justify-center text-center'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className='text-4xl md:text-5xl font-bold leading-tight'>
                  Devenez Partenaire d&apos;Abokyh
                </h1>
                <p className='mt-6 text-lg text-white text-opacity-90 max-w-lg mx-auto'>
                  Rejoignez notre écosystème croissant de partenaires et
                  contribuez à offrir des solutions en cryptomonnaie aux
                  consommateurs à travers l&apos;Afrique francophone.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Partner Types Section */}
        <section className='py-16 bg-white text-black' id='benefits'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl font-bold'>
                Pourquoi Devenir Partenaire
              </h2>
              <div className='w-20 h-1 bg-[#00BCD4] mx-auto mt-4'></div>
              <p className='mt-6 text-xl text-gray-700 max-w-3xl mx-auto'>
                Abokyh offre diverses opportunités de partenariat aux
                entreprises souhaitant élargir leur portée sur le marché
                croissant de la cryptomonnaie en Afrique francophone.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              <Card className='border-2 border-[#00BCD4] shadow-md hover:border-[#4CAF50] transition duration-300'>
                <CardHeader>
                  <div className='w-12 h-12 bg-[#00BCD4] rounded-full flex items-center justify-center mb-4'>
                    <Building2 className='h-6 w-6 text-white' />
                  </div>
                  <CardTitle className='text-xl'>
                    Partenaires Marchands
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-gray-700'>
                    Acceptez les gift cards Abokyh comme moyen de paiement dans
                    votre entreprise et atteignez les utilisateurs de
                    cryptomonnaie à travers l&apos;Afrique francophone.
                  </p>
                  <ul className='mt-4 space-y-2'>
                    <li className='flex items-start'>
                      <Check className='h-5 w-5 text-[#4CAF50] mr-2 flex-shrink-0 mt-0.5' />
                      <span>Élargissez votre clientèle</span>
                    </li>
                    <li className='flex items-start'>
                      <Check className='h-5 w-5 text-[#4CAF50] mr-2 flex-shrink-0 mt-0.5' />
                      <span>Aucune connaissance en cryptomonnaie requise</span>
                    </li>
                    <li className='flex items-start'>
                      <Check className='h-5 w-5 text-[#4CAF50] mr-2 flex-shrink-0 mt-0.5' />
                      <span>Recevez les paiements en monnaie locale</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className='border-2 border-[#00BCD4] shadow-md hover:border-[#4CAF50] transition duration-300'>
                <CardHeader>
                  <div className='w-12 h-12 bg-[#00BCD4] rounded-full flex items-center justify-center mb-4'>
                    <CreditCard className='h-6 w-6 text-white' />
                  </div>
                  <CardTitle className='text-xl'>
                    Fournisseurs de Gift Cards
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-gray-700'>
                    Listez vos gift cards sur notre plateforme et accédez au
                    marché croissant de la cryptomonnaie en Afrique francophone.
                  </p>
                  <ul className='mt-4 space-y-2'>
                    <li className='flex items-start'>
                      <Check className='h-5 w-5 text-[#4CAF50] mr-2 flex-shrink-0 mt-0.5' />
                      <span>Atteignez de nouveaux segments de clients</span>
                    </li>
                    <li className='flex items-start'>
                      <Check className='h-5 w-5 text-[#4CAF50] mr-2 flex-shrink-0 mt-0.5' />
                      <span>Processus d&apos;intégration simplifié</span>
                    </li>
                    <li className='flex items-start'>
                      <Check className='h-5 w-5 text-[#4CAF50] mr-2 flex-shrink-0 mt-0.5' />
                      <span>
                        Règlements réguliers dans la devise de votre choix
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className='border-2 border-[#00BCD4] shadow-md hover:border-[#4CAF50] transition duration-300'>
                <CardHeader>
                  <div className='w-12 h-12 bg-[#00BCD4] rounded-full flex items-center justify-center mb-4'>
                    <Globe className='h-6 w-6 text-white' />
                  </div>
                  <CardTitle className='text-xl'>
                    Fournisseurs de Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-gray-700'>
                    Activez les paiements en cryptomonnaie pour vos services
                    publics, mobiles ou autres services essentiels via notre
                    plateforme.
                  </p>
                  <ul className='mt-4 space-y-2'>
                    <li className='flex items-start'>
                      <Check className='h-5 w-5 text-[#4CAF50] mr-2 flex-shrink-0 mt-0.5' />
                      <span>Réduisez les coûts de collecte des paiements</span>
                    </li>
                    <li className='flex items-start'>
                      <Check className='h-5 w-5 text-[#4CAF50] mr-2 flex-shrink-0 mt-0.5' />
                      <span>Améliorez l&apos;accessibilité des paiements</span>
                    </li>
                    <li className='flex items-start'>
                      <Check className='h-5 w-5 text-[#4CAF50] mr-2 flex-shrink-0 mt-0.5' />
                      <span>Intégration API et support technique</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Partner Benefits Section */}
        <section className='py-16'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl font-bold'>
                Avantages pour les Partenaires
              </h2>
              <div className='w-20 h-1 bg-white mx-auto mt-4'></div>
              <p className='mt-6 text-xl text-white text-opacity-90 max-w-3xl mx-auto'>
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
                  className='w-full h-auto rounded-xl shadow-lg border-2 border-[#00BCD4]'
                  aria-label='Illustration des avantages des partenaires'
                />
              </div>
              <div className='space-y-6'>
                <div className='flex'>
                  <div className='flex-shrink-0'>
                    <div className='w-10 h-10 bg-[#00BCD4] rounded-full flex items-center justify-center'>
                      <Users className='h-5 w-5 text-white' />
                    </div>
                  </div>
                  <div className='ml-4'>
                    <h3 className='text-xl font-bold'>
                      Accès à de Nouveaux Clients
                    </h3>
                    <p className='mt-2 text-white text-opacity-90'>
                      Accédez à la base croissante d&apos;utilisateurs
                      d&apos;Abokyh, détenteurs de cryptomonnaies souhaitant
                      dépenser leurs actifs numériques pour des achats
                      quotidiens.
                    </p>
                  </div>
                </div>

                <div className='flex'>
                  <div className='flex-shrink-0'>
                    <div className='w-10 h-10 bg-[#00BCD4] rounded-full flex items-center justify-center'>
                      <Shield className='h-5 w-5 text-white' />
                    </div>
                  </div>
                  <div className='ml-4'>
                    <h3 className='text-xl font-bold'>
                      Intégration Sans Risque
                    </h3>
                    <p className='mt-2 text-white text-opacity-90'>
                      Aucune exposition à la volatilité des cryptomonnaies.
                      Recevez des règlements en monnaie locale avec des
                      calendriers de paiement prévisibles.
                    </p>
                  </div>
                </div>

                <div className='flex'>
                  <div className='flex-shrink-0'>
                    <div className='w-10 h-10 bg-[#00BCD4] rounded-full flex items-center justify-center'>
                      <CreditCard className='h-5 w-5 text-white' />
                    </div>
                  </div>
                  <div className='ml-4'>
                    <h3 className='text-xl font-bold'>
                      Frais de Transaction Réduits
                    </h3>
                    <p className='mt-2 text-white text-opacity-90'>
                      Des frais de traitement des paiements plus bas que les
                      méthodes traditionnelles, vous aidant à améliorer vos
                      marges.
                    </p>
                  </div>
                </div>

                <div className='flex'>
                  <div className='flex-shrink-0'>
                    <div className='w-10 h-10 bg-[#00BCD4] rounded-full flex items-center justify-center'>
                      <Globe className='h-5 w-5 text-white' />
                    </div>
                  </div>
                  <div className='ml-4'>
                    <h3 className='text-xl font-bold'>Support Technique</h3>
                    <p className='mt-2 text-white text-opacity-90'>
                      Notre équipe dédiée au succès des partenaires fournit un
                      support technique, une assistance à l&apos;intégration et
                      une gestion continue des relations.
                    </p>
                  </div>
                </div>

                <Button
                  className='mt-4 bg-[#00BCD4] hover:bg-[#4CAF50] text-white'
                  size='lg'
                  asChild
                >
                  <a href='mailto:abokyh@gmail.com'>Devenir Partenaire</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className='py-16 bg-white text-black'>
          <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl font-bold'>
                Questions Fréquemment Posées
              </h2>
              <div className='w-20 h-1 bg-[#00BCD4] mx-auto mt-4'></div>
            </div>

            <Accordion type='single' collapsible className='w-full'>
              <AccordionItem value='item-1'>
                <AccordionTrigger className='text-left font-medium'>
                  Quels types d&apos;entreprises peuvent devenir partenaires
                  d&apos;Abokyh ?
                </AccordionTrigger>
                <AccordionContent className='text-gray-700'>
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
                <AccordionTrigger className='text-left font-medium'>
                  Dois-je comprendre la cryptomonnaie pour devenir partenaire ?
                </AccordionTrigger>
                <AccordionContent className='text-gray-700'>
                  Non, aucune connaissance en cryptomonnaie n&apos;est requise.
                  Nous gérons toute la complexité des transactions en
                  cryptomonnaie. Vous pouvez recevoir des règlements en monnaie
                  locale et intégrer notre plateforme à l&apos;aide d&apos;API
                  standards. Notre équipe vous guidera tout au long du
                  processus.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value='item-3'>
                <AccordionTrigger className='text-left font-medium'>
                  Comment fonctionnent les règlements pour les partenaires ?
                </AccordionTrigger>
                <AccordionContent className='text-gray-700'>
                  Les partenaires peuvent choisir de recevoir des règlements en
                  monnaie locale ou en cryptomonnaie. Nous proposons des
                  calendriers de règlement flexibles (quotidiens, hebdomadaires
                  ou mensuels) pour répondre aux besoins de votre entreprise.
                  Les règlements sont traités automatiquement, et vous recevrez
                  des rapports détaillés de toutes les transactions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value='item-4'>
                <AccordionTrigger className='text-left font-medium'>
                  Quelles sont les exigences techniques pour l&apos;intégration
                  ?
                </AccordionTrigger>
                <AccordionContent className='text-gray-700'>
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
                <AccordionTrigger className='text-left font-medium'>
                  Combien de temps prend le processus de candidature pour les
                  partenaires ?
                </AccordionTrigger>
                <AccordionContent className='text-gray-700'>
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

        {/* Current Partners Section */}
        <section className='py-16'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl font-bold'>
                Nos Partenaires
              </h2>
              <div className='w-20 h-1 bg-white mx-auto mt-4'></div>
              <p className='mt-6 text-xl text-white text-opacity-90 max-w-3xl mx-auto'>
                Rejoignez ces entreprises leaders qui collaborent déjà avec
                Abokyh pour offrir des solutions en cryptomonnaie en Afrique
                francophone.
              </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
              {partners.map((partner, i) => (
                <motion.div
                  key={i}
                  className='relative group'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                  <a
                    href={partner.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='block'
                    aria-label={`Visiter le site de ${partner.name}`}
                  >
                    <Card className='border-2 border-[#00BCD4] shadow-md hover:border-[#4CAF50] transition-shadow duration-300'>
                      <CardContent className='p-6 flex items-center justify-center h-32'>
                        <img
                          src={partner.src}
                          alt={partner.alt}
                          className='max-h-16 w-auto object-contain'
                        />
                      </CardContent>
                      <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        <div className='text-center text-white p-4'>
                          <h3 className='text-lg font-semibold'>
                            {partner.name}
                          </h3>
                          <p className='text-sm mt-2'>{partner.description}</p>
                        </div>
                      </div>
                    </Card>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Dialog */}
        <Dialog open={showDialog} onOpenChange={setShowDialog}>
          <DialogContent className='max-w-md bg-white'>
            <DialogHeader>
              <DialogTitle className='text-xl font-bold text-black'>
                Candidature Soumise !
              </DialogTitle>
            </DialogHeader>

            <div className='py-6 text-center'>
              <div className='w-16 h-16 bg-[#00BCD4] rounded-full flex items-center justify-center mx-auto mb-4'>
                <Check className='h-8 w-8 text-white' />
              </div>
              <p className='text-gray-700 mb-4'>
                Merci pour votre intérêt à devenir partenaire d’Abokyh. Nous
                avons reçu votre candidature et notre équipe l’examinera sous
                peu.
              </p>
              <p className='text-gray-700'>
                Vous pouvez attendre une réponse de notre part dans un délai de
                3 à 5 jours ouvrables.
              </p>
            </div>

            <DialogFooter>
              <Button
                className='w-full bg-[#00BCD4] hover:bg-[#4CAF50] text-white'
                onClick={() => setShowDialog(false)}
              >
                Fermer
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </main>
    </div>
  )
}

export default PartnerPage
