import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <div className='fixed top-0 left-0 right-0 bg-gradient-to-r from-blue-500  to-red-500 py-4 standalone:pt-11 text-white standalone:h-20'>
      <div className='max-w-5xl flex items-center justify-center sm:justify-between mx-auto'>
        <div className='font-bold text-xl'>Budgerz</div>
        <div className='hidden sm:block'>
          <ul className='flex space-x-8 '>
            <Link href='/'>
              <li className='cursor-pointer'>Home</li>
            </Link>
            <Link href='/statistieken'>
              <li className='cursor-pointer'>Statistieken</li>
            </Link>
            <Link href='/mijnoverzicht'>
              <li className='cursor-pointer'>Mijn overzicht</li>
            </Link>
            <Link href='/instellingen'>
              <li className='cursor-pointer'>Instellingen</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
