'use client';

import { APP_NAME } from '@/utils/constants';
import { useRef } from 'react';
import Link from 'next/link';

export default function Login() {
  const emailRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex h-screen w-full items-center justify-center border bg-red-100 text-orange-600">
      DASHBOARD in Progress !!!!!!
    </div>
  );
}
