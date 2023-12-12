import { LazyLoadImage } from 'react-lazy-load-image-component';
import { userInformation } from '../api/userData';

import styles from './techStackPage.module.scss';

const userTeckStack = userInformation.teckStack;

const htmlToBeInserted = Object.values(userTeckStack);

const techStack = () => {
  return (
    <section id="teck__stack" className={styles.tech__stack}>
      <div className={styles.heading}>{`<My Teck Stack/>`}</div>
      <div className={styles.description}>
        Technologies I've been working with recently
      </div>
      <ul className={styles.tech__list}>
        {htmlToBeInserted.map((tech, index) => (
          <li key={index} className={styles.tech__item}>
            <LazyLoadImage src={tech} alt="" />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default techStack;
