import Head from 'next/head'
import Portfolio from './Portfolio'
import Link from 'next/link'

export default function Home() {
  return (
    <body className="">
      <Head>
      
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/css/main.css" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
      </Head>  
      <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/Ip">
          <a>Ip</a>
        </Link>
      <Portfolio/>
    </body>
  )
}
