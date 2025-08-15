import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { SmoothCursor } from '@/components/ui/smooth-cursor'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <SmoothCursor />
    </>
  )
}
