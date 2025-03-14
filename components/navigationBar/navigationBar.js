import LogoComponent from '../logoComponent/logoComponent';
import SocialLinks from '../socialLinks/socialLinks';
import styles from './navigationBar.module.scss';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navigationBar = () => {
  const [body, setBody] = useState(null);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  useEffect(() => {
    setBody(document.querySelector('body'));
  }, []);

  const handleToggleMenu = (e) => {
    setMenuOpen(!isMenuOpen);
    body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
  };

  const handleShowOverlay = () => {
    setShowOverlay(!showOverlay);
    handleToggleMenu();
  };

  return (
    <header className={styles.header}>
      {showOverlay && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: 'linear', duration: 0.25, delay: 0.1 }}
          className={styles.overlay}
          onClick={handleToggleMenu}
        ></motion.div>
      )}
      <div className={styles.menu} onClick={handleShowOverlay}>
        <img src="/assets/icons/menu__icon.svg" alt="menu button" />
      </div>
      <nav
        className={styles['navigation__bar']}
        style={{ right: isMenuOpen ? '0' : '-400px' }}
        id="navigation__bar"
      >
        <div className={styles.close} onClick={handleShowOverlay}>
          <img
            src="/assets/icons/close-menu__icon.svg"
            alt="close menu button"
          />
        </div>
        <div>
          <LogoComponent></LogoComponent>
        </div>
        <ul
          className={styles.nav}
          onClick={() => {
            setShowOverlay(false);
            setMenuOpen(false);
          }}
        >
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
