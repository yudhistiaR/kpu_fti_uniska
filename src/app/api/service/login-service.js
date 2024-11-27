import { prisma } from '@/lib/db';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { ErrorResponse } from '../error/errorResponse';

export class LoginService {
  static async login(req) {
    const cookieStore = cookies();

    return await prisma.pemilih
      .findFirst({
        where: {
          npm: req.npm
        }
      })
      .then(async res => {
        if (res.length === 0) {
          throw new ErrorResponse(401, 'Wrong NPM or Password');
        }

        const auth = res;

        const token = jwt.sign(
          {
            npm: auth.npm,
            prodi: auth.prodi,
            status_hmp: auth.status_hmp,
            status_bem: auth.status_bem,
            status_akun: auth.status_akun
          },
          process.env.JWT_SECRET,
          { expiresIn: '1h' }
        );

        cookieStore.set('token', token, {
          maxAge: 60 * 60 * 1,
          secure: true,
          httpOnly: true
        });

        return {
          npm: auth.npm,
          prodi: auth.prodi,
          status_akun: auth.status_akun,
          token: token
        };
      });
  }
}
