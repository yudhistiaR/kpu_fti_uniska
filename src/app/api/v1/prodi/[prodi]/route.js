import { CalonController } from '@/app/api/controller/calon-controller';

export function GET(_, { params: { prodi } }) {
  return CalonController.getByType(prodi);
}
