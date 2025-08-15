'use client'

import { useState, useEffect } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import DashboardLayout from '@/components/layouts/DashboardLayout'
import BalanceCard from '@/components/dashboard/BalanceCard'
import NotificationCenter from '@/components/dashboard/NotificationCenter'
import QuickActions from '@/components/dashboard/QuickActions'
import RecentTransactions from '@/components/dashboard/RecentTransations'
import MobileTopUp from '@/components/dashboard/MobileTopUp'
import UtilityPayments from '@/components/dashboard/UtilityPayments'

interface Transaction {
  id: string
  type: 'purchase' | 'transfer' | 'receive'
  amount: number
  currency: string
  description: string
  date: Date
  status: 'completed' | 'pending' | 'failed'
}

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<
    'overview' | 'gift-cards' | 'mobile' | 'utilities'
  >('overview')
  const [balance, setBalance] = useState({
    stellar: 250.75,
    btc: 0.0035,
    eth: 0.25,
    usdc: 125.5,
  })
  console.log(setBalance)
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  console.log(isMobile)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768)
      }

      // Set initial value
      handleResize()

      // Add event listener
      window.addEventListener('resize', handleResize)

      // Clean up
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setTransactions([
        {
          id: '1',
          type: 'purchase',
          amount: 25,
          currency: 'XLM',
          description: 'Carte Cadeau Amazon',
          date: new Date(2025, 3, 10),
          status: 'completed',
        },
        {
          id: '2',
          type: 'transfer',
          amount: 50,
          currency: 'XLM',
          description: 'Vers Portefeuille Mobile',
          date: new Date(2025, 3, 8),
          status: 'completed',
        },
        {
          id: '3',
          type: 'receive',
          amount: 100,
          currency: 'XLM',
          description: 'Depuis Portefeuille Externe',
          date: new Date(2025, 3, 5),
          status: 'completed',
        },
      ])
      setIsLoading(false)
    }, 1500)
  }, [])

  const handleTabChange = (value: string) => {
    setActiveTab(value as 'overview' | 'gift-cards' | 'mobile' | 'utilities')
  }

  return (
    <DashboardLayout>
      <Head>
        <title>Tableau de Bord | Abokyh</title>
      </Head>

      <div className='py-4 px-3 sm:py-6 sm:px-4 lg:px-6'>
        {/* Welcome Section */}
        <div className='mb-6 sm:mb-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className='text-xl sm:text-2xl font-bold text-gray-900'>
              Bon retour, Kofi
            </h1>
            <p className='text-sm sm:text-base text-gray-700'>
              Voici ce qui se passe avec votre compte aujourd&apos;hui
            </p>
          </motion.div>
        </div>

        {/* Dashboard Tabs */}
        <Tabs
          value={activeTab}
          onValueChange={handleTabChange}
          className='mb-6 sm:mb-8'
        >
          <div className='overflow-x-auto pb-2 -mx-3 px-3'>
            <TabsList className='w-full min-w-max justify-start border-b rounded-none bg-transparent h-auto p-0 mb-0'>
              <TabsTrigger
                value='overview'
                className='py-3 sm:py-4 px-1 font-medium text-xs sm:text-sm data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none text-gray-500'
              >
                Aperçu
              </TabsTrigger>

              <TabsTrigger
                value='mobile'
                className='py-3 sm:py-4 px-1 font-medium text-xs sm:text-sm ml-4 sm:ml-8 data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none text-gray-500'
              >
                Recharge Mobile
              </TabsTrigger>
              <TabsTrigger
                value='utilities'
                className='py-3 sm:py-4 px-1 font-medium text-xs sm:text-sm ml-4 sm:ml-8 data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none text-gray-500'
              >
                Paiements de Factures
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Overview Tab Content */}
          <TabsContent value='overview' className='mt-4 sm:mt-6'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6'>
              {/* Balance Card */}
              <div className='md:col-span-2'>
                <BalanceCard
                  isLoading={isLoading}
                  balances={balance}
                  primaryCurrency='XLM'
                />
              </div>

              {/* Notification Center */}
              <div>
                <NotificationCenter />
              </div>

              {/* Quick Actions */}
              <div className='md:col-span-3'>
                <QuickActions />
              </div>

              {/* Recent Transactions */}
              <div className='md:col-span-3'>
                <RecentTransactions
                  transactions={transactions}
                  isLoading={isLoading}
                />
              </div>
            </div>
          </TabsContent>

          {/* Mobile Top-up Tab Content */}
          <TabsContent value='mobile' className='mt-4 sm:mt-6'>
            <MobileTopUp />
          </TabsContent>

          {/* Utility Payments Tab Content */}
          <TabsContent value='utilities' className='mt-4 sm:mt-6'>
            <UtilityPayments />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}

export default Dashboard
