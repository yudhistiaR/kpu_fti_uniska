import { VotingController } from '../../controller/voting-controller';

export function POST(req) {
  return VotingController.voting(req);
}
