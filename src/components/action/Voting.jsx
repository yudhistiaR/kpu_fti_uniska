'use client';

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
import { buttonVariants } from '../ui/button';

const VotingAction = ({ calon_id, npm }) => {
  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    setIsLoading(true);

    const request = fetch(`/api/v1/voting`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ calon_id, npm })
    }).then(async res => {
      if (!res.ok) {
        const error = await res.json();
        return Promise.reject(error);
      } else {
        return Promise.resolve(res);
      }
    });

    toast.promise(request, {
      loading: 'Loading...',
      success: () => 'Hak pilih anda berhasil digunakan',
      error: err => err.message || 'Failed to submit vote.'
    });

    request.finally(() => setIsLoading(false));
  };

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger
          disabeld={isLoading}
          size="lg"
          className={`${buttonVariants()} font-semibold w-full`}
        >
          Voting
        </AlertDialogTrigger>
        <AlertDialogContent className="max-w-xs">
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
