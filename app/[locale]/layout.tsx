import { NextIntlClientProvider } from 'next-intl'
import { Analytics } from '@vercel/analytics/next'

import './globals.css'
import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import localFont from 'next/font/local'

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
  title: 'Moontag | Digital Solutions & Creative Development',
  description:
    'Moontag - Innovative digital agency specializing in web development, design, and photography. We create stunning digital experiences that bring your ideas to life.',
  applicationName: 'Moontag',
  authors: [{ name: 'Moontag Team', url: 'https://moontag.com' }],
  keywords: [
    'web development',
    'design',
    'photography',
    'digital agency',
    'creative solutions',
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
  // if (!hasLocale(routing.locales, locale)) {
  //   notFound()
  // }

  return (
    <html lang={locale}>
      <body className={`${brockMann.variable}`}>
        <NextIntlClientProvider>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  )
}
