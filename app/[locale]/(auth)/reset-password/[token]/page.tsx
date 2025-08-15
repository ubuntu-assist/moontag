'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { motion } from 'framer-motion'
import {
  Lock,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Eye,
  EyeOff,
} from 'lucide-react'
import { useState } from 'react'
import { Link } from '@/i18n/navigation'

const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, {
        message: 'Le mot de passe doit contenir au moins 8 caractères',
      })
      .regex(/[A-Z]/, { message: 'Doit contenir au moins une majuscule' })
      .regex(/[0-9]/, { message: 'Doit contenir au moins un chiffre' })
      .regex(/[^A-Za-z0-9]/, {
        message: 'Doit contenir au moins un caractère spécial',
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Les mots de passe ne correspondent pas',
    path: ['confirmPassword'],
  })

type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>

// interface ResetPasswordPageProps {
//   token?: string
// }

const ResetPasswordPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isSuccess, setIsSuccess] = useState<boolean>(false)
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
  })

  const onSubmit = (data: ResetPasswordFormData) => {
    setIsLoading(true)

    setTimeout(() => {
      console.log('Password reset with token:', 'any token')
      console.log('New password:', data.password)
      setIsLoading(false)
      setIsSuccess(true)
    }, 1500)
  }

  const password = watch('password')

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword)
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
              Réinitialisez Votre Mot de Passe
            </h1>
            <p className='text-gray-700 text-lg max-w-md'>
              Créez un nouveau mot de passe sécurisé pour votre compte.
              Assurez-vous qu&apos;il est unique et difficile à deviner.
            </p>
          </motion.div>
        </div>

        <div className='rounded-xl bg-white/50 p-4 md:p-6 backdrop-blur-sm'>
          <div className='flex items-start space-x-4'>
            <div className='p-2 bg-white rounded-full'>
              <Lock className='h-6 w-6 text-black' />
            </div>
            <div>
              <h3 className='font-bold text-gray-900 mb-1'>
                Conseils de Sécurité
              </h3>
              <ul className='text-gray-700 text-sm list-disc pl-4 space-y-1'>
                <li>Utilisez au moins 8 caractères</li>
                <li>Combinez lettres, chiffres et symboles</li>
                <li>Évitez les mots de passe courants</li>
                <li>Ne réutilisez pas d&apos;anciens mots de passe</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Reset Password Form */}
      <div className='w-full md:w-1/2 bg-white p-8 md:p-12 lg:p-16 flex flex-col justify-center'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className='w-full max-w-md mx-auto'>
            {!isSuccess ? (
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-8'>
                  <h2 className='text-2xl font-bold text-gray-900 mb-2'>
                    Nouveau Mot de Passe
                  </h2>
                  <p className='text-gray-600'>
                    Entrez et confirmez votre nouveau mot de passe ci-dessous.
                  </p>
                </div>

                <div className='space-y-6'>
                  <div className='space-y-2'>
                    <label
                      htmlFor='password'
                      className='text-sm font-medium text-gray-700'
                    >
                      Mot de Passe
                    </label>
                    <div className='relative'>
                      <Lock className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500' />
                      <input
                        id='password'
                        type={showPassword ? 'text' : 'password'}
                        placeholder='Entrez votre mot de passe'
                        className='w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent'
                        disabled={isLoading}
                        {...register('password')}
                      />
                      <button
                        type='button'
                        className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700'
                        onClick={togglePasswordVisibility}
                        aria-label={
                          showPassword ? 'Hide password' : 'Show password'
                        }
                      >
                        {showPassword ? (
                          <EyeOff className='h-4 w-4' />
                        ) : (
                          <Eye className='h-4 w-4' />
                        )}
                      </button>
                    </div>
                    {errors.password && (
                      <p className='text-sm text-red-600'>
                        {errors.password.message}
                      </p>
                    )}
                    {password && !errors.password && (
                      <div className='text-xs text-green-600'>
                        ✓ Mot de passe valide
                      </div>
                    )}
                  </div>

                  <div className='space-y-2'>
                    <label
                      htmlFor='confirmPassword'
                      className='text-sm font-medium text-gray-700'
                    >
                      Confirmez le Mot de Passe
                    </label>
                    <div className='relative'>
                      <Lock className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500' />
                      <input
                        id='confirmPassword'
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder='Confirmez votre mot de passe'
                        className='w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent'
                        disabled={isLoading}
                        {...register('confirmPassword')}
                      />
                      <button
                        type='button'
                        className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700'
                        onClick={toggleConfirmPasswordVisibility}
                        aria-label={
                          showConfirmPassword
                            ? 'Hide password'
                            : 'Show password'
                        }
                      >
                        {showConfirmPassword ? (
                          <EyeOff className='h-4 w-4' />
                        ) : (
                          <Eye className='h-4 w-4' />
                        )}
                      </button>
                    </div>
                    {errors.confirmPassword && (
                      <p className='text-sm text-red-600'>
                        {errors.confirmPassword.message}
                      </p>
                    )}
                  </div>

                  <div className='bg-gray-50 p-4 rounded-md'>
                    <h4 className='text-sm font-medium text-gray-700 mb-2'>
                      Force du mot de passe
                    </h4>
                    <div className='w-full bg-gray-200 rounded-full h-2'>
                      <div
                        className={`h-2 rounded-full ${
                          password?.length === 0
                            ? 'bg-gray-200'
                            : password?.length < 4
                            ? 'bg-red-500'
                            : password?.length < 8
                            ? 'bg-yellow-500'
                            : errors.password
                            ? 'bg-yellow-500'
                            : 'bg-green-500'
                        }`}
                        style={{
                          width: `${Math.min(
                            100,
                            (password?.length || 0) * 10
                          )}%`,
                        }}
                      ></div>
                    </div>
                    <ul className='text-xs text-gray-600 mt-2 space-y-1'>
                      <li
                        className={`flex items-center ${
                          password?.length >= 8 ? 'text-green-600' : ''
                        }`}
                      >
                        {password?.length >= 8 ? '✓' : '•'} 8 caractères minimum
                      </li>
                      <li
                        className={`flex items-center ${
                          /[A-Z]/.test(password || '') ? 'text-green-600' : ''
                        }`}
                      >
                        {/[A-Z]/.test(password || '') ? '✓' : '•'} 1 majuscule
                      </li>
                      <li
                        className={`flex items-center ${
                          /[0-9]/.test(password || '') ? 'text-green-600' : ''
                        }`}
                      >
                        {/[0-9]/.test(password || '') ? '✓' : '•'} 1 chiffre
                      </li>
                      <li
                        className={`flex items-center ${
                          /[^A-Za-z0-9]/.test(password || '')
                            ? 'text-green-600'
                            : ''
                        }`}
                      >
                        {/[^A-Za-z0-9]/.test(password || '') ? '✓' : '•'} 1
                        caractère spécial
                      </li>
                    </ul>
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
                        Enregistrement...
                      </div>
                    ) : (
                      <span className='flex items-center justify-center'>
                        <span>Réinitialiser le Mot de Passe</span>
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
                    Mot de Passe Réinitialisé !
                  </h2>
                  <p className='text-gray-600 mb-6'>
                    Votre mot de passe a été mis à jour avec succès. Vous pouvez
                    maintenant vous connecter avec votre nouveau mot de passe.
                  </p>
                </div>

                <div className='space-y-4'>
                  <Link
                    href='/auth'
                    className='inline-flex items-center justify-center w-full bg-black hover:bg-gray-800 text-white py-2 px-4 rounded-md transition-colors duration-200'
                  >
                    Se Connecter
                    <ArrowRight className='ml-2 h-4 w-4' />
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

export default ResetPasswordPage
