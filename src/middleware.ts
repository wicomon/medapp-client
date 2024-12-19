import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
// import { isLoged } from './utils/isLoged';

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  console.log({token})
  if (!request.nextUrl.pathname.startsWith("/login") && !request.nextUrl.pathname.startsWith("/404") ) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    } else {
      // const { data } = await isLoged(token || "");
      // if (!data.isloged) {
      //   request.cookies.delete("token");
      //   return NextResponse.redirect(new URL("/login", request.url));
      // }

      if (request.nextUrl.pathname === "/") {
        return NextResponse.redirect(new URL("/admin", request.url));
      }
    }
    // return NextResponse.redirect(new URL("/login", request.url));
  }
}
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
