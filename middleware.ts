import { NextRequest, NextResponse } from 'next/server'
import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

const intlMiddleware = createMiddleware(routing)

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Early return for studio routes
  if (pathname === '/studio' || pathname.startsWith('/studio/')) {
    return NextResponse.next()
  }

  return intlMiddleware(request)
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next`, `/_vercel`, or `/studio`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: '/((?!api|trpc|_next|_vercel|studio|.*\\..*).*)',
}
