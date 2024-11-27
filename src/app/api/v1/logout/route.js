import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function DELETE() {
  try {
    const cookie = await cookies();
    cookie.delete('token');

    return NextResponse.json({ message: 'oke' }, { status: 200 });
  } catch (error) {
    return NextResponse.json(error.message, { status: 500 });
  }
}
