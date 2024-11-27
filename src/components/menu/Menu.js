'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { buttonVariants } from '../ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const ListMenu = ({ title, description, content, href, logo }) => {
  const route = useRouter();

  return (
    <Card className="relative z-10">
      <CardHeader>
        <CardTitle className="text-md">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>
      <CardFooter>
        <Link
          onClick={() => route.refresh()}
          href={href}
          className={`${buttonVariants()} w-full`}
        >
          <div className="w-full flex items-center justify-between font-semibold">
            <span>Pilih</span>
            <span>{'>'}</span>
          </div>
        </Link>
      </CardFooter>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10">
        <Image
          src={logo}
          alt="Logo ormawa FTI"
          width={125}
          height={125}
          className="opacity-30"
        />
      </div>
    </Card>
  );
};

const Menu = () => {
  const periode = new Date().getFullYear();

  return (
    <div className="grid md-grid-cols-1 gap-2">
      <ListMenu
        title="Pemilihan HMP-TI FTI UNISKA"
        description="HMP-TI FTI UNISKA 2024"
        content={`pemilihan Ketua Umum HMP-TI UNISKA periode ${periode} - ${periode + 1}`}
        href="/ti"
        logo={'/logo-hmpti.png'}
      />
      <ListMenu
        title="Pemilihan HMP-SI FTI UNISKA"
        description="HMP-SI FTI UNISKA 2024"
        content={`pemilihan Ketua Umum HMP-SI UNISKA periode ${periode} - ${periode + 1}`}
        href="/si"
        logo={'/logo-hmpsi.png'}
      />
      <ListMenu
        title="Pemilihan BEM FTI UNISKA"
        description="BEM FTI UNISKA 2024"
        content={`pemilihan Gubernur BEM FTI UNISKA periode ${periode} - ${periode + 1}`}
        href="/bem"
        logo={'/bem-fti.png'}
      />
    </div>
  );
};

export default Menu;
