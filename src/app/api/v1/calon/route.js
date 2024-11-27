import { CalonController } from '../../controller/calon-controller';

export function GET() {
  return CalonController.getAll();
}

export function POST(req) {
  return CalonController.create(req);
}
