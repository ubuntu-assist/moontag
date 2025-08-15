'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ChevronLeft,
  CreditCard,
  Share2,
  Heart,
  CheckCircle,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Card, CardContent } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
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
import DashboardLayout from '@/components/layouts/DashboardLayout'
import { Link } from '@/i18n/navigation'

interface GiftCardDetails {
  id: string
  name: string
  merchant: string
  logo: string
  bgColor: string
  description: string
  denominations: number[]
  region: string
  discount: number | null
  termsUrl: string
  redemptionInstructions: string[]
  faq: { question: string; answer: string }[]
}

const GiftCardProduct = () => {
  const [selectedDenomination, setSelectedDenomination] = useState<string>('25')
  const [quantity, setQuantity] = useState<string>('1')
  const [selectedCurrency, setSelectedCurrency] = useState<string>('XLM')
  const [isFavorite, setIsFavorite] = useState<boolean>(false)
  const [showConfirmDialog, setShowConfirmDialog] = useState<boolean>(false)

  const giftCard: GiftCardDetails = {
    id: 'amazon-01',
    name: 'Amazon Gift Card',
    merchant: 'Amazon',
    logo: '/images/orange-card.png',
    bgColor: '#232F3E',
    description:
      'Shop millions of products on Amazon with this digital gift card. Perfect for gifting to friends and family or using yourself for everyday purchases.',
    denominations: [10, 25, 50, 100, 200],
    region: 'Global',
    discount: 2.5, // 2.5% discount
    termsUrl:
      'https://www.amazon.com/gp/help/customer/display.html?nodeId=GAKQM2GNMIEF5HNF',
    redemptionInstructions: [
      'Log in to your Amazon account at amazon.com',
      'Navigate to Account & Lists > Account > Gift Cards',
      "Click on 'Redeem a Gift Card'",
      "Enter the claim code and click 'Apply to your balance'",
      'Your gift card amount will be added to your Amazon account balance',
    ],
    faq: [
      {
        question: 'Do Amazon gift cards expire?',
        answer:
          'Amazon gift cards issued after October 1, 2005, do not expire and are not subject to service fees.',
      },
      {
        question: 'Can I use this gift card internationally?',
        answer:
          'Gift cards purchased through Abokyh can be used on Amazon.com (US). For use on other Amazon marketplaces, please check the compatibility before purchase.',
      },
      {
        question: 'How quickly will I receive my gift card?',
        answer:
          'Digital gift cards are delivered instantly to your Abokyh account once the transaction is confirmed on the blockchain, typically within minutes.',
      },
      {
        question: 'Can I send this gift card to someone else?',
        answer:
          'Yes, you can purchase a gift card and choose to send it directly to a recipient by email, or you can keep it in your Abokyh account and share the redemption code later.',
      },
    ],
  }

  // Calculate amount with discount
  const baseAmount = parseFloat(selectedDenomination) * parseInt(quantity)
  const discount = giftCard.discount
    ? (baseAmount * giftCard.discount) / 100
    : 0
  const finalAmount = baseAmount - discount

  // Mock exchange rates
  const exchangeRates = {
    XLM: 1.0,
    BTC: 32000,
    ETH: 2000,
    USDC: 1.0,
  }

  // Calculate crypto amount
  const cryptoAmount =
    finalAmount / exchangeRates[selectedCurrency as keyof typeof exchangeRates]

  const handlePurchase = () => {
    // In a real implementation, this would initiate the payment flow
    setShowConfirmDialog(true)
  }

  return (
    <DashboardLayout>
      <div className='py-6 px-4 sm:px-6 lg:px-8'>
        {/* Back button */}
        <div className='mb-6'>
          <Button variant='ghost' className='text-gray-700 pl-0' asChild>
            <Link href='/gift-cards'>
              <ChevronLeft size={20} className='mr-1' />
              Back to Gift Cards
            </Link>
          </Button>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-5 gap-8'>
          {/* Left column - Gift Card Image */}
          <div className='lg:col-span-2'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className='overflow-hidden'>
                <CardContent className='p-0'>
                  <div
                    className='h-64 sm:h-80 flex items-center justify-center'
                    style={{ backgroundColor: giftCard.bgColor }}
                  >
                    <img
                      src={giftCard.logo || '/images/placeholder-logo.png'}
                      alt={`${giftCard.name} logo`}
                      className='max-w-[60%] max-h-[60%] object-contain'
                    />
                  </div>

                  <div className='p-4 flex justify-between items-center bg-[#FFF4E9]'>
                    <div>
                      <p className='text-gray-700 text-sm'>Merchant</p>
                      <p className='font-medium text-gray-900'>
                        {giftCard.merchant}
                      </p>
                    </div>
                    <div>
                      <p className='text-gray-700 text-sm'>Region</p>
                      <p className='font-medium text-gray-900'>
                        {giftCard.region}
                      </p>
                    </div>
                    <Button
                      variant='ghost'
                      size='icon'
                      className={isFavorite ? 'text-red-500' : 'text-gray-400'}
                      onClick={() => setIsFavorite(!isFavorite)}
                    >
                      <Heart
                        size={20}
                        fill={isFavorite ? 'currentColor' : 'none'}
                      />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Right column - Purchase Options */}
          <div className='lg:col-span-3'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className='text-3xl font-bold text-gray-900 mb-3'>
                {giftCard.name}
              </h1>

              {giftCard.discount && (
                <div className='inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full mb-4'>
                  {giftCard.discount}% Discount
                </div>
              )}

              <p className='text-gray-700 mb-8'>{giftCard.description}</p>

              <Card className='mb-8'>
                <CardContent className='p-6'>
                  <h2 className='text-xl font-bold text-gray-900 mb-6'>
                    Purchase Options
                  </h2>

                  <div className='space-y-6'>
                    {/* Denomination selection */}
                    <div>
                      <label className='block text-sm font-medium text-gray-700 mb-2'>
                        Select Denomination
                      </label>
                      <div className='flex flex-wrap gap-3'>
                        {giftCard.denominations.map((denom) => (
                          <Button
                            key={denom}
                            variant={
                              selectedDenomination === denom.toString()
                                ? 'default'
                                : 'outline'
                            }
                            className={
                              selectedDenomination === denom.toString()
                                ? 'bg-black text-white'
                                : 'border-gray-300 text-gray-800'
                            }
                            onClick={() =>
                              setSelectedDenomination(denom.toString())
                            }
                          >
                            ${denom}
                          </Button>
                        ))}
                      </div>
                    </div>

                    {/* Quantity selection */}
                    <div>
                      <label className='block text-sm font-medium text-gray-700 mb-2'>
                        Quantity
                      </label>
                      <Select value={quantity} onValueChange={setQuantity}>
                        <SelectTrigger className='w-32 border-gray-300 focus:ring-black focus:border-black'>
                          <SelectValue placeholder='Select quantity' />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value='1'>1</SelectItem>
                          <SelectItem value='2'>2</SelectItem>
                          <SelectItem value='3'>3</SelectItem>
                          <SelectItem value='4'>4</SelectItem>
                          <SelectItem value='5'>5</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Payment currency */}
                    <div>
                      <label className='block text-sm font-medium text-gray-700 mb-2'>
                        Pay with
                      </label>
                      <Select
                        value={selectedCurrency}
                        onValueChange={setSelectedCurrency}
                      >
                        <SelectTrigger className='w-full border-gray-300 focus:ring-black focus:border-black'>
                          <SelectValue placeholder='Select currency' />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value='XLM'>Stellar (XLM)</SelectItem>
                          <SelectItem value='BTC'>Bitcoin (BTC)</SelectItem>
                          <SelectItem value='ETH'>Ethereum (ETH)</SelectItem>
                          <SelectItem value='USDC'>USD Coin (USDC)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Price summary */}
                    <div className='bg-[#FFF4E9] p-4 rounded-lg'>
                      <div className='flex justify-between items-center mb-1'>
                        <span className='text-gray-700'>Price</span>
                        <span className='text-gray-900'>
                          ${baseAmount.toFixed(2)}
                        </span>
                      </div>

                      {discount > 0 && (
                        <div className='flex justify-between items-center mb-1'>
                          <span className='text-green-600'>
                            Discount ({giftCard.discount}%)
                          </span>
                          <span className='text-green-600'>
                            -${discount.toFixed(2)}
                          </span>
                        </div>
                      )}

                      <div className='flex justify-between items-center pt-2 border-t border-gray-200 mt-2'>
                        <span className='text-gray-900 font-bold'>Total</span>
                        <div className='text-right'>
                          <div className='text-gray-900 font-bold'>
                            ${finalAmount.toFixed(2)}
                          </div>
                          <div className='text-gray-700 text-sm'>
                            ≈{' '}
                            {cryptoAmount.toFixed(
                              selectedCurrency === 'BTC' ? 8 : 6
                            )}{' '}
                            {selectedCurrency}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className='flex flex-col sm:flex-row gap-3'>
                      <Button
                        className='bg-black hover:bg-gray-800 text-white flex-1'
                        onClick={handlePurchase}
                      >
                        <CreditCard size={18} className='mr-2' />
                        Buy Now
                      </Button>
                      <Button
                        variant='outline'
                        className='border-gray-300 text-gray-800 flex-1'
                      >
                        <Share2 size={18} className='mr-2' />
                        Gift to Someone
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Product information tabs */}
              <Tabs defaultValue='redemption' className='mt-8'>
                <TabsList className='w-full grid grid-cols-3 mb-8'>
                  <TabsTrigger value='redemption' className='text-sm'>
                    How to Redeem
                  </TabsTrigger>
                  <TabsTrigger value='faq' className='text-sm'>
                    FAQ
                  </TabsTrigger>
                  <TabsTrigger value='terms' className='text-sm'>
                    Terms & Conditions
                  </TabsTrigger>
                </TabsList>

                <TabsContent value='redemption'>
                  <div className='space-y-4'>
                    <h3 className='font-bold text-gray-900'>
                      Redemption Instructions
                    </h3>
                    <ol className='space-y-2 ml-5 list-decimal'>
                      {giftCard.redemptionInstructions.map((step, index) => (
                        <li key={index} className='text-gray-700'>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </TabsContent>

                <TabsContent value='faq'>
                  <div className='space-y-4'>
                    <h3 className='font-bold text-gray-900'>
                      Frequently Asked Questions
                    </h3>
                    <Accordion type='single' collapsible className='w-full'>
                      {giftCard.faq.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger className='text-gray-900 font-medium'>
                            {item.question}
                          </AccordionTrigger>
                          <AccordionContent className='text-gray-700'>
                            {item.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </TabsContent>

                <TabsContent value='terms'>
                  <div className='space-y-4'>
                    <h3 className='font-bold text-gray-900'>
                      Terms & Conditions
                    </h3>
                    <p className='text-gray-700 mb-4'>
                      Amazon.com Gift Cards are subject to Amazon&apos;s terms
                      and conditions. Abokyh is not affiliated with Amazon and
                      provides these gift cards as a third-party vendor.
                    </p>
                    <p className='text-gray-700 mb-4'>
                      Gift cards purchased through Abokyh:
                    </p>
                    <ul className='list-disc ml-5 space-y-2 text-gray-700'>
                      <li>Cannot be returned or exchanged for cash</li>
                      <li>
                        Will be delivered digitally to your Abokyh account
                      </li>
                      <li>Have no additional fees or expiration dates</li>
                      <li>
                        Are subject to verification and fraud prevention
                        measures
                      </li>
                    </ul>
                    <Button
                      variant='link'
                      className='text-black p-0 h-auto'
                      asChild
                    >
                      <a
                        href={giftCard.termsUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        View complete merchant terms
                      </a>
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>
        </div>

        {/* Confirmation Dialog */}
        <Dialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
          <DialogContent className='max-w-md'>
            <DialogHeader>
              <DialogTitle className='text-xl font-bold text-center'>
                Order Confirmed
              </DialogTitle>
            </DialogHeader>

            <div className='text-center py-6'>
              <div className='mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4'>
                <CheckCircle className='h-8 w-8 text-green-600' />
              </div>
              <h3 className='text-lg font-bold text-gray-900 mb-2'>
                Thank you for your purchase!
              </h3>
              <p className='text-gray-700 mb-4'>
                Your ${selectedDenomination} {giftCard.name} has been added to
                your wallet. You can view and redeem it at any time.
              </p>
              <div className='bg-gray-50 p-4 rounded-lg mb-4 inline-block'>
                <p className='text-gray-900 font-mono'>XXXX-XXXX-XXXX-XXXX</p>
                <p className='text-gray-500 text-sm'>Gift Card Code</p>
              </div>
            </div>

            <DialogFooter className='flex flex-col sm:flex-row gap-3'>
              <Button
                className='sm:flex-1 bg-black hover:bg-gray-800'
                onClick={() => setShowConfirmDialog(false)}
              >
                Go to My Gift Cards
              </Button>
              <Button
                variant='outline'
                className='sm:flex-1 border-gray-300'
                onClick={() => setShowConfirmDialog(false)}
              >
                Continue Shopping
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  )
}

export default GiftCardProduct
