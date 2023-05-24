import styles from './projectCard.module.scss';

const projectCard = (props) => {
  return (
    <div className={styles.project__card}>
      <div className={styles.image}>
        <img src="https://picsum.photos/100" alt="" />
      </div>
      <div className={styles.project__content}>
        <div className={styles.title}>Project Title</div>
        <div className={styles.description}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod sunt
          enim vitae fugit eligendi consectetur nisi doloribus quos fugiat
          minus.
        </div>
        <div className={styles.project__tech__stack}>
          Tech stack:&nbsp;
          <span>&nbsp;HTML</span>
          <span>&nbsp;Javascript</span>
          <span>&nbsp;SASS</span>
          <span>&nbsp;Next.js</span>
        </div>
        <div className={styles.project__links}>
          <div className={styles.project__preview}>
            <a href="#">Live Preview</a>
          </div>
          <div className={styles.project__source__code}>
            <a href="#">View Code</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default projectCard;
