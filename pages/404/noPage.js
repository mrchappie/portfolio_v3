import Link from 'next/link';

import styles from './noPage.module.scss';

const noPage = () => {
  return (
    <section className={styles.missing__page}>
      <h1>Page not found</h1>
      <Link href="/">Return to Homepage</Link>
    </section>
  );
};

export default noPage;
