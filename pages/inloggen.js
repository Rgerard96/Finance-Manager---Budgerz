import { useRouter } from 'next/router';
import React from 'react';

export default function inloggen() {
  const router = useRouter();
  return (
    <div className='max-w-lg mx-auto'>
      <h1 className='text-2xl font-bold my-10'>Inloggen</h1>
      <div className='space-y-5 mb-10'>
        <div className='flex flex-col space-y-2'>
          <label className='font-semibold'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            className='rounded-lg border border-gray-300 p-3 focus:outline-none focus:border-indigo-500'
          />
        </div>
        <div className='flex flex-col space-y-2'>
          <label className='font-semibold'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            className='rounded-lg border border-gray-300 p-3 focus:outline-none focus:border-indigo-500'
          />
        </div>
      </div>
      <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg font-bold py-3 text-center cursor-pointer mb-3' onClick={() => router.push('/')}>
        Inloggen
      </div>
      <div className='text-sm text-center w-full'>
Heb je nog geen account? 
<span className='text-indigo-500 font-bold cursor-pointer'  onClick={() => router.push('/registreren')}> Registreren</span>
      </div>
    </div>
  );
}
