import {
  CashIcon,
  ChartBarIcon,
  CogIcon,
  HomeIcon,
  PlusIcon,
} from '@heroicons/react/outline';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function MenuBar() {
  const router = useRouter();
  const [active, setActive] = useState();
  return (
    <div className='bg-gray-100 rounded-lg p-5 mt-5 sm:mt-0 border border-gray-400 flex sm:flex-col items-center sm:items-start justify-around sm:justify-start sm:space-y-10 fixed left-5 bottom-5 right-5 sm:static'>
      <Link href='/'>
        <div className='cursor-pointer flex space-x-3 items-center text-gray-400 group'>
          <HomeIcon className='w-6 text-indigo-500 ' />
          <span className='hidden sm:block group-hover:text-indigo-500'>Home</span>
        </div>
      </Link>
      <Link href='/statistieken'>
        <div className='cursor-pointer flex space-x-3 items-center text-gray-400 group'>
          <ChartBarIcon className='w-6 text-gray-400' />
          <span className='hidden sm:block group-hover:text-indigo-500'>Statistieken</span>
        </div>
      </Link>
      <div className='sm:hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full p-3 -my-3'>
        <PlusIcon className='w-6 text-white' />
      </div>
      <Link href='/mijnoverzicht'>
        <div className='cursor-pointer flex space-x-3 items-center text-gray-400 group'>
          <CashIcon className='w-6 text-gray-400' />
          <span className='hidden sm:block group-hover:text-indigo-500'>Mijn overzicht</span>
        </div>
      </Link>
      <Link href='/instellingen'>
        <div className='cursor-pointer flex space-x-3 items-center text-gray-400 group'>
          <CogIcon className='w-6 text-gray-400' />
          <span className='hidden sm:block group-hover:text-indigo-500'>Instellingen</span>
        </div>
      </Link>
    </div>
  );
}
