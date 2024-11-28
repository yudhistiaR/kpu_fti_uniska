import { fetchData } from '@/hooks/fetch';
import Image from 'next/image';
import VotingAction from '@/components/action/Voting';
import * as jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export const metadata = {
  title: 'Detail calon'
};

const DetaulCalonPage = async ({ params: { calon_id } }) => {
  const cookie = cookies();
  const token = cookie.get('token')?.value;
  const data = await fetchData(`/api/v1/calon/${calon_id}`);

  const decoded = jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      cookie.delete('token');
      return NextResponse.redirect(new URL('/login'));
    }

    return decoded;
  });

  return (
    <section>
      {data.map(calon => (
        <div key={calon.id} className="w-full h-full">
          <div className="text-2xl font-semibold mb-4">
            Nomor Urut Calon : {calon.no_urut}
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="relative flex justify-center items-center w-[360px] min-h-96 rounded-xl overflow-hidden">
              <Image
                src={calon.foto}
                className="rounded-xl"
                alt="calon"
                fill
                objectFit="conver"
              />
            </div>
          </div>
          <div className="my-8">
            <h1 className="text-start text-2xl font-semibold">{calon.nama}</h1>
            <h2>
              {calon.prodi} || {calon.angkatan}
            </h2>
            <div className="flex flex-col justify-center gap-2 mt-5">
              <div>
                <h2 className="text-center font-semibold">Visi</h2>
                <p className="text-justify">{calon.visi}</p>
              </div>
              <div>
                <h2 className="text-center font-semibold">Misi</h2>
                <p>{calon.misi}</p>
              </div>
            </div>
          </div>
          <VotingAction calon_id={calon.id} npm={decoded.npm} />
        </div>
      ))}
    </section>
  );
};

export default DetaulCalonPage;