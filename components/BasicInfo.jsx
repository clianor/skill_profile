import styles from "../styles/Home.module.css";

export default function BasicInfo() {
  return (
    <article className={styles.card}>
      <h2 className={styles.card_title}>Basic info</h2>

      <div className={styles.card_contents}>
        <div className={styles.row}>
          <div className={styles.left_box}>
            <p>이름</p>
          </div>
          <div className={styles.right_box}>
            <p>김덕현</p>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.left_box}>
            <p>활동</p>
          </div>
          <div className={styles.right_box}>
            <div className={styles.row}>
              <p className={styles.left_box}>Github</p>
              <p className={styles.right_box}>https://github.com/clianor</p>
            </div>
            <div className={styles.row}>
              <p className={styles.left_box}>Portfoilo</p>
              <p className={styles.right_box}>https://clianor.github.io/portfolio/</p>
            </div>
            <div className={styles.row}>
              <p className={styles.left_box}>Blog</p>
              <p className={styles.right_box}>https://ejrgus94160.gitbook.io/oraclian/</p>
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.left_box}>
            <p>커뮤니티</p>
          </div>
          <div className={styles.right_box}>
            <div className={styles.row}>
              <p className={styles.left_box}>Jr.DevTalk 운영진</p>
              <p className={styles.right_box}>https://open.kakao.com/o/gHz2wN7</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}