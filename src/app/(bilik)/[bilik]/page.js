import {
  Card,
  CardHeader,
  CardImage,
  CardContent,
  CardFooter
} from '@/components/ui/card';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { fetchData } from '@/hooks/fetch';
import VotingAction from '@/components/action/Voting';
import * as jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

const BilikPage = async ({ params: { bilik } }) => {
  const cookie = cookies();
  const token = cookie.get('token')?.value;
  const data = await fetchData(`/api/v1/prodi/${bilik}`);

  const decoded = await jwt.verify(
    token,
    process.env.JWT_SECRET,
    (_, decoded) => {
      return decoded;
    }
  );

  return (
    <div className="grid gap-4">
      {data.length !== 0 ? (
        data.map((calon, _) => (
          <Card key={calon.id}>
            <CardHeader>
              <CardImage
                alt="foto calon"
                src={calon.foto}
                object-fit="cover"
                width={200}
                height={200}
              />
            </CardHeader>
            <CardContent className="grid text-wrap text-justify">
              <div>
                <div className="font-semibold text-xl">{calon.nama}</div>
                <div className="font-semibold text-gray-600">
                  Nomor Urut : {calon.no_urut}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex gap-3 justify-between">
              <Link
                href={`/${bilik}/${calon.id}`}
                className={buttonVariants({
                  variant: 'outline',
                  className: 'font-semibold'
                })}
              >
                Detail
              </Link>
              <VotingAction calon_id={calon?.id} npm={decoded?.npm} />
            </CardFooter>
          </Card>
        ))
      ) : (
        <div className="w-full h-[450px] flex items-center justify-items-center justify-center">
          <p className="text-2xl text-center text-zinc-600">
            Belum ada Pemilihan
          </p>
        </div>
      )}
    </div>
  );
};

export default BilikPage;
