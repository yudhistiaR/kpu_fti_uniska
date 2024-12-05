import { z } from 'zod';

const type = ['ti', 'si', 'bem'];

export class CalonValidation {
  static CALON_ID = z.object({
    id: z.string().uuid({ message: 'id must be uuid' })
  });

  static PRODI = z.object({
    type: z.enum(type)
  });

  static CREATE = z.object({
    nama: z.string().min(1).max(50),
    visiMisi: z.string().min(1),
    prodi: z.string().min(1),
    foto: z.string(),
    angkatan: z.string().min(1),
    no_urut: z.string().min(1),
    type: z.enum(type).default(null)
  });

  static UPDATE = z.object({
    nama: z.string().min(1).max(50).optional(),
    visi: z.string().min(1).optional(),
    misi: z.string().min(1).optional(),
    prodi: z.string().min(1).optional(),
    foto: z.string().optional(),
    angkatan: z.string().min(1).optional(),
    tgl_lahir: z.string().datetime().optional(),
    no_urut: z.string().min(1).optional(),
    type: z.enum(type).default(null).optional()
  });
}
