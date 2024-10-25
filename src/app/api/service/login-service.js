import { Validation } from '../validation/Validation';
import { LoginValidation } from '../validation/login-validation';
import { prisma } from '@/lib/db';
import { ErrorResponse } from '../error/errorResponse';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

export class LoginService {
  static async login(req) {
    const cookieStore = cookies();
    Validation.Validate(LoginValidation.LOGIN, req);
    const { npm } = req;

    let auth = await prisma.pemilih.findFirst({
      where: {
        npm: npm
      }
    });

    if (!auth) throw new ErrorResponse(403, 'invalid npm or password');

    const token = jwt.sign(
      {
        ...auth
      },
      process.env.JWT_SECRET,
      { expiresIn: '3h' }
    );

    cookieStore.set('token', token, {
      maxAge: 60 * 60 * 3,
      secure: true
    });

    return {
      ...auth,
      token: token
    };
  }
}
