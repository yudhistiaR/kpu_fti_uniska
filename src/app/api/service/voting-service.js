import { prisma } from '@/lib/db';
import { ErrorResponse } from '../error/errorResponse';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { panitiaNPMList } from '@/lib/npmPanitia';

export class VotingServices {
  static async vote(data, type) {
    const cookieStore = cookies();

    const updateStatus = await prisma.pemilih.update({
      where: {
        npm: data.npm
      },
      data: {
        [type]: true
      }
    });

    await prisma.votingCalon.create({
      data: data
    });

    const token = jwt.sign(updateStatus, process.env.JWT_SECRET, {
      expiresIn: '1h'
    });

    cookieStore.set('token', token, {
      maxAge: 60 * 60 * 1,
      secure: true,
      httpOnly: true
    });
  }

  static async voting(req, token) {
    try {
      const decoded = token;

      if (panitiaNPMList.includes(decoded.npm)) {
        throw new ErrorResponse(
          401,
          'Panitia tidak diperbolehkan melakukan voting'
        );
      }

      if (decoded.status_akun !== 'MAHASISWA') {
        throw new ErrorResponse(401, 'Status akun anda bukan mahasiswa aktif');
      }

      if (decoded.status_akun === 'Pelaksana') {
        throw new ErrorResponse(
          401,
          'Panitia tidak diperbolehkan melakukan voting'
        );
      }

      const calonInfo = await prisma.calon.findFirst({
        where: { id: req.calon_id }
      });

      if (calonInfo.type === 'si' || calonInfo.type === 'ti') {
        if (decoded.status_hmp) {
          throw new ErrorResponse(401, 'Anda Sudah Menggunakan Hak Suara Anda');
        }

        return await this.vote(req, 'status_hmp');
      }

      if (calonInfo.type === 'bem') {
        if (decoded.status_bem) {
          throw new ErrorResponse(401, 'Anda Sudah Menggunakan Hak Suara Anda');
        }

        return await this.vote(req, 'status_bem');
      }
    } catch (error) {
      throw new ErrorResponse(error.status, error.message);
    }
  }
}
