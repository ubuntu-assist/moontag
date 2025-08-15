import { useState } from 'react'
import { motion } from 'framer-motion'
import Skeleton from '../ui/Skeleton'

interface BalanceCardProps {
  isLoading: boolean
  balances: {
    stellar: number
    btc: number
    eth: number
    usdc: number
  }
  primaryCurrency: string
}

const BalanceCard: React.FC<BalanceCardProps> = ({ isLoading, balances }) => {
  const [showAllBalances, setShowAllBalances] = useState(false)

  // Conversion rates (this would come from an API)
  const conversionRates = {
    XLM: 1,
    BTC: 32000,
    ETH: 2000,
    USDC: 1,
  }

  // Calculate total balance in USD
  const totalBalanceUSD = (
    balances.stellar * conversionRates.XLM +
    balances.btc * conversionRates.BTC +
    balances.eth * conversionRates.ETH +
    balances.usdc * conversionRates.USDC
  ).toFixed(2)

  return (
    <div className='bg-[#FFF4E9] rounded-xl overflow-hidden shadow-md'>
      <div className='p-6'>
        <h2 className='text-lg font-bold mb-1'>Your Balance</h2>

        {isLoading ? (
          <div>
            <Skeleton className='h-10 w-48 mb-4' />
            <Skeleton className='h-6 w-32 mb-2' />
            <Skeleton className='h-6 w-32' />
          </div>
        ) : (
          <>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='mb-4'
            >
              <div className='text-3xl font-bold'>${totalBalanceUSD}</div>
              <div className='text-sm text-gray-600'>Total balance in USD</div>
            </motion.div>

            <div className='space-y-3'>
              <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                  <div className='w-8 h-8 bg-[#08B5E5] rounded-full flex items-center justify-center text-white font-bold mr-2'>
                    X
                  </div>
                  <span>Stellar (XLM)</span>
                </div>
                <div className='text-right'>
                  <div className='font-medium'>
                    {balances.stellar.toFixed(2)} XLM
                  </div>
                  <div className='text-sm text-gray-600'>
                    ${(balances.stellar * conversionRates.XLM).toFixed(2)}
                  </div>
                </div>
              </div>

              {showAllBalances && (
                <>
                  <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                      <div className='w-8 h-8 bg-[#F7931A] rounded-full flex items-center justify-center text-white font-bold mr-2'>
                        B
                      </div>
                      <span>Bitcoin (BTC)</span>
                    </div>
                    <div className='text-right'>
                      <div className='font-medium'>
                        {balances.btc.toFixed(6)} BTC
                      </div>
                      <div className='text-sm text-gray-600'>
                        ${(balances.btc * conversionRates.BTC).toFixed(2)}
                      </div>
                    </div>
                  </div>

                  <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                      <div className='w-8 h-8 bg-[#627EEA] rounded-full flex items-center justify-center text-white font-bold mr-2'>
                        E
                      </div>
                      <span>Ethereum (ETH)</span>
                    </div>
                    <div className='text-right'>
                      <div className='font-medium'>
                        {balances.eth.toFixed(4)} ETH
                      </div>
                      <div className='text-sm text-gray-600'>
                        ${(balances.eth * conversionRates.ETH).toFixed(2)}
                      </div>
                    </div>
                  </div>

                  <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                      <div className='w-8 h-8 bg-[#2775CA] rounded-full flex items-center justify-center text-white font-bold mr-2'>
                        U
                      </div>
                      <span>USD Coin (USDC)</span>
                    </div>
                    <div className='text-right'>
                      <div className='font-medium'>
                        {balances.usdc.toFixed(2)} USDC
                      </div>
                      <div className='text-sm text-gray-600'>
                        ${balances.usdc.toFixed(2)}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            <button
              onClick={() => setShowAllBalances(!showAllBalances)}
              className='mt-4 text-sm font-medium text-black hover:underline focus:outline-none flex items-center'
            >
              {showAllBalances ? 'Show less' : 'Show all balances'}
              <svg
                className={`ml-1 w-4 h-4 transform ${
                  showAllBalances ? 'rotate-180' : ''
                }`}
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </button>
          </>
        )}
      </div>

      <div className='bg-white p-4 flex justify-between'>
        <button className='flex items-center text-black font-medium'>
          <svg
            className='w-5 h-5 mr-1'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M12 6v6m0 0v6m0-6h6m-6 0H6'
            />
          </svg>
          Add Funds
        </button>

        <button className='flex items-center text-black font-medium'>
          <svg
            className='w-5 h-5 mr-1'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12'
            />
          </svg>
          Send
        </button>

        <button className='flex items-center text-black font-medium'>
          <svg
            className='w-5 h-5 mr-1'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'
            />
          </svg>
          Swap
        </button>
      </div>
    </div>
  )
}

export default BalanceCard
