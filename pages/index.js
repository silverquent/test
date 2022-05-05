import Head from 'next/head'
import Portfolio from './Portfolio'

export default function Home() {
  return (
    <body className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/css/main.css" />
      </Head>  
      <Portfolio/>
    </body>
  )
}
