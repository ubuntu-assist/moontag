'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { Mail, ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react'
import { useState } from 'react'
import { Link } from '@/i18n/navigation'

const forgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Veuillez entrer votre adresse email' })
    .email({ message: 'Email invalide' }),
})

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>

const ForgotPasswordPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isEmailSent, setIsEmailSent] = useState<boolean>(false)
  const [userEmail, setUserEmail] = useState<string>('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
  })

  const onSubmit = (data: ForgotPasswordFormData) => {
    setIsLoading(true)
    setUserEmail(data.email)

    setTimeout(() => {
      console.log('Reset password email sent to:', data.email)
      setIsLoading(false)
      setIsEmailSent(true)
    }, 1500)
  }

  const handleResendEmail = (): void => {
    setIsLoading(true)

    setTimeout(() => {
      console.log('Resend email to:', userEmail)
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className='min-h-screen bg-[#FFF4E9] flex flex-col md:flex-row'>
      {/* Left side - Brand & Information */}
      <div className='w-full md:w-1/2 bg-[#FFE9D1] p-8 md:p-12 lg:p-16 flex flex-col justify-between'>
        <div>
          <Link href='/'>
            <img
              src='/images/moontag-logo.png'
              alt='Abokyh'
              className='h-12 w-auto mb-16'
            />
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='mb-10'
          >
            <h1 className='text-4xl font-bold text-gray-900 mb-6'>
              Récupérez Votre Accès
            </h1>
            <p className='text-gray-700 text-lg max-w-md'>
              Pas de souci ! Entrez votre adresse email et nous vous enverrons
              un lien pour réinitialiser votre mot de passe en toute sécurité.
            </p>
          </motion.div>
        </div>

        <div className='rounded-xl bg-white/50 p-4 md:p-6 backdrop-blur-sm'>
          <div className='flex items-start space-x-4'>
            <div className='p-2 bg-white rounded-full'>
              <Mail className='h-6 w-6 text-black' />
            </div>
            <div>
              <h3 className='font-bold text-gray-900 mb-1'>
                Vérifiez Votre Email
              </h3>
              <p className='text-gray-700 text-sm'>
                Après avoir soumis votre email, vérifiez votre boîte de
                réception (et vos spams) pour le lien de réinitialisation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Forgot Password Form */}
      <div className='w-full md:w-1/2 bg-white p-8 md:p-12 lg:p-16 flex flex-col justify-center'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className='w-full max-w-md mx-auto'>
            {!isEmailSent ? (
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-8'>
                  <h2 className='text-2xl font-bold text-gray-900 mb-2'>
                    Mot de Passe Oublié ?
                  </h2>
                  <p className='text-gray-600'>
                    Entrez votre adresse email pour recevoir un lien de
                    réinitialisation.
                  </p>
                </div>

                <div className='space-y-6'>
                  <div className='space-y-2'>
                    <label
                      htmlFor='email'
                      className='text-sm font-medium text-gray-700'
                    >
                      Adresse Email
                    </label>
                    <div className='relative'>
                      <Mail className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500' />
                      <input
                        id='email'
                        type='email'
                        placeholder='Entrez votre email'
                        className='w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent'
                        disabled={isLoading}
                        {...register('email')}
                      />
                    </div>
                    <p className='text-xs text-gray-500'>
                      Nous enverrons un lien de réinitialisation à cette adresse
                    </p>
                    {errors.email && (
                      <p className='text-sm text-red-600'>
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <button
                    type='submit'
                    className='w-full bg-black hover:bg-gray-800 text-white py-2 px-4 rounded-md transition-colors duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed'
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className='flex items-center'>
                        <svg
                          className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                        >
                          <circle
                            className='opacity-25'
                            cx='12'
                            cy='12'
                            r='10'
                            stroke='currentColor'
                            strokeWidth='4'
                          ></circle>
                          <path
                            className='opacity-75'
                            fill='currentColor'
                            d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                          ></path>
                        </svg>
                        Envoi en cours...
                      </div>
                    ) : (
                      <span className='flex items-center justify-center'>
                        <span>Envoyer le Lien</span>
                        <ArrowRight className='ml-2 h-4 w-4' />
                      </span>
                    )}
                  </button>
                </div>

                <div className='mt-6 text-center'>
                  <Link
                    href='/auth'
                    className='inline-flex items-center text-sm font-medium text-black hover:underline'
                  >
                    <ArrowLeft className='mr-2 h-4 w-4' />
                    Retour à la connexion
                  </Link>
                </div>
              </form>
            ) : (
              // Success state
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='text-center'
              >
                <div className='mb-6'>
                  <div className='mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100'>
                    <CheckCircle className='h-8 w-8 text-green-600' />
                  </div>
                  <h2 className='text-2xl font-bold text-gray-900 mb-2'>
                    Email Envoyé !
                  </h2>
                  <p className='text-gray-600 mb-4'>
                    Nous avons envoyé un lien de réinitialisation à :
                  </p>
                  <p className='font-medium text-gray-900 mb-6 break-words'>
                    {userEmail}
                  </p>
                </div>

                <div className='bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6'>
                  <div className='flex items-start space-x-3'>
                    <Mail className='h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0' />
                    <div className='text-left'>
                      <p className='text-sm font-medium text-blue-900 mb-1'>
                        Vérifiez votre boîte de réception
                      </p>
                      <p className='text-sm text-blue-700'>
                        Le lien de réinitialisation arrive dans quelques
                        minutes. N&apos;oubliez pas de vérifier vos spams !
                      </p>
                    </div>
                  </div>
                </div>

                <div className='space-y-4'>
                  <button
                    onClick={handleResendEmail}
                    className='w-full border border-gray-300 text-gray-700 hover:bg-gray-50 py-2 px-4 rounded-md transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className='flex items-center justify-center'>
                        <svg
                          className='animate-spin -ml-1 mr-3 h-5 w-5 text-gray-700'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                        >
                          <circle
                            className='opacity-25'
                            cx='12'
                            cy='12'
                            r='10'
                            stroke='currentColor'
                            strokeWidth='4'
                          ></circle>
                          <path
                            className='opacity-75'
                            fill='currentColor'
                            d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                          ></path>
                        </svg>
                        Renvoi en cours...
                      </div>
                    ) : (
                      "Renvoyer l'email"
                    )}
                  </button>

                  <Link
                    href='/auth'
                    className='inline-flex items-center justify-center w-full text-sm font-medium text-black hover:underline py-2'
                  >
                    <ArrowLeft className='mr-2 h-4 w-4' />
                    Retour à la connexion
                  </Link>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ForgotPasswordPage
