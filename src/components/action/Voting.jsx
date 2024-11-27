'use client';

import { Button } from '../ui/button';
import { toast } from 'sonner';

import { useState } from 'react';

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

const VotingAction = ({ calon_id, npm }) => {
  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    setIsLoading(true);
    return await fetch(`/api/v1/voting`, {
      method: 'POST',
      body: JSON.stringify({ calon_id, npm })
    })
      .then(async res => {
        if (!res.ok) {
          const err = await res.json();
          return toast.error(err.message);
        }
        toast.success('Hak pilih berhasil digunakan');
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger className="w-full">
          <Button
            disabeld={isLoading}
            size="lg"
            className="w-full font-semibold"
          >
            Voting
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="max-w-sm">
          <AlertDialogHeader>
            <AlertDialogTitle>Apakah anda yankin?</AlertDialogTitle>
            <AlertDialogDescription>
              Hak pilih anda akan digunakan sekarang
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Batal</AlertDialogCancel>
            <AlertDialogAction
              disabeld={isLoading}
              onClick={onClick}
              size="lg"
              className="font-semibold"
            >
              {isLoading ? 'Loading...' : 'Voting'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default VotingAction;
