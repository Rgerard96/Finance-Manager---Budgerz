import Head from 'next/head';
import Header from '../components/Header';
import MenuBar from '../components/MenuBar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className='font-primary flex flex-col h-screen'>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;700&display=swap'
          rel='stylesheet'
        ></link>
        <link rel='manifest' href='manifest.json' />
      </Head>
      <Header />
      <div className='flex-1 flex flex-col sm:flex-row container mx-auto max-w-6xl p-5'>
        <main className='flex-1 sm:order-2 sm:ml-5'>
          <Component {...pageProps} />
        </main>
        <MenuBar />
      </div>
    </div>
  );
}

export default MyApp;
