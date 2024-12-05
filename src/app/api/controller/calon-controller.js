import { CalonService } from '../service/calon-service';
import { Validation } from '../validation/Validation';
import { CalonValidation } from '../validation/calon-validation';
import { errorResponse } from '../error/response';
import { NextResponse } from 'next/server';

export class CalonController {
  static async create(req) {
    try {
      const userReq = await req.json();
      console.log(userReq);
      const response = await CalonService.create(userReq);
      return NextResponse.json(response, { status: 200 });
    } catch (error) {
      return errorResponse(error);
    }
  }

  static async getAll() {
    try {
      const response = await CalonService.getAll();
      return NextResponse.json(response, { status: 200 });
    } catch (error) {
      return errorResponse(error);
    }
  }

  static async get(calon_id) {
    try {
      const response = await CalonService.get(calon_id);

      if (response <= 0) {
        return NextResponse.json(
          { message: 'Calon not found' },
          { status: 404 }
        );
      }

      return NextResponse.json(response, { status: 200 });
    } catch (error) {
      return errorResponse(error);
    }
  }

  static async getByType(prodi) {
    try {
      Validation.Validate(CalonValidation.PRODI, { type: prodi });

      const response = await CalonService.getByType(prodi);

      return NextResponse.json(response, { status: 200 });
    } catch (error) {
      return errorResponse(error);
    }
  }

  static async delete(calon_id) {
    try {
      Validation.Validate(CalonValidation.CALON_ID, { id: calon_id });

      let calon = await CalonService.get(calon_id);

      if (!calon || calon.length === 0) {
        return NextResponse.json(
          { message: 'Calon not found' },
          { status: 404 }
        );
      }

      await CalonService.delete(calon_id);

      return NextResponse.json(
        { message: 'Calon deleted successfully' },
        { status: 200 }
      );
    } catch (error) {
      return errorResponse(error);
    }
  }

  static async update(req, calon_id) {
    try {
      const userReq = await req.json();
      Validation.Validate(CalonValidation.CALON_ID, { id: calon_id });
      Validation.Validate(CalonValidation.UPDATE, userReq);

      const response = await CalonService.update(userReq, calon_id);

      return NextResponse.json(response, { status: 200 });
    } catch (error) {
      return errorResponse(error);
    }
  }
}
