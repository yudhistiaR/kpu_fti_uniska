'use client';

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

import Image from 'next/image';
import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const route = useRouter();
  const formRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [datas, setDatas] = useState({
    npm: '',
    password: ''
  });

  const onSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);

    return await fetch('/api/v1/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(datas)
    })
      .then(async res => {
        if (!res.ok) {
          const err = await res.json();
          toast.error(err.message);
        } else {
          route.push('/');
        }
      })
      .finally(() => {
        formRef.current.reset();
        setDatas({});
        setIsLoading(false);
      });
  };
  const onChange = e => {
    setDatas({ ...datas, [e.target.name]: e.target.value });
  };

  return (
    <Card>
      <CardHeader>
        <div className="mb-8 flex items-center space-x-2">
          <span>
            <Image
              src="/logo-kpu-fti.png"
              alt="logo-kpu-fti"
              width={60}
              height={60}
              loading="lazy"
            />
          </span>
          <span>
            <h1 className="text-md font-semibold antialiased">
              KPU FTI UNISKA
            </h1>
          </span>
        </div>
        <CardTitle className="text-2xl">Log In</CardTitle>
        <CardDescription>
          Silahkan login menggunakan akun SIA FTI UNISKA untuk melanjutkan
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form ref={formRef} onSubmit={onSubmit} className="space-y-4">
          <div>
            <Label>NPM</Label>
            <Input
              disabled={isLoading}
              required
              name="npm"
              defaultValue={datas?.npm}
              placeholder="NPM"
              onChange={onChange}
              type="number"
            />
          </div>
          <div>
            <Label>Password</Label>
            <Input
              disabled={isLoading}
              required
              name="password"
              defaultValue={datas?.password}
              placeholder="Password"
              onChange={onChange}
              type="password"
            />
          </div>
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full"
            size="lg"
          >
            {isLoading ? 'Loading...' : 'Log In'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default LoginPage;
