import styles from './Header.module.css';
import Image from 'next/image';
import person from './static/person.svg';

const left = 68;
export const Header = () => (
  <div className={styles.container}>
    <div className={styles.user}>
      <Image src={person} alt="" />
      <span>14/30</span>
    </div>
    <div className={styles.code}>
      <span>Our Code is</span>
      <strong>040328</strong>
    </div>
    <div className={styles.btn}>
      <button>출석 종료</button>
      <span>
        {Math.floor(left / 60)
          .toString()
          .padStart(2, '0')}
        :{(left % 60).toString().padStart(2, '0')}
      </span>
    </div>
  </div>
);
