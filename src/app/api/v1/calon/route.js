import { CalonController } from '../../controller/calon-controller';

export function GET() {}

export function POST(req) {
  return CalonController.create(req);
}

export function DELETE() {}
