import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Instellingen() {
  const router = useRouter();
  return (
    <div className=''>
      <Head>
        <title>Budgerz</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1 className='text-xl font-bold mb-8'>Instellingen</h1>

      
      <div className='text-left space-y-8'>
        <p>Je bent nog niet ingelogd.</p>
        <div
          className='bg-gradient-to-r from-blue-500  to-red-500 text-white rounded-lg font-bold py-3 text-center cursor-pointer w-full max-w-sm px-4'
          onClick={() => router.push('/inloggen')}
        >
          Inloggen
        </div>
      </div>
    </div>
  );
}
