import { prisma } from '@/lib/db';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { ErrorResponse } from '../error/errorResponse';

export class LoginService {
  static async generateJWT(data) {
    const cookieStore = cookies();

    const token = jwt.sign(
      {
        npm: data?.npm || data?.userid,
        prodi: data.prodi,
        status_hmp: data.status_hmp,
        status_bem: data.status_bem,
        status_akun: data.status_akun
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
      ...data,
      token: token
    };
  }

  static async login(req) {
    const loginFTI = await fetch(process.env.API_FTI_URL, {
      method: 'POST',
      headers: {
        Authorization: process.env.API_FTI_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: req.username,
        password: req.password
      })
    }).then(async res => {
      if (!res.ok) {
        const { message } = await res.json();
        throw new ErrorResponse(401, message);
      }
      const data = await res.json();
      return data;
    });

    const datas = await loginFTI;
    const { data } = datas;

    const prodi =
      data.kode_prodi === '57201' ? 'Sistem Informasi' : 'Teknik Informatika';

    const isExitingUser = await prisma.pemilih.findMany({
      where: {
        npm: data.userid
      }
    });

    if (isExitingUser.length <= 0) {
      const createUser = await prisma.pemilih.create({
        data: {
          nama: data.nama,
          npm: data.userid,
          prodi: prodi,
          status_akun: data.level
        }
      });

      return this.generateJWT(createUser);
    } else {
      return this.generateJWT(isExitingUser[0]);
    }
  }
}
