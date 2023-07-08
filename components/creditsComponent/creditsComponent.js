import styles from './creditsComponent.module.scss';

const creditsComponent = () => {
  return (
    <p className={styles.credits}>
      Designed by{' '}
      <a
        className={styles.credits__designed}
        href="https://github.com/pavanmg007"
        target="_blank"
      >
        Pavan MG
      </a>{' '}
      and build by{' '}
      <a className={styles.credits__coded} href="">
        Alexandru BOSCU
      </a>{' '}
      with <span>Love</span> & <span>Coffee</span>
    </p>
  );
};

export default creditsComponent;
