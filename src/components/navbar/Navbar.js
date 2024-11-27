'use client';
import { Home, History, User, LogOut } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog';

const NavItem = ({ href, path, children, ...props }) => {
  const active = href === path;

  return (
    <Link
      className={cn(
        'flex flex-col justify-center items-center pt-[12px] pb-[8px] px-5 hover:bg-gray-300/50 transition-colors ease-in-out duration-300',
        active ? 'bg-gray-300/50 shadow-sm' : ''
      )}
      href={href}
      {...props}
    >
      {children}
    </Link>
  );
};

const Logout = () => {
  const path = useRouter();

  const onClick = async () => {
    return await fetch('/api/v1/logout', { method: 'DELETE' }).then(res => {
      if (res.ok) {
        path.push('/');
      }
    });
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <div
          className={cn(
            'flex flex-col justify-center items-center pt-[12px] pb-[8px] px-5 hover:bg-gray-300/50 transition-colors ease-in-out duration-300'
          )}
        >
          <LogOut size={24} />
          <div className="text-md font-light">LogOut</div>
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-sm text-start">
        <AlertDialogHeader>
          <AlertDialogTitle>Keluar</AlertDialogTitle>
          <AlertDialogDescription>
            Apakah anda yakin ingin keluar aplikasi ?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Batal</AlertDialogCancel>
          <AlertDialogAction onClick={onClick}>Keluar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

const Navbar = () => {
  const path = usePathname();

  return (
    <nav className="w-full max-w-xl m-auto h-[64px] fixed left-1/2 translate-x-[-50%] bottom-0 shadow-sm z-50 bg-white content-center">
      <div className="w-full m-auto grid grid-cols-4 content-center">
        <NavItem href="/" path={path}>
          <Home size={24} />
          <div className="text-md font-ligh">Home</div>
        </NavItem>
        <NavItem href="/history" path={path}>
          <History size={24} />
          <div className="text-md font-light">History</div>
        </NavItem>
        <NavItem href="/profile" path={path}>
          <User size={24} />
          <div className="text-md font-light">Profile</div>
        </NavItem>
        <Logout />
      </div>
    </nav>
  );
};

export default Navbar;
