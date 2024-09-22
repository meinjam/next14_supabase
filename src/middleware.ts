import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { cookies } from 'next/headers';

const loginRoutes = ['/', '/login', '/signup'];
const protectedRoutes = ['/profile'];

export function middleware(request: NextRequest) {
  // const cookieStore = cookies();
  // const auth = cookieStore.get('access_token');

  // const { pathname } = request.nextUrl;
  // console.log(pathname);

  // if (protectedRoutes.includes(pathname)) {
  //   const token = request.cookies.get('auth_token');

  //   if (!token) {
  //     // If the user is not authenticated, redirect to the login page
  //     return NextResponse.redirect(new URL('/', request.url));
  //   }
  // }

  //   if (auth && loginRoutes.includes(pathname)) {
  //     return NextResponse.rewrite(new URL('/dashboard', request.url));
  //   }

  //   if (!auth && pathname.includes('dashboard')) {
  //     return NextResponse.rewrite(new URL('/', request.url));
  //   }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
