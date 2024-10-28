import { CalonService } from '../service/calon-service';
import { errorResponse } from '../error/response';
import { NextResponse } from 'next/server';

export class CalonController {
  static async create(req) {
    try {
      const userReq = await req.json();
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
}
