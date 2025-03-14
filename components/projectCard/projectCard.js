import styles from './projectCard.module.scss';

const projectCard = (props) => {
  return (
    <div className={styles.project__card}>
      <div className={styles.image}>
        <img src={props.poster} alt={props.title} />
      </div>
      <div className={styles.project__content}>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.project__tech__stack}>
          Techs:&nbsp;
          <span>{props.techStack}</span>
        </div>
        <div className={styles.project__links}>
          <div className={styles.project__preview}>
            <a href={props.liveDemo} target="_blank">
              Live Preview
            </a>
          </div>
          <div className={styles.project__source__code}>
            {props.sourceCode ? (
              <a href={props.sourceCode} target="_blank">
                Source Code
              </a>
            ) : (
              <span>Code Unavailable</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default projectCard;
