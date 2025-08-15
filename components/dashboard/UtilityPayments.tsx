import React, { useState } from 'react'

interface UtilityProvider {
  id: number
  name: string
  logo: string
  type: 'electricity' | 'water' | 'internet' | 'tv'
}

const UtilityPayments: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [selectedProvider, setSelectedProvider] = useState<number | null>(null)
  const [accountNumber, setAccountNumber] = useState('')
  const [amount, setAmount] = useState('')
  const [paymentCurrency, setPaymentCurrency] = useState('XLM')

  // Mock data for utility providers
  const utilityProviders: UtilityProvider[] = [
    {
      id: 1,
      name: 'CIE',
      logo: '/images/utilities/cie.svg',
      type: 'electricity',
    },
    {
      id: 2,
      name: 'SODECI',
      logo: '/images/utilities/sodeci.svg',
      type: 'water',
    },
    {
      id: 3,
      name: 'Orange Internet',
      logo: '/images/utilities/orange.svg',
      type: 'internet',
    },
    {
      id: 4,
      name: 'MTN Fiber',
      logo: '/images/utilities/mtn.svg',
      type: 'internet',
    },
    { id: 5, name: 'Canal+', logo: '/images/utilities/canal.svg', type: 'tv' },
    {
      id: 6,
      name: 'StarTimes',
      logo: '/images/utilities/startimes.svg',
      type: 'tv',
    },
  ]

  const utilityTypes = [
    { id: 'electricity', name: 'Electricity', icon: '⚡' },
    { id: 'water', name: 'Water', icon: '💧' },
    { id: 'internet', name: 'Internet', icon: '🌐' },
    { id: 'tv', name: 'TV', icon: '📺' },
  ]

  const filteredProviders = selectedType
    ? utilityProviders.filter((provider) => provider.type === selectedType)
    : []

  const selectedProviderData = utilityProviders.find(
    (provider) => provider.id === selectedProvider
  )

  const handleProceed = () => {
    // Handle payment logic here
    alert('Processing utility payment...')
  }

  return (
    <div>
      <div className='bg-[#FFF4E9] rounded-lg p-6 mb-6'>
        <h2 className='text-xl font-bold mb-2'>Utility Payments</h2>
        <p className='text-gray-700'>
          Pay your electricity, water, internet, or TV bills quickly and
          securely using cryptocurrency.
        </p>
      </div>

      <div className='bg-white rounded-xl shadow-md overflow-hidden'>
        <div className='p-6'>
          <h3 className='font-bold mb-4'>1. Select Utility Type</h3>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-8'>
            {utilityTypes.map((type) => (
              <div
                key={type.id}
                className={`border rounded-lg p-4 flex flex-col items-center cursor-pointer transition-all duration-200 ${
                  selectedType === type.id
                    ? 'border-black bg-[#FFF4E9] shadow-md'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => {
                  setSelectedType(type.id)
                  setSelectedProvider(null)
                }}
              >
                <div className='text-3xl mb-2'>{type.icon}</div>
                <span className='font-medium'>{type.name}</span>
              </div>
            ))}
          </div>

          {selectedType && (
            <>
              <h3 className='font-bold mb-4'>2. Select Provider</h3>
              <div className='grid grid-cols-2 md:grid-cols-3 gap-4 mb-8'>
                {filteredProviders.map((provider) => (
                  <div
                    key={provider.id}
                    className={`border rounded-lg p-4 flex flex-col items-center cursor-pointer transition-all duration-200 ${
                      selectedProvider === provider.id
                        ? 'border-black bg-[#FFF4E9] shadow-md'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedProvider(provider.id)}
                  >
                    <div className='w-16 h-16 flex items-center justify-center mb-3'>
                      <img
                        src={provider.logo}
                        alt={provider.name}
                        className='max-w-full max-h-full'
                      />
                    </div>
                    <span className='font-medium'>{provider.name}</span>
                  </div>
                ))}
              </div>
            </>
          )}

          {selectedProvider && (
            <>
              <h3 className='font-bold mb-4'>3. Enter Payment Details</h3>
              <div className='space-y-4 mb-8'>
                <div>
                  <label
                    htmlFor='account-number'
                    className='block text-sm font-medium text-gray-700 mb-1'
                  >
                    Account Number / Meter Number
                  </label>
                  <input
                    type='text'
                    id='account-number'
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                    placeholder={`Enter your ${selectedProviderData?.name} account number`}
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black'
                  />
                </div>

                <div>
                  <label
                    htmlFor='amount'
                    className='block text-sm font-medium text-gray-700 mb-1'
                  >
                    Amount (USD)
                  </label>
                  <input
                    type='number'
                    id='amount'
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder='Enter amount'
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black'
                  />
                </div>

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
                  <span className='text-gray-700'>Provider:</span>
                  <span className='font-medium'>
                    {selectedProviderData?.name}
                  </span>
                </div>
                <div className='flex justify-between mb-2'>
                  <span className='text-gray-700'>Account Number:</span>
                  <span className='font-medium'>{accountNumber || '-'}</span>
                </div>
                <div className='flex justify-between mb-2'>
                  <span className='text-gray-700'>Amount:</span>
                  <span className='font-medium'>${amount || '0.00'}</span>
                </div>
                <div className='flex justify-between mb-2'>
                  <span className='text-gray-700'>Service Fee:</span>
                  <span className='font-medium'>$0.50</span>
                </div>
                <div className='border-t border-gray-300 my-2 pt-2 flex justify-between font-bold'>
                  <span>Total:</span>
                  <span>
                    ${amount ? (parseFloat(amount) + 0.5).toFixed(2) : '0.50'}
                  </span>
                </div>
              </div>

              <button
                onClick={handleProceed}
                disabled={!accountNumber || !amount}
                className={`w-full bg-black text-white py-3 rounded-lg font-medium transition-colors duration-200 ${
                  !accountNumber || !amount
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

export default UtilityPayments
