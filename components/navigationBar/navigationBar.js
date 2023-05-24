import LogoComponent from '../logoComponent/logoComponent';
import NavigationLinks from './navigationLinks';
import SocialLinks from '../socialLinks/socialLinks';

import styles from './navigationBar.module.scss';

const navigationBar = () => {
  return (
    <nav className={styles['navigation__bar']}>
      <div className={styles.logo}>
        <LogoComponent></LogoComponent>
      </div>
      <NavigationLinks></NavigationLinks>
      <div className={styles.socials}>
        <SocialLinks style={{ fill: '#666' }}></SocialLinks>
      </div>
    </nav>
  );
};

export default navigationBar;
