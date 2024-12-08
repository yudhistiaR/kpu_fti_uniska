'use client';

import dynamic from 'next/dynamic';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import Image from 'next/image';
import parser from 'html-react-parser';
import { toast } from 'sonner';
import { useState, useEffect } from 'react';

const DeleteCalon = dynamic(() => import('../action/deleteCalon'));

const ListCalon = () => {
  const [datas, setDatas] = useState([]);

  const fetchDataCalon = async () => {
    return await fetch(`/api/v1/calon`, {
      method: 'GET'
    }).then(async res => {
      if (!res.ok) {
        const error = await res.json();
        return toast.error(error.message);
      }
      const data = await res.json();
      setDatas(data);
    });
  };

  useEffect(() => {
    fetchDataCalon();
  }, []);

  if (datas.length <= 0) {
    return (
      <div className="w-full text-lg font-bold text-center">Loading...</div>
    );
  }

  return (
    <div className="w-full p-4 bg-white rounded-lg shadow-md">
      <Table>
        <TableCaption>List Calon</TableCaption>
        <TableHeader>
          <TableRow className="text-center">
            <TableHead>NO</TableHead>
            <TableHead>Foto</TableHead>
            <TableHead>Nama</TableHead>
            <TableHead>No Urut</TableHead>
            <TableHead>Prodi</TableHead>
            <TableHead>Angkatan</TableHead>
            <TableHead>Jenis Pencalonan</TableHead>
            <TableHead>{'Visi & Misi'}</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {datas &&
            datas?.data.map((item, idx) => (
              <TableRow key={item.id} className="text-center">
                <TableCell className="font-medium">{idx + 1}</TableCell>
                <TableCell className="font-medium">
                  <Image
                    alt="Foto calon"
                    src={item.foto}
                    width={80}
                    height={80}
                  />
                </TableCell>
                <TableCell className="font-medium">{item.nama}</TableCell>
                <TableCell className="font-medium">{item.no_urut}</TableCell>
                <TableCell className="font-medium">{item.prodi}</TableCell>
                <TableCell className="font-medium">{item.angkatan}</TableCell>
                <TableCell className="font-medium">{item.type}</TableCell>
                <TableCell className="font-medium text-justify">
                  {parser(item.visiMisi)}
                </TableCell>
                <TableCell className="font-medium flex space-x-2 justify-center text-white">
                  <DeleteCalon calonId={item.id} />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ListCalon;
