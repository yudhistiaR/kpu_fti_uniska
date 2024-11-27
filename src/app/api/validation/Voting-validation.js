import { z } from 'zod';

export class VotingValidation {
  static VOTING = z.object({
    calon_id: z.string().uuid(),
    npm: z.string()
  });
}
