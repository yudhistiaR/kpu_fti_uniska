import { CalonController } from '@/app/api/controller/calon-controller';

export function GET(_, { params: { calon_id } }) {
  return CalonController.get(calon_id);
}

export function DELETE(_, { params: { calon_id } }) {
  return CalonController.delete(calon_id);
}

export function PATCH(req, { params: { calon_id } }) {
  return CalonController.update(req, calon_id);
}
