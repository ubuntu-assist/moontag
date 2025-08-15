import { FC, ReactNode } from 'react'
import { cn } from '@/lib/utils'
import Orbit from './orbit'

interface OrbitingLogosProps {
  className?: string
  children?: ReactNode
  centerText?: string
  logos?: {
    src: string | ReactNode
    size?: number
    duration?: number
    radius?: number
    delay?: number
    reverse?: boolean
    className?: string
  }[]
  backgroundColor?: string
  textColor?: string
  borderColor?: string
}

const OrbitingLogos: FC<OrbitingLogosProps> = ({
  className,
  children,
  centerText = 'Partners',
  logos = [],
  backgroundColor = '#FFF4E9',
  textColor = 'black',
  borderColor = 'black',
}) => {
  // Default logos if none provided
  const defaultLogos = [
    {
      src: (
        <svg
          className='w-20 h-20'
          fill='currentColor'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 397.7 311.7'
        >
          <path d='M64.6,3.8C67.1,1.4,70.4,0,73.8,0h317.4c5.8,0,8.7,7,4.6,11.1l-62.7,62.7c-2.4,2.4-5.7,3.8-9.2,3.8H6.5c-5.8,0-8.7-7-4.6-11.1L64.6,3.8z' />
          <path d='M333.1,120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8,0-8.7,7-4.6,11.1l62.7,62.7c2.4,2.4,5.7,3.8,9.2,3.8h317.4c5.8,0,8.7-7,4.6-11.1L333.1,120.1z' />
          <path d='M64.6,237.9c2.4-2.4,5.7-3.8,9.2-3.8h317.4c5.8,0,8.7,7,4.6,11.1l-62.7,62.7c-2.4,2.4-5.7,3.8-9.2,3.8H6.5c-5.8,0-8.7-7-4.6-11.1L64.6,237.9z' />
        </svg>
      ),
      size: 45,
      radius: 160,
      duration: 20,
      reverse: true,
    },
    {
      src: (
        <svg
          className='w-20 h-20'
          fill='currentColor'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 784.37 1277.39'
        >
          <polygon
            fillRule='nonzero'
            points='392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54 '
          />
          <polygon
            fillRule='nonzero'
            points='392.07,0 -0,650.54 392.07,882.29 392.07,472.33 '
          />
          <polygon
            fillRule='nonzero'
            points='392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89 '
          />
          <polygon
            fillRule='nonzero'
            points='392.07,1277.38 392.07,956.52 -0,724.89 '
          />
          <polygon
            fillRule='nonzero'
            points='392.07,882.29 784.13,650.54 392.07,472.33 '
          />
          <polygon
            fillRule='nonzero'
            points='0,650.54 392.07,882.29 392.07,472.33 '
          />
        </svg>
      ),
      size: 30,
      radius: 80,
      duration: 20,
      delay: -10,
    },
  ]

  const displayLogos = logos.length > 0 ? logos : defaultLogos

  return (
    <div
      className={cn(
        'relative flex h-[400px] w-full max-w-[26rem] items-center justify-center overflow-hidden rounded-xl border bg-[--bg-color] md:shadow-xl',
        className
      )}
      style={
        {
          '--bg-color': backgroundColor,
          '--text-color': textColor,
          '--border-color': borderColor,
          borderColor: 'var(--border-color)',
        } as React.CSSProperties
      }
    >
      <span
        className='pointer-events-none whitespace-pre-wrap bg-clip-text text-center text-8xl font-semibold leading-none'
        style={{ color: textColor }}
      >
        {centerText}
      </span>

      {displayLogos.map((logo, index) => (
        <Orbit
          key={index}
          className={cn(
            'border-none bg-transparent',
            !logo.size
              ? 'h-[30px] w-[30px]'
              : `h-[${logo.size}px] w-[${logo.size}px]`
          )}
          duration={logo.duration || 20}
          radius={logo.radius || 80}
          delay={logo.delay}
          reverse={logo.reverse}
        >
          {typeof logo.src === 'string' ? (
            <img
              src={logo.src}
              alt='Partner logo'
              className='w-20 h-20'
              style={{ color: textColor }}
            />
          ) : (
            <div style={{ color: textColor }}>{logo.src}</div>
          )}
        </Orbit>
      ))}

      {children}
    </div>
  )
}

export default OrbitingLogos
