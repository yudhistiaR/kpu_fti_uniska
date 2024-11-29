import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import * as jose from 'jose';

const protectedRoutes = ['/', '/dashboard', '/admin'];

export default async function middleware(req) {
  const path = req.nextUrl.pathname;
  const isProtectedRoutes = protectedRoutes.includes(path);
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  const token = await cookies().get('token')?.value;

  const { payload: decoded } = jose.jwtVerify(token, secret);

  if (isProtectedRoutes && token === undefined) {
    return NextResponse.redirect(new URL('/login', req.nextUrl));
  }

  if (isProtectedRoutes && decoded?.status_akun !== 'Pelaksana') {
    return NextResponse.redirect(new URL('/', req.nextUrl));
  }

  return NextResponse.next();
}
