import { NextResponse, NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const LoginURL = new URL('/auth', request.url);

  // if (token) {
  //   return NextResponse.next();
  // } else {
  //   return NextResponse.redirect(LoginURL);
  // }
}
// export const config = {
//   matcher: [
//     '/', '/riskdetail', '/riskmatrix',],
// };