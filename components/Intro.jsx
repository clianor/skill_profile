import styles from "../styles/Home.module.css";

export default function Intro() {
  return (
    <article className={styles.card}>
      <h2 className={styles.card_title}>Intro</h2>

      <div className={styles.card_contents}>
        <p>웹의 매력에 푹 빠진 주니어 개발자 김덕현입니다.</p>
        <p>더 좋은 방법이 있지 않을까 고민하고 따라가기보다는 주도적으로 나아가고자 합니다.</p>
        <p>또한 적절한 곳에 적절한 기술을 사용하기 위해 공부를 아끼지 않으며,
          업무에 필요하다면 새로운 기술에 거부감 없이 적극적으로 공부하여 최적의 결과를 위해 노력합니다.</p>
      </div>
    </article>
  )
}