import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant In Chittagong</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>HomePage</h1>
      <Image src="/img/telephone.png" alt="" height="50" width="50" />

    </div>
  )
}
