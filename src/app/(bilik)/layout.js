import MainLayout from '@/components/layouts/main';
import Navigation from '@/components/navigation';
import Navbar from '@/components/navbar/Navbar';

const BilikLayout = async ({ children }) => {
  return (
    <MainLayout>
      <Navigation />
      <div className="w-full p-4">{children}</div>
      <Navbar />
    </MainLayout>
  );
};

export default BilikLayout;
