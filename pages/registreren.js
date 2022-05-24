import React from 'react';
import { useRouter } from 'next/router';

export default function Registreren() {
  const router = useRouter();
  return (
    <div className='max-w-lg mx-auto'>
      <h1 className='text-2xl font-bold my-10'>Registreren</h1>
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
          <label className='font-semibold'>Wachtwoord</label>
          <input
            type='password'
            name='password'
            id='password'
            className='rounded-lg border border-gray-300 p-3 focus:outline-none focus:border-indigo-500'
          />
        </div>
      </div>
      <div
        className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg font-bold py-3 text-center cursor-pointer mb-3'
        onClick={() => router.push('/')}
      >
        Registreren
      </div>
      <div className='text-sm text-center w-full'>
        Heb je al een account?
        <span
          className='text-indigo-500 font-bold cursor-pointer'
          onClick={() => router.push('/inloggen')}
        >
          {' '}
          Inloggen
        </span>
      </div>
    </div>
  );
}
