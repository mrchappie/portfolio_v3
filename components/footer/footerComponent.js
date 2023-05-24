import LogoComponent from '../logoComponent/logoComponent';
import SocialLinks from '../socialLinks/socialLinks';
import NavigationLinks from '../navigationBar/navigationLinks';
import CreditsComponent from '../creditsComponent/creditsComponent';

import styles from './footerComponent.module.scss';

const footerComponent = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.footer__contact}>
        <LogoComponent
          style={{ '-webkit-text-fill-color': '#42446e' }}
        ></LogoComponent>
        <div className={styles.contact__options} style={{ color: '#42446e' }}>
          <div className={styles.contact__options__phone}>+40771558180</div>
          <div className={styles.contact__options__email}>
            boscu20@gmail.com
          </div>
        </div>
        <SocialLinks style={{ fill: '#42446e' }}></SocialLinks>
      </section>
      <div className={styles.divider}></div>
      <section className={styles.footer__navigation}>
        <NavigationLinks
          style={{ fontSize: '16px', fontWeight: '400' }}
        ></NavigationLinks>
        <CreditsComponent></CreditsComponent>
      </section>
    </footer>
  );
};

export default footerComponent;
