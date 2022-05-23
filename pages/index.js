import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  return (
    <div className=''>
      <Head>
        <title>Budgerz</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

        <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg font-bold py-3 text-center cursor-pointer' onClick={() => router.push('/inloggen')}>
        Log in page
      </div>
    </div>
  );
}
