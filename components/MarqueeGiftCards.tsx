'use client'

import { useTranslations } from 'next-intl'
import SliderWrapper from './_SlickSliderStyle'
import Slider from 'react-slick'

interface Service {
  id: string
  name: string
  description: string
  image: string
  alt: string
}

const ServiceCarousel = () => {
  const t = useTranslations('GiftCardCarousel')

  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 500,
    arrows: false,
    adaptiveHeight: true,
    appendDots: (dots: any) => <ul>{dots}</ul>,
    customPaging: () => (
      <div className='ft-slick__dots--custom'>
        <div className='loading' />
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const services: Service[] = t.raw('gift_cards').map((service: any) => ({
    id: service.id,
    name: service.name,
    description: service.description,
    image:
      service.image ||
      'https://cdn.pixabay.com/photo/2014/12/15/19/29/screen-569515_1280.jpg',
    alt: service.alt,
  }))

  return (
    <div
      className='bg-[#FFFFFF] w-full h-auto min-h-[300px] md:min-h-[350px] lg:min-h-[400px] xl:h-[450px]'
      style={{
        height: 'auto',
        minHeight: '300px',
      }}
    >
      <div className='text-center pt-6'>
        <h2 className='text-3xl md:text-4xl font-bold text-[#000000]'>
          {t('title')}
        </h2>
        <div className='w-20 h-1 bg-[#4CAF50] mx-auto mt-4'></div>
      </div>
      <SliderWrapper>
        <Slider {...settings}>
          {services.map((service) => (
            <div
              key={service.id}
              className='w-full flex flex-col justify-center'
            >
              <div className='p-4 md:p-10 rounded text-[#000000]'>
                <div className='h-40 w-40 md:h-60 md:w-60 m-auto'>
                  <img
                    src={service.image}
                    alt={service.alt}
                    className='w-full h-full object-contain'
                  />
                </div>
                <h3 className='text-xl md:text-2xl font-semibold mt-4 text-[#00BCD4]'>
                  {service.name}
                </h3>
                <p className='mt-2 text-sm md:text-base text-[#000000]'>
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </SliderWrapper>
    </div>
  )
}

export default ServiceCarousel
