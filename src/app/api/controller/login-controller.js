import { errorResponse } from '../error/response';
import { LoginService } from '../service/login-service';
import { NextResponse } from 'next/server';

export class LoginController {
  static async auth(req) {
    try {
      const request = await req.json();
      const response = await LoginService.login(request);

      return NextResponse.json(response, { status: 200 });
    } catch (error) {
      return errorResponse(error);
    }
  }
}
