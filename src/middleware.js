import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

const protectedRoutes = ['/', '/ti', '/si', '/dashboard'];
//const publicRoutes = ['/login', '/register'];

export default async function middleware(req) {
  const path = req.nextUrl.pathname;
  const isProtectedRoutes = protectedRoutes.includes(path);
  //const isPublicRoutes = publicRoutes.includes(path);

  const token = (await cookies()).get('token')?.value;

  if (isProtectedRoutes && token === undefined) {
    return NextResponse.redirect(new URL('/login', req.nextUrl));
  }

  return NextResponse.next();
}
