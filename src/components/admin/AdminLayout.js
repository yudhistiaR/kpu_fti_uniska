import Aside from '@/components/admin/Asiden';
import AdminNavbar from './Navbar';

const AdminLayout = ({ children }) => {
  return (
    <main className="bg-gray-100 overflow-hidden flex w-full h-screen">
      <section className="flex flex-1">
        <Aside />
        <section className="flex flex-col flex-1">
          <AdminNavbar />
          {children}
        </section>
      </section>
    </main>
  );
};

export default AdminLayout;
