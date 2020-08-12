import styles from "../styles/Home.module.css";

export default function Intro() {
  return (
    <article className={styles.card}>
      <h2 className={styles.card_title}>Intro</h2>

      <div className={styles.card_contents}>
        <p>제 프로필을 읽어주셔서 감사합니다.</p>
        <p>저는 항상 성장하고자 하는 욕망을 가지고 무엇이든 흡수하려 하는 개발자입니다.</p>
        <p>항상 최신 트렌드에 관심을 가지고 적절한 상황에 적절한 기술을 도입할 수 있게 하는 것을 좋아합니다.</p>
      </div>
    </article>
  )
}