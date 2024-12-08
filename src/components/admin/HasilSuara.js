import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardImage
} from '@/components/ui/card';
import { useEffect, useState } from 'react';
import CountUp from 'react-countup';

const HasilSuara = (type = 'bem') => {
  const [datas, setDatas] = useState([]);

  const req = async () => {
    try {
      await fetch(`/api/v1/calon/suara`, {
        method: 'POST',
        body: JSON.stringify(type)
      }).then(async res => {
        if (!res.ok) {
          throw new Error(res.message);
        }
        const data = await res.json();
        setDatas(data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    req();
  }, []);

  return (
    <div className="flex justify-center items-center gap-4 w-full h-full">
      {datas &&
        datas?.map(calon => (
          <Card key={calon.id} className="w-1/2">
            <CardHeader className="text-start">
              <p className="py-2 font-bold text-md">
                NOMOR URUT CALON: {calon.no_urut} || {calon.type.toUpperCase()}
              </p>
              <CardImage
                alt="foto calon"
                src={calon.foto}
                object-fit="cover"
                width={200}
                height={200}
              />
              <CardTitle>
                <h1 className="text-xl">{calon.nama}</h1>
              </CardTitle>
              <CardDescription className="text-sm">
                {calon.prodi} || {calon.angkatan}
              </CardDescription>
            </CardHeader>
            <CardContent className="grid text-wrap text-justify">
              {calon.visiMisi}
            </CardContent>
            <CardFooter className="text-xl font-bold">
              <p>
                TOTAL PEROLEHAN SUARA :{' '}
                <CountUp end={calon.pemilih} delay={8} start={0} />
              </p>
            </CardFooter>
          </Card>
        ))}
    </div>
  );
};

export default HasilSuara;
