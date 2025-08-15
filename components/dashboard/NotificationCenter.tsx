import { Link } from '@/i18n/navigation'
import React, { useState } from 'react'

interface Notification {
  id: number
  type: 'info' | 'success' | 'warning'
  message: string
  time: string
  isRead: boolean
}

const NotificationCenter: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      type: 'success',
      message: 'Successfully received 50 XLM from external wallet',
      time: '2 hours ago',
      isRead: false,
    },
    {
      id: 2,
      type: 'info',
      message: 'New gift cards available from Jumia and Konga',
      time: '1 day ago',
      isRead: false,
    },
    {
      id: 3,
      type: 'warning',
      message: 'Complete your profile to unlock all features',
      time: '3 days ago',
      isRead: true,
    },
  ])

  const markAsRead = (id: number) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id
          ? { ...notification, isRead: true }
          : notification
      )
    )
  }

  const markAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({ ...notification, isRead: true }))
    )
  }

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'info':
        return (
          <div className='w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-500'>
            <svg
              className='w-4 h-4'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </div>
        )
      case 'success':
        return (
          <div className='w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-500'>
            <svg
              className='w-4 h-4'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M5 13l4 4L19 7'
              />
            </svg>
          </div>
        )
      case 'warning':
        return (
          <div className='w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-500'>
            <svg
              className='w-4 h-4'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
              />
            </svg>
          </div>
        )
      default:
        return null
    }
  }

  const unreadCount = notifications.filter(
    (notification) => !notification.isRead
  ).length

  return (
    <div className='bg-white rounded-xl shadow-md overflow-hidden h-full'>
      <div className='p-4 border-b border-gray-200'>
        <div className='flex justify-between items-center'>
          <h2 className='font-bold flex items-center'>
            Notifications
            {unreadCount > 0 && (
              <span className='ml-2 bg-black text-white text-xs px-2 py-1 rounded-full'>
                {unreadCount}
              </span>
            )}
          </h2>
          <button
            onClick={markAllAsRead}
            className='text-xs text-black hover:underline focus:outline-none'
          >
            Mark all as read
          </button>
        </div>
      </div>

      <div className='max-h-72 overflow-y-auto'>
        {notifications.length > 0 ? (
          <div className='divide-y divide-gray-100'>
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 flex items-start ${
                  !notification.isRead ? 'bg-[#FFF4E9]' : ''
                } hover:bg-gray-50 transition-colors duration-200`}
              >
                {getNotificationIcon(notification.type)}
                <div className='ml-3 flex-1'>
                  <p
                    className={`text-sm ${
                      !notification.isRead ? 'font-medium' : ''
                    }`}
                  >
                    {notification.message}
                  </p>
                  <p className='text-xs text-gray-500 mt-1'>
                    {notification.time}
                  </p>
                </div>
                {!notification.isRead && (
                  <button
                    onClick={() => markAsRead(notification.id)}
                    className='text-xs text-black hover:underline focus:outline-none whitespace-nowrap'
                  >
                    Mark read
                  </button>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className='p-8 text-center'>
            <p className='text-gray-500'>No new notifications</p>
          </div>
        )}
      </div>

      <div className='p-3 bg-gray-50 border-t border-gray-200'>
        <Link
          href='/notifications'
          className='block text-center text-sm text-black hover:underline'
        >
          View all notifications
        </Link>
      </div>
    </div>
  )
}

export default NotificationCenter
