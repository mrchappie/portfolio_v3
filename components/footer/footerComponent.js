import LogoComponent from '../logoComponent/logoComponent';
import SocialLinks from '../socialLinks/socialLinks';
import CreditsComponent from '../creditsComponent/creditsComponent';

import styles from './footerComponent.module.scss';
import Link from 'next/link';

const footerComponent = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.footer__contact}>
        <LogoComponent
          style={{ '-webkit-text-fill-color': '#a7a7a7' }}
        ></LogoComponent>
        <div className={styles.contact__options} style={{ color: '#a7a7a7' }}>
          <div className={styles.contact__options__phone}>+40771558180</div>
          <div className={styles.contact__options__email}>
            boscu20@gmail.com
          </div>
        </div>
        <SocialLinks style={{ fill: '#a7a7a7' }}></SocialLinks>
      </section>
      <div className={styles.divider}></div>
      <section className={styles.footer__navigation}>
        <ul className={styles.nav}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/tech_stack">Tech Stack</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <CreditsComponent></CreditsComponent>
      </section>
    </footer>
  );
};

export default footerComponent;
