import { z } from 'zod';

const type = ['TI', 'SI', 'BEM'];

export class CalonValidation {
  static CALON_ID = z.object({
    id: z.string().uuid({ message: 'id must be uuid' })
  });

  static CREATE = z.object({
    nama: z.string().min(1).max(50),
    visi: z.string().min(1),
    misi: z.string().min(1),
    prodi: z.string().min(1),
    foto: z.string(),
    angkatan: z.number().min(1),
    tgl_lahir: z.string().datetime(),
    no_urut: z.number().min(1),
    type: z.enum(type).default(null)
  });
}
