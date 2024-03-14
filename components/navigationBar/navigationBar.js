import LogoComponent from '../logoComponent/logoComponent';
import SocialLinks from '../socialLinks/socialLinks';
import styles from './navigationBar.module.scss';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const navigationBar = () => {
  const [body, setBody] = useState(null);
  useEffect(() => {
    setBody(document.querySelector('body'));
  }, []);

  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(!isMenuOpen);
    body.style.overflow = 'hidden';
  };

  const handleMenuClose = () => {
    setMenuOpen(!isMenuOpen);
    body.style.overflow = 'auto';
  };

  return (
    <header className={styles.header}>
      <div className={styles.menu} onClick={handleMenuOpen}>
        <img src="/assets/icons/menu__icon.svg" alt="menu button" />
      </div>
      <nav
        className={styles['navigation__bar']}
        style={{ right: isMenuOpen ? '0' : '-400px' }}
        id="navigation__bar"
      >
        <div className={styles.close} onClick={handleMenuClose}>
          <img
            src="/assets/icons/close-menu__icon.svg"
            alt="close menu button"
          />
        </div>
        <div>
          <LogoComponent></LogoComponent>
        </div>
        <ul className={styles.nav} onClick={handleMenuClose}>
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
        <div className={styles.socials}>
          <SocialLinks style={{ fill: '#666' }}></SocialLinks>
        </div>
      </nav>
    </header>
  );
};

export default navigationBar;
