import Head from 'next/head';
import Header from '../components/Header';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className='font-primary'>
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
      </Head>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
