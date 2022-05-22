import {
  CashIcon,
  ChartBarIcon,
  CogIcon,
  HomeIcon,
  PlusIcon,
} from '@heroicons/react/outline';
import React from 'react';
import Link from 'next/link';

export default function MenuBar() {
  return (
    <div className='bg-gray-100 rounded-lg p-5 mt-5 sm:mt-0 sm:border-none flex sm:flex-col items-center justify-around sm:justify-start sm:space-y-10 fixed left-5 bottom-5 right-5 sm:static'>
      <Link href='/'>
        <div className='cursor-pointer'>
          <HomeIcon className='w-6 text-indigo-500 ' />
        </div>
      </Link>
      <Link href='/'>
        <div className='cursor-pointer'>
          <ChartBarIcon className='w-6 text-gray-400' />
        </div>
      </Link>
      <div className='sm:hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full p-3 -my-3'>
        <PlusIcon className='w-6 text-white' />
      </div>
      <Link href='/'>
        <div className='cursor-pointer'>
          <CashIcon className='w-6 text-gray-400' />
        </div>
      </Link>
      <Link href='/'>
        <div className='cursor-pointer'>
          <CogIcon className='w-6 text-gray-400' />
        </div>
      </Link>
    </div>
  );
}
