import styles from './scrollDown.module.scss';

const scrollDown = () => {
  return (
    <div className={styles.scroll__down}>
      <img src="/assets/icons/arrow__scroll.svg" alt="scroll down arrow" />
    </div>
  );
};

export default scrollDown;
