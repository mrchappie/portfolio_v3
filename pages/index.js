import styles from './homePage/homePage.module.scss';

const homePage = () => {
  return (
    <section className={styles.container}>
      <div className={styles.heading}>
        <div>Hi 👋, </div>
        <div>My name is</div>
        <div className={styles.username}>Alexandru BOSCU</div>
        <div>I build things for web</div>
      </div>
      <div className={styles.profile}>
        <img
          src="https://picsum.photos/200"
          alt="Alexandru Boscu Profile Picture"
        />
      </div>
    </section>
  );
};

export default homePage;
