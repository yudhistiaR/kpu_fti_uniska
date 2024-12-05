'use client';

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
import { buttonVariants } from '../ui/button';
import { Trash2 } from 'lucide-react';
import { toast } from 'sonner';

import { useRouter } from 'next/navigation';

const DeleteCalon = ({ calonId }) => {
  const route = useRouter();

  const onClick = async () => {
    const request = fetch(`/api/v1/calon/${calonId}`, {
      method: 'DELETE'
    }).then(async res => {
      if (!res.ok) {
        const error = await res.json();
        return Promise.reject(error);
      } else {
        return Promise.resolve(res);
      }
    });

    toast.promise(request, {
      loading: 'Loading....',
      success: () => 'Berhasil menghapus data calon',
      error: err => err.message || 'Failed to delete data calon',
      finally: () => route.refresh()
    });
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger
        className={buttonVariants({ variant: 'destructive', size: 'icon' })}
      >
        <Trash2 />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            Apakah anda yakin ingin menghapus data Calon ini?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Tidak</AlertDialogCancel>
          <AlertDialogAction onClick={onClick}>Iya</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteCalon;
