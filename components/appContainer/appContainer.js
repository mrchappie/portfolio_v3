import styles from './appContainer.module.scss';

const appContainer = (props) => {
  return <div className={styles.container}>{props.children}</div>;
};

export default appContainer;
