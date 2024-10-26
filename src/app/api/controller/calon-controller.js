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
}
