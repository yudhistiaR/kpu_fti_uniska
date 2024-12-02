'use client';
import Link from 'next/link';
import Image from 'next/image';
import {
  Home,
  IdCard,
  ChartLine,
  History,
  ChartNoAxesGantt,
  Settings2
} from 'lucide-react';
import { cn } from '@/lib/utils';

import { usePathname } from 'next/navigation';

const Item = ({ href, path, icon, title, ...props }) => {
  const active = href === path;
  return (
    <Link href={href}>
      <div
        className={cn(
          'flex items-center gap-2 py-4 px-2 hover:bg-gray-100 hover:text-black transition-all duration-300 text-lg',
          active && 'bg-gray-100 text-black font-semibold'
        )}
        {...props}
      >
        <div>{icon}</div>
        <div>{title}</div>
      </div>
    </Link>
  );
};

const Aside = () => {
  const path = usePathname();

  return (
    <aside className="h-screen w-1/6 bg-black text-white">
      <div className="flex justify-start items-center gap-2 mb-4 p-8">
        <Image alt="logo" src="/logo-kpu-fti.png" width={50} height={50} />
        <h2 className="font-bold text-lg">KPU-FTI UNISKA</h2>
      </div>
      <div className="flex flex-col">
        <Item path={path} href="/admin" title="Home" icon={<Home />} />
        <Item
          path={path}
          href="/admin/calon"
          title="Tambah Calon"
          icon={<IdCard />}
        />
        <Item
          path={path}
          href="/admin/statistik"
          title="Statistik"
          icon={<ChartLine />}
        />
        <Item
          path={path}
          href="/admin/history"
          title="History"
          icon={<History />}
        />
        <Item
          path={path}
          href="/admin/timeline"
          title="Timeline"
          icon={<ChartNoAxesGantt />}
        />
        <Item
          path={path}
          href="/admin/settings"
          title="Settings"
          icon={<Settings2 />}
        />
      </div>
    </aside>
  );
};

export default Aside;
