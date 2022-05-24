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
  const [active, setActive] = useState();

  return (
    <div className='fixed sm:static bg-white left-0 bottom-0 right-0 px-5 pt-5 sm:p-0 pb-5 standalone:pb-7'>
      <div
        className={`bg-gray-100 rounded-lg p-5 border border-gray-400 sm:flex-col items-center sm:items-start justify-around sm:justify-start sm:space-y-10 ${
          router.pathname === '/inloggen'
            ? 'hidden'
            : router.pathname === '/registreren'
            ? 'hidden'
            : 'flex'
        }`}
      >
        <Link href='/'>
          <div className='cursor-pointer flex space-x-3 items-center text-gray-400 group'>
            <HomeIcon className='w-6 text-blue-500 ' />
            <span className='hidden sm:block group-hover:text-blue-500'>
              Home
            </span>
          </div>
        </Link>
        <Link href='/statistieken'>
          <div className='cursor-pointer flex space-x-3 items-center text-gray-400 group'>
            <ChartBarIcon className='w-6 text-gray-400' />
            <span className='hidden sm:block group-hover:text-blue-500'>
              Statistieken
            </span>
          </div>
        </Link>
        <div className='sm:hidden bg-gradient-to-r from-blue-500  to-red-500 rounded-full p-3 -my-3'>
          <PlusIcon className='w-6 text-white' />
        </div>
        <Link href='/mijnoverzicht'>
          <div className='cursor-pointer flex space-x-3 items-center text-gray-400 group'>
            <CashIcon className='w-6 text-gray-400' />
            <span className='hidden sm:block group-hover:text-blue-500'>
              Mijn overzicht
            </span>
          </div>
        </Link>
        <Link href='/instellingen'>
          <div className='cursor-pointer flex space-x-3 items-center text-gray-400 group'>
            <CogIcon className='w-6 text-gray-400' />
            <span className='hidden sm:block group-hover:text-blue-500'>
              Instellingen
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
