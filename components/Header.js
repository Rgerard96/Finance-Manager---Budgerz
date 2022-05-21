import React from 'react';
import { MenuAlt4Icon } from '@heroicons/react/outline';
import { UserCircleIcon } from '@heroicons/react/solid';

export default function Header() {
  return (
    <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-5 md:px-8 text-white font-bold text-xl fixed top-0 left-0 right-0'>
      <div className='container mx-auto flex justify-between'>
        <UserCircleIcon className=' w-7 sm:hidden' />
        <div>Budgerz</div>
        <MenuAlt4Icon className=' w-7 sm:hidden' />
        <div className='hidden sm:flex items-center space-x-3 font-normal'>
          <a>category</a>
          <a>category</a>
          <a>category</a>
          <a>category</a>
        </div>
      </div>
    </div>
  );
}
