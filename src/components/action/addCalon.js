'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { CldUploadWidget } from 'next-cloudinary';
import { toast } from 'sonner';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { MinimalTiptapEditor } from '@/components/minimal-tiptap';

const AddCalon = () => {
  const path = useRouter();
  const formRef = useRef(null);

  const [data, setData] = useState({
    nama: '',
    prodi: '',
    angkatan: '',
    no_urut: '',
    type: '',
    foto: null,
    visiMisi: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const years = [
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
    '2022',
    '2023',
    '2024'
  ];

  const options = {
    maxFileSize: 1024 * 1024,
    sources: ['local', 'url'],
    multiple: false,
    maxFiles: 1
  };

  const onSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);

    const request = fetch('/api/v1/calon', {
      method: 'POST',
      body: JSON.stringify(data)
    }).then(res => {
      if (!res.ok) {
        const error = res.json();
        return Promise.reject(error);
      } else {
        return Promise.resolve(res);
      }
    });

    toast.promise(request, {
      loading: 'Loading...',
      success: () => 'Berhasil menambahkan calon',
      error: () => `Gagal menambahkan calon`
    });

    request.finally(() => {
      path.refresh();
      formRef.current.reset();
      setData({});
      setIsLoading(false);
    });
  };

  return (
    <form ref={formRef} className="relative" onSubmit={onSubmit}>
      <div className="flex flex-col gap-4 max-w-lg m-auto">
        <div className="m-auto">
          {data.foto && (
            <Image
              className="relative"
              alt="foto calon"
              width={200}
              height={200}
              src={data.foto}
            />
          )}
        </div>
        <div>
          <Label>Upload Gambar</Label>
          <CldUploadWidget
            uploadPreset="kpu-fti-img"
            signatureEndpoint="/api/v1/upload/img"
            options={options}
            onSuccess={r => {
              setData({ ...data, foto: r.info.secure_url });
              toast.success('Berhasil mengupload foto');
            }}
          >
            {({ open }) => {
              return (
                <Button
                  className="w-full"
                  variant="outline"
                  type="button"
                  onClick={() => open()}
                >
                  Upload an Image
                </Button>
              );
            }}
          </CldUploadWidget>
        </div>
        <div>
          <Label>Nama Calon</Label>
          <Input
            onChange={e => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
            defaultValue={data.nama}
            name="nama"
            type="text"
            placeholder="Nama Calon"
          />
        </div>
        <div>
          <Label>No Urut</Label>
          <Select
            onValueChange={e => setData({ ...data, no_urut: e })}
            value={data.no_urut}
          >
            <SelectTrigger>
              <SelectValue placeholder="No Urut" />
            </SelectTrigger>
            <SelectContent>
              {['1', '2', '3', '4', '5', '6', '7', '8'].map(nomor => (
                <SelectItem key={nomor} value={nomor}>
                  {nomor}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Angkatan</Label>
          <Select
            onValueChange={e => setData({ ...data, angkatan: e })}
            value={data.angkatan}
          >
            <SelectTrigger>
              <SelectValue placeholder="Angkatan" />
            </SelectTrigger>
            <SelectContent>
              {years.map(year => (
                <SelectItem key={year} value={year}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Prodi</Label>
          <Select
            onValueChange={e => setData({ ...data, prodi: e })}
            value={data.prodi}
          >
            <SelectTrigger>
              <SelectValue placeholder="Prodi" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Teknik Informatika">
                Teknik Informatika
              </SelectItem>
              <SelectItem value="Sistem Informasi">Sistem Infromasi</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Type Calon</Label>
          <Select
            onValueChange={e => setData({ ...data, type: e })}
            value={data.type}
          >
            <SelectTrigger>
              <SelectValue placeholder="Type Pencalonan" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bem">BEM FTI</SelectItem>
              <SelectItem value="ti">HMP-TI</SelectItem>
              <SelectItem value="si">HMP-SI</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Visi & Misi</Label>
          <MinimalTiptapEditor
            name={data.visiMisi}
            onChange={visiMisi => setData({ ...data, visiMisi: visiMisi })}
            className="w-full"
            editorContentClassName="p-5"
            output="html"
            placeholder="Type your description here..."
            editable={true}
            editorClassName="focus:outline-none"
          />
        </div>
        <Button
          disabled={isLoading}
          onClick={onSubmit}
          type="submit"
          className="my-5"
        >
          {isLoading ? 'Loading...' : 'Tambah Calon'}
        </Button>
      </div>
    </form>
  );
};

export default AddCalon;
