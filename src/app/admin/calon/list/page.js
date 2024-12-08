'use client';
import dynamic from 'next/dynamic';
const ListCalon = dynamic(() => import('@/components/admin/ListCalon'));

const ListCalonPage = () => {
  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">List Calon</h1>
      <ListCalon />
    </section>
  );
};

export default ListCalonPage;
