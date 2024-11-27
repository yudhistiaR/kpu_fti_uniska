'use client';
import { Button } from '@/components/ui/button';

const Error = ({ reset }) => {
  return (
    <div className="w-full min-h-[400px] flex flex-col gap-2 items-center justify-center">
      <h2 className="text-2xl text-zinc-600">Soemthing went wrong!</h2>
      <Button variant="secondary" onClick={() => reset()}>
        Try again
      </Button>
    </div>
  );
};

export default Error;
