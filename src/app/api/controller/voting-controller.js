import { cookies } from 'next/headers';
import { errorResponse } from '../error/response';
import { VotingServices } from '../service/voting-service';
import { NextResponse } from 'next/server';
import * as jwt from 'jsonwebtoken';
import { Validation } from '../validation/Validation';
import { VotingValidation } from '../validation/Voting-validation';
import { ErrorResponse } from '../error/errorResponse';

export class VotingController {
  static async voting(req) {
    try {
      const cookie = cookies();
      const token = cookie.get('token')?.value;
      const userReq = await req.json();

      Validation.Validate(VotingValidation.VOTING, userReq);

      if (!token) {
        cookie.delete('token');
        throw new ErrorResponse(401, 'Token not found');
      }

      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET,
        (err, decoded) => {
          if (err) {
            cookie.delete('token');
            throw new ErrorResponse(401, err.message);
          }
          return decoded;
        }
      );

      await VotingServices.voting(userReq, decoded);

      return NextResponse.json({ message: 'oke' }, { status: 200 });
    } catch (error) {
      return errorResponse(error);
    }
  }
}
