import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

const DeleteConfirmation: React.FC = () => {
  const mainRef = useRef<HTMLDivElement>(null)
  const deleteBtnRef = useRef<HTMLButtonElement>(null)
  const yesBtnRef = useRef<HTMLButtonElement>(null)
  const noBtnRef = useRef<HTMLButtonElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const topRef = useRef<HTMLDivElement>(null)
  const trashRef = useRef<HTMLDivElement>(null)
  const trashHeadRef = useRef<SVGSVGElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)
  const deleteSpanRef = useRef<HTMLSpanElement>(null)

  const primaryDuration = 0.3
  let animationYes: gsap.core.Tween

  useEffect(() => {
    if (!trashHeadRef.current) return

    // Initialize GSAP animation for trash head rotation
    animationYes = gsap.to(trashHeadRef.current, {
      duration: primaryDuration,
      rotate: -100,
      paused: true,
    })

    return () => {
      animationYes?.kill()
    }
  }, [])

  const handleYesMouseOver = () => {
    if (animationYes) {
      animationYes.play()
    }
  }

  const handleYesMouseOut = () => {
    if (animationYes) {
      animationYes.reverse()
    }
  }

  const handleYesClick = () => {
    if (
      !topRef.current ||
      !deleteBtnRef.current ||
      !trashHeadRef.current ||
      !containerRef.current ||
      !bottomRef.current ||
      !yesBtnRef.current ||
      !noBtnRef.current ||
      !trashRef.current ||
      !deleteSpanRef.current
    )
      return

    gsap.to(topRef.current, {
      rotate: -40,
      transformOrigin: 'right',
    })

    gsap.to(deleteBtnRef.current, {
      y: -50,
      onComplete: () => {
        gsap.to(trashHeadRef.current, {
          rotate: 0,
          onComplete: () => {
            gsap.to(containerRef.current, {
              duration: primaryDuration,
              opacity: 0,
            })
            gsap.to(
              [
                bottomRef.current?.querySelector('span'),
                yesBtnRef.current,
                noBtnRef.current,
              ],
              {
                duration: primaryDuration,
                y: 30,
              }
            )
            gsap.to(topRef.current, {
              duration: primaryDuration,
              opacity: 0,
              rotate: 0,
            })
            gsap.to(trashRef.current, {
              duration: primaryDuration,
              scale: 0.8,
              opacity: 0,
            })
            gsap.to(deleteSpanRef.current, {
              duration: primaryDuration,
              opacity: 1,
            })
            gsap.to(deleteBtnRef.current, {
              duration: primaryDuration,
              scale: 1,
              width: '150px',
              height: '50px',
              borderRadius: '8px',
            })
            if (deleteBtnRef.current) {
              deleteBtnRef.current.disabled = false
            }
          },
        })
      },
    })
  }

  const handleDeleteClick = () => {
    if (
      !deleteBtnRef.current ||
      !deleteSpanRef.current ||
      !containerRef.current ||
      !bottomRef.current ||
      !yesBtnRef.current ||
      !noBtnRef.current ||
      !topRef.current ||
      !trashRef.current
    )
      return

    deleteBtnRef.current.disabled = true

    gsap.to(deleteBtnRef.current, {
      duration: primaryDuration,
      scale: 1.2,
      onComplete: () => {
        gsap.to(deleteSpanRef.current, {
          duration: primaryDuration,
          opacity: 0,
        })
        gsap.to(deleteBtnRef.current, {
          duration: primaryDuration,
          y: 15,
          scale: 1,
          width: 30,
          height: 30,
          borderRadius: '50%',
          onComplete: () => {
            gsap.to(containerRef.current, {
              duration: primaryDuration,
              opacity: 1,
            })
            gsap.to(deleteBtnRef.current, {
              duration: primaryDuration,
              y: -170,
            })
            gsap.to(
              [
                bottomRef.current?.querySelector('span'),
                yesBtnRef.current,
                noBtnRef.current,
              ],
              {
                duration: primaryDuration,
                y: 0,
              }
            )
            gsap.to(topRef.current, {
              duration: primaryDuration,
              x: 10,
              opacity: 1,
            })
            gsap.to(trashRef.current, {
              duration: primaryDuration,
              scale: 1,
              opacity: 1,
            })
          },
        })
      },
    })
  }

  const handleNoClick = () => {
    if (
      !containerRef.current ||
      !topRef.current ||
      !deleteBtnRef.current ||
      !deleteSpanRef.current
    )
      return

    gsap.to(containerRef.current, {
      duration: primaryDuration,
      opacity: 0,
    })
    gsap.to(topRef.current, {
      duration: primaryDuration,
      rotate: -40,
    })
    gsap.to(deleteBtnRef.current, {
      y: 2,
      onComplete: () => {
        gsap.to(deleteBtnRef.current, {
          width: '150px',
          height: '50px',
          borderRadius: '8px',
        })
        gsap.to(deleteSpanRef.current, {
          duration: primaryDuration,
          opacity: 1,
        })
        gsap.to(topRef.current, {
          duration: primaryDuration,
          opacity: 0,
          rotate: 0,
        })
        if (deleteBtnRef.current) {
          deleteBtnRef.current.disabled = false
        }
      },
    })
  }

  return (
    <div className='w-full min-h-screen flex items-center justify-center bg-white font-inter'>
      <div className='w-full relative flex items-center justify-center'>
        <main
          ref={mainRef}
          className='relative w-full px-2 flex flex-col items-center justify-center'
        >
          <div
            ref={containerRef}
            className='flex flex-col items-center justify-center opacity-0'
          >
            {/* Top Logo */}
            <div
              ref={topRef}
              className='flex items-center justify-center z-30 opacity-0 translate-x-12'
            >
              <svg
                width='50'
                height='23'
                viewBox='0 0 39 23'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M28.9551 19.4916L36.6536 13.0762V2.05H28.2373C26.5662 2.05 24.9636 2.71382 23.782 3.89542L20.1144 7.56308C18.8095 8.86799 18.8095 10.9837 20.1144 12.2886C20.4785 12.6527 20.9058 12.9153 21.361 13.0762L7.25053 13.0762C4.35073 13.0762 1.99997 15.4269 1.99997 18.3267C1.99997 19.7766 3.17535 20.952 4.62525 20.952L24.9215 20.952C26.3954 20.952 27.8227 20.4352 28.9551 19.4916Z'
                  fill='white'
                />
                <path
                  d='M36.6536 13.0762L28.9551 19.4916C27.8227 20.4352 26.3954 20.952 24.9215 20.952L4.62525 20.952C3.17535 20.952 1.99997 19.7766 1.99997 18.3267C1.99997 15.4269 4.35073 13.0762 7.25053 13.0762H21.361'
                  stroke='#020308'
                  strokeWidth='3.15033'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M27.2026 9.92583L24.8399 12.2886C23.535 13.5935 21.4193 13.5935 20.1144 12.2886C18.8095 10.9837 18.8095 8.86799 20.1144 7.56308L23.782 3.89542C24.9636 2.71382 26.5662 2.05 28.2373 2.05H36.6536'
                  stroke='#020308'
                  strokeWidth='3.15033'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>

            {/* Middle Section */}
            <div className='my-12 mb-6 flex items-center justify-center gap-12 z-50'>
              {/* No Button */}
              <div className='flex items-center justify-center overflow-hidden'>
                <button
                  ref={noBtnRef}
                  className='translate-y-8 flex items-center justify-center border-none outline-none rounded-xl py-1 px-3 cursor-pointer bg-gray-100 hover:bg-gray-200 transition-colors'
                  onClick={handleNoClick}
                >
                  <span className='block font-normal'>no</span>
                </button>
              </div>

              {/* Trash Can */}
              <div
                ref={trashRef}
                className='flex flex-col items-center gap-0 opacity-100 scale-75'
              >
                <svg
                  ref={trashHeadRef}
                  className='origin-left'
                  width='62'
                  height='8'
                  viewBox='0 0 62 8'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M1 7H61'
                    stroke='black'
                    strokeWidth='2'
                    strokeLinecap='round'
                  />
                  <path
                    d='M15 1V7H47V1H15Z'
                    stroke='black'
                    strokeWidth='2'
                    strokeLinecap='round'
                  />
                </svg>
                <svg
                  width='55'
                  height='55'
                  viewBox='0 0 55 55'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='overflow-hidden bg-white'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M0 5.21136e-07L0.233743 1.2236L9.94281 52.0486C10.1987 53.3883 11.364 54.3331 12.7603 54.3331H42.3824C43.9137 54.3331 45.2607 53.2019 45.516 51.7014L54.1245 1.10786L54.313 2.41968e-07L53.1824 0L1.27532 5.36473e-07L0 5.21136e-07ZM2.44823 1.9851L51.9494 1.9851L43.5293 51.4708C43.4442 51.9709 42.9952 52.348 42.4848 52.348H12.8627C12.3973 52.348 12.0089 52.0331 11.9236 51.5865L2.44823 1.9851Z'
                    fill='black'
                  />
                </svg>
              </div>

              {/* Yes Button */}
              <div className='flex items-center justify-center overflow-hidden'>
                <button
                  ref={yesBtnRef}
                  className='translate-y-8 flex items-center justify-center border-none outline-none rounded-xl py-1 px-3 cursor-pointer bg-gray-100 hover:bg-gray-200 transition-colors'
                  onMouseOver={handleYesMouseOver}
                  onMouseOut={handleYesMouseOut}
                  onClick={handleYesClick}
                >
                  <span className='block font-normal'>Yes</span>
                </button>
              </div>
            </div>

            {/* Bottom Text */}
            <div
              ref={bottomRef}
              className='flex items-center justify-center overflow-hidden'
            >
              <span className='translate-y-5 block font-medium'>
                Are you sure ?
              </span>
            </div>
          </div>

          {/* Delete Button */}
          <button
            ref={deleteBtnRef}
            className='absolute bottom-0 flex items-center justify-center bg-red-600 hover:bg-red-700 border-none outline-none rounded-lg w-36 h-12 z-10 cursor-pointer transition-colors'
            onClick={handleDeleteClick}
          >
            <span ref={deleteSpanRef} className='block text-white text-base'>
              Delete
            </span>
          </button>
        </main>
      </div>
    </div>
  )
}

export default DeleteConfirmation
