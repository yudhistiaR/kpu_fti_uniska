'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navigation = () => {
  const path = usePathname();
  const [pathName, setPathName] = useState(null);

  useEffect(() => {
    const pathNames = {
      '/': 'Categoty',
      '/si': 'Bilik HMP-SI',
      '/ti': 'Bilik HMP-TI',
      '/bem': 'Bilik BEM FTI UNISKA',
      default: 'KPU FTI UNISKA'
    };

    setPathName(pathNames[path] ?? pathNames['default']);
  }, [path, pathName]);

  return (
    <div className="text-xl font-semibold fixed bg-white w-full top-0 left-0 p-3 shadow-sm z-20">
      <Link href="/">{pathName ?? 'Loading...'}</Link>
    </div>
  );
};

export default Navigation;
