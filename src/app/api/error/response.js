import { ZodError } from 'zod';
import { ErrorResponse } from './errorResponse';
import { NextResponse } from 'next/server';

export function errorResponse(error) {
  if (error instanceof ZodError) {
    return NextResponse.json(error, { status: 400 });
  } else if (error instanceof ErrorResponse) {
    return NextResponse.json(
      { message: error.message },
      { status: error.status }
    );
  } else {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
