import React from 'react';
import { MenuAlt4Icon } from '@heroicons/react/outline';
import { UserCircleIcon } from '@heroicons/react/solid';

export default function Header() {
  return (
    <div className='text-center fixed top-0 left-0 right-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-5 standalone:pt-0 text-white font-bold text-xl standalone:h-20'>
      Budgerz
    </div>
  );
}
