import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { isLoged } from './utils/isLoged';
// import { isLoged } from './utils/isLoged';

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  // console.log({token})
  // console.log({ path: request.nextUrl.pathname });
  if (
    // request.nextUrl.pathname !== '/' &&
    // !request.nextUrl.pathname.startsWith('/login') &&
    // !request.nextUrl.pathname.startsWith('/404')
    request.nextUrl.pathname.startsWith('/admin')
  ) {
    if (!token) {
      return NextResponse.redirect(new URL('/', request.url));
    } else {
      const { data } = await isLoged(token || '');
      // console.log({data})
      if (!data || !data.authValidateToken) {
        request.cookies.delete('token');
        return NextResponse.redirect(new URL('/login', request.url));
      }
      // if (request.nextUrl.pathname === '/') {
      //   return NextResponse.redirect(new URL('/admin', request.url));
      // }
    }
    // return NextResponse.redirect(new URL("/login", request.url));
  }
}
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
