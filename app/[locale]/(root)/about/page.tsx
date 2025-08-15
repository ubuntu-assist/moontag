'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Link } from '@/i18n/navigation'

const AboutPage = () => {
  return (
    <div className='bg-gradient-to-r from-[#00BCD4] to-[#4CAF50] min-h-screen text-white'>
      {/* Hero Section */}
      <section className='pt-32 pb-16 px-4 sm:px-6 lg:px-8 text-center'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6'>
            Notre Mission
          </h1>
          <p className='text-xl text-white text-opacity-90 max-w-3xl mx-auto'>
            Connecter la cryptomonnaie aux dépenses quotidiennes en Afrique
            francophone
          </p>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col lg:flex-row items-center gap-12'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='lg:w-1/2'
            >
              <div className='relative h-96 rounded-xl overflow-hidden border-2 border-[#00BCD4]'>
                <Image
                  src='/images/about/solidarity-bro.png'
                  alt='Équipe travaillant sur la plateforme Abokyh'
                  fill
                  style={{ objectFit: 'cover' }}
                  className='rounded-xl'
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className='lg:w-1/2'
            >
              <h2 className='text-3xl font-bold mb-6'>Notre Histoire</h2>
              <p className='text-white text-opacity-90 mb-6'>
                Fondée en 2025, Abokyh est née d&apos;une simple observation :
                bien que l&apos;adoption de la cryptomonnaie progressait
                rapidement en Afrique francophone, il subsistait un écart
                important entre la possession d&apos;actifs numériques et leur
                utilisation dans la vie quotidienne.
              </p>
              <p className='text-white text-opacity-90 mb-6'>
                Notre équipe, composée d&apos;experts en technologie financière
                et d&apos;enthousiastes de la blockchain de toute la région,
                s&apos;est réunie avec une vision commune : créer une plateforme
                qui rendrait la cryptomonnaie pratique et accessible pour les
                transactions quotidiennes dans des marchés où les
                infrastructures bancaires traditionnelles sont limitées.
              </p>
              <p className='text-white text-opacity-90'>
                Aujourd&apos;hui, Abokyh est à la pointe pour combler cet écart,
                permettant aux utilisateurs d&apos;acheter des gift cards, de
                recharger leurs téléphones mobiles et de payer leurs factures de
                services publics de manière fluide en utilisant la
                cryptomonnaie.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className='py-20 bg-white text-black'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className='text-3xl font-bold mb-6'>Notre Vision</h2>
            <p className='text-xl text-gray-700 max-w-3xl mx-auto mb-12'>
              Nous envisageons un avenir où la cryptomonnaie devient un moyen
              d&apos;échange courant à travers l&apos;Afrique francophone,
              offrant aux individus et aux entreprises une plus grande liberté
              et inclusion financière.
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className='bg-white p-8 rounded-xl shadow-md border-2 border-[#00BCD4] hover:border-[#4CAF50] transition duration-300'
            >
              <div className='w-16 h-16 bg-[#00BCD4] rounded-full flex items-center justify-center text-white mx-auto mb-6'>
                <svg
                  className='w-8 h-8'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-bold mb-3'>Accessibilité</h3>
              <p className='text-gray-700'>
                Rendre la cryptomonnaie utilisable pour tous, indépendamment des
                connaissances techniques ou de l&apos;accès bancaire.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className='bg-white p-8 rounded-xl shadow-md border-2 border-[#00BCD4] hover:border-[#4CAF50] transition duration-300'
            >
              <div className='w-16 h-16 bg-[#00BCD4] rounded-full flex items-center justify-center text-white mx-auto mb-6'>
                <svg
                  className='w-8 h-8'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-bold mb-3'>Sécurité</h3>
              <p className='text-gray-700'>
                Instaurer la confiance grâce à des mesures de sécurité robustes
                et des opérations transparentes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className='bg-white p-8 rounded-xl shadow-md border-2 border-[#00BCD4] hover:border-[#4CAF50] transition duration-300'
            >
              <div className='w-16 h-16 bg-[#00BCD4] rounded-full flex items-center justify-center text-white mx-auto mb-6'>
                <svg
                  className='w-8 h-8'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M13 10V3L4 14h7v7l9-11h-7z'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-bold mb-3'>Innovation</h3>
              <p className='text-gray-700'>
                Faire évoluer continuellement notre plateforme pour répondre aux
                besoins uniques du marché francophone africain.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-3xl font-bold mb-6'>Notre Équipe</h2>
            <p className='text-xl text-white text-opacity-90 max-w-3xl mx-auto'>
              Rencontrez l&apos;équipe passionnée derrière Abokyh, qui travaille
              à révolutionner l&apos;utilisation de la cryptomonnaie en Afrique.
            </p>
          </motion.div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
            {[
              {
                name: 'Essoubo Loïc-Yvan',
                role: 'Founder & CEO',
                img: '/images/team/ceo-abokyh.jpg',
                country: 'ci',
                linkedin: '#',
                twitter: '#',
                email: '',
              },
              {
                name: 'Ruth Amani',
                role: 'Lawyer',
                img: '/images/team/cfo-abokyh.png',
                country: 'ci',
                linkedin: '#',
                twitter: '#',
                email: '',
              },
              {
                name: 'Ayémou Marie-Joseph',
                role: 'Product Designer',
                img: '/images/team/designer.jpg',
                country: 'ci',
                linkedin: '#',
                twitter: '#',
                email: '',
              },
              {
                name: 'Fopa Kuete Duclair',
                role: 'CTO',
                img: '/images/team/cto-abokyh.jpg',
                country: 'cm',
                linkedin: 'https://www.linkedin.com/in/duclair-fopa/',
                twitter: 'https://x.com/BlockchainMonk_',
                email: 'duclair.fopa@hotmail.com',
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='text-center'
              >
                <div className='relative h-64 w-64 mx-auto mb-6'>
                  <div className='h-64 w-64 rounded-full overflow-hidden border-2 border-[#00BCD4]'>
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      className='rounded-full'
                    />
                  </div>
                  {/* Country flag overlay */}
                  <div className='absolute bottom-0 right-0 w-12 h-12 rounded-full overflow-hidden border-3 border-white'>
                    <Image
                      src={`https://flagcdn.com/w40/${member.country}.png`}
                      alt={`${member.country} flag`}
                      width={48}
                      height={48}
                      className='w-full h-full object-fit rounded-full'
                    />
                  </div>
                </div>
                <h3 className='text-xl font-bold mb-1'>{member.name}</h3>
                <p className='text-white text-opacity-90 mb-4'>{member.role}</p>

                {/* Social links */}
                <div className='flex justify-center space-x-4'>
                  <a
                    href={member.linkedin}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-white hover:text-[#4CAF50] transition-colors duration-300'
                    aria-label={`LinkedIn de ${member.name}`}
                  >
                    <svg
                      className='w-5 h-5'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                    </svg>
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className='text-white hover:text-[#4CAF50] transition-colors duration-300'
                    aria-label={`Email de ${member.name}`}
                  >
                    <svg
                      className='w-5 h-5'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z' />
                    </svg>
                  </a>
                  <a
                    href={member.twitter}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-white hover:text-[#4CAF50] transition-colors duration-300'
                    aria-label={`X (Twitter) de ${member.name}`}
                  >
                    <svg
                      className='w-5 h-5'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className='py-20 bg-white text-black'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col lg:flex-row items-center gap-12'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='lg:w-1/2'
            >
              <h2 className='text-3xl font-bold mb-6'>Notre Impact</h2>
              <p className='text-gray-700 mb-6'>
                Chez Abokyh, nous croyons en la puissance transformative de la
                technologie financière pour créer un changement positif en
                Afrique francophone. En comblant l&apos;écart entre la
                cryptomonnaie et les dépenses quotidiennes, nous contribuons à :
              </p>
              <ul className='space-y-4'>
                <li className='flex items-start'>
                  <div className='flex-shrink-0 h-6 w-6 bg-[#00BCD4] rounded-full flex items-center justify-center text-white mr-3'>
                    <svg
                      className='w-4 h-4'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                  </div>
                  <p className='text-gray-700'>
                    <strong>Inclusion Financière :</strong> Offrir un accès aux
                    services financiers numériques pour les non-bancarisés et
                    sous-bancarisés.
                  </p>
                </li>
                <li className='flex items-start'>
                  <div className='flex-shrink-0 h-6 w-6 bg-[#00BCD4] rounded-full flex items-center justify-center text-white mr-3'>
                    <svg
                      className='w-4 h-4'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                  </div>
                  <p className='text-gray-700'>
                    <strong>Autonomisation Économique :</strong> Permettre aux
                    individus de participer à l&apos;économie numérique
                    mondiale.
                  </p>
                </li>
                <li className='flex items-start'>
                  <div className='flex-shrink-0 h-6 w-6 bg-[#00BCD4] rounded-full flex items-center justify-center text-white mr-3'>
                    <svg
                      className='w-4 h-4'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                  </div>
                  <p className='text-gray-700'>
                    <strong>Adoption Technologique :</strong> Accélérer
                    l&apos;adoption de la technologie blockchain et de la
                    cryptomonnaie dans la région.
                  </p>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className='lg:w-1/2'
            >
              <div className='grid grid-cols-2 gap-4'>
                <div className='h-48 bg-[#00BCD4] rounded-xl flex items-center justify-center text-white p-6 text-center'>
                  <div>
                    <div className='text-4xl font-bold mb-2'>100+</div>
                    <p>Utilisateurs en Waitlist</p>
                  </div>
                </div>
                <div className='h-48 bg-[#00BCD4] rounded-xl flex items-center justify-center text-white p-6 text-center'>
                  <div>
                    <div className='text-4xl font-bold mb-2'>5</div>
                    <p>Pays Ouverts</p>
                  </div>
                </div>
                <div className='h-48 bg-[#00BCD4] rounded-xl flex items-center justify-center text-white p-6 text-center'>
                  <div>
                    <div className='text-4xl font-bold mb-2'>5+</div>
                    <p>Partenaires Marchands</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Us CTA */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className='text-3xl font-bold mb-6'>Rejoignez Notre Mission</h2>
            <p className='text-xl max-w-3xl mx-auto mb-10 text-white text-opacity-90'>
              Que vous soyez utilisateur, partenaire ou futur membre de
              l&apos;équipe, nous serions ravis de vous connecter et
              d&apos;explorer comment nous pouvons collaborer pour façonner
              l&apos;avenir de l&apos;utilisation de la cryptomonnaie en
              Afrique.
            </p>
            <div className='flex flex-col sm:flex-row justify-center gap-4'>
              <Link
                href='/contact'
                className='bg-white text-[#00BCD4] px-8 py-3 rounded-full text-lg font-medium hover:bg-[#4CAF50] hover:text-white transition duration-300'
              >
                Nous Contacter
              </Link>
              <Link
                href='/careers'
                className='bg-transparent border-2 border-white px-8 py-3 rounded-full text-lg font-medium hover:bg-white hover:text-[#00BCD4] transition duration-300'
              >
                Rejoindre Notre Équipe
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
