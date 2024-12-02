import AdminLayout from '@/components/admin/AdminLayout';

const Layout = ({ children }) => {
  return (
    <AdminLayout>
      <div className="overflow-y-scroll p-4">{children}</div>
    </AdminLayout>
  );
};

export default Layout;
