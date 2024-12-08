import { z } from 'zod';

export class LoginValidation {
  static LOGIN = z.object({
    username: z.string().min(1).max(20),
    password: z.string().min(1).max(20)
  });
}
