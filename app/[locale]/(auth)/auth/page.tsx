'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Eye, EyeOff, Mail, Lock, User, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Checkbox } from '@/components/ui/checkbox'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from '@/components/ui/form'
import { PhoneInput } from '@/components/ui/phone-input'
import { isValidPhoneNumber } from 'react-phone-number-input'
import { Link } from '@/i18n/navigation'

const signupSchema = z
  .object({
    fullName: z.string().min(2, { message: 'Le nom complet est requis' }),
    email: z.string().email({ message: 'Email invalide' }),
    phoneNumber: z
      .string()
      .min(1, { message: 'Numéro de téléphone requis' })
      .refine((value) => value && isValidPhoneNumber(value), {
        message: 'Numéro de téléphone invalide',
      }),
    password: z
      .string()
      .min(8, {
        message: 'Le mot de passe doit contenir au moins 8 caractères',
      })
      .regex(/[0-9]/, {
        message: 'Le mot de passe doit contenir au moins un chiffre',
      })
      .regex(/[^a-zA-Z0-9]/, {
        message: 'Le mot de passe doit contenir au moins un caractère spécial',
      }),
    confirmPassword: z.string(),
    agreeTerms: z.literal(true, {
      errorMap: () => ({
        message: 'Vous devez accepter les conditions générales',
      }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Les mots de passe ne correspondent pas',
    path: ['confirmPassword'],
  })

type SignupFormValues = z.infer<typeof signupSchema>

const loginSchema = z.object({
  email: z.string().email({ message: 'Email invalide' }),
  password: z
    .string()
    .min(8, { message: 'Le mot de passe doit contenir au moins 8 caractères' }),
  rememberMe: z.boolean().optional(),
})

type LoginFormValues = z.infer<typeof loginSchema>

const AuthPage = () => {
  const [showLoginPassword, setShowLoginPassword] = useState(false)
  const [showSignupPassword, setShowSignupPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const loginForm = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  })

  const signupForm = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
      agreeTerms: undefined,
    },
  })

  const handleLogin = (data: LoginFormValues) => {
    setIsLoading(true)
    setTimeout(() => {
      console.log('Login data:', data)
      setIsLoading(false)
      window.location.href = '/dashboard'
    }, 1500)
  }

  const handleSignup = (data: SignupFormValues) => {
    setIsLoading(true)
    setTimeout(() => {
      console.log('Signup data:', data)
      setIsLoading(false)
      window.location.href = '/dashboard'
    }, 1500)
  }

  return (
    <div className='min-h-screen bg-[#FFF4E9] flex flex-col md:flex-row'>
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
              Transformez la Crypto en Achats Quotidiens
            </h1>
            <p className='text-gray-700 text-lg max-w-md'>
              Rejoignez des milliers d&apos;utilisateurs à travers
              l&apos;Afrique francophone qui utilisent Abokyh pour acheter des
              gift cards, recharger leur mobile et payer leurs factures avec de
              la cryptomonnaie.
            </p>
          </motion.div>
        </div>

        <div className='rounded-xl bg-white/50 p-4 md:p-6 backdrop-blur-sm'>
          <div className='flex items-start space-x-4'>
            <div className='p-2 bg-white rounded-full'>
              <User className='h-6 w-6 text-black' />
            </div>
            <div>
              <h3 className='font-bold text-gray-900 mb-1'>
                Créez Votre Compte
              </h3>
              <p className='text-gray-700 text-sm'>
                Inscrivez-vous aujourd&apos;hui et commencez à gérer votre
                cryptomonnaie pour des achats quotidiens en quelques minutes.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full md:w-1/2 bg-white p-8 md:p-12 lg:p-16 flex flex-col justify-center'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Tabs defaultValue='login' className='w-full max-w-md mx-auto'>
            <TabsList className='grid grid-cols-2 w-full mb-8'>
              <TabsTrigger value='login'>Connexion</TabsTrigger>
              <TabsTrigger value='signup'>Inscription</TabsTrigger>
            </TabsList>

            <TabsContent value='login'>
              <Form {...loginForm}>
                <form
                  onSubmit={loginForm.handleSubmit(handleLogin)}
                  className='space-y-6'
                >
                  <FormField
                    control={loginForm.control}
                    name='email'
                    render={({ field }) => (
                      <FormItem className='space-y-2'>
                        <FormLabel>Adresse Email</FormLabel>
                        <FormControl>
                          <div className='relative'>
                            <Mail className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500' />
                            <Input
                              {...field}
                              id='email'
                              type='email'
                              placeholder='Entrez votre email'
                              className='pl-10 border-gray-300 focus:ring-black focus:border-black h-10 text-sm'
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={loginForm.control}
                    name='password'
                    render={({ field }) => (
                      <FormItem className='space-y-2'>
                        <FormLabel>Mot de Passe</FormLabel>
                        <FormControl>
                          <div className='relative'>
                            <Lock className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500' />
                            <Input
                              {...field}
                              id='password'
                              type={showLoginPassword ? 'text' : 'password'}
                              placeholder='Entrez votre mot de passe'
                              className='pl-10 pr-10 border-gray-300 focus:ring-black focus:border-black h-10 text-sm'
                            />
                            <button
                              type='button'
                              onClick={() =>
                                setShowLoginPassword(!showLoginPassword)
                              }
                              className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500'
                            >
                              {showLoginPassword ? (
                                <EyeOff className='h-4 w-4' />
                              ) : (
                                <Eye className='h-4 w-4' />
                              )}
                            </button>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className='flex items-center justify-between'>
                    <FormField
                      control={loginForm.control}
                      name='rememberMe'
                      render={({ field }) => (
                        <FormItem className='flex items-center space-x-2'>
                          <FormControl>
                            <Checkbox
                              id='remember-me'
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel
                            htmlFor='remember-me'
                            className='text-sm text-gray-700 cursor-pointer'
                          >
                            Se souvenir de moi
                          </FormLabel>
                        </FormItem>
                      )}
                    />

                    <Link
                      href='/forgot-password'
                      className='text-sm font-medium text-black hover:underline'
                    >
                      Mot de passe oublié ?
                    </Link>
                  </div>

                  <Button
                    type='submit'
                    className='w-full bg-black hover:bg-gray-800 text-white cursor-pointer'
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
                        Connexion en cours...
                      </div>
                    ) : (
                      <span className='flex'>
                        <span>Se Connecter</span>{' '}
                        <ArrowRight className='ml-2 h-4 w-4' />
                      </span>
                    )}
                  </Button>
                </form>
              </Form>
            </TabsContent>

            <TabsContent value='signup'>
              <Form {...signupForm}>
                <form
                  onSubmit={signupForm.handleSubmit(handleSignup)}
                  className='space-y-6'
                >
                  <FormField
                    control={signupForm.control}
                    name='fullName'
                    render={({ field }) => (
                      <FormItem className='space-y-2'>
                        <FormLabel>Nom Complet</FormLabel>
                        <FormControl>
                          <div className='relative'>
                            <User className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500' />
                            <Input
                              {...field}
                              id='full-name'
                              type='text'
                              placeholder='Entrez votre nom complet'
                              className='pl-10 border-gray-300 focus:ring-black focus:border-black h-10 text-sm'
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={signupForm.control}
                    name='email'
                    render={({ field }) => (
                      <FormItem className='space-y-2'>
                        <FormLabel>Adresse Email</FormLabel>
                        <FormControl>
                          <div className='relative'>
                            <Mail className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500' />
                            <Input
                              {...field}
                              id='signup-email'
                              type='email'
                              placeholder='Entrez votre email'
                              className='pl-10 border-gray-300 focus:ring-black focus:border-black h-10 text-sm'
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={signupForm.control}
                    name='phoneNumber'
                    render={() => (
                      <FormItem className='space-y-2'>
                        <FormLabel>Numéro de Téléphone</FormLabel>
                        <FormControl>
                          <Controller
                            name='phoneNumber'
                            control={signupForm.control}
                            render={({ field: controllerField }) => (
                              <PhoneInput
                                {...controllerField}
                                id='phone-number'
                                placeholder='Entrez votre numéro de téléphone'
                                className='w-full h-10 text-sm'
                                defaultCountry='CI'
                              />
                            )}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={signupForm.control}
                    name='password'
                    render={({ field }) => (
                      <FormItem className='space-y-2'>
                        <FormLabel>Mot de Passe</FormLabel>
                        <FormControl>
                          <div className='relative'>
                            <Lock className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500' />
                            <Input
                              {...field}
                              id='signup-password'
                              type={showSignupPassword ? 'text' : 'password'}
                              placeholder='Créez un mot de passe'
                              className='pl-10 pr-10 border-gray-300 focus:ring-black focus:border-black h-10 text-sm'
                            />
                            <button
                              type='button'
                              onClick={() =>
                                setShowSignupPassword(!showSignupPassword)
                              }
                              className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500'
                            >
                              {showSignupPassword ? (
                                <EyeOff className='h-4 w-4' />
                              ) : (
                                <Eye className='h-4 w-4' />
                              )}
                            </button>
                          </div>
                        </FormControl>
                        {/* <FormDescription className='text-xs text-gray-500'>
                          Doit contenir au moins 8 caractères, avec des chiffres
                          et des caractères spéciaux
                        </FormDescription> */}
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={signupForm.control}
                    name='confirmPassword'
                    render={({ field }) => (
                      <FormItem className='space-y-2'>
                        <FormLabel>Confirmer le Mot de Passe</FormLabel>
                        <FormControl>
                          <div className='relative'>
                            <Lock className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500' />
                            <Input
                              {...field}
                              id='confirm-password'
                              type={showConfirmPassword ? 'text' : 'password'}
                              placeholder='Confirmez votre mot de passe'
                              className='pl-10 pr-10 border-gray-300 focus:ring-black focus:border-black h-10 text-sm'
                            />
                            <button
                              type='button'
                              onClick={() =>
                                setShowConfirmPassword(!showConfirmPassword)
                              }
                              className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500'
                            >
                              {showConfirmPassword ? (
                                <EyeOff className='h-4 w-4' />
                              ) : (
                                <Eye className='h-4 w-4' />
                              )}
                            </button>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={signupForm.control}
                    name='agreeTerms'
                    render={({ field }) => (
                      <FormItem className='flex items-start space-x-2'>
                        <FormControl>
                          <Checkbox
                            id='terms'
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className='grid gap-1.5 leading-none'>
                          <FormLabel
                            htmlFor='terms'
                            className='text-sm text-gray-700 cursor-pointer'
                          >
                            J&apos;accepte les{' '}
                            <Link
                              href='/terms'
                              className='font-medium text-black hover:underline'
                              target='_blank'
                            >
                              Conditions Générales
                            </Link>{' '}
                            et la{' '}
                            <Link
                              href='/privacy-policy'
                              className='font-medium text-black hover:underline'
                              target='_blank'
                            >
                              Politique de Confidentialité
                            </Link>{' '}
                            d&apos;Abokyh
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />

                  <Button
                    type='submit'
                    className='w-full bg-black hover:bg-gray-800 text-white cursor-pointer'
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
                        Création du compte en cours...
                      </div>
                    ) : (
                      <span className='flex'>
                        <span>Créer un Compte</span>{' '}
                        <ArrowRight className='ml-2 h-4 w-4' />
                      </span>
                    )}
                  </Button>
                </form>
              </Form>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  )
}

export default AuthPage
