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
}
