import { NextResponse, NextRequest } from 'next/server';


export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const LoginURL = new URL('/auth', request.url);
  const dashboardURL = new URL('/dashboard', request.url);

  if (!token) {
    if (request.nextUrl.pathname === '/') {
      return NextResponse.next();
    }
    return NextResponse.redirect(LoginURL);
  }
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(dashboardURL);
  }
}
export const config = {
  matcher: [
    '/', '/dashboard', '/riskdetail', '/riskmatrix',
  ],
};