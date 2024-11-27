import { LoginController } from '../../controller/login-controller';

export async function POST(req) {
  return LoginController.auth(req);
}
