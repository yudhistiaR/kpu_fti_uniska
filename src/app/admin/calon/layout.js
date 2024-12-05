import Link from 'next/link';

const AdminCalonLayout = ({ children }) => {
  return (
    <section className="w-full flex gap-4 overflow-hidden">
      <ul className="bg-white p-4 rounded-lg min-h-32 max-h-32 text-md">
        <div>
          <Link href={'/admin/calon/'}>Tambah Calon</Link>
        </div>
        <div>
          <Link href={'/admin/calon/list'}>List Calon</Link>
        </div>
      </ul>
      <div className="flex-1">{children}</div>
    </section>
  );
};

export default AdminCalonLayout;
