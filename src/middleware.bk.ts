import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  return NextResponse.rewrite(new URL('/login', request.url))
  // if (request.nextUrl.pathname.startsWith('/riskmatrix')) {
  //   return NextResponse.rewrite(new URL('/login', request.url))
  // }
  // return NextResponse.redirect(new URL('/login', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/riskmatrix/:path*',
    '/riskdetail/:path*'
  ],
}