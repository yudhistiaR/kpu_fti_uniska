'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navigation = () => {
  const path = usePathname();
  const [name, setName] = useState(undefined);

  useEffect(() => {
    if (path === '/') {
      setName('Categoty');
    } else if (path) {
      setName(`Bilik ${path.replace('/', '').toUpperCase()}`);
    } else {
      setName('KPU FTI UNISKA');
    }
  }, []);

  return (
    <div className="text-xl font-semibold fixed bg-white w-full top-0 left-0 p-3 shadow-sm z-20">
      <Link href="/">{name ?? 'Loading...'}</Link>
    </div>
  );
};

export default Navigation;
