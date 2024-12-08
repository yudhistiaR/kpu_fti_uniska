import { errorResponse } from '../error/response';
import { LoginService } from '../service/login-service';
import { NextResponse } from 'next/server';
import { Validation } from '../validation/Validation';
import { LoginValidation } from '../validation/login-validation';

export class LoginController {
  static async auth(req) {
    try {
      const request = await req.json();
      Validation.Validate(LoginValidation.LOGIN, request);

      const loginService = await LoginService.login(request);

      return NextResponse.json(loginService, { status: 200 });
    } catch (error) {
      return errorResponse(error);
    }
  }
}
