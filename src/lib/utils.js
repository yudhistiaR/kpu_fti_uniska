import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { NextResponse } from 'next/server';
import * as jwt from 'jsonwebtoken';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function createToken(length) {
  let result = '';

  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;

  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }

  return result;
}

export const vertify = token => {
  jwt.verify(token, process.env.JWT_SECRET, err => {
    if (err) {
      return NextResponse.redirect(new URL('/login', req.nextUrl));
    }
  });

  return;
};
