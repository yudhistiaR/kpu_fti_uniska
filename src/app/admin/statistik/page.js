'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const HasilSuara = dynamic(
  () =>
    import('@/components/admin/HasilSuara', {
      loading: () => <p className="text-2xl">Loading...</p>
    })
);

const StatistikPage = () => {
  const [countdown, setCountdown] = useState(0);
  const [type, setType] = useState('');

  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown(prev => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [type, countdown]);

  return (
    <div>
      <h1 className="text-2xl semibold">Hasil Suara E-Voting</h1>
      <div className="w-full h-full bg-white shadow-lg mt-4 rounded-lg p-4">
        <div className="m-auto w-full h-full mt-5">
          <Select
            onValueChange={e => {
              setType(e);
              setCountdown(10);
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Hitung Suara" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ti">HMP-TI</SelectItem>
              <SelectItem value="si">HMP-SI</SelectItem>
              <SelectItem value="bem">BEM FTI</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-full h-full mt-6">
          <div className="loading-text text-center">
            {countdown > 0 ? (
              <p className="text-xl font-bold">Menghitung Hasil Suara...</p>
            ) : (
              <HasilSuara type={type} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatistikPage;
