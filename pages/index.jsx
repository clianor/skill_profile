import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Intro from "../components/Intro";
import BasicInfo from "../components/BasicInfo";
import Career from "../components/Career";
import TechSpec from "../components/TechSpec";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>김덕현의 기술 소개서입니다</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <header className={styles.page_header}>
          <h1 className={styles.title}>김덕현</h1>
          <div className={styles.contents}>
            <div>부산광역시 강서구 신호산단 5 로 31</div>
            <div>010-5505-9416</div>
            <div>devlion@kakao.com</div>
          </div>
        </header>

        <section className={styles.page_section}>
          <Intro />
          <BasicInfo />
          <Career />
          <TechSpec />
        </section>
      </main>
    </div>
  )
}
