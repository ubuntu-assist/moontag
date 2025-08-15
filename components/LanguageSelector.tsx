'use client'

import { useLocale, Locale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/navigation'
import { useState } from 'react'
import { useSearchParams } from 'next/navigation'

const languages = [
  { code: 'en', name: 'Anglais', flag: 'https://flagcdn.com/w40/gb.png' },
  { code: 'fr', name: 'Français', flag: 'https://flagcdn.com/w40/fr.png' },
]

const LanguageSelector = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const locale = useLocale()
  const defaultLanguage =
    languages.find((lang) => lang.code === locale) || languages[1]
  const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage)
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const handleLanguageChange = (language: {
    code: string
    name: string
    flag: string
  }) => {
    const query = Object.fromEntries(searchParams)
    router.replace({ pathname, query }, { locale: language.code as Locale })
    setSelectedLanguage(language)
    setIsLanguageOpen(false)
  }

  return (
    <div className='relative'>
      <button
        onClick={() => setIsLanguageOpen(!isLanguageOpen)}
        className='flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black transition duration-300'
      >
        <img
          src={selectedLanguage.flag}
          alt={`${selectedLanguage.name} flag`}
          className='w-6 h-4 mr-2'
        />
        <span>{selectedLanguage.name}</span>
        <svg
          className={`ml-2 w-4 h-4 transform ${
            isLanguageOpen ? 'rotate-180' : 'rotate-0'
          }`}
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M19 9l-7 7-7-7'
          />
        </svg>
      </button>
      {isLanguageOpen && (
        <div className='absolute bottom-full mb-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg'>
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language)}
              className='flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-300'
            >
              <img
                src={language.flag}
                alt={`${language.name} flag`}
                className='w-6 h-4 mr-2'
              />
              <span>{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default LanguageSelector
