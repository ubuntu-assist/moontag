'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import {
  Search,
  Menu,
  Bell,
  Home,
  CreditCard,
  Smartphone,
  Zap,
  Wallet,
  FileText,
  Settings,
  LogOut,
  User,
  ChevronDown,
} from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Link } from '@/i18n/navigation'

interface DashboardLayoutProps {
  children: React.ReactNode
}

interface NavItem {
  name: string
  href: string
  icon: React.ReactNode
}

interface NavItemProps {
  item: NavItem
  mobile?: boolean
  isActive: boolean
  onClick?: () => void
}

const NavItem = ({ item, mobile = false, isActive, onClick }: NavItemProps) => {
  return (
    <a
      href={item.href}
      className={`
        group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors
        ${
          isActive
            ? 'bg-orange-50 text-orange-600'
            : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
        }
      `}
      onClick={onClick}
    >
      <div
        className={`
          mr-3 flex-shrink-0
          ${mobile ? 'h-6 w-6' : 'h-5 w-5'}
          ${
            isActive
              ? 'text-orange-600'
              : 'text-gray-400 group-hover:text-gray-600'
          }
        `}
      >
        {item.icon}
      </div>
      {item.name}
    </a>
  )
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [screenSize, setScreenSize] = useState({
    width: 1200,
    height: 800,
  })
  console.log(screenSize)
  const [language, setLanguage] = useState('fr')
  const pathname = usePathname()
  const router = useRouter()

  const navigation = [
    {
      name: 'Tableau de Bord',
      href: '/dashboard',
      icon: <Home className='h-5 w-5' />,
    },
    {
      name: 'Cartes Cadeaux',
      href: '/gift-cards',
      icon: <CreditCard className='h-5 w-5' />,
    },
    {
      name: 'Recharge Mobile',
      href: '/mobile',
      icon: <Smartphone className='h-5 w-5' />,
    },
    {
      name: 'Factures',
      href: '/utilities',
      icon: <Zap className='h-5 w-5' />,
    },
    {
      name: 'Portefeuille',
      href: '/wallet',
      icon: <Wallet className='h-5 w-5' />,
    },
    {
      name: 'Transactions',
      href: '/transactions',
      icon: <FileText className='h-5 w-5' />,
    },
  ]

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr')
  }

  const handleLogout = () => {
    window.location.href = '/'
  }

  return (
    <div className='min-h-screen flex flex-col bg-gray-50'>
      {/* Sidebar for desktop */}
      <div className='hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 z-20'>
        <div className='flex flex-col flex-grow border-r border-gray-200 bg-white'>
          <div className='flex items-center h-16 flex-shrink-0 px-4 bg-orange-50 border-b border-gray-200'>
            <Link href='/dashboard' className='flex items-center'>
              <Image
                src='/images/moontag-logo.png'
                alt='Abokyh'
                width={120}
                height={36}
                className='h-9 w-auto cursor-pointer'
                priority
              />
            </Link>
          </div>
          <div className='flex-1 flex flex-col overflow-y-auto pt-5 pb-4'>
            <nav className='flex-1 px-2 space-y-1'>
              {navigation.map((item) => (
                <NavItem
                  key={item.name}
                  item={item}
                  isActive={pathname === item.href}
                />
              ))}
            </nav>
            <div className='p-4 border-t border-gray-200 space-y-2'>
              <Link
                href='/settings'
                className='group flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors'
              >
                <Settings className='text-gray-400 group-hover:text-gray-600 mr-3 h-5 w-5 flex-shrink-0' />
                Paramètres
              </Link>
              <button
                onClick={handleLogout}
                className='w-full group flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors'
              >
                <LogOut className='text-gray-400 group-hover:text-gray-600 mr-3 h-5 w-5 flex-shrink-0' />
                Déconnexion
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <div className='sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow-sm lg:hidden'>
          <SheetTrigger asChild>
            <Button
              variant='ghost'
              size='icon'
              className='px-4'
              onClick={() => setIsOpen(true)}
            >
              <span className='sr-only'>Ouvrir la barre latérale</span>
              <Menu className='h-6 w-6' />
            </Button>
          </SheetTrigger>

          <div className='flex-1 flex justify-between px-4'>
            <div className='flex-1 flex items-center'>
              <Link href='/dashboard'>
                <Image
                  src='/images/moontag-logo.png'
                  alt='Abokyh'
                  width={120}
                  height={32}
                  className='h-8 w-auto'
                  priority
                />
              </Link>
            </div>
            <div className='flex items-center space-x-3'>
              <Button variant='ghost' size='icon' className='ml-auto'>
                <Bell className='h-5 w-5 text-gray-400' />
                <span className='sr-only'>Voir les notifications</span>
              </Button>

              {/* Language Selector */}
              <Button
                variant='ghost'
                size='sm'
                className='p-1 h-8 w-8'
                onClick={toggleLanguage}
              >
                {language === 'fr' ? (
                  <img
                    src='https://flagcdn.com/w20/fr.png'
                    alt='French'
                    className='w-5 h-5'
                  />
                ) : (
                  <img
                    src='https://flagcdn.com/w20/gb.png'
                    alt='English'
                    className='w-5 h-5'
                  />
                )}
              </Button>

              {/* Profile Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant='ghost' className='p-0 h-8 w-8 rounded-full'>
                    <Avatar className='h-8 w-8 bg-orange-100'>
                      <AvatarFallback className='text-orange-800 text-sm'>
                        KA
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end' className='w-48'>
                  <DropdownMenuItem className='cursor-pointer'>
                    <User className='mr-2 h-4 w-4' />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className='cursor-pointer'>
                    <Settings className='mr-2 h-4 w-4' />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className='cursor-pointer text-red-600 focus:text-red-600'
                    onClick={handleLogout}
                  >
                    <LogOut className='mr-2 h-4 w-4' />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        <SheetContent side='left' className='p-0 w-72 sm:max-w-sm'>
          <div className='flex flex-col h-full'>
            <div className='flex items-center h-16 flex-shrink-0 px-4 bg-orange-50'>
              <Image
                src='/images/moontag-logo.png'
                alt='Abokyh'
                width={120}
                height={32}
                className='h-8 w-auto'
                priority
              />
            </div>
            <div className='flex-1 overflow-y-auto py-4'>
              <nav className='px-2 space-y-1'>
                {navigation.map((item) => (
                  <NavItem
                    key={item.name}
                    item={item}
                    mobile={true}
                    isActive={pathname === item.href}
                    onClick={() => setIsOpen(false)}
                  />
                ))}
              </nav>
            </div>
            <div className='border-t border-gray-200 p-4'>
              <div className='flex items-center justify-between mb-4'>
                <div className='flex items-center'>
                  <Avatar className='h-10 w-10 bg-orange-100 flex-shrink-0'>
                    <AvatarFallback className='text-orange-800'>
                      KA
                    </AvatarFallback>
                  </Avatar>
                  <div className='ml-3 min-w-0'>
                    <p className='text-base font-medium text-gray-700 truncate'>
                      Kofi Anan
                    </p>
                    <p className='text-sm font-medium text-gray-500 truncate'>
                      kofi@example.com
                    </p>
                  </div>
                </div>
                <Button
                  variant='ghost'
                  size='sm'
                  className='p-1 h-8 w-8'
                  onClick={toggleLanguage}
                >
                  {language === 'fr' ? (
                    <img
                      src='https://flagcdn.com/w20/fr.png'
                      alt='French'
                      className='w-5 h-5'
                    />
                  ) : (
                    <img
                      src='https://flagcdn.com/w20/gb.png'
                      alt='English'
                      className='w-5 h-5'
                    />
                  )}
                </Button>
              </div>

              <div className='space-y-1'>
                <Link
                  href='/profile'
                  className='flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors'
                  onClick={() => setIsOpen(false)}
                >
                  <User className='mr-3 h-5 w-5 text-gray-400' />
                  Profile
                </Link>
                <Link
                  href='/settings'
                  className='flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors'
                  onClick={() => setIsOpen(false)}
                >
                  <Settings className='mr-3 h-5 w-5 text-gray-400' />
                  Settings
                </Link>
                <button
                  onClick={handleLogout}
                  className='w-full flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors'
                >
                  <LogOut className='mr-3 h-5 w-5 text-gray-400' />
                  Logout
                </button>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Main content */}
      <div className='flex flex-col flex-1 lg:pl-64'>
        <div className='sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow-sm hidden lg:flex'>
          <div className='flex-1 px-4 flex items-center justify-between'>
            <div className='flex-1 flex'>
              <div className='w-full max-w-md relative'>
                <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400' />
                <Input
                  className='pl-10 bg-gray-50 border-gray-300'
                  placeholder='Rechercher'
                  type='search'
                />
              </div>
            </div>
            <div className='ml-4 flex items-center space-x-4'>
              <Button variant='ghost' size='icon'>
                <Bell className='h-5 w-5 text-gray-400' />
                <span className='sr-only'>Voir les notifications</span>
              </Button>
              {/* Language Selector */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant='ghost' size='sm' className='gap-1'>
                    {language === 'fr' ? (
                      <img
                        src='https://flagcdn.com/w20/fr.png'
                        alt='French'
                        className='w-5 h-5'
                      />
                    ) : (
                      <img
                        src='https://flagcdn.com/w20/gb.png'
                        alt='English'
                        className='w-5 h-5'
                      />
                    )}
                    <ChevronDown className='h-4 w-4' />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end' className='w-48'>
                  <DropdownMenuItem
                    className='cursor-pointer'
                    onClick={() => setLanguage('fr')}
                  >
                    <img
                      src='https://flagcdn.com/w20/fr.png'
                      alt='French'
                      className='w-5 h-5 mr-2'
                    />
                    <span>Français</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className='cursor-pointer'
                    onClick={() => setLanguage('en')}
                  >
                    <img
                      src='https://flagcdn.com/w20/gb.png'
                      alt='English'
                      className='w-5 h-5 mr-2'
                    />
                    <span>English</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              {/* Profile Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant='ghost' className='p-0 h-8 w-8 rounded-full'>
                    <Avatar className='h-8 w-8 bg-orange-100'>
                      <AvatarFallback className='text-orange-800 text-sm'>
                        KA
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end' className='w-48'>
                  <DropdownMenuItem
                    className='cursor-pointer'
                    onClick={() => router.push('/profile')}
                  >
                    <User className='mr-2 h-4 w-4' />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className='cursor-pointer'
                    onClick={() => router.push('/settings')}
                  >
                    <Settings className='mr-2 h-4 w-4' />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className='cursor-pointer text-red-600 focus:text-red-600'
                    onClick={handleLogout}
                  >
                    <LogOut className='mr-2 h-4 w-4' />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        <main className='flex-1 relative overflow-y-auto focus:outline-none p-4 md:p-6 bg-gray-50'>
          <Card className='shadow-sm'>
            <CardContent className='p-4 sm:p-6'>{children}</CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
