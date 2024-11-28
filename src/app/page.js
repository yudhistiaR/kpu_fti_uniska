import dynamic from 'next/dynamic';
import MainLayout from '@/components/layouts/main';
import Navigation from '@/components/navigation';
import Navbar from '@/components/navbar/Navbar';
import MenuLoading from '@/components/loading/MenuLoading';

const Menu = dynamic(() => import('@/components/menu/Menu'), {
  loading: () => <MenuLoading />
});

export default function Home() {
  return (
    <MainLayout>
      <Navigation />
      <Menu />
      <Navbar />
    </MainLayout>
  );
}
