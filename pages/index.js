import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Featured from '../components/Featured';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant In Chittagong</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Featured />

    </div>
  )
}
