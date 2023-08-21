import Image from 'next/image'
import styles from './page.module.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Main from '@/components/Main/Main'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <Main/>
      <Footer/>
    </main>
  )
}
