import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import * as jose from 'jose';

const adminRoutes = ['/dashboard', '/admin'];
const protectedRoutes = ['/', '/ti', '/si'];
const publicRoutes = ['/login', '/register'];

export default async function middleware(req) {
  const path = req.nextUrl.pathname;
  const isProtectedRoutes = protectedRoutes.includes(path);
  const isPublicRoutes = publicRoutes.includes(path);
  const isAdminRoutes = adminRoutes.includes(path);

  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  const token = (await cookies()).get('token')?.value;
  if (isProtectedRoutes && !token && token === undefined) {
    return NextResponse.redirect(new URL('/login', req.nextUrl), {
      status: 307
    });
  }

  if (isPublicRoutes && token) {
    return NextResponse.redirect(new URL('/', req.nextUrl), {
      status: 307
    });
  }

  if (isAdminRoutes && token) {
    try {
      const { payload: decoded } = await jose.jwtVerify(token, secret);
      if (decoded?.status_akun !== 'Pelaksana') {
        return NextResponse.redirect(new URL('/', req.nextUrl), {
          status: 307
        });
      }
    } catch (error) {
      if (error) {
        return NextResponse.redirect(new URL('/login', req.nextUrl), {
          status: 307
        });
      }
    }
    return NextResponse.next();
  }

  return NextResponse.next();
}
