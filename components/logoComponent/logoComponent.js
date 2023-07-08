import styles from './logoComponent.module.scss';

const logoComponent = (props) => {
  return (
    <h1 className={styles.logo} style={props.style}>
      {'<' + 'chappie' + '/>'}
    </h1>
  );
};

export default logoComponent;
