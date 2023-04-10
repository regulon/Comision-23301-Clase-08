import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'
import Button from './_button'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Régulo</title>
        <meta name="description" content="Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <Button></Button>
        <h1 className={styles.title}>
          Ir a <a href="/about">About!</a>
        </h1>
          <p className={styles.description}>
            Get started by editing{''};
            <code className={styles.code}>src/pages/index.js</code>
          </p>
          
      </main>
      
    </div>
  )
}
