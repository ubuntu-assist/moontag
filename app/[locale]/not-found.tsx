'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Link } from '@/i18n/navigation'

const NotFound = () => {
  return (
    <div className='bg-[#FFF4E9] min-h-screen flex flex-col'>
      <Navbar />

      <main className='flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex items-center justify-center'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-center'
        >
          <div className='max-w-2xl mx-auto'>
            <div className='bg-white rounded-xl shadow-md p-8 md:p-12 border border-gray-100'>
              {/* 404 with gradient background */}
              <div className='relative mb-8'>
                <div className='absolute inset-0 bg-gradient-to-r from-[#FF9E44] to-[#F08424] rounded-2xl blur-xl opacity-20'></div>
                <h1 className='relative text-6xl md:text-8xl font-bold bg-gradient-to-r from-[#FF9E44] to-[#F08424] bg-clip-text text-transparent mb-6'>
                  404
                </h1>
              </div>

              <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-4'>
                Page Non Trouvée
              </h2>

              <div className='mb-8'>
                <p className='text-lg text-gray-700 mb-4'>
                  Désolé, la page que vous recherchez n&apos;existe pas ou a été
                  déplacée.
                </p>
                <p className='text-lg text-gray-700'>
                  Veuillez vérifier l&apos;URL ou retourner à la page
                  d&apos;accueil pour continuer votre navigation.
                </p>
              </div>

              <div className='flex flex-col sm:flex-row justify-center gap-4 mb-8'>
                <Link
                  href='/'
                  className='bg-black hover:bg-gray-800 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105'
                >
                  Retour à l&apos;accueil
                </Link>

                <Link
                  href='/contact'
                  className='bg-[#FF9E44] hover:bg-[#F08424] text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105'
                >
                  Contactez-nous
                </Link>
              </div>

              {/* Decorative illustration */}
              <div className='mt-10 flex justify-center'>
                <div className='relative'>
                  <div className='absolute inset-0 bg-[#FF9E44] rounded-full blur-lg opacity-20'></div>
                  <div className='relative bg-[#FFF4E9] rounded-full p-6 border border-[#FF9E44]/20'>
                    <svg
                      width='80'
                      height='80'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='#FF9E44'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='opacity-80'
                    >
                      <path d='M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z'></path>
                      <polyline points='3.27,6.96 12,12.01 20.73,6.96'></polyline>
                      <line x1='12' y1='22.08' x2='12' y2='12'></line>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-8 text-gray-600'>
              <p>
                Vous avez besoin d&apos;aide ?{' '}
                <Link
                  href='/support'
                  className='text-[#FF9E44] hover:text-[#F08424] font-medium transition-colors duration-300'
                >
                  Consultez notre centre d&apos;aide
                </Link>
              </p>
            </div>

            {/* Additional helpful links */}
            <div className='mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-600'>
              <Link
                href='/about'
                className='hover:text-[#FF9E44] transition-colors duration-300'
              >
                À propos
              </Link>
              <span className='text-gray-400'>•</span>
              <Link
                href='/services'
                className='hover:text-[#FF9E44] transition-colors duration-300'
              >
                Services
              </Link>
              <span className='text-gray-400'>•</span>
              <Link
                href='/faq'
                className='hover:text-[#FF9E44] transition-colors duration-300'
              >
                FAQ
              </Link>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}

export default NotFound
