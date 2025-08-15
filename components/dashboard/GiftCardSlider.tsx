import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'

interface GiftCard {
  id: number
  name: string
  logo: string
  bgColor: string
  discount?: string
}

const GiftCardSlider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null)

  const giftCards: GiftCard[] = [
    {
      id: 1,
      name: 'Amazon',
      logo: '/images/orange-card.png',
      bgColor: '#FF9900',
      discount: '2% off',
    },
    {
      id: 2,
      name: 'Netflix',
      logo: '/images/orange-card.png',
      bgColor: '#E50914',
    },
    {
      id: 3,
      name: 'Spotify',
      logo: '/images/orange-card.png',
      bgColor: '#1DB954',
      discount: '3% off',
    },
    {
      id: 4,
      name: 'Steam',
      logo: '/images/orange-card.png',
      bgColor: '#171A21',
    },
    {
      id: 5,
      name: 'Google Play',
      logo: '/images/orange-card.png',
      bgColor: '#FFFFFF',
    },
    {
      id: 6,
      name: 'Uber',
      logo: '/images/orange-card.png',
      bgColor: '#000000',
      discount: '5% off',
    },
  ]

  useEffect(() => {
    if (sliderRef.current) {
      gsap.to(sliderRef.current.children, {
        x: '-100%',
        ease: 'none',
        duration: 20,
        repeat: -1,
        yoyo: true,
        stagger: {
          from: 'start',
          each: 0.1,
        },
      })
    }

    return () => {
      if (sliderRef.current) {
        gsap.killTweensOf(sliderRef.current.children)
      }
    }
  }, [])

  return (
    <div className='mb-8 overflow-hidden'>
      <div className='bg-[#FFF4E9] p-4 rounded-lg mb-4'>
        <p className='text-center text-sm font-medium'>
          Convert your crypto and save up to 5% on gift cards this week!
        </p>
      </div>

      <div className='relative'>
        <div
          ref={sliderRef}
          className='flex space-x-4 py-4'
          style={{ willChange: 'transform' }}
        >
          {giftCards.map((card) => (
            <div
              key={card.id}
              className='flex-shrink-0 w-48 h-64 rounded-xl overflow-hidden shadow-md flex flex-col transform transition duration-300 hover:scale-105 hover:shadow-lg'
              style={{ backgroundColor: card.bgColor }}
            >
              {card.discount && (
                <div className='absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded-full'>
                  {card.discount}
                </div>
              )}
              <div className='h-2/3 flex items-center justify-center p-4'>
                <img
                  src={card.logo}
                  alt={`${card.name} Gift Card`}
                  className='max-w-full max-h-full'
                />
              </div>
              <div className='h-1/3 bg-white p-4 flex flex-col justify-between'>
                <div>
                  <h3 className='font-bold'>{card.name}</h3>
                  <p className='text-sm text-gray-600'>Gift Card</p>
                </div>
                <button className='bg-black text-white text-xs rounded-full px-3 py-1 self-end'>
                  Buy Now
                </button>
              </div>
            </div>
          ))}

          {/* Duplicate cards for seamless looping */}
          {giftCards.map((card) => (
            <div
              key={`dup-${card.id}`}
              className='flex-shrink-0 w-48 h-64 rounded-xl overflow-hidden shadow-md flex flex-col transform transition duration-300 hover:scale-105 hover:shadow-lg'
              style={{ backgroundColor: card.bgColor }}
            >
              {card.discount && (
                <div className='absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded-full'>
                  {card.discount}
                </div>
              )}
              <div className='h-2/3 flex items-center justify-center p-4'>
                <img
                  src={card.logo}
                  alt={`${card.name} Gift Card`}
                  className='max-w-full max-h-full'
                />
              </div>
              <div className='h-1/3 bg-white p-4 flex flex-col justify-between'>
                <div>
                  <h3 className='font-bold'>{card.name}</h3>
                  <p className='text-sm text-gray-600'>Gift Card</p>
                </div>
                <button className='bg-black text-white text-xs rounded-full px-3 py-1 self-end'>
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GiftCardSlider
