import { CashIcon, ChartBarIcon, CogIcon, HomeIcon, PlusIcon } from '@heroicons/react/outline'
import React from 'react'

export default function MenuBar() {
  return (
    <div className='bg-gray-100 rounded-lg p-5 mt-5 sm:border-none flex sm:flex-col items-center justify-around sm:justify-start sm:space-y-10'>
      <div className=''>
        <HomeIcon className='w-6 text-gray-400' />
      </div>
      <div className=''>
        <ChartBarIcon className='w-6 text-gray-400' />
      </div>
      <div className='sm:hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full p-3 -my-3'>
        <PlusIcon className='w-6 text-white' />
      </div>
      <div className=''>
        <CashIcon className='w-6 text-gray-400' />
      </div>
      <div className=''>
        <CogIcon className='w-6 text-gray-400' />
      </div>
    </div>
  );
}
