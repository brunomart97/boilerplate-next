import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Advanced Next - Boilerplate</title>
        <link rel="shortcut icon" href="/img/logo.svg" />
        <link rel="apple-touch-icon" href="/img/logo.svg" />
        <meta
          name="description"
          content="A advanced project starter to work with Next"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
