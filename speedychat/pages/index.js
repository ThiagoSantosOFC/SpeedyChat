import Head from 'next/head'
import prisma from '../lib/prisma';



export default function Home() {
  return (
    <div>
      <Head>
        <title>SpeedyChat</title>
        <meta name="description" content="SpeedyChat | The fastest web chat" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
    </div>
  )
}
