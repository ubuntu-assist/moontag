// componentsMobileTopUp.tsx
import React, { useState } from 'react'

interface MobileCarrier {
  id: number
  name: string
  logo: string
  plans: {
    id: number
    name: string
    amount: number
    description: string
  }[]
}

const MobileTopUp: React.FC = () => {
  const [selectedCarrier, setSelectedCarrier] = useState<number | null>(null)
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [paymentCurrency, setPaymentCurrency] = useState('XLM')

  // Mock data for carriers
  const carriers: MobileCarrier[] = [
    {
      id: 1,
      name: 'Orange',
      logo: '/images/carriers/orange-logo.svg',
      plans: [
        {
          id: 101,
          name: 'Data S',
          amount: 5,
          description: '1GB Data, Valid for 7 days',
        },
        {
          id: 102,
          name: 'Data M',
          amount: 10,
          description: '3GB Data, Valid for 30 days',
        },
        {
          id: 103,
          name: 'Data L',
          amount: 20,
          description: '10GB Data, Valid for 30 days',
        },
        { id: 104, name: 'Airtime', amount: 0, description: 'Custom amount' },
      ],
    },
    {
      id: 2,
      name: 'MTN',
      logo: '/images/carriers/mtn-logo.png',
      plans: [
        {
          id: 201,
          name: 'XtraTalk',
          amount: 5,
          description: '120 minutes, Valid for 7 days',
        },
        {
          id: 202,
          name: 'Data Plus',
          amount: 10,
          description: '2GB Data, Valid for 30 days',
        },
        {
          id: 203,
          name: 'Mega Bundle',
          amount: 20,
          description: '7GB Data, Valid for 30 days',
        },
        { id: 204, name: 'Airtime', amount: 0, description: 'Custom amount' },
      ],
    },
    {
      id: 3,
      name: 'Moov',
      logo: '/images/carriers/moov-logo.png',
      plans: [
        {
          id: 301,
          name: 'Internet S',
          amount: 5,
          description: '1.5GB Data, Valid for 7 days',
        },
        {
          id: 302,
          name: 'Internet M',
          amount: 10,
          description: '4GB Data, Valid for 30 days',
        },
        {
          id: 303,
          name: 'Internet L',
          amount: 20,
          description: '12GB Data, Valid for 30 days',
        },
        { id: 304, name: 'Airtime', amount: 0, description: 'Custom amount' },
      ],
    },
  ]

  const selectedCarrierData = carriers.find(
    (carrier) => carrier.id === selectedCarrier
  )
  const selectedPlanData = selectedCarrierData?.plans.find(
    (plan) => plan.id === selectedPlan
  )
  const [customAmount, setCustomAmount] = useState('')

  const handleProceed = () => {
    // Handle payment logic here
    alert('Processing mobile top-up...')
  }

  const isCustomAmountPlan = selectedPlanData?.name === 'Airtime'

  return (
    <div>
      <div className='bg-[#FFF4E9] rounded-lg p-6 mb-6'>
        <h2 className='text-xl font-bold mb-2'>Mobile Top-up</h2>
        <p className='text-gray-700'>
          Recharge your phone or buy data bundles with cryptocurrency. Fast,
          secure, and convenient.
        </p>
      </div>

      <div className='bg-white rounded-xl shadow-md overflow-hidden'>
        <div className='p-6'>
          <h3 className='font-bold mb-4'>1. Select Mobile Carrier</h3>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-4 mb-8'>
            {carriers.map((carrier) => (
              <div
                key={carrier.id}
                className={`border rounded-lg p-4 flex flex-col items-center cursor-pointer transition-all duration-200 ${
                  selectedCarrier === carrier.id
                    ? 'border-black bg-[#FFF4E9] shadow-md'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => {
                  setSelectedCarrier(carrier.id)
                  setSelectedPlan(null)
                }}
              >
                <div className='w-16 h-16 flex items-center justify-center mb-3'>
                  <img
                    src={carrier.logo}
                    alt={carrier.name}
                    className='max-w-full max-h-full'
                  />
                </div>
                <span className='font-medium'>{carrier.name}</span>
              </div>
            ))}
          </div>

          {selectedCarrier && (
            <>
              <h3 className='font-bold mb-4'>2. Select Plan</h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-8'>
                {selectedCarrierData?.plans.map((plan) => (
                  <div
                    key={plan.id}
                    className={`border rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                      selectedPlan === plan.id
                        ? 'border-black bg-[#FFF4E9] shadow-md'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    <div className='flex justify-between items-start'>
                      <div>
                        <h4 className='font-bold'>{plan.name}</h4>
                        <p className='text-sm text-gray-600'>
                          {plan.description}
                        </p>
                      </div>
                      {plan.amount > 0 && (
                        <div className='font-bold'>${plan.amount}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {selectedPlan && (
            <>
              <h3 className='font-bold mb-4'>3. Enter Phone Number</h3>
              <div className='mb-8'>
                <div className='mb-4'>
                  <label
                    htmlFor='phone-number'
                    className='block text-sm font-medium text-gray-700 mb-1'
                  >
                    Phone Number
                  </label>
                  <input
                    type='tel'
                    id='phone-number'
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder='e.g. +225 01 23 45 67 89'
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black'
                  />
                </div>

                {isCustomAmountPlan && (
                  <div className='mb-4'>
                    <label
                      htmlFor='custom-amount'
                      className='block text-sm font-medium text-gray-700 mb-1'
                    >
                      Amount (USD)
                    </label>
                    <input
                      type='number'
                      id='custom-amount'
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      placeholder='Enter amount'
                      className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black'
                    />
                  </div>
                )}

                <div>
                  <label
                    htmlFor='payment-currency'
                    className='block text-sm font-medium text-gray-700 mb-1'
                  >
                    Pay with
                  </label>
                  <select
                    id='payment-currency'
                    value={paymentCurrency}
                    onChange={(e) => setPaymentCurrency(e.target.value)}
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black'
                  >
                    <option value='XLM'>Stellar (XLM)</option>
                    <option value='BTC'>Bitcoin (BTC)</option>
                    <option value='ETH'>Ethereum (ETH)</option>
                    <option value='USDC'>USD Coin (USDC)</option>
                  </select>
                </div>
              </div>

              <div className='bg-[#FFF4E9] p-4 rounded-lg mb-6'>
                <div className='flex justify-between mb-2'>
                  <span className='text-gray-700'>Plan:</span>
                  <span className='font-medium'>
                    {selectedCarrierData?.name} - {selectedPlanData?.name}
                  </span>
                </div>
                <div className='flex justify-between mb-2'>
                  <span className='text-gray-700'>Phone Number:</span>
                  <span className='font-medium'>{phoneNumber || '-'}</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-700'>Amount:</span>
                  <span className='font-medium'>
                    $
                    {isCustomAmountPlan
                      ? customAmount || '0.00'
                      : selectedPlanData?.amount || '0.00'}
                  </span>
                </div>
                <div className='border-t border-gray-300 my-2 pt-2 flex justify-between font-bold'>
                  <span>Total:</span>
                  <span>
                    $
                    {isCustomAmountPlan
                      ? customAmount || '0.00'
                      : selectedPlanData?.amount || '0.00'}
                  </span>
                </div>
              </div>

              <button
                onClick={handleProceed}
                disabled={!phoneNumber || (isCustomAmountPlan && !customAmount)}
                className={`w-full bg-black text-white py-3 rounded-lg font-medium transition-colors duration-200 ${
                  !phoneNumber || (isCustomAmountPlan && !customAmount)
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:bg-gray-800'
                }`}
              >
                Proceed to Payment
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default MobileTopUp
