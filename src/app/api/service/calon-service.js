import { prisma } from '@/lib/db';
import { Validation } from '../validation/Validation';
import { CalonValidation } from '../validation/calon-validation';

export class CalonService {
  static async create(req) {
    const userRequest = Validation.Validate(CalonValidation.CREATE, req);

    const response = await prisma.calon.create({
      data: userRequest
    });

    return response;
  }

  static async getAll() {
    const data = await prisma.calon.findMany({
      orderBy: {
        no_urut: 'asc'
      }
    });
    const counte = await prisma.calon.count();

    return {
      data,
      counte
    };
  }

  static async get(calon_id) {
    return await prisma.calon.findMany({
      where: {
        id: calon_id
      }
    });
  }

  static async getByType(type) {
    return await prisma.calon.findMany({
      where: {
        type: type
      },
      orderBy: {
        no_urut: 'asc'
      }
    });
  }

  static async delete(calon_id) {
    return await prisma.calon.deleteMany({
      where: {
        id: calon_id
      }
    });
  }

  static async update(req, calon_id) {
    return await prisma.calon.update({
      where: {
        id: calon_id
      },
      data: req
    });
  }

  static async suaraCalon(req) {
    const data = await prisma.calon.findMany({
      where: {
        type: req.type
      },
      include: {
        pemilih: true
      }
    });

    return data.map(candidate => ({
      ...candidate,
      pemilih: candidate.pemilih.length
    }));
  }
}
