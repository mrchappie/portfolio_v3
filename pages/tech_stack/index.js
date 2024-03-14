import { userInformation } from '../api/userData';
import { motion } from 'framer-motion';

import styles from './techStackPage.module.scss';

const userTeckStack = userInformation.teckStack;

const htmlToBeInserted = Object.values(userTeckStack);

const techStack = () => {
  return (
    <section id="teck__stack" className={styles.tech__stack}>
      <div className={styles.heading}>{`<My Teck Stack/>`}</div>
      <div className={styles.description}>
        Technologies I've been working with recently
      </div>
      <ul className={styles.tech__list}>
        {htmlToBeInserted.map((tech, index) => (
          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.1 }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 0.9 }}
            transition={{ ease: 'linear', duration: 0.25, delay: 0.1 }}
            key={index}
            className={styles.tech__item}
          >
            <img src={tech} alt="" />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default techStack;
