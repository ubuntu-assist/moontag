'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import {
  User,
  Edit,
  Check,
  X,
  Lock,
  Globe,
  CreditCard,
  Smartphone,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import DashboardLayout from '@/components/layouts/DashboardLayout'

const profileSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  address: z.string().min(5, 'Address is too short'),
  city: z.string().min(1, 'City is required'),
  country: z.string().min(1, 'Country is required'),
  postalCode: z.string().min(3, 'Postal code is required'),
})

type ProfileFormData = z.infer<typeof profileSchema>

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [activeTab, setActiveTab] = useState('profile')
  const [avatarFile, setAvatarFile] = useState<File | null>(null)
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null)
  console.log(avatarFile)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      firstName: 'Kofi',
      lastName: 'Anan',
      email: 'kofi@example.com',
      phone: '+1 (555) 123-4567',
      address: '123 Main Street',
      city: 'Accra',
      country: 'Ghana',
      postalCode: '00233',
    },
  })

  const onSubmit = (data: ProfileFormData) => {
    console.log('Profile updated:', data)
    setIsEditing(false)
  }

  const handleCancel = () => {
    reset()
    setIsEditing(false)
  }

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setAvatarFile(file)
      setAvatarPreview(URL.createObjectURL(file))
    }
  }

  return (
    <DashboardLayout>
      <div className='py-6 px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className='text-2xl font-bold text-gray-900'>My Profile</h1>
            <p className='text-gray-700'>
              Manage your personal information and account settings
            </p>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          {/* Left Column - Profile Card */}
          <div className='lg:col-span-1'>
            <Card>
              <CardContent className='p-6'>
                <div className='flex flex-col items-center'>
                  <div className='relative mb-4'>
                    <Avatar className='h-24 w-24'>
                      <AvatarImage
                        src={avatarPreview || '/images/default-avatar.png'}
                        alt='Profile'
                      />
                      <AvatarFallback className='text-2xl bg-orange-100 text-orange-800'>
                        KA
                      </AvatarFallback>
                    </Avatar>
                    {isEditing && (
                      <label
                        htmlFor='avatar-upload'
                        className='absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md cursor-pointer hover:bg-gray-100'
                      >
                        <Edit className='h-4 w-4 text-gray-700' />
                        <input
                          id='avatar-upload'
                          type='file'
                          accept='image/*'
                          className='hidden'
                          onChange={handleAvatarChange}
                        />
                      </label>
                    )}
                  </div>

                  <h2 className='text-xl font-bold text-gray-900'>Kofi Anan</h2>
                  <p className='text-gray-600 mb-4'>kofi@example.com</p>
                  <Badge className='bg-green-100 text-green-800 mb-6'>
                    Verified Account
                  </Badge>

                  <div className='w-full space-y-4'>
                    <div className='flex justify-between items-center'>
                      <span className='text-gray-600'>Member since</span>
                      <span className='font-medium'>Jan 2023</span>
                    </div>
                    <div className='flex justify-between items-center'>
                      <span className='text-gray-600'>Last login</span>
                      <span className='font-medium'>2 hours ago</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Tabs */}
          <div className='lg:col-span-2'>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className='mb-6'>
                <TabsTrigger value='profile'>
                  <User className='h-4 w-4 mr-2' />
                  Profile
                </TabsTrigger>
                <TabsTrigger value='security'>
                  <Lock className='h-4 w-4 mr-2' />
                  Security
                </TabsTrigger>
                <TabsTrigger value='preferences'>
                  <Globe className='h-4 w-4 mr-2' />
                  Preferences
                </TabsTrigger>
                <TabsTrigger value='billing'>
                  <CreditCard className='h-4 w-4 mr-2' />
                  Billing
                </TabsTrigger>
              </TabsList>

              {/* Profile Tab */}
              <TabsContent value='profile'>
                <Card>
                  <CardHeader className='flex flex-row items-center justify-between'>
                    <CardTitle>Personal Information</CardTitle>
                    {!isEditing ? (
                      <Button
                        variant='outline'
                        onClick={() => setIsEditing(true)}
                        className='flex items-center'
                      >
                        <Edit className='h-4 w-4 mr-2' />
                        Edit Profile
                      </Button>
                    ) : (
                      <div className='space-x-2'>
                        <Button
                          variant='outline'
                          onClick={handleCancel}
                          className='flex items-center'
                        >
                          <X className='h-4 w-4 mr-2' />
                          Cancel
                        </Button>
                        <Button
                          onClick={handleSubmit(onSubmit)}
                          disabled={!isDirty}
                          className='flex items-center'
                        >
                          <Check className='h-4 w-4 mr-2' />
                          Save Changes
                        </Button>
                      </div>
                    )}
                  </CardHeader>
                  <CardContent>
                    <form className='space-y-6'>
                      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div>
                          <label className='block text-sm font-medium text-gray-700 mb-1'>
                            First Name
                          </label>
                          {isEditing ? (
                            <>
                              <Input
                                {...register('firstName')}
                                placeholder='First name'
                              />
                              {errors.firstName && (
                                <p className='text-sm text-red-600 mt-1'>
                                  {errors.firstName.message}
                                </p>
                              )}
                            </>
                          ) : (
                            <p className='text-gray-900'>Kofi</p>
                          )}
                        </div>

                        <div>
                          <label className='block text-sm font-medium text-gray-700 mb-1'>
                            Last Name
                          </label>
                          {isEditing ? (
                            <>
                              <Input
                                {...register('lastName')}
                                placeholder='Last name'
                              />
                              {errors.lastName && (
                                <p className='text-sm text-red-600 mt-1'>
                                  {errors.lastName.message}
                                </p>
                              )}
                            </>
                          ) : (
                            <p className='text-gray-900'>Anan</p>
                          )}
                        </div>

                        <div>
                          <label className='block text-sm font-medium text-gray-700 mb-1'>
                            Email
                          </label>
                          {isEditing ? (
                            <>
                              <Input
                                {...register('email')}
                                placeholder='Email'
                                type='email'
                              />
                              {errors.email && (
                                <p className='text-sm text-red-600 mt-1'>
                                  {errors.email.message}
                                </p>
                              )}
                            </>
                          ) : (
                            <p className='text-gray-900'>kofi@example.com</p>
                          )}
                        </div>

                        <div>
                          <label className='block text-sm font-medium text-gray-700 mb-1'>
                            Phone
                          </label>
                          {isEditing ? (
                            <>
                              <Input
                                {...register('phone')}
                                placeholder='Phone number'
                              />
                              {errors.phone && (
                                <p className='text-sm text-red-600 mt-1'>
                                  {errors.phone.message}
                                </p>
                              )}
                            </>
                          ) : (
                            <p className='text-gray-900'>+1 (555) 123-4567</p>
                          )}
                        </div>

                        <div className='md:col-span-2'>
                          <label className='block text-sm font-medium text-gray-700 mb-1'>
                            Address
                          </label>
                          {isEditing ? (
                            <>
                              <Input
                                {...register('address')}
                                placeholder='Street address'
                              />
                              {errors.address && (
                                <p className='text-sm text-red-600 mt-1'>
                                  {errors.address.message}
                                </p>
                              )}
                            </>
                          ) : (
                            <p className='text-gray-900'>123 Main Street</p>
                          )}
                        </div>

                        <div>
                          <label className='block text-sm font-medium text-gray-700 mb-1'>
                            City
                          </label>
                          {isEditing ? (
                            <>
                              <Input {...register('city')} placeholder='City' />
                              {errors.city && (
                                <p className='text-sm text-red-600 mt-1'>
                                  {errors.city.message}
                                </p>
                              )}
                            </>
                          ) : (
                            <p className='text-gray-900'>Accra</p>
                          )}
                        </div>

                        <div>
                          <label className='block text-sm font-medium text-gray-700 mb-1'>
                            Country
                          </label>
                          {isEditing ? (
                            <>
                              <Input
                                {...register('country')}
                                placeholder='Country'
                              />
                              {errors.country && (
                                <p className='text-sm text-red-600 mt-1'>
                                  {errors.country.message}
                                </p>
                              )}
                            </>
                          ) : (
                            <p className='text-gray-900'>Ghana</p>
                          )}
                        </div>

                        <div>
                          <label className='block text-sm font-medium text-gray-700 mb-1'>
                            Postal Code
                          </label>
                          {isEditing ? (
                            <>
                              <Input
                                {...register('postalCode')}
                                placeholder='Postal code'
                              />
                              {errors.postalCode && (
                                <p className='text-sm text-red-600 mt-1'>
                                  {errors.postalCode.message}
                                </p>
                              )}
                            </>
                          ) : (
                            <p className='text-gray-900'>00233</p>
                          )}
                        </div>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Security Tab */}
              <TabsContent value='security'>
                <Card>
                  <CardHeader>
                    <CardTitle>Security Settings</CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-6'>
                    <div className='border rounded-lg p-4'>
                      <div className='flex justify-between items-center'>
                        <div>
                          <h3 className='font-medium'>Password</h3>
                          <p className='text-sm text-gray-600'>
                            Last changed 3 months ago
                          </p>
                        </div>
                        <Button variant='outline'>Change Password</Button>
                      </div>
                    </div>

                    <div className='border rounded-lg p-4'>
                      <div className='flex justify-between items-center'>
                        <div>
                          <h3 className='font-medium'>
                            Two-Factor Authentication
                          </h3>
                          <p className='text-sm text-gray-600'>
                            Add an extra layer of security to your account
                          </p>
                        </div>
                        <Badge
                          variant='outline'
                          className='bg-yellow-100 text-yellow-800'
                        >
                          Not Enabled
                        </Badge>
                      </div>
                      <Button variant='outline' className='mt-4'>
                        Set Up 2FA
                      </Button>
                    </div>

                    <div className='border rounded-lg p-4'>
                      <div className='flex justify-between items-center'>
                        <div>
                          <h3 className='font-medium'>Active Sessions</h3>
                          <p className='text-sm text-gray-600'>
                            Manage your logged-in devices
                          </p>
                        </div>
                      </div>
                      <div className='mt-4 space-y-3'>
                        <div className='flex items-center justify-between p-3 bg-gray-50 rounded'>
                          <div className='flex items-center'>
                            <Globe className='h-5 w-5 text-gray-400 mr-3' />
                            <div>
                              <p className='font-medium'>Chrome on Windows</p>
                              <p className='text-sm text-gray-600'>
                                Accra, Ghana • Last active 2 hours ago
                              </p>
                            </div>
                          </div>
                          <Button variant='ghost' size='sm'>
                            Log Out
                          </Button>
                        </div>
                        <div className='flex items-center justify-between p-3 bg-gray-50 rounded'>
                          <div className='flex items-center'>
                            <Smartphone className='h-5 w-5 text-gray-400 mr-3' />
                            <div>
                              <p className='font-medium'>Safari on iPhone</p>
                              <p className='text-sm text-gray-600'>
                                Kumasi, Ghana • Last active 1 day ago
                              </p>
                            </div>
                          </div>
                          <Button variant='ghost' size='sm'>
                            Log Out
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Preferences Tab */}
              <TabsContent value='preferences'>
                <Card>
                  <CardHeader>
                    <CardTitle>Preferences</CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-6'>
                    <div className='border rounded-lg p-4'>
                      <h3 className='font-medium mb-4'>Language & Region</h3>
                      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div>
                          <label className='block text-sm font-medium text-gray-700 mb-1'>
                            Language
                          </label>
                          <div className='flex items-center space-x-2'>
                            <Button
                              variant='outline'
                              className='flex items-center'
                            >
                              <img
                                src='https://flagcdn.com/w20/gb.png'
                                alt='English'
                                className='w-5 h-5 mr-2'
                              />
                              English
                            </Button>
                            <Button
                              variant='outline'
                              className='flex items-center'
                            >
                              <img
                                src='https://flagcdn.com/w20/fr.png'
                                alt='French'
                                className='w-5 h-5 mr-2'
                              />
                              Français
                            </Button>
                          </div>
                        </div>
                        <div>
                          <label className='block text-sm font-medium text-gray-700 mb-1'>
                            Timezone
                          </label>
                          <Input value='GMT +0 (Accra)' readOnly />
                        </div>
                      </div>
                    </div>

                    <div className='border rounded-lg p-4'>
                      <h3 className='font-medium mb-4'>Notifications</h3>
                      <div className='space-y-4'>
                        <div className='flex items-center justify-between'>
                          <div>
                            <p className='font-medium'>Email Notifications</p>
                            <p className='text-sm text-gray-600'>
                              Receive important updates via email
                            </p>
                          </div>
                          <Button variant='outline'>Configure</Button>
                        </div>
                        <div className='flex items-center justify-between'>
                          <div>
                            <p className='font-medium'>Push Notifications</p>
                            <p className='text-sm text-gray-600'>
                              Get alerts on your mobile device
                            </p>
                          </div>
                          <Button variant='outline'>Configure</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Billing Tab */}
              <TabsContent value='billing'>
                <Card>
                  <CardHeader>
                    <CardTitle>Billing Information</CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-6'>
                    <div className='border rounded-lg p-4'>
                      <div className='flex justify-between items-center'>
                        <div>
                          <h3 className='font-medium'>Payment Methods</h3>
                          <p className='text-sm text-gray-600'>
                            Manage your saved payment options
                          </p>
                        </div>
                        <Button variant='outline'>Add Payment Method</Button>
                      </div>
                      <div className='mt-4 space-y-3'>
                        <div className='flex items-center justify-between p-3 bg-gray-50 rounded'>
                          <div className='flex items-center'>
                            <CreditCard className='h-5 w-5 text-gray-400 mr-3' />
                            <div>
                              <p className='font-medium'>Visa ending in 4242</p>
                              <p className='text-sm text-gray-600'>
                                Expires 12/25
                              </p>
                            </div>
                          </div>
                          <Button variant='ghost' size='sm'>
                            Remove
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className='border rounded-lg p-4'>
                      <h3 className='font-medium mb-4'>Billing History</h3>
                      <div className='overflow-x-auto'>
                        <table className='min-w-full divide-y divide-gray-200'>
                          <thead className='bg-gray-50'>
                            <tr>
                              <th className='px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                                Date
                              </th>
                              <th className='px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                                Description
                              </th>
                              <th className='px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                                Amount
                              </th>
                              <th className='px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                                Status
                              </th>
                            </tr>
                          </thead>
                          <tbody className='bg-white divide-y divide-gray-200'>
                            <tr>
                              <td className='px-4 py-3 whitespace-nowrap text-sm text-gray-900'>
                                May 15, 2023
                              </td>
                              <td className='px-4 py-3 whitespace-nowrap text-sm text-gray-900'>
                                Premium Subscription
                              </td>
                              <td className='px-4 py-3 whitespace-nowrap text-sm text-gray-900'>
                                $9.99
                              </td>
                              <td className='px-4 py-3 whitespace-nowrap'>
                                <Badge className='bg-green-100 text-green-800'>
                                  Paid
                                </Badge>
                              </td>
                            </tr>
                            <tr>
                              <td className='px-4 py-3 whitespace-nowrap text-sm text-gray-900'>
                                Apr 15, 2023
                              </td>
                              <td className='px-4 py-3 whitespace-nowrap text-sm text-gray-900'>
                                Premium Subscription
                              </td>
                              <td className='px-4 py-3 whitespace-nowrap text-sm text-gray-900'>
                                $9.99
                              </td>
                              <td className='px-4 py-3 whitespace-nowrap'>
                                <Badge className='bg-green-100 text-green-800'>
                                  Paid
                                </Badge>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default ProfilePage
