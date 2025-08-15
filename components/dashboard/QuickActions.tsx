import { Link } from '@/i18n/navigation'
import React from 'react'

const QuickActions: React.FC = () => {
  const actions = [
    {
      id: 1,
      name: 'Buy Gift Card',
      icon: (
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z'
          />
        </svg>
      ),
      href: '/gift-cards',
      color: 'bg-[#FFE9D1]',
    },
    {
      id: 2,
      name: 'Mobile Top-up',
      icon: (
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
          />
        </svg>
      ),
      href: '/mobile',
      color: 'bg-[#FFF4E9]',
    },
    {
      id: 3,
      name: 'Pay Utilities',
      icon: (
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M13 10V3L4 14h7v7l9-11h-7z'
          />
        </svg>
      ),
      href: '/utilities',
      color: 'bg-[#FFE9D1]',
    },
    {
      id: 4,
      name: 'Send Money',
      icon: (
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8'
          />
        </svg>
      ),
      href: '/send',
      color: 'bg-[#FFF4E9]',
    },
  ]

  return (
    <div className='mb-8'>
      <h2 className='text-xl font-bold mb-4'>Quick Actions</h2>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
        {actions.map((action) => (
          <Link href={action.href} key={action.id}>
            <div
              className={`${action.color} rounded-xl p-6 hover:shadow-md transition-shadow duration-300 cursor-pointer`}
            >
              <div className='w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm'>
                {action.icon}
              </div>
              <h3 className='font-bold'>{action.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default QuickActions
