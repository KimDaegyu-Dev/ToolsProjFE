import styles from './Ready.module.css';

export const Ready = () => (
  <section className={styles.container}>
    <div>
      <strong>Oops!</strong>
      <span>출석체크가 아직 시작되지 않았어요</span>
      <button>시작하기</button>
    </div>
  </section>
);
