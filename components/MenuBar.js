import {
  CashIcon,
  ChartBarIcon,
  CogIcon,
  HomeIcon,
  PlusIcon,
} from '@heroicons/react/outline';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function MenuBar() {
  const router = useRouter();
  const path = router.pathname.split('/')[1];

  console.log(path);

  return (
    <div className='fixed sm:static bg-white left-0 bottom-0 right-0 px-5 pt-5 sm:p-0 pb-5 standalone:pb-7'>
      <div
        className={`fixed left-0 bottom-0 right-0 border-t bg-white p-5 sm:flex-col items-center sm:items-start justify-around sm:justify-start sm:space-y-10 ${
          router.pathname === '/inloggen'
            ? 'hidden'
            : router.pathname === '/registreren'
            ? 'hidden'
            : 'flex'
        }`}
      >
        <div className='flex space-x-3 items-center text-gray-400 hover:text-blue-500'>
          <HomeIcon className='w-6' />
        </div>
        <div className='flex space-x-3 items-center text-gray-400 hover:text-blue-500'>
          <ChartBarIcon className='w-6' />
        </div>
        <div className='sm:hidden bg-gradient-to-r from-blue-500  to-red-500 rounded-full p-3 -my-3'>
          <PlusIcon className='w-6 text-white' />
        </div>
        <div className='flex space-x-3 items-center text-gray-400 hover:text-blue-500'>
          <CashIcon className='w-6' />
        </div>
        <div className='flex space-x-3 items-center text-gray-400 hover:text-blue-500'>
          <CogIcon className='w-6' />
        </div>
      </div>
    </div>
  );
}
