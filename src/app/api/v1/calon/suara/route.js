import { CalonController } from '@/app/api/controller/calon-controller';

export async function POST(req) {
  return CalonController.suaraCalon(req);
}
