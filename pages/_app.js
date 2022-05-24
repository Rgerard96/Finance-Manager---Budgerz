import Head from 'next/head';
import Header from '../components/Header';
import MenuBar from '../components/MenuBar';
import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <div
        className='font-primary flex flex-col h-screen relative'
        style={{ WebkitTapHighlightColor: 'transparent' }}
      >
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
          <meta
            name='apple-mobile-web-app-status-bar-style'
            content='black-translucent'
          />
          <meta
            name='viewport'
            content='initial-scale=1, viewport-fit=cover, user-scalable=no'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='196x196'
            href='/favicon-196.png'
          />
          <link rel='apple-touch-icon' href='/apple-icon-180.png' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <link
            rel='apple-touch-startup-image'
            href='/apple-splash-2048-2732.jpg'
            media='(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/apple-splash-2732-2048.jpg'
            media='(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/apple-splash-1668-2388.jpg'
            media='(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/apple-splash-2388-1668.jpg'
            media='(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/apple-splash-1536-2048.jpg'
            media='(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/apple-splash-2048-1536.jpg'
            media='(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/apple-splash-1668-2224.jpg'
            media='(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/apple-splash-2224-1668.jpg'
            media='(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/apple-splash-1620-2160.jpg'
            media='(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/apple-splash-2160-1620.jpg'
            media='(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/apple-splash-1284-2778.jpg'
            media='(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/apple-splash-2778-1284.jpg'
            media='(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/apple-splash-1170-2532.jpg'
            media='(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/apple-splash-2532-1170.jpg'
            media='(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/apple-splash-1125-2436.jpg'
            media='(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/apple-splash-2436-1125.jpg'
            media='(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/apple-splash-1242-2688.jpg'
            media='(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/apple-splash-2688-1242.jpg'
            media='(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/apple-splash-828-1792.jpg'
            media='(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/apple-splash-1792-828.jpg'
            media='(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/apple-splash-1242-2208.jpg'
            media='(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/apple-splash-2208-1242.jpg'
            media='(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/apple-splash-750-1334.jpg'
            media='(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/apple-splash-1334-750.jpg'
            media='(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/apple-splash-640-1136.jpg'
            media='(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/apple-splash-1136-640.jpg'
            media='(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
          />
        </Head>
        <Header />
        <div className='flex-1 flex flex-col sm:flex-row container mx-auto max-w-6xl p-5 mt-16 standalone:mt-24'>
          <main className='flex-1 sm:order-2 sm:ml-5 mb-20 sm:mb-0'>
            <Component {...pageProps} />
          </main>
          <MenuBar />
        </div>
      </div>
    </SessionProvider>
  );
}

export default MyApp;
