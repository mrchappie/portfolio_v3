import styles from './techStackPage/techStackPage.module.scss';

const techStackPage = () => {
  return (
    <section id="teck__stack" className={styles.tech__stack}>
      <div className={styles.heading}>My Teck Stack</div>
      <div className={styles.description}>
        Technologies I've been working with recently
      </div>
      <ul className={styles.tech__list}>
        <li className={styles.tech__item}></li>
        <li className={styles.tech__item}></li>
        <li className={styles.tech__item}></li>
        <li className={styles.tech__item}></li>
        <li className={styles.tech__item}></li>
        <li className={styles.tech__item}></li>
        <li className={styles.tech__item}></li>
        <li className={styles.tech__item}></li>
        <li className={styles.tech__item}></li>
        <li className={styles.tech__item}></li>
      </ul>
    </section>
  );
};

export default techStackPage;
