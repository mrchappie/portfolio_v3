import Link from 'next/link';

import styles from './navigationLinks.module.scss';

const navigationLinks = (props) => {
  return (
    <ul className={styles.nav}>
      <li style={props.style}>
        <Link href="/">Home</Link>
      </li>
      <li style={props.style}>
        <Link href="/about">About</Link>
      </li>
      <li style={props.style}>
        <Link href="/tech_stack">Tech Stack</Link>
      </li>
      <li style={props.style}>
        <Link href="/projects">Projects</Link>
      </li>
      <li style={props.style}>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  );
};

export default navigationLinks;
