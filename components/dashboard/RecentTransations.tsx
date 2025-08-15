import React from 'react'
import { formatDistanceToNow } from 'date-fns'
import Skeleton from '../ui/Skeleton'
import { Link } from '@/i18n/navigation'

interface Transaction {
  id: string
  type: 'purchase' | 'transfer' | 'receive'
  amount: number
  currency: string
  description: string
  date: Date
  status: 'completed' | 'pending' | 'failed'
}

interface RecentTransactionsProps {
  transactions: Transaction[]
  isLoading: boolean
}

const RecentTransactions: React.FC<RecentTransactionsProps> = ({
  transactions,
  isLoading,
}) => {
  const getTransactionIcon = (type: string) => {
    switch (type) {
      case 'purchase':
        return (
          <div className='w-10 h-10 bg-[#FFE9D1] rounded-full flex items-center justify-center text-black'>
            <svg
              className='w-5 h-5'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
              />
            </svg>
          </div>
        )
      case 'transfer':
        return (
          <div className='w-10 h-10 bg-[#FFF4E9] rounded-full flex items-center justify-center text-black'>
            <svg
              className='w-5 h-5'
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
          </div>
        )
      case 'receive':
        return (
          <div className='w-10 h-10 bg-[#FFE9D1] rounded-full flex items-center justify-center text-black'>
            <svg
              className='w-5 h-5'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 4v16m8-8H4'
              />
            </svg>
          </div>
        )
      default:
        return null
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return (
          <span className='px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full'>
            Completed
          </span>
        )
      case 'pending':
        return (
          <span className='px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full'>
            Pending
          </span>
        )
      case 'failed':
        return (
          <span className='px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full'>
            Failed
          </span>
        )
      default:
        return null
    }
  }

  return (
    <div className='bg-white rounded-xl shadow-md overflow-hidden mb-8'>
      <div className='p-6 border-b border-gray-200'>
        <div className='flex justify-between items-center'>
          <h2 className='text-xl font-bold'>Recent Transactions</h2>
          <Link
            href='/transactions'
            className='text-sm font-medium text-black hover:underline'
          >
            View All
          </Link>
        </div>
      </div>

      <div className='divide-y divide-gray-200'>
        {isLoading ? (
          // Loading skeleton
          Array(3)
            .fill(0)
            .map((_, index) => (
              <div key={index} className='p-4 flex items-center'>
                <Skeleton className='w-10 h-10 rounded-full mr-4' />
                <div className='flex-1'>
                  <Skeleton className='h-4 w-32 mb-2' />
                  <Skeleton className='h-3 w-24' />
                </div>
                <div className='text-right'>
                  <Skeleton className='h-4 w-16 mb-2 ml-auto' />
                  <Skeleton className='h-3 w-20 ml-auto' />
                </div>
              </div>
            ))
        ) : transactions.length > 0 ? (
          transactions.map((transaction) => (
            <div
              key={transaction.id}
              className='p-4 flex items-center hover:bg-gray-50'
            >
              {getTransactionIcon(transaction.type)}
              <div className='ml-4 flex-1'>
                <p className='font-medium'>{transaction.description}</p>
                <p className='text-sm text-gray-500'>
                  {formatDistanceToNow(transaction.date, { addSuffix: true })}
                </p>
              </div>
              <div className='text-right'>
                <p
                  className={`font-medium ${
                    transaction.type === 'receive' ? 'text-green-600' : ''
                  }`}
                >
                  {transaction.type === 'receive' ? '+' : '-'}{' '}
                  {transaction.amount} {transaction.currency}
                </p>
                <div className='mt-1'>{getStatusBadge(transaction.status)}</div>
              </div>
            </div>
          ))
        ) : (
          <div className='p-8 text-center'>
            <p className='text-gray-500'>No transactions yet</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default RecentTransactions
