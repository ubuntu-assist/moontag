'use client'

import { useState, useEffect } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import {
  Search,
  Filter,
  Gift,
  Copy,
  Clock,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Share2,
} from 'lucide-react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import DashboardLayout from '@/components/layouts/DashboardLayout'
import { Link } from '@/i18n/navigation'

interface GiftCard {
  id: string
  name: string
  merchant: string
  logo: string
  bgColor: string
  amount: number
  code: string
  purchaseDate: string // Changed from Date to string
  expiryDate?: string | null // Changed from Date to string
  status: 'active' | 'redeemed' | 'expired' | 'pending'
  partiallyUsed?: boolean
  remainingBalance?: number
}

const MyGiftCards = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [giftCards, setGiftCards] = useState<GiftCard[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [selectedCard, setSelectedCard] = useState<GiftCard | null>(null)
  const [showCardDetailsDialog, setShowCardDetailsDialog] = useState(false)
  const [showShareDialog, setShowShareDialog] = useState(false)
  const [emailToShare, setEmailToShare] = useState('')
  const [isCodeVisible, setIsCodeVisible] = useState(false)

  // Format date string to avoid hydration issues
  const formatDateString = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  // Mock data fetch
  useEffect(() => {
    setTimeout(() => {
      setGiftCards([
        {
          id: 'gc-1',
          name: 'Amazon Gift Card',
          merchant: 'Amazon',
          logo: '/images/shopping-card.png',
          bgColor: '#232F3E',
          amount: 50,
          code: 'AMZN-1234-5678-9012',
          purchaseDate: '2025-04-10T00:00:00', // ISO string format
          status: 'active',
        },
        {
          id: 'gc-2',
          name: 'Netflix Gift Card',
          merchant: 'Netflix',
          logo: '/images/shopping-card.png',
          bgColor: '#E50914',
          amount: 25,
          code: 'NFLX-1234-5678-9012',
          purchaseDate: '2025-03-15T00:00:00', // ISO string format
          status: 'redeemed',
        },
        {
          id: 'gc-3',
          name: 'Spotify Gift Card',
          merchant: 'Spotify',
          logo: '/images/shopping-card.png',
          bgColor: '#1DB954',
          amount: 30,
          code: 'SPTF-1234-5678-9012',
          purchaseDate: '2025-02-20T00:00:00', // ISO string format
          expiryDate: '2025-08-20T00:00:00', // ISO string format
          status: 'active',
        },
        {
          id: 'gc-4',
          name: 'Steam Gift Card',
          merchant: 'Steam',
          logo: '/images/shopping-card.png',
          bgColor: '#171A21',
          amount: 100,
          code: 'STEM-1234-5678-9012',
          purchaseDate: '2025-01-05T00:00:00', // ISO string format
          status: 'active',
          partiallyUsed: true,
          remainingBalance: 35,
        },
        {
          id: 'gc-5',
          name: 'Uber Gift Card',
          merchant: 'Uber',
          logo: '/images/shopping-card.png',
          bgColor: '#000000',
          amount: 75,
          code: 'UBER-1234-5678-9012',
          purchaseDate: '2024-12-25T00:00:00', // ISO string format
          status: 'pending',
        },
      ])
      setIsLoading(false)
    }, 1500)
  }, [])

  // Filtered gift cards based on search and status
  const filteredGiftCards = giftCards.filter((card) => {
    const matchesSearch =
      card.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.merchant.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === 'all' || card.status === statusFilter
    return matchesSearch && matchesStatus
  })

  // Gift cards grouped by status for tabs
  const activeCards = filteredGiftCards.filter(
    (card) => card.status === 'active'
  )
  const redeemedCards = filteredGiftCards.filter(
    (card) => card.status === 'redeemed'
  )
  const pendingCards = filteredGiftCards.filter(
    (card) => card.status === 'pending'
  )

  // Handle card click to show details
  const handleCardClick = (card: GiftCard) => {
    setSelectedCard(card)
    setShowCardDetailsDialog(true)
    setIsCodeVisible(false) // Reset code visibility
  }

  // Handle share card
  const handleShareCard = () => {
    if (selectedCard) {
      setShowCardDetailsDialog(false)
      setShowShareDialog(true)
    }
  }

  // Copy code to clipboard
  const handleCopyCode = () => {
    if (selectedCard) {
      navigator.clipboard.writeText(selectedCard.code)
      // Could add a toast notification here
    }
  }

  // Get status badge
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return (
          <Badge className='bg-green-100 text-green-800 hover:bg-green-100'>
            Active
          </Badge>
        )
      case 'redeemed':
        return (
          <Badge className='bg-gray-100 text-gray-800 hover:bg-gray-100'>
            Redeemed
          </Badge>
        )
      case 'expired':
        return (
          <Badge className='bg-red-100 text-red-800 hover:bg-red-100'>
            Expired
          </Badge>
        )
      case 'pending':
        return (
          <Badge className='bg-yellow-100 text-yellow-800 hover:bg-yellow-100'>
            Pending
          </Badge>
        )
      default:
        return null
    }
  }

  // Get status icon
  const getStatusIcon = (status: string, size = 16) => {
    switch (status) {
      case 'active':
        return <CheckCircle size={size} className='text-green-600' />
      case 'redeemed':
        return <CheckCircle size={size} className='text-gray-400' />
      case 'expired':
        return <AlertCircle size={size} className='text-red-600' />
      case 'pending':
        return <Clock size={size} className='text-yellow-600' />
      default:
        return null
    }
  }

  return (
    <DashboardLayout>
      <Head>
        <title>My Gift Cards | Abokyh</title>
      </Head>

      <div className='py-6 px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className='text-2xl font-bold text-gray-900'>My Gift Cards</h1>
            <p className='text-gray-700'>
              Manage your purchased gift cards and redeem them when ready
            </p>
          </motion.div>
        </div>

        {/* Filters and Search */}
        <div className='mb-6 flex flex-col sm:flex-row gap-4'>
          <div className='relative flex-1'>
            <Input
              placeholder='Search gift cards...'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='pl-10 border-gray-300 focus:ring-black focus:border-black'
            />
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500' />
          </div>

          <div className='flex gap-3'>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className='w-40 border-gray-300 focus:ring-black focus:border-black'>
                <div className='flex items-center gap-2'>
                  <Filter className='h-4 w-4' />
                  <SelectValue placeholder='All Cards' />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='all'>All Cards</SelectItem>
                <SelectItem value='active'>Active</SelectItem>
                <SelectItem value='redeemed'>Redeemed</SelectItem>
                <SelectItem value='pending'>Pending</SelectItem>
                <SelectItem value='expired'>Expired</SelectItem>
              </SelectContent>
            </Select>

            <Button
              className='bg-black hover:bg-gray-800 text-white flex-shrink-0'
              asChild
            >
              <Link href='/gift-cards'>
                <Gift className='mr-2 h-4 w-4' />
                Buy New Card
              </Link>
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue='all'>
          <TabsList className='mb-6'>
            <TabsTrigger value='all'>All Cards</TabsTrigger>
            <TabsTrigger value='active'>
              Active ({activeCards.length})
            </TabsTrigger>
            <TabsTrigger value='redeemed'>
              Redeemed ({redeemedCards.length})
            </TabsTrigger>
            <TabsTrigger value='pending'>
              Pending ({pendingCards.length})
            </TabsTrigger>
          </TabsList>

          {/* All Cards Tab */}
          <TabsContent value='all'>
            {isLoading ? (
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {[1, 2, 3].map((i) => (
                  <Card key={i} className='animate-pulse'>
                    <CardContent className='p-0'>
                      <div className='h-40 bg-gray-200' />
                      <div className='p-4'>
                        <div className='h-5 bg-gray-200 rounded w-1/2 mb-3' />
                        <div className='h-4 bg-gray-200 rounded w-1/3 mb-2' />
                        <div className='h-4 bg-gray-200 rounded w-1/4' />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : filteredGiftCards.length > 0 ? (
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {filteredGiftCards.map((card) => (
                  <Card
                    key={card.id}
                    className='overflow-hidden cursor-pointer hover:shadow-md transition-shadow'
                    onClick={() => handleCardClick(card)}
                  >
                    <CardContent className='p-0'>
                      <div
                        className='h-40 flex items-center justify-center relative'
                        style={{ backgroundColor: card.bgColor }}
                      >
                        <img
                          src={card.logo || '/images/placeholder-logo.png'}
                          alt={`${card.name} logo`}
                          className='max-w-[50%] max-h-[50%] object-contain'
                        />
                        <div className='absolute top-3 right-3'>
                          {getStatusBadge(card.status)}
                        </div>
                      </div>
                      <div className='p-4'>
                        <div className='flex justify-between items-start'>
                          <div>
                            <h3 className='font-bold text-gray-900'>
                              {card.name}
                            </h3>
                            <p className='text-gray-600 text-sm'>
                              {card.merchant}
                            </p>
                          </div>
                          <div className='text-right'>
                            <p className='font-bold text-gray-900'>
                              $
                              {card.partiallyUsed
                                ? card.remainingBalance
                                : card.amount}
                            </p>
                            <p className='text-xs text-gray-500'>
                              {card.partiallyUsed
                                ? 'Remaining Balance'
                                : 'Gift Card Value'}
                            </p>
                          </div>
                        </div>
                        <div className='mt-3 flex justify-between items-center text-xs text-gray-500'>
                          <span>
                            Purchased: {formatDateString(card.purchaseDate)}
                          </span>
                          <div className='flex items-center'>
                            {getStatusIcon(card.status)}
                            <span className='ml-1'>
                              {card.status === 'active'
                                ? 'Ready to use'
                                : card.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className='text-center py-12 bg-gray-50 rounded-lg'>
                <Gift className='mx-auto h-12 w-12 text-gray-400 mb-4' />
                <h3 className='text-lg font-bold text-gray-900 mb-2'>
                  No gift cards found
                </h3>
                <p className='text-gray-600 mb-6'>
                  {searchQuery
                    ? 'No gift cards match your search criteria'
                    : "You haven't purchased any gift cards yet"}
                </p>
                <Button
                  className='bg-black hover:bg-gray-800 text-white'
                  asChild
                >
                  <Link href='/gift-cards'>Browse Gift Cards</Link>
                </Button>
              </div>
            )}
          </TabsContent>

          {/* Active Cards Tab */}
          <TabsContent value='active'>
            {activeCards.length > 0 ? (
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {activeCards.map((card) => (
                  <Card
                    key={card.id}
                    className='overflow-hidden cursor-pointer hover:shadow-md transition-shadow'
                    onClick={() => handleCardClick(card)}
                  >
                    <CardContent className='p-0'>
                      <div
                        className='h-40 flex items-center justify-center relative'
                        style={{ backgroundColor: card.bgColor }}
                      >
                        <img
                          src={card.logo || '/images/placeholder-logo.png'}
                          alt={`${card.name} logo`}
                          className='max-w-[50%] max-h-[50%] object-contain'
                        />
                      </div>
                      <div className='p-4'>
                        <div className='flex justify-between items-start'>
                          <div>
                            <h3 className='font-bold text-gray-900'>
                              {card.name}
                            </h3>
                            <p className='text-gray-600 text-sm'>
                              {card.merchant}
                            </p>
                          </div>
                          <div className='text-right'>
                            <p className='font-bold text-gray-900'>
                              $
                              {card.partiallyUsed
                                ? card.remainingBalance
                                : card.amount}
                            </p>
                            <p className='text-xs text-gray-500'>
                              {card.partiallyUsed
                                ? 'Remaining Balance'
                                : 'Gift Card Value'}
                            </p>
                          </div>
                        </div>
                        <div className='mt-3 flex justify-between items-center text-xs text-gray-500'>
                          <span>
                            Purchased: {formatDateString(card.purchaseDate)}
                          </span>
                          <div className='flex items-center text-green-600'>
                            <CheckCircle size={16} />
                            <span className='ml-1'>Ready to use</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className='text-center py-12 bg-gray-50 rounded-lg'>
                <Gift className='mx-auto h-12 w-12 text-gray-400 mb-4' />
                <h3 className='text-lg font-bold text-gray-900 mb-2'>
                  No active gift cards
                </h3>
                <p className='text-gray-600 mb-6'>
                  You don&apos;t have any active gift cards at the moment
                </p>
                <Button
                  className='bg-black hover:bg-gray-800 text-white'
                  asChild
                >
                  <Link href='/gift-cards'>Browse Gift Cards</Link>
                </Button>
              </div>
            )}
          </TabsContent>

          {/* Other tabs would follow the same pattern */}
          <TabsContent value='redeemed'>
            {redeemedCards.length > 0 ? (
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {redeemedCards.map((card) => (
                  <Card
                    key={card.id}
                    className='overflow-hidden cursor-pointer hover:shadow-md transition-shadow opacity-75'
                    onClick={() => handleCardClick(card)}
                  >
                    <CardContent className='p-0'>
                      <div
                        className='h-40 flex items-center justify-center relative grayscale'
                        style={{ backgroundColor: card.bgColor }}
                      >
                        <img
                          src={card.logo || '/images/placeholder-logo.png'}
                          alt={`${card.name} logo`}
                          className='max-w-[50%] max-h-[50%] object-contain'
                        />
                        <div className='absolute top-3 right-3'>
                          <Badge className='bg-gray-100 text-gray-800 hover:bg-gray-100'>
                            Redeemed
                          </Badge>
                        </div>
                      </div>
                      <div className='p-4'>
                        <div className='flex justify-between items-start'>
                          <div>
                            <h3 className='font-bold text-gray-900'>
                              {card.name}
                            </h3>
                            <p className='text-gray-600 text-sm'>
                              {card.merchant}
                            </p>
                          </div>
                          <div className='text-right'>
                            <p className='font-bold text-gray-500'>
                              ${card.amount}
                            </p>
                            <p className='text-xs text-gray-500'>
                              Original Value
                            </p>
                          </div>
                        </div>
                        <div className='mt-3 flex justify-between items-center text-xs text-gray-500'>
                          <span>
                            Purchased: {formatDateString(card.purchaseDate)}
                          </span>
                          <div className='flex items-center'>
                            <CheckCircle size={16} className='text-gray-400' />
                            <span className='ml-1'>Redeemed</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className='text-center py-12 bg-gray-50 rounded-lg'>
                <CheckCircle className='mx-auto h-12 w-12 text-gray-400 mb-4' />
                <h3 className='text-lg font-bold text-gray-900 mb-2'>
                  No redeemed gift cards
                </h3>
                <p className='text-gray-600'>
                  You haven&apos;t redeemed any gift cards yet
                </p>
              </div>
            )}
          </TabsContent>

          <TabsContent value='pending'>
            {pendingCards.length > 0 ? (
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {pendingCards.map((card) => (
                  <Card
                    key={card.id}
                    className='overflow-hidden cursor-pointer hover:shadow-md transition-shadow'
                    onClick={() => handleCardClick(card)}
                  >
                    <CardContent className='p-0'>
                      <div
                        className='h-40 flex items-center justify-center relative'
                        style={{ backgroundColor: card.bgColor }}
                      >
                        <img
                          src={card.logo || '/images/placeholder-logo.png'}
                          alt={`${card.name} logo`}
                          className='max-w-[50%] max-h-[50%] object-contain'
                        />
                        <div className='absolute top-3 right-3'>
                          <Badge className='bg-yellow-100 text-yellow-800 hover:bg-yellow-100'>
                            Pending
                          </Badge>
                        </div>
                      </div>
                      <div className='p-4'>
                        <div className='flex justify-between items-start'>
                          <div>
                            <h3 className='font-bold text-gray-900'>
                              {card.name}
                            </h3>
                            <p className='text-gray-600 text-sm'>
                              {card.merchant}
                            </p>
                          </div>
                          <div className='text-right'>
                            <p className='font-bold text-gray-900'>
                              ${card.amount}
                            </p>
                            <p className='text-xs text-gray-500'>
                              Gift Card Value
                            </p>
                          </div>
                        </div>
                        <div className='mt-3 flex justify-between items-center text-xs text-gray-500'>
                          <span>
                            Purchased: {formatDateString(card.purchaseDate)}
                          </span>
                          <div className='flex items-center text-yellow-600'>
                            <Clock size={16} />
                            <span className='ml-1'>Processing</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className='text-center py-12 bg-gray-50 rounded-lg'>
                <Clock className='mx-auto h-12 w-12 text-gray-400 mb-4' />
                <h3 className='text-lg font-bold text-gray-900 mb-2'>
                  No pending gift cards
                </h3>
                <p className='text-gray-600'>
                  You don&apos;t have any gift cards pending activation
                </p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>

      {/* Gift Card Details Dialog */}
      {selectedCard && (
        <Dialog
          open={showCardDetailsDialog}
          onOpenChange={setShowCardDetailsDialog}
        >
          <DialogContent className='max-w-lg'>
            <DialogHeader>
              <DialogTitle className='text-xl font-bold'>
                {selectedCard.name}
              </DialogTitle>
            </DialogHeader>

            <div className='space-y-6'>
              {/* Card visual */}
              <div
                className='h-48 flex items-center justify-center rounded-lg relative'
                style={{ backgroundColor: selectedCard.bgColor }}
              >
                <img
                  src={selectedCard.logo || '/images/placeholder-logo.png'}
                  alt={`${selectedCard.name} logo`}
                  className='max-w-[50%] max-h-[50%] object-contain'
                />
                <div className='absolute top-3 right-3'>
                  {getStatusBadge(selectedCard.status)}
                </div>
              </div>

              {/* Card details */}
              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <p className='text-sm text-gray-500'>Value</p>
                  <p className='font-bold text-gray-900'>
                    $
                    {selectedCard.partiallyUsed
                      ? selectedCard.remainingBalance
                      : selectedCard.amount}
                    {selectedCard.partiallyUsed && (
                      <span className='text-sm text-gray-500 ml-1'>
                        of ${selectedCard.amount}
                      </span>
                    )}
                  </p>
                </div>
                <div>
                  <p className='text-sm text-gray-500'>Purchased</p>
                  <p className='font-medium text-gray-900'>
                    {formatDateString(selectedCard.purchaseDate)}
                  </p>
                </div>
                {selectedCard.expiryDate && (
                  <div className='col-span-2'>
                    <p className='text-sm text-gray-500'>Expires</p>
                    <p className='font-medium text-gray-900'>
                      {formatDateString(selectedCard.expiryDate)}
                    </p>
                  </div>
                )}
              </div>

              {/* Card code */}
              {selectedCard.status === 'active' && (
                <div className='bg-gray-50 p-4 rounded-lg'>
                  <div className='flex justify-between items-center mb-2'>
                    <p className='text-sm text-gray-700 font-medium'>
                      Gift Card Code
                    </p>
                    <Button
                      variant='ghost'
                      size='sm'
                      className='h-8 px-2'
                      onClick={() => setIsCodeVisible(!isCodeVisible)}
                    >
                      {isCodeVisible ? 'Hide' : 'Show'}
                    </Button>
                  </div>

                  <div className='relative'>
                    <p className='font-mono text-lg font-medium text-gray-900 tracking-wider'>
                      {isCodeVisible
                        ? selectedCard.code
                        : '••••-••••-••••-••••'}
                    </p>
                    <Button
                      variant='ghost'
                      size='sm'
                      className='absolute right-0 top-0 h-8 w-8 p-0 text-gray-500'
                      onClick={handleCopyCode}
                      disabled={!isCodeVisible}
                    >
                      <Copy size={16} />
                    </Button>
                  </div>
                </div>
              )}

              {/* Redemption instructions */}
              <div>
                <h3 className='font-medium text-gray-900 mb-2'>
                  How to Redeem
                </h3>
                <ul className='list-disc list-inside space-y-1 text-gray-700 text-sm'>
                  <li>
                    Visit the {selectedCard.merchant} website or open the app
                  </li>
                  <li>Log in to your account or proceed to checkout</li>
                  <li>Enter the gift card code when prompted</li>
                  <li>
                    The value will be added to your account or applied to your
                    purchase
                  </li>
                </ul>
                <Button
                  variant='link'
                  className='text-black p-0 h-auto mt-2 text-sm'
                  asChild
                >
                  <a href='#' target='_blank' rel='noopener noreferrer'>
                    View detailed instructions
                    <ArrowRight size={14} className='ml-1' />
                  </a>
                </Button>
              </div>
            </div>

            <DialogFooter className='flex flex-col sm:flex-row gap-3'>
              {selectedCard.status === 'active' && (
                <>
                  <Button
                    className='sm:flex-1 bg-black hover:bg-gray-800'
                    asChild
                  >
                    <a
                      href={`https://${selectedCard.merchant.toLowerCase()}.com`}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Redeem Now
                    </a>
                  </Button>
                  <Button
                    variant='outline'
                    className='sm:flex-1 border-gray-300'
                    onClick={handleShareCard}
                  >
                    <Share2 size={16} className='mr-2' />
                    Share Gift Card
                  </Button>
                </>
              )}
              {selectedCard.status === 'pending' && (
                <Button className='sm:flex-1 bg-black hover:bg-gray-800'>
                  <Clock size={16} className='mr-2' />
                  Check Status
                </Button>
              )}
              {selectedCard.status === 'redeemed' && (
                <Button
                  className='sm:flex-1 bg-black hover:bg-gray-800'
                  asChild
                >
                  <Link href='/gift-cards'>Buy Another</Link>
                </Button>
              )}
              <Button
                variant='outline'
                className='sm:flex-1 border-gray-300'
                onClick={() => setShowCardDetailsDialog(false)}
              >
                Close
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}

      {/* Share Gift Card Dialog */}
      <Dialog open={showShareDialog} onOpenChange={setShowShareDialog}>
        <DialogContent className='max-w-md'>
          <DialogHeader>
            <DialogTitle className='text-xl font-bold'>
              Share Gift Card
            </DialogTitle>
          </DialogHeader>

          <div className='space-y-4 py-4'>
            <p className='text-gray-700'>
              Share this {selectedCard?.name} with someone via email.
              They&apos;ll receive the gift card code and redemption
              instructions.
            </p>

            <div className='space-y-2'>
              <label
                htmlFor='email'
                className='text-sm font-medium text-gray-700'
              >
                Recipient Email
              </label>
              <Input
                id='email'
                type='email'
                placeholder='Enter email address'
                value={emailToShare}
                onChange={(e) => setEmailToShare(e.target.value)}
                className='border-gray-300 focus:ring-black focus:border-black'
              />
            </div>

            <div className='space-y-2'>
              <label
                htmlFor='message'
                className='text-sm font-medium text-gray-700'
              >
                Personal Message (Optional)
              </label>
              <textarea
                id='message'
                rows={3}
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black'
                placeholder='Add a personal message...'
              />
            </div>

            <div className='bg-[#FFF4E9] p-4 rounded-lg'>
              <div className='flex items-center'>
                <div className='w-12 h-12 rounded-full overflow-hidden flex-shrink-0'>
                  <img
                    src={selectedCard?.logo || '/images/placeholder-logo.png'}
                    alt={selectedCard?.name}
                    className='w-full h-full object-cover'
                  />
                </div>
                <div className='ml-3'>
                  <h4 className='font-bold text-gray-900'>
                    {selectedCard?.name}
                  </h4>
                  <p className='text-sm text-gray-700'>
                    ${selectedCard?.amount}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <DialogFooter className='flex flex-col sm:flex-row gap-3'>
            <Button
              className='sm:flex-1 bg-black hover:bg-gray-800'
              disabled={!emailToShare}
            >
              <Share2 size={16} className='mr-2' />
              Send Gift Card
            </Button>
            <Button
              variant='outline'
              className='sm:flex-1 border-gray-300'
              onClick={() => setShowShareDialog(false)}
            >
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  )
}

export default MyGiftCards
