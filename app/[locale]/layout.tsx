import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'

import localFont from 'next/font/local'
import './globals.css'
import { Metadata } from 'next'

const brockMann = localFont({
  src: [
    {
      path: './fonts/Brockmann-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Brockmann-BoldItalic.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: './fonts/Brockmann-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Brockmann-MediumItalic.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: './fonts/Brockmann-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Brockmann-RegularItalic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/Brockmann-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Brockmann-SemiBoldItalic.otf',
      weight: '600',
      style: 'italic',
    },
  ],
  variable: '--font-brockmann',
})

export const metadata: Metadata = {
  title: 'Abokyh | Gift Cards & Crypto Credit',
  description:
    'Abokyh - Seamless crypto-based gift card platform enabling affordable and secure transactions in Francophone Africa',
  applicationName: 'Abokyh',
  authors: [
    { name: 'Duclair Fopa Kuete', url: '' },
    { name: 'Loic-Yvan Ayemou', url: '' },
  ],
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  return (
    <html lang={locale}>
      <body className={`${brockMann.variable}`}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  )
}
