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
    const data = await prisma.calon.findMany();
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
  
  static async delete(calon_id) {
    const a = await prisma.calon.deleteMany({
      where: {
        id: calon_id
      }
    });
  }

}
