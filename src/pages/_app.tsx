import { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/global.scss';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React  - Boilerplate</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="stylesheet" href="/css/tailwind.css"></link>
        <meta name="description" content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"/>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
